import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import {  FormGroup, Validators } from '@angular/forms';
import { emailOrPhoneRequired } from '../shared/customerror.directive';

interface City {
    name: string,
    code: string
}
// interface Gender{
//   gender1:string,
  
// }

 

 
@Component({
  selector: 'app-jobportal',
  templateUrl: './jobportal.component.html',
  styleUrls: ['./jobportal.component.css'],
})

export class JobportalComponent implements OnInit {

 
  jobForm!: FormGroup
  // gender: Gender[];
  // selectedGender!: any;
  cities: City[];
   selectedCity!: any;
    val1!: number;
    date1! : Date[];
     es: any;
     value!: any;
  constructor(private fb: FormBuilder) {
    
    // this.gender=[
    //   {gender1: 'Male'},
    //   {gender1:'Female'}
    // ]
     this.cities = [
            {name: 'Mr.', code: 'NY'},
            {name: 'Ms.', code: 'RM'},
            {name: 'Dr.', code: 'LDN'},
            {name: 'Mrs.', code: 'IST'},
            {name: 'Prof.', code: 'PRS'}
        ];

        this.jobForm = this.fb.group({
    firstName: ['',[Validators.required] ],
    middleName:[''],
    lastName: [''],
    contactType: [''],
    contacts: this.fb.group({
      contactType: ['-1',[emailOrPhoneRequired()]],
      email: [''],
      // phone: [''],
    }),
    skills: this.fb.array([]),
  });
  }
  


   get firstName(){
    return this.jobForm.get('firstName');
   }
 
  preview: string = '';
 
  ngOnInit(){
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
            dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
            dayNamesMin: [ "D","L","M","X","J","V","S" ],
            monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
            monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
            today: 'Hoy',
            clear: 'Borrar'
        }

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
    

        let invalidDate = new Date();
        invalidDate.setDate(today.getDate() - 1);
       
  }
 
  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }
 
  get skillsForms() {
    return this.jobForm.get('skills') as FormArray;
  }
 
  addASkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        address1: [''],
        address2: [''],
        city:['']
      })
    );
  }
 
  removeSkillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }

  sampleSetValues() {
this.jobForm.setValue({
  firstName: 'Jaival',
  lastName: 'Shah',
  contacts: {
	contactType: 'email',
	email: 'jaival@tydy.it.',
	phone: '9879553929',
  },
  skills: [],
});

}
 get contactType(){
    return this.jobForm.get("contacts.contactType");
}
}