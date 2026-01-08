  <script>
        const defaultConfig = {
            church_name: "คริสตจักรสาวกพระเยซูกรุงเทพ",
            hero_title: "ยินดีต้อนรับสู่คริสตจักรสาวกพระเยซูกรุงเทพ",
            hero_subtitle: "JDM Bangkok Thailand – นมัสการพระเจ้า สร้างสาวก และแบ่งปันความรักของพระเยซูคริสต์",
            welcome_text: "เราเป็นคริสตจักรที่เป��ดรับทุกคน ไม่��่าคุณจะมาจากไหน เคยผ่านอะไรมา ที่นี่คือบ้านสำหรับทุกคน เราเชื่อในพระคุณของพระเจ้า และอยากเดินทางในความเชื่อไปพร้อมกับคุณ มาร่วมเป็นส่วนหนึ่งของครอบครัวที่รักกัน เติบโตไปด้วยกัน และสร้างความแตกต่างในโลกใบนี้",
            worship_time: "ทุกวันอาทิตย์ เวลา 10:00 น.",
            footer_verse: "\"เพราะว่าพระเจ้าทรงรักโลก จนได้ทรงประทานพระบุตรองค์เดียวของพระองค์ เพื่อทุกคนที่วางใจในพระบุตรนั้��จะไม่พินาศ แต่มีชีวิตนิรันดร์\" ยอห์น 3:16"
        };

        // Menu functionality
        const menuBtn = document.getElementById('menuBtn');
        const closeBtn = document.getElementById('closeBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });

        // Close menu when clicking menu items
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });

        // Language switcher functionality
        const langSwitch = document.getElementById('langSwitch');
        const langCurrent = document.getElementById('langCurrent');
        const currentLang = document.getElementById('currentLang');
        const langOptions = document.querySelectorAll('.lang-option');

        langCurrent.addEventListener('click', (e) => {
            e.stopPropagation();
            langSwitch.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langSwitch.classList.remove('active');
        });

        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                
                // Remove active class from all options
                langOptions.forEach(opt => opt.classList.remove('active-lang'));
                
                // Add active class to selected option
                option.classList.add('active-lang');
                
                // Update current language display
                if (selectedLang === 'th') {
                    currentLang.textContent = 'TH';
                } else if (selectedLang === 'en') {
                    currentLang.textContent = 'EN';
                } else if (selectedLang === 'ko') {
                    currentLang.textContent = 'KO';
                }
                
                // Close dropdown
                langSwitch.classList.remove('active');
                
                // Here you can add logic to change the page language
                console.log('Language changed to:', selectedLang);
            });
        });

        // Element SDK implementation
        async function onConfigChange(config) {
            const churchName = config.church_name || defaultConfig.church_name;
            const heroTitle = config.hero_title || defaultConfig.hero_title;
            const heroSubtitle = config.hero_subtitle || defaultConfig.hero_subtitle;
            const welcomeText = config.welcome_text || defaultConfig.welcome_text;
            const worshipTime = config.worship_time || defaultConfig.worship_time;
            const footerVerse = config.footer_verse || defaultConfig.footer_verse;

            document.getElementById('headerChurchName').textContent = churchName;
            document.getElementById('heroTitle').textContent = heroTitle;
            document.getElementById('heroSubtitle').textContent = heroSubtitle;
            document.getElementById('welcomeText').textContent = welcomeText;
            document.getElementById('worshipTime').textContent = worshipTime;
            document.getElementById('footerVerse').textContent = footerVerse;
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [],
                borderables: [],
                fontEditable: undefined,
                fontSizeable: undefined
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["church_name", config.church_name || defaultConfig.church_name],
                ["hero_title", config.hero_title || defaultConfig.hero_title],
                ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
                ["welcome_text", config.welcome_text || defaultConfig.welcome_text],
                ["worship_time", config.worship_time || defaultConfig.worship_time],
                ["footer_verse", config.footer_verse || defaultConfig.footer_verse]
            ]);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }
    </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9b995b5f0367d023',t:'MTc2NzY4MzAyMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script>