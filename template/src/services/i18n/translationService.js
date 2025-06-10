import axios from 'axios';

const GOOGLE_SHEET_ID = 'GOOGLE_SHEET_ID';
const GOOGLE_SHEET_API_KEY = 'GOOGLE_SHEET_API_KEY';

const langSymbol = {
  en: 'B',
  ru: 'C',
};

let keys = [];

const getTranslation = async locale => {
  let response;
  let data;
  let values;
  try {
    if (keys.length) {
      response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values:batchGet?ranges=Sheet1!${langSymbol[locale]}:${langSymbol[locale]}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=COLUMNS&key=${GOOGLE_SHEET_API_KEY}`,
      );
      data = await response.data;
      values = data.valueRanges[0].values[0];
    } else {
      response = await axios.get(
        `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values:batchGet?ranges=Sheet1!A:A&ranges=Sheet1!${langSymbol[locale]}:${langSymbol[locale]}&valueRenderOption=UNFORMATTED_VALUE&majorDimension=COLUMNS&key=${GOOGLE_SHEET_API_KEY}`,
      );
      data = await response.data;
      values = data.valueRanges[1].values[0];
    }

    keys = keys.length ? keys : data.valueRanges[0].values[0];

    const result = {};

    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = values[i];
    }

    return result;
  } catch (e) {
    console.log(e, e.config.url);
  }
};

export { getTranslation };
