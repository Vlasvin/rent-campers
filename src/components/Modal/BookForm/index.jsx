import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormTitle,
  FormSubtitle,
  StyledButton,
  StyledForm,
  StyledInput,
  FormError,
  StyledTextarea,
} from "./styled";

const BookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.reload();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormTitle>Book your campervan now</FormTitle>
      <FormSubtitle>
        Stay connected! We are always ready to help you.
      </FormSubtitle>
      <div>
        <StyledInput
          type="text"
          placeholder="Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <FormError>{errors.name.message}</FormError>}
      </div>
      <div>
        <StyledInput
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </div>
      <div>
        <DatePicker
          selected={null}
          onChange={(date) => setValue("bookingDate", date)}
          placeholder="Name"
        />
        {errors.bookingDate && (
          <FormError>{errors.bookingDate.message}</FormError>
        )}
      </div>
      <div>
        <StyledTextarea placeholder="Comment" {...register("comment")} />
      </div>
      <StyledButton type="submit">Send</StyledButton>
    </StyledForm>
  );
};

export default BookForm;
