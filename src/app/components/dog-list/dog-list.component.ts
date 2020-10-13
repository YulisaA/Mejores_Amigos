import { Component, OnInit } from '@angular/core';
import { DogService } from "../../services/dog.service";

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs = [];
  constructor(private dogService : DogService) { }

  ngOnInit() {
    this.dogService.getDogs()
    .subscribe(
      res=> {
        this.dogs = res;
      },
      err => console.log(err)
    )
  }

}
