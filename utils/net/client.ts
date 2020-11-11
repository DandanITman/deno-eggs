import { ky, Options } from "../../deps.ts";

function isString(val: any): val is string {
  if (typeof val == "string") {
    return true;
  } else {
    return false;
  }
}

export abstract class Client{
  
  options: Options | undefined;
  decoder = new TextDecoder("utf-8");

  constructor(options: Options) {
    this.options = options;
  }

  
  protected sendRequest<T>(url: string, options?: Options): Promise<T> {
    return ky.post(url, options ?? this.options).json<T>();
  }

}
