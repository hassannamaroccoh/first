function click() {
    Event.preventDefault

    let apply = document.getElementById('app').value
    let pin = document.getElementById('code').value

    if(apply === 'hassan' && pin === '08167508501'){
        let output = document.getElementById('Successful')
        output.style.display = 'block'
    } else {
        let output = document.getElementById('cancel')
        output.style.display = 'flex'
    }

}



