/**
 * js/include.js
 * ระบบโหลด HTML Components และเรียกใช้ Logic หลังโหลดเสร็จ
 * อัปเดตล่าสุด: 2026 สำหรับคริสตจักรสาวกพระเยซูกรุงเทพ
 */

async function includeHTML() {
    // 1. ดึง Element ทั้งหมดที่มี attribute 'data-include'
    const elements = document.querySelectorAll('[data-include]');
    
    // สร้าง Array ของ Promise เพื่อรอการโหลดให้เสร็จพร้อมกัน
    const tasks = Array.from(elements).map(async (el) => {
        const file = el.getAttribute('data-include');
        if (!file) return;

        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`ไม่สามารถโหลดไฟล์: ${file}`);
            
            const html = await response.text();
            el.innerHTML = html;
            
            // ลบ attribute ออกเพื่อป้องกันการโหลดซ้ำ
            el.removeAttribute('data-include');

            // 2. ตรวจสอบว่าถ้าเป็นไฟล์ Header ให้รันระบบ Navigation ทันที
            if (file.includes('header.html')) {
                if (typeof initNavigation === 'function') {
                    initNavigation();
                    console.log('ระบบเมนู Header ถูกเริ่มต้นแล้ว');
                } else {
                    console.warn('ไม่พบฟังก์ชัน initNavigation ในไฟล์ js/header-logic.js');
                }
            }
            
            return file;
        } catch (error) {
            console.error('Include Error:', error);
            el.innerHTML = `<div style="padding:10px; color:red;">Error loading component: ${file}</div>`;
        }
    });

    // 3. เมื่อทุกไฟล์ถูก Include เสร็จสิ้นจริง ๆ
    await Promise.all(tasks);
    
    // ส่ง Event แจ้งเตือนว่า "โหลดหน้าเว็บครบถ้วนแล้ว" (เผื่อใช้ในอนาคต)
    document.dispatchEvent(new Event('allIncludesLoaded'));
    console.log('รวม Components ทั้งหมดสำเร็จในปี 2026');
}

// เริ่มทำงานเมื่อ DOM โครงสร้างหลักพร้อม
document.addEventListener('DOMContentLoaded', includeHTML);