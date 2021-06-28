// @ts-nocheck

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { GameContext } from './MemoryGameReducer'


const StyledWrapperForm = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    min-width: 30vw;
    background-color: #e9e9e9;
    border: 1px solid #d8cece;
    padding: 20px;
    box-shadow: 2px 2px 3px #bababa, -2px -2px 3px #fff;
    border-radius: 5px;
    color: #757171;
`
const Button = styled(Link)`
    background-color: darkgray;
    text-decoration: none;
    padding: 10px 30px;
    font-size: 20px;
    border-radius: 5px;
    color: #fff;
    box-shadow: 2px 2px 3px #bababa, -2px -2px 3px #e9e9e9;
`







export const GameSettingsForm: React.FC = () => {
  const { state, dispatch } = useContext(GameContext);
  

  const handleChange = (event) => {
    dispatch({
      type: 'icon',
      payload: event.target.value
    })
  };
  return (
    <Container BgColor="#bae0dd">
      <StyledWrapperForm>
        <div>
          {console.log(state)}
          <h3>Settings Game</h3>
        </div>
        <form>
          <div style={{ padding: '20px 0', display: 'flex' }}>
            <div style={{ margin: '0 10px 0 0' }}>
              <TextField
                id="widht"
                variant="outlined"
                label="widht (max 6)"
                type="number"
                onChange={(event) => {
                  if (event.target.value > 6) {
                    dispatch({
                      type: 'width',
                      payload: 2
                    })
                  } else if (event.target.value < 2) {
                    dispatch({
                      type: 'width',
                      payload: 6
                    })
                  } else {
                    dispatch({
                      type: 'width',
                      payload: event.target.value
                    })
                  }
                }
                }
                value={state.width}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>

            <div style={{ margin: '0 0 0 10px' }}>
              <TextField
                id="height"
                variant="outlined"
                label="height (max 5)"
                defaultValue="5"
                type="number"
                onChange={(event) => {
                  if (event.target.value > 5) {
                    dispatch({
                      type: 'height',
                      payload: 2
                    })
                  } else if (event.target.value < 2) {
                    dispatch({
                      type: 'height',
                      payload: 5
                    })
                  } else {
                    dispatch({
                      type: 'height',
                      payload: event.target.value
                    })
                  }
                }
                }
                value={state.height}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div>
            <Typography id="discrete-slider" gutterBottom>
              Timer
              </Typography>
            <Slider
              value={state.timer}
              getAriaValueText={() => state.timer}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              onChange={(e, newValue) => dispatch({
                type: 'timer',
                payload: newValue
              })}
              step={10}
              min={40}
              max={180}
            />
          </div>
          <div style={{ padding: '20px 0' }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Icon</FormLabel>
              <RadioGroup aria-label="icon" name="gender1" value={state.icon} onChange={handleChange}>
                <FormControlLabel value="emoji" control={<Radio />} label="emoji" />
                <FormControlLabel value="food" control={<Radio />} label="food" />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
            <Button to="/Memory-game">Start</Button>
          </div>
        </form>
      </StyledWrapperForm>
    </Container>
  )
}
