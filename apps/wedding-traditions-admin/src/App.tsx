import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { WeddingList } from "./wedding/WeddingList";
import { WeddingCreate } from "./wedding/WeddingCreate";
import { WeddingEdit } from "./wedding/WeddingEdit";
import { WeddingShow } from "./wedding/WeddingShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { CulturalPracticeList } from "./culturalPractice/CulturalPracticeList";
import { CulturalPracticeCreate } from "./culturalPractice/CulturalPracticeCreate";
import { CulturalPracticeEdit } from "./culturalPractice/CulturalPracticeEdit";
import { CulturalPracticeShow } from "./culturalPractice/CulturalPracticeShow";
import { RegistrationList } from "./registration/RegistrationList";
import { RegistrationCreate } from "./registration/RegistrationCreate";
import { RegistrationEdit } from "./registration/RegistrationEdit";
import { RegistrationShow } from "./registration/RegistrationShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WeddingTraditions"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Wedding"
          list={WeddingList}
          edit={WeddingEdit}
          create={WeddingCreate}
          show={WeddingShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="CulturalPractice"
          list={CulturalPracticeList}
          edit={CulturalPracticeEdit}
          create={CulturalPracticeCreate}
          show={CulturalPracticeShow}
        />
        <Resource
          name="Registration"
          list={RegistrationList}
          edit={RegistrationEdit}
          create={RegistrationCreate}
          show={RegistrationShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
