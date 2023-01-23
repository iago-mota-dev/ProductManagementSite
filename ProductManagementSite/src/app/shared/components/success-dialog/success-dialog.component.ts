import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .example-pizza-party {
      color: rgb(30, 255, 1);
    }
  `,
  ],
})
export class SuccessDialogComponent {
  snackBarRef = inject(MatSnackBarRef);

}
