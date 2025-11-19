"use client";

import { useState } from "react";
import { Camera, TrendingUp, Apple, Dumbbell, Trophy, Users, Upload, ArrowRight, Target, Flame, Calendar, ChevronRight, Home, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";

export default function ShapeTrack() {
  const [activeTab, setActiveTab] = useState("home");
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [userScore, setUserScore] = useState(78);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [goalWeight, setGoalWeight] = useState(75);
  const [currentWeight, setCurrentWeight] = useState(82);
  const [selectedGoal, setSelectedGoal] = useState("");

  // Dados mock
  const progressData = [
    { month: "Jan", score: 65 },
    { month: "Fev", score: 68 },
    { month: "Mar", score: 72 },
    { month: "Abr", score: 78 },
  ];

  const badges = [
    { name: "Primeira Semana", icon: "🔥", unlocked: true },
    { name: "30 Dias Seguidos", icon: "💪", unlocked: true },
    { name: "Meta Atingida", icon: "🎯", unlocked: false },
    { name: "Shape Master", icon: "👑", unlocked: false },
  ];

  const dietPlan = [
    { meal: "Café da Manhã", time: "07:00", calories: 450, items: ["3 ovos mexidos", "2 fatias de pão integral", "Abacate"] },
    { meal: "Lanche", time: "10:00", calories: 200, items: ["Whey protein", "Banana"] },
    { meal: "Almoço", time: "12:30", calories: 650, items: ["Frango grelhado 200g", "Arroz integral", "Brócolis"] },
    { meal: "Lanche", time: "16:00", calories: 180, items: ["Iogurte grego", "Granola"] },
    { meal: "Jantar", time: "19:30", calories: 550, items: ["Salmão 180g", "Batata doce", "Salada verde"] },
  ];

  const workoutPlan = [
    { day: "Segunda", focus: "Peito e Tríceps", exercises: 8, duration: "60 min", image: "💪" },
    { day: "Terça", focus: "Costas e Bíceps", exercises: 8, duration: "60 min", image: "🏋️" },
    { day: "Quarta", focus: "Pernas", exercises: 10, duration: "75 min", image: "🦵" },
    { day: "Quinta", focus: "Ombros e Abdômen", exercises: 7, duration: "50 min", image: "💪" },
    { day: "Sexta", focus: "Cardio HIIT", exercises: 6, duration: "40 min", image: "🔥" },
  ];

  const fitnessGoals = [
    { id: "lose", title: "Perder Peso", icon: "🎯" },
    { id: "gain", title: "Ganhar Massa", icon: "💪" },
    { id: "maintain", title: "Manter Forma", icon: "⚖️" },
    { id: "tone", title: "Definir Corpo", icon: "✨" },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        setTimeout(() => {
          setUserScore(Math.floor(Math.random() * 20) + 75);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStartOnboarding = () => {
    setOnboardingStep(1);
  };

  const handleFinishOnboarding = () => {
    setShowOnboarding(false);
    setActiveTab("home");
  };

  // Onboarding Screen
  if (showOnboarding && onboardingStep === 0) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-4">
            <div className="w-24 h-24 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-3xl flex items-center justify-center mx-auto">
              <TrendingUp className="w-12 h-12 text-[#0D0D0D]" />
            </div>
            <h1 className="text-5xl font-bold">ShapeTrack</h1>
            <p className="text-xl text-white/60">
              Transforme seu corpo com IA
            </p>
          </div>

          <div className="space-y-4 py-8">
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center">
                <Camera className="w-6 h-6 text-[#00FF88]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Análise por IA</h3>
                <p className="text-sm text-white/60">Score personalizado do seu shape</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center">
                <Apple className="w-6 h-6 text-[#00FF88]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Dieta Personalizada</h3>
                <p className="text-sm text-white/60">Plano nutricional otimizado</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-[#00FF88]/20 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-[#00FF88]" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Treinos Inteligentes</h3>
                <p className="text-sm text-white/60">Exercícios para seu objetivo</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={handleStartOnboarding}
            className="w-full h-14 bg-[#00FF88] hover:bg-[#00CC6A] text-[#0D0D0D] font-bold text-lg rounded-2xl transition-all hover:scale-105"
          >
            Começar Agora
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <p className="text-sm text-white/40">
            Junte-se a mais de 50.000 usuários
          </p>
        </div>
      </div>
    );
  }

  // Goal Selection Screen
  if (showOnboarding && onboardingStep === 1) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setOnboardingStep(0)}
              className="text-white/60 hover:text-white mb-4"
            >
              ← Voltar
            </Button>
            <h2 className="text-3xl font-bold mb-2">Qual seu objetivo?</h2>
            <p className="text-white/60">Escolha seu foco principal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {fitnessGoals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  selectedGoal === goal.id
                    ? "bg-[#00FF88]/20 border-[#00FF88]"
                    : "bg-white/5 border-white/10 hover:border-white/30"
                }`}
              >
                <div className="text-4xl mb-3">{goal.icon}</div>
                <h3 className="text-xl font-bold">{goal.title}</h3>
              </button>
            ))}
          </div>

          <Button 
            onClick={() => setOnboardingStep(2)}
            disabled={!selectedGoal}
            className="w-full h-14 bg-[#00FF88] hover:bg-[#00CC6A] text-[#0D0D0D] font-bold text-lg rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Weight Goals Screen
  if (showOnboarding && onboardingStep === 2) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white p-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={() => setOnboardingStep(1)}
              className="text-white/60 hover:text-white mb-4"
            >
              ← Voltar
            </Button>
            <h2 className="text-3xl font-bold mb-2">Defina suas metas</h2>
            <p className="text-white/60">Configure seu peso ideal</p>
          </div>

          <div className="space-y-8 mb-8">
            <Card className="bg-white/5 border-white/10 p-6">
              <div className="mb-6">
                <label className="text-sm text-white/60 mb-2 block">Peso Atual</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[currentWeight]}
                    onValueChange={(value) => setCurrentWeight(value[0])}
                    min={40}
                    max={150}
                    step={1}
                    className="flex-1"
                  />
                  <div className="w-20 h-12 bg-[#00FF88]/20 border border-[#00FF88]/30 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-[#00FF88]">{currentWeight}</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 mt-2">kg</p>
              </div>

              <div>
                <label className="text-sm text-white/60 mb-2 block">Peso Meta</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[goalWeight]}
                    onValueChange={(value) => setGoalWeight(value[0])}
                    min={40}
                    max={150}
                    step={1}
                    className="flex-1"
                  />
                  <div className="w-20 h-12 bg-[#00FF88]/20 border border-[#00FF88]/30 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-[#00FF88]">{goalWeight}</span>
                  </div>
                </div>
                <p className="text-xs text-white/40 mt-2">kg</p>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#00FF88]/20 to-[#00CC6A]/10 border-[#00FF88]/30 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-[#00FF88]" />
                <h3 className="font-bold text-lg">Seu Objetivo</h3>
              </div>
              <p className="text-2xl font-bold text-[#00FF88]">
                {currentWeight > goalWeight ? "Perder" : "Ganhar"} {Math.abs(currentWeight - goalWeight)} kg
              </p>
              <p className="text-sm text-white/60 mt-2">
                Tempo estimado: {Math.ceil(Math.abs(currentWeight - goalWeight) / 2)} semanas
              </p>
            </Card>
          </div>

          <Button 
            onClick={handleFinishOnboarding}
            className="w-full h-14 bg-[#00FF88] hover:bg-[#00CC6A] text-[#0D0D0D] font-bold text-lg rounded-2xl"
          >
            Finalizar Configuração
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    );
  }

  // Main App
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pb-24">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-[#0D0D0D]/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00FF88] to-[#00CC6A] rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#0D0D0D]" />
            </div>
            <h1 className="text-2xl font-bold">ShapeTrack</h1>
          </div>
          <Badge variant="outline" className="border-[#00FF88] text-[#00FF88] bg-[#00FF88]/10">
            Premium
          </Badge>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Home Tab */}
        {activeTab === "home" && (
          <div className="space-y-6">
            {/* Hero Score Card */}
            <Card className="bg-gradient-to-br from-[#00FF88]/20 to-[#00CC6A]/10 border-[#00FF88]/30 p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/60 text-sm mb-1">Seu Shape Score</p>
                  <h2 className="text-6xl font-bold text-[#00FF88]">{userScore}</h2>
                  <p className="text-white/60 text-sm mt-2">Top 15% dos usuários 🔥</p>
                </div>
                <div className="w-20 h-20 rounded-2xl bg-[#00FF88]/20 flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-[#00FF88]" />
                </div>
              </div>
              <Progress value={userScore} className="h-3 bg-white/10 mb-4" />
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Flame className="w-4 h-4 text-[#00FF88]" />
                <span>Continue assim para alcançar 85+</span>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-white/5 border-white/10 p-4 text-center">
                <Calendar className="w-6 h-6 text-[#00FF88] mx-auto mb-2" />
                <p className="text-2xl font-bold">28</p>
                <p className="text-xs text-white/60">Dias Ativos</p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-4 text-center">
                <Dumbbell className="w-6 h-6 text-[#00FF88] mx-auto mb-2" />
                <p className="text-2xl font-bold">42</p>
                <p className="text-xs text-white/60">Treinos</p>
              </Card>
              <Card className="bg-white/5 border-white/10 p-4 text-center">
                <Trophy className="w-6 h-6 text-[#00FF88] mx-auto mb-2" />
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-white/60">Badges</p>
              </Card>
            </div>

            {/* Featured Workouts Carousel */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Treinos em Destaque</h3>
                <Button variant="ghost" className="text-[#00FF88] text-sm">
                  Ver todos <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {workoutPlan.slice(0, 3).map((workout, i) => (
                  <Card key={i} className="min-w-[280px] bg-gradient-to-br from-white/10 to-white/5 border-white/10 p-5 hover:from-[#00FF88]/20 hover:to-[#00FF88]/10 hover:border-[#00FF88]/30 transition-all">
                    <div className="text-4xl mb-3">{workout.image}</div>
                    <h4 className="font-bold text-lg mb-1">{workout.focus}</h4>
                    <p className="text-sm text-white/60 mb-4">{workout.day} • {workout.duration}</p>
                    <Button className="w-full bg-[#00FF88] hover:bg-[#00CC6A] text-[#0D0D0D] font-semibold">
                      Começar
                    </Button>
                  </Card>
                ))}
              </div>
            </div>

            {/* Today's Meals */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Refeições de Hoje</h3>
                <Button variant="ghost" className="text-[#00FF88] text-sm">
                  Ver plano <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="space-y-3">
                {dietPlan.slice(0, 3).map((meal, i) => (
                  <Card key={i} className="bg-white/5 border-white/10 p-4 flex items-center justify-between hover:bg-white/10 transition-all">
                    <div>
                      <h4 className="font-semibold">{meal.meal}</h4>
                      <p className="text-sm text-white/60">{meal.time}</p>
                    </div>
                    <Badge className="bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30">
                      {meal.calories} kcal
                    </Badge>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Upload Tab */}
        {activeTab === "upload" && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Análise de Shape</h2>
              <p className="text-white/60">Faça upload de uma foto para análise por IA</p>
            </div>

            <Card className="bg-white/5 border-white/10 p-8">
              <label htmlFor="photo-upload" className="block">
                <div className="border-2 border-dashed border-[#00FF88]/30 rounded-2xl p-12 hover:border-[#00FF88] transition-all cursor-pointer bg-[#00FF88]/5 hover:bg-[#00FF88]/10">
                  {uploadedImage ? (
                    <div className="space-y-4">
                      <img src={uploadedImage} alt="Uploaded" className="w-full h-64 object-cover rounded-xl" />
                      <div className="text-center">
                        <p className="text-[#00FF88] font-semibold mb-2">Analisando sua foto...</p>
                        <Progress value={75} className="h-2 bg-white/10" />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="w-16 h-16 text-[#00FF88] mx-auto mb-4" />
                      <p className="text-xl font-semibold mb-2">Clique para fazer upload</p>
                      <p className="text-sm text-white/60">PNG, JPG até 10MB</p>
                    </div>
                  )}
                </div>
                <input
                  id="photo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>

              {uploadedImage && (
                <Card className="mt-6 p-6 bg-gradient-to-br from-[#00FF88]/20 to-[#00CC6A]/10 border-[#00FF88]/30">
                  <h3 className="text-2xl font-bold mb-4">Resultado da Análise</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Shape Score</span>
                      <span className="text-3xl font-bold text-[#00FF88]">{userScore}/100</span>
                    </div>
                    <Progress value={userScore} className="h-3 bg-white/10" />
                    <p className="text-sm text-white/70">
                      Ótimo progresso! Continue focado na dieta e treinos para alcançar 85+
                    </p>
                  </div>
                </Card>
              )}
            </Card>
          </div>
        )}

        {/* Diet Tab */}
        {activeTab === "diet" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-1">Dieta Personalizada</h2>
                <p className="text-white/60">Plano otimizado para seu objetivo</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-white/60">Total Diário</p>
                <p className="text-2xl font-bold text-[#00FF88]">2,030 kcal</p>
              </div>
            </div>

            <div className="space-y-4">
              {dietPlan.map((meal, i) => (
                <Card key={i} className="bg-white/5 border-white/10 p-5 hover:bg-white/10 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{meal.meal}</h3>
                      <p className="text-sm text-white/60">{meal.time}</p>
                    </div>
                    <Badge className="bg-[#00FF88]/20 text-[#00FF88] border-[#00FF88]/30">
                      {meal.calories} kcal
                    </Badge>
                  </div>
                  <ul className="space-y-1">
                    {meal.items.map((item, j) => (
                      <li key={j} className="text-sm text-white/80 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Workout Tab */}
        {activeTab === "workout" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-1">Treinos Recomendados</h2>
              <p className="text-white/60">Seu plano semanal personalizado</p>
            </div>

            <div className="space-y-4">
              {workoutPlan.map((workout, i) => (
                <Card key={i} className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 p-6 hover:from-[#00FF88]/20 hover:to-[#00FF88]/10 hover:border-[#00FF88]/30 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{workout.image}</div>
                      <div>
                        <h3 className="font-bold text-xl">{workout.day}</h3>
                        <p className="text-[#00FF88] font-semibold">{workout.focus}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-white/40" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <span>{workout.exercises} exercícios</span>
                    <span>•</span>
                    <span>{workout.duration}</span>
                  </div>
                  <Button className="w-full bg-[#00FF88] hover:bg-[#00CC6A] text-[#0D0D0D] font-semibold">
                    Iniciar Treino
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === "progress" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Seu Progresso</h2>

            {/* Evolution Chart */}
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-xl font-bold mb-6">Evolução do Score</h3>
              <div className="h-64 flex items-end justify-around gap-4">
                {progressData.map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-white/10 rounded-t-xl relative overflow-hidden" style={{ height: `${data.score * 2.5}px` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#00FF88] to-[#00CC6A]" />
                    </div>
                    <p className="text-sm font-semibold text-[#00FF88]">{data.score}</p>
                    <p className="text-xs text-white/60">{data.month}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Badges */}
            <Card className="bg-white/5 border-white/10 p-6">
              <h3 className="text-xl font-bold mb-4">Conquistas</h3>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      badge.unlocked
                        ? "bg-[#00FF88]/10 border-[#00FF88]/30"
                        : "bg-white/5 border-white/10 opacity-50"
                    }`}
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <p className="text-xs font-semibold">{badge.name}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community */}
            <Card className="bg-white/5 border-white/10 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#00FF88]" />
                <h3 className="text-xl font-bold">Comunidade</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-sm mb-1"><span className="font-semibold text-[#00FF88]">@carlos_fit</span> atingiu 90 de score!</p>
                  <p className="text-xs text-white/60">há 2 horas</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-sm mb-1"><span className="font-semibold text-[#00FF88]">@ana_strong</span> completou 50 treinos</p>
                  <p className="text-xs text-white/60">há 5 horas</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="text-sm mb-1"><span className="font-semibold text-[#00FF88]">@pedro_gains</span> desbloqueou badge Shape Master</p>
                  <p className="text-xs text-white/60">há 1 dia</p>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0D0D0D] border-t border-white/10 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "home" ? "text-[#00FF88]" : "text-white/60"
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button
              onClick={() => setActiveTab("upload")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "upload" ? "text-[#00FF88]" : "text-white/60"
              }`}
            >
              <Camera className="w-6 h-6" />
              <span className="text-xs font-medium">Upload</span>
            </button>
            <button
              onClick={() => setActiveTab("workout")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "workout" ? "text-[#00FF88]" : "text-white/60"
              }`}
            >
              <Dumbbell className="w-6 h-6" />
              <span className="text-xs font-medium">Treino</span>
            </button>
            <button
              onClick={() => setActiveTab("diet")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "diet" ? "text-[#00FF88]" : "text-white/60"
              }`}
            >
              <Apple className="w-6 h-6" />
              <span className="text-xs font-medium">Nutrição</span>
            </button>
            <button
              onClick={() => setActiveTab("progress")}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === "progress" ? "text-[#00FF88]" : "text-white/60"
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">Perfil</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
