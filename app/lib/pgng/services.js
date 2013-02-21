'use strict';

angular.module('pgng.services',[])
	.factory('SpinnerService', function() {
		var spinner = document.getElementById('spinner');
		return {
			show: function(text) { spinner.className = 'show'; spinner.innerText = text; },
			text: function(text) { spinner.innerText = text; },
			close: function() { spinner.className = ''; spinner.innerText = ''; }
		}
	});
	