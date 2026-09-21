import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { Separator } from './separator';

describe('Separator', () => {
  let component: Separator;
  let fixture: ComponentFixture<Separator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Separator],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(Separator);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('channel', { letter: 'R', name: 'Red', start: 0 });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
