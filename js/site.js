/**
 * Visant.AI shared site script
 * Mobile nav toggle, GA4 conversion events, lead form submission.
 */
(function () {
  'use strict';

  // --- GA4 helper (no-ops if gtag is blocked/unavailable) ---
  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  // --- Mobile navigation toggle ---
  var navToggle = document.querySelector('.nav-toggle');
  var siteHeader = document.querySelector('.site-header');
  if (navToggle && siteHeader) {
    navToggle.addEventListener('click', function () {
      siteHeader.classList.toggle('nav-open');
      var links = document.querySelector('.nav-links');
      if (links) links.classList.toggle('open');
    });
  }

  // --- cta_signup_click on every signup CTA ---
  document.querySelectorAll('a[href^="https://app.visant.ai/signup"]').forEach(function (link) {
    link.addEventListener('click', function () {
      var section = link.closest('section[id], [data-section]');
      track('cta_signup_click', {
        page: window.location.pathname,
        location: link.getAttribute('data-loc') || (section ? (section.id || section.getAttribute('data-section')) : 'page')
      });
    });
  });

  // --- pricing_view (fires once when the pricing section is seen) ---
  var pricing = document.querySelector('#pricing, [data-pricing]');
  if (pricing && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          track('pricing_view', { page: window.location.pathname });
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(pricing);
  }

  // --- Lead form ---
  var form = document.getElementById('lead-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = form.querySelector('[name="email"]');
      var email = emailInput ? emailInput.value.trim() : '';
      if (!email || email.indexOf('@') === -1) {
        if (emailInput) emailInput.focus();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      var payload = {
        email: email,
        name: (form.querySelector('[name="name"]') || {}).value || '',
        company: (form.querySelector('[name="company"]') || {}).value || '',
        message: (form.querySelector('[name="message"]') || {}).value || '',
        page: window.location.pathname
      };

      function showSuccess() {
        track('lead_submit', { page: window.location.pathname });
        form.hidden = true;
        var success = document.getElementById('lead-success');
        if (success) success.hidden = false;
      }

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(showSuccess)
        .catch(showSuccess); // never punish the visitor for a network hiccup
    });
  }
})();
