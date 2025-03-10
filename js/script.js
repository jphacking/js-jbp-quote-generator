"use strict";

// DOM elements selected by their IDs for manipulation
const quoteContainerEl = document.getElementById("quote-container");
const quoteTextEl = document.getElementById("quote");
const authorTextEl = document.getElementById("author");
const btnShareOnX = document.getElementById("btnShareOnX");
const btnNewQuote = document.getElementById("btnNewQuote");
const loaderEl = document.getElementById("loader");

// Shows the loader element and hides the quote container.
function showLoader() {
  loaderEl.hidden = false;
  quoteContainerEl.hidden = true;
}

// Hides the loader element and shows the quote container.
function hideLoader() {
  loaderEl.hidden = true;
  quoteContainerEl.hidden = false;
}

// Selects a random quote from the localQuotes array and updates the DOM.
function displayRandomQuote() {
  showLoader();

  // Ensure localQuotes is defined (loaded from quote.js)
  if (typeof localQuotes === "undefined" || !Array.isArray(localQuotes)) {
    quoteTextEl.innerText = "No quotes available.";
    authorTextEl.innerText = "";
    hideLoader();
    return;
  }

  // Get a random index from the localQuotes array
  const randomIndex = Math.floor(Math.random() * localQuotes.length);
  const selectedQuote = localQuotes[randomIndex];

  // Update author text (default to 'Unknown' if missing)
  authorTextEl.innerText =
    selectedQuote.author && selectedQuote.author.trim() !== ""
      ? selectedQuote.author
      : "Unknown";

  // Adjust font size for long quotes
  if (selectedQuote.text.length > 120) {
    quoteTextEl.classList.add("long-quote");
  } else {
    quoteTextEl.classList.remove("long-quote");
  }

  // Update quote text in the DOM
  quoteTextEl.innerText = selectedQuote.text;
  hideLoader();
}

// Opens a new window to share the current quote on X.
function shareQuoteOnX() {
  const quote = quoteTextEl.innerText;
  const author = authorTextEl.innerText;
  // Encode the text for safe URL usage
  const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    quote + " - " + author
  )}`;
  window.open(shareUrl, "_blank");
}

// Event Listeners for button clicks
btnNewQuote.addEventListener("click", displayRandomQuote);
btnShareOnX.addEventListener("click", shareQuoteOnX);

// Display a random quote on initial load
displayRandomQuote();
