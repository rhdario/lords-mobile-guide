
// Base de datos de Héroes del Jugador
// PRIORIDAD: ATQ puro de tropa > ATQ Ejército (relleno) > P2P
// Las imágenes están en subcarpetas: img/hero/{folder}/{id}.webp
const heroesDB = {
    infantry: [
        // 🆓 F2P - Infantería
        { id: "matademonios", name: "Matademonios", type: "inf", p2p: false, folder: "Infantry" },
        { id: "forjador_de_almas", name: "Forjador de Almas", type: "inf", p2p: false, folder: "Infantry" },
        { id: "guardian", name: "Guardián", type: "inf", p2p: false, folder: "Infantry" },
        { id: "escudero_del_mar", name: "Escudero del Mar", type: "inf", p2p: false, folder: "Infantry" },
        { id: "rayo_escarlata", name: "Rayo Escarlata", type: "inf", p2p: false, folder: "Infantry" },
        { id: "sombra", name: "Sombra", type: "inf", p2p: false, folder: "Infantry" },
        // 🎉 Evento - Infantería
        { id: "pegaso", name: "Pegaso", type: "inf", p2p: false, folder: "Infantry" },
        // 💰 P2P - Infantería
        { id: "lobo_severo", name: "Lobo Severo", type: "inf", p2p: true, folder: "Infantry" },
        { id: "sacerdotisa_de_crepusculo", name: "Sacerdotisa del Crepúsculo", type: "inf", p2p: true, folder: "Infantry" },
        { id: "doncella_escudo", name: "Doncella Escudo", type: "inf", p2p: true, folder: "Infantry" },
        { id: "cazadora_maldita", name: "Cazadora Maldita", type: "inf", p2p: true, folder: "Infantry" },
        { id: "el_grandulon", name: "El Grandulón", type: "inf", p2p: true, folder: "Infantry" },
        { id: "el_magmaroide", name: "El Magmaroide", type: "inf", p2p: true, folder: "Infantry" },
        { id: "furiosa", name: "Furiosa", type: "inf", p2p: true, folder: "Infantry" },
        { id: "mujer_fatal", name: "Mujer Fatal", type: "inf", p2p: true, folder: "Infantry" },
        { id: "principe_de_ladrones", name: "Príncipe de Ladrones", type: "inf", p2p: true, folder: "Infantry" },
        { id: "tejedor_de_luz", name: "Tejedor de Luz", type: "inf", p2p: true, folder: "Infantry" },
        { id: "tramoyista", name: "Tramoyista", type: "inf", p2p: true, folder: "Infantry" }
    ],
    cavalry: [
        // 🆓 F2P - Caballería
        { id: "hijo_de_la_luz", name: "Hijo de la Luz", type: "cav", p2p: false, folder: "Cavalry" },
        { id: "cuervo_nocturno", name: "Cuervo Nocturno", type: "cav", p2p: false, folder: "Cavalry" },
        { id: "caballero_letal", name: "Caballero Letal", type: "cav", p2p: false, folder: "Cavalry" },
        { id: "sabio_de_viento", name: "Sabio de Viento", type: "cav", p2p: false, folder: "Cavalry" },
        // 🎉 Evento - Caballería
        { id: "dragon_del_caos", name: "Dragón del Caos", type: "cav", p2p: false, folder: "Cavalry" },
        // 💰 P2P - Caballería
        { id: "barbaro", name: "Bárbaro", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "centauro_vengativo", name: "Centauro Vengativo", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "don_guapo", name: "Don Guapo", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "mente_tejedora", name: "Mente Tejedora", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "muneca_mecanica", name: "Muñeca Mecánica", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "necroduke", name: "Necroduke", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "rompeolas", name: "Rompeolas", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "vapobot", name: "Vapobot", type: "cav", p2p: true, folder: "Cavalry" },
        { id: "zorro_de_la_tormenta", name: "Zorro de la Tormenta", type: "cav", p2p: true, folder: "Cavalry" }
    ],
    artillery: [
        // 🆓 F2P - Artillería
        { id: "reina_de_la_nieve", name: "Reina de la Nieve", type: "art", p2p: false, folder: "Artillery" },
        { id: "rastreadora", name: "Rastreadora", type: "art", p2p: false, folder: "Artillery" },
        { id: "cuervo_negro", name: "Cuervo Negro", type: "art", p2p: false, folder: "Artillery" },
        { id: "arquera_letal", name: "Arquera Letal", type: "art", p2p: false, folder: "Artillery" },
        { id: "estafador", name: "Estafador", type: "art", p2p: false, folder: "Artillery" },
        // 🎉 Evento - Artillería
        { id: "maestro_bombardero", name: "Maestro Bombardero", type: "art", p2p: false, folder: "Artillery" },
        // 💰 P2P - Artillería
        { id: "diablilla", name: "Diablilla", type: "art", p2p: true, folder: "Artillery" },
        { id: "bruja_onirica", name: "Bruja Onírica", type: "art", p2p: true, folder: "Artillery" },
        { id: "alquimista_errante", name: "Alquimista Errante", type: "art", p2p: true, folder: "Artillery" },
        { id: "cantante_marina", name: "Cantante Marina", type: "art", p2p: true, folder: "Artillery" },
        { id: "cronista", name: "Cronista", type: "art", p2p: true, folder: "Artillery" },
        { id: "guardian_del_bosque", name: "Guardián del Bosque", type: "art", p2p: true, folder: "Artillery" },
        { id: "guia_eterea", name: "Guía Etérea", type: "art", p2p: true, folder: "Artillery" },
        { id: "maestro_cocinero", name: "Maestro Cocinero", type: "art", p2p: true, folder: "Artillery" },
        { id: "magister_oscuro", name: "Magíster Oscuro", type: "art", p2p: true, folder: "Artillery" },
        { id: "oraculo", name: "Oráculo", type: "art", p2p: true, folder: "Artillery" },
        { id: "princesa_caracol", name: "Princesa Caracol", type: "art", p2p: true, folder: "Artillery" },
        { id: "sabia_del_desierto", name: "Sabia del Desierto", type: "art", p2p: true, folder: "Artillery" }
    ],
    siege: [
        // 🆓 F2P - Asedio
        { id: "incineradora", name: "Incineradora", type: "siege", p2p: false, folder: "Siege" },
        { id: "elementalista", name: "Elementalista", type: "siege", p2p: false, folder: "Siege" },
        { id: "prima_donna", name: "Prima Donna", type: "siege", p2p: false, folder: "Siege" },
        // 💰 P2P - Asedio
        { id: "seguidor_oscuro", name: "Seguidor Oscuro", type: "siege", p2p: true, folder: "Siege" }
    ],
    // Héroes de Ejército (relleno universal - dan ATQ Ejército)
    army: [
        { id: "caballera_de_la_rosa", name: "Caballera de la Rosa", type: "army", p2p: false, folder: "Cavalry" },
        { id: "trasgo_dinamita", name: "Trasgo Dinamita", type: "army", p2p: false, folder: "Artillery" },
        { id: "observador", name: "Observador", type: "army", p2p: false, folder: "Infantry" }
    ]
};



// Base de datos de Familiars (Monstruitos) por tipo de tropa que potencian
const familiarsDB = {
    infantry: [
        { id: "Familiar Infantry 01", name: "Familiar Infantería 1" },
        { id: "Familiar Infantry 02", name: "Familiar Infantería 2" },
        { id: "Familiar Infantry 03", name: "Familiar Infantería 3" },
        { id: "Familiar Infantry 04", name: "Familiar Infantería 4" },
        { id: "Familiar Infantry 05", name: "Familiar Infantería 5" },
        { id: "Familiar Infantry 06", name: "Familiar Infantería 6" },
        { id: "Familiar Infantry 07", name: "Familiar Infantería 7" }
    ],
    cavalry: [
        { id: "Familiar Cavalry 01", name: "Familiar Caballería 1" },
        { id: "Familiar Cavalry 02", name: "Familiar Caballería 2" },
        { id: "Familiar Cavalry 03", name: "Familiar Caballería 3" },
        { id: "Familiar Cavalry 04", name: "Familiar Caballería 4" },
        { id: "Familiar Cavalry 05", name: "Familiar Caballería 5" },
        { id: "Familiar Cavalry 06", name: "Familiar Caballería 6" }
    ],
    artillery: [
        { id: "Familiar Artillery 01", name: "Familiar Artillería 1" },
        { id: "Familiar Artillery 02", name: "Familiar Artillería 2" },
        { id: "Familiar Artillery 03", name: "Familiar Artillería 3" },
        { id: "Familiar Artillery 04", name: "Familiar Artillería 4" },
        { id: "Familiar Artillery 05", name: "Familiar Artillería 5" },
        { id: "Familiar Artillery 06", name: "Familiar Artillería 6" }
    ],
    siege: [
        { id: "Familiar Siege 01", name: "Familiar Asedio 1" },
        { id: "Familiar Siege 02", name: "Familiar Asedio 2" },
        { id: "Familiar Siege 03", name: "Familiar Asedio 3" },
        { id: "Familiar Siege 04", name: "Familiar Asedio 4" },
        { id: "Familiar Siege 05", name: "Familiar Asedio 5" }
    ]
};

// Base de datos de Líderes de Fortaleza (Monstruos + Familiars como líderes)
const monstersDB = {
    infantry: [
        ...Array.from({ length: 12 }, (_, i) => ({ id: `Leader Infantry ${(i + 1).toString().padStart(2, '0')}`, name: `Líder ${i + 1}`, type: "inf", isLeader: true })),
        ...Array.from({ length: 7 }, (_, i) => ({ id: `Familiar Infantry ${(i + 1).toString().padStart(2, '0')}`, name: `Familiar ${i + 1}`, type: "inf", isFamiliar: true }))
    ],
    cavalry: [
        ...Array.from({ length: 8 }, (_, i) => ({ id: `Leader Cavalry ${(i + 1).toString().padStart(2, '0')}`, name: `Líder ${i + 1}`, type: "cav", isLeader: true })),
        ...Array.from({ length: 6 }, (_, i) => ({ id: `Familiar Cavalry ${(i + 1).toString().padStart(2, '0')}`, name: `Familiar ${i + 1}`, type: "cav", isFamiliar: true }))
    ],
    artillery: [
        ...Array.from({ length: 12 }, (_, i) => ({ id: `Leader Artillery ${(i + 1).toString().padStart(2, '0')}`, name: `Líder ${i + 1}`, type: "art", isLeader: true })),
        ...Array.from({ length: 6 }, (_, i) => ({ id: `Familiar Artillery ${(i + 1).toString().padStart(2, '0')}`, name: `Familiar ${i + 1}`, type: "art", isFamiliar: true }))
    ],
    siege: [
        ...Array.from({ length: 1 }, (_, i) => ({ id: `Leader Siege ${(i + 1).toString().padStart(2, '00')}`, name: `Líder ${i + 1}`, type: "siege", isLeader: true })),
        ...Array.from({ length: 5 }, (_, i) => ({ id: `Familiar Siege ${(i + 1).toString().padStart(2, '0')}`, name: `Familiar ${i + 1}`, type: "siege", isFamiliar: true }))
    ]
};

// Estado
let selectedHeroesCount = { inf: 0, cav: 0, art: 0, siege: 0 };
let totalSelected = 0;
let selectedCaptain = null;
let selectedCaptainType = null;

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderMonsters("infantry", "heroes-inf");
    renderMonsters("cavalry", "heroes-cav");
    renderMonsters("artillery", "heroes-art");
    renderMonsters("siege", "heroes-siege");

    setupTabs();
    document.getElementById("calculateBtn").addEventListener("click", calculateStrategy);
    document.getElementById("resetBtn").addEventListener("click", () => location.reload());

    // Formateo K/M para el campo de tamaño de agrupación
    const rallyInput = document.getElementById("rallySize");
    const formatKM = (input) => {
        input.addEventListener('focus', function () {
            if (this.dataset.raw) this.value = this.dataset.raw;
        });
        input.addEventListener('blur', function () {
            let valStr = this.value.toLowerCase().replace(/,/g, '');
            let val = parseFloat(valStr);
            if (valStr.includes('k')) val = parseFloat(valStr.replace('k', '')) * 1000;
            if (valStr.includes('m')) val = parseFloat(valStr.replace('m', '')) * 1000000;
            if (!isNaN(val) && val > 0) {
                this.dataset.raw = val;
                if (val >= 1000000) this.value = parseFloat((val / 1000000).toFixed(2)) + "M";
                else if (val >= 1000) this.value = Math.round(val / 1000) + "k";
                else this.value = val;
            } else {
                this.dataset.raw = "";
                this.value = "";
            }
        });
    };
    formatKM(rallyInput);

    // Formatting troops on blur/focus
    document.querySelectorAll('.troop-qty-input').forEach(input => {
        input.addEventListener('focus', function () {
            if (this.dataset.raw) {
                this.value = this.dataset.raw;
            }
        });

        input.addEventListener('blur', function () {
            let valStr = this.value.toLowerCase().replace(/,/g, '');
            let val = parseFloat(valStr);
            if (valStr.includes('k')) val = parseFloat(valStr.replace('k', '')) * 1000;
            if (valStr.includes('m')) val = parseFloat(valStr.replace('m', '')) * 1000000;

            if (!isNaN(val) && val > 0) {
                this.dataset.raw = val;

                if (val >= 1000000) {
                    this.value = parseFloat((val / 1000000).toFixed(2)) + "M";
                } else if (val >= 1000) {
                    this.value = Math.round(val / 1000) + "k";
                } else {
                    this.value = val;
                }
            } else {
                this.dataset.raw = "";
                this.value = "";
            }
        });
    });
});

function renderMonsters(category, containerId) {
    const container = document.getElementById(containerId);
    let html = "";
    const catCapitalized = category.charAt(0).toUpperCase() + category.slice(1);

    monstersDB[category].forEach(hero => {
        // Si es un familiar, usa la carpeta de Familiars; si es líer, usa leaders
        const imgSrc = hero.isFamiliar
            ? `img/Familiars/${catCapitalized}/${hero.id}.png`
            : `img/leaders/${category}/${hero.id}.png`;
        const label = hero.isFamiliar ? '🐉' : '👹';
        html += `
            <div class="hero-item monster-item" data-type="${hero.type}" data-id="${hero.id}">
                <div class="hero-img-box" style="${hero.isFamiliar ? 'border-color:#d4af37;' : ''}">
                    <img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.parentNode.innerHTML+='<span style=\'color:#222;font-size:20px;\'>${label}</span>'">
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    container.querySelectorAll('.hero-item').forEach(el => {
        el.addEventListener("click", function () {
            const type = this.getAttribute("data-type");
            let hName = this.getAttribute("data-id");

            if (this.classList.contains("selected")) {
                this.classList.remove("selected");
                selectedHeroesCount[type]--;
                totalSelected--;

                if (selectedCaptain === hName) {
                    selectedCaptain = null;
                    selectedCaptainType = null;
                    document.getElementById("captain-info").innerHTML = `Capitán: <span style="color:#ff4757">Ninguno</span>`;
                }

                let badge = this.querySelector('.captain-badge');
                if (badge) badge.remove();
            } else {
                this.classList.add("selected");
                selectedHeroesCount[type]++;
                totalSelected++;

                if (!selectedCaptain) {
                    selectedCaptain = hName;
                    selectedCaptainType = type;
                    let displayType = type === 'inf' ? 'Infantería' : (type === 'cav' ? 'Caballería' : (type === 'art' ? 'Artillería' : 'Asedio'));
                    document.getElementById("captain-info").innerHTML = `Capitán: <strong style="color:var(--gold)">Monstruo ${displayType}</strong> 👑`;

                    let badge = document.createElement("div");
                    badge.className = "captain-badge";
                    badge.innerText = "👑";
                    badge.style.position = "absolute";
                    badge.style.top = "-5px";
                    badge.style.right = "-5px";
                    badge.style.fontSize = "16px";
                    badge.style.zIndex = "10";
                    this.querySelector('.hero-img-box').appendChild(badge);
                }
            }
            document.getElementById("selected-count").innerText = totalSelected;
        });
    });
}

function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// LOGICA PRINCIPAL DE CALCULO
function calculateStrategy() {
    // Parsear el tamaño de agrupación soportando K/M
    const parseSizeInput = (valStr) => {
        if (!valStr) return null;
        let s = valStr.toString().toLowerCase().replace(/,/g, '');
        if (s.includes('k')) return Math.round(parseFloat(s.replace('k', '')) * 1000) || null;
        if (s.includes('m')) return Math.round(parseFloat(s.replace('m', '')) * 1000000) || null;
        return parseInt(s) || null;
    };
    const rallySizeInput = parseSizeInput(document.getElementById("rallySize").value) || parseSizeInput(document.getElementById("rallySize").dataset.raw);
    const fortressLevel = parseInt(document.getElementById("fortressLevel").value) || 5;

    const parseFormatted = (valStr) => {
        if (!valStr) return 0;
        let s = valStr.toString().toLowerCase().replace(/,/g, '');
        if (s.includes('k')) return parseFloat(s.replace('k', '')) * 1000 || 0;
        if (s.includes('m')) return parseFloat(s.replace('m', '')) * 1000000 || 0;
        return parseFloat(s) || 0;
    };

    const getSum = (type) => {
        return parseFormatted(document.getElementById(`${type}_t1`).value) +
            parseFormatted(document.getElementById(`${type}_t2`).value) +
            parseFormatted(document.getElementById(`${type}_t3`).value) +
            parseFormatted(document.getElementById(`${type}_t4`).value);
    };

    const qtyInf = getSum("inf");
    const qtyCav = getSum("cav");
    const qtyArt = getSum("art");
    const qtySiege = getSum("siege");

    if (qtyInf === 0 && qtyCav === 0 && qtyArt === 0 && qtySiege === 0) {
        alert("Por favor ingresa las tropas enemigas descubiertas.");
        return;
    }

    const multiplierPerLeader = 0.25;

    let powInf = qtyInf * (1 + (selectedHeroesCount.inf * multiplierPerLeader));
    let powCav = qtyCav * (1 + (selectedHeroesCount.cav * multiplierPerLeader));
    let powArt = qtyArt * (1 + (selectedHeroesCount.art * multiplierPerLeader));

    const totalPow = powInf + powCav + powArt;

    let powers = [
        { name: "Infantería", sys: "inf", val: powInf, raw: qtyInf },
        { name: "Caballería", sys: "cav", val: powCav, raw: qtyCav },
        { name: "Artillería", sys: "art", val: powArt, raw: qtyArt }
    ];

    powers.sort((a, b) => b.val - a.val);

    const mainEnemy = powers[0];
    const secEnemy = powers[1];

    let isMixed = secEnemy.val > 0 && (secEnemy.val / totalPow) > 0.2;

    const getCounter = (enemySys) => {
        if (enemySys === "inf") return { name: "Caballería", sys: "cav", icon: "Cavalry" };
        if (enemySys === "cav") return { name: "Artillería", sys: "art", icon: "Artillery" };
        if (enemySys === "art") return { name: "Infantería", sys: "inf", icon: "Infantry" };
    };

    const getBuffers = (sysList) => {
        let allSys = [{ n: "Infantería", s: "inf" }, { n: "Caballería", s: "cav" }, { n: "Artillería", s: "art" }];
        return allSys.filter(t => !sysList.includes(t.s));
    };

    let mainCounter = getCounter(mainEnemy.sys);
    let secCounter = getCounter(secEnemy.sys);

    let sendStr = "";
    let statsHtml = "";
    let sendComps = [];
    let bufferHtml = "";
    let wallAlertHtml = "";

    let hasSiege = fortressLevel >= 5;
    if (hasSiege && totalPow > 0) {
        wallAlertHtml = `
            <div style="margin-top: 10px; padding: 10px; background: rgba(212, 175, 55, 0.1); border-left: 3px solid var(--gold); text-align: left; border-radius: 4px;">
                <strong style="color: var(--gold);">⚠️ Atención (Muralla Nivel ${fortressLevel}):</strong><br>
                <span style="font-size: 0.95rem; color: #ccc;">Las fortalezas de este nivel tienen una muralla con muchos PS. Hemos añadido un 5% de asedio para asegurar que la muralla caiga a tiempo.</span>
            </div>
        `;
    }

    // Lógica para asedio extremo o normal
    if (totalPow === 0 && qtySiege > 0) {
        sendStr = `El enemigo es puro asedio. Usa cualquier tropa, prefiriendo Infantería.`;
        let amount = rallySizeInput ? rallySizeInput : 0;
        sendComps.push({ name: "Infantería", sys: "inf", pct: 100, amount: amount });
        mainCounter = { name: "Infantería", sys: "inf", icon: "Infantry" };
    } else if (!isMixed) {
        let mainPct = hasSiege ? 95 : 100;
        sendStr = `1 TIPO DE TROPA (${mainPct}% ${mainCounter.name}${hasSiege ? " + 5% Asedio" : ""})`;

        let siegeAmt = 0;
        let buffersAmt = 8; // 4 + 4 tropas cebo
        let mainAmt = 0;

        if (rallySizeInput) {
            siegeAmt = hasSiege ? Math.round(rallySizeInput * 0.05) : 0;
            mainAmt = rallySizeInput - buffersAmt - siegeAmt;
            if (mainAmt < 0) mainAmt = 0;
        }

        sendComps.push({ name: mainCounter.name, sys: mainCounter.sys, pct: mainPct, amount: mainAmt });
        if (hasSiege) {
            sendComps.push({ name: "Asedio", sys: "siege", pct: 5, amount: siegeAmt });
        }

        // HTML del Colchón
        let buffers = getBuffers([mainCounter.sys]);
        bufferHtml = `
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 71, 87, 0.1); border-left: 3px solid var(--red-alert); text-align: left; border-radius: 4px;">
                <strong style="color: var(--red-alert);">🛡️ Táctica de Cebo (Colchón):</strong><br>
                <span style="font-size: 0.95rem; color: #ccc;">Añade <strong>4 tropas de ${buffers[0].n}</strong> y <strong>4 tropas de ${buffers[1].n}</strong> mínimo T3 (T1/T2 bajan la moral) a tu agrupación para que absorban el daño de los héroes enemigos.</span>
            </div>
        `;

    } else {
        sendStr = `MIXTO (${mainCounter.name} + ${secCounter.name})`;
        let powTargetTotal = mainEnemy.val + secEnemy.val;
        let pctMainCounter = Math.round((mainEnemy.val / powTargetTotal) * 100);
        let pctSecCounter = 100 - pctMainCounter;

        let siegeAmt = 0;
        let buffersAmt = 4; // 1 buffer de 4 tropas

        if (hasSiege) {
            pctMainCounter -= 5;
            if (pctMainCounter < 0) pctMainCounter = 0;
        }

        let amtMain = rallySizeInput ? Math.round(rallySizeInput * (pctMainCounter / 100)) - buffersAmt : 0;
        let amtSec = rallySizeInput ? Math.round(rallySizeInput * (pctSecCounter / 100)) : 0;
        if (hasSiege && rallySizeInput) {
            siegeAmt = Math.round(rallySizeInput * 0.05);
            amtMain -= siegeAmt;
        }
        if (amtMain < 0) amtMain = 0;

        sendComps.push({ name: mainCounter.name, sys: mainCounter.sys, pct: pctMainCounter, amount: amtMain });
        sendComps.push({ name: secCounter.name, sys: secCounter.sys, pct: pctSecCounter, amount: amtSec });
        if (hasSiege) {
            sendComps.push({ name: "Asedio", sys: "siege", pct: 5, amount: siegeAmt });
        }

        let buffers = getBuffers([mainCounter.sys, secCounter.sys]);
        bufferHtml = `
            <div style="margin-top: 15px; padding: 10px; background: rgba(255, 71, 87, 0.1); border-left: 3px solid var(--red-alert); text-align: left; border-radius: 4px;">
                <strong style="color: var(--red-alert);">🛡️ Táctica de Cebo (Colchón):</strong><br>
                <span style="font-size: 0.95rem; color: #ccc;">Añade <strong>4 tropas de ${buffers[0].n}</strong> mínimo T3 (T1/T2 bajan la moral) a tu agrupación para que absorban el daño de los héroes enemigos.</span>
            </div>
        `;
    }

    sendComps.forEach(comp => {
        let valText = rallySizeInput && comp.amount > 0 ? (new Intl.NumberFormat('es-ES').format(comp.amount)) : "&mdash;";
        let isMain = comp.sys === mainCounter.sys;
        let tierText = isMain || (!hasSiege && comp.sys !== "siege") ? "<br><small style='color:#ccc'>(Enviar Tier más alto: T4/T5)</small>" : "";
        if (comp.sys === "siege") tierText = "";

        statsHtml += `
            <div class="stat-box" style="border-top: 3px solid var(--c-${comp.sys})">
                <span class="stat-val">${valText}</span>
                <span class="stat-pct">${comp.pct}% ${comp.name} ${tierText}</span>
            </div>
        `;
    });

    let mainEnemyPct = totalPow > 0 ? Math.round((mainEnemy.val / totalPow) * 100) : 0;
    let enemyFalangeInfo = selectedCaptainType ? `<br>Por el capitán (👑), es casi seguro que la falange enemiga será de <strong>${selectedCaptainType === 'inf' ? 'Infantería' : (selectedCaptainType === 'cav' ? 'Caballería' : 'Artillería')}</strong>.` : "";

    // Formación invertida: seleccionar las que pongan la tropa counter DETRÁS
    // FALANGES:
    // Falange Infantería: Frente:Inf, Medio:Cab, Detrás:Art
    // Falange Rango:      Frente:Art, Medio:Inf, Detrás:Cab
    // Falange Caballería: Frente:Cab, Medio:Art, Detrás:Inf
    // CUÑAS:
    // Cuña Infantería: Frente:Inf, Medio:Art, Detrás:Cab
    // Cuña Rango:      Frente:Art, Medio:Cab, Detrás:Inf
    // Cuña Caballería: Frente:Cab, Medio:Inf, Detrás:Art
    let falangeName = "", falangeNotes = "";
    let cunaName = "", cunaNotes = "";
    let formIcon = "";
    if (mainCounter.sys === "inf") {
        // Infantería detrás → Falange Caballería o Cuña Rango
        falangeName = "Caballería";
        falangeNotes = "Frente: Caballería | Medio: Artillería | Detrás: Infantería";
        cunaName = "Rango";
        cunaNotes = "Frente: Artillería | Medio: Caballería | Detrás: Infantería";
        formIcon = "Cavalry";
    } else if (mainCounter.sys === "art") {
        // Artillería detrás → Falange Infantería o Cuña Caballería
        falangeName = "Infantería";
        falangeNotes = "Frente: Infantería | Medio: Caballería | Detrás: Artillería";
        cunaName = "Caballería";
        cunaNotes = "Frente: Caballería | Medio: Infantería | Detrás: Artillería";
        formIcon = "Infantry";
    } else if (mainCounter.sys === "cav") {
        // Caballería detrás → Falange Rango o Cuña Infantería
        falangeName = "Rango";
        falangeNotes = "Frente: Artillería | Medio: Infantería | Detrás: Caballería";
        cunaName = "Infantería";
        cunaNotes = "Frente: Infantería | Medio: Artillería | Detrás: Caballería";
        formIcon = "Artillery";
    }

    document.getElementById("resultContent").innerHTML = `
        <p style="color:var(--gold); font-size: 1.5rem;">Estrategia de Tropas: <strong>${sendStr}</strong></p>
        <div style="font-size: 0.85rem; color: #aaa; margin-bottom: 15px; font-style: italic;">
            ⚠️ NOTA: Esta sugerencia está basada en análisis de counters, falanges, tropas y líderes según las fuentes oficiales. Sin embargo, la victoria final también depende fuertemente del nivel del jugador que lidera (Castillo, Héroes, Armaduras, Formaciones, Monstruitos, Joyas, etc.).
        </div>
        <div style="margin-top:10px; padding: 12px; background: rgba(46,204,113,0.08); border: 1px solid rgba(46,204,113,0.3); border-radius: 8px;">
            <p style="color:#2ecc71; font-size: 1.2rem; margin-bottom:8px;">🛡️ Formaciones recomendadas (tu ${mainCounter.name} queda protegida detrás):</p>
            <div style="display:flex; gap:15px; flex-wrap:wrap; justify-content:center;">
                <div style="flex:1; min-width:200px; padding:10px; background:rgba(0,0,0,0.3); border-radius:6px; text-align:center;">
                    <strong style="color:var(--gold); font-size:1.1rem;">Falange de ${falangeName}</strong><br>
                    <span style="font-size:0.85rem; color:#bbb;">${falangeNotes}</span>
                </div>
                <div style="flex:1; min-width:200px; padding:10px; background:rgba(0,0,0,0.3); border-radius:6px; text-align:center;">
                    <strong style="color:var(--gold); font-size:1.1rem;">Cuña de ${cunaName}</strong><br>
                    <span style="font-size:0.85rem; color:#bbb;">${cunaNotes}</span>
                </div>
            </div>
        </div>
        <p style="font-size:1rem;color:#ccc;margin-top:10px;">La fortaleza es principalmente ${mainEnemy.name} (Poder estimado: ${mainEnemyPct}%).${enemyFalangeInfo}</p>
        ${wallAlertHtml}
        ${bufferHtml}
        <div class="strategy-stats" style="margin-top:20px;">
            ${statsHtml}
        </div>
    `;

    // Sugerir héroes basados en la tropa COUNTER (lo que enviamos nosotros)
    // La tropa counter es mainCounter.sys
    let f2pPrimary = [], p2pPrimary = [];
    let f2pSecondary = [], p2pSecondary = [];

    let isSingleType = !isMixed;

    // Héroes del tipo de la tropa que enviamos (counter)
    let primaryType = mainCounter.sys === 'inf' ? 'infantry' : (mainCounter.sys === 'cav' ? 'cavalry' : 'artillery');
    f2pPrimary = [...heroesDB[primaryType].filter(h => !h.p2p)];
    p2pPrimary = heroesDB[primaryType].filter(h => h.p2p);

    if (!isSingleType && secCounter) {
        let secondaryType = secCounter.sys === 'inf' ? 'infantry' : (secCounter.sys === 'cav' ? 'cavalry' : 'artillery');
        f2pSecondary = [...heroesDB[secondaryType].filter(h => !h.p2p)];
        p2pSecondary = heroesDB[secondaryType].filter(h => h.p2p);
    }

    let suggestedF2P = isSingleType ? f2pPrimary : [...f2pPrimary.slice(0, 3), ...f2pSecondary.slice(0, 2)];
    let suggestedP2P = isSingleType ? p2pPrimary : [...p2pPrimary, ...p2pSecondary];

    // Rellenamos con héroes de Ejército si hay menos de 5 héroes F2P
    let armyFillers = [...heroesDB.army];
    while (suggestedF2P.length < 5 && armyFillers.length > 0) {
        let filler = armyFillers.shift();
        if (!suggestedF2P.find(h => h.id === filler.id)) {
            suggestedF2P.push(filler);
        }
    }
    suggestedF2P = suggestedF2P.slice(0, 5);

    // Renderizar héroes usando la subcarpeta correcta de img/hero/{folder}/{id}.webp
    let renderHeroList = (heroList) => {
        let html = "";
        heroList.forEach(hero => {
            const folder = hero.folder || "Infantry";
            const ext = (hero.id.includes(" ")) ? "png" : "webp";
            const imgSrc = `img/hero/${folder}/${hero.id}.${ext}`;
            html += `
                <div class="hero-item" style="pointer-events: none;">
                    <div class="hero-img-box ${hero.p2p ? 'p2p' : ''}">
                        <img src="${imgSrc}" alt="${hero.name}" onerror="this.style.display='none';this.parentNode.innerHTML+='<span style=\'color:#555;font-size:10px;\'>IMG</span>'">
                    </div>
                    <div class="hero-name">${hero.name}</div>
                </div>
            `;
        });
        return html;
    };

    let f2pHtml = suggestedF2P.length > 0 ? renderHeroList(suggestedF2P) : "<span style='color:#ccc'>No hay suficientes héroes.</span>";
    let p2pHtml = suggestedP2P.length > 0 ? renderHeroList(suggestedP2P) : "<span style='color:#ccc'>No hay alternativas P2P.</span>";

    document.getElementById("suggestedHeroes").innerHTML = `
        <div style="width: 100%;">
            <h4 style="color:#2ecc71; margin-bottom: 10px; text-align: center;">Héroes F2P Sugeridos (ATQ puro + Ejército relleno):</h4>
            <div class="suggested-heroes" style="margin-top:0">${f2pHtml}</div>
        </div>
        <div style="width: 100%;">
            <h4 style="color:var(--gold); margin-bottom: 10px; text-align: center;">Alternativas P2P (Solo Tropas Selectas):</h4>
            <div class="suggested-heroes" style="margin-top:0">${p2pHtml}</div>
        </div>
        <div style="width: 100%; margin-top: 25px; padding: 12px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; text-align: center;">
            💡 <strong style="color:var(--gold);">Nota sobre Héroes:</strong> Prioriza siempre héroes que otorguen bonos de <strong>ATAQUE</strong> a tu tropa principal. Si no tienes los sugeridos, reemplázalos por héroes universales que den "Ataque de Ejército" (ej. Observador, Caballera de la Rosa).
        </div>
    `;

    // Renderizar Familiars sugeridos según tropa principal
    const familiarTypeMap = { inf: 'infantry', cav: 'cavalry', art: 'artillery', siege: 'siege' };
    const familiarType = familiarTypeMap[mainCounter.sys] || 'infantry';
    const familiarFolder = familiarType.charAt(0).toUpperCase() + familiarType.slice(1);
    const famList = (familiarsDB[familiarType] || []).slice(0, 5);

    let famHtml = famList.map((fam, idx) => {
        const imgSrc = `img/Familiars/${familiarFolder}/${fam.id}.png`;
        return `
            <div class="hero-item" style="pointer-events:none;">
                <div class="hero-img-box" style="border: 2px solid var(--gold);">
                    <img src="${imgSrc}" alt="${fam.name}" onerror="this.style.display='none';this.parentNode.innerHTML+='<span style=\'color:#555;font-size:10px;\'>IMG</span>'">
                </div>
                <div class="hero-name">${idx + 1}</div>
            </div>
        `;
    }).join('');

    document.getElementById("suggestedFamiliars").innerHTML = `
        <div style="width: 100%;">
            <div class="suggested-heroes" style="margin-top:0">${famHtml}</div>
            <p style="font-size:0.85rem; color:#aaa; text-align:center; margin-top:10px;">💡 Activa los monstruitos sugeridos que potencien el <strong>ATQ de ${mainCounter.name}</strong> antes de la agrupación.</p>
        </div>
    `;

    const resCon = document.getElementById("resultContainer");
    resCon.style.display = "block";
    resCon.scrollIntoView({ behavior: "smooth" });
}
