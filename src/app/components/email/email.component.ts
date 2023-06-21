import { Component } from '@angular/core';


@Component({

  selector: 'app-email',

  templateUrl: './email.component.html',

  styleUrls: ['./email.component.css']

})

export class EmailComponent {

  constructor(){}

  data={
    to:"",

    subject:"",

    message:""
  }

  doSubmitForm()
  {

    console.log("try to submit form...")

    console.log("DATA ", this.data);

  }




}


