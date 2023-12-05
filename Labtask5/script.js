// Your JavaScript/jQuery code goes here


const $list = document.querySelectorAll('li');

function activeLink() {
    $list.forEach(($li) => {
        $li.classList.remove('active');
    });
    this.classList.add('active');
}

$list.forEach(($li) => 
    $li.addEventListener( 'click', activeLink,));





var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
} 