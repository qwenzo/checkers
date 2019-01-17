import React,{Component} from 'react';



class Box extends Component {

/*onDragStart={()=>{this.props.updateDragging(true)}} onDragStart={()=>{console.log(i)}} onDragEnd={()=>{this.props.updateDraggingEnd(false)}}*/
  render() {
    const backcolor= this.props.color;
    const checkersColor = this.props.checkersColor;
    const i= this.props.i;
    const j= this.props.j;
    return (
      <div onDragEnd={()=>{this.props.updateDraggingEnd({i:i,j:j})}} onDragStart={()=>{this.props.updateDragging({i:i,j:j})}} onDragOver={()=>{this.props.checkCheckers({i:i,j:j})}} style={{...styles.boxDiv,...{backgroundColor:backcolor}}}>
     { (backcolor=='black'&& ( (i==0) || (i==1) || (i==2) || (i==3)) && this.props.renderChecker  ) ? 
     <div draggable  style={{...styles.checker,...{backgroundColor:'gold'}}}></div>:null}
     { (backcolor=='black'&& ( (i==11) || (i==10) || (i==9) || (i==8)) && this.props.renderChecker  ) ? 
     <div draggable   style={{...styles.checker,...{backgroundColor:'red'}}}></div>:null}
     
        </div>
       );
  }
}

const styles={
  boxDiv :{
    display: 'inline-block',
    outline:'1px solid #000',
    height:'80px',
    width:'80px',
    margin:'5px',
    float:'left'
  },
  checker :{
    display: 'inline-block',
    borderRadius:'50%',
    height:'60px',
    width:'60px',
    backgroundColor:'blue',
    transform:'translate(14%,14%)',
  }
}


export default Box;