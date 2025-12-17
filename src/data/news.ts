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
    id: '5',
    slug: 'parovye-turbiny-2025-inzhenernaya-politika-effektivnosti',
    category: 'articles',
    title: {
      ru: 'Паровые турбины в 2025: где заканчивается «классика» и начинается инженерная политика эффективности',
      en: 'Steam Turbines in 2025: Where Classics End and Engineering Efficiency Policy Begins'
    },
    excerpt: {
      ru: 'Экспертный анализ современных паровых турбин: термодинамика, материаловедение, острые углы отрасли и реальная практика внедрения. Взгляд инженера-практика.',
      en: 'Expert analysis of modern steam turbines: thermodynamics, materials science, industry pain points and real implementation practice.'
    },
    content: {
      ru: `<div class="expert-quote">
  <blockquote>
    «Паровая турбина, это оптимизационная задача под ограничения, а не гонка паспортных значений. Лучшая проточная часть, та, которая сохраняет характеристики после 2-3 циклов ремонтов.»
  </blockquote>
  <cite>— к.т.н., главный инженер проектов, 18 лет опыта внедрения ПТУ</cite>
</div>

<p>Паровая турбина, одна из немногих машин, где на одной оси сходятся термодинамика «первого принципа», трибология, материаловедение, автоматизация и экономика жизненного цикла. При этом вокруг паровых турбин до сих пор живут мифы уровня «это прошлый век», и одновременно ожидания уровня «дайте 42% КПД на любых режимах и без капремонта 20 лет». Реальность, как обычно, некомфортнее и интереснее: турбина давно перестала быть просто «ротором с лопатками», а стала частью большой системы, в которой выигрывает не тот, у кого красивее проточная часть, а тот, кто лучше управляет паром, конденсацией, режимами и деградацией.</p>

<figure class="article-figure">
  <img src="/img/articles/turbine-section-diagram.svg" alt="Схема проточной части паровой турбины" />
  <figcaption>Рис. 1. Схема проточной части паровой турбины с указанием основных узлов и направления потока пара</figcaption>
</figure>

<h2>Научный контекст: почему турбина это про пределы, а не про «лошадей»</h2>

<p>В основе лежит цикл Ренкина. Казалось бы, всё просто: подняли параметры пара, расширили, сконденсировали, вернули воду. Но как только вы выходите за презентационный уровень, вы упираетесь в четыре жёстких ограничения:</p>

<div class="key-points-grid">
  <div class="key-point">
    <h4>Эксергетические потери</h4>
    <p>С точки зрения эксергии, главный «пожиратель» полезности это не сама турбина, а необратимости в котле/утилизации и в конденсации. Поэтому борьба за десятые доли процента в проточной части может давать меньше эффекта, чем грамотная тепловая схема и управление вакуумом/охлаждением.</p>
  </div>
  <div class="key-point">
    <h4>Влажнопаровая область</h4>
    <p>На последних ступенях влажность это не эстетика, а эрозия кромок и динамика капель. Теоретически можно "добить" расширение ради КПД, практически вы платите ресурсом и вибронадёжностью.</p>
  </div>
  <div class="key-point">
    <h4>Ограничения материалов</h4>
    <p>Температура и давление это не только «выше/лучше», это ползучесть, термоусталость, требования к чистоте металла, сварке, НК. Физика материалов быстро превращает «хочу 620°C» в «хочу другой завод и другой бюджет».</p>
  </div>
  <div class="key-point">
    <h4>Управляемость</h4>
    <p>Турбина работает не в учебнике, а в сетевых и технологических режимах: частичные нагрузки, отборы, скачки потребления, ограничения по шуму/вибрациям, требования к пускам.</p>
  </div>
</div>

<figure class="article-figure">
  <img src="/img/articles/rankine-cycle-diagram.svg" alt="Диаграмма цикла Ренкина" />
  <figcaption>Рис. 2. T-s диаграмма цикла Ренкина с указанием зон потерь эксергии</figcaption>
</figure>

<h2>Архитектура решений: противодавление vs конденсация vs отборы</h2>

<p>Это не просто «типы турбин», а разные бизнес-модели.</p>

<h3>1. Противодавленческие турбины (backpressure)</h3>

<p>Это честная промышленная логика: вырабатываем механическую/электрическую энергию и отдаём пар дальше в технологию. Экономика здесь часто сильнее, чем у конденсационных, потому что вы монетизируете «неизбежный» паровой поток.</p>

<div class="warning-block">
  <strong>Спорный момент:</strong> многие проекты обещают эффект, предполагая, что технологический пар "всё равно нужен". А потом выясняется, что график потребления пара сезонный/прерывистый, и тогда турбина начинает жить в мире ограничений по противодавлению и недогрузов.
</div>

<p><strong>Инженерный вывод:</strong> противодавление идеально там, где есть стабильный потребитель пара и понятная дисциплина режимов.</p>

<figure class="article-figure">
  <img src="/img/articles/backpressure-scheme.svg" alt="Схема противодавленческой турбины" />
  <figcaption>Рис. 3. Принципиальная тепловая схема с противодавленческой турбиной</figcaption>
</figure>

<h3>2. Конденсационные турбины</h3>

<p>Это уже игра в вакуум, охлаждение и низкопотенциальные потери. Здесь резко возрастает роль конденсатора, циркводы/градирни, герметичности и чистоты теплообмена. В реальных условиях «паспортный вакуум» это не данность, а результат эксплуатации.</p>

<div class="warning-block">
  <strong>Острый угол:</strong> конденсационная схема часто продаётся как «максимальный КПД», но на части площадок ограничения по воде/градирне делают КПД заложником инфраструктуры, а не турбины.
</div>

<h3>3. Турбины с регулируемыми отборами (extraction/bleeding)</h3>

<p>Самый недооценённый класс с точки зрения общей эффективности предприятия: вы можете "сшить" электроэнергию и технологическое тепло. Но это усложняет автоматику, требования к арматуре, и делает проект чувствительным к культуре эксплуатации.</p>

<p><strong>Практика:</strong> если на заводе не умеют держать режимы и следить за качеством воды/пара, отборы превращаются в источник аварийных сценариев.</p>

<figure class="article-figure wide">
  <img src="/img/articles/turbine-types-comparison.svg" alt="Сравнение типов турбин" />
  <figcaption>Рис. 4. Сравнительная диаграмма эффективности различных типов турбин в зависимости от режима работы</figcaption>
</figure>

<h2>Проточная часть и «магия лопаток»: где правда, а где маркетинг</h2>

<p>Да, профили лопаток важны. Но в 2025 спор идёт не о том, «есть ли CFD», а о том, <strong>как связаны расчёт и производственная реальность</strong>: шероховатость, допуски, балансировка, кромки после ремонта, реальная влажность, реальные отложения.</p>

<div class="info-table">
  <table>
    <thead>
      <tr>
        <th>Параметр</th>
        <th>Расчётное значение</th>
        <th>После 3 лет эксплуатации</th>
        <th>Влияние на КПД</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Шероховатость лопаток, мкм</td>
        <td>0.8-1.2</td>
        <td>3-6</td>
        <td>−0.5...−1.2%</td>
      </tr>
      <tr>
        <td>Радиальные зазоры, мм</td>
        <td>0.3-0.5</td>
        <td>0.8-1.5</td>
        <td>−0.8...−2.0%</td>
      </tr>
      <tr>
        <td>Эрозия входных кромок</td>
        <td>-</td>
        <td>до 15% хорды</td>
        <td>−1.0...−3.0%</td>
      </tr>
      <tr>
        <td>Солевые отложения</td>
        <td>-</td>
        <td>0.1-0.3 мм</td>
        <td>−0.5...−1.5%</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="expert-opinion">
  <h4>Экспертное мнение</h4>
  <p>«Лучшая проточная часть, та, которая сохраняет характеристики после 2-3 циклов ремонтов, а не та, которая красиво выглядит в презентации. Оптимизация последней ступени часто конфликтует с ресурсом из-за эрозии и вибронагружения.»</p>
  <cite>—</cite>
</div>

<figure class="article-figure">
  <img src="/img/articles/blade-erosion-stages.svg" alt="Стадии эрозии лопаток" />
  <figcaption>Рис. 5. Стадии эрозионного износа рабочих лопаток последних ступеней</figcaption>
</figure>

<h2>Материалы и деградация: ползучесть, коррозия, эрозия. Три разных врага</h2>

<ul>
  <li><strong>Ползучесть</strong> (высокие температуры/напряжения) медленно "съедает" геометрию и посадки, особенно при частых пусках и термоциклах.</li>
  <li><strong>Коррозия</strong>, часто следствие химии: кислород, соли, неправильный режим деаэрации, нарушения водно-химического режима.</li>
  <li><strong>Эрозия</strong> на влажных ступенях это кинетика капель, качество сепарации, конструкция влагосепараторов/перегревателей, и да, режимы.</li>
</ul>

<div class="warning-block">
  <strong>Острый угол:</strong> на части объектов проще и дешевле <em>сознательно ограничить степень расширения</em> (и потерять немного КПД), чем потом менять последние ступени и лопатки чаще, чем это экономически оправдано.
</div>

<figure class="article-figure">
  <img src="/img/articles/degradation-mechanisms.svg" alt="Механизмы деградации" />
  <figcaption>Рис. 6. Основные механизмы деградации элементов паровой турбины и зоны их проявления</figcaption>
</figure>

<h2>Регулирование и автоматика: турбина без "мозгов" сегодня неконкурентна</h2>

<p>Современная турбина это система с обратными связями: скорость/мощность, давление отбора, температура металла, вибрации, вакуум, ограничения по пускам.</p>

<h3>Что реально даёт эффект:</h3>
<ul>
  <li><strong>Модельные ограничители (model-based constraints)</strong> по термонапряжениям обеспечивают меньше термоусталости при пусках.</li>
  <li><strong>Грамотная логика прогрева/продувок</strong> снижает влияние "человеческого фактора".</li>
  <li><strong>Онлайн-диагностика вибраций и трендов</strong> для раннего обнаружения деградации подшипников, несоосности, задеваний.</li>
</ul>

<div class="warning-block">
  <strong>Спорная тема:</strong> «цифровые двойники» любят продавать как магию. В реальности <strong>ценность не в 3D-модели</strong>, а в корректной физической модели потерь/режимов и дисциплине данных. Если датчики "врут", двойник становится цифровой декорацией.
</div>

<figure class="article-figure wide">
  <img src="/img/articles/control-system-architecture.svg" alt="Архитектура системы управления" />
  <figcaption>Рис. 7. Типовая архитектура современной АСУ ТП паровой турбины</figcaption>
</figure>

<h2>КПД, «экономический эффект» и честность расчётов</h2>

<p>Я видел слишком много ТЭО, где эффект выглядит красиво, пока не задашь три вопроса:</p>

<div class="numbered-list">
  <div class="numbered-item">
    <span class="number">1</span>
    <div>
      <strong>Какая база сравнения?</strong>
      <p>Сравнивают с "устаревшим агрегатом", который на самом деле уже не работает в тех режимах, что заложены в расчёт.</p>
    </div>
  </div>
  <div class="numbered-item">
    <span class="number">2</span>
    <div>
      <strong>Какие режимы в году?</strong>
      <p>Часто берут один-два режима и экстраполируют на 8000 часов. На заводе реальная наработка и профиль нагрузки могут быть совсем другими.</p>
    </div>
  </div>
  <div class="numbered-item">
    <span class="number">3</span>
    <div>
      <strong>Что заложено по инфраструктуре?</strong>
      <p>Вакуум, охлаждение, качество воды, состояние конденсатора/градирни, паропроводы, арматура. Эти вещи "не видны" в турбине, но могут съесть половину эффекта.</p>
    </div>
  </div>
</div>

<div class="expert-opinion critical">
  <h4>Жёсткое мнение эксперта</h4>
  <p>«Если эффект считается без режима эксплуатации и без качества пара/воды, это маркетинг, а не инженерия.»</p>
  <cite>—</cite>
</div>

<h2>Острые углы отрасли: почему паровые турбины "спорят" сами с собой</h2>

<h3>1. Паровая турбина vs газовая/ПГУ</h3>

<p>В энергетике ПГУ часто выигрывает на бумаге, но промышленность живёт в мире топлива, надёжности и тепловых потребителей. Там, где есть технологический пар и утилизация, паровая турбина остаётся крайне конкурентной.</p>

<p><strong>Спорный тезис:</strong> «паровые турбины не нужны в декарбонизации». На практике, в промышленности декарбонизация часто начинается с <strong>повышения эффективности и утилизации</strong>, а это территория пара.</p>

<h3>2. "Чем выше параметры, тем лучше"</h3>

<p>Супер/ультрасуперкритические параметры это не бесплатный КПД, а скачок в требованиях к материалам, сварке, контролю, и главное, к культуре эксплуатации. На части объектов выигрывает более "скромная", но надёжная схема с лучшей ремонтной логистикой.</p>

<h3>3. Импортозамещение и локализация</h3>

<p>Острый вопрос не в том, "можем ли мы сделать турбину", а в том, <strong>можем ли мы стабильно повторять качество</strong> (металл, лопатки, НК, балансировка, подшипники, уплотнения, арматура, автоматика). Турбина это цепочка, и слабое звено часто не там, где его ищут.</p>

<figure class="article-figure">
  <img src="/img/articles/supply-chain-diagram.svg" alt="Цепочка поставок" />
  <figcaption>Рис. 8. Критические звенья цепочки поставок для производства паровых турбин</figcaption>
</figure>

<h2>Что я считаю признаком "взрослого" проекта внедрения турбины</h2>

<ul>
  <li><strong>Тепловая схема и режимы</strong> описаны так же подробно, как сама турбина.</li>
  <li><strong>План управления деградацией:</strong> какие параметры мониторим, какие пороги, как принимаем решение о ремонте.</li>
  <li><strong>Инфраструктура</strong> (конденсатор, охлаждение, ВХР, арматура, трубопроводы) включена в бюджет и сроки.</li>
  <li><strong>Пусковые сценарии</strong> и обучение персонала являются частью поставки, а не "потом разберёмся".</li>
</ul>

<h2>Куда будет двигаться инженерия паровых турбин дальше</h2>

<ul>
  <li><strong>Больше гибкости по режимам</strong>: турбины будут проектировать не под "номинал", а под диапазон и частые переходы.</li>
  <li><strong>Умнее регулирование</strong>: модельные ограничители и адаптивные настройки под деградацию.</li>
  <li><strong>Материалы и покрытия</strong>: борьба за ресурс последних ступеней и уплотнений.</li>
  <li><strong>Интеграция с утилизацией</strong>: экономику всё чаще будет определять системность, а не "паспорт турбины".</li>
</ul>

<h2>Финальная мысль инженера</h2>

<div class="conclusion-block">
  <p>Паровая турбина, не "ретро-машина" и не "священная корова". Это зрелая технология, где выигрыш лежит в дисциплине: режимы, вода/пар, инфраструктура, диагностика, ремонтная стратегия. Самые успешные внедрения, которые я видел, происходили не там, где "самая продвинутая проточная часть", а там, где команда честно описала ограничения площадки и сделала систему, а не отдельный агрегат.</p>
</div>

<div class="sources-block">
  <h3>Источники и нормативные документы</h3>
  <ul>
    <li><a href="http://www.iapws.org/relguide/IF97-Rev.html" target="_blank" rel="noopener">IAPWS Industrial Formulation</a>, свойства воды и пара</li>
    <li><a href="https://www.asme.org/codes-standards/find-codes-standards/ptc-6-steam-turbines" target="_blank" rel="noopener">ASME PTC 6</a>, испытания и оценка характеристик турбомашин</li>
    <li><a href="https://webstore.iec.ch/publication/293" target="_blank" rel="noopener">IEC 60045</a>, общие требования к паровым турбинам</li>
    <li><a href="https://www.elsevier.com/books/fluid-mechanics-and-thermodynamics-of-turbomachinery/dixon/978-0-12-415954-9" target="_blank" rel="noopener">Dixon S.L., Fluid Mechanics and Thermodynamics of Turbomachinery</a></li>
    <li><a href="https://archive.org/details/steamturbinetheo00kear" target="_blank" rel="noopener">Kearton W.J., Steam Turbine Theory and Practice</a></li>
    <li><a href="https://www.vgb.org/en/guidelines_powertech.html" target="_blank" rel="noopener">VGB Guidelines</a>, эксплуатация оборудования ТЭС</li>
  </ul>
</div>`,
      en: `<div class="expert-quote">
  <blockquote>
    "A steam turbine is an optimization problem under constraints, not a race for nameplate values. The best flow path is one that maintains its characteristics after 2-3 repair cycles."
  </blockquote>
  <cite>— Ph.D., Chief Project Engineer, 18 years of STU implementation experience</cite>
</div>

<p>A steam turbine is one of the few machines where "first principle" thermodynamics, tribology, materials science, automation, and life cycle economics converge on a single shaft. Yet myths like "this is last century technology" persist, alongside expectations of "give us 42% efficiency at any load without major overhaul for 20 years." Reality, as usual, is less comfortable and more interesting: the turbine has long ceased to be just a "rotor with blades" and has become part of a larger system where the winner is not the one with the prettiest flow path, but the one who best manages steam, condensation, operating modes, and degradation.</p>

<figure class="article-figure">
  <img src="/img/articles/turbine-section-diagram.svg" alt="Steam turbine flow path diagram" />
  <figcaption>Fig. 1. Steam turbine flow path diagram showing main components and steam flow direction</figcaption>
</figure>

<h2>Scientific Context: Why Turbines Are About Limits, Not "Horsepower"</h2>

<p>The foundation is the Rankine cycle. Seems simple: raise steam parameters, expand, condense, return the water. But as soon as you go beyond presentation level, you hit four hard constraints:</p>

<div class="key-points-grid">
  <div class="key-point">
    <h4>Exergetic Losses</h4>
    <p>From an exergy perspective, the main "utility destroyer" isn't the turbine itself, but irreversibilities in the boiler/heat recovery and condensation. Therefore, fighting for tenths of a percent in the flow path may yield less effect than a proper thermal scheme and vacuum/cooling management.</p>
  </div>
  <div class="key-point">
    <h4>Wet Steam Region</h4>
    <p>In the last stages, moisture is not aesthetics—it's edge erosion and droplet dynamics. Theoretically, you can "push" expansion for efficiency; practically, you pay with service life and vibration reliability.</p>
  </div>
  <div class="key-point">
    <h4>Material Limitations</h4>
    <p>Temperature and pressure aren't just "higher is better"—it's creep, thermal fatigue, metal purity requirements, welding, NDT. Materials physics quickly turns "I want 620°C" into "I want a different plant and a different budget."</p>
  </div>
  <div class="key-point">
    <h4>Controllability</h4>
    <p>A turbine doesn't operate in a textbook, but in grid and process modes: partial loads, extractions, consumption spikes, noise/vibration limits, startup requirements.</p>
  </div>
</div>

<figure class="article-figure">
  <img src="/img/articles/rankine-cycle-diagram.svg" alt="Rankine cycle diagram" />
  <figcaption>Fig. 2. T-s diagram of Rankine cycle showing exergy loss zones</figcaption>
</figure>

<h2>Solution Architecture: Backpressure vs Condensing vs Extraction</h2>

<p>These aren't just "turbine types"—they're different business models.</p>

<h3>1. Backpressure Turbines</h3>

<p>This is honest industrial logic: generate mechanical/electrical energy and pass the steam further into the process. Economics here is often stronger than condensing turbines because you monetize an "inevitable" steam flow.</p>

<div class="warning-block">
  <strong>Controversial point:</strong> many projects promise benefits assuming process steam is "needed anyway." Then it turns out the steam consumption schedule is seasonal/intermittent, and the turbine starts living in a world of backpressure constraints and underloading.
</div>

<p><strong>Engineering conclusion:</strong> backpressure is ideal where there's a stable steam consumer and clear operational discipline.</p>

<figure class="article-figure">
  <img src="/img/articles/backpressure-scheme.svg" alt="Backpressure turbine scheme" />
  <figcaption>Fig. 3. Principal thermal scheme with backpressure turbine</figcaption>
</figure>

<h3>2. Condensing Turbines</h3>

<p>This is already playing with vacuum, cooling, and low-potential losses. The role of the condenser, circulating water/cooling tower, tightness, and heat exchange cleanliness increases sharply. In real conditions, "nameplate vacuum" is not a given, but a result of operation.</p>

<div class="warning-block">
  <strong>Sharp angle:</strong> condensing schemes are often sold as "maximum efficiency," but at some sites water/cooling tower limitations make efficiency hostage to infrastructure, not the turbine.
</div>

<h3>3. Extraction Turbines (extraction/bleeding)</h3>

<p>The most underrated class from the perspective of overall plant efficiency: you can "stitch together" electricity and process heat. But this complicates automation, valve requirements, and makes the project sensitive to operational culture.</p>

<p><strong>Practice:</strong> if a plant can't maintain operating modes and monitor water/steam quality, extractions become a source of emergency scenarios.</p>

<figure class="article-figure wide">
  <img src="/img/articles/turbine-types-comparison.svg" alt="Turbine types comparison" />
  <figcaption>Fig. 4. Comparative efficiency diagram of different turbine types depending on operating mode</figcaption>
</figure>

<h2>Flow Path and "Blade Magic": Where Truth Ends and Marketing Begins</h2>

<p>Yes, blade profiles matter. But in 2025, the debate isn't about "do you have CFD," but about <strong>how calculation relates to manufacturing reality</strong>: roughness, tolerances, balancing, edges after repair, actual moisture, actual deposits.</p>

<div class="info-table">
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Design Value</th>
        <th>After 3 Years</th>
        <th>Efficiency Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Blade roughness, μm</td>
        <td>0.8-1.2</td>
        <td>3-6</td>
        <td>−0.5...−1.2%</td>
      </tr>
      <tr>
        <td>Radial clearances, mm</td>
        <td>0.3-0.5</td>
        <td>0.8-1.5</td>
        <td>−0.8...−2.0%</td>
      </tr>
      <tr>
        <td>Leading edge erosion</td>
        <td>-</td>
        <td>up to 15% chord</td>
        <td>−1.0...−3.0%</td>
      </tr>
      <tr>
        <td>Salt deposits</td>
        <td>-</td>
        <td>0.1-0.3 mm</td>
        <td>−0.5...−1.5%</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="expert-opinion">
  <h4>Expert Opinion</h4>
  <p>"The best flow path is one that maintains characteristics after 2-3 repair cycles, not one that looks good in a presentation. Last stage optimization often conflicts with service life due to erosion and vibration loading."</p>
  <cite>—</cite>
</div>

<figure class="article-figure">
  <img src="/img/articles/blade-erosion-stages.svg" alt="Blade erosion stages" />
  <figcaption>Fig. 5. Stages of erosive wear on last stage working blades</figcaption>
</figure>

<h2>Materials and Degradation: Creep, Corrosion, Erosion—Three Different Enemies</h2>

<ul>
  <li><strong>Creep</strong> (high temperatures/stresses) slowly "eats" geometry and fits, especially during frequent starts and thermal cycles.</li>
  <li><strong>Corrosion</strong> is often a consequence of chemistry: oxygen, salts, improper deaeration regime, water chemistry violations.</li>
  <li><strong>Erosion</strong> on wet stages is droplet kinetics, separation quality, moisture separator/reheater design, and yes, operating modes.</li>
</ul>

<div class="warning-block">
  <strong>Sharp angle:</strong> at some sites it's simpler and cheaper to <em>consciously limit expansion ratio</em> (and lose some efficiency) than to change last stages and blades more often than economically justified.
</div>

<figure class="article-figure">
  <img src="/img/articles/degradation-mechanisms.svg" alt="Degradation mechanisms" />
  <figcaption>Fig. 6. Main degradation mechanisms of steam turbine components and their manifestation zones</figcaption>
</figure>

<h2>Control and Automation: A Turbine Without "Brains" Is Uncompetitive Today</h2>

<p>A modern turbine is a system with feedback loops: speed/power, extraction pressure, metal temperature, vibrations, vacuum, startup limitations.</p>

<h3>What Actually Delivers Results:</h3>
<ul>
  <li><strong>Model-based constraints</strong> on thermal stresses provide less thermal fatigue during startups.</li>
  <li><strong>Proper warm-up/blowdown logic</strong> reduces the "human factor" impact.</li>
  <li><strong>Online vibration diagnostics and trending</strong> for early detection of bearing degradation, misalignment, rubbing.</li>
</ul>

<div class="warning-block">
  <strong>Controversial topic:</strong> "digital twins" are often sold as magic. In reality, <strong>value isn't in the 3D model</strong>, but in correct physical loss/mode modeling and data discipline. If sensors "lie," the twin becomes digital decoration.
</div>

<figure class="article-figure wide">
  <img src="/img/articles/control-system-architecture.svg" alt="Control system architecture" />
  <figcaption>Fig. 7. Typical modern steam turbine DCS architecture</figcaption>
</figure>

<h2>Efficiency, "Economic Effect," and Calculation Honesty</h2>

<p>I've seen too many feasibility studies where the effect looks beautiful until you ask three questions:</p>

<div class="numbered-list">
  <div class="numbered-item">
    <span class="number">1</span>
    <div>
      <strong>What's the comparison baseline?</strong>
      <p>They compare with an "outdated unit" that actually no longer operates in the modes assumed in the calculation.</p>
    </div>
  </div>
  <div class="numbered-item">
    <span class="number">2</span>
    <div>
      <strong>What operating modes per year?</strong>
      <p>Often they take one or two modes and extrapolate to 8000 hours. At the plant, actual runtime and load profile may be completely different.</p>
    </div>
  </div>
  <div class="numbered-item">
    <span class="number">3</span>
    <div>
      <strong>What's included for infrastructure?</strong>
      <p>Vacuum, cooling, water quality, condenser/cooling tower condition, steam piping, valves. These things are "invisible" in the turbine but can eat half the effect.</p>
    </div>
  </div>
</div>

<div class="expert-opinion critical">
  <h4>Expert's Hard Opinion</h4>
  <p>"If the effect is calculated without operational regime and without steam/water quality, it's marketing, not engineering."</p>
  <cite>—</cite>
</div>

<h2>Industry Pain Points: Why Steam Turbines "Argue" With Themselves</h2>

<h3>1. Steam Turbine vs Gas/CCGT</h3>

<p>In power generation, CCGT often wins on paper, but industry lives in a world of fuel, reliability, and heat consumers. Where there's process steam and heat recovery, steam turbines remain highly competitive.</p>

<p><strong>Controversial thesis:</strong> "Steam turbines aren't needed for decarbonization." In practice, industrial decarbonization often starts with <strong>improving efficiency and heat recovery</strong>—that's steam territory.</p>

<h3>2. "Higher Parameters Mean Better"</h3>

<p>Super/ultra-supercritical parameters aren't free efficiency—they're a leap in material, welding, inspection requirements, and most importantly, operational culture. At some sites, a more "modest" but reliable scheme with better repair logistics wins.</p>

<h3>3. Import Substitution and Localization</h3>

<p>The sharp question isn't "can we make a turbine," but <strong>can we consistently repeat quality</strong> (metal, blades, NDT, balancing, bearings, seals, valves, automation). A turbine is a chain, and the weak link is often not where you look for it.</p>

<figure class="article-figure">
  <img src="/img/articles/supply-chain-diagram.svg" alt="Supply chain" />
  <figcaption>Fig. 8. Critical supply chain links for steam turbine manufacturing</figcaption>
</figure>

<h2>What I Consider Signs of a "Mature" Turbine Implementation Project</h2>

<ul>
  <li><strong>Thermal scheme and operating modes</strong> are described as thoroughly as the turbine itself.</li>
  <li><strong>Degradation management plan:</strong> what parameters we monitor, what thresholds, how we decide on repairs.</li>
  <li><strong>Infrastructure</strong> (condenser, cooling, water chemistry, valves, piping) is included in budget and schedule.</li>
  <li><strong>Startup scenarios</strong> and personnel training are part of delivery, not "we'll figure it out later."</li>
</ul>

<h2>Where Steam Turbine Engineering Is Heading</h2>

<ul>
  <li><strong>More operational flexibility:</strong> turbines will be designed not for "nominal" but for range and frequent transitions.</li>
  <li><strong>Smarter control:</strong> model-based limiters and adaptive settings for degradation.</li>
  <li><strong>Materials and coatings:</strong> fighting for last stage and seal service life.</li>
  <li><strong>Integration with heat recovery:</strong> economics will increasingly be determined by system approach, not "turbine nameplate."</li>
</ul>

<h2>Engineer's Final Thought</h2>

<div class="conclusion-block">
  <p>A steam turbine is neither a "retro machine" nor a "sacred cow." It's a mature technology where the win lies in discipline: operating modes, water/steam, infrastructure, diagnostics, repair strategy. The most successful implementations I've seen happened not where there was "the most advanced flow path," but where the team honestly described site limitations and built a system, not just an individual unit.</p>
</div>

<div class="sources-block">
  <h3>Sources and Standards</h3>
  <ul>
    <li><a href="http://www.iapws.org/relguide/IF97-Rev.html" target="_blank" rel="noopener">IAPWS Industrial Formulation</a> — water and steam properties</li>
    <li><a href="https://www.asme.org/codes-standards/find-codes-standards/ptc-6-steam-turbines" target="_blank" rel="noopener">ASME PTC 6</a> — turbomachinery testing and performance evaluation</li>
    <li><a href="https://webstore.iec.ch/publication/293" target="_blank" rel="noopener">IEC 60045</a> — general requirements for steam turbines</li>
    <li><a href="https://www.elsevier.com/books/fluid-mechanics-and-thermodynamics-of-turbomachinery/dixon/978-0-12-415954-9" target="_blank" rel="noopener">Dixon S.L., Fluid Mechanics and Thermodynamics of Turbomachinery</a></li>
    <li><a href="https://archive.org/details/steamturbinetheo00kear" target="_blank" rel="noopener">Kearton W.J., Steam Turbine Theory and Practice</a></li>
    <li><a href="https://www.vgb.org/en/guidelines_powertech.html" target="_blank" rel="noopener">VGB Guidelines</a> — power plant equipment operation</li>
  </ul>
</div>`
    },
    image: '/img/articles/steam-turbine-hero.webp',
    date: '2025-12-17',
    author: '_______',
    readTime: 25,
    featured: true,
    tags: ['steam turbines', 'efficiency', 'expert', 'thermodynamics', 'materials science', 'automation']
  },
  {
    id: '6',
    slug: 'siemens-energy-oklo-aurora-parovaya-turbina-2025',
    category: 'industry',
    title: {
      ru: 'Oklo выбрала Siemens Energy для паровой турбины и генератора под Aurora',
      en: 'Oklo Selects Siemens Energy for Steam Turbine and Generator for Aurora'
    },
    excerpt: {
      ru: 'Зарубежные проекты малых АЭС ускоряют спрос на компактные турбогенераторные решения: Oklo привлекает Siemens Energy для первой Aurora на площадке Idaho National Laboratory.',
      en: 'International advanced nuclear projects drive demand for compact steam turbine-generator solutions.'
    },
    content: {
      ru: `<p>Компания Oklo сообщила, что выбрала Siemens Energy для поставки <strong>паровой турбины и генератора</strong> для своего первого реактора <strong>Aurora</strong> на площадке <strong>Idaho National Laboratory</strong>.</p>

<p>На фото к новости представители Oklo и Siemens Energy позируют рядом с турбиной серии <strong>Siemens SST-600</strong>.</p>

<h2>Почему это важно для отрасли</h2>
<ul>
  <li><strong>Сдвиг в сторону компактности:</strong> проекты малых/продвинутых АЭС всё чаще требуют более «упакованных» турбинных островов и предсобранных модулей.</li>
  <li><strong>Системность поставки:</strong> всё больше контрактов идут не на «турбину отдельно», а на связку «турбина + генератор» как единый продукт.</li>
  <li><strong>Фокус на промышленной реализуемости:</strong> выигрывают решения, которые можно серийно воспроизводить и быстро вводить в эксплуатацию, а не только считать на бумаге.</li>
</ul>`,
      en: `<p>Oklo announced that it has selected Siemens Energy to supply the <strong>steam turbine and generator</strong> for its first <strong>Aurora</strong> reactor at <strong>Idaho National Laboratory</strong>.</p>

<p>The photo shows Oklo and Siemens Energy representatives posing next to a <strong>Siemens SST-600</strong> series turbine.</p>

<h2>Why This Matters for the Industry</h2>
<ul>
  <li><strong>Shift toward compactness:</strong> small/advanced nuclear projects increasingly require more "packaged" turbine islands and pre-assembled modules.</li>
  <li><strong>System delivery approach:</strong> more contracts are going not for "turbine separately," but for the "turbine + generator" bundle as a single product.</li>
  <li><strong>Focus on industrial feasibility:</strong> solutions that can be serially reproduced and quickly commissioned win, not just those that calculate well on paper.</li>
</ul>`
    },
    image: '/img/articles/407a565e20ec60b372b5936f051b12bb.jpg',
    date: '2025-12-15',
    author: '_______',
    readTime: 3,
    featured: false,
    tags: ['steam turbine', 'Siemens Energy', 'Oklo', 'Aurora', 'nuclear energy']
  },
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

