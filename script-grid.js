document.addEventListener('DOMContentLoaded', () => {
    const gridTemplateColumnsInput = document.getElementById('grid-template-columns-input');
    const gridTemplateRowsInput = document.getElementById('grid-template-rows-input');
    const gridTemplateColumnsContainer = document.querySelector('.grid-template-columns-container');
    const gridTemplateRowsContainer = document.querySelector('.grid-template-rows-container');

    function updateGridTemplateColumns() {
        gridTemplateColumnsContainer.style.gridTemplateColumns = gridTemplateColumnsInput.value;
    }

    function updateGridTemplateRows() {
        gridTemplateRowsContainer.style.gridTemplateRows = gridTemplateRowsInput.value;
    }

    gridTemplateColumnsInput.addEventListener('input', updateGridTemplateColumns);
    gridTemplateRowsInput.addEventListener('input', updateGridTemplateRows);

    updateGridTemplateColumns();
    updateGridTemplateRows();
});

document.addEventListener('DOMContentLoaded', () => {
    const gridGapInput = document.getElementById('grid-gap-input');
    const gridGapContainer = document.querySelector('.grid-gap-container');

    function updateGridGap() {
        gridGapContainer.style.gap = `${gridGapInput.value}px`;
    }

    gridGapInput.addEventListener('input', updateGridGap);

    updateGridGap();
});

document.addEventListener('DOMContentLoaded', () => {
    // Justify Items
    const justifyItemsSelect = document.getElementById('justify-items-select');
    const justifyItemsContainer = document.querySelector('.justify-items-container');

    function updateJustifyItems() {
        justifyItemsContainer.style.justifyItems = justifyItemsSelect.value;
    }

    justifyItemsSelect.addEventListener('change', updateJustifyItems);

    updateJustifyItems();

    // Align Items
    const alignItemsSelect = document.getElementById('align-items-select');
    const alignItemsContainer = document.querySelector('.align-items-container');

    function updateAlignItems() {
        alignItemsContainer.style.alignItems = alignItemsSelect.value;
    }

    alignItemsSelect.addEventListener('change', updateAlignItems);

    updateAlignItems();
});

document.addEventListener('DOMContentLoaded', () => {
    // Justify Content
    const justifyContentSelect = document.getElementById('justify-content-select');
    const justifyContentContainer = document.querySelector('.justify-content-container');

    function updateJustifyContent() {
        justifyContentContainer.style.justifyContent = justifyContentSelect.value;
    }

    justifyContentSelect.addEventListener('change', updateJustifyContent);

    updateJustifyContent();



    // Align Content
    const alignContentSelect = document.getElementById('align-content-select');
    const alignContentContainer = document.querySelector('.align-content-container');

    function updateAlignContent() {
        alignContentContainer.style.alignContent = alignContentSelect.value;
    }

    alignContentSelect.addEventListener('change', updateAlignContent);

    updateAlignContent();

    // Grid Auto Flow
    const gridAutoFlowSelect = document.getElementById('grid-auto-flow-select');
    const gridAutoFlowContainer = document.querySelector('.grid-auto-flow-container');

    function updateGridAutoFlow() {
        gridAutoFlowContainer.style.gridAutoFlow = gridAutoFlowSelect.value;
    }

    gridAutoFlowSelect.addEventListener('change', updateGridAutoFlow);

    updateGridAutoFlow();
});
