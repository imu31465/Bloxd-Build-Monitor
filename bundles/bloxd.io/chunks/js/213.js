/*! For license information please see eulrrq.213.263e2b54.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  39097: (UU, RU, gU) => {
    UU.exports = pU;
    var tU = gU(316);

    function pU(UU, RU) {
      if (!(this instanceof pU)) return new pU(UU, RU);
      var gU = tU.create();
      tU.add(gU, UU, RU), this.base = tU.min(tU.create(), UU, gU), this.vec = tU.clone(RU), this.max = tU.max(tU.create(), UU, gU), this.mag = tU.length(this.vec)
    }
    var EU = pU.prototype;
    EU.width = function() {
      return this.vec[0]
    }, EU.height = function() {
      return this.vec[1]
    }, EU.depth = function() {
      return this.vec[2]
    }, EU.x0 = function() {
      return this.base[0]
    }, EU.y0 = function() {
      return this.base[1]
    }, EU.z0 = function() {
      return this.base[2]
    }, EU.x1 = function() {
      return this.max[0]
    }, EU.y1 = function() {
      return this.max[1]
    }, EU.z1 = function() {
      return this.max[2]
    }, EU.translate = function(UU) {
      return tU.add(this.max, this.max, UU), tU.add(this.base, this.base, UU), this
    }, EU.setPosition = function(UU) {
      return tU.add(this.max, UU, this.vec), tU.copy(this.base, UU), this
    }, EU.expand = function(UU) {
      var RU = tU.create(),
        gU = tU.create();
      return tU.max(RU, UU.max, this.max), tU.min(gU, UU.base, this.base), tU.subtract(RU, RU, gU), new pU(gU, RU)
    }, EU.intersects = function(UU) {
      return !(UU.base[0] > this.max[0]) && (!(UU.base[1] > this.max[1]) && (!(UU.base[2] > this.max[2]) && (!(UU.max[0] < this.base[0]) && (!(UU.max[1] < this.base[1]) && !(UU.max[2] < this.base[2])))))
    }, EU.touches = function(UU) {
      var RU = this.union(UU);
      return null !== RU && (0 == RU.width() || 0 == RU.height() || 0 == RU.depth())
    }, EU.union = function(UU) {
      if (!this.intersects(UU)) return null;
      var RU = Math.max(UU.base[0], this.base[0]),
        gU = Math.max(UU.base[1], this.base[1]),
        tU = Math.max(UU.base[2], this.base[2]);
      return new pU([RU, gU, tU], [Math.min(UU.max[0], this.max[0]) - RU, Math.min(UU.max[1], this.max[1]) - gU, Math.min(UU.max[2], this.max[2]) - tU])
    }
  },
  39088: UU => {
    UU.exports = function(UU, RU, gU, tU, pU, EU) {
      var PU = +RU[0],
        TU = +RU[1],
        qU = +RU[2],
        KU = +gU[0],
        cU = +gU[1],
        GU = +gU[2],
        jU = Math.sqrt(KU * KU + cU * cU + GU * GU);
      if (0 === jU) throw new Error("Can't raycast along a zero vector");
      return function(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        for (var cU = 0, GU = Math.floor, jU = 0 | GU(RU), uU = 0 | GU(gU), CU = 0 | GU(tU), hU = pU > 0 ? 1 : -1, QU = EU > 0 ? 1 : -1, eU = PU > 0 ? 1 : -1, WU = Math.abs(1 / pU), fU = Math.abs(1 / EU), xU = Math.abs(1 / PU), mU = WU < 1 / 0 ? WU * (hU > 0 ? jU + 1 - RU : RU - jU) : 1 / 0, IU = fU < 1 / 0 ? fU * (QU > 0 ? uU + 1 - gU : gU - uU) : 1 / 0, JU = xU < 1 / 0 ? xU * (eU > 0 ? CU + 1 - tU : tU - CU) : 1 / 0, wU = -1; cU <= TU;) {
          var nU = UU(jU, uU, CU);
          if (nU) return qU && (qU[0] = RU + cU * pU, qU[1] = gU + cU * EU, qU[2] = tU + cU * PU), KU && (KU[0] = KU[1] = KU[2] = 0, 0 === wU && (KU[0] = -hU), 1 === wU && (KU[1] = -QU), 2 === wU && (KU[2] = -eU)), nU;
          mU < IU ? mU < JU ? (jU += hU, cU = mU, mU += WU, wU = 0) : (CU += eU, cU = JU, JU += xU, wU = 2) : IU < JU ? (uU += QU, cU = IU, IU += fU, wU = 1) : (CU += eU, cU = JU, JU += xU, wU = 2)
        }
        return qU && (qU[0] = RU + cU * pU, qU[1] = gU + cU * EU, qU[2] = tU + cU * PU), KU && (KU[0] = KU[1] = KU[2] = 0), 0
      }(UU, PU, TU, qU, KU /= jU, cU /= jU, GU /= jU, tU = "undefined" === typeof tU ? 64 : +tU, pU, EU)
    }
  },
  38660: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      d: () => EU
    });
    var tU = gU(3785);
    let pU = null;

    function EU(UU) {
      return null !== pU && UU === pU
    }

    function PU() {
      this.Ws = !1, this.stopPropagation = !1, this.Xs = !1, this.disabled = !1
    }
    class TU {
      constructor(UU, RU) {
        this.version = "0.7.0";
        var gU = Object.assign({}, new PU, RU || {});
        this.element = UU || document, this.Ws = !!gU.Ws, this.stopPropagation = !!gU.stopPropagation, this.Xs = !!gU.Xs, this.disabled = !!gU.disabled, this.filterEvents = (UU, RU) => !0, this.down = new tU.EventEmitter, this.up = new tU.EventEmitter, this.state = {}, this.Fs = {
          dx: 0,
          dy: 0,
          YUU: 0,
          BUU: 0,
          VUU: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? KU(this) : document.addEventListener("DOMContentLoaded", (UU => {
          KU(this)
        }), {
          once: !0
        })
      }
      bind(UU) {
        for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
        gU.forEach((RU => {
          var gU = this._keyBindmap[RU] || [];
          gU.includes(UU) || (gU.push(UU), this._keyBindmap[RU] = gU)
        })), this.state[UU] = !!this.state[UU], this.pressCount[UU] = this.pressCount[UU] || 0, this.releaseCount[UU] = this.releaseCount[UU] || 0
      }
      unbind(UU) {
        for (var RU in this._keyBindmap) {
          var gU = this._keyBindmap[RU],
            tU = gU.indexOf(UU);
          tU > -1 && gU.splice(tU, 1)
        }
      }
      getBindings() {
        var UU = {};
        for (var RU in this._keyBindmap) {
          this._keyBindmap[RU].forEach((gU => {
            UU[gU] = UU[gU] || [], UU[gU].push(RU)
          }))
        }
        return UU
      }
      HG() {
        qU(this.Fs), qU(this.pressCount), qU(this.releaseCount)
      }
    }

    function qU(UU) {
      for (var RU in UU) UU[RU] = 0
    }

    function KU(UU) {
      window.addEventListener("keydown", QU.bind(null, UU, !0), !1), window.addEventListener("keyup", QU.bind(null, UU, !1), !1);
      var RU = {
        passive: !0
      };
      UU.element.addEventListener("touchstart", uU.bind(void 0, UU), {
        passive: !1
      }), UU.element.addEventListener("touchend", hU.bind(void 0, UU), RU), UU.element.addEventListener("mousedown", eU.bind(null, UU, !0), RU), window.document.addEventListener("mouseup", eU.bind(null, UU, !1), RU), UU.element.addEventListener("touchmove", WU.bind(null, UU), RU), UU.element.addEventListener("mousemove", WU.bind(null, UU), RU), window.PointerEvent, UU.element.addEventListener("wheel", fU.bind(null, UU), RU), UU.element.addEventListener("contextmenu", xU.bind(null, UU), !1), window.addEventListener("blur", JU.bind(null, UU), !1)
    }
    var cU = 0,
      GU = 0,
      jU = null;

    function uU(UU, RU) {
      RU.preventDefault(), CU(RU)
    }

    function CU(UU) {
      let RU = !1;
      for (let gU = 0; gU < UU.touches.length; ++gU)
        if (UU.touches[gU].identifier === jU) {
          RU = !0;
          break
        } if (!RU) {
        const RU = UU.changedTouches[0];
        cU = RU.clientX, GU = RU.clientY, jU = RU.identifier
      }
    }

    function hU(UU, RU) {
      for (var gU = RU.changedTouches, tU = 0; tU < gU.length; ++tU) gU[tU].identifier === jU && (jU = null)
    }

    function QU(UU, RU, gU) {
      try {
        wU(UU, gU), RU && gU.isTrusted && !gU.repeat && UU._keyStates[gU.code] && nU(UU, gU.code)
      } finally {
        bU(gU.code, RU, UU, gU)
      }
    }

    function eU(UU, RU, gU) {
      try {
        wU(UU, gU)
      } finally {
        ! function(UU, RU, gU) {
          if ("pointerId" in gU)
            if (RU) {
              if (null !== UU._touches.currID) return;
              UU._touches.currID = gU.pointerId
            } else {
              if (UU._touches.currID !== gU.pointerId) return;
              UU._touches.currID = null
            } var tU = "button" in gU ? gU.button + 1 : 1;
          bU("Mouse" + tU, RU, UU, gU)
        }(UU, RU, gU)
      }
    }

    function WU(UU, RU) {
      var gU = RU.movementX || RU.mozMovementX || 0,
        tU = RU.movementY || RU.mozMovementY || 0;
      if (RU.touches && 0 === (gU | tU)) {
        var pU = function(UU) {
          CU(UU);
          for (let RU = 0; RU < UU.changedTouches.length; ++RU)
            if (UU.changedTouches[RU].identifier == jU) {
              const gU = UU.changedTouches[RU],
                tU = [gU.clientX - cU, gU.clientY - GU];
              return cU = gU.clientX, GU = gU.clientY, tU
            } return console.error(`Did not find touch id ${jU}`), [0, 0]
        }(RU);
        gU = pU[0], tU = pU[1]
      }
      UU.Fs.dx += gU, UU.Fs.dy += tU
    }

    function fU(UU, RU) {
      wU(UU, RU);
      var gU = 1;
      switch (RU.deltaMode) {
        case 0:
          gU = 1;
          break;
        case 1:
          gU = 12;
          break;
        case 2:
          gU = UU.element.clientHeight || window.innerHeight
      }
      UU.Fs.YUU += (RU.deltaX || 0) * gU, UU.Fs.BUU += (RU.deltaY || 0) * gU, UU.Fs.VUU += (RU.deltaZ || 0) * gU
    }

    function xU(UU, RU) {
      if (!UU.Xs) return RU.preventDefault(), !1
    }
    var mU = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function IU(UU, RU) {
      return !!UU[mU[RU]] || ("AltRight" === RU || "ControlLeft" === RU) && "function" === typeof UU.getModifierState && !0 === UU.getModifierState("AltGraph")
    }

    function JU(UU, RU) {
      for (var gU in UU._modifiersHeldThroughBlur = {}, mU) UU._keyStates[gU] && (UU._modifiersHeldThroughBlur[gU] = !0);
      RU && RU.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (UU) {
          return !0
        }
      }() && (clearTimeout(UU._blurRelease), UU._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var RU in UU._modifiersHeldThroughBlur = {}, UU._keyStates) UU._keyStates[RU] && !/^Mouse\d/.test(RU) && nU(UU, RU)
      }), 0))
    }

    function wU(UU, RU) {
      var gU = UU._modifiersHeldThroughBlur;
      if (gU && RU.isTrusted && document.hasFocus())
        for (var tU in gU) delete gU[tU], UU._keyStates[tU] && tU !== RU.code && (IU(RU, tU) || nU(UU, tU))
    }

    function nU(UU, RU) {
      const gU = {
          code: RU,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        tU = pU;
      pU = gU;
      try {
        bU(RU, !1, UU, gU)
      } finally {
        pU = tU
      }
    }

    function bU(UU, RU, gU, tU) {
      var pU = gU._keyBindmap[UU];
      pU && (oU(gU._keyStates[UU], RU) && (gU._keyStates[UU] = RU, pU.forEach((UU => {
        (!gU.filterEvents || gU.filterEvents(tU, UU)) && function(UU, RU, gU, tU) {
          var pU = RU ? gU.pressCount : gU.releaseCount;
          pU[UU] = (pU[UU] || 0) + 1;
          var EU = gU._bindPressCount[UU] || 0;
          (EU += RU ? 1 : -1) < 0 && (EU = 0);
          gU._bindPressCount[UU] = EU;
          var PU = gU.state[UU];
          if (oU(PU, EU)) {
            gU.state[UU] = EU > 0;
            var TU = RU ? gU.down : gU.up;
            gU.disabled || TU.emit(UU, tU)
          }
        }(UU, RU, gU, tU)
      }))), "button" in tU || (gU.Ws && !tU.defaultPrevented && tU.preventDefault(), gU.stopPropagation && tU.stopPropagation()))
    }

    function oU(UU, RU) {
      return UU ? !RU : RU
    }
  },
  36127: (UU, RU) => {
    function gU(UU) {
      if (UU && "object" === typeof UU) {
        var RU = UU.which || UU.keyCode || UU.charCode;
        RU && (UU = RU)
      }
      if ("number" === typeof UU) return PU[UU];
      var gU, EU = String(UU);
      return (gU = tU[EU.toLowerCase()]) ? gU : (gU = pU[EU.toLowerCase()]) || (1 === EU.length ? EU.charCodeAt(0) : void 0)
    }
    gU.isEventKey = function(UU, RU) {
      if (UU && "object" === typeof UU) {
        var gU = UU.which || UU.keyCode || UU.charCode;
        if (null === gU || void 0 === gU) return !1;
        if ("string" === typeof RU) {
          var EU;
          if (EU = tU[RU.toLowerCase()]) return EU === gU;
          if (EU = pU[RU.toLowerCase()]) return EU === gU
        } else if ("number" === typeof RU) return RU === gU;
        return !1
      }
    };
    var tU = (RU = UU.exports = gU).code = RU.codes = {
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
      pU = RU.aliases = {
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
    for (EU = 97; EU < 123; EU++) tU[String.fromCharCode(EU)] = EU - 32;
    for (var EU = 48; EU < 58; EU++) tU[EU - 48] = EU;
    for (EU = 1; EU < 13; EU++) tU["f" + EU] = EU + 111;
    for (EU = 0; EU < 10; EU++) tU["numpad " + EU] = EU + 96;
    var PU = RU.names = RU.title = {};
    for (EU in tU) PU[tU[EU]] = EU;
    for (var TU in pU) tU[TU] = pU[TU]
  },
  39078: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.tV = !1, this.qV = !1, this.bZ = 30, this.yB = 0, this.KV = 100, this.fQ = !1, this.fullscreen = !1, this.Bx = function(UU) {}, this.cV = function(UU, RU, gU) {}, this.fV = function() {}, this.Xx = function() {}, this.GV = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(UU) {}, this._data = new pU(RU),
          function(UU) {
            if ("loading" === document.readyState) {
              var RU = () => {
                document.removeEventListener("readystatechange", RU), UU()
              };
              document.addEventListener("readystatechange", RU)
            } else setTimeout(UU, 0)
          }((() => {
            ! function(UU) {
              var RU = UU._data,
                gU = RU.nowObject.now();
              RU.lastTickStarted = gU, RU.lastFrameStarted = gU, RU.lastRenderStarted = gU, RU.frameCB = () => function(UU) {
                var RU = UU._data;
                requestAnimationFrame(RU.frameCB), TU(UU);
                var gU = RU.nowObject.now(),
                  tU = gU - RU.lastFrameStarted;
                if (RU.lastFrameStarted = gU, UU.yB > 0) {
                  RU.renderAccum += tU;
                  var pU = 1e3 / UU.yB;
                  if (RU.renderAccum < pU) return;
                  RU.renderAccum -= pU, RU.renderAccum > pU && (RU.renderAccum = pU)
                }
                var EU = gU - RU.lastRenderStarted;
                RU.lastRenderStarted = gU;
                var PU = 1e3 / UU.bZ,
                  qU = (gU - RU.lastTickStarted) / PU;
                qU < 0 && (qU = 0);
                UU.cV(EU, qU, PU), setTimeout(TU, 0, UU, !0)
              }(UU), RU.intervalCB = () => TU(UU), requestAnimationFrame(RU.frameCB), RU.pollTime > 0 && (RU.intervalID = setInterval(RU.intervalCB, Math.max(RU.pollTime, 1e3 / UU.bZ / 2)))
            }(this),
            function(UU, RU) {
              if (!RU) return;
              var gU = !1,
                tU = !1,
                pU = UU => {
                  if (!!UU !== (gU = RU === document.pointerLockElement))
                    if (UU) {
                      var tU = RU.requestPointerLock();
                      tU && tU.catch && tU.catch((UU => {}))
                    } else document.exitPointerLock()
                },
                EU = UU => {
                  !!UU !== (tU = RU === document.fullscreenElement) && (UU ? RU.requestFullscreen ? RU.requestFullscreen() : RU.webkitRequestFullscreen && RU.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (tU => {
                gU = RU === document.pointerLockElement, UU.GV(gU)
              })), document.addEventListener("fullscreenchange", (gU => {
                tU = RU === document.fullscreenElement, UU.onFullscreenChanged(tU)
              })), document.addEventListener("pointerlockerror", (tU => {
                gU = RU === document.pointerLockElement, UU.onPointerLockError(tU)
              })), Object.defineProperty(UU, "fQ", {
                get: () => gU,
                set: pU
              }), Object.defineProperty(UU, "fullscreen", {
                get: () => tU,
                set: EU
              }), RU.addEventListener("click", (RU => {
                UU.tV && pU(!0), UU.qV && EU(!0)
              }));
              var PU = () => UU.Xx();
              if (window.ResizeObserver) {
                new ResizeObserver(PU).observe(RU)
              } else window.addEventListener("resize", PU)
            }(this, UU), this.fV()
          }))
      }
    }

    function pU() {
      let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = UU, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var EU = 3,
      PU = 20;

    function TU(UU) {
      for (var RU = UU._data, gU = 1e3 / UU.bZ, tU = RU.nowObject.now() + PU, pU = 0; RU.nowObject.now() >= RU.lastTickStarted + gU && RU.nowObject.now() < tU && ++pU <= EU;) UU.Bx(gU), RU.lastTickStarted += gU;
      var TU = 5 * (gU + 5),
        qU = RU.nowObject.now();
      if (qU - RU.lastTickStarted > TU)
        for (; qU >= RU.lastTickStarted + gU;) RU.lastTickStarted += gU
    }
  },
  36292: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU = gU(56);
    const pU = tU.useLayoutEffect;
    const EU = function(UU) {
      var RU = (0, tU.useRef)(UU);
      return pU((function() {
        RU.current = UU
      })), RU
    };
    var PU = function(UU) {
      var RU = EU(UU);
      (0, tU.useEffect)((function() {
        var UU = function(UU) {
          var gU;
          if (null != RU.current && (gU = RU.current(UU)), UU.defaultPrevented && (UU.returnValue = ""), "string" === typeof gU) return UU.returnValue = gU, gU
        };
        return window.addEventListener("beforeunload", UU),
          function() {
            window.removeEventListener("beforeunload", UU)
          }
      }), [])
    }
  },
  36174: UU => {
    var RU, gU = "undefined" !== typeof window ? window.navigator.userAgent : "",
      tU = /OS X/.test(gU),
      pU = /Opera/.test(gU),
      EU = !/like Gecko/.test(gU) && !pU,
      PU = UU.exports = {
        0: tU ? "<menu>" : "<UNK>",
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
        93: tU ? "<meta>" : "<menu>",
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
        173: tU && EU ? "-" : "<volume-mute>",
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
        231: pU ? "`" : "<unicode>",
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
    for (RU = 58; RU < 65; ++RU) PU[RU] = String.fromCharCode(RU);
    for (RU = 48; RU < 58; ++RU) PU[RU] = RU - 48 + "";
    for (RU = 65; RU < 91; ++RU) PU[RU] = String.fromCharCode(RU);
    for (RU = 96; RU < 106; ++RU) PU[RU] = "<num-" + (RU - 96) + ">";
    for (RU = 112; RU < 136; ++RU) PU[RU] = "F" + (RU - 111)
  },
  38584: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU, pU) {
      var EU = {};
      return Object.keys(tU).forEach((function(UU) {
        EU[UU] = tU[UU]
      })), EU.enumerable = !!EU.enumerable, EU.configurable = !!EU.configurable, ("value" in EU || EU.initializer) && (EU.writable = !0), EU = gU.slice().reverse().reduce((function(gU, tU) {
        return tU(UU, RU, gU) || gU
      }), EU), pU && void 0 !== EU.initializer && (EU.value = EU.initializer ? EU.initializer.call(pU) : void 0, EU.initializer = void 0), void 0 === EU.initializer && (Object.defineProperty(UU, RU, EU), EU = null), EU
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  38578: (UU, RU, gU) => {
    function tU(UU, RU, gU, tU) {
      gU && Object.defineProperty(UU, RU, {
        enumerable: gU.enumerable,
        configurable: gU.configurable,
        writable: gU.writable,
        value: gU.initializer ? gU.initializer.call(tU) : void 0
      })
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  38234: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236);
    const pU = (UU, RU, gU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : gU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(RU) : null;
    class EU {
      static DeepCopy(UU, RU, gU, EU) {
        let PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TU = function(UU) {
          const RU = [];
          do {
            const gU = Object.getOwnPropertyNames(UU);
            for (const UU of gU) - 1 === RU.indexOf(UU) && RU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return RU
        }(UU);
        for (const KU of TU) {
          if ("_" === KU[0] && (!EU || -1 === EU.indexOf(KU))) continue;
          if (KU.endsWith("Observable")) continue;
          if (gU && -1 !== gU.indexOf(KU)) continue;
          const TU = UU[KU],
            cU = typeof TU;
          if ("function" !== cU) try {
            if ("object" === cU)
              if (TU instanceof Uint8Array) RU[KU] = Uint8Array.from(TU);
              else if (TU instanceof Array) {
              if (RU[KU] = [], TU.length > 0)
                if ("object" == typeof TU[0])
                  for (let UU = 0; UU < TU.length; UU++) {
                    const gU = pU(TU[UU], RU, PU); - 1 === RU[KU].indexOf(gU) && RU[KU].push(gU)
                  } else RU[KU] = TU.slice(0)
            } else RU[KU] = pU(TU, RU, PU);
            else RU[KU] = TU
          } catch (qU) {
            tU.e.Warn(qU.message)
          }
        }
      }
    }
  },
  38260: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => pU,
      d: () => EU,
      f: () => PU,
      j: () => TU
    });
    var tU = gU(36761);
    class pU {
      constructor(UU, RU, gU) {
        this.gradient = UU, this.color1 = RU, this.color2 = gU
      }
      getColorToRef(UU) {
        this.color2 ? tU.g.LerpToRef(this.color1, this.color2, Math.random(), UU) : UU.PgU(this.color1)
      }
    }
    class EU {
      constructor(UU, RU) {
        this.gradient = UU, this.color = RU
      }
    }
    class PU {
      constructor(UU, RU, gU) {
        this.gradient = UU, this.factor1 = RU, this.factor2 = gU
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class TU {
      static GetCurrentGradient(UU, RU, gU) {
        if (RU[0].gradient > UU) return void gU(RU[0], RU[0], 1);
        for (let pU = 0; pU < RU.length - 1; pU++) {
          const tU = RU[pU],
            EU = RU[pU + 1];
          if (UU >= tU.gradient && UU <= EU.gradient) {
            return void gU(tU, EU, (UU - tU.gradient) / (EU.gradient - tU.gradient))
          }
        }
        const tU = RU.length - 1;
        gU(RU[tU], RU[tU], 1)
      }
    }
  },
  38236: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      static _CheckLimit(UU, RU) {
        let gU = tU._LogLimitOutputs[UU];
        return gU ? gU.current++ : (gU = {
          limit: RU,
          current: 1
        }, tU._LogLimitOutputs[UU] = gU), gU.current <= gU.limit
      }
      static _GenerateLimitMessage(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gU = tU._LogLimitOutputs[UU];
        if (!gU || !tU.MessageLimitReached) return;
        const pU = this._Levels[RU];
        gU.current === gU.limit && tU[pU.name](tU.MessageLimitReached.replace(/%LIMIT%/g, "" + gU.limit).replace(/%TYPE%/g, pU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        tU._LogCache = UU + tU._LogCache, tU.OnNewCacheEntry && tU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const RU = UU => UU < 10 ? "0" + UU : "" + UU,
          gU = new Date;
        return "[" + RU(gU.getHours()) + ":" + RU(gU.getMinutes()) + ":" + RU(gU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, RU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const pU = Array.isArray(RU) ? RU[0] : RU;
        if (void 0 !== gU && !tU._CheckLimit(pU, gU)) return;
        const EU = tU._FormatMessage(pU),
          PU = this._Levels[UU],
          TU = Array.isArray(RU) ? RU.slice(1) : [];
        PU.logFunc && PU.logFunc("BJS - " + EU, ...TU);
        const qU = `<div style='color:${PU.color}'>${EU}</div><br>`;
        tU._AddLogEntry(qU), tU._GenerateLimitMessage(pU, UU)
      }
      static get LogCache() {
        return tU._LogCache
      }
      static ClearLogCache() {
        tU._LogCache = "", tU._LogLimitOutputs = {}, tU.errorsCount = 0
      }
      static set LogLevels(UU) {
        tU.Log = tU._LogDisabled, tU.Warn = tU._LogDisabled, tU.Error = tU._LogDisabled;
        const RU = [tU.MessageLogLevel, tU.WarningLogLevel, tU.ErrorLogLevel];
        for (const gU of RU)
          if ((UU & gU) === gU) {
            const UU = this._Levels[gU];
            tU[UU.name] = tU._LogEnabled.bind(tU, gU)
          }
      }
    }
    tU.NoneLogLevel = 0, tU.MessageLogLevel = 1, tU.WarningLogLevel = 2, tU.ErrorLogLevel = 4, tU.AllLogLevel = 7, tU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tU._LogCache = "", tU._LogLimitOutputs = {}, tU._Levels = [{}, {
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
    }], tU.errorsCount = 0, tU.Log = tU._LogEnabled.bind(tU, tU.MessageLogLevel), tU.Warn = tU._LogEnabled.bind(tU, tU.WarningLogLevel), tU.Error = tU._LogEnabled.bind(tU, tU.ErrorLogLevel)
  },
  38263: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU
    });
    var tU = gU(36600),
      pU = gU(36626),
      EU = gU(38234);
    class PU {
      constructor() {
        this.direction1 = new tU.n(0, 1, 0), this.direction2 = new tU.n(0, 1, 0), this.minEmitBox = new tU.n(-.5, -.5, -.5), this.maxEmitBox = new tU.n(.5, .5, .5)
      }
      startDirectionFunction(UU, RU, gU, EU) {
        const PU = (0, pU.RandomRange)(this.direction1.x, this.direction2.x),
          TU = (0, pU.RandomRange)(this.direction1.y, this.direction2.y),
          qU = (0, pU.RandomRange)(this.direction1.z, this.direction2.z);
        if (EU) return RU.x = PU, RU.y = TU, void(RU.z = qU);
        tU.n.TransformNormalFromFloatsToRef(PU, TU, qU, UU, RU)
      }
      startPositionFunction(UU, RU, gU, EU) {
        const PU = (0, pU.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          TU = (0, pU.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          qU = (0, pU.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (EU) return RU.x = PU, RU.y = TU, void(RU.z = qU);
        tU.n.TransformCoordinatesFromFloatsToRef(PU, TU, qU, UU, RU)
      }
      clone() {
        const UU = new PU;
        return EU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2), UU.setVector3("minEmitBox", this.minEmitBox), UU.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(UU) {
        UU.addUniform("direction1", 3), UU.addUniform("direction2", 3), UU.addUniform("minEmitBox", 3), UU.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.direction1 = this.direction1.vgU(), UU.direction2 = this.direction2.vgU(), UU.minEmitBox = this.minEmitBox.vgU(), UU.maxEmitBox = this.maxEmitBox.vgU(), UU
      }
      parse(UU) {
        tU.n.FromArrayToRef(UU.direction1, 0, this.direction1), tU.n.FromArrayToRef(UU.direction2, 0, this.direction2), tU.n.FromArrayToRef(UU.minEmitBox, 0, this.minEmitBox), tU.n.FromArrayToRef(UU.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38226: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => TU,
      g: () => PU
    });
    var tU = gU(36600),
      pU = gU(36626),
      EU = gU(38234);
    class PU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = UU, this.height = RU, this.radiusRange = gU, this.directionRandomizer = pU, this._tempVector = tU.n.Zero()
      }
      startDirectionFunction(UU, RU, gU, EU, PU) {
        gU.position.subtractToRef(UU.getTranslation(), this._tempVector), this._tempVector.normalize(), tU.n.TransformNormalToRef(this._tempVector, PU, this._tempVector);
        const TU = (0, pU.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let qU = Math.atan2(this._tempVector.x, this._tempVector.z);
        qU += (0, pU.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = TU, this._tempVector.x = Math.sin(qU), this._tempVector.z = Math.cos(qU), this._tempVector.normalize(), EU ? RU.PgU(this._tempVector) : tU.n.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, UU, RU)
      }
      startPositionFunction(UU, RU, gU, EU) {
        const PU = (0, pU.RandomRange)(-this.height / 2, this.height / 2),
          TU = (0, pU.RandomRange)(0, 2 * Math.PI),
          qU = (0, pU.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          KU = Math.sqrt(qU) * this.radius,
          cU = KU * Math.cos(TU),
          GU = KU * Math.sin(TU);
        EU ? RU.b_(cU, PU, GU) : tU.n.TransformCoordinatesFromFloatsToRef(cU, PU, GU, UU, RU)
      }
      clone() {
        const UU = new PU(this.radius, this.directionRandomizer);
        return EU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const UU = {};
        return UU.type = this.getClassName(), UU.radius = this.radius, UU.height = this.height, UU.radiusRange = this.radiusRange, UU.directionRandomizer = this.directionRandomizer, UU
      }
      parse(UU) {
        this.radius = UU.radius, this.height = UU.height, this.radiusRange = UU.radiusRange, this.directionRandomizer = UU.directionRandomizer
      }
    }
    class TU extends PU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new tU.n(0, 1, 0),
          EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new tU.n(0, 1, 0);
        super(UU, RU, gU), this.direction1 = pU, this.direction2 = EU
      }
      startDirectionFunction(UU, RU, gU, EU) {
        const PU = (0, pU.RandomRange)(this.direction1.x, this.direction2.x),
          TU = (0, pU.RandomRange)(this.direction1.y, this.direction2.y),
          qU = (0, pU.RandomRange)(this.direction1.z, this.direction2.z);
        EU ? RU.b_(PU, TU, qU) : tU.n.TransformNormalFromFloatsToRef(PU, TU, qU, UU, RU)
      }
      clone() {
        const UU = new TU(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return EU.c.DeepCopy(this, UU), UU
      }
      applyToShader(UU) {
        UU.setFloat("radius", this.radius), UU.setFloat("height", this.height), UU.setFloat("radiusRange", this.radiusRange), UU.setVector3("direction1", this.direction1), UU.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(UU) {
        UU.addUniform("radius", 1), UU.addUniform("height", 1), UU.addUniform("radiusRange", 1), UU.addUniform("direction1", 3), UU.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const UU = super.serialize();
        return UU.direction1 = this.direction1.vgU(), UU.direction2 = this.direction2.vgU(), UU
      }
      parse(UU) {
        super.parse(UU), tU.n.FromArrayToRef(UU.direction1, 0, this.direction1), tU.n.FromArrayToRef(UU.direction2, 0, this.direction2)
      }
    }
  },
  38343: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU
    });
    const tU = .5 * (Math.sqrt(3) - 1),
      pU = (3 - Math.sqrt(3)) / 6,
      EU = 1 / 3,
      PU = 1 / 6,
      TU = (Math.sqrt(5) - 1) / 4,
      qU = (5 - Math.sqrt(5)) / 20,
      KU = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      cU = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const GU = class {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const RU = "function" == typeof UU ? UU : function(UU) {
          let RU = 0,
            gU = 0,
            tU = 0,
            pU = 1;
          const EU = function() {
            let UU = 4022871197;
            return function(RU) {
              RU = RU.toString();
              for (let gU = 0; gU < RU.length; gU++) {
                UU += RU.charCodeAt(gU);
                let tU = .02519603282416938 * UU;
                UU = tU >>> 0, tU -= UU, tU *= UU, UU = tU >>> 0, tU -= UU, UU += 4294967296 * tU
              }
              return 2.3283064365386963e-10 * (UU >>> 0)
            }
          }();
          RU = EU(" "), gU = EU(" "), tU = EU(" "), RU -= EU(UU), RU < 0 && (RU += 1);
          gU -= EU(UU), gU < 0 && (gU += 1);
          tU -= EU(UU), tU < 0 && (tU += 1);
          return function() {
            const UU = 2091639 * RU + 2.3283064365386963e-10 * pU;
            return RU = gU, gU = tU, tU = UU - (pU = 0 | UU)
          }
        }(UU);
        this.p = function(UU) {
          const RU = new Uint8Array(256);
          for (let gU = 0; gU < 256; gU++) RU[gU] = gU;
          for (let gU = 0; gU < 255; gU++) {
            const tU = gU + ~~(UU() * (256 - gU)),
              pU = RU[gU];
            RU[gU] = RU[tU], RU[tU] = pU
          }
          return RU
        }(RU), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let gU = 0; gU < 512; gU++) this.perm[gU] = this.p[255 & gU], this.permMod12[gU] = this.perm[gU] % 12
      }
      noise2D(UU, RU) {
        const gU = this.permMod12,
          EU = this.perm;
        let PU = 0,
          TU = 0,
          qU = 0;
        const cU = (UU + RU) * tU,
          GU = Math.floor(UU + cU),
          jU = Math.floor(RU + cU),
          uU = (GU + jU) * pU,
          CU = UU - (GU - uU),
          hU = RU - (jU - uU);
        let QU, eU;
        CU > hU ? (QU = 1, eU = 0) : (QU = 0, eU = 1);
        const WU = CU - QU + pU,
          fU = hU - eU + pU,
          xU = CU - 1 + 2 * pU,
          mU = hU - 1 + 2 * pU,
          IU = 255 & GU,
          JU = 255 & jU;
        let wU = .5 - CU * CU - hU * hU;
        if (wU >= 0) {
          const UU = 3 * gU[IU + EU[JU]];
          wU *= wU, PU = wU * wU * (KU[UU] * CU + KU[UU + 1] * hU)
        }
        let nU = .5 - WU * WU - fU * fU;
        if (nU >= 0) {
          const UU = 3 * gU[IU + QU + EU[JU + eU]];
          nU *= nU, TU = nU * nU * (KU[UU] * WU + KU[UU + 1] * fU)
        }
        let bU = .5 - xU * xU - mU * mU;
        if (bU >= 0) {
          const UU = 3 * gU[IU + 1 + EU[JU + 1]];
          bU *= bU, qU = bU * bU * (KU[UU] * xU + KU[UU + 1] * mU)
        }
        return 70 * (PU + TU + qU)
      }
      noise3D(UU, RU, gU) {
        const tU = this.permMod12,
          pU = this.perm;
        let TU, qU, cU, GU;
        const jU = (UU + RU + gU) * EU,
          uU = Math.floor(UU + jU),
          CU = Math.floor(RU + jU),
          hU = Math.floor(gU + jU),
          QU = (uU + CU + hU) * PU,
          eU = UU - (uU - QU),
          WU = RU - (CU - QU),
          fU = gU - (hU - QU);
        let xU, mU, IU, JU, wU, nU;
        eU >= WU ? WU >= fU ? (xU = 1, mU = 0, IU = 0, JU = 1, wU = 1, nU = 0) : eU >= fU ? (xU = 1, mU = 0, IU = 0, JU = 1, wU = 0, nU = 1) : (xU = 0, mU = 0, IU = 1, JU = 1, wU = 0, nU = 1) : WU < fU ? (xU = 0, mU = 0, IU = 1, JU = 0, wU = 1, nU = 1) : eU < fU ? (xU = 0, mU = 1, IU = 0, JU = 0, wU = 1, nU = 1) : (xU = 0, mU = 1, IU = 0, JU = 1, wU = 1, nU = 0);
        const bU = eU - xU + PU,
          oU = WU - mU + PU,
          ZU = fU - IU + PU,
          aU = eU - JU + 2 * PU,
          YU = WU - wU + 2 * PU,
          BU = fU - nU + 2 * PU,
          VU = eU - 1 + .5,
          rU = WU - 1 + .5,
          XU = fU - 1 + .5,
          vU = 255 & uU,
          dU = 255 & CU,
          HU = 255 & hU;
        let SU = .6 - eU * eU - WU * WU - fU * fU;
        if (SU < 0) TU = 0;
        else {
          const UU = 3 * tU[vU + pU[dU + pU[HU]]];
          SU *= SU, TU = SU * SU * (KU[UU] * eU + KU[UU + 1] * WU + KU[UU + 2] * fU)
        }
        let sU = .6 - bU * bU - oU * oU - ZU * ZU;
        if (sU < 0) qU = 0;
        else {
          const UU = 3 * tU[vU + xU + pU[dU + mU + pU[HU + IU]]];
          sU *= sU, qU = sU * sU * (KU[UU] * bU + KU[UU + 1] * oU + KU[UU + 2] * ZU)
        }
        let yU = .6 - aU * aU - YU * YU - BU * BU;
        if (yU < 0) cU = 0;
        else {
          const UU = 3 * tU[vU + JU + pU[dU + wU + pU[HU + nU]]];
          yU *= yU, cU = yU * yU * (KU[UU] * aU + KU[UU + 1] * YU + KU[UU + 2] * BU)
        }
        let kU = .6 - VU * VU - rU * rU - XU * XU;
        if (kU < 0) GU = 0;
        else {
          const UU = 3 * tU[vU + 1 + pU[dU + 1 + pU[HU + 1]]];
          kU *= kU, GU = kU * kU * (KU[UU] * VU + KU[UU + 1] * rU + KU[UU + 2] * XU)
        }
        return 32 * (TU + qU + cU + GU)
      }
      noise4D(UU, RU, gU, tU) {
        const pU = this.perm;
        let EU, PU, KU, GU, jU;
        const uU = (UU + RU + gU + tU) * TU,
          CU = Math.floor(UU + uU),
          hU = Math.floor(RU + uU),
          QU = Math.floor(gU + uU),
          eU = Math.floor(tU + uU),
          WU = (CU + hU + QU + eU) * qU,
          fU = UU - (CU - WU),
          xU = RU - (hU - WU),
          mU = gU - (QU - WU),
          IU = tU - (eU - WU);
        let JU = 0,
          wU = 0,
          nU = 0,
          bU = 0;
        fU > xU ? JU++ : wU++, fU > mU ? JU++ : nU++, fU > IU ? JU++ : bU++, xU > mU ? wU++ : nU++, xU > IU ? wU++ : bU++, mU > IU ? nU++ : bU++;
        const oU = JU >= 3 ? 1 : 0,
          ZU = wU >= 3 ? 1 : 0,
          aU = nU >= 3 ? 1 : 0,
          YU = bU >= 3 ? 1 : 0,
          BU = JU >= 2 ? 1 : 0,
          VU = wU >= 2 ? 1 : 0,
          rU = nU >= 2 ? 1 : 0,
          XU = bU >= 2 ? 1 : 0,
          vU = JU >= 1 ? 1 : 0,
          dU = wU >= 1 ? 1 : 0,
          HU = nU >= 1 ? 1 : 0,
          SU = bU >= 1 ? 1 : 0,
          sU = fU - oU + qU,
          yU = xU - ZU + qU,
          kU = mU - aU + qU,
          FU = IU - YU + qU,
          iU = fU - BU + 2 * qU,
          AU = xU - VU + 2 * qU,
          zU = mU - rU + 2 * qU,
          MU = IU - XU + 2 * qU,
          DU = fU - vU + 3 * qU,
          LU = xU - dU + 3 * qU,
          NU = mU - HU + 3 * qU,
          lU = IU - SU + 3 * qU,
          OU = fU - 1 + 4 * qU,
          UR = xU - 1 + 4 * qU,
          RR = mU - 1 + 4 * qU,
          gR = IU - 1 + 4 * qU,
          tR = 255 & CU,
          pR = 255 & hU,
          ER = 255 & QU,
          PR = 255 & eU;
        let TR = .6 - fU * fU - xU * xU - mU * mU - IU * IU;
        if (TR < 0) EU = 0;
        else {
          const UU = pU[tR + pU[pR + pU[ER + pU[PR]]]] % 32 * 4;
          TR *= TR, EU = TR * TR * (cU[UU] * fU + cU[UU + 1] * xU + cU[UU + 2] * mU + cU[UU + 3] * IU)
        }
        let qR = .6 - sU * sU - yU * yU - kU * kU - FU * FU;
        if (qR < 0) PU = 0;
        else {
          const UU = pU[tR + oU + pU[pR + ZU + pU[ER + aU + pU[PR + YU]]]] % 32 * 4;
          qR *= qR, PU = qR * qR * (cU[UU] * sU + cU[UU + 1] * yU + cU[UU + 2] * kU + cU[UU + 3] * FU)
        }
        let KR = .6 - iU * iU - AU * AU - zU * zU - MU * MU;
        if (KR < 0) KU = 0;
        else {
          const UU = pU[tR + BU + pU[pR + VU + pU[ER + rU + pU[PR + XU]]]] % 32 * 4;
          KR *= KR, KU = KR * KR * (cU[UU] * iU + cU[UU + 1] * AU + cU[UU + 2] * zU + cU[UU + 3] * MU)
        }
        let cR = .6 - DU * DU - LU * LU - NU * NU - lU * lU;
        if (cR < 0) GU = 0;
        else {
          const UU = pU[tR + vU + pU[pR + dU + pU[ER + HU + pU[PR + SU]]]] % 32 * 4;
          cR *= cR, GU = cR * cR * (cU[UU] * DU + cU[UU + 1] * LU + cU[UU + 2] * NU + cU[UU + 3] * lU)
        }
        let GR = .6 - OU * OU - UR * UR - RR * RR - gR * gR;
        if (GR < 0) jU = 0;
        else {
          const UU = pU[tR + 1 + pU[pR + 1 + pU[ER + 1 + pU[PR + 1]]]] % 32 * 4;
          GR *= GR, jU = GR * GR * (cU[UU] * OU + cU[UU + 1] * UR + cU[UU + 2] * RR + cU[UU + 3] * gR)
        }
        return 27 * (EU + PU + KU + GU + jU)
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);