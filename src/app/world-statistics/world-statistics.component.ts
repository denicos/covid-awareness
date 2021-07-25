import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { CovidService } from '../services/covid.service';
import { Subject  } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-world-statistics',
  templateUrl: './world-statistics.component.html',
  styleUrls: ['./world-statistics.component.scss']
})

export class WorldStatisticsComponent implements OnInit, OnDestroy {
 @ViewChild('barCanvas') private barCanvas: ElementRef;
 world : any;
 countries : any;
 barchart : any

 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject<any>();

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
        this.dtTrigger.next();
        console.log(data)
      }
    )

  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}


