import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ServerService} from "../../server.service";
import { Response } from '@angular/http';

@Component({
  selector: 'app-carousel-seven',
  templateUrl: './carousel-seven.component.html',
  styleUrls: ['./carousel-seven.component.css']
})
export class CarouselSevenComponent implements OnInit {
  items_2: Array<any> = [];
  
  subscription: Subscription;
  constructor(private serverService: ServerService) {

  }

  ngOnInit() {

    this.subscription = this.serverService.getFilms().subscribe(
      (response:Response) => {
        const data = response.json();
        this.items_2 = data.films.film.splice(20, 10);

      },
      (error) => { console.log(error)}
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
