import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
   
    post:{
        backgroundColor:"black",
        /*border: '1px solid green' ,*/
        marginLeft:'100px',
    },

    post_card:{
       /* border: '1px solid yellow' ,*/
        marginLeft:'17%',
        marginRight:'17%',
        width:'66%',
        maxWidth: '900px',
        marginBottom:'50px',
    },
    post_card_body:{
        /*border: '1px solid black' ,*/
    },
    post_title:{
       /* border: '1px solid red' ,*/
        color:"#b20949",
        fontSize:'30px',
    },
    post_text:{
        /*border: '1px solid blue' ,*/
        fontSize:'16px',
    },
    comment_button:{
        color: "white",
        backgroundColor:"#69052b",
        height:'38px',
        borderRadius:'4px',
        textAlign:'center',
        marginRight: '5px',
        marginLeft: '5px',
        marginBottom:'9px',
    },
    post_comment_input:{
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),},
          position: 'relative',
          borderRadius: theme.shape.borderRadius,
          backgroundColor: fade(theme.palette.common.white, 0.15),
          '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
          },
          marginRight: '5px',
          marginLeft: '5px',
          width: '60%',
          maxHeight:'200px',
          minHeight:'38px',
          resize:'vertical',
          [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: '60%',
          },
          marginBottom:'9px',
    }
  });


  export default styles