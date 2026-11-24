export const id = 110;
export const ids = [110];
export const modules = {
  5158: (BB, IB, ZB) => {
    function TB(BB) {
      return TB = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(BB) {
        return typeof BB
      } : function(BB) {
        return BB && "function" == typeof Symbol && BB.constructor === Symbol && BB !== Symbol.prototype ? "symbol" : typeof BB
      }, TB(BB)
    }
    Object.defineProperty(IB, "__esModule", {
      value: !0
    }), IB.default = void 0;
    var JB = hB(ZB(1091)),
      oB = function(BB, IB) {
        if (!IB && BB && BB.__esModule) return BB;
        if (null === BB || "object" !== TB(BB) && "function" !== typeof BB) return {
          default: BB
        };
        var ZB = nB(IB);
        if (ZB && ZB.has(BB)) return ZB.get(BB);
        var JB = {},
          oB = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var GB in BB)
          if ("default" !== GB && Object.prototype.hasOwnProperty.call(BB, GB)) {
            var vB = oB ? Object.getOwnPropertyDescriptor(BB, GB) : null;
            vB && (vB.get || vB.set) ? Object.defineProperty(JB, GB, vB) : JB[GB] = BB[GB]
          } JB.default = BB, ZB && ZB.set(BB, JB);
        return JB
      }(ZB(63)),
      GB = hB(ZB(5115)),
      vB = hB(ZB(5166)),
      kB = ZB(5169),
      cB = ZB(1153);

    function nB(BB) {
      if ("function" !== typeof WeakMap) return null;
      var IB = new WeakMap,
        ZB = new WeakMap;
      return (nB = function(BB) {
        return BB ? ZB : IB
      })(BB)
    }

    function hB(BB) {
      return BB && BB.__esModule ? BB : {
        default: BB
      }
    }

    function zB(BB, IB) {
      var ZB = "undefined" !== typeof Symbol && BB[Symbol.iterator] || BB["@@iterator"];
      if (!ZB) {
        if (Array.isArray(BB) || (ZB = function(BB, IB) {
            if (!BB) return;
            if ("string" === typeof BB) return FB(BB, IB);
            var ZB = Object.prototype.toString.call(BB).slice(8, -1);
            "Object" === ZB && BB.constructor && (ZB = BB.constructor.name);
            if ("Map" === ZB || "Set" === ZB) return Array.from(BB);
            if ("Arguments" === ZB || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ZB)) return FB(BB, IB)
          }(BB)) || IB && BB && "number" === typeof BB.length) {
          ZB && (BB = ZB);
          var TB = 0,
            JB = function() {};
          return {
            s: JB,
            n: function() {
              return TB >= BB.length ? {
                done: !0
              } : {
                done: !1,
                value: BB[TB++]
              }
            },
            e: function(BB) {
              throw BB
            },
            f: JB
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var oB, GB = !0,
        vB = !1;
      return {
        s: function() {
          ZB = ZB.call(BB)
        },
        n: function() {
          var BB = ZB.next();
          return GB = BB.done, BB
        },
        e: function(BB) {
          vB = !0, oB = BB
        },
        f: function() {
          try {
            GB || null == ZB.return || ZB.return()
          } finally {
            if (vB) throw oB
          }
        }
      }
    }

    function FB(BB, IB) {
      (null == IB || IB > BB.length) && (IB = BB.length);
      for (var ZB = 0, TB = new Array(IB); ZB < IB; ZB++) TB[ZB] = BB[ZB];
      return TB
    }

    function NB(BB, IB) {
      for (var ZB = 0; ZB < IB.length; ZB++) {
        var TB = IB[ZB];
        TB.enumerable = TB.enumerable || !1, TB.configurable = !0, "value" in TB && (TB.writable = !0), Object.defineProperty(BB, TB.key, TB)
      }
    }

    function gB(BB, IB) {
      return gB = Object.setPrototypeOf || function(BB, IB) {
        return BB.__proto__ = IB, BB
      }, gB(BB, IB)
    }

    function qB(BB) {
      var IB = function() {
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
        var ZB, JB = UB(BB);
        if (IB) {
          var oB = UB(this).constructor;
          ZB = Reflect.construct(JB, arguments, oB)
        } else ZB = JB.apply(this, arguments);
        return function(BB, IB) {
          if (IB && ("object" === TB(IB) || "function" === typeof IB)) return IB;
          if (void 0 !== IB) throw new TypeError("Derived constructors may only return object or undefined");
          return yB(BB)
        }(this, ZB)
      }
    }

    function yB(BB) {
      if (void 0 === BB) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return BB
    }

    function UB(BB) {
      return UB = Object.setPrototypeOf ? Object.getPrototypeOf : function(BB) {
        return BB.__proto__ || Object.getPrototypeOf(BB)
      }, UB(BB)
    }

    function WB(BB, IB, ZB) {
      return IB in BB ? Object.defineProperty(BB, IB, {
        value: ZB,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : BB[IB] = ZB, BB
    }
    var dB = {
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
      CB = function(BB) {
        ! function(BB, IB) {
          if ("function" !== typeof IB && null !== IB) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(BB, "prototype", {
            value: Object.create(IB && IB.prototype, {
              constructor: {
                value: BB,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), IB && gB(BB, IB)
        }(GB, BB);
        var IB, ZB, TB, oB = qB(GB);

        function GB(BB, IB) {
          var ZB;
          return function(BB, IB) {
            if (!(BB instanceof IB)) throw new TypeError("Cannot call a class as a function")
          }(this, GB), WB(yB(ZB = oB.call(this, BB, IB)), "handleFormat", (function(BB) {
            var IB = ZB.props.format;
            return IB ? IB(BB) : BB
          })), WB(yB(ZB), "handleUpdate", (function() {
            if (ZB.slider) {
              var BB = ZB.props.orientation,
                IB = (0, kB.capitalize)(dB.orientation[BB].dimension),
                TB = ZB.slider["offset".concat(IB)],
                JB = ZB.handle["offset".concat(IB)];
              ZB.setState({
                limit: TB - JB,
                grab: JB / 2
              })
            }
          })), WB(yB(ZB), "handleStart", (function(BB) {
            var IB = ZB.props.onChangeStart;
            document.addEventListener("mousemove", ZB.handleDrag), document.addEventListener("mouseup", ZB.handleEnd), ZB.setState({
              active: !0
            }, (function() {
              IB && IB(BB)
            }))
          })), WB(yB(ZB), "handleDrag", (function(BB) {
            BB.stopPropagation();
            var IB = ZB.props.onChange,
              TB = BB.target,
              JB = TB.className,
              oB = TB.classList,
              GB = TB.dataset;
            if (IB && "rangeslider__labels" !== JB) {
              var vB = ZB.position(BB);
              oB && oB.contains("rangeslider__label-item") && GB.value && (vB = parseFloat(GB.value)), IB && IB(vB, BB)
            }
          })), WB(yB(ZB), "handleEnd", (function(BB) {
            var IB = ZB.props.onChangeComplete;
            ZB.setState({
              active: !1
            }, (function() {
              IB && IB(BB)
            })), document.removeEventListener("mousemove", ZB.handleDrag), document.removeEventListener("mouseup", ZB.handleEnd)
          })), WB(yB(ZB), "handleKeyDown", (function(BB) {
            BB.preventDefault();
            var IB, TB = BB.keyCode,
              JB = ZB.props,
              oB = JB.value,
              GB = JB.min,
              vB = JB.max,
              kB = JB.step,
              cB = JB.onChange;
            switch (TB) {
              case 38:
              case 39:
                IB = oB + kB > vB ? vB : oB + kB, cB && cB(IB, BB);
                break;
              case 37:
              case 40:
                IB = oB - kB < GB ? GB : oB - kB, cB && cB(IB, BB)
            }
          })), WB(yB(ZB), "getPositionFromValue", (function(BB) {
            var IB = ZB.state.limit,
              TB = ZB.props,
              JB = TB.min,
              oB = (BB - JB) / (TB.max - JB);
            return Math.round(oB * IB)
          })), WB(yB(ZB), "getValueFromPosition", (function(BB) {
            var IB = ZB.state.limit,
              TB = ZB.props,
              JB = TB.orientation,
              oB = TB.min,
              GB = TB.max,
              vB = TB.step,
              cB = (0, kB.clamp)(BB, 0, IB) / (IB || 1),
              nB = vB * Math.round(cB * (GB - oB) / vB),
              hB = "horizontal" === JB ? nB + oB : GB - nB;
            return (0, kB.clamp)(hB, oB, GB)
          })), WB(yB(ZB), "position", (function(BB) {
            var IB = ZB.state.grab,
              TB = ZB.props,
              JB = TB.orientation,
              oB = TB.reverse,
              GB = ZB.slider,
              vB = dB.orientation[JB].coordinate,
              cB = oB ? dB.orientation[JB].reverseDirection : dB.orientation[JB].direction,
              nB = "client".concat((0, kB.capitalize)(vB)),
              hB = BB.touches ? BB.touches[0][nB] : BB[nB],
              zB = GB.getBoundingClientRect()[cB],
              FB = oB ? zB - hB - IB : hB - zB - IB;
            return ZB.getValueFromPosition(FB)
          })), WB(yB(ZB), "coordinates", (function(BB) {
            var IB = ZB.state,
              TB = IB.limit,
              JB = IB.grab,
              oB = ZB.props.orientation,
              GB = ZB.getValueFromPosition(BB),
              vB = ZB.getPositionFromValue(GB),
              kB = "horizontal" === oB ? vB + JB : vB;
            return {
              fill: "horizontal" === oB ? kB : TB - kB,
              handle: kB,
              label: kB
            }
          })), WB(yB(ZB), "renderLabels", (function(BB) {
            return (0, cB.jsx)("ul", {
              ref: function(BB) {
                ZB.labels = BB
              },
              className: (0, JB.default)("rangeslider__labels"),
              children: BB
            })
          })), ZB.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, ZB
        }
        return IB = GB, (ZB = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new vB.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var BB = this,
              IB = this.props,
              ZB = IB.value,
              TB = IB.orientation,
              oB = IB.className,
              GB = IB.tooltip,
              vB = IB.reverse,
              kB = IB.labels,
              nB = IB.min,
              hB = IB.max,
              FB = IB.handleLabel,
              NB = this.state.active,
              gB = dB.orientation[TB].dimension,
              qB = vB ? dB.orientation[TB].reverseDirection : dB.orientation[TB].direction,
              yB = this.getPositionFromValue(ZB),
              UB = this.coordinates(yB),
              CB = WB({}, gB, "".concat(UB.fill, "px")),
              QB = WB({}, qB, "".concat(UB.handle, "px")),
              sB = GB && NB,
              wB = [],
              OB = Object.keys(kB);
            if (OB.length > 0) {
              var YB, iB = zB(OB = OB.sort((function(BB, IB) {
                return vB ? BB - IB : IB - BB
              })));
              try {
                for (iB.s(); !(YB = iB.n()).done;) {
                  var pB = YB.value,
                    aB = this.getPositionFromValue(pB),
                    HB = this.coordinates(aB),
                    MB = WB({}, qB, "".concat(HB.label, "px"));
                  wB.push((0, cB.jsx)("li", {
                    className: (0, JB.default)("rangeslider__label-item"),
                    "data-value": pB,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: MB,
                    children: this.props.labels[pB]
                  }, pB))
                }
              } catch (jB) {
                iB.e(jB)
              } finally {
                iB.f()
              }
            }
            return (0, cB.jsxs)("div", {
              ref: function(IB) {
                BB.slider = IB
              },
              className: (0, JB.default)("rangeslider", "rangeslider-".concat(TB), {
                "rangeslider-reverse": vB
              }, oB),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": nB,
              "aria-valuemax": hB,
              "aria-valuenow": ZB,
              "aria-orientation": TB,
              children: [(0, cB.jsx)("div", {
                className: "rangeslider__fill",
                style: CB
              }), (0, cB.jsxs)("div", {
                ref: function(IB) {
                  BB.handle = IB
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: QB,
                tabIndex: 0,
                children: [sB && (0, cB.jsx)("div", {
                  ref: function(IB) {
                    BB.tooltip = IB
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, cB.jsx)("span", {
                    children: this.handleFormat(ZB)
                  })
                }), (0, cB.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: FB
                })]
              }), kB && this.renderLabels(wB)]
            })
          }
        }]) && NB(IB.prototype, ZB), TB && NB(IB, TB), Object.defineProperty(IB, "prototype", {
          writable: !1
        }), GB
      }(oB.Component);
    WB(CB, "propTypes", {
      min: GB.default.number,
      max: GB.default.number,
      step: GB.default.number,
      value: GB.default.number,
      orientation: GB.default.string,
      tooltip: GB.default.bool,
      reverse: GB.default.bool,
      labels: GB.default.object,
      handleLabel: GB.default.string,
      format: GB.default.func,
      onChangeStart: GB.default.func,
      onChange: GB.default.func,
      onChangeComplete: GB.default.func
    }), WB(CB, "defaultProps", {
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
    var QB = CB;
    IB.default = QB
  },
  5150: (BB, IB, ZB) => {
    var TB;
    IB.d = void 0;
    var JB = ((TB = ZB(5158)) && TB.__esModule ? TB : {
      default: TB
    }).default;
    IB.d = JB
  },
  5169: (BB, IB) => {
    Object.defineProperty(IB, "__esModule", {
      value: !0
    }), IB.capitalize = function(BB) {
      return BB.charAt(0).toUpperCase() + BB.substr(1)
    }, IB.clamp = function(BB, IB, ZB) {
      return Math.min(Math.max(BB, IB), ZB)
    }
  },
  5117: (BB, IB, ZB) => {
    var TB = ZB(5124);

    function JB() {}

    function oB() {}
    oB.resetWarningCache = JB, BB.exports = function() {
      function BB(BB, IB, ZB, JB, oB, GB) {
        if (GB !== TB) {
          var vB = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw vB.name = "Invariant Violation", vB
        }
      }

      function IB() {
        return BB
      }
      BB.isRequired = BB;
      var ZB = {
        array: BB,
        bigint: BB,
        bool: BB,
        func: BB,
        number: BB,
        object: BB,
        string: BB,
        symbol: BB,
        any: BB,
        arrayOf: IB,
        element: BB,
        elementType: BB,
        instanceOf: IB,
        node: BB,
        objectOf: IB,
        oneOf: IB,
        oneOfType: IB,
        shape: IB,
        exact: IB,
        checkPropTypes: oB,
        resetWarningCache: JB
      };
      return ZB.PropTypes = ZB, ZB
    }
  },
  5115: (BB, IB, ZB) => {
    BB.exports = ZB(5117)()
  },
  5124: BB => {
    BB.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5166: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => wB
    });
    var TB = function() {
        if ("undefined" !== typeof Map) return Map;

        function BB(BB, IB) {
          var ZB = -1;
          return BB.some((function(BB, TB) {
            return BB[0] === IB && (ZB = TB, !0)
          })), ZB
        }
        return function() {
          function IB() {
            this.__entries__ = []
          }
          return Object.defineProperty(IB.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), IB.prototype.get = function(IB) {
            var ZB = BB(this.__entries__, IB),
              TB = this.__entries__[ZB];
            return TB && TB[1]
          }, IB.prototype.set = function(IB, ZB) {
            var TB = BB(this.__entries__, IB);
            ~TB ? this.__entries__[TB][1] = ZB : this.__entries__.push([IB, ZB])
          }, IB.prototype.delete = function(IB) {
            var ZB = this.__entries__,
              TB = BB(ZB, IB);
            ~TB && ZB.splice(TB, 1)
          }, IB.prototype.has = function(IB) {
            return !!~BB(this.__entries__, IB)
          }, IB.prototype.clear = function() {
            this.__entries__.splice(0)
          }, IB.prototype.forEach = function(BB, IB) {
            void 0 === IB && (IB = null);
            for (var ZB = 0, TB = this.__entries__; ZB < TB.length; ZB++) {
              var JB = TB[ZB];
              BB.call(IB, JB[1], JB[0])
            }
          }, IB
        }()
      }(),
      JB = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      oB = "undefined" !== typeof ZB.g && ZB.g.Math === Math ? ZB.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      GB = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(oB) : function(BB) {
        return setTimeout((function() {
          return BB(Date.now())
        }), 1e3 / 60)
      };
    var vB = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      kB = "undefined" !== typeof MutationObserver,
      cB = function() {
        function BB() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(BB, IB) {
            var ZB = !1,
              TB = !1,
              JB = 0;

            function oB() {
              ZB && (ZB = !1, BB()), TB && kB()
            }

            function vB() {
              GB(oB)
            }

            function kB() {
              var BB = Date.now();
              if (ZB) {
                if (BB - JB < 2) return;
                TB = !0
              } else ZB = !0, TB = !1, setTimeout(vB, IB);
              JB = BB
            }
            return kB
          }(this.refresh.bind(this), 20)
        }
        return BB.prototype.addObserver = function(BB) {
          ~this.observers_.indexOf(BB) || this.observers_.push(BB), this.connected_ || this.connect_()
        }, BB.prototype.removeObserver = function(BB) {
          var IB = this.observers_,
            ZB = IB.indexOf(BB);
          ~ZB && IB.splice(ZB, 1), !IB.length && this.connected_ && this.disconnect_()
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
          JB && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), kB ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, BB.prototype.disconnect_ = function() {
          JB && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, BB.prototype.onTransitionEnd_ = function(BB) {
          var IB = BB.propertyName,
            ZB = void 0 === IB ? "" : IB;
          vB.some((function(BB) {
            return !!~ZB.indexOf(BB)
          })) && this.refresh()
        }, BB.getInstance = function() {
          return this.instance_ || (this.instance_ = new BB), this.instance_
        }, BB.instance_ = null, BB
      }(),
      nB = function(BB, IB) {
        for (var ZB = 0, TB = Object.keys(IB); ZB < TB.length; ZB++) {
          var JB = TB[ZB];
          Object.defineProperty(BB, JB, {
            value: IB[JB],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return BB
      },
      hB = function(BB) {
        return BB && BB.ownerDocument && BB.ownerDocument.defaultView || oB
      },
      zB = UB(0, 0, 0, 0);

    function FB(BB) {
      return parseFloat(BB) || 0
    }

    function NB(BB) {
      for (var IB = [], ZB = 1; ZB < arguments.length; ZB++) IB[ZB - 1] = arguments[ZB];
      return IB.reduce((function(IB, ZB) {
        return IB + FB(BB["border-" + ZB + "-width"])
      }), 0)
    }

    function gB(BB) {
      var IB = BB.clientWidth,
        ZB = BB.clientHeight;
      if (!IB && !ZB) return zB;
      var TB = hB(BB).getComputedStyle(BB),
        JB = function(BB) {
          for (var IB = {}, ZB = 0, TB = ["top", "right", "bottom", "left"]; ZB < TB.length; ZB++) {
            var JB = TB[ZB],
              oB = BB["padding-" + JB];
            IB[JB] = FB(oB)
          }
          return IB
        }(TB),
        oB = JB.left + JB.right,
        GB = JB.top + JB.bottom,
        vB = FB(TB.width),
        kB = FB(TB.height);
      if ("border-box" === TB.boxSizing && (Math.round(vB + oB) !== IB && (vB -= NB(TB, "left", "right") + oB), Math.round(kB + GB) !== ZB && (kB -= NB(TB, "top", "bottom") + GB)), ! function(BB) {
          return BB === hB(BB).document.documentElement
        }(BB)) {
        var cB = Math.round(vB + oB) - IB,
          nB = Math.round(kB + GB) - ZB;
        1 !== Math.abs(cB) && (vB -= cB), 1 !== Math.abs(nB) && (kB -= nB)
      }
      return UB(JB.left, JB.top, vB, kB)
    }
    var qB = "undefined" !== typeof SVGGraphicsElement ? function(BB) {
      return BB instanceof hB(BB).SVGGraphicsElement
    } : function(BB) {
      return BB instanceof hB(BB).SVGElement && "function" === typeof BB.getBBox
    };

    function yB(BB) {
      return JB ? qB(BB) ? function(BB) {
        var IB = BB.getBBox();
        return UB(0, 0, IB.width, IB.height)
      }(BB) : gB(BB) : zB
    }

    function UB(BB, IB, ZB, TB) {
      return {
        x: BB,
        y: IB,
        width: ZB,
        height: TB
      }
    }
    var WB = function() {
        function BB(BB) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = UB(0, 0, 0, 0), this.target = BB
        }
        return BB.prototype.isActive = function() {
          var BB = yB(this.target);
          return this.contentRect_ = BB, BB.width !== this.broadcastWidth || BB.height !== this.broadcastHeight
        }, BB.prototype.broadcastRect = function() {
          var BB = this.contentRect_;
          return this.broadcastWidth = BB.width, this.broadcastHeight = BB.height, BB
        }, BB
      }(),
      dB = function(BB, IB) {
        var ZB = function(BB) {
          var IB = BB.x,
            ZB = BB.y,
            TB = BB.width,
            JB = BB.height,
            oB = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            GB = Object.create(oB.prototype);
          return nB(GB, {
            x: IB,
            y: ZB,
            width: TB,
            height: JB,
            top: ZB,
            right: IB + TB,
            bottom: JB + ZB,
            left: IB
          }), GB
        }(IB);
        nB(this, {
          target: BB,
          contentRect: ZB
        })
      },
      CB = function() {
        function BB(BB, IB, ZB) {
          if (this.activeObservations_ = [], this.observations_ = new TB, "function" !== typeof BB) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = BB, this.controller_ = IB, this.callbackCtx_ = ZB
        }
        return BB.prototype.observe = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof hB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var IB = this.observations_;
            IB.has(BB) || (IB.set(BB, new WB(BB)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, BB.prototype.unobserve = function(BB) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(BB instanceof hB(BB).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var IB = this.observations_;
            IB.has(BB) && (IB.delete(BB), IB.size || this.controller_.removeObserver(this))
          }
        }, BB.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, BB.prototype.gatherActive = function() {
          var BB = this;
          this.clearActive(), this.observations_.forEach((function(IB) {
            IB.isActive() && BB.activeObservations_.push(IB)
          }))
        }, BB.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var BB = this.callbackCtx_,
              IB = this.activeObservations_.map((function(BB) {
                return new dB(BB.target, BB.broadcastRect())
              }));
            this.callback_.call(BB, IB, BB), this.clearActive()
          }
        }, BB.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, BB.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, BB
      }(),
      QB = "undefined" !== typeof WeakMap ? new WeakMap : new TB,
      sB = function BB(IB) {
        if (!(this instanceof BB)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var ZB = cB.getInstance(),
          TB = new CB(IB, ZB, this);
        QB.set(this, TB)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(BB) {
      sB.prototype[BB] = function() {
        var IB;
        return (IB = QB.get(this))[BB].apply(IB, arguments)
      }
    }));
    const wB = "undefined" !== typeof oB.ResizeObserver ? oB.ResizeObserver : sB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);