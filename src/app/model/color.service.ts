import { Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Channel } from './channel';

@Injectable({ providedIn: 'root' })
export class ColorService {
  channelsResource = httpResource<Channel[]>(() => 'data/channels.json');

  normalize(hex: string): string {
    return hex.replace('#', '').toUpperCase();
  }

  channelHex(hex: string, start: number): string {
    if (hex === '') {
      return '--';
    }
    return hex.slice(start, start + 2);
  }

  grayHex(hex: string): string {
    const red = parseInt(hex.slice(0, 2), 16);
    const green = parseInt(hex.slice(2, 4), 16);
    const blue = parseInt(hex.slice(4, 6), 16);
    const average = Math.round((red + green + blue) / 3);
    const pair = average.toString(16).padStart(2, '0').toUpperCase();
    return '#' + pair + pair + pair;
  }
}
