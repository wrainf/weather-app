function boxDetails(title, value) {
  const container = document.createElement('div');
  const key = document.createElement('div');
  const val = document.createElement('div');

  key.textContent = title;
  val.textContent = value;

  container.appendChild(key);
  container.appendChild(val);
  container.setAttribute('id', 'box-information');
  val.setAttribute('id', 'value');
  return container;
}

export default boxDetails;
