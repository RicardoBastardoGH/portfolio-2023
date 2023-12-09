import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SnackbarService } from '../../services/snackbar.service';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  myForm: FormGroup = this.fb.group({
    from_name: ["", [Validators.required]],
    from_email: ["", [Validators.required, Validators.email]],
    from_phone: ["", [Validators.required]],
    // to_email: [""], // se llena en submit
    // to_email_name: [""], // se llena en submit
    // subject: ["", [Validators.required]],
    message: ["", [Validators.required, Validators.maxLength(1000)]],
    
  })
  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private snackbarService: SnackbarService,
    // @Inject(LOCALE_ID) public locale: string,
  ){}
  fieldHasError(field: string) {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }

  async enviar(){
    if (this.myForm.invalid  ) {
      this.myForm.markAllAsTouched();  
      // this.customSnackbarService.open('Hay un error en el formulario')
      // alert('Debe llenar el formulario antes de enviar!')
      // this.snackbarService.error($localize`Ha ocurrido un error con la información ingresada!`)
      this.snackbarService.error(`Ha ocurrido un error con la información ingresada!`)
      return;
    }
    const body = {
      from_name: this.myForm.value.from_name,
      from_email: this.myForm.value.from_email,
      from_phone: this.myForm.value.from_phone,
      // to_email: this.myForm.value.subject.email,
      // to_email_name: this.myForm.value.subject.to_email_name,
      // subject: this.myForm.value.subject.asunto,
      message: this.myForm.value.message,
      // locale: this.locale
    }

    console.log(body);
    

    // this.emailService.SendEmail(body).then(
    //   resp => {
    //     console.log(resp);
    //     if (resp.status === 200) {
    //       this.snackbarService.success('Mesaje enviado exitosamente!')
    //       this.myForm.reset()
          
    //     } else {
    //       // No se que hacer aca =)
    //     }
    //   }
    // )
  }
}
