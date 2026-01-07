import httpRequest from "@/utils/httpRequest";

async function getUsers() {
  const response = await httpRequest.get("/users");
  return response;
}

export { getUsers };
