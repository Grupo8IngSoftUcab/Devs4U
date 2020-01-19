import React from 'react'
import {
  Typography,
  Grid,
  CssBaseline,
  Container,
  Link,
  Button,
  Divider,
  Card,
  CardContent,
  CircularProgress
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EliminarProyectoDialog from '../components/Dialog'
import { Link as DomLink } from 'react-router-dom'
import Header from './Header'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
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
    flexGrow: 1,
    display:'flex',
    justifyContent:'space-between'
  },
  media:{
    backgroundColor:"#FFC100",
    height: "20px"
},
  grid:{
    marginTop:"30px",
  },
  text: {
    marginLeft: "30px"
  },
  butac: {
    marginTop: "30px",
    marginLeft: "30px"
    
  },
  butrec: {
    marginTop: "30px",
     marginLeft: "30px",
    color:"#FFFFFF",
    backgroundColor: "#FF1E1E",
  },
  butcan: {
    marginTop: "30px",
    
  },
  down: {
    marginLeft: "300px",
  },
  centerButtons:{
    display:'flex',
    justifyContent:'center'
  }
}))

export default function ReviewProject(props) {
    const classes = useStyles()
    const projectId = props.match.params.id
    const [file,setFile]=React.useState(undefined);

    React.useEffect(() => {
      axios({ method: 'post',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/project/view/file/${projectId}`, 
        withCredentials:true
      })
      .then(response =>{

        //moment('2019-11-03T05:00:00.000Z').utc().format('MM/DD/YYYY')
          console.log('review res',response)
          if(response.status === 200 && response.data.length>=1){
            setFile(response.data[0])
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
     
    }, []);

    const handleDownloadFile = () => {

      //window.open(`/project/download/file/${file.filePath}`)
      console.log('download')
       axios({ method: 'post',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/project/download/file/${file.filePath}`, 
        withCredentials:true,
        responseType: 'blob',
      })
      .then(response =>{

        //moment('2019-11-03T05:00:00.000Z').utc().format('MM/DD/YYYY')
          console.log('download res',response)
          if(response.status === 200){
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', file.filePath);
            document.body.appendChild(link);
            link.click();
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
    }

    const handleRejected = () => {
       axios({ method: 'post',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/project/stage/change`, 
        withCredentials:true,
        data:{ nuevaEtapa: 1, proyectoId:projectId}
      })
      .then(response =>{
          console.log('reject res',response)
          if(response.status === 200){
           props.history.push(`/project/view/${projectId}`)
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
    }

    const handleAccepted = () => {
      axios({ method: 'post',
        validateStatus: function(status) {
          return status >= 200 && status < 500; 
        },
        url:`/project/stage/change`, 
        withCredentials:true,
        data:{ nuevaEtapa: 3, proyectoId:projectId}
      })
      .then(response =>{
          console.log('accept res',response)
          
          if(response.status === 200){
           props.history.push(`/project/rate/${projectId}`)
          } 
          
      })
      .catch(error => {
        console.log('error',error)
      })
    }
    

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header type="contractor"/>
            <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid item xs={12} md={4}>
                    <Typography component="h1" variant="h5" color="textPrimary" gutterBottom>
                        <strong> Etapa: Revisión </strong>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography component="h1" variant="subtitle1" color="textPrimary" gutterBottom>
                        Para promover el proyecto a la etapa de finalizado debe aprobar la entrega realizada. <br/> 
                        En caso de rechazo, la etapa de proyecto se retrasa a ejecución.
                    </Typography>
                    <br/>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Divider/>
                </Grid>
                <Grid container spacing={4} className={classes.grid}>
                {file?(
                    <Grid item xs={12} sm={6} md={12}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                        <Typography content="h2" variant="h6"> 
                           {file.filePath}
                          
                            
                        </Typography>
                        <Button variant="contained" className={classes.down} onClick={handleDownloadFile}>
                                Descargar
                        </Button>
                        </CardContent>
                    </Card>
                    </Grid>
                    ):(<CircularProgress/>)}
                
                </Grid>
                <div className={classes.centerButtons}>
                 <DomLink
                    to={`/project/view/${projectId}`}
                    style={{
                      textDecoration: 'none',
                      color: 'rgb(33,40,53)'
                  }}>
                <Button variant="contained" className={classes.butcan}>
                    Cancelar
                </Button>
                </DomLink>
                <Button variant="contained" className={classes.butrec} onClick={handleRejected}>
                    Rechazar
                </Button>
                <Button variant="contained" color="primary" className={classes.butac} onClick={handleAccepted}>
                    Aceptar
                </Button>
                </div>
            </Container>
            <Copyright />
            </main>
        </div>
        );
}
