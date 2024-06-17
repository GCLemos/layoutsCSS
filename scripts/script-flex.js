document.addEventListener('DOMContentLoaded', () => {
    // Selection of input elements
    const flexInputs = {
        flexDirection: document.getElementById('flex-direction'),
        justifyContent: document.getElementById('justify-content'),
        alignItems: document.getElementById('align-items'),
        alignContent: document.getElementById('align-content'),
        flexWrap: document.getElementById('flex-wrap'),
        gap: document.getElementById('gap'),
        completoFlexDirection: document.getElementById('completo-flex-direction'),
        completoJustifyContent: document.getElementById('completo-justify-content'),
        completoAlignItems: document.getElementById('completo-align-items'),
        completoAlignContent: document.getElementById('completo-align-content'),
        completoFlexWrap: document.getElementById('completo-flex-wrap'),
        completoGap: document.getElementById('completo-gap')
    };

    // Selection of containers
    const flexContainers = {
        flexDirection: document.querySelector('.flex-direction-container'),
        justifyContent: document.querySelector('.justify-content-container'),
        alignItems: document.querySelector('.align-items-container'),
        alignContent: document.querySelector('.align-content-container'),
        flexWrap: document.querySelector('.flex-wrap-container'),
        gap: document.querySelector('.gap-container'),
        completo: document.querySelector('.completo-container')
    };

    // Update function for each container
    function updateFlexContainer(container, property, value) {
        container.style[property] = value;
    }

    // Update function for the complete container
    function updateCompleteFlexboxContainer() {
        flexContainers.completo.style.flexDirection = flexInputs.completoFlexDirection.value;
        flexContainers.completo.style.justifyContent = flexInputs.completoJustifyContent.value;
        flexContainers.completo.style.alignItems = flexInputs.completoAlignItems.value;
        flexContainers.completo.style.alignContent = flexInputs.completoAlignContent.value;
        flexContainers.completo.style.flexWrap = flexInputs.completoFlexWrap.value;
        flexContainers.completo.style.gap = `${flexInputs.completoGap.value}px`;
    }

    // Event change associations for each input
    flexInputs.flexDirection.addEventListener('change', function () {
        updateFlexContainer(flexContainers.flexDirection, 'flexDirection', this.value);
    });

    flexInputs.justifyContent.addEventListener('change', function () {
        updateFlexContainer(flexContainers.justifyContent, 'justifyContent', this.value);
    });

    flexInputs.alignItems.addEventListener('change', function () {
        updateFlexContainer(flexContainers.alignItems, 'alignItems', this.value);
    });

    flexInputs.alignContent.addEventListener('change', function () {
        updateFlexContainer(flexContainers.alignContent, 'alignContent', this.value);
    });

    flexInputs.flexWrap.addEventListener('change', function () {
        updateFlexContainer(flexContainers.flexWrap, 'flexWrap', this.value);
    });

    flexInputs.gap.addEventListener('input', function () {
        updateFlexContainer(flexContainers.gap, 'gap', `${this.value}px`);
    });

    // Event change associations for the complete inputs
    flexInputs.completoFlexDirection.addEventListener('change', updateCompleteFlexboxContainer);
    flexInputs.completoJustifyContent.addEventListener('change', updateCompleteFlexboxContainer);
    flexInputs.completoAlignItems.addEventListener('change', updateCompleteFlexboxContainer);
    flexInputs.completoAlignContent.addEventListener('change', updateCompleteFlexboxContainer);
    flexInputs.completoFlexWrap.addEventListener('change', updateCompleteFlexboxContainer);
    flexInputs.completoGap.addEventListener('input', updateCompleteFlexboxContainer);

    // Initialization of values
    updateCompleteFlexboxContainer();
});
