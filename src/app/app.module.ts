import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PetComponent } from './components/pet/pet.component';
import { MemberComponent } from './components/member/member.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: "", component: PetComponent},
    { path: "member", component: MemberComponent}
  ]) ],
  declarations: [ AppComponent, PetComponent, MemberComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
