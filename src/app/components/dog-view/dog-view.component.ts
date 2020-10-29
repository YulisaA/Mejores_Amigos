import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DogService } from '../../services/dog.service';
import { Dog } from "../../interfaces/Dog";
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-dog-view',
  templateUrl: './dog-view.component.html',
  styleUrls: ['./dog-view.component.css']
})
export class DogViewComponent implements OnInit {

  id: string;
  dog: Dog;

  constructor(
    private activatedRoute: ActivatedRoute, private router: Router, private dogService: DogService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.dogService.getSelectedDog(this.id)
      .subscribe(
        res => {
          this.dog = res;
        },
        err => console.log(err)
        /*res => console.log(res),
        err => console.log(err)*/
      )
    })
  }

  deleteDog(id: string){
    this.dogService.deleteDog(id)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/dogs'])
      },
      err=> console.log(err)
    )
  }

  updateDog(name: HTMLInputElement, description: HTMLInputElement, years: HTMLInputElement, months: HTMLInputElement): boolean{
    this.dogService.updateDog(this.id, name.value, description.value, years.value, months.value)
    .subscribe(
      res => {
        this.router.navigate(['/dogs'])
      },
      err => console.log(err)
    )
    return false;
  }
  
}
