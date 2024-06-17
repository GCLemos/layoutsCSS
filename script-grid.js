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
