import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {financialProducts} from './data';
import {IFinancialProduct} from '../models/financial-product';

@Injectable({
  providedIn: 'root'
})
export class FinancialProductService {

  constructor() { }


  getFinancialProducts(): Observable<HttpResponse<IFinancialProduct[]>> {
    return of(new HttpResponse({ status: 200, body:  financialProducts}));
  }
}
