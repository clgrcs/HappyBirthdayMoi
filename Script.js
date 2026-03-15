const colors = [
    '#9B5A70', 
    '#E9B2C2', 
    '#F4D0DB', 
    '#E08EAB', 
    '#FF80AB', 
    '#C2185B'  
];

function createDroplet() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece'; 
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-20px';
    
    const size = Math.random() * 8 + 6 + 'px';
    confetti.style.width = size;
    confetti.style.height = size;
    
    confetti.style.backgroundColor = color;
    confetti.style.position = 'absolute';
    confetti.style.zIndex = '1';
    confetti.style.borderRadius = '2px';
    confetti.style.opacity = '0.8';
    
    confetti.style.animation = `fall ${4 + Math.random() * 4}s linear forwards`;
    
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 8000);
}

setInterval(createDroplet, 300); 

function createBurst(e) {
    const burstCount = 25;
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < burstCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 10 + 5 + 'px';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 80 + Math.random() * 150;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        confetti.style.backgroundColor = color;
        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.position = 'absolute';
        confetti.style.left = centerX + 'px';
        confetti.style.top = centerY + 'px';
        confetti.style.zIndex = '20';
        confetti.style.borderRadius = '50%'; 
        confetti.style.setProperty('--x', `${x}px`);
        confetti.style.setProperty('--y', `${y}px`);
        confetti.style.animation = `burst 0.8s cubic-bezier(0.1, 0.5, 0.3, 1) forwards`;

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 850);
    }
}