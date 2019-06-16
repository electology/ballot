var l = new Loader()
l.onload = function(assets){

	// CREATE
	var modelName = "model2"
	var model = new Model(modelName);
	model.assets = assets
	model.theme = "Nicky"
	model.createDOM()
	// INIT
	model.initDOM()
	var basediv = document.querySelector("#" + modelName)
	basediv.appendChild(model.dom);

	model.start = function(){
		// CREATE
		model.voters.push(new GaussianVoters(model))
		model.candidates.push(new Candidate(model))
		model.candidates.push(new Candidate(model))
		// CONFIGURE
		Object.assign( model.voters[0],    {x:150, y:150, type: new PluralityVoter(model)} )
		Object.assign( model.candidates[0],{x: 50, y:125, icon:"square"} )
		Object.assign( model.candidates[1],{x:250, y:125, icon:"triangle"} )
		// INIT
		model.candidates[0].init()
		model.candidates[1].init()
		model.initMODEL()
		model.voters[0].init()
		model.election = Election.plurality
		model.optionsForElection = {sidebar:true,verbose:true}
		// UPDATE
		model.update()

	};
	model.start();

};
l.load([
"play/img/voter_face.png",
"play/img/square.png",
"play/img/triangle.png",
"play/img/hexagon.png",
"play/img/square.svg",
"play/img/triangle.svg",
"play/img/hexagon.svg",
"play/img/pentagon.svg",
"play/img/bob.svg"
]);