import { Component, inject, signal } from '@angular/core';
import { RgbNumber } from './rgb-number/rgb-number';
import { Separator } from './separator/separator';
import { ShowColor } from './show-color/show-color';
import { ColorService } from './model/color.service';

@Component({
  selector: 'app-root',
  imports: [RgbNumber, Separator, ShowColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  service = inject(ColorService);

  hex = signal('');

  onShow(value: string) {
    this.hex.set(value);
  }
}
