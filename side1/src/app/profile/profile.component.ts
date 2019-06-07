import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService, User } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  user = JSON.parse(localStorage.getItem("CURRENT_USER"))

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  uppdateForm: FormGroup;
  isSubmitted: boolean = false;

  ngOnInit() {
    this.uppdateForm = this.formBuilder.group({
      _id:[''],
      firstname: ['', Validators.required],
      mellanname: ['', Validators.required],      
      lastname: ['', Validators.required],
      birthday:['', Validators.required],
     
      addresslinefaktura: ['', ],
      postnumber:   ['', ],
      invoicecity:   ['', ],
      invoicecountry:['', ],
      addressline: ['', ],
      zipcode: ['', ],
      city: ['', ],
      email: ['', ],
      password: ['', ]
    })
  }

  uppdate(user: User){
    this.authService.update(user).subscribe(res => {
      console.log(res)
      
      //this.user = res;
    });
  }

}
