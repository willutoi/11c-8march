// =========================================
// DATA CONFIGURATION
// =========================================
const dimensions = [
    {
        id: 'akberen',
        name: 'Akberen',
        title: 'Пространство Устойчивости',
        styleClass: 'style-akberen',
        quote: 'Сила не в том, чтобы не падать, а в том, чтобы крепко стоять.',
        desc: 'Пространство абсолютного равновесия. Хаос разбивается о монолитную волю.',
        secret: 'Опора для всех, кто рядом.',
        glyphShape: '▮',
        particleColor: '#00ff41'
    },
    {
        id: 'dalima',
        name: 'D. Alima',
        title: 'Пространство Импульса',
        styleClass: 'style-dalima',
        quote: 'Одно мгновение способно изменить реальность.',
        desc: 'Мир чистой энергии. Идеи превращаются в действия быстрее света.',
        secret: 'Зажигает звезды своим драйвом.',
        glyphShape: '▲',
        particleColor: '#ff4500'
    },
    {
        id: 'talima',
        name: 'T. Alima',
        title: 'Пространство Креативности',
        styleClass: 'style-talima',
        quote: 'Там, где нет границ, рождается искусство.',
        desc: 'Здесь облака принимают любые формы, а каждый момент — искусство.',
        secret: 'Превращает обычное в шедевр.',
        glyphShape: '☁',
        particleColor: '#8ec5fc'
    },
    {
        id: 'aigerim',
        name: 'Aigerim',
        title: 'Пространство Стабильности',
        styleClass: 'style-aigerim',
        quote: 'Улыбка — это тоже порядок.',
        desc: 'Архитектурный шедевр позитива. Стабильно классное настроение.',
        secret: 'Всегда найдет повод для радости.',
        glyphShape: '■',
        particleColor: '#2c3e50'
    },
    {
        id: 'nazerke',
        name: 'Nazerke',
        title: 'Пространство Контроля',
        styleClass: 'style-nazerke',
        quote: 'Точность — вежливость королей.',
        desc: 'Центр управления полетами. Ни одна деталь не ускользнет.',
        secret: 'Видит структуру во всем.',
        glyphShape: '◈',
        particleColor: '#00ff00'
    },
    {
        id: 'mariyam',
        name: 'Mariyam',
        title: 'Пространство Движения',
        styleClass: 'style-mariyam',
        quote: 'Игра продолжается, пока мяч в игре.',
        desc: 'Вибрация, ритм, спорт. Энергия бьет ключом.',
        secret: 'Королева трёхочковых бросков.',
        glyphShape: '●',
        particleColor: '#e0aaff'
    },
    {
        id: 'raushan',
        name: 'Raushan',
        title: 'Пространство Разума',
        styleClass: 'style-raushan',
        quote: 'Истина сияет ярче солнца.',
        desc: 'Кристально чистое пространство интеллекта.',
        secret: 'Знает ответы на незаданные вопросы.',
        glyphShape: '◆',
        particleColor: '#ffffff'
    },
    {
        id: 'enlik',
        name: 'Enlik',
        title: 'Пространство Надёжности',
        styleClass: 'style-enlik',
        quote: 'Слово, твердое как камень.',
        desc: 'Золотой стандарт доверия. Ценности вечны, как благородный металл.',
        secret: 'Сокровище, которое мы бережем.',
        glyphShape: '♛',
        particleColor: '#d4af37'
    },
    {
        id: 'ayaulym',
        name: 'Ayaulym',
        title: 'Пространство Интеллекта',
        styleClass: 'style-ayaulym',
        quote: 'Знание — единственная истинная суперсила.',
        desc: 'Зона повышенной ментальной активности. GOD MODE включен.',
        secret: 'Решает проблемы взглядом.',
        glyphShape: '☀',
        particleColor: '#ff3333'
    },
    {
        id: 'inabat',
        name: 'Inabat',
        title: 'Пространство Настроения',
        styleClass: 'style-inabat',
        quote: 'Цвета души меняют мир вокруг.',
        desc: 'Холст, на котором рисуются эмоции. Мир в ярких тонах.',
        secret: 'Делает наш мир цветным.',
        glyphShape: '🖌',
        particleColor: '#ff9a9e'
    },
    {
        id: 'marzhan',
        name: 'Marzhan',
        title: 'Пространство Авроры',
        styleClass: 'style-marzhan',
        quote: 'Твой свет озаряет путь другим.',
        desc: 'Северное сияние в темном небе. Магия и спокойствие.',
        secret: 'Cердце всей системы.',
        glyphShape: '〰',
        particleColor: '#94d2bd'
    }
];

// STATE
let visitedDimensions = new Set();
let isSoundOn = false;

// =========================================
// UI ELEMENTS
// =========================================
const introPage = document.getElementById('intro-page');
const minigamePage = document.getElementById('minigame-page');
const hubContainer = document.getElementById('hub');
const dimView = document.getElementById('dimension-view');
const outroPage = document.getElementById('outro-page');

const startBtn = document.getElementById('start-btn');
const toOutroBtn = document.getElementById('to-outro-btn');
const restartBtn = document.getElementById('restart-btn');
const soundBtn = document.getElementById('sound-btn');

const dimName = document.getElementById('dim-name');
const dimTitle = document.getElementById('dim-title');
const dimQuote = document.getElementById('dim-quote');
const dimDesc = document.getElementById('dim-desc');
const dimSecret = document.getElementById('dim-secret');
const dimBackBtn = document.getElementById('back-btn');
const dimImg = document.getElementById('dim-img');
const dimImgWrapper = document.getElementById('dim-img-wrapper');

// =========================================
// PARTICLES & VISUAL TOYS
// =========================================
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId;
let currentParticleColor = '#ffffff';

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = currentParticleColor;
        this.alpha = Math.random() * 0.5 + 0.1;
    }

    update(mouseX, mouseY) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse Repel
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (100 - distance) / 100;
            this.speedX += forceDirectionX * force * 0.5;
            this.speedY += forceDirectionY * force * 0.5;
        }

        // Friction
        this.speedX *= 0.98;
        this.speedY *= 0.98;

        // Boundaries
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
}

function initParticles(color) {
    // OPTIMIZED PARTICLES for Mobile
    for (let i = 0; i < 20; i++) { // Reduced from 50
        particles.push(new Particle());
    }
}

let mouse = { x: null, y: null };
window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('touchstart', (e) => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
}, { passive: true }); // Passive for scroll perf

function animateParticles() {
    if (!dimView.classList.contains('active')) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update(mouse.x, mouse.y);
        p.draw();
    });
    animationId = requestAnimationFrame(animateParticles);
}

// PARALLAX
function handleParallax(e) {
    const layer = document.getElementById('parallax-bg');
    if (!layer) return;

    let x = 0, y = 0;

    // Check if it's device orientation or mouse
    if (e.type === 'deviceorientation') {
        x = e.gamma * 2; // Tilt Left/Right
        y = e.beta * 2;  // Tilt Front/Back
    } else if (e.type === 'mousemove') {
        x = (e.clientX - window.innerWidth / 2) / 20;
        y = (e.clientY - window.innerHeight / 2) / 20;
    }

    layer.style.transform = `translate(${x}px, ${y}px)`;

    // Also shift visual layers slightly
    document.querySelectorAll('.visual-layer').forEach((l, i) => {
        const factor = (i + 1) * 0.5;
        l.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
}

// GLITCH TRIGGER
function triggerGlitch() {
    document.body.classList.add('glitch-active');
    dimImgWrapper.style.transform = `scale(1.1) skew(${Math.random() * 10 - 5}deg)`;
    setTimeout(() => {
        document.body.classList.remove('glitch-active');
        dimImgWrapper.style.transform = 'none';
    }, 200);
}

// =========================================
// HUB AND NAVIGATION
// =========================================
function initHub() {
    // Core Particles
    const coreContainer = document.getElementById('core-particles');
    if (coreContainer) {
        coreContainer.innerHTML = '';
        for (let i = 0; i < 50; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            // Random sphere points
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 90;
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);
            p.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            coreContainer.appendChild(p);
        }
    }

    // Core Click -> Marzhan
    const coreWrapper = document.querySelector('.core-wrapper');
    const marzhanIndex = dimensions.findIndex(d => d.id === 'marzhan');

    if (coreWrapper) {
        const newCore = coreWrapper.cloneNode(true);
        coreWrapper.parentNode.replaceChild(newCore, coreWrapper);
        newCore.addEventListener('click', () => {
            if (marzhanIndex !== -1) enterDimension(marzhanIndex);
        });
    }

    // Orbit Glyphs
    const orbitContainer = document.getElementById('orbit-system');
    if (orbitContainer) {
        orbitContainer.innerHTML = '';
        const orbitDims = dimensions.filter(d => d.id !== 'marzhan');
        const angleStep = 360 / orbitDims.length;

        orbitDims.forEach((dim, i) => {
            const originalIndex = dimensions.findIndex(d => d.id === dim.id);
            const wrapper = document.createElement('div');
            wrapper.className = 'glyph-wrapper';

            const angle = i * angleStep;
            const radius = 250;
            wrapper.style.transform = `rotateZ(${angle}deg) translate(${radius}px) rotateZ(-${angle}deg)`;

            const glyph = document.createElement('div');
            glyph.className = 'glyph';
            glyph.innerHTML = dim.glyphShape;

            const nameTag = document.createElement('div');
            nameTag.className = 'glyph-name-hover';
            nameTag.innerText = dim.title;

            glyph.appendChild(nameTag);
            wrapper.appendChild(glyph);
            orbitContainer.appendChild(wrapper);

            if (visitedDimensions.has(dim.id)) wrapper.classList.add('visited');

            wrapper.addEventListener('click', () => {
                enterDimension(originalIndex);
            });
        });
    }
}

function enterDimension(index) {
    const data = dimensions[index];
    visitedDimensions.add(data.id);
    updateHubState();

    // Visual Transition
    document.body.classList.add('warp-active');
    setTimeout(() => hubContainer.classList.add('hidden'), 200);

    setTimeout(() => {
        dimView.className = 'dimension-view active ' + data.styleClass;
        dimImg.classList.remove('loaded');
        dimImg.style.display = 'none';

        // Update Text
        dimName.innerText = data.name;
        dimTitle.innerText = data.title;
        dimQuote.innerText = `"${data.quote}"`;
        dimDesc.innerText = data.desc;
        dimSecret.innerText = data.secret;

        // Load Image
        dimImg.src = `img/${data.id}.jpg`;
        dimImg.onload = () => {
            dimImg.style.display = 'block';
            setTimeout(() => dimImg.classList.add('loaded'), 10);
        };
        dimImg.onerror = () => { dimImg.style.display = 'none'; };

        // Start Visual Toys
        resizeCanvas();
        initParticles(data.particleColor || '#ffffff');
        animateParticles();

        // Enable Parallax
        document.body.classList.remove('warp-active');
    }, 800);
}

function updateHubState() {
    const orbitContainer = document.getElementById('orbit-system');
    if (!orbitContainer) return;
    const wrappers = orbitContainer.children;
    const orbitDims = dimensions.filter(d => d.id !== 'marzhan');

    for (let i = 0; i < wrappers.length; i++) {
        if (visitedDimensions.has(orbitDims[i].id)) {
            wrappers[i].classList.add('visited');
        }
    }
}

function exitDimension() {
    dimView.classList.remove('active');
    // Stop expensive animations
    cancelAnimationFrame(animationId);

    setTimeout(() => {
        dimView.className = 'dimension-view';
        dimView.classList.add('hidden');
        hubContainer.classList.remove('hidden');
    }, 1000);
}

// =========================================
// MINI-GAME: VOID RUNNER 2.0
// =========================================
let gameActive = false;
let gameTime = 15.0;
let playerLane = 1; // 0: Left, 1: Center, 2: Right
let obstacles = [];
let gameLoopId, spawnTimer, countdownTimer;
const LANE_POSITIONS = ['16%', '50%', '84%']; // CSS Left %

function startRunnerGame() {
    introPage.classList.add('hidden');
    introPage.classList.remove('intro-active');
    minigamePage.classList.remove('hidden');

    // Reset State
    gameActive = true;
    gameTime = 15.0;
    playerLane = 1;
    obstacles = [];
    document.getElementById('obstacles-container').innerHTML = '';
    updatePlayerPos();

    // Start Loops
    gameLoopId = requestAnimationFrame(gameLoop);
    spawnTimer = setInterval(spawnObstacle, 800); // Faster spawn for excitement
    countdownTimer = setInterval(() => {
        gameTime -= 0.1;
        document.getElementById('game-timer').innerText = gameTime.toFixed(2);
        if (gameTime <= 0) winGame();
    }, 100);

    // Audio
    const audio = document.getElementById('bg-music');
    if (audio && isSoundOn) {
        audio.play().catch(e => console.log("Audio play failed:", e));
    }
}

// Controls
function handleLeftInput() {
    if (!gameActive) return;
    if (playerLane > 0) playerLane--;
    updatePlayerPos();
}

function handleRightInput() {
    if (!gameActive) return;
    if (playerLane < 2) playerLane++;
    updatePlayerPos();
}

function updatePlayerPos() {
    const p = document.getElementById('player');
    if (p) p.style.left = LANE_POSITIONS[playerLane];
}

function spawnObstacle() {
    if (!gameActive) return;
    const lane = Math.floor(Math.random() * 3);
    const obs = document.createElement('div');
    obs.className = 'obstacle';
    obs.style.left = LANE_POSITIONS[lane];
    obs.style.top = '-100px'; // Start higher
    document.getElementById('obstacles-container').appendChild(obs);

    // Speed increases as time decreases
    const speed = 5 + (15 - gameTime) * 0.5;
    obstacles.push({ el: obs, lane: lane, top: -100, speed: speed });
}

function gameLoop() {
    if (!gameActive) return;

    const player = document.getElementById('player');
    const playerRect = player ? player.getBoundingClientRect() : null;

    for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.top += obs.speed;
        obs.el.style.top = obs.top + 'px';

        // Collision Logic (Bounding Box)
        if (playerRect) {
            const obsRect = obs.el.getBoundingClientRect();
            // Shrink hitboxes slightly for fairness
            const pRect = {
                left: playerRect.left + 10, right: playerRect.right - 10,
                top: playerRect.top + 10, bottom: playerRect.bottom - 10
            };
            const oRect = {
                left: obsRect.left + 5, right: obsRect.right - 5,
                top: obsRect.top + 5, bottom: obsRect.bottom - 5
            };

            const overlap = !(pRect.right < oRect.left ||
                pRect.left > oRect.right ||
                pRect.bottom < oRect.top ||
                pRect.top > oRect.bottom);

            if (overlap) {
                // Hit Penalty
                gameTime = Math.min(gameTime + 3.0, 15.0); // +3s penalty
                document.body.style.backgroundColor = '#500000';
                setTimeout(() => document.body.style.backgroundColor = '', 100);

                obs.el.remove();
                obstacles.splice(i, 1);
                continue;
            }
        }

        // Cleanup
        if (obs.top > window.innerHeight) {
            obs.el.remove();
            obstacles.splice(i, 1);
        }
    }
    gameLoopId = requestAnimationFrame(gameLoop);
}

function winGame() {
    gameActive = false;
    clearInterval(spawnTimer);
    clearInterval(countdownTimer);
    cancelAnimationFrame(gameLoopId);

    const title = document.querySelector('.runner-title');
    title.innerText = "SYSTEM SECURED";
    title.style.color = '#00ffcc';
    title.style.textShadow = '0 0 20px #00ffcc';

    setTimeout(() => {
        minigamePage.classList.add('hidden');
        hubContainer.classList.remove('hidden');

        // Reset game UI for next time
        setTimeout(() => {
            title.innerText = "VOID RUNNER";
            title.style.color = '#ff00de';
            title.style.textShadow = '0 0 10px #ff00de';
        }, 1000);
    }, 1500);
}

// Global Listener Setup
document.addEventListener('DOMContentLoaded', () => {
    initHub();
    resizeCanvas();

    // Re-bind Start Button
    startBtn.addEventListener('click', startRunnerGame);

    toOutroBtn.addEventListener('click', showOutroFromHub);
    dimBackBtn.addEventListener('click', exitDimension);
    restartBtn.addEventListener('click', () => location.reload());
    dimImgWrapper.addEventListener('click', triggerGlitch);

    // Game Controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') handleLeftInput();
        if (e.key === 'ArrowRight') handleRightInput();
    });

    // Touch Zones
    const leftZone = document.getElementById('zone-left');
    const rightZone = document.getElementById('zone-right');

    if (leftZone) leftZone.addEventListener('touchstart', (e) => { e.preventDefault(); handleLeftInput(); });
    if (rightZone) rightZone.addEventListener('touchstart', (e) => { e.preventDefault(); handleRightInput(); });

    // Easter Egg
    const hubTitle = document.querySelector('.hub-title');
    let clicks = 0;
    if (hubTitle) {
        hubTitle.addEventListener('click', () => {
            clicks++;
            if (clicks === 5) alert('SYSTEM HACKED: \n(¬_¬) (O_O) (>_<)\nStay curious!');
        });
    }

    // Parallax
    window.addEventListener('deviceorientation', handleParallax);
    window.addEventListener('mousemove', handleParallax);
});

window.addEventListener('resize', resizeCanvas);
