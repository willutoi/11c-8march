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
        desc: 'Это пространство абсолютного равновесия. Здесь каждый шаг выверен, а каждое решение взвешено. Хаос внешнего мира разбивается о монолитную волю.',
        stats: ['Воля: 100%', 'Спокойствие: ∞', 'Стержень: Титан'],
        secret: 'Опора для всех, кто рядом.',
        glyphShape: '▮'
    },
    {
        id: 'dalima',
        name: 'D. Alima',
        title: 'Пространство Импульса',
        styleClass: 'style-dalima',
        quote: 'Одно мгновение способно изменить реальность.',
        desc: 'Мир чистой кинестической энергии. Здесь идеи превращаются в действия быстрее скорости света. Нет сомнений, есть только вектор движения.',
        stats: ['Скорость: Мах 10', 'Реакция: Мгновенно', 'Огонь: Яркий'],
        secret: 'Зажигает звезды своим драйвом.',
        glyphShape: '▲'
    },
    {
        id: 'talima',
        name: 'T. Alima',
        title: 'Пространство Креативности',
        styleClass: 'style-talima',
        quote: 'Там, где нет границ, рождается искусство.',
        desc: 'Здесь облака принимают любые формы. Её Instagram — это отдельный вид искусства, где каждый пост как картина. Пространство бесконечного вдохновения.',
        stats: ['Фантазия: Без границ', 'Insta: Эстетика', 'Вдохновение: 24/7'],
        secret: 'Превращает обычные фото в шедевры.',
        glyphShape: '☁'
    },
    {
        id: 'aigerim',
        name: 'Aigerim',
        title: 'Пространство Стабильности',
        styleClass: 'style-aigerim',
        quote: 'Улыбка — это тоже порядок.',
        desc: 'Архитектурный шедевр позитива. В этом пространстве всегда солнечно и весело. Стабильно классное настроение, на которое можно положиться в любой шторм.',
        stats: ['Настроение: 100%', 'Смех: Заразительный', 'Надежность: Титан'],
        secret: 'Всегда найдет повод для радости.',
        glyphShape: '■'
    },
    {
        id: 'nazerke',
        name: 'Nazerke',
        title: 'Пространство Контроля',
        styleClass: 'style-nazerke',
        quote: 'Точность — вежливость королей.',
        desc: 'Центр управления полетами и ракетками. Здесь отслеживаются все переменные, а реакция быстрее, чем в настольном теннисе. Ни один мяч не упадет мимо.',
        stats: ['Ping-Pong: PRO', 'Контроль: Полный', 'Реакция: Молния'],
        secret: 'Обыграет тебя левой рукой.',
        glyphShape: '◈'
    },
    {
        id: 'mariyam',
        name: 'Mariyam',
        title: 'Пространство Движения',
        styleClass: 'style-mariyam',
        quote: 'Игра продолжается, пока мяч в игре.',
        desc: 'Вибрация, ритм, спорт. Это пространство живет в темпе баскетбольного матча. Энергия бьет ключом, и каждый бросок — точно в цель.',
        stats: ['Баскетбол: MVP', 'Энергия: Высокая', 'Вайб: Спортивный'],
        secret: 'Королева трёхочковых бросков.',
        glyphShape: '●'
    },
    {
        id: 'raushan',
        name: 'Raushan',
        title: 'Пространство Разума',
        styleClass: 'style-raushan',
        quote: 'Истина сияет ярче солнца.',
        desc: 'Кристально чистое пространство интеллекта. Здесь свет знания преломляется через призму мудрости, освещая самые темные уголки.',
        stats: ['IQ: Зашкаливает', 'Мудрость: Древняя', 'Свет: Ослепительный'],
        secret: 'Знает ответы на вопросы, которые мы еще не задали.',
        glyphShape: '◆'
    },
    {
        id: 'enlik',
        name: 'Enlik',
        title: 'Пространство Надёжности',
        styleClass: 'style-enlik',
        quote: 'Слово, твердое как камень.',
        desc: 'Золотой стандарт доверия. Это пространство, где обещания всегда выполняются, а ценности вечны, как благородный металл.',
        stats: ['Верность: Золотая', 'Ценность: Бесценно', 'Стиль: Luxury'],
        secret: 'Сокровище, которое мы бережем.',
        glyphShape: '♛'
    },
    {
        id: 'ayaulym',
        name: 'Ayaulym',
        title: 'Пространство SAT Monsters',
        styleClass: 'style-ayaulym',
        quote: 'Знание — единственная истинная суперсила.',
        desc: 'Зона повышенной академической опасности. Здесь задачи решаются взглядом, а дедлайны боятся приближаться. Уровень интеллекта: GOD MODE.',
        stats: ['Math: 800', 'English: 800', 'Сон: 0%'],
        secret: 'Осторожно: может случайно решить все ваши проблемы.',
        glyphShape: '☀'
    },
    {
        id: 'inabat',
        name: 'Inabat',
        title: 'Пространство Настроения',
        styleClass: 'style-inabat',
        quote: 'Цвета души меняют мир вокруг.',
        desc: 'Холст, на котором каждый день рисуется новая картина. Здесь эмоции обретают цвет, а каждое слово становится мазком кисти.',
        stats: ['Палитра: Яркая', 'Эмпатия: Тонкая', 'Искусство: Живое'],
        secret: 'Делает наш мир цветным.',
        glyphShape: '🖌'
    },
    {
        id: 'marzhan',
        name: 'Marzhan',
        title: 'Пространство Авроры',
        styleClass: 'style-marzhan',
        quote: 'Твой свет озаряет путь другим.',
        desc: 'Северное сияние в темном небе. Это пространство притягивает своей таинственностью и спокойствием. Магия, которую чувствуешь кожей.',
        stats: ['Атмосфера: Магическая', 'Уют: Космический', 'Свет: Внутренний'],
        secret: 'Cердце нашего класса.',
        glyphShape: '〰'
    }
];

// STATE
let visitedDimensions = new Set();
let isSoundOn = false;

// =========================================
// APP STATE & NAVIGATION
// =========================================
const introPage = document.getElementById('intro-page');
const minigamePage = document.getElementById('minigame-page');
const hubContainer = document.getElementById('hub');
const dimView = document.getElementById('dimension-view');
const outroPage = document.getElementById('outro-page');

const startBtn = document.getElementById('start-btn');
const toOutroBtn = document.getElementById('to-outro-btn');
const restartBtn = document.getElementById('restart-btn');

const dimName = document.getElementById('dim-name');
const dimTitle = document.getElementById('dim-title');
const dimQuote = document.getElementById('dim-quote');
const dimDesc = document.getElementById('dim-desc');
const dimStats = document.getElementById('dim-stats');
const dimSecret = document.getElementById('dim-secret');
const dimBackBtn = document.getElementById('back-btn');
const dimImg = document.getElementById('dim-img');


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
    currentParticleColor = color;
    particles = [];
    // OPTIMIZED PARTICLES for Mobile
    for (let i = 0; i < 20; i++) {
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
}, { passive: true });

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
    spawnTimer = setInterval(spawnObstacle, 800);
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
    obs.style.top = '-100px';
    document.getElementById('obstacles-container').appendChild(obs);

    // Speed logic
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
            // Shrink hitboxes
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
                gameTime = Math.min(gameTime + 3.0, 15.0);
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
        // Reset title
        setTimeout(() => {
            title.innerText = "VOID RUNNER";
            title.style.color = '#ff00de';
            title.style.textShadow = '0 0 10px #ff00de';
        }, 1000);
    }, 1500);
}

function showOutroFromHub() {
    hubContainer.classList.add('fade-out');
    setTimeout(() => {
        hubContainer.classList.add('hidden');
        outroPage.classList.remove('hidden');
    }, 1000);
}

// =========================================
// CORE & PARTICLES
// =========================================
function initHub() {
    const coreContainer = document.getElementById('core-particles');
    const particleCount = 50;

    if (coreContainer) {
        coreContainer.innerHTML = '';
        for (let i = 0; i < particleCount; i++) {
            const p = document.createElement('div');
            p.className = 'particle';

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

    // MAKE CORE CLICKABLE -> Goes to Marzhan
    const marzhanIndex = dimensions.findIndex(d => d.id === 'marzhan');
    const coreWrapper = document.querySelector('.core-wrapper');

    if (coreWrapper) {
        // Remove old listener by cloning
        const newCore = coreWrapper.cloneNode(true);
        coreWrapper.parentNode.replaceChild(newCore, coreWrapper);

        newCore.addEventListener('click', () => {
            if (marzhanIndex !== -1) enterDimension(marzhanIndex);
        });
    }

    // Generate Orbit Glyphs
    const orbitContainer = document.getElementById('orbit-system');
    if (orbitContainer) {
        orbitContainer.innerHTML = '';

        const orbitDimensions = dimensions.filter(d => d.id !== 'marzhan');
        const angleStep = 360 / orbitDimensions.length;

        // RESPONSIVE RADIUS
        const minDim = Math.min(window.innerWidth, window.innerHeight);
        // On mobile (<600px), use 40% of screen width, max 160px
        // On desktop, use standard 250px
        let radius = 250;
        if (minDim < 600) {
            radius = minDim * 0.4;
        }

        orbitDimensions.forEach((dim, i) => {
            const originalIndex = dimensions.findIndex(d => d.id === dim.id);

            const wrapper = document.createElement('div');
            wrapper.className = 'glyph-wrapper';

            const angle = i * angleStep;

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

            // Check visited state on init
            if (visitedDimensions.has(dim.id)) {
                wrapper.classList.add('visited');
            }

            wrapper.addEventListener('click', () => {
                enterDimension(originalIndex);
            });
        });
    }
}

function updateHubState() {
    // Helper to update classes without full re-render if deemed expensive, 
    // but re-init is safer for consistency or simple class toggle.
    // For now, let's just toggle classes on existing DOM if possible, 
    // or rely on the fact that initHub runs once? 
    // Wait, initHub runs only on DOMContentLoaded. 
    // We need to update existing DOM nodes.

    const orbitContainer = document.getElementById('orbit-system');
    if (!orbitContainer) return;

    const wrappers = orbitContainer.children;
    // Iterate and check against IDs. Since we build them in order filtering 'marzhan' out:
    const orbitDims = dimensions.filter(d => d.id !== 'marzhan');

    for (let i = 0; i < wrappers.length; i++) {
        const dimId = orbitDims[i].id;
        if (visitedDimensions.has(dimId)) {
            wrappers[i].classList.add('visited');
        }
    }
}

function enterDimension(index) {
    const data = dimensions[index];

    // Mark as visited
    visitedDimensions.add(data.id);
    updateHubState(); // Refresh Hub UI to show visited status

    document.body.classList.add('warp-active');

    setTimeout(() => {
        hubContainer.classList.add('fade-out');
    }, 200);

    setTimeout(() => {
        dimView.className = 'dimension-view';
        dimImg.classList.remove('loaded');
        dimImg.style.display = 'none';

        dimView.classList.add('active');
        dimView.classList.add(data.styleClass);

        dimName.innerText = data.name;
        dimTitle.innerText = data.title;
        dimQuote.innerText = `"${data.quote}"`;

        if (dimDesc) dimDesc.innerText = data.desc;
        if (dimSecret) dimSecret.innerText = data.secret;

        if (dimStats) {
            dimStats.innerHTML = '';
            if (data.stats) {
                data.stats.forEach((stat, i) => {
                    const span = document.createElement('span');
                    span.className = 'stat-item';
                    span.style.animationDelay = `${0.5 + (i * 0.1)}s`;
                    span.innerText = stat;
                    dimStats.appendChild(span);
                });
            }
        }

        const imagePath = `img/${data.id}.jpg`;
        dimImg.src = imagePath;

        dimImg.onload = () => {
            dimImg.style.display = 'block';
            setTimeout(() => dimImg.classList.add('loaded'), 10);
        };

        dimImg.onerror = () => {
            console.log(`No image found for ${data.id}, keeping placeholder.`);
            dimImg.style.display = 'none';
        };

        setTimeout(() => {
            document.body.classList.remove('warp-active');
        }, 500);

    }, 800);
}

function exitDimension() {
    dimView.classList.remove('active');

    // Wait for full transition (1s) before hiding/resetting
    setTimeout(() => {
        dimView.className = 'dimension-view'; // Hard reset removes all style classes
        dimView.classList.add('hidden');
        hubContainer.classList.remove('fade-out');

        // Clear heavy elements to free memory
        dimStats.innerHTML = '';
    }, 1000); // Matches CSS transition: opacity 1s
}

// =========================================
// LISTENERS & START
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    initHub();

    // Changed flow: Start -> Runner Game -> Hub
    startBtn.addEventListener('click', startRunnerGame);

    toOutroBtn.addEventListener('click', showOutroFromHub);
    dimBackBtn.addEventListener('click', exitDimension);
    restartBtn.addEventListener('click', () => location.reload());

    // GAME CONTROLS (Keyboard)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') handleLeftInput();
        if (e.key === 'ArrowRight') handleRightInput();
    });

    // GAME CONTROLS (Touch Zones)
    const leftZone = document.getElementById('zone-left');
    const rightZone = document.getElementById('zone-right');

    // Prevent default to stop scrolling/zooming while playing
    if (leftZone) leftZone.addEventListener('touchstart', (e) => { e.preventDefault(); handleLeftInput(); }, { passive: false });
    if (rightZone) rightZone.addEventListener('touchstart', (e) => { e.preventDefault(); handleRightInput(); }, { passive: false });

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

    // SYSTEM SOUND LOGIC
    const soundBtn = document.getElementById('sound-btn');
    const bgMusic = document.getElementById('bg-music');

    if (soundBtn && bgMusic) {
        soundBtn.addEventListener('click', () => {
            // Toggle global state
            isSoundOn = !isSoundOn;

            // Update Icon
            soundBtn.innerText = isSoundOn ? "🔊" : "🔇";
            soundBtn.style.color = isSoundOn ? "#00ffcc" : "white";
            soundBtn.style.borderColor = isSoundOn ? "#00ffcc" : "rgba(255,255,255,0.3)";

            // Play/Pause
            if (isSoundOn) {
                bgMusic.volume = 0.5;
                bgMusic.play().catch(e => console.log("Audio blocked:", e));
            } else {
                bgMusic.pause();
            }
        });
    }
});
