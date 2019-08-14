import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  localjson = {
    "Dog" : {
      "categoryChoose" : "Dog",
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
      "speciesTitle11" : "米克斯(混種狗)",
      "speciesTitle12" : "貴賓犬",
      "speciesTitle13" : "馬爾濟斯",
      "speciesTitle14" : "臘腸犬",
      "speciesTitle21" : "法國鬥牛犬",
      "speciesTitle22" : "柴犬",
      "speciesTitle23" : "柯基",
      "speciesTitle24" : "博美犬",
      "speciesTitle25" : "黃金獵犬",
      "speciesTitle31" : "吉娃娃",
      "speciesTitle32" : "雪納瑞",
      "speciesTitle33" : "比熊犬",
      "speciesTitle34" : "約克夏",
      "speciesTitle41" : "哈士奇",
      "speciesTitle42" : "拉布拉多犬",
    },
    "Cat" : {
      "categoryChoose" : "Cat",
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
      "speciesTitle11" : "米克斯(混種貓)",
      "speciesTitle12" : "波斯貓",
      "speciesTitle13" : "美國短毛貓",
      "speciesTitle14" : "異國短毛貓",
      "speciesTitle21" : "蘇格蘭摺耳貓",
      "speciesTitle22" : "暹邏貓",
      "speciesTitle23" : "金吉拉",
      "speciesTitle24" : "英國短毛貓",
      "speciesTitle25" : "安哥拉貓",
      "speciesTitle31" : "美國捲耳貓",
      "speciesTitle32" : "孟加拉貓",
      "speciesTitle33" : "日本貓",
      "speciesTitle34" : "俄羅斯藍貓",
      "speciesTitle41" : "孟買貓",
      "speciesTitle42" : "布偶貓",
    }
  }

  categoryChoose = this.localjson.Dog;
  categoryChooseForm = this.categoryChoose.categoryChoose;  //form
  nicknameForm = "";  //form
  genderChooseForm = 1; //form
  specieChooseLogic = ""
  specieChooseForm = ""; //form
  programChoose = 0; //form

  changeCategory(choose){
    if(choose == "cat"){
      this.categoryChoose = this.localjson.Cat;
    }else if(choose == "dog"){
      this.categoryChoose = this.localjson.Dog;
    }
    console.log(choose);
  }

  changeGender(gender){
    this.genderChooseForm = gender;
  }

  changeSpecie(specie){
    this.specieChooseLogic = specie;
    this.specieChooseForm = this.categoryChoose[specie];
  }

  changeProgram(program){
    this.programChoose = program;
  }
}
