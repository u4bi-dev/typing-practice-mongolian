import { Component, OnInit } from '@angular/core';
import { CoreService } from '../providers/core.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(public core : CoreService) { }

  ngOnInit() {
  }

}
