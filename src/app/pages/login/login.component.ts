import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', Validators.required),
    });
  }

  get controls() {
    return this.loginForm?.controls;
  }

  onSubmit() {
    if (this.loginForm?.invalid) {
      return;
    }

    this.authService.login(this.loginForm?.controls['username'].value, this.loginForm?.controls['password'].value)
      .subscribe(login => {
        this.router.navigate(['list'])
      })
  }
}
