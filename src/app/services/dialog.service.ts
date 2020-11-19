import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogConfirmComponent } from '../components/dialog-confirm/dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

   openConfirmDialog(msg){
    return this.dialog.open(DialogConfirmComponent,{
      width: '390px',
      disableClose: true,
      data:{
        message: msg
      }
    });
  }
}
