export function trapFocus(lightbox) {
  const focusableElements = lightbox.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  lightbox.addEventListener("keydown", function (e) {
    const isTabPressed = e.key === "Tab" || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus(); // Retourne au dernier élément focusable
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusableElement) {
        e.preventDefault();
        firstFocusableElement.focus(); // Retourne au premier élément focusable
      }
    }
  });
}
