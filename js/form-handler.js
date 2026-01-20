// js/form-handler.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. จัดการฟอร์มฝากคำอธิษฐาน (prayForm)
    const prayForm = document.getElementById('prayForm');
    if (prayForm) {
        prayForm.addEventListener('submit', function(e) {
            e.preventDefault(); // ป้องกันการโหลดหน้าใหม่
            handleFormSubmit(prayForm, 'อธิษฐาน');
        });
    }

    // 2. จัดการฟอร์มส่งข้อความติดต่อ (messageForm)
    const messageForm = document.getElementById('messageForm');
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(messageForm, 'ข้อความติดต่อ');
        });
    }
});

/**
 * ฟังก์ชันกลางสำหรับประมวลผลการส่งฟอร์ม
 */
async function handleFormSubmit(formElement, typeName) {
    const submitBtn = formElement.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    
    // เปลี่ยนสถานะปุ่มเพื่อบอกให้ผู้ใช้ทราบว่ากำลังทำงาน
    submitBtn.innerText = 'กำลังส่งข้อมูล...';
    submitBtn.disabled = true;

    // เก็บข้อมูลจากฟอร์ม
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData.entries());

    try {
        /* 
           ในที่นี้คือตัวอย่างการส่งไปยัง API หรือ Service สำหรับส่ง Email
           คุณสามารถเปลี่ยน URL นี้เป็น endpoint ของคุณในอนาคตได้
        */
        console.log(`กำลังส่งข้อมูล${typeName}:`, data);

        // จำลองการรอการตอบกลับจาก Server 1.5 วินาที
        await new Promise(resolve => setTimeout(resolve, 1500));

        // หากสำเร็จ
        showStatus(formElement, `ขอบคุณครับ! เราได้รับ${typeName}ของคุณเรียบร้อยแล้ว`, 'success');
        formElement.reset(); // ล้างข้อมูลในฟอร์ม

    } catch (error) {
        // หากเกิดข้อผิดพลาด
        console.error('Error:', error);
        showStatus(formElement, 'ขออภัย เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง', 'error');
    } finally {
        // คืนค่าปุ่มกลับมาเป็นปกติ
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
    }
}

/**
 * ฟังก์ชันแสดงข้อความแจ้งเตือนผลการส่ง
 */
function showStatus(form, message, type) {
    // ลบการแจ้งเตือนเก่าถ้ามี
    const oldMsg = form.querySelector('.form-status');
    if (oldMsg) oldMsg.remove();

    const statusDiv = document.createElement('div');
    statusDiv.className = `form-status mt-1 p-1 rounded text-center`;
    
    // ใช้สีตามตัวแปรใน variables.css
    if (type === 'success') {
        statusDiv.style.backgroundColor = '#d4edda';
        statusDiv.style.color = 'var(--color-success)';
        statusDiv.style.border = '1px solid var(--color-success)';
    } else {
        statusDiv.style.backgroundColor = '#f8d7da';
        statusDiv.style.color = 'var(--color-error)';
        statusDiv.style.border = '1px solid var(--color-error)';
    }

    statusDiv.innerText = message;
    form.appendChild(statusDiv);

    // หายไปเองหลังจาก 5 วินาที
    setTimeout(() => {
        statusDiv.style.opacity = '0';
        statusDiv.style.transition = 'opacity 0.5s ease';
        setTimeout(() => statusDiv.remove(), 500);
    }, 5000);
}
