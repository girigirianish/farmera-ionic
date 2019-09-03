import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogBookPage } from './log-book.page';

describe('LogBookPage', () => {
  let component: LogBookPage;
  let fixture: ComponentFixture<LogBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogBookPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
