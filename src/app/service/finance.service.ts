import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {

  private API_KEY = 'N9NAZ5DDWOYQXN4U';
  private BASE_URL = 'https://www.alphavantage.co/query';


  getStockData(symbol: string) {
    // const url = `${this.BASE_URL}?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apiKey=${this.API_KEY}`;
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo'
    return fetch(url)
    .then(async response => {
      const data = await response.json();
      console.log('Fetched stock data:', data);
      return data;
    })
    .catch(error => console.log('Error fetching stock data:', error));
  }
}
