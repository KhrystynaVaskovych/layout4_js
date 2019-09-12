export const modal = (function() {
  return {
    hideModal: (modal) => {
      modal.style.display = 'none';
      document.body.style.overflow = 'visible';
    },
  };
}());


