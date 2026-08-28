export const site = {
  title: 'Вебинар Павла Каткова. 1',
  description: 'АЛГОРИТМ ВЗРЫВНОГО РОСТА ЮРИДИЧЕСКОГО БИЗНЕСА',
  url: 'https://online.katkov.school',
  ogImage: 'og.png',
} as const;

/**
 * The registration form is a GetCourse widget hosted by katkov.school — the
 * same one the original page embedded. It is loaded only when the popup is
 * first opened, so the third-party script does not run on page load.
 */
export const registration = {
  widgetSrc: 'https://katkov.school/pl/lite/widget/script?id=546213',
  widgetId: 'f6c90ffcd78bf4daab34c23d6e34c074b573a93a',
  hook: '#reg',
} as const;

/** Analytics from the original page. Set to null to drop them. */
export const analytics = {
  yandexMetrikaId: '88007628',
  gtmId: 'GTM-M6LW29X',
} as const;

export const cookieNotice = {
  text:
    'Мы используем cookie. Это позволяет нам анализировать взаимодействие посетителей с сайтом и делать его лучше. Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie.',
  accept: 'Согласен',
} as const;
