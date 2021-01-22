import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisventasPage } from './misventas.page';

describe('MisventasPage', () => {
  let component: MisventasPage;
  let fixture: ComponentFixture<MisventasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisventasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisventasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
