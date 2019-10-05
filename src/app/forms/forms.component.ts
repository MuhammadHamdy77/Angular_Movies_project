import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

userContr:object[]=[];
userData = new FormGroup({
userName: new FormControl('',[Validators.required,Validators.minLength(6)]),
userAge: new FormControl('',[Validators.required,Validators.min(15),Validators.max(60)]),
userMail:new FormControl('',[Validators.required,Validators.email]),
userSalary:new FormControl('',[Validators.required]),
userPassword:new FormControl('',[Validators.pattern(/^[A-Za-z]{4,9}/)])
})

saveForm(){
  let user = {
  name : this.userData.controls.userName.value,
  age: this.userData.controls.userAge.value,
  salary:this.userData.controls.userSalary.value,
  mail: this.userData.controls.userMail.value,
  pass:this.userData.controls.userPassword.value
}
this.userContr.push(user);
localStorage.setItem('User Data', JSON.stringify(this.userContr));
}
  constructor() { }

  ngOnInit() {
  }

}
