import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlanckLayoutComponent } from './blanck-layout.component';

describe('BlanckLayoutComponent', () => {
  let component: BlanckLayoutComponent;
  let fixture: ComponentFixture<BlanckLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlanckLayoutComponent]
    });
    fixture = TestBed.createComponent(BlanckLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
