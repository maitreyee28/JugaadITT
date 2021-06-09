function search_product() {
    let input = document.getElementById('searchBar').value;
    input=input.toLowerCase();
    console.log(input);
    let x = document.getElementsByClassName('product');
    // console.log(x);
    for (var i = 0; i < x.length; i++) {
        console.log(x[i].textContent);
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";
        }
    }
}
// document.getElementById('search-button').addEventListener("click",search_product);
