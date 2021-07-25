import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-uganda',
  templateUrl: './uganda.component.html',
  styleUrls: ['./uganda.component.scss']
})
export class UgandaComponent implements OnInit {
 uganda : any;
  constructor(private covid: CovidService) { }

  ngOnInit() {
    this.covid.getForAspecificCountry().subscribe(
      data=>{
        this.uganda=data;
        console.log(data)
      }

   );
  }

}
