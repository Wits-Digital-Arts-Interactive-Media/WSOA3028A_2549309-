document.addEventListener('DOMContentLoaded', () => {
    const blogs = [
        { title: "Blog 1", link: "blog1.html" },
        { title: "Blog 2", link: "blog2.html" },
        { title: "Blog 3", link: "blog3.html" },
        { title: "Blog 4", link: "blog4.html" },
        { title: "Blog 5", link: "blog5.html" },
        { title: "Blog 6", link: "blog6.html" },
        { title: "Blog 7", link: "blog7.html" },
        { title: "Blog 8", link: "blog8.html" },
        { title: "Blog 9", link: "blog9.html" },
        { title: "Blog 10", link: "blog10.html" },
        { title: "Blog 11", link: "blog11.html" },
        { title: "Blog 12", link: "blog12.html" },
        { title: "Blog 13", link: "blog13.html" },
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


