import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatatanDetailComponent } from './catatan-detail.component';

describe('CatatanDetailComponent', () => {
  let component: CatatanDetailComponent;
  let fixture: ComponentFixture<CatatanDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatatanDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatatanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
