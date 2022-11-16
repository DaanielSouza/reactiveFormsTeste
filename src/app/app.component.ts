import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'reactiveFormsTeste';

  myForm = new FormGroup({
    name: new FormControl("",Validators.required),
    address: new FormControl("",Validators.required),
  });

  constructor(private router: Router){ }

  goToPage2(){
    this.router.navigate(['page2','3']);
  }

  onSubmit(){
    console.log(this.myForm.value);
  }
}
