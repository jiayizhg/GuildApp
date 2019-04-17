
import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import LikeButton from '@material-ui/icons/FavoriteBorder';
import CommentButton from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { unstable_Box as Box } from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const Post = (props) => {
    const [comment,setComment] = useState('');

    const commentHandler = comment=>{
        setComment(comment);
        console.log(comment);
    }

    const addComment = async() =>{
        if(comment === ''){ //If passwords don't match then dont make the api call
            alert("Can't add an empty comment");
        }
        // else{
        //     let data = await signUp(username,password,display_name,profile_pic_url);
        //     console.log("Result" , data);
        //     if(data.error === ""){
        //         //TODO
        //         console.log("Sign up was successful");
        //         props.history.push("/");
        //     }
        //     else{
        //         alert(data.error);
        //     }
        // }
        
    }

    const ToggleContent = ({ toggle, content }) => {
        const [isShown, setIsShown] = useState(false);
        const hide = () => setIsShown(false);
        const show = () => setIsShown(true);
      
        return (
          <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
          </React.Fragment>
        );
    };
    

    return (
         <div id={props.id}>
             <Paper style={{ width: '30rem' }} elevation={4} >
                 <Box my={4} bgcolor="background.paper">
                     <Typography variant="h5" component="h3" > 
                        <Box textAlign="justify" m={3} fontWeight="fontWeightMedium">
                            {props.username}
                        </Box>
                    </Typography>
                     {/*<CardText tag="p">{props.content}</CardText>*/}
                     <Typography component="p" >
                         <Box textAlign="justify" m={3} fontWeight="fontWeightLight">
                            Place Holder for post content:
                            As I unzipped my tent flap I did hear a few howls, but they were distant and not worrying. 
                            What stunned me into stillness was a very loud howl from the direction of the lake, about 
                            a yard from my tent at most.This howl was different though. It had the feel of a Coyote howl,
                            but it was deeper… and it lasted longer.
                            I simply sat there petrified at what I heard. I wouldn’t be able to guess at how long I sat 
                            there breathing hard with my fingers still grasping the zipper. But however long it may have been
                            was just long enough for the… thing… that made that howl to come up the trail next to my tent. 
                            Suddenly I heard the crunching of claws on dirt and after that, claws on the rocks that made our 
                            camping plots. Then I saw the largest shadow made by a living creature that little kid me had 
                            ever seen. It lumbered heavily in the direction of the sparse tree line where I assume the other 
                            howling had come from. But before it got past the tree I urinated on it stopped.
                        </Box>
                    </Typography>
            
                {/*Like Button*/}
                <IconButton>
                    
                    <LikeButton />
                    
                </IconButton>

                <ToggleContent
                    toggle={show => <button onClick={show}><CommentButton/></button>}
                    content={hide => (
                        <div>
                            <TextField 
                                id="textPopUp" 
                                fullWidth 
                                multiline
                                placeholder="Make a comment..." 
                                onBlur= { e => commentHandler(e.target.value)}
                                InputProps={{
                                    endAdornment: 
                                        <InputAdornment position="end">     
                                            <Button variant="primary" size="small" onClick={()=>addComment()}>
                                                Comment
                                            </Button>
                                        </InputAdornment>,
                                }}
                            /> 
                        
                        </div>
                    )}
                />
                </Box>
            </Paper>
        </div>
    );
};


export default Post;

