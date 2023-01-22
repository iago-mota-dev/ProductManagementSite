import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ConfirmationDialogComponent,  {
      width: '20%'
    });
  }
}
