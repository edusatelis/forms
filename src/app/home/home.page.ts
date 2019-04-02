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
  public slideThreeForm: FormGroup;
  public submitAttemp: boolean = false;
  public institutions: String[] = [ "UFMS", "IFMS", "AEMS", "FUNEC", "FEA", "FIU", "FIRB", "UNICESUMAR", "SENAI", "UNIVESP"];
  public bloodTypes: String[] = ["Não sei informar", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  public phoneTypes: String[] = ["RESIDENCIAL", "CELULAR"];
  public neighborhood =  new Array(
    ["Centro"],
    ["Assentamento Estrela da Ilha", "Bela Vista", "CDHU", "Cinturão Verde", "Ilha Bela", "IPÊ", "Jardim Aeroporto", "Jardim das Paineiras", "Jardim Novo Horizonte", "Morada do Sol", "Morumbi", "Nova Ilha", "Portal da Praia", "Porto", "Recanto das Águas", "Santa Catarina", "Zona Norte", "Zona Rural", "Zona Sul"]
    );
  public cityResidence: String[] = ["ILHA SOLTEIRA - SP", "ITAPURA - SP"];
  public citysInstitution: String[] = ["TRÊS LAGOAS - MS", "PEREIRA BARRETO - SP", "ANDRADINA - SP", "SANTA FÉ DO SUL - SP"];


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

    this.slideTwoForm = new FormGroup({
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        number: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
        city: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        neighborhood: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      }),
    });

    this.slideThreeForm = new FormGroup({

      institution: new FormGroup({
        name: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        course: new FormControl(null, Validators.required),
        startYear: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
        yearTermination: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),


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
