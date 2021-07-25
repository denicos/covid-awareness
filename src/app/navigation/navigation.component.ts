import { Component, OnInit, Injectable } from '@angular/core';
import { CovidService } from '../services/covid.service';

import { World} from '../Models/World';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public world : any =[]
  constructor(private Covid : CovidService) { }

  ngOnInit() {
    this.world  = [this.Covid.getGlobalInfo()]
  console.log(this.world)

  }


}
