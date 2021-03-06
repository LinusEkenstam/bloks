/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
    particles: {
        color: '#ffde00',
        shape: 'circle',
        opacity: 1,
        size: 1.5,
        size_random: true,
        nb: 80,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 0.5,
            width: 1,
            condensed_mode: {
                enable: true,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 200
        },
        mode: 'grab'
    },
    retina_detect: true
});