const toggle = document.querySelector('#checkbox')
    toggle.addEventListener
    (
        'change', ()=>
        {
            if(toggle.checked) 
            {
                document.body.classList.add('darkmode')
            }
            else 
            {
                document.body.classList.remove('darkmode')
            }
        }
    )