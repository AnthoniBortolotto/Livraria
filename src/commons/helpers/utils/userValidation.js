export function checkLogin() {
  if (window.localStorage.getItem("token") !== null) {
    return true;
  }
}
