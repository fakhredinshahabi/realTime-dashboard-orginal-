import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Devicelist } from './devicelist';

describe('Devicelist', () => {
  let component: Devicelist;
  let fixture: ComponentFixture<Devicelist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Devicelist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Devicelist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
