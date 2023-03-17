import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return ( 
    <Box sx={{minHeight: "80vh", display:'flex',flexDirection:'column', justifyContent: "center", alignItems: "center"}}>
      <Typography sx={{fontFamily: '"proza-libre", sans-serif', fontSize:'48px' ,color:'#000'}}>404 Error</Typography>
      <Typography sx={{fontFamily: '"proza-libre", sans-serif', fontSize:'20px', color:'#000'}}>This page could not be found / No se pudo encontrar la página</Typography>
    </Box>
   );
}
 
export default NotFound;