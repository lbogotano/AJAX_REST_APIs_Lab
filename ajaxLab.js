let list = $('.userList');

//show posts on page
$("#allButton").click(()=>{
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(p){
    console.log(p);
    p.forEach(function(p){
        var li = $('<li></li>');
        li.text(JSON.stringify(p));
        list.append(li);
    })
});
})

//Hide the results
$("#deleteList").click(()=>{
    list.empty();
})

//All of the posts
$("#allPost").click(()=>{
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(p){
    console.log(p);
});
})

//Get Id of 10
$("#idTen").click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10', function(p){
        console.log(p);
    });
    })

//Get the comments from comments from post with id of 12 
$("#commentTwelve").click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12/comments', function(p){
        console.log(p);
    });
    })

// to be completed ...... =(

// Get all the posts from user with id of 2
// // $("#idTwo").click(()=>{
  