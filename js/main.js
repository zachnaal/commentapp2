function todoList() {
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)

	var newListItem = document.createElement("LI")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("H3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("P")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)

}
function deleteComment() {
    var list = document.getElementById("commentList");
    list.removeChild(list.childNodes[0]);
}
function thanks() {
    window.open("thanks.html");
}
function mailinglist() {
    window.open("maillist2.html");
}

function goback() {
	window.open ("index.html");
}