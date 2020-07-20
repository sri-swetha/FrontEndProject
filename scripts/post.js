//function invoked from postslist.html
function getPost(card) {   
    var textArray = document.getElementById(card).innerText;
    textArray = textArray.split("\n").filter(item => item);
    console.log(textArray);

    localStorage.setItem("Name", textArray[0]);
    localStorage.setItem("Title", textArray[1]);
    localStorage.setItem("Body", textArray[2]);
    window.location.href = "../html/post.html";
}
var likeCount;
var editCount;
//to get title and other details
function getTitle() {
    likeCount = 0;
    editCount = 0;
    var title = '<div class="text-center" id="titlediv" > <p id="title">' + localStorage.getItem("Title") + '</p> </div>';
    title += '<div class="text-left" id="editdiv"> <p id="cardname">' + localStorage.getItem("Name") + '</p> <span  id="editicon"> <button class="btn btn-danger btn-md" type="submit" value="Edit" id="edit" onclick="editborder()" >' + "Edit " + '<i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></span> </div>';
    title += '<div class="text-justify" id="bodydiv"> ' + localStorage.getItem("Body") + '</div>';
    title += '<div class="text-left" id="likediv"><button class="btn btn-danger btn-md" type="submit" value="Like" id="like" onclick="like()" ><i class="fa fa-thumbs-up" aria-hidden="true"></i>' + " Like" + '</button>' +
        '<p id="likeCount"></p></div>';
    title += '<div class="text-left" id="commentinputdiv">';
    title += '<textarea id="commentarea" rows="2" cols="5" placeholder="Leave a comment..."></textarea></div>';
    title += '<div class="text-left" id="commentbuttondiv"><button class="btn btn-danger btn-md" type="submit" value="Comment" id="comment" onclick="comment()" >' + "Comment" + '</button></div>';
    title += '<div class="text-left" id="allcommentsdiv"><p id="allcommentslabel">' + "All Comments" + '</p></div>';
    title += '<div class="text-left" id="addcommentsdiv"></div>';
    document.getElementById("displayCards").innerHTML = title;
    if (likeCount == 0) {
        document.getElementById("likeCount").innerText = "Be the first one to like this!"
    }


}
//this fuction is invoked on click of edit button
function editborder() {
    var titlediv = document.getElementById("titlediv");
    var bodydiv = document.getElementById("bodydiv");
    titlediv.contentEditable = "true";
    bodydiv.contentEditable = "true";
    if (titlediv.isContentEditable || bodydiv.isContentEditable) {
        titlediv.style.borderColor = "pink";
        bodydiv.style.borderColor = "pink";
        document.getElementById("editicon").innerHTML = '<button class="btn btn-danger btn-md" type="submit" value="Edit" id="edit" onclick="save()" >' + "Save " + '<i class="fa fa-floppy-o" aria-hidden="true"></i></button>';
        if (editCount == 0) {
            document.getElementById("titlediv").innerHTML = '<p id="title">' + "UPDATED:" + document.getElementById("titlediv").innerText + '</p>'
            document.getElementById("bodydiv").innerText = "UPDATED:\n" + document.getElementById("bodydiv").innerText;
            editCount++;
        }
    }
}
//function to save the edited data
function save() {
    var editTitle = document.getElementById("titlediv").innerText;
    var editBody = document.getElementById("bodydiv").innerText;
    console.log(editTitle);
    localStorage.setItem("Title", editTitle);
    localStorage.setItem("Body", editBody);
    titlediv.contentEditable = "false";
    bodydiv.contentEditable = "false";
    titlediv.style.borderColor = "";
    bodydiv.style.borderColor = "";
    document.getElementById("editicon").innerHTML = '<button class="btn btn-danger btn-md" type="submit" value="Edit" id="edit" onclick="editborder()" >' + "Edit " + '<i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>';

}
//function to display number of likes by a person
function like() {
    likeCount++;

    document.getElementById("like").innerHTML = '<i class="fa fa-thumbs-up" aria-hidden="true"></i>' + " Liked";

    document.getElementById("likeCount").innerText = likeCount + " person likes this!"
}
//to display all the comments
function comment() {
    var addeachcomment = '<div class="text-left" id="addeach">' + document.getElementById("commentarea").value + '</div>';
    document.getElementById("addcommentsdiv").innerHTML = addeachcomment + document.getElementById("addcommentsdiv").innerHTML;
    document.getElementById("commentarea").value = '';

}