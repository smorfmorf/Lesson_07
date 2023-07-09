// Создаем холст
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Устанавливаем размеры холста
canvas.width = 800;
canvas.height = 600;

// Создаем мрамор
const marble = {
    x: canvas.width / 2, // начальная позиция по горизонтали
    y: canvas.height / 2, // начальная позиция по вертикали
    radius: 10, // радиус мрамора
    speed: 3, // скорость мрамора
    dx: 0, // скорость по горизонтали
    dy: 0, // скорость по вертикали
};

// Обновляем состояние игры
function update() {
    // Очищаем холст
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем мрамор
    ctx.beginPath();
    ctx.arc(marble.x, marble.y, marble.radius, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // Обновляем позицию мрамора
    marble.x += marble.dx;
    marble.y += marble.dy;

    // Ограничиваем движение мрамора в пределах холста
    if (
        marble.x + marble.radius > canvas.width ||
        marble.x - marble.radius < 0
    ) {
        marble.dx *= -1;
    }

    if (
        marble.y + marble.radius > canvas.height ||
        marble.y - marble.radius < 0
    ) {
        marble.dy *= -1;
    }

    // Запускаем следующий цикл анимации
    requestAnimationFrame(update);
}

// Обрабатываем нажатия клавиш
function keyDownHandler(event) {
    if (event.key === "ArrowUp") {
        marble.dy = -marble.speed;
    } else if (event.key === "ArrowDown") {
        marble.dy = marble.speed;
    } else if (event.key === "ArrowLeft") {
        marble.dx = -marble.speed;
    } else if (event.key === "ArrowRight") {
        marble.dx = marble.speed;
    }
}

function keyUpHandler(event) {
    if (
        event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
    ) {
        marble.dx = 0;
        marble.dy = 0;
    }
}

// Слушаем события клавиатуры
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// Запускаем игру
update();
