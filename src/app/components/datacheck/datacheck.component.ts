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
  Prove = localStorage.getItem("Prove");
  ProveText = "";
  ProveSeries = localStorage.getItem("ProveSeries");
  StartYear = parseInt(localStorage.getItem("StartYear"));
  StartMonth = localStorage.getItem("StartMonth");
  StartDay = localStorage.getItem("StartDay");

  ngOnInit(){
    switch (this.Prove){
      case "1":
        this.ProveText = "晶片序號";
      break;
      case "2":
        this.ProveText = "血統證明";
      break;
      case "3":
        this.ProveText = "體檢證明";
      break;
      case "4":
        this.ProveText = "注射疫苗證明";
      break;
    }
  }

}