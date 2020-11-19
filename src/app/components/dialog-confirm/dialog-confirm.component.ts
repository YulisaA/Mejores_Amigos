import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.css']
})
export class DialogConfirmComponent implements OnInit {

  
  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DialogConfirmComponent>) { }

  ngOnInit(): void {
  }

}
