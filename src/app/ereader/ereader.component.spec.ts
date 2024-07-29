import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EReaderComponent } from './ereader.component';

describe('EReaderComponent', () => {
  let component: EReaderComponent;
  let fixture: ComponentFixture<EReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EReaderComponent]
    });
    fixture = TestBed.createComponent(EReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
