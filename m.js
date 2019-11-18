$(document).ready(function () {
    // uploadfile
    $(".file1").click(function () {
        $(".import").show();
    });
    // student slideToggle-SSD
    $("*#SSD-detiles").click(function () {
        console.log($(this).attr('class'));
        var className = $(this).attr('class');
        $("tr."+className).slideToggle("slow");
    });

     // student slideToggle-CED  

    $("*#CED-detiles").click(function () {
        console.log($(this).attr('class'));
        var className = $(this).attr('class');
        $("tr."+className).slideToggle("slow");
    });


    //next and prev button-SSD
$(".SSD-tables table.panel").each(function(SSD_numerdisplay) {
if (SSD_numerdisplay > 9){
$(this).hide();
console.log(SSD_numerdisplay);
}
});
$("#next").click(function(){
    if ($(".SSD-tables table.panel:visible:last").next().length != 0){
        $(".SSD-tables table.panel:visible:last").next().show();
        $(".SSD-tables table.panel:visible:last").next().show();
        $(".SSD-tables table.panel:visible:first").hide();
        $(".SSD-tables table.panel:visible:first").hide();
    }
    else {
        //either hide the next button or show 1st two again. :)
    }
    return false;
});
$("#prev").click(function(){
    if ($(".SSD-tables table.panel:visible:first").prev().length != 0){
        var curVisLen = $(".SSD-tables table.panel:visible").length;
        $(".SSD-tables table.panel:visible:first").prev().show();
        $(".SSD-tables table.panel:visible:first").prev().show();
        $(".SSD-tables table.panel:visible:last").hide();
        if(curVisLen == 10){
        $(".SSD-tables table.panel:visible:last").hide();
        }
    }
    else {
        //either hide the button or show last two divs
    }
    return false;
});

 //next and prev button-CED

$(".CED-tables table.panel").each(function(CED_numerdisplay) {
if (CED_numerdisplay > 9){
$(this).hide();
console.log(CED_numerdisplay);
}
});
$("#next-CED").click(function(){
    if ($(".CED-tables table.panel:visible:last").next().length != 0){
        $(".CED-tables table.panel:visible:last").next().show();
        $(".CED-tables table.panel:visible:last").next().show();
        $(".CED-tables table.panel:visible:first").hide();
        $(".CED-tables table.panel:visible:first").hide();
    }
    else {
        //either hide the next button or show 1st two again. :)
    }
    return false;
});
$("#prev-CED").click(function(){
    if ($(".CED-tables table.panel:visible:first").prev().length != 0){
        var curVisLen = $(".SSD-tables table.panel:visible").length;
        $(".CED-tables table.panel:visible:first").prev().show();
        $(".CED-tables table.panel:visible:first").prev().show();
        $(".CED-tables table.panel:visible:last").hide();
        if(curVisLen == 10){
        $(".CED-tables table.panel:visible:last").hide();
        }
    }
    else {
        //either hide the button or show last two divs
    }
    return false;
});


    // hide student have exams in same day
    $(".hide").click(function(){
        $(".SSD-tables").hide();
    });
        // hide student -CED
        $(".hide-CED").click(function(){
        $(".CED-tables").hide();
    });

    // search ajax
    $('#Search-btn').click(function(event) {
        console.log("click event fired");
        event.preventDefault();
        var searchtxt =$('#search').val();
        if($.trim(searchtxt)!= ''){
            $.ajax({
                url:'SSD_search.php', 
                method:"POST",
                data:{search:searchtxt},
                success:function(data)
                {
                    $('#SSD_search').html(data);
                    console.log(data);
                }
            });
        }
    });
    // hghghg
    $('#U_times').click(function(event) {
        console.log("click event fired");
        event.preventDefault();
        var subjectt =$('#sameT-subject').val();
        var timee =$('#sameT-times').val();
        // var subjectt="" ; var timee="" ;
        // $('#sameT-subject').change(function(){
        //     var subjectt =$(this).val();  
        // });
        // $('#sameT-timest').change(function(){
        //     var timee =$(this).val();  
        // });

        // if( $('#sameT-subject :selected').length > 0){
        //   var Subjectt = [];
        //  $('#sameT-subject :selected').each(function(i, selected) {
        //   Subjectt[i] = $(selected).val();
        //    });
        //      }
        //   if( $('#sameT-times :selected').length > 0){
        //        var timee = [];
        //      $('#sameT-times :selected').each(function(i, selected) {
        //        timee[i] = $(selected).val();
        //            });
        //                 }
        // console.log(subjectt);
        // console.log(timee);
            $.ajax({
                url:'processind_sst.php', 
                method:"POST",
                data:{subject:subjectt,time:timee},
                success:function(data)
                {
                    $('#stt').html(data);
                    $('#stt').html('ok');
                    console.log(data);
                }
            });
    });



    $('#search-CED').click(function(event) {
        console.log("click event fired");
        event.preventDefault();
        var txt =$('#textbox-CED').val();
        if( txt.trim()){
            $.ajax({
                url:'CED-Search.php',
                method:"POST",
                data:{TEXT_CED:txt},
                success:function(data)
                {
                    $('#CED_search').html(data);
                    console.log(data);
                }
            });
        }
    });


}); //ready done



//Processing ajax
    function myFunction() {
    // confirm('Are You Sure ?');
  $('#proform').submit(function(event) {
        console.log("click event fired");
        event.preventDefault();
        var x = document.getElementById("processing").value;
         $('#PSSD_INFO').hide();
        $('#load-img').show();
            $.ajax({
                url:"processing_SSD.php", 
                method:"POST",
                data:{processingg:x},
                success:function(data)
                {
                    $('#PSSD_INFO').html(data);
                    console.log(data);
                    $('#load-img').hide();
                    $('#PSSD_INFO').show();


                }
            });
        });
}
// processing selected subjects ajax
function myfunction2(){
    $('#PSSFORM').submit(function(event) {
                event.preventDefault();
    if( $('#PSSSS :selected').length > 0){
        var selectedSubject = [];
        $('#PSSSS :selected').each(function(i, selected) {
            selectedSubject[i] = $(selected).val();
        });
                $.ajax({
    url:"processing_selected.php",
    method:"POST",
   data: {'SUB':selectedSubject},
    success:function(data)
    {
   console.log(data);
   $('#PSSD_INFO').html(data);
    }           
});
    }
});
}
//selected subjects agin - ajax
function myFunction3(){
    $('#SPSSFORM').submit(function(event) {
                event.preventDefault();
    if( $('#SPSS :selected').length > 0){
        var selectedSubject = [];
        $('#SPSS :selected').each(function(i, selected) {
            selectedSubject[i] = $(selected).val();
        });
                $.ajax({
    url:"processing_selected.php",
    method:"POST",
   data: {'SUB':selectedSubject},
    success:function(data)
    {
   console.log(data);
   $('#PSSD_INFO').html(data);
    }        
});
    }
});
}

//subjects  processing-ajax
    function myFunction4() {
  $('#sub-pro-form').submit(function(event) {
        console.log("click event fired");
        event.preventDefault();
        var x = document.getElementById("sub-pro").value;
         $('#PSSD_INFO').hide();
        $('#load-img').show();
            $.ajax({
                url:"to-subjects-processing.php", 
                method:"POST",
                data:{processingg:x},
                success:function(data)
                {
                    $('#PSSD_INFO').html(data);
                    console.log(data);
                    $('#load-img').hide();
                    $('#PSSD_INFO').show();


                }
            });
        });
}



//update times
// function upadate_time() {
//     // confirm('Are You Sure ?');
//   $('#Psametime-sub').submit(function(event) {
//         console.log("click event fired")
//         event.preventDefault();
//         var x = document.getElementById("sameT-subject").value;
//         var y=document.getElementById("sameT-times").value;
//         // if( $('#sameT-subject :selected').length > 0){
//         //     var Subjectt = [];
//         //     $('#sameT-subject :selected').each(function(i, selected) {
//         //         Subjectt[i] = $(selected).val();
//         //     });
//         // }
//         //     if( $('#sameT-times :selected').length > 0){
//         //         var timee = [];
//         //         $('#sameT-times :selected').each(function(i, selected) {
//         //             timeee[i] = $(selected).val();
//         //         });
//         //     }
//             $.ajax({
//                 url:"processind_sst.php", 
//                 method:"POST",
//                 data:{subject:Subjectt
//                 , time:timeee},
//                 success:function(data)
//                 {
//                     // $('#PSSD_INFO').html(data);
//                     console.log(data);
//                     // alert(data);
//                     $('#PSSD_INFO').html(data);

//                 }
//             });
//         });
// }






