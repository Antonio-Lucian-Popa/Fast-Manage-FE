import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseTableComponent } from './merchandise-table.component';

describe('MerchandiseTableComponent', () => {
  let component: MerchandiseTableComponent;
  let fixture: ComponentFixture<MerchandiseTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandiseTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandiseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
