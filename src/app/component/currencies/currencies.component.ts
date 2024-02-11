import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../service/currency-service/currency.service";
import {CurrencyInterface} from "../../interface/currency/currencyInterface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.css'
})
export class CurrenciesComponent implements OnInit {
  currencyService: CurrencyService;
  currencies:CurrencyInterface[];

  constructor(currencyService: CurrencyService) {
    this.currencyService = currencyService;
  }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    })
  }
}
