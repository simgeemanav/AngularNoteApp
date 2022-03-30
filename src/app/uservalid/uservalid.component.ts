import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { userData } from 'src/models/userModel';
import { validateEmail } from 'src/util';

@Component({
  selector: 'app-uservalid',
  templateUrl: './uservalid.component.html',
  styleUrls: ['./uservalid.component.css']
})
export class UservalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('email') emailRef: ElementRef | undefined
  ngAfterViewInit(){
    this.emailRef?.nativeElement.focus()
  }

  emailError = ''

  fncUserValid( event:KeyboardEvent ):void{
    const data = (<HTMLInputElement> event.target).value 
    this.fncControl(data)
  }

  fncControl( data:string ){
   const status = validateEmail(data)

    if(status){
    this.emailError = ''
     userData.forEach ( item => {
        if (data === item.email){
             this.emailError = 'This email has been used before! ,' + item.first_name + ' ' + item.last_name 
        }
     });
    }else{
      this.emailError = 'Please enter data in email format!'
    }
  }

}
