import { Injectable, computed, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Channel } from './channel';

@Injectable({ providedIn: 'root' })
export class ColorService {
  channelsResource = httpResource<Channel[]>(() => 'data/channels.json');

  private _hex = signal('000000');
  readonly hex = this._hex.asReadonly();

  readonly normalColor = computed(() => '#' + this._hex());
  readonly grayColor = computed(() => this.toGray(this._hex()));

  setHex(hex: string) {
    this._hex.set(hex.replace('#', '').toUpperCase());
  }

  setChannel(start: number, pair: string) {
    const fixed = pair.toUpperCase().padStart(2, '0').slice(0, 2);
    this._hex.update(hex => hex.slice(0, start) + fixed + hex.slice(start + 2));
  }

  channelHex(start: number): string {
    return this._hex().slice(start, start + 2);
  }

  private toGray(hex: string): string {
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4, 6), 16);
    const average = Math.round((red + green + blue) / 3);
    const pair = average.toString(16).padStart(2, '0').toUpperCase();
    return '#' + pair + pair + pair;
  }
}
