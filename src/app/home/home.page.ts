import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('signupSlider') signupSlider;

  public formNewUser;
  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;
  public submitAttemp: boolean = false;

  constructor(
    private router: Router, 
    public route: ActivatedRoute, 
    public formBuilder: FormBuilder
   
  ) {

    this.slideOneForm = new FormGroup({
      
      personalData: new FormGroup({
        student: new FormControl(true),
        teacher: new FormControl(false),
        name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(150), Validators.pattern(/^[a-z\u00C0-\u00ff A-Z]+$/)]),
        email: new FormControl({ value: null, disabled: true }, [Validators.required, Validators.minLength(5), Validators.maxLength(65), Validators.pattern(/\S+@\S+\.\S+/)]),
        cpf: new FormControl({ value: null, disabled: true }, [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^[0-9]{11}$/)]),
        rg: new FormGroup({
          number: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
          date: new FormControl(null, Validators.required),
          state: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(/\b[A-Za-z][A-Za-z]/)]),
        }),
        bloodType: new FormControl("Não sei informar", Validators.required),
        motherSname: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(150), Validators.pattern(/^[a-z\u00C0-\u00ff A-Z]+$/)]),
        phone: new FormGroup({
          name: new FormControl(null, Validators.required),
          number_phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]),
        })
      }),
    })
 
  }

  next(){
    this.signupSlider.slideNext();
}

prev(){
    this.signupSlider.slidePrev();
}

save(){

}

}
