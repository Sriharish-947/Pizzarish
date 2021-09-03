menuArray = ["Veggie pizza", "Cheese Pizza", "Cheese Chicken Pizza", "Mushroom Pizza", "Pineapple Pizza", "Cookie Pizza", "Potato Fry", "French Fries", "Brownies", "Froyo", "Cinnamon Apples", "Cinnamon Rolls"];

 function getMenu()
 {

    var htmldata;
    htmldata = "<ol class = 'menulist'>";
    menuArray.sort();
    console.log("sorted");
    for (i=0;i<menuArray.length;i++)
    {
        htmldata=htmldata+ '<li>' + menuArray[i] + '</li>'
       
    }
    htmldata=htmldata+ "</ol>"
    console.log(htmldata);
    document.getElementById("displayMenu").innerHTML =  htmldata;
 }

 function  add_item()
{
var htmldata
var item = document.getElementById("add_item").value
menuArray.push(item);
menuArray.sort();
htmldata = '<section class="cards">'
for (i=0;i<menuArray.length;i++)
{
    htmldata= '<div class="cards">' + '<img src="images/pizzaImg.png"/>' + menuArray[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedMenu").innerHTML=htmldata;

}

 
