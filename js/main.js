/* แสดง cookie banner ครั้งแรก */
(function () {
  const consent = localStorage.getItem('cookie_consent');
  const banner = document.getElementById('cookieBanner');
  if (!consent && banner) {
    banner.hidden = false;
  }
})();

/* กดยอมรับคุกกี้ */
function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  const banner = document.getElementById('cookieBanner');
  if (banner) banner.hidden = true;
}

/* เปิด policy เป็น popup */
function openPolicy(url) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById('policyContent').innerHTML = html;
      document.getElementById('policyModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    });
}

/* ปิด popup */
function closePolicy() {
  document.getElementById('policyModal').classList.remove('active');
  document.body.style.overflow = '';
}

// Prayer Form submission
    document.getElementById('prayerForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formSuccess = document.getElementById('prayerSuccess');
      formSuccess.classList.add('show');
      this.reset();
      
      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    });

(function () {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookie");
  const rejectBtn = document.getElementById("reject-cookie");
  const closeBtn  = document.getElementById("close-cookie-banner");

  const COOKIE_KEY = "cookieConsent"; 
  // ค่า: accepted | rejected

  // ถ้ามีการตัดสินใจแล้ว ไม่ต้องแสดง
  const consent = localStorage.getItem(COOKIE_KEY);
  if (consent === "accepted" || consent === "rejected") {
    banner.style.display = "none";
    return;
  }

  // ยอมรับ
  acceptBtn.addEventListener("click", function () {
    localStorage.setItem(COOKIE_KEY, "accepted");
    banner.style.display = "none";

    // ถ้ามี Analytics / Script อื่น
    // initAnalytics();
  });

  // ปฏิเสธ
  rejectBtn.addEventListener("click", function () {
    localStorage.setItem(COOKIE_KEY, "rejected");
    banner.style.display = "none";
  });

  // ปิดเฉย ๆ (ยังไม่เลือก)
  closeBtn.addEventListener("click", function () {
    banner.style.display = "none";
  });
})();


// Mobile menu toggle
    function toggleMobileMenu() {
      const nav = document.getElementById('main-nav');
      nav.classList.toggle('active');
    }
    
    // Dropdown toggle for mobile
    function toggleDropdown(event) {
      event.stopPropagation();
      const navItem = event.target.closest('.nav-item');
      const wasOpen = navItem.classList.contains('open');
      
      // Close all other dropdowns
      document.querySelectorAll('.nav-item.open').forEach(item => {
        if (item !== navItem) {
          item.classList.remove('open');
        }
      });
      
      // Toggle current dropdown
      navItem.classList.toggle('open', !wasOpen);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const nav = document.getElementById('main-nav');
      const toggle = document.querySelector('.nav-toggle');
      
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('active');
      }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // Element SDK Configuration
    const defaultConfig = {
      church_name: 'คริสตจักรสาวกพระเยซูกรุงเทพ',
      tagline: '"รักพระเจ้า รักผู้คน สร้างสาวก"',
      hero_title: 'ยินดีต้อนรับสู่คริสตจักร',
      hero_subtitle: 'ชุมชนแห่งความเชื่อ ความหวัง และความรัก',
      welcome_title: 'ยินดีต้อนรับ',
      welcome_text: 'เราเป็นชุมชนคริสเตียนที่อบอุ่นและเปิดกว้าง พร้อมต้อนรับทุกคนด้วยความรักของพระเจ้า ไม่ว่าคุณจะเพิ่งเริ่มต้นเดินทางฝ่ายจิตวิญญาณหรือเป็นผู้เชื่อมายาวนาน คุณจะพบว่านี่คือบ้านที่คุณสามารถเติบโตในความเชื่อและสร้างความสัมพันธ์ที่มีความหมาย',
      service_title: 'เวลานมัสการและกิจกรรม',
      service_day: 'ทุกวันอาทิตย์',
      service_time: '10:00 - 12:00 น.',
      background_color: '#1a1a2e',
      surface_color: '#ffffff',
      text_color: '#333333',
      accent_color: '#d4af37',
      secondary_color: '#16213e',
      font_family: 'Kanit',
      font_size: 16
    };

    async function onConfigChange(config) {
      const baseSize = config.font_size || defaultConfig.font_size;
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = 'Sarabun, sans-serif';
      
      // Update text content
      const elements = {
        'church-name': config.church_name || defaultConfig.church_name,
        'tagline': config.tagline || defaultConfig.tagline,
        'hero-title': config.hero_title || defaultConfig.hero_title,
        'hero-subtitle': config.hero_subtitle || defaultConfig.hero_subtitle,
        'welcome-title': config.welcome_title || defaultConfig.welcome_title,
        'welcome-text': config.welcome_text || defaultConfig.welcome_text,
        'service-title': config.service_title || defaultConfig.service_title,
        'service-day': config.service_day || defaultConfig.service_day,
        'service-time': config.service_time || defaultConfig.service_time
      };
      
      Object.keys(elements).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.textContent = elements[id];
        }
      });
      
      // Update fonts
      const headingSelectors = '.church-name, .hero-title, .section-title, .mission-title, .service-card-title, .mission-item-title, .footer-title';
      document.querySelectorAll(headingSelectors).forEach(el => {
        el.style.fontFamily = `${customFont}, ${baseFontStack}`;
      });
      
      // Update font sizes
      const churchNameEl = document.getElementById('church-name');
      if (churchNameEl) churchNameEl.style.fontSize = `${baseSize * 1.75}px`;
      
      const churchTaglineEl = document.getElementById('tagline');
      if (churchTaglineEl) churchTaglineEl.style.fontSize = `${baseSize}px`;
      
      const heroTitleEl = document.getElementById('hero-title');
      if (heroTitleEl) heroTitleEl.style.fontSize = `${baseSize * 3}px`;
      
      const heroSubtitleEl = document.getElementById('hero-subtitle');
      if (heroSubtitleEl) heroSubtitleEl.style.fontSize = `${baseSize * 1.375}px`;
      
      document.querySelectorAll('.section-title').forEach(el => {
        el.style.fontSize = `${baseSize * 2.25}px`;
      });
      
      document.querySelectorAll('.welcome-text').forEach(el => {
        el.style.fontSize = `${baseSize * 1.125}px`;
      });
      
      // Update colors
      const header = document.querySelector('.site-header');
      if (header) {
        header.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 50%, #0f3460 100%)`;
      }
      
      const footer = document.querySelector('.site-footer');
      if (footer) {
        footer.style.background = `linear-gradient(135deg, ${config.background_color || defaultConfig.background_color} 0%, ${config.secondary_color || defaultConfig.secondary_color} 50%, #0f3460 100%)`;
      }
      
      const accentColor = config.accent_color || defaultConfig.accent_color;
      document.querySelectorAll('.gold-text, .ornament, .church-tagline, .hero-subtitle, .footer-ornament').forEach(el => {
        el.style.color = accentColor;
      });
      
      document.querySelectorAll('.header-top-border, .footer-top-border').forEach(el => {
        el.style.background = `linear-gradient(90deg, transparent 0%, ${accentColor} 20%, ${accentColor} 80%, transparent 100%)`;
      });
      
      document.querySelectorAll('.section-title::after').forEach(el => {
        el.style.background = accentColor;
      });
      
      const surfaceColor = config.surface_color || defaultConfig.surface_color;
      document.querySelectorAll('.welcome-section, .service-card').forEach(el => {
        el.style.background = surfaceColor;
      });
      
      const textColor = config.text_color || defaultConfig.text_color;
      document.querySelectorAll('.section-title, .welcome-text, .service-card-title').forEach(el => {
        el.style.color = textColor;
      });
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (value) => {
              config.surface_color = value;
              window.elementSdk.setConfig({ surface_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.accent_color || defaultConfig.accent_color,
            set: (value) => {
              config.accent_color = value;
              window.elementSdk.setConfig({ accent_color: value });
            }
          },
          {
            get: () => config.secondary_color || defaultConfig.secondary_color,
            set: (value) => {
              config.secondary_color = value;
              window.elementSdk.setConfig({ secondary_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => {
            config.font_family = value;
            window.elementSdk.setConfig({ font_family: value });
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => {
            config.font_size = value;
            window.elementSdk.setConfig({ font_size: value });
          }
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ['church_name', config.church_name || defaultConfig.church_name],
        ['tagline', config.tagline || defaultConfig.tagline],
        ['hero_title', config.hero_title || defaultConfig.hero_title],
        ['hero_subtitle', config.hero_subtitle || defaultConfig.hero_subtitle],
        ['welcome_title', config.welcome_title || defaultConfig.welcome_title],
        ['welcome_text', config.welcome_text || defaultConfig.welcome_text],
        ['service_title', config.service_title || defaultConfig.service_title],
        ['service_day', config.service_day || defaultConfig.service_day],
        ['service_time', config.service_time || defaultConfig.service_time]
      ]);
    }

    // Initialize SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });

    }
