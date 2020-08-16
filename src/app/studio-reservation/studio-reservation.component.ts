import { Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

import { phoneNumberValidator } from './../share/validator/phone-validator'

@Component({
  selector: 'app-studio-reservation',
  templateUrl: './studio-reservation.component.html',
  styleUrls: ['./studio-reservation.component.css']
})
export class StudioReservationComponent implements OnInit {

  studioList:any

  registrationForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    contact: ['', [Validators.required,phoneNumberValidator]],
    groupSize: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.setGroupSizeList()
  }

  get name() {
    return this.registrationForm.get('name')
  }
  
  get email() {
    return this.registrationForm.get('email')
  }

  get contact() {
    return this.registrationForm.get('contact')
  }

  get groupSize() {
    return this.registrationForm.get('groupSize')
  }

  //fetch dropdown values
  setGroupSizeList(){
    this.httpClient.get('assets/data/studioList.json').toPromise().then(res => {
      this.studioList = res
    })
  }

  onSubmit(): void {
    console.log(this.registrationForm.value); //Make use of these value to be submitted through services
  }

}
