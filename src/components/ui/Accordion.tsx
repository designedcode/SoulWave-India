import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AccordionItemProps {
  question: string
  answer: ReactNode
  isOpen: boolean
  onToggle: () => void
}

function FaqAnswerText({ text }: { text: string }) {
  const blocks = text.split(/\n\n+/)

  return (
    <div className="space-y-3">
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n').map((line) => line.trim()).filter(Boolean)
        const listLines = lines.filter((line) => /^[*•]\s/.test(line))
        const introLines = lines.filter((line) => !/^[*•]\s/.test(line))

        if (listLines.length > 0) {
          return (
            <div key={blockIndex} className="space-y-2">
              {introLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              <ul className="list-disc pl-5 space-y-1.5">
                {listLines.map((line, i) => (
                  <li key={i}>{line.replace(/^[*•]\s*/, '')}</li>
                ))}
              </ul>
            </div>
          )
        }

        return (
          <p key={blockIndex}>
            {lines.join(' ')}
          </p>
        )
      })}
    </div>
  )
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-blush/40 last:border-b-0 -mx-2 px-2 rounded-lg transition-colors hover:bg-blush/20">
      <button
        type="button"
        className="group flex w-full items-center justify-between gap-4 py-5 text-left min-h-12"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg md:text-xl text-charcoal transition-colors group-hover:text-gold">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-gold transition-transform group-hover:scale-110"
        >
          <ChevronDown size={22} aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-warm-gray leading-relaxed pr-8">
              {typeof answer === 'string' ? <FaqAnswerText text={answer} /> : answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface AccordionProps {
  items: { question: string; answer: ReactNode }[]
  className?: string
  defaultOpenIndex?: number | null
}

export function Accordion({ items, className = '', defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div className={`rounded-[var(--radius-card)] bg-white/60 backdrop-blur-sm border border-blush/30 px-6 md:px-8 ${className}`}>
      {items.map((item, i) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
