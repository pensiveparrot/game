
// document.getElementById('player').onload = function (e){

function onceLoaded(){
    var audio = document.getElementById("player");

    audio.volume = 0.05;
    document.addEventListener('contextmenu', event => event.preventDefault());



 
    document.onkeydown = function (e) {
        if (e.repeat) { return }
        // disable F12 & F11 key & F10 key
        if(e.key === 'F12' || e.key==='F11' || e.key==='F10') {
            e.preventDefault();
            return false;
        }


        // disable I key
        if(e.ctrlKey && e.shiftKey && e.key == 'I'){
            e.preventDefault();
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.key === 'U') {
            e.preventDefault();
            return false;
        }
    }
    document.onkeyup = function (e) {
        if (e.repeat) { return }
        // disable F12 & F11 key & F10 key
        if(e.key === 'F12' || e.key==='F11' || e.key==='F10') {
            e.preventDefault();
            return false;
        }


        // disable I key
        if(e.ctrlKey && e.shiftKey && e.key == 'I'){
            e.preventDefault();
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.key === 'U') {
            e.preventDefault();
            return false;
        }
    
    }

    var color = '#FFD700';
    var maxParticles = 80;
    
    // ParticlesJS Config.
    particlesJS('particles-js', {
      'particles': {
        'number': {
          'value': maxParticles,
          'density': {
            'enable': true,
            'value_area': (maxParticles * 10) * 2
          }
        },
        'color': {
          'value': color
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': color,
          'opacity': 1,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 2,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'grab'
          },
          'onclick': {
            'enable': true,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 140,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true
    });

    
}
function renderHome(){
  document.getElementById('logininput').style.visibility='hidden';
  document.getElementById('registerinput').style.visibility='hidden';
  document.getElementById('register').style.display = 'flex';
   document.getElementById('register').style.right = "30%";
  document.getElementById('login').style.right ="50%"
  document.getElementById('settings').style.display = 'flex';
  document.getElementById('backbutton').style.visibility= 'hidden';
  document.getElementById('login').style.display = 'flex';
}

function handleLogin(){
  let isBackButtonVisible = document.getElementById('backbutton');

if(window.getComputedStyle(isBackButtonVisible).visibility==="hidden"){
  document.getElementById('register').style.display = 'none';
  document.getElementById('settings').style.display = 'none';
  let loginButton = document.getElementById('login');
  loginButton.style.right = "40%";
  let container = document.getElementById('logininput');
  container.style.visibility ="visible";
  let backbutton = document.getElementById('backbutton');
  backbutton.style.visibility="visible";
  var loginUpdateButton = document.getElementById('login');
  
}
else{
  loginUpdateButton.onclick = handleDetails();
}

}
function handleDetails(){
  console.log('not implemented!@!!!'
  );
}


function handleRegister(){
  let isBackButtonVisible = document.getElementById('backbutton');

if(window.getComputedStyle(isBackButtonVisible).visibility==="hidden"){
    document.getElementById('login').style.display = 'none';
    document.getElementById('settings').style.display = 'none';
    let registerButton = document.getElementById('register');
    registerButton.style.right = "40%";
    
  let container =  document.getElementById('registerinput');
  container.style.visibility = "visible";
  var registerUpdateButton = document.getElementById('register');
  let backbutton = document.getElementById('backbutton');
  backbutton.style.visibility="visible";
  }

  else
  {
    registerUpdateButton.onclick = newUser();

  }
}
const bcrypt = require("bcrypt");
var db = require('../../../mysql/data/game');
function newUser() {

  app.use(express.json())
  //middleware to read req.body.<params>
  //CREATE USER
  app.post("/createUser", function (req,res)  {
    if(document.getElementById('register-username'.value!=null && document.getElementById('register-password').value)!=null){}
  const user = document.getElementById('register-username').value;
  const hashedPassword =  bcrypt.hash(document.getElementById('register-password').value,10);
  db.getConnection( async (err, connection) => {
   if (err) throw (err)
   const sqlSearch = "SELECT * FROM userTable WHERE user = ?"
   const search_query = mysql.format(sqlSearch,[user])
   const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)"
   const insert_query = mysql.format(sqlInsert,[user, hashedPassword])
   // ? will be replaced by values
   // ?? will be replaced by string
   await connection.query (search_query, async (err, result) => {
    if (err) throw (err)
    console.log("------> Search Results")
    console.log(result.length)
    if (result.length != 0) {
     connection.release()
     console.log("------> User already exists")
     res.sendStatus(409) 
    } 
    else {
     await connection.query (insert_query, (err, result)=> {
     connection.release()
     if (err) throw (err)
     console.log ("--------> Created new User")
     console.log(result.insertId)
     res.sendStatus(201)
    })
   }
  }) //end of connection.query()
  }) //end of db.getConnection()
  }) //end of app.post()
  
  
}

