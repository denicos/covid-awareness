import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { World } from '../Models/World'



@Injectable({
  providedIn: 'root'
})

export class CovidService {

  private world : any = []
  private AllCountries : any = []
  private SpecificCountry : any = []

constructor(private http : HttpClient) {


 }

 getGlobalInfo(){
  const url ='https://coronavirus-19-api.herokuapp.com/all'
  return this.http.get(url)
}

getForAllCountries () {
  const url =  'https://coronavirus-19-api.herokuapp.com/countries '
  return this.http.get(url)
  }


getForAspecificCountry(){
  const url = 'https://coronavirus-19-api.herokuapp.com/countries/uganda'
   return this.http.get(url)
  }
}

