/* ============================
   SITE CONFIG: CHANGE MAIN SETTINGS HERE
   ============================ */
const SITE_CONFIG = {
  brandName: "TIMES FRAME",
  heroVideo: "hj.mp4",          // HERO VIDEO: ADD YOUR VIDEO HERE
    showcaseVideo: "fg.mp4", // 3D SHOWCASE VIDEO
  currency: "$",
  freeShippingOver: 1500,
  shipping: 25,
  discountCode: "FRAME10",
  discountPct: 10,
  limitedEnds: Date.now() + 12 * 864e5          // limited edition countdown end (12 days from now)
};

/* ============================
   PRODUCT DATA: ADD NEW PRODUCTS HERE
   Copy one block, give it a new unique id and change the image path.
   category: Automatic | Chronograph | Classic | Sport | Luxury | Limited Edition
   badge: "New", "Best Seller", "Limited" or "" for none
   ============================ */
const PRODUCTS = [
  {id:1, name:"Eclipse", collection:"Meridian", category:"Automatic", price:1299, old:1499, badge:"New", featured:true, stock:12, colors:["Steel","Black"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEUQU4-AnnaRtbzCsYaSLm_NFFN4EiE9hdEbg-rSnsQ&s=10", description:"A 40mm automatic with a blued-steel sunburst dial that shifts with the light."},
  {id:2, name:"Apex Chrono", collection:"Velocity", category:"Chronograph", price:1890, badge:"Best Seller", featured:true, stock:8, colors:["Steel","Blue"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Npd8OdSxGycHXmxp0ltwXi-sjs4gLVdWu2VhiJAQFw&s=10", description:"A column-wheel chronograph with a tachymeter bezel, built for the paddock and the boardroom."},
  {id:3, name:"Heritage 1924", collection:"Atelier", category:"Classic", price:980, badge:"", featured:true, stock:20, colors:["Cream","Black"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGkGzFtAy9OZGDk7vy77aZOaKGDWNtkxjiSKNwFbjZIA&s=10", description:"The original dress watch, slim at 8.4mm, with a hand-guilloché dial."},
  {id:4, name:"Abyss 300", collection:"Depth", category:"Sport", price:1450, badge:"New", featured:true, stock:6, colors:["Black","Blue"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsjfO-mtS9L7VajwbEB3ZCp4AUU3HCVML29TbovxDPew&s=10", description:"300m water resistance, ceramic bezel and a rubber strap that disappears on the wrist."},
  {id:5, name:"Sovereign", collection:"Atelier", category:"Luxury", price:3890, badge:"Best Seller", stock:4, colors:["Gold"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JvC7v_ST2odnFzN1p5Tovt5v4a6IOYzGjEelacttiw&s=10", description:"18k rose-gold case with a seven-day power reserve and an exhibition caseback."},
  {id:6, name:"Cadet", collection:"Meridian", category:"Classic", price:420, badge:"", stock:30, colors:["Steel","Cream"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsxnElfV9ZJwrA3jRlSMUOJiqo8imjPfKAcNeBCsCFsA&s=10", description:"A quiet, honest everyday watch with a sapphire crystal and a quartz-accurate beat."},
  {id:7, name:"Vanguard GMT", collection:"Velocity", category:"Automatic", price:2150, old:2400, badge:"New", stock:9, colors:["Black","Steel"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjPIWRZipLHt6Z8RSL5wBlcC2QUqut1z9TQimgAhSEtA&s=10", description:"A true GMT that tracks two time zones with a jumping local hour hand."},
  {id:8, name:"Regatta", collection:"Depth", category:"Sport", price:760, badge:"", stock:0, colors:["Blue","White"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemQQRdOdcPAUn5TXKBP9-bd1AMH8ryawOmCzOyXQoqQ&s", description:"A 100m diver's companion with a luminous dial you can read at a glance."},
  {id:9, name:"Monarch Skeleton", collection:"Atelier", category:"Luxury", price:5200, badge:"New", stock:3, colors:["Gold","Black"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_Rid7lgDQqVdlw7BjREPILmbTTKrzZeplA8XmsVgVA&s=10", description:"An open-worked movement, every bridge hand-bevelled, framed in a sapphire case."},
  {id:10, name:"Tourbillon Noir", collection:"Limited", category:"Limited Edition", price:12500, badge:"Limited", stock:250, colors:["Black"], image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRG_DK6sFpPk1iG6YQ8YAeuQ8Kaa2VoIvWdP_avpAxvQ&s=10", description:"Numbered 1 to 250. A flying tourbillon in a blackened titanium case."}
];
const REVIEWS = [
  {n:"Daniel R.", p:"Eclipse", t:"The dial changes colour through the day. I catch myself checking the time just to look at it."},
  {n:"Sofia M.", p:"Sovereign", t:"Arrived in a box I did not want to throw away. The watch itself is even better than the photographs."},
  {n:"James K.", p:"Apex Chrono", t:"Pushers have a real mechanical click. Keeps time within two seconds a day."},
  {n:"Amira H.", p:"Heritage 1924", t:"I bought it for my father's 70th. He wears it every single day."}
];
const BUILD = {
  Case:{Steel:["#c9ccd0",0],Black:["#26262a",150],Gold:["#c8a96b",600]},
  Strap:{Leather:["#5a3a22",0],Steel:["#a9adb2",200],Rubber:["#1d1d1f",50]},
  Dial:{Black:["#101012",0],White:["#f1ede4",40],Blue:["#16294d",90]},
  Hands:{Silver:["#d8dade",0],Gold:["#e2cc9a",60]}
}, BASE = 890;

/* ============================
   HELPERS
   ============================ */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const money = n => SITE_CONFIG.currency + n.toLocaleString("en-US");
const find = id => PRODUCTS.find(p => p.id == id);
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)) } catch {} };
const reduced = matchMedia("(prefers-reduced-motion:reduce)").matches;
function toast(m) { const t = $("#toast"); t.textContent = m; t.classList.add("on"); clearTimeout(t.h); t.h = setTimeout(() => t.classList.remove("on"), 2400) }
// Generated watch illustration, used when an image file is missing and in the builder
// Any image that fails to load gets the generated watch instead of a broken icon
document.addEventListener("error", e => { const i = e.target; if (i.tagName === "IMG" && !i.dataset.f) { i.dataset.f = 1; i.src = watchSVG() } }, true);

/* ============================
   STATE: CART & WISHLIST (localStorage)
   ============================ */
let cart = load("tf-cart", []), wish = load("tf-wish", []), code = load("tf-code", ""), onlyWish = false;
const qtyTotal = () => cart.reduce((a, i) => a + i.qty, 0);

/* ============================
   PRODUCT RENDERING
   ============================ */
const card = p => `<article class="card reveal"><div class="ph"><span class="badge">${p.badge || ""}</span><button class="heart ${wish.includes(p.id) ? "on" : ""}" data-wish="${p.id}" aria-label="Toggle wishlist for ${p.name}">♥</button><img src="${p.image}" alt="Times Frame ${p.name}, ${p.collection} collection" loading="lazy"><button class="qv" data-qv="${p.id}">Quick view</button></div><p class="coll">${p.collection}</p><h3>${p.name}</h3><p class="price">${money(p.price)}${p.old ? `<s>${money(p.old)}</s>` : ""}</p><button class="btn sm" data-add="${p.id}" ${p.stock ? "" : "disabled"}>${p.stock ? "Add to cart" : "Sold out"}</button></article>`;
const fill = (el, list) => { el.innerHTML = list.length ? list.map(card).join("") : `<p class="empty">No watches found.</p>`; $$(".reveal", el).forEach(observe) };

/* ============================
   CATALOG: FILTER, PRICE, SORT
   ============================ */
const cats = ["All", "Automatic", "Chronograph", "Classic", "Sport", "Luxury", "Limited Edition"];
let cat = "All";
function renderShop() {
  const [lo, hi] = ($("#fPrice").value || "0-99999").split("-").map(Number), s = $("#fSort").value;
  let l = PRODUCTS.filter(p => (cat === "All" || p.category === cat) && p.price >= lo && p.price < hi && (!onlyWish || wish.includes(p.id)));
  if (s === "lo") l.sort((a, b) => a.price - b.price); if (s === "hi") l.sort((a, b) => b.price - a.price); if (s === "new") l.sort((a, b) => b.id - a.id);
  fill($("#shopGrid"), l);
}
function initCatalog() {
  $("#chips").innerHTML = cats.map(c => `<button class="${c === cat ? "on" : ""}">${c}</button>`).join("");
  $("#chips").onclick = e => { if (e.target.tagName !== "BUTTON") return; cat = e.target.textContent; onlyWish = false; $$("#chips button").forEach(b => b.classList.toggle("on", b === e.target)); renderShop() };
  $("#fPrice").onchange = $("#fSort").onchange = renderShop;
  fill($("#featGrid"), PRODUCTS.filter(p => p.featured));
  fill($("#newRow"), PRODUCTS.filter(p => p.badge === "New"));
  renderShop();
}

/* ============================
   SEARCH OVERLAY
   ============================ */
function initSearch() {
  $("#bSearch").onclick = () => { open("#search"); setTimeout(() => $("#sInput").focus(), 300) };
  $("#sInput").oninput = e => { const q = e.target.value.trim().toLowerCase(); if (!q) return $("#sRes").innerHTML = ""; fill($("#sRes"), PRODUCTS.filter(p => [p.name, p.category, p.collection].join(" ").toLowerCase().includes(q))) };
}

/* ============================
   QUICK VIEW / PRODUCT DETAIL MODAL
   ============================ */
function openProduct(id) {
  const p = find(id), imgs = p.gallery || [p.image, p.image, p.image], sku = "TF-" + String(p.id).padStart(4, "0");
  $("#mBox").innerHTML = `<button class="x" data-close aria-label="Close">✕</button><div class="gal"><img class="main" id="mMain" src="${imgs[0]}" alt="${p.name}"><div class="thumbs">${imgs.map((s, i) => `<img src="${s}" class="${i ? "" : "on"}" alt="View ${i + 1}" style="object-position:${["center", "left", "right"][i % 3]}">`).join("")}</div></div><div class="info"><p class="coll kicker">${p.collection}</p><h3>${p.name}</h3><p class="stars" style="color:var(--gold)">★★★★★ <small style="color:var(--muted)">4.9</small></p><p class="price" style="margin:.6rem 0;font-size:1.4rem">${money(p.price)}${p.old ? `<s>${money(p.old)}</s>` : ""}</p><p>${p.description}</p><p class="meta">SKU ${sku} &nbsp; ${p.stock ? (p.stock < 6 ? `Only ${p.stock} left` : "In stock") : "Sold out"} &nbsp; Colours: ${p.colors.join(", ")}</p><div class="qty"><button data-q="-1" aria-label="Less">−</button><span id="mQ">1</span><button data-q="1" aria-label="More">+</button></div><div class="acts"><button class="btn" data-addq="${p.id}" ${p.stock ? "" : "disabled"}>Add to cart</button><button class="btn ghost" data-buy="${p.id}" ${p.stock ? "" : "disabled"}>Buy now</button><button class="btn ghost" data-wish="${p.id}">${wish.includes(p.id) ? "Saved ♥" : "Wishlist ♡"}</button></div><details open><summary>Description</summary><p>${p.description} Finished and regulated in our atelier.</p></details><details><summary>Specifications</summary><p>Movement: Automatic, 28,800 vph. Case: 40mm, ${p.colors[0]} finish, 316L steel. Strap: Italian leather. Water resistance: 100m. Power reserve: 48 hours.</p></details><details><summary>Shipping</summary><p>Free insured delivery over $1,500. 30-day returns on unworn watches.</p></details><details><summary>Warranty</summary><p>Five-year international warranty, with free servicing in year one.</p></details></div>`;
  $$(".thumbs img").forEach(t => t.onclick = () => { $("#mMain").src = t.src; $("#mMain").style.objectPosition = t.style.objectPosition; $$(".thumbs img").forEach(x => x.classList.toggle("on", x === t)) });
  open("#modal");
}

/* ============================
   CART SYSTEM
   ============================ */
function addToCart(item, n = 1, silent) {
  const ex = cart.find(i => i.id == item.id);
  ex ? ex.qty += n : cart.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty: n });
  saveCart(); if (!silent) { toast(item.name + " added to your bag"); $("#bCart").classList.add("bump"); setTimeout(() => $("#bCart").classList.remove("bump"), 500) }
}
function saveCart() { save("tf-cart", cart); save("tf-code", code); renderCart() }
function renderCart() {
  const sub = cart.reduce((a, i) => a + i.price * i.qty, 0), disc = code === SITE_CONFIG.discountCode ? Math.round(sub * SITE_CONFIG.discountPct) / 100 : 0;
  const ship = !sub || sub - disc >= SITE_CONFIG.freeShippingOver ? 0 : SITE_CONFIG.shipping;
  $("#cCount").textContent = qtyTotal();
  $("#items").innerHTML = cart.length ? cart.map(i => `<div class="li"><img src="${i.image}" alt=""><div><h4>${i.name}</h4><small>${money(i.price)}</small><div class="qty" style="margin-top:.4rem"><button data-ci="${i.id}" data-d="-1" aria-label="Decrease">−</button><span>${i.qty}</span><button data-ci="${i.id}" data-d="1" aria-label="Increase">+</button></div></div><button class="rm" data-rm="${i.id}">Remove</button></div>`).join("") : `<p class="empty" style="font-size:1.4rem">Your bag is empty.</p>`;
  $("#dfoot").innerHTML = `<div class="code"><input id="cIn" placeholder="Discount code" aria-label="Discount code" value="${code}"><button data-apply>Apply</button></div><div class="row"><span>Subtotal</span><span>${money(sub)}</span></div><div class="row"><span>Discount</span><span>−${money(disc)}</span></div><div class="row"><span>Shipping</span><span>${ship ? money(ship) : "Free"}</span></div><div class="row t"><span>Total</span><span>${money(sub - disc + ship)}</span></div><button class="btn sm" data-checkout ${cart.length ? "" : "disabled"}>Checkout</button><button class="btn sm ghost" data-close style="margin-top:.6rem">Continue shopping</button>`;
}

/* ============================
   WISHLIST
   ============================ */
function toggleWish(id) {
  id = +id; wish = wish.includes(id) ? wish.filter(w => w !== id) : [...wish, id]; save("tf-wish", wish);
  $("#wCount").textContent = wish.length; $$(`[data-wish="${id}"].heart`).forEach(h => h.classList.toggle("on", wish.includes(id)));
  if (onlyWish) renderShop(); toast(wish.includes(id) ? "Saved to wishlist" : "Removed from wishlist");
}

/* ============================
   OVERLAYS
   ============================ */
function open(sel) { closeAll(); $(sel).classList.add("on"); if (sel === "#drawer") $("#shade").classList.add("on"); document.body.style.overflow = "hidden" }
function closeAll() { $$(".ov.on,#drawer.on,.backdrop.on").forEach(e => e.classList.remove("on")); document.body.style.overflow = "" }

const pick = {
  Case: "Steel",
  Strap: "Leather",
  Dial: "Black",
  Hands: "Silver"
};

function renderBuilder() {

  $("#bOpts").innerHTML =
    Object.entries(BUILD)
      .map(([k, o]) => `
        <div class="opt">
          <h4>${k}</h4>

          <div>
            ${Object.entries(o)
              .map(([n, [, add]]) => `
                <button
                  class="${pick[k] === n ? "on" : ""}"
                  data-b="${k}|${n}"
                  aria-pressed="${pick[k] === n}"
                >
                  ${n}${add ? ` +${money(add)}` : ""}
                </button>
              `)
              .join("")}
          </div>
        </div>
      `)
      .join("")
    +
    `
      <div class="bt">

        <div>
          <small style="
            display:block;
            color:var(--muted);
            font-size:.58rem;
            letter-spacing:.18em;
            text-transform:uppercase;
            margin-bottom:.1rem;
          ">
            Your configuration
          </small>

          <b id="bPrice"></b>
        </div>

        <button class="btn" data-bAdd>
          Add to cart
        </button>

      </div>
    `;


  const v = k => BUILD[k][pick[k]];

  const price =
    BASE +
    Object.keys(pick).reduce(
      (a, k) => a + v(k)[1],
      0
    );


  const preview = $("#bPrev");

  preview.classList.remove("builder-changing");

  /*
    Force the animation to restart whenever
    the user changes a configuration.
  */
  void preview.offsetWidth;

  preview.src = watchSVG(
    v("Case")[0],
    v("Dial")[0],
    v("Hands")[0],
    v("Strap")[0]
  );

  preview.dataset.price = price;

  $("#bPrice").textContent = money(price);

  preview.classList.add("builder-changing");
}

function watchSVG(
  c = "#c8a96b",
  d = "#17151a",
  h = "#e2cc9a",
  s = "#3a2a1c"
) {

  const ticks = [...Array(60)].map((_, i) => {

    const major = i % 5 === 0;

    return `
      <line
        x1="200"
        y1="${major ? 88 : 94}"
        x2="200"
        y2="${major ? 104 : 99}"
        stroke="${major ? h : "rgba(255,255,255,.30)"}"
        stroke-width="${major ? 3 : 1}"
        stroke-linecap="round"
        transform="rotate(${i * 6} 200 200)"
      />
    `;

  }).join("");

  const svg = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 500"
  >

    <defs>

      <!-- Case metal -->
      <linearGradient id="caseMetal" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".85"/>
        <stop offset=".18" stop-color="${c}"/>
        <stop offset=".48" stop-color="#666" stop-opacity=".8"/>
        <stop offset=".72" stop-color="${c}"/>
        <stop offset="1" stop-color="#202020"/>
      </linearGradient>

      <!-- Bezel -->
      <radialGradient id="bezel">
        <stop offset="0" stop-color="${c}"/>
        <stop offset=".72" stop-color="${c}"/>
        <stop offset=".9" stop-color="#555"/>
        <stop offset="1" stop-color="#171717"/>
      </radialGradient>

      <!-- Dial -->
      <radialGradient id="dial" cx="38%" cy="30%">
        <stop offset="0" stop-color="${d}" stop-opacity=".95"/>
        <stop offset=".55" stop-color="${d}"/>
        <stop offset="1" stop-color="#050505"/>
      </radialGradient>

      <!-- Glass -->
      <radialGradient id="glass" cx="30%" cy="20%">
        <stop offset="0" stop-color="#fff" stop-opacity=".22"/>
        <stop offset=".3" stop-color="#fff" stop-opacity=".045"/>
        <stop offset=".7" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>

      <!-- Strap -->
      <linearGradient id="strap" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#111"/>
        <stop offset=".2" stop-color="${s}"/>
        <stop offset=".5" stop-color="#111"/>
        <stop offset=".78" stop-color="${s}"/>
        <stop offset="1" stop-color="#080808"/>
      </linearGradient>

      <!-- Crown -->
      <linearGradient id="crown" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#fff"/>
        <stop offset=".25" stop-color="${c}"/>
        <stop offset=".6" stop-color="#777"/>
        <stop offset="1" stop-color="#222"/>
      </linearGradient>

      <!-- soft shadow -->
      <filter id="shadow">
        <feGaussianBlur stdDeviation="12"/>
      </filter>

      <!-- tiny depth -->
      <filter id="soft">
        <feGaussianBlur stdDeviation="2"/>
      </filter>

    </defs>


    <!-- =================================
         STUDIO BACKGROUND
         ================================= -->

    <rect
      width="400"
      height="500"
      fill="#0a0a09"
    />

    <ellipse
      cx="200"
      cy="420"
      rx="115"
      ry="18"
      fill="#000"
      opacity=".7"
      filter="url(#shadow)"
    />


    <!-- =================================
         STRAP
         ================================= -->

    <path
      d="
        M142 0
        H258
        L244 112
        H156
        Z
      "
      fill="url(#strap)"
    />

    <path
      d="
        M156 388
        H244
        L258 500
        H142
        Z
      "
      fill="url(#strap)"
    />

    <!-- strap stitching -->
    <path
      d="
        M154 20
        L165 108
        M246 20
        L235 108

        M165 392
        L154 480
        M235 392
        L246 480
      "
      stroke="rgba(255,255,255,.16)"
      stroke-width="1"
      stroke-dasharray="4 5"
    />


    <!-- =================================
         LUGS
         ================================= -->

    <path
      d="M137 130 L105 160 L130 180 L154 150 Z"
      fill="url(#caseMetal)"
    />

    <path
      d="M263 130 L295 160 L270 180 L246 150 Z"
      fill="url(#caseMetal)"
    />

    <path
      d="M137 370 L105 340 L130 320 L154 350 Z"
      fill="url(#caseMetal)"
    />

    <path
      d="M263 370 L295 340 L270 320 L246 350 Z"
      fill="url(#caseMetal)"
    />


    <!-- =================================
         CASE
         ================================= -->

    <circle
      cx="200"
      cy="250"
      r="135"
      fill="#050505"
      opacity=".85"
    />

    <circle
      cx="200"
      cy="250"
      r="132"
      fill="url(#caseMetal)"
    />

    <!-- case highlight -->
    <circle
      cx="200"
      cy="250"
      r="126"
      fill="none"
      stroke="rgba(255,255,255,.35)"
      stroke-width="2"
    />

    <!-- inner bezel -->
    <circle
      cx="200"
      cy="250"
      r="116"
      fill="url(#bezel)"
    />


    <!-- =================================
         DIAL
         ================================= -->

    <circle
      cx="200"
      cy="250"
      r="103"
      fill="url(#dial)"
    />

    <!-- dial edge -->
    <circle
      cx="200"
      cy="250"
      r="101"
      fill="none"
      stroke="rgba(255,255,255,.15)"
      stroke-width="1"
    />


    <!-- minute track -->
    <circle
      cx="200"
      cy="250"
      r="92"
      fill="none"
      stroke="rgba(255,255,255,.08)"
      stroke-width="1"
    />


    <!-- =================================
         HOUR / MINUTE MARKERS
         ================================= -->

    <g transform="translate(0 50)">
      ${ticks}
    </g>


    <!-- =================================
         BRAND MARK
         ================================= -->

    <text
      x="200"
      y="185"
      text-anchor="middle"
      fill="${h}"
      font-family="Georgia,serif"
      font-size="10"
      letter-spacing="3"
    >
      TIMES FRAME
    </text>

    <text
      x="200"
      y="199"
      text-anchor="middle"
      fill="rgba(255,255,255,.45)"
      font-family="Arial,sans-serif"
      font-size="5"
      letter-spacing="2"
    >
      AUTOMATIC
    </text>


    <!-- =================================
         DATE WINDOW
         ================================= -->

    <rect
      x="226"
      y="232"
      width="22"
      height="17"
      rx="2"
      fill="#080808"
      stroke="rgba(255,255,255,.20)"
      stroke-width="1"
    />

    <text
      x="237"
      y="244"
      text-anchor="middle"
      fill="#eee"
      font-family="Arial,sans-serif"
      font-size="8"
    >
      28
    </text>


    <!-- =================================
         HANDS
         ================================= -->

    <!-- hour hand -->
    <line
      x1="200"
      y1="250"
      x2="200"
      y2="207"
      stroke="${h}"
      stroke-width="7"
      stroke-linecap="round"
    />

    <!-- minute hand -->
    <line
      x1="200"
      y1="250"
      x2="239"
      y2="225"
      stroke="${h}"
      stroke-width="4"
      stroke-linecap="round"
    />

    <!-- second hand -->
    <line
      x1="200"
      y1="250"
      x2="174"
      y2="270"
      stroke="#b44"
      stroke-width="1.5"
      stroke-linecap="round"
    />

    <!-- center pin -->
    <circle
      cx="200"
      cy="250"
      r="7"
      fill="url(#crown)"
    />

    <circle
      cx="200"
      cy="250"
      r="2"
      fill="#111"
    />


    <!-- =================================
         CROWN
         ================================= -->

    <rect
      x="330"
      y="237"
      width="18"
      height="26"
      rx="6"
      fill="url(#crown)"
    />

    <path
      d="M337 240 V260 M342 240 V260"
      stroke="rgba(0,0,0,.45)"
      stroke-width="1"
    />


    <!-- =================================
         GLASS REFLECTION
         ================================= -->

    <circle
      cx="200"
      cy="250"
      r="103"
      fill="url(#glass)"
    />

    <path
      d="
        M128 180
        Q175 135 220 145
      "
      fill="none"
      stroke="rgba(255,255,255,.20)"
      stroke-width="7"
      stroke-linecap="round"
      filter="url(#soft)"
    />


    <!-- =================================
         CASE BOTTOM HIGHLIGHT
         ================================= -->

    <path
      d="
        M116 282
        Q135 355 200 370
        Q265 355 284 282
      "
      fill="none"
      stroke="rgba(0,0,0,.55)"
      stroke-width="7"
      stroke-linecap="round"
    />

  </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/* ============================
   COUNTDOWN, COUNTERS, REVIEWS, NEWSLETTER
   ============================ */
function tick() {
  let s = Math.max(0, Math.floor((SITE_CONFIG.limitedEnds - Date.now()) / 1000)); const v = [86400, 3600, 60, 1].map(u => { const n = Math.floor(s / u); s %= u; return String(n).padStart(2, "0") });
  $$("#cd b").forEach((b, i) => b.textContent = v[i]);
}
function count(el) {
  const to = +el.dataset.count, suf = el.dataset.suf || ""; if (reduced) return el.textContent = to + suf;
  const t0 = performance.now(); (function f(t) { const p = Math.min(1, (t - t0) / 1800); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))) + suf; if (p < 1) requestAnimationFrame(f) })(t0);
}
let ri = 0;
function initReviews() {
  $("#revTrack").innerHTML = REVIEWS.map(r => `<div class="slide"><p class="stars" aria-label="5 stars">★★★★★</p><q>${r.t}</q><small>${r.n}, Verified Purchase, ${r.p}</small></div>`).join("");
  $("#rDots").innerHTML = REVIEWS.map((_, i) => `<button aria-label="Review ${i + 1}" data-r="${i}"></button>`).join("");
  const go = i => { ri = (i + REVIEWS.length) % REVIEWS.length; $("#revTrack").style.transform = `translateX(-${ri * 100}%)`; $$("#rDots button").forEach((b, j) => b.classList.toggle("on", j === ri)) };
  $("#rPrev").onclick = () => go(ri - 1); $("#rNext").onclick = () => go(ri + 1); $("#rDots").onclick = e => e.target.dataset.r && go(+e.target.dataset.r);
  go(0); if (!reduced) setInterval(() => go(ri + 1), 7000);
}
function initNewsletter() {
  $("#nForm").onsubmit = e => { e.preventDefault(); const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($("#nMail").value.trim()); $("#nMsg").textContent = ok ? "Welcome to the Inner Circle. Your first letter arrives soon." : "Please enter a valid email address."; if (ok) $("#nMail").value = "" };
}

/* ============================
   SCROLL: NAVBAR, REVEAL, PARALLAX
   ============================ */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); $$("[data-count]", e.target).forEach(count); io.unobserve(e.target) } }), { threshold: .15 });
function observe(el) { io.observe(el) }
function initScroll() {
  $$(".reveal").forEach(observe);
  const nav = $("#nav"), hv = $(".hero .media"); let busy;
  addEventListener("scroll", () => { if (busy) return; busy = requestAnimationFrame(() => { busy = 0; const y = scrollY; nav.classList.toggle("solid", y > 60); if (!reduced && y < innerHeight) { hv.style.transform = `translateY(${y * .15}px) scale(1.08)`; $(".hero-in").style.transform = `translateY(${y * -.1}px)` } }) }, { passive: true });
}

/* ============================
   VIDEO SYSTEM: sources, fallback, lazy play
   ============================ */
function initVideo() {

  const videos = [
    {
      video: $("#heroVideo"),
      src: SITE_CONFIG.heroVideo
    },
    {
      video: $("#showVideo"),
      src: SITE_CONFIG.showcaseVideo
    }
  ];

  videos.forEach(({ video, src }) => {

    if (!video) return;

    // Set source directly on video
    video.src = src;

    // Load video
    video.load();

    // Remove fallback only when video can play
    video.addEventListener("canplay", () => {
      video.classList.remove("off");
    });

    // Hide only if the file actually fails
    video.addEventListener("error", () => {
      console.error("Video failed to load:", src);
      video.classList.add("off");
    });

  });

  // Play videos when visible
  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        const video = entry.target;

        if (reduced) {
          video.pause();
          return;
        }

        if (entry.isIntersecting) {

          video.play().catch(error => {
            console.log("Autoplay error:", error);
          });

        } else {

          video.pause();

        }

      });

    },
    {
      threshold: 0.25
    }
  );

  $$("video").forEach(video => observer.observe(video));
}

/* ============================
   CURSOR & MENU
   ============================ */
function initCursor() {
  if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  const c = $("#cur"); document.body.classList.add("cursor");
  addEventListener("mousemove", e => { c.classList.add("on"); c.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; c.classList.toggle("big", !!e.target.closest("a,button,select,.ph")) });
}

/* ============================
   EVENTS (one delegated listener)
   ============================ */
document.addEventListener("click", e => {
  const t = e.target, g = a => t.closest(`[${a}]`);
  let el;
  if (el = g("data-add")) { const p = find(el.dataset.add); if (p.stock) addToCart(p) }
  else if (el = g("data-qv")) openProduct(el.dataset.qv)
  else if (el = g("data-wish")) toggleWish(el.dataset.wish) || (el.tagName === "BUTTON" && !el.classList.contains("heart") && (el.textContent = wish.includes(+el.dataset.wish) ? "Saved ♥" : "Wishlist ♡"))
  else if (el = g("data-q")) { const q = $("#mQ"); q.textContent = Math.max(1, +q.textContent + +el.dataset.q) }
  else if (el = g("data-addq")) addToCart(find(el.dataset.addq), +$("#mQ").textContent)
  else if (el = g("data-buy")) { addToCart(find(el.dataset.buy), +$("#mQ").textContent, true); open("#drawer") }
  else if (el = g("data-ci")) { const i = cart.find(x => x.id == el.dataset.ci); i.qty += +el.dataset.d; if (i.qty < 1) cart = cart.filter(x => x !== i); saveCart() }
  else if (el = g("data-rm")) { cart = cart.filter(x => x.id != el.dataset.rm); saveCart() }
  else if (g("data-apply")) { const v = $("#cIn").value.trim().toUpperCase(); code = v === SITE_CONFIG.discountCode ? v : ""; saveCart(); toast(code ? "Discount applied" : "Invalid code") }
  else if (g("data-checkout")) toast("Checkout needs a payment provider. Connect Stripe or similar here.")
  else if (el = g("data-b")) { const [k, n] = el.dataset.b.split("|"); pick[k] = n; renderBuilder() }
  else if (g("data-badd")) { const s = Object.values(pick).join("-"); addToCart({ id: "custom-" + s, name: `Custom ${pick.Case} / ${pick.Dial}`, price: +$("#bPrev").dataset.price, image: $("#bPrev").src }) }
  else if (g("data-close") || t.id === "shade" || t.id === "modal") closeAll();
});
document.addEventListener("keydown", e => e.key === "Escape" && closeAll());

/* ============================
   INIT
   ============================ */
document.addEventListener("DOMContentLoaded", () => {
  $("#wCount").textContent = wish.length;
  initCatalog(); initSearch(); initReviews(); initNewsletter(); initScroll(); initVideo(); initCursor(); renderCart(); renderBuilder(); tick(); setInterval(tick, 1000);
  $("#bCart").onclick = () => open("#drawer");
  $("#bAcct").onclick = () => toast("Accounts arrive with your checkout provider.");
  $("#bWish").onclick = () => { onlyWish = !onlyWish; cat = "All"; $$("#chips button").forEach((b, i) => b.classList.toggle("on", !i)); renderShop(); $("#shop").scrollIntoView(); toast(onlyWish ? "Showing your wishlist" : "Showing all watches") };
  const b = $("#burger"), m = $("#menu"), tgl = on => { b.classList.toggle("on", on); m.classList.toggle("on", on); b.setAttribute("aria-expanded", on); document.body.style.overflow = on ? "hidden" : "" };
  b.onclick = () => tgl(!m.classList.contains("on")); $$("#menu a").forEach(a => a.onclick = () => tgl(false));
  // Preloader: fast (about 1.5s), then reveal hero
  let p = 0; const iv = setInterval(() => { p = Math.min(100, p + 4 + Math.random() * 8); $("#bar").style.width = p + "%"; $("#pct").textContent = Math.floor(p) + "%"; if (p >= 100) { clearInterval(iv); setTimeout(() => { $("#pre").classList.add("done"); document.body.classList.add("loaded") }, 250) } }, 80);
});
