$(document).ready(function() {
    // Set 'ALL' filter to active on page load
    $('.filter-btn[data-filter="all"]').addClass('active');
    $('.dropdown-contentfilter-dropdown [data-filter="all"]').addClass('active');

    // Function to create a status dot based on the project status
    function createStatusDot(status) {
        const color = status === 'active' ? '#66FF00' : status === 'closed' ? '#DD0004' : status === 'work' ? '#E300FC' : '#4169E1';
        return `<span class="status-dot" style="color: ${color};">●</span>`;
    }

    // Function to insert projects into the container
    function displayProjects(projects) {
        const container = $('#projects-container');
        container.empty(); // Clear the container
        
        projects.forEach(project => {
            const projectHTML = `
            <div onclick="location.href='${project.externalLink}';" class="project-item" target="_blank" data-category="${project.toolUsed}" data-link-name="${project.title}">
                <div class="project-header">
                    <h4>${project.title}</h4>
                    ${createStatusDot(project.status)}
                </div>
                <p>${project.description}</p>
                <img src="${project.imagePath}" alt="${project.title}" />
            </div>
        `;
            container.append(projectHTML);
        });
    }
    
    // Load the data from the JSON file
    $.getJSON('json/Project.json', function(data) {
        displayProjects(data.projects);
    });

    // Filter projects on button click
    $('.filter-btn').click(function() {
        const filter = $(this).data('filter');
        
        // Remove 'active' class from all buttons and then add to the clicked one
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        // Filter project items
        if (filter === 'all') {
            $('.project-item').show();
        } else {
            $('.project-item').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    
    // Filter projects on dropdown clicks
    $('.filter-dropdown').click(function() {
        const filter = $(this).data('filter');
        
        // Remove 'active' class from all buttons and then add to the clicked one
        $('.filter-dropdown').removeClass('active');
        $(this).addClass('active');
        
        // Filter project items
        if (filter === 'all') {
            $('.project-item').show();
        } else {
            $('.project-item').each(function() {
                if ($(this).data('category') === filter) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});
