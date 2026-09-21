import { Component, computed, inject, input } from '@angular/core';
import { ColorService } from '../model/color.service';

@Component({
  imports: [],
  selector: 'app-show-color',
  styleUrl: './show-color.css',
  templateUrl: './show-color.html',
})
export class ShowColor {
  private service = inject(ColorService);

  hex = input.required<string>();

  normalColor = computed(() => '#' + this.hex());
  grayColor = computed(() => this.service.grayHex(this.hex()));
}
