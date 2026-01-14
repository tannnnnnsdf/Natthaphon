document.addEventListener("DOMContentLoaded", async () => {
  await liff.init({ liffId: "LIFF_ID" });

  if (!liff.isLoggedIn()) {
    liff.login();
    return;
  }

  const profile = await liff.getProfile();

  const name = profile.displayName;

  // แสดงชื่อบนหน้าเว็บ
  document.getElementById("userName").value = name;
  document.getElementById("welcomeText").textContent =
    `สวัสดีคุณ ${name} 👋`;

  // จำชื่อไว้ (optional)
  localStorage.setItem("user_name", name);
});
