import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/userMenu/userMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { useAuth } from "hooks";
import { Header } from "./appBarStyled";

export const AppBar = () => {
const {isLoggedIn} = useAuth()

return(
    <>
    <Header>
        <Navigation/>
        {isLoggedIn ? <UserMenu/> : <AuthNav/>}
    </Header>
    <hr />
    </>
    )

}