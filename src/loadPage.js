function loadPage() {
  const content = document.createElement('div');
  const main = document.createElement('div');
  const sidebar = document.createElement('div');

  content.setAttribute('id', 'content');
  main.setAttribute('id', 'main');
  sidebar.setAttribute('id', 'sidebar');

  content.appendChild(main);
  content.appendChild(sidebar);
  return content;
}

export default loadPage;
