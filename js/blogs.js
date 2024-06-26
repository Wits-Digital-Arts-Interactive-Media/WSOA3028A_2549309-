/* Blogs menu*/ 
document.addEventListener('DOMContentLoaded', () => {
    const blogs = [
        { title: "Exploring the Roots of Internet and Web Technologies", link: "blog1.html",  intro: "Exploring the history of the internet through readings and examining the first-ever published website was interesting. It's remarkable to witness the transformation from a simple text-based interface to the vibrant, multimedia-rich experiences we encounter today. "},
        { title: "Exploring Website Structure and Inspirations", link: "blog2.html" , intro:"I envision a blog page designed with a visually appealing timeline layout, featuring blocks representing individual blog posts. Each block displays the date and title of the post, along with a ‘’check it out’’ button for users to explore further. I've carefully considered the folder structure as follows."},
        { title: "Interaction Design and User Experience", link: "blog3.html" , img: "../Images/blog3.png",intro:"In the digital world, every pixel and code snippet play a crucial role in storytelling. The narrative isn't just in the content we produce but, in the journey, we craft for our users. This week, I dove into the art of interaction design to align my website's content, experience, and interface elements with the intricate expectations of diverse audiences. " },
        { title: "Reflection on wireframes in line with the IXD process", link: "blog4.html", img: "../Images/blog4.png", intro:"Reflecting on how my original wireframes are aligning with the IxD process, I believe they provide a solid foundation that captures my vision for the site. The structural layout aligns well with the user-centric design principles I am aiming to uphold. "},
        { title: "Advanced UX Strategies for Modern Web Design", link: "blog5.html", img: "../Images/blog5.png", intro:"Here are a few options of websites i want to inspect and analyse thier design practices"},
        { title: "Internet and the Just Society", link: "blog6.html" , img: "../Images/blog6.png",intro:"In the digital age, access to the internet is not just a luxury; it's a necessity for participation in the global economy, education, and democracy. Yet, a significant digital divide persists."},
        { title: "Integrating Game Design and Web Development for Positive Change", link: "blog7.html" , img: "../Images/blog7.png",intro:"As a student majoring in game design and interactive media, I’ve been reflecting on how the unique elements of these fields can be combined to create innovative and impactful digital experiences. " },
        { title: "Information Geographies and Digital Hegemony: A South African Perspective", link: "blog8.html" , img: "../Images/blog8.png", intro:"This week, my focus is on an examination of digital hegemonies and information geographies. The primary text by Graham, paired with insights from Ballatore , Greenstein, andKasapis , provides a view of the evolving digital landscape. Particularly, these works collectively explain how geographical and socio-economic contexts influence and are influenced by the Internet’s ubiquity."},
        { title: " Empowering Women Through the Internet in Africa", link: "blog9.html" , img: "../Images/blog9.png", intro:"Across the globe, the drive towards digital equality is gaining momentum, yet in Africa, women's access to this digital revolution remains staggeringly limited. The underrepresentation of African women in the digital space not only mirrors but also magnifies the gender inequities prevalent across the continent. This blog goes into the insights provided by Chenai Chair Magenya, who illuminates the path toward not just bridging this digital divide but also using technology as a catalyst for gender empowerment and systemic change." },
        { title: "Decolonizing Artificial Intelligence: Insights and Applications from Decolonial Theory", link: "blog10.html" , img: "../Images/blog10.png",intro:"In an age where artificial intelligence (AI) shapes many aspects of society—from healthcare and education to security and entertainment—the imperative to guide AI development with ethical considerations has never been more pressing. However, traditional frameworks for AI ethics often overlook how these technologies can perpetuate existing inequalities and colonial legacies. Integrating decolonial theory into AI development challenges these oversights, offering a pathway to create technologies that not only avoid harm but actively contribute to social justice and cultural recognition." },
        { title: "Reflecting on Development from Code to Culture", link: "blog11.html", img: "../Images/blog11.png",intro:"When developing a website, I utilize HTML, CSS, and JavaScript to ensure that the structure, style, and functionality come together to create an engaging and responsive experience for users." },
        { title: "The Conscience of the Internet", link: "blog12.html", img: "../Images/blog12.png",intro:"In the vast expanse of the digital age, the internet has transcended its role as a mere repository of information to become a pulsating public sphere, where every click and scroll unveils new ideas, cultures, and beliefs. This digital cosmos connects distant geographies and diverse minds, creating an unprecedented exchange of thoughts and experiences. Its where political movements can ignite from a single tweet, educational resources are accessed with a tap, and social interactions weave through the fibers of web-based communities. " },
        { title: "Rethinking Digital Technology in Africa: A Critique and Vision for Empowerment", link: "blog13.html", img: "../Images/blog13.png",intro:"Digital technology has become ubiquitous in Africa, offering immense potential for socio-economic development and cultural empowerment. However, its implementation often mirrors historical colonial practices, perpetuating dependency and stifling local innovation. " },
        { title: "From the World Wide Web to Local Wonders", link: "blog14.html", img: "../Images/blog14.png",intro:"As we navigate the vast expanse of the World Wide Web, it's crucial to understand the unique dynamics at play within specific contexts. From the democratization of information to bridging the digital divide,  delves into how local challenges and opportunities shape the way we design and interact with digital interfaces." },
        { title: "Reflection on Website from Feedback Session", link: "blog15.html", img: "../Images/blog15.png",intro:"Attending a feedback class on web development was a transformative experience, offering numerous tips and perspectives that I hadn't previously considered for my website." },
        { title: "Critical Reflection on My Design Process and Final Website", link: "blog16.html", img: "../Images/blog16.png",intro:"Creating my first website was an exhilarating journey that transformed my initial vision into a polished digital space. This reflection explores the evolution of my project, the strategic decisions made to balance creativity with functionality, and the invaluable lessons learned." },

        // Add more blog entries here
    ];

    const blogMenu = document.getElementById('blog-menu');

    // Generate blog list
    if (blogMenu) {
        blogs.forEach(blog => {
            const blogItem = document.createElement('li');
            blogItem.className = 'blog__item';
            blogItem.innerHTML = `
                
                <div class="blog__content">
                    <a href="${blog.link}" class="blog__link">
                        <h2>${blog.title}</h2>
                    </a>
                    <p class="blog__intro">${blog.intro}</p>
                    <a href="${blog.link}" class="read-more">Read more</a>
                </div>
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

        let breadcrumbHtml = `<a href="/WSOA3028A_2549309/index.html">Home</a>`;
        
        if (isBlogPage) {
            breadcrumbHtml += ` > <a href="/WSOA3028A_2549309/blogs/index.html">Blogs</a>`;
            const blogIndex = path.indexOf('blogs') + 1;
            if (blogIndex < path.length) {
                const blogTitle = path[blogIndex].replace('.html', '').replace(/-/g, ' ').toUpperCase();
                breadcrumbHtml += ` > ${blogTitle}`;
            }
        }

        breadcrumbContainer.innerHTML = breadcrumbHtml;
    }
});


/* side little Blogs menu inside blog posts*/ 
document.addEventListener('DOMContentLoaded', () => {
    const blogs = [
        { title: "Roots of the Web ", link: "blog1.html"},
        { title: "Interaction Design and User Experience", link: "blog3.html" },
        { title: "Wireframes and IXD process", link: "blog4.html"},
        { title: "UX Strategies for Modern Web Design", link: "blog5.html"},
        { title: "Internet and the Just Society", link: "blog6.html" },
        { title: "Game Design for Positive Change", link: "blog7.html"},
        { title: "Digital Hegemony in South African ", link: "blog8.html" , img: "../Images/blog8.png"},
        { title: " Empowering Women Through the Internet in Africa", link: "blog9.html"  },
        { title: "Decolonizing Artificial Intelligence", link: "blog10.html"  },
        { title: "Reflecting on Development from Code to Culture", link: "blog11.html"},
        { title: "The Conscience of the Internet", link: "blog12.html"},
        { title: "Rethinking Digital Technology in Africa", link: "blog13.html"},
        { title: "From the World Wide Web to Local Wonders", link: "blog14.html"},
        { title: "Reflection on Website from Feedback Session", link: "blog15.html"},
        { title: "Critical Reflection ", link: "blog16.html"},

        // Add more blog entries here
    ];

    const blogDropdown = document.getElementById('blog-dropdown');

    const currentPath = window.location.pathname.split('/').pop();
    let currentBlogIndex = blogs.findIndex(blog => blog.link === currentPath);

    // Populate dropdown menu
    if (blogDropdown) {
        blogs.forEach((blog, index) => {
            const option = document.createElement('option');
            option.value = blog.link;
            option.textContent = blog.title;
            if (index === currentBlogIndex) {
                option.selected = true;
            }
            blogDropdown.appendChild(option);
        });

        blogDropdown.addEventListener('change', (event) => {
            const selectedBlog = event.target.value;
            if (selectedBlog) {
                window.location.href = selectedBlog;
            }
        });
    }

   
        });
    