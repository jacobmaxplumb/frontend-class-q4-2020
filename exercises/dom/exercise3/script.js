document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circle = document.getElementById('circle');
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    const newCircle = document.createElement('div');
    newCircle.style.width = '10px';
    newCircle.style.height = '10px';
    newCircle.style.backgroundColor = 'red';
    newCircle.style.position = 'absolute';
    newCircle.style.top = `${y}px`;
    newCircle.style.left = `${x}px`;
    console.log(`new circle created at ${x},${y}`)
    document.body.append(newCircle);
})