import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ServerService{
  constructor(private http: Http) {

  }
  getFilms() {
    return this.http.get('//www.snagfilms.com/apis/films.json');
  }
}
