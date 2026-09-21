import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { RgbNumber } from './rgb-number';

describe('RgbNumber', () => {
  let component: RgbNumber;
  let fixture: ComponentFixture<RgbNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RgbNumber],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(RgbNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
