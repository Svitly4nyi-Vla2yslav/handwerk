import { areaList } from '../data/siteContent';
import { localAreaMedia } from '../data/mediaAssets';
import { Button, Section } from '../styles/primitives';
import {
  AreaTag,
  AreaTags,
  LocalCopy,
  TwoColumnLayout
} from '../styles/marketing.styles';
import { LocalMediaChip, LocalMediaChips } from '../styles/media.styles';
import { SectionImage } from './SectionImage';
import { SectionHeading } from './SectionHeading';

interface LocalAreaSectionProps {
  onSelectInquiry: (preset: string) => void;
}

export function LocalAreaSection({ onSelectInquiry }: LocalAreaSectionProps) {
  return (
    <Section id="einsatzgebiet">
      <TwoColumnLayout>
        <div>
          <SectionHeading
            eyebrow="Regional vor Ort"
            title="Heizung, Sanitär und Wärmepumpe für Hildesheim und Umgebung"
            text="Lokale Sichtbarkeit ist hier nicht nur SEO, sondern ein echter Vertrauensfaktor. Wer in Hildesheim anfragt, möchte wissen, ob der Betrieb erreichbar ist und die Wege kurz sind."
          />

          <LocalCopy>
            Wir fokussieren Einsätze im Raum Hildesheim und in nahegelegenen Orten. Das schafft
            planbare Termine, direkte Kommunikation und einen Service, der tatsächlich vor Ort
            stattfindet.
          </LocalCopy>

          <AreaTags>
            {areaList.map((area) => (
              <AreaTag key={area}>{area}</AreaTag>
            ))}
          </AreaTags>

          <Button
            $variant="primary"
            type="button"
            onClick={() => onSelectInquiry('Lokale Anfrage Hildesheim')}
          >
            Anfrage aus Ihrer Gegend senden
          </Button>
        </div>

        <SectionImage
          asset={localAreaMedia}
          overlay="dark"
          ratio="4 / 4.25"
        >
          <LocalMediaChips>
            <LocalMediaChip>Hildesheim</LocalMediaChip>
            <LocalMediaChip>kurze Wege</LocalMediaChip>
            <LocalMediaChip>regional vor Ort</LocalMediaChip>
          </LocalMediaChips>
        </SectionImage>
      </TwoColumnLayout>
    </Section>
  );
}
