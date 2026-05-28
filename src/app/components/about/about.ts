import { Component, signal } from '@angular/core';
import { FinanceService } from '../../service/finance.service';
import { StockChartComponent } from '../stock-chart.component/stock-chart.component';
import { FormsModule } from '@angular/forms';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [StockChartComponent, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  public selectedStock = signal('');
  errorMessage = signal('');
  stockData = signal<any>(null)


  stocks = [
    { symbol: 'IBM', name: 'International Business Machine'},
    { symbol: 'AAPL', name: 'Apple Inc.'},
    { symbol: 'GOOGL', name: 'Aphabet Inc.'},
    { symbol: 'MSFT', name: 'Microsoft Corporation'},
    { symbol: 'AMZN', name: 'Amazon.com Inc.'}
  ];

  constructor(private financeService: FinanceService) {}

  async fetchStockData() {

    try {
    const data = await lastValueFrom(this.financeService.getStockData(this.selectedStock()));
      this.stockData.set(data);
      this.errorMessage.set('');

    } catch(error) {
      this.errorMessage.set('Failed to fetch stock data. Please try again later.');
      console.log('Error fetching stock data:', error)
    }

    // this.financeService.getStockData(this.selectedStock()).subscribe({
    //   next: data => console.log('Stock data:', data),
    //   error: error => console.error('Error fetching staock data:', error)
    // });
  }
}
