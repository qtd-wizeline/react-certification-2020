(this['webpackJsonpreact-certification-2020'] =
  this['webpackJsonpreact-certification-2020'] || []).push([
  [0],
  {
    66: function (e, i, t) {
      e.exports = t(80);
    },
    71: function (e, i, t) {},
    75: function (e, i, t) {},
    76: function (e, i, t) {},
    77: function (e, i, t) {},
    78: function (e, i, t) {},
    80: function (e, i, t) {
      'use strict';
      t.r(i);
      var n = t(0),
        a = t.n(n),
        l = t(24),
        h = t.n(l),
        o = t(32),
        u = t(84),
        d = t(87),
        s = t(86),
        c = t(63),
        m = t(88);
      t(71);
      function r() {
        var e = Object(n.useState)(null),
          i = Object(o.a)(e, 2),
          t = i[0],
          l = i[1],
          h = Object(n.useState)(!1),
          r = Object(o.a)(h, 2),
          g = r[0],
          p = r[1];
        return a.a.createElement(
          a.a.Fragment,
          null,
          a.a.createElement(
            'header',
            { className: 'main-header' },
            a.a.createElement(
              'div',
              null,
              a.a.createElement(
                'button',
                { type: 'submit', className: 'toggle-button' },
                a.a.createElement('span', { className: 'toggle-button__bar' }),
                a.a.createElement('span', { className: 'toggle-button__bar' }),
                a.a.createElement('span', { className: 'toggle-button__bar' })
              ),
              a.a.createElement(u.a, {
                placeholder: 'Buscar',
                value: t,
                onChange: function (e) {
                  return l(e.target.value);
                },
                prefix: a.a.createElement(c.a, null),
              })
            ),
            a.a.createElement(
              'nav',
              { className: 'main-nav' },
              a.a.createElement(
                'ul',
                { className: 'main-nav__items' },
                a.a.createElement(
                  'li',
                  { className: 'main-nav__item' },
                  a.a.createElement(d.a, {
                    checked: g,
                    onChange: p,
                    style: { marginRight: '10px' },
                  }),
                  a.a.createElement('p', null, 'Dark mode')
                ),
                a.a.createElement(
                  'li',
                  { className: 'main-nav__item' },
                  a.a.createElement(s.a, { icon: a.a.createElement(m.a, null) })
                )
              )
            )
          )
        );
      }
      var g = t(83),
        p = (t(75), g.a.Meta);
      function v(e) {
        var i = e.item,
          t = Object(n.useState)(i),
          l = Object(o.a)(t, 1)[0];
        return a.a.createElement(
          'div',
          { className: 'video-card' },
          a.a.createElement(
            g.a,
            {
              hoverable: !0,
              style: { width: 345 },
              cover: a.a.createElement('img', {
                alt: l.snippet.title,
                src: l.snippet.thumbnails.medium.url,
                style: { maxHeight: '194px', width: 'auto', margin: 'auto' },
              }),
            },
            a.a.createElement(p, {
              title: l.snippet.title,
              description: l.snippet.description,
            })
          )
        );
      }
      var f = {
        kind: 'youtube#searchListResponse',
        etag: 'LRviZfd_p3HDDD2uBk5Qv7zaEQU',
        nextPageToken: 'CBkQAA',
        regionCode: 'MX',
        pageInfo: { totalResults: 2323, resultsPerPage: 25 },
        items: [
          {
            kind: 'youtube#searchResult',
            etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
            id: { kind: 'youtube#channel', channelId: 'UCPGzT4wecuWM0BH9mPiulXg' },
            snippet: {
              publishedAt: '2014-09-27T01:39:18Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline',
              description:
                "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
              thumbnails: {
                default: {
                  url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
                },
                medium: {
                  url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
                },
                high: {
                  url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'upcoming',
              publishTime: '2014-09-27T01:39:18Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
            id: { kind: 'youtube#video', videoId: 'nmXMgqjQzls' },
            snippet: {
              publishedAt: '2019-09-30T23:54:32Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Video Tour | Welcome to Wizeline Guadalajara',
              description:
                'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-09-30T23:54:32Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '7VY0u60YdqamyHOCAufd7r6qTsQ',
            id: { kind: 'youtube#video', videoId: 'HYyRZiwBWc8' },
            snippet: {
              publishedAt: '2019-04-18T18:48:04Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
              description:
                'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-04-18T18:48:04Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'by0t_nrT2TB-IQkQpgSWUVUwpKI',
            id: { kind: 'youtube#video', videoId: 'Po3VwR_NNGk' },
            snippet: {
              publishedAt: '2019-03-05T03:52:55Z',
              channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
              title: 'Wizeline hace sentir a empleados como en casa',
              description:
                'En el 2014, Bismarck fund\xf3 Wizeline, compa\xf1\xeda tecnol\xf3gica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'El Economista TV',
              liveBroadcastContent: 'none',
              publishTime: '2019-03-05T03:52:55Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '9-Ag8hUNYBLTjuli6eECa5GXV1Y',
            id: { kind: 'youtube#video', videoId: '7PtYNO6g7eI' },
            snippet: {
              publishedAt: '2019-04-12T20:00:45Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'We Are Wizeline',
              description:
                'Engineering a better tomorrow. Wizeline is a global software development company that helps its clients solve their biggest challenges with design and ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/7PtYNO6g7eI/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-04-12T20:00:45Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'pVQGVs72zHvpgl0ewNKX2DTOH6w',
            id: { kind: 'youtube#video', videoId: 'YuW0CE_8i1I' },
            snippet: {
              publishedAt: '2018-12-13T21:51:39Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline Thrives in Mexico City',
              description:
                'Our vibrant Mexico City office is home to agile software engineers, talented UX designers, and brilliant data scientists. Learn about the rich history of Mexico City.',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/YuW0CE_8i1I/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2018-12-13T21:51:39Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'HlSqzTYW4HGFDNAOPCs6nIRXdq8',
            id: { kind: 'youtube#video', videoId: 'CHzlSGRvWPs' },
            snippet: {
              publishedAt: '2017-03-08T22:41:43Z',
              channelId: 'UCUsm-fannqOY02PNN67C0KA',
              title: 'Wizeline',
              description:
                'El plan de Wizeline, una empresa de inteligencia artificial, para ayudar a crecer la comunidad de ciencia de datos en CDMX y todo el pa\xeds, a trav\xe9s de cursos ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/CHzlSGRvWPs/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Noticieros Televisa',
              liveBroadcastContent: 'none',
              publishTime: '2017-03-08T22:41:43Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'S1Ewc2IMjGC1VE5mH3AryZ43IPQ',
            id: { kind: 'youtube#video', videoId: 'cjO2fJy8asM' },
            snippet: {
              publishedAt: '2018-09-25T17:45:19Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'A Day in the Life of an Engineering Manager at Wizeline',
              description:
                "Fernando Espinoza shares his experience working as an engineering manager at Wizeline and mentoring other engineers. Learn about Fernando's passions ...",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/cjO2fJy8asM/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/cjO2fJy8asM/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/cjO2fJy8asM/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2018-09-25T17:45:19Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'jZZv6Ufu43kg1KzFlBOWDVKfPkY',
            id: { kind: 'youtube#video', videoId: 'zClI9OjgKXM' },
            snippet: {
              publishedAt: '2020-04-24T20:22:17Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline Technical Writing Academy | Featuring Eduardo Ocejo',
              description: '',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/zClI9OjgKXM/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/zClI9OjgKXM/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/zClI9OjgKXM/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2020-04-24T20:22:17Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'z5o2tIUROuWNZU5-1pzMPjoqQC8',
            id: { kind: 'youtube#video', videoId: '8bz9R61oY5o' },
            snippet: {
              publishedAt: '2019-09-26T15:28:46Z',
              channelId: 'UCUP6qv-_EIL0hwTsJaKYnvw',
              title: 'Silicon Valley en M\xe9xico',
              description:
                'Empresas de Silicon Valley buscan establecerse en M\xe9xico por el gran talento que hay en nuestro pa\xeds. Es una investigaci\xf3n de Roberto Dom\xednguez.',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/8bz9R61oY5o/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/8bz9R61oY5o/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/8bz9R61oY5o/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Azteca Noticias',
              liveBroadcastContent: 'none',
              publishTime: '2019-09-26T15:28:46Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'Q4bqsw7kAYe6PV1sh494TQ-UJ8c',
            id: { kind: 'youtube#video', videoId: '7dJFraOqcoQ' },
            snippet: {
              publishedAt: '2019-07-02T17:40:20Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Why Wizeline? featuring Juan Pablo Villa in Mexico City',
              description:
                'Juan Pablo, known as Gianpa at Wizeline, is a software engineer in our Mexico City office. Gianpa focuses on Android apps, is an integral part of our culture, ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/7dJFraOqcoQ/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/7dJFraOqcoQ/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/7dJFraOqcoQ/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-07-02T17:40:20Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'cXSMV8jX2lv1ue3UUnbW3xCmIU4',
            id: { kind: 'youtube#video', videoId: 'w-Qwc_XJrWc' },
            snippet: {
              publishedAt: '2020-12-31T16:26:44Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline&#39;s 2020 Year in Review',
              description:
                "There's no doubt that 2020 has been an unprecedented year. However, amidst all the chaos, we achieved remarkable growth in various areas of our business.",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/w-Qwc_XJrWc/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/w-Qwc_XJrWc/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/w-Qwc_XJrWc/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2020-12-31T16:26:44Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'j9q9-dcRhTRDr0MCkJUMKdYt7u8',
            id: { kind: 'youtube#video', videoId: 'rjir_cHTl5w' },
            snippet: {
              publishedAt: '2019-04-29T20:37:26Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Why Wizeline? featuring Hugo Lopez in Mexico City',
              description: '',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/rjir_cHTl5w/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/rjir_cHTl5w/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/rjir_cHTl5w/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-04-29T20:37:26Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'MYfT5K8aZNvalrm2RR_HtylFffc',
            id: { kind: 'youtube#video', videoId: 'DcFK1x3NHGY' },
            snippet: {
              publishedAt: '2016-09-01T18:02:11Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Why Wizeline? (We&#39;re Hiring in Mexico!)',
              description:
                "A quick look at why people join Wizeline, what motivates us as a team and what it's like to work in our Guadalajara office. Learn more and apply here: ...",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/DcFK1x3NHGY/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2016-09-01T18:02:11Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '8dssV5QkZWEMmoo4DIq0k27aoIg',
            id: { kind: 'youtube#video', videoId: '3BzYWAqZgFw' },
            snippet: {
              publishedAt: '2019-07-02T17:45:28Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Why Wizeline? featuring Oswaldo Herrera in Mexico City',
              description:
                "Oswaldo is a software engineering in Wizeline's Mexico City office. He joined Wizeline because of the camaraderie and deep sense of commitment of our teams.",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/3BzYWAqZgFw/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/3BzYWAqZgFw/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/3BzYWAqZgFw/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-07-02T17:45:28Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'FMbfPlflDyPx4UgcA42igb97xlk',
            id: { kind: 'youtube#video', videoId: '3KVFmT-Tp2w' },
            snippet: {
              publishedAt: '2019-02-11T17:55:19Z',
              channelId: 'UCd6MoB9NC6uYN2grvUNT-Zg',
              title: 'Caso de \xc9xito AWS: Wizeline [Spanish]',
              description:
                'Central de socios de APN - https://amzn.to/2S7tIXM Fundada en 2014, Wizeline es una compa\xf1\xeda joven e innovadora que naci\xf3 en la nube para ofrecer soporte ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/3KVFmT-Tp2w/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/3KVFmT-Tp2w/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/3KVFmT-Tp2w/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Amazon Web Services',
              liveBroadcastContent: 'none',
              publishTime: '2019-02-11T17:55:19Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '0ww3Jk-j4d4TMsFNL213EhE0gGg',
            id: { kind: 'youtube#video', videoId: 'aKuPmY2m1Ro' },
            snippet: {
              publishedAt: '2019-12-27T20:47:29Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline&#39;s 2019 Year in Review',
              description: '',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/aKuPmY2m1Ro/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-12-27T20:47:29Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '8q-ajUMnXZm4gQzfSIiyrG2tA7A',
            id: { kind: 'youtube#video', videoId: '24sTHUyWhRM' },
            snippet: {
              publishedAt: '2016-10-05T00:03:32Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: '[1 of 2] Wizeline CEO shares career lessons from Google',
              description:
                'Founder & CEO Bismarck Lepe on growth opportunities at Wizeline and his career-path experience as an early Google employee. Join our team!',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/24sTHUyWhRM/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/24sTHUyWhRM/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/24sTHUyWhRM/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2016-10-05T00:03:32Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '4QA9Eisz9-HncD9EENUm0LV7hXI',
            id: { kind: 'youtube#video', videoId: 'IxGc1gSqB3A' },
            snippet: {
              publishedAt: '2021-02-04T17:45:11Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Wizeline Data Engineering featuring Tania Reyes',
              description:
                'Tania discovered her interest in Big Data while working at Wizeline and took Wizeline Academy courses to skill up and join the data team. Now, she works on ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/IxGc1gSqB3A/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2021-02-04T17:45:11Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '5_OftJlDpcfykudIpO7nn92Pq6s',
            id: { kind: 'youtube#video', videoId: 'NP1gAnbeNno' },
            snippet: {
              publishedAt: '2019-11-12T20:45:18Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title:
                'Wizeline Quere\u0301taro | Mexico&#39;s New Knowledge Economy (We&#39;re hiring!)',
              description:
                'A small but mighty (and growing) team, the Queretaro crew has taken ownership of growing the office and brand, speaking at university events, hosting tech ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/NP1gAnbeNno/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/NP1gAnbeNno/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/NP1gAnbeNno/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-11-12T20:45:18Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: '0XmhUGwmJNRilJR1S6VgOmdO9ho',
            id: { kind: 'youtube#video', videoId: 'F6Krwu6lUc8' },
            snippet: {
              publishedAt: '2020-10-23T04:15:31Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Miriam Godinez | Women in Leadership at Wizeline',
              description:
                "Science and technology always caught Miriam's attention. One of her ultimate goals as a Senior Engineer Manager and Lead from the Mobile Team at Wizeline ...",
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/F6Krwu6lUc8/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/F6Krwu6lUc8/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/F6Krwu6lUc8/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2020-10-23T04:15:31Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'mM9qAwvNhFKGUv6mCIamuWVo0NE',
            id: { kind: 'youtube#video', videoId: 'RFq7gfvhtCk' },
            snippet: {
              publishedAt: '2020-05-23T00:11:23Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Welcome Back to Wizeline Vietnam | Extended Version',
              description:
                'Thanks to swift government action, the COVID-19 situation in Vietnam has reached a point where businesses are able to return to work and reopen offices.',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/RFq7gfvhtCk/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2020-05-23T00:11:23Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'sVz5aNJZHehOf7qJCTLOLh1V40M',
            id: { kind: 'youtube#video', videoId: 'E1Vq_A3WKK8' },
            snippet: {
              publishedAt: '2017-12-09T18:46:07Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'How does Wizeline work?',
              description:
                'Wizeline builds teams with a mix of technical and non-technical talent to deliver better products, faster. Learn more about our consulting services: ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/E1Vq_A3WKK8/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2017-12-09T18:46:07Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'kiG9Z-CXE-mbZVBeom4qLurWb4w',
            id: { kind: 'youtube#video', videoId: 'ZmkslANDz0Q' },
            snippet: {
              publishedAt: '2019-12-18T19:22:44Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: '12 Wishes from Wizeline | Happy Holidays 2019',
              description: '',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/ZmkslANDz0Q/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/ZmkslANDz0Q/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/ZmkslANDz0Q/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2019-12-18T19:22:44Z',
            },
          },
          {
            kind: 'youtube#searchResult',
            etag: 'bzZZYb96wT_IQHNp5sXm3VDUbXA',
            id: { kind: 'youtube#video', videoId: 'Nss3EmTDD3s' },
            snippet: {
              publishedAt: '2017-12-08T18:13:27Z',
              channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
              title: 'Why Wizeline?',
              description:
                'Hear from our employees directly about what excites them about their roles here at Wizeline. Wizeline wants to hire the best and the brightest to accelerate their ...',
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/default.jpg',
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/mqdefault.jpg',
                  width: 320,
                  height: 180,
                },
                high: {
                  url: 'https://i.ytimg.com/vi/Nss3EmTDD3s/hqdefault.jpg',
                  width: 480,
                  height: 360,
                },
              },
              channelTitle: 'Wizeline',
              liveBroadcastContent: 'none',
              publishTime: '2017-12-08T18:13:27Z',
            },
          },
        ],
      };
      t(76);
      function b() {
        var e = Object(n.useState)([]),
          i = Object(o.a)(e, 2),
          t = i[0],
          l = i[1];
        return (
          Object(n.useEffect)(function () {
            l(f.items);
          }, []),
          a.a.createElement(
            'div',
            { className: 'main' },
            a.a.createElement('h1', null, 'Welcome to the Challenge!'),
            a.a.createElement(
              'div',
              { className: 'video-container' },
              t.map(function (e) {
                return a.a.createElement(v, { item: e, key: e.etag });
              })
            )
          )
        );
      }
      t(77);
      var w = function () {
        return a.a.createElement(
          'div',
          { className: 'homepage' },
          a.a.createElement(r, null),
          a.a.createElement(b, null)
        );
      };
      var y = function () {
        return a.a.createElement(w, null);
      };
      t(78), t(79);
      h.a.render(
        a.a.createElement(a.a.StrictMode, null, a.a.createElement(y, null)),
        document.getElementById('root')
      );
    },
  },
  [[66, 1, 2]],
]);
//# sourceMappingURL=main.f52726d5.chunk.js.map
