import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() type = 'primary'
  @Input() label = 'Button'
  @Input() block = false

  constructor() { }

  ngOnInit() {
    
  }



}
