//function
function calculateBmi(){
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value

    let bmi = (weight / (height * height) * 703)

    document.getElementById('heading').innerHTML='Your BMI is:  '
    document.getElementById('bmi-output').innerHTML= bmi.toFixed(1)

    if(bmi <= 18.4) {
        
        document.getElementById('message').innerHTML = 'You are underweight'
        
   
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are at a healthy weight'
   
    } else if(bmi >=25 && bmi <=29.9){
        document.getElementById('message').innerHTML = 'You are overweight, however that may not necessarily mean unhealthy'
        document.getElementById('message2').innerHTML= 'Individuals with the same BMI categorization: '
        document.getElementById('tb').src = './tom.png'
        document.getElementById('adam').src = './adam.png'
        document.getElementById('alex').src = './alex.png'
  
    } else if (bmi>=30){
        document.getElementById('message').innerHTML = 'You are obese, however that may not necessarily mean unhealthy'
        document.getElementById('message2').innerHTML= 'Individuals with the same BMI categorization: '
        document.getElementById('donald').src = './donald.png'
        document.getElementById('mike').src = './mike.png'
        document.getElementById('trump').src = './trump.png'
        
    }

    let img = document.getElementById('image');
        img.style.display='block'
        
    
}

document.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        calculateBmi()
    }
})
function reload() {
    window.location.reload()
}