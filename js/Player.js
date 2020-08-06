class Player {
  constructor(){
    this.index=null;
this.distance=0;
this.name = null;

  } 

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }
  static getplayerinfo(){
    var playerinforef = database.ref('players');
    playerinforef.or("value",(data)=>{allplayers=data.val();})
  }
}
