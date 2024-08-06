var ideologies = {"econ":50,"dipl":50,"govt":50,"scty":50}

ideologyData = [
    {
        "name": "Anarcho-Communism",
        "stats": {
            "econ": 100,
            "dipl": 50,
            "govt": 100,
            "scty": 90
        }
    },
    {
        "name": "Libertarian Communism",
        "stats": {
            "econ": 100,
            "dipl": 70,
            "govt": 80,
            "scty": 80
        }
    },
    {
        "name": "Trotskyism",
        "stats": {
            "econ": 100,
            "dipl": 100,
            "govt": 60,
            "scty": 80
        }
    },
    {
        "name": "Marxism",
        "stats": {
            "econ": 100,
            "dipl": 70,
            "govt": 40,
            "scty": 80
        }
    },
    {
        "name": "De Leonism",
        "stats": {
            "econ": 100,
            "dipl": 30,
            "govt": 30,
            "scty": 80
        }
    },
    {
        "name": "Leninism",
        "stats": {
            "econ": 100,
            "dipl": 40,
            "govt": 20,
            "scty": 70
        }
    },
    {
        "name": "Stalinism/Maoism",
        "stats": {
            "econ": 100,
            "dipl": 20,
            "govt": 0,
            "scty": 60
        }
    },
    {
        "name": "Religious Communism",
        "stats": {
            "econ": 100,
            "dipl": 50,
            "govt": 30,
            "scty": 30
        }
    },
    {
        "name": "State Socialism",
        "stats": {
            "econ": 80,
            "dipl": 30,
            "govt": 30,
            "scty": 70
        }
    },
    {
        "name": "Theocratic Socialism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 30,
            "scty": 20
        }
    },
    {
        "name": "Religious Socialism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 70,
            "scty": 20
        }
    },
    {
        "name": "Democratic Socialism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 50,
            "scty": 80
        }
    },
    {
        "name": "Revolutionary Socialism",
        "stats": {
            "econ": 80,
            "dipl": 20,
            "govt": 50,
            "scty": 70
        }
    },
    {
        "name": "Libertarian Socialism",
        "stats": {
            "econ": 80,
            "dipl": 80,
            "govt": 80,
            "scty": 80
        }
    },
    {
        "name": "Anarcho-Syndicalism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 100,
            "scty": 80
        }
    },
    {
        "name": "Left-Wing Populism",
        "stats": {
            "econ": 60,
            "dipl": 40,
            "govt": 30,
            "scty": 70
        }
    },
    {
        "name": "Theocratic Distributism",
        "stats": {
            "econ": 60,
            "dipl": 40,
            "govt": 30,
            "scty": 20
        }
    },
    {
        "name": "Distributism",
        "stats": {
            "econ": 60,
            "dipl": 50,
            "govt": 50,
            "scty": 20
        }
    },
    {
        "name": "Social Liberalism",
        "stats": {
            "econ": 60,
            "dipl": 60,
            "govt": 60,
            "scty": 80
        }
    },
    {
        "name": "Christian Democracy",
        "stats": {
            "econ": 60,
            "dipl": 60,
            "govt": 50,
            "scty": 30
        }
    },
    {
        "name": "Social Democracy",
        "stats": {
            "econ": 60,
            "dipl": 70,
            "govt": 60,
            "scty": 80
        }
    },
    {
        "name": "Progressivism",
        "stats": {
            "econ": 60,
            "dipl": 80,
            "govt": 60,
            "scty": 100
        }
    },
    {
        "name": "Anarcho-Mutualism",
        "stats": {
            "econ": 60,
            "dipl": 50,
            "govt": 100,
            "scty": 70
        }
    },
    {
        "name": "National Totalitarianism",
        "stats": {
            "econ": 50,
            "dipl": 20,
            "govt": 0,
            "scty": 50
        }
    },
    {
        "name": "Global Totalitarianism",
        "stats": {
            "econ": 50,
            "dipl": 80,
            "govt": 0,
            "scty": 50
        }
    },
    {
        "name": "Technocracy",
        "stats": {
            "econ": 60,
            "dipl": 60,
            "govt": 20,
            "scty": 70
        }
    },
    {
        "name": "Centrist",
        "stats": {
            "econ": 50,
            "dipl": 50,
            "govt": 50,
            "scty": 50
        }
    },
    {
        "name": "Liberalism",
        "stats": {
            "econ": 50,
            "dipl": 60,
            "govt": 60,
            "scty": 60
        }
    },
    {
        "name": "Religious Anarchism",
        "stats": {
            "econ": 50,
            "dipl": 50,
            "govt": 100,
            "scty": 20
        }
    },
    {
        "name": "Right-Wing Populism",
        "stats": {
            "econ": 40,
            "dipl": 30,
            "govt": 30,
            "scty": 30
        }
    },
    {
        "name": "Moderate Conservatism",
        "stats": {
            "econ": 40,
            "dipl": 40,
            "govt": 50,
            "scty": 30
        }
    },
    {
        "name": "Reactionary",
        "stats": {
            "econ": 40,
            "dipl": 40,
            "govt": 40,
            "scty": 10
        }
    },
    {
        "name": "Social Libertarianism",
        "stats": {
            "econ": 60,
            "dipl": 70,
            "govt": 80,
            "scty": 70
        }
    },
    {
        "name": "Libertarianism",
        "stats": {
            "econ": 40,
            "dipl": 60,
            "govt": 80,
            "scty": 60
        }
    },
    {
        "name": "Anarcho-Egoism",
        "stats": {
            "econ": 40,
            "dipl": 50,
            "govt": 100,
            "scty": 50
        }
    },
    {
        "name": "Nazism",
        "stats": {
            "econ": 40,
            "dipl": 0,
            "govt": 0,
            "scty": 5
        }
    },
    {
        "name": "Autocracy",
        "stats": {
            "econ": 50,
            "dipl": 20,
            "govt": 20,
            "scty": 50
        }
    },
    {
        "name": "Fascism",
        "stats": {
            "econ": 40,
            "dipl": 20,
            "govt": 20,
            "scty": 20
        }
    },
    {
        "name": "Capitalist Fascism",
        "stats": {
            "econ": 20,
            "dipl": 20,
            "govt": 20,
            "scty": 20
        }
    },
    {
        "name": "Conservatism",
        "stats": {
            "econ": 30,
            "dipl": 40,
            "govt": 40,
            "scty": 20
        }
    },
    {
        "name": "Neo-Liberalism",
        "stats": {
            "econ": 30,
            "dipl": 30,
            "govt": 50,
            "scty": 60
        }
    },
    {
        "name": "Classical Liberalism",
        "stats": {
            "econ": 30,
            "dipl": 60,
            "govt": 60,
            "scty": 80
        }
    },
    {
        "name": "Authoritarian Capitalism",
        "stats": {
            "econ": 20,
            "dipl": 30,
            "govt": 20,
            "scty": 40
        }
    },
    {
        "name": "State Capitalism",
        "stats": {
            "econ": 20,
            "dipl": 50,
            "govt": 30,
            "scty": 50
        }
    },
    {
        "name": "Neo-Conservatism",
        "stats": {
            "econ": 20,
            "dipl": 20,
            "govt": 40,
            "scty": 20
        }
    },
    {
        "name": "Fundamentalism",
        "stats": {
            "econ": 20,
            "dipl": 30,
            "govt": 30,
            "scty": 5
        }
    },
    {
        "name": "Libertarian Capitalism",
        "stats": {
            "econ": 20,
            "dipl": 50,
            "govt": 80,
            "scty": 60
        }
    },
    {
        "name": "Market Anarchism",
        "stats": {
            "econ": 20,
            "dipl": 50,
            "govt": 100,
            "scty": 50
        }
    },
    {
        "name": "Objectivism",
        "stats": {
            "econ": 10,
            "dipl": 50,
            "govt": 90,
            "scty": 40
        }
    },
    {
        "name": "Totalitarian Capitalism",
        "stats": {
            "econ": 0,
            "dipl": 30,
            "govt": 0,
            "scty": 50
        }
    },
    {
        "name": "Ultra-Capitalism",
        "stats": {
            "econ": 0,
            "dipl": 40,
            "govt": 50,
            "scty": 50
        }
    },
    {
        "name": "Anarcho-Capitalism",
        "stats": {
            "econ": 0,
            "dipl": 50,
            "govt": 100,
            "scty": 50
        }
    }
];

function findIdeology(){
  let ideoname = ""
  let ideodist = Infinity
  for(i=0;i<ideologyData.length;i++){
    let dist = 0
    dist += Math.pow(Math.abs(ideologyData[i].stats.econ - ideologies.econ), 2)
    dist += Math.pow(Math.abs(ideologyData[i].stats.dipl - ideologies.dipl), 2)
    dist += Math.pow(Math.abs(ideologyData[i].stats.govt - ideologies.govt), 1.73856063)
    dist += Math.pow(Math.abs(ideologyData[i].stats.scty - ideologies.scty), 1.73856063)
    if(dist<ideodist){
      ideodist=dist
      ideoname = ideologyData[i].name
    }
  }
  return ideoname
}

function refreshPosition(pos, num){
  let percent = ((pos-document.getElementById(document.getElementsByClassName("axis")[num].children[1].id).offsetLeft)/((document.getElementById(document.getElementsByClassName("axis")[num].children[1].id).clientWidth)+(document.getElementById(document.getElementsByClassName("axis")[num].children[2].id).clientWidth))*100)
  if(percent<0){percent=0}
  if(percent>100){percent=100}
  percent = Math.round(percent)
  if(num%2==0){
    ideologies[Object.keys(ideologies)[num]] = percent
  }
  if(num%2==1){
    ideologies[Object.keys(ideologies)[num]] = 100-percent
  }
  document.getElementById("ideology-label").innerHTML = findIdeology()
  return percent
}

function listMousePosition(num){
  document.getElementById(document.getElementsByClassName("axis")[num].children[2].id).style.width = 100-refreshPosition(window.event.clientX, num)+"%"
  document.getElementById(document.getElementsByClassName("axis")[num].children[2].children[0].id).innerHTML = `${100-refreshPosition(window.event.clientX, num)}`+"%"
  document.getElementById(document.getElementsByClassName("axis")[num].children[1].id).style.width = refreshPosition(window.event.clientX, num)+"%"
  document.getElementById(document.getElementsByClassName("axis")[num].children[1].children[0].id).innerHTML = `${refreshPosition(window.event.clientX, num)}`+"%"
}

function forceMousePosition(num,val){
  if(num%2==0){
    document.getElementById(document.getElementsByClassName("axis")[num].children[2].id).style.width = `${100-val}`+"%"
    document.getElementById(document.getElementsByClassName("axis")[num].children[2].children[0].id).innerHTML = `${100-val}`+"%"
    document.getElementById(document.getElementsByClassName("axis")[num].children[1].id).style.width = `${val}`+"%"
    document.getElementById(document.getElementsByClassName("axis")[num].children[1].children[0].id).innerHTML = `${val}`+"%"
  }
  if(num%2!=0){
    document.getElementById(document.getElementsByClassName("axis")[num].children[2].id).style.width = `${val}`+"%"
    document.getElementById(document.getElementsByClassName("axis")[num].children[2].children[0].id).innerHTML = `${val}`+"%"
    document.getElementById(document.getElementsByClassName("axis")[num].children[1].id).style.width = `${100-val}`+"%"
    document.getElementById(document.getElementsByClassName("axis")[num].children[1].children[0].id).innerHTML = `${100-val}`+"%"
  }
  ideologies[Object.keys(ideologies)[num]] = val
  document.getElementById("ideology-label").innerHTML = findIdeology()
}

function enableSlider(axis) {
  const axisElement = document.getElementsByClassName("axis")[axis];
  let insideSlider = false;
  let movingSlider = false;
  axisElement.addEventListener("mouseenter", () => {insideSlider = true;})
  axisElement.addEventListener("mouseleave", () => {insideSlider = false;})
  axisElement.addEventListener("mouseup", () => {movingSlider = false;})
  axisElement.addEventListener("mousedown", () => {movingSlider = true})
  axisElement.addEventListener("mousemove", () => {
    if (insideSlider && movingSlider){
      listMousePosition(axis)};
    }
  );
}

enableSlider(0);
enableSlider(1);
enableSlider(2);
enableSlider(3);

/* AUTO FILL SECTION */

document.getElementById("anarcho-communism-button").addEventListener("click",() => {
 let i=0
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("libertarian-communism-button").addEventListener("click",() => {
 let i=1
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("trotskyism-button").addEventListener("click",() => {
 let i=2
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("marxism-button").addEventListener("click",() => {
 let i=3
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("de-leonism-button").addEventListener("click",() => {
 let i=4
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("leninism-button").addEventListener("click",() => {
 let i=5
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("stalinism/maoism-button").addEventListener("click",() => {
 let i=6
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("religious-communism-button").addEventListener("click",() => {
 let i=7
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("state-socialism-button").addEventListener("click",() => {
 let i=8
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("theocratic-socialism-button").addEventListener("click",() => {
 let i=9
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("religious-socialism-button").addEventListener("click",() => {
 let i=10
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("democratic-socialism-button").addEventListener("click",() => {
 let i=11
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("revolutionary-socialism-button").addEventListener("click",() => {
 let i=12
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("libertarian-socialism-button").addEventListener("click",() => {
 let i=13
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("anarcho-syndicalism-button").addEventListener("click",() => {
 let i=14
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("left-wing-populism-button").addEventListener("click",() => {
 let i=15
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("theocratic-distributism-button").addEventListener("click",() => {
 let i=16
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("distributism-button").addEventListener("click",() => {
 let i=17
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("social-liberalism-button").addEventListener("click",() => {
 let i=18
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("christian-democracy-button").addEventListener("click",() => {
 let i=19
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("social-democracy-button").addEventListener("click",() => {
 let i=20
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("progressivism-button").addEventListener("click",() => {
 let i=21
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("-anarcho-mutualism-button").addEventListener("click",() => {
 let i=22
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("national-totalitarianism-button").addEventListener("click",() => {
 let i=23
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("global-totalitarianism-button").addEventListener("click",() => {
 let i=24
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("technocracy-button").addEventListener("click",() => {
 let i=25
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("centrist-button").addEventListener("click",() => {
 let i=26
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("liberalism-button").addEventListener("click",() => {
 let i=27
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("religious-anarchism-button").addEventListener("click",() => {
 let i=28
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("right-wing-populism-button").addEventListener("click",() => {
 let i=29
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("moderate-conservatism-button").addEventListener("click",() => {
 let i=30
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("reactionary-button").addEventListener("click",() => {
 let i=31
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("social-libertarianism-button").addEventListener("click",() => {
 let i=32
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("libertarianism-button").addEventListener("click",() => {
 let i=33
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("anarcho-egoism-button").addEventListener("click",() => {
 let i=34
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("nazism-button").addEventListener("click",() => {
 let i=35
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("autocracy-button").addEventListener("click",() => {
 let i=36
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("fascism-button").addEventListener("click",() => {
 let i=37
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("capitalist-fascism-button").addEventListener("click",() => {
 let i=38
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("conservatism-button").addEventListener("click",() => {
 let i=39
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("neo-liberalism-button").addEventListener("click",() => {
 let i=40
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("classical-liberalism-button").addEventListener("click",() => {
 let i=41
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("authoritarian-capitalism-button").addEventListener("click",() => {
 let i=42
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("state-capitalism-button").addEventListener("click",() => {
 let i=43
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("neo-conservatism-button").addEventListener("click",() => {
 let i=44
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("fundamentalism-button").addEventListener("click",() => {
 let i=45
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("libertarian-capitalism-button").addEventListener("click",() => {
 let i=46
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("market-anarchism-button").addEventListener("click",() => {
 let i=47
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("objectivism-button").addEventListener("click",() => {
 let i=48
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("totalitarian-capitalism-button").addEventListener("click",() => {
 let i=49
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("ultra-capitalism-button").addEventListener("click",() => {
 let i=50
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})

document.getElementById("anarcho-capitalism-button").addEventListener("click",() => {
 let i=51
 forceMousePosition(0,ideologyData[i].stats.econ)
 forceMousePosition(1,ideologyData[i].stats.dipl)
 forceMousePosition(2,ideologyData[i].stats.govt)
 forceMousePosition(3,ideologyData[i].stats.scty)
})