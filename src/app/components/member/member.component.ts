import { Component } from '@angular/core';

@Component({
  selector: 'member',
  templateUrl: 'member.component.html',
  styleUrls: [ 'member.component.css' ]
})

export class MemberComponent  {
  categoryChooseForm = localStorage.getItem("categoryChooseForm");
  nicknameForm = localStorage.getItem("nicknameForm");
  genderChooseForm = localStorage.getItem("genderChooseForm");
  specieChooseForm = localStorage.getItem("specieChooseForm");
  programChoose = localStorage.getItem("programChoose");
  programMoney = this.programChoose == "安心方案" ? "NT$2,312" : "NT$3,893";
  PetBirthYear = "";//Added
  PetBirthMonth = "";//Added
  PetBirthDay = "";//Added
  PetWeight = "";   //Added
  PetSeries = "";


  LastName = "";//Added
  FirstName = "";//Added
  TaiwanID = "";//Added
  BirthYear = "";//Added
  BirthMonth = "";//Added
  BirthDay = "";//Added
  Email = "examle@example.com";//Added
  Phone = "";//Added
  Address = "";

  getYear(event){
    this.BirthYear = event.target.value;
  }

  getMonth(event){
    this.BirthMonth = event.target.value;
  }
  
  getDay(event){
    this.BirthDay = event.target.value;
  }

  getPetYear(event){
    this.PetBirthYear = event.target.value;
  }

  getPetMonth(event){
    this.PetBirthMonth = event.target.value;
  }
  
  getPetDay(event){
    this.PetBirthDay = event.target.value;
  }
}