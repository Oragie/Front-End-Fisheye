export function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener("keydown", function (e) {
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
