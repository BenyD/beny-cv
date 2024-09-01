import dynamic from 'next/dynamic';

export const html2pdf = dynamic<typeof import('html2pdf.js')>(() => import('html2pdf.js'), {
  ssr: false,
});