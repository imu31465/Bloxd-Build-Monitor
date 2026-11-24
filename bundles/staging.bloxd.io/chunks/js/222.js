/*! For license information please see yma3ej.222.a255cae5.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39692: (TT, UT, mT) => {
    TT.exports = zT;
    var WT = mT(375);

    function zT(TT, UT) {
      if (!(this instanceof zT)) return new zT(TT, UT);
      var mT = WT.create();
      WT.add(mT, TT, UT), this.base = WT.min(WT.create(), TT, mT), this.vec = WT.clone(UT), this.max = WT.max(WT.create(), TT, mT), this.mag = WT.length(this.vec)
    }
    var MT = zT.prototype;
    MT.width = function() {
      return this.vec[0]
    }, MT.height = function() {
      return this.vec[1]
    }, MT.depth = function() {
      return this.vec[2]
    }, MT.x0 = function() {
      return this.base[0]
    }, MT.y0 = function() {
      return this.base[1]
    }, MT.z0 = function() {
      return this.base[2]
    }, MT.x1 = function() {
      return this.max[0]
    }, MT.y1 = function() {
      return this.max[1]
    }, MT.z1 = function() {
      return this.max[2]
    }, MT.translate = function(TT) {
      return WT.add(this.max, this.max, TT), WT.add(this.base, this.base, TT), this
    }, MT.setPosition = function(TT) {
      return WT.add(this.max, TT, this.vec), WT.copy(this.base, TT), this
    }, MT.expand = function(TT) {
      var UT = WT.create(),
        mT = WT.create();
      return WT.max(UT, TT.max, this.max), WT.min(mT, TT.base, this.base), WT.subtract(UT, UT, mT), new zT(mT, UT)
    }, MT.intersects = function(TT) {
      return !(TT.base[0] > this.max[0]) && (!(TT.base[1] > this.max[1]) && (!(TT.base[2] > this.max[2]) && (!(TT.max[0] < this.base[0]) && (!(TT.max[1] < this.base[1]) && !(TT.max[2] < this.base[2])))))
    }, MT.touches = function(TT) {
      var UT = this.union(TT);
      return null !== UT && (0 == UT.width() || 0 == UT.height() || 0 == UT.depth())
    }, MT.union = function(TT) {
      if (!this.intersects(TT)) return null;
      var UT = Math.max(TT.base[0], this.base[0]),
        mT = Math.max(TT.base[1], this.base[1]),
        WT = Math.max(TT.base[2], this.base[2]);
      return new zT([UT, mT, WT], [Math.min(TT.max[0], this.max[0]) - UT, Math.min(TT.max[1], this.max[1]) - mT, Math.min(TT.max[2], this.max[2]) - WT])
    }
  },
  39688: TT => {
    TT.exports = function(TT, UT, mT, WT, zT, MT) {
      var gT = +UT[0],
        nT = +UT[1],
        HT = +UT[2],
        kT = +mT[0],
        jT = +mT[1],
        lT = +mT[2],
        LT = Math.sqrt(kT * kT + jT * jT + lT * lT);
      if (0 === LT) throw new Error("Can't raycast along a zero vector");
      return function(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
        for (var jT = 0, lT = Math.floor, LT = 0 | lT(UT), pT = 0 | lT(mT), BT = 0 | lT(WT), ZT = zT > 0 ? 1 : -1, cT = MT > 0 ? 1 : -1, vT = gT > 0 ? 1 : -1, fT = Math.abs(1 / zT), qT = Math.abs(1 / MT), iT = Math.abs(1 / gT), bT = fT < 1 / 0 ? fT * (ZT > 0 ? LT + 1 - UT : UT - LT) : 1 / 0, OT = qT < 1 / 0 ? qT * (cT > 0 ? pT + 1 - mT : mT - pT) : 1 / 0, eT = iT < 1 / 0 ? iT * (vT > 0 ? BT + 1 - WT : WT - BT) : 1 / 0, YT = -1; jT <= nT;) {
          var JT = TT(LT, pT, BT);
          if (JT) return HT && (HT[0] = UT + jT * zT, HT[1] = mT + jT * MT, HT[2] = WT + jT * gT), kT && (kT[0] = kT[1] = kT[2] = 0, 0 === YT && (kT[0] = -ZT), 1 === YT && (kT[1] = -cT), 2 === YT && (kT[2] = -vT)), JT;
          bT < OT ? bT < eT ? (LT += ZT, jT = bT, bT += fT, YT = 0) : (BT += vT, jT = eT, eT += iT, YT = 2) : OT < eT ? (pT += cT, jT = OT, OT += qT, YT = 1) : (BT += vT, jT = eT, eT += iT, YT = 2)
        }
        return HT && (HT[0] = UT + jT * zT, HT[1] = mT + jT * MT, HT[2] = WT + jT * gT), kT && (kT[0] = kT[1] = kT[2] = 0), 0
      }(TT, gT, nT, HT, kT /= LT, jT /= LT, lT /= LT, WT = "undefined" === typeof WT ? 64 : +WT, zT, MT)
    }
  },
  39256: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      e: () => MT
    });
    var WT = mT(4170);
    let zT = null;

    function MT(TT) {
      return null !== zT && TT === zT
    }

    function gT() {
      this.wG = !1, this.stopPropagation = !1, this.aG = !1, this.disabled = !1
    }
    class nT {
      constructor(TT, UT) {
        this.version = "0.7.0";
        var mT = Object.assign({}, new gT, UT || {});
        this.element = TT || document, this.wG = !!mT.wG, this.stopPropagation = !!mT.stopPropagation, this.aG = !!mT.aG, this.disabled = !!mT.disabled, this.filterEvents = (TT, UT) => !0, this.ignoreEvent = TT => !1, this.down = new WT.EventEmitter, this.up = new WT.EventEmitter, this.state = {}, this.yG = {
          dx: 0,
          dy: 0,
          jUT: 0,
          lUT: 0,
          pUT: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? kT(this) : document.addEventListener("DOMContentLoaded", (TT => {
          kT(this)
        }), {
          once: !0
        })
      }
      bind(TT) {
        for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
        mT.forEach((UT => {
          var mT = this._keyBindmap[UT] || [];
          mT.includes(TT) || (mT.push(TT), this._keyBindmap[UT] = mT)
        })), this.state[TT] = !!this.state[TT], this.pressCount[TT] = this.pressCount[TT] || 0, this.releaseCount[TT] = this.releaseCount[TT] || 0
      }
      unbind(TT) {
        for (var UT in this._keyBindmap) {
          var mT = this._keyBindmap[UT],
            WT = mT.indexOf(TT);
          WT > -1 && mT.splice(WT, 1)
        }
      }
      getBindings() {
        var TT = {};
        for (var UT in this._keyBindmap) {
          this._keyBindmap[UT].forEach((mT => {
            TT[mT] = TT[mT] || [], TT[mT].push(UT)
          }))
        }
        return TT
      }
      Cl() {
        HT(this.yG), HT(this.pressCount), HT(this.releaseCount)
      }
    }

    function HT(TT) {
      for (var UT in TT) TT[UT] = 0
    }

    function kT(TT) {
      window.addEventListener("keydown", cT.bind(null, TT, !0), !1), window.addEventListener("keyup", cT.bind(null, TT, !1), !1);
      var UT = {
        passive: !0
      };
      TT.element.addEventListener("touchstart", pT.bind(void 0, TT), {
        passive: !1
      }), TT.element.addEventListener("touchend", ZT.bind(void 0, TT), UT), TT.element.addEventListener("mousedown", vT.bind(null, TT, !0), UT), window.document.addEventListener("mouseup", vT.bind(null, TT, !1), UT), TT.element.addEventListener("touchmove", fT.bind(null, TT), UT), TT.element.addEventListener("mousemove", fT.bind(null, TT), UT), window.PointerEvent, TT.element.addEventListener("wheel", qT.bind(null, TT), UT), TT.element.addEventListener("contextmenu", iT.bind(null, TT), !1), window.addEventListener("blur", eT.bind(null, TT), !1)
    }
    var jT = 0,
      lT = 0,
      LT = null;

    function pT(TT, UT) {
      UT.preventDefault(), BT(UT)
    }

    function BT(TT) {
      let UT = !1;
      for (let mT = 0; mT < TT.touches.length; ++mT)
        if (TT.touches[mT].identifier === LT) {
          UT = !0;
          break
        } if (!UT) {
        const UT = TT.changedTouches[0];
        jT = UT.clientX, lT = UT.clientY, LT = UT.identifier
      }
    }

    function ZT(TT, UT) {
      for (var mT = UT.changedTouches, WT = 0; WT < mT.length; ++WT) mT[WT].identifier === LT && (LT = null)
    }

    function cT(TT, UT, mT) {
      if (!TT.ignoreEvent(mT)) try {
        YT(TT, mT), UT && mT.isTrusted && !mT.repeat && TT._keyStates[mT.code] && JT(TT, mT.code)
      } finally {
        xT(mT.code, UT, TT, mT)
      }
    }

    function vT(TT, UT, mT) {
      if (!TT.ignoreEvent(mT)) try {
        YT(TT, mT)
      } finally {
        ! function(TT, UT, mT) {
          if ("pointerId" in mT)
            if (UT) {
              if (null !== TT._touches.currID) return;
              TT._touches.currID = mT.pointerId
            } else {
              if (TT._touches.currID !== mT.pointerId) return;
              TT._touches.currID = null
            } var WT = "button" in mT ? mT.button + 1 : 1;
          xT("Mouse" + WT, UT, TT, mT)
        }(TT, UT, mT)
      }
    }

    function fT(TT, UT) {
      var mT = UT.movementX || UT.mozMovementX || 0,
        WT = UT.movementY || UT.mozMovementY || 0;
      if (UT.touches && 0 === (mT | WT)) {
        var zT = function(TT) {
          BT(TT);
          for (let UT = 0; UT < TT.changedTouches.length; ++UT)
            if (TT.changedTouches[UT].identifier == LT) {
              const mT = TT.changedTouches[UT],
                WT = [mT.clientX - jT, mT.clientY - lT];
              return jT = mT.clientX, lT = mT.clientY, WT
            } return console.error(`Did not find touch id ${LT}`), [0, 0]
        }(UT);
        mT = zT[0], WT = zT[1]
      }
      TT.yG.dx += mT, TT.yG.dy += WT
    }

    function qT(TT, UT) {
      YT(TT, UT);
      var mT = 1;
      switch (UT.deltaMode) {
        case 0:
          mT = 1;
          break;
        case 1:
          mT = 12;
          break;
        case 2:
          mT = TT.element.clientHeight || window.innerHeight
      }
      TT.yG.jUT += (UT.deltaX || 0) * mT, TT.yG.lUT += (UT.deltaY || 0) * mT, TT.yG.pUT += (UT.deltaZ || 0) * mT
    }

    function iT(TT, UT) {
      if (!TT.aG) return UT.preventDefault(), !1
    }
    var bT = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function OT(TT, UT) {
      return !!TT[bT[UT]] || ("AltRight" === UT || "ControlLeft" === UT) && "function" === typeof TT.getModifierState && !0 === TT.getModifierState("AltGraph")
    }

    function eT(TT, UT) {
      for (var mT in TT._modifiersHeldThroughBlur = {}, bT) TT._keyStates[mT] && (TT._modifiersHeldThroughBlur[mT] = !0);
      UT && UT.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (TT) {
          return !0
        }
      }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var UT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[UT] && !/^Mouse\d/.test(UT) && JT(TT, UT)
      }), 0))
    }

    function YT(TT, UT) {
      var mT = TT._modifiersHeldThroughBlur;
      if (mT && UT.isTrusted && document.hasFocus())
        for (var WT in mT) delete mT[WT], TT._keyStates[WT] && WT !== UT.code && (OT(UT, WT) || JT(TT, WT))
    }

    function JT(TT, UT) {
      const mT = {
          code: UT,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        WT = zT;
      zT = mT;
      try {
        xT(UT, !1, TT, mT)
      } finally {
        zT = WT
      }
    }

    function xT(TT, UT, mT, WT) {
      var zT = mT._keyBindmap[TT];
      zT && (dT(mT._keyStates[TT], UT) && (mT._keyStates[TT] = UT, zT.forEach((TT => {
        (!mT.filterEvents || mT.filterEvents(WT, TT)) && function(TT, UT, mT, WT) {
          var zT = UT ? mT.pressCount : mT.releaseCount;
          zT[TT] = (zT[TT] || 0) + 1;
          var MT = mT._bindPressCount[TT] || 0;
          (MT += UT ? 1 : -1) < 0 && (MT = 0);
          mT._bindPressCount[TT] = MT;
          var gT = mT.state[TT];
          if (dT(gT, MT)) {
            mT.state[TT] = MT > 0;
            var nT = UT ? mT.down : mT.up;
            mT.disabled || nT.emit(TT, WT)
          }
        }(TT, UT, mT, WT)
      }))), "button" in WT || (mT.wG && !WT.defaultPrevented && WT.preventDefault(), mT.stopPropagation && WT.stopPropagation()))
    }

    function dT(TT, UT) {
      return TT ? !UT : UT
    }
  },
  36617: (TT, UT) => {
    function mT(TT) {
      if (TT && "object" === typeof TT) {
        var UT = TT.which || TT.keyCode || TT.charCode;
        UT && (TT = UT)
      }
      if ("number" === typeof TT) return gT[TT];
      var mT, MT = String(TT);
      return (mT = WT[MT.toLowerCase()]) ? mT : (mT = zT[MT.toLowerCase()]) || (1 === MT.length ? MT.charCodeAt(0) : void 0)
    }
    mT.isEventKey = function(TT, UT) {
      if (TT && "object" === typeof TT) {
        var mT = TT.which || TT.keyCode || TT.charCode;
        if (null === mT || void 0 === mT) return !1;
        if ("string" === typeof UT) {
          var MT;
          if (MT = WT[UT.toLowerCase()]) return MT === mT;
          if (MT = zT[UT.toLowerCase()]) return MT === mT
        } else if ("number" === typeof UT) return UT === mT;
        return !1
      }
    };
    var WT = (UT = TT.exports = mT).code = UT.codes = {
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
      zT = UT.aliases = {
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
    for (MT = 97; MT < 123; MT++) WT[String.fromCharCode(MT)] = MT - 32;
    for (var MT = 48; MT < 58; MT++) WT[MT - 48] = MT;
    for (MT = 1; MT < 13; MT++) WT["f" + MT] = MT + 111;
    for (MT = 0; MT < 10; MT++) WT["numpad " + MT] = MT + 96;
    var gT = UT.names = UT.title = {};
    for (MT in WT) gT[WT[MT]] = MT;
    for (var nT in zT) WT[nT] = zT[nT]
  },
  39674: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.zC = !1, this.gC = !1, this.sF = 30, this.Xu = 0, this.nC = 100, this.yc = !1, this.fullscreen = !1, this.hq = function(TT) {}, this.lC = function(TT, UT, mT) {}, this.fC = function() {}, this.Qq = function() {}, this.pC = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(TT) {}, this._data = new zT(UT),
          function(TT) {
            if ("loading" === document.readyState) {
              var UT = () => {
                document.removeEventListener("readystatechange", UT), TT()
              };
              document.addEventListener("readystatechange", UT)
            } else setTimeout(TT, 0)
          }((() => {
            ! function(TT) {
              var UT = TT._data,
                mT = UT.nowObject.now();
              UT.lastTickStarted = mT, UT.lastFrameStarted = mT, UT.lastRenderStarted = mT, UT.frameCB = () => function(TT) {
                var UT = TT._data;
                requestAnimationFrame(UT.frameCB), nT(TT);
                var mT = UT.nowObject.now(),
                  WT = mT - UT.lastFrameStarted;
                if (UT.lastFrameStarted = mT, TT.Xu > 0) {
                  UT.renderAccum += WT;
                  var zT = 1e3 / TT.Xu;
                  if (UT.renderAccum < zT) return;
                  UT.renderAccum -= zT, UT.renderAccum > zT && (UT.renderAccum = zT)
                }
                var MT = mT - UT.lastRenderStarted;
                UT.lastRenderStarted = mT;
                var gT = 1e3 / TT.sF,
                  HT = (mT - UT.lastTickStarted) / gT;
                HT < 0 && (HT = 0);
                TT.lC(MT, HT, gT), setTimeout(nT, 0, TT, !0)
              }(TT), UT.intervalCB = () => nT(TT), requestAnimationFrame(UT.frameCB), UT.pollTime > 0 && (UT.intervalID = setInterval(UT.intervalCB, Math.max(UT.pollTime, 1e3 / TT.sF / 2)))
            }(this),
            function(TT, UT) {
              if (!UT) return;
              var mT = !1,
                WT = !1,
                zT = TT => {
                  if (!!TT !== (mT = UT === document.pointerLockElement))
                    if (TT) {
                      var WT = UT.requestPointerLock();
                      WT && WT.catch && WT.catch((TT => {}))
                    } else document.exitPointerLock()
                },
                MT = TT => {
                  !!TT !== (WT = UT === document.fullscreenElement) && (TT ? UT.requestFullscreen ? UT.requestFullscreen() : UT.webkitRequestFullscreen && UT.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (WT => {
                mT = UT === document.pointerLockElement, TT.pC(mT)
              })), document.addEventListener("fullscreenchange", (mT => {
                WT = UT === document.fullscreenElement, TT.onFullscreenChanged(WT)
              })), document.addEventListener("pointerlockerror", (WT => {
                mT = UT === document.pointerLockElement, TT.onPointerLockError(WT)
              })), Object.defineProperty(TT, "yc", {
                get: () => mT,
                set: zT
              }), Object.defineProperty(TT, "fullscreen", {
                get: () => WT,
                set: MT
              }), UT.addEventListener("click", (UT => {
                TT.zC && zT(!0), TT.gC && MT(!0)
              }));
              var gT = () => TT.Qq();
              if (window.ResizeObserver) {
                new ResizeObserver(gT).observe(UT)
              } else window.addEventListener("resize", gT)
            }(this, TT), this.fC()
          }))
      }
    }

    function zT() {
      let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = TT, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var MT = 3,
      gT = 20;

    function nT(TT) {
      for (var UT = TT._data, mT = 1e3 / TT.sF, WT = UT.nowObject.now() + gT, zT = 0; UT.nowObject.now() >= UT.lastTickStarted + mT && UT.nowObject.now() < WT && ++zT <= MT;) TT.hq(mT), UT.lastTickStarted += mT;
      var nT = 5 * (mT + 5),
        HT = UT.nowObject.now();
      if (HT - UT.lastTickStarted > nT)
        for (; HT >= UT.lastTickStarted + mT;) UT.lastTickStarted += mT
    }
  },
  36791: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    var WT = mT(63);
    const zT = WT.useLayoutEffect;
    const MT = function(TT) {
      var UT = (0, WT.useRef)(TT);
      return zT((function() {
        UT.current = TT
      })), UT
    };
    var gT = function(TT) {
      var UT = MT(TT);
      (0, WT.useEffect)((function() {
        var TT = function(TT) {
          var mT;
          if (null != UT.current && (mT = UT.current(TT)), TT.defaultPrevented && (TT.returnValue = ""), "string" === typeof mT) return TT.returnValue = mT, mT
        };
        return window.addEventListener("beforeunload", TT),
          function() {
            window.removeEventListener("beforeunload", TT)
          }
      }), [])
    }
  },
  36672: TT => {
    var UT, mT = "undefined" !== typeof window ? window.navigator.userAgent : "",
      WT = /OS X/.test(mT),
      zT = /Opera/.test(mT),
      MT = !/like Gecko/.test(mT) && !zT,
      gT = TT.exports = {
        0: WT ? "<menu>" : "<UNK>",
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
        93: WT ? "<meta>" : "<menu>",
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
        173: WT && MT ? "-" : "<volume-mute>",
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
        231: zT ? "`" : "<unicode>",
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
    for (UT = 58; UT < 65; ++UT) gT[UT] = String.fromCharCode(UT);
    for (UT = 48; UT < 58; ++UT) gT[UT] = UT - 48 + "";
    for (UT = 65; UT < 91; ++UT) gT[UT] = String.fromCharCode(UT);
    for (UT = 96; UT < 106; ++UT) gT[UT] = "<num-" + (UT - 96) + ">";
    for (UT = 112; UT < 136; ++UT) gT[UT] = "F" + (UT - 111)
  },
  39114: (TT, UT, mT) => {
    function WT(TT, UT, mT, WT, zT) {
      var MT = {};
      return Object.keys(WT).forEach((function(TT) {
        MT[TT] = WT[TT]
      })), MT.enumerable = !!MT.enumerable, MT.configurable = !!MT.configurable, ("value" in MT || MT.initializer) && (MT.writable = !0), MT = mT.slice().reverse().reduce((function(mT, WT) {
        return WT(TT, UT, mT) || mT
      }), MT), zT && void 0 !== MT.initializer && (MT.value = MT.initializer ? MT.initializer.call(zT) : void 0, MT.initializer = void 0), void 0 === MT.initializer && (Object.defineProperty(TT, UT, MT), MT = null), MT
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  39108: (TT, UT, mT) => {
    function WT(TT, UT, mT, WT) {
      mT && Object.defineProperty(TT, UT, {
        enumerable: mT.enumerable,
        configurable: mT.configurable,
        writable: mT.writable,
        value: mT.initializer ? mT.initializer.call(WT) : void 0
      })
    }
    mT.d(UT, {
      d: () => WT
    })
  },
  38793: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800);
    const zT = (TT, UT, mT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : mT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(UT) : null;
    class MT {
      static DeepCopy(TT, UT, mT, MT) {
        let gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nT = function(TT) {
          const UT = [];
          do {
            const mT = Object.getOwnPropertyNames(TT);
            for (const TT of mT) - 1 === UT.indexOf(TT) && UT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return UT
        }(TT);
        for (const kT of nT) {
          if ("_" === kT[0] && (!MT || -1 === MT.indexOf(kT))) continue;
          if (kT.endsWith("Observable")) continue;
          if (mT && -1 !== mT.indexOf(kT)) continue;
          const nT = TT[kT],
            jT = typeof nT;
          if ("function" !== jT) try {
            if ("object" === jT)
              if (nT instanceof Uint8Array) UT[kT] = Uint8Array.from(nT);
              else if (nT instanceof Array) {
              if (UT[kT] = [], nT.length > 0)
                if ("object" == typeof nT[0])
                  for (let TT = 0; TT < nT.length; TT++) {
                    const mT = zT(nT[TT], UT, gT); - 1 === UT[kT].indexOf(mT) && UT[kT].push(mT)
                  } else UT[kT] = nT.slice(0)
            } else UT[kT] = zT(nT, UT, gT);
            else UT[kT] = nT
          } catch (HT) {
            WT.b.Warn(HT.message)
          }
        }
      }
    }
  },
  38824: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => zT,
      d: () => MT,
      h: () => gT,
      j: () => nT
    });
    var WT = mT(37367);
    class zT {
      constructor(TT, UT, mT) {
        this.gradient = TT, this.color1 = UT, this.color2 = mT
      }
      getColorToRef(TT) {
        this.color2 ? WT.g.LerpToRef(this.color1, this.color2, Math.random(), TT) : TT.Gw(this.color1)
      }
    }
    class MT {
      constructor(TT, UT) {
        this.gradient = TT, this.color = UT
      }
    }
    class gT {
      constructor(TT, UT, mT) {
        this.gradient = TT, this.factor1 = UT, this.factor2 = mT
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class nT {
      static GetCurrentGradient(TT, UT, mT) {
        if (UT[0].gradient > TT) return void mT(UT[0], UT[0], 1);
        for (let zT = 0; zT < UT.length - 1; zT++) {
          const WT = UT[zT],
            MT = UT[zT + 1];
          if (TT >= WT.gradient && TT <= MT.gradient) {
            return void mT(WT, MT, (TT - WT.gradient) / (MT.gradient - WT.gradient))
          }
        }
        const WT = UT.length - 1;
        mT(UT[WT], UT[WT], 1)
      }
    }
  },
  38800: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static _CheckLimit(TT, UT) {
        let mT = WT._LogLimitOutputs[TT];
        return mT ? mT.current++ : (mT = {
          limit: UT,
          current: 1
        }, WT._LogLimitOutputs[TT] = mT), mT.current <= mT.limit
      }
      static _GenerateLimitMessage(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const mT = WT._LogLimitOutputs[TT];
        if (!mT || !WT.MessageLimitReached) return;
        const zT = this._Levels[UT];
        mT.current === mT.limit && WT[zT.name](WT.MessageLimitReached.replace(/%LIMIT%/g, "" + mT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        WT._LogCache = TT + WT._LogCache, WT.OnNewCacheEntry && WT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const UT = TT => TT < 10 ? "0" + TT : "" + TT,
          mT = new Date;
        return "[" + UT(mT.getHours()) + ":" + UT(mT.getMinutes()) + ":" + UT(mT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, UT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(UT) ? UT[0] : UT;
        if (void 0 !== mT && !WT._CheckLimit(zT, mT)) return;
        const MT = WT._FormatMessage(zT),
          gT = this._Levels[TT],
          nT = Array.isArray(UT) ? UT.slice(1) : [];
        gT.logFunc && gT.logFunc("BJS - " + MT, ...nT);
        const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
        WT._AddLogEntry(HT), WT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return WT._LogCache
      }
      static ClearLogCache() {
        WT._LogCache = "", WT._LogLimitOutputs = {}, WT.errorsCount = 0
      }
      static set LogLevels(TT) {
        WT.Log = WT._LogDisabled, WT.Warn = WT._LogDisabled, WT.Error = WT._LogDisabled;
        const UT = [WT.MessageLogLevel, WT.WarningLogLevel, WT.ErrorLogLevel];
        for (const mT of UT)
          if ((TT & mT) === mT) {
            const TT = this._Levels[mT];
            WT[TT.name] = WT._LogEnabled.bind(WT, mT)
          }
      }
    }
    WT.NoneLogLevel = 0, WT.MessageLogLevel = 1, WT.WarningLogLevel = 2, WT.ErrorLogLevel = 4, WT.AllLogLevel = 7, WT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", WT._LogCache = "", WT._LogLimitOutputs = {}, WT._Levels = [{}, {
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
    }], WT.errorsCount = 0, WT.Log = WT._LogEnabled.bind(WT, WT.MessageLogLevel), WT.Warn = WT._LogEnabled.bind(WT, WT.WarningLogLevel), WT.Error = WT._LogEnabled.bind(WT, WT.ErrorLogLevel)
  },
  38830: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => gT
    });
    var WT = mT(37188),
      zT = mT(37226),
      MT = mT(38793);
    class gT {
      constructor() {
        this.direction1 = new WT.p(0, 1, 0), this.direction2 = new WT.p(0, 1, 0), this.minEmitBox = new WT.p(-.5, -.5, -.5), this.maxEmitBox = new WT.p(.5, .5, .5)
      }
      startDirectionFunction(TT, UT, mT, MT) {
        const gT = (0, zT.RandomRange)(this.direction1.x, this.direction2.x),
          nT = (0, zT.RandomRange)(this.direction1.y, this.direction2.y),
          HT = (0, zT.RandomRange)(this.direction1.z, this.direction2.z);
        if (MT) return UT.x = gT, UT.y = nT, void(UT.z = HT);
        WT.p.TransformNormalFromFloatsToRef(gT, nT, HT, TT, UT)
      }
      startPositionFunction(TT, UT, mT, MT) {
        const gT = (0, zT.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          nT = (0, zT.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          HT = (0, zT.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (MT) return UT.x = gT, UT.y = nT, void(UT.z = HT);
        WT.p.TransformCoordinatesFromFloatsToRef(gT, nT, HT, TT, UT)
      }
      clone() {
        const TT = new gT;
        return MT.c.DeepCopy(this, TT), TT
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
        return TT.type = this.getClassName(), TT.direction1 = this.direction1.cWT(), TT.direction2 = this.direction2.cWT(), TT.minEmitBox = this.minEmitBox.cWT(), TT.maxEmitBox = this.maxEmitBox.cWT(), TT
      }
      parse(TT) {
        WT.p.FromArrayToRef(TT.direction1, 0, this.direction1), WT.p.FromArrayToRef(TT.direction2, 0, this.direction2), WT.p.FromArrayToRef(TT.minEmitBox, 0, this.minEmitBox), WT.p.FromArrayToRef(TT.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38791: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => nT,
      f: () => gT
    });
    var WT = mT(37188),
      zT = mT(37226),
      MT = mT(38793);
    class gT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = TT, this.height = UT, this.radiusRange = mT, this.directionRandomizer = zT, this._tempVector = WT.p.Zero()
      }
      startDirectionFunction(TT, UT, mT, MT, gT) {
        mT.position.subtractToRef(TT.getTranslation(), this._tempVector), this._tempVector.normalize(), WT.p.TransformNormalToRef(this._tempVector, gT, this._tempVector);
        const nT = (0, zT.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let HT = Math.atan2(this._tempVector.x, this._tempVector.z);
        HT += (0, zT.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = nT, this._tempVector.x = Math.sin(HT), this._tempVector.z = Math.cos(HT), this._tempVector.normalize(), MT ? UT.Gw(this._tempVector) : WT.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, TT, UT)
      }
      startPositionFunction(TT, UT, mT, MT) {
        const gT = (0, zT.RandomRange)(-this.height / 2, this.height / 2),
          nT = (0, zT.RandomRange)(0, 2 * Math.PI),
          HT = (0, zT.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          kT = Math.sqrt(HT) * this.radius,
          jT = kT * Math.cos(nT),
          lT = kT * Math.sin(nT);
        MT ? UT.J9(jT, gT, lT) : WT.p.TransformCoordinatesFromFloatsToRef(jT, gT, lT, TT, UT)
      }
      clone() {
        const TT = new gT(this.radius, this.directionRandomizer);
        return MT.c.DeepCopy(this, TT), TT
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
    class nT extends gT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new WT.p(0, 1, 0),
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new WT.p(0, 1, 0);
        super(TT, UT, mT), this.direction1 = zT, this.direction2 = MT
      }
      startDirectionFunction(TT, UT, mT, MT) {
        const gT = (0, zT.RandomRange)(this.direction1.x, this.direction2.x),
          nT = (0, zT.RandomRange)(this.direction1.y, this.direction2.y),
          HT = (0, zT.RandomRange)(this.direction1.z, this.direction2.z);
        MT ? UT.J9(gT, nT, HT) : WT.p.TransformNormalFromFloatsToRef(gT, nT, HT, TT, UT)
      }
      clone() {
        const TT = new nT(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return MT.c.DeepCopy(this, TT), TT
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
        return TT.direction1 = this.direction1.cWT(), TT.direction2 = this.direction2.cWT(), TT
      }
      parse(TT) {
        super.parse(TT), WT.p.FromArrayToRef(TT.direction1, 0, this.direction1), WT.p.FromArrayToRef(TT.direction2, 0, this.direction2)
      }
    }
  },
  38907: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => lT
    });
    const WT = .5 * (Math.sqrt(3) - 1),
      zT = (3 - Math.sqrt(3)) / 6,
      MT = 1 / 3,
      gT = 1 / 6,
      nT = (Math.sqrt(5) - 1) / 4,
      HT = (5 - Math.sqrt(5)) / 20,
      kT = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      jT = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const lT = class {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const UT = "function" == typeof TT ? TT : function(TT) {
          let UT = 0,
            mT = 0,
            WT = 0,
            zT = 1;
          const MT = function() {
            let TT = 4022871197;
            return function(UT) {
              UT = UT.toString();
              for (let mT = 0; mT < UT.length; mT++) {
                TT += UT.charCodeAt(mT);
                let WT = .02519603282416938 * TT;
                TT = WT >>> 0, WT -= TT, WT *= TT, TT = WT >>> 0, WT -= TT, TT += 4294967296 * WT
              }
              return 2.3283064365386963e-10 * (TT >>> 0)
            }
          }();
          UT = MT(" "), mT = MT(" "), WT = MT(" "), UT -= MT(TT), UT < 0 && (UT += 1);
          mT -= MT(TT), mT < 0 && (mT += 1);
          WT -= MT(TT), WT < 0 && (WT += 1);
          return function() {
            const TT = 2091639 * UT + 2.3283064365386963e-10 * zT;
            return UT = mT, mT = WT, WT = TT - (zT = 0 | TT)
          }
        }(TT);
        this.p = function(TT) {
          const UT = new Uint8Array(256);
          for (let mT = 0; mT < 256; mT++) UT[mT] = mT;
          for (let mT = 0; mT < 255; mT++) {
            const WT = mT + ~~(TT() * (256 - mT)),
              zT = UT[mT];
            UT[mT] = UT[WT], UT[WT] = zT
          }
          return UT
        }(UT), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let mT = 0; mT < 512; mT++) this.perm[mT] = this.p[255 & mT], this.permMod12[mT] = this.perm[mT] % 12
      }
      noise2D(TT, UT) {
        const mT = this.permMod12,
          MT = this.perm;
        let gT = 0,
          nT = 0,
          HT = 0;
        const jT = (TT + UT) * WT,
          lT = Math.floor(TT + jT),
          LT = Math.floor(UT + jT),
          pT = (lT + LT) * zT,
          BT = TT - (lT - pT),
          ZT = UT - (LT - pT);
        let cT, vT;
        BT > ZT ? (cT = 1, vT = 0) : (cT = 0, vT = 1);
        const fT = BT - cT + zT,
          qT = ZT - vT + zT,
          iT = BT - 1 + 2 * zT,
          bT = ZT - 1 + 2 * zT,
          OT = 255 & lT,
          eT = 255 & LT;
        let YT = .5 - BT * BT - ZT * ZT;
        if (YT >= 0) {
          const TT = 3 * mT[OT + MT[eT]];
          YT *= YT, gT = YT * YT * (kT[TT] * BT + kT[TT + 1] * ZT)
        }
        let JT = .5 - fT * fT - qT * qT;
        if (JT >= 0) {
          const TT = 3 * mT[OT + cT + MT[eT + vT]];
          JT *= JT, nT = JT * JT * (kT[TT] * fT + kT[TT + 1] * qT)
        }
        let xT = .5 - iT * iT - bT * bT;
        if (xT >= 0) {
          const TT = 3 * mT[OT + 1 + MT[eT + 1]];
          xT *= xT, HT = xT * xT * (kT[TT] * iT + kT[TT + 1] * bT)
        }
        return 70 * (gT + nT + HT)
      }
      noise3D(TT, UT, mT) {
        const WT = this.permMod12,
          zT = this.perm;
        let nT, HT, jT, lT;
        const LT = (TT + UT + mT) * MT,
          pT = Math.floor(TT + LT),
          BT = Math.floor(UT + LT),
          ZT = Math.floor(mT + LT),
          cT = (pT + BT + ZT) * gT,
          vT = TT - (pT - cT),
          fT = UT - (BT - cT),
          qT = mT - (ZT - cT);
        let iT, bT, OT, eT, YT, JT;
        vT >= fT ? fT >= qT ? (iT = 1, bT = 0, OT = 0, eT = 1, YT = 1, JT = 0) : vT >= qT ? (iT = 1, bT = 0, OT = 0, eT = 1, YT = 0, JT = 1) : (iT = 0, bT = 0, OT = 1, eT = 1, YT = 0, JT = 1) : fT < qT ? (iT = 0, bT = 0, OT = 1, eT = 0, YT = 1, JT = 1) : vT < qT ? (iT = 0, bT = 1, OT = 0, eT = 0, YT = 1, JT = 1) : (iT = 0, bT = 1, OT = 0, eT = 1, YT = 1, JT = 0);
        const xT = vT - iT + gT,
          dT = fT - bT + gT,
          wT = qT - OT + gT,
          tT = vT - eT + 2 * gT,
          aT = fT - YT + 2 * gT,
          yT = qT - JT + 2 * gT,
          XT = vT - 1 + .5,
          IT = fT - 1 + .5,
          QT = qT - 1 + .5,
          sT = 255 & pT,
          FT = 255 & BT,
          PT = 255 & ZT;
        let VT = .6 - vT * vT - fT * fT - qT * qT;
        if (VT < 0) nT = 0;
        else {
          const TT = 3 * WT[sT + zT[FT + zT[PT]]];
          VT *= VT, nT = VT * VT * (kT[TT] * vT + kT[TT + 1] * fT + kT[TT + 2] * qT)
        }
        let uT = .6 - xT * xT - dT * dT - wT * wT;
        if (uT < 0) HT = 0;
        else {
          const TT = 3 * WT[sT + iT + zT[FT + bT + zT[PT + OT]]];
          uT *= uT, HT = uT * uT * (kT[TT] * xT + kT[TT + 1] * dT + kT[TT + 2] * wT)
        }
        let CT = .6 - tT * tT - aT * aT - yT * yT;
        if (CT < 0) jT = 0;
        else {
          const TT = 3 * WT[sT + eT + zT[FT + YT + zT[PT + JT]]];
          CT *= CT, jT = CT * CT * (kT[TT] * tT + kT[TT + 1] * aT + kT[TT + 2] * yT)
        }
        let rT = .6 - XT * XT - IT * IT - QT * QT;
        if (rT < 0) lT = 0;
        else {
          const TT = 3 * WT[sT + 1 + zT[FT + 1 + zT[PT + 1]]];
          rT *= rT, lT = rT * rT * (kT[TT] * XT + kT[TT + 1] * IT + kT[TT + 2] * QT)
        }
        return 32 * (nT + HT + jT + lT)
      }
      noise4D(TT, UT, mT, WT) {
        const zT = this.perm;
        let MT, gT, kT, lT, LT;
        const pT = (TT + UT + mT + WT) * nT,
          BT = Math.floor(TT + pT),
          ZT = Math.floor(UT + pT),
          cT = Math.floor(mT + pT),
          vT = Math.floor(WT + pT),
          fT = (BT + ZT + cT + vT) * HT,
          qT = TT - (BT - fT),
          iT = UT - (ZT - fT),
          bT = mT - (cT - fT),
          OT = WT - (vT - fT);
        let eT = 0,
          YT = 0,
          JT = 0,
          xT = 0;
        qT > iT ? eT++ : YT++, qT > bT ? eT++ : JT++, qT > OT ? eT++ : xT++, iT > bT ? YT++ : JT++, iT > OT ? YT++ : xT++, bT > OT ? JT++ : xT++;
        const dT = eT >= 3 ? 1 : 0,
          wT = YT >= 3 ? 1 : 0,
          tT = JT >= 3 ? 1 : 0,
          aT = xT >= 3 ? 1 : 0,
          yT = eT >= 2 ? 1 : 0,
          XT = YT >= 2 ? 1 : 0,
          IT = JT >= 2 ? 1 : 0,
          QT = xT >= 2 ? 1 : 0,
          sT = eT >= 1 ? 1 : 0,
          FT = YT >= 1 ? 1 : 0,
          PT = JT >= 1 ? 1 : 0,
          VT = xT >= 1 ? 1 : 0,
          uT = qT - dT + HT,
          CT = iT - wT + HT,
          rT = bT - tT + HT,
          KT = OT - aT + HT,
          ST = qT - yT + 2 * HT,
          GT = iT - XT + 2 * HT,
          NT = bT - IT + 2 * HT,
          ET = OT - QT + 2 * HT,
          hT = qT - sT + 3 * HT,
          DT = iT - FT + 3 * HT,
          oT = bT - PT + 3 * HT,
          AT = OT - VT + 3 * HT,
          RT = qT - 1 + 4 * HT,
          TU = iT - 1 + 4 * HT,
          UU = bT - 1 + 4 * HT,
          mU = OT - 1 + 4 * HT,
          WU = 255 & BT,
          zU = 255 & ZT,
          MU = 255 & cT,
          gU = 255 & vT;
        let nU = .6 - qT * qT - iT * iT - bT * bT - OT * OT;
        if (nU < 0) MT = 0;
        else {
          const TT = zT[WU + zT[zU + zT[MU + zT[gU]]]] % 32 * 4;
          nU *= nU, MT = nU * nU * (jT[TT] * qT + jT[TT + 1] * iT + jT[TT + 2] * bT + jT[TT + 3] * OT)
        }
        let HU = .6 - uT * uT - CT * CT - rT * rT - KT * KT;
        if (HU < 0) gT = 0;
        else {
          const TT = zT[WU + dT + zT[zU + wT + zT[MU + tT + zT[gU + aT]]]] % 32 * 4;
          HU *= HU, gT = HU * HU * (jT[TT] * uT + jT[TT + 1] * CT + jT[TT + 2] * rT + jT[TT + 3] * KT)
        }
        let kU = .6 - ST * ST - GT * GT - NT * NT - ET * ET;
        if (kU < 0) kT = 0;
        else {
          const TT = zT[WU + yT + zT[zU + XT + zT[MU + IT + zT[gU + QT]]]] % 32 * 4;
          kU *= kU, kT = kU * kU * (jT[TT] * ST + jT[TT + 1] * GT + jT[TT + 2] * NT + jT[TT + 3] * ET)
        }
        let jU = .6 - hT * hT - DT * DT - oT * oT - AT * AT;
        if (jU < 0) lT = 0;
        else {
          const TT = zT[WU + sT + zT[zU + FT + zT[MU + PT + zT[gU + VT]]]] % 32 * 4;
          jU *= jU, lT = jU * jU * (jT[TT] * hT + jT[TT + 1] * DT + jT[TT + 2] * oT + jT[TT + 3] * AT)
        }
        let lU = .6 - RT * RT - TU * TU - UU * UU - mU * mU;
        if (lU < 0) LT = 0;
        else {
          const TT = zT[WU + 1 + zT[zU + 1 + zT[MU + 1 + zT[gU + 1]]]] % 32 * 4;
          lU *= lU, LT = lU * lU * (jT[TT] * RT + jT[TT + 1] * TU + jT[TT + 2] * UU + jT[TT + 3] * mU)
        }
        return 27 * (MT + gT + kT + lT + LT)
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);