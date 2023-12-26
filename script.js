let rotationAnimation;
let rotationSpeed = 5; // Default rotation speed

function startRotation() {
  document.querySelector('.outer-circle').style.animation = `rotateAnimation ${rotationSpeed}s linear infinite`;
}

function stopRotation() {
  document.querySelector('.outer-circle').style.animation = 'none';
}

function reverseRotation() {
  document.querySelector('.outer-circle').style.animation = `rotateAnimation ${rotationSpeed}s linear infinite reverse`;
}

function showSurprise() {
  createFireworks();
}

function createFireworks() {
  const canvas = document.getElementById('fireworksCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 10 + 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * -15 - 1;
    this.color = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  }

  Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  };

  Particle.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  };

  function createParticles() {
    const particle = new Particle();
    particles.push(particle);
  }

  function animateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
      if (particles[i].size <= 0.2) {
        particles.splice(i, 1);
      } else {
        particles[i].update();
        particles[i].draw();
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createParticles();
    animateParticles();
    requestAnimationFrame(animate);
  }

  animate();

  // Stop fireworks after 2 seconds
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 2000);
}

function increaseSpeed() {
  rotationSpeed += 1;
  startRotation();
}

function decreaseSpeed() {
  rotationSpeed = Math.max(1, rotationSpeed - 1);
  startRotation();
}
