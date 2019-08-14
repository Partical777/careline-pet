import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  localjson = {
    "categoryDog" : "狗狗",
    "categoryCat" : "貓貓"
  }

  categoryChoose = this.localjson.categoryDog;
}
