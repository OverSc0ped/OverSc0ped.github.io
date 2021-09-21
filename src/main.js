const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content');
const credits = document.querySelector('#credits');
const creditsContent = document.querySelector('#credits-content');

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About This Robot',
        width: '400px',
        height: '400px',
        top: '50',
        right: '50',
        bottom: '50',
        left: '50',
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },
        onblur: function () {
            this.setBackground('#777');
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact This Robot',
        backgroundColor: '#00aa00',
        width: '400px',
        height: '400px',
        top: '150',
        right: '50',
        bottom: '50',
        left: '250',
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },
        onblur: function () {
            this.setBackground('#777');
        }
    })
})

credits.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact This Robot',
        backgroundColor: '#00aa00',
        width: '400px',
        height: '400px',
        top: '25',
        right: '125',
        bottom: '50',
        left: '250',
        mount: creditsContent,
        onfocus: function () {
            this.setBackground('#00aa00');
        },
        onblur: function () {
            this.setBackground('#777');
        }
    })
})
