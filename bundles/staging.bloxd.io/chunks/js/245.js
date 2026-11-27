/*! For license information please see u88b9b.245.e4949b4c.chunk.js.LICENSE.txt */
export const id = 245;
export const ids = [245];
export const modules = {
  40461: (ee, ie, He) => {
    ee.exports = be;
    var ye = He(352);

    function be(ee, ie) {
      if (!(this instanceof be)) return new be(ee, ie);
      var He = ye.create();
      ye.add(He, ee, ie), this.base = ye.min(ye.create(), ee, He), this.vec = ye.clone(ie), this.max = ye.max(ye.create(), ee, He), this.mag = ye.length(this.vec)
    }
    var Me = be.prototype;
    Me.width = function() {
      return this.vec[0]
    }, Me.height = function() {
      return this.vec[1]
    }, Me.depth = function() {
      return this.vec[2]
    }, Me.x0 = function() {
      return this.base[0]
    }, Me.y0 = function() {
      return this.base[1]
    }, Me.z0 = function() {
      return this.base[2]
    }, Me.x1 = function() {
      return this.max[0]
    }, Me.y1 = function() {
      return this.max[1]
    }, Me.z1 = function() {
      return this.max[2]
    }, Me.translate = function(ee) {
      return ye.add(this.max, this.max, ee), ye.add(this.base, this.base, ee), this
    }, Me.setPosition = function(ee) {
      return ye.add(this.max, ee, this.vec), ye.copy(this.base, ee), this
    }, Me.expand = function(ee) {
      var ie = ye.create(),
        He = ye.create();
      return ye.max(ie, ee.max, this.max), ye.min(He, ee.base, this.base), ye.subtract(ie, ie, He), new be(He, ie)
    }, Me.intersects = function(ee) {
      return !(ee.base[0] > this.max[0]) && (!(ee.base[1] > this.max[1]) && (!(ee.base[2] > this.max[2]) && (!(ee.max[0] < this.base[0]) && (!(ee.max[1] < this.base[1]) && !(ee.max[2] < this.base[2])))))
    }, Me.touches = function(ee) {
      var ie = this.union(ee);
      return null !== ie && (0 == ie.width() || 0 == ie.height() || 0 == ie.depth())
    }, Me.union = function(ee) {
      if (!this.intersects(ee)) return null;
      var ie = Math.max(ee.base[0], this.base[0]),
        He = Math.max(ee.base[1], this.base[1]),
        ye = Math.max(ee.base[2], this.base[2]);
      return new be([ie, He, ye], [Math.min(ee.max[0], this.max[0]) - ie, Math.min(ee.max[1], this.max[1]) - He, Math.min(ee.max[2], this.max[2]) - ye])
    }
  },
  40459: ee => {
    ee.exports = function(ee, ie, He, ye, be, Me) {
      var Ke = +ie[0],
        Ue = +ie[1],
        Fe = +ie[2],
        Je = +He[0],
        oe = +He[1],
        Re = +He[2],
        ke = Math.sqrt(Je * Je + oe * oe + Re * Re);
      if (0 === ke) throw new Error("Can't raycast along a zero vector");
      return function(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
        for (var oe = 0, Re = Math.floor, ke = 0 | Re(ie), qe = 0 | Re(He), fe = 0 | Re(ye), Te = be > 0 ? 1 : -1, pe = Me > 0 ? 1 : -1, Xe = Ke > 0 ? 1 : -1, ze = Math.abs(1 / be), Be = Math.abs(1 / Me), Ee = Math.abs(1 / Ke), ge = ze < 1 / 0 ? ze * (Te > 0 ? ke + 1 - ie : ie - ke) : 1 / 0, Oe = Be < 1 / 0 ? Be * (pe > 0 ? qe + 1 - He : He - qe) : 1 / 0, de = Ee < 1 / 0 ? Ee * (Xe > 0 ? fe + 1 - ye : ye - fe) : 1 / 0, We = -1; oe <= Ue;) {
          var te = ee(ke, qe, fe);
          if (te) return Fe && (Fe[0] = ie + oe * be, Fe[1] = He + oe * Me, Fe[2] = ye + oe * Ke), Je && (Je[0] = Je[1] = Je[2] = 0, 0 === We && (Je[0] = -Te), 1 === We && (Je[1] = -pe), 2 === We && (Je[2] = -Xe)), te;
          ge < Oe ? ge < de ? (ke += Te, oe = ge, ge += ze, We = 0) : (fe += Xe, oe = de, de += Ee, We = 2) : Oe < de ? (qe += pe, oe = Oe, Oe += Be, We = 1) : (fe += Xe, oe = de, de += Ee, We = 2)
        }
        return Fe && (Fe[0] = ie + oe * be, Fe[1] = He + oe * Me, Fe[2] = ye + oe * Ke), Je && (Je[0] = Je[1] = Je[2] = 0), 0
      }(ee, Ke, Ue, Fe, Je /= ke, oe /= ke, Re /= ke, ye = "undefined" === typeof ye ? 64 : +ye, be, Me)
    }
  },
  39900: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      f: () => Me
    });
    var ye = He(4461);
    let be = null;

    function Me(ee) {
      return null !== be && ee === be
    }

    function Ke() {
      this.mG = !1, this.stopPropagation = !1, this.lG = !1, this.disabled = !1
    }
    class Ue {
      constructor(ee, ie) {
        this.version = "0.7.0";
        var He = Object.assign({}, new Ke, ie || {});
        this.element = ee || document, this.mG = !!He.mG, this.stopPropagation = !!He.stopPropagation, this.lG = !!He.lG, this.disabled = !!He.disabled, this.filterEvents = (ee, ie) => !0, this.ignoreEvent = ee => !1, this.down = new ye.EventEmitter, this.up = new ye.EventEmitter, this.state = {}, this.nG = {
          dx: 0,
          dy: 0,
          lHe: 0,
          SHe: 0,
          nHe: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Je(this) : document.addEventListener("DOMContentLoaded", (ee => {
          Je(this)
        }), {
          once: !0
        })
      }
      bind(ee) {
        for (var ie = arguments.length, He = new Array(ie > 1 ? ie - 1 : 0), ye = 1; ye < ie; ye++) He[ye - 1] = arguments[ye];
        He.forEach((ie => {
          var He = this._keyBindmap[ie] || [];
          He.includes(ee) || (He.push(ee), this._keyBindmap[ie] = He)
        })), this.state[ee] = !!this.state[ee], this.pressCount[ee] = this.pressCount[ee] || 0, this.releaseCount[ee] = this.releaseCount[ee] || 0
      }
      unbind(ee) {
        for (var ie in this._keyBindmap) {
          var He = this._keyBindmap[ie],
            ye = He.indexOf(ee);
          ye > -1 && He.splice(ye, 1)
        }
      }
      getBindings() {
        var ee = {};
        for (var ie in this._keyBindmap) {
          this._keyBindmap[ie].forEach((He => {
            ee[He] = ee[He] || [], ee[He].push(ie)
          }))
        }
        return ee
      }
      YR() {
        Fe(this.nG), Fe(this.pressCount), Fe(this.releaseCount)
      }
    }

    function Fe(ee) {
      for (var ie in ee) ee[ie] = 0
    }

    function Je(ee) {
      window.addEventListener("keydown", pe.bind(null, ee, !0), !1), window.addEventListener("keyup", pe.bind(null, ee, !1), !1);
      var ie = {
        passive: !0
      };
      ee.element.addEventListener("touchstart", qe.bind(void 0, ee), {
        passive: !1
      }), ee.element.addEventListener("touchend", Te.bind(void 0, ee), ie), ee.element.addEventListener("mousedown", Xe.bind(null, ee, !0), ie), window.document.addEventListener("mouseup", Xe.bind(null, ee, !1), ie), ee.element.addEventListener("touchmove", ze.bind(null, ee), ie), ee.element.addEventListener("mousemove", ze.bind(null, ee), ie), window.PointerEvent, ee.element.addEventListener("wheel", Be.bind(null, ee), ie), ee.element.addEventListener("contextmenu", Ee.bind(null, ee), !1), window.addEventListener("blur", de.bind(null, ee), !1)
    }
    var oe = 0,
      Re = 0,
      ke = null;

    function qe(ee, ie) {
      ie.preventDefault(), fe(ie)
    }

    function fe(ee) {
      let ie = !1;
      for (let He = 0; He < ee.touches.length; ++He)
        if (ee.touches[He].identifier === ke) {
          ie = !0;
          break
        } if (!ie) {
        const ie = ee.changedTouches[0];
        oe = ie.clientX, Re = ie.clientY, ke = ie.identifier
      }
    }

    function Te(ee, ie) {
      for (var He = ie.changedTouches, ye = 0; ye < He.length; ++ye) He[ye].identifier === ke && (ke = null)
    }

    function pe(ee, ie, He) {
      if (!ee.ignoreEvent(He)) try {
        We(ee, He), ie && He.isTrusted && !He.repeat && ee._keyStates[He.code] && te(ee, He.code)
      } finally {
        Ze(He.code, ie, ee, He)
      }
    }

    function Xe(ee, ie, He) {
      if (!ee.ignoreEvent(He)) try {
        We(ee, He)
      } finally {
        ! function(ee, ie, He) {
          if ("pointerId" in He)
            if (ie) {
              if (null !== ee._touches.currID) return;
              ee._touches.currID = He.pointerId
            } else {
              if (ee._touches.currID !== He.pointerId) return;
              ee._touches.currID = null
            } var ye = "button" in He ? He.button + 1 : 1;
          Ze("Mouse" + ye, ie, ee, He)
        }(ee, ie, He)
      }
    }

    function ze(ee, ie) {
      var He = ie.movementX || ie.mozMovementX || 0,
        ye = ie.movementY || ie.mozMovementY || 0;
      if (ie.touches && 0 === (He | ye)) {
        var be = function(ee) {
          fe(ee);
          for (let ie = 0; ie < ee.changedTouches.length; ++ie)
            if (ee.changedTouches[ie].identifier == ke) {
              const He = ee.changedTouches[ie],
                ye = [He.clientX - oe, He.clientY - Re];
              return oe = He.clientX, Re = He.clientY, ye
            } return console.error(`Did not find touch id ${ke}`), [0, 0]
        }(ie);
        He = be[0], ye = be[1]
      }
      ee.nG.dx += He, ee.nG.dy += ye
    }

    function Be(ee, ie) {
      We(ee, ie);
      var He = 1;
      switch (ie.deltaMode) {
        case 0:
          He = 1;
          break;
        case 1:
          He = 12;
          break;
        case 2:
          He = ee.element.clientHeight || window.innerHeight
      }
      ee.nG.lHe += (ie.deltaX || 0) * He, ee.nG.SHe += (ie.deltaY || 0) * He, ee.nG.nHe += (ie.deltaZ || 0) * He
    }

    function Ee(ee, ie) {
      if (!ee.lG) return ie.preventDefault(), !1
    }
    var ge = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Oe(ee, ie) {
      return !!ee[ge[ie]] || ("AltRight" === ie || "ControlLeft" === ie) && "function" === typeof ee.getModifierState && !0 === ee.getModifierState("AltGraph")
    }

    function de(ee, ie) {
      for (var He in ee._modifiersHeldThroughBlur = {}, ge) ee._keyStates[He] && (ee._modifiersHeldThroughBlur[He] = !0);
      ie && ie.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (ee) {
          return !0
        }
      }() && (clearTimeout(ee._blurRelease), ee._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ie in ee._modifiersHeldThroughBlur = {}, ee._keyStates) ee._keyStates[ie] && !/^Mouse\d/.test(ie) && te(ee, ie)
      }), 0))
    }

    function We(ee, ie) {
      var He = ee._modifiersHeldThroughBlur;
      if (He && ie.isTrusted && document.hasFocus())
        for (var ye in He) delete He[ye], ee._keyStates[ye] && ye !== ie.code && (Oe(ie, ye) || te(ee, ye))
    }

    function te(ee, ie) {
      const He = {
          code: ie,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        ye = be;
      be = He;
      try {
        Ze(ie, !1, ee, He)
      } finally {
        be = ye
      }
    }

    function Ze(ee, ie, He, ye) {
      var be = He._keyBindmap[ee];
      be && (we(He._keyStates[ee], ie) && (He._keyStates[ee] = ie, be.forEach((ee => {
        (!He.filterEvents || He.filterEvents(ye, ee)) && function(ee, ie, He, ye) {
          var be = ie ? He.pressCount : He.releaseCount;
          be[ee] = (be[ee] || 0) + 1;
          var Me = He._bindPressCount[ee] || 0;
          (Me += ie ? 1 : -1) < 0 && (Me = 0);
          He._bindPressCount[ee] = Me;
          var Ke = He.state[ee];
          if (we(Ke, Me)) {
            He.state[ee] = Me > 0;
            var Ue = ie ? He.down : He.up;
            He.disabled || Ue.emit(ee, ye)
          }
        }(ee, ie, He, ye)
      }))), "button" in ye || (He.mG && !ye.defaultPrevented && ye.preventDefault(), He.stopPropagation && ye.stopPropagation()))
    }

    function we(ee, ie) {
      return ee ? !ie : ie
    }
  },
  37358: (ee, ie) => {
    function He(ee) {
      if (ee && "object" === typeof ee) {
        var ie = ee.which || ee.keyCode || ee.charCode;
        ie && (ee = ie)
      }
      if ("number" === typeof ee) return Ke[ee];
      var He, Me = String(ee);
      return (He = ye[Me.toLowerCase()]) ? He : (He = be[Me.toLowerCase()]) || (1 === Me.length ? Me.charCodeAt(0) : void 0)
    }
    He.isEventKey = function(ee, ie) {
      if (ee && "object" === typeof ee) {
        var He = ee.which || ee.keyCode || ee.charCode;
        if (null === He || void 0 === He) return !1;
        if ("string" === typeof ie) {
          var Me;
          if (Me = ye[ie.toLowerCase()]) return Me === He;
          if (Me = be[ie.toLowerCase()]) return Me === He
        } else if ("number" === typeof ie) return ie === He;
        return !1
      }
    };
    var ye = (ie = ee.exports = He).code = ie.codes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        shift: 16,
        ctrl: 17,
        alt: 18,
        "pause/break": 19,
        "caps lock": 20,
        esc: 27,
        space: 32,
        "page up": 33,
        "page down": 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        delete: 46,
        command: 91,
        "left command": 91,
        "right command": 93,
        "numpad *": 106,
        "numpad +": 107,
        "numpad -": 109,
        "numpad .": 110,
        "numpad /": 111,
        "num lock": 144,
        "scroll lock": 145,
        "my computer": 182,
        "my calculator": 183,
        ";": 186,
        "=": 187,
        ",": 188,
        "-": 189,
        ".": 190,
        "/": 191,
        "`": 192,
        "[": 219,
        "\\": 220,
        "]": 221,
        "'": 222
      },
      be = ie.aliases = {
        windows: 91,
        "\u21e7": 16,
        "\u2325": 18,
        "\u2303": 17,
        "\u2318": 91,
        ctl: 17,
        control: 17,
        option: 18,
        pause: 19,
        break: 19,
        caps: 20,
        return: 13,
        escape: 27,
        spc: 32,
        spacebar: 32,
        pgup: 33,
        pgdn: 34,
        ins: 45,
        del: 46,
        cmd: 91
      };
    for (Me = 97; Me < 123; Me++) ye[String.fromCharCode(Me)] = Me - 32;
    for (var Me = 48; Me < 58; Me++) ye[Me - 48] = Me;
    for (Me = 1; Me < 13; Me++) ye["f" + Me] = Me + 111;
    for (Me = 0; Me < 10; Me++) ye["numpad " + Me] = Me + 96;
    var Ke = ie.names = ie.title = {};
    for (Me in ye) Ke[ye[Me]] = Me;
    for (var Ue in be) ye[Ue] = be[Ue]
  },
  40441: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.Av = !1, this.Qv = !1, this.lV = 30, this.sC = 0, this.Km = 100, this.HX = !1, this.fullscreen = !1, this.qE = function(ee) {}, this.Jm = function(ee, ie, He) {}, this.cR = function() {}, this.jB = function() {}, this.Rm = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(ee) {}, this._data = new be(ie),
          function(ee) {
            if ("loading" === document.readyState) {
              var ie = () => {
                document.removeEventListener("readystatechange", ie), ee()
              };
              document.addEventListener("readystatechange", ie)
            } else setTimeout(ee, 0)
          }((() => {
            ! function(ee) {
              var ie = ee._data,
                He = ie.nowObject.now();
              ie.lastTickStarted = He, ie.lastFrameStarted = He, ie.lastRenderStarted = He, ie.frameCB = () => function(ee) {
                var ie = ee._data;
                requestAnimationFrame(ie.frameCB), Ue(ee);
                var He = ie.nowObject.now(),
                  ye = He - ie.lastFrameStarted;
                if (ie.lastFrameStarted = He, ee.sC > 0) {
                  ie.renderAccum += ye;
                  var be = 1e3 / ee.sC;
                  if (ie.renderAccum < be) return;
                  ie.renderAccum -= be, ie.renderAccum > be && (ie.renderAccum = be)
                }
                var Me = He - ie.lastRenderStarted;
                ie.lastRenderStarted = He;
                var Ke = 1e3 / ee.lV,
                  Fe = (He - ie.lastTickStarted) / Ke;
                Fe < 0 && (Fe = 0);
                ee.Jm(Me, Fe, Ke), setTimeout(Ue, 0, ee, !0)
              }(ee), ie.intervalCB = () => Ue(ee), requestAnimationFrame(ie.frameCB), ie.pollTime > 0 && (ie.intervalID = setInterval(ie.intervalCB, Math.max(ie.pollTime, 1e3 / ee.lV / 2)))
            }(this),
            function(ee, ie) {
              if (!ie) return;
              var He = !1,
                ye = !1,
                be = ee => {
                  if (!!ee !== (He = ie === document.pointerLockElement))
                    if (ee) {
                      var ye = ie.requestPointerLock();
                      ye && ye.catch && ye.catch((ee => {}))
                    } else document.exitPointerLock()
                },
                Me = ee => {
                  !!ee !== (ye = ie === document.fullscreenElement) && (ee ? ie.requestFullscreen ? ie.requestFullscreen() : ie.webkitRequestFullscreen && ie.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (ye => {
                He = ie === document.pointerLockElement, ee.Rm(He)
              })), document.addEventListener("fullscreenchange", (He => {
                ye = ie === document.fullscreenElement, ee.onFullscreenChanged(ye)
              })), document.addEventListener("pointerlockerror", (ye => {
                He = ie === document.pointerLockElement, ee.onPointerLockError(ye)
              })), Object.defineProperty(ee, "HX", {
                get: () => He,
                set: be
              }), Object.defineProperty(ee, "fullscreen", {
                get: () => ye,
                set: Me
              }), ie.addEventListener("click", (ie => {
                ee.Av && be(!0), ee.Qv && Me(!0)
              }));
              var Ke = () => ee.jB();
              if (window.ResizeObserver) {
                new ResizeObserver(Ke).observe(ie)
              } else window.addEventListener("resize", Ke)
            }(this, ee), this.cR()
          }))
      }
    }

    function be() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = ee, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Me = 3,
      Ke = 20;

    function Ue(ee) {
      for (var ie = ee._data, He = 1e3 / ee.lV, ye = ie.nowObject.now() + Ke, be = 0; ie.nowObject.now() >= ie.lastTickStarted + He && ie.nowObject.now() < ye && ++be <= Me;) ee.qE(He), ie.lastTickStarted += He;
      var Ue = 5 * (He + 5),
        Fe = ie.nowObject.now();
      if (Fe - ie.lastTickStarted > Ue)
        for (; Fe >= ie.lastTickStarted + He;) ie.lastTickStarted += He
    }
  },
  37529: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ke
    });
    var ye = He(59);
    const be = ye.useLayoutEffect;
    const Me = function(ee) {
      var ie = (0, ye.useRef)(ee);
      return be((function() {
        ie.current = ee
      })), ie
    };
    var Ke = function(ee) {
      var ie = Me(ee);
      (0, ye.useEffect)((function() {
        var ee = function(ee) {
          var He;
          if (null != ie.current && (He = ie.current(ee)), ee.defaultPrevented && (ee.returnValue = ""), "string" === typeof He) return ee.returnValue = He, He
        };
        return window.addEventListener("beforeunload", ee),
          function() {
            window.removeEventListener("beforeunload", ee)
          }
      }), [])
    }
  },
  37400: ee => {
    var ie, He = "undefined" !== typeof window ? window.navigator.userAgent : "",
      ye = /OS X/.test(He),
      be = /Opera/.test(He),
      Me = !/like Gecko/.test(He) && !be,
      Ke = ee.exports = {
        0: ye ? "<menu>" : "<UNK>",
        1: "<mouse 1>",
        2: "<mouse 2>",
        3: "<break>",
        4: "<mouse 3>",
        5: "<mouse 4>",
        6: "<mouse 5>",
        8: "<backspace>",
        9: "<tab>",
        12: "<clear>",
        13: "<enter>",
        16: "<shift>",
        17: "<control>",
        18: "<alt>",
        19: "<pause>",
        20: "<caps-lock>",
        21: "<ime-hangul>",
        23: "<ime-junja>",
        24: "<ime-final>",
        25: "<ime-kanji>",
        27: "<escape>",
        28: "<ime-convert>",
        29: "<ime-nonconvert>",
        30: "<ime-accept>",
        31: "<ime-mode-change>",
        32: "<space>",
        33: "<page-up>",
        34: "<page-down>",
        35: "<end>",
        36: "<home>",
        37: "<left>",
        38: "<up>",
        39: "<right>",
        40: "<down>",
        41: "<select>",
        42: "<print>",
        43: "<execute>",
        44: "<snapshot>",
        45: "<insert>",
        46: "<delete>",
        47: "<help>",
        91: "<meta>",
        92: "<meta>",
        93: ye ? "<meta>" : "<menu>",
        95: "<sleep>",
        106: "<num-*>",
        107: "<num-+>",
        108: "<num-enter>",
        109: "<num--\x3e",
        110: "<num-.>",
        111: "<num-/>",
        144: "<num-lock>",
        145: "<scroll-lock>",
        160: "<shift-left>",
        161: "<shift-right>",
        162: "<control-left>",
        163: "<control-right>",
        164: "<alt-left>",
        165: "<alt-right>",
        166: "<browser-back>",
        167: "<browser-forward>",
        168: "<browser-refresh>",
        169: "<browser-stop>",
        170: "<browser-search>",
        171: "<browser-favorites>",
        172: "<browser-home>",
        173: ye && Me ? "-" : "<volume-mute>",
        174: "<volume-down>",
        175: "<volume-up>",
        176: "<next-track>",
        177: "<prev-track>",
        178: "<stop>",
        179: "<play-pause>",
        180: "<launch-mail>",
        181: "<launch-media-select>",
        182: "<launch-app 1>",
        183: "<launch-app 2>",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        223: "<meta>",
        224: "<meta>",
        226: "<alt-gr>",
        229: "<ime-process>",
        231: be ? "`" : "<unicode>",
        246: "<attention>",
        247: "<crsel>",
        248: "<exsel>",
        249: "<erase-eof>",
        250: "<play>",
        251: "<zoom>",
        252: "<no-name>",
        253: "<pa-1>",
        254: "<clear>"
      };
    for (ie = 58; ie < 65; ++ie) Ke[ie] = String.fromCharCode(ie);
    for (ie = 48; ie < 58; ++ie) Ke[ie] = ie - 48 + "";
    for (ie = 65; ie < 91; ++ie) Ke[ie] = String.fromCharCode(ie);
    for (ie = 96; ie < 106; ++ie) Ke[ie] = "<num-" + (ie - 96) + ">";
    for (ie = 112; ie < 136; ++ie) Ke[ie] = "F" + (ie - 111)
  },
  39778: (ee, ie, He) => {
    function ye(ee, ie, He, ye, be) {
      var Me = {};
      return Object.keys(ye).forEach((function(ee) {
        Me[ee] = ye[ee]
      })), Me.enumerable = !!Me.enumerable, Me.configurable = !!Me.configurable, ("value" in Me || Me.initializer) && (Me.writable = !0), Me = He.slice().reverse().reduce((function(He, ye) {
        return ye(ee, ie, He) || He
      }), Me), be && void 0 !== Me.initializer && (Me.value = Me.initializer ? Me.initializer.call(be) : void 0, Me.initializer = void 0), void 0 === Me.initializer && (Object.defineProperty(ee, ie, Me), Me = null), Me
    }
    He.d(ie, {
      e: () => ye
    })
  },
  39775: (ee, ie, He) => {
    function ye(ee, ie, He, ye) {
      He && Object.defineProperty(ee, ie, {
        enumerable: He.enumerable,
        configurable: He.configurable,
        writable: He.writable,
        value: He.initializer ? He.initializer.call(ye) : void 0
      })
    }
    He.d(ie, {
      e: () => ye
    })
  },
  39463: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467);
    const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
      ...ee
    } : null : ee.clone(ie) : null;
    class Me {
      static DeepCopy(ee, ie, He, Me) {
        let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ue = function(ee) {
          const ie = [];
          do {
            const He = Object.getOwnPropertyNames(ee);
            for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
          } while (ee = Object.getPrototypeOf(ee));
          return ie
        }(ee);
        for (const Je of Ue) {
          if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
          if (Je.endsWith("Observable")) continue;
          if (He && -1 !== He.indexOf(Je)) continue;
          const Ue = ee[Je],
            oe = typeof Ue;
          if ("function" !== oe) try {
            if ("object" === oe)
              if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
              else if (Ue instanceof Array) {
              if (ie[Je] = [], Ue.length > 0)
                if ("object" == typeof Ue[0])
                  for (let ee = 0; ee < Ue.length; ee++) {
                    const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
                  } else ie[Je] = Ue.slice(0)
            } else ie[Je] = be(Ue, ie, Ke);
            else ie[Je] = Ue
          } catch (Fe) {
            ye.e.Warn(Fe.message)
          }
        }
      }
    }
  },
  39499: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      g: () => Me,
      i: () => Ke,
      k: () => Ue
    });
    var ye = He(38022);
    class be {
      constructor(ee, ie, He) {
        this.gradient = ee, this.color1 = ie, this.color2 = He
      }
      getColorToRef(ee) {
        this.color2 ? ye.g.LerpToRef(this.color1, this.color2, Math.random(), ee) : ee.jD(this.color1)
      }
    }
    class Me {
      constructor(ee, ie) {
        this.gradient = ee, this.color = ie
      }
    }
    class Ke {
      constructor(ee, ie, He) {
        this.gradient = ee, this.factor1 = ie, this.factor2 = He
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Ue {
      static GetCurrentGradient(ee, ie, He) {
        if (ie[0].gradient > ee) return void He(ie[0], ie[0], 1);
        for (let be = 0; be < ie.length - 1; be++) {
          const ye = ie[be],
            Me = ie[be + 1];
          if (ee >= ye.gradient && ee <= Me.gradient) {
            return void He(ye, Me, (ee - ye.gradient) / (Me.gradient - ye.gradient))
          }
        }
        const ye = ie.length - 1;
        He(ie[ye], ie[ye], 1)
      }
    }
  },
  39467: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static _CheckLimit(ee, ie) {
        let He = ye._LogLimitOutputs[ee];
        return He ? He.current++ : (He = {
          limit: ie,
          current: 1
        }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
      }
      static _GenerateLimitMessage(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const He = ye._LogLimitOutputs[ee];
        if (!He || !ye.MessageLimitReached) return;
        const be = this._Levels[ie];
        He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
      }
      static _AddLogEntry(ee) {
        ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
      }
      static _FormatMessage(ee) {
        const ie = ee => ee < 10 ? "0" + ee : "" + ee,
          He = new Date;
        return "[" + ie(He.getHours()) + ":" + ie(He.getMinutes()) + ":" + ie(He.getSeconds()) + "]: " + ee
      }
      static _LogDisabled(ee, ie) {}
      static _LogEnabled() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const be = Array.isArray(ie) ? ie[0] : ie;
        if (void 0 !== He && !ye._CheckLimit(be, He)) return;
        const Me = ye._FormatMessage(be),
          Ke = this._Levels[ee],
          Ue = Array.isArray(ie) ? ie.slice(1) : [];
        Ke.logFunc && Ke.logFunc("BJS - " + Me, ...Ue);
        const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
        ye._AddLogEntry(Fe), ye._GenerateLimitMessage(be, ee)
      }
      static get LogCache() {
        return ye._LogCache
      }
      static ClearLogCache() {
        ye._LogCache = "", ye._LogLimitOutputs = {}, ye.errorsCount = 0
      }
      static set LogLevels(ee) {
        ye.Log = ye._LogDisabled, ye.Warn = ye._LogDisabled, ye.Error = ye._LogDisabled;
        const ie = [ye.MessageLogLevel, ye.WarningLogLevel, ye.ErrorLogLevel];
        for (const He of ie)
          if ((ee & He) === He) {
            const ee = this._Levels[He];
            ye[ee.name] = ye._LogEnabled.bind(ye, He)
          }
      }
    }
    ye.NoneLogLevel = 0, ye.MessageLogLevel = 1, ye.WarningLogLevel = 2, ye.ErrorLogLevel = 4, ye.AllLogLevel = 7, ye.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ye._LogCache = "", ye._LogLimitOutputs = {}, ye._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
  },
  39503: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    var ye = He(37917),
      be = He(37938),
      Me = He(39463);
    class Ke {
      constructor() {
        this.direction1 = new ye.p(0, 1, 0), this.direction2 = new ye.p(0, 1, 0), this.minEmitBox = new ye.p(-.5, -.5, -.5), this.maxEmitBox = new ye.p(.5, .5, .5)
      }
      startDirectionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(this.direction1.x, this.direction2.x),
          Ue = (0, be.RandomRange)(this.direction1.y, this.direction2.y),
          Fe = (0, be.RandomRange)(this.direction1.z, this.direction2.z);
        if (Me) return ie.x = Ke, ie.y = Ue, void(ie.z = Fe);
        ye.p.TransformNormalFromFloatsToRef(Ke, Ue, Fe, ee, ie)
      }
      startPositionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Ue = (0, be.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Fe = (0, be.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Me) return ie.x = Ke, ie.y = Ue, void(ie.z = Fe);
        ye.p.TransformCoordinatesFromFloatsToRef(Ke, Ue, Fe, ee, ie)
      }
      clone() {
        const ee = new Ke;
        return Me.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2), ee.setVector3("minEmitBox", this.minEmitBox), ee.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(ee) {
        ee.addUniform("direction1", 3), ee.addUniform("direction2", 3), ee.addUniform("minEmitBox", 3), ee.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee.minEmitBox = this.minEmitBox.Qbe(), ee.maxEmitBox = this.maxEmitBox.Qbe(), ee
      }
      parse(ee) {
        ye.p.FromArrayToRef(ee.direction1, 0, this.direction1), ye.p.FromArrayToRef(ee.direction2, 0, this.direction2), ye.p.FromArrayToRef(ee.minEmitBox, 0, this.minEmitBox), ye.p.FromArrayToRef(ee.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  39461: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      d: () => Ke
    });
    var ye = He(37917),
      be = He(37938),
      Me = He(39463);
    class Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = ee, this.height = ie, this.radiusRange = He, this.directionRandomizer = be, this._tempVector = ye.p.Zero()
      }
      startDirectionFunction(ee, ie, He, Me, Ke) {
        He.position.subtractToRef(ee.getTranslation(), this._tempVector), this._tempVector.normalize(), ye.p.TransformNormalToRef(this._tempVector, Ke, this._tempVector);
        const Ue = (0, be.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Fe = Math.atan2(this._tempVector.x, this._tempVector.z);
        Fe += (0, be.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ue, this._tempVector.x = Math.sin(Fe), this._tempVector.z = Math.cos(Fe), this._tempVector.normalize(), Me ? ie.jD(this._tempVector) : ye.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, ee, ie)
      }
      startPositionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(-this.height / 2, this.height / 2),
          Ue = (0, be.RandomRange)(0, 2 * Math.PI),
          Fe = (0, be.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Je = Math.sqrt(Fe) * this.radius,
          oe = Je * Math.cos(Ue),
          Re = Je * Math.sin(Ue);
        Me ? ie.wie(oe, Ke, Re) : ye.p.TransformCoordinatesFromFloatsToRef(oe, Ke, Re, ee, ie)
      }
      clone() {
        const ee = new Ke(this.radius, this.directionRandomizer);
        return Me.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("height", this.height), ee.setFloat("radiusRange", this.radiusRange), ee.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("height", 1), ee.addUniform("radiusRange", 1), ee.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const ee = {};
        return ee.type = this.getClassName(), ee.radius = this.radius, ee.height = this.height, ee.radiusRange = this.radiusRange, ee.directionRandomizer = this.directionRandomizer, ee
      }
      parse(ee) {
        this.radius = ee.radius, this.height = ee.height, this.radiusRange = ee.radiusRange, this.directionRandomizer = ee.directionRandomizer
      }
    }
    class Ue extends Ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new ye.p(0, 1, 0),
          Me = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new ye.p(0, 1, 0);
        super(ee, ie, He), this.direction1 = be, this.direction2 = Me
      }
      startDirectionFunction(ee, ie, He, Me) {
        const Ke = (0, be.RandomRange)(this.direction1.x, this.direction2.x),
          Ue = (0, be.RandomRange)(this.direction1.y, this.direction2.y),
          Fe = (0, be.RandomRange)(this.direction1.z, this.direction2.z);
        Me ? ie.wie(Ke, Ue, Fe) : ye.p.TransformNormalFromFloatsToRef(Ke, Ue, Fe, ee, ie)
      }
      clone() {
        const ee = new Ue(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Me.b.DeepCopy(this, ee), ee
      }
      applyToShader(ee) {
        ee.setFloat("radius", this.radius), ee.setFloat("height", this.height), ee.setFloat("radiusRange", this.radiusRange), ee.setVector3("direction1", this.direction1), ee.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(ee) {
        ee.addUniform("radius", 1), ee.addUniform("height", 1), ee.addUniform("radiusRange", 1), ee.addUniform("direction1", 3), ee.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const ee = super.serialize();
        return ee.direction1 = this.direction1.Qbe(), ee.direction2 = this.direction2.Qbe(), ee
      }
      parse(ee) {
        super.parse(ee), ye.p.FromArrayToRef(ee.direction1, 0, this.direction1), ye.p.FromArrayToRef(ee.direction2, 0, this.direction2)
      }
    }
  },
  39572: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re
    });
    const ye = .5 * (Math.sqrt(3) - 1),
      be = (3 - Math.sqrt(3)) / 6,
      Me = 1 / 3,
      Ke = 1 / 6,
      Ue = (Math.sqrt(5) - 1) / 4,
      Fe = (5 - Math.sqrt(5)) / 20,
      Je = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      oe = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Re = class {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const ie = "function" == typeof ee ? ee : function(ee) {
          let ie = 0,
            He = 0,
            ye = 0,
            be = 1;
          const Me = function() {
            let ee = 4022871197;
            return function(ie) {
              ie = ie.toString();
              for (let He = 0; He < ie.length; He++) {
                ee += ie.charCodeAt(He);
                let ye = .02519603282416938 * ee;
                ee = ye >>> 0, ye -= ee, ye *= ee, ee = ye >>> 0, ye -= ee, ee += 4294967296 * ye
              }
              return 2.3283064365386963e-10 * (ee >>> 0)
            }
          }();
          ie = Me(" "), He = Me(" "), ye = Me(" "), ie -= Me(ee), ie < 0 && (ie += 1);
          He -= Me(ee), He < 0 && (He += 1);
          ye -= Me(ee), ye < 0 && (ye += 1);
          return function() {
            const ee = 2091639 * ie + 2.3283064365386963e-10 * be;
            return ie = He, He = ye, ye = ee - (be = 0 | ee)
          }
        }(ee);
        this.p = function(ee) {
          const ie = new Uint8Array(256);
          for (let He = 0; He < 256; He++) ie[He] = He;
          for (let He = 0; He < 255; He++) {
            const ye = He + ~~(ee() * (256 - He)),
              be = ie[He];
            ie[He] = ie[ye], ie[ye] = be
          }
          return ie
        }(ie), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let He = 0; He < 512; He++) this.perm[He] = this.p[255 & He], this.permMod12[He] = this.perm[He] % 12
      }
      noise2D(ee, ie) {
        const He = this.permMod12,
          Me = this.perm;
        let Ke = 0,
          Ue = 0,
          Fe = 0;
        const oe = (ee + ie) * ye,
          Re = Math.floor(ee + oe),
          ke = Math.floor(ie + oe),
          qe = (Re + ke) * be,
          fe = ee - (Re - qe),
          Te = ie - (ke - qe);
        let pe, Xe;
        fe > Te ? (pe = 1, Xe = 0) : (pe = 0, Xe = 1);
        const ze = fe - pe + be,
          Be = Te - Xe + be,
          Ee = fe - 1 + 2 * be,
          ge = Te - 1 + 2 * be,
          Oe = 255 & Re,
          de = 255 & ke;
        let We = .5 - fe * fe - Te * Te;
        if (We >= 0) {
          const ee = 3 * He[Oe + Me[de]];
          We *= We, Ke = We * We * (Je[ee] * fe + Je[ee + 1] * Te)
        }
        let te = .5 - ze * ze - Be * Be;
        if (te >= 0) {
          const ee = 3 * He[Oe + pe + Me[de + Xe]];
          te *= te, Ue = te * te * (Je[ee] * ze + Je[ee + 1] * Be)
        }
        let Ze = .5 - Ee * Ee - ge * ge;
        if (Ze >= 0) {
          const ee = 3 * He[Oe + 1 + Me[de + 1]];
          Ze *= Ze, Fe = Ze * Ze * (Je[ee] * Ee + Je[ee + 1] * ge)
        }
        return 70 * (Ke + Ue + Fe)
      }
      noise3D(ee, ie, He) {
        const ye = this.permMod12,
          be = this.perm;
        let Ue, Fe, oe, Re;
        const ke = (ee + ie + He) * Me,
          qe = Math.floor(ee + ke),
          fe = Math.floor(ie + ke),
          Te = Math.floor(He + ke),
          pe = (qe + fe + Te) * Ke,
          Xe = ee - (qe - pe),
          ze = ie - (fe - pe),
          Be = He - (Te - pe);
        let Ee, ge, Oe, de, We, te;
        Xe >= ze ? ze >= Be ? (Ee = 1, ge = 0, Oe = 0, de = 1, We = 1, te = 0) : Xe >= Be ? (Ee = 1, ge = 0, Oe = 0, de = 1, We = 0, te = 1) : (Ee = 0, ge = 0, Oe = 1, de = 1, We = 0, te = 1) : ze < Be ? (Ee = 0, ge = 0, Oe = 1, de = 0, We = 1, te = 1) : Xe < Be ? (Ee = 0, ge = 1, Oe = 0, de = 0, We = 1, te = 1) : (Ee = 0, ge = 1, Oe = 0, de = 1, We = 1, te = 0);
        const Ze = Xe - Ee + Ke,
          we = ze - ge + Ke,
          De = Be - Oe + Ke,
          Pe = Xe - de + 2 * Ke,
          Ae = ze - We + 2 * Ke,
          Ye = Be - te + 2 * Ke,
          Ve = Xe - 1 + .5,
          ae = ze - 1 + .5,
          ce = Be - 1 + .5,
          xe = 255 & qe,
          Le = 255 & fe,
          Ce = 255 & Te;
        let ve = .6 - Xe * Xe - ze * ze - Be * Be;
        if (ve < 0) Ue = 0;
        else {
          const ee = 3 * ye[xe + be[Le + be[Ce]]];
          ve *= ve, Ue = ve * ve * (Je[ee] * Xe + Je[ee + 1] * ze + Je[ee + 2] * Be)
        }
        let ue = .6 - Ze * Ze - we * we - De * De;
        if (ue < 0) Fe = 0;
        else {
          const ee = 3 * ye[xe + Ee + be[Le + ge + be[Ce + Oe]]];
          ue *= ue, Fe = ue * ue * (Je[ee] * Ze + Je[ee + 1] * we + Je[ee + 2] * De)
        }
        let me = .6 - Pe * Pe - Ae * Ae - Ye * Ye;
        if (me < 0) oe = 0;
        else {
          const ee = 3 * ye[xe + de + be[Le + We + be[Ce + te]]];
          me *= me, oe = me * me * (Je[ee] * Pe + Je[ee + 1] * Ae + Je[ee + 2] * Ye)
        }
        let le = .6 - Ve * Ve - ae * ae - ce * ce;
        if (le < 0) Re = 0;
        else {
          const ee = 3 * ye[xe + 1 + be[Le + 1 + be[Ce + 1]]];
          le *= le, Re = le * le * (Je[ee] * Ve + Je[ee + 1] * ae + Je[ee + 2] * ce)
        }
        return 32 * (Ue + Fe + oe + Re)
      }
      noise4D(ee, ie, He, ye) {
        const be = this.perm;
        let Me, Ke, Je, Re, ke;
        const qe = (ee + ie + He + ye) * Ue,
          fe = Math.floor(ee + qe),
          Te = Math.floor(ie + qe),
          pe = Math.floor(He + qe),
          Xe = Math.floor(ye + qe),
          ze = (fe + Te + pe + Xe) * Fe,
          Be = ee - (fe - ze),
          Ee = ie - (Te - ze),
          ge = He - (pe - ze),
          Oe = ye - (Xe - ze);
        let de = 0,
          We = 0,
          te = 0,
          Ze = 0;
        Be > Ee ? de++ : We++, Be > ge ? de++ : te++, Be > Oe ? de++ : Ze++, Ee > ge ? We++ : te++, Ee > Oe ? We++ : Ze++, ge > Oe ? te++ : Ze++;
        const we = de >= 3 ? 1 : 0,
          De = We >= 3 ? 1 : 0,
          Pe = te >= 3 ? 1 : 0,
          Ae = Ze >= 3 ? 1 : 0,
          Ye = de >= 2 ? 1 : 0,
          Ve = We >= 2 ? 1 : 0,
          ae = te >= 2 ? 1 : 0,
          ce = Ze >= 2 ? 1 : 0,
          xe = de >= 1 ? 1 : 0,
          Le = We >= 1 ? 1 : 0,
          Ce = te >= 1 ? 1 : 0,
          ve = Ze >= 1 ? 1 : 0,
          ue = Be - we + Fe,
          me = Ee - De + Fe,
          le = ge - Pe + Fe,
          Se = Oe - Ae + Fe,
          ne = Be - Ye + 2 * Fe,
          je = Ee - Ve + 2 * Fe,
          se = ge - ae + 2 * Fe,
          Ie = Oe - ce + 2 * Fe,
          he = Be - xe + 3 * Fe,
          Ne = Ee - Le + 3 * Fe,
          Ge = ge - Ce + 3 * Fe,
          re = Oe - ve + 3 * Fe,
          Qe = Be - 1 + 4 * Fe,
          ei = Ee - 1 + 4 * Fe,
          ii = ge - 1 + 4 * Fe,
          Hi = Oe - 1 + 4 * Fe,
          yi = 255 & fe,
          bi = 255 & Te,
          Mi = 255 & pe,
          Ki = 255 & Xe;
        let Ui = .6 - Be * Be - Ee * Ee - ge * ge - Oe * Oe;
        if (Ui < 0) Me = 0;
        else {
          const ee = be[yi + be[bi + be[Mi + be[Ki]]]] % 32 * 4;
          Ui *= Ui, Me = Ui * Ui * (oe[ee] * Be + oe[ee + 1] * Ee + oe[ee + 2] * ge + oe[ee + 3] * Oe)
        }
        let Fi = .6 - ue * ue - me * me - le * le - Se * Se;
        if (Fi < 0) Ke = 0;
        else {
          const ee = be[yi + we + be[bi + De + be[Mi + Pe + be[Ki + Ae]]]] % 32 * 4;
          Fi *= Fi, Ke = Fi * Fi * (oe[ee] * ue + oe[ee + 1] * me + oe[ee + 2] * le + oe[ee + 3] * Se)
        }
        let Ji = .6 - ne * ne - je * je - se * se - Ie * Ie;
        if (Ji < 0) Je = 0;
        else {
          const ee = be[yi + Ye + be[bi + Ve + be[Mi + ae + be[Ki + ce]]]] % 32 * 4;
          Ji *= Ji, Je = Ji * Ji * (oe[ee] * ne + oe[ee + 1] * je + oe[ee + 2] * se + oe[ee + 3] * Ie)
        }
        let oi = .6 - he * he - Ne * Ne - Ge * Ge - re * re;
        if (oi < 0) Re = 0;
        else {
          const ee = be[yi + xe + be[bi + Le + be[Mi + Ce + be[Ki + ve]]]] % 32 * 4;
          oi *= oi, Re = oi * oi * (oe[ee] * he + oe[ee + 1] * Ne + oe[ee + 2] * Ge + oe[ee + 3] * re)
        }
        let Ri = .6 - Qe * Qe - ei * ei - ii * ii - Hi * Hi;
        if (Ri < 0) ke = 0;
        else {
          const ee = be[yi + 1 + be[bi + 1 + be[Mi + 1 + be[Ki + 1]]]] % 32 * 4;
          Ri *= Ri, ke = Ri * Ri * (oe[ee] * Qe + oe[ee + 1] * ei + oe[ee + 2] * ii + oe[ee + 3] * Hi)
        }
        return 27 * (Me + Ke + Je + Re + ke)
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);