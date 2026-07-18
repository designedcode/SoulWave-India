import { type PriceTier } from '../../config/services'

type PriceGroup = {
  name: string | null
  tiers: PriceTier[]
}

function isAddonTier(label: string): boolean {
  const lower = label.toLowerCase()
  return (
    lower.startsWith('every additional') ||
    lower.startsWith('add-on') ||
    lower.startsWith('plus ')
  )
}

export function groupPriceTiers(tiers: PriceTier[]): PriceGroup[] {
  const groups: PriceGroup[] = []

  for (const tier of tiers) {
    const groupName = tier.note ?? null
    const last = groups[groups.length - 1]

    if (groupName) {
      if (last && last.name === groupName) {
        last.tiers.push(tier)
      } else {
        groups.push({ name: groupName, tiers: [tier] })
      }
      continue
    }

    if (last) {
      last.tiers.push(tier)
    } else {
      groups.push({ name: null, tiers: [tier] })
    }
  }

  return groups
}

export function PriceTiersList({ tiers }: { tiers: PriceTier[] }) {
  const groups = groupPriceTiers(tiers)
  const hasNamedGroups = groups.some((g) => g.name)

  return (
    <div className="space-y-3">
      {groups.map((group, groupIndex) => (
        <div
          key={`${group.name ?? 'default'}-${groupIndex}`}
          className={
            hasNamedGroups
              ? 'rounded-xl border border-blush/40 bg-blush/10 px-3.5 py-3'
              : undefined
          }
        >
          {group.name ? (
            <p className="font-heading text-[13px] tracking-wide text-mauve mb-2.5">
              {group.name}
            </p>
          ) : null}

          <ul className="space-y-2">
            {group.tiers.map((tier) => {
              const addon = isAddonTier(tier.label)
              return (
                <li
                  key={`${tier.label}-${tier.price}`}
                  className={`flex items-baseline justify-between gap-3 ${
                    addon ? 'pl-2 border-l-2 border-blush/60' : ''
                  }`}
                >
                  <span
                    className={
                      addon
                        ? 'text-xs text-warm-gray leading-snug'
                        : 'text-sm text-charcoal leading-snug font-medium'
                    }
                  >
                    {tier.label}
                  </span>
                  <span
                    className={`shrink-0 tabular-nums ${
                      addon ? 'text-sm text-gold/90' : 'text-base text-gold font-medium'
                    }`}
                  >
                    {tier.price}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
