document.addEventListener("DOMContentLoaded", function () {
    const newsForm = document.getElementById("news-form");
    const newsContainer = document.getElementById("news-container");

    newsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // الحصول على المدخلات
        const title = document.getElementById("news-title").value;
        const content = document.getElementById("news-content").value;

        // إنشاء عنصر جديد للخبر
        const newsItem = document.createElement("article");
        newsItem.classList.add("news-item");
        newsItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

        // إضافة الخبر إلى القائمة
        newsContainer.appendChild(newsItem);

        // مسح الحقول بعد النشر
        newsForm.reset();
    });
});
