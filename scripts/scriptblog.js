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

async function onload(idElement) {

    let a = await fetch('https://gorest.co.in/public/v2/posts');
    let b = await a.json();
    for (let i = 0; i < b.length; i++) {
        if (b[i].id == idElement) {
            let div = document.createElement('div');
            div.classList.add('contant_blog');
            let title = document.createElement('p');
            title.classList.add('title');
            title.textContent = b[i].title;
            div.append(title);
            let bodys = document.createElement('p');
            bodys.classList.add('body_textContent');
            bodys.textContent = b[i].body;
            div.append(bodys);
            console.log(title.textContent);
            document.body.append(div);
            let img = document.createElement('img');
            img.src = arrayImg[i];
            div.append(img);
        }
    }
}

let id = window.location.href;

let hostName = new URLSearchParams(id);
for (let p of hostName) {
    console.log(p);
    onload(p[1]);
}
