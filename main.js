document.addEventListener('DOMContentLoaded', function() {
    var a = document.getElementById('11');

    document.getElementById('next1').addEventListener('click', function() {
        if (a.value === 'Aierke') {
            window.open('index1.html');
        } else if (a.value === 'Dana') {
            window.open('index3.html');
        } else if (a.value === 'Aiyana') {
            window.open('index2.html');
        } else if (a.value === 'Nuray') {
            window.open('index4.html');
        } else if (a.value === 'Kundyzay') {
            window.open('index5.html');
        } else if (a.value === 'Suraiyo') {
            window.open('index6.html');
        }
    });
});
