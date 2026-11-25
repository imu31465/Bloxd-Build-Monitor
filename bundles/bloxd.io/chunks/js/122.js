export const id = 122;
export const ids = [122];
export const modules = {
  5405: (MM, rM, iM) => {
    function OM(MM) {
      return OM = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(MM) {
        return typeof MM
      } : function(MM) {
        return MM && "function" == typeof Symbol && MM.constructor === Symbol && MM !== Symbol.prototype ? "symbol" : typeof MM
      }, OM(MM)
    }
    Object.defineProperty(rM, "__esModule", {
      value: !0
    }), rM.default = void 0;
    var SM = LM(iM(1116)),
      jM = function(MM, rM) {
        if (!rM && MM && MM.__esModule) return MM;
        if (null === MM || "object" !== OM(MM) && "function" !== typeof MM) return {
          default: MM
        };
        var iM = zM(rM);
        if (iM && iM.has(MM)) return iM.get(MM);
        var SM = {},
          jM = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var aM in MM)
          if ("default" !== aM && Object.prototype.hasOwnProperty.call(MM, aM)) {
            var PM = jM ? Object.getOwnPropertyDescriptor(MM, aM) : null;
            PM && (PM.get || PM.set) ? Object.defineProperty(SM, aM, PM) : SM[aM] = MM[aM]
          } SM.default = MM, iM && iM.set(MM, SM);
        return SM
      }(iM(44)),
      aM = LM(iM(5368)),
      PM = LM(iM(5409)),
      nM = iM(5413),
      QM = iM(1303);

    function zM(MM) {
      if ("function" !== typeof WeakMap) return null;
      var rM = new WeakMap,
        iM = new WeakMap;
      return (zM = function(MM) {
        return MM ? iM : rM
      })(MM)
    }

    function LM(MM) {
      return MM && MM.__esModule ? MM : {
        default: MM
      }
    }

    function mM(MM, rM) {
      var iM = "undefined" !== typeof Symbol && MM[Symbol.iterator] || MM["@@iterator"];
      if (!iM) {
        if (Array.isArray(MM) || (iM = function(MM, rM) {
            if (!MM) return;
            if ("string" === typeof MM) return HM(MM, rM);
            var iM = Object.prototype.toString.call(MM).slice(8, -1);
            "Object" === iM && MM.constructor && (iM = MM.constructor.name);
            if ("Map" === iM || "Set" === iM) return Array.from(MM);
            if ("Arguments" === iM || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(iM)) return HM(MM, rM)
          }(MM)) || rM && MM && "number" === typeof MM.length) {
          iM && (MM = iM);
          var OM = 0,
            SM = function() {};
          return {
            s: SM,
            n: function() {
              return OM >= MM.length ? {
                done: !0
              } : {
                done: !1,
                value: MM[OM++]
              }
            },
            e: function(MM) {
              throw MM
            },
            f: SM
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var jM, aM = !0,
        PM = !1;
      return {
        s: function() {
          iM = iM.call(MM)
        },
        n: function() {
          var MM = iM.next();
          return aM = MM.done, MM
        },
        e: function(MM) {
          PM = !0, jM = MM
        },
        f: function() {
          try {
            aM || null == iM.return || iM.return()
          } finally {
            if (PM) throw jM
          }
        }
      }
    }

    function HM(MM, rM) {
      (null == rM || rM > MM.length) && (rM = MM.length);
      for (var iM = 0, OM = new Array(rM); iM < rM; iM++) OM[iM] = MM[iM];
      return OM
    }

    function hM(MM, rM) {
      for (var iM = 0; iM < rM.length; iM++) {
        var OM = rM[iM];
        OM.enumerable = OM.enumerable || !1, OM.configurable = !0, "value" in OM && (OM.writable = !0), Object.defineProperty(MM, OM.key, OM)
      }
    }

    function JM(MM, rM) {
      return JM = Object.setPrototypeOf || function(MM, rM) {
        return MM.__proto__ = rM, MM
      }, JM(MM, rM)
    }

    function dM(MM) {
      var rM = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (MM) {
          return !1
        }
      }();
      return function() {
        var iM, SM = lM(MM);
        if (rM) {
          var jM = lM(this).constructor;
          iM = Reflect.construct(SM, arguments, jM)
        } else iM = SM.apply(this, arguments);
        return function(MM, rM) {
          if (rM && ("object" === OM(rM) || "function" === typeof rM)) return rM;
          if (void 0 !== rM) throw new TypeError("Derived constructors may only return object or undefined");
          return yM(MM)
        }(this, iM)
      }
    }

    function yM(MM) {
      if (void 0 === MM) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return MM
    }

    function lM(MM) {
      return lM = Object.setPrototypeOf ? Object.getPrototypeOf : function(MM) {
        return MM.__proto__ || Object.getPrototypeOf(MM)
      }, lM(MM)
    }

    function EM(MM, rM, iM) {
      return rM in MM ? Object.defineProperty(MM, rM, {
        value: iM,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : MM[rM] = iM, MM
    }
    var UM = {
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
      GM = function(MM) {
        ! function(MM, rM) {
          if ("function" !== typeof rM && null !== rM) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(MM, "prototype", {
            value: Object.create(rM && rM.prototype, {
              constructor: {
                value: MM,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), rM && JM(MM, rM)
        }(aM, MM);
        var rM, iM, OM, jM = dM(aM);

        function aM(MM, rM) {
          var iM;
          return function(MM, rM) {
            if (!(MM instanceof rM)) throw new TypeError("Cannot call a class as a function")
          }(this, aM), EM(yM(iM = jM.call(this, MM, rM)), "handleFormat", (function(MM) {
            var rM = iM.props.format;
            return rM ? rM(MM) : MM
          })), EM(yM(iM), "handleUpdate", (function() {
            if (iM.slider) {
              var MM = iM.props.orientation,
                rM = (0, nM.capitalize)(UM.orientation[MM].dimension),
                OM = iM.slider["offset".concat(rM)],
                SM = iM.handle["offset".concat(rM)];
              iM.setState({
                limit: OM - SM,
                grab: SM / 2
              })
            }
          })), EM(yM(iM), "handleStart", (function(MM) {
            var rM = iM.props.onChangeStart;
            document.addEventListener("mousemove", iM.handleDrag), document.addEventListener("mouseup", iM.handleEnd), iM.setState({
              active: !0
            }, (function() {
              rM && rM(MM)
            }))
          })), EM(yM(iM), "handleDrag", (function(MM) {
            MM.stopPropagation();
            var rM = iM.props.onChange,
              OM = MM.target,
              SM = OM.className,
              jM = OM.classList,
              aM = OM.dataset;
            if (rM && "rangeslider__labels" !== SM) {
              var PM = iM.position(MM);
              jM && jM.contains("rangeslider__label-item") && aM.value && (PM = parseFloat(aM.value)), rM && rM(PM, MM)
            }
          })), EM(yM(iM), "handleEnd", (function(MM) {
            var rM = iM.props.onChangeComplete;
            iM.setState({
              active: !1
            }, (function() {
              rM && rM(MM)
            })), document.removeEventListener("mousemove", iM.handleDrag), document.removeEventListener("mouseup", iM.handleEnd)
          })), EM(yM(iM), "handleKeyDown", (function(MM) {
            MM.preventDefault();
            var rM, OM = MM.keyCode,
              SM = iM.props,
              jM = SM.value,
              aM = SM.min,
              PM = SM.max,
              nM = SM.step,
              QM = SM.onChange;
            switch (OM) {
              case 38:
              case 39:
                rM = jM + nM > PM ? PM : jM + nM, QM && QM(rM, MM);
                break;
              case 37:
              case 40:
                rM = jM - nM < aM ? aM : jM - nM, QM && QM(rM, MM)
            }
          })), EM(yM(iM), "getPositionFromValue", (function(MM) {
            var rM = iM.state.limit,
              OM = iM.props,
              SM = OM.min,
              jM = (MM - SM) / (OM.max - SM);
            return Math.round(jM * rM)
          })), EM(yM(iM), "getValueFromPosition", (function(MM) {
            var rM = iM.state.limit,
              OM = iM.props,
              SM = OM.orientation,
              jM = OM.min,
              aM = OM.max,
              PM = OM.step,
              QM = (0, nM.clamp)(MM, 0, rM) / (rM || 1),
              zM = PM * Math.round(QM * (aM - jM) / PM),
              LM = "horizontal" === SM ? zM + jM : aM - zM;
            return (0, nM.clamp)(LM, jM, aM)
          })), EM(yM(iM), "position", (function(MM) {
            var rM = iM.state.grab,
              OM = iM.props,
              SM = OM.orientation,
              jM = OM.reverse,
              aM = iM.slider,
              PM = UM.orientation[SM].coordinate,
              QM = jM ? UM.orientation[SM].reverseDirection : UM.orientation[SM].direction,
              zM = "client".concat((0, nM.capitalize)(PM)),
              LM = MM.touches ? MM.touches[0][zM] : MM[zM],
              mM = aM.getBoundingClientRect()[QM],
              HM = jM ? mM - LM - rM : LM - mM - rM;
            return iM.getValueFromPosition(HM)
          })), EM(yM(iM), "coordinates", (function(MM) {
            var rM = iM.state,
              OM = rM.limit,
              SM = rM.grab,
              jM = iM.props.orientation,
              aM = iM.getValueFromPosition(MM),
              PM = iM.getPositionFromValue(aM),
              nM = "horizontal" === jM ? PM + SM : PM;
            return {
              fill: "horizontal" === jM ? nM : OM - nM,
              handle: nM,
              label: nM
            }
          })), EM(yM(iM), "renderLabels", (function(MM) {
            return (0, QM.jsx)("ul", {
              ref: function(MM) {
                iM.labels = MM
              },
              className: (0, SM.default)("rangeslider__labels"),
              children: MM
            })
          })), iM.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, iM
        }
        return rM = aM, (iM = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new PM.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var MM = this,
              rM = this.props,
              iM = rM.value,
              OM = rM.orientation,
              jM = rM.className,
              aM = rM.tooltip,
              PM = rM.reverse,
              nM = rM.labels,
              zM = rM.min,
              LM = rM.max,
              HM = rM.handleLabel,
              hM = this.state.active,
              JM = UM.orientation[OM].dimension,
              dM = PM ? UM.orientation[OM].reverseDirection : UM.orientation[OM].direction,
              yM = this.getPositionFromValue(iM),
              lM = this.coordinates(yM),
              GM = EM({}, JM, "".concat(lM.fill, "px")),
              CM = EM({}, dM, "".concat(lM.handle, "px")),
              eM = aM && hM,
              bM = [],
              wM = Object.keys(nM);
            if (wM.length > 0) {
              var tM, gM = mM(wM = wM.sort((function(MM, rM) {
                return PM ? MM - rM : rM - MM
              })));
              try {
                for (gM.s(); !(tM = gM.n()).done;) {
                  var uM = tM.value,
                    RM = this.getPositionFromValue(uM),
                    pM = this.coordinates(RM),
                    WM = EM({}, dM, "".concat(pM.label, "px"));
                  bM.push((0, QM.jsx)("li", {
                    className: (0, SM.default)("rangeslider__label-item"),
                    "data-value": uM,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: WM,
                    children: this.props.labels[uM]
                  }, uM))
                }
              } catch (sM) {
                gM.e(sM)
              } finally {
                gM.f()
              }
            }
            return (0, QM.jsxs)("div", {
              ref: function(rM) {
                MM.slider = rM
              },
              className: (0, SM.default)("rangeslider", "rangeslider-".concat(OM), {
                "rangeslider-reverse": PM
              }, jM),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": zM,
              "aria-valuemax": LM,
              "aria-valuenow": iM,
              "aria-orientation": OM,
              children: [(0, QM.jsx)("div", {
                className: "rangeslider__fill",
                style: GM
              }), (0, QM.jsxs)("div", {
                ref: function(rM) {
                  MM.handle = rM
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: CM,
                tabIndex: 0,
                children: [eM && (0, QM.jsx)("div", {
                  ref: function(rM) {
                    MM.tooltip = rM
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, QM.jsx)("span", {
                    children: this.handleFormat(iM)
                  })
                }), (0, QM.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: HM
                })]
              }), nM && this.renderLabels(bM)]
            })
          }
        }]) && hM(rM.prototype, iM), OM && hM(rM, OM), Object.defineProperty(rM, "prototype", {
          writable: !1
        }), aM
      }(jM.Component);
    EM(GM, "propTypes", {
      min: aM.default.number,
      max: aM.default.number,
      step: aM.default.number,
      value: aM.default.number,
      orientation: aM.default.string,
      tooltip: aM.default.bool,
      reverse: aM.default.bool,
      labels: aM.default.object,
      handleLabel: aM.default.string,
      format: aM.default.func,
      onChangeStart: aM.default.func,
      onChange: aM.default.func,
      onChangeComplete: aM.default.func
    }), EM(GM, "defaultProps", {
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
    var CM = GM;
    rM.default = CM
  },
  5403: (MM, rM, iM) => {
    var OM;
    rM.d = void 0;
    var SM = ((OM = iM(5405)) && OM.__esModule ? OM : {
      default: OM
    }).default;
    rM.d = SM
  },
  5413: (MM, rM) => {
    Object.defineProperty(rM, "__esModule", {
      value: !0
    }), rM.capitalize = function(MM) {
      return MM.charAt(0).toUpperCase() + MM.substr(1)
    }, rM.clamp = function(MM, rM, iM) {
      return Math.min(Math.max(MM, rM), iM)
    }
  },
  5372: (MM, rM, iM) => {
    var OM = iM(5376);

    function SM() {}

    function jM() {}
    jM.resetWarningCache = SM, MM.exports = function() {
      function MM(MM, rM, iM, SM, jM, aM) {
        if (aM !== OM) {
          var PM = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw PM.name = "Invariant Violation", PM
        }
      }

      function rM() {
        return MM
      }
      MM.isRequired = MM;
      var iM = {
        array: MM,
        bigint: MM,
        bool: MM,
        func: MM,
        number: MM,
        object: MM,
        string: MM,
        symbol: MM,
        any: MM,
        arrayOf: rM,
        element: MM,
        elementType: MM,
        instanceOf: rM,
        node: MM,
        objectOf: rM,
        oneOf: rM,
        oneOfType: rM,
        shape: rM,
        exact: rM,
        checkPropTypes: jM,
        resetWarningCache: SM
      };
      return iM.PropTypes = iM, iM
    }
  },
  5368: (MM, rM, iM) => {
    MM.exports = iM(5372)()
  },
  5376: MM => {
    MM.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5409: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => bM
    });
    var OM = function() {
        if ("undefined" !== typeof Map) return Map;

        function MM(MM, rM) {
          var iM = -1;
          return MM.some((function(MM, OM) {
            return MM[0] === rM && (iM = OM, !0)
          })), iM
        }
        return function() {
          function rM() {
            this.__entries__ = []
          }
          return Object.defineProperty(rM.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), rM.prototype.get = function(rM) {
            var iM = MM(this.__entries__, rM),
              OM = this.__entries__[iM];
            return OM && OM[1]
          }, rM.prototype.set = function(rM, iM) {
            var OM = MM(this.__entries__, rM);
            ~OM ? this.__entries__[OM][1] = iM : this.__entries__.push([rM, iM])
          }, rM.prototype.delete = function(rM) {
            var iM = this.__entries__,
              OM = MM(iM, rM);
            ~OM && iM.splice(OM, 1)
          }, rM.prototype.has = function(rM) {
            return !!~MM(this.__entries__, rM)
          }, rM.prototype.clear = function() {
            this.__entries__.splice(0)
          }, rM.prototype.forEach = function(MM, rM) {
            void 0 === rM && (rM = null);
            for (var iM = 0, OM = this.__entries__; iM < OM.length; iM++) {
              var SM = OM[iM];
              MM.call(rM, SM[1], SM[0])
            }
          }, rM
        }()
      }(),
      SM = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      jM = "undefined" !== typeof iM.g && iM.g.Math === Math ? iM.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      aM = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(jM) : function(MM) {
        return setTimeout((function() {
          return MM(Date.now())
        }), 1e3 / 60)
      };
    var PM = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      nM = "undefined" !== typeof MutationObserver,
      QM = function() {
        function MM() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(MM, rM) {
            var iM = !1,
              OM = !1,
              SM = 0;

            function jM() {
              iM && (iM = !1, MM()), OM && nM()
            }

            function PM() {
              aM(jM)
            }

            function nM() {
              var MM = Date.now();
              if (iM) {
                if (MM - SM < 2) return;
                OM = !0
              } else iM = !0, OM = !1, setTimeout(PM, rM);
              SM = MM
            }
            return nM
          }(this.refresh.bind(this), 20)
        }
        return MM.prototype.addObserver = function(MM) {
          ~this.observers_.indexOf(MM) || this.observers_.push(MM), this.connected_ || this.connect_()
        }, MM.prototype.removeObserver = function(MM) {
          var rM = this.observers_,
            iM = rM.indexOf(MM);
          ~iM && rM.splice(iM, 1), !rM.length && this.connected_ && this.disconnect_()
        }, MM.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, MM.prototype.updateObservers_ = function() {
          var MM = this.observers_.filter((function(MM) {
            return MM.gatherActive(), MM.hasActive()
          }));
          return MM.forEach((function(MM) {
            return MM.broadcastActive()
          })), MM.length > 0
        }, MM.prototype.connect_ = function() {
          SM && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), nM ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, MM.prototype.disconnect_ = function() {
          SM && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, MM.prototype.onTransitionEnd_ = function(MM) {
          var rM = MM.propertyName,
            iM = void 0 === rM ? "" : rM;
          PM.some((function(MM) {
            return !!~iM.indexOf(MM)
          })) && this.refresh()
        }, MM.getInstance = function() {
          return this.instance_ || (this.instance_ = new MM), this.instance_
        }, MM.instance_ = null, MM
      }(),
      zM = function(MM, rM) {
        for (var iM = 0, OM = Object.keys(rM); iM < OM.length; iM++) {
          var SM = OM[iM];
          Object.defineProperty(MM, SM, {
            value: rM[SM],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return MM
      },
      LM = function(MM) {
        return MM && MM.ownerDocument && MM.ownerDocument.defaultView || jM
      },
      mM = lM(0, 0, 0, 0);

    function HM(MM) {
      return parseFloat(MM) || 0
    }

    function hM(MM) {
      for (var rM = [], iM = 1; iM < arguments.length; iM++) rM[iM - 1] = arguments[iM];
      return rM.reduce((function(rM, iM) {
        return rM + HM(MM["border-" + iM + "-width"])
      }), 0)
    }

    function JM(MM) {
      var rM = MM.clientWidth,
        iM = MM.clientHeight;
      if (!rM && !iM) return mM;
      var OM = LM(MM).getComputedStyle(MM),
        SM = function(MM) {
          for (var rM = {}, iM = 0, OM = ["top", "right", "bottom", "left"]; iM < OM.length; iM++) {
            var SM = OM[iM],
              jM = MM["padding-" + SM];
            rM[SM] = HM(jM)
          }
          return rM
        }(OM),
        jM = SM.left + SM.right,
        aM = SM.top + SM.bottom,
        PM = HM(OM.width),
        nM = HM(OM.height);
      if ("border-box" === OM.boxSizing && (Math.round(PM + jM) !== rM && (PM -= hM(OM, "left", "right") + jM), Math.round(nM + aM) !== iM && (nM -= hM(OM, "top", "bottom") + aM)), ! function(MM) {
          return MM === LM(MM).document.documentElement
        }(MM)) {
        var QM = Math.round(PM + jM) - rM,
          zM = Math.round(nM + aM) - iM;
        1 !== Math.abs(QM) && (PM -= QM), 1 !== Math.abs(zM) && (nM -= zM)
      }
      return lM(SM.left, SM.top, PM, nM)
    }
    var dM = "undefined" !== typeof SVGGraphicsElement ? function(MM) {
      return MM instanceof LM(MM).SVGGraphicsElement
    } : function(MM) {
      return MM instanceof LM(MM).SVGElement && "function" === typeof MM.getBBox
    };

    function yM(MM) {
      return SM ? dM(MM) ? function(MM) {
        var rM = MM.getBBox();
        return lM(0, 0, rM.width, rM.height)
      }(MM) : JM(MM) : mM
    }

    function lM(MM, rM, iM, OM) {
      return {
        x: MM,
        y: rM,
        width: iM,
        height: OM
      }
    }
    var EM = function() {
        function MM(MM) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = lM(0, 0, 0, 0), this.target = MM
        }
        return MM.prototype.isActive = function() {
          var MM = yM(this.target);
          return this.contentRect_ = MM, MM.width !== this.broadcastWidth || MM.height !== this.broadcastHeight
        }, MM.prototype.broadcastRect = function() {
          var MM = this.contentRect_;
          return this.broadcastWidth = MM.width, this.broadcastHeight = MM.height, MM
        }, MM
      }(),
      UM = function(MM, rM) {
        var iM = function(MM) {
          var rM = MM.x,
            iM = MM.y,
            OM = MM.width,
            SM = MM.height,
            jM = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            aM = Object.create(jM.prototype);
          return zM(aM, {
            x: rM,
            y: iM,
            width: OM,
            height: SM,
            top: iM,
            right: rM + OM,
            bottom: SM + iM,
            left: rM
          }), aM
        }(rM);
        zM(this, {
          target: MM,
          contentRect: iM
        })
      },
      GM = function() {
        function MM(MM, rM, iM) {
          if (this.activeObservations_ = [], this.observations_ = new OM, "function" !== typeof MM) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = MM, this.controller_ = rM, this.callbackCtx_ = iM
        }
        return MM.prototype.observe = function(MM) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(MM instanceof LM(MM).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var rM = this.observations_;
            rM.has(MM) || (rM.set(MM, new EM(MM)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, MM.prototype.unobserve = function(MM) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(MM instanceof LM(MM).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var rM = this.observations_;
            rM.has(MM) && (rM.delete(MM), rM.size || this.controller_.removeObserver(this))
          }
        }, MM.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, MM.prototype.gatherActive = function() {
          var MM = this;
          this.clearActive(), this.observations_.forEach((function(rM) {
            rM.isActive() && MM.activeObservations_.push(rM)
          }))
        }, MM.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var MM = this.callbackCtx_,
              rM = this.activeObservations_.map((function(MM) {
                return new UM(MM.target, MM.broadcastRect())
              }));
            this.callback_.call(MM, rM, MM), this.clearActive()
          }
        }, MM.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, MM.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, MM
      }(),
      CM = "undefined" !== typeof WeakMap ? new WeakMap : new OM,
      eM = function MM(rM) {
        if (!(this instanceof MM)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var iM = QM.getInstance(),
          OM = new GM(rM, iM, this);
        CM.set(this, OM)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(MM) {
      eM.prototype[MM] = function() {
        var rM;
        return (rM = CM.get(this))[MM].apply(rM, arguments)
      }
    }));
    const bM = "undefined" !== typeof jM.ResizeObserver ? jM.ResizeObserver : eM
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);