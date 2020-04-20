$(document).ready(function(){  

    let list = $('#completeList');


        $('#allPosts').click(function(){
        $.get(' https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts ', function(posts){

                posts.forEach(function(){
                list.text(JSON.stringify(posts));        
            });
        }); 
    });
    $('#post10').click(function(){
        $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/?id=10', function(posts){
               
                posts.forEach(function(){
                list.text(JSON.stringify(posts));    
   
             });
         }); 
     });

     $('#id12Comments').click(function(){
        $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments/?id=12', function(posts){

             posts.forEach(function(){
             list.text(JSON.stringify(posts));    
            
             });
         }); 
     });

     $('#id2posts').click(function(){
        $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id:2}, function(posts){
             
             let list = $("#completeList")
             list.text(JSON.stringify(posts));
         }); 
     });

     $('#createPost').click(function(){
        $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', 
            {
                userID: 15,
                title: "New post",
                body: "this is the body"
            },
            function(newId){
                list.text(JSON.stringify(newId));
            }
        )
     });

     $('#replacePost12').click(function(){
        $.ajax({
                method: 'PUT',
                url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
                data: {
                    userID: 12,
                    title: "new post",
                    body: "this is a body replace"},
                complete: function(data){
                    list.text(JSON.stringify(data.responseJSON));
                    
                }
            },
        )
     });

     $('#updatePost12').click(function(){
        $.ajax({
                method: 'PATCH',
                url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
                data: {
                    title: "test title update"},
                complete: function(data){
                    list.text(JSON.stringify(data.responseJSON));
                }
            },
        )
     });

     $('#deletePost12').click(function(){
        $.ajax({
                method: 'DELETE',
                url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
                complete: function(data){
                    list.text("Delete status: " + data.statusText);
                   
                }
            },
        )
     });

     // $('#displayListPosts').click(function(){
     //    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/db',

     //     function(all){
     //         all.posts.forEach(function(element){
     //             list.text(JSON.stringify(element));
     //             response.comments.forEach(function(e){}
       
});
