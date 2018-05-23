function selectFromFragment() {
  let hash = window.location.hash.slice(1);
  if (hash == "") return;

  let split = hash.split('(');
  let type = split[0];
  let selector = decodeURIComponent(split[1].split(')')[0]);
  console.log('selector type:', type);
  console.log('selector:', selector);

  let found = false;

  switch (type) {
    case 'querySelector':
    case 'querySelectorAll':
      found = document[type](selector);
      break;
    case 'evaluate':
      // evaluate needs a context
      found = document[type](selector, document.body);
      break;
    default:
      console.log(`Error: selector of ${type} is invalid`);
  }
  console.log('found:', found);
}

window.addEventListener('hashchange', () => selectFromFragment(), false);
document.addEventListener('DOMContentLoaded', () => selectFromFragment());
