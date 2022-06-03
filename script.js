
function printFunction() { 
 var divContents = document.getElementById("printableArea").innerHTML;
         var prnt = window.open('', '', 'height=500, width=500');
          prnt .document.write(divContents);
         prnt .document.close();
         prnt .print();
   }
 // function add_item(){
 //     let item = document.getElementById('box');
 //     let item2 = document.getElementById('num');
 //      let temp= " | "
 //     let list_item = document.getElementById('list_item');
 
 function myFunction() {
   let item = document.getElementById("num").value;
     let item2 = document.getElementById("box").value;
   if(item==0 || item2==0)
{
alert("please enter value first")
}

   if (document.getElementById("sport1").checked == true) {
    
     var table = document.getElementById("sport");
     var row = table.insertRow(-1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = item;
     cell2.innerHTML = item2;
   }
   else if (document.getElementById("news1").checked == true) {
     let item = document.getElementById("num").value;
     let item2 = document.getElementById("box").value;
     var table = document.getElementById("news");
     var row = table.insertRow(-1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = item;
     cell2.innerHTML = item2;
   }

   else if (document.getElementById("movie1").checked == true) {
     let item = document.getElementById("num").value;
     let item2 = document.getElementById("box").value;
     var table = document.getElementById("movie");
     var row = table.insertRow(-1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = item;
     cell2.innerHTML = item2;
   }
   else if (document.getElementById("song1").checked == true) {
     let item = document.getElementById("num").value;
     let item2 = document.getElementById("box").value;
     var table = document.getElementById("song");
     var row = table.insertRow(-1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = item;
     cell2.innerHTML = item2;
   }
   else if (document.getElementById("favourite1").checked == true) {
     let item = document.getElementById("num").value;
     let item2 = document.getElementById("box").value;
     var table = document.getElementById("favourite");
     var row = table.insertRow(-1);
     var cell1 = row.insertCell(0);
     var cell2 = row.insertCell(1);
     cell1.innerHTML = item;
     cell2.innerHTML = item2;
   }

  
   function printPageArea(areaID){
 var printContent = document.getElementById(areaID);
 var WinPrint = window.open('', '', 'width=900,height=650');
 WinPrint.document.write(printContent.innerHTML);
 WinPrint.document.close();
 WinPrint.focus();
 WinPrint.print();
 WinPrint.close();
}
   // var table = document.getElementById("sport");
   // var row = table.insertRow(0);
   // var cell1 = row.insertCell(0);
   // var cell2 = row.insertCell(1);
   // cell1.innerHTML = item;
   // cell2.innerHTML = item2;
}
               // if (item.value != NaN) {
         //     let make_li = document.createElement("li");
         //     make_li.appendChild(document.createTextNode(item.value));
         //     make_li.appendChild(document.createTextNode(temp));
         //     make_li.appendChild(document.createTextNode(item2.value));
         //     list_item.appendChild(make_li);
         //     item.value=""

         //     make_li.onclick = function(){
         //         this.parentNode.removeChild(this);
         //     }
         // }
         // else{
         //     alert("Please add an item");
         // }

         function deletenews() {
            document.getElementById("news").deleteRow(1);
          }
          function deletesong() {
            document.getElementById("song").deleteRow(1);
          }
          function deletemovies() {
            document.getElementById("movie").deleteRow(1);
          }
          function deletesport() {
            document.getElementById("sport").deleteRow(1);
          }
          function deletefavourite() {
            document.getElementById("favourite").deleteRow(1);
          }
