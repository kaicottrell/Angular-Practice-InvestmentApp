import { Component, inject } from '@angular/core';
import { InvestmentResultsService } from './investment-results.service';
import { InvestmentYearRecord } from './investment-year-record.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  investmentService = inject(InvestmentResultsService);
  // does not work -- static does not change during the lifecycle of a component
   // investmentResultRecords = this.investmentService.getInvestmentResultRecords();

   //works
  get investmentResultRecords(){
    return this.investmentService.investmentResultRecords;
  }

}
