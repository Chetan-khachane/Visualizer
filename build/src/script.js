'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _auto = require('chart.js/auto');

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ctx = document.getElementById('myChart').getContext('2d');

var Init_Chart = function () {
	function Init_Chart(ctx, arr) {
		_classCallCheck(this, Init_Chart);

		this.arr = [];

		this.chart = new _auto2.default(ctx, {
			type: 'bar',
			data: {
				labels: ['jan', 'feb', 'mar', 'april', 'may', 'jun'],
				datasets: [{
					label: '# Sample only',
					data: this.arr,
					backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
					borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
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
		});
	}

	_createClass(Init_Chart, [{
		key: 'setConfig',
		value: function setConfig(backgroundColor, _ref, label) {
			var red = _ref.red,
			    green = _ref.green,
			    blue = _ref.blue,
			    opacity = _ref.opacity;


			var labels = this.arr.map(function (item, index) {
				return index;
			});

			var background_Color = this.arr.map(function () {
				return backgroundColor;
			});

			var borderColor = this.arr.map(function () {
				return 'rgba(' + Math.round(Math.random(1, 255) * red) + ',' + Math.round(Math.random(1, 255) * green) + ',' + Math.round(Math.random(1, 255) * blue) + ',' + opacity + ')';
			});

			//updating chart config by setting up properties

			var data = this.chart.data.datasets[0];

			this.chart.data.labels = labels;

			data.backgroundColor = background_Color;
			data.borderColor = borderColor;
			data.label = label;

			this.updateChart();
		}
	}, {
		key: 'constructRandomArray',
		value: function constructRandomArray(n) {
			var i = n;
			while (i--) {
				this.arr.push(Math.round(Math.random(1, n) * n));
			}this.updateChart();
		}
	}, {
		key: 'updateChart',
		value: function updateChart() {
			this.chart.update();
		}
	}]);

	return Init_Chart;
}();

var myChart = new Init_Chart(ctx);
myChart.constructRandomArray(10);

myChart.setConfig('rgba(249, 212, 35, 1)', {
	red: 45,
	green: 104,
	blue: 234,
	opacity: 0.8
}, 'Sample');