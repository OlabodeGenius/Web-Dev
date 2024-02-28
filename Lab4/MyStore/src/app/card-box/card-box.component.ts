import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css'],
})
export class CardBoxComponent {
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });
  constructor(private formBuilder: FormBuilder) {}
}
