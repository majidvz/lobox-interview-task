import styled from "styled-components";

export const OnboardingWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  .onboarding-image {
    border-radius: 50%;
  }

  .onboarding-texts-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .onboarding-title {
      font-size: 46px;
      line-height: 64px;
    }

    .onboarding-subtitle {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
