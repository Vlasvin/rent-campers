import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import {
  FormTitle,
  FormSubtitle,
  StyledButton,
  StyledForm,
  StyledInput,
  FormError,
  StyledTextarea,
  Label,
  CalendarInput,
} from "./styled";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setValue("bookingDate", event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
    // window.location.reload();
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Book your campervan now</FormTitle>
      <FormSubtitle>
        Stay connected! We are always ready to help you.
      </FormSubtitle>

      <StyledInput
        type="text"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <StyledInput
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
        })}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}
      <Label>
        <CalendarInput
          type="date"
          name="date"
          min={currentDate}
          onChange={handleDateChange}
          {...register("bookingDate", {
            required: "Booking date is required",
          })}
        />
      </Label>
      {errors.bookingDate && (
        <FormError>{errors.bookingDate.message}</FormError>
      )}

      <StyledTextarea placeholder="Comment" {...register("comment")} />

      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
};

export default BookForm;
