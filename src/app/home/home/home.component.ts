import { Component, OnInit } from '@angular/core';
import {FinancialProductService} from '../../rest-api/financial-product.service';
import {IFinancialProduct} from '../../models/financial-product';
import {ProductTypes} from '../../models/enum/product-types.enum';
import {Bank} from '../../models/enum/bank.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userProducts: IFinancialProduct[];
  onlyPurpleBank = true;
  productTypes = ProductTypes;
  productCounters = {};
  productTypeFilter = '';

  constructor(private financialProductService: FinancialProductService) { }

  async ngOnInit(): Promise<void> {
    this.userProducts = await this.financialProductService.getFinancialProducts().toPromise()
      .then((products) => {
        this.countProducts(products.body);
        return products.body.sort((productA, productB) => {
          if (productA.product.type < productB.product.type) {
            return -1;
          }
          if (productA.product.type > productB.product.type) {
            return 1;
          }
          return 0;
        });
      });
  }

  showAnotherBanks(value: boolean): void{
    this.onlyPurpleBank = !value;
    this.productTypeFilter = '';
    this.countProducts(this.userProducts);
  }
  countProducts(products): void{
    this.productCounters[ProductTypes.currentAccount] = 0;
    this.productCounters[ProductTypes.creditCard] = 0;
    this.productCounters[ProductTypes.freeInvestmentLoan]  = 0;
    this.productCounters[ProductTypes.fixedTermDepositCertificate]  = 0;
    products.forEach((item) => {
      if (this.onlyPurpleBank) {
        if (item.product.issuer === Bank.purple) {
          this.classifyProduct(item);
        }
      } else {
        this.classifyProduct(item);
      }
    });
  }

  classifyProduct(product: IFinancialProduct): void {
    if (product.product.type === ProductTypes.currentAccount) {
      this.productCounters[ProductTypes.currentAccount] += 1;
    } else if (product.product.type === ProductTypes.creditCard) {
      this.productCounters[ProductTypes.creditCard] += 1;
    } else if (product.product.type === ProductTypes.freeInvestmentLoan){
      this.productCounters[ProductTypes.freeInvestmentLoan] += 1;
    } else {
      this.productCounters[ProductTypes.fixedTermDepositCertificate] += 1;
    }
  }

  filterByProductType(productType: string): void{
    if(this.productTypeFilter === productType){
      this.productTypeFilter = '';
    } else {
      this.productTypeFilter = productType;
    }
  }
}
