import { Component, effect, input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { Chart, ChartDataset, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-stock-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './stock-chart.component.html',
  styleUrl: './stock-chart.component.css',
})
export class StockChartComponent {

  stockData = input<any>(null);
  lineChartData = signal<ChartDataset[]>([{ data: [], label: 'Stock Price'}]);
  lineChartLabels = signal<string[]>([]);

  // ngOnChanges(): void {
  //   console.log('Stock data changed:', this.stockData())
  // }

  constructor() { Chart.register(...registerables);
    
    effect(() => {
      const data = this.stockData();
      console.log('Stock data mudou detectado pelo effect:', data);
      
      if (data) {
        this.updateChart(data);
      }
    });

  }

  updateChart(data:any) {
    if(!this.stockData()) {
      return;
    }

    const dates = Object.keys(this.stockData());
    const prices = dates.map(date => parseFloat(this.stockData()[date]['4. close']));

    this.lineChartLabels.set(dates.reverse());
    this.lineChartData.set([{ data: prices.reverse(), label: 'Stock Price'}]);
  }


}
