export const id = 108;
export const ids = [108];
export const modules = {
  5159: (SS, HS, gS) => {
    function tS(SS) {
      return tS = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(SS) {
        return typeof SS
      } : function(SS) {
        return SS && "function" == typeof Symbol && SS.constructor === Symbol && SS !== Symbol.prototype ? "symbol" : typeof SS
      }, tS(SS)
    }
    Object.defineProperty(HS, "__esModule", {
      value: !0
    }), HS.default = void 0;
    var bS = fS(gS(1121)),
      XS = function(SS, HS) {
        if (!HS && SS && SS.__esModule) return SS;
        if (null === SS || "object" !== tS(SS) && "function" !== typeof SS) return {
          default: SS
        };
        var gS = IS(HS);
        if (gS && gS.has(SS)) return gS.get(SS);
        var bS = {},
          XS = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var xS in SS)
          if ("default" !== xS && Object.prototype.hasOwnProperty.call(SS, xS)) {
            var NS = XS ? Object.getOwnPropertyDescriptor(SS, xS) : null;
            NS && (NS.get || NS.set) ? Object.defineProperty(bS, xS, NS) : bS[xS] = SS[xS]
          } bS.default = SS, gS && gS.set(SS, bS);
        return bS
      }(gS(64)),
      xS = fS(gS(5116)),
      NS = fS(gS(5168)),
      qS = gS(5176),
      uS = gS(1181);

    function IS(SS) {
      if ("function" !== typeof WeakMap) return null;
      var HS = new WeakMap,
        gS = new WeakMap;
      return (IS = function(SS) {
        return SS ? gS : HS
      })(SS)
    }

    function fS(SS) {
      return SS && SS.__esModule ? SS : {
        default: SS
      }
    }

    function kS(SS, HS) {
      var gS = "undefined" !== typeof Symbol && SS[Symbol.iterator] || SS["@@iterator"];
      if (!gS) {
        if (Array.isArray(SS) || (gS = function(SS, HS) {
            if (!SS) return;
            if ("string" === typeof SS) return aS(SS, HS);
            var gS = Object.prototype.toString.call(SS).slice(8, -1);
            "Object" === gS && SS.constructor && (gS = SS.constructor.name);
            if ("Map" === gS || "Set" === gS) return Array.from(SS);
            if ("Arguments" === gS || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(gS)) return aS(SS, HS)
          }(SS)) || HS && SS && "number" === typeof SS.length) {
          gS && (SS = gS);
          var tS = 0,
            bS = function() {};
          return {
            s: bS,
            n: function() {
              return tS >= SS.length ? {
                done: !0
              } : {
                done: !1,
                value: SS[tS++]
              }
            },
            e: function(SS) {
              throw SS
            },
            f: bS
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var XS, xS = !0,
        NS = !1;
      return {
        s: function() {
          gS = gS.call(SS)
        },
        n: function() {
          var SS = gS.next();
          return xS = SS.done, SS
        },
        e: function(SS) {
          NS = !0, XS = SS
        },
        f: function() {
          try {
            xS || null == gS.return || gS.return()
          } finally {
            if (NS) throw XS
          }
        }
      }
    }

    function aS(SS, HS) {
      (null == HS || HS > SS.length) && (HS = SS.length);
      for (var gS = 0, tS = new Array(HS); gS < HS; gS++) tS[gS] = SS[gS];
      return tS
    }

    function KS(SS, HS) {
      for (var gS = 0; gS < HS.length; gS++) {
        var tS = HS[gS];
        tS.enumerable = tS.enumerable || !1, tS.configurable = !0, "value" in tS && (tS.writable = !0), Object.defineProperty(SS, tS.key, tS)
      }
    }

    function jS(SS, HS) {
      return jS = Object.setPrototypeOf || function(SS, HS) {
        return SS.__proto__ = HS, SS
      }, jS(SS, HS)
    }

    function GS(SS) {
      var HS = function() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (SS) {
          return !1
        }
      }();
      return function() {
        var gS, bS = nS(SS);
        if (HS) {
          var XS = nS(this).constructor;
          gS = Reflect.construct(bS, arguments, XS)
        } else gS = bS.apply(this, arguments);
        return function(SS, HS) {
          if (HS && ("object" === tS(HS) || "function" === typeof HS)) return HS;
          if (void 0 !== HS) throw new TypeError("Derived constructors may only return object or undefined");
          return CS(SS)
        }(this, gS)
      }
    }

    function CS(SS) {
      if (void 0 === SS) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return SS
    }

    function nS(SS) {
      return nS = Object.setPrototypeOf ? Object.getPrototypeOf : function(SS) {
        return SS.__proto__ || Object.getPrototypeOf(SS)
      }, nS(SS)
    }

    function PS(SS, HS, gS) {
      return HS in SS ? Object.defineProperty(SS, HS, {
        value: gS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : SS[HS] = gS, SS
    }
    var QS = {
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
      DS = function(SS) {
        ! function(SS, HS) {
          if ("function" !== typeof HS && null !== HS) throw new TypeError("Super expression must either be null or a function");
          Object.defineProperty(SS, "prototype", {
            value: Object.create(HS && HS.prototype, {
              constructor: {
                value: SS,
                writable: !0,
                configurable: !0
              }
            }),
            writable: !1
          }), HS && jS(SS, HS)
        }(xS, SS);
        var HS, gS, tS, XS = GS(xS);

        function xS(SS, HS) {
          var gS;
          return function(SS, HS) {
            if (!(SS instanceof HS)) throw new TypeError("Cannot call a class as a function")
          }(this, xS), PS(CS(gS = XS.call(this, SS, HS)), "handleFormat", (function(SS) {
            var HS = gS.props.format;
            return HS ? HS(SS) : SS
          })), PS(CS(gS), "handleUpdate", (function() {
            if (gS.slider) {
              var SS = gS.props.orientation,
                HS = (0, qS.capitalize)(QS.orientation[SS].dimension),
                tS = gS.slider["offset".concat(HS)],
                bS = gS.handle["offset".concat(HS)];
              gS.setState({
                limit: tS - bS,
                grab: bS / 2
              })
            }
          })), PS(CS(gS), "handleStart", (function(SS) {
            var HS = gS.props.onChangeStart;
            document.addEventListener("mousemove", gS.handleDrag), document.addEventListener("mouseup", gS.handleEnd), gS.setState({
              active: !0
            }, (function() {
              HS && HS(SS)
            }))
          })), PS(CS(gS), "handleDrag", (function(SS) {
            SS.stopPropagation();
            var HS = gS.props.onChange,
              tS = SS.target,
              bS = tS.className,
              XS = tS.classList,
              xS = tS.dataset;
            if (HS && "rangeslider__labels" !== bS) {
              var NS = gS.position(SS);
              XS && XS.contains("rangeslider__label-item") && xS.value && (NS = parseFloat(xS.value)), HS && HS(NS, SS)
            }
          })), PS(CS(gS), "handleEnd", (function(SS) {
            var HS = gS.props.onChangeComplete;
            gS.setState({
              active: !1
            }, (function() {
              HS && HS(SS)
            })), document.removeEventListener("mousemove", gS.handleDrag), document.removeEventListener("mouseup", gS.handleEnd)
          })), PS(CS(gS), "handleKeyDown", (function(SS) {
            SS.preventDefault();
            var HS, tS = SS.keyCode,
              bS = gS.props,
              XS = bS.value,
              xS = bS.min,
              NS = bS.max,
              qS = bS.step,
              uS = bS.onChange;
            switch (tS) {
              case 38:
              case 39:
                HS = XS + qS > NS ? NS : XS + qS, uS && uS(HS, SS);
                break;
              case 37:
              case 40:
                HS = XS - qS < xS ? xS : XS - qS, uS && uS(HS, SS)
            }
          })), PS(CS(gS), "getPositionFromValue", (function(SS) {
            var HS = gS.state.limit,
              tS = gS.props,
              bS = tS.min,
              XS = (SS - bS) / (tS.max - bS);
            return Math.round(XS * HS)
          })), PS(CS(gS), "getValueFromPosition", (function(SS) {
            var HS = gS.state.limit,
              tS = gS.props,
              bS = tS.orientation,
              XS = tS.min,
              xS = tS.max,
              NS = tS.step,
              uS = (0, qS.clamp)(SS, 0, HS) / (HS || 1),
              IS = NS * Math.round(uS * (xS - XS) / NS),
              fS = "horizontal" === bS ? IS + XS : xS - IS;
            return (0, qS.clamp)(fS, XS, xS)
          })), PS(CS(gS), "position", (function(SS) {
            var HS = gS.state.grab,
              tS = gS.props,
              bS = tS.orientation,
              XS = tS.reverse,
              xS = gS.slider,
              NS = QS.orientation[bS].coordinate,
              uS = XS ? QS.orientation[bS].reverseDirection : QS.orientation[bS].direction,
              IS = "client".concat((0, qS.capitalize)(NS)),
              fS = SS.touches ? SS.touches[0][IS] : SS[IS],
              kS = xS.getBoundingClientRect()[uS],
              aS = XS ? kS - fS - HS : fS - kS - HS;
            return gS.getValueFromPosition(aS)
          })), PS(CS(gS), "coordinates", (function(SS) {
            var HS = gS.state,
              tS = HS.limit,
              bS = HS.grab,
              XS = gS.props.orientation,
              xS = gS.getValueFromPosition(SS),
              NS = gS.getPositionFromValue(xS),
              qS = "horizontal" === XS ? NS + bS : NS;
            return {
              fill: "horizontal" === XS ? qS : tS - qS,
              handle: qS,
              label: qS
            }
          })), PS(CS(gS), "renderLabels", (function(SS) {
            return (0, uS.jsx)("ul", {
              ref: function(SS) {
                gS.labels = SS
              },
              className: (0, bS.default)("rangeslider__labels"),
              children: SS
            })
          })), gS.state = {
            active: !1,
            limit: 0,
            grab: 0
          }, gS
        }
        return HS = xS, (gS = [{
          key: "componentDidMount",
          value: function() {
            this.handleUpdate(), new NS.default(this.handleUpdate).observe(this.slider)
          }
        }, {
          key: "render",
          value: function() {
            var SS = this,
              HS = this.props,
              gS = HS.value,
              tS = HS.orientation,
              XS = HS.className,
              xS = HS.tooltip,
              NS = HS.reverse,
              qS = HS.labels,
              IS = HS.min,
              fS = HS.max,
              aS = HS.handleLabel,
              KS = this.state.active,
              jS = QS.orientation[tS].dimension,
              GS = NS ? QS.orientation[tS].reverseDirection : QS.orientation[tS].direction,
              CS = this.getPositionFromValue(gS),
              nS = this.coordinates(CS),
              DS = PS({}, jS, "".concat(nS.fill, "px")),
              wS = PS({}, GS, "".concat(nS.handle, "px")),
              hS = xS && KS,
              ZS = [],
              JS = Object.keys(qS);
            if (JS.length > 0) {
              var OS, dS = kS(JS = JS.sort((function(SS, HS) {
                return NS ? SS - HS : HS - SS
              })));
              try {
                for (dS.s(); !(OS = dS.n()).done;) {
                  var cS = OS.value,
                    vS = this.getPositionFromValue(cS),
                    ES = this.coordinates(vS),
                    LS = PS({}, GS, "".concat(ES.label, "px"));
                  ZS.push((0, uS.jsx)("li", {
                    className: (0, bS.default)("rangeslider__label-item"),
                    "data-value": cS,
                    onMouseDown: this.handleDrag,
                    onTouchStart: this.handleStart,
                    onTouchEnd: this.handleEnd,
                    style: LS,
                    children: this.props.labels[cS]
                  }, cS))
                }
              } catch (YS) {
                dS.e(YS)
              } finally {
                dS.f()
              }
            }
            return (0, uS.jsxs)("div", {
              ref: function(HS) {
                SS.slider = HS
              },
              className: (0, bS.default)("rangeslider", "rangeslider-".concat(tS), {
                "rangeslider-reverse": NS
              }, XS),
              onMouseDown: this.handleDrag,
              onMouseUp: this.handleEnd,
              onTouchStart: this.handleStart,
              onTouchEnd: this.handleEnd,
              "aria-valuemin": IS,
              "aria-valuemax": fS,
              "aria-valuenow": gS,
              "aria-orientation": tS,
              children: [(0, uS.jsx)("div", {
                className: "rangeslider__fill",
                style: DS
              }), (0, uS.jsxs)("div", {
                ref: function(HS) {
                  SS.handle = HS
                },
                className: "rangeslider__handle",
                onMouseDown: this.handleStart,
                onTouchMove: this.handleDrag,
                onTouchEnd: this.handleEnd,
                onKeyDown: this.handleKeyDown,
                style: wS,
                tabIndex: 0,
                children: [hS && (0, uS.jsx)("div", {
                  ref: function(HS) {
                    SS.tooltip = HS
                  },
                  className: "rangeslider__handle-tooltip",
                  children: (0, uS.jsx)("span", {
                    children: this.handleFormat(gS)
                  })
                }), (0, uS.jsx)("div", {
                  className: "rangeslider__handle-label",
                  children: aS
                })]
              }), qS && this.renderLabels(ZS)]
            })
          }
        }]) && KS(HS.prototype, gS), tS && KS(HS, tS), Object.defineProperty(HS, "prototype", {
          writable: !1
        }), xS
      }(XS.Component);
    PS(DS, "propTypes", {
      min: xS.default.number,
      max: xS.default.number,
      step: xS.default.number,
      value: xS.default.number,
      orientation: xS.default.string,
      tooltip: xS.default.bool,
      reverse: xS.default.bool,
      labels: xS.default.object,
      handleLabel: xS.default.string,
      format: xS.default.func,
      onChangeStart: xS.default.func,
      onChange: xS.default.func,
      onChangeComplete: xS.default.func
    }), PS(DS, "defaultProps", {
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
    var wS = DS;
    HS.default = wS
  },
  5153: (SS, HS, gS) => {
    var tS;
    HS.c = void 0;
    var bS = ((tS = gS(5159)) && tS.__esModule ? tS : {
      default: tS
    }).default;
    HS.c = bS
  },
  5176: (SS, HS) => {
    Object.defineProperty(HS, "__esModule", {
      value: !0
    }), HS.capitalize = function(SS) {
      return SS.charAt(0).toUpperCase() + SS.substr(1)
    }, HS.clamp = function(SS, HS, gS) {
      return Math.min(Math.max(SS, HS), gS)
    }
  },
  5118: (SS, HS, gS) => {
    var tS = gS(5120);

    function bS() {}

    function XS() {}
    XS.resetWarningCache = bS, SS.exports = function() {
      function SS(SS, HS, gS, bS, XS, xS) {
        if (xS !== tS) {
          var NS = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw NS.name = "Invariant Violation", NS
        }
      }

      function HS() {
        return SS
      }
      SS.isRequired = SS;
      var gS = {
        array: SS,
        bigint: SS,
        bool: SS,
        func: SS,
        number: SS,
        object: SS,
        string: SS,
        symbol: SS,
        any: SS,
        arrayOf: HS,
        element: SS,
        elementType: SS,
        instanceOf: HS,
        node: SS,
        objectOf: HS,
        oneOf: HS,
        oneOfType: HS,
        shape: HS,
        exact: HS,
        checkPropTypes: XS,
        resetWarningCache: bS
      };
      return gS.PropTypes = gS, gS
    }
  },
  5116: (SS, HS, gS) => {
    SS.exports = gS(5118)()
  },
  5120: SS => {
    SS.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  },
  5168: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => ZS
    });
    var tS = function() {
        if ("undefined" !== typeof Map) return Map;

        function SS(SS, HS) {
          var gS = -1;
          return SS.some((function(SS, tS) {
            return SS[0] === HS && (gS = tS, !0)
          })), gS
        }
        return function() {
          function HS() {
            this.__entries__ = []
          }
          return Object.defineProperty(HS.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), HS.prototype.get = function(HS) {
            var gS = SS(this.__entries__, HS),
              tS = this.__entries__[gS];
            return tS && tS[1]
          }, HS.prototype.set = function(HS, gS) {
            var tS = SS(this.__entries__, HS);
            ~tS ? this.__entries__[tS][1] = gS : this.__entries__.push([HS, gS])
          }, HS.prototype.delete = function(HS) {
            var gS = this.__entries__,
              tS = SS(gS, HS);
            ~tS && gS.splice(tS, 1)
          }, HS.prototype.has = function(HS) {
            return !!~SS(this.__entries__, HS)
          }, HS.prototype.clear = function() {
            this.__entries__.splice(0)
          }, HS.prototype.forEach = function(SS, HS) {
            void 0 === HS && (HS = null);
            for (var gS = 0, tS = this.__entries__; gS < tS.length; gS++) {
              var bS = tS[gS];
              SS.call(HS, bS[1], bS[0])
            }
          }, HS
        }()
      }(),
      bS = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
      XS = "undefined" !== typeof gS.g && gS.g.Math === Math ? gS.g : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
      xS = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(XS) : function(SS) {
        return setTimeout((function() {
          return SS(Date.now())
        }), 1e3 / 60)
      };
    var NS = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      qS = "undefined" !== typeof MutationObserver,
      uS = function() {
        function SS() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(SS, HS) {
            var gS = !1,
              tS = !1,
              bS = 0;

            function XS() {
              gS && (gS = !1, SS()), tS && qS()
            }

            function NS() {
              xS(XS)
            }

            function qS() {
              var SS = Date.now();
              if (gS) {
                if (SS - bS < 2) return;
                tS = !0
              } else gS = !0, tS = !1, setTimeout(NS, HS);
              bS = SS
            }
            return qS
          }(this.refresh.bind(this), 20)
        }
        return SS.prototype.addObserver = function(SS) {
          ~this.observers_.indexOf(SS) || this.observers_.push(SS), this.connected_ || this.connect_()
        }, SS.prototype.removeObserver = function(SS) {
          var HS = this.observers_,
            gS = HS.indexOf(SS);
          ~gS && HS.splice(gS, 1), !HS.length && this.connected_ && this.disconnect_()
        }, SS.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, SS.prototype.updateObservers_ = function() {
          var SS = this.observers_.filter((function(SS) {
            return SS.gatherActive(), SS.hasActive()
          }));
          return SS.forEach((function(SS) {
            return SS.broadcastActive()
          })), SS.length > 0
        }, SS.prototype.connect_ = function() {
          bS && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qS ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, SS.prototype.disconnect_ = function() {
          bS && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, SS.prototype.onTransitionEnd_ = function(SS) {
          var HS = SS.propertyName,
            gS = void 0 === HS ? "" : HS;
          NS.some((function(SS) {
            return !!~gS.indexOf(SS)
          })) && this.refresh()
        }, SS.getInstance = function() {
          return this.instance_ || (this.instance_ = new SS), this.instance_
        }, SS.instance_ = null, SS
      }(),
      IS = function(SS, HS) {
        for (var gS = 0, tS = Object.keys(HS); gS < tS.length; gS++) {
          var bS = tS[gS];
          Object.defineProperty(SS, bS, {
            value: HS[bS],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return SS
      },
      fS = function(SS) {
        return SS && SS.ownerDocument && SS.ownerDocument.defaultView || XS
      },
      kS = nS(0, 0, 0, 0);

    function aS(SS) {
      return parseFloat(SS) || 0
    }

    function KS(SS) {
      for (var HS = [], gS = 1; gS < arguments.length; gS++) HS[gS - 1] = arguments[gS];
      return HS.reduce((function(HS, gS) {
        return HS + aS(SS["border-" + gS + "-width"])
      }), 0)
    }

    function jS(SS) {
      var HS = SS.clientWidth,
        gS = SS.clientHeight;
      if (!HS && !gS) return kS;
      var tS = fS(SS).getComputedStyle(SS),
        bS = function(SS) {
          for (var HS = {}, gS = 0, tS = ["top", "right", "bottom", "left"]; gS < tS.length; gS++) {
            var bS = tS[gS],
              XS = SS["padding-" + bS];
            HS[bS] = aS(XS)
          }
          return HS
        }(tS),
        XS = bS.left + bS.right,
        xS = bS.top + bS.bottom,
        NS = aS(tS.width),
        qS = aS(tS.height);
      if ("border-box" === tS.boxSizing && (Math.round(NS + XS) !== HS && (NS -= KS(tS, "left", "right") + XS), Math.round(qS + xS) !== gS && (qS -= KS(tS, "top", "bottom") + xS)), ! function(SS) {
          return SS === fS(SS).document.documentElement
        }(SS)) {
        var uS = Math.round(NS + XS) - HS,
          IS = Math.round(qS + xS) - gS;
        1 !== Math.abs(uS) && (NS -= uS), 1 !== Math.abs(IS) && (qS -= IS)
      }
      return nS(bS.left, bS.top, NS, qS)
    }
    var GS = "undefined" !== typeof SVGGraphicsElement ? function(SS) {
      return SS instanceof fS(SS).SVGGraphicsElement
    } : function(SS) {
      return SS instanceof fS(SS).SVGElement && "function" === typeof SS.getBBox
    };

    function CS(SS) {
      return bS ? GS(SS) ? function(SS) {
        var HS = SS.getBBox();
        return nS(0, 0, HS.width, HS.height)
      }(SS) : jS(SS) : kS
    }

    function nS(SS, HS, gS, tS) {
      return {
        x: SS,
        y: HS,
        width: gS,
        height: tS
      }
    }
    var PS = function() {
        function SS(SS) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = nS(0, 0, 0, 0), this.target = SS
        }
        return SS.prototype.isActive = function() {
          var SS = CS(this.target);
          return this.contentRect_ = SS, SS.width !== this.broadcastWidth || SS.height !== this.broadcastHeight
        }, SS.prototype.broadcastRect = function() {
          var SS = this.contentRect_;
          return this.broadcastWidth = SS.width, this.broadcastHeight = SS.height, SS
        }, SS
      }(),
      QS = function(SS, HS) {
        var gS = function(SS) {
          var HS = SS.x,
            gS = SS.y,
            tS = SS.width,
            bS = SS.height,
            XS = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            xS = Object.create(XS.prototype);
          return IS(xS, {
            x: HS,
            y: gS,
            width: tS,
            height: bS,
            top: gS,
            right: HS + tS,
            bottom: bS + gS,
            left: HS
          }), xS
        }(HS);
        IS(this, {
          target: SS,
          contentRect: gS
        })
      },
      DS = function() {
        function SS(SS, HS, gS) {
          if (this.activeObservations_ = [], this.observations_ = new tS, "function" !== typeof SS) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = SS, this.controller_ = HS, this.callbackCtx_ = gS
        }
        return SS.prototype.observe = function(SS) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(SS instanceof fS(SS).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var HS = this.observations_;
            HS.has(SS) || (HS.set(SS, new PS(SS)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, SS.prototype.unobserve = function(SS) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" !== typeof Element && Element instanceof Object) {
            if (!(SS instanceof fS(SS).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var HS = this.observations_;
            HS.has(SS) && (HS.delete(SS), HS.size || this.controller_.removeObserver(this))
          }
        }, SS.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, SS.prototype.gatherActive = function() {
          var SS = this;
          this.clearActive(), this.observations_.forEach((function(HS) {
            HS.isActive() && SS.activeObservations_.push(HS)
          }))
        }, SS.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var SS = this.callbackCtx_,
              HS = this.activeObservations_.map((function(SS) {
                return new QS(SS.target, SS.broadcastRect())
              }));
            this.callback_.call(SS, HS, SS), this.clearActive()
          }
        }, SS.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, SS.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, SS
      }(),
      wS = "undefined" !== typeof WeakMap ? new WeakMap : new tS,
      hS = function SS(HS) {
        if (!(this instanceof SS)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var gS = uS.getInstance(),
          tS = new DS(HS, gS, this);
        wS.set(this, tS)
      };
    ["observe", "unobserve", "disconnect"].forEach((function(SS) {
      hS.prototype[SS] = function() {
        var HS;
        return (HS = wS.get(this))[SS].apply(HS, arguments)
      }
    }));
    const ZS = "undefined" !== typeof XS.ResizeObserver ? XS.ResizeObserver : hS
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);