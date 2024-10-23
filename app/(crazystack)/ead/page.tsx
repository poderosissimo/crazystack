"use client";

import { useState, useEffect, useRef } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  PlayCircle,
  Award,
  Star,
  Link as LinkIcon,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const courseModules = [
  {
    id: 1,
    title: "Introdução ao Curso",
    lessons: [
      {
        id: 1,
        title: "Boas-vindas",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "5:20",
        xp: 10,
        description:
          "Nesta aula, daremos as boas-vindas e apresentaremos uma visão geral do curso.",
        relatedLinks: [
          {
            title: "Guia do Estudante",
            url: "https://exemplo.com/guia-do-estudante",
          },
          { title: "Fórum de Discussão", url: "https://exemplo.com/forum" },
        ],
      },
      {
        id: 2,
        title: "Visão Geral do Curso",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "10:15",
        xp: 20,
        description:
          "Apresentaremos os objetivos do curso e o que você aprenderá em cada módulo.",
        relatedLinks: [
          {
            title: "Estrutura do Curso",
            url: "https://exemplo.com/estrutura-do-curso",
          },
          {
            title: "Calendário de Aulas",
            url: "https://exemplo.com/calendario",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Fundamentos",
    lessons: [
      {
        id: 3,
        title: "Conceitos Básicos",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "15:30",
        xp: 30,
        description:
          "Aprenda os conceitos fundamentais que serão a base para todo o curso.",
        relatedLinks: [
          {
            title: "Glossário de Termos",
            url: "https://exemplo.com/glossario",
          },
          {
            title: "Leitura Complementar",
            url: "https://exemplo.com/leitura-complementar",
          },
        ],
      },
      {
        id: 4,
        title: "Primeiros Passos",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "12:45",
        xp: 25,
        description:
          "Comece a praticar com exercícios simples para fixar os conceitos aprendidos.",
        relatedLinks: [
          {
            title: "Exercícios Práticos",
            url: "https://exemplo.com/exercicios",
          },
          { title: "Recursos Adicionais", url: "https://exemplo.com/recursos" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Técnicas Avançadas",
    lessons: [
      {
        id: 5,
        title: "Estratégias Avançadas",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "20:00",
        xp: 40,
        description:
          "Explore técnicas avançadas para levar suas habilidades ao próximo nível.",
        relatedLinks: [
          {
            title: "Estudo de Caso",
            url: "https://exemplo.com/estudo-de-caso",
          },
          { title: "Artigo Científico", url: "https://exemplo.com/artigo" },
        ],
      },
      {
        id: 6,
        title: "Estudo de Caso",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "18:30",
        xp: 35,
        description:
          "Analise um caso real e aplique os conhecimentos adquiridos no curso.",
        relatedLinks: [
          { title: "Dados do Estudo", url: "https://exemplo.com/dados" },
          {
            title: "Discussão no Fórum",
            url: "https://exemplo.com/forum-discussao",
          },
        ],
      },
    ],
  },
];

const achievements = [
  {
    id: 1,
    title: "Iniciante",
    description: "Complete sua primeira aula",
    icon: "🌟",
  },
  { id: 2, title: "Dedicado", description: "Assista 5 aulas", icon: "🏆" },
  {
    id: 3,
    title: "Mestre",
    description: "Complete todos os módulos",
    icon: "🎓",
  },
];

const levels = [
  { name: "Novato", minXP: 0, icon: "🌱" },
  { name: "Aprendiz", minXP: 50, icon: "🌿" },
  { name: "Estudante", minXP: 100, icon: "🌳" },
  { name: "Especialista", minXP: 200, icon: "🌴" },
  { name: "Mestre", minXP: 300, icon: "🌺" },
];

export default function CourseModules() {
  interface Lesson {
    id: number;
    title: string;
    videoUrl: string;
    duration: string;
    xp: number;
    description: string;
    relatedLinks: { title: string; url: string }[];
  }

  const [activeVideo, setActiveVideo] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Lesson[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<number[]>(
    [],
  );
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const [xp, setXP] = useState(0);
  const [level, setLevel] = useState(levels[0]);
  const videoRef = useRef(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
      });

      playerRef.current.on("timeupdate", () => {
        const progress = playerRef.current
          ? (playerRef.current.currentTime / playerRef.current.duration) * 100
          : 0;
        setWatchedPercentage(progress);
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [activeVideo]);

  useEffect(() => {
    const newLevel = levels.reduce(
      (acc, lvl) => (xp >= lvl.minXP ? lvl : acc),
      levels[0],
    );
    if (newLevel.name !== level.name) {
      setLevel(newLevel);
      toast({
        title: "Novo Nível Alcançado!",
        description: `${newLevel.icon} Parabéns! Você atingiu o nível ${newLevel.name}!`,
      });
    }
  }, [xp, level.name]);

  const handleVideoEnd = () => {
    if (activeVideo && watchedPercentage >= 90) {
      const newCompletedLessons = [...completedLessons, activeVideo];
      setCompletedLessons(newCompletedLessons);
      const newXP = xp + activeVideo.xp;
      setXP(newXP);
      toast({
        title: "Aula Concluída!",
        description: `Você ganhou ${activeVideo.xp} XP! Total: ${newXP} XP`,
      });
      checkAchievements(newCompletedLessons);
    }
  };

  const checkAchievements = (completedLessons: string | any[]) => {
    const newAchievements = [];

    if (completedLessons.length === 1 && !unlockedAchievements.includes(1)) {
      newAchievements.push(1);
    }

    if (completedLessons.length === 5 && !unlockedAchievements.includes(2)) {
      newAchievements.push(2);
    }

    const allLessons = courseModules.flatMap((module) => module.lessons);
    if (
      completedLessons.length === allLessons.length &&
      !unlockedAchievements.includes(3)
    ) {
      newAchievements.push(3);
    }

    if (newAchievements.length > 0) {
      setUnlockedAchievements([...unlockedAchievements, ...newAchievements]);
      newAchievements.forEach((achievementId) => {
        const achievement = achievements.find((a) => a.id === achievementId);
        if (achievement) {
          toast({
            title: "Conquista Desbloqueada!",
            description: `${achievement.icon} ${achievement.title}: ${achievement.description}`,
          });
        }
      });
    }
  };

  const totalLessons = courseModules.reduce(
    (total, module) => total + module.lessons.length,
    0,
  );
  const progress = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Módulos do Curso</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {activeVideo ? (
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <video ref={videoRef} onEnded={handleVideoEnd}>
                <source src={activeVideo.videoUrl} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 flex items-center justify-center mb-4">
              <p className="text-gray-500">Selecione uma aula para começar</p>
            </div>
          )}
          {activeVideo && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{activeVideo.title}</CardTitle>
                <CardDescription>
                  Duração: {activeVideo.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={watchedPercentage} className="w-full mb-2" />
                <p className="text-sm text-gray-600 mb-4">
                  {watchedPercentage < 90
                    ? `Assista pelo menos 90% da aula para marcá-la como concluída (${Math.round(watchedPercentage)}% assistido)`
                    : "Você pode marcar esta aula como concluída"}
                </p>
                <p className="mb-4">{activeVideo.description}</p>
                <h4 className="font-semibold mb-2">Links Relacionados:</h4>
                <ul className="list-disc list-inside">
                  {activeVideo.relatedLinks.map((link, index) => (
                    <li key={index} className="mb-1">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center"
                      >
                        <LinkIcon className="w-4 h-4 mr-1" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Seu Progresso</h3>
            <div className="flex items-center space-x-2 mb-2">
              <Star className="text-yellow-400" />
              <span className="font-medium">{xp} XP</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge variant="secondary">
                {level.icon} {level.name}
              </Badge>
            </div>
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-gray-600 mt-2">
              {completedLessons.length} de {totalLessons} aulas concluídas
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Conquistas</h3>
            <div className="flex flex-wrap gap-2">
              {achievements.map((achievement) => (
                <TooltipProvider key={achievement.id}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge
                        variant={
                          unlockedAchievements.includes(achievement.id)
                            ? "default"
                            : "outline"
                        }
                      >
                        {achievement.icon}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{achievement.title}</p>
                      <p className="text-xs text-gray-500">
                        {achievement.description}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {courseModules.map((module) => (
              <AccordionItem value={`module-${module.id}`} key={module.id}>
                <AccordionTrigger>{module.title}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson) => (
                      <li
                        key={lesson.id}
                        className="flex items-center justify-between"
                      >
                        <Button
                          variant="ghost"
                          className="text-left flex items-center"
                          onClick={() => setActiveVideo(lesson)}
                        >
                          {completedLessons.some(
                            (completed) => completed.id === lesson.id,
                          ) ? (
                            <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          ) : (
                            <PlayCircle className="mr-2 h-4 w-4" />
                          )}
                          {lesson.title}
                        </Button>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">
                            {lesson.duration}
                          </span>
                          <Badge variant="outline">{lesson.xp} XP</Badge>
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
