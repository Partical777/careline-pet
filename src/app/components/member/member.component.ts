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
  PetBirthday = "";
  PetWeight = "";   //Added
  PetSeries = "";


  LastName = "";//Added
  FirstName = "";//Added
  TaiwanID = "";//Added
  BirthYear = "123456";
  BirthMonth = "";
  BirthDay = "";
  Email = "examle@example.com";//Added
  Phone = "";//Added
  Address = "";

}