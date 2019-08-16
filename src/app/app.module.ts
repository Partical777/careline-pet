import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PetComponent } from './components/pet/pet.component';
import { MemberComponent } from './components/member/member.component';
import { DatacheckComponent } from './components/datacheck/datacheck.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
    { path: "", component: PetComponent},
    { path: "member", component: MemberComponent},
    { path: "datacheck", component: DatacheckComponent}
  ]) ],
  declarations: [ AppComponent, PetComponent, MemberComponent, DatacheckComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
