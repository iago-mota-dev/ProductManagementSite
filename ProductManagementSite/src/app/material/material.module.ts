import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatRadioModule} from '@angular/material/radio';

const MaterialComponents = [
  MatSlideToggleModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatInputModule,
  CurrencyMaskModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule,
  MatRadioModule
]

@NgModule({
  imports: [
    MaterialComponents
  ], exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
