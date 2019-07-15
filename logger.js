let logger
let nav
let slider
let container
let btnClean

function createContainer(){
    container.style.height              = "calc(100% - 2em)" 
    container.style.backgroundColor     = "antiquewhite"
    container.style.padding             = "1em"
    container.style.overflow            = "auto"
    container.style.whiteSpace          = "pre"
}
function createSlider(){
    slider.type = "range"
    slider.min  = 0
    slider.max  = 100
    slider.value= 100
}
function createCommands(){
    nav.style.position           = "relative"
    nav.style.top                = "0px"
    nav.style.left               = "0px"
    nav.style.width              = "100%"
    nav.style.height             = "40px"
    nav.style.backgroundColor    = "antiquewhite"
}

function createLogger(){
    if(document.body.querySelector('#logger')){
        document.body.removeChild(logger)
    }
    
    logger                          = document.createElement("div")

    nav = document.createElement("header")
    slider  = document.createElement("input")
    container = document.createElement("main")


    logger.id                       = "logger"
    logger.style.position           = "fixed"
    logger.style.zIndex             = "99999"
    logger.style.top                = "40px"
    logger.style.left               = "0px"
    logger.style.width              = "800px"
    logger.style.height             = "calc(100% - 40px)"
   
     
    createCommands()
    createSlider()
    createContainer()
   
    
    slider.oninput = function(){
        logger.opacity = `${this.value/100}`
    }

    btnClean = document.createElement("button")
    btnClean.value = "Clean"
    btnClean.textContent = "Clean"
    btnClean.onclick = function(){
        logger.content = ""
    }
  


    Object.defineProperty(logger, "opacity", {
        get: function() {
            return this.container.style.opacity;
        },
        set: function(value) {
            this.container.style.opacity = value
            return this.container.style.opacity
        }
    });


    Object.defineProperty(logger, "content", {
        get: function() {
            return this.container.textContent;
        },
        set: function(value) {
            this.container.textContent = value
            return this.container.textContent
        }
    });

    Object.defineProperty(logger, "append", {
        get: function() {
            return this.container.textContent;
        },
        set: function(value) {
            this.container.textContent += '\r\n'+value
            return this.container.textContent
        }
    });

    

    document.body.insertBefore(nav,document.body.children[0])
    document.body.appendChild(logger)
    nav.appendChild(slider)
    nav.appendChild(btnClean)
    
    logger.appendChild(container)

    logger.container = container
    logger.btnClean  = btnClean
    logger.slider    = slider
}

function clearLogger(){
    btnClean.click()
}

createLogger()
