import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    ConfirmationDialogComponent,
    SuccessDialogComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
