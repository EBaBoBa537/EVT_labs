let parent_style = 'width: 400px;  height: 200px;  border: 2px solid #000000;  background-color:rgb(229, 232, 224);  display: flex;  margin-top: 12px;  padding: 1.5px;';


document.getElementById('radiobutt-1').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_1').style = parent_style + '  flex-direction: row;'; }
});
document.getElementById('radiobutt-2').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_1').style = parent_style + '  flex-direction: row-reverse'; }
});
document.getElementById('radiobutt-3').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_1').style = parent_style + '  flex-direction: column'; }
});
document.getElementById('radiobutt-4').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_1').style = parent_style + '  flex-direction: column-reverse'; }
});



document.getElementById('radiobutt-5').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_2').style = parent_style + '  justify-content: flex-start;'; }
});
document.getElementById('radiobutt-6').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_2').style = parent_style + '  justify-content: flex-end'; }
});
document.getElementById('radiobutt-7').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_2').style = parent_style + '  justify-content: center'; }
});
document.getElementById('radiobutt-8').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_2').style = parent_style + '  justify-content: space-between'; }
});
document.getElementById('radiobutt-9').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_2').style = parent_style + '  justify-content: space-around'; }
});
document.getElementById('radiobutt-10').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_2').style = parent_style + '  justify-content: space-evenly'; }
});



document.getElementById('radiobutt-11').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_3').style = parent_style + '  align-items: flex-start;'; }
});
document.getElementById('radiobutt-12').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_3').style = parent_style + '  align-items: flex-end'; }
});
document.getElementById('radiobutt-13').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_3').style = parent_style + '  align-items: center'; }
});
document.getElementById('radiobutt-14').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_3').style = parent_style + '  align-items: baseline'; }
});
document.getElementById('radiobutt-15').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_3').style = parent_style + '  align-items: stretch'; }
});



document.getElementById('radiobutt-16').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_4').style = parent_style + '  flex-wrap: nowrap;'; }
});
document.getElementById('radiobutt-17').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_4').style = parent_style + '  flex-wrap: wrap'; }
});
document.getElementById('radiobutt-18').addEventListener('change', function() {
    if (this.checked) { document.getElementById('parent_4').style = parent_style + '  flex-wrap: wrap-reverse'; }
});


document.getElementById('parent_1').style = parent_style + '  flex-direction: row;';
document.getElementById('parent_2').style = parent_style + '  justify-content: flex-start;';
document.getElementById('parent_3').style = parent_style + '  align-items: flex-start;';
document.getElementById('parent_4').style = parent_style + '  flex-wrap: nowrap;';
