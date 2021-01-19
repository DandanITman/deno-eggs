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

  
  protected async sendRequest<T>(url: string, options?: Options, errorHandler?: Function): Promise<T | undefined> {
    try {
      return await ky.post(url, options ?? this.options).json<T>();
    } catch (err) {
      const handle = errorHandler ?? this.errorHandler
      if (handle) {
        handle(err);
      } else {
        throw new Error(err);
      }
    }
  }
}
 