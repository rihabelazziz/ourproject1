import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Client1Page } from './client1.page';

describe('Client1Page', () => {
  let component: Client1Page;
  let fixture: ComponentFixture<Client1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Client1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Client1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
