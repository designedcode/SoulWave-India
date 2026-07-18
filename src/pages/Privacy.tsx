import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { SEO } from '../components/SEO'
import { LegalDocument, LegalSection } from '../components/legal/LegalDocument'

export function Privacy() {
  return (
    <>
      <SEO
        path="/privacy"
        title="Privacy Policy | Soul Wave India"
        description="Privacy Policy explaining how Soul Wave India collects, uses, stores, and protects your personal information."
      />
      <LegalDocument accent="Legal" title="Privacy Policy">
        <LegalSection title="1. Introduction">
          <p>
            This Privacy Policy explains how {siteConfig.brand} (“we”, “us”, “our”) collects, uses, stores,
            shares, and protects personal information when you visit our website ({siteConfig.url}), contact us,
            complete our client intake or consent form, make a booking, make a payment, or avail any of our
            services.
          </p>
          <p>
            By using our website, submitting information to us, or availing any service, you acknowledge that you
            have read and understood this Privacy Policy and agree to the processing of your information as
            described herein, and to our{' '}
            <Link to="/terms" className="text-mauve underline underline-offset-2 hover:text-gold">
              Terms of Service
            </Link>
            . If you do not agree, please do not use the website or provide personal information.
          </p>
        </LegalSection>

        <LegalSection title="2. Scope of Services Covered">
          <p>
            This Policy applies to information collected in connection with all services offered by{' '}
            {siteConfig.brand}, including without limitation: Tarot Reading, Akashic Reading, Astrology, Vastu,
            Numerology, Graphology, Palmistry, Face Reading, Reiki Healing, Pranic Healing, Lama Fera Healing,
            Ethical Spell Casting & Custom Rituals, Animal Communication, Mediumship, Inner Child Healing, and
            related facilitation and coordination services.
          </p>
        </LegalSection>

        <LegalSection title="3. Information We Collect">
          <p>Depending on how you interact with us, we may collect:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong className="font-medium text-charcoal">Identity & contact details:</strong> name, email
              address, mobile number, postal or residential address, emergency contact name/number/relationship,
              and similar details provided via forms, WhatsApp, email, or booking channels.
            </li>
            <li>
              <strong className="font-medium text-charcoal">Consultation details:</strong> date of birth, time and
              place of birth, initials or names of persons concerned, city/country of residence, questions,
              intentions, areas of concern, photographs or documents you voluntarily share (e.g., for graphology,
              palmistry, face reading, vastu), pet details (for animal communication), and other information
              reasonably required to deliver the selected service.
            </li>
            <li>
              <strong className="font-medium text-charcoal">Health & wellness information:</strong> only where you
              voluntarily disclose it in connection with healing, inner child, or related services. You should not
              share sensitive medical information unless you choose to and understand it will be used solely for
              service delivery.
            </li>
            <li>
              <strong className="font-medium text-charcoal">Payment & transaction information:</strong> payment
              confirmation, transaction references, and related billing details as processed through third-party
              payment providers (we do not store full card details on our systems where payments are handled by
              external processors).
            </li>
            <li>
              <strong className="font-medium text-charcoal">Communications:</strong> messages, emails, WhatsApp
              chats, call notes, session notes, and feedback you exchange with us.
            </li>
            <li>
              <strong className="font-medium text-charcoal">Technical & usage data:</strong> IP address, browser
              type, device information, pages visited, referring URLs, and similar analytics data collected via
              cookies or similar technologies where enabled.
            </li>
          </ul>
          <p>
            You are responsible for ensuring that any personal information you provide about third parties (e.g.,
            partners, family members named in a reading) is shared lawfully and with appropriate authority or
            consent where required.
          </p>
        </LegalSection>

        <LegalSection title="4. How We Use Your Information">
          <p>We use personal information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide, personalise, coordinate, and improve our services</li>
            <li>Process bookings, payments, rescheduling, and related administration</li>
            <li>Communicate with you via email, WhatsApp, phone, or other agreed channels</li>
            <li>Maintain client records for administrative, legal, and service-related purposes</li>
            <li>Facilitate engagement with independent practitioners where applicable</li>
            <li>Respond to enquiries, feedback, and complaints</li>
            <li>Comply with applicable legal obligations and enforce our Terms of Service</li>
            <li>Protect the life, rights, or safety of you or another person where reasonably necessary</li>
            <li>Analyse website usage and improve user experience (where analytics are used)</li>
          </ul>
          <p>
            Information provided through our client intake form is used solely for the purpose of your consultation
            and related administration, and is treated confidentially in accordance with this Policy and applicable
            law.
          </p>
        </LegalSection>

        <LegalSection title="5. Legal Bases & Voluntary Disclosure">
          <p>
            You provide information voluntarily when you enquire, book, pay, or avail services. By doing so, you
            consent to processing as described in this Policy. Where processing is necessary to perform a contract
            with you, comply with law, or pursue legitimate interests (such as security, fraud prevention, and
            service improvement), we rely on those bases as applicable under Indian law, including the Digital
            Personal Data Protection Act, 2023, and other applicable statutes.
          </p>
        </LegalSection>

        <LegalSection title="6. Confidentiality & Sharing">
          <p>
            We maintain reasonable confidentiality regarding your personal information. We do not sell your
            personal data. We may share information only:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              With independent practitioners or facilitators solely as needed to deliver the service you requested
              (practitioner identities and contact details remain our confidential business information and are
              not disclosed to clients)
            </li>
            <li>
              With service providers who assist us (e.g., payment processors, hosting, email/WhatsApp business
              tools), under appropriate confidentiality expectations
            </li>
            <li>Where required by law, regulation, court order, or governmental authority</li>
            <li>
              Where disclosure is reasonably necessary to protect the life, rights, or safety of you or another
              person
            </li>
            <li>With your consent or at your direction</li>
            <li>
              In connection with a business transfer, restructuring, or similar event, subject to appropriate
              safeguards
            </li>
          </ul>
          <p>
            Absolute security cannot be guaranteed. Transmission of information over the internet or messaging
            platforms involves inherent risks, which you accept by choosing to communicate electronically.
          </p>
        </LegalSection>

        <LegalSection title="7. Recordings & Intellectual Property">
          <p>
            Clients may not audio record, video record, photograph, or otherwise reproduce consultations without
            our prior written consent. Any photographs, videos, reports, readings, or creative material generated
            during the engagement remain the intellectual property of {siteConfig.brand} unless otherwise agreed
            in writing, as further described in our Terms of Service.
          </p>
        </LegalSection>

        <LegalSection title="8. Data Retention">
          <p>
            We retain personal information for as long as reasonably necessary to provide services, maintain
            records for administrative and legal purposes, resolve disputes, enforce agreements, and comply with
            applicable law. Retention periods may vary depending on the nature of the information and legal
            requirements. When information is no longer needed, we will take reasonable steps to delete or
            anonymise it, subject to backup and legal retention constraints.
          </p>
        </LegalSection>

        <LegalSection title="9. Data Security">
          <p>
            We implement reasonable administrative, technical, and organisational safeguards designed to protect
            personal information against unauthorised access, loss, misuse, or alteration. However, no method of
            transmission or storage is completely secure, and we cannot guarantee absolute security. To the fullest
            extent permitted by law, {siteConfig.brand} disclaims liability for unauthorised access, hacking,
            interception, or data loss beyond our reasonable control.
          </p>
        </LegalSection>

        <LegalSection title="10. Cookies & Analytics">
          <p>
            Our website may use cookies or similar technologies to enable basic functionality, remember
            preferences, and understand usage patterns. You may control cookies through your browser settings;
            disabling cookies may affect site functionality. Third-party tools (if used) are governed by their own
            privacy policies.
          </p>
        </LegalSection>

        <LegalSection title="11. Third-Party Links & Platforms">
          <p>
            Our website or communications may contain links to third-party sites or platforms (including Instagram,
            WhatsApp, Calendly, or payment gateways). We are not responsible for the privacy practices or content
            of those third parties. Your use of such platforms is at your own risk and subject to their terms and
            policies.
          </p>
        </LegalSection>

        <LegalSection title="12. Children’s Privacy">
          <p>
            Our services are intended for adults. We do not knowingly collect personal information from individuals
            under eighteen (18) years of age without verifiable parental or guardian consent where legally
            required. If you believe we have collected such information in error, please contact us so we may take
            appropriate steps.
          </p>
        </LegalSection>

        <LegalSection title="13. International Clients">
          <p>
            If you access our services from outside India, you understand that your information may be processed
            and stored in India or other locations where we or our service providers operate. By using our services,
            you consent to such transfer and processing subject to this Policy.
          </p>
        </LegalSection>

        <LegalSection title="14. Your Rights & Choices">
          <p>
            Subject to applicable law, you may request access to, correction of, or deletion of your personal
            information, or withdraw consent where processing is based on consent (withdrawal will not affect
            processing already undertaken and may limit our ability to provide services). To exercise these rights,
            contact us using the details below. We may need to verify your identity before responding and may
            retain certain information where legally required or permitted.
          </p>
        </LegalSection>

        <LegalSection title="15. Limitation of Responsibility">
          <p>
            You remain solely responsible for the accuracy of information you provide and for decisions you make
            based on any consultation. Provision of personal information and use of our services does not create
            any warranty, guarantee, or professional medical/legal/financial relationship beyond what is expressly
            stated in our Terms of Service. Spiritual and intuitive services are interpretative; outcomes are not
            guaranteed.
          </p>
        </LegalSection>

        <LegalSection title="16. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Continued use of the website or services after
            updates constitutes acceptance of the revised Policy. We encourage you to review this page
            periodically.
          </p>
        </LegalSection>

        <LegalSection title="17. Governing Law">
          <p>
            This Privacy Policy shall be governed by the laws of India. Disputes relating to this Policy shall be
            subject to the exclusive jurisdiction of the competent courts at Delhi, India, consistent with our
            Terms of Service.
          </p>
        </LegalSection>

        <LegalSection title="18. Contact">
          <p>
            For privacy-related questions, requests, or concerns, contact:{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-mauve underline underline-offset-2 hover:text-gold"
            >
              {siteConfig.contact.email}
            </a>{' '}
            or WhatsApp at {siteConfig.whatsapp.display}.
          </p>
        </LegalSection>

        <LegalSection title="19. Acknowledgement">
          <p>
            BY USING THIS WEBSITE, SUBMITTING PERSONAL INFORMATION, COMPLETING OUR CLIENT INTAKE OR CONSENT FORM,
            MAKING A BOOKING, MAKING A PAYMENT, OR AVAILING ANY SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ,
            UNDERSTOOD, AND AGREE TO THIS PRIVACY POLICY AND OUR TERMS OF SERVICE, AND CONSENT TO THE COLLECTION,
            USE, STORAGE, AND DISCLOSURE OF YOUR INFORMATION AS DESCRIBED HEREIN.
          </p>
        </LegalSection>
      </LegalDocument>
    </>
  )
}
