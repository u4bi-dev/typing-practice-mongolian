import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Key } from '../../models/key.model';
import { Howl } from 'howler';

@Component({
  selector: 'app-main-keyboard',
  templateUrl: './main-keyboard.component.html',
  styleUrls: ['./main-keyboard.component.css']
})
export class MainKeyboardComponent implements OnInit {

  @Input() alphabet: string[];
  @Input() key: Key;
 
  constructor() {
    
  }

  ngOnInit() {

  }
  
  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev:KeyboardEvent) {
         
    let element = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!element) return;

    if(element.textContent != this.alphabet[this.key.count]) element.classList.add('send-x');
    else{
      
      element.classList.add('send-o');
      
      let sound = new Howl({
        src: [`./assets/voice/alphabet/m_${this.key.count }.mp3`],
        html5 :true
      });

      sound.play();

      this.key.count !== this.alphabet.length-1 ? this.key.count++ : this.key.count = 0;
      
      this.bind.emit(this.key);
      
    }

  }


  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
         
    let element = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!element) return;

    element.classList.remove('send-o');
    element.classList.remove('send-x');

  }
  
  @Output() bind = new EventEmitter<Key>();

}
