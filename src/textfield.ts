import styleString from "./style.scss?inline";
import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("ug-textfield")
export class Textfield extends LitElement {
  static styles = unsafeCSS(styleString);

  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: String }) type:
    | "text"
    | "url"
    | "email"
    | "password"
    | "number"
    | "tel" = "text";
  @property({ type: Boolean }) required = false;
  @property({ type: String }) size: "small" | "large" | null = null;
  @property({ type: Boolean }) valid = false;
  @property({ type: Boolean }) invalid = false;

  private textfieldId = `textfield-${Math.random()
    .toString(36)
    .substring(2, 9)}`;

  private handleEvent(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    const newEvent = new Event(event.type, {
      bubbles: true,
      composed: true,
      cancelable: event.cancelable,
    });
    this.dispatchEvent(newEvent);
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has("value")) {
      const input = this.shadowRoot!.getElementById(
        this.textfieldId
      ) as HTMLInputElement;
      if (input && input.value !== this.value) {
        input.value = this.value as string;
      }
    }
  }

  render() {
    const sizeClass =
      this.size === "large"
        ? "form-control-lg"
        : this.size === "small"
        ? "form-control-sm"
        : "";

    const validityClass = this.valid
      ? "is-valid"
      : this.invalid
      ? "is-invalid"
      : "";

    return html`
      <div class="mb-3">
        ${this.label
          ? html`<label for="${this.textfieldId}" class="form-label"
              >${this.label} ${this.required ? html`<span>*</span>` : ""}</label
            >`
          : null}
        <input
          id="${this.textfieldId}"
          type=${this.type}
          class="form-control ${sizeClass} ${validityClass}"
          .value=${this.value}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          placeholder=${this.placeholder}
          ?required=${this.required}
          aria-describedby="help-${this.textfieldId}"
          @focus=${this.handleEvent}
          @blur=${this.handleEvent}
          @input=${this.handleEvent}
          @change=${this.handleEvent}
        />
        <div
          id="help-${this.textfieldId}"
          class="form-text ${this.invalid ? "invalid-feedback" : ""}"
        >
          <slot name="help-text"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ug-textfield": Textfield;
  }
}
