import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  animations: [
    trigger('slideInFromTop', [
      state('void', style({ transform: 'translateY(-100%)', opacity: 0 })),
      transition('void <=> *', [
        animate('500ms ease-out')
      ])
    ]),
    trigger('slideInFromBottom', [
      state('void', style({ transform: 'translateY(100%)', opacity: 0 })),
      transition('void <=> *', [
        animate('500ms ease-out')
      ])
    ])
  ]
})
export class SignUpComponent {

  frm_SignUp : FormGroup|any;
  value1: any;

  showTopContent = false;
  showBottomContent = false;

  get Username(){return this.frm_SignUp.get("Username")}
  get Password(){return this.frm_SignUp.get("Password")}
  get ConfirmPassword(){return this.frm_SignUp.get("ConfirmPassword")}


  constructor(
    private fb : FormBuilder,
    private router: Router,
  ){}

  ngOnInit(){

    setTimeout(() => {
      this.showTopContent = true;
      this.showBottomContent = true;
    }, 200);


    this.frm_SignUp=this.fb.group({
      Username: ['',Validators.required],
      Password: ['',Validators.required],
      ConfirmPassword: ['',Validators.required]}
      ,{validators : this.passwordMatch}
    );
  }

  passwordMatch(formGroup: FormGroup):void{
    const password = formGroup.get('Password');
    const cpassword = formGroup.get('ConfirmPassword');
    if(password && cpassword && (password.value != cpassword.value)){
      cpassword.setErrors({PasswordMismatch : true})
    }
  }

  onSubmit() {
    sessionStorage.setItem('formData', JSON.stringify(this.frm_SignUp.value));
    this.router.navigate(['/login']);
}

enableSubmit() {
  if(
      this.Username.value && !this.Username.invalid &&
      this.Password.value && !this.Password.invalid &&
      this.ConfirmPassword.value && !this.ConfirmPassword.invalid
    )
    {return true}

    else{
      return false;
    }
  }
}







