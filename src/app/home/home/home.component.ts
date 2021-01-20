import { Component, OnInit } from '@angular/core';
import {FinancialProductService} from '../../rest-api/financial-product.service';
import {IFinancialProduct} from '../../models/financial-product';
import {ProductTypes} from '../../models/enum/product-types.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProducts: IFinancialProduct[];
  onlyPurpleBank = true;
  productTypes = ProductTypes;

  constructor(private financialProductService: FinancialProductService) { }

  async ngOnInit(): Promise<void> {
    this.userProducts = await this.financialProductService.getFinancialProducts().toPromise()
      .then((products) => {
        return products.body;
      });
  }
}
