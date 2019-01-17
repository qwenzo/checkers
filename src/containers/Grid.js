import React,{Component} from 'react';
import Box from '../components/box/box';

/* true=1, false=2 */
class Grid extends Component{
    constructor(props) {
        super(props);
        this.state={dragging:false,player:true,grid:[12][12],starti:0,startj:0}
      }

      refreshGrid(){
        let grid = [];
    for (let i = 0; i < 12; i++) {
      let children = [];
      for (let j = 0; j < 12; j++) {
        children.push(<Box key={`${i} ${j}`} i={i} j={j} renderChecker={gridChecks[i][j]} checkCheckers={this.checkCheckers.bind(this)}
         updateDraggingEnd={this.updateDraggingEnd.bind(this)}  updateDragging={this.updateDragging.bind(this)}  color={((j%2==0 && i%2==0) || (j%2!=0 && i%2!=0)?'black':'white')}/>)
      }
      grid.push(<div>{children}</div>)
    }
    return grid
    }


    

    createGrid(){
        let grid = [];
    for (let i = 0; i < 12; i++) {
      let children = [];
      for (let j = 0; j < 12; j++) {
        if(((j%2==0 && i%2==0) || (j%2!=0 && i%2!=0)) && ( (i==0) || (i==1) || (i==2) || (i==3))){
            gridChecks[i][j] = {filled:true,player:true};
        }
        else  if(((j%2==0 && i%2==0) || (j%2!=0 && i%2!=0)) && ( (i==11) || (i==10) || (i==9) || (i==8))){
            gridChecks[i][j] = {filled:true,player:false};
        }
        else{
            gridChecks[i][j]={filled:false,player:null} ;
        }
        children.push(<Box key={`${i} ${j}`} i={i} j={j} renderChecker={gridChecks[i][j].filled} checkCheckers={this.checkCheckers.bind(this)}
        updateDraggingEnd={this.updateDraggingEnd.bind(this)}  updateDragging={this.updateDragging.bind(this)}  color={((j%2==0 && i%2==0) || (j%2!=0 && i%2!=0)?'black':'white')}/>)
       
      }
      grid.push(<div>{children}</div>)
    }
    return grid
    }

  

    checkCheckers(e){
        
        console.log(e);
      this.setState({endi:e.i,endj:e.j},()=>{ 
            //callback implement later
      });
     
    }

    updateDragging(e){
        this.setState({starti:e.i,startj:e.j});
    }

    updateDraggingEnd(e){
        console.log(this.state);
       if(!gridChecks[this.state.endi][this.state.endj].filled){
        gridChecks[this.state.endi][this.state.endj]={filled:false,player:this.state.player};
        gridChecks[this.state.starti][this.state.startj]={filled:false,player:null};
        this.setState({player:!this.state.player});
        console.log( gridChecks[this.state.endi][this.state.endj]);
       }
    }




    render(){
        return( <div>
            {this.createGrid()}
          </div>)
        
    }


    
}

const gridChecks = new Array(12);
for (var i = 0; i < gridChecks.length; i++) {
    gridChecks[i] = new Array(12);
}


export default Grid;