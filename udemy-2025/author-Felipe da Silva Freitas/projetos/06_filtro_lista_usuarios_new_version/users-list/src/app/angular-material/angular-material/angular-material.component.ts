import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-angular-material',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './angular-material.component.html',
  styleUrl: './angular-material.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularMaterialComponent {

}
