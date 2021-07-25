import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { CovidService } from '../services/covid.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-world-statistics',
  templateUrl: './world-statistics.component.html',
  styleUrls: ['./world-statistics.component.scss']
})

export class WorldStatisticsComponent implements OnInit {
 @ViewChild('barCanvas') private barCanvas: ElementRef;
 world : any;
 countries : any;
 barchart : any
  constructor(private covid: CovidService) { }

  ngOnInit() {
    this.covid.getGlobalInfo().subscribe(
       data=>{
         this.world=data;
         console.log(data)
       }

    );


    this.covid.getForAllCountries().subscribe(
      data=> {
        this.countries = data;
        console.log(data)
      }
    )

  }


}
