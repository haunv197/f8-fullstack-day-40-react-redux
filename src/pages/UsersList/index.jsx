import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useFetchUsers } from "@/services/user/hooks";

export default function UserList() {
  const { isLoading, data } = useFetchUsers();
  console.log("data", data);

  return (
    <div>
      <div className="container">
        <div className="mx-5">
          <h1 className="my-5">User List</h1>
          <div className="flex flex-wrap gap-y-4">
            {isLoading ? (
              <Spinner />
            ) : (
              data?.map((user) => (
                <div
                  key={user.id}
                  className="size-[100%] md:size-[50%] lg:size-[25%] px-2"
                >
                  <Card>
                    <CardContent>
                      <p>Name: {user.name}</p>
                      <p>Email: {user.email}</p>
                      <p>Phone: {user.phone}</p>
                      <p>Website: {user.website}</p>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
