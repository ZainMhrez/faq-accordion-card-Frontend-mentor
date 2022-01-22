let faq = document.querySelectorAll(".text-section .questions-container .faq");

// run toggleAccordion after click any faq
faq.forEach((item) => item.addEventListener("click", toggleAccordion));

function toggleAccordion() {
  // get aria-expanded value for the clicked faq
  const itemToggle = this.getAttribute('aria-expanded');

  // set all aria-expanded values to false to collapse any open faq 
  for (let item of faq) {
    item.setAttribute('aria-expanded', 'false');
  }

  // set true for the clicked faq to expand
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
