/* $('.card').on('click', function() {
    $('.container').toggleClass('container-origin');
}) */



let arrayImg = [];
arrayImg[0] = "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg";
arrayImg[1] = "https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg";
arrayImg[2] = "https://bipbap.ru/wp-content/uploads/2017/04/1-14.jpg";
arrayImg[3] = "https://bipbap.ru/wp-content/uploads/2017/04/2-16.jpg";
arrayImg[4] = "https://bipbap.ru/wp-content/uploads/2017/04/0_70bfb_209fe817_XL.jpg";
arrayImg[5] = "https://bipbap.ru/wp-content/uploads/2017/04/3-8.jpg";
arrayImg[6] = "https://bipbap.ru/wp-content/uploads/2017/04/1654321.jpg";
arrayImg[7] = "https://bipbap.ru/wp-content/uploads/2017/04/9963_original.jpg";
arrayImg[8] = "https://bipbap.ru/wp-content/uploads/2017/04/187604chan1309313071950.jpg";
arrayImg[9] = "https://bipbap.ru/wp-content/uploads/2017/04/555946b1b027f7626674951f6f236e9198f06211.jpg";

function transform() {
    console.log('1');
    let container = document.querySelector('.container');
    container.classList.toggle('container-origin');
}
async function load() {
    let a = await fetch('https://gorest.co.in/public/v2/posts');
    let b = await a.json();
    console.log(b);
    for (let i = 0; i < b.length; i++) {

        let div = document.getElementById(i);
        let title = document.createElement('p');
        title.classList.add('title');
        let a = document.createElement('a');
        let text = b[i].title;
        a.textContent = '.. read';
        a.href = 'src.html?id=' + b[i].id;
        title.textContent = text.slice(0, 40);
        console.log(title.textContent);
        div.append(title);

        let body = document.createElement('p');
        body.classList.add('body_textContent');
        text = b[i].body;
        body.textContent = text.slice(0, 100);
        div.append(body);
        body.append(a);
    }
}
load();
