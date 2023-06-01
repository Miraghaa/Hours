let date = new Date();

let x = date.getHours();

if(x>22 || x<5 || x==0){
    alert('gecedi') 
    document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/386677.jpg)'
    document.getElementById('miri').style.height ='0px'
}else if(x>4 && x<11){
    alert('seher') 
    document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&w=1000&q=80)'
    document.getElementById('miri').style.height ='0px'
}
else if(x>10 && x<18){
    alert('gunorta') 
    document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/531853066/vector/sun-character-with-funny-facial-expressions-in-glossy-for-summer.jpg?s=1024x1024&w=is&k=20&c=THTzkGSKHP9jhr2psmu8N6P40uJlvCV4CoDbFlpzBEc=)'
    document.getElementById('miri').style.height ='0px'
}
else if(x>17 && x<=22){
    alert('axsam') 
    document.body.style.backgroundImage = 'url(https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=)'
    document.getElementById('miri').style.height ='0px'
}


