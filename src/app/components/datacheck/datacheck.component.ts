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
}