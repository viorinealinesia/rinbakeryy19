# RinBakery — script.js

```javascript
/* =====================================================
   RINBAKERY
   MENU + SEARCH + FILTER + AUTO SCROLL + MUSIC
===================================================== */


/* =========================
   MENU
========================= */

const menus = [

    {
        name: "Chocolate Fudge Cake",
        category: "cake",
        price: "Rp45.000",
        description: "Cake cokelat lembut dengan lapisan chocolate fudge.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Strawberry Shortcake",
        category: "cake",
        price: "Rp48.000",
        description: "Vanilla sponge cake dengan strawberry dan whipped cream.",
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Red Velvet Cake",
        category: "cake",
        price: "Rp50.000",
        description: "Red velvet lembut dengan cream cheese frosting.",
        image: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Cheesecake",
        category: "cake",
        price: "Rp52.000",
        description: "Cheesecake creamy dengan tekstur lembut.",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Tiramisu Cake",
        category: "cake",
        price: "Rp55.000",
        description: "Cake kopi creamy dengan sentuhan cocoa.",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Carrot Cake",
        category: "cake",
        price: "Rp45.000",
        description: "Carrot cake lembut dengan cream cheese.",
        image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Lemon Cake",
        category: "cake",
        price: "Rp42.000",
        description: "Cake lemon segar dengan rasa citrus yang ringan.",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Black Forest",
        category: "cake",
        price: "Rp55.000",
        description: "Chocolate cake dengan cherry dan whipped cream.",
        image: "https://images.unsplash.com/photo-1602351447937-745cb720612f?auto=format&fit=crop&w=800&q=85"
    },


    {
        name: "Butter Croissant",
        category: "pastry",
        price: "Rp22.000",
        description: "Croissant renyah dengan aroma butter.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Chocolate Croissant",
        category: "pastry",
        price: "Rp25.000",
        description: "Croissant flaky dengan isian cokelat.",
        image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Cinnamon Roll",
        category: "pastry",
        price: "Rp23.000",
        description: "Cinnamon roll lembut dengan glaze manis.",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Apple Danish",
        category: "pastry",
        price: "Rp24.000",
        description: "Danish pastry renyah dengan apel manis.",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Blueberry Danish",
        category: "pastry",
        price: "Rp25.000",
        description: "Pastry buttery dengan blueberry.",
        image: "https://images.unsplash.com/photo-1614707267537-2b2e3c6f3b4a?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Pain au Raisin",
        category: "pastry",
        price: "Rp25.000",
        description: "French pastry dengan raisin dan custard.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=85"
    },


    {
        name: "Chocolate Brownie",
        category: "dessert",
        price: "Rp20.000",
        description: "Brownie cokelat fudgy dengan rasa intens.",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Chocolate Donut",
        category: "dessert",
        price: "Rp18.000",
        description: "Donat lembut dengan chocolate glaze.",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Strawberry Donut",
        category: "dessert",
        price: "Rp19.000",
        description: "Donat lembut dengan strawberry glaze.",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Vanilla Cupcake",
        category: "dessert",
        price: "Rp17.000",
        description: "Cupcake vanilla lembut dengan frosting.",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Chocolate Cupcake",
        category: "dessert",
        price: "Rp18.000",
        description: "Cupcake cokelat dengan chocolate frosting.",
        image: "https://images.unsplash.com/photo-1486427944299-d1955d23e340?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Macaron Box",
        category: "dessert",
        price: "Rp35.000",
        description: "Macaron warna-warni dengan berbagai rasa.",
        image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Panna Cotta",
        category: "dessert",
        price: "Rp28.000",
        description: "Dessert creamy dengan saus berry.",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Strawberry Parfait",
        category: "dessert",
        price: "Rp30.000",
        description: "Layered dessert dengan strawberry dan cream.",
        image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=85"
    },


    {
        name: "Cappuccino",
        category: "drink",
        price: "Rp25.000",
        description: "Espresso dengan steamed milk dan foam.",
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Caffe Latte",
        category: "drink",
        price: "Rp25.000",
        description: "Espresso creamy dengan steamed milk.",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Iced Coffee",
        category: "drink",
        price: "Rp23.000",
        description: "Kopi dingin dengan rasa creamy.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Strawberry Milk",
        category: "drink",
        price: "Rp24.000",
        description: "Susu creamy dengan strawberry.",
        image: "https://images.unsplash.com/photo-1553787499-6f1f1f6f3e3f?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Matcha Latte",
        category: "drink",
        price: "Rp27.000",
        description: "Matcha Jepang creamy dengan susu.",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Chocolate Milk",
        category: "drink",
        price: "Rp24.000",
        description: "Minuman cokelat creamy dan lembut.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Peach Tea",
        category: "drink",
        price: "Rp20.000",
        description: "Teh peach dingin dengan rasa fruity.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=85"
    },

    {
        name: "Lemon Tea",
        category: "drink",
        price: "Rp20.000",
        description: "Teh lemon segar dan ringan.",
        image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=85"
    }

];


/* =========================
   RENDER MENU
========================= */

const menuGrid = document.getElementById("menuGrid");

function renderMenus(list) {

    menuGrid.innerHTML = "";

    if (list.length === 0) {

        menuGrid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px;
            ">
                <h2>Menu tidak ditemukan 😢</h2>
                <p>Coba cari menu lainnya.</p>
            </div>
        `;

        return;
    }

    list.forEach(menu => {

        const card = document.createElement("article");

        card.className = "menu-card";

        card.innerHTML = `

            <img
                class="menu-image"
                src="${menu.image}"
                alt="${menu.name}"
                loading="lazy"
            >

            <div class="menu-info">

                <h3>${menu.name}</h3>

                <p>
                    ${menu.description}
                </p>

                <div class="menu-bottom">

                    <span class="price">
                        ${menu.price}
                    </span>

                    <button
                        class="order-btn"
                        onclick="addOrder('${menu.name}')"
                    >
                        + Pesan
                    </button>

                </div>

            </div>
        `;

        menuGrid.appendChild(card);

    });

}

renderMenus(menus);


/* =========================
   FILTER
========================= */

const categoryButtons =
    document.querySelectorAll(".category");

let selectedCategory = "all";

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        filterMenus();

    });

});


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");

searchInput.addEventListener("input", filterMenus);


function filterMenus() {

    const keyword =
        searchInput.value.toLowerCase().trim();

    const filtered = menus.filter(menu => {

        const matchesCategory =
            selectedCategory === "all" ||
            menu.category === selectedCategory;

        const matchesSearch =
            menu.name.toLowerCase()
                .includes(keyword);

        return matchesCategory && matchesSearch;

    });

    renderMenus(filtered);
}


/* =========================
   ORDER TOAST
========================= */

function addOrder(menuName) {

    const toast =
        document.getElementById("toast");

    toast.textContent =
        `${menuName} ditambahkan ke pesanan 🛒`;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* =====================================================
   AUTO SCROLL
   MULAI SETELAH 3 DETIK TIDAK ADA AKTIVITAS
===================================================== */

let autoScrollTimer;

let autoScrolling = false;

const inactivityTime = 3000;


/* mulai timer */

function resetAutoScrollTimer() {

    autoScrolling = false;

    clearTimeout(autoScrollTimer);

    autoScrollTimer = setTimeout(() => {

        startAutoScroll();

    }, inactivityTime);

}


/* aktivitas user */

[
    "mousemove",
    "mousedown",
    "touchstart",
    "keydown",
    "wheel",
    "scroll"
].forEach(event => {

    window.addEventListener(
        event,
        resetAutoScrollTimer,
        {
            passive: true
        }
    );

});


/* auto scroll */

function startAutoScroll() {

    if (autoScrolling) return;

    autoScrolling = true;

    scrollDown();

}


function scrollDown() {

    if (!autoScrolling) return;

    const bottom =
        window.innerHeight +
        window.scrollY >=
        document.documentElement.scrollHeight - 5;


    if (bottom) {

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        setTimeout(() => {

            if (autoScrolling) {
                scrollDown();
            }

        }, 800);

        return;
    }


    window.scrollBy({
        top: 1.2,
        behavior: "auto"
    });


    requestAnimationFrame(scrollDown);

}


/* start initial timer */

resetAutoScrollTimer();


/* =====================================================
   INSTRUMENTAL BAKERY MUSIC
   Dibuat langsung menggunakan Web Audio API
   Tidak membutuhkan file MP3/assets
===================================================== */

let audioContext = null;

let musicPlaying = false;

let musicTimer = null;

let masterGain = null;


/* chord progression */

const chords = [

    [261.63, 329.63, 392.00],

    [220.00, 261.63, 329.63],

    [174.61, 220.00, 261.63],

    [196.00, 246.94, 293.66]

];


let chordIndex = 0;


function createMusic() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

        masterGain =
            audioContext.createGain();

        masterGain.gain.value = 0.045;

        masterGain.connect(
            audioContext.destination
        );
    }


    function playChord() {

        if (!musicPlaying) return;

        const chord =
            chords[chordIndex];

        chord.forEach((frequency, index) => {

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();

            oscillator.type =
                index === 0
                    ? "sine"
                    : "triangle";

            oscillator.frequency.value =
                frequency;

            gain.gain.setValueAtTime(
                0,
                audioContext.currentTime
            );

            gain.gain.linearRampToValueAtTime(
                0.28,
                audioContext.currentTime + 0.8
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                audioContext.currentTime + 3.5
            );

            oscillator.connect(gain);

            gain.connect(masterGain);

            oscillator.start();

            oscillator.stop(
                audioContext.currentTime + 3.6
            );

        });


        chordIndex =
            (chordIndex + 1) %
            chords.length;


        musicTimer =
            setTimeout(playChord, 3000);

    }


    playChord();

}


/* music button */

const musicBtn =
    document.getElementById("musicBtn");


musicBtn.addEventListener("click", async () => {

    if (!audioContext) {

        createMusic();

    }

    if (
        audioContext.state ===
        "suspended"
    ) {

        await audioContext.resume();

    }


    musicPlaying =
        !musicPlaying;


    if (musicPlaying) {

        musicBtn.textContent =
            "🎵 Musik ON";

        createMusic();

    } else {

        musicBtn.textContent =
            "🔇 Musik OFF";

        clearTimeout(musicTimer);

        if (masterGain) {

            masterGain.gain.value = 0;

        }

    }

});
```
