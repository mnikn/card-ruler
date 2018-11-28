import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEditorChatPanelComponent } from './game-editor-chat-panel.component';

describe('GameEditorChatPanelComponent', () => {
  let component: GameEditorChatPanelComponent;
  let fixture: ComponentFixture<GameEditorChatPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEditorChatPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEditorChatPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
