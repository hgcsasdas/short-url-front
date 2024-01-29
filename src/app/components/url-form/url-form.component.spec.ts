import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFormComponent } from './url-form.component';

describe('UrlFormComponent', () => {
  let component: UrlFormComponent;
  let fixture: ComponentFixture<UrlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
