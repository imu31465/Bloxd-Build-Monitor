export const id = 110;
export const ids = [110];
export const modules = {
  5160: (uu, Eu, ju) => {
    function su(uu) {
      return su = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(uu) {
        return typeof uu
      } : function(uu) {
        return uu && "function" == typeof Symbol && uu.constructor === Symbol && uu !== Symbol.prototype ? "symbol" : typeof uu
      }, su(uu)
    }
    Object.defineProperty(Eu, "__esModule", {
      value: !0
    }), Eu.default = void 0;
    var Uu = bu(ju(1105)),
      Zu = function(uu, Eu) {
        if (!Eu && uu && uu.__esModule) return uu;
        if (null === uu || "object" !== su(uu) && "function" !== typeof uu) return {
          default: uu
        };
        var ju = Cu(Eu);
        if (ju && ju.has(uu)) return ju.get(uu);
        var Uu = {},
          Zu = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var Xu in uu)
          if ("default" !== Xu && Object.prototype.hasOwnProperty.call(uu, Xu)) {
            var lu = Zu ? Object.getOwnPropertyDescriptor(uu, Xu) : null;
            lu && (lu.get || lu.set) ? Object.defineProperty(Uu, Xu, lu) : Uu[Xu] = uu[Xu]
          } Uu.default = uu, ju && ju.set(uu, Uu);
        return Uu
      }(ju(58)),
      Xu = bu(ju(5128)),
      lu = bu(ju(5166)),
      qu = ju(5170),
      fu = ju(1154);

    function Cu(uu) {
      if ("function" !== typeof WeakMap) return null;
      var Eu = new WeakMap,
        ju = new WeakMap;
      return (Cu = function(uu) {
        return uu ? ju : Eu
      })(uu)
    }

    function bu(uu) {
      return uu && uu.__esModule ? uu : {
        default: uu
      }
    }

    function cu(uu, Eu) {
      var ju = "undefined" !== typeof Symbol && uu[Symbol.iterator] || uu["@@iterator"];
      if (!ju) {
        if (Array.isArray(uu) || (ju = function(uu, Eu) {
            if (!uu) return;
            if ("string" === typeof uu) return Nu(uu, Eu);
            var ju = Object.prototype.toString.call(uu).slice(8, -1);
            "Object" === ju && uu.constructor && (ju = uu.constructor.name);
            if ("Map" === ju || "Set" === ju) return Array.from(uu);
            if ("Arguments" === ju || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ju)) return Nu(uu, Eu)
          }(uu)) || Eu && uu && "number" === typeof uu.length) {
          ju && (uu = ju);
          var su = 0,
            Uu = function() {};
          return {
            s: Uu,
            n: function() {
              return su >= uu.length ? {
                done: !0
              } : {
                done: !1,
                value: uu[su++]
              }
            },
            e: function(uu) {
              throw uu
            },
            f: Uu
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var Zu, Xu = !0,
        lu = !1;
      return {
        s: function() {
          ju = ju.call(uu)
        },
        n: function() {
          var uu = ju.next();
          return Xu = uu.done, uu
        },
        e: function(uu) {
          lu = !0, Zu = uu
        },
        f: function() {
          try {
            Xu || null == ju.return || ju.return()
          } finally {
            if (lu) throw Zu
          }
        }
      }
    }

    function Nu(uu, Eu) {
      (null == Eu || Eu > uu.length) && (Eu = uu.length);
      for (var ju = 0, su = new Array(Eu); ju < Eu; ju++) su[ju] = uu[ju];
      return su
    }

    function Ou(uu, Eu) {
      for (var ju = 0; ju < Eu.length; ju++) {
        var su = Eu[ju];
        su.enumerable = su.enumerable || !1, su.configurable = !0, "value" in su && (su.writable = !0), Object.defineProperty(uu, su.key, su)
      }
    }

    function Yu(uu, Eu) {
      return Yu = Object.setPrototypeOf || function(uu, Eu) {
        return uu.__proto__ = Eu, uu
      }, Yu(uu, Eu)
    }

    function hu(uu) {
      var Eu = function() {
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
        var ju, Uu = gu(uu);
        if (Eu) {
          var Zu = gu(this).constructor;
          ju = Reflect.construct(Uu, arguments, Zu)
        } else ju = Uu.apply(this, arguments);
        return function(uu, Eu) {
          if (Eu && ("object" === su(Eu) || "function" === typeof Eu)) return Eu;
          if (void 0 !== Eu) throw new TypeError("Derived constructors may only return object or undefined");
          return Du(uu)
        }(this, ju)
      }
    }

    function Du(uu) {
      if (void 0 === uu) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return uu
    }

    function gu(uu) {
      return gu = Object.setPrototypeOf ? Object.getPrototypeOf : function(uu) {
        return uu.__proto__ || Object.getPrototypeOf(uu)
      }, gu(uu)
    }

    function Mu(uu, Eu, ju) {
      return Eu in uu ? Object.defineProperty(uu, Eu, {
        value: ju,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : uu[Eu] = ju, uu
    }
    var eu = {
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
      Gu = function(uu) {
        ! function(uu, Eu) {
          if ("function" !== typeof Eu && null !== Eu) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(uu, "prototype", {
            value: Object.create(Eu && Eu.prototype, {
              constructor: {
                value: uu,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), Eu && Yu(uu, Eu)
        }(Xu, uu);
        var Eu, ju, su, Zu = hu(Xu);

        function Xu(uu, Eu) {
          var ju;
          return function(uu, Eu) {
            if (!(uu instanceof Eu)) throw new TypeError("Cannot call a class as a function")
          }(this, Xu), Mu(Du(ju = Zu.call(this, uu, Eu)), "handleFormat", (function(uu) {
            var Eu = ju.props.format;
            return Eu ? Eu(uu) : uu
          })), Mu(Du(ju), "handleUpdate", (function() {
            if (ju.slider) {
              var uu = ju.props.orientation,
                Eu = (0, qu.capitalize)(eu.orientation[uu].dimension),
                su = ju.slider["offset".concat(Eu)],
                Uu = ju.handle["offset".concat(Eu)];
              ju.setState({
                limit: su - Uu,
                grab: Uu / 2
              })
            }
          })), Mu(Du(ju), "handleStart", (function(uu) {
            var Eu = ju.props.onChangeStart;
            document.addEventListener("mousemove", ju.handleDrag), document.addEventListener("mouseup", ju.handleEnd), ju.setState({
              active: !0
            }, (function() {
              Eu && Eu(uu)
            }))
          })), Mu(Du(ju), "handleDrag", (function(uu) {
            uu.stopPropagation();
            var Eu = ju.props.onChange,
              su = uu.target,
              Uu = su.className,
              Zu = su.classList,
              Xu = su.dataset;
            if (Eu && "rangeslider__labels" !== Uu) {
              var lu = ju.position(uu);
              Zu && Zu.contains("rangeslider__label-item") && Xu.value && (lu = parseFloat(Xu.value)), Eu && Eu(lu, uu)
            }
          })), Mu(Du(ju), "handleEnd", (function(uu) {
            var Eu = ju.props.onChangeComplete;
            ju.setState({
              active: !1
            }, (function() {
              Eu && Eu(uu)
            })), document.removeEventListener("mousemove", ju.handleDrag), document.removeEventListener("mouseup", ju.handleEnd)
          })), Mu(Du(ju), "handleKeyDown", (function(uu) {
            uu.preventDefault();
            var Eu, su = uu.keyCode,
              Uu = ju.props,
              Zu = Uu.value,
              Xu = Uu.min,
              lu = Uu.max,
              qu = Uu.step,
              fu = Uu.onChange;
            switch (su) {
              case 38:
              case 39:
                Eu = Zu + qu > lu ? lu : Zu + qu, fu && fu(Eu, uu);
                break;
              case 37:
              case 40:
                Eu = Zu - qu < Xu ? Xu : Zu - qu, fu && fu(Eu, uu)
            }
          })), Mu(Du(ju), "getPositionFromValue", (function(uu) {
            var Eu = ju.state.limit,
              su = ju.props,
              Uu = su.min,
              Zu = (uu - Uu) / (su.max - Uu);
            return Math.round(Zu * Eu)
          })), Mu(Du(ju), "getValueFromPosition", (function(uu) {
            var Eu = ju.state.limit,
              su = ju.props,
              Uu = su.orientation,
              Zu = su.min,
              Xu = su.max,
              lu = su.step,
              fu = (0, qu.clamp)(uu, 0, Eu) / (Eu || 1),
              Cu = lu * Math.round(fu * (Xu - Zu) / lu),
              bu = "horizontal" === Uu ? Cu + Zu : Xu - Cu;
            return (0, qu.clamp)(bu, Zu, Xu)
          })), Mu(Du(ju), "position", (function(uu) {
            var Eu = ju.state.grab,
              su = ju.props,
              Uu = su.orientation,
              Zu = su.reverse,
              Xu = ju.slider,
              lu = eu.orientation[Uu].coordinate,
              fu = Zu ? eu.orientation[Uu].reverseDirection : eu.orientation[Uu].direction,
              Cu = "client".concat((0, qu.capitalize)(lu)),
              bu = uu.touches ? uu.touches[0][Cu] : uu[Cu],
              cu = Xu.getBoundingClientRect()[fu],
              Nu = Zu ? cu - bu - Eu : bu - cu - Eu;
            return ju.getValueFromPosition(Nu)
          })), Mu(Du(ju), "coordinates", (function(uu) {
            var Eu = ju.state,
              su = Eu.limit,
              Uu = Eu.grab,
              Zu = ju.props.orientation,
              Xu = ju.getValueFromPosition(uu),
              lu = ju.getPositionFromValue(Xu),
              qu = "horizontal" === Zu ? lu + Uu : lu;
            return {
              fill: "horizontal" === Zu ? qu : su - qu,
              handle: qu,
              label: qu
            }
          })), Mu(Du(ju), "renderLabels", (function(uu) {
            return (0, fu.jsx)("ul", {
              ref: function(uu) {
                ju.labels = uu
              },
              className: (0, Uu.default)("rangeslider__labels"),
              children: uu
            })
          })), ju.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, ju
        }
        return Eu = Xu, (ju = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new lu.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var uu = this,
              Eu = this.props,
              ju = Eu.value,
              su = Eu.orientation,
              Zu = Eu.className,
              Xu = Eu.tooltip,
              lu = Eu.reverse,
              qu = Eu.labels,
              Cu = Eu.min,
              bu = Eu.max,
              Nu = Eu.handleLabel,
              Ou = this.state.active,
              Yu = eu.orientation[su].dimension,
              hu = lu ? eu.orientation[su].reverseDirection : eu.orientation[su].direction,
              Du = this.getPositionFromValue(ju),
              gu = this.coordinates(Du),
              Gu = Mu({}, Yu, "".concat(gu.fill, "px")),
              pu = Mu({}, hu, "".concat(gu.handle, "px")),
              wu = Xu && Ou,
              Ju = [],
              du = Object.keys(qu);
            if (du.length > 0) {
              var au, Pu = cu(du = du.sort((function(uu, Eu) {
                return lu ? uu - Eu : Eu - uu
              })));
              try {
                for (Pu.s(); !(au = Pu.n()).done;) {
                  var ou = au.value,
                    ku = this.getPositionFromValue(ou),
                    mu = this.coordinates(ku),
                    vu = Mu({}, hu, "".concat(mu.label, "px"));
                  Ju.push((0, fu.jsx)("li", {
                    className: (0, Uu.default)("rangeslider__label-item"),
                    "data-value": ou,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: vu,
                    children: this.props.labels[ou]
                  }, ou))
                }
              } catch (Ku) {
                Pu.e(Ku)
              } finally {
                Pu.f()
              }
            }
            return (0, fu.jsxs)("div", {
              ref: function(Eu) {
                uu.slider = Eu
              },
              className: (0, Uu.default)("rangeslider", "rangeslider-".concat(su), {
                "rangeslider-reverse": lu
              }, Zu),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": Cu,
              "aria-valuemax": bu,
              "aria-valuenow": ju,
              "aria-orientation": su,
              children: [(0, fu.jsx)("div", {
                className: "rangeslider__fill",
                style: Gu
              }), (0, fu.jsxs)("div", {
                ref: function(Eu) {
                  uu.handle = Eu
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: pu,
                tabIndex: 0,
                children: [wu && (0, fu.jsx)("div", {
                  ref: function(Eu) {
                    uu.tooltip = Eu
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, fu.jsx)("span", {
                    children: this.handleFormat(ju)
                  })
                }), (0, fu.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: Nu
                })]
              }), qu && this.renderLabels(Ju)]
            })
          }
        }]) && Ou(Eu.prototype, ju), su && Ou(Eu, su), Object.defineProperty(Eu, "prototype", {
          writable: !1
        }), Xu
      }(Zu.Component);
    Mu(Gu, "propTypes", {
      min: Xu.default.number,
      max: Xu.default.number,
      step: Xu.default.number,
      value: Xu.default.number,
      orientation: Xu.default.string,
      tooltip: Xu.default.bool,
      reverse: Xu.default.bool,
      labels: Xu.default.object,
      handleLabel: Xu.default.string,
      format: Xu.default.func,
      onChangeStart: Xu.default.func,
      onChange: Xu.default.func,
      onChangeComplete: Xu.default.func
    }), Mu(Gu, "defaultProps", {
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
    var pu = Gu;
    Eu.default = pu
  },
  5158: (uu, Eu, ju) => {
    var su;
    Eu.c = void 0;
    var Uu = ((su = ju(5160)) && su.__esModule ? su : {
      default: su
    }).default;
    Eu.c = Uu
  },
  5170: (uu, Eu) => {
    Object.defineProperty(Eu, "__esModule", {
      value: !0
    }), Eu.capitalize = function(uu) {
      return uu.charAt(0).toUpperCase() + uu.substr(1)
    }, Eu.clamp = function(uu, Eu, ju) {
      return Math.min(Math.max(uu, Eu), ju)
    }
  },
  5131: (uu, Eu, ju) => {
    var su = ju(5135);

    function Uu() {}

    function Zu() {}
    Zu.resetWarningCache = Uu, uu.exports = function() {
      function uu(uu, Eu, ju, Uu, Zu, Xu) {
        if (Xu !== su) {
          var lu = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw lu.name = "Invariant Violation", lu
        }
      }

      function Eu() {
        return uu
      }
      uu.isRequired = uu;
      var ju = {
        array: uu,
        bigint: uu,
        bool: uu,
        func: uu,
        number: uu,
        object: uu,
        string: uu,
        symbol: uu,
        any: uu,
        arrayOf: Eu,
        element: uu,
        elementType: uu,
        instanceOf: Eu,
        node: uu,
        objectOf: Eu,
        oneOf: Eu,
        oneOfType: Eu,
        shape: Eu,
        exact: Eu,
        checkPropTypes: Zu,
        resetWarningCache: Uu
      };
      return ju.PropTypes = ju, ju
    }
  },
  5128: (uu, Eu, ju) => {
    uu.exports = ju(5131)()
  },
  5135: uu => {
    uu.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5166: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => Ju
    });
    var su = function() {
        if ("undefined" !== typeof Map) return Map;

        function uu(uu, Eu) {
          var ju = -1;
          return uu.some((function(uu, su) {
            return uu[0] === Eu && (ju = su, !0)
          })), ju
        }
        return function() {
          function Eu() {
            this.__entries__ = []
          }
          return Object.defineProperty(Eu.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), Eu.prototype.get = function(Eu) {
            var ju = uu(this.__entries__, Eu),
              su = this.__entries__[ju];
            return su && su[1]
          }, Eu.prototype.set = function(Eu, ju) {
            var su = uu(this.__entries__, Eu);
            ~su ? this.__entries__[su][1] = ju : this.__entries__.push([Eu, ju])
          }, Eu.prototype.delete = function(Eu) {
            var ju = this.__entries__,
              su = uu(ju, Eu);
            ~su && ju.splice(su, 1)
          }, Eu.prototype.has = function(Eu) {
            return !!~uu(this.__entries__, Eu)
          }, Eu.prototype.clear = function() {
            this.__entries__.splice(0)
          }, Eu.prototype.forEach = function(uu, Eu) {
            void 0 === Eu && (Eu = null);
            for (var ju = 0, su = this.__entries__; ju < su.length; ju++) {
              var Uu = su[ju];
              uu.call(Eu, Uu[1], Uu[0])
            }
          }, Eu
        }()
      }(),
      Uu = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      Zu = "undefined" !== typeof ju.g && ju.g.Math === Math ? ju.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      Xu = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(Zu) : function(uu) {
        return setTimeout((function() {
          return uu(Date.now())
        }), 1e3 / 60)
      };
    var lu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      qu = "undefined" !== typeof MutationObserver,
      fu = function() {
        function uu() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(uu, Eu) {
            var ju = !1,
              su = !1,
              Uu = 0;

            function Zu() {
              ju && (ju = !1, uu()), su && qu()
            }

            function lu() {
              Xu(Zu)
            }

            function qu() {
              var uu = Date.now();
              if (ju) {
                if (uu - Uu < 2) return;
                su = !0
              } else ju = !0, su = !1, setTimeout(lu, Eu);
              Uu = uu
            }
            return qu
          }(this.refresh.bind(this), 20)
        }
        return uu.prototype.addObserver = function(uu) {
          ~this.observers_.indexOf(uu) || this.observers_.push(uu), this.connected_ || this.connect_()
        }, uu.prototype.removeObserver = function(uu) {
          var Eu = this.observers_,
            ju = Eu.indexOf(uu);
          ~ju && Eu.splice(ju, 1), !Eu.length && this.connected_ && this.disconnect_()
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
          Uu && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, uu.prototype.disconnect_ = function() {
          Uu && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, uu.prototype.onTransitionEnd_ = function(uu) {
          var Eu = uu.propertyName,
            ju = void 0 === Eu ? "" : Eu;
          lu.some((function(uu) {
            return !!~ju.indexOf(uu)
          })) && this.refresh()
        }, uu.getInstance = function() {
          return this.instance_ || (this.instance_ = new uu), this.instance_
        }, uu.instance_ = null, uu
      }(),
      Cu = function(uu, Eu) {
        for (var ju = 0, su = Object.keys(Eu); ju < su.length; ju++) {
          var Uu = su[ju];
          Object.defineProperty(uu, Uu, {
            value: Eu[Uu],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return uu
      },
      bu = function(uu) {
        return uu && uu.ownerDocument && uu.ownerDocument.defaultView || Zu
      },
      cu = gu(0, 0, 0, 0);

    function Nu(uu) {
      return parseFloat(uu) || 0
    }

    function Ou(uu) {
      for (var Eu = [], ju = 1; ju < arguments.length; ju++) Eu[ju - 1] = arguments[ju];
      return Eu.reduce((function(Eu, ju) {
        return Eu + Nu(uu["border-" + ju + "-width"])
      }), 0)
    }

    function Yu(uu) {
      var Eu = uu.clientWidth,
        ju = uu.clientHeight;
      if (!Eu && !ju) return cu;
      var su = bu(uu).getComputedStyle(uu),
        Uu = function(uu) {
          for (var Eu = {}, ju = 0, su = ["top", "right", "bottom", "left"]; ju < su.length; ju++) {
            var Uu = su[ju],
              Zu = uu["padding-" + Uu];
            Eu[Uu] = Nu(Zu)
          }
          return Eu
        }(su),
        Zu = Uu.left + Uu.right,
        Xu = Uu.top + Uu.bottom,
        lu = Nu(su.width),
        qu = Nu(su.height);
      if ("border-box" === su.boxSizing && (Math.round(lu + Zu) !== Eu && (lu -= Ou(su, "left", "right") + Zu), Math.round(qu + Xu) !== ju && (qu -= Ou(su, "top", "bottom") + Xu)), ! function(uu) {
          return uu === bu(uu).document.documentElement
        }(uu)) {
        var fu = Math.round(lu + Zu) - Eu,
          Cu = Math.round(qu + Xu) - ju;
        1 !== Math.abs(fu) && (lu -= fu), 1 !== Math.abs(Cu) && (qu -= Cu)
      }
      return gu(Uu.left, Uu.top, lu, qu)
    }
    var hu = "undefined" !== typeof SVGGraphicsElement ? function(uu) {
      return uu instanceof bu(uu).SVGGraphicsElement
    } : function(uu) {
      return uu instanceof bu(uu).SVGElement && "function" === typeof uu.getBBox
    };

    function Du(uu) {
      return Uu ? hu(uu) ? function(uu) {
        var Eu = uu.getBBox();
        return gu(0, 0, Eu.width, Eu.height)
      }(uu) : Yu(uu) : cu
    }

    function gu(uu, Eu, ju, su) {
      return {
        x: uu,
        y: Eu,
        width: ju,
        height: su
      }
    }
    var Mu = function() {
        function uu(uu) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = gu(0, 0, 0, 0), this.target = uu
        }
        return uu.prototype.isActive = function() {
          var uu = Du(this.target);
          return this.contentRect_ = uu, uu.width !== this.broadcastWidth || uu.height !== this.broadcastHeight
        }, uu.prototype.broadcastRect = function() {
          var uu = this.contentRect_;
          return this.broadcastWidth = uu.width, this.broadcastHeight = uu.height, uu
        }, uu
      }(),
      eu = function(uu, Eu) {
        var ju = function(uu) {
          var Eu = uu.x,
            ju = uu.y,
            su = uu.width,
            Uu = uu.height,
            Zu = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            Xu = Object.create(Zu.prototype);
          return Cu(Xu, {
            x: Eu,
            y: ju,
            width: su,
            height: Uu,
            top: ju,
            right: Eu + su,
            bottom: Uu + ju,
            left: Eu
          }), Xu
        }(Eu);
        Cu(this, {
          target: uu,
          contentRect: ju
        })
      },
      Gu = function() {
        function uu(uu, Eu, ju) {
          if (this.activeObservations_ = [], this.observations_ = new su, "function" !== typeof uu) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = uu, this.controller_ = Eu, this.callbackCtx_ = ju
        }
        return uu.prototype.observe = function(uu) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(uu instanceof bu(uu).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Eu = this.observations_;
            Eu.has(uu) || (Eu.set(uu, new Mu(uu)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, uu.prototype.unobserve = function(uu) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(uu instanceof bu(uu).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var Eu = this.observations_;
            Eu.has(uu) && (Eu.delete(uu), Eu.size || this.controller_.removeObserver(this))
          }
        }, uu.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, uu.prototype.gatherActive = function() {
          var uu = this;
          this.clearActive(), this.observations_.forEach((function(Eu) {
            Eu.isActive() && uu.activeObservations_.push(Eu)
          }))
        }, uu.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var uu = this.callbackCtx_,
              Eu = this.activeObservations_.map((function(uu) {
                return new eu(uu.target, uu.broadcastRect())
              }));
            this.callback_.call(uu, Eu, uu), this.clearActive()
          }
        }, uu.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, uu.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, uu
      }(),
      pu = "undefined" !== typeof WeakMap ? new WeakMap : new su,
      wu = function uu(Eu) {
        if (!(this instanceof uu)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var ju = fu.getInstance(),
          su = new Gu(Eu, ju, this);
        pu.set(this, su)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(uu) {
      wu.prototype[uu] = function() {
        var Eu;
        return (Eu = pu.get(this))[uu].apply(Eu, arguments)
      }
    }));
    const Ju = "undefined" !== typeof Zu.ResizeObserver ? Zu.ResizeObserver : wu
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);