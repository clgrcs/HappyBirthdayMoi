let currentPage = 1;
const totalPages = 2;


function toggleMessage(element, id) {
    const msg = document.getElementById(id);
    
    const isOpen = msg.style.display === 'block';
    
    document.querySelectorAll('.message').forEach(m => {
        m.style.display = 'none';
    });

    if (!isOpen) {
        msg.style.display = 'block';
    }
}


function changePage(direction) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    currentPage += direction;

    const newPage = document.getElementById(`page${currentPage}`);
    if (newPage) {
        newPage.classList.add('active');
    }

    const indicator = document.getElementById('pageIndicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (indicator) indicator.innerText = `Page ${currentPage} of ${totalPages}`;
    if (prevBtn) prevBtn.disabled = (currentPage === 1);
    if (nextBtn) nextBtn.disabled = (currentPage === totalPages);

    document.querySelectorAll('.message').forEach(m => {
        m.style.display = 'none';
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createHeart() {
    const heart = document.createElement("div");
    const icons = ["❤", "✨","❤", "🌸", "🎂", "❤"];
    
    heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-5vh";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.style.color = "#FF85A2";
    heart.style.zIndex = "1000"; 
    heart.style.pointerEvents = "none"; // Ensures hearts don't block clicks
    heart.style.userSelect = "none";
    heart.style.animation = `heartFall ${Math.random() * 3 + 4}s linear forwards`;
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 800);