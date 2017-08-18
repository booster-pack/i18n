import { languagesCodes } from './language-codes';
import { regionCodes } from './region-codes';

export interface ILocale {
  language: languagesCodes;
  region?: regionCodes;
}
