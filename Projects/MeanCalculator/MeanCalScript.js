let data =[];

function addValue(){
 let input = document.getElementById("textBox");
 let num = parseFloat(input.value);

 if (!isNaN(num)) {
        data.push(num);
    } else {
        alert("Invalid input. Please enter a number.");
    }

 updateMean();
}

function removeValue(){
  let input = document.getElementById("textBox");
  let num = parseFloat(input.value);

   if (!isNaN(num)) {
        let index = data.indexOf(num);
        if (index !== -1) {
            data.splice(index, 1);
        } else {
            alert("Number is not in the dataset.");
        }
    } else {
        alert("Invalid input. Please enter a number.");
    }


updateMean();
}

function updateMean(){
 document.getElementById("dataset").innerHTML = data.join(", ");
 let sum = 0;
 for (let i = 0; i < data.length; i++){
    sum += data[i];
 }
 let mean = sum / data.length;
 document.getElementById("meanVal").innerHTML = mean;


}

