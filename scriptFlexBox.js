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

document.addEventListener('DOMContentLoaded', () => {
    const flexDirectionSelect = document.getElementById('completo-flex-direction');
    const justifyContentSelect = document.getElementById('completo-justify-content');
    const alignItemsSelect = document.getElementById('completo-align-items');
    const alignContentSelect = document.getElementById('completo-align-content');
    const flexWrapSelect = document.getElementById('completo-flex-wrap');
    const gapInput = document.getElementById('completo-gap');
    const completoContainer = document.querySelector('.completo-container');

    function updateFlexboxContainer() {
        completoContainer.style.flexDirection = flexDirectionSelect.value;
        completoContainer.style.justifyContent = justifyContentSelect.value;
        completoContainer.style.alignItems = alignItemsSelect.value;
        completoContainer.style.alignContent = alignContentSelect.value;
        completoContainer.style.flexWrap = flexWrapSelect.value;
        completoContainer.style.gap = `${gapInput.value}px`;
    }

    flexDirectionSelect.addEventListener('change', updateFlexboxContainer);
    justifyContentSelect.addEventListener('change', updateFlexboxContainer);
    alignItemsSelect.addEventListener('change', updateFlexboxContainer);
    alignContentSelect.addEventListener('change', updateFlexboxContainer);
    flexWrapSelect.addEventListener('change', updateFlexboxContainer);
    gapInput.addEventListener('input', updateFlexboxContainer);

    updateFlexboxContainer();
});
