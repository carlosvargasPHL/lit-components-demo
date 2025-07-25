import { LitElement, html, css, type PropertyValueMap } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("at-accordion-panel")
export class AtAccordionPanel extends LitElement {
  @property({ type: String }) description = "";
  @property({ type: String, attribute: "secondary-description" })
  secondaryDescription = "";
  @property({ type: Boolean, reflect: true }) expanded = false;
  @property({ type: String, attribute: "panel-id" }) panelId = "";
  @property({ type: String, attribute: "button-id" }) buttonId = "";
  @property({ type: String }) theme: "white" | "light" = "white";

  @query(".accordion-button") private _buttonElement!: HTMLButtonElement;
  @query(".content-panel") private _contentElement!: HTMLDivElement;

  focus(options?: FocusOptions): void {
    this._buttonElement?.focus(options);
  }

  private get _panelId(): string {
    return this.panelId || this.id + "-content";
  }

  private get _buttonId(): string {
    return this.buttonId || this.id + "-button";
  }

  static styles = css`
    :host {
      display: block;
    }

    /* Define internal custom properties based on external theme */
    :host([theme="white"]) {
      --accordion-panel-background-color: var(--at-color-white, #ffffff);
    }

    :host([theme="light"]) {
      --accordion-panel-background-color: var(--at-color-tint-shore-10, #f0f8ff);
    }

    .accordion-button {
      width: 100%;
      text-align: left;
      padding: 1rem;
      border: none;
      background: var(--accordion-panel-background-color);
      cursor: pointer;
      outline: none;
    }

    .at-d-none {
      display: none !important;
    }

    .accordion-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
  `;

  protected firstUpdated(
    changedProps: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    super.firstUpdated(changedProps);
    if (this.expanded) {
      this._buttonElement?.classList.add(
        "at-universal-accordion__header--expanded"
      );
      this._contentElement?.classList.remove("at-d-none");
    } else {
      this._contentElement?.classList.add("at-d-none");
    }
  }

  protected willUpdate(
    changedProps: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (changedProps.has("expanded")) {
      if (this._buttonElement) {
        this._buttonElement.classList.toggle(
          "at-universal-accordion__header--expanded",
          this.expanded
        );
      }

      if (this._contentElement) {
        this._contentElement.classList.toggle("at-d-none", !this.expanded);
      }
    }
  }

  private _toggleExpanded(event: Event) {
    event.preventDefault();
    this.expanded = !this.expanded;

    this.dispatchEvent(
      new CustomEvent("accordion-panel-toggled", {
        bubbles: true,
        composed: true,
        detail: { panelId: this._panelId, expanded: this.expanded },
      })
    );
  }

  private _chevronIcon = html`
    <svg
      class="accordion-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;

  render() {
    const hasSecondaryDescription = !!this.secondaryDescription;

    const headerClasses = `
      at-universal-accordion__header
      at-w-100 at-link at-d-flex
      at-border-top at-border-bottom at-border-left--none at-border-right--none at-border-radius--none
    `;

    const iconWrapperClasses = hasSecondaryDescription
      ? "at-align-items-end at-pt-6"
      : "at-align-items-center at-pt-5";

    return html`
      <h4
        class="at-universal-accordion__item at-m-0"
        role="heading"
        aria-level="4"
      >
        <button
          class="${headerClasses} accordion-button"
          id="${this._buttonId}"
          aria-controls="${this._panelId}"
          aria-expanded="${this.expanded}"
          @click="${this._toggleExpanded}"
          tabindex="0"
          role="button"
        >
          <div class="at-flex-shrink-0">
            <span
              class="at-d-flex at-justify-content-center ${iconWrapperClasses} at-ps-5 at-pe-6 at-pb-6"
            >
              ${this._chevronIcon}
            </span>
          </div>

          ${hasSecondaryDescription
            ? html`
                <div
                  class="at-d-flex at-flex-column at-flex-grow-1 at-ms-4 at-align-items-start"
                >
                  <span
                    class="at-font__text-button--sm at-my-0 at-align-text-left"
                    >${this.description}</span
                  >
                  <span
                    class="at-font__subtitle at-color--tint-ocean-90 at-mt-1 at-align-text-left"
                  >
                    ${this.secondaryDescription}
                  </span>
                </div>
              `
            : html`
                <span
                  class="at-font__text-button--sm at-my-3 at-ms-4 at-align-text-left"
                  >${this.description}</span
                >
              `}
        </button>
      </h4>

      <div
        id="${this._panelId}"
        class="content-panel at-px-4 at-pb-4 at-mt-1"
        role="region"
        aria-labelledby="${this._buttonId}"
      >
        <slot name="panel-content"></slot>
      </div>
    `;
  }
}
