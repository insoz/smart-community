// import { PAGE_SIZE } from "../constants";
import request from "../../../utils/request";
import api from "../../../apis";

export function fetchUser(id) {
  return request({ url: api.getUser });
}
