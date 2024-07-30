import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  frm_Login : FormGroup|any;
  value1: any;
  storedFormData : any;

  get Username(){return this.frm_Login.get("Username")}
  get Password(){return this.frm_Login.get("Password")}

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private messageService: MessageService,

  ){}

  ngOnInit(){

    const formData = sessionStorage.getItem('formData');
    this.storedFormData = formData ? JSON.parse(formData) : {};
    console.log(formData);
    console.log("@@@",this.storedFormData,"@@@");
    this.frm_Login=this.fb.group({
      Username: ['',Validators.required],
      Password: ['',[Validators.required]],
    })
  }

  isInvalid(controlName: string): boolean {
    const control = this.frm_Login.get(controlName);
    return control?.touched && control?.invalid;
  }



  enableSubmit() {
    if(
        this.Username.value &&
        this.Password.value
      )
      {return true}

      else{

        return false;
      }
    }

    isValidCredential(): boolean {
      return Object.keys(this.frm_Login.controls).every(key => {
        const control1 = this.frm_Login.get(key).value;
        const control2 = this.storedFormData[key];
        console.log("**************",control1,"**************");
        console.log("--------------",control2,"--------------");
        return control1 === control2;
      });
    }

    displayMessage(){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Credentials' });
    }

    onSubmit() {
      if (this.isValidCredential()) {
        console.log('Login successful');
        this.router.navigate(['/content']);
      } else {
        this.displayMessage()
        console.log('Invalid credentials');

      }
    }
}
