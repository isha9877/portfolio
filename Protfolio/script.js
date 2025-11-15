const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

//const checkbox = document.getElementById("checkbox")
//checkbox.addEventListener("change", () => {
//    document.body.classList.toggle("dark")
//})

// toggler

let theme = localStorage.getItem('data-theme');
const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
    localStorage.setItem("data-theme", "dark") // save theme to local storage
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light") // set theme light
    localStorage.setItem("data-theme", 'light') // save theme to local storage
}

const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme'); // Retrieve saved them from local storage
    if (theme === 'dark') {
        changeThemeToLight()
    } else {
        changeThemeToDark()
    }
});

// Form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields (Name, Email, Message)', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    showMessage('Sending your message...', 'info');
    
    try {
        // Create email content
        const emailContent = {
            to: 'ajithjojo1230@gmail.com',
            subject: 'New Message from Portfolio - ' + name,
            message: `
Name: ${name}
Email: ${email}
Phone: ${mobile || 'Not provided'}
Message: ${message}
            `
        };
        
        // Send email using Formspree (free service)
        const response = await fetch('https://formspree.io/f/xbljzpqq', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: mobile,
                message: message
            })
        });
        
        if (response.ok) {
            showMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
            contactForm.reset();
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            showMessage('Error sending message. Please try again or contact me directly at biztechisha@gmail.com', 'error');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Error sending message. Please try again later.', 'error');
    }
});

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show messages
function showMessage(text, type) {
    formMessage.textContent = text;
    formMessage.style.display = 'block';
    
    // Remove previous classes
    formMessage.classList.remove('success', 'error', 'info');
    
    // Add appropriate class
    if (type === 'success') {
        formMessage.style.backgroundColor = '#d4edda';
        formMessage.style.color = '#155724';
        formMessage.style.border = '1px solid #c3e6cb';
    } else if (type === 'error') {
        formMessage.style.backgroundColor = '#f8d7da';
        formMessage.style.color = '#721c24';
        formMessage.style.border = '1px solid #f5c6cb';
    } else if (type === 'info') {
        formMessage.style.backgroundColor = '#d1ecf1';
        formMessage.style.color = '#0c5460';
        formMessage.style.border = '1px solid #bee5eb';
    }
}

