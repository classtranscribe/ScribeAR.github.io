import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 300,
    marginLeft: 5,
  },
});

function valuetext(value) {
  return `${value}`;
}
export default function PlusMinus(props) {
  const classes = useStyles();
  // useDispatch returns the state modifying function, invoked below.
  const textS = props.text;
  const setTextS = props.setText;
  var bgColor = props.color
  var choice = "primary";
  if (bgColor === "black") {
    choice = "primary";
  } else {
    choice = "secondary";
  }
  const handleInputChange = (event) => {
    setTextS(event.target.value === '' ? '' : Number(event.target.value));
  }

  const handleBlur = () => {
    if (textS < 1) {
      setTextS(1);
    } else if (textS > 15) {
      setTextS(15);
    }
  };
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        TEXTSIZE
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            defaultValue={textS}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            onChange={(e, val) => { setTextS(val) }}
            step={1}
            marks
            min={1}
            max={15}
            color={choice}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={textS}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 15,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
  /* // <div className={styles.itemwrapper}>
  //   <div className={styles.wordwrapper}>
  //     {textS}
  //   </div>
  //   {/* <div className={styles.buttonwrapper}>
  //     <ToggleButton color="inherit" variant="outlined" size="small"
  //       onClick={add}>-</ToggleButton>
  //     <ToggleButton color="inherit" variant="outlined" size="small"
  //       onClick={() => dispatch(props.increment())}>+</ToggleButton>
  //   </div> */
}
