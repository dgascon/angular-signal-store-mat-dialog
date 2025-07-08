import { Component, inject, Injector } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/app-dialog.component';
import { CountStore } from './count-store';

@Component({
  selector: 'app-root',
  imports: [MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [CountStore]
})
export class AppComponent {
  dialogService = inject(MatDialog);
  countStore = inject(CountStore);
  injector = inject(Injector);

  open() {
    this.dialogService.open(DialogComponent, { injector: this.injector });
  }
}
