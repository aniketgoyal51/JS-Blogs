class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
  addDescription() {
    var description_pera = document.createElement('p');
    description_pera.setAttribute('id', 'blog-description');
    console.log(description_pera);
    document.getElementById('card-text').appendChild(description_pera);
    description_pera.innerHTML += this.detail;
  }
}
const close=document.getElementById('close')
close.onclick=()=>{
  document.getElementById('popupContact').style.display = 'none';
}
// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
function helperAddPost(){
    document.getElementById('popupContact').style.display = 'inline';
}
function helperPost() {
  let title=document.getElementById('title').value
  let detail=document.getElementById('detail').value
  let blog=new Blog(title,detail)

  blog.addTitle()
  blog.addDescription()
}
