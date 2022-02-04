// import { BrowserRouter } from "react-router-dom";
// import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
// import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/SerachInput";
// import { UserCard } from "./components/organisms/user/UserCard";
// import { DefaultLayout } from "./components/templates/DefaultLayout";
// import { HeaderOnly } from "./components/templates/HeaderOnly";
import { Router } from "./router/Router";
import "./styles.css";

// const user = {
//   name: "じゃけぇ",
//   image: "https://source.unsplash.com/IuJc2qh2TcA",
//   email: "12345@example.com",
//   phone: "090-1111-2222",
//   company: {
//     name: "テスト株式会社"
//   },
//   website: "https://google.com"
// };

export default function App() {
  return (
    // <div className="App">
    // <BrowserRouter>
    // <HeaderOnly>
    // <DefaultLayout>
    // <PrimaryButton>テスト</PrimaryButton>
    // <SecondaryButton>検索</SecondaryButton>
    // <br />
    // <SearchInput />
    // <UserCard user={user} />
    // </DefaultLayout>
    // </HeaderOnly>
    // </BrowserRouter>
    // </div>
    <Router />
  );
}
