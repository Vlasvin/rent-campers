import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as Calendar } from "svg/Calendar.svg";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 24px;
  max-width: 400px;
  /* height: 532px; */
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
`;

export const FormTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-top: 0;
  margin-bottom: 8px;
`;

export const FormSubtitle = styled.p`
  margin-top: 16px;
  font-size: 16px;
  margin-top: 0;
  margin-bottom: 24px;
`;

export const StyledInput = styled.input`
  color: rgba(16, 24, 40, 0.6);
  line-height: 20px;
  margin-bottom: 14px;
  width: 364px;
  max-height: 56px;
  border-radius: 10px;
  background: rgb(247, 247, 247);
  padding: 18px;
  border: none;

  ::placeholder {
    color: #aaa;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const CalendarInput = styled.input`
  border-radius: 10px;
  padding: 18px;
  width: 364px;
  max-height: 56px;
  background-color: rgb(247, 247, 247);
  border: none;
  position: relative;
  margin-bottom: 14px;
  color: rgba(16, 24, 40, 0.6);
  line-height: 20px;

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`;

export const StyledTextarea = styled.textarea`
  color: rgba(16, 24, 40, 0.6);
  line-height: 20px;
  width: 364px;
  min-height: 114px;
  border-radius: 10px;
  background: rgb(247, 247, 247);
  padding: 18px;
  border: none;
  margin-bottom: 24px;

  ::placeholder {
    color: #aaa;
  }
`;

export const StyledButton = styled.button`
  width: 166px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 40px 16px 40px;
  border-radius: 200px;
  color: rgb(255, 255, 255);
  background: rgb(228, 72, 72);
  border: none;

  &:hover {
    background: rgb(216, 67, 67);
  }
`;

export const FormError = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
