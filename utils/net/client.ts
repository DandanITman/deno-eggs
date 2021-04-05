import { ky, Options } from "../../deps.ts";

function defaultErrorHandler(err: any) {
  console.log(new Error(err));
}

type NotNull<T> = T extends null ? never : T;

type ErrorHandler<R> = (...args: unknown[]) => R;

type HandledResponse<T, K extends (ErrorHandler<unknown> | undefined) = undefined> =
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

  protected async sendRequest<ErrorType, ResponseType=object>(
    url: string,
    options?: Options,
    errorHandler?: ErrorHandler<ErrorType>
    ): Promise<HandledResponse<ResponseType, ErrorHandler<ErrorType>>>{
    try {
      const response = await ky.post(url, options ?? this.options).json<ResponseType>();
      return response;
    } catch (err) {
      const handle = errorHandler // ?? this.errorHandler
      if (handle) {
        return handle(err);
      } else {
        throw new Error(err);
      }
    }
  }
}
