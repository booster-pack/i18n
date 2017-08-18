import { exec } from 'child_process';


export class Compile {
  public static async compile(path): Promise<any> {
    const jsExt = '.js';

    if (path.endsWith(jsExt)) {
      throw new Error('angular-cli.json locationSource should be a' +
        ' typescript file')
    } else {
      return await exec(`tsc ${process.cwd()}/src/${path}`);
    }
  }
}
