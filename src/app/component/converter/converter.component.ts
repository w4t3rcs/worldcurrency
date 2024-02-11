import {Component, OnInit} from '@angular/core';
import {CurrencyInterface} from "../../interface/currency/currencyInterface";
import {CurrencyService} from "../../service/currency-service/currency.service";
import {CurrenciesComponent} from "../currencies/currencies.component";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CurrenciesComponent, NgForOf, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit{
  currencyService: CurrencyService;
  currencyFrom: CurrencyInterface;
  currencyTo: CurrencyInterface;
  currencies: CurrencyInterface[];

  constructor(currencyService: CurrencyService) {
    this.currencyService = currencyService;
  }

  ngOnInit(): void {
    this.changeFrom("USD");
    this.changeTo("PLN");
    this.convertCurrency();
    this.currencyService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    })
  }

  changeFrom(id: string): void {
    this.currencyService.getCurrencyById(id).subscribe(currency => {
      this.currencyFrom = currency;
    })
  }

  changeTo(id: string): void {
    this.currencyService.getCurrencyById(id).subscribe(currency => {
      this.currencyTo = currency;
    })
  }

  convertCurrency(): number {
    const converted = this.currencyTo.value / this.currencyFrom.value;
    return  Math.round(converted * 100) / 100;
  }
}
