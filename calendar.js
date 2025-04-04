document.getElementById('toggleSection1').addEventListener('click', function() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    // Если секция 1 уже открыта, закрыть ее, иначе открыть и закрыть секцию 2
    if (section1.style.display === 'block') {
        section1.style.display = 'none';
    } else {
        section1.style.display = 'block';
        section2.style.display = 'none'; // Закрываем секцию 2
    }
});

document.getElementById('toggleSection2').addEventListener('click', function() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    // Если секция 2 уже открыта, закрыть ее, иначе открыть и закрыть секцию 1
    if (section2.style.display === 'block') {
        section2.style.display = 'none';
    } else {
        section2.style.display = 'block';
        section1.style.display = 'none'; // Закрываем секцию 1
    }
});
