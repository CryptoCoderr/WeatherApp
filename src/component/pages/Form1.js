import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Button, FormControl } from "react-bootstrap";
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};



function Form() {
  return (
    <>
    <div className="section">
    <form>
      <Box className="createproject">
        <Grid container>
          <Grid item sm={4} xs={4}>
            <Typography  className="heading m-t-0_5">
              Name of the Project
            </Typography>
          </Grid>
          <Grid item sm={8} xs={8}>
            <input
              type="text"
              placeholder="Enter name of the Project"
              className="text-field-admin w-100 p-0_5 b-r-10"
            />
          </Grid>
        </Grid>
      </Box>
      <DatePicker showTime onChange={onChange} onOk={onOk} />

      <Button variant="dark" className="primary-button">
      Submit
    </Button>
      </form>
      </div>


    </>
  );
}

export default Form;
