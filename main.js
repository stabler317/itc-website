function search(){
    let searchBar = document.querySelector('.search-input').ariaValueMax.toUpperCase();
    let blogsList = document.querySelector('.blog-grid');
    let blog = document.querySelectorAll('.blog-item');
    let blogName = document.getElementsByTagName('.blog-pic img')[0].alt;

    for(let i= 0;i<blogName.length;i++){
        if(blogName[i].innerHTML.toUpperCase().indexOf(searchBar)>=0){
            blog[i].style.display = "";

        }else{
            blog[i].style.display = "none";
        }
    }

}