/*! For license information please see 6ndy1f.213.19c95412.chunk.js.LICENSE.txt */
export const id = 213;
export const ids = [213];
export const modules = {
  39133: (kk, Fk, Bk) => {
    kk.exports = tk;
    var Rk = Bk(302);

    function tk(kk, Fk) {
      if (!(this instanceof tk)) return new tk(kk, Fk);
      var Bk = Rk.create();
      Rk.add(Bk, kk, Fk), this.base = Rk.min(Rk.create(), kk, Bk), this.vec = Rk.clone(Fk), this.max = Rk.max(Rk.create(), kk, Bk), this.mag = Rk.length(this.vec)
    }
    var ak = tk.prototype;
    ak.width = function() {
      return this.vec[0]
    }, ak.height = function() {
      return this.vec[1]
    }, ak.depth = function() {
      return this.vec[2]
    }, ak.x0 = function() {
      return this.base[0]
    }, ak.y0 = function() {
      return this.base[1]
    }, ak.z0 = function() {
      return this.base[2]
    }, ak.x1 = function() {
      return this.max[0]
    }, ak.y1 = function() {
      return this.max[1]
    }, ak.z1 = function() {
      return this.max[2]
    }, ak.translate = function(kk) {
      return Rk.add(this.max, this.max, kk), Rk.add(this.base, this.base, kk), this
    }, ak.setPosition = function(kk) {
      return Rk.add(this.max, kk, this.vec), Rk.copy(this.base, kk), this
    }, ak.expand = function(kk) {
      var Fk = Rk.create(),
        Bk = Rk.create();
      return Rk.max(Fk, kk.max, this.max), Rk.min(Bk, kk.base, this.base), Rk.subtract(Fk, Fk, Bk), new tk(Bk, Fk)
    }, ak.intersects = function(kk) {
      return !(kk.base[0] > this.max[0]) && (!(kk.base[1] > this.max[1]) && (!(kk.base[2] > this.max[2]) && (!(kk.max[0] < this.base[0]) && (!(kk.max[1] < this.base[1]) && !(kk.max[2] < this.base[2])))))
    }, ak.touches = function(kk) {
      var Fk = this.union(kk);
      return null !== Fk && (0 == Fk.width() || 0 == Fk.height() || 0 == Fk.depth())
    }, ak.union = function(kk) {
      if (!this.intersects(kk)) return null;
      var Fk = Math.max(kk.base[0], this.base[0]),
        Bk = Math.max(kk.base[1], this.base[1]),
        Rk = Math.max(kk.base[2], this.base[2]);
      return new tk([Fk, Bk, Rk], [Math.min(kk.max[0], this.max[0]) - Fk, Math.min(kk.max[1], this.max[1]) - Bk, Math.min(kk.max[2], this.max[2]) - Rk])
    }
  },
  39130: kk => {
    kk.exports = function(kk, Fk, Bk, Rk, tk, ak) {
      var Xk = +Fk[0],
        bk = +Fk[1],
        wk = +Fk[2],
        dk = +Bk[0],
        sk = +Bk[1],
        Vk = +Bk[2],
        Jk = Math.sqrt(dk * dk + sk * sk + Vk * Vk);
      if (0 === Jk) throw new Error("Can't raycast along a zero vector");
      return function(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
        for (var sk = 0, Vk = Math.floor, Jk = 0 | Vk(Fk), Ak = 0 | Vk(Bk), ek = 0 | Vk(Rk), yk = tk > 0 ? 1 : -1, fk = ak > 0 ? 1 : -1, mk = Xk > 0 ? 1 : -1, Wk = Math.abs(1 / tk), vk = Math.abs(1 / ak), ik = Math.abs(1 / Xk), Yk = Wk < 1 / 0 ? Wk * (yk > 0 ? Jk + 1 - Fk : Fk - Jk) : 1 / 0, Lk = vk < 1 / 0 ? vk * (fk > 0 ? Ak + 1 - Bk : Bk - Ak) : 1 / 0, Ok = ik < 1 / 0 ? ik * (mk > 0 ? ek + 1 - Rk : Rk - ek) : 1 / 0, Ek = -1; sk <= bk;) {
          var Sk = kk(Jk, Ak, ek);
          if (Sk) return wk && (wk[0] = Fk + sk * tk, wk[1] = Bk + sk * ak, wk[2] = Rk + sk * Xk), dk && (dk[0] = dk[1] = dk[2] = 0, 0 === Ek && (dk[0] = -yk), 1 === Ek && (dk[1] = -fk), 2 === Ek && (dk[2] = -mk)), Sk;
          Yk < Lk ? Yk < Ok ? (Jk += yk, sk = Yk, Yk += Wk, Ek = 0) : (ek += mk, sk = Ok, Ok += ik, Ek = 2) : Lk < Ok ? (Ak += fk, sk = Lk, Lk += vk, Ek = 1) : (ek += mk, sk = Ok, Ok += ik, Ek = 2)
        }
        return wk && (wk[0] = Fk + sk * tk, wk[1] = Bk + sk * ak, wk[2] = Rk + sk * Xk), dk && (dk[0] = dk[1] = dk[2] = 0), 0
      }(kk, Xk, bk, wk, dk /= Jk, sk /= Jk, Vk /= Jk, Rk = "undefined" === typeof Rk ? 64 : +Rk, tk, ak)
    }
  },
  38738: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk,
      h: () => ak
    });
    var Rk = Bk(3852);
    let tk = null;

    function ak(kk) {
      return null !== tk && kk === tk
    }

    function Xk() {
      this.pD = !1, this.stopPropagation = !1, this.jD = !1, this.disabled = !1
    }
    class bk {
      constructor(kk, Fk) {
        this.version = "0.7.0";
        var Bk = Object.assign({}, new Xk, Fk || {});
        this.element = kk || document, this.pD = !!Bk.pD, this.stopPropagation = !!Bk.stopPropagation, this.jD = !!Bk.jD, this.disabled = !!Bk.disabled, this.filterEvents = (kk, Fk) => !0, this.down = new Rk.EventEmitter, this.up = new Rk.EventEmitter, this.state = {}, this.nD = {
          dx: 0,
          dy: 0,
          Dkk: 0,
          zkk: 0,
          Pkk: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? dk(this) : document.addEventListener("DOMContentLoaded", (kk => {
          dk(this)
        }), {
          once: !0
        })
      }
      bind(kk) {
        for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), Rk = 1; Rk < Fk; Rk++) Bk[Rk - 1] = arguments[Rk];
        Bk.forEach((Fk => {
          var Bk = this._keyBindmap[Fk] || [];
          Bk.includes(kk) || (Bk.push(kk), this._keyBindmap[Fk] = Bk)
        })), this.state[kk] = !!this.state[kk], this.pressCount[kk] = this.pressCount[kk] || 0, this.releaseCount[kk] = this.releaseCount[kk] || 0
      }
      unbind(kk) {
        for (var Fk in this._keyBindmap) {
          var Bk = this._keyBindmap[Fk],
            Rk = Bk.indexOf(kk);
          Rk > -1 && Bk.splice(Rk, 1)
        }
      }
      getBindings() {
        var kk = {};
        for (var Fk in this._keyBindmap) {
          this._keyBindmap[Fk].forEach((Bk => {
            kk[Bk] = kk[Bk] || [], kk[Bk].push(Fk)
          }))
        }
        return kk
      }
      yJ() {
        wk(this.nD), wk(this.pressCount), wk(this.releaseCount)
      }
    }

    function wk(kk) {
      for (var Fk in kk) kk[Fk] = 0
    }

    function dk(kk) {
      window.addEventListener("keydown", fk.bind(null, kk, !0), !1), window.addEventListener("keyup", fk.bind(null, kk, !1), !1);
      var Fk = {
        passive: !0
      };
      kk.element.addEventListener("touchstart", Ak.bind(void 0, kk), {
        passive: !1
      }), kk.element.addEventListener("touchend", yk.bind(void 0, kk), Fk), kk.element.addEventListener("mousedown", mk.bind(null, kk, !0), Fk), window.document.addEventListener("mouseup", mk.bind(null, kk, !1), Fk), kk.element.addEventListener("touchmove", Wk.bind(null, kk), Fk), kk.element.addEventListener("mousemove", Wk.bind(null, kk), Fk), window.PointerEvent, kk.element.addEventListener("wheel", vk.bind(null, kk), Fk), kk.element.addEventListener("contextmenu", ik.bind(null, kk), !1), window.addEventListener("blur", Ok.bind(null, kk), !1)
    }
    var sk = 0,
      Vk = 0,
      Jk = null;

    function Ak(kk, Fk) {
      Fk.preventDefault(), ek(Fk)
    }

    function ek(kk) {
      let Fk = !1;
      for (let Bk = 0; Bk < kk.touches.length; ++Bk)
        if (kk.touches[Bk].identifier === Jk) {
          Fk = !0;
          break
        } if (!Fk) {
        const Fk = kk.changedTouches[0];
        sk = Fk.clientX, Vk = Fk.clientY, Jk = Fk.identifier
      }
    }

    function yk(kk, Fk) {
      for (var Bk = Fk.changedTouches, Rk = 0; Rk < Bk.length; ++Rk) Bk[Rk].identifier === Jk && (Jk = null)
    }

    function fk(kk, Fk, Bk) {
      try {
        Ek(kk, Bk), Fk && Bk.isTrusted && !Bk.repeat && kk._keyStates[Bk.code] && Sk(kk, Bk.code)
      } finally {
        Nk(Bk.code, Fk, kk, Bk)
      }
    }

    function mk(kk, Fk, Bk) {
      try {
        Ek(kk, Bk)
      } finally {
        ! function(kk, Fk, Bk) {
          if ("pointerId" in Bk)
            if (Fk) {
              if (null !== kk._touches.currID) return;
              kk._touches.currID = Bk.pointerId
            } else {
              if (kk._touches.currID !== Bk.pointerId) return;
              kk._touches.currID = null
            } var Rk = "button" in Bk ? Bk.button + 1 : 1;
          Nk("Mouse" + Rk, Fk, kk, Bk)
        }(kk, Fk, Bk)
      }
    }

    function Wk(kk, Fk) {
      var Bk = Fk.movementX || Fk.mozMovementX || 0,
        Rk = Fk.movementY || Fk.mozMovementY || 0;
      if (Fk.touches && 0 === (Bk | Rk)) {
        var tk = function(kk) {
          ek(kk);
          for (let Fk = 0; Fk < kk.changedTouches.length; ++Fk)
            if (kk.changedTouches[Fk].identifier == Jk) {
              const Bk = kk.changedTouches[Fk],
                Rk = [Bk.clientX - sk, Bk.clientY - Vk];
              return sk = Bk.clientX, Vk = Bk.clientY, Rk
            } return console.error(`Did not find touch id ${Jk}`), [0, 0]
        }(Fk);
        Bk = tk[0], Rk = tk[1]
      }
      kk.nD.dx += Bk, kk.nD.dy += Rk
    }

    function vk(kk, Fk) {
      Ek(kk, Fk);
      var Bk = 1;
      switch (Fk.deltaMode) {
        case 0:
          Bk = 1;
          break;
        case 1:
          Bk = 12;
          break;
        case 2:
          Bk = kk.element.clientHeight || window.innerHeight
      }
      kk.nD.Dkk += (Fk.deltaX || 0) * Bk, kk.nD.zkk += (Fk.deltaY || 0) * Bk, kk.nD.Pkk += (Fk.deltaZ || 0) * Bk
    }

    function ik(kk, Fk) {
      if (!kk.jD) return Fk.preventDefault(), !1
    }
    var Yk = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function Lk(kk, Fk) {
      return !!kk[Yk[Fk]] || ("AltRight" === Fk || "ControlLeft" === Fk) && "function" === typeof kk.getModifierState && !0 === kk.getModifierState("AltGraph")
    }

    function Ok(kk, Fk) {
      for (var Bk in kk._modifiersHeldThroughBlur = {}, Yk) kk._keyStates[Bk] && (kk._modifiersHeldThroughBlur[Bk] = !0);
      Fk && Fk.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (kk) {
          return !0
        }
      }() && (clearTimeout(kk._blurRelease), kk._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var Fk in kk._modifiersHeldThroughBlur = {}, kk._keyStates) kk._keyStates[Fk] && !/^Mouse\d/.test(Fk) && Sk(kk, Fk)
      }), 0))
    }

    function Ek(kk, Fk) {
      var Bk = kk._modifiersHeldThroughBlur;
      if (Bk && Fk.isTrusted && document.hasFocus())
        for (var Rk in Bk) delete Bk[Rk], kk._keyStates[Rk] && Rk !== Fk.code && (Lk(Fk, Rk) || Sk(kk, Rk))
    }

    function Sk(kk, Fk) {
      const Bk = {
          code: Fk,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Rk = tk;
      tk = Bk;
      try {
        Nk(Fk, !1, kk, Bk)
      } finally {
        tk = Rk
      }
    }

    function Nk(kk, Fk, Bk, Rk) {
      var tk = Bk._keyBindmap[kk];
      tk && (Hk(Bk._keyStates[kk], Fk) && (Bk._keyStates[kk] = Fk, tk.forEach((kk => {
        (!Bk.filterEvents || Bk.filterEvents(Rk, kk)) && function(kk, Fk, Bk, Rk) {
          var tk = Fk ? Bk.pressCount : Bk.releaseCount;
          tk[kk] = (tk[kk] || 0) + 1;
          var ak = Bk._bindPressCount[kk] || 0;
          (ak += Fk ? 1 : -1) < 0 && (ak = 0);
          Bk._bindPressCount[kk] = ak;
          var Xk = Bk.state[kk];
          if (Hk(Xk, ak)) {
            Bk.state[kk] = ak > 0;
            var bk = Fk ? Bk.down : Bk.up;
            Bk.disabled || bk.emit(kk, Rk)
          }
        }(kk, Fk, Bk, Rk)
      }))), "button" in Rk || (Bk.pD && !Rk.defaultPrevented && Rk.preventDefault(), Bk.stopPropagation && Rk.stopPropagation()))
    }

    function Hk(kk, Fk) {
      return kk ? !Fk : Fk
    }
  },
  36279: (kk, Fk) => {
    function Bk(kk) {
      if (kk && "object" === typeof kk) {
        var Fk = kk.which || kk.keyCode || kk.charCode;
        Fk && (kk = Fk)
      }
      if ("number" === typeof kk) return Xk[kk];
      var Bk, ak = String(kk);
      return (Bk = Rk[ak.toLowerCase()]) ? Bk : (Bk = tk[ak.toLowerCase()]) || (1 === ak.length ? ak.charCodeAt(0) : void 0)
    }
    Bk.isEventKey = function(kk, Fk) {
      if (kk && "object" === typeof kk) {
        var Bk = kk.which || kk.keyCode || kk.charCode;
        if (null === Bk || void 0 === Bk) return !1;
        if ("string" === typeof Fk) {
          var ak;
          if (ak = Rk[Fk.toLowerCase()]) return ak === Bk;
          if (ak = tk[Fk.toLowerCase()]) return ak === Bk
        } else if ("number" === typeof Fk) return Fk === Bk;
        return !1
      }
    };
    var Rk = (Fk = kk.exports = Bk).code = Fk.codes = {
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
      tk = Fk.aliases = {
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
    for (ak = 97; ak < 123; ak++) Rk[String.fromCharCode(ak)] = ak - 32;
    for (var ak = 48; ak < 58; ak++) Rk[ak - 48] = ak;
    for (ak = 1; ak < 13; ak++) Rk["f" + ak] = ak + 111;
    for (ak = 0; ak < 10; ak++) Rk["numpad " + ak] = ak + 96;
    var Xk = Fk.names = Fk.title = {};
    for (ak in Rk) Xk[Rk[ak]] = ak;
    for (var bk in tk) Rk[bk] = tk[bk]
  },
  39120: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.bM = !1, this.gM = !1, this.kN = 30, this.Yu = 0, this.rM = 100, this.Df = !1, this.fullscreen = !1, this.EW = function(kk) {}, this.pM = function(kk, Fk, Bk) {}, this.dU = function() {}, this.UW = function() {}, this.kU = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(kk) {}, this._data = new tk(Fk),
          function(kk) {
            if ("loading" === document.readyState) {
              var Fk = () => {
                document.removeEventListener("readystatechange", Fk), kk()
              };
              document.addEventListener("readystatechange", Fk)
            } else setTimeout(kk, 0)
          }((() => {
            ! function(kk) {
              var Fk = kk._data,
                Bk = Fk.nowObject.now();
              Fk.lastTickStarted = Bk, Fk.lastFrameStarted = Bk, Fk.lastRenderStarted = Bk, Fk.frameCB = () => function(kk) {
                var Fk = kk._data;
                requestAnimationFrame(Fk.frameCB), bk(kk);
                var Bk = Fk.nowObject.now(),
                  Rk = Bk - Fk.lastFrameStarted;
                if (Fk.lastFrameStarted = Bk, kk.Yu > 0) {
                  Fk.renderAccum += Rk;
                  var tk = 1e3 / kk.Yu;
                  if (Fk.renderAccum < tk) return;
                  Fk.renderAccum -= tk, Fk.renderAccum > tk && (Fk.renderAccum = tk)
                }
                var ak = Bk - Fk.lastRenderStarted;
                Fk.lastRenderStarted = Bk;
                var Xk = 1e3 / kk.kN,
                  wk = (Bk - Fk.lastTickStarted) / Xk;
                wk < 0 && (wk = 0);
                kk.pM(ak, wk, Xk), setTimeout(bk, 0, kk, !0)
              }(kk), Fk.intervalCB = () => bk(kk), requestAnimationFrame(Fk.frameCB), Fk.pollTime > 0 && (Fk.intervalID = setInterval(Fk.intervalCB, Math.max(Fk.pollTime, 1e3 / kk.kN / 2)))
            }(this),
            function(kk, Fk) {
              if (!Fk) return;
              var Bk = !1,
                Rk = !1,
                tk = kk => {
                  if (!!kk !== (Bk = Fk === document.pointerLockElement))
                    if (kk) {
                      var Rk = Fk.requestPointerLock();
                      Rk && Rk.catch && Rk.catch((kk => {}))
                    } else document.exitPointerLock()
                },
                ak = kk => {
                  !!kk !== (Rk = Fk === document.fullscreenElement) && (kk ? Fk.requestFullscreen ? Fk.requestFullscreen() : Fk.webkitRequestFullscreen && Fk.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Rk => {
                Bk = Fk === document.pointerLockElement, kk.kU(Bk)
              })), document.addEventListener("fullscreenchange", (Bk => {
                Rk = Fk === document.fullscreenElement, kk.onFullscreenChanged(Rk)
              })), document.addEventListener("pointerlockerror", (Rk => {
                Bk = Fk === document.pointerLockElement, kk.onPointerLockError(Rk)
              })), Object.defineProperty(kk, "Df", {
                get: () => Bk,
                set: tk
              }), Object.defineProperty(kk, "fullscreen", {
                get: () => Rk,
                set: ak
              }), Fk.addEventListener("click", (Fk => {
                kk.bM && tk(!0), kk.gM && ak(!0)
              }));
              var Xk = () => kk.UW();
              if (window.ResizeObserver) {
                new ResizeObserver(Xk).observe(Fk)
              } else window.addEventListener("resize", Xk)
            }(this, kk), this.dU()
          }))
      }
    }

    function tk() {
      let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = kk, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var ak = 3,
      Xk = 20;

    function bk(kk) {
      for (var Fk = kk._data, Bk = 1e3 / kk.kN, Rk = Fk.nowObject.now() + Xk, tk = 0; Fk.nowObject.now() >= Fk.lastTickStarted + Bk && Fk.nowObject.now() < Rk && ++tk <= ak;) kk.EW(Bk), Fk.lastTickStarted += Bk;
      var bk = 5 * (Bk + 5),
        wk = Fk.nowObject.now();
      if (wk - Fk.lastTickStarted > bk)
        for (; wk >= Fk.lastTickStarted + Bk;) Fk.lastTickStarted += Bk
    }
  },
  36427: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk
    });
    var Rk = Bk(61);
    const tk = Rk.useLayoutEffect;
    const ak = function(kk) {
      var Fk = (0, Rk.useRef)(kk);
      return tk((function() {
        Fk.current = kk
      })), Fk
    };
    var Xk = function(kk) {
      var Fk = ak(kk);
      (0, Rk.useEffect)((function() {
        var kk = function(kk) {
          var Bk;
          if (null != Fk.current && (Bk = Fk.current(kk)), kk.defaultPrevented && (kk.returnValue = ""), "string" === typeof Bk) return kk.returnValue = Bk, Bk
        };
        return window.addEventListener("beforeunload", kk),
          function() {
            window.removeEventListener("beforeunload", kk)
          }
      }), [])
    }
  },
  36313: kk => {
    var Fk, Bk = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Rk = /OS X/.test(Bk),
      tk = /Opera/.test(Bk),
      ak = !/like Gecko/.test(Bk) && !tk,
      Xk = kk.exports = {
        0: Rk ? "<menu>" : "<UNK>",
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
        93: Rk ? "<meta>" : "<menu>",
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
        173: Rk && ak ? "-" : "<volume-mute>",
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
        231: tk ? "`" : "<unicode>",
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
    for (Fk = 58; Fk < 65; ++Fk) Xk[Fk] = String.fromCharCode(Fk);
    for (Fk = 48; Fk < 58; ++Fk) Xk[Fk] = Fk - 48 + "";
    for (Fk = 65; Fk < 91; ++Fk) Xk[Fk] = String.fromCharCode(Fk);
    for (Fk = 96; Fk < 106; ++Fk) Xk[Fk] = "<num-" + (Fk - 96) + ">";
    for (Fk = 112; Fk < 136; ++Fk) Xk[Fk] = "F" + (Fk - 111)
  },
  38677: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk, Rk, tk) {
      var ak = {};
      return Object.keys(Rk).forEach((function(kk) {
        ak[kk] = Rk[kk]
      })), ak.enumerable = !!ak.enumerable, ak.configurable = !!ak.configurable, ("value" in ak || ak.initializer) && (ak.writable = !0), ak = Bk.slice().reverse().reduce((function(Bk, Rk) {
        return Rk(kk, Fk, Bk) || Bk
      }), ak), tk && void 0 !== ak.initializer && (ak.value = ak.initializer ? ak.initializer.call(tk) : void 0, ak.initializer = void 0), void 0 === ak.initializer && (Object.defineProperty(kk, Fk, ak), ak = null), ak
    }
    Bk.d(Fk, {
      c: () => Rk
    })
  },
  38674: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk, Rk) {
      Bk && Object.defineProperty(kk, Fk, {
        enumerable: Bk.enumerable,
        configurable: Bk.configurable,
        writable: Bk.writable,
        value: Bk.initializer ? Bk.initializer.call(Rk) : void 0
      })
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  },
  38318: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320);
    const tk = (kk, Fk, Bk) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Bk && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ak {
      static DeepCopy(kk, Fk, Bk, ak) {
        let Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = function(kk) {
          const Fk = [];
          do {
            const Bk = Object.getOwnPropertyNames(kk);
            for (const kk of Bk) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const dk of bk) {
          if ("_" === dk[0] && (!ak || -1 === ak.indexOf(dk))) continue;
          if (dk.endsWith("Observable")) continue;
          if (Bk && -1 !== Bk.indexOf(dk)) continue;
          const bk = kk[dk],
            sk = typeof bk;
          if ("function" !== sk) try {
            if ("object" === sk)
              if (bk instanceof Uint8Array) Fk[dk] = Uint8Array.from(bk);
              else if (bk instanceof Array) {
              if (Fk[dk] = [], bk.length > 0)
                if ("object" == typeof bk[0])
                  for (let kk = 0; kk < bk.length; kk++) {
                    const Bk = tk(bk[kk], Fk, Xk); - 1 === Fk[dk].indexOf(Bk) && Fk[dk].push(Bk)
                  } else Fk[dk] = bk.slice(0)
            } else Fk[dk] = tk(bk, Fk, Xk);
            else Fk[dk] = bk
          } catch (wk) {
            Rk.b.Warn(wk.message)
          }
        }
      }
    }
  },
  38344: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      f: () => ak,
      g: () => Xk,
      i: () => bk
    });
    var Rk = Bk(36917);
    class tk {
      constructor(kk, Fk, Bk) {
        this.gradient = kk, this.color1 = Fk, this.color2 = Bk
      }
      getColorToRef(kk) {
        this.color2 ? Rk.i.LerpToRef(this.color1, this.color2, Math.random(), kk) : kk.sBk(this.color1)
      }
    }
    class ak {
      constructor(kk, Fk) {
        this.gradient = kk, this.color = Fk
      }
    }
    class Xk {
      constructor(kk, Fk, Bk) {
        this.gradient = kk, this.factor1 = Fk, this.factor2 = Bk
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class bk {
      static GetCurrentGradient(kk, Fk, Bk) {
        if (Fk[0].gradient > kk) return void Bk(Fk[0], Fk[0], 1);
        for (let tk = 0; tk < Fk.length - 1; tk++) {
          const Rk = Fk[tk],
            ak = Fk[tk + 1];
          if (kk >= Rk.gradient && kk <= ak.gradient) {
            return void Bk(Rk, ak, (kk - Rk.gradient) / (ak.gradient - Rk.gradient))
          }
        }
        const Rk = Fk.length - 1;
        Bk(Fk[Rk], Fk[Rk], 1)
      }
    }
  },
  38320: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      static _CheckLimit(kk, Fk) {
        let Bk = Rk._LogLimitOutputs[kk];
        return Bk ? Bk.current++ : (Bk = {
          limit: Fk,
          current: 1
        }, Rk._LogLimitOutputs[kk] = Bk), Bk.current <= Bk.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Bk = Rk._LogLimitOutputs[kk];
        if (!Bk || !Rk.MessageLimitReached) return;
        const tk = this._Levels[Fk];
        Bk.current === Bk.limit && Rk[tk.name](Rk.MessageLimitReached.replace(/%LIMIT%/g, "" + Bk.limit).replace(/%TYPE%/g, tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Rk._LogCache = kk + Rk._LogCache, Rk.OnNewCacheEntry && Rk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Bk = new Date;
        return "[" + Fk(Bk.getHours()) + ":" + Fk(Bk.getMinutes()) + ":" + Fk(Bk.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Bk && !Rk._CheckLimit(tk, Bk)) return;
        const ak = Rk._FormatMessage(tk),
          Xk = this._Levels[kk],
          bk = Array.isArray(Fk) ? Fk.slice(1) : [];
        Xk.logFunc && Xk.logFunc("BJS - " + ak, ...bk);
        const wk = `<div style='color:${Xk.color}'>${ak}</div><br>`;
        Rk._AddLogEntry(wk), Rk._GenerateLimitMessage(tk, kk)
      }
      static get LogCache() {
        return Rk._LogCache
      }
      static ClearLogCache() {
        Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Rk.Log = Rk._LogDisabled, Rk.Warn = Rk._LogDisabled, Rk.Error = Rk._LogDisabled;
        const Fk = [Rk.MessageLogLevel, Rk.WarningLogLevel, Rk.ErrorLogLevel];
        for (const Bk of Fk)
          if ((kk & Bk) === Bk) {
            const kk = this._Levels[Bk];
            Rk[kk.name] = Rk._LogEnabled.bind(Rk, Bk)
          }
      }
    }
    Rk.NoneLogLevel = 0, Rk.MessageLogLevel = 1, Rk.WarningLogLevel = 2, Rk.ErrorLogLevel = 4, Rk.AllLogLevel = 7, Rk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk._Levels = [{}, {
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
    }], Rk.errorsCount = 0, Rk.Log = Rk._LogEnabled.bind(Rk, Rk.MessageLogLevel), Rk.Warn = Rk._LogEnabled.bind(Rk, Rk.WarningLogLevel), Rk.Error = Rk._LogEnabled.bind(Rk, Rk.ErrorLogLevel)
  },
  38350: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Xk
    });
    var Rk = Bk(36758),
      tk = Bk(36790),
      ak = Bk(38318);
    class Xk {
      constructor() {
        this.direction1 = new Rk.s(0, 1, 0), this.direction2 = new Rk.s(0, 1, 0), this.minEmitBox = new Rk.s(-.5, -.5, -.5), this.maxEmitBox = new Rk.s(.5, .5, .5)
      }
      startDirectionFunction(kk, Fk, Bk, ak) {
        const Xk = (0, tk.RandomRange)(this.direction1.x, this.direction2.x),
          bk = (0, tk.RandomRange)(this.direction1.y, this.direction2.y),
          wk = (0, tk.RandomRange)(this.direction1.z, this.direction2.z);
        if (ak) return Fk.x = Xk, Fk.y = bk, void(Fk.z = wk);
        Rk.s.TransformNormalFromFloatsToRef(Xk, bk, wk, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, ak) {
        const Xk = (0, tk.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          bk = (0, tk.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          wk = (0, tk.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (ak) return Fk.x = Xk, Fk.y = bk, void(Fk.z = wk);
        Rk.s.TransformCoordinatesFromFloatsToRef(Xk, bk, wk, kk, Fk)
      }
      clone() {
        const kk = new Xk;
        return ak.e.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2), kk.setVector3("minEmitBox", this.minEmitBox), kk.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(kk) {
        kk.addUniform("direction1", 3), kk.addUniform("direction2", 3), kk.addUniform("minEmitBox", 3), kk.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.direction1 = this.direction1.PBk(), kk.direction2 = this.direction2.PBk(), kk.minEmitBox = this.minEmitBox.PBk(), kk.maxEmitBox = this.maxEmitBox.PBk(), kk
      }
      parse(kk) {
        Rk.s.FromArrayToRef(kk.direction1, 0, this.direction1), Rk.s.FromArrayToRef(kk.direction2, 0, this.direction2), Rk.s.FromArrayToRef(kk.minEmitBox, 0, this.minEmitBox), Rk.s.FromArrayToRef(kk.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38314: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => bk,
      c: () => Xk
    });
    var Rk = Bk(36758),
      tk = Bk(36790),
      ak = Bk(38318);
    class Xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = kk, this.height = Fk, this.radiusRange = Bk, this.directionRandomizer = tk, this._tempVector = Rk.s.Zero()
      }
      startDirectionFunction(kk, Fk, Bk, ak, Xk) {
        Bk.position.subtractToRef(kk.getTranslation(), this._tempVector), this._tempVector.normalize(), Rk.s.TransformNormalToRef(this._tempVector, Xk, this._tempVector);
        const bk = (0, tk.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let wk = Math.atan2(this._tempVector.x, this._tempVector.z);
        wk += (0, tk.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = bk, this._tempVector.x = Math.sin(wk), this._tempVector.z = Math.cos(wk), this._tempVector.normalize(), ak ? Fk.sBk(this._tempVector) : Rk.s.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, kk, Fk)
      }
      startPositionFunction(kk, Fk, Bk, ak) {
        const Xk = (0, tk.RandomRange)(-this.height / 2, this.height / 2),
          bk = (0, tk.RandomRange)(0, 2 * Math.PI),
          wk = (0, tk.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          dk = Math.sqrt(wk) * this.radius,
          sk = dk * Math.cos(bk),
          Vk = dk * Math.sin(bk);
        ak ? Fk.E1(sk, Xk, Vk) : Rk.s.TransformCoordinatesFromFloatsToRef(sk, Xk, Vk, kk, Fk)
      }
      clone() {
        const kk = new Xk(this.radius, this.directionRandomizer);
        return ak.e.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("height", this.height), kk.setFloat("radiusRange", this.radiusRange), kk.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("height", 1), kk.addUniform("radiusRange", 1), kk.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const kk = {};
        return kk.type = this.getClassName(), kk.radius = this.radius, kk.height = this.height, kk.radiusRange = this.radiusRange, kk.directionRandomizer = this.directionRandomizer, kk
      }
      parse(kk) {
        this.radius = kk.radius, this.height = kk.height, this.radiusRange = kk.radiusRange, this.directionRandomizer = kk.directionRandomizer
      }
    }
    class bk extends Xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Rk.s(0, 1, 0),
          ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Rk.s(0, 1, 0);
        super(kk, Fk, Bk), this.direction1 = tk, this.direction2 = ak
      }
      startDirectionFunction(kk, Fk, Bk, ak) {
        const Xk = (0, tk.RandomRange)(this.direction1.x, this.direction2.x),
          bk = (0, tk.RandomRange)(this.direction1.y, this.direction2.y),
          wk = (0, tk.RandomRange)(this.direction1.z, this.direction2.z);
        ak ? Fk.E1(Xk, bk, wk) : Rk.s.TransformNormalFromFloatsToRef(Xk, bk, wk, kk, Fk)
      }
      clone() {
        const kk = new bk(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return ak.e.DeepCopy(this, kk), kk
      }
      applyToShader(kk) {
        kk.setFloat("radius", this.radius), kk.setFloat("height", this.height), kk.setFloat("radiusRange", this.radiusRange), kk.setVector3("direction1", this.direction1), kk.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(kk) {
        kk.addUniform("radius", 1), kk.addUniform("height", 1), kk.addUniform("radiusRange", 1), kk.addUniform("direction1", 3), kk.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const kk = super.serialize();
        return kk.direction1 = this.direction1.PBk(), kk.direction2 = this.direction2.PBk(), kk
      }
      parse(kk) {
        super.parse(kk), Rk.s.FromArrayToRef(kk.direction1, 0, this.direction1), Rk.s.FromArrayToRef(kk.direction2, 0, this.direction2)
      }
    }
  },
  38427: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Vk
    });
    const Rk = .5 * (Math.sqrt(3) - 1),
      tk = (3 - Math.sqrt(3)) / 6,
      ak = 1 / 3,
      Xk = 1 / 6,
      bk = (Math.sqrt(5) - 1) / 4,
      wk = (5 - Math.sqrt(5)) / 20,
      dk = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      sk = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Vk = class {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const Fk = "function" == typeof kk ? kk : function(kk) {
          let Fk = 0,
            Bk = 0,
            Rk = 0,
            tk = 1;
          const ak = function() {
            let kk = 4022871197;
            return function(Fk) {
              Fk = Fk.toString();
              for (let Bk = 0; Bk < Fk.length; Bk++) {
                kk += Fk.charCodeAt(Bk);
                let Rk = .02519603282416938 * kk;
                kk = Rk >>> 0, Rk -= kk, Rk *= kk, kk = Rk >>> 0, Rk -= kk, kk += 4294967296 * Rk
              }
              return 2.3283064365386963e-10 * (kk >>> 0)
            }
          }();
          Fk = ak(" "), Bk = ak(" "), Rk = ak(" "), Fk -= ak(kk), Fk < 0 && (Fk += 1);
          Bk -= ak(kk), Bk < 0 && (Bk += 1);
          Rk -= ak(kk), Rk < 0 && (Rk += 1);
          return function() {
            const kk = 2091639 * Fk + 2.3283064365386963e-10 * tk;
            return Fk = Bk, Bk = Rk, Rk = kk - (tk = 0 | kk)
          }
        }(kk);
        this.p = function(kk) {
          const Fk = new Uint8Array(256);
          for (let Bk = 0; Bk < 256; Bk++) Fk[Bk] = Bk;
          for (let Bk = 0; Bk < 255; Bk++) {
            const Rk = Bk + ~~(kk() * (256 - Bk)),
              tk = Fk[Bk];
            Fk[Bk] = Fk[Rk], Fk[Rk] = tk
          }
          return Fk
        }(Fk), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let Bk = 0; Bk < 512; Bk++) this.perm[Bk] = this.p[255 & Bk], this.permMod12[Bk] = this.perm[Bk] % 12
      }
      noise2D(kk, Fk) {
        const Bk = this.permMod12,
          ak = this.perm;
        let Xk = 0,
          bk = 0,
          wk = 0;
        const sk = (kk + Fk) * Rk,
          Vk = Math.floor(kk + sk),
          Jk = Math.floor(Fk + sk),
          Ak = (Vk + Jk) * tk,
          ek = kk - (Vk - Ak),
          yk = Fk - (Jk - Ak);
        let fk, mk;
        ek > yk ? (fk = 1, mk = 0) : (fk = 0, mk = 1);
        const Wk = ek - fk + tk,
          vk = yk - mk + tk,
          ik = ek - 1 + 2 * tk,
          Yk = yk - 1 + 2 * tk,
          Lk = 255 & Vk,
          Ok = 255 & Jk;
        let Ek = .5 - ek * ek - yk * yk;
        if (Ek >= 0) {
          const kk = 3 * Bk[Lk + ak[Ok]];
          Ek *= Ek, Xk = Ek * Ek * (dk[kk] * ek + dk[kk + 1] * yk)
        }
        let Sk = .5 - Wk * Wk - vk * vk;
        if (Sk >= 0) {
          const kk = 3 * Bk[Lk + fk + ak[Ok + mk]];
          Sk *= Sk, bk = Sk * Sk * (dk[kk] * Wk + dk[kk + 1] * vk)
        }
        let Nk = .5 - ik * ik - Yk * Yk;
        if (Nk >= 0) {
          const kk = 3 * Bk[Lk + 1 + ak[Ok + 1]];
          Nk *= Nk, wk = Nk * Nk * (dk[kk] * ik + dk[kk + 1] * Yk)
        }
        return 70 * (Xk + bk + wk)
      }
      noise3D(kk, Fk, Bk) {
        const Rk = this.permMod12,
          tk = this.perm;
        let bk, wk, sk, Vk;
        const Jk = (kk + Fk + Bk) * ak,
          Ak = Math.floor(kk + Jk),
          ek = Math.floor(Fk + Jk),
          yk = Math.floor(Bk + Jk),
          fk = (Ak + ek + yk) * Xk,
          mk = kk - (Ak - fk),
          Wk = Fk - (ek - fk),
          vk = Bk - (yk - fk);
        let ik, Yk, Lk, Ok, Ek, Sk;
        mk >= Wk ? Wk >= vk ? (ik = 1, Yk = 0, Lk = 0, Ok = 1, Ek = 1, Sk = 0) : mk >= vk ? (ik = 1, Yk = 0, Lk = 0, Ok = 1, Ek = 0, Sk = 1) : (ik = 0, Yk = 0, Lk = 1, Ok = 1, Ek = 0, Sk = 1) : Wk < vk ? (ik = 0, Yk = 0, Lk = 1, Ok = 0, Ek = 1, Sk = 1) : mk < vk ? (ik = 0, Yk = 1, Lk = 0, Ok = 0, Ek = 1, Sk = 1) : (ik = 0, Yk = 1, Lk = 0, Ok = 1, Ek = 1, Sk = 0);
        const Nk = mk - ik + Xk,
          Hk = Wk - Yk + Xk,
          uk = vk - Lk + Xk,
          Mk = mk - Ok + 2 * Xk,
          gk = Wk - Ek + 2 * Xk,
          Uk = vk - Sk + 2 * Xk,
          ck = mk - 1 + .5,
          Gk = Wk - 1 + .5,
          Tk = vk - 1 + .5,
          rk = 255 & Ak,
          Dk = 255 & ek,
          zk = 255 & yk;
        let Pk = .6 - mk * mk - Wk * Wk - vk * vk;
        if (Pk < 0) bk = 0;
        else {
          const kk = 3 * Rk[rk + tk[Dk + tk[zk]]];
          Pk *= Pk, bk = Pk * Pk * (dk[kk] * mk + dk[kk + 1] * Wk + dk[kk + 2] * vk)
        }
        let hk = .6 - Nk * Nk - Hk * Hk - uk * uk;
        if (hk < 0) wk = 0;
        else {
          const kk = 3 * Rk[rk + ik + tk[Dk + Yk + tk[zk + Lk]]];
          hk *= hk, wk = hk * hk * (dk[kk] * Nk + dk[kk + 1] * Hk + dk[kk + 2] * uk)
        }
        let qk = .6 - Mk * Mk - gk * gk - Uk * Uk;
        if (qk < 0) sk = 0;
        else {
          const kk = 3 * Rk[rk + Ok + tk[Dk + Ek + tk[zk + Sk]]];
          qk *= qk, sk = qk * qk * (dk[kk] * Mk + dk[kk + 1] * gk + dk[kk + 2] * Uk)
        }
        let Ck = .6 - ck * ck - Gk * Gk - Tk * Tk;
        if (Ck < 0) Vk = 0;
        else {
          const kk = 3 * Rk[rk + 1 + tk[Dk + 1 + tk[zk + 1]]];
          Ck *= Ck, Vk = Ck * Ck * (dk[kk] * ck + dk[kk + 1] * Gk + dk[kk + 2] * Tk)
        }
        return 32 * (bk + wk + sk + Vk)
      }
      noise4D(kk, Fk, Bk, Rk) {
        const tk = this.perm;
        let ak, Xk, dk, Vk, Jk;
        const Ak = (kk + Fk + Bk + Rk) * bk,
          ek = Math.floor(kk + Ak),
          yk = Math.floor(Fk + Ak),
          fk = Math.floor(Bk + Ak),
          mk = Math.floor(Rk + Ak),
          Wk = (ek + yk + fk + mk) * wk,
          vk = kk - (ek - Wk),
          ik = Fk - (yk - Wk),
          Yk = Bk - (fk - Wk),
          Lk = Rk - (mk - Wk);
        let Ok = 0,
          Ek = 0,
          Sk = 0,
          Nk = 0;
        vk > ik ? Ok++ : Ek++, vk > Yk ? Ok++ : Sk++, vk > Lk ? Ok++ : Nk++, ik > Yk ? Ek++ : Sk++, ik > Lk ? Ek++ : Nk++, Yk > Lk ? Sk++ : Nk++;
        const Hk = Ok >= 3 ? 1 : 0,
          uk = Ek >= 3 ? 1 : 0,
          Mk = Sk >= 3 ? 1 : 0,
          gk = Nk >= 3 ? 1 : 0,
          Uk = Ok >= 2 ? 1 : 0,
          ck = Ek >= 2 ? 1 : 0,
          Gk = Sk >= 2 ? 1 : 0,
          Tk = Nk >= 2 ? 1 : 0,
          rk = Ok >= 1 ? 1 : 0,
          Dk = Ek >= 1 ? 1 : 0,
          zk = Sk >= 1 ? 1 : 0,
          Pk = Nk >= 1 ? 1 : 0,
          hk = vk - Hk + wk,
          qk = ik - uk + wk,
          Ck = Yk - Mk + wk,
          Zk = Lk - gk + wk,
          pk = vk - Uk + 2 * wk,
          Kk = ik - ck + 2 * wk,
          xk = Yk - Gk + 2 * wk,
          jk = Lk - Tk + 2 * wk,
          lk = vk - rk + 3 * wk,
          nk = ik - Dk + 3 * wk,
          Ik = Yk - zk + 3 * wk,
          Qk = Lk - Pk + 3 * wk,
          kF = vk - 1 + 4 * wk,
          FF = ik - 1 + 4 * wk,
          BF = Yk - 1 + 4 * wk,
          RF = Lk - 1 + 4 * wk,
          tF = 255 & ek,
          aF = 255 & yk,
          XF = 255 & fk,
          bF = 255 & mk;
        let wF = .6 - vk * vk - ik * ik - Yk * Yk - Lk * Lk;
        if (wF < 0) ak = 0;
        else {
          const kk = tk[tF + tk[aF + tk[XF + tk[bF]]]] % 32 * 4;
          wF *= wF, ak = wF * wF * (sk[kk] * vk + sk[kk + 1] * ik + sk[kk + 2] * Yk + sk[kk + 3] * Lk)
        }
        let dF = .6 - hk * hk - qk * qk - Ck * Ck - Zk * Zk;
        if (dF < 0) Xk = 0;
        else {
          const kk = tk[tF + Hk + tk[aF + uk + tk[XF + Mk + tk[bF + gk]]]] % 32 * 4;
          dF *= dF, Xk = dF * dF * (sk[kk] * hk + sk[kk + 1] * qk + sk[kk + 2] * Ck + sk[kk + 3] * Zk)
        }
        let sF = .6 - pk * pk - Kk * Kk - xk * xk - jk * jk;
        if (sF < 0) dk = 0;
        else {
          const kk = tk[tF + Uk + tk[aF + ck + tk[XF + Gk + tk[bF + Tk]]]] % 32 * 4;
          sF *= sF, dk = sF * sF * (sk[kk] * pk + sk[kk + 1] * Kk + sk[kk + 2] * xk + sk[kk + 3] * jk)
        }
        let VF = .6 - lk * lk - nk * nk - Ik * Ik - Qk * Qk;
        if (VF < 0) Vk = 0;
        else {
          const kk = tk[tF + rk + tk[aF + Dk + tk[XF + zk + tk[bF + Pk]]]] % 32 * 4;
          VF *= VF, Vk = VF * VF * (sk[kk] * lk + sk[kk + 1] * nk + sk[kk + 2] * Ik + sk[kk + 3] * Qk)
        }
        let JF = .6 - kF * kF - FF * FF - BF * BF - RF * RF;
        if (JF < 0) Jk = 0;
        else {
          const kk = tk[tF + 1 + tk[aF + 1 + tk[XF + 1 + tk[bF + 1]]]] % 32 * 4;
          JF *= JF, Jk = JF * JF * (sk[kk] * kF + sk[kk + 1] * FF + sk[kk + 2] * BF + sk[kk + 3] * RF)
        }
        return 27 * (ak + Xk + dk + Vk + Jk)
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);