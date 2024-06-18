import "./App.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

const style = {
  margin: "8px",
};

function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();

  const onClickGetData = () => getUsers();

  return (
    <div className="App">
      <button onClick={onClickGetData} style={style}>
        データを取得
      </button>
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </>
      )}
    </div>
  );
}

export default App;
