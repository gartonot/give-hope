<script setup lang="ts">
  import CaseHeroSection from '~/components/case/CaseHeroSection.vue'
  import SubscribeNewsletter from '~/components/SubscribeNewsletter.vue'
  import { useRoute } from '#imports'
  import CaseBodySection from '~/components/case/CaseBodySection.vue'
  import CaseGallerySection from '~/components/case/CaseGallerySection.vue'
  import CaseVideoSection from '~/components/case/CaseVideoSection.vue'

  const route = useRoute()
  const slug = route.params.slug as string
  const cases = {
    'remont-1': {
      heroSection: {
        title: 'Ремонт №1',
        image: {
          src: '/images/case/repair-1/covermax.png',
          alt: 'case1'
        },
        description: 'Хомич Анатолий Семёнович'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Теперь будет тепло!</br></br>' +
          'Первый ремонт в рамках нашей новой программы "Дари Ремонт" завершен.</br></br>' +
          'Хомич Анатолий Семёнович-инвалид ВОВ родился 08.01.1925г в Москве.</br>' +
          'На фронт призван в 1943 г.Воевал на 1-ом Белорусском, 2-ом Белорусском фронтах.</br>' +
          'Гвардии старшина, автоматчик 1 роты Моторизованного батальона автоматчиков 58-й гвардейской танковой Пражской Краснознаменной бригады.В июле 1945 г. демобилизован в должности командира отделения автоматчиков танкового десанта.Имеет награды: орден Славы 3-ей степени, медаль за «боевые заслуги», Орден Отечественной войны 2-ой степени и другие.</br></br>' +
          'После войны окончил музыкальные курсы для инвалидов и музыкальное училище им.Октябрьской революции.В 1957 г. Переехал в г.Дмитров и 31 год проработал в музыкальной школе.Принимал активное участие в общественной жизни города.25 лет вёл кружок садоводов в г.Дмитров. Был женат, прожил с женой 34 года.</br></br>' +
          'К сожалению, сейчас Анатолий Семёнович живет один.Детей своих у него нет.</br></br>' +
          'Он очень активный и жизнерадостный. Каждое утро начинает с зарядки и гантелей. А ещё профессионально играет на аккордеоне.Недавно поборол тяжёлую форму пневмонии и выпивался из больницы здоровым! Дедушка уже очень давно хотел утеплить главную комнату, в которой проводит больше всего времени, так как она представляет собой гостиную, столовую и спальню одновременно.</br></br>' +
          'Мы конечно же заменили и утеплили окна и балконную дверь, а также полностью обновили ванную комнату.</br></br>' +
          'Благодарим всех, кто поучаствовал в сборе средств и в организации процесса. Наконец-то этой зимой у дедушки в квартире будет тепло и уютно!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-1/slider/image1.png',
          '/images/case/repair-1/slider/image2.png',
          '/images/case/repair-1/slider/image3.png',
          '/images/case/repair-1/slider/image4.png'
        ]
      }
    },
    'remont-2': {
      heroSection: {
        title: 'Ремонт №2',
        image: {
          src: '/images/case/repair-2/covermax.png',
          alt: 'case2'
        },
        description: 'Вера Евгеньевна'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Новая кухня для Веры Евгеньевны из Тверской области.</br></br>' +
          'Хотим немного подробнее рассказать о процессе и людях, которые в нем принимали участие.Наши волонтёры Екатерина и Мария попали в дом к Бабушке Вере во время развоза продуктовых коробок в Тверской области.Ее адрес в г.Кашин был в их списке Девушки сразу обратили внимание на плохие условия проживания и захотели помочь.</br></br>' +
          'Мы узнали все о родственниках и жизненной ситуации Веры Евгеньевны и решили к Новому Году отремонтировать кухню и заменить мебель.Волонтеры сами организовали сбор средств в помощь нашему сбору от фонда и совместными усилиями нам удалось все быстро оплатить и купить.Мы нашли прекрасного и ответственного мастера Илью, который живёт неподалёку и который с большой душой сделал ремонт за 3,5 недели</br></br>' +
          'Кухня стала очень светлой и просторной.</br></br>' +
          'Для Веры Евгеньевны мы отремонтировали и утеплили кухню, заменили старую посуду, мебель, плиту, телевизор, а также шкафы в прихожей.Кухня стала очень светлой и просторной. А ещё, нам кажется, что Вера Евгеньевна тоже расцвела и помолодела и теперь ещё долгие годы будет готовить вкусные обеды на новой плите и звать нас в гости!</br></br>' +
          'Этот кейс отличный пример участия волонтёров в проекте фонда от и до.Мы и Вера Евгеньевна очень довольны результатом и благодарим всех, кто поучаствовал в сборе и помог нам осуществить задуманное.Спасибо!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-2/slider/image1.png',
          '/images/case/repair-2/slider/image2.png',
          '/images/case/repair-2/slider/image3.png',
          '/images/case/repair-2/slider/image4.png',
          '/images/case/repair-2/slider/image5.png',
          '/images/case/repair-2/slider/image6.png',
          '/images/case/repair-2/slider/image7.png',
          '/images/case/repair-2/slider/image8.png'
        ]
      }
    },
    'remont-3': {
      heroSection: {
        title: 'Ремонт №3',
        image: {
          src: '/images/case/repair-3/covermax.png',
          alt: 'case2'
        },
        description: 'Римма Сергеевна Жданова️'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Одиноко проживающая пенсионерка.12 лет назад похоронила своего мужа.Есть сын, который живет и работает в Туле, но не имеет возможности сделать ремонт матери из-за финансовых трудностей.</br></br>' +
          '30 лет Римма Сергеевна жила в доме, в котором нет никаких условий.Дом холодный без отопления и частично без света, туалет на улице, стены закоптились от неисправной печи и пол в некоторых местах проваливается</br></br>' +
          'Римма Сергеевна очень хотела привести свой дом в порядок, обновить ремонт и сделать его чистым и уютным.В первый приезд бабушка встретила нас в тёплой дубленке, которую зимой не снимает, так как боится топить дом, чтобы не задохнуться от копоти.</br></br>' +
          'Спустя пару месяцев мы разобрались с печкой, исправили проводку, сделали полностью ремонт кухни, заменили мебель, туалет и поставили забор</br></br>' +
          'Делимся с вами результатами проделанной работы!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-3/slider/image1.png',
          '/images/case/repair-3/slider/image2.png',
          '/images/case/repair-3/slider/image3.png',
          '/images/case/repair-3/slider/image4.png',
          '/images/case/repair-3/slider/image5.png',
          '/images/case/repair-3/slider/image6.png'
        ]
      }
    },
    'remont-4': {
      heroSection: {
        title: 'Ремонт №4',
        image: {
          src: '/images/case/repair-4/covermax.png',
          alt: 'case2'
        },
        description: 'Любовь Михайловна'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Косметический ремонт квартиры для Светловой Любови Михайловны</br></br>' +
          'Бабушка Любовь - одинокая пенсионерка, которая осталась без поддержки семьи после получения инвалидности.Имеет несколько серьезных заболеваний : сахарный диабет 2-й тип тяжелой формы, заболевание щитовидной железы и сердца.Половина пенсии уходит на лекарства, часть на коммунальные и жилищные услуги, а что остается- на продукты.</br></br>' +
          'Собственными силами Любовь Михайловна сделать ремонт в квартире не имела возможности, поэтому мы решили помочь нашей ей улучшить жилищные условия.</br></br>' +
          'Благодаря собранным средствам, мы закончили четвертый и самый крупный на данный момент ремонт в рамках программы «Дари Ремонт».Работы проводились во всех жилых комнатах в квартире.</br></br>' +
          'Спасибо за вашу помощь!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-4/slider/image1.png',
          '/images/case/repair-4/slider/image2.png',
          '/images/case/repair-4/slider/image3.png',
          '/images/case/repair-4/slider/image4.png',
          '/images/case/repair-4/slider/image5.png',
          '/images/case/repair-4/slider/image6.png',
          '/images/case/repair-4/slider/image7.png',
          '/images/case/repair-4/slider/image8.png'
        ]
      }
    },
    'remont-5': {
      heroSection: {
        title: 'Ремонт №5',
        video: '/videos/ruzakov.mp4',
        description: 'Ремонт Рузаковы'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Рузакова Екатерина Семеновна 1922 года рождения.В ноябре ей исполнится 100 лет.Проживает вместе с дочерью Людмилой Михайловной вдвоём в семейном доме.Но так же есть ещё дети и внуки, которые проживают в другом городе.</br></br>' +
          'Екатерина Семёновна похоронила мужа, с которым они прожили вместе больше 60 лет.По профессии она учитель младших классов, всю жизнь трудилась на благо общества и своих учеников, Ветеран труда и имеет медаль за доблестный труд во время Великой Отечественной Войны.</br></br>' +
          'Людмила Михайловна целыми днями ухаживает за мамой.Последние годы ей все сложнее вставать с кровати и в силу возраста.</br></br>' +
          'Семья Рузаковых очень скромные люди, которым неудобно попросить помощи.Мы подумали, что было бы здорово сделать подарок к Юбилею Екатерины Семеновны и обновить кухню в доме.Наше предложение было принято с большой благодарностью</br></br>' +
          'Ремонт сделан!Всем спасибо.'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-5/slider/image1.png',
          '/images/case/repair-5/slider/image2.png'
        ]
      }
    },
    'remont-6': {
      heroSection: {
        title: 'Ремонт №6',
        video: '/videos/katanov.mp4',
        description: 'Катанов Петр Анатольевич'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Наверное, это был самый противоречивый ремонт из всех, сделанных нами. Во-первых, потому что герой - мужчина, а во-вторых выглядит он не сильно в возрасте и вполне мог бы ещё заработать на ремонт или хотя бы убраться в квартире. Но если посмотреть глубже, если не судить человека по обложке, то каждый сострадающий человек поймёт наш выбор<br><br>' +
          'Пётр Анатольевич инвалид 2-й группы, инфарктник с рассеянным склерозом и кучей сопутствующих болезней. До получения инвалидности он работал и обеспечивал себя и семью. Сейчас здоровье не позволяет, да и никто не берет такого сотрудника. Все родственники умерли, детьми обзавестись не успел, так как на протяжении многих лет ухаживал за больной мамой.Он не лентяй и не алкоголик. Все время мастерит что-то, развивая моторику. Муниципальное жильё в таком состоянии ему досталось как малоимущему гражданину от государства в 2017 году.До него здесь жили люди, которые довели квартиру до такого состояния.\n <br><br>' +
          'Если присмотреться, то все вещи расставлены аккуратно, нет хлама и завалов. Петр Анатольевич с первого дня просил большой шкаф, чтобы сложить туда все свои вещи и освободить пространство. Из-за неисправной вытяжки на стенах скапливалась копоть. Купленные им самим новые обои, давно лежали наготове, но поклеить их не представлялось возможным по состоянию здоровья. Да и как на пособие в 8.000₽ можно нанять рабочих? Когда из этих денег надо покупать лекарства, кормить себя и кота. <br><br>' +
          'Мы захотели помочь, хотя понимали, что нас поддержат не все. Но средства на этот ремонт были выделены одним нашим крупным благотворителем со словами «потратить куда считаем нужным». Мы считаем нужным дать человеку шанс. Помочь поверить в себя и в достойную жизнь, вне зависимости от пола, внешнего вида или от мнения других людей.<br><br>' +
          'Всем, кто разделяет нашу позицию. Спасибо!'
      },
      gallerySection: {
        title: 'Галерея',
        images: []
      }
    },
    'remont-7': {
      heroSection: {
        title: 'Ремонт №7',
        video: '/videos/vasilisenko.mp4',
        description: 'Васильченко Надежда Петровна 1925 г.р'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Участница Великой Отечественной Войны. Прошла войну с мая 1943 года от Ст.Лиски до ноября 1945 года.Победу встретила на станции Токшони-Будапешт. Служила в 96 ОЗАД (Отдельный Зенитно-Артиллерийский Дивизион)связист, телефонист.</br></br>' +
          'На данный момент проживает в г.Воронеже с дочерьюпенсионеркой Верой. Они вместе мечтали о новой кухне.Благодаря друзьям Фонда, сбор на ремонт был закрыт моментально и мы успели порадовать Ветерана к 9 мая.</br></br>' +
          'Данный кейс был реализован вместе с дружественным проектом «Живой голос победы»</br></br>' +
          'Спасибо!'
      },
      gallerySection: {
        title: 'Галерея',
        images: []
      }
    },
    'remont-8': {
      videos: {
        before: '/videos/cases/repair-8/before.mp4',
        after: '/videos/cases/repair-8/after.mp4'
      },
      heroSection: {
        title: 'Ремонт №8',
        video: '',
        description: 'Гоша'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Гоше 41 год,его диагноз -ДЦП,гидроцефалия.Живет в Санкт-Петербурге.Самый добродушный парень в городе.Он всегда улыбчив и готов помочь каждому, кто к нему обратится.Гоша лишен дееспособности.Его опекун пожилой отец Сергей Александрович. <br><br>' +
          'Сергей Александрович – главная и единственная опора, поскольку родная мама Гоши умерла от рака.Отец много лет мечтал сделать ремонт в квартире своего сына, но финансовые возможности и состояние здоровья не позволяли ему осуществить эту задумку. Вся пенсия идет на уход за больной женой, мачехой Гоши, а также на обеспечение и помощь сыну. <br><br>' +
          'Единственной социальной жизнью Гоши являются посещения реабилитационного центра рядом с его домом. Но руководство запретило ему приходить туда из-за опасности того,что он принесет в центр клопов и других насекомых из своей квартиры.Это лишало его социальной жизни и общения с людьми.Он был вынужден проводить большую часть времени в четырех стенах своей старенькой квартиры. Единственным развлечением стали лишь короткие прогулки во дворе и компьютер.<br><br>' +
          'В наш благотворительный фонд обратился сосед и одноклассник Гоши – Алексей. Он рассказал нам о трудностях, с которыми сталкивается Гоша, и попросил помощи. Мы не могли остаться равнодушными к этой истории и очень рады, что вы тоже поддержали наш выбор и вместе мы смогли отремонтировать Гоше квартиру!<br><br>' +
          'Отчетное видео получилось,немного,в формате программы «Квартирный вопрос»,но нам очень хотелось запечатлеть первую реакцию Гоши на обновленное жилье.Он полтора месяца жил у друзей в соседнем доме и принимал участие в выборе отделочных материалов и мебели,но не видел сам процесс ремонта.<br><br>' +
          '«Мы его спасли» - говорит Алексей,который помогал и контролировал весь процесс ремонта.Для Гоши теперь открыты все двери в реабилитационные центры,санатории и любые общественные учреждения,в которых он захочет побывать.<br><br>' +
          'Больше никто не скажет ему,что он может принести из квартиры каких-то паразитов.Проведена полная неоднократная дезинфекция, заделаны все дыры и новое абсолютно всё! <br><br>' +
          'Когда чисто,уютно и достойно в доме,то на душе спокойно.Появляется вера в себя,в свои силы и желание жить полной жизнью.Всем,кто принимал участие большое человеческое СПАСИБО и низкий поклон!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-8/slider/image1.png',
          '/images/case/repair-8/slider/image2.png',
          '/images/case/repair-8/slider/image3.png'
        ]
      }
    },
    'psy-klimentevo': {
      videos: {
        before: '/videos/cases/cozy-old-age/psy-klimentevo/before.mp4',
        after: '/videos/cases/cozy-old-age/psy-klimentevo/after.mp4'
      },
      heroSection: {
        title: 'Уютная старость №1',
        image: {
          src: '/images/case/cozy-old-age/title.png',
          alt: 'case2'
        },
        description:
          'Ремонт прачечной в отделении сестринского ухода при Клементьевской участковой больнице.'
      },
      bodySection: {
        title: '',
        text: ''
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/psy-klimentevo/slider/image1.jpg',
          '/images/case/psy-klimentevo/slider/image2.jpg',
          '/images/case/psy-klimentevo/slider/image3.jpg',
          '/images/case/psy-klimentevo/slider/image4.jpg',
          '/images/case/psy-klimentevo/slider/image5.jpg',
          '/images/case/psy-klimentevo/slider/image6.jpg',
          '/images/case/psy-klimentevo/slider/image7.jpg',
          '/images/case/psy-klimentevo/slider/image8.jpg',
          '/images/case/psy-klimentevo/slider/image9.jpg',
          '/images/case/psy-klimentevo/slider/image10.jpg',
          '/images/case/psy-klimentevo/slider/image11.jpg',
          '/images/case/psy-klimentevo/slider/image12.jpg',
          '/images/case/psy-klimentevo/slider/image13.jpg',
          '/images/case/psy-klimentevo/slider/image14.jpg',
          '/images/case/psy-klimentevo/slider/image15.jpg',
          '/images/case/psy-klimentevo/slider/image16.jpg',
          '/images/case/psy-klimentevo/slider/image17.jpg',
          '/images/case/psy-klimentevo/slider/image18.jpg',
          '/images/case/psy-klimentevo/slider/image19.jpg',
          '/images/case/psy-klimentevo/slider/image20.jpg',
          '/images/case/psy-klimentevo/slider/image21.jpg',
          '/images/case/psy-klimentevo/slider/image22.jpg'
        ]
      }
    },
    'rzhevskij-dom-internat': {
      heroSection: {
        title: 'Ржевский дом-интернат',
        image: {
          src: '/images/case/rzhevskij-dom-internat/covermax.jpg',
          alt: 'case2'
        },
        description: ''
      },
      bodySection: {
        title: '',
        text: ''
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/rzhevskij-dom-internat/slider/image1.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image2.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image3.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image4.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image5.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image6.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image7.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image8.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image9.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image10.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image11.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image12.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image13.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image14.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image15.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image16.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image17.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image18.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image19.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image20.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image21.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image22.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image23.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image24.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image25.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image26.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image27.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image28.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image29.jpg',
          '/images/case/rzhevskij-dom-internat/slider/image30.jpg'
        ]
      }
    },
    'psy-klimentevo-2': {
      heroSection: {
        title: 'Отделение сестринского ухода',
        image: {
          src: '/images/case/psy-klimentevo-2/covermax.jpg',
          alt: 'case2'
        },
        description: ''
      },
      bodySection: {
        title: '',
        text: ''
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/psy-klimentevo-2/slider/image1.jpg',
          '/images/case/psy-klimentevo-2/slider/image2.jpg',
          '/images/case/psy-klimentevo-2/slider/image3.jpg',
          '/images/case/psy-klimentevo-2/slider/image4.jpg',
          '/images/case/psy-klimentevo-2/slider/image5.jpg',
          '/images/case/psy-klimentevo-2/slider/image6.jpg',
          '/images/case/psy-klimentevo-2/slider/image7.jpg',
          '/images/case/psy-klimentevo-2/slider/image8.jpg',
          '/images/case/psy-klimentevo-2/slider/image9.jpg',
          '/images/case/psy-klimentevo-2/slider/image10.jpg',
          '/images/case/psy-klimentevo-2/slider/image11.jpg',
          '/images/case/psy-klimentevo-2/slider/image12.jpg',
          '/images/case/psy-klimentevo-2/slider/image13.jpg',
          '/images/case/psy-klimentevo-2/slider/image14.jpg',
          '/images/case/psy-klimentevo-2/slider/image15.jpg',
          '/images/case/psy-klimentevo-2/slider/image16.jpg',
          '/images/case/psy-klimentevo-2/slider/image17.jpg',
          '/images/case/psy-klimentevo-2/slider/image18.jpg',
          '/images/case/psy-klimentevo-2/slider/image19.jpg',
          '/images/case/psy-klimentevo-2/slider/image20.jpg',
          '/images/case/psy-klimentevo-2/slider/image21.jpg',
          '/images/case/psy-klimentevo-2/slider/image23.jpg',
          '/images/case/psy-klimentevo-2/slider/image24.jpg',
          '/images/case/psy-klimentevo-2/slider/image25.jpg',
          '/images/case/psy-klimentevo-2/slider/image26.jpg',
          '/images/case/psy-klimentevo-2/slider/image27.jpg',
          '/images/case/psy-klimentevo-2/slider/image28.jpg',
          '/images/case/psy-klimentevo-2/slider/image29.jpg',
          '/images/case/psy-klimentevo-2/slider/image30.jpg',
          '/images/case/psy-klimentevo-2/slider/image31.jpg',
          '/images/case/psy-klimentevo-2/slider/image32.jpg',
          '/images/case/psy-klimentevo-2/slider/image33.jpg',
          '/images/case/psy-klimentevo-2/slider/image34.jpg',
          '/images/case/psy-klimentevo-2/slider/image35.jpg',
          '/images/case/psy-klimentevo-2/slider/image36.jpg',
          '/images/case/psy-klimentevo-2/slider/image37.jpg'
        ]
      }
    },
    bereginya: {
      heroSection: {
        title: 'Берегиня',
        image: {
          src: '/images/case/bereginya/covermax.jpg',
          alt: 'case2'
        },
        description: ''
      },
      bodySection: {
        title: '',
        text: ''
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/bereginya/slider/image1.jpg',
          '/images/case/bereginya/slider/image2.jpg'
        ]
      }
    }
  }

  const currentCase = cases[slug]
</script>

<template>
  <main class="case">
    <case-hero-section v-if="!currentCase.videos" :settings="currentCase.heroSection" />
    <case-video-section v-else :videos="currentCase.videos" />
    <case-body-section :settings="currentCase.bodySection" class="body-section" />
    <case-gallery-section
      v-if="currentCase.gallerySection.images.length > 0"
      :settings="currentCase.gallerySection"
      class="gallery-section"
    />
    <subscribe-newsletter class="subscribe-section" />
  </main>
</template>

<style scoped lang="scss">
  .case {
    padding-block: 50px 150px;

    @media screen and (min-width: $breakpoint-lg) {
      padding-block: 100px 200px;
    }

    .body-section {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 160px;
      }
    }

    .gallery-section {
      margin-top: 130px;
    }

    .subscribe-section {
      margin-top: 100px;

      @media screen and (min-width: $breakpoint-lg) {
        margin-top: 200px;
      }
    }
  }
</style>
