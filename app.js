// var notify = document.querySelector('.notify');
// var albums = document.querySelectorAll('.album')
// var itemsTotal = document.querySelector('.items-total')
// var btn = document.querySelector('.button')
// var albumsSelected = [];

// var i = 0;
// while(i < albums.length){
//   albums[i].onclick = function(e) {
//     var albumTitle = this.querySelector('.title').textContent
    
//     if(this.classList.contains('selected') !== true) {
//       this.classList.add('selected')
//       albumsSelected.push(albumTitle)
//     } else {
//       this.classList.remove('selected')
//       albumsSelected = albumsSelected.filter(function(item) {
//         return item !== albumTitle
//       })
//     }
//     console.log(albumsSelected)
//   }
//   i++;
// }


// var notify = document.querySelector('.notify')
// var albums = document.querySelectorAll('.album')
// var selectedAlbums = [];

// var i = 0;
// while(i < albums.length){
//   albums[i].onclick = function(e) {
//     var albumTitle = this.querySelector('.title').textContent
    
//     if(this.classList.contains('selected') !== true){
//        this.classList.add('selected')
//       selectedAlbums.push(albumTitle)
//     } else {
//       this.classList.remove('selected')
//       selectedAlbum = selectedAlbum.filter(function(item) {
//         return item !== albumTitle
//       })
//     }
//     console.log(selectedAlbums)
//   }
//   i++;
// }


// let notify = document.querySelector('.notify')
// let albums = document.querySelectorAll('.album')
// let itemsTotal = document.querySelector('.items-total')
// let btn = document.querySelector('.button')
// // select selected albums into array
// let albumsSelected = [];

// // while loop
// var i = 0;
// while(i < albums.length) {
//   // adding function on albums i and inside parantesis an argument,
//   albums[i].onclick = function(e) {
    
//     // get text content from inside class div and set to albumsTitle
//     var albumsTitle = this.querySelector(".title").textContent
    
//     // if it does not have the class selected were going to add it
//     if(this.classList.contains('selected') !== true) {
      
//       // add the class to it if it doesnt have it
//       this.classList.add('selected')
      
//       // if selected it sends title to empty array declared before
//       albumsSelected.push(albumsTitle)
      
//     } else {
      
//       // remove class if clicked again
//       this.classList.remove('selected')
      
//       // remove duplicate selected with filter
//       albumsSelected = albumsSelected.filter(function(item) {
        
//         // return item not in albums title
//         return item !== albumsTitle
        
//       })
//     }
//       console.log(albumsSelected)

//   }
//   i++;
// }








var albums = document.querySelectorAll('.album')
var selectedAlbum = [];

for(var i = 0; i < albums.length; i++) {
  albums[i].onclick = function(e) {
    var albumTitle = this.querySelector('.title').textContent;
    
    if(this.classList.contains('selected') !== true) {
      this.classList.add('selected')
      selectedAlbum.push(albumTitle)
    } else {
      this.classList.remove('selected')
      selectedAlbum = selectedAlbum.filter(function(item) {
        return item !== albumTitle
      })
    }
    console.log(selectedAlbum)
  }
  i++;
}





// var i = 0;
// while( i < albums.length){
//   albums[i].onclick = function(e) {
//     var albumsTitle = this.querySelector(".title").textContent
//     console.log(albumsTitle)
//   }
//   console.log(i)
//   i++;
// }

// var i = 0;
// while(i < albums.length) {
//   albums[i].onclick = function() {
//     var albumsTitle = this.querySelector('.title').textContent
//     console.log(albumsTitle)
//   }
//   i++;
// }

// var i = 0;
// while(i < albums.length){
//   albums[i].onclick = function() {
//     var albumsTitle = this.querySelector('.title').textContent
//     console.log(albumsTitle)
//   }
  
//   console.log(i)
//   i++;
// }



// var i = 0;
// while(i < albums.length){
//   albums[i].onclick = function(){
//     var albumsTitle = this.querySelector('.title').textContent
//     console.log(albumsTitle)
//   }
//  i++;
// }



// for(var i = 0; i < albums.length; i++) {
//   albums[i].onclick = function() {
//     var albumsTitle = this.querySelector('.title').textContent;
//     console.log(albumsTitle)
//   }
// }


// var i = 0;
// while(i < albums.length){
//   albums[i].onclick = function() {
//     var albumsTitle = this.querySelector('.title').textContent;
//     console.log(albumsTitle)
//   }
//   i++;
// }

// for(var i = 0; i < albums.length; i++) {
//   albums[i].onclick = function(e) {
//     var albumsTitle = this.querySelector('.title').textContent;
//     console.log(albumsTitle)
//   }
// }





















































// function Hotel(name, rooms, booked) {
//   this.name = name;
//   this.rooms = rooms;
//   this.booked = booked;
//   this.checkAvailability = function() {
//     return this.rooms - this.booked;
//   }
// }

// var vHotel = new Hotel('Vee', 69, 23)

// console.log(vHotel.checkAvailability())
