function main() {
    const growMe = document.getElementById('grow-me');
    growMe.classList.add('big');

    const shrinkMe = document.getElementById('shrink-me');
    shrinkMe.classList.remove('big');

    const lis = document.querySelectorAll('li');
    lis.forEach(li => console.log(li.textContent));

    const aTag = document.querySelector('.link');
    aTag.setAttribute('href', 'https://www.example.com');
    aTag.textContent = 'somewhere';

    const hideMe = document.getElementById('hide-me');
    hideMe.style.display = 'none';

    const showMe = document.getElementById('show-me');
    showMe.style.display = 'block';

    const welcome = document.querySelector('h1');
    const input = document.getElementById('name');

    welcome.textContent = `Welcome ${input.value}`;
}