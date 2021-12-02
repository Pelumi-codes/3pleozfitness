export const scrollTo = (id) => {
  const el = document.querySelector(`#${id}`);

  if (el) {
    el.scrollIntoView();
  } else {
    return;
  }
};
