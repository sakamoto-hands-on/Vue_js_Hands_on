let app = new Vue({
	el: '#app',
	beforeCreated: function() {
		console.log('beforeCreated');
	},
	created: function() {
		console.log('created');
	},
	beforeMount: function() {
		console.log('beforeMount');
	},
	mounted: function() {
		console.log('mounted');
	},
	beforeUpdate: function() {
		console.log('beforeUpdate');
	},
	beforeDestroy: function() {
		console.log('beforeDestroy');
	},
	destroyed: function() {
		console.log('destroyed');
	},
	
});

setTimeout(function() {
	app.$destroy();
},3000);
