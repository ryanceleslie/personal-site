import { Component } from '@angular/core';

// Material Imports
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public dialogRef: MatDialogRef<ContactComponent>){}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
