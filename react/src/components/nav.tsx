import React from "react";
import Box from "@mui/material/Box";
import Toolbar from '@mui/material/Toolbar';
import AppBar from "@mui/material/AppBar"
import { Typography } from "@mui/material";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Test
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}