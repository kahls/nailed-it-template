export default () => {
  const links = [...document.querySelectorAll('a')];
  if (!links) { return; }
  
  links.forEach((link) => link.style.transform = "red");
};