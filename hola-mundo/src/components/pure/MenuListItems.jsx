import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom'
import {Home, Settings, Task} from "@mui/icons-material";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Home/>)    
        case 'SETTINGS':
            return (<Settings/>)
        default:
            break;
    }
}

const MenuListItems = ({}) => {

    const navigate = useNavigate()

    const go = (path) => {
        navigate(path)
    }

    return (
        <List>
            {List.map(({text, path, icon}, index) => 
                (
                    <ListItem key = {index} button onClick={go(path)}>
                        <ListItemIcon>
                            {getIcon(icon)}
                        </ListItemIcon>
                        <ListItemText
                            primary = { text }
                        />
                    </ListItem>
                )
            )}
        </List>
    )
}



export default MenuListItems;
