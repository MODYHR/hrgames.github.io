const websites = [
    { id: 1, name: 'Wave Clicker', url: 'Wave Clicker.html' },
    { id: 2, name: 'Memorize It', url: 'Memorize It.html' },
  ];


  document.addEventListener('DOMContentLoaded', () => {
    displayWebsites();
  });
  
  function displayWebsites() {
    const websitesList = document.getElementById('websites');
  
    websites.forEach(website => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = website.url;
      link.textContent = website.name;
      link.target = '_blank'; // Open link in a new tab
      listItem.appendChild(link);
      websitesList.appendChild(listItem);
    });
  }
  