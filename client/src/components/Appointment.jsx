import React, { Component } from 'react';
import { Collapse } from 'react-collapse';
import Card, { CardContent } from 'material-ui/Card';
import { Button } from 'react-bootstrap';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import './Appointment.css'

export default class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      message: '',
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
  }

  onMessageChange(evt) {
    this.setState({ message: evt.target.value });
  }

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const { appt, classes } = this.props;
    return (
      <Card key={appt.datetime} className='card' onClick={appt.status === 'pending' ? this.toggleDrawer : () => {}}>
        <CardContent>
          <div className='content'>
            <div>
              <div className='header'>{appt.datetime}</div>
              <div>
                {appt.purpose}
              </div>
            </div>
          </div>
        </CardContent>
        {
          appt.status === 'pending' ?
            <Collapse isOpened={this.state.drawerOpen}>
              <Divider />
              <CardContent>
                <div>
                  <div className='header'>Message to Patient</div>
                  <form>
                    <div className='margin-bottom'>
                      <TextField
                        name="message"
                        onChange={this.onMessageChange}
                        value={this.state.message}
                        inputProps={{ style: { fontSize: 11 } }}
                        multiline
                        fullWidth
                      />
                    </div>
                    <div>
                      <Button
                        onClick={this.handleSubmit}
                        variant="raised"
                        color="primary"
                        className='action'
                      >
                      Decline Request
                    </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Collapse> : null
        }
      </Card>
    );
  }
}
