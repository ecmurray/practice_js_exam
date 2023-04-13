var secondImg = document.getElementsByTagName("img")[1];
var caption = secondImg.nextElementSibling.textContent;
alert(caption);
var hover_display = document.querySelectorAll('.thumbnail');
//alternatively can use a Array.prototype.forEach loop:
//hover_display.forEach(thumbnail_img => {
for (const thumbnail_img of hover_display) {
	thumbnail_img.addEventListener('mouseover', function() {
        document.querySelector('#display').style.backgroundImage = `url(${thumbnail_img.src})`;
        document.querySelector('#display').innerHTML = thumbnail_img.alt;
        thumbnail_img.style.visibility = 'hidden';
	});
    thumbnail_img.addEventListener('mouseout', function() {
        thumbnail_img.style.visibility = 'visible';
        document.querySelector('#display').style.backgroundImage = `none`;
        document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
    });
}


// const hover_display = document.querySelectorAll('.thumbnail');
// hover_display.forEach(thumbnail_img => {
    
//     thumbnail_img.addEventListener('mouseover', function() {
        
//         document.querySelector('#display').style.backgroundImage = `url(${thumbnail_img.src})`;
//         document.querySelector('#display').innerHTML = thumbnail_img.alt;
//         thumbnail_img.style.visibility = 'hidden';
//     });

//     thumbnail_img.addEventListener('mouseout', function() {
//         thumbnail_img.style.visibility = 'visible';
//         document.querySelector('#display').style.backgroundImage = `none`;
//         document.querySelector('#display').innerHTML = 'Hover over an image below to display the image and the alt text.';
//     });
// });