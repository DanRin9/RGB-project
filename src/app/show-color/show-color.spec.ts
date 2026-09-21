import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ShowColor } from './show-color';

describe('ShowColor', () => {
  let component: ShowColor;
  let fixture: ComponentFixture<ShowColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowColor],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
