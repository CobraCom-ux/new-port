/*==========================================================
    PARTICLES BACKGROUND
==========================================================*/

tsParticles.load("particles-js",{

    fullScreen:{
        enable:false
    },

    background:{
        color:{
            value:"transparent"
        }
    },

    fpsLimit:60,

    particles:{

        number:{
            value:70,
            density:{
                enable:true,
                area:900
            }
        },

        color:{
            value:"#00D4FF"
        },

        shape:{
            type:"circle"
        },

        opacity:{
            value:0.35
        },

        size:{
            value:{
                min:1,
                max:4
            }
        },

        links:{
            enable:true,
            distance:160,
            color:"#00D4FF",
            opacity:.25,
            width:1
        },

        move:{
            enable:true,
            speed:1.5,
            direction:"none",
            random:false,
            straight:false,
            outModes:{
                default:"bounce"
            }
        }

    },

    interactivity:{

        events:{

            onHover:{
                enable:true,
                mode:"grab"
            },

            onClick:{
                enable:true,
                mode:"push"
            },

            resize:true

        },

        modes:{

            grab:{
                distance:180,
                links:{
                    opacity:.7
                }
            },

            push:{
                quantity:4
            }

        }

    },

    detectRetina:true

});
/*==========================================================
    PARTICLE ENHANCEMENTS
==========================================================*/

// Wait until the page is fully loaded
window.addEventListener("load", async () => {

    // Get the current particles container
    const container = tsParticles.domItem(0);

    if (!container) return;

    // Slow down movement for a premium feel
    container.options.particles.move.speed = 1.2;

    // Smooth opacity animation
    container.options.particles.opacity = {
        value: 0.35,
        animation: {
            enable: true,
            speed: 0.3,
            minimumValue: 0.15,
            sync: false
        }
    };

    // Smooth size animation
    container.options.particles.size = {
        value: {
            min: 1,
            max: 4
        },
        animation: {
            enable: true,
            speed: 2,
            minimumValue: 0.8,
            sync: false
        }
    };

    // Repulse on hover instead of hard movement
    container.options.interactivity.events.onHover.mode = "repulse";

    container.options.interactivity.modes.repulse = {
        distance: 120,
        duration: 0.4
    };

    // Limit FPS for smoother performance
    container.options.fpsLimit = 60;

    // Refresh particles with new options
    await container.refresh();

});

/*==========================================================
    WINDOW RESIZE
==========================================================*/

window.addEventListener("resize", () => {

    const container = tsParticles.domItem(0);

    if (container) {

        container.refresh();

    }

});

/*==========================================================
    CONSOLE BRANDING
==========================================================*/

console.log(
"%cParticles Loaded Successfully",
"color:#00D4FF;font-size:16px;font-weight:bold;"
);

console.log(
"%cMuhammad Abubakkar Portfolio",
"color:white;font-size:13px;"
);

/*==========================================================
    END OF PARTICLES.JS
==========================================================*/