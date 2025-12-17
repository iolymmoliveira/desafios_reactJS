import { useEffect, useState } from "react";
import "./styles.css";
import type { UserDTO } from "../../../models/user";
import * as userService from "../../../services/user-service";

export default function AdminHome() {

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findLoggedInUser()
      .then(response => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Error: ", error);
      })
  }, [])

  return (
    <main>
      <section id="dsc-admin-home-section" className="dsc-container">
        <h2 className="dsc-section-title">Bem vindo à área administrativa {user?.name}!</h2>
      </section>
    </main>
  )
}