document.getElementById("blend-btn").addEventListener("click", () => {
  const surname = document.getElementById("surname").value;
  const font = document.getElementById("font").value;
  const color = document.getElementById("color").value;
  const size = document.getElementById("fontsize").value || 16;

  const output = document.getElementById("output");
  output.innerHTML = "";

  const pos = document.querySelector("input[name='pos']:checked").value;


// Looping  through each character in the surname
  [...surname].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
      // Applying  style based on the users selections
    span.style.fontFamily = font;
    span.style.color = color;
    span.style.fontSize = size + "px";
    span.style.position = "absolute";
     
    // Positioning logic
    if (pos === "seq") {
      span.style.left = (15 * (i + 1)) + "px";
      span.style.top = (15 * (i + 1)) + "px";
    } else if (pos === "rev") {
      span.style.left = (15 * (surname.length - i)) + "px";
      span.style.top = (15 * (surname.length - i)) + "px";
    } else if (pos === "rand") {
      span.style.left = Math.floor(Math.random() * 300) + "px";
      span.style.top = Math.floor(Math.random() * 100) + "px";
    }

    output.appendChild(span);
  });
});
