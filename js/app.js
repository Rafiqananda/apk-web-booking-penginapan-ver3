const STORAGE_KEYS = {
    stays: "stayNestStaysV2",
    users: "stayNestUsersV2",
    currentUser: "stayNestCurrentUserV2",
    bookings: "stayNestBookingsV2"
};

const DEFAULT_STAYS = [
    {
        id: 1,
        name: "Hotel Boulevard Manado",
        category: "Hotel",
        price: 550000,
        area: "Wenang",
        address: "Jl. Pierre Tendean, Manado",
        lat: 1.4822,
        lng: 124.8455,
        rating: 4.4,
        facilities: ["Wi-Fi", "AC", "Restoran", "Parkir"],
        description: "Contoh data penginapan di kawasan pusat kota Manado.",
        emoji: "🏨"
    },
    {
        id: 2,
        name: "Four Points by Sheraton Manado",
        category: "Hotel",
        price: 1200000,
        area: "Wenang",
        address: "Kawasan bisnis Manado, Sulawesi Utara",
        lat: 1.4788,
        lng: 124.8428,
        rating: 4.6,
        facilities: ["Wi-Fi", "AC", "Kolam Renang", "Restoran", "Parkir"],
        description: "Contoh data hotel dengan fasilitas lengkap.",
        emoji: "🏨"
    },
    {
        id: 3,
        name: "Hotel Aryaduta Manado",
        category: "Hotel",
        price: 850000,
        area: "Wenang",
        address: "Pusat kota Manado, Sulawesi Utara",
        lat: 1.4851,
        lng: 124.8443,
        rating: 4.3,
        facilities: ["Wi-Fi", "AC", "Kolam Renang", "Restoran"],
        description: "Contoh data penginapan di pusat kota.",
        emoji: "🏨"
    },
    {
        id: 4,
        name: "Ibis Manado City Center Boulevard",
        category: "Hotel",
        price: 480000,
        area: "Sario",
        address: "Area City Center Boulevard, Manado",
        lat: 1.4689,
        lng: 124.8420,
        rating: 4.2,
        facilities: ["Wi-Fi", "AC", "Restoran", "Parkir"],
        description: "Contoh data hotel di area boulevard.",
        emoji: "🏨"
    },
    {
        id: 5,
        name: "Homestay Malalayang",
        category: "Homestay",
        price: 220000,
        area: "Malalayang",
        address: "Kawasan Malalayang, Manado",
        lat: 1.4512,
        lng: 124.7905,
        rating: 4.0,
        facilities: ["Wi-Fi", "Dapur", "Parkir"],
        description: "Contoh homestay sederhana untuk perjalanan hemat.",
        emoji: "🏡"
    },
    {
        id: 6,
        name: "Villa Minahasa View",
        category: "Villa",
        price: 950000,
        area: "Tomohon",
        address: "Kawasan Tomohon, Sulawesi Utara",
        lat: 1.3235,
        lng: 124.8392,
        rating: 4.5,
        facilities: ["Wi-Fi", "Dapur", "Parkir", "Pemandangan"],
        description: "Contoh villa dengan suasana pegunungan.",
        emoji: "🏡"
    },
    {
        id: 7,
        name: "Penginapan dekat Danau Tondano",
        category: "Homestay",
        price: 300000,
        area: "Tondano",
        address: "Kawasan Danau Tondano, Minahasa",
        lat: 1.3033,
        lng: 124.9142,
        rating: 4.1,
        facilities: ["Parkir", "Dapur", "Pemandangan"],
        description: "Contoh penginapan untuk menjelajahi kawasan Danau Tondano.",
        emoji: "🏡"
    },
    {
        id: 8,
        name: "Guest House Bunaken",
        category: "Homestay",
        price: 400000,
        area: "Bunaken",
        address: "Pulau Bunaken, Sulawesi Utara",
        lat: 1.6235,
        lng: 124.7608,
        rating: 4.2,
        facilities: ["Wi-Fi", "Restoran", "Pemandangan"],
        description: "Contoh data penginapan di kawasan wisata Bunaken.",
        emoji: "🏡"
    },
    {
        id: 9,
        name: "Villa Airmadidi",
        category: "Villa",
        price: 700000,
        area: "Airmadidi",
        address: "Kawasan Airmadidi, Minahasa Utara",
        lat: 1.4217,
        lng: 124.9827,
        rating: 4.0,
        facilities: ["Wi-Fi", "AC", "Parkir", "Dapur"],
        description: "Contoh data villa di Minahasa Utara.",
        emoji: "🏡"
    },
    {
        id: 10,
        name: "Hotel dekat Bandara Sam Ratulangi",
        category: "Hotel",
        price: 420000,
        area: "Mapanget",
        address: "Kawasan Mapanget, Manado",
        lat: 1.5453,
        lng: 124.9267,
        rating: 4.0,
        facilities: ["Wi-Fi", "AC", "Parkir"],
        description: "Contoh data hotel di area Mapanget.",
        emoji: "🏨"
    }
];

const FACILITY_OPTIONS = [
    "Wi-Fi",
    "AC",
    "Kolam Renang",
    "Restoran",
    "Parkir",
    "Dapur",
    "Pemandangan"
];

function getStoredValue(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        console.error("Gagal membaca localStorage:", error);
        return fallback;
    }
}

function saveStoredValue(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getStays() {
    const storedStays = getStoredValue(STORAGE_KEYS.stays, null);

    if (storedStays) {
        return storedStays;
    }

    saveStoredValue(STORAGE_KEYS.stays, DEFAULT_STAYS);
    return DEFAULT_STAYS;
}

function getUsers() {
    return getStoredValue(STORAGE_KEYS.users, []);
}

function getCurrentUser() {
    return getStoredValue(STORAGE_KEYS.currentUser, null);
}

function getBookings() {
    return getStoredValue(STORAGE_KEYS.bookings, []);
}

function formatRupiah(value) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(Number(value) || 0);
}

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function showMessage(element, message, type = "success") {
    if (!element) {
        return;
    }

    element.textContent = message;
    element.className = `notice ${type}`;
    element.classList.remove("hidden");
}

function updateNavigation() {
    const user = getCurrentUser();
    const loginLink = document.querySelector("[data-login-link]");
    const profileLink = document.querySelector("[data-profile-link]");
    const adminLink = document.querySelector("[data-admin-link]");
    const logoutButton = document.querySelector("[data-logout-button]");

    if (user && loginLink) {
        loginLink.classList.add("hidden");
    }

    if (user && profileLink) {
        profileLink.classList.remove("hidden");
    }

    if (user && logoutButton) {
        logoutButton.classList.remove("hidden");
    }

    if (user && user.role === "admin" && adminLink) {
        adminLink.classList.remove("hidden");
    }

    if (!user && profileLink) {
        profileLink.classList.add("hidden");
    }

    if ((!user || user.role !== "admin") && adminLink) {
        adminLink.classList.add("hidden");
    }

    if (!user && logoutButton) {
        logoutButton.classList.add("hidden");
    }
}

function logout() {
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    window.location.href = "index.html";
}

function requireAdmin() {
    const user = getCurrentUser();

    if (!user || user.role !== "admin") {
        window.location.href = "login.html?next=admin.html";
        return false;
    }

    return true;
}

function renderStayCards(stays, target) {
    if (!target) {
        return;
    }

    if (stays.length === 0) {
        target.innerHTML = '<div class="empty-state">Tidak ada penginapan yang cocok dengan pencarian.</div>';
        return;
    }

    target.innerHTML = stays.map((stay) => `
        <article class="card">
            <div class="stay-art" aria-hidden="true">${escapeHTML(stay.emoji || "🏨")}</div>
            <div class="card-body">
                <div class="card-topline">
                    <span class="pill">${escapeHTML(stay.category)}</span>
                    <span class="small">⭐ ${escapeHTML(stay.rating || "-")}</span>
                </div>
                <h3>${escapeHTML(stay.name)}</h3>
                <p class="muted small">📍 ${escapeHTML(stay.area)} · ${escapeHTML(stay.address)}</p>
                <p class="muted small">${escapeHTML((stay.facilities || []).join(" · "))}</p>
                <div class="row-between">
                    <span class="price">${formatRupiah(stay.price)}<span class="small muted"> / malam</span></span>
                </div>
                <div class="card-actions">
                    <a class="button" href="detail.html?id=${encodeURIComponent(stay.id)}">Detail</a>
                    <a class="button secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.lat + "," + stay.lng)}" target="_blank" rel="noopener">Lihat Maps</a>
                </div>
            </div>
        </article>
    `).join("");
}

function getStayById(id) {
    return getStays().find((stay) => String(stay.id) === String(id));
}

function initHome() {
    const target = document.querySelector("[data-featured-stays]");

    if (!target) {
        return;
    }

    const stays = getStays().slice(0, 3);
    renderStayCards(stays, target);

    const searchForm = document.querySelector("[data-home-search]");

    searchForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const keyword = document.querySelector("#homeKeyword").value.trim();
        const category = document.querySelector("#homeCategory").value;
        const params = new URLSearchParams();

        if (keyword) {
            params.set("q", keyword);
        }

        if (category) {
            params.set("category", category);
        }

        window.location.href = `penginapan.html?${params.toString()}`;
    });
}

function initListings() {
    const target = document.querySelector("[data-stay-list]");

    if (!target) {
        return;
    }

    const keywordInput = document.querySelector("#keyword");
    const categoryInput = document.querySelector("#category");
    const facilityInput = document.querySelector("#facility");
    const maxPriceInput = document.querySelector("#maxPrice");
    const params = new URLSearchParams(window.location.search);

    keywordInput.value = params.get("q") || "";
    categoryInput.value = params.get("category") || "";

    function filterStays() {
        const keyword = keywordInput.value.trim().toLowerCase();
        const category = categoryInput.value;
        const facility = facilityInput.value;
        const maxPrice = Number(maxPriceInput.value) || Infinity;

        const filtered = getStays().filter((stay) => {
            const searchable = `${stay.name} ${stay.area} ${stay.address}`.toLowerCase();
            const matchesKeyword = searchable.includes(keyword);
            const matchesCategory = !category || stay.category === category;
            const matchesFacility = !facility || (stay.facilities || []).includes(facility);
            const matchesPrice = Number(stay.price) <= maxPrice;

            return matchesKeyword && matchesCategory && matchesFacility && matchesPrice;
        });

        renderStayCards(filtered, target);
        document.querySelector("[data-result-count]").textContent = `${filtered.length} penginapan ditemukan`;
    }

    document.querySelector("[data-filter-form]").addEventListener("submit", (event) => {
        event.preventDefault();
        filterStays();
    });

    document.querySelector("[data-reset-filter]").addEventListener("click", () => {
        keywordInput.value = "";
        categoryInput.value = "";
        facilityInput.value = "";
        maxPriceInput.value = "";
        filterStays();
    });

    [keywordInput, categoryInput, facilityInput, maxPriceInput].forEach((input) => {
        input.addEventListener("change", filterStays);
    });

    filterStays();
}

function initLogin() {
    const form = document.querySelector("[data-login-form]");

    if (!form) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const message = document.querySelector("[data-login-message]");
        const email = document.querySelector("#email").value.trim().toLowerCase();
        const password = document.querySelector("#password").value;
        const users = getUsers();

        const demoAdmin = {
            name: "Admin StayNest",
            email: "admin@staynest.test",
            password: "admin123",
            role: "admin"
        };

        const allUsers = [demoAdmin, ...users];
        const user = allUsers.find((item) => item.email.toLowerCase() === email && item.password === password);

        if (!user) {
            showMessage(message, "Email atau password tidak sesuai.", "error");
            return;
        }

        const sessionUser = {
            name: user.name,
            email: user.email,
            role: user.role || "user"
        };

        saveStoredValue(STORAGE_KEYS.currentUser, sessionUser);

        const next = new URLSearchParams(window.location.search).get("next");
        window.location.href = next || (sessionUser.role === "admin" ? "admin.html" : "profil.html");
    });

    const registerForm = document.querySelector("[data-register-form]");

    registerForm?.addEventListener("submit", (event) => {
        event.preventDefault();

        const message = document.querySelector("[data-register-message]");
        const name = document.querySelector("#registerName").value.trim();
        const email = document.querySelector("#registerEmail").value.trim().toLowerCase();
        const password = document.querySelector("#registerPassword").value;
        const users = getUsers();

        if (password.length < 6) {
            showMessage(message, "Password harus memiliki minimal 6 karakter.", "error");
            return;
        }

        if (email === "admin@staynest.test" || users.some((user) => user.email.toLowerCase() === email)) {
            showMessage(message, "Email tersebut sudah digunakan.", "error");
            return;
        }

        users.push({
            name,
            email,
            password,
            role: "user"
        });

        saveStoredValue(STORAGE_KEYS.users, users);
        showMessage(message, "Pendaftaran berhasil. Silakan login menggunakan akun baru.");
        registerForm.reset();
    });
}

function initProfile() {
    const container = document.querySelector("[data-profile-content]");

    if (!container) {
        return;
    }

    const user = getCurrentUser();

    if (!user) {
        window.location.href = "login.html?next=profil.html";
        return;
    }

    const bookings = getBookings().filter((booking) => booking.email === user.email);

    container.innerHTML = `
        <div class="panel">
            <h2>Profil Saya</h2>
            <p class="muted">Informasi akun yang sedang digunakan.</p>
            <div class="field">
                <label>Nama</label>
                <input value="${escapeHTML(user.name)}" readonly>
            </div>
            <div class="field">
                <label>Email</label>
                <input value="${escapeHTML(user.email)}" readonly>
            </div>
            <div class="field">
                <label>Jenis akun</label>
                <input value="${user.role === "admin" ? "Administrator" : "Pengguna"}" readonly>
            </div>
        </div>
        <div class="panel" style="margin-top: 20px;">
            <h2>Riwayat Booking</h2>
            ${bookings.length ? `
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Penginapan</th>
                                <th>Tanggal</th>
                                <th>Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${bookings.map((booking) => `
                                <tr>
                                    <td>${escapeHTML(booking.stayName)}</td>
                                    <td>${escapeHTML(booking.checkIn)} – ${escapeHTML(booking.checkOut)}</td>
                                    <td>${formatRupiah(booking.total)}</td>
                                    <td><span class="pill">${escapeHTML(booking.status)}</span></td>
                                </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
            ` : '<div class="empty-state">Belum ada riwayat booking.</div>'}
        </div>
    `;
}

function initDetail() {
    const container = document.querySelector("[data-stay-detail]");

    if (!container) {
        return;
    }

    const id = new URLSearchParams(window.location.search).get("id");
    const stay = getStayById(id);

    if (!stay) {
        container.innerHTML = '<div class="empty-state">Penginapan tidak ditemukan. <a href="penginapan.html">Kembali ke daftar</a>.</div>';
        return;
    }

    container.innerHTML = `
        <div class="hero-grid">
            <div class="hero-panel">
                <div class="stay-art" style="border-radius: 14px;">${escapeHTML(stay.emoji || "🏨")}</div>
            </div>
            <div>
                <span class="pill">${escapeHTML(stay.category)}</span>
                <h1>${escapeHTML(stay.name)}</h1>
                <p class="muted">📍 ${escapeHTML(stay.address)} · ${escapeHTML(stay.area)}</p>
                <p>⭐ ${escapeHTML(stay.rating || "-")} / 5</p>
                <p>${escapeHTML(stay.description || "Informasi penginapan.")}</p>
                <h3>Fasilitas</h3>
                <p>${escapeHTML((stay.facilities || []).join(" · ")) || "Belum ada informasi fasilitas."}</p>
                <p class="price">${formatRupiah(stay.price)} <span class="muted small">/ malam</span></p>
                <div class="card-actions">
                    <a class="button" href="booking.html?id=${encodeURIComponent(stay.id)}">Booking Sekarang</a>
                    <a class="button secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.lat + "," + stay.lng)}" target="_blank" rel="noopener">Buka Google Maps</a>
                </div>
            </div>
        </div>
    `;
}

function initBooking() {
    const form = document.querySelector("[data-booking-form]");

    if (!form) {
        return;
    }

    const user = getCurrentUser();
    const stayId = new URLSearchParams(window.location.search).get("id");
    const stay = getStayById(stayId);
    const summary = document.querySelector("[data-booking-summary]");

    if (!user) {
        window.location.href = `login.html?next=${encodeURIComponent(`booking.html?id=${stayId}`)}`;
        return;
    }

    if (!stay) {
        form.innerHTML = '<div class="empty-state">Penginapan tidak ditemukan. <a href="penginapan.html">Kembali ke daftar</a>.</div>';
        return;
    }

    summary.innerHTML = `
        <h3>${escapeHTML(stay.name)}</h3>
        <p class="muted">${escapeHTML(stay.category)} · ${escapeHTML(stay.area)}</p>
        <p class="price">${formatRupiah(stay.price)} / malam</p>
    `;

    document.querySelector("#guestName").value = user.name;
    document.querySelector("#guestEmail").value = user.email;
    document.querySelector("#checkIn").min = new Date().toISOString().slice(0, 10);
    document.querySelector("#checkOut").min = new Date().toISOString().slice(0, 10);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const checkIn = document.querySelector("#checkIn").value;
        const checkOut = document.querySelector("#checkOut").value;
        const guests = Number(document.querySelector("#guests").value);
        const start = new Date(`${checkIn}T00:00:00`);
        const end = new Date(`${checkOut}T00:00:00`);
        const nights = Math.ceil((end - start) / 86400000);

        if (!checkIn || !checkOut || nights < 1) {
            showMessage(document.querySelector("[data-booking-message]"), "Tanggal check-out harus setelah check-in.", "error");
            return;
        }

        const booking = {
            id: Date.now(),
            email: user.email,
            guestName: user.name,
            stayId: stay.id,
            stayName: stay.name,
            checkIn,
            checkOut,
            nights,
            guests,
            total: nights * Number(stay.price),
            status: "Menunggu konfirmasi",
            createdAt: new Date().toISOString()
        };

        const bookings = getBookings();
        bookings.push(booking);
        saveStoredValue(STORAGE_KEYS.bookings, bookings);
        sessionStorage.setItem("stayNestLastBooking", JSON.stringify(booking));
        window.location.href = "konfirmasi.html";
    });
}

function initConfirmation() {
    const container = document.querySelector("[data-confirmation]");

    if (!container) {
        return;
    }

    let booking = null;

    try {
        booking = JSON.parse(sessionStorage.getItem("stayNestLastBooking") || "null");
    } catch (error) {
        booking = null;
    }

    if (!booking) {
        container.innerHTML = '<div class="empty-state">Belum ada booking yang dikonfirmasi. <a href="penginapan.html">Cari penginapan</a>.</div>';
        return;
    }

    container.innerHTML = `
        <div class="panel" style="text-align: center;">
            <div style="font-size: 54px;">✅</div>
            <h1>Booking Tersimpan!</h1>
            <p>Ini adalah konfirmasi demo. Belum ada pembayaran atau reservasi ke pihak penginapan.</p>
            <div class="table-wrap" style="text-align: left; margin: 20px 0;">
                <table>
                    <tbody>
                        <tr><th>Nomor booking</th><td>SN-${booking.id}</td></tr>
                        <tr><th>Nama</th><td>${escapeHTML(booking.guestName)}</td></tr>
                        <tr><th>Penginapan</th><td>${escapeHTML(booking.stayName)}</td></tr>
                        <tr><th>Tanggal</th><td>${escapeHTML(booking.checkIn)} sampai ${escapeHTML(booking.checkOut)}</td></tr>
                        <tr><th>Jumlah malam</th><td>${booking.nights}</td></tr>
                        <tr><th>Jumlah tamu</th><td>${booking.guests}</td></tr>
                        <tr><th>Total estimasi</th><td>${formatRupiah(booking.total)}</td></tr>
                        <tr><th>Status</th><td>${escapeHTML(booking.status)}</td></tr>
                    </tbody>
                </table>
            </div>
            <a class="button" href="profil.html">Lihat Profil dan Riwayat</a>
            <a class="button secondary" href="penginapan.html">Cari Penginapan Lain</a>
        </div>
    `;
}

function initAdmin() {
    const form = document.querySelector("[data-admin-form]");

    if (!form || !requireAdmin()) {
        return;
    }

    const tableBody = document.querySelector("[data-admin-stays]");
    const bookingBody = document.querySelector("[data-admin-bookings]");
    const message = document.querySelector("[data-admin-message]");

    function renderAdmin() {
        const stays = getStays();
        const bookings = getBookings();

        document.querySelector("[data-stay-total]").textContent = stays.length;
        document.querySelector("[data-booking-total]").textContent = bookings.length;
        document.querySelector("[data-user-total]").textContent = getUsers().length;

        tableBody.innerHTML = stays.map((stay) => `
            <tr>
                <td>${escapeHTML(stay.name)}</td>
                <td>${escapeHTML(stay.category)}</td>
                <td>${escapeHTML(stay.area)}</td>
                <td>${formatRupiah(stay.price)}</td>
                <td><button class="danger" type="button" data-delete-stay="${escapeHTML(stay.id)}">Hapus</button></td>
            </tr>
        `).join("");

        bookingBody.innerHTML = bookings.length ? bookings.map((booking) => `
            <tr>
                <td>${escapeHTML(booking.stayName)}</td>
                <td>${escapeHTML(booking.guestName)}</td>
                <td>${escapeHTML(booking.checkIn)} – ${escapeHTML(booking.checkOut)}</td>
                <td>${formatRupiah(booking.total)}</td>
                <td>
                    <select data-booking-status="${escapeHTML(booking.id)}">
                        ${["Menunggu konfirmasi", "Dikonfirmasi", "Selesai", "Dibatalkan"].map((status) => `
                            <option value="${status}" ${booking.status === status ? "selected" : ""}>${status}</option>
                        `).join("")}
                    </select>
                </td>
            </tr>
        `).join("") : '<tr><td colspan="5">Belum ada booking.</td></tr>';
    }

    const facilityContainer = document.querySelector("[data-facility-options]");

    facilityContainer.innerHTML = FACILITY_OPTIONS.map((facility) => `
        <label>
            <input type="checkbox" name="facilities" value="${escapeHTML(facility)}">
            ${escapeHTML(facility)}
        </label>
    `).join("");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const facilities = [...form.querySelectorAll('input[name="facilities"]:checked')].map((input) => input.value);
        const stays = getStays();
        const newStay = {
            id: Date.now(),
            name: document.querySelector("#stayName").value.trim(),
            category: document.querySelector("#stayCategory").value,
            price: Number(document.querySelector("#stayPrice").value),
            area: document.querySelector("#stayArea").value.trim(),
            address: document.querySelector("#stayAddress").value.trim(),
            lat: Number(document.querySelector("#stayLat").value),
            lng: Number(document.querySelector("#stayLng").value),
            rating: 0,
            facilities,
            description: document.querySelector("#stayDescription").value.trim(),
            emoji: document.querySelector("#stayCategory").value === "Villa" ? "🏡" : "🏨"
        };

        if (newStay.lat < -90 || newStay.lat > 90 || newStay.lng < -180 || newStay.lng > 180) {
            showMessage(message, "Koordinat latitude/longitude tidak valid.", "error");
            return;
        }

        stays.push(newStay);
        saveStoredValue(STORAGE_KEYS.stays, stays);
        form.reset();
        showMessage(message, "Penginapan berhasil ditambahkan ke daftar dan peta.");
        renderAdmin();
    });

    tableBody.addEventListener("click", (event) => {
        const button = event.target.closest("[data-delete-stay]");

        if (!button) {
            return;
        }

        const stayId = button.dataset.deleteStay;
        const updatedStays = getStays().filter((stay) => String(stay.id) !== String(stayId));
        saveStoredValue(STORAGE_KEYS.stays, updatedStays);
        showMessage(message, "Data penginapan dihapus.");
        renderAdmin();
    });

    bookingBody.addEventListener("change", (event) => {
        const select = event.target.closest("[data-booking-status]");

        if (!select) {
            return;
        }

        const bookings = getBookings().map((booking) => {
            if (String(booking.id) === select.dataset.bookingStatus) {
                return {
                    ...booking,
                    status: select.value
                };
            }

            return booking;
        });

        saveStoredValue(STORAGE_KEYS.bookings, bookings);
        showMessage(message, "Status booking diperbarui.");
        renderAdmin();
    });

    renderAdmin();
}

function initGoogleMapInternal() {
    const mapElement = document.querySelector("#map");

    if (!mapElement) {
        return;
    }

    const stays = getStays();
    const mapMessage = document.querySelector("[data-map-message]");

    if (!window.google || !google.maps) {
        showMessage(mapMessage, "Google Maps belum dimuat. Pastikan API key sudah diisi di penginapan.html dan API Maps JavaScript aktif di Google Cloud.", "error");
        return;
    }

    const manadoCenter = {
        lat: 1.4748,
        lng: 124.8421
    };

    const map = new google.maps.Map(mapElement, {
        center: manadoCenter,
        zoom: 11,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        mapTypeId: "roadmap"
    });

    const infoWindow = new google.maps.InfoWindow();
    const bounds = new google.maps.LatLngBounds();
    const markers = [];

    stays.forEach((stay) => {
        const marker = new google.maps.Marker({
            position: {
                lat: Number(stay.lat),
                lng: Number(stay.lng)
            },
            map,
            title: stay.name,
            label: {
                text: stay.category === "Hotel" ? "H" : stay.category === "Villa" ? "V" : "S",
                color: "#ffffff",
                fontWeight: "bold"
            }
        });

        marker.addListener("click", () => {
            infoWindow.setContent(`
                <div style="max-width: 250px; font-family: Arial, sans-serif;">
                    <h3 style="margin: 0 0 8px; color: #17324d;">${escapeHTML(stay.name)}</h3>
                    <p style="margin: 0 0 6px;">${escapeHTML(stay.category)} · ${escapeHTML(stay.area)}</p>
                    <p style="margin: 0 0 6px;">${formatRupiah(stay.price)} / malam</p>
                    <p style="margin: 0 0 10px;">${escapeHTML((stay.facilities || []).join(", "))}</p>
                    <a href="detail.html?id=${encodeURIComponent(stay.id)}">Lihat detail dan booking</a>
                </div>
            `);

            infoWindow.open({
                anchor: marker,
                map
            });
        });

        markers.push({
            marker,
            stay
        });

        bounds.extend(marker.getPosition());
    });

    if (stays.length > 1) {
        map.fitBounds(bounds, 50);
    }

    const keywordInput = document.querySelector("#keyword");
    const categoryInput = document.querySelector("#category");
    const facilityInput = document.querySelector("#facility");
    const maxPriceInput = document.querySelector("#maxPrice");

    function updateMarkers() {
        const keyword = keywordInput.value.trim().toLowerCase();
        const category = categoryInput.value;
        const facility = facilityInput.value;
        const maxPrice = Number(maxPriceInput.value) || Infinity;
        let visibleCount = 0;
        const visibleBounds = new google.maps.LatLngBounds();

        markers.forEach(({ marker, stay }) => {
            const searchable = `${stay.name} ${stay.area} ${stay.address}`.toLowerCase();
            const matches = searchable.includes(keyword)
                && (!category || stay.category === category)
                && (!facility || (stay.facilities || []).includes(facility))
                && Number(stay.price) <= maxPrice;

            marker.setVisible(matches);

            if (matches) {
                visibleCount += 1;
                visibleBounds.extend(marker.getPosition());
            }
        });

        document.querySelector("[data-map-count]").textContent = `${visibleCount} marker tampil di peta`;

        if (visibleCount > 0) {
            map.fitBounds(visibleBounds, 50);

            if (visibleCount === 1) {
                map.setZoom(14);
            }
        }
    }

    document.querySelector("[data-filter-form]").addEventListener("submit", (event) => {
        event.preventDefault();
        updateMarkers();
    });

    document.querySelector("[data-reset-filter]").addEventListener("click", () => {
        keywordInput.value = "";
        categoryInput.value = "";
        facilityInput.value = "";
        maxPriceInput.value = "";
        updateMarkers();
    });

    [keywordInput, categoryInput, facilityInput, maxPriceInput].forEach((input) => {
        input.addEventListener("change", updateMarkers);
    });

    document.querySelector("[data-my-location]").addEventListener("click", () => {
        if (!navigator.geolocation) {
            showMessage(mapMessage, "Browser ini tidak mendukung fitur lokasi.", "error");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(userPosition);
                map.setZoom(14);

                new google.maps.Marker({
                    position: userPosition,
                    map,
                    title: "Lokasi Saya",
                    label: "S",
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        fillColor: "#1769aa",
                        fillOpacity: 1,
                        strokeColor: "#ffffff",
                        strokeWeight: 2
                    }
                });

                showMessage(mapMessage, "Lokasi kamu ditampilkan di peta.");
            },
            () => {
                showMessage(mapMessage, "Lokasi tidak dapat diakses. Izinkan akses lokasi atau jalankan melalui Live Server/HTTPS.", "error");
            },
            {
                enableHighAccuracy: true,
                timeout: 10000
            }
        );
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateNavigation();

    document.querySelectorAll("[data-logout-button]").forEach((button) => {
        button.addEventListener("click", logout);
    });

    initHome();
    initListings();
    initLogin();
    initProfile();
    initDetail();
    initBooking();
    initConfirmation();
    initAdmin();
});
