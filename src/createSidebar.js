import boxDetails from './boxDetails';

function createSidebar() {
  const sidebar = document.querySelector('#sidebar');
  const container = document.createElement('div');

  container.appendChild(boxDetails('Feels Like', ''));
  container.appendChild(boxDetails('High', ''));
  container.appendChild(boxDetails('Low', ''));
  container.appendChild(boxDetails('Humidity', ''));
  container.appendChild(boxDetails('Pressure', ''));
  container.appendChild(boxDetails('Wind', ''));
  container.setAttribute('id', 'sidebar-container');
  sidebar.appendChild(container);
}

export default createSidebar;
