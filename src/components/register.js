import React, {useState} from 'react';
import {Typography, TextField, Box, Grid, Button, Checkbox, Link} from '@material-ui/core';
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import { authentication, firestore } from '../firebase';
const Register = () => {

    const [firstname, setFirstname] = useState(null);
    const [middlename, setMiddlename] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobilenumber, setMobilenumber] = useState(null);
    const [birthdate, setBirthdate] = useState(null);
    const [password, setPassword] = useState(null);
    const [rePassword, setRePassword] = useState(null);
    const [isTCApproved, setIsTCApproved] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value) => {
        setOpen(false);
    };
    const handleRegister = () => {
        setErrorMessage('');
        
        if(isTCApproved){
            if(password === rePassword){
                authentication.createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firestore.collection('users')
                    .doc(authentication.currentUser.uid)
                    .set({
                        "firstname": firstname,
                        "middlename": middlename,
                        "lastname": lastname,
                        "mobilenumber": mobilenumber,
                        "birthdate": birthdate
                    })
                    .then(
                        authentication.currentUser.sendEmailVerification()
                        .then(() => {
                            alert('Account has been Created, Please Verify your email chuchu');
                            authentication.signOut();
                        })
                        .catch(error => {
                            setErrorMessage(error.message);
                        })
                    )
                    .catch(error => {
                        setErrorMessage(error.message);
                    });
                })
                .catch(error => {
                    setErrorMessage(error.message);
                });

            } else {
                setErrorMessage("Password and Re-password does not match");
            }

        } else {
            setErrorMessage("We cannot proceed if you did not agree with our terms and conditions");
            handleClickOpen();
        }
    };

    return (
        <>
            <Box m={6}>
                <Typography>{errorMessage}</Typography>
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
                        <TextField 
                            required 
                            fullWidth 
                            style={{marginBottom: "1.5%"}} 
                            variant="outlined" 
                            label="First Name" 
                            placeholder="Juan"
                            onChange={(event) => setFirstname(event.target.value)} />
                        <TextField 
                            fullWidth
                            style={{marginBottom: "1.5%"}} 
                            variant="outlined" 
                            label="Middle Name" 
                            placeholder="Dela"
                            onChange={(event) => setMiddlename(event.target.value)} />
                        <TextField 
                            required 
                            fullWidth 
                            style={{marginBottom: "1.5%"}} 
                            variant="outlined" 
                            label="Last Name" 
                            placeholder="Cruz"
                            onChange={(event) => setLastname(event.target.value)}/>
                    </Grid>
                    <Grid container item xs={6}>
                        <TextField 
                            required
                            fullWidth
                            type="email" 
                            style={{marginBottom: "1.5%"}} 
                            variant="outlined" 
                            label="Email" 
                            placeholder="JuanDelaCruz@email.com"
                            onChange={(event) => setEmail(event.target.value)}/>
                        <TextField 
                            fullWidth
                            style={{marginBottom: "1.5%"}}
                            variant="outlined"
                            label="Mobile Number"
                            placeholder="091010101010"
                            onChange={(event) => setMobilenumber(event.target.value)}/>
                        <TextField 
                            fullWidth
                            type="date" 
                            style={{marginBottom: "1.5%"}}
                            variant="outlined"
                            label="Birthdate"
                            placeholder="Dela"
                            onChange={(event) => setBirthdate(event.target.valueAsDate)} />
                    </Grid>
                </Grid>
            </Box>

            <Box m={6}>
                <TextField 
                    required 
                    fullWidth
                    type="password" 
                    style={{marginBottom: "1.5%"}}
                    variant="outlined"
                    label="Password"
                    placeholder="Password123"
                    onChange={(event) => setPassword(event.target.value)} />
                <TextField 
                    required
                    fullWidth
                    type="password"
                    style={{marginBottom: "1.5%"}} 
                    variant="outlined" 
                    label="Re-type Password" 
                    placeholder="Password123"
                    onChange={(event) => setRePassword(event.target.value)} />
            </Box>

            <Box m={6}>
                <Typography>
                    <Checkbox name="checkedB" color="primary" onChange={() => isTCApproved ? setIsTCApproved(false) : setIsTCApproved(true) } />
                    I agree with the <Link onClick={handleClickOpen} style={{cursor: "pointer"}}>terms and conditions</Link> chuchuness bla bla.
                </Typography>
                <Button variant="contained" color="primary" onClick={handleRegister}>Create Account</Button>
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