/**
 * ============================================================================
 * МАТЕМАТИКА ЖӘНЕ МАМАНДЫҚ ӘЛЕМІ / МАТЕМАТИКА И МИР ПРОФЕССИЙ
 * Ядро интерактивной лаборатории (app.js):
 *  - Полная адаптивность без горизонтального скролла
 *  - Форматирование чисел по стандарту KK/RU (пробелы тысяч, запятая дроби)
 *  - Чистые 2D инженерные чертежи с гало-обводкой подписей (без наложений)
 *  - Вращаемая 3D-модель (GeoGebra 3D Canvas)
 *  - График зависимости с аккуратной выноской и динамическая таблица значений
 * ============================================================================
 */

const UI_TEXT = {
  kk: {
    codeStrip: "10–11 СЫНЫП · ҚОЛДАНБАЛЫ МАТЕМАТИКА ЖӘНЕ КӘСІБИ БАҒДАР АТЛАСЫ",
    siteTitle: "Математика және мамандық әлемі",
    siteLead: "Өндірістік жағдаятты зертте · Сызба мен 3D модельді айналдыр · Параметрді өзгертіп, инженерлік шешім қабылда",
    specTasksLbl: "БАРЛЫҚ ЕСЕП",
    specTasksVal: "27 кейс",
    specSubjLbl: "ПӘНДЕР",
    specSubjVal: "Алгебра · Геометрия",
    specLvlLbl: "ДЕҢГЕЙЛЕР",
    specLvlVal: "A · B · C",
    specGrdLbl: "СЫНЫПТАР",
    specGrdVal: "10 – 11",

    tabAll: "Барлық есептер",
    tabAlgebra: "Алгебра және анализ бастамалары",
    tabGeometry: "Геометрия",

    lvlFilterTitle: "ДЕҢГЕЙ:",
    lvlAll: "Барлығы",
    lvlA: "A (Базалық)",
    lvlB: "B (Орта)",
    lvlC: "C (Күрделі)",
    lvlADesc: "Тікелей формуламен есептеу, сызықтық модельдер, базалық фигуралар",
    lvlBDesc: "Квадраттық, тригонометриялық, көрсеткіштік модельдер, көпқадамды есептер",
    lvlCDesc: "Туынды арқылы оңтайландыру, интеграл, күрделі 3D нысандар мен смета",

    grdFilterTitle: "СЫНЫП:",
    grdAll: "Барлығы",
    grd10: "10-сынып",
    grd11: "11-сынып",
    gradeSuffix: "-сынып",

    searchPlaceholder: "Есеп атауы, мамандық немесе тақырып бойынша іздеу...",
    foundLabel: "Көрсетілген есептер:",
    resetBtn: "Сүзгіні тазалау",
    openCardLink: "Зертхананы ашу →",
    emptyHeading: "Сұраныс бойынша есептер табылмады",
    emptySub: "Іздеу сөзін өзгертіңіз немесе барлық сүзгілерді тазалаңыз.",

    backCatalog: "← Барлық есептер каталогына",
    prevTask: "← Алдыңғы есеп",
    nextTask: "Келесі есеп →",
    bannerSubjAlg: "АЛГЕБРА ЖӘНЕ АНАЛИЗ БАСТАМАЛАРЫ • Өндірістік есеп",
    bannerSubjGeo: "ГЕОМЕТРИЯ • Өндірістік есеп",
    jobLabel: "Мамандық:",

    photoOverlayCaption: "Өндірістік нысан иллюстрациясы",

    boxContext: "Өндірістік жағдаят",
    boxGiven: "Берілгені:",
    boxDigitalTasks: "Цифрлық тапсырма (GeoGebra / Desmos)",
    boxBlueprint: "Инженерлік сызба және математикалық модель",
    boxInteractive: "Интерактивті 3D модель (GeoGebra), тәуелділік графигі және мәндер кестесі",
    geogebra3dTitle: "3D модель (GeoGebra)",
    geogebra3dHint: "Тінтуірмен бұраңыз",
    tableTitle: "Параметрдің өзгеру кестесі (бағанды басып таңдаңыз):",

    presetTarget: "Есеп шарты",
    presetMin: "Минимум",
    presetMid: "Орта мән",
    presetMax: "Максимум",

    boxFormulas: "Қолданылатын формулалар",
    boxSolution: "Шешуі және қорытынды",
    btnShowSol: "Шешуі мен жауабын ашу",
    btnHideSol: "Шешуін жасыру",
    answerWord: "Жауабы:",

    careerTitle: "Кәсіби бағдар:",
    thinkTitle: "Ойлан:",

    matrixHeading: "Әдістемелік бөлініс кестесі (Пәндер мен A / B / C деңгейлері)",
    matrixBtn: "Кестені ашу / жабу",
    colCode: "Код",
    colSubj: "Пән",
    colLvl: "Деңгей",
    colGrd: "Сынып",
    colJob: "Мамандық",
    colTitle: "Есептің тақырыбы",
    colTopic: "Математикалық аппарат",

    footerNote: "«Математика және мамандық әлемі» — 10–11 сыныптарға арналған интерактивті білім беру жобасы. Барлық модельдер мен есептер оқу бағдарламасына сәйкес құрастырылған."
  },
  ru: {
    codeStrip: "10–11 КЛАССЫ · АТЛАС ПРИКЛАДНОЙ МАТЕМАТИКИ И ПРОФОРИЕНТАЦИИ",
    siteTitle: "Математика и мир профессий",
    siteLead: "Изучи производственный кейс · Вращай 3D-модель и чертёж · Изменяй параметры на графике и находи оптимальное решение",
    specTasksLbl: "ВСЕГО ЗАДАЧ",
    specTasksVal: "27 кейсов",
    specSubjLbl: "ПРЕДМЕТЫ",
    specSubjVal: "Алгебра · Геометрия",
    specLvlLbl: "УРОВНИ",
    specLvlVal: "A · B · C",
    specGrdLbl: "КЛАССЫ",
    specGrdVal: "10 – 11",

    tabAll: "Все задачи",
    tabAlgebra: "Алгебра и начала анализа",
    tabGeometry: "Геометрия",

    lvlFilterTitle: "УРОВЕНЬ:",
    lvlAll: "Все",
    lvlA: "A (Базовый)",
    lvlB: "B (Средний)",
    lvlC: "C (Продвинутый)",
    lvlADesc: "Прямые вычисления по готовой формуле, линейные модели, базовые фигуры",
    lvlBDesc: "Квадратичные, тригонометрические и показательные модели, многошаговые расчёты",
    lvlCDesc: "Оптимизация через производную, интеграл, сложные 3D-конструкции и смета",

    grdFilterTitle: "КЛАСС:",
    grdAll: "Все",
    grd10: "10 класс",
    grd11: "11 класс",
    gradeSuffix: " класс",

    searchPlaceholder: "Поиск по названию задачи, профессии или теме...",
    foundLabel: "Показано задач:",
    resetBtn: "Сбросить фильтры",
    openCardLink: "Открыть кейс →",
    emptyHeading: "По выбранным фильтрам задачи не найдены",
    emptySub: "Измените поисковый запрос или сбросьте фильтры.",

    backCatalog: "← Ко всем задачам каталога",
    prevTask: "← Предыдущая",
    nextTask: "Следующая →",
    bannerSubjAlg: "АЛГЕБРА И НАЧАЛА АНАЛИЗА • Производственная задача",
    bannerSubjGeo: "ГЕОМЕТРИЯ • Производственная задача",
    jobLabel: "Профессия:",

    photoOverlayCaption: "Иллюстрация производственного объекта",

    boxContext: "Производственная ситуация",
    boxGiven: "Исходные данные:",
    boxDigitalTasks: "Цифровое задание (GeoGebra / Desmos)",
    boxBlueprint: "Инженерный чертёж и схема модели",
    boxInteractive: "Интерактивная 3D-модель (GeoGebra), график зависимости и таблица значений",
    geogebra3dTitle: "3D модель (GeoGebra)",
    geogebra3dHint: "Вращайте мышью",
    tableTitle: "Таблица значений при изменении параметра (нажмите на столбец):",

    presetTarget: "Условие задачи",
    presetMin: "Минимум",
    presetMid: "Среднее",
    presetMax: "Максимум",

    boxFormulas: "Применяемые формулы",
    boxSolution: "Решение и вывод",
    btnShowSol: "Показать пошаговое решение и ответ",
    btnHideSol: "Скрыть решение",
    answerWord: "Ответ:",

    careerTitle: "Профессиональная ориентация:",
    thinkTitle: "Подумай:",

    matrixHeading: "Методическая таблица распределения задач (Предметы и уровни A / B / C)",
    matrixBtn: "Показать / скрыть таблицу",
    colCode: "Код",
    colSubj: "Предмет",
    colLvl: "Уровень",
    colGrd: "Класс",
    colJob: "Профессия",
    colTitle: "Название задачи",
    colTopic: "Математический аппарат",

    footerNote: "«Математика и мир профессий» — интерактивный образовательный ресурс для учеников 10–11 классов и учителей математики."
  }
};

const state = {
  lang: "kk",
  subject: "all",
  level: "all",
  grade: "all",
  search: "",
  currentTaskId: null,
  solutionOpen: false,
  sliderVal: 0,
  matrixOpen: false,
  rotYaw: 0.62,
  rotPitch: 0.42,
  isDragging3D: false,
  dragStartX: 0,
  dragStartY: 0
};

const $ = (id) => document.getElementById(id);

/**
 * Надёжное форматирование чисел по стандарту KK / RU:
 * - Разделитель тысяч — неразрывный пробел (например: "1 323 400")
 * - Дробный разделитель — запятая (например: "203,6", "8,49")
 * - Для крупных сумм (>= 10 000) дробные копейки автоматически округляются до целых
 */
function fmt(n, maxDecimals = 1) {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  const d = abs >= 10000 ? 0 : maxDecimals;
  const factor = Math.pow(10, d);
  const rounded = Math.round(n * factor) / factor;
  const parts = rounded.toFixed(d).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if (d > 0 && parts[1]) {
    const trimmedDec = parts[1].replace(/0+$/, "");
    return trimmedDec.length > 0 ? `${parts[0]},${trimmedDec}` : parts[0];
  }
  return parts[0];
}

/**
 * Компактное форматирование для осей и выносок графика
 */
function fmtCompact(n) {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs >= 1000000) {
    return `${fmt(n / 1000000, 2)} млн`;
  }
  if (abs >= 10000) {
    return fmt(n, 0);
  }
  return fmt(n, 1);
}

function getPhotoUrl(key) {
  return (window.EMBEDDED_IMAGES && window.EMBEDDED_IMAGES[key]) ? window.EMBEDDED_IMAGES[key] : key;
}

function getLevelTagText(lvl) {
  const t = UI_TEXT[state.lang];
  if (lvl === "A") return t.lvlA;
  if (lvl === "B") return t.lvlB;
  return t.lvlC;
}

// ============================================================================
// НАСТОЯЩАЯ ТИПОГРАФСКАЯ ВЁРСТКА МАТЕМАТИЧЕСКИХ ФОРМУЛ (ДРОБИ, КОРНИ, ИНДЕКСЫ)
// ============================================================================

const RICH_FORMULAS = {
  "alg-01": [
    { kk: "Пайда функциясы:", ru: "Функция прибыли:", html: `<i>P</i>(<i>x</i>) = −2<i>x</i><sup>2</sup> + 40<i>x</i> − 96` },
    { kk: "Пайда туындысы:", ru: "Производная функции:", html: `<i>P</i>′(<i>x</i>) = −4<i>x</i> + 40 = 0` }
  ],
  "alg-02": [
    { kk: "1-компания тарифі:", ru: "Тариф 1-й компании:", html: `<i>C</i><sub>1</sub>(<i>x</i>) = 5 000 + 200<i>x</i>` },
    { kk: "2-компания тарифі:", ru: "Тариф 2-й компании:", html: `<i>C</i><sub>2</sub>(<i>x</i>) = 3 000 + 250<i>x</i>` }
  ],
  "alg-03": [
    { kk: "Есептегіш көрсеткіші:", ru: "Показание счётчика:", html: `<i>E</i>(<i>t</i>) = 15<i>t</i> + 20` },
    { kk: "Таза энергия шығыны:", ru: "Фактический расход:", html: `Δ<i>E</i> = <i>E</i>(8) − <i>E</i>(0)` }
  ],
  "alg-04": [
    { kk: "Өнімділік моделі:", ru: "Модель урожайности:", html: `<i>y</i>(<i>x</i>) = −0,5<i>x</i><sup>2</sup> + 6<i>x</i> + 20` },
    { kk: "Экстремум шарты:", ru: "Условие экстремума:", html: `<i>y</i>′(<i>x</i>) = −<i>x</i> + 6 = 0` }
  ],
  "alg-05": [
    { kk: "Түсім мен шығын:", ru: "Выручка и затраты:", html: `<i>R</i>(<i>x</i>) = 1 200<i>x</i>; &nbsp; <i>C</i>(<i>x</i>) = 60 000 + 700<i>x</i>` },
    { kk: "Таза пайда функциясы:", ru: "Функция прибыли:", html: `<i>P</i>(<i>x</i>) = <i>R</i>(<i>x</i>) − <i>C</i>(<i>x</i>) = 500<i>x</i> − 60 000` }
  ],
  "alg-06": [
    { kk: "Көрсеткіштік кему заңы:", ru: "Показательный закон:", html: `<i>L</i>(<i>t</i>) = 100 · 0,8<sup><i>t</i></sup>` },
    { kk: "3 күннен кейінгі индекс:", ru: "Индекс через 3 дня:", html: `<i>L</i>(3) = 100 · 0,8<sup>3</sup> = 51,2` }
  ],
  "alg-07": [
    { kk: "Тік проекция (биіктік):", ru: "Вертикальная проекция:", html: `<i>h</i>(α) = <i>l</i> · sin α = 2 sin α` },
    { kk: "30° бұрыш кезінде:", ru: "При угле α = 30°:", html: `<i>h</i>(30°) = 2 · sin 30° = 2 · 0,5 = 1 м` }
  ],
  "alg-08": [
    { kk: "Партия шығыны функциясы:", ru: "Функция затрат на партию:", html: `<i>C</i>(<i>x</i>) = 0,02<i>x</i><sup>2</sup> − 4<i>x</i> + 500` },
    { kk: "Минимум шарты:", ru: "Условие минимума:", html: `<i>C</i>′(<i>x</i>) = 0,04<i>x</i> − 4 = 0` }
  ],
  "alg-09": [
    { kk: "Лездік ағын жылдамдығы:", ru: "Мгновенный расход:", html: `<i>q</i>(<i>t</i>) = 3<i>t</i><sup>2</sup> + 2<i>t</i>` },
    { kk: "Анықталған интеграл (көлем):", ru: "Определённый интеграл:", html: `<i>V</i> = ∫<sub>0</sub><sup>2</sup> (3<i>t</i><sup>2</sup> + 2<i>t</i>) <i>dt</i> = [<i>t</i><sup>3</sup> + <i>t</i><sup>2</sup>]<sub>0</sub><sup>2</sup>` }
  ],
  "alg-10": [
    { kk: "Тік қозғалыс заңы:", ru: "Закон движения дрона:", html: `<i>h</i>(<i>t</i>) = −5<i>t</i><sup>2</sup> + 20<i>t</i> + 2` },
    { kk: "Тік жылдамдық (туынды):", ru: "Вертикальная скорость:", html: `<i>h</i>′(<i>t</i>) = −10<i>t</i> + 20 = 0` }
  ],
  "geo-01": [
    { kk: "Пирамиданың бүйір бетінің ауданы:", ru: "Площадь боковой поверхности пирамиды:", html: `<i>S</i><sub>бүйір</sub> = <span class="m-frac"><span class="m-num">1</span><span class="m-den">2</span></span> <i>P</i><sub>таб</sub> · <i>l</i>` },
    { kk: "Жасаушы (апофема):", ru: "Апофема пирамиды:", html: `<i>l</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body"><i>h</i><sup>2</sup> + (<span class="m-frac"><span class="m-num"><i>a</i></span><span class="m-den">2</span></span>)<sup>2</sup></span></span>` },
    { kk: "Қаптау құны:", ru: "Стоимость покрытия:", html: `<i>C</i> = 6 500 · <i>S</i><sub>бүйір</sub>` }
  ],
  "geo-02": [
    { kk: "Бұрыштың тангенсі:", ru: "Тангенс острого угла:", html: `tan α = <span class="m-frac"><span class="m-num"><i>d</i></span><span class="m-den">40</span></span>` },
    { kk: "Өзен енінің формуласы:", ru: "Формула ширины реки:", html: `<i>d</i> = 40 · tan 35°` }
  ],
  "geo-03": [
    { kk: "Конус жасаушысы:", ru: "Образующая конуса:", html: `<i>l</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body"><i>r</i><sup>2</sup> + <i>h</i><sup>2</sup></span></span>` },
    { kk: "Конус бүйір беті:", ru: "Боковая поверхность конуса:", html: `<i>S</i> = π · <i>r</i> · <i>l</i>` },
    { kk: "Қаптау құны:", ru: "Стоимость покрытия:", html: `<i>C</i> = 7 500 · <i>S</i>` }
  ],
  "geo-04": [
    { kk: "Жарты шардың қисық беті:", ru: "Поверхность полусферы:", html: `<i>S</i> = 2π<i>R</i><sup>2</sup>` },
    { kk: "Қаптау құны:", ru: "Стоимость облицовки:", html: `<i>C</i> = 9 000 · <i>S</i>` }
  ],
  "geo-05": [
    { kk: "Бүйір қабырғасы:", ru: "Боковая балка фермы:", html: `<i>s</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body">(<span class="m-frac"><span class="m-num"><i>a</i></span><span class="m-den">2</span></span>)<sup>2</sup> + <i>h</i><sup>2</sup></span></span>` },
    { kk: "Ферма периметрі және құны:", ru: "Периметр и стоимость:", html: `<i>P</i> = <i>a</i> + 2<i>s</i>; &nbsp; <i>C</i> = 12 000 · <i>P</i>` }
  ],
  "geo-06": [
    { kk: "Тригонометриялық қатынастар:", ru: "Тригонометрические отношения:", html: `sin α = <span class="m-frac"><span class="m-num"><i>h</i></span><span class="m-den"><i>l</i></span></span>; &nbsp; tan α = <span class="m-frac"><span class="m-num"><i>h</i></span><span class="m-den"><i>x</i></span></span>` },
    { kk: "Бет ауданы және құны:", ru: "Площадь настила и стоимость:", html: `<i>S</i> = <i>l</i> · <i>b</i>; &nbsp; <i>C</i> = 4 800 · <i>S</i>` }
  ],
  "geo-07": [
    { kk: "Дұрыс алтыбұрыш ауданы:", ru: "Площадь правильного шестиугольника:", html: `<i>S</i> = <span class="m-frac"><span class="m-num">3<span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body">3</span></span></span><span class="m-den">2</span></span> · <i>a</i><sup>2</sup>` },
    { kk: "Абаттандыру құны:", ru: "Стоимость благоустройства:", html: `<i>C</i> = 5 500 · <i>S</i>` }
  ],
  "geo-08": [
    { kk: "Сфераның бет ауданы:", ru: "Площадь поверхности сферы:", html: `<i>S</i> = 4π<i>R</i><sup>2</sup>` },
    { kk: "Бояу құны және шар көлемі:", ru: "Стоимость покраски и объём:", html: `<i>C</i> = 4 200 · <i>S</i>; &nbsp; <i>V</i> = <span class="m-frac"><span class="m-num">4</span><span class="m-den">3</span></span>π<i>R</i><sup>3</sup>` }
  ],
  "geo-09": [
    { kk: "Трапеция ауданы:", ru: "Площадь трапеции:", html: `<i>S</i> = <span class="m-frac"><span class="m-num"><i>a</i> + <i>b</i></span><span class="m-den">2</span></span> · <i>h</i>` },
    { kk: "Суару жүйесінің құны:", ru: "Стоимость орошения:", html: `<i>C</i> = 6 800 · <i>S</i>` }
  ],
  "geo-10": [
    { kk: "Дөңгелек алаң ауданы:", ru: "Площадь круглой площадки:", html: `<i>S</i> = π<i>R</i><sup>2</sup>` },
    { kk: "Бетон жабын құны:", ru: "Стоимость бетонирования:", html: `<i>C</i> = 1 800 · <i>S</i>` }
  ],
  "geo-11": [
    { kk: "Тіреуіш биіктігі:", ru: "Высота стойки панели:", html: `<i>h</i> = <i>L</i> · sin α = 4 sin α` },
    { kk: "Горизонталь проекциясы:", ru: "Горизонтальная проекция:", html: `<i>b</i> = <i>L</i> · cos α = 4 cos α` }
  ],
  "geo-12": [
    { kk: "Бір көлбеу арқалық:", ru: "Длина наклонной балки:", html: `<i>l</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body">8<sup>2</sup> + <i>h</i><sup>2</sup></span></span>` },
    { kk: "12 ферманың жалпы ұзындығы:", ru: "Суммарная длина для 12 ферм:", html: `<i>L</i> = 12 · 2<i>l</i> = 24<i>l</i>` }
  ],
  "geo-13": [
    { kk: "Параллелепипед көлемі:", ru: "Объём коробки:", html: `<i>V</i> = <i>a</i> · <i>b</i> · <i>h</i>` },
    { kk: "Толық бетінің ауданы:", ru: "Площадь полной поверхности:", html: `<i>S</i> = 2(<i>ab</i> + <i>ah</i> + <i>bh</i>)` }
  ],
  "geo-14": [
    { kk: "Тіктөртбұрыш ауданы:", ru: "Площадь прямоугольного поля:", html: `<i>S</i> = <i>a</i> · <i>b</i>` },
    { kk: "Диагональ ұзындығы:", ru: "Длина диагонали участка:", html: `<i>d</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body"><i>a</i><sup>2</sup> + <i>b</i><sup>2</sup></span></span>` }
  ],
  "geo-15": [
    { kk: "Конус көлемі:", ru: "Объём конусной насыпи:", html: `<i>V</i> = <span class="m-frac"><span class="m-num">1</span><span class="m-den">3</span></span> π<i>r</i><sup>2</sup><i>h</i>` },
    { kk: "Қиыршықтас массасы:", ru: "Масса щебня:", html: `<i>m</i> = ρ · <i>V</i> = 1,6 · <i>V</i>` }
  ],
  "geo-16": [
    { kk: "Центрден хордаға дейін:", ru: "Расстояние от центра до хорды:", html: `<i>d</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body"><i>R</i><sup>2</sup> − (<span class="m-frac"><span class="m-num"><i>c</i></span><span class="m-den">2</span></span>)<sup>2</sup></span></span>` },
    { kk: "Арканың көтерілу биіктігі:", ru: "Стрела подъёма арки:", html: `<i>h</i> = <i>R</i> − <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body"><i>R</i><sup>2</sup> − (<span class="m-frac"><span class="m-num"><i>c</i></span><span class="m-den">2</span></span>)<sup>2</sup></span></span>` }
  ],
  "geo-17": [
    { kk: "Пирамида апофемасы:", ru: "Апофема стеклянной крыши:", html: `<i>l</i> = <span class="m-sqrt"><span class="m-sqrt-sym">√</span><span class="m-sqrt-body"><i>h</i><sup>2</sup> + (<span class="m-frac"><span class="m-num"><i>a</i></span><span class="m-den">2</span></span>)<sup>2</sup></span></span>` },
    { kk: "Бүйір беті және шыны құны:", ru: "Площадь остекления и стоимость:", html: `<i>S</i> = 2<i>a</i><i>l</i>; &nbsp; <i>C</i> = 9 000 · <i>S</i>` }
  ]
};

// ============================================================================
// ИНИЦИАЛИЗАЦИЯ И СОБЫТИЯ
// ============================================================================

function initApp() {
  try {
    const saved = localStorage.getItem("math_prof_lang");
    if (saved === "ru" || saved === "kk") state.lang = saved;
  } catch (e) {}

  document.documentElement.lang = state.lang;

  const sInput = $("searchField");
  if (sInput) {
    sInput.addEventListener("input", (e) => {
      state.search = e.target.value.trim();
      $("searchClearBtn").classList.toggle("hide", !state.search);
      renderCatalogGrid();
    });
  }

  // Вращение 3D модели GeoGebra мышью и касанием
  const c3d = $("geogebra3dCanvas");
  if (c3d) {
    c3d.addEventListener("pointerdown", (e) => {
      state.isDragging3D = true;
      state.dragStartX = e.clientX;
      state.dragStartY = e.clientY;
      c3d.setPointerCapture(e.pointerId);
    });
    c3d.addEventListener("pointermove", (e) => {
      if (!state.isDragging3D) return;
      const dx = e.clientX - state.dragStartX;
      const dy = e.clientY - state.dragStartY;
      state.dragStartX = e.clientX;
      state.dragStartY = e.clientY;
      state.rotYaw += dx * 0.014;
      state.rotPitch = Math.max(0.12, Math.min(1.15, state.rotPitch + dy * 0.012));
      const task = window.TASKS_DATA.find(x => x.id === state.currentTaskId);
      if (task) drawGeoGebra3D(task, state.sliderVal);
    });
    c3d.addEventListener("pointerup", () => {
      state.isDragging3D = false;
    });
  }

  window.addEventListener("resize", () => {
    if (state.currentTaskId) updateAllTaskVisuals();
  });

  renderApp();
}

window.setLanguage = function(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem("math_prof_lang", lang); } catch (e) {}
  renderApp();
};

window.setSubjectFilter = function(subj) {
  state.subject = subj;
  renderApp();
};

window.setLevelFilter = function(lvl) {
  state.level = lvl;
  renderApp();
};

window.setGradeFilter = function(grd) {
  state.grade = grd;
  renderApp();
};

window.clearSearch = function() {
  state.search = "";
  $("searchField").value = "";
  $("searchClearBtn").classList.add("hide");
  renderCatalogGrid();
};

window.resetFilters = function() {
  state.subject = "all";
  state.level = "all";
  state.grade = "all";
  state.search = "";
  if ($("searchField")) $("searchField").value = "";
  if ($("searchClearBtn")) $("searchClearBtn").classList.add("hide");
  renderApp();
};

window.toggleMatrixDrawer = function() {
  state.matrixOpen = !state.matrixOpen;
  $("matrixTableWrap").classList.toggle("hide", !state.matrixOpen);
};

function getFilteredList() {
  const q = state.search.toLowerCase();
  return window.TASKS_DATA.filter((task) => {
    if (state.subject !== "all" && task.subject !== state.subject) return false;
    if (state.level !== "all" && task.level !== state.level) return false;
    if (state.grade !== "all" && Number(task.grade) !== Number(state.grade)) return false;
    if (q) {
      const loc = task[state.lang];
      const text = [task.code, loc.title, loc.job, loc.topic, loc.tag, loc.problem].join(" ").toLowerCase();
      if (!text.includes(q)) return false;
    }
    return true;
  });
}

// ============================================================================
// ОТРИСОВКА ВСЕГО ПРИЛОЖЕНИЯ
// ============================================================================

function renderApp() {
  const t = UI_TEXT[state.lang];

  $("langKkBtn").classList.toggle("active", state.lang === "kk");
  $("langRuBtn").classList.toggle("active", state.lang === "ru");

  $("codeStripText").textContent = t.codeStrip;
  $("siteTitleText").textContent = t.siteTitle;
  $("siteLeadText").textContent = t.siteLead;

  $("specTasksLbl").textContent = t.specTasksLbl;
  $("specTasksVal").textContent = t.specTasksVal;
  $("specSubjLbl").textContent = t.specSubjLbl;
  $("specSubjVal").textContent = t.specSubjVal;
  $("specLvlLbl").textContent = t.specLvlLbl;
  $("specLvlVal").textContent = t.specLvlVal;
  $("specGrdLbl").textContent = t.specGrdLbl;
  $("specGrdVal").textContent = t.specGrdVal;

  $("tabAllText").textContent = t.tabAll;
  $("tabAlgText").textContent = t.tabAlgebra;
  $("tabGeoText").textContent = t.tabGeometry;
  $("tabAllCount").textContent = window.TASKS_DATA.length;
  $("tabAlgCount").textContent = window.TASKS_DATA.filter(x => x.subject === "algebra").length;
  $("tabGeoCount").textContent = window.TASKS_DATA.filter(x => x.subject === "geometry").length;

  $("tabAllBtn").classList.toggle("active", state.subject === "all");
  $("tabAlgBtn").classList.toggle("active", state.subject === "algebra");
  $("tabGeoBtn").classList.toggle("active", state.subject === "geometry");

  $("lvlFilterTitle").textContent = t.lvlFilterTitle;
  $("lvlAllBtnText").textContent = t.lvlAll;
  $("lvlABtnText").textContent = t.lvlA;
  $("lvlBBtnText").textContent = t.lvlB;
  $("lvlCBtnText").textContent = t.lvlC;

  $("lvlAllBtn").classList.toggle("active", state.level === "all");
  $("lvlABtn").classList.toggle("active", state.level === "A");
  $("lvlBBtn").classList.toggle("active", state.level === "B");
  $("lvlCBtn").classList.toggle("active", state.level === "C");

  $("grdFilterTitle").textContent = t.grdFilterTitle;
  $("grdAllBtnText").textContent = t.grdAll;
  $("grd10BtnText").textContent = t.grd10;
  $("grd11BtnText").textContent = t.grd11;

  $("grdAllBtn").classList.toggle("active", state.grade === "all");
  $("grd10Btn").classList.toggle("active", state.grade === 10);
  $("grd11Btn").classList.toggle("active", state.grade === 11);

  $("searchField").placeholder = t.searchPlaceholder;
  $("resetFiltersBtn").textContent = t.resetBtn;

  $("stripADesc").innerHTML = `<strong>A:</strong> ${t.lvlADesc}`;
  $("stripBDesc").innerHTML = `<strong>B:</strong> ${t.lvlBDesc}`;
  $("stripCDesc").innerHTML = `<strong>C:</strong> ${t.lvlCDesc}`;

  $("matrixHeadingText").textContent = t.matrixHeading;
  $("matrixToggleBtn").textContent = t.matrixBtn;
  $("footerNoteText").textContent = t.footerNote;

  renderMatrixTable();

  const inDetail = Boolean(state.currentTaskId);
  $("catalogSection").classList.toggle("hide", inDetail);
  $("posterSection").classList.toggle("hide", !inDetail);

  if (inDetail) {
    renderPosterDetail();
  } else {
    renderCatalogGrid();
  }
}

// ============================================================================
// ОТРИСОВКА КАТАЛОГА (КАРТОЧКИ С ФОТО И МИНИ-ЧЕРТЕЖОМ)
// ============================================================================

function renderCatalogGrid() {
  const t = UI_TEXT[state.lang];
  const list = getFilteredList();

  $("foundCounter").innerHTML = `${t.foundLabel} <strong>${list.length}</strong> / ${window.TASKS_DATA.length}`;
  const isFiltered = state.subject !== "all" || state.level !== "all" || state.grade !== "all" || state.search !== "";
  $("resetFiltersBtn").classList.toggle("hide", !isFiltered);

  const grid = $("catalogGrid");
  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; background:#fff; border:1.5px dashed var(--border-line); border-radius:8px; padding:42px 20px; text-align:center;">
        <h3 style="margin:0 0 8px;">${t.emptyHeading}</h3>
        <p style="margin:0 0 16px; color:var(--ink-500);">${t.emptySub}</p>
        <button class="nav-action-btn" onclick="resetFilters()">${t.resetBtn}</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map((task) => {
    const loc = task[state.lang];
    const subjName = task.subject === "algebra" ? t.tabAlgebra : t.tabGeometry;
    const targetX = task.research.targetValue;
    const targetY1 = window.evaluateTaskModel(task, targetX, false);
    const targetY2 = task.research.secondFnType ? window.evaluateTaskModel(task, targetX, true) : null;
    const miniSvg = buildDynamicSvgDiagram(task, targetX, targetY1, targetY2);
    const richFormulas = RICH_FORMULAS[task.id] || [];
    const firstFormulaHtml = richFormulas.length ? richFormulas[0].html : task.formula[0];

    return `
      <article class="workbook-card" tabindex="0" role="button"
        onclick="openTask('${task.id}')"
        onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openTask('${task.id}')}">
        <div class="wb-card-topbar">
          <div class="wb-card-subject">
            <span>${task.code}</span>
            <span>•</span>
            <span>${subjName}</span>
          </div>
          <div class="wb-card-grade">${task.grade}${t.gradeSuffix}</div>
        </div>

        <div class="wb-card-visuals">
          <div class="wb-photo-wrap">
            <img class="wb-photo" loading="lazy" src="${getPhotoUrl(task.image)}" alt="${loc.job}"/>
            <div class="wb-job-ribbon">${loc.job}</div>
          </div>
          <div class="wb-schematic-preview" title="${loc.topic}">
            ${miniSvg}
          </div>
        </div>

        <div class="wb-card-body">
          <div class="wb-card-meta">
            <span class="wb-topic-text">${loc.topic}</span>
            <span class="tech-tag tag-level-${task.level}">${getLevelTagText(task.level)}</span>
          </div>
          <h3 class="wb-card-title">${loc.title}</h3>
          <p class="wb-card-desc">${loc.problem}</p>
          <div class="wb-card-bottom">
            <div class="wb-formula-pill">${firstFormulaHtml}</div>
            <span class="wb-open-link">${t.openCardLink}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMatrixTable() {
  const t = UI_TEXT[state.lang];
  $("thCode").textContent = t.colCode;
  $("thSubj").textContent = t.colSubj;
  $("thLvl").textContent = t.colLvl;
  $("thGrd").textContent = t.colGrd;
  $("thJob").textContent = t.colJob;
  $("thTitle").textContent = t.colTitle;
  $("thTopic").textContent = t.colTopic;

  $("matrixTbody").innerHTML = window.TASKS_DATA.map((task) => {
    const loc = task[state.lang];
    return `
      <tr style="cursor:pointer;" onclick="openTask('${task.id}')">
        <td><span class="tech-tag tag-code">${task.code}</span></td>
        <td><span class="tech-tag ${task.subject === 'algebra' ? 'tag-subject-algebra' : 'tag-subject-geometry'}">${task.subject === 'algebra' ? t.tabAlgebra : t.tabGeometry}</span></td>
        <td><span class="tech-tag tag-level-${task.level}">${getLevelTagText(task.level)}</span></td>
        <td><strong>${task.grade}${t.gradeSuffix}</strong></td>
        <td><strong>${loc.job}</strong></td>
        <td style="color:var(--forest-800); font-weight:700;">${loc.title}</td>
        <td style="color:var(--ink-500);">${loc.topic}</td>
      </tr>
    `;
  }).join("");
}

// ============================================================================
// ОТКРЫТИЕ И НАВИГАЦИЯ ПО СТРАНИЦЕ ЗАДАЧИ-ПЛАКАТА
// ============================================================================

window.openTask = function(id) {
  const task = window.TASKS_DATA.find(x => x.id === id);
  if (!task) return;
  state.currentTaskId = task.id;
  state.solutionOpen = false;
  state.sliderVal = task.research.defaultValue;
  state.rotYaw = 0.62;
  state.rotPitch = 0.42;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.closeTask = function() {
  state.currentTaskId = null;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.stepTask = function(dir) {
  const list = getFilteredList();
  const pool = list.length ? list : window.TASKS_DATA;
  const idx = pool.findIndex(x => x.id === state.currentTaskId);
  if (idx === -1) return;
  const next = pool[(idx + dir + pool.length) % pool.length];
  window.openTask(next.id);
};

window.toggleSolutionBox = function() {
  state.solutionOpen = !state.solutionOpen;
  const t = UI_TEXT[state.lang];
  $("solutionContentBox").classList.toggle("hide", !state.solutionOpen);
  $("solutionRevealBtn").classList.toggle("open", state.solutionOpen);
  $("solutionRevealBtnText").textContent = state.solutionOpen ? t.btnHideSol : t.btnShowSol;
};

window.onParamSlide = function(val) {
  state.sliderVal = Number(val);
  updateAllTaskVisuals();
};

window.setParamPreset = function(val) {
  state.sliderVal = Number(val);
  $("paramRangeInput").value = state.sliderVal;
  updateAllTaskVisuals();
};

function renderPosterDetail() {
  const task = window.TASKS_DATA.find(x => x.id === state.currentTaskId);
  if (!task) return;
  const t = UI_TEXT[state.lang];
  const loc = task[state.lang];

  $("backCatalogBtn").textContent = t.backCatalog;
  $("prevTaskBtn").textContent = t.prevTask;
  $("nextTaskBtn").textContent = t.nextTask;

  $("posterSubjectTitle").textContent = `${task.subject === "algebra" ? t.bannerSubjAlg : t.bannerSubjGeo} • ${task.code}`;
  $("posterGradeFlag").textContent = `${task.grade}${t.gradeSuffix}`;

  $("posterJobBadge").textContent = `${t.jobLabel} ${loc.job}`;
  $("posterTaskHeading").textContent = loc.title;
  $("posterMetaBadges").innerHTML = `
    <span class="tech-tag tag-level-${task.level}">${getLevelTagText(task.level)}</span>
    <span class="tech-tag ${task.subject === 'algebra' ? 'tag-subject-algebra' : 'tag-subject-geometry'}">${loc.topic}</span>
  `;

  // Колонка 1: Иллюстрация + Условие
  $("taskMainPhoto").src = getPhotoUrl(task.image);
  $("taskMainPhoto").alt = loc.job;
  $("photoOverlayCaption").textContent = loc.tag;

  $("boxContextTitle").textContent = t.boxContext;
  $("taskProblemParagraph").textContent = loc.problem;
  $("boxGivenLabel").textContent = t.boxGiven;
  $("taskGivenUl").innerHTML = loc.given.map(g => `<li>${g}</li>`).join("");

  // Колонка 2: 2D Чертёж + Цифровое задание
  $("boxBlueprintTitle").textContent = t.boxBlueprint;
  $("boxDigitalTasksTitle").textContent = t.boxDigitalTasks;
  $("digitalChecklistUl").innerHTML = loc.tasks.map(item => `
    <li>
      <span class="check-circle">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5L5 9L9.5 3.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span>${item}</span>
    </li>
  `).join("");

  // Колонка 3: Формулы + Пошаговое решение
  $("boxFormulasTitle").textContent = t.boxFormulas;
  const richList = RICH_FORMULAS[task.id] || [];
  $("mathFormulasList").innerHTML = richList.map(item => `
    <div class="math-item">
      <div class="math-item-label">${item[state.lang]}</div>
      <div class="math-expr">${item.html}</div>
    </div>
  `).join("");

  $("boxSolutionTitle").textContent = t.boxSolution;
  $("solutionRevealBtn").classList.toggle("open", state.solutionOpen);
  $("solutionRevealBtnText").textContent = state.solutionOpen ? t.btnHideSol : t.btnShowSol;
  $("solutionContentBox").classList.toggle("hide", !state.solutionOpen);

  $("solStepsList").innerHTML = loc.steps.map((st, i) => `
    <li class="sol-step">
      <span class="sol-step-num">${i + 1}</span>
      <span>${st}</span>
    </li>
  `).join("");
  $("solAnswerHighlight").innerHTML = `${t.answerWord} ${loc.answer}`;

  // Ряд 2 (на всю ширину): 3D модель GeoGebra + График зависимости + Ползунок + Таблица
  $("boxInteractiveTitle").textContent = t.boxInteractive;
  $("geogebra3dTitle").textContent = t.geogebra3dTitle;
  $("geogebra3dHint").textContent = t.geogebra3dHint;

  const rInput = $("paramRangeInput");
  rInput.min = task.research.min;
  rInput.max = task.research.max;
  rInput.step = task.research.step;
  rInput.value = state.sliderVal;
  $("paramTitleText").textContent = loc.paramLabel;

  const minV = task.research.min;
  const maxV = task.research.max;
  const targetV = task.research.targetValue;
  const midV = Number(((minV + maxV) / 2).toFixed(1));
  $("presetPillsBox").innerHTML = `
    <button class="preset-btn" onclick="setParamPreset(${targetV})">${t.presetTarget} (${fmt(targetV, 1)} ${loc.unit})</button>
    <button class="preset-btn" onclick="setParamPreset(${minV})">${t.presetMin} (${fmt(minV, 1)})</button>
    <button class="preset-btn" onclick="setParamPreset(${midV})">${t.presetMid} (${fmt(midV, 1)})</button>
    <button class="preset-btn" onclick="setParamPreset(${maxV})">${t.presetMax} (${fmt(maxV, 1)})</button>
  `;

  $("tableTitleText").textContent = t.tableTitle;

  // Нижние блоки: Кәсіби бағдар и Ойлан!
  $("careerTitleText").textContent = t.careerTitle;
  $("careerDescText").textContent = loc.career;

  $("thinkTitleText").textContent = t.thinkTitle;
  $("thinkListOl").innerHTML = loc.think.map((q, i) => `
    <li>
      <span class="think-badge-num">${i + 1}</span>
      <span>${q}</span>
    </li>
  `).join("");

  setTimeout(updateAllTaskVisuals, 0);
}

// ============================================================================
// ОБНОВЛЕНИЕ ВСЕХ ВИЗУАЛЬНЫХ ЗОН ЗАДАЧИ В РЕАЛЬНОМ ВРЕМЕНИ
// ============================================================================

function updateAllTaskVisuals() {
  const task = window.TASKS_DATA.find(x => x.id === state.currentTaskId);
  if (!task) return;
  const loc = task[state.lang];
  const x = Number(state.sliderVal);
  const y1 = window.evaluateTaskModel(task, x, false);
  const y2 = task.research.secondFnType ? window.evaluateTaskModel(task, x, true) : null;

  // 1. Индикатор над ползунком и статус под фото
  let readoutStr = `${fmt(x, 2)} ${loc.unit} → ${loc.yLabel}: ${fmt(y1, 2)} ${loc.yUnit}`;
  if (y2 !== null) {
    readoutStr += ` | II: ${fmt(y2, 2)} ${loc.yUnit}`;
  }
  if (task.research.isIntegral) {
    readoutStr += ` | V = ${fmt(x * x * x + x * x, 2)} л`;
  }
  $("paramLiveReadout").textContent = readoutStr;
  $("photoLiveBadge").textContent = `${fmt(x, 1)} ${loc.unit} → ${fmt(y1, 1)} ${loc.yUnit}`;

  // 2. Детальный 2D инженерный чертёж / симулятор
  $("blueprintStageBox").innerHTML = buildDynamicSvgDiagram(task, x, y1, y2);

  // 3. Интерактивная 3D модель GeoGebra
  drawGeoGebra3D(task, x);

  // 4. График зависимости с выноской
  drawDependencyChart(task, x, y1, y2);

  // 5. Динамическая таблица значений x -> y(x)
  renderParameterTable(task, x);
}

// ============================================================================
// 2D ИНЖЕНЕРНЫЕ ЧЕРТЕЖИ И СИМУЛЯТОРЫ ПРОЦЕССОВ (БЕЗ НАЛОЖЕНИЯ ТЕКСТА НА ЛИНИИ)
// ============================================================================

function buildDynamicSvgDiagram(task, x, y1, y2) {
  switch (task.diagram) {
    // --- АЛГЕБРА 1: Мұнай инженері ---
    case "alg_oil": {
      const fillH = Math.min(85, Math.max(6, (x / 20) * 85));
      const profitBarH = Math.min(75, Math.max(4, ((y1 + 96) / 200) * 75));
      const isProfit = y1 >= 0;
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="165" x2="340" y2="165" stroke="#173f33" stroke-width="2"/>
          <polygon points="45,165 85,165 65,85" fill="none" stroke="#083d30" stroke-width="2.5"/>
          <line x1="35" y1="95" x2="105" y2="75" stroke="#0b5342" stroke-width="4" stroke-linecap="round"/>
          <path d="M 102,72 Q 114,82 106,96 L 98,92 Z" fill="#eeb02b" stroke="#083d30" stroke-width="1.5"/>
          <line x1="105" y1="95" x2="105" y2="165" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 2"/>
          <path d="M 105,152 L 145,152" stroke="#083d30" stroke-width="3"/>
          <rect x="145" y="75" width="70" height="90" rx="6" fill="#e6f2ed" stroke="#083d30" stroke-width="2"/>
          <rect x="147" y="${163 - fillH}" width="66" height="${fillH}" rx="4" fill="#0f6a55"/>
          <text x="180" y="65" text-anchor="middle" font-size="11.5" font-weight="800" fill="#083d30">x = ${fmt(x, 1)} т</text>
          <text x="180" y="125" text-anchor="middle" font-size="12" font-weight="800" fill="#13231f">${fmt((x / 20) * 100, 0)}%</text>
          <rect x="245" y="75" width="75" height="90" rx="6" fill="#fcf8ea" stroke="#c78309" stroke-width="2"/>
          <rect x="255" y="${160 - profitBarH}" width="55" height="${profitBarH}" rx="3" fill="${isProfit ? '#379628' : '#c92a2a'}"/>
          <text x="282" y="65" text-anchor="middle" font-size="11.5" font-weight="800" fill="#083d30">P(x)</text>
          <text x="282" y="185" text-anchor="middle" font-size="12.5" font-weight="800" fill="${isProfit ? '#1e6414' : '#c92a2a'}">${fmt(y1, 1)} мың ₸</text>
          <text x="90" y="185" text-anchor="middle" font-size="11.5" font-weight="700" fill="#556b65">Max: x = 10 т (104 мың ₸)</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 2: Логист ---
    case "alg_logistics": {
      const truckX = 45 + (x / 80) * 255;
      const w1 = Math.min(220, (y1 / 25000) * 220);
      const w2 = Math.min(220, ((y2 || 0) / 25000) * 220);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <text x="30" y="30" font-size="11.5" font-weight="800" fill="#083d30">МАРШРУТ: 0 — 80 км (Теңесу нүктесі: 40 км)</text>
          <line x1="45" y1="68" x2="310" y2="68" stroke="#2d423c" stroke-width="6" stroke-linecap="round"/>
          <line x1="45" y1="68" x2="310" y2="68" stroke="#f6c44e" stroke-width="1.5" stroke-dasharray="6 5"/>
          <line x1="177.5" y1="48" x2="177.5" y2="85" stroke="#c92a2a" stroke-width="2" stroke-dasharray="3 2"/>
          <text x="177.5" y="44" text-anchor="middle" font-size="10.5" font-weight="800" fill="#c92a2a">40 км</text>
          <g transform="translate(${truckX - 18}, 46)">
            <rect x="0" y="2" width="24" height="14" rx="2" fill="#0f6a55"/>
            <rect x="24" y="6" width="10" height="10" rx="2" fill="#eeb02b"/>
            <circle cx="7" cy="17" r="3.5" fill="#13231f"/>
            <circle cx="27" cy="17" r="3.5" fill="#13231f"/>
          </g>
          <text x="${truckX}" y="98" text-anchor="middle" font-size="12" font-weight="800" fill="#083d30">x = ${fmt(x, 0)} км</text>
          <text x="30" y="128" font-size="12" font-weight="800" fill="#0f6a55">C₁(x) = ${fmt(y1, 0)} ₸</text>
          <rect x="30" y="134" width="${w1}" height="14" rx="3" fill="#0f6a55"/>
          <text x="30" y="168" font-size="12" font-weight="800" fill="#c78309">C₂(x) = ${fmt(y2, 0)} ₸</text>
          <rect x="30" y="174" width="${w2}" height="14" rx="3" fill="#eeb02b"/>
        </svg>
      `;
    }

    // --- АЛГЕБРА 3: Энергетик ---
    case "alg_energy": {
      const pureE = y1 - 20;
      const barW = Math.min(250, (x / 16) * 250);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="22" width="300" height="82" rx="8" fill="#083d30" stroke="#eeb02b" stroke-width="2"/>
          <text x="46" y="45" font-size="11" font-weight="700" fill="#9ec2b5" style="stroke:none;">ЭЛЕКТР ЕСЕПТЕГІШІ · E(t) = 15t + 20</text>
          <rect x="46" y="54" width="160" height="36" rx="4" fill="#052820" stroke="#379628" stroke-width="1.5"/>
          <text x="126" y="78" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="18" font-weight="800" fill="#f6c44e" style="stroke:none;">${fmt(y1, 1)} кВт·сағ</text>
          <text x="270" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#c7e3d9" style="stroke:none;">Таза шығын ΔE:</text>
          <text x="270" y="88" text-anchor="middle" font-size="16" font-weight="800" fill="#48b037" style="stroke:none;">+${fmt(pureE, 1)}</text>
          <text x="35" y="132" font-size="12" font-weight="800" fill="#083d30">Жұмыс уақыты: t = ${fmt(x, 1)} сағ (E(0) = 20)</text>
          <rect x="35" y="142" width="290" height="22" rx="5" fill="#dce6e1"/>
          <rect x="35" y="142" width="40" height="22" rx="5" fill="#9eb0aa"/>
          <rect x="75" y="142" width="${barW}" height="22" rx="4" fill="#379628"/>
          <text x="55" y="157" text-anchor="middle" font-size="10" font-weight="800" fill="#13231f">20</text>
          <text x="180" y="186" text-anchor="middle" font-size="12" font-weight="700" fill="#2d423c">8 сағатта: E(8) = 140 кВт·сағ (ΔE = 120)</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 4: Агроном ---
    case "alg_agronom": {
      const stalkH = Math.max(25, ((y1 - 15) / 25) * 95);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="150" width="310" height="36" rx="4" fill="#6b4423"/>
          <text x="180" y="173" text-anchor="middle" font-size="12" font-weight="800" fill="#fdf1cf" style="stroke:none;">Топырақ · Тыңайтқыш мөлшері x = ${fmt(x, 1)} (Optimum: x = 6)</text>
          ${[65, 105, 145, 185, 225, 265, 300].map((px) => `
            <g>
              <line x1="${px}" y1="150" x2="${px}" y2="${150 - stalkH}" stroke="#379628" stroke-width="3"/>
              <ellipse cx="${px}" cy="${145 - stalkH}" rx="6" ry="13" fill="#eeb02b" stroke="#92400e" stroke-width="1.2"/>
            </g>
          `).join("")}
          <rect x="90" y="16" width="180" height="30" rx="6" fill="#083d30"/>
          <text x="180" y="36" text-anchor="middle" font-size="13.5" font-weight="800" fill="#f6c44e" style="stroke:none;">Өнімділік y = ${fmt(y1, 1)} ц/га</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 5: Өндіріс экономисі ---
    case "alg_breakeven": {
      const rev = y1;
      const cost = y2 || (60000 + 700 * x);
      const profit = rev - cost;
      const hRev = Math.min(105, (rev / 264000) * 105);
      const hCost = Math.min(105, (cost / 264000) * 105);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="162" x2="330" y2="162" stroke="#173f33" stroke-width="2"/>
          <rect x="55" y="${162 - hRev}" width="64" height="${hRev}" rx="4" fill="#0f6a55"/>
          <text x="87" y="${154 - hRev}" text-anchor="middle" font-size="11" font-weight="800" fill="#0f6a55">${fmt(rev, 0)} ₸</text>
          <text x="87" y="180" text-anchor="middle" font-size="12" font-weight="800" fill="#13231f">Түсім R(x)</text>
          <rect x="148" y="${162 - hCost}" width="64" height="${hCost}" rx="4" fill="#eeb02b"/>
          <text x="180" y="${154 - hCost}" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">${fmt(cost, 0)} ₸</text>
          <text x="180" y="180" text-anchor="middle" font-size="12" font-weight="800" fill="#13231f">Шығын C(x)</text>
          <rect x="235" y="65" width="102" height="80" rx="6" fill="${profit >= 0 ? '#e3f5df' : '#ffe3e3'}" stroke="${profit >= 0 ? '#2b7a1f' : '#c92a2a'}" stroke-width="2"/>
          <text x="286" y="92" text-anchor="middle" font-size="11.5" font-weight="800" fill="#13231f">${profit >= 0 ? 'ТАЗА ПАЙДА' : 'ШЫҒЫН'}</text>
          <text x="286" y="115" text-anchor="middle" font-size="13" font-weight="800" fill="${profit >= 0 ? '#2b7a1f' : '#c92a2a'}">${profit >= 0 ? '+' : ''}${fmt(profit, 0)} ₸</text>
          <text x="286" y="134" text-anchor="middle" font-size="11" font-weight="700" fill="#556b65">x = ${fmt(x, 0)} дана</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 6: Инженер-эколог ---
    case "alg_ecolog": {
      const reduction = 100 - y1;
      const opacityDirty = Math.max(0.12, y1 / 100);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <rect x="28" y="55" width="80" height="100" rx="6" fill="rgba(120,90,50,0.65)" stroke="#173f33" stroke-width="2"/>
          <text x="68" y="45" text-anchor="middle" font-size="11.5" font-weight="800" fill="#13231f">L(0) = 100</text>
          <text x="68" y="110" text-anchor="middle" font-size="12" font-weight="800" fill="#13231f">100%</text>
          <rect x="135" y="70" width="90" height="70" rx="6" fill="#dff0e8" stroke="#083d30" stroke-width="2.2"/>
          <line x1="160" y1="70" x2="160" y2="140" stroke="#0f6a55" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="180" y1="70" x2="180" y2="140" stroke="#0f6a55" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="200" y1="70" x2="200" y2="140" stroke="#0f6a55" stroke-width="2" stroke-dasharray="4 3"/>
          <text x="180" y="56" text-anchor="middle" font-size="12" font-weight="800" fill="#083d30">t = ${fmt(x, 2)} күн</text>
          <rect x="252" y="55" width="80" height="100" rx="6" fill="rgba(36,102,216,0.22)" stroke="#1852b8" stroke-width="2"/>
          <rect x="254" y="65" width="76" height="88" rx="4" fill="rgba(120,90,50,${opacityDirty.toFixed(2)})"/>
          <text x="292" y="45" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1852b8">L(t) = ${fmt(y1, 1)}</text>
          <text x="180" y="185" text-anchor="middle" font-size="13" font-weight="800" fill="#2b7a1f">Тазару үлесі: −${fmt(reduction, 1)}%</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 8: Өнеркәсіп технологы ---
    case "alg_tehnolog": {
      const barH = Math.min(105, ((y1 - 250) / 300) * 105);
      const isOpt = Math.abs(x - 100) <= 6;
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="310" height="155" rx="8" fill="#f8fbf9" stroke="#bed9cd" stroke-width="1.5"/>
          <text x="180" y="50" text-anchor="middle" font-size="13" font-weight="800" fill="#083d30">Партия көлемі: x = ${fmt(x, 0)} дана</text>
          <line x1="50" y1="130" x2="225" y2="130" stroke="#173f33" stroke-width="4" stroke-linecap="round"/>
          ${[60, 95, 130, 165, 198].slice(0, Math.max(1, Math.min(5, Math.round(x / 40)))).map(bx => `
            <rect x="${bx}" y="102" width="24" height="24" rx="3" fill="#eeb02b" stroke="#083d30" stroke-width="1.5"/>
          `).join("")}
          <rect x="255" y="${152 - barH}" width="46" height="${barH}" rx="4" fill="${isOpt ? '#379628' : '#2466d8'}"/>
          <text x="278" y="168" text-anchor="middle" font-size="12" font-weight="800" fill="#13231f">C = ${fmt(y1, 1)}</text>
          <text x="138" y="162" text-anchor="middle" font-size="12" font-weight="800" fill="#2b7a1f">Минимум: x = 100 дана ⇒ C = 300</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 9: Автоматтандыру инженері ---
    case "alg_integral": {
      const vol = x * x * x + x * x;
      const fillH = Math.min(95, (vol / 36) * 95);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="52" width="145" height="22" rx="4" fill="#9eb0aa" stroke="#173f33" stroke-width="2"/>
          <circle cx="95" cy="42" r="21" fill="#ffffff" stroke="#083d30" stroke-width="2.5"/>
          <text x="95" y="46" text-anchor="middle" font-size="10.5" font-weight="800" fill="#083d30">${fmt(y1, 1)} л/с</text>
          <text x="95" y="16" text-anchor="middle" font-size="11" font-weight="800" fill="#083d30">Сенсор q(t)</text>
          <path d="M 170,63 Q 210,63 215,90 L 215,165" fill="none" stroke="#2466d8" stroke-width="${Math.max(2, Math.min(10, y1 / 3))}" stroke-dasharray="5 3"/>
          <rect x="180" y="65" width="135" height="105" rx="6" fill="#eff6ff" stroke="#1852b8" stroke-width="2.2"/>
          <rect x="182" y="${168 - fillH}" width="131" height="${fillH}" rx="4" fill="rgba(36, 102, 216, 0.45)"/>
          <text x="247" y="114" text-anchor="middle" font-size="14" font-weight="800" fill="#0f172a">V = ${fmt(vol, 2)} л</text>
          <text x="247" y="135" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1852b8">∫₀ᵀ (3t²+2t)dt (T=${fmt(x, 1)} с)</text>
        </svg>
      `;
    }

    // --- АЛГЕБРА 10: Дрон-картограф ---
    case "alg_drone_flight": {
      const dx = 45 + (x / 4) * 260;
      const dy = 165 - ((y1 / 24) * 120);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <line x1="25" y1="168" x2="335" y2="168" stroke="#2b7a1f" stroke-width="3"/>
          <path d="M 45,155 Q 175,-45 305,155" fill="none" stroke="#0f6a55" stroke-width="2" stroke-dasharray="5 4"/>
          <polygon points="${dx},${dy} ${dx - 28},168 ${dx + 28},168" fill="rgba(238, 176, 43, 0.28)" stroke="#c78309" stroke-width="1.2" stroke-dasharray="3 2"/>
          <line x1="${dx}" y1="${dy}" x2="${dx}" y2="168" stroke="#c92a2a" stroke-width="2" stroke-dasharray="3 3"/>
          <g transform="translate(${dx - 16}, ${dy - 8})">
            <rect x="6" y="4" width="20" height="7" rx="3" fill="#083d30"/>
            <line x1="0" y1="2" x2="12" y2="2" stroke="#13231f" stroke-width="2.5"/>
            <line x1="20" y1="2" x2="32" y2="2" stroke="#13231f" stroke-width="2.5"/>
          </g>
          <text x="${dx}" y="${Math.max(18, dy - 14)}" text-anchor="middle" font-size="12" font-weight="800" fill="#c92a2a">h(${fmt(x, 1)} с) = ${fmt(y1, 1)} м</text>
          <text x="175" y="190" text-anchor="middle" font-size="12" font-weight="700" fill="#083d30">Максимум: t = 2 с ⇒ h = 22 м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 1 и 17: Пирамида (S, A, B, C, D, O, h, l, a — без пересечения текста и рёбер!) ---
    case "geo_pyramid":
    case "geo_glass_pyramid": {
      const a = 12;
      const h = x;
      const l = Math.sqrt(h * h + 36);
      const apexY = Math.max(24, 102 - h * 5.8);
      return `
        <svg viewBox="0 0 360 215" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,168 215,168 285,126 120,126" fill="rgba(59,130,246,0.16)" stroke="#1852b8" stroke-width="2"/>
          <line x1="50" y1="168" x2="120" y2="126" stroke="#1852b8" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="120" y1="126" x2="285" y2="126" stroke="#1852b8" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="50" y1="168" x2="285" y2="126" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
          <line x1="215" y1="168" x2="120" y2="126" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 3"/>
          <polygon points="168,${apexY} 50,168 215,168" fill="rgba(36,102,216,0.22)" stroke="#1e3a8a" stroke-width="2.2"/>
          <polygon points="168,${apexY} 215,168 285,126" fill="rgba(36,102,216,0.32)" stroke="#1e3a8a" stroke-width="2.2"/>
          <line x1="168" y1="${apexY}" x2="120" y2="126" stroke="#1e3a8a" stroke-width="1.5" stroke-dasharray="4 3"/>
          <!-- Высота h и апофема l -->
          <line x1="168" y1="${apexY}" x2="168" y2="147" stroke="#c92a2a" stroke-width="2.6" stroke-dasharray="4 2"/>
          <line x1="168" y1="147" x2="250" y2="147" stroke="#083d30" stroke-width="2" stroke-dasharray="3 2"/>
          <line x1="168" y1="${apexY}" x2="250" y2="147" stroke="#2b7a1f" stroke-width="2.8"/>
          <circle cx="168" cy="147" r="3.5" fill="#13231f"/>
          <circle cx="168" cy="${apexY}" r="4" fill="#1e3a8a"/>
          <text x="168" y="${apexY - 8}" text-anchor="middle" font-size="14" font-weight="800" fill="#13231f">S</text>
          <text x="34" y="175" font-size="13" font-weight="800" fill="#13231f">A</text>
          <text x="220" y="178" font-size="13" font-weight="800" fill="#13231f">B</text>
          <text x="293" y="130" font-size="13" font-weight="800" fill="#13231f">C</text>
          <text x="104" y="122" font-size="13" font-weight="800" fill="#13231f">D</text>
          <text x="155" y="161" font-size="12.5" font-weight="800" fill="#13231f">O</text>
          <text x="132" y="190" text-anchor="middle" font-size="13.5" font-weight="800" fill="#13231f">a = ${a} м</text>
          <text x="162" y="${(apexY + 147) / 2 + 5}" text-anchor="end" font-size="13" font-weight="800" fill="#c92a2a">h = ${fmt(h, 1)} м</text>
          <text x="242" y="${(apexY + 125) / 2}" text-anchor="start" font-size="13" font-weight="800" fill="#2b7a1f">l ≈ ${fmt(l, 2)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 2: Геодезист ---
    case "geo_survey": {
      const d = y1;
      const topY = Math.max(24, 168 - Math.min(132, d * 2.3));
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <polygon points="55,168 250,168 250,${topY}" fill="rgba(59,130,246,0.24)" stroke="#1852b8" stroke-width="2.5"/>
          <line x1="250" y1="168" x2="250" y2="${topY}" stroke="#c92a2a" stroke-width="3.2"/>
          <rect x="237" y="155" width="13" height="13" fill="none" stroke="#13231f" stroke-width="1.8"/>
          <path d="M 100,168 A 45,45 0 0,0 92,${168 - 24}" fill="none" stroke="#13231f" stroke-width="2"/>
          <circle cx="55" cy="168" r="4" fill="#1852b8"/>
          <circle cx="250" cy="168" r="4" fill="#1852b8"/>
          <circle cx="250" cy="${topY}" r="4.5" fill="#c92a2a"/>
          <text x="38" y="180" font-size="14" font-weight="800" fill="#13231f">A</text>
          <text x="256" y="182" font-size="14" font-weight="800" fill="#13231f">B</text>
          <text x="256" y="${topY + 4}" font-size="14" font-weight="800" fill="#13231f">C</text>
          <text x="106" y="157" font-size="13.5" font-weight="800" fill="#13231f">${fmt(x, 0)}°</text>
          <text x="152" y="190" text-anchor="middle" font-size="14" font-weight="800" fill="#13231f">40 м</text>
          <text x="260" y="${(168 + topY) / 2 + 5}" font-size="13.5" font-weight="800" fill="#c92a2a">d ≈ ${fmt(d, 1)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 3 и 15: Конус ---
    case "geo_cone_roof":
    case "geo_pile": {
      const r = task.id === "geo-03" ? 6 : 3;
      const h = x;
      const l = Math.sqrt(r * r + h * h);
      const apexY = Math.max(24, 122 - h * 6.5);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="170" cy="164" rx="92" ry="24" fill="rgba(59,130,246,0.2)" stroke="#1852b8" stroke-width="2" stroke-dasharray="5 3"/>
          <path d="M 78,164 L 170,${apexY} L 262,164" fill="rgba(59,130,246,0.24)" stroke="#1852b8" stroke-width="2.5"/>
          <path d="M 78,164 A 92,24 0 0,0 262,164" fill="none" stroke="#1852b8" stroke-width="2.5"/>
          <line x1="170" y1="${apexY}" x2="170" y2="164" stroke="#c92a2a" stroke-width="2.5" stroke-dasharray="4 3"/>
          <line x1="170" y1="164" x2="262" y2="164" stroke="#c92a2a" stroke-width="2.5"/>
          <circle cx="170" cy="164" r="4" fill="#13231f"/>
          <circle cx="170" cy="${apexY}" r="4" fill="#1852b8"/>
          <text x="170" y="${apexY - 8}" text-anchor="middle" font-size="14" font-weight="800" fill="#13231f">S</text>
          <text x="155" y="177" font-size="13.5" font-weight="800" fill="#13231f">O</text>
          <text x="163" y="${(apexY + 164) / 2}" text-anchor="end" font-size="13.5" font-weight="800" fill="#c92a2a">h = ${fmt(h, 1)} м</text>
          <text x="216" y="180" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c92a2a">r = ${r} м</text>
          <text x="235" y="${(apexY + 150) / 2}" text-anchor="start" font-size="13.5" font-weight="800" fill="#083d30">l ≈ ${fmt(l, 2)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 4: Жарты шар ---
    case "geo_dome": {
      const R = x;
      const rx = Math.min(115, 48 + R * 5.8);
      const ry = rx * 0.25;
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <path d="M ${180 - rx},162 A ${rx},${rx} 0 0,1 ${180 + rx},162" fill="rgba(59,130,246,0.24)" stroke="#1852b8" stroke-width="2.5"/>
          <ellipse cx="180" cy="162" rx="${rx}" ry="${ry}" fill="rgba(59,130,246,0.16)" stroke="#1852b8" stroke-width="2" stroke-dasharray="5 3"/>
          <path d="M 180,${162 - rx} A ${rx * 0.45},${rx} 0 0,1 180,162" fill="none" stroke="#1852b8" stroke-width="1.4" stroke-dasharray="4 3"/>
          <line x1="180" y1="${162 - rx}" x2="180" y2="162" stroke="#1852b8" stroke-width="1.8" stroke-dasharray="4 3"/>
          <line x1="180" y1="162" x2="${180 + rx}" y2="162" stroke="#c92a2a" stroke-width="2.8" stroke-dasharray="4 2"/>
          <circle cx="180" cy="162" r="4" fill="#13231f"/>
          <text x="163" y="175" font-size="13.5" font-weight="800" fill="#13231f">O</text>
          <text x="${180 + rx / 2}" y="153" text-anchor="middle" font-size="14" font-weight="800" fill="#c92a2a">R = ${fmt(R, 1)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 5 и 12: Тең бүйірлі үшбұрыш ферма ---
    case "geo_bridge_truss":
    case "geo_warehouse_truss": {
      const a = task.id === "geo-05" ? 18 : 16;
      const h = x;
      const s = Math.sqrt((a / 2) * (a / 2) + h * h);
      const apexY = Math.max(24, 134 - h * 8.5);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <polygon points="55,164 305,164 180,${apexY}" fill="rgba(59,130,246,0.22)" stroke="#1852b8" stroke-width="2.6"/>
          <line x1="180" y1="${apexY}" x2="180" y2="164" stroke="#c92a2a" stroke-width="2.5" stroke-dasharray="4 3"/>
          <circle cx="180" cy="${apexY}" r="4" fill="#1852b8"/>
          <circle cx="180" cy="164" r="3.5" fill="#c92a2a"/>
          <text x="180" y="${apexY - 8}" text-anchor="middle" font-size="14" font-weight="800" fill="#13231f">S</text>
          <text x="38" y="172" font-size="14" font-weight="800" fill="#13231f">A</text>
          <text x="312" y="172" font-size="14" font-weight="800" fill="#13231f">B</text>
          <text x="174" y="180" font-size="13" font-weight="800" fill="#13231f">O</text>
          <text x="180" y="198" text-anchor="middle" font-size="14" font-weight="800" fill="#13231f">a = ${a} м</text>
          <text x="186" y="${(apexY + 164) / 2 + 5}" font-size="13.5" font-weight="800" fill="#c92a2a">h = ${fmt(h, 1)} м</text>
          <text x="105" y="${(apexY + 150) / 2}" text-anchor="end" font-size="13.5" font-weight="800" fill="#083d30">s ≈ ${fmt(s, 2)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 6, 11 и АЛГЕБРА 7: Көлбеу рампа / Күн панелі / Робот иіні ---
    case "geo_ramp":
    case "geo_solar":
    case "alg_robot": {
      const alpha = x;
      const rad = (alpha * Math.PI) / 180;
      const topY = Math.max(32, 166 - Math.sin(rad) * 145);
      const rightX = Math.min(280, 60 + Math.cos(rad) * 195);
      const lText = task.id === "geo-06"
        ? `l ≈ ${fmt(1.2 / Math.sin(rad), 2)} м`
        : task.id === "geo-11" ? "L = 4 м" : "l = 2 м";
      const hText = task.id === "geo-06" ? "h = 1,2 м" : `h ≈ ${fmt(y1, 2)} м`;
      const xText = task.id === "geo-06"
        ? `x ≈ ${fmt(1.2 / Math.tan(rad), 2)} м`
        : `b ≈ ${fmt((task.id === "geo-11" ? 4 : 2) * Math.cos(rad), 2)} м`;
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <polygon points="60,166 ${rightX},166 ${rightX},${topY}" fill="rgba(59,130,246,0.22)" stroke="#1852b8" stroke-width="2.5"/>
          <line x1="60" y1="166" x2="${rightX}" y2="${topY}" stroke="#083d30" stroke-width="3.4"/>
          <line x1="${rightX}" y1="166" x2="${rightX}" y2="${topY}" stroke="#c92a2a" stroke-width="2.8"/>
          <rect x="${rightX - 12}" y="154" width="12" height="12" fill="none" stroke="#13231f" stroke-width="1.6"/>
          <text x="98" y="158" font-size="13.5" font-weight="800" fill="#13231f">${fmt(alpha, 0)}°</text>
          <text x="${(60 + rightX) / 2 - 10}" y="${(166 + topY) / 2 - 10}" text-anchor="middle" font-size="13.5" font-weight="800" fill="#083d30">${lText}</text>
          <text x="${rightX + 8}" y="${(166 + topY) / 2 + 4}" font-size="13" font-weight="800" fill="#c92a2a">${hText}</text>
          <text x="${(60 + rightX) / 2}" y="188" text-anchor="middle" font-size="13" font-weight="800" fill="#13231f">${xText}</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 7: Дұрыс алтыбұрыш ---
    case "geo_hexagon": {
      const r = Math.min(74, 32 + x * 6.5);
      const cx = 180, cy = 100;
      const pts = [];
      const labels = ["D", "C", "B", "A", "F", "E"];
      for (let i = 0; i < 6; i++) {
        const ang = (i * 60 * Math.PI) / 180;
        pts.push({
          x: cx + r * Math.cos(ang),
          y: cy + r * Math.sin(ang),
          lbl: labels[i]
        });
      }
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <polygon points="${pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")}" fill="rgba(59,130,246,0.22)" stroke="#1852b8" stroke-width="2.5"/>
          ${pts.map(p => `<line x1="${cx}" y1="${cy}" x2="${p.x.toFixed(1)}" y2="${p.y.toFixed(1)}" stroke="#1852b8" stroke-width="1.3" stroke-dasharray="4 3"/>`).join("")}
          <line x1="${pts[1].x}" y1="${pts[1].y}" x2="${pts[2].x}" y2="${pts[2].y}" stroke="#c92a2a" stroke-width="3"/>
          <circle cx="${cx}" cy="${cy}" r="3.5" fill="#c92a2a"/>
          <text x="${cx - 5}" y="${cy + 15}" font-size="13" font-weight="800" fill="#13231f">O</text>
          ${pts.map(p => `<text x="${cx + (p.x - cx) * 1.22 - 5}" y="${cy + (p.y - cy) * 1.22 + 5}" font-size="13" font-weight="800" fill="#13231f">${p.lbl}</text>`).join("")}
          <text x="${cx}" y="${cy + r + 24}" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c92a2a">a = ${fmt(x, 1)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 8: Сфера ---
    case "geo_sphere": {
      const r = Math.min(76, 34 + x * 7.8);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="102" r="${r}" fill="rgba(59,130,246,0.22)" stroke="#1852b8" stroke-width="2.5"/>
          <ellipse cx="180" cy="102" rx="${r}" ry="${r * 0.3}" fill="none" stroke="#1852b8" stroke-width="1.6" stroke-dasharray="4 3"/>
          <line x1="180" y1="${102 - r}" x2="180" y2="${102 + r}" stroke="#1852b8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="180" y1="102" x2="${180 + r * 0.86}" y2="${102 - r * 0.5}" stroke="#c92a2a" stroke-width="3"/>
          <circle cx="180" cy="102" r="4" fill="#13231f"/>
          <text x="164" y="116" font-size="14" font-weight="800" fill="#13231f">O</text>
          <text x="${180 + r * 0.35}" y="${102 - r * 0.35}" font-size="14" font-weight="800" fill="#c92a2a">R = ${fmt(x, 1)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 9: Трапеция ---
    case "geo_trapezoid": {
      const hPx = Math.min(115, 36 + x * 3.4);
      const topY = 166 - hPx;
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <polygon points="55,166 305,166 255,${topY} 105,${topY}" fill="rgba(59,130,246,0.22)" stroke="#1852b8" stroke-width="2.5"/>
          <line x1="140" y1="${topY}" x2="140" y2="166" stroke="#c92a2a" stroke-width="2.5" stroke-dasharray="4 3"/>
          <rect x="140" y="155" width="11" height="11" fill="none" stroke="#c92a2a" stroke-width="1.5"/>
          <text x="38" y="174" font-size="14" font-weight="800" fill="#13231f">A</text>
          <text x="312" y="174" font-size="14" font-weight="800" fill="#13231f">B</text>
          <text x="262" y="${topY - 4}" font-size="14" font-weight="800" fill="#13231f">C</text>
          <text x="86" y="${topY - 4}" font-size="14" font-weight="800" fill="#13231f">D</text>
          <text x="180" y="${topY - 8}" text-anchor="middle" font-size="13.5" font-weight="800" fill="#13231f">18 м</text>
          <text x="180" y="188" text-anchor="middle" font-size="14" font-weight="800" fill="#13231f">30 м</text>
          <text x="148" y="${(166 + topY) / 2 + 5}" font-size="13.5" font-weight="800" fill="#c92a2a">h = ${fmt(x, 0)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 10: Шеңбер ---
    case "geo_circle": {
      const r = Math.min(76, 30 + x * 1.9);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="102" r="${r}" fill="rgba(59,130,246,0.22)" stroke="#1852b8" stroke-width="2.5"/>
          <line x1="180" y1="102" x2="${180 + r}" y2="102" stroke="#c92a2a" stroke-width="3"/>
          <circle cx="180" cy="102" r="4" fill="#13231f"/>
          <text x="164" y="118" font-size="14" font-weight="800" fill="#13231f">O</text>
          <text x="${180 + r / 2}" y="93" text-anchor="middle" font-size="13.5" font-weight="800" fill="#c92a2a">R = ${fmt(x, 0)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 13: Қорап ---
    case "geo_box": {
      const hPx = Math.min(96, 32 + x * 1.4);
      const topY = 166 - hPx;
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <polygon points="65,166 210,166 210,${topY} 65,${topY}" fill="rgba(238,176,43,0.25)" stroke="#92400e" stroke-width="2.2"/>
          <polygon points="210,166 262,136 262,${topY - 30} 210,${topY}" fill="rgba(217,119,6,0.34)" stroke="#92400e" stroke-width="2.2"/>
          <polygon points="65,${topY} 210,${topY} 262,${topY - 30} 117,${topY - 30}" fill="rgba(251,191,36,0.3)" stroke="#92400e" stroke-width="2.2"/>
          <text x="138" y="185" text-anchor="middle" font-size="13" font-weight="800" fill="#13231f">a = 40 см</text>
          <text x="252" y="164" font-size="13" font-weight="800" fill="#13231f">b = 30 см</text>
          <text x="270" y="${topY + hPx / 2 - 15}" font-size="13" font-weight="800" fill="#c92a2a">h = ${fmt(x, 0)} см</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 14: Дрон-картограф ---
    case "geo_drone_rect": {
      const hPx = Math.min(115, 36 + x * 0.8);
      const topY = 166 - hPx;
      const diag = Math.sqrt(80 * 80 + x * x);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <rect x="70" y="${topY}" width="205" height="${hPx}" fill="rgba(55,150,40,0.22)" stroke="#1e6414" stroke-width="2.5"/>
          <line x1="70" y1="166" x2="275" y2="${topY}" stroke="#c92a2a" stroke-width="2.5" stroke-dasharray="5 3"/>
          <text x="45" y="182" font-size="12.5" font-weight="800" fill="#13231f">A(0;0)</text>
          <text x="255" y="182" font-size="12.5" font-weight="800" fill="#13231f">B(80;0)</text>
          <text x="262" y="${topY - 7}" font-size="12.5" font-weight="800" fill="#13231f">C(80;${x})</text>
          <text x="45" y="${topY - 7}" font-size="12.5" font-weight="800" fill="#13231f">D(0;${x})</text>
          <text x="172" y="${(166 + topY) / 2 - 5}" text-anchor="middle" font-size="13" font-weight="800" fill="#c92a2a">AC ≈ ${fmt(diag, 1)} м</text>
        </svg>
      `;
    }

    // --- ГЕОМЕТРИЯ 16: Көпірдің дөңгелек аркасы ---
    default: {
      const halfC = (x / 20) * 112;
      const dPx = Math.sqrt(Math.max(0, 112 * 112 - halfC * halfC));
      const chordY = 34 + (112 - dPx);
      return `
        <svg viewBox="0 0 360 210" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="146" r="112" fill="none" stroke="#9eb0aa" stroke-width="1.4" stroke-dasharray="4 4"/>
          <path d="M ${180 - halfC},${chordY} A 112,112 0 0,1 ${180 + halfC},${chordY} Z" fill="rgba(59,130,246,0.24)" stroke="#1852b8" stroke-width="2.6"/>
          <line x1="180" y1="146" x2="${180 + halfC}" y2="${chordY}" stroke="#083d30" stroke-width="2"/>
          <line x1="180" y1="34" x2="180" y2="${chordY}" stroke="#c92a2a" stroke-width="3"/>
          <line x1="180" y1="${chordY}" x2="180" y2="146" stroke="#556b65" stroke-width="1.8" stroke-dasharray="3 3"/>
          <circle cx="180" cy="146" r="4" fill="#13231f"/>
          <text x="163" y="159" font-size="13" font-weight="800" fill="#13231f">O</text>
          <text x="186" y="${(34 + chordY) / 2 + 4}" font-size="13" font-weight="800" fill="#c92a2a">h ≈ ${fmt(y1, 2)} м</text>
          <text x="180" y="${chordY + 16}" text-anchor="middle" font-size="13" font-weight="800" fill="#1852b8">c = ${fmt(x, 1)} м (R = 10 м)</text>
        </svg>
      `;
    }
  }
}

// ============================================================================
// ИНТЕРАКТИВНАЯ ВРАЩАЕМАЯ 3D-МОДЕЛЬ (GEOGEBRA 3D CANVAS)
// ============================================================================

function drawGeoGebra3D(task, x) {
  const canvas = $("geogebra3dCanvas");
  if (!canvas) return;
  const w = 195, h = 175;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h * 0.62;
  const yaw = state.rotYaw;
  const pitch = state.rotPitch;

  const project = (px, py, pz) => {
    const x1 = px * Math.cos(yaw) - py * Math.sin(yaw);
    const y1 = px * Math.sin(yaw) + py * Math.cos(yaw);
    const z1 = pz;
    const y2 = y1 * Math.cos(pitch) - z1 * Math.sin(pitch);
    const scale = 1.12;
    return {
      x: cx + x1 * scale,
      y: cy + y2 * scale * 0.65 - z1 * Math.cos(pitch) * 0.8
    };
  };

  // Координатная плоскость GeoGebra
  ctx.strokeStyle = "rgba(100, 125, 140, 0.28)";
  ctx.lineWidth = 0.8;
  for (let g = -48; g <= 48; g += 16) {
    const p1 = project(g, -48, 0), p2 = project(g, 48, 0);
    const p3 = project(-48, g, 0), p4 = project(48, g, 0);
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
    ctx.moveTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y);
    ctx.stroke();
  }

  const o = project(0, 0, 0);
  const axZ = project(0, 0, 62);
  ctx.strokeStyle = "#dc2626";
  ctx.lineWidth = 1.3;
  ctx.beginPath(); ctx.moveTo(o.x, o.y); ctx.lineTo(axZ.x, axZ.y); ctx.stroke();

  const poly = (pts3d, fill, stroke = "#312e81", lw = 1.6) => {
    const pts = pts3d.map(p => project(p[0], p[1], p[2]));
    ctx.beginPath();
    pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
  };

  if (task.diagram === "geo_pyramid" || task.diagram === "geo_glass_pyramid") {
    const s = 36;
    const hz = Math.min(72, 24 + x * 4.2);
    const b = [[-s, -s, 0], [s, -s, 0], [s, s, 0], [-s, s, 0]];
    const top = [0, 0, hz];
    poly(b, "rgba(99, 102, 241, 0.2)");
    for (let i = 0; i < 4; i++) {
      poly([b[i], b[(i + 1) % 4], top], "rgba(129, 140, 248, 0.34)", "#3730a3", 1.5);
    }
  } else if (task.diagram === "geo_cone_roof" || task.diagram === "geo_pile") {
    const r = 36;
    const hz = Math.min(72, 22 + x * 4.2);
    const top = project(0, 0, hz);
    const basePts = [];
    for (let i = 0; i <= 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      basePts.push([r * Math.cos(a), r * Math.sin(a), 0]);
    }
    poly(basePts, "rgba(129, 140, 248, 0.28)", "#3730a3", 1.4);
    for (let i = 0; i < 24; i += 3) {
      const p = project(basePts[i][0], basePts[i][1], 0);
      ctx.beginPath(); ctx.moveTo(top.x, top.y); ctx.lineTo(p.x, p.y);
      ctx.strokeStyle = "rgba(55, 48, 163, 0.55)"; ctx.stroke();
    }
  } else if (task.diagram === "geo_dome" || task.diagram === "geo_sphere") {
    const isFull = task.diagram === "geo_sphere";
    const r = Math.min(46, 22 + x * 2.5);
    const rings = isFull ? [-0.6, -0.3, 0, 0.3, 0.6, 0.85] : [0, 0.3, 0.6, 0.85];
    rings.forEach((zf) => {
      const z = zf * r + (isFull ? r * 0.5 : 0);
      const rr = Math.sqrt(Math.max(0, r * r - (zf * r) * (zf * r)));
      const ringPts = [];
      for (let i = 0; i <= 24; i++) {
        const a = (i / 24) * Math.PI * 2;
        ringPts.push([rr * Math.cos(a), rr * Math.sin(a), z]);
      }
      poly(ringPts, "rgba(129, 140, 248, 0.2)", "#3730a3", 1.2);
    });
  } else if (task.diagram === "geo_hexagon") {
    const r = Math.min(46, 20 + x * 3.5);
    const hex = [];
    for (let i = 0; i < 6; i++) {
      const a = (i * 60 * Math.PI) / 180;
      hex.push([r * Math.cos(a), r * Math.sin(a), 8]);
    }
    poly(hex, "rgba(129, 140, 248, 0.38)", "#3730a3", 1.8);
  } else if (task.diagram === "geo_ramp" || task.diagram === "geo_solar" || task.diagram === "geo_survey" || task.diagram === "alg_robot") {
    const hz = Math.min(56, 15 + Math.sin((x * Math.PI) / 180) * 52);
    const w3 = 24;
    const pA1 = [-34, -w3, 0], pB1 = [34, -w3, 0], pC1 = [34, -w3, hz];
    const pA2 = [-34, w3, 0], pB2 = [34, w3, 0], pC2 = [34, w3, hz];
    poly([pA1, pB1, pB2, pA2], "rgba(129, 140, 248, 0.2)");
    poly([pA1, pB1, pC1], "rgba(129, 140, 248, 0.35)");
    poly([pA2, pB2, pC2], "rgba(129, 140, 248, 0.35)");
    poly([pA1, pC1, pC2, pA2], "rgba(99, 102, 241, 0.42)", "#3730a3", 1.6);
  } else {
    const sx = 32, sy = 26;
    const rangeSpan = Math.max(1, task.research.max - task.research.min);
    const hz = 16 + ((x - task.research.min) / rangeSpan) * 48;
    const b = [[-sx, -sy, 0], [sx, -sy, 0], [sx, sy, 0], [-sx, sy, 0]];
    const t = [[-sx, -sy, hz], [sx, -sy, hz], [sx, sy, hz], [-sx, sy, hz]];
    for (let i = 0; i < 4; i++) {
      poly([b[i], b[(i + 1) % 4], t[(i + 1) % 4], t[i]], "rgba(129, 140, 248, 0.28)", "#3730a3", 1.4);
    }
    poly(t, "rgba(99, 102, 241, 0.4)", "#3730a3", 1.6);
  }
}

// ============================================================================
// ГРАФИК ЗАВИСИМОСТИ С ВЫНОСКОЙ (БЕЗ НАЛОЖЕНИЯ НА ПОДПИСИ ОСИ Y)
// ============================================================================

function drawDependencyChart(task, x, y1, y2) {
  const canvas = $("dependencyChartCanvas");
  if (!canvas) return;
  const loc = task[state.lang];
  const w = Math.max(240, canvas.clientWidth || 420);
  const h = 210;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.round(w * dpr);
  canvas.height = Math.round(h * dpr);

  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const padL = 72, padR = 20, padT = 24, padB = 32;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const minX = Number(task.research.min);
  const maxX = Number(task.research.max);
  const hasSecond = Boolean(task.research.secondFnType);
  const N = 160;

  const ys = [];
  for (let i = 0; i <= N; i++) {
    const xi = minX + ((maxX - minX) * i) / N;
    const v1 = window.evaluateTaskModel(task, xi, false);
    if (Number.isFinite(v1)) ys.push(v1);
    if (hasSecond) {
      const v2 = window.evaluateTaskModel(task, xi, true);
      if (Number.isFinite(v2)) ys.push(v2);
    }
  }
  if (task.research.isIntegral) ys.push(0);

  let minY = Math.min(...ys);
  let maxY = Math.max(...ys);
  const margin = Math.max((maxY - minY) * 0.16, 1);
  minY -= margin;
  maxY += margin;

  const toX = (v) => padL + ((v - minX) / (maxX - minX)) * plotW;
  const toY = (v) => padT + ((maxY - v) / (maxY - minY)) * plotH;

  // Координатная сетка
  ctx.strokeStyle = "#e3ece8";
  ctx.lineWidth = 1;
  ctx.font = "600 11px 'Golos Text', sans-serif";
  ctx.fillStyle = "#556b65";

  for (let i = 0; i <= 4; i++) {
    const gx = padL + (plotW * i) / 4;
    const gy = padT + (plotH * i) / 4;
    ctx.beginPath();
    ctx.moveTo(gx, padT); ctx.lineTo(gx, padT + plotH);
    ctx.moveTo(padL, gy); ctx.lineTo(padL + plotW, gy);
    ctx.stroke();

    const xv = minX + ((maxX - minX) * i) / 4;
    const yv = maxY - ((maxY - minY) * i) / 4;
    ctx.textAlign = "center";
    ctx.fillText(fmt(xv, 1), gx, h - 10);
    ctx.textAlign = "right";
    ctx.fillText(fmtCompact(yv), padL - 8, gy + 3.5);
  }

  // Закрашенная площадь интеграла (ALG-09)
  if (task.research.isIntegral && x > minX) {
    const y0 = toY(0);
    ctx.beginPath();
    ctx.moveTo(toX(minX), y0);
    for (let i = 0; i <= 80; i++) {
      const xi = minX + ((x - minX) * i) / 80;
      ctx.lineTo(toX(xi), toY(window.evaluateTaskModel(task, xi, false)));
    }
    ctx.lineTo(toX(x), y0);
    ctx.closePath();
    ctx.fillStyle = "rgba(55, 150, 40, 0.24)";
    ctx.fill();
  }

  // Вторая кривая
  if (hasSecond) {
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const xi = minX + ((maxX - minX) * i) / N;
      const yi = window.evaluateTaskModel(task, xi, true);
      if (i === 0) ctx.moveTo(toX(xi), toY(yi));
      else ctx.lineTo(toX(xi), toY(yi));
    }
    ctx.strokeStyle = "#d99316";
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  // Основная зелёная кривая
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const xi = minX + ((maxX - minX) * i) / N;
    const yi = window.evaluateTaskModel(task, xi, false);
    if (i === 0) ctx.moveTo(toX(xi), toY(yi));
    else ctx.lineTo(toX(xi), toY(yi));
  }
  ctx.strokeStyle = "#2b7a1f";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Пунктирные проекции текущей точки
  const px = toX(x);
  const py = toY(y1);
  ctx.strokeStyle = "#2b7a1f";
  ctx.lineWidth = 1.4;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(px, padT + plotH);
  ctx.lineTo(px, py);
  ctx.lineTo(padL, py);
  ctx.stroke();
  ctx.setLineDash([]);

  // Активная точка
  ctx.beginPath();
  ctx.arc(px, py, 6, 0, Math.PI * 2);
  ctx.fillStyle = "#eeb02b";
  ctx.fill();
  ctx.strokeStyle = "#083d30";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Жёлтая плашка-выноска на графике (строго внутри поля графика padL+6 .. padL+plotW-6)
  const calloutText = `${fmt(x, 1)} ${loc.unit} → ${fmt(y1, 1)} ${loc.yUnit}`;
  ctx.font = "700 11.5px 'Golos Text', sans-serif";
  const bw = Math.min(plotW - 12, ctx.measureText(calloutText).width + 16);
  const bx = Math.min(Math.max(px - bw / 2, padL + 6), padL + plotW - bw - 6);
  const by = py - 29 < padT + 2 ? py + 11 : py - 29;

  ctx.fillStyle = "#fdf1cf";
  ctx.strokeStyle = "#c78309";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(bx, by, bw, 22, 4);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#13231f";
  ctx.textAlign = "center";
  ctx.fillText(calloutText, bx + bw / 2, by + 15);
}

// ============================================================================
// ДИНАМИЧЕСКАЯ РАСЧЁТНАЯ ТАБЛИЦА ЗНАЧЕНИЙ (X -> Y)
// ============================================================================

function renderParameterTable(task, currentX) {
  const loc = task[state.lang];
  const minX = Number(task.research.min);
  const maxX = Number(task.research.max);
  const targetX = Number(task.research.targetValue);

  const set = new Set([minX, targetX, currentX, maxX]);
  for (let i = 1; i <= 4; i++) {
    const v = Number((minX + ((maxX - minX) * i) / 5).toFixed(1));
    set.add(v);
  }
  const points = Array.from(set).sort((a, b) => a - b).slice(0, 7);

  const thCells = points.map((v) => {
    const isCur = Math.abs(v - currentX) < 0.01;
    return `<td class="${isCur ? 'active-col' : ''}" style="cursor:pointer;" onclick="setParamPreset(${v})">${fmt(v, 1)}</td>`;
  }).join("");

  const tdCells = points.map((v) => {
    const isCur = Math.abs(v - currentX) < 0.01;
    const yv = window.evaluateTaskModel(task, v, false);
    return `<td class="${isCur ? 'active-col' : ''}" style="cursor:pointer;" onclick="setParamPreset(${v})">${fmtCompact(yv)}</td>`;
  }).join("");

  $("paramValueTable").innerHTML = `
    <tr>
      <th>${loc.unit}</th>
      ${thCells}
    </tr>
    <tr>
      <th>${loc.yUnit}</th>
      ${tdCells}
    </tr>
  `;
}

document.addEventListener("DOMContentLoaded", initApp);
