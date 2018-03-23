import { Component, OnInit, OnDestroy } from '@angular/core';
import {ServerService} from "../../server.service";
import { Response } from '@angular/http';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  data:any =[];
  firstMovie:any = "";
  movies: any = [];
  subscription: Subscription;
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.subscription = this.serverService.getFilms().subscribe(
      (response:Response) => {
        const data = response.json();
        this.data = data;
        this.firstMovie = this.data.films.film[0];
        this.movies = this.data.films.film.splice(1, 6);
        console.log(this.movies);
      },
      (error) => { console.log(error)}
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
