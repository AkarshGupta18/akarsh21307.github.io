document.addEventListener('mousemove', function(e) {    //make colored cursor
    var customCursor = document.getElementById('custom-cursor');
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
  });

  
  const toggleSwitch = document.querySelector('.toggle-switch');
  const body = document.body;
  

var form = document.getElementById('form')    // get data for form submission in console
 
  form.addEventListener('submit',function(event) {
      event.preventDefault()
      var name=document.getElementById('name').value
      console.log(name)

      var email=document.getElementById('email').value
      console.log(email)

      var textarea=document.getElementById('textarea').value
      console.log(textarea)

      
  })


  
