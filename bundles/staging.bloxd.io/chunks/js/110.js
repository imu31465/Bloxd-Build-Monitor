export const id = 110;
export const ids = [110];
export const modules = {
  5087: (BB, jB, zB) => {
    function QB(BB) {
      return QB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, QB(BB)
    }
    Object.defineProperty(jB, "__esModule", {
      value: !0
    }), jB.default = void 0;
    var nB = pB(zB(1091)),
      dB = function(BB, jB) {
        if (!jB && BB && BB.__esModule) return BB;
        if (null === BB || "object" !== QB(BB) && "function" !== typeof BB) return {
          default: BB
        };
        var zB = aB(jB);
        if (zB && zB.has(BB)) return zB.get(BB);
        var nB = {},
          dB = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var IB in BB)
          if ("default" !== IB && Object.prototype.hasOwnProperty.call(BB, IB)) {
            var NB = dB ? Object.getOwnPropertyDescriptor(BB, IB) : null;
            NB && (NB.get || NB.set) ? Object.defineProperty(nB, IB, NB) : nB[IB] = BB[IB]
          } nB.default = BB, zB && zB.set(BB, nB);
        return nB
      }(zB(62)),
      IB = pB(zB(5045)),
      NB = pB(zB(5091)),
      uB = zB(5094),
      UB = zB(1148);

    function aB(BB) {
      if ("function" !== typeof WeakMap) return null;
      var jB = new WeakMap,
        zB = new WeakMap;
      return (aB = function(BB) {
        return BB ? zB : jB
      })(BB)
    }

    function pB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function rB(BB, jB) {
      var zB = "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!zB) {
        if (Array.isArray(BB) || (zB = function(BB, jB) {
            if (!BB) return;
            if ("string" === typeof BB) return sB(BB, jB);
            var zB = Object.prototype.toString.call(BB).slice(8, -1);
            "Object" === zB && BB.constructor && (zB = BB.constructor.name);
            if ("Map" === zB || "Set" === zB) return Array.from(BB);
            if ("Arguments" === zB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(zB)) return sB(BB, jB)
          }(BB)) || jB && BB && "number" === typeof BB.length) {
          zB && (BB = zB);
          var QB = 0,
            nB = function() {};
          return {
            s: nB,
            n: function() {
              return QB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[QB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: nB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var dB, IB = !0,
        NB = !1;
      return {
        s: function() {
          zB = zB.call(BB)
        },
        n: function() {
          var BB = zB.next();
          return IB = BB.done, BB
        },
        e: function(BB) {
          NB = !0, dB = BB
        },
        f: function() {
          try {
            IB || null == zB.return || zB.return()
          } finally {
            if (NB) throw dB
          }
        }
      }
    }

    function sB(BB, jB) {
      (null == jB || jB > BB.length) && (jB = BB.length);
      for (var zB = 0, QB = new Array(jB); zB < jB; zB++) QB[zB] = BB[zB];
      return QB
    }

    function JB(BB, jB) {
      for (var zB = 0; zB < jB.length; zB++) {
        var QB = jB[zB];
        QB.enumerable = QB.enumerable || !1, QB.configurable = !0, "value" in QB && (QB.writable = !0), Object.defineProperty(BB, QB.key, QB)
      }
    }

    function mB(BB, jB) {
      return mB = Object.setPrototypeOf || function(BB, jB) {
        return BB.__proto__ = jB, BB
      }, mB(BB, jB)
    }

    function yB(BB) {
      var jB = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (BB) {
          return !1
        }
      }();
      return function() {
        var zB, nB = GB(BB);
        if (jB) {
          var dB = GB(this).constructor;
          zB = Reflect.construct(nB, arguments, dB)
        } else zB = nB.apply(this, arguments);
        return function(BB, jB) {
          if (jB && ("object" === QB(jB) || "function" === typeof jB)) return jB;
          if (void 0 !== jB) throw new TypeError("Derived constructors may only return object or undefined");
          return kB(BB)
        }(this, zB)
      }
    }

    function kB(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function GB(BB) {
      return GB = Object.setPrototypeOf ? Object.getPrototypeOf : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, GB(BB)
    }

    function LB(BB, jB, zB) {
      return jB in BB ? Object.defineProperty(BB, jB, {
        value: zB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[jB] = zB, BB
    }
    var gB = {
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
      tB = function(BB) {
        ! function(BB, jB) {
          if ("function" !== typeof jB && null !== jB) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(BB, "prototype", {
            value: Object.create(jB && jB.prototype, {
              constructor: {
                value: BB,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), jB && mB(BB, jB)
        }(IB, BB);
        var jB, zB, QB, dB = yB(IB);

        function IB(BB, jB) {
          var zB;
          return function(BB, jB) {
            if (!(BB instanceof jB)) throw new TypeError("Cannot call a class as a function")
          }(this, IB), LB(kB(zB = dB.call(this, BB, jB)), "handleFormat", (function(BB) {
            var jB = zB.props.format;
            return jB ? jB(BB) : BB
          })), LB(kB(zB), "handleUpdate", (function() {
            if (zB.slider) {
              var BB = zB.props.orientation,
                jB = (0, uB.capitalize)(gB.orientation[BB].dimension),
                QB = zB.slider["offset".concat(jB)],
                nB = zB.handle["offset".concat(jB)];
              zB.setState({
                limit: QB - nB,
                grab: nB / 2
              })
            }
          })), LB(kB(zB), "handleStart", (function(BB) {
            var jB = zB.props.onChangeStart;
            document.addEventListener("mousemove", zB.handleDrag), document.addEventListener("mouseup", zB.handleEnd), zB.setState({
              active: !0
            }, (function() {
              jB && jB(BB)
            }))
          })), LB(kB(zB), "handleDrag", (function(BB) {
            BB.stopPropagation();
            var jB = zB.props.onChange,
              QB = BB.target,
              nB = QB.className,
              dB = QB.classList,
              IB = QB.dataset;
            if (jB && "rangeslider__labels" !== nB) {
              var NB = zB.position(BB);
              dB && dB.contains("rangeslider__label-item") && IB.value && (NB = parseFloat(IB.value)), jB && jB(NB, BB)
            }
          })), LB(kB(zB), "handleEnd", (function(BB) {
            var jB = zB.props.onChangeComplete;
            zB.setState({
              active: !1
            }, (function() {
              jB && jB(BB)
            })), document.removeEventListener("mousemove", zB.handleDrag), document.removeEventListener("mouseup", zB.handleEnd)
          })), LB(kB(zB), "handleKeyDown", (function(BB) {
            BB.preventDefault();
            var jB, QB = BB.keyCode,
              nB = zB.props,
              dB = nB.value,
              IB = nB.min,
              NB = nB.max,
              uB = nB.step,
              UB = nB.onChange;
            switch (QB) {
              case 38:
              case 39:
                jB = dB + uB > NB ? NB : dB + uB, UB && UB(jB, BB);
                break;
              case 37:
              case 40:
                jB = dB - uB < IB ? IB : dB - uB, UB && UB(jB, BB)
            }
          })), LB(kB(zB), "getPositionFromValue", (function(BB) {
            var jB = zB.state.limit,
              QB = zB.props,
              nB = QB.min,
              dB = (BB - nB) / (QB.max - nB);
            return Math.round(dB * jB)
          })), LB(kB(zB), "getValueFromPosition", (function(BB) {
            var jB = zB.state.limit,
              QB = zB.props,
              nB = QB.orientation,
              dB = QB.min,
              IB = QB.max,
              NB = QB.step,
              UB = (0, uB.clamp)(BB, 0, jB) / (jB || 1),
              aB = NB * Math.round(UB * (IB - dB) / NB),
              pB = "horizontal" === nB ? aB + dB : IB - aB;
            return (0, uB.clamp)(pB, dB, IB)
          })), LB(kB(zB), "position", (function(BB) {
            var jB = zB.state.grab,
              QB = zB.props,
              nB = QB.orientation,
              dB = QB.reverse,
              IB = zB.slider,
              NB = gB.orientation[nB].coordinate,
              UB = dB ? gB.orientation[nB].reverseDirection : gB.orientation[nB].direction,
              aB = "client".concat((0, uB.capitalize)(NB)),
              pB = BB.touches ? BB.touches[0][aB] : BB[aB],
              rB = IB.getBoundingClientRect()[UB],
              sB = dB ? rB - pB - jB : pB - rB - jB;
            return zB.getValueFromPosition(sB)
          })), LB(kB(zB), "coordinates", (function(BB) {
            var jB = zB.state,
              QB = jB.limit,
              nB = jB.grab,
              dB = zB.props.orientation,
              IB = zB.getValueFromPosition(BB),
              NB = zB.getPositionFromValue(IB),
              uB = "horizontal" === dB ? NB + nB : NB;
            return {
              fill: "horizontal" === dB ? uB : QB - uB,
              handle: uB,
              label: uB
            }
          })), LB(kB(zB), "renderLabels", (function(BB) {
            return (0, UB.jsx)("ul", {
              ref: function(BB) {
                zB.labels = BB
              },
              className: (0, nB.default)("rangeslider__labels"),
              children: BB
            })
          })), zB.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, zB
        }
        return jB = IB, (zB = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new NB.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              jB = this.props,
              zB = jB.value,
              QB = jB.orientation,
              dB = jB.className,
              IB = jB.tooltip,
              NB = jB.reverse,
              uB = jB.labels,
              aB = jB.min,
              pB = jB.max,
              sB = jB.handleLabel,
              JB = this.state.active,
              mB = gB.orientation[QB].dimension,
              yB = NB ? gB.orientation[QB].reverseDirection : gB.orientation[QB].direction,
              kB = this.getPositionFromValue(zB),
              GB = this.coordinates(kB),
              tB = LB({}, mB, "".concat(GB.fill, "px")),
              SB = LB({}, yB, "".concat(GB.handle, "px")),
              MB = IB && JB,
              EB = [],
              iB = Object.keys(uB);
            if (iB.length > 0) {
              var qB, fB = rB(iB = iB.sort((function(BB, jB) {
                return NB ? BB - jB : jB - BB
              })));
              try {
                for (fB.s(); !(qB = fB.n()).done;) {
                  var oB = qB.value,
                    HB = this.getPositionFromValue(oB),
                    DB = this.coordinates(HB),
                    FB = LB({}, yB, "".concat(DB.label, "px"));
                  EB.push((0, UB.jsx)("li", {
                    className: (0, nB.default)("rangeslider__label-item"),
                    "data-value": oB,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: FB,
                    children: this.props.labels[oB]
                  }, oB))
                }
              } catch (YB) {
                fB.e(YB)
              } finally {
                fB.f()
              }
            }
            return (0, UB.jsxs)("div", {
              ref: function(jB) {
                BB.slider = jB
              },
              className: (0, nB.default)("rangeslider", "rangeslider-".concat(QB), {
                "rangeslider-reverse": NB
              }, dB),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": aB,
              "aria-valuemax": pB,
              "aria-valuenow": zB,
              "aria-orientation": QB,
              children: [(0, UB.jsx)("div", {
                className: "rangeslider__fill",
                style: tB
              }), (0, UB.jsxs)("div", {
                ref: function(jB) {
                  BB.handle = jB
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: SB,
                tabIndex: 0,
                children: [MB && (0, UB.jsx)("div", {
                  ref: function(jB) {
                    BB.tooltip = jB
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, UB.jsx)("span", {
                    children: this.handleFormat(zB)
                  })
                }), (0, UB.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: sB
                })]
              }), uB && this.renderLabels(EB)]
            })
          }
        }]) && JB(jB.prototype, zB), QB && JB(jB, QB), Object.defineProperty(jB, "prototype", {
          writable: !1
        }), IB
      }(dB.Component);
    LB(tB, "propTypes", {
      min: IB.default.number,
      max: IB.default.number,
      step: IB.default.number,
      value: IB.default.number,
      orientation: IB.default.string,
      tooltip: IB.default.bool,
      reverse: IB.default.bool,
      labels: IB.default.object,
      handleLabel: IB.default.string,
      format: IB.default.func,
      onChangeStart: IB.default.func,
      onChange: IB.default.func,
      onChangeComplete: IB.default.func
    }), LB(tB, "defaultProps", {
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
    var SB = tB;
    jB.default = SB
  },
  5081: (BB, jB, zB) => {
    var QB;
    jB.c = void 0;
    var nB = ((QB = zB(5087)) && QB.__esModule ? QB : {
      default: QB
    }).default;
    jB.c = nB
  },
  5094: (BB, jB) => {
    Object.defineProperty(jB, "__esModule", {
      value: !0
    }), jB.capitalize = function(BB) {
      return BB.charAt(0).toUpperCase() + BB.substr(1)
    }, jB.clamp = function(BB, jB, zB) {
      return Math.min(Math.max(BB, jB), zB)
    }
  },
  5053: (BB, jB, zB) => {
    var QB = zB(5058);

    function nB() {}

    function dB() {}
    dB.resetWarningCache = nB, BB.exports = function() {
      function BB(BB, jB, zB, nB, dB, IB) {
        if (IB !== QB) {
          var NB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw NB.name = "Invariant Violation", NB
        }
      }

      function jB() {
        return BB
      }
      BB.isRequired = BB;
      var zB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: jB,
        element: BB,
        elementType: BB,
        instanceOf: jB,
        node: BB,
        objectOf: jB,
        oneOf: jB,
        oneOfType: jB,
        shape: jB,
        exact: jB,
        checkPropTypes: dB,
        resetWarningCache: nB
      };
      return zB.PropTypes = zB, zB
    }
  },
  5045: (BB, jB, zB) => {
    BB.exports = zB(5053)()
  },
  5058: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5091: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => EB
    });
    var QB = function() {
        if ("undefined" !== typeof Map) return Map;

        function BB(BB, jB) {
          var zB = -1;
          return BB.some((function(BB, QB) {
            return BB[0] === jB && (zB = QB, !0)
          })), zB
        }
        return function() {
          function jB() {
            this.__entries__ = []
          }
          return Object.defineProperty(jB.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), jB.prototype.get = function(jB) {
            var zB = BB(this.__entries__, jB),
              QB = this.__entries__[zB];
            return QB && QB[1]
          }, jB.prototype.set = function(jB, zB) {
            var QB = BB(this.__entries__, jB);
            ~QB ? this.__entries__[QB][1] = zB : this.__entries__.push([jB, zB])
          }, jB.prototype.delete = function(jB) {
            var zB = this.__entries__,
              QB = BB(zB, jB);
            ~QB && zB.splice(QB, 1)
          }, jB.prototype.has = function(jB) {
            return !!~BB(this.__entries__, jB)
          }, jB.prototype.clear = function() {
            this.__entries__.splice(0)
          }, jB.prototype.forEach = function(BB, jB) {
            void 0 === jB && (jB = null);
            for (var zB = 0, QB = this.__entries__; zB < QB.length; zB++) {
              var nB = QB[zB];
              BB.call(jB, nB[1], nB[0])
            }
          }, jB
        }()
      }(),
      nB = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      dB = "undefined" !== typeof zB.g && zB.g.Math === Math ? zB.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      IB = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(dB) : function(BB) {
        return setTimeout((function() {
          return BB(Date.now())
        }), 1e3 / 60)
      };
    var NB = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      uB = "undefined" !== typeof MutationObserver,
      UB = function() {
        function BB() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(BB, jB) {
            var zB = !1,
              QB = !1,
              nB = 0;

            function dB() {
              zB && (zB = !1, BB()), QB && uB()
            }

            function NB() {
              IB(dB)
            }

            function uB() {
              var BB = Date.now();
              if (zB) {
                if (BB - nB < 2) return;
                QB = !0
              } else zB = !0, QB = !1, setTimeout(NB, jB);
              nB = BB
            }
            return uB
          }(this.refresh.bind(this), 20)
        }
        return BB.prototype.addObserver = function(BB) {
          ~this.observers_.indexOf(BB) || this.observers_.push(BB), this.connected_ || this.connect_()
        }, BB.prototype.removeObserver = function(BB) {
          var jB = this.observers_,
            zB = jB.indexOf(BB);
          ~zB && jB.splice(zB, 1), !jB.length && this.connected_ && this.disconnect_()
        }, BB.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, BB.prototype.updateObservers_ = function() {
          var BB = this.observers_.filter((function(BB) {
            return BB.gatherActive(), BB.hasActive()
          }));
          return BB.forEach((function(BB) {
            return BB.broadcastActive()
          })), BB.length > 0
        }, BB.prototype.connect_ = function() {
          nB && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), uB ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, BB.prototype.disconnect_ = function() {
          nB && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, BB.prototype.onTransitionEnd_ = function(BB) {
          var jB = BB.propertyName,
            zB = void 0 === jB ? "" : jB;
          NB.some((function(BB) {
            return !!~zB.indexOf(BB)
          })) && this.refresh()
        }, BB.getInstance = function() {
          return this.instance_ || (this.instance_ = new BB), this.instance_
        }, BB.instance_ = null, BB
      }(),
      aB = function(BB, jB) {
        for (var zB = 0, QB = Object.keys(jB); zB < QB.length; zB++) {
          var nB = QB[zB];
          Object.defineProperty(BB, nB, {
            value: jB[nB],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return BB
      },
      pB = function(BB) {
        return BB && BB.ownerDocument && BB.ownerDocument.defaultView || dB
      },
      rB = GB(0, 0, 0, 0);

    function sB(BB) {
      return parseFloat(BB) || 0
    }

    function JB(BB) {
      for (var jB = [], zB = 1; zB < arguments.length; zB++) jB[zB - 1] = arguments[zB];
      return jB.reduce((function(jB, zB) {
        return jB + sB(BB["border-" + zB + "-width"])
      }), 0)
    }

    function mB(BB) {
      var jB = BB.clientWidth,
        zB = BB.clientHeight;
      if (!jB && !zB) return rB;
      var QB = pB(BB).getComputedStyle(BB),
        nB = function(BB) {
          for (var jB = {}, zB = 0, QB = ["top", "right", "bottom", "left"]; zB < QB.length; zB++) {
            var nB = QB[zB],
              dB = BB["padding-" + nB];
            jB[nB] = sB(dB)
          }
          return jB
        }(QB),
        dB = nB.left + nB.right,
        IB = nB.top + nB.bottom,
        NB = sB(QB.width),
        uB = sB(QB.height);
      if ("border-box" === QB.boxSizing && (Math.round(NB + dB) !== jB && (NB -= JB(QB, "left", "right") + dB), Math.round(uB + IB) !== zB && (uB -= JB(QB, "top", "bottom") + IB)), ! function(BB) {
          return BB === pB(BB).document.documentElement
        }(BB)) {
        var UB = Math.round(NB + dB) - jB,
          aB = Math.round(uB + IB) - zB;
        1 !== Math.abs(UB) && (NB -= UB), 1 !== Math.abs(aB) && (uB -= aB)
      }
      return GB(nB.left, nB.top, NB, uB)
    }
    var yB = "undefined" !== typeof SVGGraphicsElement ? function(BB) {
      return BB instanceof pB(BB).SVGGraphicsElement
    } : function(BB) {
      return BB instanceof pB(BB).SVGElement && "function" === typeof BB.getBBox
    };

    function kB(BB) {
      return nB ? yB(BB) ? function(BB) {
        var jB = BB.getBBox();
        return GB(0, 0, jB.width, jB.height)
      }(BB) : mB(BB) : rB
    }

    function GB(BB, jB, zB, QB) {
      return {
        x: BB,
        y: jB,
        width: zB,
        height: QB
      }
    }
    var LB = function() {
        function BB(BB) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = GB(0, 0, 0, 0), this.target = BB
        }
        return BB.prototype.isActive = function() {
          var BB = kB(this.target);
          return this.contentRect_ = BB, BB.width !== this.broadcastWidth || BB.height !== this.broadcastHeight
        }, BB.prototype.broadcastRect = function() {
          var BB = this.contentRect_;
          return this.broadcastWidth = BB.width, this.broadcastHeight = BB.height, BB
        }, BB
      }(),
      gB = function(BB, jB) {
        var zB = function(BB) {
          var jB = BB.x,
            zB = BB.y,
            QB = BB.width,
            nB = BB.height,
            dB = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            IB = Object.create(dB.prototype);
          return aB(IB, {
            x: jB,
            y: zB,
            width: QB,
            height: nB,
            top: zB,
            right: jB + QB,
            bottom: nB + zB,
            left: jB
          }), IB
        }(jB);
        aB(this, {
          target: BB,
          contentRect: zB
        })
      },
      tB = function() {
        function BB(BB, jB, zB) {
          if (this.activeObservations_ = [], this.observations_ = new QB, "function" !== typeof BB) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = BB, this.controller_ = jB, this.callbackCtx_ = zB
        }
        return BB.prototype.observe = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof pB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var jB = this.observations_;
            jB.has(BB) || (jB.set(BB, new LB(BB)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, BB.prototype.unobserve = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof pB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var jB = this.observations_;
            jB.has(BB) && (jB.delete(BB), jB.size || this.controller_.removeObserver(this))
          }
        }, BB.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, BB.prototype.gatherActive = function() {
          var BB = this;
          this.clearActive(), this.observations_.forEach((function(jB) {
            jB.isActive() && BB.activeObservations_.push(jB)
          }))
        }, BB.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var BB = this.callbackCtx_,
              jB = this.activeObservations_.map((function(BB) {
                return new gB(BB.target, BB.broadcastRect())
              }));
            this.callback_.call(BB, jB, BB), this.clearActive()
          }
        }, BB.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, BB.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, BB
      }(),
      SB = "undefined" !== typeof WeakMap ? new WeakMap : new QB,
      MB = function BB(jB) {
        if (!(this instanceof BB)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var zB = UB.getInstance(),
          QB = new tB(jB, zB, this);
        SB.set(this, QB)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(BB) {
      MB.prototype[BB] = function() {
        var jB;
        return (jB = SB.get(this))[BB].apply(jB, arguments)
      }
    }));
    const EB = "undefined" !== typeof dB.ResizeObserver ? dB.ResizeObserver : MB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);