import { Pipe, PipeTransform } from '@angular/core';
import {IFinancialProduct} from '../models/financial-product';
import {Bank} from '../models/enum/bank.enum';

@Pipe({
  name: 'bankFilter'
})
export class BankFilterPipe implements PipeTransform {

  transform(value: IFinancialProduct[], onlyPurpleBank: boolean, productType = ''): IFinancialProduct[] {
    if (value){
      return value.filter((product) => {
        if (onlyPurpleBank) {
          if (productType !== ''){
            return product.product.issuer === Bank.purple && product.product.type === productType;
          } else {
            return product.product.issuer === Bank.purple;
          }
        } else {
          if (productType !== ''){
            return product.product.type === productType;
          } else {
            return product;
          }
        }
      });
    }
  }

}
