import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule,CommonModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {

  public name = "Mario"
}
