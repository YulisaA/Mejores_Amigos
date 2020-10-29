import { Component, OnInit } from '@angular/core';
import { DogService } from '../../services/dog.service';
import {Router} from '@angular/router';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private dogService: DogService, private router: Router) { }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Show image
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadInfo(name: HTMLInputElement, description: HTMLInputElement, years: HTMLInputElement, months: HTMLInputElement):boolean{
      //Send data to service
      this.dogService.createDog(name.value, description.value, years.value.toString(), months.value.toString(), this.file)
      .subscribe(res => {
        this.router.navigate(['/dogs']);
      }, err => console.log(err))
      return false;
  }

}
