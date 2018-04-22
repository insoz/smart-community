import { PAGE_SIZE } from "../constants";
import request from "../../../utils/request";

export function fetch({ page = 1 }) {
  return request({ url: `/api/users?_page=${page}&_limit=${PAGE_SIZE}` });
}

export function remove(id) {
  return request({
    url: `/api/users/${id}`,
    method: "DELETE"
  });
}

export function patch(id, values) {
  return request({
    url: `/api/users/${id}`,
    method: "PATCH",
    body: JSON.stringify(values)
  });
}

export function create(values) {
  return request({
    url: "/api/users",
    method: "POST",
    body: JSON.stringify(values)
  });
}
