import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {},
  info: {
    background: "#0097AC",
    padding: theme.spacing(1),
    color: "#FFFFFF",
    textAlign: "center"
  }
}));

const Step3 = props => {
  const { validateStep, model, changeModel, activeStep } = props;
  const classes = useStyles();

  useEffect(() => {
    if (activeStep !== 2) {
      return;
    }
    validateStep(model.validationCode === "1234");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model.validationCode]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.info}>
          <Typography variant="h5" component="h3">
            We sent you an SMS
          </Typography>
          <Typography component="p">
            Please check yout phone and enter the SMS validation code
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          // disabled={model.validationCode === "1234"}
          type="text"
          label="SMS Code"
          value={model.validationCode}
          name="validationCode"
          margin="normal"
          variant="outlined"
          fullWidth
          inputProps={{ maxLength: 4 }}
          error={
            !model.validationCode &&
            model.validationCode !== undefined &&
            model.validationCode.length !== 4 &&
            model.validationCode !== "1234"
          }
          helperText={
            model.validationCode && model.validationCode !== "1234"
              ? "Invalid Code"
              : null
          }
          onChange={e => {
            changeModel({
              validationCode: e.target.value,
              verified: e.target.value === "1234" || false
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Step3;
