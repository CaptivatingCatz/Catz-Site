import { Component, OnInit } from '@angular/core';

function hello() {
  alert('Hello and Welcome!!!');
}
@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss']
})
export class MintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    hello();
  }

}
