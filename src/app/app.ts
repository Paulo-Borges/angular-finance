import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinanceService } from './service/finance.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-finance');

  constructor(private financeService: FinanceService) {}

  fetchStockData() {
    this.financeService.getStockData('IBM').then(data => {
      // console.log('Stock data:', data);
    });
  }
}
