$(function() {  
  $('.file-input').change(function() {
    $file = $(this).val();
    $file = $file.replace(/.*[\/\\]/, ''); //grab only the file name not the path
    $('.filename-container').append("<span  class='filename'>" + $file + "</span>").show();
  });

  setBindings();
  
  $('.tab-container').css({"padding-left":"65%"});

  //in this call keepWidth is sent as undefined
  arrangeTabs($('.tab-container .tab-strip'));
});

//redirect from faq to mail tab
$('.write-to-us').click(function(){
  $('#faq').removeClass('active');
  $('#mail').addClass('active');
  $('.tab-container').css({"padding-left":"65%"});
  $('.mail').removeClass('hide');
  $('.chat').addClass('hide');
  $('.faq').addClass('hide');
});


//show message sent success alert
$('.send-mail').click(function(){
  $('.alert').removeClass('hide');
});


//function to set active and hidden tabs out of three and handle switching of tabs
function setBindings() {
  $('.tab-container .tab-strip .tab .tab-button').click(function() {
    
    $(this)
    .parent().parent()
    .children('.tab')
    .removeClass('active');
    $(this).parent().addClass('active');
    
    if($(this).parent().attr('id') == "mail")
    {
      $(this).parent().parent().parent().css({"padding-left":"65%"});
      $('.mail').removeClass('hide');
      $('.chat').addClass('hide');
      $('.faq').addClass('hide');  
    }
    else if($(this).parent().attr('id') == "faq")
    {
      $(this).parent().parent().parent().css({"padding-left":"0%"});
      $('.mail').addClass('hide');
      $('.chat').addClass('hide');
      $('.faq').removeClass('hide');
    }
    else
    {
      $(this).parent().parent().parent().css({"padding-left": "65%"});
      $('.mail').addClass('hide');
      $('.chat').removeClass('hide');
      $('.faq').addClass('hide');
    }
  });
  

  //handle tab close button
  $('.tab-container .tab-strip .tab .tab-close').click(function() {
   
    $(this).parent().animate(
      { 
        width: 'hide',
        marginLeft: 'hide',
        marginRight: 'hide',
        paddingLeft: 'hide',
        paddingRight: 'hide',
        borderLeft: 'hide',
        borderRigh: 'hide'
      }, 300, function() {
        var tabStrip = $(this).parent();
        $(this).remove();
      });
     $(this).parent().animate({
      opacity: 'hide'
    }, { duration: 300, queue: false });
  });
}

//function to handle the max width of tabs on every refresh! 
function arrangeTabs(tabStrip, keepWidth){
  if(!keepWidth) {
   tabStrip.children('.tab').css('max-width', (100 / (tabStrip.children().length - 1)) + '%');
  }
}