import { company, mainServices, navigation } from '../data/siteContent';
import { BrandMark, BrandText } from '../styles/primitives';
import {
  FooterBottom,
  FooterBrand,
  FooterCopy,
  FooterGrid,
  FooterList,
  FooterShell,
  FooterTitle
} from '../styles/shell.styles';

export function Footer() {
  return (
    <FooterShell>
      <FooterGrid>
        <div>
          <FooterBrand href="#start">
            <BrandMark>NW</BrandMark>
            <BrandText>
              <strong>{company.name}</strong>
              <span>{company.claim}</span>
            </BrandText>
          </FooterBrand>
          <FooterCopy>
            Moderner SHK-Auftritt für Heizung, Sanitär, Wärmepumpen, Wartung und Reparatur im Raum
            Hildesheim.
          </FooterCopy>
        </div>

        <div>
          <FooterTitle>Kontakt</FooterTitle>
          <FooterList>
            <li>{company.phoneDisplay}</li>
            <li>{company.email}</li>
            <li>{company.addressLine1}</li>
            <li>{company.addressLine2}</li>
            <li>{company.openingHours}</li>
          </FooterList>
        </div>

        <div>
          <FooterTitle>Leistungen</FooterTitle>
          <FooterList>
            {mainServices.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>{service.eyebrow}</a>
              </li>
            ))}
          </FooterList>
        </div>

        <div>
          <FooterTitle>Navigation</FooterTitle>
          <FooterList>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href="#kontaktformular">Angebot anfragen</a>
            </li>
            <li>
              <a href="#rechtliches">Impressum / Datenschutz</a>
            </li>
          </FooterList>
        </div>
      </FooterGrid>

      <FooterBottom id="rechtliches">
        <span>Demo-Adresse und Demo-Kontaktdaten können im nächsten Schritt ersetzt werden.</span>
        <span>Lokaler Fokus: Hildesheim und umliegende Orte.</span>
      </FooterBottom>
    </FooterShell>
  );
}
