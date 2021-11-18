import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
   root: {
       maxWidth: '100%',
   },
   media: {
       height: '50%',
       paddingTop: '86.25%',
   },
   cardActions: {
       display: 'flex',
       justifyContent: 'flex-end',
   },
   cardContent: { 
       display: 'flex',
       justifyContent: 'space-between',
   },
}));