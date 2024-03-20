import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";

export const SideBar = ({drawerWidth = 240}) => {
    return (
        <Box
            component="nav"
            sx={ {
                width: {
                    sm: drawerWidth
                },
                flexShrink: { sm: 0}
            }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: {
                        xs: 'block'
                    },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        Juan Pablo Florez
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                            <ListItem disablePadding key={text}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'exercitismnfsdakfsd aksjdfjnjk sjnjsa sakldj'}/>

                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
