import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackBar: MatSnackBar,
    private zone: NgZone
  ) { }

  // openSnackBar(message: string, ) {
  //   this._snackBar.open(message);
  // }
  public success(message = 'No tiene permisos para realizar esta accion!', action = 'cerrar', duration = 5000) {
    this.zone.run(() => {
        this._snackBar.open(
          message, 
          action, 
          { duration, panelClass: ['app-notification-success'] }
          );
        });
      }
      
      public error(message: string , action = 'cerrar', duration = 5000) {
        this.zone.run(() => {
          this._snackBar.open(
            message, 
            action, 
            { duration, panelClass: ['app-notification-error'] }
        );
    });
}
}
