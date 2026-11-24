/*! For license information please see mpd96o.219.dd7e630e.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219];
export const modules = {
  39690: (mm, Tm, fm) => {
    mm.exports = Am;
    var hm = fm(362);

    function Am(mm, Tm) {
      if (!(this instanceof Am)) return new Am(mm, Tm);
      var fm = hm.create();
      hm.add(fm, mm, Tm), this.base = hm.min(hm.create(), mm, fm), this.vec = hm.clone(Tm), this.max = hm.max(hm.create(), mm, fm), this.mag = hm.length(this.vec)
    }
    var am = Am.prototype;
    am.width = function() {
      return this.vec[0]
    }, am.height = function() {
      return this.vec[1]
    }, am.depth = function() {
      return this.vec[2]
    }, am.x0 = function() {
      return this.base[0]
    }, am.y0 = function() {
      return this.base[1]
    }, am.z0 = function() {
      return this.base[2]
    }, am.x1 = function() {
      return this.max[0]
    }, am.y1 = function() {
      return this.max[1]
    }, am.z1 = function() {
      return this.max[2]
    }, am.translate = function(mm) {
      return hm.add(this.max, this.max, mm), hm.add(this.base, this.base, mm), this
    }, am.setPosition = function(mm) {
      return hm.add(this.max, mm, this.vec), hm.copy(this.base, mm), this
    }, am.expand = function(mm) {
      var Tm = hm.create(),
        fm = hm.create();
      return hm.max(Tm, mm.max, this.max), hm.min(fm, mm.base, this.base), hm.subtract(Tm, Tm, fm), new Am(fm, Tm)
    }, am.intersects = function(mm) {
      return !(mm.base[0] > this.max[0]) && (!(mm.base[1] > this.max[1]) && (!(mm.base[2] > this.max[2]) && (!(mm.max[0] < this.base[0]) && (!(mm.max[1] < this.base[1]) && !(mm.max[2] < this.base[2])))))
    }, am.touches = function(mm) {
      var Tm = this.union(mm);
      return null !== Tm && (0 == Tm.width() || 0 == Tm.height() || 0 == Tm.depth())
    }, am.union = function(mm) {
      if (!this.intersects(mm)) return null;
      var Tm = Math.max(mm.base[0], this.base[0]),
        fm = Math.max(mm.base[1], this.base[1]),
        hm = Math.max(mm.base[2], this.base[2]);
      return new Am([Tm, fm, hm], [Math.min(mm.max[0], this.max[0]) - Tm, Math.min(mm.max[1], this.max[1]) - fm, Math.min(mm.max[2], this.max[2]) - hm])
    }
  },
  39688: mm => {
    mm.exports = function(mm, Tm, fm, hm, Am, am) {
      var xm = +Tm[0],
        wm = +Tm[1],
        Dm = +Tm[2],
        im = +fm[0],
        Rm = +fm[1],
        pm = +fm[2],
        Em = Math.sqrt(im * im + Rm * Rm + pm * pm);
      if (0 === Em) throw new Error("Can't raycast along a zero vector");
      return function(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
        for (var Rm = 0, pm = Math.floor, Em = 0 | pm(Tm), om = 0 | pm(fm), Om = 0 | pm(hm), Ym = Am > 0 ? 1 : -1, qm = am > 0 ? 1 : -1, jm = xm > 0 ? 1 : -1, Vm = Math.abs(1 / Am), Im = Math.abs(1 / am), Km = Math.abs(1 / xm), Qm = Vm < 1 / 0 ? Vm * (Ym > 0 ? Em + 1 - Tm : Tm - Em) : 1 / 0, nm = Im < 1 / 0 ? Im * (qm > 0 ? om + 1 - fm : fm - om) : 1 / 0, Jm = Km < 1 / 0 ? Km * (jm > 0 ? Om + 1 - hm : hm - Om) : 1 / 0, cm = -1; Rm <= wm;) {
          var zm = mm(Em, om, Om);
          if (zm) return Dm && (Dm[0] = Tm + Rm * Am, Dm[1] = fm + Rm * am, Dm[2] = hm + Rm * xm), im && (im[0] = im[1] = im[2] = 0, 0 === cm && (im[0] = -Ym), 1 === cm && (im[1] = -qm), 2 === cm && (im[2] = -jm)), zm;
          Qm < nm ? Qm < Jm ? (Em += Ym, Rm = Qm, Qm += Vm, cm = 0) : (Om += jm, Rm = Jm, Jm += Km, cm = 2) : nm < Jm ? (om += qm, Rm = nm, nm += Im, cm = 1) : (Om += jm, Rm = Jm, Jm += Km, cm = 2)
        }
        return Dm && (Dm[0] = Tm + Rm * Am, Dm[1] = fm + Rm * am, Dm[2] = hm + Rm * xm), im && (im[0] = im[1] = im[2] = 0), 0
      }(mm, xm, wm, Dm, im /= Em, Rm /= Em, pm /= Em, hm = "undefined" === typeof hm ? 64 : +hm, Am, am)
    }
  },
  39241: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => wm,
      g: () => am
    });
    var hm = fm(4037);
    let Am = null;

    function am(mm) {
      return null !== Am && mm === Am
    }

    function xm() {
      this.YM = !1, this.stopPropagation = !1, this.bM = !1, this.disabled = !1
    }
    class wm {
      constructor(mm, Tm) {
        this.version = "0.7.0";
        var fm = Object.assign({}, new xm, Tm || {});
        this.element = mm || document, this.YM = !!fm.YM, this.stopPropagation = !!fm.stopPropagation, this.bM = !!fm.bM, this.disabled = !!fm.disabled, this.filterEvents = (mm, Tm) => !0, this.ignoreEvent = mm => !1, this.down = new hm.EventEmitter, this.up = new hm.EventEmitter, this.state = {}, this.rM = {
          dx: 0,
          dy: 0,
          ATm: 0,
          aTm: 0,
          xTm: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? im(this) : document.addEventListener("DOMContentLoaded", (mm => {
          im(this)
        }), {
          once: !0
        })
      }
      bind(mm) {
        for (var Tm = arguments.length, fm = new Array(Tm > 1 ? Tm - 1 : 0), hm = 1; hm < Tm; hm++) fm[hm - 1] = arguments[hm];
        fm.forEach((Tm => {
          var fm = this._keyBindmap[Tm] || [];
          fm.includes(mm) || (fm.push(mm), this._keyBindmap[Tm] = fm)
        })), this.state[mm] = !!this.state[mm], this.pressCount[mm] = this.pressCount[mm] || 0, this.releaseCount[mm] = this.releaseCount[mm] || 0
      }
      unbind(mm) {
        for (var Tm in this._keyBindmap) {
          var fm = this._keyBindmap[Tm],
            hm = fm.indexOf(mm);
          hm > -1 && fm.splice(hm, 1)
        }
      }
      getBindings() {
        var mm = {};
        for (var Tm in this._keyBindmap) {
          this._keyBindmap[Tm].forEach((fm => {
            mm[fm] = mm[fm] || [], mm[fm].push(Tm)
          }))
        }
        return mm
      }
      DE() {
        Dm(this.rM), Dm(this.pressCount), Dm(this.releaseCount)
      }
    }

    function Dm(mm) {
      for (var Tm in mm) mm[Tm] = 0
    }

    function im(mm) {
      window.addEventListener("keydown", qm.bind(null, mm, !0), !1), window.addEventListener("keyup", qm.bind(null, mm, !1), !1);
      var Tm = {
        passive: !0
      };
      mm.element.addEventListener("touchstart", om.bind(void 0, mm), {
        passive: !1
      }), mm.element.addEventListener("touchend", Ym.bind(void 0, mm), Tm), mm.element.addEventListener("mousedown", jm.bind(null, mm, !0), Tm), window.document.addEventListener("mouseup", jm.bind(null, mm, !1), Tm), mm.element.addEventListener("touchmove", Vm.bind(null, mm), Tm), mm.element.addEventListener("mousemove", Vm.bind(null, mm), Tm), window.PointerEvent, mm.element.addEventListener("wheel", Im.bind(null, mm), Tm), mm.element.addEventListener("contextmenu", Km.bind(null, mm), !1), window.addEventListener("blur", Jm.bind(null, mm), !1)
    }
    var Rm = 0,
      pm = 0,
      Em = null;

    function om(mm, Tm) {
      Tm.preventDefault(), Om(Tm)
    }

    function Om(mm) {
      let Tm = !1;
      for (let fm = 0; fm < mm.touches.length; ++fm)
        if (mm.touches[fm].identifier === Em) {
          Tm = !0;
          break
        } if (!Tm) {
        const Tm = mm.changedTouches[0];
        Rm = Tm.clientX, pm = Tm.clientY, Em = Tm.identifier
      }
    }

    function Ym(mm, Tm) {
      for (var fm = Tm.changedTouches, hm = 0; hm < fm.length; ++hm) fm[hm].identifier === Em && (Em = null)
    }

    function qm(mm, Tm, fm) {
      if (!mm.ignoreEvent(fm)) try {
        cm(mm, fm), Tm && fm.isTrusted && !fm.repeat && mm._keyStates[fm.code] && zm(mm, fm.code)
      } finally {
        Zm(fm.code, Tm, mm, fm)
      }
    }

    function jm(mm, Tm, fm) {
      if (!mm.ignoreEvent(fm)) try {
        cm(mm, fm)
      } finally {
        ! function(mm, Tm, fm) {
          if ("pointerId" in fm)
            if (Tm) {
              if (null !== mm._touches.currID) return;
              mm._touches.currID = fm.pointerId
            } else {
              if (mm._touches.currID !== fm.pointerId) return;
              mm._touches.currID = null
            } var hm = "button" in fm ? fm.button + 1 : 1;
          Zm("Mouse" + hm, Tm, mm, fm)
        }(mm, Tm, fm)
      }
    }

    function Vm(mm, Tm) {
      var fm = Tm.movementX || Tm.mozMovementX || 0,
        hm = Tm.movementY || Tm.mozMovementY || 0;
      if (Tm.touches && 0 === (fm | hm)) {
        var Am = function(mm) {
          Om(mm);
          for (let Tm = 0; Tm < mm.changedTouches.length; ++Tm)
            if (mm.changedTouches[Tm].identifier == Em) {
              const fm = mm.changedTouches[Tm],
                hm = [fm.clientX - Rm, fm.clientY - pm];
              return Rm = fm.clientX, pm = fm.clientY, hm
            } return console.error(`Did not find touch id ${Em}`), [0, 0]
        }(Tm);
        fm = Am[0], hm = Am[1]
      }
      mm.rM.dx += fm, mm.rM.dy += hm
    }

    function Im(mm, Tm) {
      cm(mm, Tm);
      var fm = 1;
      switch (Tm.deltaMode) {
        case 0:
          fm = 1;
          break;
        case 1:
          fm = 12;
          break;
        case 2:
          fm = mm.element.clientHeight || window.innerHeight
      }
      mm.rM.ATm += (Tm.deltaX || 0) * fm, mm.rM.aTm += (Tm.deltaY || 0) * fm, mm.rM.xTm += (Tm.deltaZ || 0) * fm
    }

    function Km(mm, Tm) {
      if (!mm.bM) return Tm.preventDefault(), !1
    }
    var Qm = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function nm(mm, Tm) {
      return !!mm[Qm[Tm]] || ("AltRight" === Tm || "ControlLeft" === Tm) && "function" === typeof mm.getModifierState && !0 === mm.getModifierState("AltGraph")
    }

    function Jm(mm, Tm) {
      for (var fm in mm._modifiersHeldThroughBlur = {}, Qm) mm._keyStates[fm] && (mm._modifiersHeldThroughBlur[fm] = !0);
      Tm && Tm.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (mm) {
          return !0
        }
      }() && (clearTimeout(mm._blurRelease), mm._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Tm in mm._modifiersHeldThroughBlur = {}, mm._keyStates) mm._keyStates[Tm] && !/^Mouse\d/.test(Tm) && zm(mm, Tm)
      }), 0))
    }

    function cm(mm, Tm) {
      var fm = mm._modifiersHeldThroughBlur;
      if (fm && Tm.isTrusted && document.hasFocus())
        for (var hm in fm) delete fm[hm], mm._keyStates[hm] && hm !== Tm.code && (nm(Tm, hm) || zm(mm, hm))
    }

    function zm(mm, Tm) {
      const fm = {
          code: Tm,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        hm = Am;
      Am = fm;
      try {
        Zm(Tm, !1, mm, fm)
      } finally {
        Am = hm
      }
    }

    function Zm(mm, Tm, fm, hm) {
      var Am = fm._keyBindmap[mm];
      Am && (km(fm._keyStates[mm], Tm) && (fm._keyStates[mm] = Tm, Am.forEach((mm => {
        (!fm.filterEvents || fm.filterEvents(hm, mm)) && function(mm, Tm, fm, hm) {
          var Am = Tm ? fm.pressCount : fm.releaseCount;
          Am[mm] = (Am[mm] || 0) + 1;
          var am = fm._bindPressCount[mm] || 0;
          (am += Tm ? 1 : -1) < 0 && (am = 0);
          fm._bindPressCount[mm] = am;
          var xm = fm.state[mm];
          if (km(xm, am)) {
            fm.state[mm] = am > 0;
            var wm = Tm ? fm.down : fm.up;
            fm.disabled || wm.emit(mm, hm)
          }
        }(mm, Tm, fm, hm)
      }))), "button" in hm || (fm.YM && !hm.defaultPrevented && hm.preventDefault(), fm.stopPropagation && hm.stopPropagation()))
    }

    function km(mm, Tm) {
      return mm ? !Tm : Tm
    }
  },
  36623: (mm, Tm) => {
    function fm(mm) {
      if (mm && "object" === typeof mm) {
        var Tm = mm.which || mm.keyCode || mm.charCode;
        Tm && (mm = Tm)
      }
      if ("number" === typeof mm) return xm[mm];
      var fm, am = String(mm);
      return (fm = hm[am.toLowerCase()]) ? fm : (fm = Am[am.toLowerCase()]) || (1 === am.length ? am.charCodeAt(0) : void 0)
    }
    fm.isEventKey = function(mm, Tm) {
      if (mm && "object" === typeof mm) {
        var fm = mm.which || mm.keyCode || mm.charCode;
        if (null === fm || void 0 === fm) return !1;
        if ("string" === typeof Tm) {
          var am;
          if (am = hm[Tm.toLowerCase()]) return am === fm;
          if (am = Am[Tm.toLowerCase()]) return am === fm
        } else if ("number" === typeof Tm) return Tm === fm;
        return !1
      }
    };
    var hm = (Tm = mm.exports = fm).code = Tm.codes = {
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
      Am = Tm.aliases = {
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
    for (am = 97; am < 123; am++) hm[String.fromCharCode(am)] = am - 32;
    for (var am = 48; am < 58; am++) hm[am - 48] = am;
    for (am = 1; am < 13; am++) hm["f" + am] = am + 111;
    for (am = 0; am < 10; am++) hm["numpad " + am] = am + 96;
    var xm = Tm.names = Tm.title = {};
    for (am in hm) xm[hm[am]] = am;
    for (var wm in Am) hm[wm] = Am[wm]
  },
  39678: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm
    });
    class hm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.WH = !1, this.Ay = !1, this.aG = 30, this.lH = 0, this.jy = 100, this.Lq = !1, this.fullscreen = !1, this.HV = function(mm) {}, this.Iy = function(mm, Tm, fm) {}, this.Gy = function() {}, this.zV = function() {}, this.Qy = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(mm) {}, this._data = new Am(Tm),
          function(mm) {
            if ("loading" === document.readyState) {
              var Tm = () => {
                document.removeEventListener("readystatechange", Tm), mm()
              };
              document.addEventListener("readystatechange", Tm)
            } else setTimeout(mm, 0)
          }((() => {
            ! function(mm) {
              var Tm = mm._data,
                fm = Tm.nowObject.now();
              Tm.lastTickStarted = fm, Tm.lastFrameStarted = fm, Tm.lastRenderStarted = fm, Tm.frameCB = () => function(mm) {
                var Tm = mm._data;
                requestAnimationFrame(Tm.frameCB), wm(mm);
                var fm = Tm.nowObject.now(),
                  hm = fm - Tm.lastFrameStarted;
                if (Tm.lastFrameStarted = fm, mm.lH > 0) {
                  Tm.renderAccum += hm;
                  var Am = 1e3 / mm.lH;
                  if (Tm.renderAccum < Am) return;
                  Tm.renderAccum -= Am, Tm.renderAccum > Am && (Tm.renderAccum = Am)
                }
                var am = fm - Tm.lastRenderStarted;
                Tm.lastRenderStarted = fm;
                var xm = 1e3 / mm.aG,
                  Dm = (fm - Tm.lastTickStarted) / xm;
                Dm < 0 && (Dm = 0);
                mm.Iy(am, Dm, xm), setTimeout(wm, 0, mm, !0)
              }(mm), Tm.intervalCB = () => wm(mm), requestAnimationFrame(Tm.frameCB), Tm.pollTime > 0 && (Tm.intervalID = setInterval(Tm.intervalCB, Math.max(Tm.pollTime, 1e3 / mm.aG / 2)))
            }(this),
            function(mm, Tm) {
              if (!Tm) return;
              var fm = !1,
                hm = !1,
                Am = mm => {
                  if (!!mm !== (fm = Tm === document.pointerLockElement))
                    if (mm) {
                      var hm = Tm.requestPointerLock();
                      hm && hm.catch && hm.catch((mm => {}))
                    } else document.exitPointerLock()
                },
                am = mm => {
                  !!mm !== (hm = Tm === document.fullscreenElement) && (mm ? Tm.requestFullscreen ? Tm.requestFullscreen() : Tm.webkitRequestFullscreen && Tm.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (hm => {
                fm = Tm === document.pointerLockElement, mm.Qy(fm)
              })), document.addEventListener("fullscreenchange", (fm => {
                hm = Tm === document.fullscreenElement, mm.onFullscreenChanged(hm)
              })), document.addEventListener("pointerlockerror", (hm => {
                fm = Tm === document.pointerLockElement, mm.onPointerLockError(hm)
              })), Object.defineProperty(mm, "Lq", {
                get: () => fm,
                set: Am
              }), Object.defineProperty(mm, "fullscreen", {
                get: () => hm,
                set: am
              }), Tm.addEventListener("click", (Tm => {
                mm.WH && Am(!0), mm.Ay && am(!0)
              }));
              var xm = () => mm.zV();
              if (window.ResizeObserver) {
                new ResizeObserver(xm).observe(Tm)
              } else window.addEventListener("resize", xm)
            }(this, mm), this.Gy()
          }))
      }
    }

    function Am() {
      let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = mm, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var am = 3,
      xm = 20;

    function wm(mm) {
      for (var Tm = mm._data, fm = 1e3 / mm.aG, hm = Tm.nowObject.now() + xm, Am = 0; Tm.nowObject.now() >= Tm.lastTickStarted + fm && Tm.nowObject.now() < hm && ++Am <= am;) mm.HV(fm), Tm.lastTickStarted += fm;
      var wm = 5 * (fm + 5),
        Dm = Tm.nowObject.now();
      if (Dm - Tm.lastTickStarted > wm)
        for (; Dm >= Tm.lastTickStarted + fm;) Tm.lastTickStarted += fm
    }
  },
  36786: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(59);
    const Am = hm.useLayoutEffect;
    const am = function(mm) {
      var Tm = (0, hm.useRef)(mm);
      return Am((function() {
        Tm.current = mm
      })), Tm
    };
    var xm = function(mm) {
      var Tm = am(mm);
      (0, hm.useEffect)((function() {
        var mm = function(mm) {
          var fm;
          if (null != Tm.current && (fm = Tm.current(mm)), mm.defaultPrevented && (mm.returnValue = ""), "string" === typeof fm) return mm.returnValue = fm, fm
        };
        return window.addEventListener("beforeunload", mm),
          function() {
            window.removeEventListener("beforeunload", mm)
          }
      }), [])
    }
  },
  36666: mm => {
    var Tm, fm = "undefined" !== typeof window ? window.navigator.userAgent : "",
      hm = /OS X/.test(fm),
      Am = /Opera/.test(fm),
      am = !/like Gecko/.test(fm) && !Am,
      xm = mm.exports = {
        0: hm ? "<menu>" : "<UNK>",
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
        93: hm ? "<meta>" : "<menu>",
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
        173: hm && am ? "-" : "<volume-mute>",
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
        231: Am ? "`" : "<unicode>",
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
    for (Tm = 58; Tm < 65; ++Tm) xm[Tm] = String.fromCharCode(Tm);
    for (Tm = 48; Tm < 58; ++Tm) xm[Tm] = Tm - 48 + "";
    for (Tm = 65; Tm < 91; ++Tm) xm[Tm] = String.fromCharCode(Tm);
    for (Tm = 96; Tm < 106; ++Tm) xm[Tm] = "<num-" + (Tm - 96) + ">";
    for (Tm = 112; Tm < 136; ++Tm) xm[Tm] = "F" + (Tm - 111)
  },
  39106: (mm, Tm, fm) => {
    function hm(mm, Tm, fm, hm, Am) {
      var am = {};
      return Object.keys(hm).forEach((function(mm) {
        am[mm] = hm[mm]
      })), am.enumerable = !!am.enumerable, am.configurable = !!am.configurable, ("value" in am || am.initializer) && (am.writable = !0), am = fm.slice().reverse().reduce((function(fm, hm) {
        return hm(mm, Tm, fm) || fm
      }), am), Am && void 0 !== am.initializer && (am.value = am.initializer ? am.initializer.call(Am) : void 0, am.initializer = void 0), void 0 === am.initializer && (Object.defineProperty(mm, Tm, am), am = null), am
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  39098: (mm, Tm, fm) => {
    function hm(mm, Tm, fm, hm) {
      fm && Object.defineProperty(mm, Tm, {
        enumerable: fm.enumerable,
        configurable: fm.configurable,
        writable: fm.writable,
        value: fm.initializer ? fm.initializer.call(hm) : void 0
      })
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  38764: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(38766);
    const Am = (mm, Tm, fm) => mm ? mm.getClassName && "Mesh" === mm.getClassName() ? null : !mm.getClassName || "SubMesh" !== mm.getClassName() && "PhysicsBody" !== mm.getClassName() ? mm.clone ? mm.clone() : Array.isArray(mm) ? mm.slice() : fm && "object" === typeof mm ? {
      ...mm
    } : null : mm.clone(Tm) : null;
    class am {
      static DeepCopy(mm, Tm, fm, am) {
        let xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const wm = function(mm) {
          const Tm = [];
          do {
            const fm = Object.getOwnPropertyNames(mm);
            for (const mm of fm) - 1 === Tm.indexOf(mm) && Tm.push(mm)
          } while (mm = Object.getPrototypeOf(mm));
          return Tm
        }(mm);
        for (const im of wm) {
          if ("_" === im[0] && (!am || -1 === am.indexOf(im))) continue;
          if (im.endsWith("Observable")) continue;
          if (fm && -1 !== fm.indexOf(im)) continue;
          const wm = mm[im],
            Rm = typeof wm;
          if ("function" !== Rm) try {
            if ("object" === Rm)
              if (wm instanceof Uint8Array) Tm[im] = Uint8Array.from(wm);
              else if (wm instanceof Array) {
              if (Tm[im] = [], wm.length > 0)
                if ("object" == typeof wm[0])
                  for (let mm = 0; mm < wm.length; mm++) {
                    const fm = Am(wm[mm], Tm, xm); - 1 === Tm[im].indexOf(fm) && Tm[im].push(fm)
                  } else Tm[im] = wm.slice(0)
            } else Tm[im] = Am(wm, Tm, xm);
            else Tm[im] = wm
          } catch (Dm) {
            hm.b.Warn(Dm.message)
          }
        }
      }
    }
  },
  38802: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Am,
      d: () => am,
      f: () => xm,
      j: () => wm
    });
    var hm = fm(37336);
    class Am {
      constructor(mm, Tm, fm) {
        this.gradient = mm, this.color1 = Tm, this.color2 = fm
      }
      getColorToRef(mm) {
        this.color2 ? hm.c.LerpToRef(this.color1, this.color2, Math.random(), mm) : mm.ZZ(this.color1)
      }
    }
    class am {
      constructor(mm, Tm) {
        this.gradient = mm, this.color = Tm
      }
    }
    class xm {
      constructor(mm, Tm, fm) {
        this.gradient = mm, this.factor1 = Tm, this.factor2 = fm
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class wm {
      static GetCurrentGradient(mm, Tm, fm) {
        if (Tm[0].gradient > mm) return void fm(Tm[0], Tm[0], 1);
        for (let Am = 0; Am < Tm.length - 1; Am++) {
          const hm = Tm[Am],
            am = Tm[Am + 1];
          if (mm >= hm.gradient && mm <= am.gradient) {
            return void fm(hm, am, (mm - hm.gradient) / (am.gradient - hm.gradient))
          }
        }
        const hm = Tm.length - 1;
        fm(Tm[hm], Tm[hm], 1)
      }
    }
  },
  38766: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      static _CheckLimit(mm, Tm) {
        let fm = hm._LogLimitOutputs[mm];
        return fm ? fm.current++ : (fm = {
          limit: Tm,
          current: 1
        }, hm._LogLimitOutputs[mm] = fm), fm.current <= fm.limit
      }
      static _GenerateLimitMessage(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const fm = hm._LogLimitOutputs[mm];
        if (!fm || !hm.MessageLimitReached) return;
        const Am = this._Levels[Tm];
        fm.current === fm.limit && hm[Am.name](hm.MessageLimitReached.replace(/%LIMIT%/g, "" + fm.limit).replace(/%TYPE%/g, Am.name ?? ""))
      }
      static _AddLogEntry(mm) {
        hm._LogCache = mm + hm._LogCache, hm.OnNewCacheEntry && hm.OnNewCacheEntry(mm)
      }
      static _FormatMessage(mm) {
        const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
          fm = new Date;
        return "[" + Tm(fm.getHours()) + ":" + Tm(fm.getMinutes()) + ":" + Tm(fm.getSeconds()) + "]: " + mm
      }
      static _LogDisabled(mm, Tm) {}
      static _LogEnabled() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const Am = Array.isArray(Tm) ? Tm[0] : Tm;
        if (void 0 !== fm && !hm._CheckLimit(Am, fm)) return;
        const am = hm._FormatMessage(Am),
          xm = this._Levels[mm],
          wm = Array.isArray(Tm) ? Tm.slice(1) : [];
        xm.logFunc && xm.logFunc("BJS - " + am, ...wm);
        const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
        hm._AddLogEntry(Dm), hm._GenerateLimitMessage(Am, mm)
      }
      static get LogCache() {
        return hm._LogCache
      }
      static ClearLogCache() {
        hm._LogCache = "", hm._LogLimitOutputs = {}, hm.errorsCount = 0
      }
      static set LogLevels(mm) {
        hm.Log = hm._LogDisabled, hm.Warn = hm._LogDisabled, hm.Error = hm._LogDisabled;
        const Tm = [hm.MessageLogLevel, hm.WarningLogLevel, hm.ErrorLogLevel];
        for (const fm of Tm)
          if ((mm & fm) === fm) {
            const mm = this._Levels[fm];
            hm[mm.name] = hm._LogEnabled.bind(hm, fm)
          }
      }
    }
    hm.NoneLogLevel = 0, hm.MessageLogLevel = 1, hm.WarningLogLevel = 2, hm.ErrorLogLevel = 4, hm.AllLogLevel = 7, hm.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hm._LogCache = "", hm._LogLimitOutputs = {}, hm._Levels = [{}, {
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
    }], hm.errorsCount = 0, hm.Log = hm._LogEnabled.bind(hm, hm.MessageLogLevel), hm.Warn = hm._LogEnabled.bind(hm, hm.WarningLogLevel), hm.Error = hm._LogEnabled.bind(hm, hm.ErrorLogLevel)
  },
  38807: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => xm
    });
    var hm = fm(37185),
      Am = fm(37208),
      am = fm(38764);
    class xm {
      constructor() {
        this.direction1 = new hm.p(0, 1, 0), this.direction2 = new hm.p(0, 1, 0), this.minEmitBox = new hm.p(-.5, -.5, -.5), this.maxEmitBox = new hm.p(.5, .5, .5)
      }
      startDirectionFunction(mm, Tm, fm, am) {
        const xm = (0, Am.RandomRange)(this.direction1.x, this.direction2.x),
          wm = (0, Am.RandomRange)(this.direction1.y, this.direction2.y),
          Dm = (0, Am.RandomRange)(this.direction1.z, this.direction2.z);
        if (am) return Tm.x = xm, Tm.y = wm, void(Tm.z = Dm);
        hm.p.TransformNormalFromFloatsToRef(xm, wm, Dm, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, am) {
        const xm = (0, Am.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          wm = (0, Am.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Dm = (0, Am.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (am) return Tm.x = xm, Tm.y = wm, void(Tm.z = Dm);
        hm.p.TransformCoordinatesFromFloatsToRef(xm, wm, Dm, mm, Tm)
      }
      clone() {
        const mm = new xm;
        return am.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setVector3("direction1", this.direction1), mm.setVector3("direction2", this.direction2), mm.setVector3("minEmitBox", this.minEmitBox), mm.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(mm) {
        mm.addUniform("direction1", 3), mm.addUniform("direction2", 3), mm.addUniform("minEmitBox", 3), mm.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.direction1 = this.direction1.ahm(), mm.direction2 = this.direction2.ahm(), mm.minEmitBox = this.minEmitBox.ahm(), mm.maxEmitBox = this.maxEmitBox.ahm(), mm
      }
      parse(mm) {
        hm.p.FromArrayToRef(mm.direction1, 0, this.direction1), hm.p.FromArrayToRef(mm.direction2, 0, this.direction2), hm.p.FromArrayToRef(mm.minEmitBox, 0, this.minEmitBox), hm.p.FromArrayToRef(mm.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38758: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      d: () => xm
    });
    var hm = fm(37185),
      Am = fm(37208),
      am = fm(38764);
    class xm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = mm, this.height = Tm, this.radiusRange = fm, this.directionRandomizer = Am, this._tempVector = hm.p.Zero()
      }
      startDirectionFunction(mm, Tm, fm, am, xm) {
        fm.position.subtractToRef(mm.getTranslation(), this._tempVector), this._tempVector.normalize(), hm.p.TransformNormalToRef(this._tempVector, xm, this._tempVector);
        const wm = (0, Am.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Dm = Math.atan2(this._tempVector.x, this._tempVector.z);
        Dm += (0, Am.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = wm, this._tempVector.x = Math.sin(Dm), this._tempVector.z = Math.cos(Dm), this._tempVector.normalize(), am ? Tm.ZZ(this._tempVector) : hm.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, mm, Tm)
      }
      startPositionFunction(mm, Tm, fm, am) {
        const xm = (0, Am.RandomRange)(-this.height / 2, this.height / 2),
          wm = (0, Am.RandomRange)(0, 2 * Math.PI),
          Dm = (0, Am.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          im = Math.sqrt(Dm) * this.radius,
          Rm = im * Math.cos(wm),
          pm = im * Math.sin(wm);
        am ? Tm.Z8(Rm, xm, pm) : hm.p.TransformCoordinatesFromFloatsToRef(Rm, xm, pm, mm, Tm)
      }
      clone() {
        const mm = new xm(this.radius, this.directionRandomizer);
        return am.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setFloat("radius", this.radius), mm.setFloat("height", this.height), mm.setFloat("radiusRange", this.radiusRange), mm.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(mm) {
        mm.addUniform("radius", 1), mm.addUniform("height", 1), mm.addUniform("radiusRange", 1), mm.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const mm = {};
        return mm.type = this.getClassName(), mm.radius = this.radius, mm.height = this.height, mm.radiusRange = this.radiusRange, mm.directionRandomizer = this.directionRandomizer, mm
      }
      parse(mm) {
        this.radius = mm.radius, this.height = mm.height, this.radiusRange = mm.radiusRange, this.directionRandomizer = mm.directionRandomizer
      }
    }
    class wm extends xm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new hm.p(0, 1, 0),
          am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new hm.p(0, 1, 0);
        super(mm, Tm, fm), this.direction1 = Am, this.direction2 = am
      }
      startDirectionFunction(mm, Tm, fm, am) {
        const xm = (0, Am.RandomRange)(this.direction1.x, this.direction2.x),
          wm = (0, Am.RandomRange)(this.direction1.y, this.direction2.y),
          Dm = (0, Am.RandomRange)(this.direction1.z, this.direction2.z);
        am ? Tm.Z8(xm, wm, Dm) : hm.p.TransformNormalFromFloatsToRef(xm, wm, Dm, mm, Tm)
      }
      clone() {
        const mm = new wm(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return am.c.DeepCopy(this, mm), mm
      }
      applyToShader(mm) {
        mm.setFloat("radius", this.radius), mm.setFloat("height", this.height), mm.setFloat("radiusRange", this.radiusRange), mm.setVector3("direction1", this.direction1), mm.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(mm) {
        mm.addUniform("radius", 1), mm.addUniform("height", 1), mm.addUniform("radiusRange", 1), mm.addUniform("direction1", 3), mm.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const mm = super.serialize();
        return mm.direction1 = this.direction1.ahm(), mm.direction2 = this.direction2.ahm(), mm
      }
      parse(mm) {
        super.parse(mm), hm.p.FromArrayToRef(mm.direction1, 0, this.direction1), hm.p.FromArrayToRef(mm.direction2, 0, this.direction2)
      }
    }
  },
  38887: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => pm
    });
    const hm = .5 * (Math.sqrt(3) - 1),
      Am = (3 - Math.sqrt(3)) / 6,
      am = 1 / 3,
      xm = 1 / 6,
      wm = (Math.sqrt(5) - 1) / 4,
      Dm = (5 - Math.sqrt(5)) / 20,
      im = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Rm = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const pm = class {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Tm = "function" == typeof mm ? mm : function(mm) {
          let Tm = 0,
            fm = 0,
            hm = 0,
            Am = 1;
          const am = function() {
            let mm = 4022871197;
            return function(Tm) {
              Tm = Tm.toString();
              for (let fm = 0; fm < Tm.length; fm++) {
                mm += Tm.charCodeAt(fm);
                let hm = .02519603282416938 * mm;
                mm = hm >>> 0, hm -= mm, hm *= mm, mm = hm >>> 0, hm -= mm, mm += 4294967296 * hm
              }
              return 2.3283064365386963e-10 * (mm >>> 0)
            }
          }();
          Tm = am(" "), fm = am(" "), hm = am(" "), Tm -= am(mm), Tm < 0 && (Tm += 1);
          fm -= am(mm), fm < 0 && (fm += 1);
          hm -= am(mm), hm < 0 && (hm += 1);
          return function() {
            const mm = 2091639 * Tm + 2.3283064365386963e-10 * Am;
            return Tm = fm, fm = hm, hm = mm - (Am = 0 | mm)
          }
        }(mm);
        this.p = function(mm) {
          const Tm = new Uint8Array(256);
          for (let fm = 0; fm < 256; fm++) Tm[fm] = fm;
          for (let fm = 0; fm < 255; fm++) {
            const hm = fm + ~~(mm() * (256 - fm)),
              Am = Tm[fm];
            Tm[fm] = Tm[hm], Tm[hm] = Am
          }
          return Tm
        }(Tm), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let fm = 0; fm < 512; fm++) this.perm[fm] = this.p[255 & fm], this.permMod12[fm] = this.perm[fm] % 12
      }
      noise2D(mm, Tm) {
        const fm = this.permMod12,
          am = this.perm;
        let xm = 0,
          wm = 0,
          Dm = 0;
        const Rm = (mm + Tm) * hm,
          pm = Math.floor(mm + Rm),
          Em = Math.floor(Tm + Rm),
          om = (pm + Em) * Am,
          Om = mm - (pm - om),
          Ym = Tm - (Em - om);
        let qm, jm;
        Om > Ym ? (qm = 1, jm = 0) : (qm = 0, jm = 1);
        const Vm = Om - qm + Am,
          Im = Ym - jm + Am,
          Km = Om - 1 + 2 * Am,
          Qm = Ym - 1 + 2 * Am,
          nm = 255 & pm,
          Jm = 255 & Em;
        let cm = .5 - Om * Om - Ym * Ym;
        if (cm >= 0) {
          const mm = 3 * fm[nm + am[Jm]];
          cm *= cm, xm = cm * cm * (im[mm] * Om + im[mm + 1] * Ym)
        }
        let zm = .5 - Vm * Vm - Im * Im;
        if (zm >= 0) {
          const mm = 3 * fm[nm + qm + am[Jm + jm]];
          zm *= zm, wm = zm * zm * (im[mm] * Vm + im[mm + 1] * Im)
        }
        let Zm = .5 - Km * Km - Qm * Qm;
        if (Zm >= 0) {
          const mm = 3 * fm[nm + 1 + am[Jm + 1]];
          Zm *= Zm, Dm = Zm * Zm * (im[mm] * Km + im[mm + 1] * Qm)
        }
        return 70 * (xm + wm + Dm)
      }
      noise3D(mm, Tm, fm) {
        const hm = this.permMod12,
          Am = this.perm;
        let wm, Dm, Rm, pm;
        const Em = (mm + Tm + fm) * am,
          om = Math.floor(mm + Em),
          Om = Math.floor(Tm + Em),
          Ym = Math.floor(fm + Em),
          qm = (om + Om + Ym) * xm,
          jm = mm - (om - qm),
          Vm = Tm - (Om - qm),
          Im = fm - (Ym - qm);
        let Km, Qm, nm, Jm, cm, zm;
        jm >= Vm ? Vm >= Im ? (Km = 1, Qm = 0, nm = 0, Jm = 1, cm = 1, zm = 0) : jm >= Im ? (Km = 1, Qm = 0, nm = 0, Jm = 1, cm = 0, zm = 1) : (Km = 0, Qm = 0, nm = 1, Jm = 1, cm = 0, zm = 1) : Vm < Im ? (Km = 0, Qm = 0, nm = 1, Jm = 0, cm = 1, zm = 1) : jm < Im ? (Km = 0, Qm = 1, nm = 0, Jm = 0, cm = 1, zm = 1) : (Km = 0, Qm = 1, nm = 0, Jm = 1, cm = 1, zm = 0);
        const Zm = jm - Km + xm,
          km = Vm - Qm + xm,
          bm = Im - nm + xm,
          Sm = jm - Jm + 2 * xm,
          em = Vm - cm + 2 * xm,
          Nm = Im - zm + 2 * xm,
          Gm = jm - 1 + .5,
          Xm = Vm - 1 + .5,
          Pm = Im - 1 + .5,
          Hm = 255 & om,
          ym = 255 & Om,
          Cm = 255 & Ym;
        let rm = .6 - jm * jm - Vm * Vm - Im * Im;
        if (rm < 0) wm = 0;
        else {
          const mm = 3 * hm[Hm + Am[ym + Am[Cm]]];
          rm *= rm, wm = rm * rm * (im[mm] * jm + im[mm + 1] * Vm + im[mm + 2] * Im)
        }
        let sm = .6 - Zm * Zm - km * km - bm * bm;
        if (sm < 0) Dm = 0;
        else {
          const mm = 3 * hm[Hm + Km + Am[ym + Qm + Am[Cm + nm]]];
          sm *= sm, Dm = sm * sm * (im[mm] * Zm + im[mm + 1] * km + im[mm + 2] * bm)
        }
        let lm = .6 - Sm * Sm - em * em - Nm * Nm;
        if (lm < 0) Rm = 0;
        else {
          const mm = 3 * hm[Hm + Jm + Am[ym + cm + Am[Cm + zm]]];
          lm *= lm, Rm = lm * lm * (im[mm] * Sm + im[mm + 1] * em + im[mm + 2] * Nm)
        }
        let Mm = .6 - Gm * Gm - Xm * Xm - Pm * Pm;
        if (Mm < 0) pm = 0;
        else {
          const mm = 3 * hm[Hm + 1 + Am[ym + 1 + Am[Cm + 1]]];
          Mm *= Mm, pm = Mm * Mm * (im[mm] * Gm + im[mm + 1] * Xm + im[mm + 2] * Pm)
        }
        return 32 * (wm + Dm + Rm + pm)
      }
      noise4D(mm, Tm, fm, hm) {
        const Am = this.perm;
        let am, xm, im, pm, Em;
        const om = (mm + Tm + fm + hm) * wm,
          Om = Math.floor(mm + om),
          Ym = Math.floor(Tm + om),
          qm = Math.floor(fm + om),
          jm = Math.floor(hm + om),
          Vm = (Om + Ym + qm + jm) * Dm,
          Im = mm - (Om - Vm),
          Km = Tm - (Ym - Vm),
          Qm = fm - (qm - Vm),
          nm = hm - (jm - Vm);
        let Jm = 0,
          cm = 0,
          zm = 0,
          Zm = 0;
        Im > Km ? Jm++ : cm++, Im > Qm ? Jm++ : zm++, Im > nm ? Jm++ : Zm++, Km > Qm ? cm++ : zm++, Km > nm ? cm++ : Zm++, Qm > nm ? zm++ : Zm++;
        const km = Jm >= 3 ? 1 : 0,
          bm = cm >= 3 ? 1 : 0,
          Sm = zm >= 3 ? 1 : 0,
          em = Zm >= 3 ? 1 : 0,
          Nm = Jm >= 2 ? 1 : 0,
          Gm = cm >= 2 ? 1 : 0,
          Xm = zm >= 2 ? 1 : 0,
          Pm = Zm >= 2 ? 1 : 0,
          Hm = Jm >= 1 ? 1 : 0,
          ym = cm >= 1 ? 1 : 0,
          Cm = zm >= 1 ? 1 : 0,
          rm = Zm >= 1 ? 1 : 0,
          sm = Im - km + Dm,
          lm = Km - bm + Dm,
          Mm = Qm - Sm + Dm,
          um = nm - em + Dm,
          Bm = Im - Nm + 2 * Dm,
          Lm = Km - Gm + 2 * Dm,
          tm = Qm - Xm + 2 * Dm,
          Um = nm - Pm + 2 * Dm,
          dm = Im - Hm + 3 * Dm,
          gm = Km - ym + 3 * Dm,
          Wm = Qm - Cm + 3 * Dm,
          Fm = nm - rm + 3 * Dm,
          mT = Im - 1 + 4 * Dm,
          TT = Km - 1 + 4 * Dm,
          fT = Qm - 1 + 4 * Dm,
          hT = nm - 1 + 4 * Dm,
          AT = 255 & Om,
          aT = 255 & Ym,
          xT = 255 & qm,
          wT = 255 & jm;
        let DT = .6 - Im * Im - Km * Km - Qm * Qm - nm * nm;
        if (DT < 0) am = 0;
        else {
          const mm = Am[AT + Am[aT + Am[xT + Am[wT]]]] % 32 * 4;
          DT *= DT, am = DT * DT * (Rm[mm] * Im + Rm[mm + 1] * Km + Rm[mm + 2] * Qm + Rm[mm + 3] * nm)
        }
        let iT = .6 - sm * sm - lm * lm - Mm * Mm - um * um;
        if (iT < 0) xm = 0;
        else {
          const mm = Am[AT + km + Am[aT + bm + Am[xT + Sm + Am[wT + em]]]] % 32 * 4;
          iT *= iT, xm = iT * iT * (Rm[mm] * sm + Rm[mm + 1] * lm + Rm[mm + 2] * Mm + Rm[mm + 3] * um)
        }
        let RT = .6 - Bm * Bm - Lm * Lm - tm * tm - Um * Um;
        if (RT < 0) im = 0;
        else {
          const mm = Am[AT + Nm + Am[aT + Gm + Am[xT + Xm + Am[wT + Pm]]]] % 32 * 4;
          RT *= RT, im = RT * RT * (Rm[mm] * Bm + Rm[mm + 1] * Lm + Rm[mm + 2] * tm + Rm[mm + 3] * Um)
        }
        let pT = .6 - dm * dm - gm * gm - Wm * Wm - Fm * Fm;
        if (pT < 0) pm = 0;
        else {
          const mm = Am[AT + Hm + Am[aT + ym + Am[xT + Cm + Am[wT + rm]]]] % 32 * 4;
          pT *= pT, pm = pT * pT * (Rm[mm] * dm + Rm[mm + 1] * gm + Rm[mm + 2] * Wm + Rm[mm + 3] * Fm)
        }
        let ET = .6 - mT * mT - TT * TT - fT * fT - hT * hT;
        if (ET < 0) Em = 0;
        else {
          const mm = Am[AT + 1 + Am[aT + 1 + Am[xT + 1 + Am[wT + 1]]]] % 32 * 4;
          ET *= ET, Em = ET * ET * (Rm[mm] * mT + Rm[mm + 1] * TT + Rm[mm + 2] * fT + Rm[mm + 3] * hT)
        }
        return 27 * (am + xm + im + pm + Em)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);