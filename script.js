document.getElementById('flex-direction').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-direction-container').style.flexDirection = value;
});

document.getElementById('justify-content').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.justify-content-container').style.justifyContent = value;
});

document.getElementById('align-items').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.align-items-container').style.alignItems = value;
});

document.getElementById('align-content').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.align-content-container').style.alignContent = value;
});

document.getElementById('flex-wrap').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-wrap-container').style.flexWrap = value;
});

document.getElementById('gap').addEventListener('input', function() {
    const value = this.value;
    document.querySelector('.gap-container').style.gap = value ? `${value}px` : '0';
});
