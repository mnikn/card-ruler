import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivePanelComponent } from './interactive-panel.component';

describe('GameEditorChatPanelComponent', () => {
  let component: InteractivePanelComponent;
  let fixture: ComponentFixture<InteractivePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractivePanelComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractivePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
