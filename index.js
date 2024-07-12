const divider = document.querySelector(".divider");
const featurestabs = document.querySelectorAll(".features-tab");
const contents = document.querySelectorAll(".onclick");

const firstTab = featurestabs[0];

function updateUnderline(tab) {
  const rect = tab.getBoundingClientRect();
  const containerRect = tab.parentElement.getBoundingClientRect();
  const isColumnLayout = window.innerWidth <= 680;

  if (isColumnLayout) {
    divider.style.width = `${rect.width}px`;
    divider.style.height = "3px";
    divider.style.left = `${rect.left - containerRect.left}px`;
    divider.style.top = `${rect.bottom - containerRect.top + 5}px`;
  } else {
    divider.style.width = `${rect.width}px`;
    divider.style.height = "3px";
    divider.style.left = `${rect.left - containerRect.left}px`;
    divider.style.top = `${rect.bottom - containerRect.top + 5}px`;
  }

  divider.classList.add("active");
}

updateUnderline(firstTab);

featurestabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    featurestabs.forEach((item) => item.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    const id = e.target.id;

    const tabItem = document.getElementById(id);
    updateUnderline(tabItem);

    const tabContent = document.getElementById(`tab-${id}`);
    tabContent.classList.add("active");
  });
});

function toggleAnswer(button) {
  let arrowPath = button.querySelector(".arrow path");

  if (arrowPath) {
    arrowPath.parentNode.classList.toggle("rotated");

    if (arrowPath.getAttribute("stroke") === "#5267DF") {
      arrowPath.setAttribute("stroke", "hsl(0, 94%, 66%)");
    } else {
      arrowPath.setAttribute("stroke", "#5267DF");
    }
  }

  let faqAnswer = button.nextElementSibling;
  faqAnswer.classList.toggle("faq-answer-show");
}

// Mobile version

document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.getElementById('dropdownMenu');
  const nav = document.querySelector('.nav');
  
  
  hamburgerMenu.addEventListener('click', function() {
      nav.classList.toggle("nav-active");
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

 
  const dropCloseButton = document.querySelector('.drop-close');

dropCloseButton.addEventListener('click', function(event) {
    nav.classList.remove("nav-active");
    menu.style.display = 'none';
});

  updateUnderline(firstTab);
});

