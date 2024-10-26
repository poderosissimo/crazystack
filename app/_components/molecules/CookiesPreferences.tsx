"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export function CookieFooter() {
  const { t } = useTranslation(["LANDING"]);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [cookiesRejected, setCookiesRejected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("cookiesAccepted");
    const rejected = sessionStorage.getItem("cookiesRejected");
    if (accepted) setCookiesAccepted(true);
    if (rejected) setCookiesRejected(true);
  }, []);

  if (cookiesAccepted || cookiesRejected) {
    return null;
  }

  return (
    <footer className="fixed bottom-0 w-full bg-foreground py-4 px-8 flex justify-between items-center z-50 flex-col md:flex-row border-t border-gray-600 shadow-md animate-slideIn">
      <div>
        <p className="text-sm md:text-base text-center text-background">
          {t("LANDING:COOKIE_NOTICE", {
            defaultValue:
              "Utilizamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com a nossa Política de Privacidade.",
          })}
        </p>
        <div className="flex mt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-white text-sm md:text-base hover:underline"
          >
            {t("LANDING:COOKIE_SETTINGS", {
              defaultValue: "Configurações de Cookies",
            })}
          </button>
          <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noreferrer"
            className="text-white text-sm md:text-base ml-4 hover:underline"
          >
            {t("LANDING:PRIVACY_POLICY", {
              defaultValue: "Política de Privacidade",
            })}
          </a>
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <ButtonCookies
          setCookiesAccepted={setCookiesAccepted}
          setCookiesRejected={setCookiesRejected}
        />
      </div>
      <CookiesPreferencesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setCookiesAccepted={setCookiesAccepted}
        setCookiesRejected={setCookiesRejected}
      />
    </footer>
  );
}

function ButtonCookies({ setCookiesAccepted, setCookiesRejected }) {
  const { t } = useTranslation(["LANDING"]);

  const handleAcceptCookies = () => {
    sessionStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  const handleRejectCookies = () => {
    sessionStorage.setItem("cookiesRejected", "true");
    setCookiesRejected(true);
  };

  return (
    <div className="flex items-center justify-center">
      <Button
        className="w-full my-2 md:my-0 mx-2 bg-teal-500 hover:bg-teal-600 transition-all duration-300 rounded-full shadow-md"
        onClick={handleAcceptCookies}
      >
        {t("LANDING:ACCEPT", { defaultValue: "Aceitar" })}
      </Button>
      <Button
        variant="destructive"
        className="w-full my-2 md:my-0 mx-2 transition-all duration-300 rounded-full shadow-md"
        onClick={handleRejectCookies}
      >
        {t("LANDING:REJECT", { defaultValue: "Rejeitar" })}
      </Button>
    </div>
  );
}

function CookiesPreferencesModal({
  isOpen,
  onClose,
  setCookiesAccepted,
  setCookiesRejected,
}) {
  const { t } = useTranslation(["LANDING"]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <CookieIcon className="mr-2" />
            {t("LANDING:COOKIE_PREFERENCES_TITLE", {
              defaultValue: "Preferências de Cookies",
            })}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-gray-500">
            {t("LANDING:COOKIE_PREFERENCES_DESCRIPTION", {
              defaultValue:
                "Gerencie suas configurações de cookies. Você pode habilitar ou desabilitar diferentes tipos de cookies abaixo.",
            })}
          </p>
          <CookiePreferenceMolecule
            id="essentials"
            label={t("LANDING:ESSENTIAL_COOKIES_TITLE", {
              defaultValue: "Cookies Essenciais",
            })}
            description={t("LANDING:ESSENTIAL_COOKIES_DESCRIPTION", {
              defaultValue:
                "Estes cookies são necessários para o funcionamento do site e não podem ser desativados.",
            })}
          />
          <CookiePreferenceMolecule
            id="analytics"
            label={t("LANDING:ANALYTICS_COOKIES_TITLE", {
              defaultValue: "Cookies de Análise",
            })}
            description={t("LANDING:ANALYTICS_COOKIES_DESCRIPTION", {
              defaultValue:
                "Estes cookies nos permitem contar visitas e fontes de tráfego para medir e melhorar o desempenho do nosso site.",
            })}
          />
          <CookiePreferenceMolecule
            id="marketing"
            label={t("LANDING:MARKETING_COOKIES_TITLE", {
              defaultValue: "Cookies de Marketing",
            })}
            description={t("LANDING:MARKETING_COOKIES_DESCRIPTION", {
              defaultValue:
                "Estes cookies nos ajudam a mostrar anúncios relevantes para você.",
            })}
          />
        </div>
        <DialogFooter>
          <ButtonCookies
            setCookiesAccepted={setCookiesAccepted}
            setCookiesRejected={setCookiesRejected}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function CookiePreferenceMolecule({ id, label, description }) {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="flex justify-between items-start space-y-2">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{label}</Label>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch id={id} checked={isChecked} onCheckedChange={setIsChecked} />
    </div>
  );
}

function CookieIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </svg>
  );
}
