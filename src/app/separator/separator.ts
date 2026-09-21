import { Component, computed, inject, input } from '@angular/core';
import { ColorService } from '../model/color.service';
import { Channel } from '../model/channel';

@Component({
  imports: [],
  selector: 'app-separator',
  styleUrl: './separator.css',
  templateUrl: './separator.html',
})
export class Separator {
  private service = inject(ColorService);

  channel = input.required<Channel>();

  value = computed(() => this.service.channelHex(this.channel().start));

  onChange(event: Event) {
    this.service.setChannel(this.channel().start, (event.target as HTMLInputElement).value);
  }
}
