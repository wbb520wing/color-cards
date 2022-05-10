import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() btncolor = "";
  @Input() bgcolor = "";
  @Input() borderColor ="grey";
  @Output() colorChange: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.borderColor = this.bgcolor
    this.colorChange.emit()
  }


}
