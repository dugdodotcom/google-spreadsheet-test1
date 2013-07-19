var GoogleSpreadsheets = require("./lib/spreadsheets.js");
var fs = require('fs');
GoogleSpreadsheets({
    key: "0Aq3caxUBtOBzdFVZaEtIMjJjZTN4V3N6aGNZanMzYlE"
}, function(err, spreadsheet) {
			
   		var maxcol=spreadsheet.worksheets[1].colCount;
    spreadsheet.worksheets[1].cells({
         //range: "R1C1:R3C3"
        range: "R2C2:R7C"+maxcol
    }, function(err, result) {
    	var writes='';
    		for(var t=parseInt(2);t<=maxcol-2;t++){		
    				var total='';
							for(var n=2;n<=7;n++){
								if(n!=2){
								total+=",";									
									}
									try
									  {
									  	total+=result.cells[n][t].value;
									  }
									catch(err)
									  {
									  total+="-";
									  }
								
											
    				}   
    				console.log(total);
    				writes+=total+'\r\n'; 			
    			}
    			fs.writeFile('test.txt', writes, function (err) {
						  if (err) throw err;
						  console.log('It\'s saved!');
						}); 
    });
});
