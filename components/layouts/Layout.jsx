import MainNavigation from './MainNavigation';


const Layout = (props) => {
    return (
        <div>
          <MainNavigation />
          <main className="m-auto w-11/12 max-w-2xl">{props.children}</main>
        </div>
      );
}

export default Layout