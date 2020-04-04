 const pad =()=>{}
 /*
 $('body').on("keypress", function (e) {
    e.preventDefault();
    e = e || window.event;	
    console.log('Keypress KeyCode: ' + e.keyCode);
  });
  */
  
  $('body').on("click", '.key-pad', function (e) {
    e = e || window.event;
    const id = $(this).attr('id');
    if(id%2 !== 0){
      console.log(`not an even number ${id}`);
      document.getElementById("screen").value +=id;
    }
  });
