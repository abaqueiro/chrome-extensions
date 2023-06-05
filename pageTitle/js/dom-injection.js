function g( id ){
    return document.getElementById()
}
function c( tagName, container ){
    var el = document.createElement(tagName)
    if ( container ){
        container.appendChild(el)
    }
    return el
}

var divRoot = c('div')
divRoot.className = 'extPageTitle'
document.body.insertBefore( divRoot, document.body.childNodes.item(0) )

var btnToggle = c('button',divRoot)
btnToggle.className = 'btnToggle'
var imgUrl = chrome.runtime.getURL('img/tabTitle-16.png')
btnToggle.innerHTML = '<img src="' + imgUrl + '" alt="Page Title">'

var divWindow = c('div',divRoot)
divWindow.className = 'window'
divWindow.style.display='none'
	var winBar = c('div',divWindow)
	winBar.className='winBar'
	winBar.innerHTML = 'Change page title'
		var btnClose = c('button',winBar)
		btnClose.className = 'btnClose'
		btnClose.innerHTML = 'x'
	var winBody = c('div',divWindow)
	winBody.className = 'winBody'
		var txtPageTitle = c('input',winBody)
		txtPageTitle.className='txtPageTitle'
		txtPageTitle.placeholder='type new page title'
		c('br',winBody)
		var chkSentry = c('input',winBody)
		chkSentry.type = 'checkbox'
		var lblSentry = c('span',winBody)
		lblSentry.className = 'tip-container'
		lblSentry.innerHTML = 'Install Sentry'
		var hintA = c('span',lblSentry)
		hintA.className = 'tip-text'
		hintA.innerHTML = 'useful when pages keep changing the title'

btnToggle.onclick = function(){
	btnToggle.style.display = 'none'
	divWindow.style.display = null
	txtPageTitle.focus()
}

btnClose.onclick = function(){
	btnToggle.style.display = null
	divWindow.style.display = 'none'
}

var pid = null
txtPageTitle.onchange = function(){
	document.title = txtPageTitle.value
	if ( pid ){
		clearInterval(pid)
	}
	if ( chkSentry.checked ){
		pid = setInterval( function(){
			if ( document.title != txtPageTitle.value ){
				document.title = txtPageTitle.value
			}
		}, 3000 )
	}
}

