import { Briefcase, HandshakeIcon, User } from "lucide-react";
import { FeatureItem } from "../molecules/feature-item";

interface SectionFeaturesProps {
  children?: React.ReactNode;
}

export function SectionFeatures({ children, ...rest }: SectionFeaturesProps) {
  // Note: I'm using placeholder translations here. You'll need to implement your own translation solution.
  const t = (key: string, options?: { defaultValue: string }) =>
    options?.defaultValue || key;

  return (
    <section className="py-12 md:py-24 lg:py-32 px-4 md:px-6" {...rest}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter leading-none mb-4">
          {t("LANDING:FEATURES_TITLE", {
            defaultValue: "Principais Funcionalidades",
          })}
        </h2>
        <p className="text-lg mb-8">
          {t("LANDING:FEATURES_DESCRIPTION", {
            defaultValue:
              "Descubra as poderosas funcionalidades que fazem da nossa plataforma a melhor escolha para suas necessidades de mudança.",
          })}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 mt-8">
          <FeatureItem
            icon={<HandshakeIcon className="w-12 h-12 text-primary" />}
            title={t("LANDING:FEATURE_1_TITLE", {
              defaultValue: "Seja um Belezeiro",
            })}
            description={t("LANDING:FEATURE_1_DESCRIPTION", {
              defaultValue:
                "Junte-se à nossa plataforma e comece a oferecer seus serviços com horário marcado para uma ampla base de clientes.",
            })}
          />
          <FeatureItem
            icon={<User className="w-12 h-12 text-primary" />}
            title={t("LANDING:FEATURE_2_TITLE", {
              defaultValue: "Agende um Serviço",
            })}
            description={t("LANDING:FEATURE_2_DESCRIPTION", {
              defaultValue:
                "Agende serviços de beleza, bem-estar e saúde com profissionais qualificados e experientes.",
            })}
          />
          <FeatureItem
            icon={<Briefcase className="w-12 h-12 text-primary" />}
            title={t("LANDING:FEATURE_3_TITLE", {
              defaultValue: "Ganhe como profissional",
            })}
            description={t("LANDING:FEATURE_3_DESCRIPTION", {
              defaultValue:
                "Torne-se um profissional Belezix e ganhe renda extra oferecendo serviços de beleza.",
            })}
          />
        </div>
      </div>
    </section>
  );
}
