import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '../config/site'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 ring-4 ring-white sm:bottom-8 sm:right-6"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </motion.a>
  )
}
