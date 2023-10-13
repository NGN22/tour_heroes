import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'; 

import { HttpClient, HttpHeaders } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class HeroService {

    
  constructor(private messageService: MessageService){
    }
  
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroesService: fetched heroes');
    return heroes
    
  }
  
}
