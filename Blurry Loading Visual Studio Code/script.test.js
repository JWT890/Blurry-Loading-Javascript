const script = require('./script');
const loadText = document.createElement('div');
loadText.classList.add('loading-text');

test('blurring', () => {
    blurring();

    expect(loadText.innerText).toBe('30%');
    expect(loadText.style.opacity).toBe('1');
    expect(bg.style.filter).toBe('blur(30px');
});