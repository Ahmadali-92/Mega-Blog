import React from "react";
import { useSelector } from "react-redux";
import LogoutBTN from "./LogoutBTN";
import { useNavigate } from "react-router-dom";
import Container from "postcss/lib/container";

function Header() {
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth.status);

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authData,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authData,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authData,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authData,
    },
  ];

  return (
    <>
      <Container>
        <nav>
          <ul>
            {navItem.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.slug);
                    }}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authData ? (
              <li>
                <LogoutBTN />
              </li>
            ) : null}
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Header;
