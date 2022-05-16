import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pokemon-app';

  pokemons:Pokemon[] = [];
  httpClient:HttpClient;

  constructor(httpClient:HttpClient) {
    this.httpClient = httpClient;

    this.httpClient.get("http://localhost:8080/pokemons/")
        .subscribe(dataJson => this.pokemons = dataJson as Pokemon[]);
  }


}
