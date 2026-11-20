export const id = 106;
export const ids = [106];
export const modules = {
  4793: (uu, Ru, yu) => {
    function Eu(uu) {
      return Eu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, Eu(uu)
    }
    Object.defineProperty(Ru, "__esModule", {
      value: !0
    }), Ru.default = void 0;
    var Ku = ru(yu(1035)),
      Qu = function(uu, Ru) {
        if (!Ru && uu && uu.__esModule) return uu;
        if (null === uu || "object" !== Eu(uu) && "function" !== typeof uu) return {
          default: uu
        };
        var yu = Vu(Ru);
        if (yu && yu.has(uu)) return yu.get(uu);
        var Ku = {},
          Qu = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var mu in uu)
          if ("default" !== mu && Object.prototype.hasOwnProperty.call(uu, mu)) {
            var Ju = Qu ? Object.getOwnPropertyDescriptor(uu, mu) : null;
            Ju && (Ju.get || Ju.set) ? Object.defineProperty(Ku, mu, Ju) : Ku[mu] = uu[mu]
          } Ku.default = uu, yu && yu.set(uu, Ku);
        return Ku
      }(yu(64)),
      mu = ru(yu(4745)),
      Ju = ru(yu(4801)),
      Nu = yu(4804),
      Xu = yu(1079);

    function Vu(uu) {
      if ("function" !== typeof WeakMap) return null;
      var Ru = new WeakMap,
        yu = new WeakMap;
      return (Vu = function(uu) {
        return uu ? yu : Ru
      })(uu)
    }

    function ru(uu) {
      return uu && uu.__esModule ? uu : {
        default: uu
      }
    }

    function Bu(uu, Ru) {
      var yu = "undefined" !== typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
      if (!yu) {
        if (Array.isArray(uu) || (yu = function(uu, Ru) {
            if (!uu) return;
            if ("string" === typeof uu) return xu(uu, Ru);
            var yu = Object.prototype.toString.call(uu).slice(8, -1);
            "Object" === yu && uu.constructor && (yu = uu.constructor.name);
            if ("Map" === yu || "Set" === yu) return Array.from(uu);
            if ("Arguments" === yu || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(yu)) return xu(uu, Ru)
          }(uu)) || Ru && uu && "number" === typeof uu.length) {
          yu && (uu = yu);
          var Eu = 0,
            Ku = function() {};
          return {
            s: Ku,
            n: function() {
              return Eu >= uu.length ? {
                done: !0
              } : {
                done: !1,
                value: uu[Eu++]
              }
            },
            e: function(uu) {
              throw uu
            },
            f: Ku
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Qu, mu = !0,
        Ju = !1;
      return {
        s: function() {
          yu = yu.call(uu)
        },
        n: function() {
          var uu = yu.next();
          return mu = uu.done, uu
        },
        e: function(uu) {
          Ju = !0, Qu = uu
        },
        f: function() {
          try {
            mu || null == yu.return || yu.return()
          } finally {
            if (Ju) throw Qu
          }
        }
      }
    }

    function xu(uu, Ru) {
      (null == Ru || Ru > uu.length) && (Ru = uu.length);
      for (var yu = 0, Eu = new Array(Ru); yu < Ru; yu++) Eu[yu] = uu[yu];
      return Eu
    }

    function Su(uu, Ru) {
      for (var yu = 0; yu < Ru.length; yu++) {
        var Eu = Ru[yu];
        Eu.enumerable = Eu.enumerable || !1, Eu.configurable = !0, "value" in Eu && (Eu.writable = !0), Object.defineProperty(uu, Eu.key, Eu)
      }
    }

    function pu(uu, Ru) {
      return pu = Object.setPrototypeOf || function(uu, Ru) {
        return uu.__proto__ = Ru, uu
      }, pu(uu, Ru)
    }

    function Tu(uu) {
      var Ru = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (uu) {
          return !1
        }
      }();
      return function() {
        var yu, Ku = ju(uu);
        if (Ru) {
          var Qu = ju(this).constructor;
          yu = Reflect.construct(Ku, arguments, Qu)
        } else yu = Ku.apply(this, arguments);
        return function(uu, Ru) {
          if (Ru && ("object" === Eu(Ru) || "function" === typeof Ru)) return Ru;
          if (void 0 !== Ru) throw new TypeError("Derived constructors may only return object or undefined");
          return Wu(uu)
        }(this, yu)
      }
    }

    function Wu(uu) {
      if (void 0 === uu) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return uu
    }

    function ju(uu) {
      return ju = Object.setPrototypeOf ? Object.getPrototypeOf : function(uu) {
        return uu.__proto__ || Object.getPrototypeOf(uu)
      }, ju(uu)
    }

    function Hu(uu, Ru, yu) {
      return Ru in uu ? Object.defineProperty(uu, Ru, {
        value: yu,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Ru] = yu, uu
    }
    var du = {
        orientation: {
          horizontal: {
            dimension: "width",
            direction: "left",
            reverseDirection: "right",
            coordinate: "x"
          },
          vertical: {
            dimension: "height",
            direction: "top",
            reverseDirection: "bottom",
            coordinate: "y"
          }
        }
      },
      bu = function(uu) {
        ! function(uu, Ru) {
          if ("function" !== typeof Ru && null !== Ru) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(uu, "prototype", {
            value: Object.create(Ru && Ru.prototype, {
              constructor: {
                value: uu,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Ru && pu(uu, Ru)
        }(mu, uu);
        var Ru, yu, Eu, Qu = Tu(mu);

        function mu(uu, Ru) {
          var yu;
          return function(uu, Ru) {
            if (!(uu instanceof Ru)) throw new TypeError("Cannot call a class as a function")
          }(this, mu), Hu(Wu(yu = Qu.call(this, uu, Ru)), "handleFormat", (function(uu) {
            var Ru = yu.props.format;
            return Ru ? Ru(uu) : uu
          })), Hu(Wu(yu), "handleUpdate", (function() {
            if (yu.slider) {
              var uu = yu.props.orientation,
                Ru = (0, Nu.capitalize)(du.orientation[uu].dimension),
                Eu = yu.slider["offset".concat(Ru)],
                Ku = yu.handle["offset".concat(Ru)];
              yu.setState({
                limit: Eu - Ku,
                grab: Ku / 2
              })
            }
          })), Hu(Wu(yu), "handleStart", (function(uu) {
            var Ru = yu.props.onChangeStart;
            document.addEventListener("mousemove", yu.handleDrag), document.addEventListener("mouseup", yu.handleEnd), yu.setState({
              active: !0
            }, (function() {
              Ru && Ru(uu)
            }))
          })), Hu(Wu(yu), "handleDrag", (function(uu) {
            uu.stopPropagation();
            var Ru = yu.props.onChange,
              Eu = uu.target,
              Ku = Eu.className,
              Qu = Eu.classList,
              mu = Eu.dataset;
            if (Ru && "rangeslider__labels" !== Ku) {
              var Ju = yu.position(uu);
              Qu && Qu.contains("rangeslider__label-item") && mu.value && (Ju = parseFloat(mu.value)), Ru && Ru(Ju, uu)
            }
          })), Hu(Wu(yu), "handleEnd", (function(uu) {
            var Ru = yu.props.onChangeComplete;
            yu.setState({
              active: !1
            }, (function() {
              Ru && Ru(uu)
            })), document.removeEventListener("mousemove", yu.handleDrag), document.removeEventListener("mouseup", yu.handleEnd)
          })), Hu(Wu(yu), "handleKeyDown", (function(uu) {
            uu.preventDefault();
            var Ru, Eu = uu.keyCode,
              Ku = yu.props,
              Qu = Ku.value,
              mu = Ku.min,
              Ju = Ku.max,
              Nu = Ku.step,
              Xu = Ku.onChange;
            switch (Eu) {
              case 38:
              case 39:
                Ru = Qu + Nu > Ju ? Ju : Qu + Nu, Xu && Xu(Ru, uu);
                break;
              case 37:
              case 40:
                Ru = Qu - Nu < mu ? mu : Qu - Nu, Xu && Xu(Ru, uu)
            }
          })), Hu(Wu(yu), "getPositionFromValue", (function(uu) {
            var Ru = yu.state.limit,
              Eu = yu.props,
              Ku = Eu.min,
              Qu = (uu - Ku) / (Eu.max - Ku);
            return Math.round(Qu * Ru)
          })), Hu(Wu(yu), "getValueFromPosition", (function(uu) {
            var Ru = yu.state.limit,
              Eu = yu.props,
              Ku = Eu.orientation,
              Qu = Eu.min,
              mu = Eu.max,
              Ju = Eu.step,
              Xu = (0, Nu.clamp)(uu, 0, Ru) / (Ru || 1),
              Vu = Ju * Math.round(Xu * (mu - Qu) / Ju),
              ru = "horizontal" === Ku ? Vu + Qu : mu - Vu;
            return (0, Nu.clamp)(ru, Qu, mu)
          })), Hu(Wu(yu), "position", (function(uu) {
            var Ru = yu.state.grab,
              Eu = yu.props,
              Ku = Eu.orientation,
              Qu = Eu.reverse,
              mu = yu.slider,
              Ju = du.orientation[Ku].coordinate,
              Xu = Qu ? du.orientation[Ku].reverseDirection : du.orientation[Ku].direction,
              Vu = "client".concat((0, Nu.capitalize)(Ju)),
              ru = uu.touches ? uu.touches[0][Vu] : uu[Vu],
              Bu = mu.getBoundingClientRect()[Xu],
              xu = Qu ? Bu - ru - Ru : ru - Bu - Ru;
            return yu.getValueFromPosition(xu)
          })), Hu(Wu(yu), "coordinates", (function(uu) {
            var Ru = yu.state,
              Eu = Ru.limit,
              Ku = Ru.grab,
              Qu = yu.props.orientation,
              mu = yu.getValueFromPosition(uu),
              Ju = yu.getPositionFromValue(mu),
              Nu = "horizontal" === Qu ? Ju + Ku : Ju;
            return {
              fill: "horizontal" === Qu ? Nu : Eu - Nu,
              handle: Nu,
              label: Nu
            }
          })), Hu(Wu(yu), "renderLabels", (function(uu) {
            return (0, Xu.jsx)("ul", {
              ref: function(uu) {
                yu.labels = uu
              },
              className: (0, Ku.default)("rangeslider__labels"),
              children: uu
            })
          })), yu.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, yu
        }
        return Ru = mu, (yu = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new Ju.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var uu = this,
              Ru = this.props,
              yu = Ru.value,
              Eu = Ru.orientation,
              Qu = Ru.className,
              mu = Ru.tooltip,
              Ju = Ru.reverse,
              Nu = Ru.labels,
              Vu = Ru.min,
              ru = Ru.max,
              xu = Ru.handleLabel,
              Su = this.state.active,
              pu = du.orientation[Eu].dimension,
              Tu = Ju ? du.orientation[Eu].reverseDirection : du.orientation[Eu].direction,
              Wu = this.getPositionFromValue(yu),
              ju = this.coordinates(Wu),
              bu = Hu({}, pu, "".concat(ju.fill, "px")),
              Cu = Hu({}, Tu, "".concat(ju.handle, "px")),
              ku = mu && Su,
              eu = [],
              Au = Object.keys(Nu);
            if (Au.length > 0) {
              var Du, Mu = Bu(Au = Au.sort((function(uu, Ru) {
                return Ju ? uu - Ru : Ru - uu
              })));
              try {
                for (Mu.s(); !(Du = Mu.n()).done;) {
                  var Iu = Du.value,
                    Gu = this.getPositionFromValue(Iu),
                    Uu = this.coordinates(Gu),
                    nu = Hu({}, Tu, "".concat(Uu.label, "px"));
                  eu.push((0, Xu.jsx)("li", {
                    className: (0, Ku.default)("rangeslider__label-item"),
                    "data-value": Iu,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: nu,
                    children: this.props.labels[Iu]
                  }, Iu))
                }
              } catch (su) {
                Mu.e(su)
              } finally {
                Mu.f()
              }
            }
            return (0, Xu.jsxs)("div", {
              ref: function(Ru) {
                uu.slider = Ru
              },
              className: (0, Ku.default)("rangeslider", "rangeslider-".concat(Eu), {
                "rangeslider-reverse": Ju
              }, Qu),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Vu,
              "aria-valuemax": ru,
              "aria-valuenow": yu,
              "aria-orientation": Eu,
              children: [(0, Xu.jsx)("div", {
                className: "rangeslider__fill",
                style: bu
              }), (0, Xu.jsxs)("div", {
                ref: function(Ru) {
                  uu.handle = Ru
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: Cu,
                tabIndex: 0,
                children: [ku && (0, Xu.jsx)("div", {
                  ref: function(Ru) {
                    uu.tooltip = Ru
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, Xu.jsx)("span", {
                    children: this.handleFormat(yu)
                  })
                }), (0, Xu.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: xu
                })]
              }), Nu && this.renderLabels(eu)]
            })
          }
        }]) && Su(Ru.prototype, yu), Eu && Su(Ru, Eu), Object.defineProperty(Ru, "prototype", {
          writable: !1
        }), mu
      }(Qu.Component);
    Hu(bu, "propTypes", {
      min: mu.default.number,
      max: mu.default.number,
      step: mu.default.number,
      value: mu.default.number,
      orientation: mu.default.string,
      tooltip: mu.default.bool,
      reverse: mu.default.bool,
      labels: mu.default.object,
      handleLabel: mu.default.string,
      format: mu.default.func,
      onChangeStart: mu.default.func,
      onChange: mu.default.func,
      onChangeComplete: mu.default.func
    }), Hu(bu, "defaultProps", {
      min: 0,
      max: 100,
      step: 1,
      value: 0,
      orientation: "horizontal",
      tooltip: !0,
      reverse: !1,
      labels: {},
      handleLabel: ""
    });
    var Cu = bu;
    Ru.default = Cu
  },
  4785: (uu, Ru, yu) => {
    var Eu;
    Ru.d = void 0;
    var Ku = ((Eu = yu(4793)) && Eu.__esModule ? Eu : {
      default: Eu
    }).default;
    Ru.d = Ku
  },
  4804: (uu, Ru) => {
    Object.defineProperty(Ru, "__esModule", {
      value: !0
    }), Ru.capitalize = function(uu) {
      return uu.charAt(0).toUpperCase() + uu.substr(1)
    }, Ru.clamp = function(uu, Ru, yu) {
      return Math.min(Math.max(uu, Ru), yu)
    }
  },
  4753: (uu, Ru, yu) => {
    var Eu = yu(4758);

    function Ku() {}

    function Qu() {}
    Qu.resetWarningCache = Ku, uu.exports = function() {
      function uu(uu, Ru, yu, Ku, Qu, mu) {
        if (mu !== Eu) {
          var Ju = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw Ju.name = "Invariant Violation", Ju
        }
      }

      function Ru() {
        return uu
      }
      uu.isRequired = uu;
      var yu = {
        array: uu,
        bigint: uu,
        bool: uu,
        func: uu,
        number: uu,
        object: uu,
        string: uu,
        symbol: uu,
        any: uu,
        arrayOf: Ru,
        element: uu,
        elementType: uu,
        instanceOf: Ru,
        node: uu,
        objectOf: Ru,
        oneOf: Ru,
        oneOfType: Ru,
        shape: Ru,
        exact: Ru,
        checkPropTypes: Qu,
        resetWarningCache: Ku
      };
      return yu.PropTypes = yu, yu
    }
  },
  4745: (uu, Ru, yu) => {
    uu.exports = yu(4753)()
  },
  4758: uu => {
    uu.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  4801: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      default: () => eu
    });
    var Eu = function() {
        if ("undefined" !== typeof Map) return Map;

        function uu(uu, Ru) {
          var yu = -1;
          return uu.some((function(uu, Eu) {
            return uu[0] === Ru && (yu = Eu, !0)
          })), yu
        }
        return function() {
          function Ru() {
            this.__entries__ = []
          }
          return Object.defineProperty(Ru.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Ru.prototype.get = function(Ru) {
            var yu = uu(this.__entries__, Ru),
              Eu = this.__entries__[yu];
            return Eu && Eu[1]
          }, Ru.prototype.set = function(Ru, yu) {
            var Eu = uu(this.__entries__, Ru);
            ~Eu ? this.__entries__[Eu][1] = yu : this.__entries__.push([Ru, yu])
          }, Ru.prototype.delete = function(Ru) {
            var yu = this.__entries__,
              Eu = uu(yu, Ru);
            ~Eu && yu.splice(Eu, 1)
          }, Ru.prototype.has = function(Ru) {
            return !!~uu(this.__entries__, Ru)
          }, Ru.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Ru.prototype.forEach = function(uu, Ru) {
            void 0 === Ru && (Ru = null);
            for (var yu = 0, Eu = this.__entries__; yu < Eu.length; yu++) {
              var Ku = Eu[yu];
              uu.call(Ru, Ku[1], Ku[0])
            }
          }, Ru
        }()
      }(),
      Ku = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Qu = "undefined" !== typeof yu.g && yu.g.Math === Math ? yu.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      mu = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Qu) : function(uu) {
        return setTimeout((function() {
          return uu(Date.now())
        }), 1e3 / 60)
      };
    var Ju = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      Nu = "undefined" !== typeof MutationObserver,
      Xu = function() {
        function uu() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(uu, Ru) {
            var yu = !1,
              Eu = !1,
              Ku = 0;

            function Qu() {
              yu && (yu = !1, uu()), Eu && Nu()
            }

            function Ju() {
              mu(Qu)
            }

            function Nu() {
              var uu = Date.now();
              if (yu) {
                if (uu - Ku < 2) return;
                Eu = !0
              } else yu = !0, Eu = !1, setTimeout(Ju, Ru);
              Ku = uu
            }
            return Nu
          }(this.refresh.bind(this), 20)
        }
        return uu.prototype.addObserver = function(uu) {
          ~this.observers_.indexOf(uu) || this.observers_.push(uu), this.connected_ || this.connect_()
        }, uu.prototype.removeObserver = function(uu) {
          var Ru = this.observers_,
            yu = Ru.indexOf(uu);
          ~yu && Ru.splice(yu, 1), !Ru.length && this.connected_ && this.disconnect_()
        }, uu.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, uu.prototype.updateObservers_ = function() {
          var uu = this.observers_.filter((function(uu) {
            return uu.gatherActive(), uu.hasActive()
          }));
          return uu.forEach((function(uu) {
            return uu.broadcastActive()
          })), uu.length > 0
        }, uu.prototype.connect_ = function() {
          Ku && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Nu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, uu.prototype.disconnect_ = function() {
          Ku && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, uu.prototype.onTransitionEnd_ = function(uu) {
          var Ru = uu.propertyName,
            yu = void 0 === Ru ? "" : Ru;
          Ju.some((function(uu) {
            return !!~yu.indexOf(uu)
          })) && this.refresh()
        }, uu.getInstance = function() {
          return this.instance_ || (this.instance_ = new uu), this.instance_
        }, uu.instance_ = null, uu
      }(),
      Vu = function(uu, Ru) {
        for (var yu = 0, Eu = Object.keys(Ru); yu < Eu.length; yu++) {
          var Ku = Eu[yu];
          Object.defineProperty(uu, Ku, {
            value: Ru[Ku],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return uu
      },
      ru = function(uu) {
        return uu && uu.ownerDocument && uu.ownerDocument.defaultView || Qu
      },
      Bu = ju(0, 0, 0, 0);

    function xu(uu) {
      return parseFloat(uu) || 0
    }

    function Su(uu) {
      for (var Ru = [], yu = 1; yu < arguments.length; yu++) Ru[yu - 1] = arguments[yu];
      return Ru.reduce((function(Ru, yu) {
        return Ru + xu(uu["border-" + yu + "-width"])
      }), 0)
    }

    function pu(uu) {
      var Ru = uu.clientWidth,
        yu = uu.clientHeight;
      if (!Ru && !yu) return Bu;
      var Eu = ru(uu).getComputedStyle(uu),
        Ku = function(uu) {
          for (var Ru = {}, yu = 0, Eu = ["top", "right", "bottom", "left"]; yu < Eu.length; yu++) {
            var Ku = Eu[yu],
              Qu = uu["padding-" + Ku];
            Ru[Ku] = xu(Qu)
          }
          return Ru
        }(Eu),
        Qu = Ku.left + Ku.right,
        mu = Ku.top + Ku.bottom,
        Ju = xu(Eu.width),
        Nu = xu(Eu.height);
      if ("border-box" === Eu.boxSizing && (Math.round(Ju + Qu) !== Ru && (Ju -= Su(Eu, "left", "right") + Qu), Math.round(Nu + mu) !== yu && (Nu -= Su(Eu, "top", "bottom") + mu)), ! function(uu) {
          return uu === ru(uu).document.documentElement
        }(uu)) {
        var Xu = Math.round(Ju + Qu) - Ru,
          Vu = Math.round(Nu + mu) - yu;
        1 !== Math.abs(Xu) && (Ju -= Xu), 1 !== Math.abs(Vu) && (Nu -= Vu)
      }
      return ju(Ku.left, Ku.top, Ju, Nu)
    }
    var Tu = "undefined" !== typeof SVGGraphicsElement ? function(uu) {
      return uu instanceof ru(uu).SVGGraphicsElement
    } : function(uu) {
      return uu instanceof ru(uu).SVGElement && "function" === typeof uu.getBBox
    };

    function Wu(uu) {
      return Ku ? Tu(uu) ? function(uu) {
        var Ru = uu.getBBox();
        return ju(0, 0, Ru.width, Ru.height)
      }(uu) : pu(uu) : Bu
    }

    function ju(uu, Ru, yu, Eu) {
      return {
        x: uu,
        y: Ru,
        width: yu,
        height: Eu
      }
    }
    var Hu = function() {
        function uu(uu) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = ju(0, 0, 0, 0), this.target = uu
        }
        return uu.prototype.isActive = function() {
          var uu = Wu(this.target);
          return this.contentRect_ = uu, uu.width !== this.broadcastWidth || uu.height !== this.broadcastHeight
        }, uu.prototype.broadcastRect = function() {
          var uu = this.contentRect_;
          return this.broadcastWidth = uu.width, this.broadcastHeight = uu.height, uu
        }, uu
      }(),
      du = function(uu, Ru) {
        var yu = function(uu) {
          var Ru = uu.x,
            yu = uu.y,
            Eu = uu.width,
            Ku = uu.height,
            Qu = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            mu = Object.create(Qu.prototype);
          return Vu(mu, {
            x: Ru,
            y: yu,
            width: Eu,
            height: Ku,
            top: yu,
            right: Ru + Eu,
            bottom: Ku + yu,
            left: Ru
          }), mu
        }(Ru);
        Vu(this, {
          target: uu,
          contentRect: yu
        })
      },
      bu = function() {
        function uu(uu, Ru, yu) {
          if (this.activeObservations_ = [], this.observations_ = new Eu, "function" !== typeof uu) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = uu, this.controller_ = Ru, this.callbackCtx_ = yu
        }
        return uu.prototype.observe = function(uu) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(uu instanceof ru(uu).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Ru = this.observations_;
            Ru.has(uu) || (Ru.set(uu, new Hu(uu)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, uu.prototype.unobserve = function(uu) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(uu instanceof ru(uu).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Ru = this.observations_;
            Ru.has(uu) && (Ru.delete(uu), Ru.size || this.controller_.removeObserver(this))
          }
        }, uu.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, uu.prototype.gatherActive = function() {
          var uu = this;
          this.clearActive(), this.observations_.forEach((function(Ru) {
            Ru.isActive() && uu.activeObservations_.push(Ru)
          }))
        }, uu.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var uu = this.callbackCtx_,
              Ru = this.activeObservations_.map((function(uu) {
                return new du(uu.target, uu.broadcastRect())
              }));
            this.callback_.call(uu, Ru, uu), this.clearActive()
          }
        }, uu.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, uu.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, uu
      }(),
      Cu = "undefined" !== typeof WeakMap ? new WeakMap : new Eu,
      ku = function uu(Ru) {
        if (!(this instanceof uu)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var yu = Xu.getInstance(),
          Eu = new bu(Ru, yu, this);
        Cu.set(this, Eu)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(uu) {
      ku.prototype[uu] = function() {
        var Ru;
        return (Ru = Cu.get(this))[uu].apply(Ru, arguments)
      }
    }));
    const eu = "undefined" !== typeof Qu.ResizeObserver ? Qu.ResizeObserver : ku
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);