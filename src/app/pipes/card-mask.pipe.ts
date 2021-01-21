import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})
export class CardMaskPipe implements PipeTransform {

  transform(value: string): unknown {
    const lengthOfCard = value.length;
    let lastFour = value.substring(lengthOfCard - 4);
    for (let i = 0; i < lengthOfCard - 4; i++) {
      lastFour = '*' + lastFour;
    }
    return lastFour;
  }

}
