import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SignupComponent} from './singup/signup.component';
import {SigninComponent} from './singin/signin.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
