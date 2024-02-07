 // finding elements 

 const fontSize = document.querySelector('#selectFontSize')
 const bgColor = document.querySelector('#selectBackgroundColor')
 const fontFamily = document.querySelector('#selectFontFamily');
 const resetButton = document.querySelector('button')
 const ppp = document.querySelector('.para')
 const main = document.querySelector('body')
 

 // starting event listener w/ function 

 fontSize.addEventListener('change', fontSizeChange);

 function fontSizeChange(event) {
     const updatedFontSize = event.target.value;
     main.style.fontSize = updatedFontSize;
     localStorage.setItem('fs', updatedFontSize)
 }


 bgColor.addEventListener('change', bgChange)

 function bgChange(event) {
     const updatedBGC = event.target.value;
     main.style.backgroundColor = updatedBGC;
     localStorage.setItem('bgc', updatedBGC)
 }


 fontFamily.addEventListener('change', fontFamilyChange)

 function fontFamilyChange(event) {
     const updatedfontFamily = event.target.value;
     main.style.fontFamily = updatedfontFamily;
     localStorage.setItem('ff', updatedfontFamily)
     location.reload();

 }



 // default setting start 
 function setDefaultValue(defaultFontSize, defaultBGColor, defaultFontFamily) {
     fontSize.value = defaultFontSize;
     main.style.fontSize = defaultFontSize;
     bgColor.value = defaultBGColor;
     main.style.backgroundColor = defaultBGColor;
     fontFamily.value = defaultFontFamily;
     main.style.fontFamily = defaultFontFamily;
 }
 // reset button

 resetButton.addEventListener('click', reset)

 function reset() {
     localStorage.removeItem('fs')
     localStorage.removeItem('bgc')
     localStorage.removeItem('ff')
     setDefaultValue('16px', 'orange', "'BSH', serif")
 }

 // getting from local storage
 function getFromLocalStorage() {
     let lsfs = localStorage.getItem('fs');
     let lsbg = localStorage.getItem('bgc')
     let lsff = localStorage.getItem('ff')

     if (lsfs || lsbg || lsff) {
         if (!lsfs) {
             lsfs = '16px';
         }
         if (!lsbg) {
             lsbg = 'orange';
         }
         if (!lsff) {
             lsff = "'BSH', serif";
         }
        //  console.log(lsff);
         setDefaultValue(lsfs, lsbg, lsff);
     } else{
         reset()
     }
 }


 getFromLocalStorage();