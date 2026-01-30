document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button');
  const navLinks = document.querySelectorAll('.nav-links a');
  const ctaButton = document.querySelector('.cta-button');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      if (button.classList.contains('button-primary')) {
        const href = this.getAttribute('data-href') || '#contact';
        if (href === '#contact' || this.textContent.includes('Contact') || this.textContent.includes('Get In Touch')) {
          const contactSection = document.querySelector('.cta-section');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else if (href === '#projects' || this.textContent.includes('View Projects')) {
          const projectsSection = document.querySelector('#projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const projectCards = document.querySelectorAll('.project-card, .project-item');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    const rect = item.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight;

    if (isVisible) {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    }
  });

  window.addEventListener('scroll', function() {
    experienceItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
      }
    });
  });

  const contactLinks = document.querySelectorAll('.hero-contact a, .contact-card a');
  contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (!this.href.includes('mailto:') && !this.href.includes('tel:')) {
        e.preventDefault();
        window.open(this.href, '_blank');
      }
    });
  });

  console.log("Into JS");
    var descriptions = document.querySelectorAll(".project-description");

    descriptions.forEach(function (desc) {
        var lineHeight = parseFloat(getComputedStyle(desc).lineHeight);
        var collapsedHeight = lineHeight * 5;

        if (desc.scrollHeight <= collapsedHeight) return;

        desc.style.maxHeight = collapsedHeight + "px";
        desc.style.overflow = "hidden";

        var button = document.createElement("a");
        button.href = "#";
        button.className = "read-more-page";
        button.textContent = "Read more";

        desc.after(button);

        button.addEventListener("click", function (e) {
            e.preventDefault();

            if (desc.classList.contains("open")) {
                desc.classList.remove("open");
                desc.style.maxHeight = collapsedHeight + "px";
                button.textContent = "Read more";
            } else {
                desc.classList.add("open");
                desc.style.maxHeight = desc.scrollHeight + "px";
                button.textContent = "Read less";
            }
        });
    });
});

window.addEventListener('load', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  });
});
