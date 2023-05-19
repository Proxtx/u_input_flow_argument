export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.indexInput = this.document.getElementById("argumentIndexInput");
  }

  setConfig(config) {
    this.config = config;
  }

  getValue() {
    return {
      flowArgumentOverwrite: true,
      index: Number(this.indexInput.component.value),
      evaluate: true,
    };
  }

  async setValue(v) {
    await uiBuilder.ready(this.indexInput);
    this.indexInput.component.value = v.index;
  }
}
