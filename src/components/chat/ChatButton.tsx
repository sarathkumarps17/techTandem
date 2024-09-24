"use client";

import React, { useRef, useState, useEffect } from "react";
import { Player } from "@lordicon/react";
import CONVERSATION from "@/assets/conversation.json";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Avatar from "@/assets/avatar.json";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { SessionContextValue } from "next-auth/react";
import { Skeleton } from "../ui/skeleton";
import Auth from "../auth/Auth";

interface ButtonProps {
  sessionData: Pick<SessionContextValue, "data" | "status">;
  onClick?: () => void;
  isMobile?: boolean;
}

const ChatButton = ({ sessionData, onClick, isMobile }: ButtonProps) => {
  const { status } = sessionData;

  const LoadingButton = () => (
    <Skeleton className="h-6 w-12 mx-2 rounded-lg bg-slate-300 dark:bg-slate-700" />
  );
  const ChatButton = () => {
    const playerRef = useRef<Player>(null);
    const { theme } = useTheme();

    const isDark = theme === "dark";

    const [conversationState, setConversationState] = useState("in-reveal");

    useEffect(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, [conversationState, theme]);
    if (isMobile)
      return (
        <Button className="rounded-lg shadow-md bg-primary text-background hover:bg-foreground hover:text-background">
          Say &quot;Hi&quot;
        </Button>
      );
    return (
      <Button
        aria-label="Open conversation"
        size="sm"
        variant="link"
        className="ml-0 lg:ml-10 text-foreground xl:ml-16 hover:border-primary border-foreground hover:text-primary"
        onMouseEnter={() => setConversationState("conversation-alt")}
        onMouseLeave={() => setConversationState("in-reveal")}
      >
        <Player
          colors={isDark ? "primary:#fefbf6" : "primary:#1f1f1f"}
          icon={CONVERSATION}
          size={36}
          ref={playerRef}
          state={conversationState}
        />
      </Button>
    );
  };
  const AuthButton = () => {
    const { theme } = useTheme();

    const isDark = theme === "dark";
    const playerRef = useRef<Player>(null);

    useEffect(() => {
      if (playerRef.current) {
        playerRef.current.play();
      }
    }, []);
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          {isMobile ? (
            <Button className="rounded-lg shadow-md bg-primary text-background hover:bg-foreground hover:text-background">
              Say &quot;Hi&quot;
            </Button>
          ) : (
            <Button
              aria-label="Open auth"
              size="sm"
              variant="link"
              className="ml-0 lg:ml-10 text-foreground xl:ml-16 hover:border-primary border-foreground hover:text-primary"
              onClick={onClick}
              onMouseEnter={() => playerRef.current?.playFromBeginning()}
            >
              <Player
                icon={Avatar}
                colors={isDark ? "primary:#fefbf6" : "primary:#1f1f1f"}
                size={32}
                ref={playerRef}
                state="hover-looking-around"
              />
            </Button>
          )}
        </HoverCardTrigger>
        <HoverCardContent className="backdrop-blur-sm bg-black/30 dark:bg-white/30 rounded-lg">
          <p className="text-sm text-foreground/50 text-center">
            Please sign in to chat
          </p>
          <Auth />
        </HoverCardContent>
      </HoverCard>
    );
  };

  const componentMap = {
    loading: LoadingButton,
    authenticated: ChatButton,
    unauthenticated: AuthButton,
  };

  const Component = componentMap[status];
  return <Component />;
};

export default ChatButton;
