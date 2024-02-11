import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {CurrencyInterface} from "../../interface/currency/currencyInterface";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getCurrencyById(id:string): Observable<CurrencyInterface> {
    return this.httpClient.get<CurrencyInterface>("http://localhost:8080/" + id);
  }

  getCurrencies(): Observable<CurrencyInterface[]> {
    return this.httpClient.get<CurrencyInterface[]>("http://localhost:8080");
  }
}
