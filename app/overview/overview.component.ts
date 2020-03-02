import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  overview: boolean = true;
  work: boolean = false;
  properties: boolean = false;
  payment: boolean = false;

  editcon: boolean = true;

  isEditable: boolean = false;
  isEditableAuth: boolean = false;

  profile = {
    Name: 'Mr.Saiteja govoor',
    Address: 'Madhapur,Hyderabad',
    ReviewCount: 0,
    ReviewAvg: 0,
    email: 'saiteja@gmail.com',
    location: 'Llanquihue Province, Chile',
    Gender: 'Male',
    Language: 'Telugu,English',
    PhoneNumber: '+919573017295',
    Timezone: 'AMERICA/SANTIAGO',
    GovtId: '842343943234',
    DrivingLic: 'D2C5 94CC 25L9 23A9',
    PassportNum: '25L9 D2C5 2354 254',
    profileImage:
      'https://lh6.googleusercontent.com/-OBgjI2OthHA/AAAAAAAAAAI/AAAAAAAAAAA/3zMIprTD90Y/s128-c-k/photo.jpg'
  };
  workData = {
    companyName: 'Rentastico',
    position: 'Developer',
    place: 'Hyderabad, Telangana, India',
    dateFrom: 'Feb 4, 2020',
    dateTo: 'Feb 12, 2020'
  };

  constructor() {}

  ngOnInit() {}
  showOverview() {
    this.overview = true;
    this.work = false;
    this.properties = false;
    this.payment = false;
  }
  showWork() {
    this.work = true;
    this.overview = false;
    this.properties = false;
    this.payment = false;
  }
  showProperties() {
    this.overview = false;
    this.work = false;
    this.properties = true;
    this.payment = false;
  }
  showPayment() {
    this.overview = false;
    this.work = false;
    this.properties = false;
    this.payment = true;
  }

  // edit(){
  //   var edit=document.querySelectorAll("#onedit")
  //   var editbtn=document.getElementById("editbtn")

  //   if(this.editcon==true){
  //     for(var i=0;i<9;i++){
  //       edit[i].setAttribute("contentEditable","true")
  //       // edit[i].style.border="1px solid black"
  //       // edit[i].style.backgroundColor="white"
  //       editbtn.innerText="Save"
  //       this.editcon=false;

  //     }
  //   }else{
  //     for(var i=0;i<9;i++){
  //       edit[i].setAttribute("contentEditable","false")
  //       // edit[i].style.border="none"
  //       // edit[i].style.backgroundColor="transparent"
  //       editbtn.innerText="Edit"

  //       this.editcon=true;

  //     }
  //   }

  // }
}
