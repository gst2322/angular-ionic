import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MypopoverComponent } from '@app/mypopover/mypopover.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // isPaymentMethod: boolean = false;
  basicinfo: boolean = true;
  overview: boolean = false;
  work: boolean = false;
  properties: boolean = false;
  payment: boolean = false;

  profile = {
    Name: 'Mr.Saiteja govoor ',
    Address: 'Madhapur,Hyderabad',
    ReviewCount: '44',
    ReviewAvg: '3.15',
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

  constructor(public popoverController: PopoverController) {}
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MypopoverComponent,
      event: ev,

      componentProps: {
        mode: 'md'
      },
      translucent: true
    });
    return await popover.present();
  }
  ngOnInit() {}
  // showPaymentMethod() {
  //   this.isPaymentMethod = true;
  //   console.log('enter', this.isPaymentMethod);
  // }

  showOverview() {
    this.overview = true;
    this.basicinfo = false;
    this.work = false;
    this.properties = false;
    this.payment = false;
  }
  showWork() {
    this.work = true;
    this.basicinfo = false;
    this.overview = false;
    this.properties = false;
    this.payment = false;
  }
  showProperties() {
    this.basicinfo = false;
    this.overview = false;
    this.work = false;
    this.properties = true;
    this.payment = false;
  }
  showPayment() {
    this.basicinfo = false;
    this.overview = false;
    this.work = false;
    this.properties = false;
    this.payment = true;
  }
}
