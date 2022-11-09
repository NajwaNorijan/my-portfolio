import Header from "./Header";
import NavigationBar from "./NavigationBar";

const AppLayout = (props) => {
  return (
    <>
      <Header />
      <div className="px-10 bg-white dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <NavigationBar />
          {props.children}
        </section>
      </div>
    </>
  );
};

export default AppLayout;
