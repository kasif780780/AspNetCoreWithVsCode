// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

<script>
    
  </script>

  $(document).ready(function(){
    $("#searchInput").autocomplete({
        source:function(request,response){
          $.ajax({
            url:'/City/Create1',
            type:"POST",
            dataType:"json",

            data:{Prefix:request.term},
            success :function(data){
              response($.map(data,function(item){
                return {label :item.Name,value:item.Name};
              }));
            },
            messages:{
                noResult:"",results:""
            }
          });
        }
      });
  })