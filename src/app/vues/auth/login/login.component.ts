import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private authS: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login:['', Validators.required],
      password: ['', Validators.required],
      resteConnecte:['', Validators.required]
    });

    document.body.className = 'hold-transition login-page';
  }
  ngOnDestroy() {
    document.body.className = 'skin-blue sidebar-mini';
  }

  onSubmit(){
    let mobile = this.loginForm.value.login;
    let password = this.loginForm.value.password;
    this.authS.login(mobile, password).subscribe(res=>{
      if (res && res.status === 200) {
        location.replace('/compte/dashboard');
      }else{
        this.router.navigate(['/auth']);
      }
    })
    // if (this.loginForm.value['condition'] = 1) {
    //   if(this.loginForm.value['password'] === this.loginForm.value['repassword']){
    //     this.authS.login(user).subscribe(res=>{
    //       if (res && res.status === 201) {
    //         alert('Votre compte a été créé avec succès !');
    //       } else {
    //         alert('Une erreur est survenue !');
    //       }
    //     });
    //   }else{
    //     alert('Les mots de passe ne sont pas identiques');
    //   }

    // } else {
    //   alert('Veuillez lire et accepter les Conditions Générales d\' Utilisations ');
    // }
    
  }

}
