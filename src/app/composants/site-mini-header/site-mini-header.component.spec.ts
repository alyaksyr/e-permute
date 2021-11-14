import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMiniHeaderComponent } from './site-mini-header.component';

describe('SiteMiniHeaderComponent', () => {
  let component: SiteMiniHeaderComponent;
  let fixture: ComponentFixture<SiteMiniHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteMiniHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMiniHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
