import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
// import { Navigate, Routes, Route, useNavigate } from "react-router-dom";
import { DevStage } from "@/src/_DEV";
import { FeatureFlagContext } from "@/src/contexts/providers";
import DevTodos from "@/src/_DEV/DevStage/DevTodos";
import DevEffects from "@/src/_DEV/DevStage/DevEffects";
// import EntityUpdate from "@/src/_DEV/EntityList/EntityUpdate";
import { devRoutes } from "./routes";
import DevTransactions from "@/src/_DEV/DevStage/DevTransactions";
import { ROUTES } from "@/src/contexts/routes";

export default function DevRouter() {
  const { showDevOpts } = useContext(FeatureFlagContext);
  // const nav = useNavigate();

  return (
    <Routes>
      {showDevOpts ? (
        <>
          <Route path={devRoutes._} element={<DevStage />}>
            <Route index path={devRoutes.effects._} element={<DevEffects />} />
            <Route path={devRoutes.todo._}>
              <Route index element={<DevTodos />} />
            </Route>
            <Route path={devRoutes.transaction._}>
              <Route index element={<DevTransactions />} />
            </Route>
          </Route>
        </>
      ) : (
        <Route element={<Navigate to={ROUTES._} />} />
      )}
    </Routes>
  );
}
