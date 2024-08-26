const form = document.querySelector("#wishes-form")
   const submitButton = document.querySelector("#submit-btn")
   const cancelButton = document.querySelector("#cancel-btn")
   const closeButton = document.querySelector("#close-btn")

   const formResponseStore=document.querySelector("#loading_page")
   const scriptURL ='https://script.google.com/macros/s/AKfycbxuZusF1b-3R-UD14St0raizfeucMceq1-V4uaA79rM9DOVC4tVyd2ju5twfdnuIi5X/exec'

   form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     formResponseStore.innerHTML="Sending..... please wait"
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          formResponseStore.innerHTML="Thank you...! Your blessings are stored in my heart."
          submitButton.style.display = 'none'
          cancelButton.style.display='none'
          closeButton.style.display='block'
          form.reset()
         })
       .catch(error => {
        formResponseStore.innerHTML="Please try again..!"
         submitButton.disabled = false
       }
       )
   })