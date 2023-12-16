export const UserCard = ({ username }: { username?: string }) => {
  return (
    <>
      <div>User card of {username ?? "user"}</div>
      <div>password: 123</div>
    </>
  );
};
