"use client";

import { useEffect, useState } from "react";
import { AccountSync } from "@/components/account/account-sync";
import { AuthScreen } from "@/components/account/auth-screen";
import { FriendsManager } from "@/components/account/friends-manager";
import { PetManager } from "@/components/account/pet-manager";
import { GameScreen } from "@/components/pet/game-screen";
import { SetupScreen } from "@/components/pet/setup-screen";
import { useAccountStore } from "@/lib/account-store";
import { usePetStore } from "@/lib/pet-store";

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="animate-pulse text-center">
        <div className="text-6xl mb-4">🐾</div>
        <p className="text-muted-foreground">Loading PAWSitive...</p>
      </div>
    </div>
  );
}

export default function Home() {
  const gameStarted = usePetStore((state) => state.gameStarted);
  const currentUserId = useAccountStore((state) => state.currentUserId);
  const account = useAccountStore((state) =>
    currentUserId ? state.accounts[currentUserId] : null
  );
  const showPetManager = useAccountStore((state) => state.showPetManager);
  const showSetup = useAccountStore((state) => state.showSetup);
  const showFriendsManager = useAccountStore(
    (state) => state.showFriendsManager
  );
  const completeOnboarding = useAccountStore((state) => state.completeOnboarding);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingScreen />;
  if (!currentUserId) return <AuthScreen />;

  const showSkip =
    !!account && !account.hasCompletedOnboarding && account.pets.length === 0;

  if (showSetup) {
    return (
      <>
        <AccountSync />
        <SetupScreen showSkip={showSkip} onSkip={completeOnboarding} />
      </>
    );
  }

  if (showFriendsManager) {
    return (
      <>
        <AccountSync />
        <FriendsManager />
      </>
    );
  }

  if (showPetManager || !account?.activePetId) {
    return (
      <>
        <AccountSync />
        <PetManager />
      </>
    );
  }

  return (
    <>
      <AccountSync />
      {gameStarted ? <GameScreen /> : <SetupScreen />}
    </>
  );
}
