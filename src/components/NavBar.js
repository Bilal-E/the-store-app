import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // marginBottom: '3%',
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textDecoration: 'none',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    links: { 
        textDecoration: 'none', 
        color: 'black' 
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' color="transparent">
                <Toolbar>
                    <Typography className={classes.title} variant="h6" noWrap>
                    
                        <Link to='/' className={classes.links}>The Store</Link>
                              
                    </Typography>
                  
                    <div className={classes.menuItem}>
                            
                        <MenuItem><Link to='/' className={classes.links}>Home</Link></MenuItem>
                        <MenuItem><Link to='collections' className={classes.links}>Collections</Link></MenuItem>
                        <MenuItem><Link to='about' className={classes.links}>About Us</Link></MenuItem>
                        <MenuItem><Link to='contact' className={classes.links}>Contact Us</Link></MenuItem>

                    </div>
                    
                    <div className={classes.search}>
                    
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                    
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
