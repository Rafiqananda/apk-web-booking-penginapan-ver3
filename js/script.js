// ============================================================
// DATA PENGINAPAN
// ============================================================

const hotels = [

    {
        id: 1,
        name: "Manado Bay Hotel",
        location: "Manado",
        rating: 4.8,
        price: 350000,
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 2,
        name: "Swiss-Belhotel Maleosan Manado",
        location: "Wenang, Manado",
        rating: 4.6,
        price: 650000,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 3,
        name: "Sintesa Peninsula Hotel Manado",
        location: "Wenang, Manado",
        rating: 4.7,
        price: 900000,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 4,
        name: "Aryaduta Manado",
        location: "Boulevard, Manado",
        rating: 4.6,
        price: 800000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 5,
        name: "Manado Quality Hotel",
        location: "Sario, Manado",
        rating: 4.5,
        price: 550000,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 6,
        name: "Best Western The Lagoon",
        location: "Malalayang, Manado",
        rating: 4.5,
        price: 700000,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 7,
        name: "Ibis Manado City Center Boulevard",
        location: "Sario, Manado",
        rating: 4.4,
        price: 600000,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 8,
        name: "Grand Luley Manado",
        location: "Tongkeina, Manado",
        rating: 4.5,
        price: 850000,
        image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 9,
        name: "NDC Resort & Spa",
        location: "Molas, Bunaken",
        rating: 4.4,
        price: 1000000,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 10,
        name: "Bunaken Oasis Dive Resort and Spa",
        location: "Liang Beach, Bunaken",
        rating: 4.8,
        price: 1500000,
        image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 11,
        name: "3WILL Bunaken Dive Resort",
        location: "Pangalisang Beach, Bunaken",
        rating: 4.7,
        price: 1200000,
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 12,
        name: "Siladen Resort & Spa",
        location: "Pulau Siladen",
        rating: 4.8,
        price: 2200000,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 13,
        name: "Mountain View Resort",
        location: "Tomohon",
        rating: 4.7,
        price: 450000,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 14,
        name: "Grand Master Villa Tomohon",
        location: "Tomohon",
        rating: 4.6,
        price: 750000,
        image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 15,
        name: "Metland Hotel Tomohon",
        location: "Tomohon",
        rating: 4.5,
        price: 650000,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 16,
        name: "The Sentra Manado",
        location: "Maumbi, Kalawat",
        rating: 4.9,
        price: 700000,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 17,
        name: "Sutan Raja Hotel Manado",
        location: "Watutumou, Kalawat",
        rating: 4.5,
        price: 650000,
        image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 18,
        name: "Cocotinos Manado",
        location: "Wori, Minahasa Utara",
        rating: 4.6,
        price: 1100000,
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80"
    }

];


// ============================================================
// FORMAT RUPIAH
// ============================================================

function rupiah(value) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(value);

}


// ============================================================
// KARTU PENGINAPAN
// ============================================================

function hotelCard(hotel) {

    const googleMapsUrl =
        "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(
            hotel.name + ", " + hotel.location
        );

    return `
        <article class="hotel">

            <img
                src="${hotel.image}"
                alt="${hotel.name}"
            >

            <div class="hotelbody">

                <h3>
                    ${hotel.name}
                </h3>

                <p class="muted">
                    📍 ${hotel.location}
                </p>

                <p>
                    ⭐ ${hotel.rating} / 5
                </p>

                <p class="desc">
                    Penginapan pilihan di Sulawesi Utara
                    untuk perjalanan wisata maupun bisnis.
                </p>

                <p class="price">
                    ${rupiah(hotel.price)}
                    <small>/ malam</small>
                </p>

                <a
                    class="btn"
                    href="detail.html?id=${hotel.id}"
                >
                    Lihat Detail
                </a>

                <a
                    class="maplink"
                    href="${googleMapsUrl}"
                    target="_blank"
                    rel="noopener"
                >
                    📍 Lihat di Google Maps
                </a>

            </div>

        </article>
    `;
}


// ============================================================
// MENAMPILKAN PENGINAPAN
// ============================================================

function render() {

    const list =
        document.getElementById("list");

    if (!list) {
        return;
    }

    const search =
        document
            .getElementById("search")
            .value
            .toLowerCase();

    const price =
        document.getElementById("price")
            .value;

    const filteredHotels =
        hotels.filter(function (hotel) {

            const matchSearch =
                hotel.name
                    .toLowerCase()
                    .includes(search)
                ||
                hotel.location
                    .toLowerCase()
                    .includes(search);

            const matchPrice =
                price === "all"
                ||
                hotel.price < Number(price);

            return matchSearch && matchPrice;
        });

    list.innerHTML =
        filteredHotels
            .map(hotelCard)
            .join("");

    document
        .getElementById("empty")
        .classList.toggle(
            "hidden",
            filteredHotels.length !== 0
        );
}


// ============================================================
// PENCARIAN DARI HALAMAN HOME
// ============================================================

function searchHome() {

    const input =
        document.getElementById("homeSearch");

    if (!input) {
        return;
    }

    const keyword =
        input.value.trim();

    if (keyword === "") {
        window.location.href =
            "penginapan.html";

        return;
    }

    window.location.href =
        "penginapan.html?search="
        + encodeURIComponent(keyword);
}


// ============================================================
// GOOGLE MAPS - MANADO
// ============================================================

function showManadoMap() {

    const map =
        document.getElementById("googleMap");

    if (!map) {
        return;
    }

    map.src =
        "https://www.google.com/maps"
        + "?q="
        + encodeURIComponent(
            "hotel di Manado Sulawesi Utara"
        )
        + "&output=embed";
}


// ============================================================
// GOOGLE MAPS - LOKASI SAYA
// ============================================================

function findMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Browser tidak mendukung fitur lokasi."
        );

        return;
    }

    navigator.geolocation.getCurrentPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;

            const map =
                document.getElementById("googleMap");

            map.src =
                "https://www.google.com/maps"
                + "?q="
                + latitude
                + ","
                + longitude
                + "&z=15&output=embed";
        },

        function () {

            alert(
                "Lokasi tidak dapat diakses. "
                + "Jika membuka file HTML langsung, "
                + "Chrome mungkin membatasi fitur lokasi. "
                + "Gunakan Live Server jika ingin mencoba "
                + "fitur Lokasi Saya."
            );
        }
    );
}


// ============================================================
// DETAIL PENGINAPAN
// ============================================================

function getHotel() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const id =
        Number(params.get("id"));

    return (
        hotels.find(function (hotel) {
            return hotel.id === id;
        })
        ||
        hotels[0]
    );
}


function renderDetail() {

    const detail =
        document.getElementById("detail");

    if (!detail) {
        return;
    }

    const hotel = getHotel();

    const googleMapsUrl =
        "https://www.google.com/maps/search/?api=1&query="
        + encodeURIComponent(
            hotel.name + ", " + hotel.location
        );

    const standardRoomPrice =
        hotel.price;

    const premiumRoomPrice =
        Math.round(hotel.price * 1.35);

    detail.innerHTML = `
        <div class="detailcard">

            <img
                src="${hotel.image}"
                alt="${hotel.name}"
            >

            <div>

                <p class="eyebrow">
                    DETAIL PENGINAPAN
                </p>

                <h1>
                    ${hotel.name}
                </h1>

                <p class="muted">
                    📍 ${hotel.location}
                    ·
                    ⭐ ${hotel.rating}
                </p>

                <p>
                    Penginapan pilihan di Sulawesi Utara
                    untuk perjalanan wisata maupun bisnis.
                </p>

                <h3>
                    Fasilitas
                </h3>

                <div class="facilities">

                    <span class="facility">
                        ✓ WiFi
                    </span>

                    <span class="facility">
                        ✓ AC
                    </span>

                    <span class="facility">
                        ✓ Restaurant
                    </span>

                    <span class="facility">
                        ✓ Parking
                    </span>

                </div>

                <h3>
                    Pilihan Kamar
                </h3>

                <div class="room">
                    <b>
                        Standard / Deluxe Room
                    </b>
                    <br>
                    ${rupiah(standardRoomPrice)} / malam
                </div>

                <div class="room">
                    <b>
                        Premium Room
                    </b>
                    <br>
                    ${rupiah(premiumRoomPrice)} / malam
                </div>

                <a
                    class="btn full"
                    href="booking.html?id=${hotel.id}"
                >
                    Booking Sekarang →
                </a>

                <a
                    class="maplink"
                    href="${googleMapsUrl}"
                    target="_blank"
                    rel="noopener"
                >
                    📍 Buka lokasi di Google Maps
                </a>

            </div>

        </div>
    `;
}


// ============================================================
// BOOKING
// ============================================================

function booking() {

    const form =
        document.getElementById("form");

    if (!form) {
        return;
    }

    const hotel = getHotel();

    const roomSelect =
        document.getElementById("room");

    roomSelect.innerHTML = `
        <option value="0">
            Standard / Deluxe Room -
            ${rupiah(hotel.price)} / malam
        </option>

        <option value="1">
            Premium Room -
            ${rupiah(Math.round(hotel.price * 1.35))}
            / malam
        </option>
    `;

    document.getElementById("summary").innerHTML = `
        <img
            src="${hotel.image}"
            alt="${hotel.name}"
        >

        <h2>
            ${hotel.name}
        </h2>

        <p class="muted">
            📍 ${hotel.location}
            ·
            ⭐ ${hotel.rating}
        </p>
    `;

    function calculate() {

        const checkin =
            new Date(
                document.getElementById("in").value
            );

        const checkout =
            new Date(
                document.getElementById("out").value
            );

        let nights = 0;

        if (
            !isNaN(checkin)
            &&
            !isNaN(checkout)
            &&
            checkout > checkin
        ) {
            nights =
                Math.ceil(
                    (checkout - checkin)
                    / 86400000
                );
        }

        const roomPrice =
            roomSelect.value === "0"
                ? hotel.price
                : Math.round(hotel.price * 1.35);

        const total =
            nights * roomPrice;

        document.getElementById("total")
            .textContent = rupiah(total);

        document.getElementById("nights")
            .textContent = nights
                ? `${nights} malam`
                : "Pilih tanggal.";
    }

    form.addEventListener(
        "input",
        calculate
    );

    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const checkin =
                document.getElementById("in")
                    .value;

            const checkout =
                document.getElementById("out")
                    .value;

            if (
                !checkin
                ||
                !checkout
                ||
                new Date(checkout)
                    <=
                new Date(checkin)
            ) {

                alert(
                    "Check-out harus setelah check-in."
                );

                return;
            }

            const nights =
                Math.ceil(
                    (
                        new Date(checkout)
                        -
                        new Date(checkin)
                    )
                    / 86400000
                );

            const roomPrice =
                roomSelect.value === "0"
                    ? hotel.price
                    : Math.round(hotel.price * 1.35);

            const roomName =
                roomSelect.value === "0"
                    ? "Standard / Deluxe Room"
                    : "Premium Room";

            const bookingData = {

                code:
                    "SN"
                    +
                    Date.now()
                        .toString()
                        .slice(-6),

                name:
                    document.getElementById("name")
                        .value,

                phone:
                    document.getElementById("phone")
                        .value,

                hotel:
                    hotel.name,

                location:
                    hotel.location,

                room:
                    roomName,

                in:
                    checkin,

                out:
                    checkout,

                guests:
                    document.getElementById("guests")
                        .value,

                nights:
                    nights,

                total:
                    nights * roomPrice
            };

            sessionStorage.setItem(
                "booking",
                JSON.stringify(bookingData)
            );

            window.location.href =
                "konfirmasi.html";
        }
    );

    calculate();
}


// ============================================================
// KONFIRMASI BOOKING
// ============================================================

function confirmBooking() {

    const container =
        document.getElementById("confirmation");

    if (!container) {
        return;
    }

    const data =
        sessionStorage.getItem("booking");

    if (!data) {

        container.innerHTML = `
            <div class="success">
                <h1>
                    Belum ada booking
                </h1>

                <a
                    class="btn"
                    href="penginapan.html"
                >
                    Lihat Penginapan
                </a>
            </div>
        `;

        return;
    }

    const bookingData =
        JSON.parse(data);

    function formatDate(date) {

        return new Date(
            date + "T00:00:00"
        ).toLocaleDateString(
            "id-ID",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );
    }

    container.innerHTML = `
        <div class="success">

            <div class="successicon">
                ✓
            </div>

            <p class="eyebrow">
                BOOKING BERHASIL
            </p>

            <h1>
                Pesananmu sudah dibuat!
            </h1>

            <p>
                Terima kasih,
                ${bookingData.name}.
            </p>

            <div class="code">
                Kode Booking:
                ${bookingData.code}
            </div>

            <div class="confirmrows">

                <div class="row">
                    <span>Penginapan</span>
                    <b>${bookingData.hotel}</b>
                </div>

                <div class="row">
                    <span>Lokasi</span>
                    <b>${bookingData.location}</b>
                </div>

                <div class="row">
                    <span>Kamar</span>
                    <b>${bookingData.room}</b>
                </div>

                <div class="row">
                    <span>Check-in</span>
                    <b>
                        ${formatDate(bookingData.in)}
                    </b>
                </div>

                <div class="row">
                    <span>Check-out</span>
                    <b>
                        ${formatDate(bookingData.out)}
                    </b>
                </div>

                <div class="row">
                    <span>Jumlah Tamu</span>
                    <b>
                        ${bookingData.guests} orang
                    </b>
                </div>

                <div class="row">
                    <span>Durasi</span>
                    <b>
                        ${bookingData.nights} malam
                    </b>
                </div>

                <div class="row">
                    <span>Total</span>
                    <b>
                        ${rupiah(bookingData.total)}
                    </b>
                </div>

            </div>

            <button
                class="btn"
                onclick="window.print()"
            >
                🖨 Cetak Booking
            </button>

            <a
                class="btn light"
                href="index.html"
            >
                Kembali
            </a>

        </div>
    `;
}


// ============================================================
// SAAT HALAMAN DIBUKA
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const popular =
            document.getElementById("popular");

        if (popular) {

            popular.innerHTML =
                hotels
                    .slice(0, 6)
                    .map(hotelCard)
                    .join("");
        }

        render();
        renderDetail();
        booking();
        confirmBooking();

        const params =
            new URLSearchParams(
                window.location.search
            );

        const search =
            params.get("search");

        const searchInput =
            document.getElementById("search");

        if (
            search
            &&
            searchInput
        ) {

            searchInput.value = search;

            render();
        }
    }
);
