document.getElementById('direction').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-container').style.flexDirection = value ? value : '';
});

document.getElementById('justify-content').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-container').style.justifyContent = value ? value : '';
});


document.getElementById('align-items').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-container').style.alignItems = value ? value : '';
});

document.getElementById('align-content').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-container').style.alignContent = value ? value : '';
});

document.getElementById('flex-wrap').addEventListener('change', function() {
    const value = this.value;
    document.querySelector('.flex-container').style.flexWrap = value ? value : '';
});

document.getElementById('gap').addEventListener('input', function() {
    const value = this.value;
    document.querySelector('.flex-container').style.gap = value ? `${value}px` : '';
});

function updateItemStyle(property, value, index) {
    document.querySelector(`.flex-item[data-index="${index}"]`).style[property] = value ? value : '';
}

document.querySelectorAll('.item-controls input, .item-controls select').forEach(control => {
    control.addEventListener('input', function() {
        const index = this.getAttribute('data-index');
        const property = this.id.split('-')[0];
        let value = this.value;

        if (property === 'flex-basis' && value) {
            value += 'px';
        }

        updateItemStyle(property, value, index);
    });

    control.addEventListener('change', function() {
        const index = this.getAttribute('data-index');
        const property = this.id.split('-')[0];
        let value = this.value;

        if (property === 'flex-basis' && value) {
            value += 'px';
        }

        updateItemStyle(property, value, index);
    });
});
