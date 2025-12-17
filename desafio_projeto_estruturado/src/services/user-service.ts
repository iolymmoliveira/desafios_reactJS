import { requestBackend } from "../utils/requests";
import * as authService from "./auth-service";

export function findLoggedInUser() {

  const headers = {
    Authorization: "Bearer " + authService.getAccessToken(),
  }

  return requestBackend({ url: `/users/me`, headers });
}

