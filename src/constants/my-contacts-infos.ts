import { LucideIcon, Mail, Phone, MessageCircle } from 'lucide-react';

interface ContactInfo {
  type: string;
  value: string;
  icon: LucideIcon;
}

export const contactInfo: ContactInfo[] = [
  {
    type: 'Phone',
    value: '+229 0196473938',
    icon: Phone,
  },
  {
    type: 'WhatsApp',
    value: '+229 0194693700',
    icon: MessageCircle,
  },
  {
    type: 'Email',
    value: 'akogbetodonald@gmail.com',
    icon: Mail,
  },
];