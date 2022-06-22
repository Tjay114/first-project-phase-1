var myForm = document.getElementById('myForm')

myForm.addEventListener('submit',function(e){ 

    e.preventDefault()

    var country = document.getElementById('country').value
alert(country) 



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '957b1df485mshcc07ded3acb036cp1f5fa0jsnc27cef59dfa0',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=${country}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
})