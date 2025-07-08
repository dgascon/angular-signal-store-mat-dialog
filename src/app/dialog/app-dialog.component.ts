import { Component, inject } from "@angular/core";
import { MatDialogActions, MatDialogClose, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { CountStore } from "../count-store";

@Component({
    selector: "app-dialog",
    templateUrl: "./app-dialog.component.html",
    imports: [MatDialogActions, MatDialogClose, MatDialogTitle],
})
export class DialogComponent {
    readonly dialogRef = inject(MatDialogRef<DialogComponent>);
    countStore = inject(CountStore);

    constructor() {
        this.countStore.incrementStore();
    }
}