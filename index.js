var allRows = [];

function onload(){
    readFromCsv();
    // $(".pickBtn").click(function(){
    //     $( ".pickBtn" ).prop( "disabled", true );
    //         pickWinner();
    //     });
}
function readFromCsv(){
    $.ajax({
        type: "GET",
        url: "file.csv",
        dataType: "text",
        success: function(data) {
            successReadFunction(data);
        }
     });
    // var data = 'number, name\n0001, Tan Ah Boon\n0002, Halo Ban\n0003, Chey Ah Leong\n 0004, Chua Ah Boon';
    // successReadFunction(data);
}

function successReadFunction(data) {
    var splittedRow = data.split(/\r?\n|\r/);
    for (var singleRow = 1; singleRow < splittedRow.length; singleRow++) {
      var rowCells = splittedRow[singleRow].split(',');
      let rowItem = {
          sno:rowCells[0],
          name:rowCells[1]
      };
      allRows.push(rowItem);
 
    }
    console.log(allRows);
}

function pickWinner(){
    $('.placeholder').text('');
    let final = allRows[Math.floor(Math.random()*allRows.length)];
    console.log("final ", final);
    var interval = 0;
    for(var i =0; i < 100; i++){
        setTimeout(function(){
            let randomSnoItem = allRows[Math.floor(Math.random()*allRows.length)];
            let randomNameItem = allRows[Math.floor(Math.random()*allRows.length)];
            $('.sno').text(randomSnoItem.sno+":");
            $('.name').text(randomNameItem.name);
        }, interval);
  
            interval = interval+100;
    
    }
    setTimeout(()=>{
        $('.sno').text(final.sno+":");
        $('.name').text(final.name); 
        $('.pickBtn').prop('disabled', false);
    },interval);
    
    
}

