import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNewsletterComponent } from './site-newsletter.component';

describe('SiteNewsletterComponent', () => {
  let component: SiteNewsletterComponent;
  let fixture: ComponentFixture<SiteNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteNewsletterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
