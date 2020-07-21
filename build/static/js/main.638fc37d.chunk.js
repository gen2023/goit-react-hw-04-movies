(this['webpackJsonpgoit-react-hw-04-movies'] =
  this['webpackJsonpgoit-react-hw-04-movies'] || []).push([
  [1],
  {
    16: function (e, t, a) {
      'use strict';
      a.d(t, 'a', function () {
        return r;
      });
      var n = a(0),
        c = a.n(n),
        l = a(18),
        o = a.n(l),
        r = function () {
          return c.a.createElement(o.a, {
            type: 'ThreeDots',
            color: '#00BFFF',
            height: 100,
            width: 100,
            timeout: 3e3,
          });
        };
    },
    19: function (e, t, a) {
      e.exports = a(51);
    },
    24: function (e, t, a) {},
    49: function (e, t, a) {},
    51: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        c = a.n(n),
        l = a(14),
        o = a.n(l),
        r = a(2),
        i = function () {
          return c.a.createElement('h1', null, '404 - page not found');
        },
        m = a(9),
        s = a(7),
        u =
          (a(24),
          function () {
            return c.a.createElement(
              'nav',
              { className: 'nav' },
              c.a.createElement(
                m.c,
                {
                  exact: !0,
                  to: s.a.homePage,
                  className: 'nav_link',
                  activeClassName: 'active',
                },
                'Home',
              ),
              c.a.createElement(
                m.c,
                {
                  to: s.a.movies,
                  className: 'nav_link',
                  activeClassName: 'active',
                },
                'Movies',
              ),
            );
          }),
        v = function () {
          return c.a.createElement(
            'header',
            { className: 'AppBar' },
            c.a.createElement(u, null),
          );
        },
        h = a(16),
        E =
          (a(49),
          a(50),
          Object(n.lazy)(function () {
            return Promise.all([a.e(0), a.e(6)]).then(a.bind(null, 93));
          })),
        p = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(5)]).then(a.bind(null, 91));
        }),
        f = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(4)]).then(a.bind(null, 92));
        }),
        d = function () {
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement(v, null),
            c.a.createElement(
              n.Suspense,
              { fallback: c.a.createElement(h.a, null) },
              c.a.createElement(
                r.c,
                null,
                c.a.createElement(r.a, {
                  exact: !0,
                  path: s.a.homePage,
                  component: E,
                }),
                c.a.createElement(r.a, {
                  path: s.a.moviesDetails,
                  component: f,
                }),
                c.a.createElement(r.a, { path: s.a.movies, component: p }),
                c.a.createElement(r.a, { component: i }),
              ),
            ),
          );
        };
      o.a.render(
        c.a.createElement(
          c.a.StrictMode,
          null,
          c.a.createElement(m.a, null, c.a.createElement(d, null)),
        ),
        document.getElementById('root'),
      );
    },
    7: function (e, t, a) {
      'use strict';
      t.a = {
        homePage: '/',
        movies: '/movies',
        moviesDetails: '/movies/:movieId',
        cast: '/movies/:movieId/cast',
        reviews: '/movies/:movieId/reviews',
      };
    },
  },
  [[19, 2, 3]],
]);
//# sourceMappingURL=main.638fc37d.chunk.js.map
