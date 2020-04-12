$(function () {
    $('.population').on('click', ()=>{
        var Population = this.attr('data-population');
        alert(Population)
    });
});