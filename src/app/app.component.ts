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
      "species11" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=5&time=20180911174634",
      "species12" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=33&time=20180911175002",
      "species13" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=23&time=20180911174823",
      "species14" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=25&time=20180911174843",
      "species21" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=135&time=20190524142437",
      "species22" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=27&time=20180911174901",
      "species23" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=32&time=20180911174947",
      "species24" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=31&time=20180911174938",
      "species25" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=4&time=20180911174709",
      "species31" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=29&time=20180911174918",
      "species32" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=26&time=20180911174853",
      "species33" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=28&time=20181222155407",
      "species34" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=30&time=20180911174927",
      "species41" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=21&time=20180911174720",
      "species42" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=22&time=20180911174731",
    },
    "Cat" : {
      "category" : "貓貓",
      "nickname" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/cat-nickname.gif",
      "gender" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/cat-gender.gif",
      "species" : "https://www.careline.com.tw/CareLinePet/Pet/assets/images/cat-species.gif",
      "species11" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=1&time=20180912103423",
      "species12" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=6&time=20180912103453",
      "species13" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=7&time=20180912103525",
      "species14" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=3&time=20180912103657",
      "species21" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=2&time=20180912103717",
      "species22" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=8&time=20180912103737",
      "species23" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=9&time=20180912103759",
      "species24" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=10&time=20180912103828",
      "species25" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=11&time=20180912103850",
      "species31" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=12&time=20180912103917",
      "species32" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=13&time=20180912103942",
      "species33" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=14&time=20190212115315",
      "species34" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=15&time=20180912104027",
      "species41" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=16&time=20180912104048",
      "species42" : "https://www.careline.com.tw/CareLinePet/pet-mbr/pet/image/petSpecies?petSpeciesId=17&time=20180912104109",
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
