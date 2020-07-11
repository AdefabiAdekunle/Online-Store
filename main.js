$(document).ready(()=>{
    $("#item").on('click',()=>{
    $("#show1").toggleClass('p-1') 
    $('.a').fadeToggle()   
    })
    $("#prev").on('click',()=>{
      var a1=$('a.a1').attr("href").split('')
      var a2=$('a.a2').attr("href").split('')
      //alert($('a.aprev').attr('class'))
      if($('a.a1').attr('class').includes('active')===true){
      $('a.aprev').attr("href",'index1.html')
      }
     else if($('a.a2').attr('class').includes('active')===true){
        a2[5]='1'
        let newa=a2.join('')
        $('a.aprev').attr("href",newa)
        }
    })
    $("#next").on('click',()=>{
        var a1=$('a.a1').attr("href").split('')
        var a2=$('a.a2').attr("href").split('')
        //alert($('a.aprev').attr('class'))
        if($('a.a1').attr('class').includes('active')===true){
        a1[5]='2'
        let newa=a1.join('')
        $('a.anext').attr("href",newa)
        }
       else if($('a.a2').attr('class').includes('active')===true){
        $('a.anext').attr("href",'index2.html')
          }
      })
})