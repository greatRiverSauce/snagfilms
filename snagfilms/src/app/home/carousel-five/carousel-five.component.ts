import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ServerService} from "../../server.service";
import { Response } from '@angular/http';
@Component({
  selector: 'app-carousel-five',
  templateUrl: './carousel-five.component.html',
  styleUrls: ['./carousel-five.component.css']
})
export class CarouselFiveComponent implements OnInit, OnDestroy {
  items_1: Array<any> = [];

  subscription: Subscription;
  constructor(private serverService: ServerService) {

  }

  ngOnInit() {

    this.subscription = this.serverService.getFilms().subscribe(
      (response:Response) => {
        const data = response.json();
        console.log(data);
        this.items_1 = data.films.film.splice(10, 10);

      },
      (error) => { console.log(error)}
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
