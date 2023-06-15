import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //snack variable declare
  constructor(private snack:MatSnackBar){}

  // manually button created 
  btnclick(){
    console.log("btn click");
    this.snack.open("welcome to this app");
  }
}
