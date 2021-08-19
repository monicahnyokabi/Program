
function printString(columnNumber)
{
    
        let columnName = [];
        while (columnNumber > 0) {
            
            let rem = columnNumber % 26;

            if (rem == 0) {
                columnName.push("Z");
                columnNumber = Math.floor(columnNumber / 26) - 1;
            }
            else 
            {
                columnName.push(String.fromCharCode((rem - 1) + 'A'.charCodeAt(0)));
                columnNumber = Math.floor(columnNumber / 26);
            }
        }

        
        document.write(columnName.reverse().join("")+"<br>");
}


printString(1);
printString(2);
printString(26);
printString(27);
printString(28);



