import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // private url = environment.url
  private emailKey = environment.emailJsKey

  constructor(){}

  async SendEmail(body: any): Promise<any> {
      
    emailjs.init(this.emailKey)
    // let response = emailjs.send("service_thvwen9","template_dnhe84p",{ ...body })
    let response = emailjs.send("service_thvwen9","template_eltupdg", {...body })
    console.log(response);
    return response
    // return response

    // return this.http.post(this.url, input, response).pipe(
    //   map(
    //     (response) => {
    //         if (response) {
    //     return response
    //         }
    //     },
    //     (error) => {
    //         if (error) {
    //     return error
    //         }
    //     }
    //   )
    // )
  }
}
