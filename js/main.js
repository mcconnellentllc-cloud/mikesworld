/* ============================================
   Pasture Perfect Premium Beef - Main JavaScript
   ============================================ */

// Mobile Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      const menu = document.getElementById('navLinks');
      menu.classList.remove('active');
    });
  });
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
  }
});

// FAQ Toggle
function toggleFaq(element) {
  const faqItem = element.parentElement;
  const isActive = faqItem.classList.contains('active');

  // Close all FAQ items
  document.querySelectorAll('.faq-item').forEach(function(item) {
    item.classList.remove('active');
  });

  // Open clicked one if it wasn't already open
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// PayPal Payment Integration
function initiatePayPal() {
  // PayPal.me link or PayPal checkout
  // Replace with actual PayPal business email or PayPal.me link
  var paypalEmail = 'kim@theperfectbeef.com';
  var paypalUrl = 'https://www.paypal.com/paypalme/PasturePerfectBeef';

  // Show payment modal
  showPaymentModal('paypal', paypalUrl);
}

// Venmo Payment Integration
function initiateVenmo() {
  // Venmo username for the business
  var venmoUsername = 'PasturePerfectBeef';
  var venmoUrl = 'https://venmo.com/' + venmoUsername;

  // Show payment modal
  showPaymentModal('venmo', venmoUrl);
}

// Payment Modal
function showPaymentModal(method, url) {
  // Remove existing modal if any
  var existing = document.getElementById('paymentModal');
  if (existing) existing.remove();

  var methodName = method === 'paypal' ? 'PayPal' : 'Venmo';
  var methodColor = method === 'paypal' ? '#0070ba' : '#3d95ce';

  var modal = document.createElement('div');
  modal.id = 'paymentModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;';

  modal.innerHTML = '' +
    '<div style="background:white;border-radius:12px;padding:2.5rem;max-width:480px;width:100%;text-align:center;position:relative;">' +
      '<button onclick="closePaymentModal()" style="position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.5rem;cursor:pointer;color:#999;">&times;</button>' +
      '<div style="font-size:2.5rem;margin-bottom:1rem;">' + (method === 'paypal' ? '&#128179;' : '&#128177;') + '</div>' +
      '<h2 style="font-family:Playfair Display,serif;color:#3e2723;margin-bottom:0.5rem;">Pay with ' + methodName + '</h2>' +
      '<p style="color:#666;margin-bottom:1.5rem;">Complete your Pasture Perfect Premium Beef order</p>' +

      '<div style="background:#f5f0e8;border-radius:8px;padding:1.5rem;margin-bottom:1.5rem;text-align:left;">' +
        '<h3 style="font-family:Playfair Display,serif;color:#3e2723;font-size:1rem;margin-bottom:1rem;">How to Pay:</h3>' +
        '<ol style="color:#555;font-size:0.95rem;line-height:1.8;padding-left:1.2rem;">' +
          '<li>Contact us to confirm your order &amp; total</li>' +
          '<li>Click the button below to open ' + methodName + '</li>' +
          '<li>Send payment to <strong>@PasturePerfectBeef</strong></li>' +
          '<li>Include your order details in the note</li>' +
        '</ol>' +
      '</div>' +

      '<a href="' + url + '" target="_blank" rel="noopener" ' +
        'style="display:inline-block;padding:0.9rem 2.5rem;background:' + methodColor + ';color:white;border-radius:25px;font-weight:600;font-size:1rem;letter-spacing:1px;text-decoration:none;transition:all 0.3s;">' +
        'Open ' + methodName +
      '</a>' +

      '<p style="color:#999;font-size:0.8rem;margin-top:1.25rem;">Or call <strong>(970) 301-3857</strong> to place your order by phone</p>' +

      '<div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid #eee;display:flex;justify-content:center;gap:1rem;">' +
        '<span style="font-size:0.75rem;color:#bbb;letter-spacing:1px;">SECURE</span>' +
        '<span style="font-size:0.75rem;color:#bbb;">&#128274;</span>' +
        '<span style="font-size:0.75rem;color:#bbb;letter-spacing:1px;">ENCRYPTED</span>' +
      '</div>' +
    '</div>';

  document.body.appendChild(modal);

  // Close on backdrop click
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closePaymentModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', function handler(e) {
    if (e.key === 'Escape') {
      closePaymentModal();
      document.removeEventListener('keydown', handler);
    }
  });
}

function closePaymentModal() {
  var modal = document.getElementById('paymentModal');
  if (modal) modal.remove();
}

// Contact Form Handler
function handleContactSubmit(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Build mailto link as a simple solution
  var mailSubject = subject ? ('Inquiry: ' + subject) : 'Website Inquiry';
  var mailBody = 'Name: ' + name + '%0D%0A' +
                 'Email: ' + email + '%0D%0A' +
                 'Phone: ' + (phone || 'Not provided') + '%0D%0A%0D%0A' +
                 'Message:%0D%0A' + encodeURIComponent(message);

  window.location.href = 'mailto:kim@theperfectbeef.com?subject=' + encodeURIComponent(mailSubject) + '&body=' + mailBody;

  // Show success message
  var form = document.getElementById('contactForm');
  form.innerHTML = '' +
    '<div style="text-align:center;padding:3rem 1rem;">' +
      '<div style="font-size:3rem;margin-bottom:1rem;">&#9989;</div>' +
      '<h3 style="font-family:Playfair Display,serif;color:#3e2723;margin-bottom:0.5rem;">Thank You!</h3>' +
      '<p style="color:#666;">Your email client should open with your message. If it doesn\'t, please email us directly at <strong>kim@theperfectbeef.com</strong> or call <strong>(970) 301-3857</strong>.</p>' +
    '</div>';
}

// Cut Sheet Form Handler
function handleCutSheetSubmit(event) {
  event.preventDefault();

  var form = document.getElementById('cutSheetForm');
  var fields = [
    { id: 'custName', label: 'Name' },
    { id: 'custEmail', label: 'Email' },
    { id: 'custPhone', label: 'Phone' },
    { id: 'orderType', label: 'Order Type' },
    { id: 'finishType', label: 'Finish Preference' },
    { id: 'steakCut', label: 'Steaks Bone-In/Boneless' },
    { id: 'steakThickness', label: 'Steak Thickness' },
    { id: 'steaksPerPkg', label: 'Steaks Per Package' },
    { id: 'ribSteak', label: 'Rib Section' },
    { id: 'loinChoice', label: 'Loin Section' },
    { id: 'sirloinChoice', label: 'Sirloin' },
    { id: 'roundChoice', label: 'Round Section' },
    { id: 'roastBone', label: 'Roasts Bone-In/Boneless' },
    { id: 'roastSize', label: 'Roast Size' },
    { id: 'chuckChoice', label: 'Chuck Section' },
    { id: 'groundPkgSize', label: 'Ground Beef Package Size' },
    { id: 'patties', label: 'Patties' },
    { id: 'shortRibs', label: 'Short Ribs' },
    { id: 'stewMeat', label: 'Stew Meat' },
    { id: 'soupBones', label: 'Soup Bones' },
    { id: 'organMeats', label: 'Organ Meats' },
    { id: 'specialInstructions', label: 'Special Instructions' }
  ];

  var mailSubject = 'Cut Sheet - ' + document.getElementById('custName').value + ' - ' + document.getElementById('orderType').value;

  var bodyLines = [];
  bodyLines.push('BEEF CUT SHEET');
  bodyLines.push('====================');
  bodyLines.push('');

  fields.forEach(function(field) {
    var el = document.getElementById(field.id);
    var val = el ? el.value : '';
    if (val) {
      bodyLines.push(field.label + ': ' + val);
    }
  });

  var mailBody = bodyLines.join('%0D%0A');

  window.location.href = 'mailto:kim@theperfectbeef.com?subject=' + encodeURIComponent(mailSubject) + '&body=' + mailBody;

  form.innerHTML = '' +
    '<div style="text-align:center;padding:3rem 1rem;">' +
      '<h3 style="font-family:var(--font-heading);color:var(--color-white);margin-bottom:0.5rem;font-weight:400;">Cut Sheet Submitted</h3>' +
      '<p style="color:var(--color-light-gray);font-weight:300;">Your email client should open with your cut sheet. If it doesn\'t, please email us directly at <strong>kim@theperfectbeef.com</strong> or call <strong>(970) 301-3857</strong>.</p>' +
    '</div>';
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Simple scroll animation for elements
document.addEventListener('DOMContentLoaded', function() {
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe product cards, feature cards, timeline items
  var animateElements = document.querySelectorAll('.product-card, .feature-card, .testimonial-card, .timeline-item, .value-card, .payment-card');
  animateElements.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
