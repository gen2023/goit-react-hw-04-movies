(this['webpackJsonpgoit-react-hw-04-movies'] =
  this['webpackJsonpgoit-react-hw-04-movies'] || []).push([
  [6],
  {
    53: function (e, t, n) {
      'use strict';
      var a = n(56),
        r = n.n(a),
        c = n(57),
        u = n(60),
        o = n.n(u);
      o.a.defaults.baseURL = 'https://api.themoviedb.org/3';
      var s = '7d9df5dfa812832fa78dacf66d6dbcaa';
      t.a = {
        getPopularMovie: function () {
          return Object(c.a)(
            r.a.mark(function e() {
              return r.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        o.a
                          .get('/trending/movie/day?api_key='.concat(s))
                          .then(function (e) {
                            return e.data.results;
                          })
                      );
                    case 2:
                      return e.abrupt('return', e.sent);
                    case 3:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )();
        },
        getSearchMovie: function (e) {
          return Object(c.a)(
            r.a.mark(function t() {
              return r.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        o.a
                          .get(
                            '/search/movie?api_key='
                              .concat(s, '&language=en-US&query=')
                              .concat(e, '&page=1&include_adult=false'),
                          )
                          .then(function (e) {
                            return e.data.results;
                          })
                      );
                    case 2:
                      return t.abrupt('return', t.sent);
                    case 3:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
        getMovieDetails: function (e) {
          return Object(c.a)(
            r.a.mark(function t() {
              return r.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        o.a
                          .get(
                            '/movie/'
                              .concat(e, '?api_key=')
                              .concat(s, '&language=en-US'),
                          )
                          .then(function (e) {
                            return e.data;
                          })
                      );
                    case 2:
                      return t.abrupt('return', t.sent);
                    case 3:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
        getReviews: function (e) {
          return Object(c.a)(
            r.a.mark(function t() {
              return r.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        o.a
                          .get(
                            '/movie/'
                              .concat(e, '/reviews?api_key=')
                              .concat(s, '&language=en-US&page=1'),
                          )
                          .then(function (e) {
                            return e.data.results;
                          })
                      );
                    case 2:
                      return t.abrupt('return', t.sent);
                    case 3:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
        getCast: function (e) {
          return Object(c.a)(
            r.a.mark(function t() {
              return r.a.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.next = 2),
                        o.a
                          .get(
                            '/movie/'.concat(e, '/credits?api_key=').concat(s),
                          )
                          .then(function (e) {
                            return e.data.cast;
                          })
                      );
                    case 2:
                      return t.abrupt('return', t.sent);
                    case 3:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            }),
          )();
        },
      };
    },
    61: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return o;
      });
      var a = n(0),
        r = n.n(a),
        c = n(9),
        u = n(2),
        o = Object(u.f)(function (e) {
          var t = e.movies,
            n = e.url,
            a = e.location;
          return r.a.createElement(
            'ul',
            null,
            t.map(function (e) {
              var t = e.id,
                u = e.title;
              return r.a.createElement(
                'li',
                { key: t },
                r.a.createElement(
                  c.b,
                  {
                    to: {
                      pathname: ''.concat(n, '/').concat(t),
                      state: { from: a },
                    },
                  },
                  u,
                ),
              );
            }),
          );
        });
    },
    93: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(54),
        r = n(55),
        c = n(59),
        u = n(58),
        o = n(0),
        s = n.n(o),
        i = n(61),
        f = function (e) {
          var t = e.message;
          return s.a.createElement('div', null, t);
        },
        l = n(53),
        p = n(7),
        v = (function (e) {
          Object(c.a)(n, e);
          var t = Object(u.a)(n);
          function n() {
            var e;
            Object(a.a)(this, n);
            for (var r = arguments.length, c = new Array(r), u = 0; u < r; u++)
              c[u] = arguments[u];
            return (
              ((e = t.call.apply(t, [this].concat(c))).state = {
                movies: [],
                error: '',
              }),
              e
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this;
                  l.a
                    .getPopularMovie()
                    .then(function (t) {
                      e.setState({ movies: t });
                    })
                    .catch(function (t) {
                      return e.setState({ error: t });
                    });
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.movies,
                    n = e.error;
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    n &&
                      s.a.createElement(f, {
                        message: 'ERROR: '.concat(n.message),
                      }),
                    s.a.createElement('h1', null, 'Popular movies today'),
                    !n &&
                      t &&
                      s.a.createElement(i.a, { movies: t, url: p.a.movies }),
                  );
                },
              },
            ]),
            n
          );
        })(o.Component);
      t.default = v;
    },
  },
]);
//# sourceMappingURL=6.5302cd13.chunk.js.map
