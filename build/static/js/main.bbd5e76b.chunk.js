(this['webpackJsonpgoit-react-hw-04-movies'] =
  this['webpackJsonpgoit-react-hw-04-movies'] || []).push([
  [1],
  {
    18: function (e, t, a) {
      e.exports = a(49);
    },
    23: function (e, t, a) {},
    49: function (e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        l = a.n(n),
        c = a(14),
        o = a.n(c),
        r = a(2),
        m = function () {
          return l.a.createElement('h1', null, '404 - page not found');
        },
        i = a(9),
        s = a(7),
        u =
          (a(23),
          function () {
            return l.a.createElement(
              'nav',
              { className: 'nav' },
              l.a.createElement(
                i.c,
                {
                  exact: !0,
                  to: s.a.homePage,
                  className: 'nav_link',
                  activeClassName: 'active',
                },
                'Home',
              ),
              l.a.createElement(
                i.c,
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
          return l.a.createElement(
            'header',
            { className: 'AppBar' },
            l.a.createElement(u, null),
          );
        },
        h = a(17),
        E = a.n(h),
        p = function () {
          return l.a.createElement(E.a, {
            type: 'ThreeDots',
            color: '#00BFFF',
            height: 100,
            width: 100,
            timeout: 3e3,
          });
        },
        f =
          (a(48),
          Object(n.lazy)(function () {
            return Promise.all([a.e(0), a.e(6)]).then(a.bind(null, 89));
          })),
        d = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(5)]).then(a.bind(null, 90));
        }),
        b = Object(n.lazy)(function () {
          return Promise.all([a.e(0), a.e(4)]).then(a.bind(null, 91));
        }),
        g = function () {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(v, null),
            l.a.createElement(
              n.Suspense,
              { fallback: l.a.createElement(p, null) },
              l.a.createElement(
                r.c,
                null,
                l.a.createElement(r.a, {
                  exact: !0,
                  path: s.a.homePage,
                  component: f,
                }),
                l.a.createElement(r.a, {
                  path: s.a.moviesDetails,
                  component: b,
                }),
                l.a.createElement(r.a, { path: s.a.movies, component: d }),
                l.a.createElement(r.a, { component: m }),
              ),
            ),
          );
        };
      o.a.render(
        l.a.createElement(
          l.a.StrictMode,
          null,
          l.a.createElement(i.a, null, l.a.createElement(g, null)),
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
  [[18, 2, 3]],
]);
//# sourceMappingURL=main.bbd5e76b.chunk.js.map
