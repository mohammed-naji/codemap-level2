// import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// const validate = (name, value) => {
//   console.log(name, value);
//   switch (name) {
//     case "name":
//       if (value.length == 0) {
//         return "Name field is required";
//       }
//       return null;
//     case "email":
//       if (value.length == 0) {
//         return "Email field is required";
//       }
//       return null;
//     case "phone":
//       if (value.length == 0) {
//         return "Phone field is required";
//       }
//       return null;
//     case "password":
//       if (value.length == 0) {
//         return "Password field is required";
//       }
//       return null;
//     case "confirm_password":
//       if (value.length == 0) {
//         return "Confirm Password field is required";
//       }
//       return null;
//   }
// };

// const App = () => {
//   const [errors, setErrors] = useState(null);
//   const [fields, setFields] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirm_password: "",
//   });

//   const handleChange = (e) => {
//     setErrors({
//       ...errors,
//       [e.target.name]: validate(e.target.name, e.target.value),
//     });

//     setFields({
//       ...fields,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(5);
//   };

//   return (
//     <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
//       {/* {JSON.stringify(fields)}
//       {JSON.stringify(errors)} */}
//       <form
//         className="mx-auto max-w-md space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">
//             Create your account
//           </h1>
//           <p className="mt-1 text-sm text-slate-500">
//             Enter your details to get started.
//           </p>
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             id="name"
//             name="name"
//             onChange={handleChange}
//             placeholder="Your name"
//             required
//             type="text"
//           />
//           {errors?.name && (
//             <small className="text-red-500">{errors.name}</small>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             id="email"
//             name="email"
//             onChange={handleChange}
//             placeholder="you@example.com"
//             required
//             type="email"
//           />
//           {errors?.email && (
//             <small className="text-red-500">{errors.email}</small>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium" htmlFor="phone">
//             Phone
//           </label>
//           <input
//             className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             id="phone"
//             name="phone"
//             onChange={handleChange}
//             placeholder="+1 555 123 4567"
//             required
//             type="tel"
//           />
//           {errors?.phone && (
//             <small className="text-red-500">{errors.phone}</small>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             id="password"
//             minLength="8"
//             name="password"
//             onChange={handleChange}
//             required
//             type="password"
//           />
//           {errors?.password && (
//             <small className="text-red-500">{errors.password}</small>
//           )}
//         </div>

//         <div className="space-y-2">
//           <label
//             className="block text-sm font-medium"
//             htmlFor="confirmPassword"
//           >
//             Confirm password
//           </label>
//           <input
//             className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//             id="confirmPassword"
//             minLength="8"
//             name="confirm_password"
//             onChange={handleChange}
//             required
//             type="password"
//           />
//           {errors?.confirm_password && (
//             <small className="text-red-500">{errors.confirm_password}</small>
//           )}
//         </div>

//         <button
//           className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           type="submit"
//         >
//           Create account
//         </button>
//       </form>
//     </main>
//   );
// };

// export default App;

const schema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone must be at least 10 characters"),
    password: z.string().min(8, "Password at least must be 8 character"),
    confirm_password: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-12 text-slate-900">
      <form
        className="mx-auto max-w-md space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Create your account
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Enter your details to get started.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="name"
            {...register("name")}
            placeholder="Your name"
            type="text"
          />
          {errors.name && (
            <small className="text-red-500">{errors.name.message}</small>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="email"
            {...register("email")}
            placeholder="you@example.com"
            type="email"
          />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="phone"
            name="phone"
            {...register("phone")}
            placeholder="+1 555 123 4567"
            type="tel"
          />
          {errors.phone && (
            <small className="text-red-500">{errors.phone.message}</small>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium" htmlFor="password">
            Password
          </label>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="password"
            minLength="8"
            name="password"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
        </div>

        <div className="space-y-2">
          <label
            className="block text-sm font-medium"
            htmlFor="confirmPassword"
          >
            Confirm password
          </label>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            id="confirmPassword"
            minLength="8"
            name="confirm_password"
            {...register("confirm_password")}
            type="password"
          />
          {errors.confirm_password && (
            <small className="text-red-500">
              {errors.confirm_password.message}
            </small>
          )}
        </div>

        <button
          className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-15"
          type="submit"
          disabled={!isValid}
        >
          Create account
        </button>
      </form>
    </main>
  );
};

export default App;
