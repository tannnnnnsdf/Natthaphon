// js/include.js

function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  const tasks = [];

  elements.forEach(el => {
    const file = el.getAttribute('data-include');
    if (!file) return;

    const task = fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`ไม่พบไฟล์: ${file}`);
        return res.text();
      })
      .then(html => {
        el.innerHTML = html;
        el.removeAttribute('data-include');

        // เรียกฟังก์ชันเสริม เช่น เมนูมือถือ
        if (typeof initNavigation === 'function') {
          initNavigation();
        }
      })
      .catch(err => {
        console.error('โหลด include ไม่ได้:', err);
        el.innerHTML = '<!-- include failed -->';
      });

    tasks.push(task);
  });

  // 🔥 รอให้ทุก include เสร็จจริง ๆ
  Promise.all(tasks).then(() => {
    document.dispatchEvent(new Event('includesLoaded'));
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
