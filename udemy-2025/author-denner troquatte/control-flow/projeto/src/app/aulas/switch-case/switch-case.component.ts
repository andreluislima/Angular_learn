import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  imports: [CommonModule],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.scss'
})
export class SwitchCaseComponent {

  public switchconditon = ' ';
}
