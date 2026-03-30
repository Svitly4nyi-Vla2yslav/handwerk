import styled from 'styled-components';
import { bodyText, Button, ButtonLink, Container, IconBadge, PanelBase, headingTypography } from './primitives';

export const ContactLayout = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: 28px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactPanel = styled.div`
  ${PanelBase};
  padding: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const ContactPoints = styled.div`
  display: grid;
  gap: 18px;
  margin: 28px 0;

  article {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 16px;
    align-items: start;
  }

  strong {
    display: block;
    margin-bottom: 6px;
  }

  p {
    ${bodyText};
  }
`;

export const ContactPointIcon = styled(IconBadge)``;

export const ContactPanelBox = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(21, 33, 43, 0.08);

  p {
    ${bodyText};
    margin-bottom: 16px;
  }
`;

export const ContactForm = styled.form`
  ${PanelBase};
  padding: 30px;
  background: rgba(255, 255, 255, 0.94);

  h3 {
    ${headingTypography};
    font-size: 1.8rem;
    margin: 0 0 10px;
  }

  label {
    display: grid;
    gap: 8px;
    margin-bottom: 16px;
    font-weight: 600;
  }

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid rgba(21, 33, 43, 0.12);
    border-radius: 14px;
    background: #fff;
    color: ${({ theme }) => theme.colors.text};
    min-height: 50px;
    padding: 0 16px;
  }

  textarea {
    padding-top: 14px;
    padding-bottom: 14px;
    resize: vertical;
  }

  input::placeholder,
  textarea::placeholder {
    color: #8a949d;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 24px;
  }
`;

export const ContactIntro = styled.p`
  ${bodyText};
  margin-bottom: 24px;
`;

export const PresetGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 22px;
`;

export const PresetButton = styled.button<{ $active?: boolean }>`
  min-height: 40px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $active }) => ($active ? 'rgba(207, 107, 50, 0.14)' : '#f4eee8')};
  border: 1px solid
    ${({ $active }) => ($active ? 'rgba(207, 107, 50, 0.3)' : 'rgba(21, 33, 43, 0.08)')};
  color: ${({ $active, theme }) => ($active ? theme.colors.accentDark : theme.colors.textSoft)};
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FormNote = styled.p`
  ${bodyText};
  margin: 14px 0 0;
`;

export const FullWidthButton = styled(Button)`
  width: 100%;
`;

export const FullWidthButtonLink = styled(ButtonLink)`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
