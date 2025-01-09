import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/base.css";
import MainPage from "./components/main/MainPage";
import CardPortfolio from "./components/card portfolio/CardPortfolio";
import projects from "./data/projects.json";
import ScrollToTop from "./components/scroll to top/ScrollToTop";
import NotFoundPage from "./components/not found page/NotFoundPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          {projects.map((project, index) => (
            <Route
              key={index}
              path={project.url}
              element={
                <CardPortfolio
                  category={project.category}
                  project_date={project.project_date}
                  project_description={project.project_description}
                  img={project.img}
                  name_project={project.name_project}
                />
              }
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   setIsLoading(false); // Завершаем загрузку
// }, []);

// if (isLoading) {
//   // Показываем спиннер, пока идет загрузка
//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <Spinner style={{ color: "#cc1616" }} animation="border" role="status">
//         <span className="visually-hidden">Загрузка...</span>
//       </Spinner>
//     </div>
//   );
// }
