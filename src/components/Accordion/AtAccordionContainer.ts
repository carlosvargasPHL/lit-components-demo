import { LitElement, html, css, type PropertyValueMap } from "lit";
import {
  customElement,
  property,
  queryAssignedElements,
} from "lit/decorators.js";
import type { AtAccordionPanel } from "./AtAccordionPanel";

@customElement("at-accordion-container")
export class AtAccordionContainer extends LitElement {
  @property({ type: Boolean })
  expandAll!: boolean;

  @queryAssignedElements({ selector: "at-accordion-panel" })
  _panels!: AtAccordionPanel[];

  static styles = css`
    :host {
      display: block;
    }
    ::slotted(*) {
      margin-bottom: 1rem;
    }
  `;

  constructor() {
    super();
    this.expandAll = false;
    this.addEventListener("accordion-panel-toggled", this._handlePanelToggled);
  }

  render() {
    return html`
      <slot name="show-hide-all-button"></slot>
      <slot @slotchange=${this._handleSlotChange}></slot>
    `;
  }

  private _handleSlotChange() {
    this._updatePanelsState();
  }

  private _handlePanelToggled(event: Event) {
    const customEvent = event as CustomEvent;
    console.log(
      "Panel toggled:",
      customEvent.detail.panelId,
      "Expanded:",
      customEvent.detail.expanded
    );
  }

  private _updatePanelsState() {
    // Ensure _panels is populated before trying to iterate
    if (this._panels && this._panels.length > 0) {
      for (const panel of this._panels) {
        panel.expanded = this.expandAll;
      }
    } else {
      console.warn("AtAccordionContainer: No AtAccordionPanel elements found.");
    }
  } 

  protected firstUpdated(changedProps: PropertyValueMap<this>): void {
    super.firstUpdated(changedProps);
    this._updatePanelsState(); // Apply initial expandAll state
  }

  protected willUpdate(changedProps: PropertyValueMap<this>): void {
    if (changedProps.has("expandAll")) {
      this._updatePanelsState();
    }
  }
}
