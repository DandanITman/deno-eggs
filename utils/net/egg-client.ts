import { ky, Options, ResponsePromise } from "../../deps.ts";

function defaultErrorHandler(err: any) {
  console.log(new Error(err));
}

type NotNull<T> = T extends null ? never : T;

type ErrorHandler<R = unknown> = (...args: any[]) => R;

type HandledResponse<T, K extends (ErrorHandler | undefined) = undefined> =
K extends undefined
? NotNull<T>
: K extends ErrorHandler<infer Z>
? T | ReturnType<ErrorHandler<Z>>
: never

export abstract class Client{
  
  options: Options | undefined;

  constructor(
    options: Options,
    ) {
    this.options = options;
  }

  protected get = async <ErrorType=unknown, ResponseType=object>(
    url: string,
    options?: Options,
    errorHandler?: ErrorHandler<ErrorType>
    ): Promise<HandledResponse<ResponseType, ErrorHandler<ErrorType>> | Error> =>
    await this.handleError(
      async () => await ky.get(url, options ?? this.options).json<ResponseType>(),
      errorHandler)
  
  protected getRaw = async <ErrorType=void>(
    url: string,
    options?: Options,
    errorHandler?: ErrorHandler<ErrorType>
    ): Promise<HandledResponse<ResponsePromise, ErrorHandler<ErrorType>> | Error> =>
    await this.handleError(
      async () => await ky.get(url, options ?? this.options),
        errorHandler)

  protected postRaw = async <ErrorType=void>(
    url: string,
    options?: Options,
    errorHandler?: ErrorHandler<ErrorType>
    ): Promise<HandledResponse<ResponsePromise, ErrorHandler<ErrorType>> | Error> =>
    await this.handleError(
      async () => await ky.post(url, options ?? this.options),
        errorHandler)

  protected post = async <ErrorType=void, ResponseType=object>(
    url: string,
    options?: Options,
    errorHandler?: ErrorHandler<ErrorType>
    ): Promise<HandledResponse<ResponseType, ErrorHandler<ErrorType>> | Error> =>
    await this.handleError(
      async () => await ky.post(url, options ?? this.options).json<ResponseType>(),
      errorHandler)

  private handleError = async <ErrorType, ResponseType>(callback: () => ResponseType, handler?: ErrorHandler<ErrorType>): Promise<Error | ErrorType | ResponseType> => {
    try {
      return await callback();
    } catch (err) {
      return (handler) ? await handler(err) : new Error(err);
    }
  }
}
