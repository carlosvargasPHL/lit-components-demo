import { LitElement, css, html } from "lit";
import { customElement, queryAll } from "lit/decorators.js";
import type { AtAccordionContainer } from "../components/Accordion/AtAccordionContainer"; // Import type for better typing

import "../components/Accordion/AtAccordionContainer";
import "../components/Accordion/AtAccordionPanel";

@customElement("home-page")
export class HomePage extends LitElement {
  // query all the page accordions to get their references
  @queryAll('at-accordion-container')
  private _accordions!: NodeListOf<AtAccordionContainer>;

  static styles = css`
    :host {
      display: block;
    }
    main {
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    h1,
    h2 {
      color: #0056b3;
    }
  `;

  render() {
    return html`
      <main>
        <h1>My Lit Components Demo Page</h1>

        <div class="at-css-grid">
          <div class="at-css-grid-layout">
            <div class="at-col-span-100">
              <h3 class="at-font__headline3 at-mt-0 at-mb-4 at-mb-md-5">
                White theme (default)
              </h3>
              <at-accordion-container
                id="accordion-1"
                class="at-universal-accordion at-border-bottom"
                ?expandAll="${false}"
              >
                <button
                  slot="show-hide-all-button"
                  class="at-btn at-btn--tertiary at-universal-accordion__show-hide-all"
                  @click="${() => this._toggleExpandAll(this._accordions[0])}" >
                  Toggle All
                </button>
                <at-accordion-panel
                  theme="white"
                  panel-id="accordion-panel-1"
                  button-id="accordion-button-1"
                  description="Accordion item description"
                  secondary-description="Secondary description"
                  ?expanded="${true}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for item 1.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="white"
                  panel-id="accordion-panel-2"
                  button-id="accordion-button-2"
                  description="Accordion item description"
                  secondary-description="Secondary description"
                  ?expanded="${false}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for item 2.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="white"
                  panel-id="accordion-panel-3"
                  button-id="accordion-button-3"
                  description="Accordion item description"
                  secondary-description="Secondary description"
                  ?expanded="${true}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for item 3.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="white"
                  panel-id="accordion-panel-4"
                  button-id="accordion-button-4"
                  description="Accordion item description"
                  secondary-description="Secondary description"
                  ?expanded="${false}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for item 4.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="white"
                  panel-id="accordion-panel-5"
                  button-id="accordion-button-5"
                  description="Accordion item description"
                  secondary-description="Secondary description"
                  ?expanded="${false}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for item 5.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="white"
                  panel-id="accordion-panel-6"
                  button-id="accordion-button-6"
                  description="Accordion item description"
                  ?expanded="${true}"
                  secondary-description=""
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>
                      Accordion content goes here for item 6 (no secondary
                      description).
                    </p>
                  </div>
                </at-accordion-panel>
              </at-accordion-container>
            </div>
          </div>

          <div class="at-css-grid-layout at-mt-10">
            <div class="at-col-span-100">
              <h3 class="at-font__headline3 at-mt-0 at-mb-4 at-mb-md-5">
                Light theme
              </h3>
              <at-accordion-container
                id="accordion-2"
                class="at-universal-accordion at-border-bottom"
                ?expandAll="${true}"
              >
                <button
                  slot="show-hide-all-button"
                  class="at-btn at-btn--tertiary at-universal-accordion__show-hide-all"
                  @click="${() => this._toggleExpandAll(this._accordions[1])}" >
                  Toggle All
                </button>
                <at-accordion-panel
                  theme="light"
                  panel-id="accordion-panel-100"
                  button-id="accordion-button-100"
                  description="Accordion item description"
                  secondary-description="Secondary description"
                  ?expanded="${true}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for light theme item 1.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="light"
                  panel-id="accordion-panel-101"
                  button-id="accordion-button-101"
                  description="Accordion item description"
                  secondary-description=""
                  ?expanded="${false}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for light theme item 2.</p>
                  </div>
                </at-accordion-panel>

                <at-accordion-panel
                  theme="light"
                  panel-id="accordion-panel-102"
                  button-id="accordion-button-102"
                  description="Accordion item description"
                  secondary-description="Another secondary description"
                  ?expanded="${true}"
                >
                  <div slot="panel-content" class="at-px-4 at-pb-4 at-mt-1">
                    <p>Accordion content goes here for light theme item 3.</p>
                  </div>
                </at-accordion-panel>
              </at-accordion-container>
            </div>
          </div>
        </div>
      </main>
    `;
  }

  /**
   * Toggles the `expandAll` property for a given AtAccordionContainer instance.
   * @param accordion The AtAccordionContainer instance to toggle.
   */
  private _toggleExpandAll(accordion: AtAccordionContainer) {
    if (accordion) {
      accordion.expandAll = !accordion.expandAll;
    }
  }
}