import { Component, OnInit } from '@angular/core';
import { FormGroup, NgModel,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form!: FormGroup
  ngOnInit(){
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z0-9]+$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    })
  }
  submit(){
    console.log(this.form.value);
  }
}
