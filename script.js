// Initialize Lucide icons
lucide.createIcons();

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

sidebar.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Initialize EmailJS with your public key
emailjs.init("O1ONws53FULxlsldH");

// Enhanced Skills data with descriptions
const skills = [
  {
    name: "Python",
    level: 90,
    description: "Advanced data manipulation & analysis",
  },
  {
    name: "Pandas",
    level: 85,
    description: "Data structuring & analysis",
  },
  {
    name: "NumPy",
    level: 85,
    description: "Scientific computing & arrays",
  },
  {
    name: "Matplotlib",
    level: 80,
    description: "Data visualization",
  },
  {
    name: "Seaborn",
    level: 80,
    description: "Statistical data visualization",
  },
  {
    name: "Machine Learning",
    level: 75,
    description: "Predictive modeling & algorithms",
  },
  {
    name: "Data Analysis",
    level: 85,
    description: "Statistical analysis & insights",
  },
  {
    name: "AI",
    level: 75,
    description: "Artificial Intelligence applications",
  },
];

// Enhanced Projects data
const projects = [
  {
    title: "AI Assistant",
    description:
      "An intelligent virtual assistant powered by machine learning algorithms to help users with various tasks.",
    tech: ["Python", "NLP", "Machine Learning", "TensorFlow"],
    icon: "brain",

    sourceCode:
      "https://github.com/amit9129/AI-Assistant-/tree/main/AI%20Assistant%20Project",
    icon: "brain",
  },
  {
    title: "Automatic Parking System",
    description:
      "Smart parking solution using computer vision and AI to automate vehicle parking management.",
    tech: ["Python", "Computer Vision", "Deep Learning", "OpenCV"],
    icon: "database",

    sourceCode: "https://github.com/amit9129/automated_parking_system",
  },
  {
    title: "Zomato Data Analysis",
    description:
      "Comprehensive analysis of Zomato restaurant data to derive business insights and patterns. Includes customer behavior analysis, price optimization recommendations, and market trend predictions.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    icon: "bar-chart",

    sourceCode:
      "https://github.com/amit9129/Data_Science-Project/tree/main/Zomato_analysis",
  },
];

// Populate projects with buttons
const projectsContainer = document.getElementById("projects-container");
projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className = "project-card";
  projectElement.innerHTML = `
    <div class="project-content">
      <div class="project-icon">
        <i data-lucide="${project.icon}"></i>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.tech
          .map((tech) => `<span class="tech-tag">${tech}</span>`)
          .join("")}
      </div>
      <div class="project-buttons">
        </a>
        <a href="${project.sourceCode}" target="_blank" class="source-code">
          <i data-lucide="github"></i> Source Code
        </a>
      </div>
    </div>
  `;
  projectsContainer.appendChild(projectElement);
  lucide.createIcons();
});

// Populate skills with enhanced animation
const skillsContainer = document.getElementById("skills-container");
skills.forEach((skill) => {
  const skillElement = document.createElement("div");
  skillElement.className = "skill-card";
  skillElement.innerHTML = `
    <div class="skill-header">
      <span class="skill-name">${skill.name}</span>
      <span class="skill-level">${skill.level}%</span>
    </div>
    <div class="skill-bar">
      <div class="skill-progress" style="width: 0%"></div>
    </div>
    <p class="mt-4 text-gray-600 text-sm">${skill.description}</p>
  `;
  skillsContainer.appendChild(skillElement);
});

// Populate projects with enhanced styling
// (This section is removed as it is a duplicate)

// Animate skill bars on scroll with Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target.querySelector(".skill-progress");
        const targetWidth =
          progressBar.parentElement.parentElement.querySelector(
            ".skill-level"
          ).textContent;
        progressBar.style.width = targetWidth;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".skill-card").forEach((card) => {
  observer.observe(card);
});

// Animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("[data-aos]");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card) => {
    observer.observe(card);
  });

  // Add hover effects for certificate cards
  const certificateCards = document.querySelectorAll(".certificate-card");

  certificateCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    });
  });

  // Add smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Add dynamic badge animation
const badges = document.querySelectorAll(".certificate-badge");
badges.forEach((badge) => {
  badge.addEventListener("click", () => {
    badge.style.transform = "scale(1.1)";
    setTimeout(() => {
      badge.style.transform = "scale(1)";
    }, 200);
  });
});

// Enhanced Contact Form Handling with SMTP
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const formData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Basic form validation
  let isValid = true;
  Object.keys(formData).forEach((key) => {
    const input = document.getElementById(key);
    if (!formData[key].trim()) {
      input.classList.add("input-error");
      isValid = false;
    } else {
      input.classList.remove("input-error");
    }
  });

  if (!isValid) {
    showNotification("Please fill in all fields", "error");
    return;
  }

  // Show loading state
  const submitButton = document.querySelector(".submit-button");
  const originalButtonText = submitButton.innerHTML;
  submitButton.innerHTML =
    '<i data-lucide="loader-2" class="animate-spin"></i> Sending...';
  submitButton.disabled = true;

  // Send email using EmailJS
  emailjs
    .send(
      "service_zvhzbwk", // Replace with your EmailJS service ID
      "template_5syk4kn", // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: "Amit Kumar Singh",
      }
    )
    .then(
      function (response) {
        showNotification("Message sent successfully!", "success");
        document.getElementById("contactForm").reset();
      },
      function (error) {
        showNotification("Failed to send message. Please try again.", "error");
      }
    )
    .finally(() => {
      // Reset button state
      submitButton.innerHTML = originalButtonText;
      submitButton.disabled = false;
      lucide.createIcons(); // Recreate icons after DOM update
    });
});

// Notification system
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i data-lucide="${
      type === "success" ? "check-circle" : "alert-circle"
    }"></i>
    <span>${message}</span>
  `;
  document.body.appendChild(notification);
  lucide.createIcons();

  // Animate in
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}
// Initialize Lucide icons
lucide.createIcons();

// Contact Form Handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const formData = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      // Basic form validation
      let isValid = true;
      Object.keys(formData).forEach((key) => {
        const input = document.getElementById(key);
        if (!formData[key].trim()) {
          input.classList.add("input-error");
          isValid = false;
        } else {
          input.classList.remove("input-error");
        }
      });

      if (!isValid) {
        showNotification("Please fill in all fields", "error");
        return;
      }

      // Show loading state
      const submitButton = document.querySelector(".submit-button");
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<i data-lucide="loader-2" class="animate-spin"></i> Sending...';
      submitButton.disabled = true;

      // Send email using EmailJS
      emailjs
        .send(
          "service_zvhzbwk", // Replace with your EmailJS service ID
          "template_5syk4kn", // Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_name: "Amit Kumar Singh",
          }
        )
        .then(
          function (response) {
            showNotification("Message sent successfully!", "success");
            document.getElementById("contactForm").reset();
          },
          function (error) {
            showNotification("Failed to send message. Please try again.", "error");
          }
        )
        .finally(() => {
          // Reset button state
          submitButton.innerHTML = originalButtonText;
          submitButton.disabled = false;
          lucide.createIcons(); // Recreate icons after DOM update
        });
    });
  } else {
    console.error("Error: #contactForm not found in the DOM.");
  }
});
// Contact Form Handling
// (This section is removed as it is a duplicate)
