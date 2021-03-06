import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import CheckLogged from '../chekLogged.canActivate';
import { LoginAdminComponent } from './registrar/registrar.component';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular-6-social-login-v2";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("681113203614-pj52531dod9alo0m276g28u7pev1pr44.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}

const routes: Routes = [
  {path: 'login',
  children: [
  {path: '' , component: PaginaPrincipalComponent},
  {path: 'registro', component: LoginAdminComponent}  ] }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    SocialLoginModule
  ],
  declarations: [PaginaPrincipalComponent, LoginAdminComponent],
  exports: [LoginAdminComponent],
  providers: [CheckLogged,     {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  
})
export class LoginModule { }