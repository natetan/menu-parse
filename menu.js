(function() {
	'use strict';

	window.onload = function() {
		console.log('onload successful');
		makeAjaxRequest('menu.php', displayItems);
	};

	function makeAjaxRequest(url, method) {
		var request = new XMLHttpRequest();
		request.onload= method;
		request.open('GET', url, true);
		request.send();
		console.log('ajax loaded successfully');
	}

	function displayItems() {
		console.log('status: ' + this.status);
		console.log(JSON.parse(this.reponseText));
		if (this.status = 200) {
			var data = JSON.parse(this.responseText);
			var table = document.querySelector('#menu');
			for (var i = 1; i <= data.length; i++) {
				if (data[i].name !== "") {
					var tr = document.createElement('tr');
					var num = document.createElement('td');	
					var name = document.createElement('td');
					var price = document.createElement('td');
					
					num.innerHTML = (i + 1);
					name.innerHTML = data[i].name;
					price.innerHTML = data[i].price;
					
					table.appendChild(tr);
					tr.appendChild(num);
					tr.appendChild(name);
					tr.appendChild(price);
				}
			}
		} else {
			console.log('There was an error: ' + this.status);
		}
	}

}) ();
