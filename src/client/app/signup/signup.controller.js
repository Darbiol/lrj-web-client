( function () {
	'use strict';

	/* @ngInject */
	function SignupController( $q, UserService, logger, store, $state) {
		var self   = this;
		self.user  = {};
		self.title = 'Signup';
		logger.info( 'Activated Signup' );
	}


	angular
		.module( 'app.signup' )
		.controller( 'SignupController', SignupController );

} ) ();
