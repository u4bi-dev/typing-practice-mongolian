import { Component, OnInit } from '@angular/core';
import { Key } from '../models/key.model';
import alphabet from '../mocks/mock-alphabet';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public alphabet : string[];
  public key : Key;

  constructor() {
    
    this.alphabet = alphabet.split('');
    
    this.key = {
      letter :'',
      count : 0
    };

  }

  ngOnInit() {
  }
  
  onAlphabet = ( val : Key) => this.key = val;

}
