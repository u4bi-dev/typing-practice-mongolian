import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-keyboard',
  templateUrl: './main-keyboard.component.html',
  styleUrls: ['./main-keyboard.component.css']
})
export class MainKeyboardComponent implements OnInit {

  private textArray : string[];

  constructor() { }

  ngOnInit() {
    let text = 'ӨСЬВЗАШЕЭНГЮЧРЁУҮЖЯХПЩЙИТЫФЦЛДОМБ';
    this.textArray = text.split("");

  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev:KeyboardEvent) {
         
    let key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!key) return;

    // key.classList.add('send-o');
    key.classList.add('send-x');

  }


  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
         
    let key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    if(!key) return;

    // key.classList.remove('send-o');
    key.classList.remove('send-x');

  }

}
