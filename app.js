//function
function calculateBmi(){
    let weight = document.getElementById('weight').value
    let feet = document.getElementById('feet').value
    let inches = document.getElementById('inches').value
    let feetToInches = feet * 12;
    let height = Number(inches) + Number(feetToInches);
    let bmi = (weight / (height * height)) * 703;

    document.getElementById('heading').innerHTML='Your BMI is:  '
    document.getElementById('bmi-output').innerHTML= bmi.toFixed(1)
   

    

    if(bmi <= 18.4) {
        document.getElementById('messageImp').innerHTML = 'You are in the underweight range';
        document.getElementById('message1Metric').innerHTML = 'Normal weight range: 18.5-25';

    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById('message').innerHTML = 'You are at a healthy weight'

    } else if(bmi >=25 && bmi <=29.9){
        document.getElementById('messageImp').innerHTML = 'You are in the overweight range, however that may not necessarily mean unhealthy'
        document.getElementById('message1Imp').innerHTML = 'Normal weight range: 18.5-25';
        //document.getElementById('message2').innerHTML= 'Individuals with the same BMI categorization: '
        //document.getElementById('tb').src = './assets/tom.png'
        //document.getElementById('adam').src = './assets/adam.png'
        //document.getElementById('alex').src = './assets/alex.png'
  
    } else if (bmi>=30){
        document.getElementById('message').innerHTML = 'You are in the obese weight range, however that may not necessarily mean unhealthy'
        document.getElementById('message1').innerHTML = 'Normal weight range: 18.5-25';
        //document.getElementById('message2').innerHTML= 'Individuals with the same BMI categorization: '
        //document.getElementById('donald').src = './assets/donald.png'
        //document.getElementById('mike').src = './assets/mike.png'
        //document.getElementById('trump').src = './assets/trump.png'  
    }

    let img = document.getElementById('image');
        img.style.display='block'
        
}
function calculateBmiMetric(){
    let heightCm = document.getElementById('heightCm').value;
    let heightM = heightCm/100
    let weightKg = document.getElementById('weightKg').value;

    let bmiMetric = weightKg/(heightM*heightM);

    document.getElementById('heading').innerHTML='Your BMI is:  '
    document.getElementById('bmi-output').innerHTML= bmiMetric.toFixed(1)

    if(bmiMetric <=18.4){
        document.getElementById('message').innerHTML = 'You are in the underweight range';
        document.getElementById('message1').innerHTML = 'Normal weight range: 18.5-25';

    }else if (bmiMetric >=18.5 && bmiMetric <=24.9) {
        document.getElementById('message').innerHTML = 'You are at a healthy weight'

    } else if(bmiMetric >=25 && bmiMetric <=29.9){
        document.getElementById('message').innerHTML = 'You are in the overweight range, however that may not necessarily mean unhealthy'
        document.getElementById('message1').innerHTML = 'Normal weight range: 18.5-25';
  
    } else if (bmiMetric>=30){
        document.getElementById('message').innerHTML = 'You are in the obese weight range, however that may not necessarily mean unhealthy'
        document.getElementById('message1').innerHTML = 'Normal weight range: 18.5-25';
    }
    let img = document.getElementById('image');
        img.style.display='block'
}

const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and panels
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to the clicked button and panel
        const tabId = button.dataset.tab;
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

document.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        calculateBmi()
    }
})
function reload() {
    window.location.reload()
}