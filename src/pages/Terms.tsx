import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig'
import { SEO } from '../components/SEO'
import { LegalDocument, LegalSection } from '../components/legal/LegalDocument'

export function Terms() {
  return (
    <>
      <SEO
        path="/terms"
        title="Terms of Service | Soul Wave India"
        description="Terms of Service, client agreement, and conditions governing your use of Soul Wave India website and services."
      />
      <LegalDocument accent="Legal" title="Terms of Service">
        <LegalSection title="1. Acceptance of Terms">
          <p>
            These Terms of Service (“Terms”, “Agreement”) constitute a legally binding agreement between you
            (“Client”, “you”, “your”) and {siteConfig.brand} (“Service Provider”, “we”, “us”, “our”).
          </p>
          <p>
            By accessing or using our website ({siteConfig.url}), submitting an enquiry, completing our client
            intake or consent form, making a booking, making a payment, commencing any consultation, or otherwise
            availing any service offered by {siteConfig.brand}, you acknowledge that you have read, understood,
            and irrevocably agree to be bound by these Terms in full, together with our{' '}
            <Link to="/privacy" className="text-mauve underline underline-offset-2 hover:text-gold">
              Privacy Policy
            </Link>
            .
          </p>
          <p>
            If you do not agree to these Terms, you must not use the website or avail any services. Continued use
            of the website or services after any update to these Terms constitutes acceptance of the revised Terms.
          </p>
        </LegalSection>

        <LegalSection title="2. About Soul Wave India">
          <p>
            {siteConfig.brand} provides spiritual, intuitive, and holistic wellness-oriented services. Our
            offerings may include, without limitation:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Tarot Reading</li>
            <li>Akashic Reading</li>
            <li>Astrology</li>
            <li>Vastu</li>
            <li>Numerology</li>
            <li>Graphology</li>
            <li>Palmistry</li>
            <li>Face Reading</li>
            <li>Reiki Healing</li>
            <li>Pranic Healing</li>
            <li>Lama Fera Healing</li>
            <li>Ethical Spell Casting & Custom Rituals</li>
            <li>Animal Communication</li>
            <li>Mediumship</li>
            <li>Inner Child Healing</li>
            <li>Related facilitation, coordination, and client-management services</li>
          </ul>
          <p>
            We may add, modify, suspend, or discontinue any service at any time without prior notice. Descriptions
            on the website are for informational purposes and do not expand the scope of any engagement beyond what
            is expressly confirmed for your booking.
          </p>
        </LegalSection>

        <LegalSection title="3. Eligibility & Capacity">
          <p>
            You represent and warrant that you are at least eighteen (18) years of age (or the age of majority in
            your jurisdiction, whichever is higher) and have full legal capacity to enter into this Agreement. If
            you are booking on behalf of another person, you confirm that you are authorised to do so and that such
            person has also agreed to these Terms.
          </p>
        </LegalSection>

        <LegalSection title="4. Voluntary Participation">
          <p>
            You confirm that participation in any service is entirely voluntary and undertaken of your own free
            will, without coercion, undue influence, or misrepresentation. You remain solely responsible for all
            personal, financial, medical, legal, educational, relationship, career, and other life decisions made
            before, during, or after any consultation or engagement with us.
          </p>
        </LegalSection>

        <LegalSection title="5. Nature of Services — Important Disclaimers">
          <p>
            You expressly acknowledge and agree that:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              All services offered by {siteConfig.brand} are spiritual, intuitive, interpretative, and
              wellness-oriented in nature.
            </li>
            <li>
              They do <strong className="font-medium text-charcoal">not</strong> constitute medical, psychiatric,
              psychological, psychotherapeutic, diagnostic, financial, investment, tax, accounting, architectural,
              engineering, or legal advice.
            </li>
            <li>
              Although our founder may hold professional qualifications (including as a psychologist), services
              offered through this platform are intended for personal insight, spiritual guidance, and
              self-reflection only, and do not constitute psychological assessment, diagnosis, psychotherapy, or
              medical treatment unless expressly stated in a separate written engagement for that purpose.
            </li>
            <li>
              Astrology, tarot, akashic records, numerology, palmistry, graphology, face reading, mediumship,
              animal communication, energy healing, rituals, and related modalities are interpretative. Different
              practitioners may reasonably arrive at different interpretations based on the same or similar
              circumstances. Differing interpretations do not, by themselves, establish that any reading was
              inaccurate, deficient, or improperly rendered.
            </li>
            <li>
              No prediction, assurance, representation, warranty, or guarantee is made regarding any outcome,
              timeline, accuracy, result, or occurrence of any predicted or suggested event.
            </li>
            <li>
              Energy healing, rituals, and ethical spell-casting services are complementary wellness practices and
              are not a substitute for professional medical, psychological, or legal care.
            </li>
            <li>
              Vastu guidance is not a substitute for professional architectural, engineering, or legal advice, and
              is not offered for spirit identification/removal, alleged exorcism, possession clearance, or
              investigation of paranormal entities.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Prohibited Requests & Ethical Boundaries">
          <p>
            You shall not seek, and we shall not provide, consultations or services relating to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Trading, gambling, speculative, or financial market predictions</li>
            <li>Sex determination of a foetus</li>
            <li>The time, date, or certainty of death of any individual</li>
            <li>Black magic, witchcraft, or occult practices intended to cause harm</li>
            <li>
              Any illegal, fraudulent, unethical, manipulative, coercive, or harmful activity
            </li>
            <li>
              Any request intended to manipulate, control, harm, or unlawfully interfere with another person’s
              privacy, free will, personal autonomy, dignity, or rights
            </li>
          </ul>
          <p>
            {siteConfig.brand} reserves the absolute right, at its sole discretion, to refuse, discontinue, or
            terminate any consultation or engagement that falls outside its ethical framework, professional
            standards, or applicable laws, without obligation to provide the requested service or issue a refund
            where such refusal arises from your breach of these Terms.
          </p>
        </LegalSection>

        <LegalSection title="7. Informed Consent">
          <p>
            By booking or availing services, you confirm that the nature, scope, methodology, and limitations of
            the services have been explained (including via these Terms, our website, FAQs, and/or client intake
            form), that you have had adequate opportunity to seek clarification, and that you voluntarily consent
            to proceed. Completing payment and/or submitting our client intake/consent form constitutes informed
            consent and acceptance of this Agreement.
          </p>
        </LegalSection>

        <LegalSection title="8. Fees, Energy Exchange & Payment">
          <p>
            Applicable fees (“Energy Exchange”) shall be communicated prior to commencement of services via the
            website, quotation, or other written confirmation. Payment constitutes acceptance of these Terms and of
            the specific service engagement.
          </p>
          <p>
            Fees are charged for professional consultation, facilitation, coordination, practitioner engagement,
            client management, preparation, time, expertise, and associated professional services — not for any
            guaranteed outcome. You confirm that you have independently evaluated the services, fees, and overall
            engagement before proceeding.
          </p>
          <p>
            Promotional offers, discounts, or special pricing, if any, are governed by the eligibility criteria and
            policies applicable at the relevant time and may be withdrawn at our discretion.
          </p>
        </LegalSection>

        <LegalSection title="9. Rescheduling, Cancellation, No-Shows & Refunds">
          <p>
            <strong className="font-medium text-charcoal">Rescheduling:</strong> You may reschedule a booked
            session only once, subject to availability. Any rescheduling request must be made at least twelve (12)
            hours prior to the scheduled session and is effective only upon written confirmation from{' '}
            {siteConfig.brand}. Requests received less than twelve (12) hours before the session, or requests for
            additional rescheduling beyond the one permitted, may be treated as a missed appointment and may not be
            eligible for rescheduling or a refund.
          </p>
          <p>
            <strong className="font-medium text-charcoal">No-show:</strong> If you fail to attend a scheduled
            session without timely rescheduling as permitted above, fees paid shall be forfeited and no refund
            shall be made.
          </p>
          <p>
            <strong className="font-medium text-charcoal">Refunds:</strong> All payments are final, non-refundable,
            and non-transferable, except where otherwise expressly agreed in writing by {siteConfig.brand}. Without
            limiting the foregoing, refunds will not be issued because you are dissatisfied with an interpretative
            reading, because a predicted outcome did not materialise, because another practitioner offered a
            different interpretation, or because you changed your mind after payment or commencement of services.
          </p>
        </LegalSection>

        <LegalSection title="10. Client Responsibilities">
          <p>You agree to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate, complete, and truthful information relevant to the consultation</li>
            <li>Communicate respectfully throughout all interactions</li>
            <li>
              Not audio record, video record, photograph, screenshot for redistribution, or otherwise reproduce any
              part of a consultation without our prior written consent
            </li>
            <li>Not share practitioner identities or other confidential business information (see Section 12)</li>
            <li>Use services only for lawful, ethical purposes consistent with these Terms</li>
          </ul>
          <p>
            Abusive, threatening, discriminatory, harassing, defamatory, coercive, or otherwise inappropriate
            behaviour may result in immediate termination of the consultation or engagement without any refund or
            compensation.
          </p>
        </LegalSection>

        <LegalSection title="11. Confidentiality">
          <p>
            We shall maintain reasonable confidentiality regarding your personal information, subject to
            applicable law and our Privacy Policy, and where disclosure is reasonably necessary to protect the
            life, rights, or safety of you or another person, or as otherwise required by law. While reasonable
            safeguards are implemented, absolute security cannot be guaranteed.
          </p>
        </LegalSection>

        <LegalSection title="12. Independent Practitioners & Confidential Business Information">
          <p>
            Where any service is facilitated through an independent practitioner, {siteConfig.brand} acts as the
            coordinating and facilitating entity. As part of our proprietary business model, the identity, contact
            details, and other personal information of any practitioner engaged or assigned shall remain strictly
            confidential and shall not be disclosed to you or any third party. Pricing for the overall engagement
            may include facilitation, coordination, client management, and other associated professional services.
          </p>
          <p>
            You acknowledge that practitioner identities, internal processes, pricing methodology, collaborations,
            remuneration structures, and other proprietary business information constitute confidential commercial
            information and shall not be disclosed, reverse-engineered, or used for any competitive or
            unauthorised purpose.
          </p>
        </LegalSection>

        <LegalSection title="13. Intellectual Property">
          <p>
            All website content, branding, reports, readings, recordings, photographs, videos, rituals, methods,
            written material, creative content, proprietary processes, and related materials remain the exclusive
            intellectual property of {siteConfig.brand} (or its licensors), unless otherwise agreed in writing. You
            receive a limited, non-exclusive, non-transferable personal licence to use materials shared with you
            solely for your private, non-commercial use. You may not copy, republish, distribute, modify, or
            commercially exploit such materials without prior written consent.
          </p>
        </LegalSection>

        <LegalSection title="14. Debriefing, Feedback & Successive Readings">
          <p>
            Any feedback shall not constitute evidence of inaccuracy merely because another practitioner offers a
            different interpretation or because a predicted outcome does not materialise. We may, in your best
            interests, recommend allowing a reasonable interval between successive readings or consultations to
            facilitate reflection and avoid confusion from multiple contemporaneous interpretations. Such
            recommendation is advisory only and does not restrict your freedom to seek guidance elsewhere.
          </p>
        </LegalSection>

        <LegalSection title="15. Limitation of Reliance, Independent Decision-Making & Assumption of Risk">
          <p>
            You confirm that you have independently evaluated the services and voluntarily chosen to proceed
            without relying upon any representation beyond those expressly contained in these Terms. You remain
            solely responsible for all decisions taken before or after any consultation. You assume all risk
            associated with acting (or refraining from acting) upon any interpretation, guidance, insight, or
            recommendation provided.
          </p>
        </LegalSection>

        <LegalSection title="16. Limitation of Liability & Indemnity">
          <p>
            To the fullest extent permitted by applicable law, {siteConfig.brand}, its founders, practitioners,
            facilitators, employees, agents, and representatives shall not be liable for any direct, indirect,
            incidental, consequential, special, exemplary, or punitive damages, including without limitation loss
            of profits, data, goodwill, opportunity, or emotional distress, arising out of or related to your use
            of the website, services, or any guidance provided, whether based in contract, tort, negligence, or
            otherwise — even if advised of the possibility of such damages.
          </p>
          <p>
            Without limiting the foregoing, we shall not be liable for decisions taken by you based upon any
            interpretation, guidance, or recommendation provided during or after a consultation.
          </p>
          <p>
            Our aggregate liability arising out of any engagement shall not exceed the fees actually paid by you
            to {siteConfig.brand} for the specific service giving rise to the claim.
          </p>
          <p>
            You agree to indemnify, defend, and hold harmless {siteConfig.brand} and its representatives from and
            against any claims, demands, losses, damages, costs, and expenses (including reasonable legal fees)
            arising from your breach of these Terms, your misuse of the services, your provision of false or
            incomplete information, or your decisions or conduct before, during, or after the engagement.
          </p>
        </LegalSection>

        <LegalSection title="17. Suspension or Termination">
          <p>
            We reserve the right to suspend or terminate any engagement or access to the website in the event of
            non-payment, abuse, harassment, fraud, material breach of these Terms, misuse of services, provision of
            false information, or where continuation of the professional relationship is no longer reasonably
            practicable, without refund where termination arises from your conduct or breach.
          </p>
        </LegalSection>

        <LegalSection title="18. Website Use & Electronic Communications">
          <p>
            The website is provided on an “as is” and “as available” basis without warranties of any kind, express
            or implied. We do not warrant uninterrupted, error-free, or secure access. You consent to communication
            through email, WhatsApp, phone, video platforms, or other mutually agreed electronic channels for
            booking, consultation delivery, and related administrative purposes.
          </p>
        </LegalSection>

        <LegalSection title="19. Emergency & Crisis Disclaimer">
          <p>
            {siteConfig.brand} is not an emergency, crisis intervention, or mental health service. If you are
            experiencing thoughts of self-harm, suicidal ideation, or require urgent psychological or medical
            support, contact your local emergency services or an appropriately qualified mental health professional
            immediately. Do not rely on our services for crisis support.
          </p>
        </LegalSection>

        <LegalSection title="20. Force Majeure">
          <p>
            We shall not be liable for any failure or delay in performance due to circumstances beyond our
            reasonable control, including but not limited to natural disasters, epidemics, government actions,
            internet or telecommunications failures, power outages, or illness of assigned practitioners.
          </p>
        </LegalSection>

        <LegalSection title="21. Entire Agreement">
          <p>
            These Terms, together with our Privacy Policy and any written confirmation specific to your booking
            (including the client intake/consent form where completed), constitute the complete understanding
            between the parties regarding the engagement and supersede prior discussions relating to the services,
            except that a signed written agreement expressly stating otherwise shall prevail for the matters it
            covers.
          </p>
        </LegalSection>

        <LegalSection title="22. Severability & Waiver">
          <p>
            If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall
            continue in full force and effect. Failure to enforce any right shall not constitute a waiver of that
            or any other right.
          </p>
        </LegalSection>

        <LegalSection title="23. Governing Law & Jurisdiction">
          <p>
            These Terms shall be governed by the laws of India. Any dispute arising out of or relating to these
            Terms, the website, or the services shall be subject to the exclusive jurisdiction of the competent
            courts at Delhi, India.
          </p>
        </LegalSection>

        <LegalSection title="24. Contact">
          <p>
            For questions regarding these Terms, contact us at{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-mauve underline underline-offset-2 hover:text-gold"
            >
              {siteConfig.contact.email}
            </a>{' '}
            or WhatsApp at {siteConfig.whatsapp.display}.
          </p>
        </LegalSection>

        <LegalSection title="25. Acknowledgement">
          <p>
            BY USING THIS WEBSITE, SUBMITTING AN ENQUIRY, COMPLETING OUR INTAKE OR CONSENT FORM, MAKING A BOOKING,
            MAKING A PAYMENT, OR AVAILING ANY SERVICE, YOU CONFIRM THAT YOU HAVE CAREFULLY READ, UNDERSTOOD, AND
            VOLUNTARILY ACCEPTED THESE TERMS OF SERVICE AND OUR PRIVACY POLICY, AND THAT YOU AGREE THAT ALL
            PERSONAL, FINANCIAL, MEDICAL, LEGAL, AND OTHER LIFE DECISIONS REMAIN SOLELY YOUR RESPONSIBILITY.
          </p>
        </LegalSection>
      </LegalDocument>
    </>
  )
}
