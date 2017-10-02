import { Component, OnInit, Input } from '@angular/core';
import { Key } from '../../models/key.model';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  @Input() alphabet: string[];
  @Input() key: Key;

  constructor() { }

  ngOnInit() {
  }

}
