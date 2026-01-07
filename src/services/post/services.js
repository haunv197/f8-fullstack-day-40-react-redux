import httpRequest from "@/utils/httpRequest";

async function getPosts() {
  const response = await httpRequest.get("/posts");
  return response;
}

export { getPosts };
