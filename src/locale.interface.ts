import { languagesCodes } from './language-codes';
import { regionCodes } from './region-codes';

export interface ILocale {
  language: languagesCodes; // TODO(mharwood) let this be a union of an array.
  region?: regionCodes;
}
