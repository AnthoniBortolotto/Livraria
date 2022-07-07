export function checkLogin() {
  if (window.localStorage.getItem("token") !== null) {
    return true;
  }
}

export function logout() {
  window.localStorage.removeItem("token");
}
