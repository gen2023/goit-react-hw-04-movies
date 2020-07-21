(this['webpackJsonpgoit-react-hw-04-movies'] =
  this['webpackJsonpgoit-react-hw-04-movies'] || []).push([
  [5],
  {
    53: function (e, t, n) {
      'use strict';
      var r = n(56),
        a = n.n(r),
        o = n(57),
        c = n(60),
        u = n.n(c);
      u.a.defaults.baseURL = 'https://api.themoviedb.org/3';
      var i = '7d9df5dfa812832fa78dacf66d6dbcaa';
      t.a = {
        getPopularMovie: function () {
          return Object(o.a)(
            a.a.mark(function e() {
              return a.a.wrap(function (e) {
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
          return Object(o.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
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
          return Object(o.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
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
          return Object(o.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
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
          return Object(o.a)(
            a.a.mark(function t() {
              return a.a.wrap(function (t) {
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
    61: function (e, t, n) {
      'use strict';
      n.d(t, 'a', function () {
        return u;
      });
      var r = n(0),
        a = n.n(r),
        o = n(9),
        c = n(2),
        u = Object(c.f)(function (e) {
          var t = e.movies,
            n = e.url,
            r = e.location;
          return a.a.createElement(
            'ul',
            null,
            t.map(function (e) {
              var t = e.id,
                c = e.title;
              return a.a.createElement(
                'li',
                { key: t },
                a.a.createElement(
                  o.b,
                  {
                    to: {
                      pathname: ''.concat(n, '/').concat(t),
                      state: { from: r },
                    },
                  },
                  c,
                ),
              );
            }),
          );
        });
    },
    88: function (e, t, n) {},
    91: function (e, t, n) {
      'use strict';
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e);
          })(e) ||
          (function (e) {
            if ('undefined' !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(n)
                  : 'Arguments' === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      n.r(t);
      var o = n(54),
        c = n(55),
        u = n(59),
        i = n(58),
        s = n(0),
        l = n.n(s),
        f = n(61),
        d = n(14),
        m = (n(88), document.querySelector('#modal-root')),
        p = (function (e) {
          Object(u.a)(n, e);
          var t = Object(i.a)(n);
          function n() {
            var e;
            Object(o.a)(this, n);
            for (var r = arguments.length, a = new Array(r), c = 0; c < r; c++)
              a[c] = arguments[c];
            return (
              ((e = t.call.apply(
                t,
                [this].concat(a),
              )).handleKeyDown = function (t) {
                'Escape' === t.code && e.props.onClose();
              }),
              (e.handleBackdropClick = function (t) {
                t.currentTarget === t.target && e.props.onClose();
              }),
              e
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('keydown', this.handleKeyDown);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('keydown', this.handleKeyDown);
                },
              },
              {
                key: 'render',
                value: function () {
                  return Object(d.createPortal)(
                    l.a.createElement(
                      'div',
                      {
                        className: 'ModalBackdrop',
                        onClick: this.handleBackdropClick,
                      },
                      l.a.createElement(
                        'div',
                        { className: 'ModalContent' },
                        l.a.createElement('span', null, this.props.children),
                      ),
                    ),
                    m,
                  );
                },
              },
            ]),
            n
          );
        })(s.Component),
        h = n(53),
        v = (function (e) {
          Object(u.a)(n, e);
          var t = Object(i.a)(n);
          function n() {
            var e;
            Object(o.a)(this, n);
            for (var r = arguments.length, c = new Array(r), u = 0; u < r; u++)
              c[u] = arguments[u];
            return (
              ((e = t.call.apply(t, [this].concat(c))).state = {
                movies: [],
                query: '',
                message: '',
                showModal: !1,
              }),
              (e.formSubmitHandler = function (t) {
                h.a
                  .getSearchMovie(t)
                  .then(function (t) {
                    e.setState({ movies: t });
                  })
                  .catch(function (t) {
                    return e.setState({ error: t });
                  });
              }),
              (e.handleChange = function (t) {
                var n = t.currentTarget;
                e.setState({ query: n.value });
              }),
              (e.fetchMovies = function () {
                var t = e.state.query;
                h.a
                  .getSearchMovie(t)
                  .then(function (t) {
                    return e.setState(function (e) {
                      return { movies: [].concat(a(e.movies), a(t)) };
                    });
                  })
                  .catch(function (t) {
                    return e.setState({ error: t });
                  })
                  .finally(function () {
                    return e.setState({ isLoading: !1 });
                  });
              }),
              (e.handleSubmit = function (t) {
                var n = e.state.query;
                if ((t.preventDefault(), !n))
                  return (
                    e.closeModal(),
                    e.setState({ message: 'Please fill in form for search' })
                  );
                e.fetchMovies(), e.setState({ query: '' }), e.reset();
              }),
              (e.reset = function () {
                e.setState({ query: '' });
              }),
              (e.closeModal = function () {
                e.setState(function (e) {
                  return { showModal: !e.showModal };
                });
              }),
              e
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.state,
                    t = e.movies,
                    n = e.query,
                    r = e.message,
                    a = e.showModal,
                    o = this.props.match;
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    '' !== r && a
                      ? l.a.createElement(p, { onClose: this.closeModal }, r)
                      : null,
                    l.a.createElement('h2', null, 'Find a movie for yourself'),
                    l.a.createElement(
                      'form',
                      { onSubmit: this.handleSubmit },
                      l.a.createElement('input', {
                        value: n,
                        onChange: this.handleChange,
                        type: 'text',
                        autoComplete: 'off',
                        autoFocus: !0,
                        placeholder: 'Search movies',
                      }),
                      l.a.createElement(
                        'button',
                        { type: 'submit' },
                        l.a.createElement('span', null, 'Search'),
                      ),
                    ),
                    l.a.createElement(f.a, { movies: t, url: o.url }),
                  );
                },
              },
            ]),
            n
          );
        })(s.Component);
      t.default = v;
    },
  },
]);
//# sourceMappingURL=5.6f258b08.chunk.js.map
