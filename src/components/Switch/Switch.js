import React from 'react';
import { StyledSwitch, SwitchLabel } from './Switch.styled';

class Switch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      check: props.isChecked ? true : false,
    };
  }
  handleChecked = (e) => {
    const { check } = this.state;
    this.setState({
      check: !check,
    })
  }

  render() {
  const { onClick, size, id, name, label, isBold, color, isChecked } = this.props;
         return (
            <StyledSwitch {...this.props}>
                { label && 
                <SwitchLabel isBold={isBold} color={color}>
                    {label}
                </SwitchLabel>
                 }
                <label class="switch" >
                <input  type="checkbox" id={id} name={name} checked={this.state.check}  onClick={this.handleChecked} />
                <span class="slider round"></span>
                </label>
            </StyledSwitch>
        );
    }
  };

export default Switch;