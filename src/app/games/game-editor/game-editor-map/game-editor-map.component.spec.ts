import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEditorMapComponent } from './game-editor-map.component';

describe('GameEditorMapComponent', () => {
  let component: GameEditorMapComponent;
  let fixture: ComponentFixture<GameEditorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEditorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEditorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
