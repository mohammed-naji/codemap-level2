import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db, google } from "./config/firebase";
import { toast, Toaster } from "react-hot-toast";
import { FaGoogle, FaSignOutAlt, FaUser } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { log } from "firebase/firestore/pipelines";

const emptyForm = {
  name: "",
  instructor: "",
  category: "",
  duration: "",
  status: "Active",
};

const App = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [editCourse, setEditCourse] = useState(null);

  // Auth
  const [user, setUser] = useState(null);
  const [loginModal, setLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleLoginWithGoogle = async () => {
    await signInWithPopup(auth, google);
    setLoginModal(false);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const logout = async () => {
    await signOut(auth);
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginChange = (event) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      // Try to login first
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password,
      );

      console.log("Login successful");

      setLoginModal(false);
      setLoginForm({
        email: "",
        password: "",
      });
    } catch (err) {
      // Account doesn't exist -> create it
      if (err.code === "auth/invalid-credential") {
        try {
          await createUserWithEmailAndPassword(
            auth,
            loginForm.email,
            loginForm.password,
          );

          console.log("Account created successfully");

          setLoginModal(false);
          setLoginForm({
            email: "",
            password: "",
          });
        } catch (createError) {
          console.log("Create account error:", createError);
        }
      } else {
        // Wrong password or other login error
        console.log("Login error:", err);
      }
    }
  };

  // const getRecords = async () => {
  //   try {
  //     const data = await getDocs(collection(db, "courses"));
  //     let receivedCourses = data.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     setCourses(receivedCourses);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getRecords();
  // }, []);

  const getRecords = async () => {
    try {
      const snapshot = await getDocs(collection(db, "courses"));
      // SELECT * FROM courses

      const courses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCourses(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecords();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (editCourse) {
      await updateDoc(doc(db, "courses", editCourse), form);
      // UPDATE courses SET col=val WHERE CONDITION
      getRecords();
      setForm(emptyForm);
      setIsModalOpen(false);
      toast.info("Course updated successfully");
    } else {
      await addDoc(collection(db, "courses"), form);
      // INSERT INTO courses () VALUES ()
      getRecords();
      setForm(emptyForm);
      setIsModalOpen(false);
      toast.success("Course added successfully");
    }
  };

  const handleDeleteCourse = async (id) => {
    if (confirm("Are you sure?!")) {
      await deleteDoc(doc(db, "courses", id));
      // DELETE FROM courses WHERE CONDITION
      getRecords();
    }
  };

  const handleEditCourse = (id) => {
    setEditCourse(id);
    setIsModalOpen(true);

    const course = courses.find((el) => el.id === id);
    setForm(course);
  };

  const handleCloseModal = () => {
    setEditCourse(null);
    setIsModalOpen(false);
    setForm(emptyForm);
  };

  return (
    <>
      <Toaster />
      <main className="min-h-screen bg-slate-50 p-4 sm:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Learning management
              </p>
              <h1 className="text-3xl font-bold text-slate-900">All Courses</h1>
              <p className="mt-1 text-slate-500">
                Manage and organize your available courses.
              </p>
            </div>

            {user ? (
              <div className="flex gap-4 items-center">
                <FaSignOutAlt onClick={logout} />
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
                >
                  <span className="text-xl leading-none">+</span>
                  Add New Course
                </button>
              </div>
            ) : (
              <button
                onClick={() => setLoginModal(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-600 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-slate-700"
              >
                <FaUser />
                Login
              </button>
            )}
          </div>

          {loading && <p>Loading data...</p>}
          {!loading && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px] text-left">
                  <thead className="border-b border-slate-200 bg-slate-50">
                    <tr>
                      {[
                        "Course",
                        "Instructor",
                        "Category",
                        "Duration",
                        "Status",
                        "Actions",
                      ].map((heading) => (
                        <th
                          key={heading}
                          className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {courses.map((course) => (
                      <tr
                        key={course.id}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 font-bold text-indigo-600">
                              {course.name.charAt(0)}
                            </div>
                            <span className="font-semibold text-slate-800">
                              {course.name}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-slate-600">
                          {course.instructor}
                        </td>
                        <td className="px-6 py-5">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                            {course.category}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-slate-600">
                          {course.duration}
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`rounded-full px-3 py-1 text-sm font-medium ${
                              course.status === "Active"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-amber-100 text-amber-700"
                            }`}
                          >
                            {course.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-slate-600">
                          <button
                            onClick={() => handleEditCourse(course.id)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-2 py-1 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 mx-1 cursor-pointer"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCourse(course.id)}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-2 py-1 font-semibold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {editCourse ? "Edit Course" : "Add New Course"}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Enter the course information below.
                  </p>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="text-2xl text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  ["name", "Course Name", "e.g. Advanced JavaScript"],
                  ["instructor", "Instructor", "e.g. John Smith"],
                  ["category", "Category", "e.g. Development"],
                  ["duration", "Duration", "e.g. 8 Weeks"],
                ].map(([name, label, placeholder]) => (
                  <div key={name}>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      {label}
                    </label>
                    <input
                      required
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    />
                  </div>
                ))}

                <div>
                  <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Status
                  </label>
                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  >
                    <option>Active</option>
                    <option>Draft</option>
                  </select>
                </div>

                <div className="flex justify-end gap-3 pt-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="rounded-xl px-5 py-3 font-semibold text-slate-600 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
                  >
                    {editCourse ? "Edit Course" : "Add Course"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {loginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Login</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Sign in to manage your courses.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setLoginModal(false)}
                  className="text-2xl text-slate-400 hover:text-slate-700"
                >
                  ×
                </button>
              </div>

              <button
                type="button"
                onClick={handleLoginWithGoogle}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>

              <div className="my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <span className="h-px flex-1 bg-slate-200" />
                or
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="login-email"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Email address
                  </label>
                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={handleLoginChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
                >
                  Login with email
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
