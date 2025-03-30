"use client";

import { CardAtom } from "@/components/atoms/Card.atom";
import { TextAtom } from "@/components/atoms/Text.atom";

const Home = () => {
  return (
    <div className="no-scrollbar container mx-auto min-h-screen w-full overflow-x-hidden overflow-y-scroll">
      <div className="mt-8 flex flex-col gap-y-8 px-6">
        <CardAtom
          title={
            <TextAtom size="large" isBold>
              Finde Deine Daten
            </TextAtom>
          }
          description={
            <TextAtom size="small">
              Wenn du neu auf dieser Plattform bist, gib bitte deine
              E-Mail-Adresse ein, um dein Konto einzurichten.
            </TextAtom>
          }
        />
        <div className="flex flex-row gap-x-6">
          <CardAtom
            className="w-[65%]"
            title={
              <TextAtom size="large" isBold>
                Deine Kurse
              </TextAtom>
            }
            description={
              <TextAtom size="small">
                Füge alle deine Kurse und Noten hinzu, um deinen
                Studienfortschritt genau zu verfolgen.
              </TextAtom>
            }
          />
          <CardAtom
            className="w-[35%]"
            title={
              <TextAtom size="large" isBold>
                Überblick
              </TextAtom>
            }
            description={
              <TextAtom size="small">Dein Studium auf einen Blick.</TextAtom>
            }
          />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
