import { Component, effect, inject, signal } from '@angular/core';
import { ColorService } from '../model/color.service';

@Component({
  imports: [],
  selector: 'app-rgb-number',
  styleUrl: './rgb-number.css',
  templateUrl: './rgb-number.html',
})
export class RgbNumber {
  private service = inject(ColorService);

  draft = signal('');

  constructor() {
    effect(() => {
      this.draft.set('#' + this.service.hex());
    });
  }

  onInput(event: Event) {
    this.draft.set((event.target as HTMLInputElement).value);
  }

  onShow() {
    this.service.setHex(this.draft());
  }
}
