import React from "react"

import {
    CssBaseline,
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Button
} from "@mui/material"

import { PhotoCamera } from "@mui/icons-material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    container: (props) => ({
      marginTop: "80px", 
      padding: "100px",
 
    }),
  }));

export default function App() {

    const classes = useStyles()

    return (
        <>
            <CssBaseline />

            <nav>
                <AppBar positon="relative">
                    <Toolbar>
                        <PhotoCamera />
                        <Typography variant="h6">
                            Photo Album
                        </Typography>
                    </Toolbar>
                </AppBar>
            </nav>

            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm"
                    >
                        <Typography
                            variant="h2"
                            align="center"
                            color="textPrimary"
                        >
                            Album layout
                        </Typography>

                        <Typography
                            variant="h6"
                            align="center"
                            color="textSecondary"
                        >
                            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                        </Typography>


                        <div>
                            <Grid 
                                container
                                spacing={2}
                                justifyContent="center"
            
                            >
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                    >
                                        Primary Action
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                    >
                                        Secondary Action
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>

                    </Container>
                </div>
            </main>
        </>
    )
}