import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinanceService } from './service/finance.service';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
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
