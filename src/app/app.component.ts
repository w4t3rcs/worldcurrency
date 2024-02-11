import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrenciesComponent} from "./component/currencies/currencies.component";
import {HttpClientModule} from "@angular/common/http";
import {ConverterComponent} from "./component/converter/converter.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrenciesComponent, HttpClientModule, ConverterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tableNeeded:boolean;

  ngOnInit(): void {
    this.tableNeeded = true;
  }

  changeTableState(): void {
    this.tableNeeded = !this.tableNeeded;
  }
}
