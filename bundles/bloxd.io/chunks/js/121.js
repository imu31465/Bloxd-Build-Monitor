export const id = 121;
export const ids = [121];
export const modules = {
  5492: (BB, OB, GB) => {
    function YB(BB) {
      return YB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, YB(BB)
    }
    Object.defineProperty(OB, "__esModule", {
      value: !0
    }), OB.default = void 0;
    var DB = PB(GB(1090)),
      QB = function(BB, OB) {
        if (!OB && BB && BB.__esModule) return BB;
        if (null === BB || "object" !== YB(BB) && "function" !== typeof BB) return {
          default: BB
        };
        var GB = MB(OB);
        if (GB && GB.has(BB)) return GB.get(BB);
        var DB = {},
          QB = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var oB in BB)
          if ("default" !== oB && Object.prototype.hasOwnProperty.call(BB, oB)) {
            var jB = QB ? Object.getOwnPropertyDescriptor(BB, oB) : null;
            jB && (jB.get || jB.set) ? Object.defineProperty(DB, oB, jB) : DB[oB] = BB[oB]
          } DB.default = BB, GB && GB.set(BB, DB);
        return DB
      }(GB(56)),
      oB = PB(GB(5456)),
      jB = PB(GB(5500)),
      yB = GB(5508),
      JB = GB(1282);

    function MB(BB) {
      if ("function" !== typeof WeakMap) return null;
      var OB = new WeakMap,
        GB = new WeakMap;
      return (MB = function(BB) {
        return BB ? GB : OB
      })(BB)
    }

    function PB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function zB(BB, OB) {
      var GB = "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!GB) {
        if (Array.isArray(BB) || (GB = function(BB, OB) {
            if (!BB) return;
            if ("string" === typeof BB) return lB(BB, OB);
            var GB = Object.prototype.toString.call(BB).slice(8, -1);
            "Object" === GB && BB.constructor && (GB = BB.constructor.name);
            if ("Map" === GB || "Set" === GB) return Array.from(BB);
            if ("Arguments" === GB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(GB)) return lB(BB, OB)
          }(BB)) || OB && BB && "number" === typeof BB.length) {
          GB && (BB = GB);
          var YB = 0,
            DB = function() {};
          return {
            s: DB,
            n: function() {
              return YB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[YB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: DB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var QB, oB = !0,
        jB = !1;
      return {
        s: function() {
          GB = GB.call(BB)
        },
        n: function() {
          var BB = GB.next();
          return oB = BB.done, BB
        },
        e: function(BB) {
          jB = !0, QB = BB
        },
        f: function() {
          try {
            oB || null == GB.return || GB.return()
          } finally {
            if (jB) throw QB
          }
        }
      }
    }

    function lB(BB, OB) {
      (null == OB || OB > BB.length) && (OB = BB.length);
      for (var GB = 0, YB = new Array(OB); GB < OB; GB++) YB[GB] = BB[GB];
      return YB
    }

    function pB(BB, OB) {
      for (var GB = 0; GB < OB.length; GB++) {
        var YB = OB[GB];
        YB.enumerable = YB.enumerable || !1, YB.configurable = !0, "value" in YB && (YB.writable = !0), Object.defineProperty(BB, YB.key, YB)
      }
    }

    function qB(BB, OB) {
      return qB = Object.setPrototypeOf || function(BB, OB) {
        return BB.__proto__ = OB, BB
      }, qB(BB, OB)
    }

    function ZB(BB) {
      var OB = function() {
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
        var GB, DB = RB(BB);
        if (OB) {
          var QB = RB(this).constructor;
          GB = Reflect.construct(DB, arguments, QB)
        } else GB = DB.apply(this, arguments);
        return function(BB, OB) {
          if (OB && ("object" === YB(OB) || "function" === typeof OB)) return OB;
          if (void 0 !== OB) throw new TypeError("Derived constructors may only return object or undefined");
          return NB(BB)
        }(this, GB)
      }
    }

    function NB(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function RB(BB) {
      return RB = Object.setPrototypeOf ? Object.getPrototypeOf : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, RB(BB)
    }

    function WB(BB, OB, GB) {
      return OB in BB ? Object.defineProperty(BB, OB, {
        value: GB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[OB] = GB, BB
    }
    var AB = {
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
      VB = function(BB) {
        ! function(BB, OB) {
          if ("function" !== typeof OB && null !== OB) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(BB, "prototype", {
            value: Object.create(OB && OB.prototype, {
              constructor: {
                value: BB,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), OB && qB(BB, OB)
        }(oB, BB);
        var OB, GB, YB, QB = ZB(oB);

        function oB(BB, OB) {
          var GB;
          return function(BB, OB) {
            if (!(BB instanceof OB)) throw new TypeError("Cannot call a class as a function")
          }(this, oB), WB(NB(GB = QB.call(this, BB, OB)), "handleFormat", (function(BB) {
            var OB = GB.props.format;
            return OB ? OB(BB) : BB
          })), WB(NB(GB), "handleUpdate", (function() {
            if (GB.slider) {
              var BB = GB.props.orientation,
                OB = (0, yB.capitalize)(AB.orientation[BB].dimension),
                YB = GB.slider["offset".concat(OB)],
                DB = GB.handle["offset".concat(OB)];
              GB.setState({
                limit: YB - DB,
                grab: DB / 2
              })
            }
          })), WB(NB(GB), "handleStart", (function(BB) {
            var OB = GB.props.onChangeStart;
            document.addEventListener("mousemove", GB.handleDrag), document.addEventListener("mouseup", GB.handleEnd), GB.setState({
              active: !0
            }, (function() {
              OB && OB(BB)
            }))
          })), WB(NB(GB), "handleDrag", (function(BB) {
            BB.stopPropagation();
            var OB = GB.props.onChange,
              YB = BB.target,
              DB = YB.className,
              QB = YB.classList,
              oB = YB.dataset;
            if (OB && "rangeslider__labels" !== DB) {
              var jB = GB.position(BB);
              QB && QB.contains("rangeslider__label-item") && oB.value && (jB = parseFloat(oB.value)), OB && OB(jB, BB)
            }
          })), WB(NB(GB), "handleEnd", (function(BB) {
            var OB = GB.props.onChangeComplete;
            GB.setState({
              active: !1
            }, (function() {
              OB && OB(BB)
            })), document.removeEventListener("mousemove", GB.handleDrag), document.removeEventListener("mouseup", GB.handleEnd)
          })), WB(NB(GB), "handleKeyDown", (function(BB) {
            BB.preventDefault();
            var OB, YB = BB.keyCode,
              DB = GB.props,
              QB = DB.value,
              oB = DB.min,
              jB = DB.max,
              yB = DB.step,
              JB = DB.onChange;
            switch (YB) {
              case 38:
              case 39:
                OB = QB + yB > jB ? jB : QB + yB, JB && JB(OB, BB);
                break;
              case 37:
              case 40:
                OB = QB - yB < oB ? oB : QB - yB, JB && JB(OB, BB)
            }
          })), WB(NB(GB), "getPositionFromValue", (function(BB) {
            var OB = GB.state.limit,
              YB = GB.props,
              DB = YB.min,
              QB = (BB - DB) / (YB.max - DB);
            return Math.round(QB * OB)
          })), WB(NB(GB), "getValueFromPosition", (function(BB) {
            var OB = GB.state.limit,
              YB = GB.props,
              DB = YB.orientation,
              QB = YB.min,
              oB = YB.max,
              jB = YB.step,
              JB = (0, yB.clamp)(BB, 0, OB) / (OB || 1),
              MB = jB * Math.round(JB * (oB - QB) / jB),
              PB = "horizontal" === DB ? MB + QB : oB - MB;
            return (0, yB.clamp)(PB, QB, oB)
          })), WB(NB(GB), "position", (function(BB) {
            var OB = GB.state.grab,
              YB = GB.props,
              DB = YB.orientation,
              QB = YB.reverse,
              oB = GB.slider,
              jB = AB.orientation[DB].coordinate,
              JB = QB ? AB.orientation[DB].reverseDirection : AB.orientation[DB].direction,
              MB = "client".concat((0, yB.capitalize)(jB)),
              PB = BB.touches ? BB.touches[0][MB] : BB[MB],
              zB = oB.getBoundingClientRect()[JB],
              lB = QB ? zB - PB - OB : PB - zB - OB;
            return GB.getValueFromPosition(lB)
          })), WB(NB(GB), "coordinates", (function(BB) {
            var OB = GB.state,
              YB = OB.limit,
              DB = OB.grab,
              QB = GB.props.orientation,
              oB = GB.getValueFromPosition(BB),
              jB = GB.getPositionFromValue(oB),
              yB = "horizontal" === QB ? jB + DB : jB;
            return {
              fill: "horizontal" === QB ? yB : YB - yB,
              handle: yB,
              label: yB
            }
          })), WB(NB(GB), "renderLabels", (function(BB) {
            return (0, JB.jsx)("ul", {
              ref: function(BB) {
                GB.labels = BB
              },
              className: (0, DB.default)("rangeslider__labels"),
              children: BB
            })
          })), GB.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, GB
        }
        return OB = oB, (GB = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new jB.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              OB = this.props,
              GB = OB.value,
              YB = OB.orientation,
              QB = OB.className,
              oB = OB.tooltip,
              jB = OB.reverse,
              yB = OB.labels,
              MB = OB.min,
              PB = OB.max,
              lB = OB.handleLabel,
              pB = this.state.active,
              qB = AB.orientation[YB].dimension,
              ZB = jB ? AB.orientation[YB].reverseDirection : AB.orientation[YB].direction,
              NB = this.getPositionFromValue(GB),
              RB = this.coordinates(NB),
              VB = WB({}, qB, "".concat(RB.fill, "px")),
              SB = WB({}, ZB, "".concat(RB.handle, "px")),
              nB = oB && pB,
              UB = [],
              fB = Object.keys(yB);
            if (fB.length > 0) {
              var kB, dB = zB(fB = fB.sort((function(BB, OB) {
                return jB ? BB - OB : OB - BB
              })));
              try {
                for (dB.s(); !(kB = dB.n()).done;) {
                  var KB = kB.value,
                    uB = this.getPositionFromValue(KB),
                    mB = this.coordinates(uB),
                    IB = WB({}, ZB, "".concat(mB.label, "px"));
                  UB.push((0, JB.jsx)("li", {
                    className: (0, DB.default)("rangeslider__label-item"),
                    "data-value": KB,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: IB,
                    children: this.props.labels[KB]
                  }, KB))
                }
              } catch (FB) {
                dB.e(FB)
              } finally {
                dB.f()
              }
            }
            return (0, JB.jsxs)("div", {
              ref: function(OB) {
                BB.slider = OB
              },
              className: (0, DB.default)("rangeslider", "rangeslider-".concat(YB), {
                "rangeslider-reverse": jB
              }, QB),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": MB,
              "aria-valuemax": PB,
              "aria-valuenow": GB,
              "aria-orientation": YB,
              children: [(0, JB.jsx)("div", {
                className: "rangeslider__fill",
                style: VB
              }), (0, JB.jsxs)("div", {
                ref: function(OB) {
                  BB.handle = OB
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: SB,
                tabIndex: 0,
                children: [nB && (0, JB.jsx)("div", {
                  ref: function(OB) {
                    BB.tooltip = OB
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, JB.jsx)("span", {
                    children: this.handleFormat(GB)
                  })
                }), (0, JB.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: lB
                })]
              }), yB && this.renderLabels(UB)]
            })
          }
        }]) && pB(OB.prototype, GB), YB && pB(OB, YB), Object.defineProperty(OB, "prototype", {
          writable: !1
        }), oB
      }(QB.Component);
    WB(VB, "propTypes", {
      min: oB.default.number,
      max: oB.default.number,
      step: oB.default.number,
      value: oB.default.number,
      orientation: oB.default.string,
      tooltip: oB.default.bool,
      reverse: oB.default.bool,
      labels: oB.default.object,
      handleLabel: oB.default.string,
      format: oB.default.func,
      onChangeStart: oB.default.func,
      onChange: oB.default.func,
      onChangeComplete: oB.default.func
    }), WB(VB, "defaultProps", {
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
    var SB = VB;
    OB.default = SB
  },
  5486: (BB, OB, GB) => {
    var YB;
    OB.b = void 0;
    var DB = ((YB = GB(5492)) && YB.__esModule ? YB : {
      default: YB
    }).default;
    OB.b = DB
  },
  5508: (BB, OB) => {
    Object.defineProperty(OB, "__esModule", {
      value: !0
    }), OB.capitalize = function(BB) {
      return BB.charAt(0).toUpperCase() + BB.substr(1)
    }, OB.clamp = function(BB, OB, GB) {
      return Math.min(Math.max(BB, OB), GB)
    }
  },
  5460: (BB, OB, GB) => {
    var YB = GB(5467);

    function DB() {}

    function QB() {}
    QB.resetWarningCache = DB, BB.exports = function() {
      function BB(BB, OB, GB, DB, QB, oB) {
        if (oB !== YB) {
          var jB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw jB.name = "Invariant Violation", jB
        }
      }

      function OB() {
        return BB
      }
      BB.isRequired = BB;
      var GB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: OB,
        element: BB,
        elementType: BB,
        instanceOf: OB,
        node: BB,
        objectOf: OB,
        oneOf: OB,
        oneOfType: OB,
        shape: OB,
        exact: OB,
        checkPropTypes: QB,
        resetWarningCache: DB
      };
      return GB.PropTypes = GB, GB
    }
  },
  5456: (BB, OB, GB) => {
    BB.exports = GB(5460)()
  },
  5467: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5500: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => UB
    });
    var YB = function() {
        if ("undefined" !== typeof Map) return Map;

        function BB(BB, OB) {
          var GB = -1;
          return BB.some((function(BB, YB) {
            return BB[0] === OB && (GB = YB, !0)
          })), GB
        }
        return function() {
          function OB() {
            this.__entries__ = []
          }
          return Object.defineProperty(OB.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), OB.prototype.get = function(OB) {
            var GB = BB(this.__entries__, OB),
              YB = this.__entries__[GB];
            return YB && YB[1]
          }, OB.prototype.set = function(OB, GB) {
            var YB = BB(this.__entries__, OB);
            ~YB ? this.__entries__[YB][1] = GB : this.__entries__.push([OB, GB])
          }, OB.prototype.delete = function(OB) {
            var GB = this.__entries__,
              YB = BB(GB, OB);
            ~YB && GB.splice(YB, 1)
          }, OB.prototype.has = function(OB) {
            return !!~BB(this.__entries__, OB)
          }, OB.prototype.clear = function() {
            this.__entries__.splice(0)
          }, OB.prototype.forEach = function(BB, OB) {
            void 0 === OB && (OB = null);
            for (var GB = 0, YB = this.__entries__; GB < YB.length; GB++) {
              var DB = YB[GB];
              BB.call(OB, DB[1], DB[0])
            }
          }, OB
        }()
      }(),
      DB = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      QB = "undefined" !== typeof GB.g && GB.g.Math === Math ? GB.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      oB = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(QB) : function(BB) {
        return setTimeout((function() {
          return BB(Date.now())
        }), 1e3 / 60)
      };
    var jB = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      yB = "undefined" !== typeof MutationObserver,
      JB = function() {
        function BB() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(BB, OB) {
            var GB = !1,
              YB = !1,
              DB = 0;

            function QB() {
              GB && (GB = !1, BB()), YB && yB()
            }

            function jB() {
              oB(QB)
            }

            function yB() {
              var BB = Date.now();
              if (GB) {
                if (BB - DB < 2) return;
                YB = !0
              } else GB = !0, YB = !1, setTimeout(jB, OB);
              DB = BB
            }
            return yB
          }(this.refresh.bind(this), 20)
        }
        return BB.prototype.addObserver = function(BB) {
          ~this.observers_.indexOf(BB) || this.observers_.push(BB), this.connected_ || this.connect_()
        }, BB.prototype.removeObserver = function(BB) {
          var OB = this.observers_,
            GB = OB.indexOf(BB);
          ~GB && OB.splice(GB, 1), !OB.length && this.connected_ && this.disconnect_()
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
          DB && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), yB ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, BB.prototype.disconnect_ = function() {
          DB && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, BB.prototype.onTransitionEnd_ = function(BB) {
          var OB = BB.propertyName,
            GB = void 0 === OB ? "" : OB;
          jB.some((function(BB) {
            return !!~GB.indexOf(BB)
          })) && this.refresh()
        }, BB.getInstance = function() {
          return this.instance_ || (this.instance_ = new BB), this.instance_
        }, BB.instance_ = null, BB
      }(),
      MB = function(BB, OB) {
        for (var GB = 0, YB = Object.keys(OB); GB < YB.length; GB++) {
          var DB = YB[GB];
          Object.defineProperty(BB, DB, {
            value: OB[DB],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return BB
      },
      PB = function(BB) {
        return BB && BB.ownerDocument && BB.ownerDocument.defaultView || QB
      },
      zB = RB(0, 0, 0, 0);

    function lB(BB) {
      return parseFloat(BB) || 0
    }

    function pB(BB) {
      for (var OB = [], GB = 1; GB < arguments.length; GB++) OB[GB - 1] = arguments[GB];
      return OB.reduce((function(OB, GB) {
        return OB + lB(BB["border-" + GB + "-width"])
      }), 0)
    }

    function qB(BB) {
      var OB = BB.clientWidth,
        GB = BB.clientHeight;
      if (!OB && !GB) return zB;
      var YB = PB(BB).getComputedStyle(BB),
        DB = function(BB) {
          for (var OB = {}, GB = 0, YB = ["top", "right", "bottom", "left"]; GB < YB.length; GB++) {
            var DB = YB[GB],
              QB = BB["padding-" + DB];
            OB[DB] = lB(QB)
          }
          return OB
        }(YB),
        QB = DB.left + DB.right,
        oB = DB.top + DB.bottom,
        jB = lB(YB.width),
        yB = lB(YB.height);
      if ("border-box" === YB.boxSizing && (Math.round(jB + QB) !== OB && (jB -= pB(YB, "left", "right") + QB), Math.round(yB + oB) !== GB && (yB -= pB(YB, "top", "bottom") + oB)), ! function(BB) {
          return BB === PB(BB).document.documentElement
        }(BB)) {
        var JB = Math.round(jB + QB) - OB,
          MB = Math.round(yB + oB) - GB;
        1 !== Math.abs(JB) && (jB -= JB), 1 !== Math.abs(MB) && (yB -= MB)
      }
      return RB(DB.left, DB.top, jB, yB)
    }
    var ZB = "undefined" !== typeof SVGGraphicsElement ? function(BB) {
      return BB instanceof PB(BB).SVGGraphicsElement
    } : function(BB) {
      return BB instanceof PB(BB).SVGElement && "function" === typeof BB.getBBox
    };

    function NB(BB) {
      return DB ? ZB(BB) ? function(BB) {
        var OB = BB.getBBox();
        return RB(0, 0, OB.width, OB.height)
      }(BB) : qB(BB) : zB
    }

    function RB(BB, OB, GB, YB) {
      return {
        x: BB,
        y: OB,
        width: GB,
        height: YB
      }
    }
    var WB = function() {
        function BB(BB) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = RB(0, 0, 0, 0), this.target = BB
        }
        return BB.prototype.isActive = function() {
          var BB = NB(this.target);
          return this.contentRect_ = BB, BB.width !== this.broadcastWidth || BB.height !== this.broadcastHeight
        }, BB.prototype.broadcastRect = function() {
          var BB = this.contentRect_;
          return this.broadcastWidth = BB.width, this.broadcastHeight = BB.height, BB
        }, BB
      }(),
      AB = function(BB, OB) {
        var GB = function(BB) {
          var OB = BB.x,
            GB = BB.y,
            YB = BB.width,
            DB = BB.height,
            QB = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            oB = Object.create(QB.prototype);
          return MB(oB, {
            x: OB,
            y: GB,
            width: YB,
            height: DB,
            top: GB,
            right: OB + YB,
            bottom: DB + GB,
            left: OB
          }), oB
        }(OB);
        MB(this, {
          target: BB,
          contentRect: GB
        })
      },
      VB = function() {
        function BB(BB, OB, GB) {
          if (this.activeObservations_ = [], this.observations_ = new YB, "function" !== typeof BB) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = BB, this.controller_ = OB, this.callbackCtx_ = GB
        }
        return BB.prototype.observe = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof PB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var OB = this.observations_;
            OB.has(BB) || (OB.set(BB, new WB(BB)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, BB.prototype.unobserve = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof PB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var OB = this.observations_;
            OB.has(BB) && (OB.delete(BB), OB.size || this.controller_.removeObserver(this))
          }
        }, BB.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, BB.prototype.gatherActive = function() {
          var BB = this;
          this.clearActive(), this.observations_.forEach((function(OB) {
            OB.isActive() && BB.activeObservations_.push(OB)
          }))
        }, BB.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var BB = this.callbackCtx_,
              OB = this.activeObservations_.map((function(BB) {
                return new AB(BB.target, BB.broadcastRect())
              }));
            this.callback_.call(BB, OB, BB), this.clearActive()
          }
        }, BB.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, BB.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, BB
      }(),
      SB = "undefined" !== typeof WeakMap ? new WeakMap : new YB,
      nB = function BB(OB) {
        if (!(this instanceof BB)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var GB = JB.getInstance(),
          YB = new VB(OB, GB, this);
        SB.set(this, YB)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(BB) {
      nB.prototype[BB] = function() {
        var OB;
        return (OB = SB.get(this))[BB].apply(OB, arguments)
      }
    }));
    const UB = "undefined" !== typeof QB.ResizeObserver ? QB.ResizeObserver : nB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);