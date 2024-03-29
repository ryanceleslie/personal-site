import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Material imports
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Custom imports
import { ContactComponent } from './contact/contact.component';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ryan Celeslie';

  constructor(public dialog: MatDialog, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

  public async contactDetails(){
    const dialogRef = this.dialog.open(ContactComponent, {
      width: '300px'
    });

  }
}
