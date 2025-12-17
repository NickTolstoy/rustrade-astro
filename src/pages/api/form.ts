import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Disable prerendering for this API endpoint (required for hybrid mode)
export const prerender = false;

// Email configuration (same as PHP version)
const EMAIL_CONFIG = {
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'RustradeRus@yandex.ru',
    pass: 'btieqswtpzasxzpi' // App password from message.php
  }
};

const EMAIL_RECIPIENTS = [
  'ivanov.4ey@yandex.ru',
  'office@rustrade.pro',
  'sales@rustrade.pro'
];

const EMAIL_FROM = 'RustradeRus@yandex.ru';

// reCAPTCHA secret key
const RECAPTCHA_SECRET = '6LfNRK8pAAAAAKUcw-aX7Kn1cOAQdeNS4bsnetTt';

// Form types
type FormType = 
  | 'callback' 
  | 'contact' 
  | 'consultation' 
  | 'subscribe' 
  | 'blades' 
  | 'oil-cooler' 
  | 'turbogenerator' 
  | 'condenser' 
  | 'turbine' 
  | 'design'
  | 'case-consultation';

interface FormData {
  type: FormType;
  data: Record<string, string>;
}

// Verify reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false;
  
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`
    });
    
    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}

// Create email transporter
function createTransporter() {
  return nodemailer.createTransport(EMAIL_CONFIG);
}

// Send email
async function sendEmail(subject: string, html: string): Promise<boolean> {
  try {
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_RECIPIENTS.join(', '),
      subject: subject,
      html: html
    });
    
    return true;
  } catch (error) {
    console.error('Email send error:', error);
    return false;
  }
}

// Format contact method
function formatContactMethod(method: string): string {
  switch (method) {
    case 'phone': return 'По телефону';
    case 'email': return 'По email';
    case 'any': return 'Любым способом';
    default: return method || 'Не указано';
  }
}

// Generate email content based on form type
function generateEmailContent(type: FormType, data: Record<string, string>): { subject: string; html: string } {
  const { name, phone, email, company, message } = data;
  
  // Base contact info HTML
  const contactInfoHtml = `
    <p><b>Имя:</b> ${name || 'Не указано'}</p>
    <p><b>Телефон:</b> ${phone || 'Не указано'}</p>
    ${email ? `<p><b>Email:</b> ${email}</p>` : ''}
    ${company ? `<p><b>Компания:</b> ${company}</p>` : ''}
  `;

  switch (type) {
    case 'callback':
      return {
        subject: 'Rustrade: Заказать звонок',
        html: `
          <h3>Заказ обратного звонка с сайта</h3>
          <p><b>Имя:</b> ${name}</p>
          <p><b>Телефон:</b> ${phone}</p>
        `
      };

    case 'contact':
      return {
        subject: 'Rustrade: Новый Проект',
        html: `
          <h3>Заявка на обсуждение проекта с сайта</h3>
          ${contactInfoHtml}
          ${data.turbine_type ? `<p><b>Паровая турбина:</b> ${data.turbine_type === 'drive' ? 'Приводная' : 'Генерация'}</p>` : ''}
          ${data.has_rou ? `<p><b>Наличие РОУ:</b> ${data.has_rou === 'yes' ? 'Да' : 'Нет'}</p>` : ''}
        `
      };

    case 'consultation':
    case 'case-consultation':
      // Consultation topics
      const topics: string[] = [];
      if (data.consultation_technical) topics.push('Технический вопрос');
      if (data.consultation_commercial) topics.push('Коммерческое предложение');
      if (data.consultation_service) topics.push('Сервис и обслуживание');
      if (data.consultation_documentation) topics.push('Разработка документации');
      if (data.consultation_other) topics.push('Другое');
      // For case-consultation with radio buttons
      if (data.consultation_topic) {
        const topicMap: Record<string, string> = {
          'technical': 'Технический вопрос',
          'commercial': 'Коммерческое предложение',
          'service': 'Сервис и обслуживание',
          'documentation': 'Разработка документации',
          'other': 'Другое'
        };
        topics.push(topicMap[data.consultation_topic] || data.consultation_topic);
      }
      
      return {
        subject: 'Rustrade: Запрос консультации',
        html: `
          <h3>Запрос консультации с сайта</h3>
          ${contactInfoHtml}
          ${topics.length > 0 ? `<p><b>Тема консультации:</b> ${topics.join(', ')}</p>` : ''}
          ${message || data.question ? `<p><b>Вопрос:</b> ${message || data.question}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    case 'subscribe':
      return {
        subject: 'Rustrade: Подписка на рассылку',
        html: `
          <h3>Новая подписка на рассылку</h3>
          <p><b>Email:</b> ${email}</p>
        `
      };

    case 'design':
      // Design types
      const designTypes: string[] = [];
      if (data.project_type) {
        const typeMap: Record<string, string> = {
          'turbines': 'Турбинные установки',
          'boilers': 'Котельные агрегаты',
          'pipelines': 'Трубопроводы',
          'energy_systems': 'Энергосистемы',
          'other': 'Другое'
        };
        designTypes.push(typeMap[data.project_type] || data.project_type);
      }
      
      return {
        subject: 'Rustrade: Заказ проектирования',
        html: `
          <h3>Заказ проектирования с сайта</h3>
          ${contactInfoHtml}
          ${designTypes.length > 0 ? `<p><b>Тип проектирования:</b> ${designTypes.join(', ')}</p>` : ''}
          ${data.description ? `<p><b>Описание проекта:</b> ${data.description}</p>` : ''}
          ${data.deadlines ? `<p><b>Требуемые сроки:</b> ${data.deadlines}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    case 'blades':
      return {
        subject: 'Rustrade: Заказ изготовления турбинных лопаток',
        html: `
          <h3>Заказ изготовления турбинных лопаток с сайта</h3>
          ${contactInfoHtml}
          ${data.brand ? `<p><b>Оригинальный бренд лопаток:</b> ${data.brand}</p>` : ''}
          ${data.quantity ? `<p><b>Необходимое количество:</b> ${data.quantity}</p>` : ''}
          ${data.coating ? `<p><b>Нанесение защитных покрытий:</b> ${data.coating === 'yes' ? 'Да' : 'Нет'}</p>` : ''}
          ${data.deadline ? `<p><b>Сроки изготовления:</b> ${data.deadline}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    case 'oil-cooler':
      const coolerTypes: Record<string, string> = {
        'single_pass': 'Одноходовой',
        'double_pass': 'Двухходовой',
        'block': 'Блочное исполнение',
        'other': 'Другой'
      };
      
      return {
        subject: 'Rustrade: Заказ маслоохладителя',
        html: `
          <h3>Заказ маслоохладителя с сайта</h3>
          ${contactInfoHtml}
          ${data.cooler_type ? `<p><b>Тип маслоохладителя:</b> ${coolerTypes[data.cooler_type] || data.cooler_type}</p>` : ''}
          ${data.turbine_power ? `<p><b>Мощность турбины:</b> ${data.turbine_power} МВт</p>` : ''}
          ${data.oil_flow ? `<p><b>Расход масла:</b> ${data.oil_flow} м³/ч</p>` : ''}
          ${message ? `<p><b>Дополнительная информация:</b> ${message}</p>` : ''}
          ${data.deadline ? `<p><b>Сроки поставки:</b> ${data.deadline}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    case 'turbogenerator':
      const generatorTypes: Record<string, string> = {
        'synchronous': 'Синхронный',
        'asynchronous': 'Асинхронный'
      };
      const voltages: Record<string, string> = {
        '0.4': '0,4 кВ',
        '6.3': '6,3 кВ',
        '10.5': '10,5 кВ'
      };
      const excitations: Record<string, string> = {
        'static': 'Статическая',
        'brushless': 'Бесщеточная'
      };
      
      return {
        subject: 'Rustrade: Заказ турбогенератора',
        html: `
          <h3>Заказ турбогенератора с сайта</h3>
          ${contactInfoHtml}
          ${data.generator_type ? `<p><b>Тип турбогенератора:</b> ${generatorTypes[data.generator_type] || data.generator_type}</p>` : ''}
          ${data.voltage ? `<p><b>Напряжение:</b> ${voltages[data.voltage] || data.voltage}</p>` : ''}
          ${data.excitation ? `<p><b>Система возбуждения:</b> ${excitations[data.excitation] || data.excitation}</p>` : ''}
          ${message ? `<p><b>Дополнительная информация:</b> ${message}</p>` : ''}
          ${data.deadline ? `<p><b>Сроки поставки:</b> ${data.deadline}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    case 'condenser':
      const condenserTypes: Record<string, string> = {
        'single_pass': 'Одноходовой',
        'double_pass': 'Двухходовой',
        'combined': 'Комбинированный',
        'other': 'Другой'
      };
      
      return {
        subject: 'Rustrade: Заказ конденсатора',
        html: `
          <h3>Заказ конденсатора с сайта</h3>
          ${contactInfoHtml}
          ${data.condenser_type ? `<p><b>Тип конденсатора:</b> ${condenserTypes[data.condenser_type] || data.condenser_type}</p>` : ''}
          ${data.turbine_power ? `<p><b>Мощность турбины:</b> ${data.turbine_power} МВт</p>` : ''}
          ${data.steam_flow ? `<p><b>Расход пара:</b> ${data.steam_flow} т/ч</p>` : ''}
          ${message ? `<p><b>Дополнительная информация:</b> ${message}</p>` : ''}
          ${data.deadline ? `<p><b>Сроки поставки:</b> ${data.deadline}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    case 'turbine':
      const turbineTypes: Record<string, string> = {
        'drive': 'Приводная',
        'generation': 'Генерационная',
        'condensing': 'Конденсационная',
        'backpressure': 'Противодавленческая'
      };
      
      return {
        subject: 'Rustrade: Заказ турбины',
        html: `
          <h3>Заказ турбины с сайта</h3>
          ${contactInfoHtml}
          ${data.turbine_type ? `<p><b>Тип турбины:</b> ${turbineTypes[data.turbine_type] || data.turbine_type}</p>` : ''}
          ${data.turbine_power ? `<p><b>Мощность турбины:</b> ${data.turbine_power} МВт</p>` : ''}
          ${data.steam_flow ? `<p><b>Расход пара:</b> ${data.steam_flow} т/ч</p>` : ''}
          ${message ? `<p><b>Дополнительная информация:</b> ${message}</p>` : ''}
          ${data.deadline ? `<p><b>Сроки поставки:</b> ${data.deadline}</p>` : ''}
          ${data.contact_method ? `<p><b>Предпочитаемый способ связи:</b> ${formatContactMethod(data.contact_method)}</p>` : ''}
        `
      };

    default:
      return {
        subject: 'Rustrade: Новая заявка с сайта',
        html: `
          <h3>Новая заявка с сайта</h3>
          ${contactInfoHtml}
          ${message ? `<p><b>Сообщение:</b> ${message}</p>` : ''}
        `
      };
  }
}

// Validate required fields
function validateForm(type: FormType, data: Record<string, string>): string[] {
  const errors: string[] = [];

  if (type === 'subscribe') {
    if (!data.email) errors.push('Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Invalid email format');
    }
  } else {
    if (!data.name) errors.push('Name is required');
    if (!data.phone) errors.push('Phone is required');
  }

  return errors;
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body: FormData = await request.json();
    const { type, data } = body;

    console.log(`[Form] Received ${type} submission:`, data);

    // Validate required fields
    const validationErrors = validateForm(type, data);
    if (validationErrors.length > 0) {
      return new Response(
        JSON.stringify({ success: false, errors: validationErrors }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify reCAPTCHA (skip for subscribe and in development)
    const isDev = import.meta.env.DEV;
    if (!isDev && type !== 'subscribe' && data['g-recaptcha-response']) {
      const isValidCaptcha = await verifyRecaptcha(data['g-recaptcha-response']);
      if (!isValidCaptcha) {
        return new Response(
          JSON.stringify({ success: false, error: 'reCAPTCHA verification failed' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Generate and send email
    const { subject, html } = generateEmailContent(type, data);
    
    // Add email styles
    const styledHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          h3 { color: #2c5697; margin-bottom: 20px; }
          p { margin: 8px 0; }
          b { color: #555; }
        </style>
      </head>
      <body>
        ${html}
        <hr style="margin-top: 30px; border: none; border-top: 1px solid #ddd;">
        <p style="color: #888; font-size: 12px;">
          Отправлено с сайта rustrade.pro<br>
          Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
        </p>
      </body>
      </html>
    `;

    const emailSent = await sendEmail(subject, styledHtml);

    if (!emailSent) {
      console.error('[Form] Failed to send email');
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send email' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log(`[Form] Email sent successfully for ${type}`);
    
    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('[Form] Error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

// Health check
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ status: 'ok', endpoint: 'form', version: '2.0' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
