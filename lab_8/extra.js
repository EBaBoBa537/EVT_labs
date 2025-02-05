let parent_1 = document.getElementById('parent_1');
let parent_2 = document.getElementById('parent_2');
let parent_3 = document.getElementById('parent_3');
let parent_4 = document.getElementById('parent_4');



document.getElementById('radiobutt-1').addEventListener('change', function() {
    if (this.checked) { parent_1.classList = "";  parent_1.classList.add("grid_template_columns_1"); }
});
document.getElementById('radiobutt-2').addEventListener('change', function() {
    if (this.checked) { parent_1.classList = "";  parent_1.classList.add("grid_template_columns_2");}
});
document.getElementById('radiobutt-3').addEventListener('change', function() {
    if (this.checked) { parent_1.classList = "";  parent_1.classList.add("grid_template_columns_3"); }
});


document.getElementById('radiobutt-4').addEventListener('change', function() {
    if (this.checked) { parent_2.classList = "";  parent_2.classList.add("grid_template_rows_1"); }
});
document.getElementById('radiobutt-5').addEventListener('change', function() {
    if (this.checked) { parent_2.classList = "";  parent_2.classList.add("grid_template_rows_2"); }
});
document.getElementById('radiobutt-6').addEventListener('change', function() {
    if (this.checked) { parent_2.classList = "";  parent_2.classList.add("grid_template_rows_3"); }
});



document.getElementById('radiobutt-7').addEventListener('change', function() {
    if (this.checked) { parent_3.classList = "";  parent_3.classList.add("grid_template_areas_1"); }
});
document.getElementById('radiobutt-8').addEventListener('change', function() {
    if (this.checked) { parent_3.classList = "";  parent_3.classList.add("grid_template_areas_2"); }
});
document.getElementById('radiobutt-9').addEventListener('change', function() {
    if (this.checked) { parent_3.classList = "";  parent_3.classList.add("grid_template_areas_3"); }
});



document.getElementById('radiobutt-10').addEventListener('change', function() {
    if (this.checked) { parent_4.classList = "";  parent_4.classList.add("gap_1"); }
});
document.getElementById('radiobutt-11').addEventListener('change', function() {
    if (this.checked) { parent_4.classList = "";  parent_4.classList.add("gap_2"); }
});
document.getElementById('radiobutt-12').addEventListener('change', function() {
    if (this.checked) { parent_4.classList = "";  parent_4.classList.add("gap_3"); }
});
document.getElementById('radiobutt-13').addEventListener('change', function() {
    if (this.checked) { parent_4.classList = "";  parent_4.classList.add("gap_4"); }
});
document.getElementById('radiobutt-14').addEventListener('change', function() {
    if (this.checked) { parent_4.classList = "";  parent_4.classList.add("gap_5"); }
});
document.getElementById('radiobutt-15').addEventListener('change', function() {
    if (this.checked) { parent_4.classList = "";  parent_4.classList.add("gap_6"); }
});




parent_1.classList.add("grid_template_columns_1");
parent_2.classList.add("grid_template_rows_1");
parent_3.classList.add("grid_template_areas_1");
parent_4.classList.add("gap_1");

