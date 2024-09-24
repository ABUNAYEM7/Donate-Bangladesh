// shered-function
// getID-function
function getID (id){
    const getID = document.getElementById(id);
    return getID
}
// getInnerText-from-element
function getInText(id){
    const getText = document.getElementById(id).innerText;
    return getText;
}
// Shuffled-from-home-to-blog
blogBtn.addEventListener('click',function(){
    window.location.href='./Blog.html'
})
// declare-variable
const footerSection = getID('footerSection')

// // donate-button-eventListener

donateBTN.addEventListener('click',function(){
    donateBTN.classList.add('bg-Highlighter')
    historyBtn.classList.remove('bg-Highlighter')
    cardSection.classList.remove('hidden')
    historySection.classList.add('hidden')
    footerSection.classList.remove('hidden')

})


// history-button-eventlistener
historyBtn.addEventListener('click',function(){
    historyBtn.classList.add('bg-Highlighter')
    donateBTN.classList.remove('bg-Highlighter')
    cardSection.classList.add('hidden')
    historySection.classList.remove('hidden')
    footerSection.classList.add('hidden')
})


// dynamic function
function handleDonation(cardButtonID,cardInputId,cardBalanceId,subject){
    const cardDonateButtonID = getID(cardButtonID)
    const cardInput = getID(cardInputId)
    const historySection = getID('historySection')
    const defaultText = getID('defaultText')
    // add event listener
    cardDonateButtonID.addEventListener('click',function(){
        const cardInputValue =parseFloat(cardInput.value)
        const cardBalanceAmount = parseFloat(getInText(cardBalanceId))
        const navBalance = parseFloat(getInText('navBalance'))

        // validation-check
        if(isNaN(cardInputValue) || cardInputValue <= 0){
            alert('Invalid Amount')
            cardInput.value = "";
            return;
        }else if(cardInputValue > navBalance){
            alert('Invalid Amount')
            cardInput.value = "";
            return;
        }
            else{
                // show-modal
                my_modal_1.showModal()
                  // calculation-amount
                const increaseCardBalance = cardInputValue + cardBalanceAmount;
                const decreaseNavAmount = navBalance - cardInputValue;
                  // implement-increase-decrease
                document.getElementById(cardBalanceId).innerText = increaseCardBalance.toFixed(2);
                document.getElementById('navBalance').innerText = decreaseNavAmount.toFixed(2);
                  // clean the input field
                cardInput.value = "";
                  // create element for history
                const div = document.createElement('div')
                div.innerHTML = `<div class="w-full flex flex-col shadow-xl      gap-2 p-3 border-2 rounded-lg my-2">                          
                <h3 class="text-2xl font-bold text-primary">${cardInputValue} Taka is donated for ${subject}</h3>
                <p class="text-xl font-semibold text-secondary">${new Date()}</p>                        
                </div>`

                historySection.appendChild(div)
                defaultText.classList.add('hidden')
            }

    })
}

handleDonation ('cardDonateButtonID1','cardDonateInput1','cardBalance1','Flood Relief in Noakhali, Bangladesh')
handleDonation ('cardDonateButtonID2','cardDonateInput2','cardBalance2','Flood Relief in Feni, Bangladesh')
handleDonation ('cardDonateButtonID3','cardDonateInput3','cardBalance3', 'Aid for Injured in the Quota Movement' )

