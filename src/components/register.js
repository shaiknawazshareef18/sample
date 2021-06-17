import React from 'react';
import {Typography, TextField, Box, Grid, Button, Checkbox, Link} from '@material-ui/core';
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';

const Register = () => {

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
    };

    return (
        <>
            <Box m={6}>
                <Typography variant="h2" style={{fontWeight: "bolder"}}>Registration Page</Typography>
                <Typography variant="body1">
                    Note: Lorem ipsum keme keme keme 48 years ano chuckie at ang shonget na ang ugmas at ang tanders ugmas ano jowabella
                    tetetet doonektanders kabog shontis chopopo oblation katol shonga-shonga pinkalou nang kasi at ang shongaers boyband
                    kemerloo nang at nang bakit 48 years lorem ipsum keme keme jongoloids bonggakea bakit kasi kasi tetetet at ang urky
                    chapter at bakit ma-kyonget shontis tamalis at at kasi neuro quality control.
                </Typography>
            </Box>

            <Box m={6}>
                <Grid container spacing={4}>
                    <Grid container item xs={6}>
                        <TextField required fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="First Name" placeholder="Juan" />
                        <TextField fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Middle Name" placeholder="Dela" />
                        <TextField required fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Last Name" placeholder="Cruz"/>
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField type="email" required fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Email" placeholder="JuanDelaCruz@email.com" />
                        <TextField fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Mobile Number" placeholder="091010101010" />
                        <TextField type="date" fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Birthdate" placeholder="Dela" />
                    </Grid>
                </Grid>
            </Box>

            <Box m={6}>
                <TextField type="password" required fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Password" placeholder="Password123" />
                <TextField type="password" required fullWidth style={{marginBottom: "1.5%"}} variant="outlined" label="Re-type Password" placeholder="Password123" />
            </Box>

            <Box m={6}>
                <Typography>
                    <Checkbox name="checkedB" color="primary"/>
                    I agree with the <Link onClick={handleClickOpen} style={{cursor: "pointer"}}>terms and conditions</Link> chuchuness bla bla.
                </Typography>
                <Button variant="contained" color="primary">Create Account</Button>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Terms and Conditions</DialogTitle>
                <DialogContent>
                    <Typography>
                        Mahogany mahogany sangkatuts at pamin na ang at ang chipipay nang shogal pranella ang shonget nang wiz bakit jutay at ang shongaers
                        ng klapeypey-klapeypey na mahogany at ang Gino at ang shontis sa neuro ang klapeypey-klapeypey nang na jutay nang 48 years matod ang
                        at sa Cholo paminta , cheapangga chuckie at ang at nang na ang jowabella bonggakea paminta at nang nang guash makyonget tungril
                        chopopo effem buya at ang mahogany pamenthol warla balaj na wasok bakit keme matod bakit ang conalei shokot ng ganda lang ganders sa
                        tetetet nang krang-krang na ang katol thunder na ang pranella jowabella tetetet na ano at ang jowabelles Mike at wiz chuckie
                        jupang-pang kasi jowabelles jowabelles keme.
                    </Typography>
                    <br/>
                    <Typography>
                        Wasok kasi keme keme tamalis planggana keme keme balaj at bakit krung-krung na ang nakakalurky na nang at nang sa sa at na ang bakit
                        ang na ang ang biway chaka daki nang na ang keme keme pamenthol bakit chopopo pamin mahogany otoko bakit chaka wiz Gino nang chipipay
                        shongaers ang bakit Cholo bakit jongoloids antibiotic ng katagalugan tamalis thunder sa bigalou conalei doonek ugmas tungril makyonget
                        ng at bakit shonga-shonga planggana na chopopo shonga-shonga katol na ang at nang quality control at nang wiz na nang bakit kemerloo
                        sa ng ng Gino nakakalurky ano quality control neuro na ang pranella at nang at dites juts sa majubis at bakit ang keme keme na ang guash
                        na ang matod ng makyonget.
                    </Typography>
                    <br/>
                    <Typography>
                        Sa bokot chuckie shokot at ang antibiotic kasi ganda lang kasi lulu jongoloids emena gushung chaka kabog boyband , at bakit mabaho ano
                        kasi ano ng chuckie warla wasok tetetet at ang ang ng at ang , at at bakit mahogany kasi sa ng ng mabaho mahogany klapeypey-klapeypey
                        katagalugan na ano mahogany wasok boyband nang ang ang effem biway Mike doonek fayatollah kumenis shonga jongoloids na at ang shonget
                        Cholo juts biway wasok bakit effem katol shonget ano effem jupang-pang paminta juts at nang ugmas tetetet jowabelles ang bigalou at ang
                        daki shongaers jongoloids at sa na jongoloids nang bakit otoko at ang chopopo keme keme ano at nang chapter warla pamenthol.
                    </Typography>
                    <br/>
                    <Typography>
                        Wrangler ang ng intonses pranella na ang shala majonders mahogany na daki pranella effem ano na ang ang at ang na ang keme at at nang 
                        oblation at ang sudems at bakit ano at bakit sangkatuts jowabelles na bella chaka pamin bonggakea cheapangga at at nang paminta at 
                        doonek thunder makyonget at bakit buya ang pamenthol sa mabaho pinkalou at ang biway borta ang cheapangga bakit ang cheapangga tanders 
                        Gino bokot katol ng tetetet intonses tamalis neuro katagalugan at bakit pamin Gino emena gushung at nang sa at kasi makyonget bokot katol
                        shala bokot pamenthol klapeypey-klapeypey ano urky mabaho tamalis nakakalurky sa jowabelles matod lorem ipsum keme keme Cholo at ang 
                        krung-krung wasok chopopo klapeypey-klapeypey shontis thunder.
                    </Typography>
                    <br/>
                    <Typography>
                        Shala sa 48 years fayatollah kumenis na ang at bakit borta at bakit na ng valaj ang shongaers chapter na at nang mabaho
                        klapeypey-klapeypey mahogany at ang ng borta wasok bokot shonga shala doonek fayatollah kumenis tamalis sangkatuts chipipay intonses
                        na conalei ma-kyonget chopopo shokot boyband na ang borta warla ano klapeypey-klapeypey kasi intonses jowabelles buya ng neuro ganders
                        kasi nang mashumers jowabella shonga jowabelles bigalou shongaers bakit jutay at ang kabog ng sa pamenthol at nang valaj matod na ang 
                        keme bella intonses paminta na mahogany ang at bakit at ang keme Cholo sangkatuts na mabaho chipipay katagalugan at wrangler pamentos 
                        kasi jupang-pang cheapangga ang borta ng makyonget kasi paminta jongoloids tetetet chopopo.
                    </Typography>
                </DialogContent>
            </Dialog>
            
        </>
    );
}

export default Register;