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
          src: '/images/case/repair-1/img.jpg',
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
          '/images/case/repair-1/bathroom-before.jpg',
          '/images/case/repair-1/bathroom-after.jpg',
          '/images/case/repair-1/window-before.jpg',
          '/images/case/repair-1/window-after.jpg'
        ]
      }
    },
    'remont-2': {
      heroSection: {
        title: 'Ремонт №2',
        image: {
          src: '/images/case/repair-2/title.jpg',
          alt: 'case2'
        },
        description: 'Вера Евгеньевна'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Хотим немного подробнее рассказать о процессе и людях,которые в нем принимали участие.</br></br>' +
          'Наши волонтёры Катя и Маша попали в дом к Бабушке Вере,во время развоза продовольственных коробок #ДоброДоДвери с гуманитарной помощью по Тверской области.Ее адрес в г.Кашин был в списке от соцзащиты.Девочки сразу обратили внимание на плохие условия для жизни и захотели помочь.Мы узнали все о родственниках и жизненной ситуации бабушки и решили к Новому Году отремонтировать кухню и заменить мебель.</br></br>' +
          'Катя и Маша сами организовали сбор средств в помощь нашему сбору от фонда и совместными усилиями нам удалось все быстро оплатить и купить.Мы нашли прекрасного и ответственного мастера Илью @ilya_anenkov, который живёт неподалёку и который с большой душой сделал ремонт за 3,5 недели. Для бабушки Веры Евгеньевны мы отремонтировали и утеплили кухню, заменили старую посуду, мебель, плиту, телевизор, а также шкафы в прихожей!</br></br>' +
          'Кухня стала очень светлой и просторной.</br></br>' +
          'А ещё,нам кажется,что Вера Евгеньевна тоже как-то расцвела и помолодела!И теперь ещё долгие годы будет готовить вкусные обеды на новой плите!</br></br>' +
          'Это отличный пример участия волонтёров в проекте фонда от и до! Мы и Вера Евгеньевна очень довольны результатом и благодарим всех,кто поучаствовал в сборе и помог нам осуществить задуманное!Вы-настоящие люди! Спасибо! #DariNadezhdu'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-2/img-1.jpg',
          '/images/case/repair-2/img-2.jpg',
          '/images/case/repair-2/img-3.jpg',
          '/images/case/repair-2/img-4.jpg',
          '/images/case/repair-2/img-5.jpg',
          '/images/case/repair-2/img-6.jpg',
          '/images/case/repair-2/img-7.jpg',
          '/images/case/repair-2/img-8.jpeg',
          '/images/case/repair-2/img-9.jpeg',
          '/images/case/repair-2/img-10.jpeg',
          '/images/case/repair-2/img-11.jpeg',
          '/images/case/repair-2/img-12.jpeg',
          '/images/case/repair-2/img-13.jpeg',
          '/images/case/repair-2/img-14.jpeg',
          '/images/case/repair-2/img-15.jpeg'
        ]
      }
    },
    'remont-3': {
      heroSection: {
        title: 'Ремонт №3',
        image: {
          src: '/images/case/repair-3/title.jpg',
          alt: 'case2'
        },
        description: 'Римма Сергеевна Жданова️'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Римма Сергеевна Жданова️ - одиноко проживающая пенсионерка.12 лет назад похоронила мужа.Есть сын, который живет и работает в Туле ,но не имеет возможности сделать ремонт матери из-за финансовых трудностей..</br></br>' +
          '30 лет живет в доме, в котором нет никаких условий.Дом холодный без отопления и частично без света, туалет на улице, стены закоптились от неисправной печи и пол в некоторых местах проваливается.</br></br>' +
          'Р.С. очень хотела привести свой дом в порядок, обновить ремонт и сделать его чистым и уютным!В первый приезд бабушка встретила нас в тёплой дубленке, которую зимой не снимает, тк боится топить дом, чтобы не задохнуться от копоти.</br></br>' +
          'Спустя пару месяцев мы разобрались с печкой, доделали проводку, сделали полностью ремонт кухни, заменили мебель, туалет и поставили забор.</br></br>' +
          'Делимся с вами результатами проделанной работы!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-3/img-1.jpg',
          '/images/case/repair-3/img-2.jpg',
          '/images/case/repair-3/img-3.jpg',
          '/images/case/repair-3/img-4.jpg',
          '/images/case/repair-3/img-5.jpg',
          '/images/case/repair-3/img-6.jpg'
        ]
      }
    },
    'remont-4': {
      heroSection: {
        title: 'Ремонт №4',
        image: {
          src: '/images/case/repair-4/title.jpeg',
          alt: 'case2'
        },
        description: 'Любовь Михайловна'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Любовь Михайловна - одинокая пенсионерка, которая осталась без поддержки семьи после получения инвалидности, имеет несколько серьезных заболеваний: сахарный диабет 2-й тип тяжелой формы, заболевание щитовидной железы и сердца, поэтому половина пенсии уходит на лекарства, часть на коммунальные и жилищные услуги, а что остается- на продукты.</br></br>' +
          'Собственными силами сделать ремонт в квартире не было возможности, поэтому мы решили помочь нашей подопечной улучшить жилищные условия!</br></br>' +
          'Благодаря собранным средствам, мы закончили четвертый и самый крупный на данный момент ремонт! Работы проводились во всех комнатах в квартире (жилая комната, кухня, санузел и ванная комната), также мы заменили некоторую мебель, кухонный гарнитур и бытовую технику.'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-4/img-1.jpg',
          '/images/case/repair-4/img-2.jpg',
          '/images/case/repair-4/img-3.jpg',
          '/images/case/repair-4/img-4.jpg',
          '/images/case/repair-4/img-5.jpeg',
          '/images/case/repair-4/img-6.jpg',
          '/images/case/repair-4/img-7.jpg',
          '/images/case/repair-4/img-8.jpg',
          '/images/case/repair-4/img-9.jpg',
          '/images/case/repair-4/img-10.jpg',
          '/images/case/repair-4/img-11.jpg',
          '/images/case/repair-4/img-12.jpg',
          '/images/case/repair-4/img-13.jpg',
          '/images/case/repair-4/img-14.jpg',
          '/images/case/repair-4/img-15.jpeg',
          '/images/case/repair-4/img-16.jpeg',
          '/images/case/repair-4/img-17.jpeg',
          '/images/case/repair-4/img-18.jpeg',
          '/images/case/repair-4/img-19.jpeg',
          '/images/case/repair-4/img-20.jpeg',
          '/images/case/repair-4/img-21.jpeg',
          '/images/case/repair-4/img-22.jpeg',
          '/images/case/repair-4/img-23.jpeg',
          '/images/case/repair-4/img-24.jpeg',
          '/images/case/repair-4/img-25.jpeg',
          '/images/case/repair-4/img-26.jpeg',
          '/images/case/repair-4/img-27.jpeg',
          '/images/case/repair-4/img-28.jpeg',
          '/images/case/repair-4/img-29.jpeg',
          '/images/case/repair-4/img-30.jpeg'
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
        title: '',
        text: ''
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-5/img-1.jpg',
          '/images/case/repair-5/img-2.jpg',
          '/images/case/repair-5/img-3.jpg',
          '/images/case/repair-5/img-4.jpg',
          '/images/case/repair-5/img-5.jpg',
          '/images/case/repair-5/img-6.jpg',
          '/images/case/repair-5/img-7.jpg'
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
          'Наверное,это самый противоречивый ремонт из всех,сделанных нами.Во-первых,потому что на видео мужчина,во-вторых выглядит он не очень то и старым и вполне мог бы ещё заработать на ремонт или хотя бы убраться в квартире.Но если капнуть глубже,если не судить человека по обложке,то каждый сострадающий человек поймёт наш выбор.</br></br>' +
          'Пётр Анатольевич инвалид 2-й группы, инфарктник с рассеянным склерозом и кучей сопутствующих болезней.До получения инвалидности он работал и обеспечивал себя и семью.Сейчас здоровье не позволяет, да и никто не берет такого сотрудника.Все родственники умерли, детьми обзавестись не успел, так как на протяжении многих лет ухаживал за больной мамой.</br></br>' +
          'П.А. не лентяй и не алкоголик.Все время мастерит что-то, развивая моторику.Муниципальное жильё в таком состоянии ему досталось, как малоимущему гражданину, от государства ещё в 2017 году.До него здесь жили люди, которые довели квартиру до такого состояния.</br></br>' +
          'Если присмотреться, то все вещи расставлены аккуратно, нет хлама и завалов. П.А. с первого дня просил большой шкаф, чтобы сложить туда все все свой вещи и освободить пространство. Из-за неисправной вытяжки на стенах скапливалась копоть. Купленные им самим новые обои давно лежали наготове, но поклеить их не представлялось возможным по состоянию здоровья, да и как на пособие в 8.000₽ можно нанять рабочих? Когда из этих денег надо покупать лекарства, кормить себя и кота.</br></br>' +
          'Мы захотели помочь, хотя понимали, что словим много хейта. Но средства на этот ремонт были выделены одним нашим крупным спонсором со словами «потратить куда считаем нужным». Мы считаем нужным дать человеку шанс. Помочь поверить в себя и в достойную жизнь, вне зависимости от пола, внешнего вида или от мнения других людей.</br></br>' +
          'Всем, кто разделяет нашу позицию,спасибо❤'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-6/img-1.jpg',
          '/images/case/repair-6/img-2.jpg',
          '/images/case/repair-6/img-3.png'
        ]
      }
    },
    'remont-7': {
      heroSection: {
        title: 'Ремонт №7',
        video: '/videos/vasilisenko.mp4',
        description: 'Васильченко Надежды Петровны'
      },
      bodySection: {
        title: 'Чем мы помогли?',
        text:
          'Закончили восьмой благотворительный ремонт!</br></br>' +
          'Новая кухня для Васильченко Надежды Петровны 1925 года рождения, участника Великой Отечественной Войны.</br></br>' +
          'Прошла войну с мая 1943 года от Ст.Лиски до ноября 1945 года.Победу встретила на станции Токшони- Будапешт .Служила в 96 ОЗАД (Отдельный Зенитно- Артиллерийский Дивизион)связист, телефонист.</br></br>' +
          'Спасибо друзьям фонда, которые поддержали сбор и быстро исполнили желание Ветерана! Получилась очень уютная и светлая кухня.'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-7/img-1.jpg',
          '/images/case/repair-7/img-2.png',
          '/images/case/repair-7/img-3.png'
        ]
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
          'Гоше 41 год,его диагноз -ДЦП,гидроцефалия.Живет в Санкт-Петербурге.Самый добродушный парень в городе.Он всегда улыбчив и готов помочь каждому, кто к нему обратится.Гоша лишен дееспособности.Его опекун пожилой отец Сергей Александрович.</br></br>' +
          'Сергей Александрович – главная и единственная опора, поскольку родная мама Гоши умерла от рака.Отец много лет мечтал сделать ремонт в квартире своего сына, но финансовые возможности и состояние здоровья не позволяли ему осуществить эту задумку. Вся пенсия идет на уход за больной женой, мачехой Гоши, а также на обеспечение и помощь сыну.</br></br>' +
          'Единственной социальной жизнью Гоши являются посещения реабилитационного центра рядом с его домом. Но руководство запретило ему приходить туда из-за опасности того,что он принесет в центр клопов и других насекомых из своей квартиры.Это лишало его социальной жизни и общения с людьми.Он был вынужден проводить большую часть времени в четырех стенах своей старенькой квартиры. Единственным развлечением стали лишь короткие прогулки во дворе и компьютер.</br></br>' +
          'В наш благотворительный фонд обратился сосед и одноклассник Гоши – Алексей. Он рассказал нам о трудностях, с которыми сталкивается Гоша, и попросил помощи. Мы не могли остаться равнодушными к этой истории и очень рады, что вы тоже поддержали наш выбор и вместе мы смогли отремонтировать Гоше квартиру!</br></br>' +
          'Отчетное видео получилось,немного,в формате программы «Квартирный вопрос»,но нам очень хотелось запечатлеть первую реакцию Гоши на обновленное жилье.Он полтора месяца жил у друзей в соседнем доме и принимал участие в выборе отделочных материалов и мебели,но не видел сам процесс ремонта.</br></br>' +
          '«Мы его спасли» - говорит Алексей,который помогал и контролировал весь процесс ремонта.Для Гоши теперь открыты все двери в реабилитационные центры,санатории и любые общественные учреждения,в которых он захочет побывать.</br></br>' +
          'Больше никто не скажет ему,что он может принести из квартиры каких-то паразитов.Проведена полная неоднократная дезинфекция, заделаны все дыры и новое абсолютно всё!</br></br>' +
          'Когда чисто,уютно и достойно в доме,то на душе спокойно.Появляется вера в себя,в свои силы и желание жить полной жизнью.Всем,кто принимал участие большое человеческое СПАСИБО и низкий поклон!'
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/repair-8/img-1.jpg',
          '/images/case/repair-8/img-2.jpg',
          '/images/case/repair-8/img-3.jpg',
          '/images/case/repair-8/img-4.jpg',
          '/images/case/repair-8/img-5.jpg',
          '/images/case/repair-8/img-6.jpg',
          '/images/case/repair-8/img-7.jpg',
          '/images/case/repair-8/img-8.jpg',
          '/images/case/repair-8/img-9.jpg',
          '/images/case/repair-8/img-10.jpg',
          '/images/case/repair-8/img-11.jpg',
          '/images/case/repair-8/img-12.jpg',
          '/images/case/repair-8/img-13.jpg',
          '/images/case/repair-8/img-14.jpg'
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
        title: 'Чем мы помогли?',
        text: '</br></br>' + '</br></br>' + ''
      },
      gallerySection: {
        title: 'Галерея',
        images: [
          '/images/case/cozy-old-age/image1.png',
          '/images/case/cozy-old-age/image2.png',
          '/images/case/cozy-old-age/image3.png',
          '/images/case/cozy-old-age/image4.png',
          '/images/case/cozy-old-age/image5.png',
          '/images/case/cozy-old-age/image6.png',
          '/images/case/cozy-old-age/image7.png',
          '/images/case/cozy-old-age/image8.png',
          '/images/case/cozy-old-age/image9.png',
          '/images/case/cozy-old-age/image10.png'
        ]
      }
    },
    'rzhevskij-dom-internat': {
      heroSection: {
        title: 'Пожилым людям №1',
        image: {
          src: '/images/case/rzhevskij-dom-internat.png',
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
          '/images/case/rzhevskij-dom-internat/image1.png',
          '/images/case/rzhevskij-dom-internat/image2.png',
          '/images/case/rzhevskij-dom-internat/image3.png',
          '/images/case/rzhevskij-dom-internat/image4.png'
        ]
      }
    },
    'psy-klimentevo-2': {
      heroSection: {
        title: 'Пожилым людям №2',
        image: {
          src: '/images/case/cozy-old-age/case1.png',
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
          '/images/case/cozy-old-age/image1.png',
          '/images/case/cozy-old-age/image2.png',
          '/images/case/cozy-old-age/image3.png',
          '/images/case/cozy-old-age/image4.png',
          '/images/case/cozy-old-age/image5.png',
          '/images/case/cozy-old-age/image6.png',
          '/images/case/cozy-old-age/image7.png',
          '/images/case/cozy-old-age/image8.png',
          '/images/case/cozy-old-age/image9.png',
          '/images/case/cozy-old-age/image10.png'
        ]
      }
    },
    bereginya: {
      heroSection: {
        title: 'Пожилым людям №3',
        image: {
          src: '/images/case/bereginya.png',
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
          '/images/case/bereginya/image1.png',
          '/images/case/bereginya/image2.png',
          '/images/case/bereginya/image3.png'
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
    <case-gallery-section :settings="currentCase.gallerySection" class="gallery-section" />
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
