import { ky, Options } from "../../deps.ts";

function defaultErrorHandler(err: any) {
  console.log(new Error(err));
}

type NotNull<T> = T extends null ? never : T;

type ErrorHandler<R = void> = (...args: unknown[]) => R;

type HandledResponse<T, K extends (ErrorHandler | undefined) = undefined> =
K extends undefined
? NotNull<T>
: K extends ErrorHandler<infer Z>
? T | ReturnType<ErrorHandler<Z>>
: never

export abstract class Client<A>{
  
  options: Options | undefined;
  private errorHandler?: ErrorHandler<A>;

  constructor(
    options: Options,
    errorHandler?: ErrorHandler<A>) {
    this.options = options;
    this.errorHandler = errorHandler;
  }

  
  protected async sendRequest<K, T = object>(
    url: string,
    options?: Options,
    errorHandler?: ErrorHandler<K>
    ): Promise<HandledResponse<T, ErrorHandler<K>>>{
    try {
      const response = await ky.post(url, options ?? this.options).json<T>();
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

type Something = ErrorHandler<boolean>;

class TestClient extends Client<boolean> {
  async run() {
    const result = await this.sendRequest("hello", {}, () => true);
    return result;
  }
}
