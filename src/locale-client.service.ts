import { ILocale } from './locale.interface';

export class LocalesClientService {
  public static ls(list: ILocale[]) {
    const locales = new Set();
    list.push({
      language: 'ALL',
      region: 'ALL',
    });

    for (const locale of list) {
      const isLocale = () => (locale.region ? `_${locale.region}` : '');
      locales.add(`${locale.language}${isLocale()}`);
    }

    return locales;
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
