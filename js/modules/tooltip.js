export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  createToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");
    const text = element.getAttribute("aria-label");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 170}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
  }
  onMouseOver({ currentTarget }) {
    this.createToolTipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }
  init() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
    return this;
  }
}
