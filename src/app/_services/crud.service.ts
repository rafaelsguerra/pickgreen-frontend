import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CrudService {

  apiUrl = 'http://pick-green-api.herokuapp.com/';

  constructor(private http: Http) { }

  getAll(route: string) {
    return this.http.get(this.apiUrl + route).map((response: Response) => response.json());
  }

  create(route: string, json: any) {
    return this.http.post(this.apiUrl + route, json).map((response: Response) => response.json());
  }

  update(route: string, json: any, id: number) {
    return this.http.put(this.apiUrl + route, id, json).map((response: Response) => response.json());
  }

  deleteById(route: string, id: number) {
    return this.http.delete(this.apiUrl + route, id).map((response: Response) => response.json());
  }

}
