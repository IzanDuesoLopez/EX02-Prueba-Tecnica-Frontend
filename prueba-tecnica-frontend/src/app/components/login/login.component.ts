import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  resultados:any;
  token_final: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
    } else {
      this.onSubmit();
    }
  }

  onSubmit(): void {
    this.authService.getAuthenticationToken().subscribe(
      data => {
        this.resultados = data;
        this.token_final = this.resultados.request_token;

        //TOKEN
        console.log(this.token_final);
        this.tokenStorage.saveToken(this.token_final);
      },
      error => {
        console.log(error)
      }
    )
  }

  iniciarSesion(): void {
    const {username, password } = this.form;

    this.authService.login(username, password, this.token_final).subscribe(
      data => {
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
        this.router.navigate(['/home'])
      },
      error => {
        this.isLoginFailed = true;
        console.log(error);
      }
    )
  }

  reloadPage(): void {
    window.location.reload();
  }

}
