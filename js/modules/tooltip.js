export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function createToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    tooltipBox.classList.add("tooltip");

    const text = element.getAttribute("aria-label");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver(event) {
    const map = this;
    const tooltipBox = createToolTipBox(map);

    onMouseMove.tooltipBox = tooltipBox;
    map.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.mapElement = map;
    map.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.mapElement.removeEventListener("mousemove", onMouseMove);
      this.mapElement.removeEventListener("mouseleave", onMouseLeave);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
