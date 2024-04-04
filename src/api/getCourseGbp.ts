import { baseUrl, daily } from '@/utils/const';

export interface Response {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: Record<string, ValuteItem>;
}

export interface ValuteItem {
  CharCode: string;
  ID: string;
  Name: string;
  Nominal: number;
  NumCode: string;
  Previous: number;
  Value: number;
}

export const getCourseGbp = async (): Promise<number | undefined> => {
  try {
    const response = await fetch(`${baseUrl}/${daily}`);
    if (!response.ok) {
      throw new Error('нет ответа от сервера');
    }
    const responseData: Response = await response.json();

    let gbpNum;
    Object.values(responseData.Valute).forEach(item => {
      if (item.CharCode === 'GBP') {
        gbpNum = Math.round(item.Value);
      }
    });
    if (gbpNum) {
      return gbpNum;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
