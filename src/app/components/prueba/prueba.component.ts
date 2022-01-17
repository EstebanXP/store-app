import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit {
  public titulo!: String;
  public name1: String = 'AAAAAA';
  public randNum: number = 100;
  public variable: number;
  constructor() {}
  ngOnInit(): void {
    this.randNum = Math.floor(Math.random() * (this.randNum - 5 + 1)) + 5;
  }
}
