import { Component } from '@angular/core';

@Component({
  selector: 'datacheck',
  templateUrl: 'datacheck.component.html',
  styleUrls: [ 'datacheck.component.css' ]
})

export class DatacheckComponent  {
  categoryChooseForm = localStorage.getItem("categoryChooseForm");
  nicknameForm = localStorage.getItem("nicknameForm");
  genderChooseForm = localStorage.getItem("genderChooseForm");
  specieChooseForm = localStorage.getItem("specieChooseForm");
  programChoose = localStorage.getItem("programChoose");
  programMoney = this.programChoose == "安心方案" ? "NT$2,312" : "NT$3,893";
  
  Name = localStorage.getItem("Name");
  TaiwanID = localStorage.getItem("TaiwanID");
  Birth = localStorage.getItem("Birth");
  Email = localStorage.getItem("Email");
  Phone = localStorage.getItem("Phone");
  Address = localStorage.getItem("Address");

  PetBirth = localStorage.getItem("PetBirth");
  PetWeight = localStorage.getItem("PetWeight");
  StartYear = parseInt(localStorage.getItem("StartYear"));
  StartMonth = localStorage.getItem("StartMonth");
  StartDay = localStorage.getItem("StartDay");

}