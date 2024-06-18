document.addEventListener('DOMContentLoaded', () => {
    // Selection of input elements
    const inputs = {
        gridTemplateColumns: document.getElementById('grid-template-columns-input'),
        gridTemplateRows: document.getElementById('grid-template-rows-input'),
        gridGap: document.getElementById('grid-gap-input'),
        justifyItems: document.getElementById('justify-items-select'),
        alignItems: document.getElementById('align-items-select'),
        justifyContent: document.getElementById('justify-content-select'),
        alignContent: document.getElementById('align-content-select'),
        gridAutoFlow: document.getElementById('grid-auto-flow-select')
    };

    // Selection of containers
    const containers = {
        gridTemplateColumns: document.querySelector('.grid-template-columns-container'),
        gridTemplateRows: document.querySelector('.grid-template-rows-container'),
        gridGap: document.querySelector('.grid-gap-container'),
        justifyItems: document.querySelector('.justify-items-container'),
        alignItems: document.querySelector('.align-items-container'),
        justifyContent: document.querySelector('.justify-content-container'),
        alignContent: document.querySelector('.align-content-container'),
        gridAutoFlow: document.querySelector('.grid-auto-flow-container')
    };

    // Update functions
    function updateGridTemplateColumns() {
        containers.gridTemplateColumns.style.gridTemplateColumns = inputs.gridTemplateColumns.value;
    }

    function updateGridTemplateRows() {
        containers.gridTemplateRows.style.gridTemplateRows = inputs.gridTemplateRows.value;
    }

    function updateGridGap() {
        containers.gridGap.style.gap = `${inputs.gridGap.value}px`;
    }

    function updateJustifyItems() {
        containers.justifyItems.style.justifyItems = inputs.justifyItems.value;
    }

    function updateAlignItems() {
        containers.alignItems.style.alignItems = inputs.alignItems.value;
    }

    function updateJustifyContent() {
        containers.justifyContent.style.justifyContent = inputs.justifyContent.value;
    }

    function updateAlignContent() {
        containers.alignContent.style.alignContent = inputs.alignContent.value;
    }

    function updateGridAutoFlow() {
        containers.gridAutoFlow.style.gridAutoFlow = inputs.gridAutoFlow.value;
    }

    // Event association with inputs
    inputs.gridTemplateColumns.addEventListener('input', updateGridTemplateColumns);
    inputs.gridTemplateRows.addEventListener('input', updateGridTemplateRows);
    inputs.gridGap.addEventListener('input', updateGridGap);
    inputs.justifyItems.addEventListener('change', updateJustifyItems);
    inputs.alignItems.addEventListener('change', updateAlignItems);
    inputs.justifyContent.addEventListener('change', updateJustifyContent);
    inputs.alignContent.addEventListener('change', updateAlignContent);
    inputs.gridAutoFlow.addEventListener('change', updateGridAutoFlow);

    // Initialization of values
    updateGridTemplateColumns();
    updateGridTemplateRows();
    updateGridGap();
    updateJustifyItems();
    updateAlignItems();
    updateJustifyContent();
    updateAlignContent();
    updateGridAutoFlow();
});