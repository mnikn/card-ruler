import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEditorToolboxPanelComponent } from './game-editor-toolbox-panel.component';

describe('GameEditorToolboxPanelComponent', () => {
  let component: GameEditorToolboxPanelComponent;
  let fixture: ComponentFixture<GameEditorToolboxPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEditorToolboxPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEditorToolboxPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
