document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is working!");
    const audioList = document.querySelector(".audio-list");

 const audioLinks = [
        "https://drive.google.com/uc?id=1oem1NoKiwfsLzQXIOl57dNUN_GCDnsx2", // Pista1
        // لو نجح، هنضيف الـ 59 لينك التانيين هنا
    ];

    // إنشاء العناصر ديناميكيًا بناءً على اللينكات
    audioLinks.forEach((link, index) => {
        const audioItem = document.createElement("div");
        audioItem.classList.add("audio-item");

        const pistaText = document.createElement("span");
        pistaText.textContent = `Pista ${index + 1}`; // تصليح Template Literal

        const audio = document.createElement("audio");
        audio.controls = true;
        audio.src = link; // استخدام اللينك من القايمة

        console.log(`Trying to load: ${audio.src}`);

        const checkmark = document.createElement("span");
        checkmark.classList.add("checkmark");
        checkmark.innerHTML = "✔️";

        audio.addEventListener("ended", function () {
            checkmark.classList.add("show-checkmark");
        });

        audioItem.appendChild(pistaText);
        audioItem.appendChild(audio);
        audioItem.appendChild(checkmark);
        audioList.appendChild(audioItem);
    });
});
