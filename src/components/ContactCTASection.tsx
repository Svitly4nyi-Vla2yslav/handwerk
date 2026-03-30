import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { company, serviceIntentCards } from '../data/siteContent';
import { ButtonLink, Section } from '../styles/primitives';
import {
  ContactForm,
  ContactIntro,
  ContactLayout,
  ContactPanel,
  ContactPanelBox,
  ContactPointIcon,
  ContactPoints,
  FormGrid,
  FormNote,
  FullWidthButton,
  PresetButton,
  PresetGrid
} from '../styles/contact.styles';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

interface ContactCTASectionProps {
  selectedPreset: string;
  onSelectInquiry: (preset: string) => void;
}

export function ContactCTASection({
  selectedPreset,
  onSelectInquiry
}: ContactCTASectionProps) {
  const [service, setService] = useState(selectedPreset);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [buildingType, setBuildingType] = useState('Einfamilienhaus');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setService(selectedPreset);
  }, [selectedPreset]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section
      id="kontaktformular"
      $variant="contact"
    >
      <ContactLayout>
        <ContactPanel>
          <SectionHeading
            eyebrow="Angebot, Beratung oder Service"
            title="Schnell Kontakt aufnehmen und das passende Anliegen direkt auswählen"
            text="Statt einer langen allgemeinen Kontaktseite führen wir hier in eine kurze, nützliche Anfrage. So lässt sich Heizung, Sanitär, Wärmepumpe oder Service direkt richtig einordnen."
          />

          <ContactPoints>
            <article>
              <ContactPointIcon>
                <Icon name="phone" />
              </ContactPointIcon>
              <div>
                <strong>Anrufen</strong>
                <p>Für schnelle Rückfragen oder wenn Sie das Anliegen lieber direkt besprechen möchten.</p>
              </div>
            </article>
            <article>
              <ContactPointIcon>
                <Icon name="clock" />
              </ContactPointIcon>
              <div>
                <strong>Kurze Wege</strong>
                <p>Regionale Termine und abgestimmte Rückmeldungen im Raum Hildesheim.</p>
              </div>
            </article>
            <article>
              <ContactPointIcon>
                <Icon name="location" />
              </ContactPointIcon>
              <div>
                <strong>Lokale Einsatzgebiete</strong>
                <p>Hilfreich für Hildesheim, kleine Bestände, Familienhäuser und Modernisierungsprojekte.</p>
              </div>
            </article>
          </ContactPoints>

          <ContactPanelBox>
            <p>Lieber direkt sprechen?</p>
            <ButtonLink
              $variant="secondary"
              href={company.phoneHref}
            >
              Jetzt anrufen: {company.phoneDisplay}
            </ButtonLink>
          </ContactPanelBox>
        </ContactPanel>

        <ContactForm onSubmit={handleSubmit}>
          <h3>Kurze Anfrage senden</h3>
          <ContactIntro>
            Wählen Sie das Anliegen aus, damit die Rückmeldung direkt zum Bedarf passt.
          </ContactIntro>

          <PresetGrid>
            {serviceIntentCards.map((item) => (
              <PresetButton
                key={item.title}
                type="button"
                $active={service === item.preset}
                onClick={() => {
                  setService(item.preset);
                  onSelectInquiry(item.preset);
                }}
              >
                {item.title}
              </PresetButton>
            ))}
          </PresetGrid>

          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Vor- und Nachname"
              required
            />
          </label>

          <FormGrid>
            <label>
              Telefonnummer
              <input
                type="tel"
                name="phone"
                inputMode="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="z. B. 05121 1234567"
                required
              />
            </label>

            <label>
              E-Mail
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@beispiel.de"
                required
              />
            </label>
          </FormGrid>

          <FormGrid>
            <label>
              Ort / Postleitzahl
              <input
                type="text"
                name="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                placeholder="z. B. Hildesheim, 31134"
                required
              />
            </label>

            <label>
              Gebäudetyp
              <select
                name="buildingType"
                value={buildingType}
                onChange={(event) => setBuildingType(event.target.value)}
              >
                <option>Einfamilienhaus</option>
                <option>Mehrfamilienhaus</option>
                <option>Vermietete Wohnung / Bestand</option>
                <option>Gewerbe / kleines Objekt</option>
              </select>
            </label>
          </FormGrid>

          <label>
            Gewünschte Leistung
            <input
              type="text"
              name="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
            />
          </label>

          <label>
            Anliegen
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Worum geht es genau? Zum Beispiel Modernisierung, Wärmepumpe im Altbau, Wartung oder Reparatur."
              rows={5}
            />
          </label>

          <FullWidthButton
            $variant="primary"
            type="submit"
          >
            Anfrage absenden
          </FullWidthButton>

          <FormNote aria-live="polite">
            {submitted
              ? 'Danke, die Demo-Anfrage wurde erfasst. Hier kann später die echte Backend-Weiterleitung angeschlossen werden.'
              : 'Kurzes Formular, klare Auswahl und mobile Eingabewege ohne unnötige Hürden.'}
          </FormNote>
        </ContactForm>
      </ContactLayout>
    </Section>
  );
}
