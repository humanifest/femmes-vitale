import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { DevStage } from "@/src/_DEV";
import { FeatureFlagContext } from "@/src/contexts/providers";
import DevEffects from "@/src/_DEV/DevStage/DevEffects";
import { devRoutes } from "./routes";
import { ROUTES } from "@/src/contexts/routes";

export default function DevRouter() {
  const { showDevOpts } = useContext(FeatureFlagContext);

  return (
    <Routes>
      {showDevOpts ? (
        <>
          <Route path={devRoutes._} element={<DevStage />}>
            <Route index path={devRoutes.effects._} element={<DevEffects />} />
          </Route>
        </>
      ) : (
        <Route element={<Navigate to={ROUTES._} />} />
      )}
    </Routes>
  );
}
