
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
loginCount=0;
function handleLogin(){
if(loginCount==0)
{
  document.getElementById('register').remove();
  document.getElementById('settings').remove();
  let loginButton = document.getElementById('login');
  loginButton.style.right = "40%";
  let container = document.getElementById('logininput');
  container.style.visibility ="visible";
  var loginUpdateButton = document.getElementById('login');
  loginCount=loginCount+1;
}
else{
  loginUpdateButton.onclick = handleDetails();
}

}
function handleDetails(){
  
}

registerCount=0;
function handleRegister(){
  
  if(registerCount==0){
    document.getElementById('login').remove();
    document.getElementById('settings').remove();
    let registerButton = document.getElementById('register');
    registerButton.style.right = "40%";
  let container =  document.getElementById('registerinput');
  container.style.visibility = "visible";
  var registerUpdateButton = document.getElementById('register');
  registerCount=registerCount+1;
  }

  else
  {
    registerUpdateButton.onclick = newUser();

  }
}

function newUser() {

  console.log('register not implemented!');
}

    // document.onloadeddata
// }   
    // disable right click
