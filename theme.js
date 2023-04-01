document.documentElement.style.setProperty("--bg-color", "red");

let theme = "light";

const colors = {
  "--bg-color": "#bacddb",
  "--item-bg-color": "#ffffff",
  "--prime-color": "#3fa796",
  "--secondary-bg-color": "#898176",
  "--secondary-color": "#a03472",
  "--item-text-color": "#6c7156",
};

const darkTheme = {
  "--bg-color": "#2e3035",
  "--item-bg-color": "#474a51",
  "--prime-color": "#3fa796",
  "--secondary-bg-color": "#898176",
  "--secondary-color": "#a03472",
  "--item-text-color": "#ffffff",
};

const button = document.createElement("button");

button.textContent = "Change theme";
button.classList.add("theme-button");

body.append(button);

button.addEventListener("click", () => {
  if (theme === "light") {
    Object.keys(darkTheme).forEach((key) => {
      document.documentElement.style.setProperty(key, darkTheme[key]);
    });
    theme = "dark";
  } else {
    Object.keys(colors).forEach((key) => {
      document.documentElement.style.setProperty(key, colors[key]);
    });
    theme = "light";
  }
});

button.click();
