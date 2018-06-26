import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heros: {
    name: string,
    power: number,
    universe: string
  }[];
  partialList:{
    name: string,
    power: number,
    universe: string
  }[];
  completeList:{
    name: string,
    power: number,
    universe: string
  }[];

  startPoint: number;
  endPoint: number;
  pageLimit: number =  3;

  constructor() {
    this.heros = [
      {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
      {name: 'dr.strange',
       power: 200,
       universe: 'MCU'},
      {name: 'black panther',
       power: 145,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
       {name: 'spiderman',
       power: 100,
       universe: 'MCU'},
                         
    ]; 
   }

  ngOnInit() {
    this.startPoint = 0;
    this.endPoint = this.startPoint + this.pageLimit;
    this.completeList = this.heros;
    this.partialList = this.completeList.slice(this.startPoint, this.endPoint);
  }

  nextButtonClick() {
    this.startPoint = this.endPoint;
    this.endPoint = this.endPoint + this.pageLimit;
    this.partialList = this.completeList.slice(this.startPoint, this.endPoint);
    return this.partialList;
  }

  previousButtonClick() {
    this.endPoint = this.startPoint;
    this.startPoint = this.startPoint - this.pageLimit;
    this.partialList = this.completeList.slice(this.startPoint, this.endPoint);
    return this.partialList;
  }

  isPreviousButtonDisable() {
    if (this.startPoint == 0){
      return true
    }else{
      return false
    }
  }
  isNextButtonDisable() {
    if (this.endPoint >= this.heros.length){
      return true
    }else{
      false
    }
  }

}
