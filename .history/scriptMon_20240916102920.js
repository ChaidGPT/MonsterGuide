function goBack() {
  window.history.go(-1);
}

function goToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToStats() {
  setTimeout(() => {
    const collapseStats = document.querySelector("#collapseStats");
    const isStatsExpanded =
      collapseStats.getAttribute("aria-expanded") === "true";
    if (!isStatsExpanded) {
      collapseStats.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

function scrollToStats2() {
  setTimeout(() => {
    const collapseStats = document.querySelector("#collapseStats2");
    const isStatsExpanded =
      collapseStats.getAttribute("aria-expanded") === "true";
    if (!isStatsExpanded) {
      collapseStats.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

function scrollToLore() {
  setTimeout(() => {
    const collapseLore = document.querySelector("#collapseLore");
    const isLoreExpanded =
      collapseLore.getAttribute("aria-expanded") === "true";
    if (!isLoreExpanded) {
      collapseLore.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

function scrollToLords() {
  setTimeout(() => {
    const collapseLord = document.querySelector("#collapseLords");
    const isLordExpanded =
      collapseLord.getAttribute("aria-expanded") === "true";
    if (!isLordExpanded) {
      collapseLord.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
}

const imageContainer = document.querySelector(".monsterImageContainer");
const navbar = document.querySelector("header");
const footer = document.querySelector("footer");

// Function to scale the image when hovered
function scaleImageOnHover() {
  const image = imageContainer.querySelector("img");
  const originalWidth = image.naturalWidth;
  const originalHeight = image.naturalHeight;

  // Calculate the scaling factors based on the image dimensions
  const scaleX = originalWidth / (originalWidth * 0.75);
  const scaleY = originalHeight / (originalHeight * 0.75);

  // Apply the scaling transformation on hover
  image.addEventListener("mouseenter", () => {
    image.style.transform = `scale(${scaleX}, ${scaleY})`;
    // Bring the scaled image above the navbar and footer
    image.style.zIndex = "1";
    navbar.style.zIndex = "-1";
    footer.style.zIndex = "-1";
  });

  // Reset the scaling transformation when the mouse leaves
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
    // Reset the z-index back to default
    image.style.zIndex = "unset";
    navbar.style.zIndex = "unset";
    footer.style.zIndex = "unset";
  });
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

//scaleImageOnHover();