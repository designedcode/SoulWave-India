import { useState, type ReactNode } from 'react'
import {
  formatServicePrice,
  type ServiceOffering,
} from '../../config/services'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'
import { PriceTiersList } from './PriceTiersList'

interface ServiceCardProps {
  service: ServiceOffering
  bookUrl: string
}

function DetailBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2.5">
      <h3 className="font-heading text-sm tracking-wide text-charcoal uppercase">
        {title}
      </h3>
      {children}
    </div>
  )
}

export function ServiceCard({ service, bookUrl }: ServiceCardProps) {
  const [open, setOpen] = useState(false)
  const priceLabel = formatServicePrice(service)
  const isContact = !service.startingPrice
  const ctaLabel = isContact ? 'Enquire' : 'Book Now'
  const showModes =
    service.modes.length > 0 && !service.priceTiers.some((tier) => tier.note)

  return (
    <>
      <Card
        className="h-full flex flex-col"
        onClick={() => setOpen(true)}
      >
        <div className="h-40 sm:h-44 overflow-hidden">
          <img
            src={service.image}
            alt=""
            width={600}
            height={400}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-2">
            <h3 className="font-heading text-xl text-charcoal">{service.title}</h3>
            <span
              className={`text-sm font-medium shrink-0 ${
                isContact ? 'text-warm-gray' : 'text-gold'
              }`}
            >
              {priceLabel}
            </span>
          </div>

          <p className="text-warm-gray text-sm leading-relaxed mb-4 line-clamp-3">
            {service.description}
          </p>

          <div className="mt-auto flex flex-col gap-3">
            <Button
              href={bookUrl}
              variant="primary"
              size="md"
              external
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {ctaLabel}
            </Button>

            <Button
              variant="secondary"
              size="md"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation()
                setOpen(true)
              }}
            >
              View details
            </Button>
          </div>
        </div>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={service.title}
        footer={
          <Button
            href={bookUrl}
            variant="primary"
            size="md"
            external
            className="w-full"
          >
            {ctaLabel}
          </Button>
        }
      >
        <div className="space-y-5 text-sm">
          <div className="overflow-hidden rounded-[calc(var(--radius-card)-8px)] h-36 sm:h-40">
            <img
              src={service.image}
              alt=""
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-warm-gray leading-relaxed">{service.description}</p>

          <DetailBlock title="Energy Exchange">
            {service.priceTiers.length > 0 ? (
              <PriceTiersList tiers={service.priceTiers} />
            ) : (
              <p className="text-warm-gray leading-relaxed">Contact for pricing.</p>
            )}
          </DetailBlock>

          {showModes && (
            <DetailBlock title="Mode">
              <p className="text-warm-gray">{service.modes.join(' · ')}</p>
            </DetailBlock>
          )}

          {service.inclusions.length > 0 && (
            <DetailBlock title="What you receive">
              <ul className="space-y-1.5 text-warm-gray list-disc pl-4">
                {service.inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {service.requirements.length > 0 && (
            <DetailBlock title="What to share">
              <ul className="space-y-1.5 text-warm-gray list-disc pl-4">
                {service.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {service.notes && service.notes.length > 0 && (
            <DetailBlock title="Please note">
              <ul className="space-y-1.5 text-warm-gray list-disc pl-4">
                {service.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </DetailBlock>
          )}
        </div>
      </Modal>
    </>
  )
}
