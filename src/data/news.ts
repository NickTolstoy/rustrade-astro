import type { Lang } from '@/i18n';

export interface NewsArticle {
  id: string;
  slug: string;
  category: 'company' | 'articles' | 'industry';
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
  image: string;
  thumbnail?: string;
  date: string;
  author?: string;
  readTime?: number;
  featured?: boolean;
  tags?: string[];
}

export const newsCategories: Record<string, Record<Lang, string>> = {
  company: { ru: 'Новости компании', en: 'Company News' },
  articles: { ru: 'Полезные статьи', en: 'Articles' },
  industry: { ru: 'Новости отрасли', en: 'Industry News' }
};

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'zavershen-finalnyj-etap-proizvodstva-parovoj-turbiny-moshhnostyu-20-mvt',
    category: 'company',
    title: {
      ru: 'Завершен финальный этап производства паровой турбины мощностью 20 МВт',
      en: 'Final stage of 20 MW steam turbine production completed'
    },
    excerpt: {
      ru: 'Завершен финальный этап производства паровой турбины мощностью 20 МВт для крупного производителя пищевых продуктов в России.',
      en: 'The final stage of production of a 20 MW steam turbine for a major food producer in Russia has been completed.'
    },
    content: {
      ru: `<p>Завершен финальный этап производства паровой турбины мощностью 20 МВт для крупного производителя пищевых продуктов в России. Турбина будет использоваться для генерации электроэнергии и обеспечения стабильной работы производственных цехов.</p>
      
<h2>Технические характеристики</h2>
<p>Паровая турбина обладает следующими характеристиками:</p>
<ul>
  <li>Мощность: 20 МВт</li>
  <li>Тип: противодавленческая</li>
  <li>КПД: более 85%</li>
  <li>Срок службы: 25+ лет</li>
</ul>

<h2>Этапы реализации</h2>
<p>Проект был реализован в несколько этапов:</p>
<ol>
  <li>Проектирование и согласование технической документации</li>
  <li>Производство основных узлов турбины</li>
  <li>Сборка и испытания на заводе</li>
  <li>Доставка и монтаж на объекте заказчика</li>
</ol>

<p>Благодаря слаженной работе команды и применению современных технологий, проект был завершен в срок и в полном соответствии с техническим заданием.</p>`,
      en: `<p>The final stage of production of a 20 MW steam turbine for a major food producer in Russia has been completed. The turbine will be used for power generation and ensuring stable operation of production facilities.</p>

<h2>Technical Specifications</h2>
<p>The steam turbine has the following characteristics:</p>
<ul>
  <li>Power: 20 MW</li>
  <li>Type: backpressure</li>
  <li>Efficiency: over 85%</li>
  <li>Service life: 25+ years</li>
</ul>

<h2>Implementation Stages</h2>
<p>The project was implemented in several stages:</p>
<ol>
  <li>Design and approval of technical documentation</li>
  <li>Production of main turbine components</li>
  <li>Assembly and testing at the factory</li>
  <li>Delivery and installation at the customer's site</li>
</ol>

<p>Thanks to the coordinated work of the team and the use of modern technologies, the project was completed on time and in full compliance with the technical specifications.</p>`
    },
    image: '/img/main/large_news_turbine.png',
    date: '2023-04-20',
    readTime: 5,
    featured: true,
    tags: ['турбина', '20 МВт', 'производство']
  },
  {
    id: '2',
    slug: 'prodolzhaetsya-montazh-paroturbinnoj-ustanovki-12mvt',
    category: 'company',
    title: {
      ru: 'Продолжается монтаж паротурбинной установки 12МВт',
      en: 'Installation of 12MW steam turbine continues'
    },
    excerpt: {
      ru: 'На площадке заказчика продолжается монтаж паротурбинной установки мощностью 12 МВт. Работы выполняются в соответствии с графиком.',
      en: 'Installation of a 12 MW steam turbine is continuing at the customer site. Work is being carried out according to schedule.'
    },
    content: {
      ru: `<p>На площадке заказчика продолжается монтаж паротурбинной установки мощностью 12 МВт. Работы выполняются в соответствии с графиком.</p>
      
<p>Специалисты нашей компании осуществляют шеф-монтаж и техническое сопровождение всех работ на объекте. Особое внимание уделяется качеству выполнения монтажных операций и соблюдению технологических требований.</p>

<h2>Текущий статус</h2>
<p>На данный момент выполнены следующие работы:</p>
<ul>
  <li>Монтаж фундамента и опорных конструкций</li>
  <li>Установка корпуса турбины</li>
  <li>Монтаж системы маслоснабжения</li>
  <li>Прокладка трубопроводов пара</li>
</ul>

<p>Планируемый срок завершения монтажных работ — июнь 2023 года.</p>`,
      en: `<p>Installation of a 12 MW steam turbine is continuing at the customer site. Work is being carried out according to schedule.</p>

<p>Our company specialists carry out installation supervision and technical support for all work on the site. Special attention is paid to the quality of installation operations and compliance with technological requirements.</p>

<h2>Current Status</h2>
<p>The following works have been completed:</p>
<ul>
  <li>Installation of foundation and support structures</li>
  <li>Installation of turbine housing</li>
  <li>Installation of oil supply system</li>
  <li>Laying of steam pipelines</li>
</ul>

<p>The planned completion date for installation work is June 2023.</p>`
    },
    image: '/img/news/montage_news.jpg',
    date: '2023-05-17',
    readTime: 3,
    tags: ['монтаж', '12 МВт']
  },
  {
    id: '3',
    slug: 'kontrakt-na-proektirovanie-ptu-dlya-cellyulozno-bumazhnogo-kombinata',
    category: 'company',
    title: {
      ru: 'Заключили контракт на проектирование и поставку ПТУ для целлюлозно-бумажного комбината',
      en: 'Signed contract for design and supply of STU for pulp and paper mill'
    },
    excerpt: {
      ru: 'Компания Рустрейд заключила контракт на проектирование и поставку паротурбинной установки для крупного целлюлозно-бумажного комбината.',
      en: 'Rustrade has signed a contract for the design and supply of a steam turbine unit for a large pulp and paper mill.'
    },
    content: {
      ru: `<p>Компания Рустрейд заключила контракт на проектирование и поставку паротурбинной установки для крупного целлюлозно-бумажного комбината.</p>

<p>В рамках контракта будет выполнено:</p>
<ul>
  <li>Разработка технико-экономического обоснования</li>
  <li>Проектирование паротурбинной установки</li>
  <li>Изготовление оборудования</li>
  <li>Доставка и шеф-монтаж</li>
  <li>Пуско-наладочные работы</li>
</ul>

<p>Реализация проекта позволит заказчику значительно снизить затраты на электроэнергию и повысить энергоэффективность производства.</p>`,
      en: `<p>Rustrade has signed a contract for the design and supply of a steam turbine unit for a large pulp and paper mill.</p>

<p>The contract includes:</p>
<ul>
  <li>Development of feasibility study</li>
  <li>Design of steam turbine unit</li>
  <li>Equipment manufacturing</li>
  <li>Delivery and installation supervision</li>
  <li>Commissioning</li>
</ul>

<p>The implementation of the project will allow the customer to significantly reduce electricity costs and increase production energy efficiency.</p>`
    },
    image: '/img/news/contract_news.png',
    date: '2023-05-17',
    readTime: 4,
    tags: ['контракт', 'ЦБК']
  },
  {
    id: '4',
    slug: 'povyshenie-energoeffektivnosti-predpriyatiya',
    category: 'articles',
    title: {
      ru: 'Повышение энергоэффективности предприятия',
      en: 'Improving enterprise energy efficiency'
    },
    excerpt: {
      ru: 'Рассматриваем основные способы повышения энергоэффективности промышленных предприятий с использованием паровых турбин.',
      en: 'We consider the main ways to improve the energy efficiency of industrial enterprises using steam turbines.'
    },
    content: {
      ru: `<p>Повышение энергоэффективности — одна из ключевых задач современных промышленных предприятий. Использование паровых турбин позволяет существенно снизить затраты на электроэнергию и повысить общую эффективность производства.</p>

<h2>Преимущества использования паровых турбин</h2>
<ul>
  <li>Использование вторичных энергоресурсов</li>
  <li>Снижение затрат на покупку электроэнергии</li>
  <li>Повышение надежности энергоснабжения</li>
  <li>Экологические преимущества</li>
</ul>

<h2>Когда целесообразно установить паровую турбину?</h2>
<p>Установка паровой турбины экономически оправдана в следующих случаях:</p>
<ol>
  <li>Наличие источника пара высокого давления</li>
  <li>Потребность в паре низкого давления для технологических нужд</li>
  <li>Высокие тарифы на электроэнергию</li>
  <li>Необходимость повышения надежности энергоснабжения</li>
</ol>

<p>Специалисты компании Рустрейд помогут оценить потенциал вашего предприятия и подобрать оптимальное решение.</p>`,
      en: `<p>Improving energy efficiency is one of the key tasks of modern industrial enterprises. The use of steam turbines can significantly reduce electricity costs and increase overall production efficiency.</p>

<h2>Advantages of using steam turbines</h2>
<ul>
  <li>Use of secondary energy resources</li>
  <li>Reduced electricity purchase costs</li>
  <li>Improved power supply reliability</li>
  <li>Environmental benefits</li>
</ul>

<h2>When is it advisable to install a steam turbine?</h2>
<p>Installing a steam turbine is economically justified in the following cases:</p>
<ol>
  <li>Availability of high pressure steam source</li>
  <li>Need for low pressure steam for process needs</li>
  <li>High electricity tariffs</li>
  <li>Need to improve power supply reliability</li>
</ol>

<p>Rustrade specialists will help assess the potential of your enterprise and select the optimal solution.</p>`
    },
    image: '/img/news/effective_news.jpg',
    date: '2023-05-17',
    readTime: 7,
    tags: ['энергоэффективность', 'статья']
  }
];

export function getNewsArticles(lang: Lang, category?: string): NewsArticle[] {
  let articles = [...newsArticles];
  
  if (category && category !== 'all') {
    articles = articles.filter(a => a.category === category);
  }
  
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(a => a.slug === slug);
}

export function getFeaturedNews(): NewsArticle | undefined {
  return newsArticles.find(a => a.featured);
}

export function getPopularArticles(limit: number = 4): NewsArticle[] {
  return [...newsArticles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function formatDate(dateStr: string, lang: Lang): string {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', options);
}

