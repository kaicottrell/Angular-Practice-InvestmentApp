import { Component } from '@angular/core';
import { InvestmentUserInput } from './user-input.model';
import { InvestmentResultsService } from '../investment-results/investment-results.service';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    userInput : InvestmentUserInput = {initialInvestment: null, annualInvestment: null, expectedReturn: null, duration: null};

    constructor(private investmentService: InvestmentResultsService){ }

    calculateInvestment(){
      this.investmentService.calculateInvestmentResults(this.userInput);
    }

}
