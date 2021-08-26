const ctx = document.getElementById('myChart').getContext('2d');

import Chart from 'chart.js/auto';

class V_algo {
	constructor(arr){
		this.arr = [] || arr
	}

	constructRandomArray(n){
		let i = n
		while(i--)
			this.arr.push(Math.round(Math.random(1,n)*n))	
	}

}

class Init_Chart extends V_algo{
	constructor(ctx){
		super()

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

	  console.log('configured')

		this.labels = this.arr.map( (item,index) => index )

		this.backgroundColor  = this.arr.map(()=>  backgroundColor )

		this.borderColor  = this.arr.map(()=> `rgba(${Math.round(Math.random(1,255)*red)},${Math.round(Math.random(1,255)*green)},${Math.round(Math.random(1,255)*blue)},${opacity})`)
	
		const data = this.chart.data.datasets[0]
			console.log(data)
		data.labels = this.labels
		data.backgroundColor = this.backgroundColor
		data.borderColor = this.borderColor
		data.label = label

		this.updateChart()
		console.log(data)
  }


  updateChart(){
  	this.chart.update()
  }
}

const visual = new V_algo()
visual.constructRandomArray(10)
const myChart  = new Init_Chart(ctx)

myChart.setConfig('rgba(249, 212, 35, 1)',{
	red : 45,
	green : 104,
	blue : 234,
	opacity :0.8 
},'Sample')