/*! For license information please see bcgkc.213.de241a35.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  39339: (TT, kT, cT) => {
    TT.exports = MT;
    var lT = cT(350);

    function MT(TT, kT) {
      if (!(this instanceof MT)) return new MT(TT, kT);
      var cT = lT.create();
      lT.add(cT, TT, kT), this.base = lT.min(lT.create(), TT, cT), this.vec = lT.clone(kT), this.max = lT.max(lT.create(), TT, cT), this.mag = lT.length(this.vec)
    }
    var KT = MT.prototype;
    KT.width = function() {
      return this.vec[0]
    }, KT.height = function() {
      return this.vec[1]
    }, KT.depth = function() {
      return this.vec[2]
    }, KT.x0 = function() {
      return this.base[0]
    }, KT.y0 = function() {
      return this.base[1]
    }, KT.z0 = function() {
      return this.base[2]
    }, KT.x1 = function() {
      return this.max[0]
    }, KT.y1 = function() {
      return this.max[1]
    }, KT.z1 = function() {
      return this.max[2]
    }, KT.translate = function(TT) {
      return lT.add(this.max, this.max, TT), lT.add(this.base, this.base, TT), this
    }, KT.setPosition = function(TT) {
      return lT.add(this.max, TT, this.vec), lT.copy(this.base, TT), this
    }, KT.expand = function(TT) {
      var kT = lT.create(),
        cT = lT.create();
      return lT.max(kT, TT.max, this.max), lT.min(cT, TT.base, this.base), lT.subtract(kT, kT, cT), new MT(cT, kT)
    }, KT.intersects = function(TT) {
      return !(TT.base[0] > this.max[0]) && (!(TT.base[1] > this.max[1]) && (!(TT.base[2] > this.max[2]) && (!(TT.max[0] < this.base[0]) && (!(TT.max[1] < this.base[1]) && !(TT.max[2] < this.base[2])))))
    }, KT.touches = function(TT) {
      var kT = this.union(TT);
      return null !== kT && (0 == kT.width() || 0 == kT.height() || 0 == kT.depth())
    }, KT.union = function(TT) {
      if (!this.intersects(TT)) return null;
      var kT = Math.max(TT.base[0], this.base[0]),
        cT = Math.max(TT.base[1], this.base[1]),
        lT = Math.max(TT.base[2], this.base[2]);
      return new MT([kT, cT, lT], [Math.min(TT.max[0], this.max[0]) - kT, Math.min(TT.max[1], this.max[1]) - cT, Math.min(TT.max[2], this.max[2]) - lT])
    }
  },
  39330: TT => {
    TT.exports = function(TT, kT, cT, lT, MT, KT) {
      var OT = +kT[0],
        yT = +kT[1],
        fT = +kT[2],
        xT = +cT[0],
        IT = +cT[1],
        AT = +cT[2],
        CT = Math.sqrt(xT * xT + IT * IT + AT * AT);
      if (0 === CT) throw new Error("Can't raycast along a zero vector");
      return function(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
        for (var IT = 0, AT = Math.floor, CT = 0 | AT(kT), jT = 0 | AT(cT), vT = 0 | AT(lT), tT = MT > 0 ? 1 : -1, hT = KT > 0 ? 1 : -1, NT = OT > 0 ? 1 : -1, QT = Math.abs(1 / MT), ST = Math.abs(1 / KT), DT = Math.abs(1 / OT), aT = QT < 1 / 0 ? QT * (tT > 0 ? CT + 1 - kT : kT - CT) : 1 / 0, FT = ST < 1 / 0 ? ST * (hT > 0 ? jT + 1 - cT : cT - jT) : 1 / 0, rT = DT < 1 / 0 ? DT * (NT > 0 ? vT + 1 - lT : lT - vT) : 1 / 0, PT = -1; IT <= yT;) {
          var wT = TT(CT, jT, vT);
          if (wT) return fT && (fT[0] = kT + IT * MT, fT[1] = cT + IT * KT, fT[2] = lT + IT * OT), xT && (xT[0] = xT[1] = xT[2] = 0, 0 === PT && (xT[0] = -tT), 1 === PT && (xT[1] = -hT), 2 === PT && (xT[2] = -NT)), wT;
          aT < FT ? aT < rT ? (CT += tT, IT = aT, aT += QT, PT = 0) : (vT += NT, IT = rT, rT += DT, PT = 2) : FT < rT ? (jT += hT, IT = FT, FT += ST, PT = 1) : (vT += NT, IT = rT, rT += DT, PT = 2)
        }
        return fT && (fT[0] = kT + IT * MT, fT[1] = cT + IT * KT, fT[2] = lT + IT * OT), xT && (xT[0] = xT[1] = xT[2] = 0), 0
      }(TT, OT, yT, fT, xT /= CT, IT /= CT, AT /= CT, lT = "undefined" === typeof lT ? 64 : +lT, MT, KT)
    }
  },
  38919: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => yT,
      f: () => KT
    });
    var lT = cT(4089);
    let MT = null;

    function KT(TT) {
      return null !== MT && TT === MT
    }

    function OT() {
      this.HZ = !1, this.stopPropagation = !1, this.eZ = !1, this.disabled = !1
    }
    class yT {
      constructor(TT, kT) {
        this.version = "0.7.0";
        var cT = Object.assign({}, new OT, kT || {});
        this.element = TT || document, this.HZ = !!cT.HZ, this.stopPropagation = !!cT.stopPropagation, this.eZ = !!cT.eZ, this.disabled = !!cT.disabled, this.filterEvents = (TT, kT) => !0, this.ignoreEvent = TT => !1, this.down = new lT.EventEmitter, this.up = new lT.EventEmitter, this.state = {}, this.uZ = {
          dx: 0,
          dy: 0,
          vTT: 0,
          tTT: 0,
          hTT: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? xT(this) : document.addEventListener("DOMContentLoaded", (TT => {
          xT(this)
        }), {
          once: !0
        })
      }
      bind(TT) {
        for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
        cT.forEach((kT => {
          var cT = this._keyBindmap[kT] || [];
          cT.includes(TT) || (cT.push(TT), this._keyBindmap[kT] = cT)
        })), this.state[TT] = !!this.state[TT], this.pressCount[TT] = this.pressCount[TT] || 0, this.releaseCount[TT] = this.releaseCount[TT] || 0
      }
      unbind(TT) {
        for (var kT in this._keyBindmap) {
          var cT = this._keyBindmap[kT],
            lT = cT.indexOf(TT);
          lT > -1 && cT.splice(lT, 1)
        }
      }
      getBindings() {
        var TT = {};
        for (var kT in this._keyBindmap) {
          this._keyBindmap[kT].forEach((cT => {
            TT[cT] = TT[cT] || [], TT[cT].push(kT)
          }))
        }
        return TT
      }
      UA() {
        fT(this.uZ), fT(this.pressCount), fT(this.releaseCount)
      }
    }

    function fT(TT) {
      for (var kT in TT) TT[kT] = 0
    }

    function xT(TT) {
      window.addEventListener("keydown", hT.bind(null, TT, !0), !1), window.addEventListener("keyup", hT.bind(null, TT, !1), !1);
      var kT = {
        passive: !0
      };
      TT.element.addEventListener("touchstart", jT.bind(void 0, TT), {
        passive: !1
      }), TT.element.addEventListener("touchend", tT.bind(void 0, TT), kT), TT.element.addEventListener("mousedown", NT.bind(null, TT, !0), kT), window.document.addEventListener("mouseup", NT.bind(null, TT, !1), kT), TT.element.addEventListener("touchmove", QT.bind(null, TT), kT), TT.element.addEventListener("mousemove", QT.bind(null, TT), kT), window.PointerEvent, TT.element.addEventListener("wheel", ST.bind(null, TT), kT), TT.element.addEventListener("contextmenu", DT.bind(null, TT), !1), window.addEventListener("blur", rT.bind(null, TT), !1)
    }
    var IT = 0,
      AT = 0,
      CT = null;

    function jT(TT, kT) {
      kT.preventDefault(), vT(kT)
    }

    function vT(TT) {
      let kT = !1;
      for (let cT = 0; cT < TT.touches.length; ++cT)
        if (TT.touches[cT].identifier === CT) {
          kT = !0;
          break
        } if (!kT) {
        const kT = TT.changedTouches[0];
        IT = kT.clientX, AT = kT.clientY, CT = kT.identifier
      }
    }

    function tT(TT, kT) {
      for (var cT = kT.changedTouches, lT = 0; lT < cT.length; ++lT) cT[lT].identifier === CT && (CT = null)
    }

    function hT(TT, kT, cT) {
      if (!TT.ignoreEvent(cT)) try {
        PT(TT, cT), kT && cT.isTrusted && !cT.repeat && TT._keyStates[cT.code] && wT(TT, cT.code)
      } finally {
        mT(cT.code, kT, TT, cT)
      }
    }

    function NT(TT, kT, cT) {
      if (!TT.ignoreEvent(cT)) try {
        PT(TT, cT)
      } finally {
        ! function(TT, kT, cT) {
          if ("pointerId" in cT)
            if (kT) {
              if (null !== TT._touches.currID) return;
              TT._touches.currID = cT.pointerId
            } else {
              if (TT._touches.currID !== cT.pointerId) return;
              TT._touches.currID = null
            } var lT = "button" in cT ? cT.button + 1 : 1;
          mT("Mouse" + lT, kT, TT, cT)
        }(TT, kT, cT)
      }
    }

    function QT(TT, kT) {
      var cT = kT.movementX || kT.mozMovementX || 0,
        lT = kT.movementY || kT.mozMovementY || 0;
      if (kT.touches && 0 === (cT | lT)) {
        var MT = function(TT) {
          vT(TT);
          for (let kT = 0; kT < TT.changedTouches.length; ++kT)
            if (TT.changedTouches[kT].identifier == CT) {
              const cT = TT.changedTouches[kT],
                lT = [cT.clientX - IT, cT.clientY - AT];
              return IT = cT.clientX, AT = cT.clientY, lT
            } return console.error(`Did not find touch id ${CT}`), [0, 0]
        }(kT);
        cT = MT[0], lT = MT[1]
      }
      TT.uZ.dx += cT, TT.uZ.dy += lT
    }

    function ST(TT, kT) {
      PT(TT, kT);
      var cT = 1;
      switch (kT.deltaMode) {
        case 0:
          cT = 1;
          break;
        case 1:
          cT = 12;
          break;
        case 2:
          cT = TT.element.clientHeight || window.innerHeight
      }
      TT.uZ.vTT += (kT.deltaX || 0) * cT, TT.uZ.tTT += (kT.deltaY || 0) * cT, TT.uZ.hTT += (kT.deltaZ || 0) * cT
    }

    function DT(TT, kT) {
      if (!TT.eZ) return kT.preventDefault(), !1
    }
    var aT = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function FT(TT, kT) {
      return !!TT[aT[kT]] || ("AltRight" === kT || "ControlLeft" === kT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
    }

    function rT(TT, kT) {
      for (var cT in TT._modifiersHeldThroughBlur = {}, aT) TT._keyStates[cT] && (TT._modifiersHeldThroughBlur[cT] = !0);
      kT && kT.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (TT) {
          return !0
        }
      }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var kT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[kT] && !/^Mouse\d/.test(kT) && wT(TT, kT)
      }), 0))
    }

    function PT(TT, kT) {
      var cT = TT._modifiersHeldThroughBlur;
      if (cT && kT.isTrusted && document.hasFocus())
        for (var lT in cT) delete cT[lT], TT._keyStates[lT] && lT !== kT.code && (FT(kT, lT) || wT(TT, lT))
    }

    function wT(TT, kT) {
      const cT = {
          code: kT,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        lT = MT;
      MT = cT;
      try {
        mT(kT, !1, TT, cT)
      } finally {
        MT = lT
      }
    }

    function mT(TT, kT, cT, lT) {
      var MT = cT._keyBindmap[TT];
      MT && (bT(cT._keyStates[TT], kT) && (cT._keyStates[TT] = kT, MT.forEach((TT => {
        (!cT.filterEvents || cT.filterEvents(lT, TT)) && function(TT, kT, cT, lT) {
          var MT = kT ? cT.pressCount : cT.releaseCount;
          MT[TT] = (MT[TT] || 0) + 1;
          var KT = cT._bindPressCount[TT] || 0;
          (KT += kT ? 1 : -1) < 0 && (KT = 0);
          cT._bindPressCount[TT] = KT;
          var OT = cT.state[TT];
          if (bT(OT, KT)) {
            cT.state[TT] = KT > 0;
            var yT = kT ? cT.down : cT.up;
            cT.disabled || yT.emit(TT, lT)
          }
        }(TT, kT, cT, lT)
      }))), "button" in lT || (cT.HZ && !lT.defaultPrevented && lT.preventDefault(), cT.stopPropagation && lT.stopPropagation()))
    }

    function bT(TT, kT) {
      return TT ? !kT : kT
    }
  },
  36359: (TT, kT) => {
    function cT(TT) {
      if (TT && "object" === typeof TT) {
        var kT = TT.which || TT.keyCode || TT.charCode;
        kT && (TT = kT)
      }
      if ("number" === typeof TT) return OT[TT];
      var cT, KT = String(TT);
      return (cT = lT[KT.toLowerCase()]) ? cT : (cT = MT[KT.toLowerCase()]) || (1 === KT.length ? KT.charCodeAt(0) : void 0)
    }
    cT.isEventKey = function(TT, kT) {
      if (TT && "object" === typeof TT) {
        var cT = TT.which || TT.keyCode || TT.charCode;
        if (null === cT || void 0 === cT) return !1;
        if ("string" === typeof kT) {
          var KT;
          if (KT = lT[kT.toLowerCase()]) return KT === cT;
          if (KT = MT[kT.toLowerCase()]) return KT === cT
        } else if ("number" === typeof kT) return kT === cT;
        return !1
      }
    };
    var lT = (kT = TT.exports = cT).code = kT.codes = {
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
      MT = kT.aliases = {
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
    for (KT = 97; KT < 123; KT++) lT[String.fromCharCode(KT)] = KT - 32;
    for (var KT = 48; KT < 58; KT++) lT[KT - 48] = KT;
    for (KT = 1; KT < 13; KT++) lT["f" + KT] = KT + 111;
    for (KT = 0; KT < 10; KT++) lT["numpad " + KT] = KT + 96;
    var OT = kT.names = kT.title = {};
    for (KT in lT) OT[lT[KT]] = KT;
    for (var yT in MT) lT[yT] = MT[yT]
  },
  39320: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.yG = !1, this.xG = !1, this.xJ = 30, this.nH = 0, this.vG = 100, this.Zh = !1, this.fullscreen = !1, this.pN = function(TT) {}, this.hG = function(TT, kT, cT) {}, this.rG = function() {}, this.zN = function() {}, this.QG = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(TT) {}, this._data = new MT(kT),
          function(TT) {
            if ("loading" === document.readyState) {
              var kT = () => {
                document.removeEventListener("readystatechange", kT), TT()
              };
              document.addEventListener("readystatechange", kT)
            } else setTimeout(TT, 0)
          }((() => {
            ! function(TT) {
              var kT = TT._data,
                cT = kT.nowObject.now();
              kT.lastTickStarted = cT, kT.lastFrameStarted = cT, kT.lastRenderStarted = cT, kT.frameCB = () => function(TT) {
                var kT = TT._data;
                requestAnimationFrame(kT.frameCB), yT(TT);
                var cT = kT.nowObject.now(),
                  lT = cT - kT.lastFrameStarted;
                if (kT.lastFrameStarted = cT, TT.nH > 0) {
                  kT.renderAccum += lT;
                  var MT = 1e3 / TT.nH;
                  if (kT.renderAccum < MT) return;
                  kT.renderAccum -= MT, kT.renderAccum > MT && (kT.renderAccum = MT)
                }
                var KT = cT - kT.lastRenderStarted;
                kT.lastRenderStarted = cT;
                var OT = 1e3 / TT.xJ,
                  fT = (cT - kT.lastTickStarted) / OT;
                fT < 0 && (fT = 0);
                TT.hG(KT, fT, OT), setTimeout(yT, 0, TT, !0)
              }(TT), kT.intervalCB = () => yT(TT), requestAnimationFrame(kT.frameCB), kT.pollTime > 0 && (kT.intervalID = setInterval(kT.intervalCB, Math.max(kT.pollTime, 1e3 / TT.xJ / 2)))
            }(this),
            function(TT, kT) {
              if (!kT) return;
              var cT = !1,
                lT = !1,
                MT = TT => {
                  if (!!TT !== (cT = kT === document.pointerLockElement))
                    if (TT) {
                      var lT = kT.requestPointerLock();
                      lT && lT.catch && lT.catch((TT => {}))
                    } else document.exitPointerLock()
                },
                KT = TT => {
                  !!TT !== (lT = kT === document.fullscreenElement) && (TT ? kT.requestFullscreen ? kT.requestFullscreen() : kT.webkitRequestFullscreen && kT.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (lT => {
                cT = kT === document.pointerLockElement, TT.QG(cT)
              })), document.addEventListener("fullscreenchange", (cT => {
                lT = kT === document.fullscreenElement, TT.onFullscreenChanged(lT)
              })), document.addEventListener("pointerlockerror", (lT => {
                cT = kT === document.pointerLockElement, TT.onPointerLockError(lT)
              })), Object.defineProperty(TT, "Zh", {
                get: () => cT,
                set: MT
              }), Object.defineProperty(TT, "fullscreen", {
                get: () => lT,
                set: KT
              }), kT.addEventListener("click", (kT => {
                TT.yG && MT(!0), TT.xG && KT(!0)
              }));
              var OT = () => TT.zN();
              if (window.ResizeObserver) {
                new ResizeObserver(OT).observe(kT)
              } else window.addEventListener("resize", OT)
            }(this, TT), this.rG()
          }))
      }
    }

    function MT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = TT, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var KT = 3,
      OT = 20;

    function yT(TT) {
      for (var kT = TT._data, cT = 1e3 / TT.xJ, lT = kT.nowObject.now() + OT, MT = 0; kT.nowObject.now() >= kT.lastTickStarted + cT && kT.nowObject.now() < lT && ++MT <= KT;) TT.pN(cT), kT.lastTickStarted += cT;
      var yT = 5 * (cT + 5),
        fT = kT.nowObject.now();
      if (fT - kT.lastTickStarted > yT)
        for (; fT >= kT.lastTickStarted + cT;) kT.lastTickStarted += cT
    }
  },
  36517: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => OT
    });
    var lT = cT(71);
    const MT = lT.useLayoutEffect;
    const KT = function(TT) {
      var kT = (0, lT.useRef)(TT);
      return MT((function() {
        kT.current = TT
      })), kT
    };
    var OT = function(TT) {
      var kT = KT(TT);
      (0, lT.useEffect)((function() {
        var TT = function(TT) {
          var cT;
          if (null != kT.current && (cT = kT.current(TT)), TT.defaultPrevented && (TT.returnValue = ""), "string" === typeof cT) return TT.returnValue = cT, cT
        };
        return window.addEventListener("beforeunload", TT),
          function() {
            window.removeEventListener("beforeunload", TT)
          }
      }), [])
    }
  },
  36409: TT => {
    var kT, cT = "undefined" !== typeof window ? window.navigator.userAgent : "",
      lT = /OS X/.test(cT),
      MT = /Opera/.test(cT),
      KT = !/like Gecko/.test(cT) && !MT,
      OT = TT.exports = {
        0: lT ? "<menu>" : "<UNK>",
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
        93: lT ? "<meta>" : "<menu>",
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
        173: lT && KT ? "-" : "<volume-mute>",
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
        231: MT ? "`" : "<unicode>",
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
    for (kT = 58; kT < 65; ++kT) OT[kT] = String.fromCharCode(kT);
    for (kT = 48; kT < 58; ++kT) OT[kT] = kT - 48 + "";
    for (kT = 65; kT < 91; ++kT) OT[kT] = String.fromCharCode(kT);
    for (kT = 96; kT < 106; ++kT) OT[kT] = "<num-" + (kT - 96) + ">";
    for (kT = 112; kT < 136; ++kT) OT[kT] = "F" + (kT - 111)
  },
  38853: (TT, kT, cT) => {
    function lT(TT, kT, cT, lT, MT) {
      var KT = {};
      return Object.keys(lT).forEach((function(TT) {
        KT[TT] = lT[TT]
      })), KT.enumerable = !!KT.enumerable, KT.configurable = !!KT.configurable, ("value" in KT || KT.initializer) && (KT.writable = !0), KT = cT.slice().reverse().reduce((function(cT, lT) {
        return lT(TT, kT, cT) || cT
      }), KT), MT && void 0 !== KT.initializer && (KT.value = KT.initializer ? KT.initializer.call(MT) : void 0, KT.initializer = void 0), void 0 === KT.initializer && (Object.defineProperty(TT, kT, KT), KT = null), KT
    }
    cT.d(kT, {
      b: () => lT
    })
  },
  38844: (TT, kT, cT) => {
    function lT(TT, kT, cT, lT) {
      cT && Object.defineProperty(TT, kT, {
        enumerable: cT.enumerable,
        configurable: cT.configurable,
        writable: cT.writable,
        value: cT.initializer ? cT.initializer.call(lT) : void 0
      })
    }
    cT.d(kT, {
      e: () => lT
    })
  },
  38507: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512);
    const MT = (TT, kT, cT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : cT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(kT) : null;
    class KT {
      static DeepCopy(TT, kT, cT, KT) {
        let OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yT = function(TT) {
          const kT = [];
          do {
            const cT = Object.getOwnPropertyNames(TT);
            for (const TT of cT) - 1 === kT.indexOf(TT) && kT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return kT
        }(TT);
        for (const xT of yT) {
          if ("_" === xT[0] && (!KT || -1 === KT.indexOf(xT))) continue;
          if (xT.endsWith("Observable")) continue;
          if (cT && -1 !== cT.indexOf(xT)) continue;
          const yT = TT[xT],
            IT = typeof yT;
          if ("function" !== IT) try {
            if ("object" === IT)
              if (yT instanceof Uint8Array) kT[xT] = Uint8Array.from(yT);
              else if (yT instanceof Array) {
              if (kT[xT] = [], yT.length > 0)
                if ("object" == typeof yT[0])
                  for (let TT = 0; TT < yT.length; TT++) {
                    const cT = MT(yT[TT], kT, OT); - 1 === kT[xT].indexOf(cT) && kT[xT].push(cT)
                  } else kT[xT] = yT.slice(0)
            } else kT[xT] = MT(yT, kT, OT);
            else kT[xT] = yT
          } catch (fT) {
            lT.e.Warn(fT.message)
          }
        }
      }
    }
  },
  38546: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      i: () => KT,
      l: () => OT,
      p: () => yT
    });
    var lT = cT(37093);
    class MT {
      constructor(TT, kT, cT) {
        this.gradient = TT, this.color1 = kT, this.color2 = cT
      }
      getColorToRef(TT) {
        this.color2 ? lT.g.LerpToRef(this.color1, this.color2, Math.random(), TT) : TT.UkT(this.color1)
      }
    }
    class KT {
      constructor(TT, kT) {
        this.gradient = TT, this.color = kT
      }
    }
    class OT {
      constructor(TT, kT, cT) {
        this.gradient = TT, this.factor1 = kT, this.factor2 = cT
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class yT {
      static GetCurrentGradient(TT, kT, cT) {
        if (kT[0].gradient > TT) return void cT(kT[0], kT[0], 1);
        for (let MT = 0; MT < kT.length - 1; MT++) {
          const lT = kT[MT],
            KT = kT[MT + 1];
          if (TT >= lT.gradient && TT <= KT.gradient) {
            return void cT(lT, KT, (TT - lT.gradient) / (KT.gradient - lT.gradient))
          }
        }
        const lT = kT.length - 1;
        cT(kT[lT], kT[lT], 1)
      }
    }
  },
  38512: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      static _CheckLimit(TT, kT) {
        let cT = lT._LogLimitOutputs[TT];
        return cT ? cT.current++ : (cT = {
          limit: kT,
          current: 1
        }, lT._LogLimitOutputs[TT] = cT), cT.current <= cT.limit
      }
      static _GenerateLimitMessage(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cT = lT._LogLimitOutputs[TT];
        if (!cT || !lT.MessageLimitReached) return;
        const MT = this._Levels[kT];
        cT.current === cT.limit && lT[MT.name](lT.MessageLimitReached.replace(/%LIMIT%/g, "" + cT.limit).replace(/%TYPE%/g, MT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        lT._LogCache = TT + lT._LogCache, lT.OnNewCacheEntry && lT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const kT = TT => TT < 10 ? "0" + TT : "" + TT,
          cT = new Date;
        return "[" + kT(cT.getHours()) + ":" + kT(cT.getMinutes()) + ":" + kT(cT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, kT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const MT = Array.isArray(kT) ? kT[0] : kT;
        if (void 0 !== cT && !lT._CheckLimit(MT, cT)) return;
        const KT = lT._FormatMessage(MT),
          OT = this._Levels[TT],
          yT = Array.isArray(kT) ? kT.slice(1) : [];
        OT.logFunc && OT.logFunc("BJS - " + KT, ...yT);
        const fT = `<div style='color:${OT.color}'>${KT}</div><br>`;
        lT._AddLogEntry(fT), lT._GenerateLimitMessage(MT, TT)
      }
      static get LogCache() {
        return lT._LogCache
      }
      static ClearLogCache() {
        lT._LogCache = "", lT._LogLimitOutputs = {}, lT.errorsCount = 0
      }
      static set LogLevels(TT) {
        lT.Log = lT._LogDisabled, lT.Warn = lT._LogDisabled, lT.Error = lT._LogDisabled;
        const kT = [lT.MessageLogLevel, lT.WarningLogLevel, lT.ErrorLogLevel];
        for (const cT of kT)
          if ((TT & cT) === cT) {
            const TT = this._Levels[cT];
            lT[TT.name] = lT._LogEnabled.bind(lT, cT)
          }
      }
    }
    lT.NoneLogLevel = 0, lT.MessageLogLevel = 1, lT.WarningLogLevel = 2, lT.ErrorLogLevel = 4, lT.AllLogLevel = 7, lT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", lT._LogCache = "", lT._LogLimitOutputs = {}, lT._Levels = [{}, {
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
    }], lT.errorsCount = 0, lT.Log = lT._LogEnabled.bind(lT, lT.MessageLogLevel), lT.Warn = lT._LogEnabled.bind(lT, lT.WarningLogLevel), lT.Error = lT._LogEnabled.bind(lT, lT.ErrorLogLevel)
  },
  38548: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    var lT = cT(36892),
      MT = cT(36937),
      KT = cT(38507);
    class OT {
      constructor() {
        this.direction1 = new lT.m(0, 1, 0), this.direction2 = new lT.m(0, 1, 0), this.minEmitBox = new lT.m(-.5, -.5, -.5), this.maxEmitBox = new lT.m(.5, .5, .5)
      }
      startDirectionFunction(TT, kT, cT, KT) {
        const OT = (0, MT.RandomRange)(this.direction1.x, this.direction2.x),
          yT = (0, MT.RandomRange)(this.direction1.y, this.direction2.y),
          fT = (0, MT.RandomRange)(this.direction1.z, this.direction2.z);
        if (KT) return kT.x = OT, kT.y = yT, void(kT.z = fT);
        lT.m.TransformNormalFromFloatsToRef(OT, yT, fT, TT, kT)
      }
      startPositionFunction(TT, kT, cT, KT) {
        const OT = (0, MT.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          yT = (0, MT.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          fT = (0, MT.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (KT) return kT.x = OT, kT.y = yT, void(kT.z = fT);
        lT.m.TransformCoordinatesFromFloatsToRef(OT, yT, fT, TT, kT)
      }
      clone() {
        const TT = new OT;
        return KT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2), TT.setVector3("minEmitBox", this.minEmitBox), TT.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(TT) {
        TT.addUniform("direction1", 3), TT.addUniform("direction2", 3), TT.addUniform("minEmitBox", 3), TT.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.acT(), TT.direction2 = this.direction2.acT(), TT.minEmitBox = this.minEmitBox.acT(), TT.maxEmitBox = this.maxEmitBox.acT(), TT
      }
      parse(TT) {
        lT.m.FromArrayToRef(TT.direction1, 0, this.direction1), lT.m.FromArrayToRef(TT.direction2, 0, this.direction2), lT.m.FromArrayToRef(TT.minEmitBox, 0, this.minEmitBox), lT.m.FromArrayToRef(TT.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38505: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => yT,
      d: () => OT
    });
    var lT = cT(36892),
      MT = cT(36937),
      KT = cT(38507);
    class OT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = TT, this.height = kT, this.radiusRange = cT, this.directionRandomizer = MT, this._tempVector = lT.m.Zero()
      }
      startDirectionFunction(TT, kT, cT, KT, OT) {
        cT.position.subtractToRef(TT.getTranslation(), this._tempVector), this._tempVector.normalize(), lT.m.TransformNormalToRef(this._tempVector, OT, this._tempVector);
        const yT = (0, MT.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let fT = Math.atan2(this._tempVector.x, this._tempVector.z);
        fT += (0, MT.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = yT, this._tempVector.x = Math.sin(fT), this._tempVector.z = Math.cos(fT), this._tempVector.normalize(), KT ? kT.UkT(this._tempVector) : lT.m.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, TT, kT)
      }
      startPositionFunction(TT, kT, cT, KT) {
        const OT = (0, MT.RandomRange)(-this.height / 2, this.height / 2),
          yT = (0, MT.RandomRange)(0, 2 * Math.PI),
          fT = (0, MT.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          xT = Math.sqrt(fT) * this.radius,
          IT = xT * Math.cos(yT),
          AT = xT * Math.sin(yT);
        KT ? kT.I5(IT, OT, AT) : lT.m.TransformCoordinatesFromFloatsToRef(IT, OT, AT, TT, kT)
      }
      clone() {
        const TT = new OT(this.radius, this.directionRandomizer);
        return KT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("height", this.height), TT.setFloat("radiusRange", this.radiusRange), TT.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("height", 1), TT.addUniform("radiusRange", 1), TT.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const TT = {};
        return TT.type = this.getClassName(), TT.radius = this.radius, TT.height = this.height, TT.radiusRange = this.radiusRange, TT.directionRandomizer = this.directionRandomizer, TT
      }
      parse(TT) {
        this.radius = TT.radius, this.height = TT.height, this.radiusRange = TT.radiusRange, this.directionRandomizer = TT.directionRandomizer
      }
    }
    class yT extends OT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new lT.m(0, 1, 0),
          KT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new lT.m(0, 1, 0);
        super(TT, kT, cT), this.direction1 = MT, this.direction2 = KT
      }
      startDirectionFunction(TT, kT, cT, KT) {
        const OT = (0, MT.RandomRange)(this.direction1.x, this.direction2.x),
          yT = (0, MT.RandomRange)(this.direction1.y, this.direction2.y),
          fT = (0, MT.RandomRange)(this.direction1.z, this.direction2.z);
        KT ? kT.I5(OT, yT, fT) : lT.m.TransformNormalFromFloatsToRef(OT, yT, fT, TT, kT)
      }
      clone() {
        const TT = new yT(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return KT.d.DeepCopy(this, TT), TT
      }
      applyToShader(TT) {
        TT.setFloat("radius", this.radius), TT.setFloat("height", this.height), TT.setFloat("radiusRange", this.radiusRange), TT.setVector3("direction1", this.direction1), TT.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(TT) {
        TT.addUniform("radius", 1), TT.addUniform("height", 1), TT.addUniform("radiusRange", 1), TT.addUniform("direction1", 3), TT.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const TT = super.serialize();
        return TT.direction1 = this.direction1.acT(), TT.direction2 = this.direction2.acT(), TT
      }
      parse(TT) {
        super.parse(TT), lT.m.FromArrayToRef(TT.direction1, 0, this.direction1), lT.m.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
  },
  38616: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => AT
    });
    const lT = .5 * (Math.sqrt(3) - 1),
      MT = (3 - Math.sqrt(3)) / 6,
      KT = 1 / 3,
      OT = 1 / 6,
      yT = (Math.sqrt(5) - 1) / 4,
      fT = (5 - Math.sqrt(5)) / 20,
      xT = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      IT = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const AT = class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const kT = "function" == typeof TT ? TT : function(TT) {
          let kT = 0,
            cT = 0,
            lT = 0,
            MT = 1;
          const KT = function() {
            let TT = 4022871197;
            return function(kT) {
              kT = kT.toString();
              for (let cT = 0; cT < kT.length; cT++) {
                TT += kT.charCodeAt(cT);
                let lT = .02519603282416938 * TT;
                TT = lT >>> 0, lT -= TT, lT *= TT, TT = lT >>> 0, lT -= TT, TT += 4294967296 * lT
              }
              return 2.3283064365386963e-10 * (TT >>> 0)
            }
          }();
          kT = KT(" "), cT = KT(" "), lT = KT(" "), kT -= KT(TT), kT < 0 && (kT += 1);
          cT -= KT(TT), cT < 0 && (cT += 1);
          lT -= KT(TT), lT < 0 && (lT += 1);
          return function() {
            const TT = 2091639 * kT + 2.3283064365386963e-10 * MT;
            return kT = cT, cT = lT, lT = TT - (MT = 0 | TT)
          }
        }(TT);
        this.p = function(TT) {
          const kT = new Uint8Array(256);
          for (let cT = 0; cT < 256; cT++) kT[cT] = cT;
          for (let cT = 0; cT < 255; cT++) {
            const lT = cT + ~~(TT() * (256 - cT)),
              MT = kT[cT];
            kT[cT] = kT[lT], kT[lT] = MT
          }
          return kT
        }(kT), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let cT = 0; cT < 512; cT++) this.perm[cT] = this.p[255 & cT], this.permMod12[cT] = this.perm[cT] % 12
      }
      noise2D(TT, kT) {
        const cT = this.permMod12,
          KT = this.perm;
        let OT = 0,
          yT = 0,
          fT = 0;
        const IT = (TT + kT) * lT,
          AT = Math.floor(TT + IT),
          CT = Math.floor(kT + IT),
          jT = (AT + CT) * MT,
          vT = TT - (AT - jT),
          tT = kT - (CT - jT);
        let hT, NT;
        vT > tT ? (hT = 1, NT = 0) : (hT = 0, NT = 1);
        const QT = vT - hT + MT,
          ST = tT - NT + MT,
          DT = vT - 1 + 2 * MT,
          aT = tT - 1 + 2 * MT,
          FT = 255 & AT,
          rT = 255 & CT;
        let PT = .5 - vT * vT - tT * tT;
        if (PT >= 0) {
          const TT = 3 * cT[FT + KT[rT]];
          PT *= PT, OT = PT * PT * (xT[TT] * vT + xT[TT + 1] * tT)
        }
        let wT = .5 - QT * QT - ST * ST;
        if (wT >= 0) {
          const TT = 3 * cT[FT + hT + KT[rT + NT]];
          wT *= wT, yT = wT * wT * (xT[TT] * QT + xT[TT + 1] * ST)
        }
        let mT = .5 - DT * DT - aT * aT;
        if (mT >= 0) {
          const TT = 3 * cT[FT + 1 + KT[rT + 1]];
          mT *= mT, fT = mT * mT * (xT[TT] * DT + xT[TT + 1] * aT)
        }
        return 70 * (OT + yT + fT)
      }
      noise3D(TT, kT, cT) {
        const lT = this.permMod12,
          MT = this.perm;
        let yT, fT, IT, AT;
        const CT = (TT + kT + cT) * KT,
          jT = Math.floor(TT + CT),
          vT = Math.floor(kT + CT),
          tT = Math.floor(cT + CT),
          hT = (jT + vT + tT) * OT,
          NT = TT - (jT - hT),
          QT = kT - (vT - hT),
          ST = cT - (tT - hT);
        let DT, aT, FT, rT, PT, wT;
        NT >= QT ? QT >= ST ? (DT = 1, aT = 0, FT = 0, rT = 1, PT = 1, wT = 0) : NT >= ST ? (DT = 1, aT = 0, FT = 0, rT = 1, PT = 0, wT = 1) : (DT = 0, aT = 0, FT = 1, rT = 1, PT = 0, wT = 1) : QT < ST ? (DT = 0, aT = 0, FT = 1, rT = 0, PT = 1, wT = 1) : NT < ST ? (DT = 0, aT = 1, FT = 0, rT = 0, PT = 1, wT = 1) : (DT = 0, aT = 1, FT = 0, rT = 1, PT = 1, wT = 0);
        const mT = NT - DT + OT,
          bT = QT - aT + OT,
          zT = ST - FT + OT,
          JT = NT - rT + 2 * OT,
          oT = QT - PT + 2 * OT,
          HT = ST - wT + 2 * OT,
          eT = NT - 1 + .5,
          GT = QT - 1 + .5,
          VT = ST - 1 + .5,
          ET = 255 & jT,
          ZT = 255 & vT,
          uT = 255 & tT;
        let XT = .6 - NT * NT - QT * QT - ST * ST;
        if (XT < 0) yT = 0;
        else {
          const TT = 3 * lT[ET + MT[ZT + MT[uT]]];
          XT *= XT, yT = XT * XT * (xT[TT] * NT + xT[TT + 1] * QT + xT[TT + 2] * ST)
        }
        let dT = .6 - mT * mT - bT * bT - zT * zT;
        if (dT < 0) fT = 0;
        else {
          const TT = 3 * lT[ET + DT + MT[ZT + aT + MT[uT + FT]]];
          dT *= dT, fT = dT * dT * (xT[TT] * mT + xT[TT + 1] * bT + xT[TT + 2] * zT)
        }
        let LT = .6 - JT * JT - oT * oT - HT * HT;
        if (LT < 0) IT = 0;
        else {
          const TT = 3 * lT[ET + rT + MT[ZT + PT + MT[uT + wT]]];
          LT *= LT, IT = LT * LT * (xT[TT] * JT + xT[TT + 1] * oT + xT[TT + 2] * HT)
        }
        let RT = .6 - eT * eT - GT * GT - VT * VT;
        if (RT < 0) AT = 0;
        else {
          const TT = 3 * lT[ET + 1 + MT[ZT + 1 + MT[uT + 1]]];
          RT *= RT, AT = RT * RT * (xT[TT] * eT + xT[TT + 1] * GT + xT[TT + 2] * VT)
        }
        return 32 * (yT + fT + IT + AT)
      }
      noise4D(TT, kT, cT, lT) {
        const MT = this.perm;
        let KT, OT, xT, AT, CT;
        const jT = (TT + kT + cT + lT) * yT,
          vT = Math.floor(TT + jT),
          tT = Math.floor(kT + jT),
          hT = Math.floor(cT + jT),
          NT = Math.floor(lT + jT),
          QT = (vT + tT + hT + NT) * fT,
          ST = TT - (vT - QT),
          DT = kT - (tT - QT),
          aT = cT - (hT - QT),
          FT = lT - (NT - QT);
        let rT = 0,
          PT = 0,
          wT = 0,
          mT = 0;
        ST > DT ? rT++ : PT++, ST > aT ? rT++ : wT++, ST > FT ? rT++ : mT++, DT > aT ? PT++ : wT++, DT > FT ? PT++ : mT++, aT > FT ? wT++ : mT++;
        const bT = rT >= 3 ? 1 : 0,
          zT = PT >= 3 ? 1 : 0,
          JT = wT >= 3 ? 1 : 0,
          oT = mT >= 3 ? 1 : 0,
          HT = rT >= 2 ? 1 : 0,
          eT = PT >= 2 ? 1 : 0,
          GT = wT >= 2 ? 1 : 0,
          VT = mT >= 2 ? 1 : 0,
          ET = rT >= 1 ? 1 : 0,
          ZT = PT >= 1 ? 1 : 0,
          uT = wT >= 1 ? 1 : 0,
          XT = mT >= 1 ? 1 : 0,
          dT = ST - bT + fT,
          LT = DT - zT + fT,
          RT = aT - JT + fT,
          gT = FT - oT + fT,
          UT = ST - HT + 2 * fT,
          YT = DT - eT + 2 * fT,
          BT = aT - GT + 2 * fT,
          WT = FT - VT + 2 * fT,
          nT = ST - ET + 3 * fT,
          pT = DT - ZT + 3 * fT,
          iT = aT - uT + 3 * fT,
          qT = FT - XT + 3 * fT,
          sT = ST - 1 + 4 * fT,
          Tk = DT - 1 + 4 * fT,
          kk = aT - 1 + 4 * fT,
          ck = FT - 1 + 4 * fT,
          lk = 255 & vT,
          Mk = 255 & tT,
          Kk = 255 & hT,
          Ok = 255 & NT;
        let yk = .6 - ST * ST - DT * DT - aT * aT - FT * FT;
        if (yk < 0) KT = 0;
        else {
          const TT = MT[lk + MT[Mk + MT[Kk + MT[Ok]]]] % 32 * 4;
          yk *= yk, KT = yk * yk * (IT[TT] * ST + IT[TT + 1] * DT + IT[TT + 2] * aT + IT[TT + 3] * FT)
        }
        let fk = .6 - dT * dT - LT * LT - RT * RT - gT * gT;
        if (fk < 0) OT = 0;
        else {
          const TT = MT[lk + bT + MT[Mk + zT + MT[Kk + JT + MT[Ok + oT]]]] % 32 * 4;
          fk *= fk, OT = fk * fk * (IT[TT] * dT + IT[TT + 1] * LT + IT[TT + 2] * RT + IT[TT + 3] * gT)
        }
        let xk = .6 - UT * UT - YT * YT - BT * BT - WT * WT;
        if (xk < 0) xT = 0;
        else {
          const TT = MT[lk + HT + MT[Mk + eT + MT[Kk + GT + MT[Ok + VT]]]] % 32 * 4;
          xk *= xk, xT = xk * xk * (IT[TT] * UT + IT[TT + 1] * YT + IT[TT + 2] * BT + IT[TT + 3] * WT)
        }
        let Ik = .6 - nT * nT - pT * pT - iT * iT - qT * qT;
        if (Ik < 0) AT = 0;
        else {
          const TT = MT[lk + ET + MT[Mk + ZT + MT[Kk + uT + MT[Ok + XT]]]] % 32 * 4;
          Ik *= Ik, AT = Ik * Ik * (IT[TT] * nT + IT[TT + 1] * pT + IT[TT + 2] * iT + IT[TT + 3] * qT)
        }
        let Ak = .6 - sT * sT - Tk * Tk - kk * kk - ck * ck;
        if (Ak < 0) CT = 0;
        else {
          const TT = MT[lk + 1 + MT[Mk + 1 + MT[Kk + 1 + MT[Ok + 1]]]] % 32 * 4;
          Ak *= Ak, CT = Ak * Ak * (IT[TT] * sT + IT[TT + 1] * Tk + IT[TT + 2] * kk + IT[TT + 3] * ck)
        }
        return 27 * (KT + OT + xT + AT + CT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);