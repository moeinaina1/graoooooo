var game = new Phaser.Game(400, 500);

var mainState = { preload: function(){
	game.load.image('ptaszek' , 'ptaszek.png');
	//wrzucanie plików z obrazkami i audio 


},

create: function (){
	game.stage.backgroundColor = '#69ea94'; //zmieniliśmy kolor tła
	game.physics.startSystem(Phaser.Physics.ARCADE); //włączamy fizykę

	this.ptaszek = game.add.sprite(100, 400, 'ptaszek');

	game.physics.arcade.enable(this.ptaszek); //grawitacja dotyczy sprita ptaszek

	this.ptaszek.body.gravity.y =1000;
	




	//ustawianie na miejscu obiektów, które mają 
	//się pojawić po starcie gry

},

upload: function(){
	//co ma się zmieniać w czasie

}, 

};

game.state.add( 'main', mainState);
game.state.start('main');