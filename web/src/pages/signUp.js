
import React, { useContext, useState } from 'react'
import {signUp} from '../utils/apiCalls';
import HomeButton from '../components/buttons/homeButton';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AddIcon from '@material-ui/icons/Add';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import Popup from "reactjs-popup";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import GuildSword from './0_GuildSword_Icon.png';
import Sword from './1_Sword_Icon.png';
import BowArrow from './2_BowArrow_Icon.png';
import Staff from './3_Staff_Icon.png';
import Shield from './4_Shield_Icon.png';

export default props => {
    // const {message} = useContext(FBContext); 
    console.log('props: ', props); 
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [confpassword,setconfpassword] = useState('');
    const [display_name,setdisplay_name] = useState('');
    const [profile_pic_url,setprofile_pic_url] = useState('');
    
    const tileData = [
        {
            img: GuildSword,
            title: 'Guild Sword',
        },
        {
            img: Sword,
            title: 'Sword',
        },
        {
            img: BowArrow,
            title: 'Bow Arrow',
        },
        {
            img: Staff,
            title: 'Staff',
        },
        {
            img: Shield,
            title: 'Shield',
        }
    ];

    const usernameHandler = username=>{
        setusername(username);
    }
    const passwordHandler = password=>{
        setpassword(password);
    }
    const confpasswordHandler = confpassword=>{
        setconfpassword(confpassword);
    }
    const display_nameHandler = display_name=>{
        setdisplay_name(display_name);
    }
    const profile_pic_urlHandler = profile_pic_url=>{
        setprofile_pic_url(profile_pic_url);
    }
    const signUpHandler = async() =>{
        if(password !== confpassword){ //If passwords don't match then dont make the api call
            alert("Your passwords don't match, please try again.");
        }
        else{
            let data = await signUp(username,password,display_name,profile_pic_url);
            console.log("Result" , data);
            if(data.error === ""){
                //TODO
                console.log("Sign up was successful");
                props.history.push("/");
            }
            else{
                alert(data.error);
            }
        }
        
    }
//    const charSelectHandler = event=>{
//        const charId = event.target.value;
//        setSelectCharacter(charId);
//    }
    //console.log(username,password);
    return (
    <div className="App">
        <h1> SignUp </h1> 
        {/* <SamplePage2 />  */}
        <div id="signUp">
            <div id="profile_pic">
                <Popup trigger={
                    <IconButton>
                        <Badge badgeContent={<AddIcon />} color="secondary" >
                            <Grid container justify="center" alignItems="center">
                                <Avatar alt="" src={require('./profilePicPlaceholder.png')}  />
                            </Grid>
                        </Badge>
                    </IconButton>
                    } position="bottom center" modal > 
                    {cancel => (
                        <div id="cancel">
                            
                            <GridList cellHeight={180}>
                                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                    <ListSubheader component="div">Choose Profile Picture <Button id="closeButtonn" close onClick={cancel}/> </ListSubheader>
                                </GridListTile>
                                {tileData.map(tile => (
                                <GridListTile key={tile.img}>
                                    <img src={tile.img} alt={tile.title} />
                                    <GridListTileBar
                                    title={tile.title}
                                    actionIcon={
                                        <IconButton >
                                        
                                        </IconButton>
                                    }
                                    />
                                </GridListTile>
                                ))}
                            </GridList>
                            /IconButton>
                        </div>
                        
                    )}
            
                
                </Popup>
                    
            
            </div>
            <div id="display_name_signUp">
                Display Name: 
                <input onBlur= { e => display_nameHandler(e.target.value)}/>
            </div>
            <div id="username_signUp">
                Username:
                <input onBlur= { e => usernameHandler(e.target.value)}/>
            </div>
            <div id="password_signUp">
                Password: 
                <input type='password' onBlur= { e => passwordHandler(e.target.value)}/>
            </div>
            <div id="confirm_password_signUp">
                Retype Password: 
                <input type='password' onBlur= { e => confpasswordHandler(e.target.value)}/>
            </div>
            <button onClick={()=>signUpHandler()}> SIGN UP </button>
            <HomeButton path='/' {...props}>BACK</HomeButton>
        </div>
    </div>
    )
}