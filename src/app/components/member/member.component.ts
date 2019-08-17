import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'member',
  templateUrl: 'member.component.html',
  styleUrls: [ 'member.component.css' ]
})

export class MemberComponent  {
  form2part = new FormGroup({
    phoneControl: new FormControl('', Validators.required),
    Address1Control: new FormControl('', Validators.required),
    Address2Control: new FormControl('', Validators.required),
    Address3Control: new FormControl('', Validators.required),
    Address4Control: new FormControl('', Validators.required),
  });

  form3part = new FormGroup({
    petWeightControl: new FormControl('', Validators.required),
    proveSeriesControl: new FormControl('', Validators.required),
  });

  PetYear = [];
  PetMonth = [];
  PetDay = [];

  ngOnInit(){
    for(let i = 1999; i <= 2019 ; i++){
      this.PetYear.push(i);
    }
    for(let i = 1; i <= 12 ; i++){
      this.PetMonth.push(i);
    }
    for(let i = 1; i <= 31 ; i++){
      this.PetDay.push(i);
    }
  }




  categoryChooseForm = localStorage.getItem("categoryChooseForm");
  nicknameForm = localStorage.getItem("nicknameForm");
  genderChooseForm = localStorage.getItem("genderChooseForm");
  specieChooseForm = localStorage.getItem("specieChooseForm");
  programChoose = localStorage.getItem("programChoose");
  programMoney = this.programChoose == "安心方案" ? "NT$2,312" : "NT$3,893";
  PetBirthYear = "";//Added
  PetBirthMonth = "";//Added
  PetBirthDay = "";//Added
  Prove = "" ;//Added
  StartYear = "";//Added
  StartMonth = "";//Added
  StartDay = "";//Added


  LastName = "Partical";//Added
  FirstName = "Weng";//Added
  TaiwanID = "A123456789";//Added
  BirthYear = "1990";//Added
  BirthMonth = "1";//Added
  BirthDay = "1";//Added
  Email = "examle@example.com";//Added

  

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

  getProve(event){
    this.Prove = event.target.value;
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
    localStorage.setItem("Phone", this.form2part.get('phoneControl').value);
    localStorage.setItem("Address", this.form2part.get('Address1Control').value + ", " + this.form2part.get('Address2Control').value + ", " + this.form2part.get('Address3Control').value + ", " + this.form2part.get('Address4Control').value);

    localStorage.setItem("PetBirth", this.PetBirthYear + "/" + this.PetBirthMonth + "/" + this.PetBirthDay);
    localStorage.setItem("PetWeight", this.form3part.get('petWeightControl').value);
    localStorage.setItem("Prove", this.Prove);
    localStorage.setItem("ProveSeries", this.form3part.get('proveSeriesControl').value);
    localStorage.setItem("StartYear", this.StartYear);
    localStorage.setItem("StartMonth", this.StartMonth);
    localStorage.setItem("StartDay", this.StartDay);
  }
}