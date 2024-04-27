document.addEventListener("DOMContentLoaded", function() {
  // Base path for the website, adjust if your site is in a subdirectory
  const basePath = '/WSOA3028A_2549309';  // Change this to match your deployment

  const navContainer = document.getElementById('nav-container');
  const navMenu = document.createElement('nav');
  navMenu.id = 'navbar';

  // Menu items for main navigation, now using basePath for absolute paths
  const menuItems = [
    { text: 'Home', href: `${basePath}/index.html` },
    { text: 'Blogs', href: `${basePath}/blogs/index.html` },
    { text: 'Portfolio', href: `${basePath}/portfolio/index.html` },
    { text: 'Essays', href: `${basePath}/essays/index.html` },
    { text: 'About', href: `${basePath}/About.html` },
    { text: 'Design Process', href: `${basePath}/design/index.html` }
  ];

  const ul = document.createElement('ul');
  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.href;
    li.appendChild(a);
    ul.appendChild(li);
  });

  navMenu.appendChild(ul);
  navContainer.appendChild(navMenu);

  // Additional features like setting up blog list and breadcrumbs can be initialized here if needed
  setupBlogListHoverEffects();
  setupBreadcrumbs();
});

function setupBlogListHoverEffects() {
  const blogList = document.getElementById('blog-list');
  const posts =[
    { title: 'Blog Post 1: Exploring the Roots of Internet and Web Technologies', url: 'blog1.html' },
    { title: 'Blog Post 2: Advanced CSS Techniques', url: 'blog2.html' },
    { title: 'Blog Post 3: Advanced CSS Techniques', url: 'blog3.html' },
    { title: 'Blog Post 4: Advanced CSS Techniques', url: 'blog4.html' },
    { title: 'Blog Post 5: Advanced CSS Techniques', url: 'blog5.html' },
    { title: 'Blog Post 6: Advanced CSS Techniques', url: 'blog6.html' },
    { title: 'Blog Post 7: Advanced CSS Techniques', url: 'blog7.html' },
    { title: 'Blog Post 8: Advanced CSS Techniques', url: 'blog8.html' },
    { title: 'Blog Post 9: Advanced CSS Techniques', url: 'blog9.html' },
    { title: 'Blog Post 10: Advanced CSS Techniques', url: 'blog10.html' },
    // Additional posts as needed
  ];


  if (blogList) {
    const ul = document.createElement('ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = post.title;
      a.href = post.url;

      a.addEventListener('mouseover', function() {
        this.style.color = '#4CAF50';
      });

      a.addEventListener('mouseout', function() {
        this.style.color = '';
      });

      li.appendChild(a);
      ul.appendChild(li);
    });

    blogList.appendChild(ul);
  }
}

function setupBreadcrumbs() {
  const breadcrumbContainer = document.getElementById('breadcrumbs');
  const pathElements = [
    { name: 'Home', url: '../index.html' },
    { name: 'Blogs', url: 'index.html' },
    { name: document.title, url: '#' }
  ];

  if (breadcrumbContainer) {
    const ol = document.createElement('ol');
    ol.style.listStyle = 'none';
    ol.style.padding = 0;

    pathElements.forEach((elem, index) => {
      const li = document.createElement('li');
      li.style.display = 'inline';
      if (index > 0) {
        li.innerHTML = ' &gt; ';
      }

      const a = document.createElement('a');
      if (elem.url !== '#') {
        a.href = elem.url;
        a.textContent = elem.name;
        a.addEventListener('mouseover', function() {
          this.style.color = '#4CAF50';
        });

        a.addEventListener('mouseout', function() {
          this.style.color = '';
        });

        li.appendChild(a);
      } else {
        a.textContent = elem.name;
        a.setAttribute('aria-current', 'page');
        a.style.color = '#4CAF50';  // Set current page color
        a.style.pointerEvents = 'none';  // No clicking on current page breadcrumb
        li.appendChild(a);
      }

      ol.appendChild(li);
    });

    breadcrumbContainer.appendChild(ol);
  }
}
