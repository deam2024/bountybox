// وظيفة شراء الحساب
function buyAccount(accountName) {
    alert("تم شراء " + accountName);
}

// إدارة تسجيل الدخول
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // تحقق بسيط من بيانات تسجيل الدخول
    if(email === "test@example.com" && password === "123456") {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "index.html"; // إعادة توجيه بعد تسجيل الدخول
    } else {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
});

// إدارة إنشاء الحساب
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // تحقق من توافق كلمة المرور
    if(password === confirmPassword) {
        alert("تم إنشاء الحساب بنجاح!");
        window.location.href = "login.html"; // إعادة توجيه إلى صفحة تسجيل الدخول
    } else {
        alert("كلمة المرور وتأكيد كلمة المرور غير متطابقتين.");
    }
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // هنا يمكنك إضافة منطق للتحقق من اسم المستخدم وكلمة المرور
    if (username === 'user' && password === 'password') { // استخدم بيانات اختبار
        alert('تسجيل الدخول ناجح!');
        // يمكنك إعادة التوجيه إلى الصفحة الرئيسية أو صفحة الحسابات
        window.location.href = 'index.html'; // على سبيل المثال
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});
