import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { fade, makeStyles } from '@material-ui/core/styles';
import themeObject from "./theme";
import vietnamFlag from "./../images/vietnamFlag.svg"
import englishFlag from "./../images/englishFlag.svg"
//----------------------common styles---------------------
const mainColor = "#ffd100";
const secondaryColor = '#ffc371';
//----------------------generating MUI theme and assign responsive font size property
// then create a styling object and passing theme to it for styling.
//finally, we export both theme and stylingObject to App.js to execute in stateless function component.
// this way we prevented hook errors.

let theme = createMuiTheme(themeObject);
theme = responsiveFontSizes(theme);

const stylingObject = (theme) => ({
    root: {
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: 'hidden',
        background: "#fff",
        padding: "70px 0px",
        position: "relative"
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: 20,
        marginLeft: 12
    },
    // container: {
    //     maxWidth: 620,
    //     minHeight: 600,
    //     marginTop: 50,
    //     paddingBottom: 10,
    //     marginBottom: 30,
    //     marginLeft: 'auto',
    //     marginRight: 'auto',
    //     background: "blue",
    //     wordWrap: "break-word",
    //     [theme.breakpoints.down(700)]: {
    //         marginTop: 10,
    //         marginBottom: 0,
    //         minHeight: 500,
    //     },
    // },
    viButton: {
        height: 40,
        backgroundImage: `url(${vietnamFlag})`,
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat",/* Do not repeat the image */
        backgroundSize: "cover",
        color: "rgba(0,0,0,0)",
        cursor: "pointer"
    },
    enButton: {
        height: 40,
        backgroundImage: `url(${englishFlag})`,
        color: "rgba(0,0,0,0)",
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat",/* Do not repeat the image */
        backgroundSize: "cover",
        cursor: "pointer",

    },
    backdrop: {
        zIndex: 100000,
        color: mainColor,
        background: "rgba(255,255,255,0.6)",
    },
    //_______________________App Bar______________________________
    appBar: {
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        position: "relative"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        cursor: "pointer"
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up(500)]: {
            display: 'flex',
            justifyContent: "flex-end",
            alignItems: "center"
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
            zIndex: 20,

        },
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(2),
        height: 40,
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
            //marginLeft: theme.spacing(3),
            // width: '50%',
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
        width: '70%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
    //_______________________bottom bar__________________________
    bottomBar: {
        top: 'auto',
        zIndex: 50,
        bottom: 0,
        display: 'none',
        [theme.breakpoints.down(500)]: {
            display: 'block',
        },
    },
    //   fabButton: {
    //     position: 'absolute',
    //     zIndex: 1,
    //     top: -30,
    //     left: 0,
    //     right: 0,
    //     margin: '0 auto',
    //   },
    //_______________________preview card__________________________
    previewCard: {
        height: 300, width: 250,
        border: "0px solide white",
        borderRadius: 40,
        background: "linear-gradient(145deg, #e6e6e6, #ffffff)",
        boxShadow: " 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
        position: "relative"
    },
    previewCardMedia: {
        height: 120,

    },
    previewCardContent: {
        paddingTop: 5
    },
    previewCardTitle: {
        marginBottom: 10,
        fontWeight: 700, lineHeight: 1.4
    },
    previewCardFooter: {
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 50,
        padding: 10,
        width: "95%",
        background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(248,245,253,1) 60%)",
        display: "flex", alignItems: "flex-end"
    },
    previewCardTags: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: "hidden",
    },
    linkPreview: {
        display: "flex", flexWrap: 'nowrap',
        justifyContent: 'space-evenly', alignItems: "center",
        height: 150, width: "90%",
        margin: "auto",
        border: "1px solid #d6d6d6",
        borderRadius: 20, paddingRight: 10,
        overflow: "hidden"
    },
    sourcePreviewBox: {
        display: "flex", flexWrap: 'nowrap',
        justifyContent: 'space-evenly', alignItems: "center",
        height: 150, width: "90%",
        border: "1px solid #d6d6d6",
        borderRadius: 0,
        margin: "50px auto",
        cursor: "pointer",
        boxShadow: "none",
        transition: "box-shadow 1s ",
        overflow: "hidden",
        '&:hover': {
            boxShadow: "20px 20px 60px #d9d9d9,  -20px -20px 60px #ffffff"
        },
        '&:active': {
            border: `2px solid ${mainColor}`,
        },
    },
    previewImg: {
        width: 150,
        height: 150,
        //background: mainColor
    },

    //---------------------------------form -----------------
    formContainer: {
        zIndex: 50,

    },
    formPaper: {
        width: 600,
        height: "70%",
        margin: "80px auto",
        position: "relative",
        overflowY: "scroll",

        [theme.breakpoints.down(500)]: {
            width: "100vw",
            margin: 0,
            marginTop: 40
        },
    },
    formHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        background: secondaryColor,

    },
    //-------------------------resource card----------------------
    resourceCardContainer: {
        maxWidth: 600,
        minHeight: "80vh",
        margin: "0px auto",
        marginTop: 50,
        marginBottom: 100,
        padding: 30,
        paddingBottom: 100

    },
    resourceCardAction: {
        border: `2px solid ${mainColor}`,
        borderRadius: 30,
        margin: "20px 0px",
        padding: "0px 20px",
        height: 40,
        color: "#FFF",
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: "space-between",
        alignItems: "center",
    },
    sourcePreview: {
        border: "2px solid gray",
        borderRadius: 40,
        position: "relative",
        padding: 20,
        marginTop: 70
    },
    sourcePreviewTitle: {
        position: "absolute",
        top: 0,
        left: "50%",
        padding: "0px 10px",
        WebkitTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        background: "#FFF", color: "gray",
        zIndex: 20,
    },
    //===========================Login===============================
    loginButton: {
        cursor: "pointer",
        display: "block",
        fontSize: "1.3em",
        boxSizing: "content-box",
        margin: "20px auto 0px",
        width: "70%",
        padding: "15px 20px",
        borderRadius: 24,
        borderColor: "transparent",
        backgroundColor: "white",
        /* box-shadow: 0px 16px 60px rgba(78, 79, 114, 0.1), */
        boxShadow: "0px 16px 60px rgba(78, 79, 114, 0.08)",
        position: "relative",
    },
    loginButtonText: {
        color: " #4285f4",
        fontWeight: "bolder",
    },

    loginIcon: {
        height: 25,
        width: 25,
        marginRight: 0,
        position: "absolute",
        left: 30,
        alignItems: "center",
    },
    //===========================Welcome=============================
    welcomeLoginBox: {
        position: "absolute",
        left: "50%",
        top: "50%",
        WebkitTransform: "translate(-50%, -50%)",
        transform: "translate(-50%, -50%)",
        height: 300,
        width: 600,
        border: "2px solid gray",
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
});


export { stylingObject, theme };