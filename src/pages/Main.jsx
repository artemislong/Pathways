import React, { useContext, useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import ClassesContext from './../context/classesContext';
import PreviewCard from './components/PreviewCard';
//materialUI
import { Button, Grid, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import tree from './data'
//api



const Card = ({ data, handleClick }) => {
    console.log("Card", data)
    return (
        <Grid item xs={6} lg={4} >
            <div onClick={() => handleClick(data)} style={{ width: "100%", height: 150, display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid black", cursor: "pointer" }}>
                <h3>{data.title}</h3>
            </div>
        </Grid>
    )
}

const Category = ({ data, handleClick }) => {
    console.log("Category", data)
    return (
        <Grid item xs={12}>
            <h2 style={{ fontWeight: 700, fontSize: "2em" }}>{data.label}</h2>
            {data.children && <Grid container spacing={2}>
                {data.children.map(d => <Card handleClick={handleClick} key={d.title} data={d} />)}
            </Grid>}
        </Grid>
    )
}



const Main = ({ location }) => {
    const [dataNow, setData] = useState(tree);
    const classes = useContext(ClassesContext);

    const handleClick = (data) => {
        setData(data);
    }

    const rendering = () => {
        if (dataNow.categories) { return (dataNow.categories.map(c => <Category key={c.label} data={c} handleClick={handleClick} />)) }
        if (dataNow.children) { return (dataNow.children.map(c => <Card key={c.title} data={c} handleClick={handleClick} />)) }

    }

    return (
        <Container className={classes.root}>
            <Button variant="contained" style={{ margin: 30 }} onClick={() => handleClick(tree)} >Home</Button>
            <Typography variant="h2">
                {dataNow.title}
            </Typography>
            <Typography variant="h6">
                {dataNow.description}
            </Typography>
            <Grid container spacing={2}>
                {rendering()}
            </Grid>
        </Container >
    );
}

export default Main;