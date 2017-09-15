import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
