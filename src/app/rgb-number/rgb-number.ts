import { Component, inject, output, signal } from '@angular/core';
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

  show = output<string>();

  onInput(event: Event) {
    this.draft.set((event.target as HTMLInputElement).value);
  }

  onShow() {
    this.show.emit(this.service.normalize(this.draft()));
  }
}
