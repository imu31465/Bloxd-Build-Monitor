/*! For license information please see q3ynmh.213.46977574.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  39276: (uu, Ru, yu) => {
    uu.exports = Ku;
    var Eu = yu(352);

    function Ku(uu, Ru) {
      if (!(this instanceof Ku)) return new Ku(uu, Ru);
      var yu = Eu.create();
      Eu.add(yu, uu, Ru), this.base = Eu.min(Eu.create(), uu, yu), this.vec = Eu.clone(Ru), this.max = Eu.max(Eu.create(), uu, yu), this.mag = Eu.length(this.vec)
    }
    var Qu = Ku.prototype;
    Qu.width = function() {
      return this.vec[0]
    }, Qu.height = function() {
      return this.vec[1]
    }, Qu.depth = function() {
      return this.vec[2]
    }, Qu.x0 = function() {
      return this.base[0]
    }, Qu.y0 = function() {
      return this.base[1]
    }, Qu.z0 = function() {
      return this.base[2]
    }, Qu.x1 = function() {
      return this.max[0]
    }, Qu.y1 = function() {
      return this.max[1]
    }, Qu.z1 = function() {
      return this.max[2]
    }, Qu.translate = function(uu) {
      return Eu.add(this.max, this.max, uu), Eu.add(this.base, this.base, uu), this
    }, Qu.setPosition = function(uu) {
      return Eu.add(this.max, uu, this.vec), Eu.copy(this.base, uu), this
    }, Qu.expand = function(uu) {
      var Ru = Eu.create(),
        yu = Eu.create();
      return Eu.max(Ru, uu.max, this.max), Eu.min(yu, uu.base, this.base), Eu.subtract(Ru, Ru, yu), new Ku(yu, Ru)
    }, Qu.intersects = function(uu) {
      return !(uu.base[0] > this.max[0]) && (!(uu.base[1] > this.max[1]) && (!(uu.base[2] > this.max[2]) && (!(uu.max[0] < this.base[0]) && (!(uu.max[1] < this.base[1]) && !(uu.max[2] < this.base[2])))))
    }, Qu.touches = function(uu) {
      var Ru = this.union(uu);
      return null !== Ru && (0 == Ru.width() || 0 == Ru.height() || 0 == Ru.depth())
    }, Qu.union = function(uu) {
      if (!this.intersects(uu)) return null;
      var Ru = Math.max(uu.base[0], this.base[0]),
        yu = Math.max(uu.base[1], this.base[1]),
        Eu = Math.max(uu.base[2], this.base[2]);
      return new Ku([Ru, yu, Eu], [Math.min(uu.max[0], this.max[0]) - Ru, Math.min(uu.max[1], this.max[1]) - yu, Math.min(uu.max[2], this.max[2]) - Eu])
    }
  },
  39274: uu => {
    uu.exports = function(uu, Ru, yu, Eu, Ku, Qu) {
      var mu = +Ru[0],
        Ju = +Ru[1],
        Nu = +Ru[2],
        Xu = +yu[0],
        Vu = +yu[1],
        ru = +yu[2],
        Bu = Math.sqrt(Xu * Xu + Vu * Vu + ru * ru);
      if (0 === Bu) throw new Error("Can't raycast along a zero vector");
      return function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
        for (var Vu = 0, ru = Math.floor, Bu = 0 | ru(Ru), xu = 0 | ru(yu), Su = 0 | ru(Eu), pu = Ku > 0 ? 1 : -1, Tu = Qu > 0 ? 1 : -1, Wu = mu > 0 ? 1 : -1, ju = Math.abs(1 / Ku), Hu = Math.abs(1 / Qu), du = Math.abs(1 / mu), bu = ju < 1 / 0 ? ju * (pu > 0 ? Bu + 1 - Ru : Ru - Bu) : 1 / 0, Cu = Hu < 1 / 0 ? Hu * (Tu > 0 ? xu + 1 - yu : yu - xu) : 1 / 0, ku = du < 1 / 0 ? du * (Wu > 0 ? Su + 1 - Eu : Eu - Su) : 1 / 0, eu = -1; Vu <= Ju;) {
          var Au = uu(Bu, xu, Su);
          if (Au) return Nu && (Nu[0] = Ru + Vu * Ku, Nu[1] = yu + Vu * Qu, Nu[2] = Eu + Vu * mu), Xu && (Xu[0] = Xu[1] = Xu[2] = 0, 0 === eu && (Xu[0] = -pu), 1 === eu && (Xu[1] = -Tu), 2 === eu && (Xu[2] = -Wu)), Au;
          bu < Cu ? bu < ku ? (Bu += pu, Vu = bu, bu += ju, eu = 0) : (Su += Wu, Vu = ku, ku += du, eu = 2) : Cu < ku ? (xu += Tu, Vu = Cu, Cu += Hu, eu = 1) : (Su += Wu, Vu = ku, ku += du, eu = 2)
        }
        return Nu && (Nu[0] = Ru + Vu * Ku, Nu[1] = yu + Vu * Qu, Nu[2] = Eu + Vu * mu), Xu && (Xu[0] = Xu[1] = Xu[2] = 0), 0
      }(uu, mu, Ju, Nu, Xu /= Bu, Vu /= Bu, ru /= Bu, Eu = "undefined" === typeof Eu ? 64 : +Eu, Ku, Qu)
    }
  },
  38855: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      g: () => Qu
    });
    var Eu = yu(3895);
    let Ku = null;

    function Qu(uu) {
      return null !== Ku && uu === Ku
    }

    function mu() {
      this.vF = !1, this.stopPropagation = !1, this.Kw = !1, this.disabled = !1
    }
    class Ju {
      constructor(uu, Ru) {
        this.version = "0.7.0";
        var yu = Object.assign({}, new mu, Ru || {});
        this.element = uu || document, this.vF = !!yu.vF, this.stopPropagation = !!yu.stopPropagation, this.Kw = !!yu.Kw, this.disabled = !!yu.disabled, this.filterEvents = (uu, Ru) => !0, this.down = new Eu.EventEmitter, this.up = new Eu.EventEmitter, this.state = {}, this.Jw = {
          dx: 0,
          dy: 0,
          bRu: 0,
          CRu: 0,
          kRu: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Xu(this) : document.addEventListener("DOMContentLoaded", (uu => {
          Xu(this)
        }), {
          once: !0
        })
      }
      bind(uu) {
        for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Eu = 1; Eu < Ru; Eu++) yu[Eu - 1] = arguments[Eu];
        yu.forEach((Ru => {
          var yu = this._keyBindmap[Ru] || [];
          yu.includes(uu) || (yu.push(uu), this._keyBindmap[Ru] = yu)
        })), this.state[uu] = !!this.state[uu], this.pressCount[uu] = this.pressCount[uu] || 0, this.releaseCount[uu] = this.releaseCount[uu] || 0
      }
      unbind(uu) {
        for (var Ru in this._keyBindmap) {
          var yu = this._keyBindmap[Ru],
            Eu = yu.indexOf(uu);
          Eu > -1 && yu.splice(Eu, 1)
        }
      }
      getBindings() {
        var uu = {};
        for (var Ru in this._keyBindmap) {
          this._keyBindmap[Ru].forEach((yu => {
            uu[yu] = uu[yu] || [], uu[yu].push(Ru)
          }))
        }
        return uu
      }
      sr() {
        Nu(this.Jw), Nu(this.pressCount), Nu(this.releaseCount)
      }
    }

    function Nu(uu) {
      for (var Ru in uu) uu[Ru] = 0
    }

    function Xu(uu) {
      window.addEventListener("keydown", Tu.bind(null, uu, !0), !1), window.addEventListener("keyup", Tu.bind(null, uu, !1), !1);
      var Ru = {
        passive: !0
      };
      uu.element.addEventListener("touchstart", xu.bind(void 0, uu), {
        passive: !1
      }), uu.element.addEventListener("touchend", pu.bind(void 0, uu), Ru), uu.element.addEventListener("mousedown", Wu.bind(null, uu, !0), Ru), window.document.addEventListener("mouseup", Wu.bind(null, uu, !1), Ru), uu.element.addEventListener("touchmove", ju.bind(null, uu), Ru), uu.element.addEventListener("mousemove", ju.bind(null, uu), Ru), window.PointerEvent, uu.element.addEventListener("wheel", Hu.bind(null, uu), Ru), uu.element.addEventListener("contextmenu", du.bind(null, uu), !1), window.addEventListener("blur", ku.bind(null, uu), !1)
    }
    var Vu = 0,
      ru = 0,
      Bu = null;

    function xu(uu, Ru) {
      Ru.preventDefault(), Su(Ru)
    }

    function Su(uu) {
      let Ru = !1;
      for (let yu = 0; yu < uu.touches.length; ++yu)
        if (uu.touches[yu].identifier === Bu) {
          Ru = !0;
          break
        } if (!Ru) {
        const Ru = uu.changedTouches[0];
        Vu = Ru.clientX, ru = Ru.clientY, Bu = Ru.identifier
      }
    }

    function pu(uu, Ru) {
      for (var yu = Ru.changedTouches, Eu = 0; Eu < yu.length; ++Eu) yu[Eu].identifier === Bu && (Bu = null)
    }

    function Tu(uu, Ru, yu) {
      try {
        eu(uu, yu), Ru && yu.isTrusted && !yu.repeat && uu._keyStates[yu.code] && Au(uu, yu.code)
      } finally {
        Du(yu.code, Ru, uu, yu)
      }
    }

    function Wu(uu, Ru, yu) {
      try {
        eu(uu, yu)
      } finally {
        ! function(uu, Ru, yu) {
          if ("pointerId" in yu)
            if (Ru) {
              if (null !== uu._touches.currID) return;
              uu._touches.currID = yu.pointerId
            } else {
              if (uu._touches.currID !== yu.pointerId) return;
              uu._touches.currID = null
            } var Eu = "button" in yu ? yu.button + 1 : 1;
          Du("Mouse" + Eu, Ru, uu, yu)
        }(uu, Ru, yu)
      }
    }

    function ju(uu, Ru) {
      var yu = Ru.movementX || Ru.mozMovementX || 0,
        Eu = Ru.movementY || Ru.mozMovementY || 0;
      if (Ru.touches && 0 === (yu | Eu)) {
        var Ku = function(uu) {
          Su(uu);
          for (let Ru = 0; Ru < uu.changedTouches.length; ++Ru)
            if (uu.changedTouches[Ru].identifier == Bu) {
              const yu = uu.changedTouches[Ru],
                Eu = [yu.clientX - Vu, yu.clientY - ru];
              return Vu = yu.clientX, ru = yu.clientY, Eu
            } return console.error(`Did not find touch id ${Bu}`), [0, 0]
        }(Ru);
        yu = Ku[0], Eu = Ku[1]
      }
      uu.Jw.dx += yu, uu.Jw.dy += Eu
    }

    function Hu(uu, Ru) {
      eu(uu, Ru);
      var yu = 1;
      switch (Ru.deltaMode) {
        case 0:
          yu = 1;
          break;
        case 1:
          yu = 12;
          break;
        case 2:
          yu = uu.element.clientHeight || window.innerHeight
      }
      uu.Jw.bRu += (Ru.deltaX || 0) * yu, uu.Jw.CRu += (Ru.deltaY || 0) * yu, uu.Jw.kRu += (Ru.deltaZ || 0) * yu
    }

    function du(uu, Ru) {
      if (!uu.Kw) return Ru.preventDefault(), !1
    }
    var bu = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Cu(uu, Ru) {
      return !!uu[bu[Ru]] || ("AltRight" === Ru || "ControlLeft" === Ru) && "function" === typeof uu.getModifierState && !0 === uu.getModifierState("AltGraph")
    }

    function ku(uu, Ru) {
      for (var yu in uu._modifiersHeldThroughBlur = {}, bu) uu._keyStates[yu] && (uu._modifiersHeldThroughBlur[yu] = !0);
      Ru && Ru.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (uu) {
          return !0
        }
      }() && (clearTimeout(uu._blurRelease), uu._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Ru in uu._modifiersHeldThroughBlur = {}, uu._keyStates) uu._keyStates[Ru] && !/^Mouse\d/.test(Ru) && Au(uu, Ru)
      }), 0))
    }

    function eu(uu, Ru) {
      var yu = uu._modifiersHeldThroughBlur;
      if (yu && Ru.isTrusted && document.hasFocus())
        for (var Eu in yu) delete yu[Eu], uu._keyStates[Eu] && Eu !== Ru.code && (Cu(Ru, Eu) || Au(uu, Eu))
    }

    function Au(uu, Ru) {
      const yu = {
          code: Ru,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Eu = Ku;
      Ku = yu;
      try {
        Du(Ru, !1, uu, yu)
      } finally {
        Ku = Eu
      }
    }

    function Du(uu, Ru, yu, Eu) {
      var Ku = yu._keyBindmap[uu];
      Ku && (Mu(yu._keyStates[uu], Ru) && (yu._keyStates[uu] = Ru, Ku.forEach((uu => {
        (!yu.filterEvents || yu.filterEvents(Eu, uu)) && function(uu, Ru, yu, Eu) {
          var Ku = Ru ? yu.pressCount : yu.releaseCount;
          Ku[uu] = (Ku[uu] || 0) + 1;
          var Qu = yu._bindPressCount[uu] || 0;
          (Qu += Ru ? 1 : -1) < 0 && (Qu = 0);
          yu._bindPressCount[uu] = Qu;
          var mu = yu.state[uu];
          if (Mu(mu, Qu)) {
            yu.state[uu] = Qu > 0;
            var Ju = Ru ? yu.down : yu.up;
            yu.disabled || Ju.emit(uu, Eu)
          }
        }(uu, Ru, yu, Eu)
      }))), "button" in Eu || (yu.vF && !Eu.defaultPrevented && Eu.preventDefault(), yu.stopPropagation && Eu.stopPropagation()))
    }

    function Mu(uu, Ru) {
      return uu ? !Ru : Ru
    }
  },
  36381: (uu, Ru) => {
    function yu(uu) {
      if (uu && "object" === typeof uu) {
        var Ru = uu.which || uu.keyCode || uu.charCode;
        Ru && (uu = Ru)
      }
      if ("number" === typeof uu) return mu[uu];
      var yu, Qu = String(uu);
      return (yu = Eu[Qu.toLowerCase()]) ? yu : (yu = Ku[Qu.toLowerCase()]) || (1 === Qu.length ? Qu.charCodeAt(0) : void 0)
    }
    yu.isEventKey = function(uu, Ru) {
      if (uu && "object" === typeof uu) {
        var yu = uu.which || uu.keyCode || uu.charCode;
        if (null === yu || void 0 === yu) return !1;
        if ("string" === typeof Ru) {
          var Qu;
          if (Qu = Eu[Ru.toLowerCase()]) return Qu === yu;
          if (Qu = Ku[Ru.toLowerCase()]) return Qu === yu
        } else if ("number" === typeof Ru) return Ru === yu;
        return !1
      }
    };
    var Eu = (Ru = uu.exports = yu).code = Ru.codes = {
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
      Ku = Ru.aliases = {
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
    for (Qu = 97; Qu < 123; Qu++) Eu[String.fromCharCode(Qu)] = Qu - 32;
    for (var Qu = 48; Qu < 58; Qu++) Eu[Qu - 48] = Qu;
    for (Qu = 1; Qu < 13; Qu++) Eu["f" + Qu] = Qu + 111;
    for (Qu = 0; Qu < 10; Qu++) Eu["numpad " + Qu] = Qu + 96;
    var mu = Ru.names = Ru.title = {};
    for (Qu in Eu) mu[Eu[Qu]] = Qu;
    for (var Ju in Ku) Eu[Ju] = Ku[Ju]
  },
  39266: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.hG = !1, this.iG = !1, this.eD = 30, this.WG = 0, this.YG = 100, this.UT = !1, this.fullscreen = !1, this.vW = function(uu) {}, this.vG = function(uu, Ru, yu) {}, this.rU = function() {}, this.fW = function() {}, this.aG = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(uu) {}, this._data = new Ku(Ru),
          function(uu) {
            if ("loading" === document.readyState) {
              var Ru = () => {
                document.removeEventListener("readystatechange", Ru), uu()
              };
              document.addEventListener("readystatechange", Ru)
            } else setTimeout(uu, 0)
          }((() => {
            ! function(uu) {
              var Ru = uu._data,
                yu = Ru.nowObject.now();
              Ru.lastTickStarted = yu, Ru.lastFrameStarted = yu, Ru.lastRenderStarted = yu, Ru.frameCB = () => function(uu) {
                var Ru = uu._data;
                requestAnimationFrame(Ru.frameCB), Ju(uu);
                var yu = Ru.nowObject.now(),
                  Eu = yu - Ru.lastFrameStarted;
                if (Ru.lastFrameStarted = yu, uu.WG > 0) {
                  Ru.renderAccum += Eu;
                  var Ku = 1e3 / uu.WG;
                  if (Ru.renderAccum < Ku) return;
                  Ru.renderAccum -= Ku, Ru.renderAccum > Ku && (Ru.renderAccum = Ku)
                }
                var Qu = yu - Ru.lastRenderStarted;
                Ru.lastRenderStarted = yu;
                var mu = 1e3 / uu.eD,
                  Nu = (yu - Ru.lastTickStarted) / mu;
                Nu < 0 && (Nu = 0);
                uu.vG(Qu, Nu, mu), setTimeout(Ju, 0, uu, !0)
              }(uu), Ru.intervalCB = () => Ju(uu), requestAnimationFrame(Ru.frameCB), Ru.pollTime > 0 && (Ru.intervalID = setInterval(Ru.intervalCB, Math.max(Ru.pollTime, 1e3 / uu.eD / 2)))
            }(this),
            function(uu, Ru) {
              if (!Ru) return;
              var yu = !1,
                Eu = !1,
                Ku = uu => {
                  if (!!uu !== (yu = Ru === document.pointerLockElement))
                    if (uu) {
                      var Eu = Ru.requestPointerLock();
                      Eu && Eu.catch && Eu.catch((uu => {}))
                    } else document.exitPointerLock()
                },
                Qu = uu => {
                  !!uu !== (Eu = Ru === document.fullscreenElement) && (uu ? Ru.requestFullscreen ? Ru.requestFullscreen() : Ru.webkitRequestFullscreen && Ru.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Eu => {
                yu = Ru === document.pointerLockElement, uu.aG(yu)
              })), document.addEventListener("fullscreenchange", (yu => {
                Eu = Ru === document.fullscreenElement, uu.onFullscreenChanged(Eu)
              })), document.addEventListener("pointerlockerror", (Eu => {
                yu = Ru === document.pointerLockElement, uu.onPointerLockError(Eu)
              })), Object.defineProperty(uu, "UT", {
                get: () => yu,
                set: Ku
              }), Object.defineProperty(uu, "fullscreen", {
                get: () => Eu,
                set: Qu
              }), Ru.addEventListener("click", (Ru => {
                uu.hG && Ku(!0), uu.iG && Qu(!0)
              }));
              var mu = () => uu.fW();
              if (window.ResizeObserver) {
                new ResizeObserver(mu).observe(Ru)
              } else window.addEventListener("resize", mu)
            }(this, uu), this.rU()
          }))
      }
    }

    function Ku() {
      let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = uu, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Qu = 3,
      mu = 20;

    function Ju(uu) {
      for (var Ru = uu._data, yu = 1e3 / uu.eD, Eu = Ru.nowObject.now() + mu, Ku = 0; Ru.nowObject.now() >= Ru.lastTickStarted + yu && Ru.nowObject.now() < Eu && ++Ku <= Qu;) uu.vW(yu), Ru.lastTickStarted += yu;
      var Ju = 5 * (yu + 5),
        Nu = Ru.nowObject.now();
      if (Nu - Ru.lastTickStarted > Ju)
        for (; Nu >= Ru.lastTickStarted + yu;) Ru.lastTickStarted += yu
    }
  },
  36539: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(64);
    const Ku = Eu.useLayoutEffect;
    const Qu = function(uu) {
      var Ru = (0, Eu.useRef)(uu);
      return Ku((function() {
        Ru.current = uu
      })), Ru
    };
    var mu = function(uu) {
      var Ru = Qu(uu);
      (0, Eu.useEffect)((function() {
        var uu = function(uu) {
          var yu;
          if (null != Ru.current && (yu = Ru.current(uu)), uu.defaultPrevented && (uu.returnValue = ""), "string" === typeof yu) return uu.returnValue = yu, yu
        };
        return window.addEventListener("beforeunload", uu),
          function() {
            window.removeEventListener("beforeunload", uu)
          }
      }), [])
    }
  },
  36422: uu => {
    var Ru, yu = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Eu = /OS X/.test(yu),
      Ku = /Opera/.test(yu),
      Qu = !/like Gecko/.test(yu) && !Ku,
      mu = uu.exports = {
        0: Eu ? "<menu>" : "<UNK>",
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
        93: Eu ? "<meta>" : "<menu>",
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
        173: Eu && Qu ? "-" : "<volume-mute>",
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
        231: Ku ? "`" : "<unicode>",
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
    for (Ru = 58; Ru < 65; ++Ru) mu[Ru] = String.fromCharCode(Ru);
    for (Ru = 48; Ru < 58; ++Ru) mu[Ru] = Ru - 48 + "";
    for (Ru = 65; Ru < 91; ++Ru) mu[Ru] = String.fromCharCode(Ru);
    for (Ru = 96; Ru < 106; ++Ru) mu[Ru] = "<num-" + (Ru - 96) + ">";
    for (Ru = 112; Ru < 136; ++Ru) mu[Ru] = "F" + (Ru - 111)
  },
  38786: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu, Eu, Ku) {
      var Qu = {};
      return Object.keys(Eu).forEach((function(uu) {
        Qu[uu] = Eu[uu]
      })), Qu.enumerable = !!Qu.enumerable, Qu.configurable = !!Qu.configurable, ("value" in Qu || Qu.initializer) && (Qu.writable = !0), Qu = yu.slice().reverse().reduce((function(yu, Eu) {
        return Eu(uu, Ru, yu) || yu
      }), Qu), Ku && void 0 !== Qu.initializer && (Qu.value = Qu.initializer ? Qu.initializer.call(Ku) : void 0, Qu.initializer = void 0), void 0 === Qu.initializer && (Object.defineProperty(uu, Ru, Qu), Qu = null), Qu
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  38783: (uu, Ru, yu) => {
    function Eu(uu, Ru, yu, Eu) {
      yu && Object.defineProperty(uu, Ru, {
        enumerable: yu.enumerable,
        configurable: yu.configurable,
        writable: yu.writable,
        value: yu.initializer ? yu.initializer.call(Eu) : void 0
      })
    }
    yu.d(Ru, {
      c: () => Eu
    })
  },
  38444: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(38448);
    const Ku = (uu, Ru, yu) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : yu && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Ru) : null;
    class Qu {
      static DeepCopy(uu, Ru, yu, Qu) {
        let mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ju = function(uu) {
          const Ru = [];
          do {
            const yu = Object.getOwnPropertyNames(uu);
            for (const uu of yu) - 1 === Ru.indexOf(uu) && Ru.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Ru
        }(uu);
        for (const Xu of Ju) {
          if ("_" === Xu[0] && (!Qu || -1 === Qu.indexOf(Xu))) continue;
          if (Xu.endsWith("Observable")) continue;
          if (yu && -1 !== yu.indexOf(Xu)) continue;
          const Ju = uu[Xu],
            Vu = typeof Ju;
          if ("function" !== Vu) try {
            if ("object" === Vu)
              if (Ju instanceof Uint8Array) Ru[Xu] = Uint8Array.from(Ju);
              else if (Ju instanceof Array) {
              if (Ru[Xu] = [], Ju.length > 0)
                if ("object" == typeof Ju[0])
                  for (let uu = 0; uu < Ju.length; uu++) {
                    const yu = Ku(Ju[uu], Ru, mu); - 1 === Ru[Xu].indexOf(yu) && Ru[Xu].push(yu)
                  } else Ru[Xu] = Ju.slice(0)
            } else Ru[Xu] = Ku(Ju, Ru, mu);
            else Ru[Xu] = Ju
          } catch (Nu) {
            Eu.e.Warn(Nu.message)
          }
        }
      }
    }
  },
  38471: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ku,
      f: () => Qu,
      g: () => mu,
      i: () => Ju
    });
    var Eu = yu(36991);
    class Ku {
      constructor(uu, Ru, yu) {
        this.gradient = uu, this.color1 = Ru, this.color2 = yu
      }
      getColorToRef(uu) {
        this.color2 ? Eu.h.LerpToRef(this.color1, this.color2, Math.random(), uu) : uu.Oyu(this.color1)
      }
    }
    class Qu {
      constructor(uu, Ru) {
        this.gradient = uu, this.color = Ru
      }
    }
    class mu {
      constructor(uu, Ru, yu) {
        this.gradient = uu, this.factor1 = Ru, this.factor2 = yu
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class Ju {
      static GetCurrentGradient(uu, Ru, yu) {
        if (Ru[0].gradient > uu) return void yu(Ru[0], Ru[0], 1);
        for (let Ku = 0; Ku < Ru.length - 1; Ku++) {
          const Eu = Ru[Ku],
            Qu = Ru[Ku + 1];
          if (uu >= Eu.gradient && uu <= Qu.gradient) {
            return void yu(Eu, Qu, (uu - Eu.gradient) / (Qu.gradient - Eu.gradient))
          }
        }
        const Eu = Ru.length - 1;
        yu(Ru[Eu], Ru[Eu], 1)
      }
    }
  },
  38448: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static _CheckLimit(uu, Ru) {
        let yu = Eu._LogLimitOutputs[uu];
        return yu ? yu.current++ : (yu = {
          limit: Ru,
          current: 1
        }, Eu._LogLimitOutputs[uu] = yu), yu.current <= yu.limit
      }
      static _GenerateLimitMessage(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const yu = Eu._LogLimitOutputs[uu];
        if (!yu || !Eu.MessageLimitReached) return;
        const Ku = this._Levels[Ru];
        yu.current === yu.limit && Eu[Ku.name](Eu.MessageLimitReached.replace(/%LIMIT%/g, "" + yu.limit).replace(/%TYPE%/g, Ku.name ?? ""))
      }
      static _AddLogEntry(uu) {
        Eu._LogCache = uu + Eu._LogCache, Eu.OnNewCacheEntry && Eu.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Ru = uu => uu < 10 ? "0" + uu : "" + uu,
          yu = new Date;
        return "[" + Ru(yu.getHours()) + ":" + Ru(yu.getMinutes()) + ":" + Ru(yu.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Ru) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Ku = Array.isArray(Ru) ? Ru[0] : Ru;
        if (void 0 !== yu && !Eu._CheckLimit(Ku, yu)) return;
        const Qu = Eu._FormatMessage(Ku),
          mu = this._Levels[uu],
          Ju = Array.isArray(Ru) ? Ru.slice(1) : [];
        mu.logFunc && mu.logFunc("BJS - " + Qu, ...Ju);
        const Nu = `<div style='color:${mu.color}'>${Qu}</div><br>`;
        Eu._AddLogEntry(Nu), Eu._GenerateLimitMessage(Ku, uu)
      }
      static get LogCache() {
        return Eu._LogCache
      }
      static ClearLogCache() {
        Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu.errorsCount = 0
      }
      static set LogLevels(uu) {
        Eu.Log = Eu._LogDisabled, Eu.Warn = Eu._LogDisabled, Eu.Error = Eu._LogDisabled;
        const Ru = [Eu.MessageLogLevel, Eu.WarningLogLevel, Eu.ErrorLogLevel];
        for (const yu of Ru)
          if ((uu & yu) === yu) {
            const uu = this._Levels[yu];
            Eu[uu.name] = Eu._LogEnabled.bind(Eu, yu)
          }
      }
    }
    Eu.NoneLogLevel = 0, Eu.MessageLogLevel = 1, Eu.WarningLogLevel = 2, Eu.ErrorLogLevel = 4, Eu.AllLogLevel = 7, Eu.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu._Levels = [{}, {
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
    }], Eu.errorsCount = 0, Eu.Log = Eu._LogEnabled.bind(Eu, Eu.MessageLogLevel), Eu.Warn = Eu._LogEnabled.bind(Eu, Eu.WarningLogLevel), Eu.Error = Eu._LogEnabled.bind(Eu, Eu.ErrorLogLevel)
  },
  38479: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    var Eu = yu(36830),
      Ku = yu(36865),
      Qu = yu(38444);
    class mu {
      constructor() {
        this.direction1 = new Eu.p(0, 1, 0), this.direction2 = new Eu.p(0, 1, 0), this.minEmitBox = new Eu.p(-.5, -.5, -.5), this.maxEmitBox = new Eu.p(.5, .5, .5)
      }
      startDirectionFunction(uu, Ru, yu, Qu) {
        const mu = (0, Ku.RandomRange)(this.direction1.x, this.direction2.x),
          Ju = (0, Ku.RandomRange)(this.direction1.y, this.direction2.y),
          Nu = (0, Ku.RandomRange)(this.direction1.z, this.direction2.z);
        if (Qu) return Ru.x = mu, Ru.y = Ju, void(Ru.z = Nu);
        Eu.p.TransformNormalFromFloatsToRef(mu, Ju, Nu, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Qu) {
        const mu = (0, Ku.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          Ju = (0, Ku.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Nu = (0, Ku.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Qu) return Ru.x = mu, Ru.y = Ju, void(Ru.z = Nu);
        Eu.p.TransformCoordinatesFromFloatsToRef(mu, Ju, Nu, uu, Ru)
      }
      clone() {
        const uu = new mu;
        return Qu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2), uu.setVector3("minEmitBox", this.minEmitBox), uu.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(uu) {
        uu.addUniform("direction1", 3), uu.addUniform("direction2", 3), uu.addUniform("minEmitBox", 3), uu.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.direction1 = this.direction1.AEu(), uu.direction2 = this.direction2.AEu(), uu.minEmitBox = this.minEmitBox.AEu(), uu.maxEmitBox = this.maxEmitBox.AEu(), uu
      }
      parse(uu) {
        Eu.p.FromArrayToRef(uu.direction1, 0, this.direction1), Eu.p.FromArrayToRef(uu.direction2, 0, this.direction2), Eu.p.FromArrayToRef(uu.minEmitBox, 0, this.minEmitBox), Eu.p.FromArrayToRef(uu.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38440: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ju,
      h: () => mu
    });
    var Eu = yu(36830),
      Ku = yu(36865),
      Qu = yu(38444);
    class mu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = uu, this.height = Ru, this.radiusRange = yu, this.directionRandomizer = Ku, this._tempVector = Eu.p.Zero()
      }
      startDirectionFunction(uu, Ru, yu, Qu, mu) {
        yu.position.subtractToRef(uu.getTranslation(), this._tempVector), this._tempVector.normalize(), Eu.p.TransformNormalToRef(this._tempVector, mu, this._tempVector);
        const Ju = (0, Ku.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Nu = Math.atan2(this._tempVector.x, this._tempVector.z);
        Nu += (0, Ku.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = Ju, this._tempVector.x = Math.sin(Nu), this._tempVector.z = Math.cos(Nu), this._tempVector.normalize(), Qu ? Ru.Oyu(this._tempVector) : Eu.p.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, uu, Ru)
      }
      startPositionFunction(uu, Ru, yu, Qu) {
        const mu = (0, Ku.RandomRange)(-this.height / 2, this.height / 2),
          Ju = (0, Ku.RandomRange)(0, 2 * Math.PI),
          Nu = (0, Ku.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Xu = Math.sqrt(Nu) * this.radius,
          Vu = Xu * Math.cos(Ju),
          ru = Xu * Math.sin(Ju);
        Qu ? Ru.muu(Vu, mu, ru) : Eu.p.TransformCoordinatesFromFloatsToRef(Vu, mu, ru, uu, Ru)
      }
      clone() {
        const uu = new mu(this.radius, this.directionRandomizer);
        return Qu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("height", this.height), uu.setFloat("radiusRange", this.radiusRange), uu.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("height", 1), uu.addUniform("radiusRange", 1), uu.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const uu = {};
        return uu.type = this.getClassName(), uu.radius = this.radius, uu.height = this.height, uu.radiusRange = this.radiusRange, uu.directionRandomizer = this.directionRandomizer, uu
      }
      parse(uu) {
        this.radius = uu.radius, this.height = uu.height, this.radiusRange = uu.radiusRange, this.directionRandomizer = uu.directionRandomizer
      }
    }
    class Ju extends mu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          Ku = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Eu.p(0, 1, 0),
          Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Eu.p(0, 1, 0);
        super(uu, Ru, yu), this.direction1 = Ku, this.direction2 = Qu
      }
      startDirectionFunction(uu, Ru, yu, Qu) {
        const mu = (0, Ku.RandomRange)(this.direction1.x, this.direction2.x),
          Ju = (0, Ku.RandomRange)(this.direction1.y, this.direction2.y),
          Nu = (0, Ku.RandomRange)(this.direction1.z, this.direction2.z);
        Qu ? Ru.muu(mu, Ju, Nu) : Eu.p.TransformNormalFromFloatsToRef(mu, Ju, Nu, uu, Ru)
      }
      clone() {
        const uu = new Ju(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Qu.e.DeepCopy(this, uu), uu
      }
      applyToShader(uu) {
        uu.setFloat("radius", this.radius), uu.setFloat("height", this.height), uu.setFloat("radiusRange", this.radiusRange), uu.setVector3("direction1", this.direction1), uu.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(uu) {
        uu.addUniform("radius", 1), uu.addUniform("height", 1), uu.addUniform("radiusRange", 1), uu.addUniform("direction1", 3), uu.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const uu = super.serialize();
        return uu.direction1 = this.direction1.AEu(), uu.direction2 = this.direction2.AEu(), uu
      }
      parse(uu) {
        super.parse(uu), Eu.p.FromArrayToRef(uu.direction1, 0, this.direction1), Eu.p.FromArrayToRef(uu.direction2, 0, this.direction2)
      }
    }
  },
  38553: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => ru
    });
    const Eu = .5 * (Math.sqrt(3) - 1),
      Ku = (3 - Math.sqrt(3)) / 6,
      Qu = 1 / 3,
      mu = 1 / 6,
      Ju = (Math.sqrt(5) - 1) / 4,
      Nu = (5 - Math.sqrt(5)) / 20,
      Xu = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Vu = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const ru = class {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Ru = "function" == typeof uu ? uu : function(uu) {
          let Ru = 0,
            yu = 0,
            Eu = 0,
            Ku = 1;
          const Qu = function() {
            let uu = 4022871197;
            return function(Ru) {
              Ru = Ru.toString();
              for (let yu = 0; yu < Ru.length; yu++) {
                uu += Ru.charCodeAt(yu);
                let Eu = .02519603282416938 * uu;
                uu = Eu >>> 0, Eu -= uu, Eu *= uu, uu = Eu >>> 0, Eu -= uu, uu += 4294967296 * Eu
              }
              return 2.3283064365386963e-10 * (uu >>> 0)
            }
          }();
          Ru = Qu(" "), yu = Qu(" "), Eu = Qu(" "), Ru -= Qu(uu), Ru < 0 && (Ru += 1);
          yu -= Qu(uu), yu < 0 && (yu += 1);
          Eu -= Qu(uu), Eu < 0 && (Eu += 1);
          return function() {
            const uu = 2091639 * Ru + 2.3283064365386963e-10 * Ku;
            return Ru = yu, yu = Eu, Eu = uu - (Ku = 0 | uu)
          }
        }(uu);
        this.p = function(uu) {
          const Ru = new Uint8Array(256);
          for (let yu = 0; yu < 256; yu++) Ru[yu] = yu;
          for (let yu = 0; yu < 255; yu++) {
            const Eu = yu + ~~(uu() * (256 - yu)),
              Ku = Ru[yu];
            Ru[yu] = Ru[Eu], Ru[Eu] = Ku
          }
          return Ru
        }(Ru), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let yu = 0; yu < 512; yu++) this.perm[yu] = this.p[255 & yu], this.permMod12[yu] = this.perm[yu] % 12
      }
      noise2D(uu, Ru) {
        const yu = this.permMod12,
          Qu = this.perm;
        let mu = 0,
          Ju = 0,
          Nu = 0;
        const Vu = (uu + Ru) * Eu,
          ru = Math.floor(uu + Vu),
          Bu = Math.floor(Ru + Vu),
          xu = (ru + Bu) * Ku,
          Su = uu - (ru - xu),
          pu = Ru - (Bu - xu);
        let Tu, Wu;
        Su > pu ? (Tu = 1, Wu = 0) : (Tu = 0, Wu = 1);
        const ju = Su - Tu + Ku,
          Hu = pu - Wu + Ku,
          du = Su - 1 + 2 * Ku,
          bu = pu - 1 + 2 * Ku,
          Cu = 255 & ru,
          ku = 255 & Bu;
        let eu = .5 - Su * Su - pu * pu;
        if (eu >= 0) {
          const uu = 3 * yu[Cu + Qu[ku]];
          eu *= eu, mu = eu * eu * (Xu[uu] * Su + Xu[uu + 1] * pu)
        }
        let Au = .5 - ju * ju - Hu * Hu;
        if (Au >= 0) {
          const uu = 3 * yu[Cu + Tu + Qu[ku + Wu]];
          Au *= Au, Ju = Au * Au * (Xu[uu] * ju + Xu[uu + 1] * Hu)
        }
        let Du = .5 - du * du - bu * bu;
        if (Du >= 0) {
          const uu = 3 * yu[Cu + 1 + Qu[ku + 1]];
          Du *= Du, Nu = Du * Du * (Xu[uu] * du + Xu[uu + 1] * bu)
        }
        return 70 * (mu + Ju + Nu)
      }
      noise3D(uu, Ru, yu) {
        const Eu = this.permMod12,
          Ku = this.perm;
        let Ju, Nu, Vu, ru;
        const Bu = (uu + Ru + yu) * Qu,
          xu = Math.floor(uu + Bu),
          Su = Math.floor(Ru + Bu),
          pu = Math.floor(yu + Bu),
          Tu = (xu + Su + pu) * mu,
          Wu = uu - (xu - Tu),
          ju = Ru - (Su - Tu),
          Hu = yu - (pu - Tu);
        let du, bu, Cu, ku, eu, Au;
        Wu >= ju ? ju >= Hu ? (du = 1, bu = 0, Cu = 0, ku = 1, eu = 1, Au = 0) : Wu >= Hu ? (du = 1, bu = 0, Cu = 0, ku = 1, eu = 0, Au = 1) : (du = 0, bu = 0, Cu = 1, ku = 1, eu = 0, Au = 1) : ju < Hu ? (du = 0, bu = 0, Cu = 1, ku = 0, eu = 1, Au = 1) : Wu < Hu ? (du = 0, bu = 1, Cu = 0, ku = 0, eu = 1, Au = 1) : (du = 0, bu = 1, Cu = 0, ku = 1, eu = 1, Au = 0);
        const Du = Wu - du + mu,
          Mu = ju - bu + mu,
          Iu = Hu - Cu + mu,
          Gu = Wu - ku + 2 * mu,
          Uu = ju - eu + 2 * mu,
          nu = Hu - Au + 2 * mu,
          su = Wu - 1 + .5,
          tu = ju - 1 + .5,
          lu = Hu - 1 + .5,
          gu = 255 & xu,
          cu = 255 & Su,
          Lu = 255 & pu;
        let zu = .6 - Wu * Wu - ju * ju - Hu * Hu;
        if (zu < 0) Ju = 0;
        else {
          const uu = 3 * Eu[gu + Ku[cu + Ku[Lu]]];
          zu *= zu, Ju = zu * zu * (Xu[uu] * Wu + Xu[uu + 1] * ju + Xu[uu + 2] * Hu)
        }
        let Fu = .6 - Du * Du - Mu * Mu - Iu * Iu;
        if (Fu < 0) Nu = 0;
        else {
          const uu = 3 * Eu[gu + du + Ku[cu + bu + Ku[Lu + Cu]]];
          Fu *= Fu, Nu = Fu * Fu * (Xu[uu] * Du + Xu[uu + 1] * Mu + Xu[uu + 2] * Iu)
        }
        let wu = .6 - Gu * Gu - Uu * Uu - nu * nu;
        if (wu < 0) Vu = 0;
        else {
          const uu = 3 * Eu[gu + ku + Ku[cu + eu + Ku[Lu + Au]]];
          wu *= wu, Vu = wu * wu * (Xu[uu] * Gu + Xu[uu + 1] * Uu + Xu[uu + 2] * nu)
        }
        let Zu = .6 - su * su - tu * tu - lu * lu;
        if (Zu < 0) ru = 0;
        else {
          const uu = 3 * Eu[gu + 1 + Ku[cu + 1 + Ku[Lu + 1]]];
          Zu *= Zu, ru = Zu * Zu * (Xu[uu] * su + Xu[uu + 1] * tu + Xu[uu + 2] * lu)
        }
        return 32 * (Ju + Nu + Vu + ru)
      }
      noise4D(uu, Ru, yu, Eu) {
        const Ku = this.perm;
        let Qu, mu, Xu, ru, Bu;
        const xu = (uu + Ru + yu + Eu) * Ju,
          Su = Math.floor(uu + xu),
          pu = Math.floor(Ru + xu),
          Tu = Math.floor(yu + xu),
          Wu = Math.floor(Eu + xu),
          ju = (Su + pu + Tu + Wu) * Nu,
          Hu = uu - (Su - ju),
          du = Ru - (pu - ju),
          bu = yu - (Tu - ju),
          Cu = Eu - (Wu - ju);
        let ku = 0,
          eu = 0,
          Au = 0,
          Du = 0;
        Hu > du ? ku++ : eu++, Hu > bu ? ku++ : Au++, Hu > Cu ? ku++ : Du++, du > bu ? eu++ : Au++, du > Cu ? eu++ : Du++, bu > Cu ? Au++ : Du++;
        const Mu = ku >= 3 ? 1 : 0,
          Iu = eu >= 3 ? 1 : 0,
          Gu = Au >= 3 ? 1 : 0,
          Uu = Du >= 3 ? 1 : 0,
          nu = ku >= 2 ? 1 : 0,
          su = eu >= 2 ? 1 : 0,
          tu = Au >= 2 ? 1 : 0,
          lu = Du >= 2 ? 1 : 0,
          gu = ku >= 1 ? 1 : 0,
          cu = eu >= 1 ? 1 : 0,
          Lu = Au >= 1 ? 1 : 0,
          zu = Du >= 1 ? 1 : 0,
          Fu = Hu - Mu + Nu,
          wu = du - Iu + Nu,
          Zu = bu - Gu + Nu,
          hu = Cu - Uu + Nu,
          Pu = Hu - nu + 2 * Nu,
          iu = du - su + 2 * Nu,
          Yu = bu - tu + 2 * Nu,
          ou = Cu - lu + 2 * Nu,
          qu = Hu - gu + 3 * Nu,
          Ou = du - cu + 3 * Nu,
          vu = bu - Lu + 3 * Nu,
          au = Cu - zu + 3 * Nu,
          fu = Hu - 1 + 4 * Nu,
          uR = du - 1 + 4 * Nu,
          RR = bu - 1 + 4 * Nu,
          yR = Cu - 1 + 4 * Nu,
          ER = 255 & Su,
          KR = 255 & pu,
          QR = 255 & Tu,
          mR = 255 & Wu;
        let JR = .6 - Hu * Hu - du * du - bu * bu - Cu * Cu;
        if (JR < 0) Qu = 0;
        else {
          const uu = Ku[ER + Ku[KR + Ku[QR + Ku[mR]]]] % 32 * 4;
          JR *= JR, Qu = JR * JR * (Vu[uu] * Hu + Vu[uu + 1] * du + Vu[uu + 2] * bu + Vu[uu + 3] * Cu)
        }
        let NR = .6 - Fu * Fu - wu * wu - Zu * Zu - hu * hu;
        if (NR < 0) mu = 0;
        else {
          const uu = Ku[ER + Mu + Ku[KR + Iu + Ku[QR + Gu + Ku[mR + Uu]]]] % 32 * 4;
          NR *= NR, mu = NR * NR * (Vu[uu] * Fu + Vu[uu + 1] * wu + Vu[uu + 2] * Zu + Vu[uu + 3] * hu)
        }
        let XR = .6 - Pu * Pu - iu * iu - Yu * Yu - ou * ou;
        if (XR < 0) Xu = 0;
        else {
          const uu = Ku[ER + nu + Ku[KR + su + Ku[QR + tu + Ku[mR + lu]]]] % 32 * 4;
          XR *= XR, Xu = XR * XR * (Vu[uu] * Pu + Vu[uu + 1] * iu + Vu[uu + 2] * Yu + Vu[uu + 3] * ou)
        }
        let VR = .6 - qu * qu - Ou * Ou - vu * vu - au * au;
        if (VR < 0) ru = 0;
        else {
          const uu = Ku[ER + gu + Ku[KR + cu + Ku[QR + Lu + Ku[mR + zu]]]] % 32 * 4;
          VR *= VR, ru = VR * VR * (Vu[uu] * qu + Vu[uu + 1] * Ou + Vu[uu + 2] * vu + Vu[uu + 3] * au)
        }
        let rR = .6 - fu * fu - uR * uR - RR * RR - yR * yR;
        if (rR < 0) Bu = 0;
        else {
          const uu = Ku[ER + 1 + Ku[KR + 1 + Ku[QR + 1 + Ku[mR + 1]]]] % 32 * 4;
          rR *= rR, Bu = rR * rR * (Vu[uu] * fu + Vu[uu + 1] * uR + Vu[uu + 2] * RR + Vu[uu + 3] * yR)
        }
        return 27 * (Qu + mu + Xu + ru + Bu)
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);