import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MapsAPILoader } from '@agm/core';
import { ModalController, AlertController } from '@ionic/angular';

declare const google: any;

@Component({
  selector: 'app-work-education-details',
  templateUrl: './work-education-details.component.html',
  styleUrls: ['./work-education-details.component.scss']
})
export class WorkEducationDetailsComponent implements OnInit {
  @ViewChild('address', { static: false }) addressRef: any;
  googleAutocomplete: any;
  workDataList: any[] = [
    {
      companyName: 'rafhghguu',
      position: 'director',
      location: 'EF-495, Mandi Road, Krishan Nagar, Fentonganj, Jalandhar, Punjab 144001, India',
      startDate: '2020-02-27',
      endDate: '2016-02-27',
      id: 1
    }
  ];
  educationDataList: any[] = [
    {
      education: 'raguuuu',
      institution: 'DRK college',
      major: 'chandrakath',
      institutionLocation: '1255 street kphb,hyderabad',
      startDate: '2020-02-28',
      passedDate: '2020-02-28',
      id: 1
    }
  ];
  workDetailsForm: FormGroup;
  educationDetailsForm: FormGroup;
  defaultDate = '';
  isSubmitted = false;
  workData: any = {};
  addressObj: any = {};
  openWorkForm = false;
  openEducationForm = false;
  isEdit = false;
  constructor(
    private formBuilder: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    public alertController: AlertController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.workDetailsForm = this.formBuilder.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      position: ['', [Validators.required]],
      location: ['', [Validators.required]],
      startDate: [this.defaultDate],
      endDate: [this.defaultDate],
      id: []
    });

    this.educationDetailsForm = this.formBuilder.group({
      education: ['', [Validators.required, Validators.minLength(2)]],
      institution: ['', [Validators.required]],
      major: ['', [Validators.required]],
      institutionLocation: ['', [Validators.required]],
      startDate: [this.defaultDate],
      passedDate: [this.defaultDate],
      id: []
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loadGoogleAutoComplete();
  }
  loadGoogleAutoComplete() {
    this.mapsAPILoader.load().then(() => {
      console.log(this.addressRef, this.addressRef.nativeElement);
      this.googleAutocomplete = new google.maps.places.Autocomplete(this.addressRef.nativeElement, {
        componentRestrictions: { country: ['in'] },
        types: []
      });
      this.googleAutocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: any = this.googleAutocomplete.getPlace();
          this.getAddress(place);
        });
      });
    });
  }
  async getAddress(place: any) {
    console.log(place, 'placeeeeeeeeeeeeee');
    if (!place.geometry) {
      return;
    }
    this.addressObj = {};
    this.addressObj.latitude = place.geometry.location.lat();
    this.addressObj.longitude = place.geometry.location.lng();
    this.addressObj.formatted_address = place.formatted_address;
    this.addressObj.title = place.name;
    await place.address_components.forEach((element: any) => {
      if (element.types.indexOf('street_number') > -1) {
        this.addressObj.street_number = element.long_name;
      }
      if (element.types.indexOf('route') > -1) {
        this.addressObj.route = element.long_name;
      }
      if (element.types.indexOf('sublocality') > -1) {
        this.addressObj.sublocality = element.long_name;
      }
      if (element.types.indexOf('locality') > -1) {
        this.addressObj.region = element.long_name;
      }
      if (element.types.indexOf('administrative_area_level_1') > -1) {
        this.addressObj.state = element.long_name;
      }
      if (element.types.indexOf('country') > -1) {
        this.addressObj.country = element.long_name;
      }
      if (element.types.indexOf('postal_code') > -1) {
        this.addressObj.postal_code = element.long_name;
      }
    });
    console.log(this.addressObj);

    this.workDetailsForm.get('location').setValue(this.addressObj.formatted_address, {
      onlyself: true
    });
    // this.educationDetailsForm.get('institutionLocation').setValue(this.addressObj.formatted_address, {
    //   onlyself: true
    // });
  }

  get errorControl() {
    return this.workDetailsForm.controls;
  }

  get educationErrorControl() {
    return this.educationDetailsForm.controls;
  }
  closeFrom(value: any) {
    if (value === 'work') {
      this.workDetailsForm.reset();
      this.openWorkForm = false;
    } else {
      this.educationDetailsForm.reset();
      this.openEducationForm = false;
    }
  }
  getDate(e: any, value: any) {
    if (!e) {
      return;
    }
    if (value === 'work') {
      const date = new Date(e).toISOString().substring(0, 10);
      this.workDetailsForm.get('startDate').setValue(date, {
        onlyself: true
      });
    } else {
      const date = new Date(e).toISOString().substring(0, 10);
      this.educationDetailsForm.get('startDate').setValue(date, {
        onlyself: true
      });
    }
  }
  getEndDate(e: any, value: any) {
    if (!e) {
      return;
    }
    if (value === 'work') {
      const date = new Date(e).toISOString().substring(0, 10);
      this.workDetailsForm.get('endDate').setValue(date, {
        onlyself: true
      });
    } else {
      const date = new Date(e).toISOString().substring(0, 10);
      this.educationDetailsForm.get('passedDate').setValue(date, {
        onlyself: true
      });
    }
  }

  submitworkDataForm() {
    this.isSubmitted = true;
    if (!this.workDetailsForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const data: any = this.workDetailsForm.value;
      data.id = this.workDataList.length + 1;
      console.log(this.workDetailsForm.value);
      this.workDataList.push(data);
      this.workDetailsForm.reset();
      console.log(this.workDataList);
      this.openWorkForm = false;
    }
  }

  submitEducationDataForm() {
    this.isSubmitted = true;
    if (!this.educationDetailsForm.valid) {
      console.log('Please provide all the required values!');
      return false;
    } else {
      const data: any = this.educationDetailsForm.value;
      data.id = this.educationDataList.length + 1;
      console.log(this.educationDetailsForm.value);
      this.educationDataList.push(data);
      this.educationDetailsForm.reset();
      console.log(this.educationDataList);
      this.openEducationForm = false;
    }
  }

  async deleteWorkData(id: number) {
    console.log('Confirm', id);
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: '<strong>Do you want to delete!</strong>!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay', id);
            this.deleteRecordFromWorkList(id);
          }
        }
      ]
    });

    await alert.present();
  }
  deleteRecordFromWorkList(id: any) {
    this.workDataList.splice(id, 1);
  }

  async helpWorkData() {
    const alert = await this.alertController.create({
      message: 'the all works fine but the change is very snappy so gives not great user experience.',
      buttons: ['Cancel']
    });

    await alert.present();
  }

  editWorkData(data: any) {
    this.workDetailsForm.get('companyName').setValue(data.companyName);
    this.workDetailsForm.get('position').setValue(data.position, { onlyself: true });
    this.workDetailsForm.get('location').setValue(data.location, { onlyself: true });
    this.workDetailsForm.get('startDate').setValue(data.startDate, { onlyself: true });
    this.workDetailsForm.get('endDate').setValue(data.endDate, { onlyself: true });
    this.workDetailsForm.get('id').setValue(data.id, { onlyself: true });
    this.isEdit = true;
    this.openWorkForm = true;
  }

  updateWorkData() {
    const data: any = this.workDetailsForm.value;
    this.workDataList.forEach(element => {
      if (data.id === element.id) {
        element.companyName = data.companyName;
        element.position = data.position;
        element.location = data.location;
        element.startDate = data.startDate;
        element.endDate = data.endDate;
      }
    });
    this.workDetailsForm.reset();
    this.openWorkForm = false;
    this.isEdit = false;
  }

  editEducationData(data: any) {
    console.log(data, 'checking work detailsssssss for edit111111111111111111111111111111111111');
    this.educationDetailsForm.get('education').setValue(data.education);
    this.educationDetailsForm.get('institution').setValue(data.institution, { onlyself: true });
    this.educationDetailsForm.get('major').setValue(data.major, { onlyself: true });
    this.educationDetailsForm.get('institutionLocation').setValue(data.institutionLocation, { onlyself: true });
    this.educationDetailsForm.get('startDate').setValue(data.startDate, { onlyself: true });
    this.educationDetailsForm.get('passedDate').setValue(data.passedDate, { onlyself: true });
    this.educationDetailsForm.get('id').setValue(data.id, { onlyself: true });
    console.log(this.educationDetailsForm.value, 'checking education detailsssssss for edit');
    this.isEdit = true;
    this.openEducationForm = true;
  }

  updateEducationData() {
    const data: any = this.educationDetailsForm.value;
    this.educationDataList.forEach(element => {
      if (data.id === element.id) {
        element.education = data.education;
        element.institution = data.institution;
        element.major = data.major;
        element.institutionLocation = data.institutionLocation;
        element.startDate = data.startDate;
        element.passedDate = data.passedDate;
      }
    });
    this.educationDetailsForm.reset();
    this.openEducationForm = false;
    this.isEdit = false;
  }

  async deleteEducationData(id: number) {
    console.log('Confirm', id);
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: '<strong>Do you want to delete!</strong>!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: raghu => {
            console.log('Confirm Cancel: raghu');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay', id);
            this.deleteRecordFromEducationList(id);
          }
        }
      ]
    });

    await alert.present();
  }
  deleteRecordFromEducationList(id: any) {
    this.educationDataList.splice(id, 1);
  }
}
