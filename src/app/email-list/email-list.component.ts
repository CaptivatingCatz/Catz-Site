import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  email: any;
  name: any;

  constructor() {

  }

  ngOnInit(): void {
  }
  faEnvelope = faEnvelope;
  faCheck = faCheck;

  /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
   submitForm() {
    const message =`My name is ${this.name}. My email is ${this.email}`;
    console.log(message);
  }
}
