import { ILocale } from './locale.interface';

// @Injectable()
export class LocalesClientService {
  public static ls(list: ILocale[]) {
    const locales = new Set();
    list.push({
      language: 'ALL',
      region: 'ALL',
    });
    // TODO(mharwood) allow support of union type of [] vs {} for language.
    // language: ['en', 'fr']
    // region: 'ca'
    for (const locale of list) {
      const isLocale = () => (locale.region ? `_${locale.region}` : '');
      locales.add(`${locale.language}${isLocale()}`);
    }

    return locales;
  }

  public static blackList() {
    // Stub
  }
}

// ############################################################
// TODO(mharwood) Test the set for full locales that aren't in database.
// TODO(mharwood) write whitelist and blacklisting at every level (or find
//    better solution.
// app.
// route .
// section.
// component.
// translation.
