const info = {
  "System Unit": {
    icon: "🖥️",
    title: "System Unit",
    text: "The system unit is the main enclosure that contains the computer's internal hardware components."
  },
  "Motherboard": {
    icon: "🟩",
    title: "Motherboard",
    text: "The motherboard is the main circuit board. It connects the CPU, RAM, storage, expansion cards, and other hardware."
  },
  "CPU": {
    icon: "🧠",
    title: "CPU — Central Processing Unit",
    text: "The CPU executes instructions and performs calculations. It is often called the main processor of the computer."
  },
  "RAM": {
    icon: "💾",
    title: "RAM — Random Access Memory",
    text: "RAM temporarily holds data and programs that the computer is actively using. More RAM can help with multitasking."
  },
  "GPU": {
    icon: "🎮",
    title: "GPU — Graphics Processing Unit",
    text: "The GPU processes and renders images, video, and graphics. It can be integrated into the processor or installed as a separate graphics card."
  },
  "Storage": {
    icon: "📦",
    title: "Storage — SSD",
    text: "Storage keeps files, applications, and the operating system even when the computer is turned off."
  },
  "Power Supply": {
    icon: "⚡",
    title: "Power Supply Unit",
    text: "The PSU converts electrical power from the outlet into the voltages needed by the computer's components."
  }
};

const marker = document.querySelector("#computerMarker");
const computer = document.querySelector("#computer");
const caseClosed = document.querySelector("#caseClosed");
const internals = document.querySelector("#internals");
const infoPanel = document.querySelector("#infoPanel");
const infoTitle = document.querySelector("#infoTitle");
const infoText = document.querySelector("#infoText");
const infoIcon = document.querySelector("#infoIcon");
const loading = document.querySelector("#loading");

function showInfo(component) {
  const item = info[component];
  if (!item) return;

  infoIcon.textContent = item.icon;
  infoTitle.textContent = item.title;
  infoText.textContent = item.text;
  infoPanel.classList.remove("hidden");
}

function closeInfo() {
  infoPanel.classList.add("hidden");
}

function openComputer() {
  caseClosed.setAttribute("visible", "false");
  internals.setAttribute("visible", "true");
}

function closeComputer() {
  caseClosed.setAttribute("visible", "true");
  internals.setAttribute("visible", "false");
  closeInfo();
}

document.querySelectorAll(".clickable").forEach(el => {
  el.addEventListener("click", (event) => {
    event.stopPropagation();
    const component = el.dataset.component;

    if (component === "System Unit") {
      openComputer();
    } else {
      showInfo(component);
    }
  });
});

document.querySelector("#closeInfo").addEventListener("click", closeInfo);
document.querySelector("#resetButton").addEventListener("click", closeComputer);

document.querySelector("#helpButton").addEventListener("click", () => {
  document.querySelector("#instructions").classList.remove("hidden");
});

document.querySelector("#closeInstructions").addEventListener("click", () => {
  document.querySelector("#instructions").classList.add("hidden");
});

marker.addEventListener("markerFound", () => {
  loading.style.display = "none";
});

marker.addEventListener("markerLost", () => {
  closeComputer();
});

// Hide loading after a short startup period even if camera permission
// takes a little while. The AR scene will continue initializing.
setTimeout(() => {
  loading.style.display = "none";
}, 7000);
