import { Component, inject } from '@angular/core';
import { ColorService } from '../model/color.service';

@Component({
  imports: [],
  selector: 'app-show-color',
  styleUrl: './show-color.css',
  templateUrl: './show-color.html',
})
export class ShowColor {
  service = inject(ColorService);
}
