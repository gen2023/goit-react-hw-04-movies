(this['webpackJsonpgoit-react-hw-04-movies'] =
  this['webpackJsonpgoit-react-hw-04-movies'] || []).push([
  [4],
  {
    51: function (e, t, n) {
      'use strict';
      var a = n(54),
        r = n.n(a),
        c = n(55),
        o = n(58),
        u = n.n(o);
      u.a.defaults.baseURL = 'https://api.themoviedb.org/3';
      var i = '7d9df5dfa812832fa78dacf66d6dbcaa';
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
                        u.a
                          .get('/trending/movie/day?api_key='.concat(i))
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
                        u.a
                          .get(
                            '/search/movie?api_key='
                              .concat(i, '&language=en-US&query=')
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
                        u.a
                          .get(
                            '/movie/'
                              .concat(e, '?api_key=')
                              .concat(i, '&language=en-US'),
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
                        u.a
                          .get(
                            '/movie/'
                              .concat(e, '/reviews?api_key=')
                              .concat(i, '&language=en-US&page=1'),
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
                        u.a
                          .get(
                            '/movie/'.concat(e, '/credits?api_key=').concat(i),
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
    87: function (e, t, n) {},
    88: function (e, t, n) {},
    91: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(54),
        r = n.n(a);
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                c(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      var i = n(55),
        s = n(52),
        l = n(53),
        p = n(57),
        v = n(56),
        m = n(0),
        f = n.n(m),
        h = n(9),
        d = n(2),
        b =
          (n(87),
          function (e) {
            var t = e.poster_path,
              n = e.title,
              a = e.vote_average,
              r = e.overview,
              c = e.genres,
              o = e.release_date;
            return f.a.createElement(
              f.a.Fragment,
              null,
              f.a.createElement(
                'div',
                { className: 'moviesPreviewContent' },
                t &&
                  f.a.createElement('img', {
                    src: 'https://image.tmdb.org/t/p/w300'.concat(t),
                    alt: n,
                  }),
                f.a.createElement(
                  'div',
                  { className: 'moviesPreviewOptions' },
                  o &&
                    f.a.createElement('h2', null, n, ' (', o.slice(0, 4), ')'),
                  f.a.createElement('p', null, 'User Score: ', 10 * a, '%'),
                  f.a.createElement('h2', null, 'Overview'),
                  f.a.createElement('p', null, r),
                  f.a.createElement('h2', null, 'Genres'),
                  f.a.createElement(
                    'ul',
                    null,
                    c.map(function (e) {
                      return f.a.createElement('li', { key: e.id }, e.name);
                    }),
                  ),
                ),
              ),
            );
          }),
        g = n(51),
        w =
          (n(88),
          (function (e) {
            Object(p.a)(n, e);
            var t = Object(v.a)(n);
            function n() {
              var e;
              Object(s.a)(this, n);
              for (
                var a = arguments.length, r = new Array(a), c = 0;
                c < a;
                c++
              )
                r[c] = arguments[c];
              return (
                ((e = t.call.apply(t, [this].concat(r))).state = { cast: [] }),
                e
              );
            }
            return (
              Object(l.a)(n, [
                {
                  key: 'componentDidMount',
                  value: (function () {
                    var e = Object(i.a)(
                      r.a.mark(function e() {
                        var t,
                          n = this;
                        return r.a.wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = this.props.match.params.movieId),
                                    g.a
                                      .getCast(t)
                                      .then(function (e) {
                                        n.setState({ cast: e });
                                      })
                                      .catch(function (e) {
                                        return n.setState({ error: e });
                                      });
                                case 2:
                                case 'end':
                                  return e.stop();
                              }
                          },
                          e,
                          this,
                        );
                      }),
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })(),
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.state.cast;
                    return f.a.createElement(
                      f.a.Fragment,
                      null,
                      f.a.createElement(
                        'div',
                        { className: 'castContent' },
                        f.a.createElement(
                          'ul',
                          null,
                          e.map(function (e) {
                            return f.a.createElement(
                              'li',
                              { key: e.cast_id },
                              e.profile_path &&
                                f.a.createElement('img', {
                                  src: 'https://image.tmdb.org/t/p/w92'.concat(
                                    e.profile_path,
                                  ),
                                  alt: e.character,
                                }),
                              f.a.createElement('p', null, e.name),
                              f.a.createElement(
                                'p',
                                null,
                                'Character: ',
                                e.character,
                              ),
                            );
                          }),
                        ),
                      ),
                    );
                  },
                },
              ]),
              n
            );
          })(m.Component)),
        O = (function (e) {
          Object(p.a)(n, e);
          var t = Object(v.a)(n);
          function n() {
            var e;
            Object(s.a)(this, n);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = { reviews: [] }),
              e
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: 'componentDidMount',
                value: (function () {
                  var e = Object(i.a)(
                    r.a.mark(function e() {
                      var t,
                        n = this;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = this.props.match.params.movieId),
                                  g.a
                                    .getReviews(t)
                                    .then(function (e) {
                                      n.setState({ reviews: e });
                                    })
                                    .catch(function (e) {
                                      return n.setState({ error: e });
                                    });
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state.reviews;
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    e.length > 0
                      ? f.a.createElement(
                          'ul',
                          null,
                          e.map(function (e) {
                            return f.a.createElement(
                              'li',
                              { key: e.id },
                              f.a.createElement(
                                'h3',
                                null,
                                'Author: ',
                                e.author,
                              ),
                              f.a.createElement('p', null, e.content),
                            );
                          }),
                        )
                      : f.a.createElement(
                          'p',
                          null,
                          'We don`t have any reviews for this movie',
                        ),
                  );
                },
              },
            ]),
            n
          );
        })(m.Component),
        y = n(7),
        E = (function (e) {
          Object(p.a)(n, e);
          var t = Object(v.a)(n);
          function n() {
            var e;
            Object(s.a)(this, n);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
              r[c] = arguments[c];
            return (
              ((e = t.call.apply(t, [this].concat(r))).state = {
                poster_path: null,
                title: null,
                vote_average: null,
                overview: null,
                release_date: null,
                genres: [],
              }),
              (e.handleGoBack = function () {
                var t,
                  n = e.props,
                  a = n.location;
                n.history.push(
                  (null === a ||
                  void 0 === a ||
                  null === (t = a.state) ||
                  void 0 === t
                    ? void 0
                    : t.from) || y.a.home,
                );
              }),
              e
            );
          }
          return (
            Object(l.a)(n, [
              {
                key: 'componentDidMount',
                value: (function () {
                  var e = Object(i.a)(
                    r.a.mark(function e() {
                      var t,
                        n = this;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = this.props.match.params.movieId),
                                  g.a
                                    .getMovieDetails(t)
                                    .then(function (e) {
                                      n.setState(u({}, e));
                                    })
                                    .catch(function (e) {
                                      return n.setState({ error: e });
                                    });
                              case 2:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.poster_path,
                    n = e.title,
                    a = e.vote_average,
                    r = e.overview,
                    c = e.genres,
                    o = e.id,
                    u = e.release_date;
                  return f.a.createElement(
                    f.a.Fragment,
                    null,
                    f.a.createElement(
                      'button',
                      { type: 'button', onClick: this.handleGoBack },
                      'GO BACK',
                    ),
                    t &&
                      f.a.createElement(b, {
                        poster_path: t,
                        title: n,
                        vote_average: a,
                        overview: r,
                        genres: c,
                        release_date: u,
                      }),
                    f.a.createElement('hr', null),
                    f.a.createElement('h3', null, 'Additional information'),
                    f.a.createElement(
                      h.b,
                      { to: '/movies/'.concat(o, '/cast') },
                      'cast',
                    ),
                    f.a.createElement('br', null),
                    f.a.createElement(
                      h.b,
                      { to: '/movies/'.concat(o, '/reviews') },
                      'reviews',
                    ),
                    f.a.createElement('hr', null),
                    f.a.createElement(d.a, {
                      path: y.a.Cast,
                      render: function (e) {
                        return f.a.createElement(w, e);
                      },
                    }),
                    f.a.createElement(d.a, {
                      path: y.a.Reviews,
                      render: function (e) {
                        return f.a.createElement(O, e);
                      },
                    }),
                  );
                },
              },
            ]),
            n
          );
        })(m.Component);
      t.default = E;
    },
  },
]);
//# sourceMappingURL=4.6bb95df6.chunk.js.map
