import { Pipe, PipeTransform } from '@angular/core';
import alphabet from '../mocks/mock-alphabet';

@Pipe({
  name: 'screenLetter'
})
export class ScreenLetterPipe implements PipeTransform {

  public alphabet : string[];
  
  constructor(){
    this.alphabet = alphabet.split('');    
  }
  
  transform = (count: number, tick: number): any => (count + tick) < 0 ? '' : this.alphabet[count + tick];
  

}
