(this['webpackJsonpreact-certification-2020'] =
  this['webpackJsonpreact-certification-2020'] || []).push([
  [0],
  {
    19: function (e, t, n) {
      e.exports = n(39);
    },
    24: function (e, t, n) {},
    33: function (e, t, n) {},
    34: function (e, t, n) {},
    36: function (e, t, n) {},
    37: function (e, t, n) {},
    38: function (e, t, n) {},
    39: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(15),
        l = n.n(c),
        o = n(6),
        u = n(1),
        i = n(9),
        s = function (e) {
          try {
            var t = window.localStorage.getItem(e);
            return JSON.parse(t);
          } catch (n) {
            return console.error('Error parsing storage item "'.concat(e, '".')), null;
          }
        },
        m = function (e, t) {
          window.localStorage.setItem(e, JSON.stringify(t));
        },
        f = r.a.createContext(null);
      function p() {
        var e = Object(a.useContext)(f);
        if (!e) throw new Error('Can\'t use "useAuth" without an AuthProvider!');
        return e;
      }
      var E = function (e) {
        var t = e.children,
          n = Object(a.useState)(!1),
          c = Object(i.a)(n, 2),
          l = c[0],
          o = c[1];
        Object(a.useEffect)(function () {
          var e = s('wa_cert_authenticated'),
            t = Boolean(e);
          o(t);
        }, []);
        var u = Object(a.useCallback)(function () {
            o(!0), m('wa_cert_authenticated', !0);
          }, []),
          p = Object(a.useCallback)(function () {
            o(!1), m('wa_cert_authenticated', !1);
          }, []);
        return r.a.createElement(
          f.Provider,
          { value: { login: u, logout: p, authenticated: l } },
          t
        );
      };
      n(24);
      var h = function () {
        var e = Object(u.g)(),
          t = Object(a.useRef)(null),
          n = p(),
          c = n.authenticated,
          l = n.logout;
        return r.a.createElement(
          'section',
          { className: 'homepage', ref: t },
          r.a.createElement('h1', null, 'Hello stranger!'),
          c
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement('h2', null, 'Good to have you back'),
                r.a.createElement(
                  'span',
                  null,
                  r.a.createElement(
                    o.b,
                    {
                      to: '/',
                      onClick: function (t) {
                        t.preventDefault(), l(), e.push('/');
                      },
                    },
                    '\u2190 logout'
                  ),
                  r.a.createElement('span', { className: 'separator' }),
                  r.a.createElement(
                    o.b,
                    { to: '/secret' },
                    'show me something cool \u2192'
                  )
                )
              )
            : r.a.createElement(o.b, { to: '/login' }, 'let me in \u2192')
        );
      };
      n(33);
      var d = function () {
        var e = p().login,
          t = Object(u.g)();
        return r.a.createElement(
          'section',
          { className: 'login' },
          r.a.createElement('h1', null, 'Welcome back!'),
          r.a.createElement(
            'form',
            {
              onSubmit: function (n) {
                n.preventDefault(), e(), t.push('/secret');
              },
              className: 'login-form',
            },
            r.a.createElement(
              'div',
              { className: 'form-group' },
              r.a.createElement(
                'label',
                { htmlFor: 'username' },
                r.a.createElement('strong', null, 'username '),
                r.a.createElement('input', { required: !0, type: 'text', id: 'username' })
              )
            ),
            r.a.createElement(
              'div',
              { className: 'form-group' },
              r.a.createElement(
                'label',
                { htmlFor: 'password' },
                r.a.createElement('strong', null, 'password '),
                r.a.createElement('input', {
                  required: !0,
                  type: 'password',
                  id: 'password',
                })
              )
            ),
            r.a.createElement('button', { type: 'submit' }, 'login')
          )
        );
      };
      n(34);
      var v = function () {
        return r.a.createElement(
          'section',
          { className: 'not-found' },
          r.a.createElement(o.b, { to: '/', className: 'home-link' }, 'home'),
          r.a.createElement('img', { src: '404.gif', alt: 'page not found' })
        );
      };
      var b = function () {
          return r.a.createElement(
            'section',
            null,
            r.a.createElement(
              'pre',
              null,
              'welcome, voyager...',
              r.a.createElement(o.b, { to: '/' }, ' \u2190 go back')
            ),
            r.a.createElement('iframe', {
              width: '800',
              height: '450',
              allowFullScreen: !0,
              frameBorder: '0',
              title: 'rick roll',
              src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1',
              allow:
                'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
            })
          );
        },
        g = n(18),
        w = ['children'];
      var y = function (e) {
          var t = e.children,
            n = Object(g.a)(e, w),
            a = p().authenticated;
          return r.a.createElement(
            u.b,
            Object.assign({}, n, {
              render: function () {
                return a ? t : r.a.createElement(u.a, { to: '/' });
              },
            })
          );
        },
        O = n(13),
        j = n.n(O),
        k = n(17);
      function N(e) {
        return Math.floor(Math.random() * e);
      }
      var x = 'http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=10';
      n(36);
      var S = function () {
        var e = (function () {
          var e = Object(a.useState)(null),
            t = Object(i.a)(e, 2),
            n = t[0],
            r = t[1];
          return (
            Object(a.useEffect)(function () {
              function e() {
                return (e = Object(k.a)(
                  j.a.mark(function e() {
                    var t, n, a, c;
                    return j.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), fetch(x);
                            case 3:
                              return (t = e.sent), (e.next = 6), t.json();
                            case 6:
                              (n = e.sent),
                                (a = N(n.length)),
                                (c = n[a]),
                                r(c.message),
                                (e.next = 15);
                              break;
                            case 12:
                              (e.prev = 12),
                                (e.t0 = e.catch(0)),
                                console.error('Bad fortune: ', e.t0);
                            case 15:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 12]]
                    );
                  })
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            }, []),
            { fortune: n }
          );
        })().fortune;
        return r.a.createElement('span', { className: 'fortune' }, e, ' ');
      };
      n(37);
      var C = function (e) {
        var t = e.children;
        return r.a.createElement('main', { className: 'container' }, t);
      };
      var _ = function () {
        return (
          Object(a.useLayoutEffect)(function () {
            var e = document.body;
            function t() {
              var t = N(100),
                n = N(100);
              e.style.setProperty('--bg-position', ''.concat(t, '% ').concat(n, '%'));
            }
            var n = setInterval(t, 3e3);
            return (
              e.addEventListener('click', t),
              function () {
                clearInterval(n), e.removeEventListener('click', t);
              }
            );
          }, []),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              E,
              null,
              r.a.createElement(
                C,
                null,
                r.a.createElement(
                  u.d,
                  null,
                  r.a.createElement(
                    u.b,
                    { exact: !0, path: '/' },
                    r.a.createElement(h, null)
                  ),
                  r.a.createElement(
                    u.b,
                    { exact: !0, path: '/login' },
                    r.a.createElement(d, null)
                  ),
                  r.a.createElement(
                    y,
                    { exact: !0, path: '/secret' },
                    r.a.createElement(b, null)
                  ),
                  r.a.createElement(u.b, { path: '*' }, r.a.createElement(v, null))
                ),
                r.a.createElement(S, null)
              )
            )
          )
        );
      };
      n(38);
      l.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(_, null)),
        document.getElementById('root')
      );
    },
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.1af29b7f.chunk.js.map
