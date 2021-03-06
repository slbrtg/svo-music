import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMusicComponent } from './edit-music.component';

describe('EditMusicComponent', () => {
  let component: EditMusicComponent;
  let fixture: ComponentFixture<EditMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
