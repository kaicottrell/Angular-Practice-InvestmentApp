import { Component } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [InvestmentResultsComponent, HeaderComponent, UserInputComponent]
})
export class AppComponent {}
