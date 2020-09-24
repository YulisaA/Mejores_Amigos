import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  serverURI = 'http://localhost:4000/dogs'

  constructor(private http: HttpClient) { }

  createDog(name: string, description: string, years: string, months: string, photo: File){
    const formDog = new FormData();
    formDog.append('name', name);
    formDog.append('description', description);
    formDog.append('years', years);
    formDog.append('months', months);
    formDog.append('photo', photo);
    //return this.http.post(this.serverURI, formDog);
  }

}

