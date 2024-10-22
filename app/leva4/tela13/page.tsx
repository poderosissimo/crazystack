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
import { CheckCircle, PlayCircle, Award } from "lucide-react";
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
      },
      {
        id: 2,
        title: "Visão Geral do Curso",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "10:15",
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
      },
      {
        id: 4,
        title: "Primeiros Passos",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "12:45",
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
      },
      {
        id: 6,
        title: "Estudo de Caso",
        videoUrl:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        duration: "18:30",
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

export default function CourseModules() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const videoRef = useRef(null);
  const playerRef = useRef(null);

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
        const progress =
          (playerRef.current.currentTime / playerRef.current.duration) * 100;
        setWatchedPercentage(progress);
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [activeVideo]);

  const handleVideoEnd = () => {
    if (activeVideo && watchedPercentage >= 90) {
      const newCompletedLessons = [...completedLessons, activeVideo];
      setCompletedLessons(newCompletedLessons);
      checkAchievements(newCompletedLessons);
    }
  };

  const checkAchievements = (completedLessons) => {
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
        toast({
          title: "Conquista Desbloqueada!",
          description: `${achievement.icon} ${achievement.title}: ${achievement.description}`,
        });
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
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                {activeVideo.title}
              </h2>
              <p className="text-gray-600">Duração: {activeVideo.duration}</p>
              <Progress value={watchedPercentage} className="w-full mt-2" />
              <p className="text-sm text-gray-600 mt-1">
                {watchedPercentage < 90
                  ? `Assista pelo menos 90% da aula para marcá-la como concluída (${Math.round(watchedPercentage)}% assistido)`
                  : "Você pode marcar esta aula como concluída"}
              </p>
            </div>
          )}
        </div>
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Progresso do Curso</h3>
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
                        <span className="text-sm text-gray-500">
                          {lesson.duration}
                        </span>
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
