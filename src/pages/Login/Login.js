import { LoginForm } from "components/LoginForm/LoginForm";
// import { Helmet } from 'react-helmet';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const Login = () => {
  return (
    <HelmetProvider>
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
    </HelmetProvider>
  );
}

export default Login;