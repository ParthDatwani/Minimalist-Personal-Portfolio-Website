// Load the data from the JSON file and update the HTML content
fetch('json/profiledata.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('logo1').textContent = data.logo1;
        document.getElementById('logo2').textContent = data.logo2;
        document.getElementById('name').textContent = data.name;
        document.getElementById('title').textContent = data.title;
        document.getElementById('description').textContent = data.description;
        document.getElementById('line1').textContent = data.line1;
        document.getElementById('line2').textContent = data.line2;
        document.getElementById('line3').textContent = data.line3;
    })
    .catch(error => console.error('Error loading data:', error));
