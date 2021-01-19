import { ky, Options } from "../../deps.ts";

function defaultErrorHandler(err: any) {
  console.log(new Error(err));
}

export abstract class Client{
  
  options: Options | undefined;
  private errorHandler: Function;

  constructor(
    options: Options,
    errorHandler: Function = defaultErrorHandler) {
    this.options = options;
    this.errorHandler = errorHandler;
  }

  
  protected async sendRequest<T, K>(url: string, options?: Options, errorHandler?: (...args: unknown[]) => K): Promise<T | K> {
    try {
      return await ky.post(url, options ?? this.options).json<T>();
    } catch (err) {
      const handle = errorHandler ?? this.errorHandler
      if (handle) {
        return handle(err);
      } else {
        throw new Error(err);
      }
    }
  }
}
 