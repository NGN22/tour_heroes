import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class HeroService {

    
  constructor(){


    }
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes
    
  }
  
}
