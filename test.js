// ========================================
// IT KIDS — TEST SYSTEM
// ========================================


// ========================================
// 1. O'QUVCHI MA'LUMOTLARI
// ========================================

let firstName = "";
let lastName = "";
let selectedGrade = "";

let currentLanguage = "uz";


// ========================================
// 2. TEST HOLATI
// ========================================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = false;

let timeLeft = 30 * 60; // 30 daqiqa
let timerInterval;


// ========================================
// 3. SAVOLLAR (30 TA UZB / 30 TA RUS)
// ========================================

const questions = {

    uz: [

        // =========================
        // 1–25 KOMPYUTER QURILMALARI VA ASOSLARI
        // =========================

        {
            question: "Kompyuterdagi barcha amallarni muvofiqlashtiruvchi va boshqaruvchi asosiy plata qaysi?",
            answers: [
                "Ona plata (Motherboard)",
                "Qattiq disk (HDD)",
                "Videokarta",
                "Quvvat bloki"
            ],
            correct: 0
        },

        {
            question: "Vaqtinchalik ma'lumotlarni saqlaydigan va kompyuter o'chirilganda tozalanadigan xotira qaysi?",
            answers: [
                "ROM xotira",
                "Tezkor xotira (RAM)",
                "Fleshka",
                "Tashqi disk"
            ],
            correct: 1
        },

        {
            question: "Tasvirni ekranga chiqarish va grafik amallarni qayta ishlashga qaysi qurilma javobgar?",
            answers: [
                "Ovoz kartasi",
                "Setevoy karta",
                "Videokarta (GPU)",
                "Protsessor"
            ],
            correct: 2
        },

        {
            question: "Kompyuterdagi ma'lumotlarni uzoq muddat saqlash uchun qaysi qurilma ishlatiladi?",
            answers: [
                "RAM",
                "Kesh xotira",
                "Klaviatura",
                "Qattiq disk (HDD/SSD)"
            ],
            correct: 3
        },

        {
            question: "Kompyuter qismlarini elektr energiyasi bilan ta'minlaydigan qurilma qaysi?",
            answers: [
                "Quvvat bloki (Power Supply)",
                "Kuler (Ventilyator)",
                "Protsessor",
                "UPS"
            ],
            correct: 0
        },

        {
            question: "Qog'ozdagi matn yoki rasm ko'rinishidagi ma'lumotni kompyuterga kirituvchi qurilma qaysi?",
            answers: [
                "Printer",
                "Skaner",
                "Proyektor",
                "Plotter"
            ],
            correct: 1
        },

        {
            question: "Ovozli ma'lumotlarni kompyuterga kiritish uchun qaysi qurilmadan foydalaniladi?",
            answers: [
                "Karnay (Kolonka)",
                "Naushnik",
                "Mikrofon",
                "Veb-kamera"
            ],
            correct: 2
        },

        {
            question: "Kompyuterdagi audio ma'lumotlarni eshitish uchun qaysi qurilma ishlatiladi?",
            answers: [
                "Mikrofon",
                "Skaner",
                "Monitor",
                "Karnay (Kolonka)"
            ],
            correct: 3
        },

        {
            question: "Protsessorning qizib ketmasligini ta'minlaydigan sovitish tizimi nima deyiladi?",
            answers: [
                "Radiator va kuler",
                "Blok pitaniya",
                "Videokarta",
                "Modem"
            ],
            correct: 0
        },

        {
            question: "Fleshka (USB flash drive) kompyuterning qaysi portiga ulanadi?",
            answers: [
                "HDMI",
                "USB",
                "VGA",
                "LAN"
            ],
            correct: 1
        },

        {
            question: "Kompyuterni elektr energiyasi to'satdan o'chganda ma'lum muddat quvvat bilan ta'minlovchi manba qaysi?",
            answers: [
                "Stabilizator",
                "Ona plata",
                "UPS (Yaqin quvvat manbai)",
                "Kuler"
            ],
            correct: 2
        },

        {
            question: "Proyektor qurilmasining asosiy vazifasi nimadan iborat?",
            answers: [
                "Hujjatlarni chop etish",
                "Internet tarqatish",
                "Matn kiritish",
                "Tasvirni katta ekranga yoki devorga tushirish"
            ],
            correct: 3
        },

        {
            question: "Klaviatürada matnni katta harflar bilan yozish rejimini yoqish uchun qaysi tugma bosiladi?",
            answers: [
                "Caps Lock",
                "Shift",
                "Tab",
                "Enter"
            ],
            correct: 0
        },

        {
            question: "Matnda kiritish kursoridan chap tomondagi belgini o'chirish uchun qaysi tugma ishlatiladi?",
            answers: [
                "Delete",
                "BackSpace",
                "Space",
                "Esc"
            ],
            correct: 1
        },

        {
            question: "Matnda kiritish kursoridan o'ng tomondagi belgini o'chirish uchun qaysi tugma ishlatiladi?",
            answers: [
                "BackSpace",
                "Enter",
                "Delete",
                "Shift"
            ],
            correct: 2
        },

        {
            question: "SSD xotirasining an'anaviy HDD xotiradan asosiy afzalligi nimada?",
            answers: [
                "Hajmi kattaligi",
                "Arzonroqligi",
                "Og'irligi ko'pligi",
                "Ma'lumotlarni o'qish va yozish tezligi o'ta yuqoriligi"
            ],
            correct: 3
        },

        {
            question: "Kompyuter tarmoqqa yoki Internetga ulanishi uchun qaysi qurilma javobgar?",
            answers: [
                "Tarmoq kartasi (LAN / Wi-Fi adapter)",
                "Ovoz kartasi",
                "Videokarta",
                "RAM"
            ],
            correct: 0
        },

        {
            question: "Monitor va kompyuterni ulashda yuqori sifatli video va audio uzatuvchi zamonaviy kabel qaysi?",
            answers: [
                "VGA",
                "HDMI",
                "USB",
                "AUX"
            ],
            correct: 1
        },

        {
            question: "Klaviatüradagi eng uzun tugma qaysi va u nima uchun ishlatiladi?",
            answers: [
                "Enter — tasdiqlash uchun",
                "Backspace — o'chirish uchun",
                "Space (Probel) — so'zlar orasida bo'shliq qoldirish uchun",
                "Shift — belgi o'zgartirish uchun"
            ],
            correct: 2
        },

        {
            question: "Noutbuklarda sichqoncha o'rnini bosuvchi sensorli panel nima deyiladi?",
            answers: [
                "Trackball",
                "Keypad",
                "Display",
                "Touchpad"
            ],
            correct: 3
        },

        {
            question: "Klaviatürada kiritishni bekor qilish yoki darchani yopish uchun ishlatiladigan tugma qaysi?",
            answers: [
                "Esc",
                "Enter",
                "Alt",
                "Ctrl"
            ],
            correct: 0
        },

        {
            question: "Optik vositalardan (CD/DVD disklardan) ma'lumot o'qish qurilmasi qanday nomlanadi?",
            answers: [
                "Fleshka",
                "CD/DVD-ROM (Diskovod)",
                "Hard Drive",
                "Karta rider"
            ],
            correct: 1
        },

        {
            question: "Chop etish tezligi va sifati yuqori bo'lgan, kukundan foydalanuvchi printer turi qaysi?",
            answers: [
                "Matritsali printer",
                "Suyuq siyohli printer",
                "Lazerli printer",
                "Termoprinter"
            ],
            correct: 2
        },

        {
            question: "Klaviatüradagi F1-F12 tugmalari guruhi nima deb ataladi?",
            answers: [
                "Raqamli tugmalar",
                "Boshqaruv tugmalari",
                "Alfavit tugmalari",
                "Funksional tugmalar"
            ],
            correct: 3
        },

        {
            question: "Klaviatura o'ng tomonidagi raqamlar panelini yoqish va o'chirish tugmasi qaysi?",
            answers: [
                "Num Lock",
                "Caps Lock",
                "Scroll Lock",
                "Tab"
            ],
            correct: 0
        },


        // =========================
        // 26–30 MICROSOFT WORD SAVOLLARI
        // =========================

        {
            question: "Microsoft Word dasturida matnni og'ma (kursiv) ko'rinishga keltirish uchun qaysi tugma bosiladi?",
            answers: [
                "B",
                "I",
                "U",
                "S"
            ],
            correct: 1
        },

        {
            question: "Word dasturida barcha matnni bir yo'la ajratib olish (videleniye) uchun qaysi tugmalar bosiladi?",
            answers: [
                "Ctrl + B",
                "Ctrl + F",
                "Ctrl + A",
                "Ctrl + P"
            ],
            correct: 2
        },

        {
            question: "Word dasturida tayyor hujjatni qog'ozga chop etish oynasini ochish uchun qaysi tugmalar ishlatiladi?",
            answers: [
                "Ctrl + O",
                "Ctrl + N",
                "Ctrl + S",
                "Ctrl + P"
            ],
            correct: 3
        },

        {
            question: "Word dasturida matn ichidan kerakli so'zni qidirish (Poisk) oynasini ochish tugmasi qaysi?",
            answers: [
                "Ctrl + F",
                "Ctrl + H",
                "Ctrl + K",
                "Ctrl + J"
            ],
            correct: 0
        },

        {
            question: "Word dasturida sahifa o'lchamlarini va hoshiyalarini (polyalarini) sozlash qaysi menyu bo'limida bajariladi?",
            answers: [
                "Glavnaya (Asosiy)",
                "Maket (Razmetka stranitsi)",
                "Vstavka (Joylashtirish)",
                "Vid (Ko'rinish)"
            ],
            correct: 1
        }

    ],


    // ========================================
    // RUS TILI
    // ========================================

    ru: [

        // =========================
        // 1–25 УСТРОЙСТВА КОМПЬЮТЕРА И ОСНОВЫ
        // =========================

        {
            question: "Какая плата является основной и связывает все компоненты компьютера?",
            answers: [
                "Материнская плата (Motherboard)",
                "Жесткий диск (HDD)",
                "Видеокарта",
                "Блок питания"
            ],
            correct: 0
        },

        {
            question: "Какая память является временной и очищается при выключении компьютера?",
            answers: [
                "Память ПЗУ (ROM)",
                "Оперативная память (RAM)",
                "Флешка",
                "Внешний диск"
            ],
            correct: 1
        },

        {
            question: "Какое устройство отвечает за обработку графики и вывод изображения на экран?",
            answers: [
                "Звуковая карта",
                "Сетевая карта",
                "Видеокарта (GPU)",
                "Процессор"
            ],
            correct: 2
        },

        {
            question: "Какое устройство используется для долговременного хранения файлов на компьютере?",
            answers: [
                "Оперативная память",
                "Кэш-память",
                "Клавиатура",
                "Накопитель (HDD/SSD)"
            ],
            correct: 3
        },

        {
            question: "Какое устройство снабжает электричеством все компоненты компьютера?",
            answers: [
                "Блок питания",
                "Кулер",
                "Процессор",
                "ИБП (UPS)"
            ],
            correct: 0
        },

        {
            question: "Какое устройство служит для ввода бумажных документов и фото в компьютер?",
            answers: [
                "Принтер",
                "Сканер",
                "Проектор",
                "Плоттер"
            ],
            correct: 1
        },

        {
            question: "Какое устройство используется для ввода звуковой информации в компьютер?",
            answers: [
                "Колонки",
                "Наушники",
                "Микрофон",
                "Веб-камера"
            ],
            correct: 2
        },

        {
            question: "Какое устройство предназначено для вывода звука из компьютера?",
            answers: [
                "Микрофон",
                "Сканер",
                "Монитор",
                "Колонки (Акустическая система)"
            ],
            correct: 3
        },

        {
            question: "Как называется система охлаждения процессора?",
            answers: [
                "Радиатор и кулер (вентилятор)",
                "Блок питания",
                "Видеокарта",
                "Модем"
            ],
            correct: 0
        },

        {
            question: "В какой порт подключается USB-флешка?",
            answers: [
                "HDMI",
                "USB",
                "VGA",
                "Ethernet (LAN)"
            ],
            correct: 1
        },

        {
            question: "Какое устройство обеспечивает временное питание компьютера при отключении электричества?",
            answers: [
                "Стабилизатор",
                "Материнская плата",
                "ИБП (Источник бесперебойного питания)",
                "Кулер"
            ],
            correct: 2
        },

        {
            question: "Какова основная функция проектора?",
            answers: [
                "Печать документов",
                "Раздача интернета",
                "Ввод текста",
                "Проецирование изображения на большой экран или стену"
            ],
            correct: 3
        },

        {
            question: "Какая клавиша включает режим ввода заглавных (больших) букв на клавиатуре?",
            answers: [
                "Caps Lock",
                "Shift",
                "Tab",
                "Enter"
            ],
            correct: 0
        },

        {
            question: "Какая клавиша удаляет символ, находящийся слева от курсора?",
            answers: [
                "Delete",
                "Backspace",
                "Space",
                "Esc"
            ],
            correct: 1
        },

        {
            question: "Какая клавиша удаляет символ, находящийся справа от курсора?",
            answers: [
                "Backspace",
                "Enter",
                "Delete",
                "Shift"
            ],
            correct: 2
        },

        {
            question: "В чем главное преимущество SSD-накопителя перед обычным HDD?",
            answers: [
                "Больший объем за меньшие деньги",
                "Простота установки",
                "Большой вес",
                "Высокая скорость чтения и записи данных"
            ],
            correct: 3
        },

        {
            question: "Какое устройство отвечает за подключение компьютера к сети или интернету?",
            answers: [
                "Сетевая карта (Ethernet / Wi-Fi адаптер)",
                "Звуковая плата",
                "Видеокарта",
                "ОЗУ"
            ],
            correct: 0
        },

        {
            question: "Какой современный кабель передает одновременно видео и аудио высокого качества?",
            answers: [
                "VGA",
                "HDMI",
                "USB",
                "AUX"
            ],
            correct: 1
        },

        {
            question: "Какая клавиша на клавиатуре самая длинная и для чего она нужна?",
            answers: [
                "Enter — для подтверждения",
                "Backspace — для удаления",
                "Пробел (Space) — для разделения слов",
                "Shift — для смены регистра"
            ],
            correct: 2
        },

        {
            question: "Как называется сенсорная панель на ноутбуке, заменяющая мышь?",
            answers: [
                "Трекбол",
                "Клавиатура",
                "Монитор",
                "Тачпад (Touchpad)"
            ],
            correct: 3
        },

        {
            question: "Какая клавиша используется для отмены действия или выхода из меню?",
            answers: [
                "Esc",
                "Enter",
                "Alt",
                "Ctrl"
            ],
            correct: 0
        },

        {
            question: "Как называется устройство для чтения оптических дисков (CD/DVD)?",
            answers: [
                "Флешка",
                "Дисковод (CD/DVD-ROM)",
                "Жесткий диск",
                "Картридер"
            ],
            correct: 1
        },

        {
            question: "Какой тип принтера использует порошок (тонер) и отличается высокой скоростью печати?",
            answers: [
                "Матричный",
                "Струйный",
                "Лазерный",
                "Термопринтер"
            ],
            correct: 2
        },

        {
            question: "Как называется группа клавиш от F1 до F12 на клавиатуре?",
            answers: [
                "Цифровые клавиши",
                "Управляющие клавиши",
                "Алфавитные клавиши",
                "Функциональные клавиши"
            ],
            correct: 3
        },

        {
            question: "Какая клавиша включает и выключает цифровую панель справа на клавиатуре?",
            answers: [
                "Num Lock",
                "Caps Lock",
                "Scroll Lock",
                "Tab"
            ],
            correct: 0
        },


        // =========================
        // 26–30 MICROSOFT WORD
        // =========================

        {
            question: "Какая кнопка в Microsoft Word делает текст курсивным (наклонным)?",
            answers: [
                "Ж (B)",
                "К (I)",
                "Ч (U)",
                "S"
            ],
            correct: 1
        },

        {
            question: "Какое сочетание клавиш выделяет весь текст в документе Word?",
            answers: [
                "Ctrl + B",
                "Ctrl + F",
                "Ctrl + A",
                "Ctrl + P"
            ],
            correct: 2
        },

        {
            question: "Какое сочетание клавиш открывает окно печати документа в Word?",
            answers: [
                "Ctrl + O",
                "Ctrl + N",
                "Ctrl + S",
                "Ctrl + P"
            ],
            correct: 3
        },

        {
            question: "Какое сочетание клавиш вызывает окно поиска слова в документе Word?",
            answers: [
                "Ctrl + F",
                "Ctrl + H",
                "Ctrl + K",
                "Ctrl + J"
            ],
            correct: 0
        },

        {
            question: "В какой вкладке Word настраиваются поля и ориентация страницы?",
            answers: [
                "Главная",
                "Макет (Разметка страницы)",
                "Вставка",
                "Вид"
            ],
            correct: 1
        }

    ]

};


// ========================================
// 4. TIL O'ZGARTIRISH
// ========================================

function setLanguage(language) {

    currentLanguage = language;

    document.getElementById("uzBtn")
        .classList.remove("active");

    document.getElementById("ruBtn")
        .classList.remove("active");


    if (language === "uz") {

        document.getElementById("uzBtn")
            .classList.add("active");

        document.getElementById("title").textContent =
            "IT olamiga xush kelibsiz! 🚀";

        document.getElementById("subtitle").textContent =
            "Bilimingizni sinab ko‘ring va o‘z natijangizni biling!";

        document.getElementById("firstName").placeholder =
            "Ismingizni kiriting";

        document.getElementById("lastName").placeholder =
            "Familiyangizni kiriting";

        document.getElementById("startBtn").textContent =
            "🚀 TESTNI BOSHLASH";

    } else {

        document.getElementById("ruBtn")
            .classList.add("active");

        document.getElementById("title").textContent =
            "Добро пожаловать в мир IT! 🚀";

        document.getElementById("subtitle").textContent =
            "Проверьте свои знания и узнайте свой результат!";

        document.getElementById("firstName").placeholder =
            "Введите имя";

        document.getElementById("lastName").placeholder =
            "Введите фамилию";

        document.getElementById("startBtn").textContent =
            "🚀 НАЧАТЬ ТЕСТ";

    }

}


// ========================================
// 5. TESTNI BOSHLASH
// ========================================

function startTest() {

    firstName =
        document.getElementById("firstName")
            .value.trim();

    lastName =
        document.getElementById("lastName")
            .value.trim();

    selectedGrade =
        document.getElementById("grade")
            .value;


    if (firstName === "") {

        alert(
            currentLanguage === "uz"
                ? "Iltimos, ismingizni kiriting!"
                : "Пожалуйста, введите имя!"
        );

        return;
    }


    if (lastName === "") {

        alert(
            currentLanguage === "uz"
                ? "Iltimos, familiyangizni kiriting!"
                : "Пожалуйста, введите фамилию!"
        );

        return;
    }


    if (selectedGrade === "") {

        alert(
            currentLanguage === "uz"
                ? "Iltimos, sinfingizni tanlang!"
                : "Пожалуйста, выберите класс!"
        );

        return;
    }


    // TESTNI OCHISH

    document.getElementById("startScreen")
        .style.display = "none";

    document.getElementById("testScreen")
        .style.display = "block";


    // O'QUVCHI ISMI

    document.getElementById("studentName")
        .textContent =
        firstName + " " + lastName;


    currentQuestion = 0;
    score = 0;
    timeLeft = 30 * 60; // 30 daqiqa


    startTimer();

    showQuestion();

}


// ========================================
// 6. SAVOLNI KO'RSATISH
// ========================================

function showQuestion() {

    const testQuestions =
        questions[currentLanguage];

    const question =
        testQuestions[currentQuestion];


    selectedAnswer = false;


    // SAVOL RAQAMI

    document.getElementById("questionNumber")
        .textContent =
        currentQuestion + 1;


    // PROGRESS

    const progress =
        ((currentQuestion + 1) /
        testQuestions.length) * 100;

    document.getElementById("progressFill")
        .style.width =
        progress + "%";


    // SAVOL MATNI

    document.getElementById("question")
        .textContent =
        question.question;


    // JAVOBLAR

    const answersContainer =
        document.getElementById("answers");

    answersContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.className = "answer";

            button.textContent =
                String.fromCharCode(65 + index)
                + ". "
                + answer;


            button.onclick = function () {

                selectAnswer(
                    button,
                    index,
                    question.correct
                );

            };


            answersContainer.appendChild(button);

        }
    );


    // KEYINGI TUGMA

    const nextBtn =
        document.getElementById("nextBtn");

    nextBtn.style.display = "none";

    nextBtn.textContent =
        currentQuestion === testQuestions.length - 1

            ? (
                currentLanguage === "uz"
                    ? "🏆 Natijani ko‘rish"
                    : "🏆 Посмотреть результат"
            )

            : (
                currentLanguage === "uz"
                    ? "Keyingi →"
                    : "Далее →"
            );
}


// ========================================
// 7. JAVOBNI TANLASH
// ========================================

function selectAnswer(
    clickedButton,
    selectedIndex,
    correctIndex
) {

    if (selectedAnswer) {
        return;
    }

    selectedAnswer = true;


    const allAnswers =
        document.querySelectorAll(".answer");


    // TO'G'RI JAVOB

    allAnswers[correctIndex]
        .classList.add("correct");


    // AGAR NOTO'G'RI BO'LSA

    if (selectedIndex !== correctIndex) {

        clickedButton
            .classList.add("wrong");

    } else {

        score++;

    }


    // BARCHA JAVOBLARNI BLOKLASH

    allAnswers.forEach(
        button => {
            button.style.cursor = "default";
        }
    );


    // KEYINGI

    document.getElementById("nextBtn")
        .style.display = "block";

}


// ========================================
// 8. KEYINGI SAVOL
// ========================================

function nextQuestion() {

    const testQuestions =
        questions[currentLanguage];


    if (!selectedAnswer) {

        alert(
            currentLanguage === "uz"
                ? "Avval javobni tanlang!"
                : "Сначала выберите ответ!"
        );

        return;
    }


    currentQuestion++;


    if (currentQuestion >= testQuestions.length) {

        finishTest();

        return;
    }


    showQuestion();

}


// ========================================
// 9. TIMER (30 DAQIQA)
// ========================================

function startTimer() {

    clearInterval(timerInterval);


    timerInterval =
        setInterval(() => {

            timeLeft--;


            const minutes =
                Math.floor(timeLeft / 60);

            const seconds =
                timeLeft % 60;


            document.getElementById("timer")
                .textContent =
                String(minutes).padStart(2, "0")
                + ":"
                + String(seconds).padStart(2, "0");


            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                finishTest();

            }

        }, 1000);

}


// ========================================
// 10. TESTNI YAKUNLASH
// ========================================

function finishTest() {

    clearInterval(timerInterval);


    document.getElementById("testScreen")
        .style.display = "none";


    document.getElementById("resultScreen")
        .style.display = "flex";


    // ISM

    document.getElementById("resultName")
        .textContent =
        firstName + " " + lastName;


    // SINF

    document.getElementById("resultGrade")
        .textContent =
        currentLanguage === "uz"
            ? selectedGrade + "-sinf"
            : selectedGrade + " класс";


    // BALL

    document.getElementById("score")
        .textContent =
        score + " / 30";


    // FOIZ

    const percentage =
        Math.round((score / 30) * 100);


    document.getElementById("percentage")
        .textContent =
        percentage + "%";


    // NATIJA MATNI

    if (currentLanguage === "uz") {

        document.getElementById("resultTitle")
            .textContent =
            "🎉 Test yakunlandi!";

    } else {

        document.getElementById("resultTitle")
            .textContent =
            "🎉 Тест завершён!";

    }

}


// ========================================
// 11. BOSH SAHIFAGA QAYTISH
// ========================================

function goHome() {

    window.location.href = "../index.html";

}