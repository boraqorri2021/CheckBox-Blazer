export function ChangeMaxRowNumber(RowMaxNr, itemsNr) {
    if (RowMaxNr == 0) {
        alert("Please choose a number!");
    }
    else {
        var columnNr = 0;
        var rowNr = 0;
        if (RowMaxNr != 0) {
            if (itemsNr % RowMaxNr == 0) {
                columnNr = itemsNr / RowMaxNr;
            }
            else {
                columnNr = (itemsNr / RowMaxNr) + 1;
            }
        }
        var column = '';
        for (var i = 0; i < columnNr; i++) {
            column += "auto ";
        }
        for (var i = 0; i < RowMaxNr; i++) {
            rowNr += "auto ";
        }
        document.getElementById('gridID').style.gridTemplateRows = rowNr;
        document.getElementById('gridID').style.gridTemplateColumns = column;
    }
   
}