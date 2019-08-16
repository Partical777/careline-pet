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
  StartYear = "";//Added
  StartMonth = "";//Added
  StartDay = "";//Added


  LastName = "";//Added
  FirstName = "";//Added
  TaiwanID = "";//Added
  BirthYear = "";//Added
  BirthMonth = "";//Added
  BirthDay = "";//Added
  Email = "examle@example.com";//Added
  Phone = "";//Added
  Address1 = "";//Added
  Address2 = "";//Added
  Address3 = "";//Added
  Address4 = "";//Added

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

  getStartYear(event){
    this.StartYear = event.target.value;
  }

  getStartMonth(event){
    this.StartMonth = event.target.value;
  }
  
  getStartDay(event){
    this.StartDay = event.target.value;
  }




  SaveToStroage(){
    localStorage.setItem("Name", this.LastName + this.FirstName);
    localStorage.setItem("TaiwanID", this.TaiwanID);
    localStorage.setItem("Birth", this.BirthYear + "/" + this.BirthMonth + "/" + this.BirthDay);
    localStorage.setItem("Email", this.Email);
    localStorage.setItem("Phone", this.Phone);
    localStorage.setItem("Address", this.Address1 + ", " + this.Address2 + ", " + this.Address3 + ", " + this.Address4);

    localStorage.setItem("PetBirth", this.PetBirthYear + "/" + this.PetBirthMonth + "/" + this.PetBirthDay);
    localStorage.setItem("PetWeight", this.PetWeight);
    localStorage.setItem("StartYear", this.StartYear);
    localStorage.setItem("StartMonth", this.StartMonth);
    localStorage.setItem("StartDay", this.StartDay);
  }
}