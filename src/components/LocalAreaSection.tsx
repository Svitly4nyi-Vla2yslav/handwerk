import { areaList } from '../data/siteContent';
import { Button, Section } from '../styles/primitives';
import {
  AreaTag,
  AreaTags,
  LocalCopy,
  MapCaption,
  MapCard,
  MapMarker,
  MapSurface,
  TwoColumnLayout
} from '../styles/marketing.styles';
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

        <MapCard>
          <MapSurface>
            <MapMarker $position="center">Hildesheim</MapMarker>
            <MapMarker $position="north">Himmelsthür</MapMarker>
            <MapMarker $position="east">Harsum</MapMarker>
            <MapMarker $position="south">Bad Salzdetfurth</MapMarker>
            <MapMarker $position="west">Giesen</MapMarker>
          </MapSurface>
          <MapCaption>
            <strong>Lokaler Fokus statt Streuverlust</strong>
            <p>
              Heizung Hildesheim, Sanitär Hildesheim, Wärmepumpe Hildesheim und
              Heizungsmodernisierung Hildesheim sind hier bewusst organisch eingebunden.
            </p>
          </MapCaption>
        </MapCard>
      </TwoColumnLayout>
    </Section>
  );
}
