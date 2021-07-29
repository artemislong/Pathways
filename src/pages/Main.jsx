import React, { useContext, useState, useEffect } from 'react'
import ClassesContext from './../context/classesContext';
//materialUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { Avatar, Grid, Typography, Paper, CardHeader, Card, Divider, Chip, IconButton } from '@material-ui/core';
import { Container } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch';
import content from './data'
//api



const StackCard = ({ data }) => {
    console.log("Card", data)
    const classes = useContext(ClassesContext);
    return (
        <React.Fragment>
            <Divider component="li" />
            <ListItem alignItems="flex-start" className={classes.cardContent}>
                <ListItemAvatar>
                    <div alt={data.title} className={classes.avatar}>
                        {(data.image) ? <img src={data.image} className={classes.avatarImage} /> : data.title[0]}
                    </div>
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography variant="h6">{data.title}</Typography>}
                    secondary={data.description}
                />
                <ListItemSecondaryAction>
                    <IconButton edge="end" target="_blank" href={data.url} aria-label="open link">
                        <LaunchIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            {data.tags[0] && <li style={{ paddingLeft: 20, paddingBottom: 10, marginTop: -5 }}>
                {data.tags.map(t => { return <Chip color="primary" variant="outlined" label={t} style={{ margin: "0px 0px 5px 5px" }} /> })}
            </li>}
        </React.Fragment>
        // <Card variant="outlined" className={classes.stackCard}>
        //     <CardHeader
        //         avatar={
        //             <Avatar alt={data.title} src={data.image} className={classes.avatar}>
        //                 {data.title[0]}
        //             </Avatar>
        //         }
        //         action={
        //             <IconButton target="_blank" href={data.url} aria-label="link">
        //                 <LaunchIcon />
        //             </IconButton>
        //         }
        //         title={<Typography variant="h6">{data.title}</Typography>}
        //         subheader={data.description}
        //     />
        //     {data.tags[0] && <CardContent style={{ paddingTop: 0, paddingBottom: 5 }}>
        //         {data.tags.map(t => { return <Chip label={t} style={{ margin: 5 }} /> })}
        //     </CardContent>}
        // </Card>
    )
}

const CategoryCard = ({ data }) => {
    console.log("Category", data)
    return (

        <Paper variant="outlined" style={{ borderRadius: 30, margin: "20px 0px", padding: "0px 0px 20px 0px" }} >
            <Typography variant="h5" component="h2" style={{ margin: "10px 20px 10px 20px" }}>{data.title}</Typography>
            <List style={{ padding: 0 }}>
                {data.children.map(d => {
                    return <StackCard key={d.title} data={d} />
                })}
                <Divider component="li" />
            </List>
        </Paper>

    )
}



const Main = ({ location }) => {
    const classes = useContext(ClassesContext);
    const categories = {
        frameworks: {
            title: "Monday - Chest And Back",
            tags: ["Monday", "Chest And Back"],
            children: []
        },
        gitAndHosting: {
            title: "Tuesday - Legs And Shoulders",
            tags: ["Tuesday", "Legs And Shoulders"],
            children: []
        },
        react: {
            title: "Wednesday - Cardio + Push up + Abs",
            tags: ["Wednesday", "Cardio", "Push up", "Abs"],
            children: []
        },
        cssAndUI: {
            title: "Thursday - Back And Arms",
            tags: ["Thursday", "Back And Arms"],
            children: []
        },
        illustrationsAndIcons: {
            title: "Friday - Cardio + Push up + Abs",
            tags: ["Friday", "Cardio", "Push up", "Abs"],
            children: []
        },
        designAndStyling: {
            title: "Saturday - Chest And Shoulders",
            tags: ["Saturday", "Chest And Shoulders"],
            children: []
        },
        discoverAndLearn: {
            title: "Warmup",
            tags: ["Warmup"],
            children: []
        },
        else: {
            title: "Cooldown",
            tags: ["Cooldown"],
            children: []
        }
    };

    const checkCategory = (element, category) => { //check if there is a tag match between element and category
        console.log("checking category", category, element)

        for (let tag of category.tags) {
            if (element.tags.includes(tag)) return true
        }

    };

    const categorize = (element) => {
        let match = false
        for (let category in categories) {
            if (checkCategory(element, categories[category])) {
                categories[category].children.push(element); //push if tag matched
                match = true;
            }
        }
        if (!match) categories.else.children.push(element); //if no match
    };

    const pushContentArray = (array) => {  //to push all categories into one array
        for (let category in categories) {
            array.push(categories[category])
        }
    }
    console.log("initial array", content)
    content.map(c => { categorize(c) }); //categorizing cards
    const categoryCards = [] //clearing the content array
    pushContentArray(categoryCards) //pushing final arrays
    console.log("final array", categoryCards)



    return (
        <Container className={classes.root} >
            <div style={{ maxWidth: 1000 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} >
                        {categoryCards.map(c => {
                            if (categoryCards.indexOf(c) % 2 === 0 && c) return <CategoryCard key={c.title} data={c} />
                        })}
                    </Grid>
                    <Grid item xs={12} md={6} >
                        {categoryCards.map(c => {
                            if (categoryCards.indexOf(c) % 2 !== 0 && c) return <CategoryCard key={c.title} data={c} />
                        })}
                    </Grid>
                </Grid>
            </div>
        </Container >
    );
}

export default Main;
