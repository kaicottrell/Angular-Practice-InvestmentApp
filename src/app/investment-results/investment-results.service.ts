import { InvestmentYearRecord } from './investment-year-record.model';
import { InvestmentUserInput } from '../user-input/user-input.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InvestmentResultsService {
  private annualData: InvestmentYearRecord[] = [];
  calculateInvestmentResults(investmentUserInputDto: InvestmentUserInput) {
    this.annualData = [];
    if (
      !investmentUserInputDto ||
      investmentUserInputDto.annualInvestment == null ||
      investmentUserInputDto.duration == null ||
      investmentUserInputDto.expectedReturn == null ||
      investmentUserInputDto.initialInvestment == null
    ) {
      return; // missing data
    }

    let investmentValue: number = investmentUserInputDto.initialInvestment;

    for (let i = 0; i < investmentUserInputDto.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investmentUserInputDto.expectedReturn / 100);

      investmentValue +=
        interestEarnedInYear + investmentUserInputDto.annualInvestment;
      const totalInterest =
        investmentValue -
        investmentUserInputDto.annualInvestment * year -
        investmentUserInputDto.initialInvestment;

      this.annualData.push({
        year: year,
        interestYear: interestEarnedInYear,
        investmentValue: investmentValue,
        totalInterest: totalInterest,
        investedCapital:
          investmentUserInputDto.initialInvestment +
          investmentUserInputDto.annualInvestment * year,
      });
    }
  }
  get investmentResultRecords() {
    return this.annualData;
  }
}
