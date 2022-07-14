import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotopageComponent } from './photopage.component';

describe('PhotopageComponent', () => {
  let component: PhotopageComponent;
  let fixture: ComponentFixture<PhotopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotopageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
