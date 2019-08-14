import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  localjson = {
    "Dog" : {
      "category" : "狗狗",
      "nickname" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/dog-nickname.gif",
      "gender" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/dog-gender.gif",
      "species" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/dog-species.gif",
    },
    "Cat" : {
      "category" : "貓貓",
      "nickname" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/cat-nickname.gif",
      "gender" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/cat-gender.gif",
      "species" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/cat-species.gif",
    }
  }

  categoryChoose = this.localjson.Dog;

  changeCategory(choose){
    if(choose == "cat"){
      this.categoryChoose = this.localjson.Cat;
    }else if(choose == "dog"){
      this.categoryChoose = this.localjson.Dog;
    }
    console.log(choose);
  }
}
