import { Component, OnInit } from '@angular/core';
import {Hero} from "../heroes/hero" ;
import {Pipe,PipeTransform} from "@angular/core"
import { HEROES } from '../heroes/mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  // hero:Hero ={id :1,name:"windStrom"}
  heroes = HEROES;
  Selecthero: Hero;

  constructor() { }

  ngOnInit() {
  }
  SelectHero(hero:Hero){
    this.Selecthero=hero
    console.log('hhhhhh',this.Selecthero.name)
  }
}
