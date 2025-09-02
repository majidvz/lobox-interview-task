import { useEffect, useRef, type FC } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import gsap from "gsap";
import { Link } from "react-router";
import { UIButton } from "../../components/UI";
import { ROUTES } from "../../routes/routes";
import { OnboardingWrapper } from "./styles";

export const Onboarding: FC = () => {
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLSpanElement | null>(null);
  const avatarRef = useRef<HTMLImageElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        {
          opacity: 0,
          y: 20,
          scale: 1.2,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
        }
      );
    }
  }, [avatarRef]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 1.3,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.25,
          duration: 0.5,
        }
      );
    }
  }, [titleRef]);

  useEffect(() => {
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 1.4,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.5,
          duration: 0.5,
        }
      );
    }
  }, [subtitleRef]);

  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.75,
          duration: 0.5,
        }
      );
    }
  }, [buttonRef]);

  return (
    <OnboardingWrapper>
      <img
        ref={avatarRef}
        className="onboarding-image"
        src="/assets/images/avatar.jpg"
        alt=""
        width={120}
        height={120}
      />
      <div className="onboarding-texts-wrapper">
        <span className="onboarding-title roboto-bold" ref={titleRef}>
          👋 Welcome
        </span>
        <span className="onboarding-subtitle roboto-medium" ref={subtitleRef}>
          You’re reviewing Majid’s task.
        </span>
      </div>

      <UIButton
        ref={buttonRef}
        iconAfter={
          <IconArrowRight
            className="ui-button-icon-after"
            size={20}
            color="#fff"
          />
        }
      >
        <Link to={ROUTES.TASK}>
          <span className="ui-button-label roboto-medium"> Let's go! </span>
        </Link>
      </UIButton>
    </OnboardingWrapper>
  );
};
