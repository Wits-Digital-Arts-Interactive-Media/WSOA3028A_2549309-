document.addEventListener('DOMContentLoaded', () => {
    const blogs = [
        { title: "Exploring the Roots of Internet and Web Technologies", link: "blog1.html" },
        { title: "Exploring Website Structure and Inspirations", link: "blog2.html" },
        { title: "Interaction Design and User Experience", link: "blog3.html" },
        { title: "Navigating Creativity and Usability: A Journey in Responsive Design", link: "blog4.html" },
        { title: "Advanced UX Strategies for Modern Web Design", link: "blog5.html" },
        { title: "Internet and the Just Society", link: "blog6.html" },
        { title: "critical reflection", link: "blog7.html" },
        { title: "Information Geographies and Digital Hegemony: A South African Perspective", link: "blog8.html" },
        { title: " Empowering Women Through the Internet in Africa", link: "blog9.html" },
        { title: "Decolonizing Artificial Intelligence: Insights and Applications from Decolonial Theory", link: "blog10.html" },
        { title: "Reflecting on Development from Code to Culture", link: "blog11.html" },
        { title: "The Conscience of the Internet", link: "blog12.html" },
        { title: "Critical Reflection", link: "blog13.html" },
        // Add more blog entries here
    ];

    const blogMenu = document.getElementById('blog-menu');

    // Generate blog list
    if (blogMenu) {
        blogs.forEach(blog => {
            const blogItem = document.createElement('li');
            blogItem.className = 'blog__item';
            blogItem.innerHTML = `
                <a href="${blog.link}" class="blog__link">
                    <span>${blog.title}</span>
                </a>
            `;
            blogMenu.appendChild(blogItem);
        });
    }

    // Navigation logic for individual blog pages
    const prevBtn = document.getElementById('prev-post');
    const nextBtn = document.getElementById('next-post');
    const currentPath = window.location.pathname.split('/').pop();
    let currentBlogIndex = blogs.findIndex(blog => blog.link === currentPath);

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentBlogIndex > 0) {
                window.location.href = blogs[currentBlogIndex - 1].link;
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentBlogIndex < blogs.length - 1) {
                window.location.href = blogs[currentBlogIndex + 1].link;
            }
        });
    }
});
// Breadcrumbs for blogs
document.addEventListener('DOMContentLoaded', function () {
    const breadcrumbContainer = document.querySelector('.breadcrumbs');

    if (breadcrumbContainer) {
        const path = window.location.pathname.split('/').filter(segment => segment);
        const isBlogPage = path.includes('blogs');

        let breadcrumbHtml = `<a href="/index.html">Home</a>`;
        
        if (isBlogPage) {
            breadcrumbHtml += ` > <a href="/blogs/index.html">Blogs</a>`;
            const blogIndex = path.indexOf('blogs') + 1;
            if (blogIndex < path.length) {
                const blogTitle = path[blogIndex].replace('.html', '').replace(/-/g, ' ').toUpperCase();
                breadcrumbHtml += ` > ${blogTitle}`;
            }
        }

        breadcrumbContainer.innerHTML = breadcrumbHtml;
    }
});


