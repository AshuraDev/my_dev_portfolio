import { LucideIcon, Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactInfo {
  type: string;
  value: string;
  icon: LucideIcon;
}

export const contactInfo: ContactInfo[] = [
  {
    type: 'Phone',
    value: '+123 456 7890',
    icon: Phone,
  },
  {
    type: 'WhatsApp',
    value: '+123 456 7890',
    icon: MessageCircle,
  },
  {
    type: 'Email',
    value: 'contact@example.com',
    icon: Mail,
  },
];