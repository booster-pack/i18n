import { pathExists } from 'fs-extra';
import { ILocale } from './locale.interface';

const JS_EXT = '.js';
const TS_EXT = '.ts';

export class LocalesServerService {
  public static async ls(path: string): Promise<{ locales: ILocale }> {
    const reqPath: string = `${process.cwd()}/src/${path}`;
    let filePath: boolean;

    if (reqPath.endsWith(JS_EXT) || reqPath.endsWith(TS_EXT)) {
      filePath = await pathExists(reqPath);
    } else {
      throw new Error(
        `Did your Path: ${reqPath} has no or an unknown extension`
      );
    }

    if (filePath) {
      return await require(LocalesServerService.dropExt(reqPath));
    } else {
      throw new Error(`No file at path: ${reqPath}`);
    }
  }

  private static dropExt(path: string, len: number = JS_EXT.length): string {
    return path.slice(0, -len);
  }
}
