// 取得 canvas 元素
const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

// 取得滑動條元素
const wavelengthSlider1 = document.getElementById('wavelength1');
const amplitudeSlider1 = document.getElementById('amplitude1');
const frequencySlider1 = document.getElementById('frequency1');
const speedSlider1 = document.getElementById('speed1');

const wavelengthSlider2 = document.getElementById('wavelength2');
const amplitudeSlider2 = document.getElementById('amplitude2');
const frequencySlider2 = document.getElementById('frequency2');
const speedSlider2 = document.getElementById('speed2');

// 設定初始值
let wavelength1 = parseInt(wavelengthSlider1.value);
let amplitude1 = parseInt(amplitudeSlider1.value);
let frequency1 = parseFloat(frequencySlider1.value);
let speed1 = parseInt(speedSlider1.value);

let wavelength2 = parseInt(wavelengthSlider2.value);
let amplitude2 = parseInt(amplitudeSlider2.value);
let frequency2 = parseFloat(frequencySlider2.value);
let speed2 = parseInt(speedSlider2.value);

// 更新滑動條的值
wavelengthSlider1.oninput = () => wavelength1 = parseInt(wavelengthSlider1.value);
amplitudeSlider1.oninput = () => amplitude1 = parseInt(amplitudeSlider1.value);
frequencySlider1.oninput = () => frequency1 = parseFloat(frequencySlider1.value);
speedSlider1.oninput = () => speed1 = parseInt(speedSlider1.value);

wavelengthSlider2.oninput = () => wavelength2 = parseInt(wavelengthSlider2.value);
amplitudeSlider2.oninput = () => amplitude2 = parseInt(amplitudeSlider2.value);
frequencySlider2.oninput = () => frequency2 = parseFloat(frequencySlider2.value);
speedSlider2.oninput = () => speed2 = parseInt(speedSlider2.value);

// 動畫參數
let time = 0;

// 繪製波的函數
function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // 清除畫布

    // 繪製第一個波在上方
    for (let x = 0; x < canvas.width; x++) {
        let y1 = amplitude1 * Math.sin(2 * Math.PI * (x / wavelength1 - time / speed1));
        
        ctx.beginPath();
        ctx.arc(x, canvas.height / 4 + y1, 1, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.fill();
    }

    // 繪製第二個波在中央
    for (let x = 0; x < canvas.width; x++) {
        let y2 = amplitude2 * Math.sin(2 * Math.PI * (x / wavelength2 - time / speed2));
        
        ctx.beginPath();
        ctx.arc(x, canvas.height / 2 + y2, 1, 0, 2 * Math.PI);
        ctx.fillStyle = 'green';
        ctx.fill();
    }

    // 繪製干涉波在下方
    for (let x = 0; x < canvas.width; x++) {
        let y1 = amplitude1 * Math.sin(2 * Math.PI * (x / wavelength1 - time / speed1));
        let y2 = amplitude2 * Math.sin(2 * Math.PI * (x / wavelength2 - time / speed2));
        let y = y1 + y2;

        ctx.beginPath();
        ctx.arc(x, 3 * canvas.height / 4 + y, 1, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
    }

    time += Math.max(frequency1, frequency2);
    requestAnimationFrame(drawWave);
}

// 開始動畫
drawWave();
