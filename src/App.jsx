import { useState, useEffect } from "react";
import { login, logout } from "./slice/authSlice";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentAccount()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <>
      <Header />
      <h1 className="bg-purple-500 text-red-500">Welcome To blog</h1>
      <Footer />
    </>
  ) : null;
}

export default App;
