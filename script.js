const infiList = document.getElementById('infi-list');
let itemCount = 0;
let isLoading = false;

function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement('li');
    li.textContent = `List Item ${itemCount}`;
    infiList.appendChild(li);
  }
  isLoading = false;
}

// Initial load of 10 items
addItems(10);

infiList.addEventListener('scroll', () => {
  if (isLoading) return; // Prevent multiple triggers

  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    isLoading = true;
    // Add 2 new items asynchronously to allow scroll update
    setTimeout(() => {
      addItems(2);
    }, 100);
  }
});
