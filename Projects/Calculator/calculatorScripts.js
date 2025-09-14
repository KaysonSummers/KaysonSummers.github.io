function parallelogramPerimeter(){
let base = parseFloat(document.getElementById('pBase').value);
let side = parseFloat(document.getElementById('side').value);

const result = 2 * (base + side);

document.getElementById("parallelogramPerimeterResult").innerHTML = result;
};

function parallelogramArea(){
let base = parseFloat(document.getElementById('areaBase').value);
let height = parseFloat(document.getElementById('parallelogramHeight').value);

const result = base * height;

document.getElementById("parallelogramAreaResult").innerHTML = result;
}

function prismVolume(){
let base = parseFloat(document.getElementById('prismBase').value);
let height = parseFloat(document.getElementById('prismHeight').value);
let length = parseFloat(document.getElementById('length').value);

const result = (1/2) * base * height * length;

document.getElementById("prismVolumeResult").innerHTML = result;
}

function showParallelogram(){
    document.getElementById('ParallelogramInputs').style.display = 'block';
    document.getElementById('prismInputs').style.display = 'none';
    document.getElementById('shape').innerHTML = 'Parallelogram';
    document.getElementById('shapeImage').setAttribute("src","../../Photos/parallelogram.png");
}

function showPrism(){
    document.getElementById('ParallelogramInputs').style.display = 'none';
    document.getElementById('prismInputs').style.display = 'block';
    document.getElementById('shape').innerHTML = 'Prism';
    document.getElementById('shapeImage').setAttribute("src","../../Photos/prism.png");
}