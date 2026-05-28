import { Component } from '@angular/core';
import { FinanceService } from '../../service/finance.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  constructor(private financeService: FinanceService) {}

  fetchStockData() {
    this.financeService.getStockData('IBM').then(data => {
      // console.log('Stock data:', data);
    });
  }
}
