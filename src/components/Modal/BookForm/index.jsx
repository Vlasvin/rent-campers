import React from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label>Booking Date</label>
        <DatePicker
          selected={null} // Поточна обрана дата
          onChange={(date) => setValue("bookingDate", date)} // Параметр date буде містити обрану дату
        />
        {errors.bookingDate && <span>{errors.bookingDate.message}</span>}
      </div>

      <div>
        <label>Comment</label>
        <textarea {...register("comment")} />
      </div>

      <button type="submit">Send</button>
    </form>
  );
};

export default BookForm;
