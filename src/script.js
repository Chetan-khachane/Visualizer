const ctx = document.getElementById('myChart').getContext('2d');

import Chart from 'chart.js/auto';



class Init_Chart{
	constructor(ctx,arr){
		this.arr = []

		this.chart = new Chart(ctx,{
		type: 'bar',
		data: {
			labels: ['jan','feb','mar','april','may','jun'],
			datasets: [{
				label: '# Sample only',
				data: this.arr,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	})

  }

  setConfig(backgroundColor , {red , green ,blue ,opacity},label){

		const labels = this.arr.map( (item,index) => index )

		const background_Color  = this.arr.map(()=>  backgroundColor )

		const borderColor  = this.arr.map(()=> `rgba(${Math.round(Math.random(1,255)*red)},${Math.round(Math.random(1,255)*green)},${Math.round(Math.random(1,255)*blue)},${opacity})`)


		//updating chart config by setting up properties
	
		const data = this.chart.data.datasets[0]

		this.chart.data.labels = labels
		
		data.backgroundColor = background_Color
		data.borderColor = borderColor
		data.label = label

		this.updateChart()
  }

	constructRandomArray(n){
		let i = n
		while(i--)
			this.arr.push(Math.round(Math.random(1,n)*n))
		this.updateChart()
	}
  updateChart(){
  	this.chart.update()
  }
}



const myChart  = new Init_Chart(ctx)
myChart.constructRandomArray(10)

myChart.setConfig('rgba(249, 212, 35, 1)',{
	red : 45,
	green : 104,
	blue : 234,
	opacity :0.8 
},'Sample')