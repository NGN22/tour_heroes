import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';
import { Observable ,of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messegeService: MessageService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(x => { this.heroes = x})
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // hero : Hero = {
  //   id:1,
  //   name: 'Windstorm'
  // };
}
