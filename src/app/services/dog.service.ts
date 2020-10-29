import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Dog} from '../interfaces/Dog'

@Injectable({
  providedIn: 'root'
})
export class DogService {

  serverURI = 'http://localhost:4000/api/dogs'

  constructor(private http: HttpClient) { }

  createDog(name: string, description: string, years: string, months: string, photo: File){
    const formDog = new FormData();
    formDog.append('name', name);
    formDog.append('description', description);
    formDog.append('years', years);
    formDog.append('months', months);
    formDog.append('photo', photo);
    return this.http.post(this.serverURI, formDog);
  }

  getSelectedDog(id: string){
    return this.http.get<Dog>(this.serverURI + '/' + id);
  }

  getDogs(){
    return this.http.get<Dog[]>(this.serverURI)
  }

  deleteDog(id: string){
    return this.http.delete(this.serverURI + '/' + id);
  }

  updateDog(id:string, name: string, description: string, years: string, months: string){
    return this.http.put(this.serverURI + '/' + id, {name, description, years, months});
  }

}

