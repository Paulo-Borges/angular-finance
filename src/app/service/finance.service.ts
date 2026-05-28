import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FinanceService {

  private API_KEY = 'N9NAZ5DDWOYQXN4U';
  private BASE_URL = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) {}


  getStockData(symbol: string) {
    // const url = `${this.BASE_URL}?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apiKey=${this.API_KEY}`;
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo'

    return this.http.get(url).pipe(
      map((response: any) => {

        if(response.Information) {
          throw new Error(response.Information);
        }



        console.log('Fetched stock data:', response);
        return response['Monthly Time Series'];
      })
    );




    // const url = `${this.BASE_URL}?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apiKey=${this.API_KEY}`;
    // const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo'
    // return fetch(url)
    // .then(async response => {
    //   const data = await response.json();
    //   console.log('Fetched stock data:', data);
    //   return data['Monthly Time Series'];
    // })
    // .catch(error => console.log('Error fetching stock data:', error));
  }
}
