import React from 'react'
import {
  Typography,
  Grid,
  CssBaseline,
  Container,
  Link,
  Button,
  Divider,
  TextField,
  CircularProgress
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles'
import EliminarProyectoDialog from '../components/Dialog'
import { Link as DomLink } from 'react-router-dom'
import Header from './Header'
import PersonIcon from '@material-ui/icons/Person'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import axios from 'axios'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Devs4U
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    maxHeight: "180px",
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing(1)
  },
  delete: {
    color: '#DC0300 '
  },
  media:{
    backgroundColor:"#FFC100",
    height: "20px"
},
  grid:{
    marginTop:"80px",
  },
  text: {
    marginRight: "15px"
  },
  text2: {
    marginLeft: "15px"
  },
  rating: {
      marginTop: "50px"
  },
  textfield: {
    marginTop: "20px",
    width: theme.spacing(40),
  },
  but: {
    marginTop: "20px",
  },
  but2: {
    marginTop: "20px",
    backgroundColor:'#299DE8',
    color: '#ffffff'
  }
}))

export default function RateUser(props) {
  const classes = useStyles()
  const myRol= sessionStorage.getItem('rol');
  const projectId = props.match.params.id
  const [project,setProject]=React.useState(undefined)
  const [value, setValue] = React.useState(0);
  const [descripcion, setDescripcion] = React.useState('');

   React.useEffect(() => {
      axios({ method: 'get',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/project/view/${projectId}`, 
        withCredentials:true
      })
      .then(response =>{
          console.log('consultar res',response)
          if(response.status === 200){
            setProject(response.data[0]) 
            
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
     
    }, []);

   const validarInput = () => {
    let valido = true

    if(value===0){
      alert('Debe colocar una calificación')
      valido=false
    }

    if(descripcion ==='') {
      alert('Debe escribir un comentario')
      valido=false
    }

    return valido
   }

   const handleCalification = () => {

    let url = ''
    if(myRol=== 'contractor'){
      url=`/review/add/${project.encargado.id}`
    } else {
      url=`/review/add/${project.creador.id}`
    }
    

    if(validarInput()){
      
      let promiseArray = []

      promiseArray.push(
        axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:url, 
          withCredentials:true,
          data:{descripcion:descripcion,calificacion:value}
        })
      )

      promiseArray.push(
         axios({ method: 'post',
          validateStatus: function(status) {
            return status >= 200 && status < 500; 
          },
          url:`/project/change/state/review/${projectId}`, 
          withCredentials:true
          
        })

      )
      

      Promise.all(promiseArray).then(response =>{
          console.log('calification res',response)
          if(response[0].status === 200 && response[1].status == 200){
            props.history.push(`/project/view/${projectId}`)
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
    }

   }


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header type={myRol}/>
            {console.log('value',value)}
            {console.log('descripcion',descripcion)}
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
           { project?(
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid item xs={12} md={12}>
                    <Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
                        Calificación para {myRol==='contractor'?(project.encargado.nombre):(project.creador.nombre)}
                    </Typography>
                    <br/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Divider/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component="h1" variant="h6" align="center" color="textPrimary" gutterBottom className={classes.rating}>
                        Elige la cantidad de estrellas
                    </Typography>
                    <Typography align="center">
                        <Rating value={value} align="center" size="large" name="calificacion" onChange={(event, newValue) => {setValue(newValue);}}/>
                    </Typography>
                    <Typography align="center">
                        <TextField
                        label="Comentario"
                        multiline
                        rows="10"
                        variant="outlined"
                        className={classes.textfield}
                        onChange={(e)=>{setDescripcion(e.target.value)}}
                        value={descripcion}
                        />
                    </Typography>
                    <Typography align="center">
                        <Button variant="contained" color="primary" className={classes.but} onClick={handleCalification}>
                            Enviar 
                        </Button>
                    </Typography>
                </Grid>
            </Container>
            ):(<CircularProgress/>)}
            <Copyright />
            </main>
        </div>
    );

}
