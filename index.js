const section = document.createElement('section')
section.style.width = '500px'
section.style.margin = '0 auto'

const textDiv = document.createElement('div')
textDiv.classList.add('text')
textDiv.style.border = '2px solid red'
textDiv.style.borderRadius = '15px'
textDiv.style.textAlign = 'center'
textDiv.style.padding = '8px'
textDiv.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id magnifddsfsfsdfsdf gdfgdklngdkl kdfngkldfng dfkgndklngkld dflkgndklngl gndfnkjdfng dfgndklfnlw sdfmsdf,.s sdfmlwmfwe jsfldkmlsd'


document.body.append(section)


const link = document.createElement('div')
link.classList.add('link')

const intocodeLink = document.createElement('a')
intocodeLink.href = 'https://intocode.ru';
intocodeLink.textContent = 'Intocode'

const googleLink = document.createElement('a')
googleLink.href = 'https://www.google.com';
googleLink.textContent = 'Google'

const instaLink = document.createElement('a')
instaLink.href = 'https://www.instagram.com';
instaLink.textContent = 'Instagram'

link.append(intocodeLink, googleLink, instaLink)
link.style.display = 'flex'
link.style.justifyContent = 'space-between'
link.style.margin = '15px'


section.append(textDiv, link)

