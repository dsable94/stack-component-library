import React from "react";
import { StyledNotification } from './Notification.styled';
import { Icon } from '../Icon';

const Notification = (props) => {
  const { count, variant, size} = props;
  return (
    <StyledNotification count={count} variant={variant}>
      <Icon size={size} icon="notifications" />
    </StyledNotification>
  );
}

export default Notification;