import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import Header from "./components/Layout/Header";
import LangProvider from "./store/LangProvider";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Section from "./components/UI/Section";
import ContentBlock from "./components/UI/ContentBlock";

const Home = React.lazy(() => import("./components/Content/Home"));
const Program = React.lazy(() => import("./components/Content/Program"));
const Dotaznik = React.lazy(() => import("./components/Content/Dotaznik"));
const Kontakt = React.lazy(() => import("./components/Content/Kontakt"));

const App = () => {
  return (
    <LangProvider>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <Section>
                  <ContentBlock>
                    <LoadingSpinner />
                  </ContentBlock>
                </Section>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/program"
          element={
            <Suspense
              fallback={
                <Section>
                  <ContentBlock>
                    <LoadingSpinner />
                  </ContentBlock>
                </Section>
              }
            >
              <Program />
            </Suspense>
          }
        />
        <Route
          path="/dotaznik"
          element={
            <Suspense
              fallback={
                <Section>
                  <ContentBlock>
                    <LoadingSpinner />
                  </ContentBlock>
                </Section>
              }
            >
              <Dotaznik />
            </Suspense>
          }
        />
        <Route
          path="/kontakt"
          element={
            <Suspense
              fallback={
                <Section>
                  <ContentBlock>
                    <LoadingSpinner />
                  </ContentBlock>
                </Section>
              }
            >
              <Kontakt />
            </Suspense>
          }
        />
      </Routes>
    </LangProvider>
  );
};

export default App;
