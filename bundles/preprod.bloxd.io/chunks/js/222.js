/*! For license information please see sn3sfj.222.002048ae.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222];
export const modules = {
  39775: (pp, ip, cp) => {
    pp.exports = op;
    var Op = cp(343);

    function op(pp, ip) {
      if (!(this instanceof op)) return new op(pp, ip);
      var cp = Op.create();
      Op.add(cp, pp, ip), this.base = Op.min(Op.create(), pp, cp), this.vec = Op.clone(ip), this.max = Op.max(Op.create(), pp, cp), this.mag = Op.length(this.vec)
    }
    var Ip = op.prototype;
    Ip.width = function() {
      return this.vec[0]
    }, Ip.height = function() {
      return this.vec[1]
    }, Ip.depth = function() {
      return this.vec[2]
    }, Ip.x0 = function() {
      return this.base[0]
    }, Ip.y0 = function() {
      return this.base[1]
    }, Ip.z0 = function() {
      return this.base[2]
    }, Ip.x1 = function() {
      return this.max[0]
    }, Ip.y1 = function() {
      return this.max[1]
    }, Ip.z1 = function() {
      return this.max[2]
    }, Ip.translate = function(pp) {
      return Op.add(this.max, this.max, pp), Op.add(this.base, this.base, pp), this
    }, Ip.setPosition = function(pp) {
      return Op.add(this.max, pp, this.vec), Op.copy(this.base, pp), this
    }, Ip.expand = function(pp) {
      var ip = Op.create(),
        cp = Op.create();
      return Op.max(ip, pp.max, this.max), Op.min(cp, pp.base, this.base), Op.subtract(ip, ip, cp), new op(cp, ip)
    }, Ip.intersects = function(pp) {
      return !(pp.base[0] > this.max[0]) && (!(pp.base[1] > this.max[1]) && (!(pp.base[2] > this.max[2]) && (!(pp.max[0] < this.base[0]) && (!(pp.max[1] < this.base[1]) && !(pp.max[2] < this.base[2])))))
    }, Ip.touches = function(pp) {
      var ip = this.union(pp);
      return null !== ip && (0 == ip.width() || 0 == ip.height() || 0 == ip.depth())
    }, Ip.union = function(pp) {
      if (!this.intersects(pp)) return null;
      var ip = Math.max(pp.base[0], this.base[0]),
        cp = Math.max(pp.base[1], this.base[1]),
        Op = Math.max(pp.base[2], this.base[2]);
      return new op([ip, cp, Op], [Math.min(pp.max[0], this.max[0]) - ip, Math.min(pp.max[1], this.max[1]) - cp, Math.min(pp.max[2], this.max[2]) - Op])
    }
  },
  39773: pp => {
    pp.exports = function(pp, ip, cp, Op, op, Ip) {
      var Sp = +ip[0],
        xp = +ip[1],
        Lp = +ip[2],
        Yp = +cp[0],
        Dp = +cp[1],
        Ap = +cp[2],
        Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
      if (0 === Pp) throw new Error("Can't raycast along a zero vector");
      return function(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
        for (var Dp = 0, Ap = Math.floor, Pp = 0 | Ap(ip), Wp = 0 | Ap(cp), yp = 0 | Ap(Op), Up = op > 0 ? 1 : -1, wp = Ip > 0 ? 1 : -1, vp = Sp > 0 ? 1 : -1, tp = Math.abs(1 / op), Hp = Math.abs(1 / Ip), dp = Math.abs(1 / Sp), ep = tp < 1 / 0 ? tp * (Up > 0 ? Pp + 1 - ip : ip - Pp) : 1 / 0, jp = Hp < 1 / 0 ? Hp * (wp > 0 ? Wp + 1 - cp : cp - Wp) : 1 / 0, kp = dp < 1 / 0 ? dp * (vp > 0 ? yp + 1 - Op : Op - yp) : 1 / 0, mp = -1; Dp <= xp;) {
          var Rp = pp(Pp, Wp, yp);
          if (Rp) return Lp && (Lp[0] = ip + Dp * op, Lp[1] = cp + Dp * Ip, Lp[2] = Op + Dp * Sp), Yp && (Yp[0] = Yp[1] = Yp[2] = 0, 0 === mp && (Yp[0] = -Up), 1 === mp && (Yp[1] = -wp), 2 === mp && (Yp[2] = -vp)), Rp;
          ep < jp ? ep < kp ? (Pp += Up, Dp = ep, ep += tp, mp = 0) : (yp += vp, Dp = kp, kp += dp, mp = 2) : jp < kp ? (Wp += wp, Dp = jp, jp += Hp, mp = 1) : (yp += vp, Dp = kp, kp += dp, mp = 2)
        }
        return Lp && (Lp[0] = ip + Dp * op, Lp[1] = cp + Dp * Ip, Lp[2] = Op + Dp * Sp), Yp && (Yp[0] = Yp[1] = Yp[2] = 0), 0
      }(pp, Sp, xp, Lp, Yp /= Pp, Dp /= Pp, Ap /= Pp, Op = "undefined" === typeof Op ? 64 : +Op, op, Ip)
    }
  },
  39283: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      f: () => Ip
    });
    var Op = cp(4176);
    let op = null;

    function Ip(pp) {
      return null !== op && pp === op
    }

    function Sp() {
      this.YG = !1, this.stopPropagation = !1, this.WG = !1, this.disabled = !1
    }
    class xp {
      constructor(pp, ip) {
        this.version = "0.7.0";
        var cp = Object.assign({}, new Sp, ip || {});
        this.element = pp || document, this.YG = !!cp.YG, this.stopPropagation = !!cp.stopPropagation, this.WG = !!cp.WG, this.disabled = !!cp.disabled, this.filterEvents = (pp, ip) => !0, this.ignoreEvent = pp => !1, this.down = new Op.EventEmitter, this.up = new Op.EventEmitter, this.state = {}, this.yG = {
          dx: 0,
          dy: 0,
          Aip: 0,
          Wip: 0,
          yip: 0
        }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
          lastX: 0,
          lastY: 0,
          currID: null
        }, "loading" !== document.readyState ? Yp(this) : document.addEventListener("DOMContentLoaded", (pp => {
          Yp(this)
        }), {
          once: !0
        })
      }
      bind(pp) {
        for (var ip = arguments.length, cp = new Array(ip > 1 ? ip - 1 : 0), Op = 1; Op < ip; Op++) cp[Op - 1] = arguments[Op];
        cp.forEach((ip => {
          var cp = this._keyBindmap[ip] || [];
          cp.includes(pp) || (cp.push(pp), this._keyBindmap[ip] = cp)
        })), this.state[pp] = !!this.state[pp], this.pressCount[pp] = this.pressCount[pp] || 0, this.releaseCount[pp] = this.releaseCount[pp] || 0
      }
      unbind(pp) {
        for (var ip in this._keyBindmap) {
          var cp = this._keyBindmap[ip],
            Op = cp.indexOf(pp);
          Op > -1 && cp.splice(Op, 1)
        }
      }
      getBindings() {
        var pp = {};
        for (var ip in this._keyBindmap) {
          this._keyBindmap[ip].forEach((cp => {
            pp[cp] = pp[cp] || [], pp[cp].push(ip)
          }))
        }
        return pp
      }
      LP() {
        Lp(this.yG), Lp(this.pressCount), Lp(this.releaseCount)
      }
    }

    function Lp(pp) {
      for (var ip in pp) pp[ip] = 0
    }

    function Yp(pp) {
      window.addEventListener("keydown", wp.bind(null, pp, !0), !1), window.addEventListener("keyup", wp.bind(null, pp, !1), !1);
      var ip = {
        passive: !0
      };
      pp.element.addEventListener("touchstart", Wp.bind(void 0, pp), {
        passive: !1
      }), pp.element.addEventListener("touchend", Up.bind(void 0, pp), ip), pp.element.addEventListener("mousedown", vp.bind(null, pp, !0), ip), window.document.addEventListener("mouseup", vp.bind(null, pp, !1), ip), pp.element.addEventListener("touchmove", tp.bind(null, pp), ip), pp.element.addEventListener("mousemove", tp.bind(null, pp), ip), window.PointerEvent, pp.element.addEventListener("wheel", Hp.bind(null, pp), ip), pp.element.addEventListener("contextmenu", dp.bind(null, pp), !1), window.addEventListener("blur", kp.bind(null, pp), !1)
    }
    var Dp = 0,
      Ap = 0,
      Pp = null;

    function Wp(pp, ip) {
      ip.preventDefault(), yp(ip)
    }

    function yp(pp) {
      let ip = !1;
      for (let cp = 0; cp < pp.touches.length; ++cp)
        if (pp.touches[cp].identifier === Pp) {
          ip = !0;
          break
        } if (!ip) {
        const ip = pp.changedTouches[0];
        Dp = ip.clientX, Ap = ip.clientY, Pp = ip.identifier
      }
    }

    function Up(pp, ip) {
      for (var cp = ip.changedTouches, Op = 0; Op < cp.length; ++Op) cp[Op].identifier === Pp && (Pp = null)
    }

    function wp(pp, ip, cp) {
      if (!pp.ignoreEvent(cp)) try {
        mp(pp, cp), ip && cp.isTrusted && !cp.repeat && pp._keyStates[cp.code] && Rp(pp, cp.code)
      } finally {
        qp(cp.code, ip, pp, cp)
      }
    }

    function vp(pp, ip, cp) {
      if (!pp.ignoreEvent(cp)) try {
        mp(pp, cp)
      } finally {
        ! function(pp, ip, cp) {
          if ("pointerId" in cp)
            if (ip) {
              if (null !== pp._touches.currID) return;
              pp._touches.currID = cp.pointerId
            } else {
              if (pp._touches.currID !== cp.pointerId) return;
              pp._touches.currID = null
            } var Op = "button" in cp ? cp.button + 1 : 1;
          qp("Mouse" + Op, ip, pp, cp)
        }(pp, ip, cp)
      }
    }

    function tp(pp, ip) {
      var cp = ip.movementX || ip.mozMovementX || 0,
        Op = ip.movementY || ip.mozMovementY || 0;
      if (ip.touches && 0 === (cp | Op)) {
        var op = function(pp) {
          yp(pp);
          for (let ip = 0; ip < pp.changedTouches.length; ++ip)
            if (pp.changedTouches[ip].identifier == Pp) {
              const cp = pp.changedTouches[ip],
                Op = [cp.clientX - Dp, cp.clientY - Ap];
              return Dp = cp.clientX, Ap = cp.clientY, Op
            } return console.error(`Did not find touch id ${Pp}`), [0, 0]
        }(ip);
        cp = op[0], Op = op[1]
      }
      pp.yG.dx += cp, pp.yG.dy += Op
    }

    function Hp(pp, ip) {
      mp(pp, ip);
      var cp = 1;
      switch (ip.deltaMode) {
        case 0:
          cp = 1;
          break;
        case 1:
          cp = 12;
          break;
        case 2:
          cp = pp.element.clientHeight || window.innerHeight
      }
      pp.yG.Aip += (ip.deltaX || 0) * cp, pp.yG.Wip += (ip.deltaY || 0) * cp, pp.yG.yip += (ip.deltaZ || 0) * cp
    }

    function dp(pp, ip) {
      if (!pp.WG) return ip.preventDefault(), !1
    }
    var ep = {
      AltLeft: "altKey",
      AltRight: "altKey",
      ControlLeft: "ctrlKey",
      ControlRight: "ctrlKey",
      ShiftLeft: "shiftKey",
      ShiftRight: "shiftKey",
      MetaLeft: "metaKey",
      MetaRight: "metaKey"
    };

    function jp(pp, ip) {
      return !!pp[ep[ip]] || ("AltRight" === ip || "ControlLeft" === ip) && "function" === typeof pp.getModifierState && !0 === pp.getModifierState("AltGraph")
    }

    function kp(pp, ip) {
      for (var cp in pp._modifiersHeldThroughBlur = {}, ep) pp._keyStates[cp] && (pp._modifiersHeldThroughBlur[cp] = !0);
      ip && ip.isTrusted && function() {
        try {
          return window.self !== window.top
        } catch (pp) {
          return !0
        }
      }() && (clearTimeout(pp._blurRelease), pp._blurRelease = setTimeout((function() {
        if (!document.hasFocus())
          for (var ip in pp._modifiersHeldThroughBlur = {}, pp._keyStates) pp._keyStates[ip] && !/^Mouse\d/.test(ip) && Rp(pp, ip)
      }), 0))
    }

    function mp(pp, ip) {
      var cp = pp._modifiersHeldThroughBlur;
      if (cp && ip.isTrusted && document.hasFocus())
        for (var Op in cp) delete cp[Op], pp._keyStates[Op] && Op !== ip.code && (jp(ip, Op) || Rp(pp, Op))
    }

    function Rp(pp, ip) {
      const cp = {
          code: ip,
          preventDefault: () => {},
          stopPropagation: () => {}
        },
        Op = op;
      op = cp;
      try {
        qp(ip, !1, pp, cp)
      } finally {
        op = Op
      }
    }

    function qp(pp, ip, cp, Op) {
      var op = cp._keyBindmap[pp];
      op && (Mp(cp._keyStates[pp], ip) && (cp._keyStates[pp] = ip, op.forEach((pp => {
        (!cp.filterEvents || cp.filterEvents(Op, pp)) && function(pp, ip, cp, Op) {
          var op = ip ? cp.pressCount : cp.releaseCount;
          op[pp] = (op[pp] || 0) + 1;
          var Ip = cp._bindPressCount[pp] || 0;
          (Ip += ip ? 1 : -1) < 0 && (Ip = 0);
          cp._bindPressCount[pp] = Ip;
          var Sp = cp.state[pp];
          if (Mp(Sp, Ip)) {
            cp.state[pp] = Ip > 0;
            var xp = ip ? cp.down : cp.up;
            cp.disabled || xp.emit(pp, Op)
          }
        }(pp, ip, cp, Op)
      }))), "button" in Op || (cp.YG && !Op.defaultPrevented && Op.preventDefault(), cp.stopPropagation && Op.stopPropagation()))
    }

    function Mp(pp, ip) {
      return pp ? !ip : ip
    }
  },
  36730: (pp, ip) => {
    function cp(pp) {
      if (pp && "object" === typeof pp) {
        var ip = pp.which || pp.keyCode || pp.charCode;
        ip && (pp = ip)
      }
      if ("number" === typeof pp) return Sp[pp];
      var cp, Ip = String(pp);
      return (cp = Op[Ip.toLowerCase()]) ? cp : (cp = op[Ip.toLowerCase()]) || (1 === Ip.length ? Ip.charCodeAt(0) : void 0)
    }
    cp.isEventKey = function(pp, ip) {
      if (pp && "object" === typeof pp) {
        var cp = pp.which || pp.keyCode || pp.charCode;
        if (null === cp || void 0 === cp) return !1;
        if ("string" === typeof ip) {
          var Ip;
          if (Ip = Op[ip.toLowerCase()]) return Ip === cp;
          if (Ip = op[ip.toLowerCase()]) return Ip === cp
        } else if ("number" === typeof ip) return ip === cp;
        return !1
      }
    };
    var Op = (ip = pp.exports = cp).code = ip.codes = {
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
      op = ip.aliases = {
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
    for (Ip = 97; Ip < 123; Ip++) Op[String.fromCharCode(Ip)] = Ip - 32;
    for (var Ip = 48; Ip < 58; Ip++) Op[Ip - 48] = Ip;
    for (Ip = 1; Ip < 13; Ip++) Op["f" + Ip] = Ip + 111;
    for (Ip = 0; Ip < 10; Ip++) Op["numpad " + Ip] = Ip + 96;
    var Sp = ip.names = ip.title = {};
    for (Ip in Op) Sp[Op[Ip]] = Ip;
    for (var xp in op) Op[xp] = op[xp]
  },
  39757: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        this.qB = !1, this.XB = !1, this.Bl = 30, this.YB = 0, this.lB = 100, this.rw = !1, this.fullscreen = !1, this.gH = function(pp) {}, this.JB = function(pp, ip, cp) {}, this.pN = function() {}, this.mH = function() {}, this.nB = function() {}, this.onFullscreenChanged = function() {}, this.onPointerLockError = function(pp) {}, this._data = new op(ip),
          function(pp) {
            if ("loading" === document.readyState) {
              var ip = () => {
                document.removeEventListener("readystatechange", ip), pp()
              };
              document.addEventListener("readystatechange", ip)
            } else setTimeout(pp, 0)
          }((() => {
            ! function(pp) {
              var ip = pp._data,
                cp = ip.nowObject.now();
              ip.lastTickStarted = cp, ip.lastFrameStarted = cp, ip.lastRenderStarted = cp, ip.frameCB = () => function(pp) {
                var ip = pp._data;
                requestAnimationFrame(ip.frameCB), xp(pp);
                var cp = ip.nowObject.now(),
                  Op = cp - ip.lastFrameStarted;
                if (ip.lastFrameStarted = cp, pp.YB > 0) {
                  ip.renderAccum += Op;
                  var op = 1e3 / pp.YB;
                  if (ip.renderAccum < op) return;
                  ip.renderAccum -= op, ip.renderAccum > op && (ip.renderAccum = op)
                }
                var Ip = cp - ip.lastRenderStarted;
                ip.lastRenderStarted = cp;
                var Sp = 1e3 / pp.Bl,
                  Lp = (cp - ip.lastTickStarted) / Sp;
                Lp < 0 && (Lp = 0);
                pp.JB(Ip, Lp, Sp), setTimeout(xp, 0, pp, !0)
              }(pp), ip.intervalCB = () => xp(pp), requestAnimationFrame(ip.frameCB), ip.pollTime > 0 && (ip.intervalID = setInterval(ip.intervalCB, Math.max(ip.pollTime, 1e3 / pp.Bl / 2)))
            }(this),
            function(pp, ip) {
              if (!ip) return;
              var cp = !1,
                Op = !1,
                op = pp => {
                  if (!!pp !== (cp = ip === document.pointerLockElement))
                    if (pp) {
                      var Op = ip.requestPointerLock();
                      Op && Op.catch && Op.catch((pp => {}))
                    } else document.exitPointerLock()
                },
                Ip = pp => {
                  !!pp !== (Op = ip === document.fullscreenElement) && (pp ? ip.requestFullscreen ? ip.requestFullscreen() : ip.webkitRequestFullscreen && ip.webkitRequestFullscreen() : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
                };
              document.addEventListener("pointerlockchange", (Op => {
                cp = ip === document.pointerLockElement, pp.nB(cp)
              })), document.addEventListener("fullscreenchange", (cp => {
                Op = ip === document.fullscreenElement, pp.onFullscreenChanged(Op)
              })), document.addEventListener("pointerlockerror", (Op => {
                cp = ip === document.pointerLockElement, pp.onPointerLockError(Op)
              })), Object.defineProperty(pp, "rw", {
                get: () => cp,
                set: op
              }), Object.defineProperty(pp, "fullscreen", {
                get: () => Op,
                set: Ip
              }), ip.addEventListener("click", (ip => {
                pp.qB && op(!0), pp.XB && Ip(!0)
              }));
              var Sp = () => pp.mH();
              if (window.ResizeObserver) {
                new ResizeObserver(Sp).observe(ip)
              } else window.addEventListener("resize", Sp)
            }(this, pp), this.pN()
          }))
      }
    }

    function op() {
      let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
      this.nowObject = performance || Date, this.pollTime = pp, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
    }
    var Ip = 3,
      Sp = 20;

    function xp(pp) {
      for (var ip = pp._data, cp = 1e3 / pp.Bl, Op = ip.nowObject.now() + Sp, op = 0; ip.nowObject.now() >= ip.lastTickStarted + cp && ip.nowObject.now() < Op && ++op <= Ip;) pp.gH(cp), ip.lastTickStarted += cp;
      var xp = 5 * (cp + 5),
        Lp = ip.nowObject.now();
      if (Lp - ip.lastTickStarted > xp)
        for (; Lp >= ip.lastTickStarted + cp;) ip.lastTickStarted += cp
    }
  },
  36887: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Sp
    });
    var Op = cp(62);
    const op = Op.useLayoutEffect;
    const Ip = function(pp) {
      var ip = (0, Op.useRef)(pp);
      return op((function() {
        ip.current = pp
      })), ip
    };
    var Sp = function(pp) {
      var ip = Ip(pp);
      (0, Op.useEffect)((function() {
        var pp = function(pp) {
          var cp;
          if (null != ip.current && (cp = ip.current(pp)), pp.defaultPrevented && (pp.returnValue = ""), "string" === typeof cp) return pp.returnValue = cp, cp
        };
        return window.addEventListener("beforeunload", pp),
          function() {
            window.removeEventListener("beforeunload", pp)
          }
      }), [])
    }
  },
  36772: pp => {
    var ip, cp = "undefined" !== typeof window ? window.navigator.userAgent : "",
      Op = /OS X/.test(cp),
      op = /Opera/.test(cp),
      Ip = !/like Gecko/.test(cp) && !op,
      Sp = pp.exports = {
        0: Op ? "<menu>" : "<UNK>",
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
        93: Op ? "<meta>" : "<menu>",
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
        173: Op && Ip ? "-" : "<volume-mute>",
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
        231: op ? "`" : "<unicode>",
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
    for (ip = 58; ip < 65; ++ip) Sp[ip] = String.fromCharCode(ip);
    for (ip = 48; ip < 58; ++ip) Sp[ip] = ip - 48 + "";
    for (ip = 65; ip < 91; ++ip) Sp[ip] = String.fromCharCode(ip);
    for (ip = 96; ip < 106; ++ip) Sp[ip] = "<num-" + (ip - 96) + ">";
    for (ip = 112; ip < 136; ++ip) Sp[ip] = "F" + (ip - 111)
  },
  39169: (pp, ip, cp) => {
    function Op(pp, ip, cp, Op, op) {
      var Ip = {};
      return Object.keys(Op).forEach((function(pp) {
        Ip[pp] = Op[pp]
      })), Ip.enumerable = !!Ip.enumerable, Ip.configurable = !!Ip.configurable, ("value" in Ip || Ip.initializer) && (Ip.writable = !0), Ip = cp.slice().reverse().reduce((function(cp, Op) {
        return Op(pp, ip, cp) || cp
      }), Ip), op && void 0 !== Ip.initializer && (Ip.value = Ip.initializer ? Ip.initializer.call(op) : void 0, Ip.initializer = void 0), void 0 === Ip.initializer && (Object.defineProperty(pp, ip, Ip), Ip = null), Ip
    }
    cp.d(ip, {
      b: () => Op
    })
  },
  39164: (pp, ip, cp) => {
    function Op(pp, ip, cp, Op) {
      cp && Object.defineProperty(pp, ip, {
        enumerable: cp.enumerable,
        configurable: cp.configurable,
        writable: cp.writable,
        value: cp.initializer ? cp.initializer.call(Op) : void 0
      })
    }
    cp.d(ip, {
      c: () => Op
    })
  },
  38900: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(38905);
    const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
      ...pp
    } : null : pp.clone(ip) : null;
    class Ip {
      static DeepCopy(pp, ip, cp, Ip) {
        let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xp = function(pp) {
          const ip = [];
          do {
            const cp = Object.getOwnPropertyNames(pp);
            for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
          } while (pp = Object.getPrototypeOf(pp));
          return ip
        }(pp);
        for (const Yp of xp) {
          if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
          if (Yp.endsWith("Observable")) continue;
          if (cp && -1 !== cp.indexOf(Yp)) continue;
          const xp = pp[Yp],
            Dp = typeof xp;
          if ("function" !== Dp) try {
            if ("object" === Dp)
              if (xp instanceof Uint8Array) ip[Yp] = Uint8Array.from(xp);
              else if (xp instanceof Array) {
              if (ip[Yp] = [], xp.length > 0)
                if ("object" == typeof xp[0])
                  for (let pp = 0; pp < xp.length; pp++) {
                    const cp = op(xp[pp], ip, Sp); - 1 === ip[Yp].indexOf(cp) && ip[Yp].push(cp)
                  } else ip[Yp] = xp.slice(0)
            } else ip[Yp] = op(xp, ip, Sp);
            else ip[Yp] = xp
          } catch (Lp) {
            Op.e.Warn(Lp.message)
          }
        }
      }
    }
  },
  38942: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op,
      f: () => Ip,
      h: () => Sp,
      l: () => xp
    });
    var Op = cp(37487);
    class op {
      constructor(pp, ip, cp) {
        this.gradient = pp, this.color1 = ip, this.color2 = cp
      }
      getColorToRef(pp) {
        this.color2 ? Op.h.LerpToRef(this.color1, this.color2, Math.random(), pp) : pp.rM(this.color1)
      }
    }
    class Ip {
      constructor(pp, ip) {
        this.gradient = pp, this.color = ip
      }
    }
    class Sp {
      constructor(pp, ip, cp) {
        this.gradient = pp, this.factor1 = ip, this.factor2 = cp
      }
      getFactor() {
        return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
      }
    }
    class xp {
      static GetCurrentGradient(pp, ip, cp) {
        if (ip[0].gradient > pp) return void cp(ip[0], ip[0], 1);
        for (let op = 0; op < ip.length - 1; op++) {
          const Op = ip[op],
            Ip = ip[op + 1];
          if (pp >= Op.gradient && pp <= Ip.gradient) {
            return void cp(Op, Ip, (pp - Op.gradient) / (Ip.gradient - Op.gradient))
          }
        }
        const Op = ip.length - 1;
        cp(ip[Op], ip[Op], 1)
      }
    }
  },
  38905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static _CheckLimit(pp, ip) {
        let cp = Op._LogLimitOutputs[pp];
        return cp ? cp.current++ : (cp = {
          limit: ip,
          current: 1
        }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
      }
      static _GenerateLimitMessage(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cp = Op._LogLimitOutputs[pp];
        if (!cp || !Op.MessageLimitReached) return;
        const op = this._Levels[ip];
        cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
      }
      static _AddLogEntry(pp) {
        Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
      }
      static _FormatMessage(pp) {
        const ip = pp => pp < 10 ? "0" + pp : "" + pp,
          cp = new Date;
        return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
      }
      static _LogDisabled(pp, ip) {}
      static _LogEnabled() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const op = Array.isArray(ip) ? ip[0] : ip;
        if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
        const Ip = Op._FormatMessage(op),
          Sp = this._Levels[pp],
          xp = Array.isArray(ip) ? ip.slice(1) : [];
        Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
        const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
        Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
      }
      static get LogCache() {
        return Op._LogCache
      }
      static ClearLogCache() {
        Op._LogCache = "", Op._LogLimitOutputs = {}, Op.errorsCount = 0
      }
      static set LogLevels(pp) {
        Op.Log = Op._LogDisabled, Op.Warn = Op._LogDisabled, Op.Error = Op._LogDisabled;
        const ip = [Op.MessageLogLevel, Op.WarningLogLevel, Op.ErrorLogLevel];
        for (const cp of ip)
          if ((pp & cp) === cp) {
            const pp = this._Levels[cp];
            Op[pp.name] = Op._LogEnabled.bind(Op, cp)
          }
      }
    }
    Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels = [{}, {
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
    }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
  },
  38944: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(37320),
      op = cp(37356),
      Ip = cp(38900);
    class Sp {
      constructor() {
        this.direction1 = new Op.o(0, 1, 0), this.direction2 = new Op.o(0, 1, 0), this.minEmitBox = new Op.o(-.5, -.5, -.5), this.maxEmitBox = new Op.o(.5, .5, .5)
      }
      startDirectionFunction(pp, ip, cp, Ip) {
        const Sp = (0, op.RandomRange)(this.direction1.x, this.direction2.x),
          xp = (0, op.RandomRange)(this.direction1.y, this.direction2.y),
          Lp = (0, op.RandomRange)(this.direction1.z, this.direction2.z);
        if (Ip) return ip.x = Sp, ip.y = xp, void(ip.z = Lp);
        Op.o.TransformNormalFromFloatsToRef(Sp, xp, Lp, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Ip) {
        const Sp = (0, op.RandomRange)(this.minEmitBox.x, this.maxEmitBox.x),
          xp = (0, op.RandomRange)(this.minEmitBox.y, this.maxEmitBox.y),
          Lp = (0, op.RandomRange)(this.minEmitBox.z, this.maxEmitBox.z);
        if (Ip) return ip.x = Sp, ip.y = xp, void(ip.z = Lp);
        Op.o.TransformCoordinatesFromFloatsToRef(Sp, xp, Lp, pp, ip)
      }
      clone() {
        const pp = new Sp;
        return Ip.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2), pp.setVector3("minEmitBox", this.minEmitBox), pp.setVector3("maxEmitBox", this.maxEmitBox)
      }
      buildUniformLayout(pp) {
        pp.addUniform("direction1", 3), pp.addUniform("direction2", 3), pp.addUniform("minEmitBox", 3), pp.addUniform("maxEmitBox", 3)
      }
      getEffectDefines() {
        return "#define BOXEMITTER"
      }
      getClassName() {
        return "BoxParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.direction1 = this.direction1.BOp(), pp.direction2 = this.direction2.BOp(), pp.minEmitBox = this.minEmitBox.BOp(), pp.maxEmitBox = this.maxEmitBox.BOp(), pp
      }
      parse(pp) {
        Op.o.FromArrayToRef(pp.direction1, 0, this.direction1), Op.o.FromArrayToRef(pp.direction2, 0, this.direction2), Op.o.FromArrayToRef(pp.minEmitBox, 0, this.minEmitBox), Op.o.FromArrayToRef(pp.maxEmitBox, 0, this.maxEmitBox)
      }
    }
  },
  38898: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      f: () => Sp
    });
    var Op = cp(37320),
      op = cp(37356),
      Ip = cp(38900);
    class Sp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.radius = pp, this.height = ip, this.radiusRange = cp, this.directionRandomizer = op, this._tempVector = Op.o.Zero()
      }
      startDirectionFunction(pp, ip, cp, Ip, Sp) {
        cp.position.subtractToRef(pp.getTranslation(), this._tempVector), this._tempVector.normalize(), Op.o.TransformNormalToRef(this._tempVector, Sp, this._tempVector);
        const xp = (0, op.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
        let Lp = Math.atan2(this._tempVector.x, this._tempVector.z);
        Lp += (0, op.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = xp, this._tempVector.x = Math.sin(Lp), this._tempVector.z = Math.cos(Lp), this._tempVector.normalize(), Ip ? ip.rM(this._tempVector) : Op.o.TransformNormalFromFloatsToRef(this._tempVector.x, this._tempVector.y, this._tempVector.z, pp, ip)
      }
      startPositionFunction(pp, ip, cp, Ip) {
        const Sp = (0, op.RandomRange)(-this.height / 2, this.height / 2),
          xp = (0, op.RandomRange)(0, 2 * Math.PI),
          Lp = (0, op.RandomRange)((1 - this.radiusRange) * (1 - this.radiusRange), 1),
          Yp = Math.sqrt(Lp) * this.radius,
          Dp = Yp * Math.cos(xp),
          Ap = Yp * Math.sin(xp);
        Ip ? ip.i5(Dp, Sp, Ap) : Op.o.TransformCoordinatesFromFloatsToRef(Dp, Sp, Ap, pp, ip)
      }
      clone() {
        const pp = new Sp(this.radius, this.directionRandomizer);
        return Ip.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setFloat("radius", this.radius), pp.setFloat("height", this.height), pp.setFloat("radiusRange", this.radiusRange), pp.setFloat("directionRandomizer", this.directionRandomizer)
      }
      buildUniformLayout(pp) {
        pp.addUniform("radius", 1), pp.addUniform("height", 1), pp.addUniform("radiusRange", 1), pp.addUniform("directionRandomizer", 1)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderParticleEmitter"
      }
      serialize() {
        const pp = {};
        return pp.type = this.getClassName(), pp.radius = this.radius, pp.height = this.height, pp.radiusRange = this.radiusRange, pp.directionRandomizer = this.directionRandomizer, pp
      }
      parse(pp) {
        this.radius = pp.radius, this.height = pp.height, this.radiusRange = pp.radiusRange, this.directionRandomizer = pp.directionRandomizer
      }
    }
    class xp extends Sp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Op.o(0, 1, 0),
          Ip = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Op.o(0, 1, 0);
        super(pp, ip, cp), this.direction1 = op, this.direction2 = Ip
      }
      startDirectionFunction(pp, ip, cp, Ip) {
        const Sp = (0, op.RandomRange)(this.direction1.x, this.direction2.x),
          xp = (0, op.RandomRange)(this.direction1.y, this.direction2.y),
          Lp = (0, op.RandomRange)(this.direction1.z, this.direction2.z);
        Ip ? ip.i5(Sp, xp, Lp) : Op.o.TransformNormalFromFloatsToRef(Sp, xp, Lp, pp, ip)
      }
      clone() {
        const pp = new xp(this.radius, this.height, this.radiusRange, this.direction1, this.direction2);
        return Ip.e.DeepCopy(this, pp), pp
      }
      applyToShader(pp) {
        pp.setFloat("radius", this.radius), pp.setFloat("height", this.height), pp.setFloat("radiusRange", this.radiusRange), pp.setVector3("direction1", this.direction1), pp.setVector3("direction2", this.direction2)
      }
      buildUniformLayout(pp) {
        pp.addUniform("radius", 1), pp.addUniform("height", 1), pp.addUniform("radiusRange", 1), pp.addUniform("direction1", 3), pp.addUniform("direction2", 3)
      }
      getEffectDefines() {
        return "#define CYLINDEREMITTER\n#define DIRECTEDCYLINDEREMITTER"
      }
      getClassName() {
        return "CylinderDirectedParticleEmitter"
      }
      serialize() {
        const pp = super.serialize();
        return pp.direction1 = this.direction1.BOp(), pp.direction2 = this.direction2.BOp(), pp
      }
      parse(pp) {
        super.parse(pp), Op.o.FromArrayToRef(pp.direction1, 0, this.direction1), Op.o.FromArrayToRef(pp.direction2, 0, this.direction2)
      }
    }
  },
  39012: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap
    });
    const Op = .5 * (Math.sqrt(3) - 1),
      op = (3 - Math.sqrt(3)) / 6,
      Ip = 1 / 3,
      Sp = 1 / 6,
      xp = (Math.sqrt(5) - 1) / 4,
      Lp = (5 - Math.sqrt(5)) / 20,
      Yp = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
      Dp = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
    const Ap = class {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
        const ip = "function" == typeof pp ? pp : function(pp) {
          let ip = 0,
            cp = 0,
            Op = 0,
            op = 1;
          const Ip = function() {
            let pp = 4022871197;
            return function(ip) {
              ip = ip.toString();
              for (let cp = 0; cp < ip.length; cp++) {
                pp += ip.charCodeAt(cp);
                let Op = .02519603282416938 * pp;
                pp = Op >>> 0, Op -= pp, Op *= pp, pp = Op >>> 0, Op -= pp, pp += 4294967296 * Op
              }
              return 2.3283064365386963e-10 * (pp >>> 0)
            }
          }();
          ip = Ip(" "), cp = Ip(" "), Op = Ip(" "), ip -= Ip(pp), ip < 0 && (ip += 1);
          cp -= Ip(pp), cp < 0 && (cp += 1);
          Op -= Ip(pp), Op < 0 && (Op += 1);
          return function() {
            const pp = 2091639 * ip + 2.3283064365386963e-10 * op;
            return ip = cp, cp = Op, Op = pp - (op = 0 | pp)
          }
        }(pp);
        this.p = function(pp) {
          const ip = new Uint8Array(256);
          for (let cp = 0; cp < 256; cp++) ip[cp] = cp;
          for (let cp = 0; cp < 255; cp++) {
            const Op = cp + ~~(pp() * (256 - cp)),
              op = ip[cp];
            ip[cp] = ip[Op], ip[Op] = op
          }
          return ip
        }(ip), this.perm = new Uint8Array(512), this.permMod12 = new Uint8Array(512);
        for (let cp = 0; cp < 512; cp++) this.perm[cp] = this.p[255 & cp], this.permMod12[cp] = this.perm[cp] % 12
      }
      noise2D(pp, ip) {
        const cp = this.permMod12,
          Ip = this.perm;
        let Sp = 0,
          xp = 0,
          Lp = 0;
        const Dp = (pp + ip) * Op,
          Ap = Math.floor(pp + Dp),
          Pp = Math.floor(ip + Dp),
          Wp = (Ap + Pp) * op,
          yp = pp - (Ap - Wp),
          Up = ip - (Pp - Wp);
        let wp, vp;
        yp > Up ? (wp = 1, vp = 0) : (wp = 0, vp = 1);
        const tp = yp - wp + op,
          Hp = Up - vp + op,
          dp = yp - 1 + 2 * op,
          ep = Up - 1 + 2 * op,
          jp = 255 & Ap,
          kp = 255 & Pp;
        let mp = .5 - yp * yp - Up * Up;
        if (mp >= 0) {
          const pp = 3 * cp[jp + Ip[kp]];
          mp *= mp, Sp = mp * mp * (Yp[pp] * yp + Yp[pp + 1] * Up)
        }
        let Rp = .5 - tp * tp - Hp * Hp;
        if (Rp >= 0) {
          const pp = 3 * cp[jp + wp + Ip[kp + vp]];
          Rp *= Rp, xp = Rp * Rp * (Yp[pp] * tp + Yp[pp + 1] * Hp)
        }
        let qp = .5 - dp * dp - ep * ep;
        if (qp >= 0) {
          const pp = 3 * cp[jp + 1 + Ip[kp + 1]];
          qp *= qp, Lp = qp * qp * (Yp[pp] * dp + Yp[pp + 1] * ep)
        }
        return 70 * (Sp + xp + Lp)
      }
      noise3D(pp, ip, cp) {
        const Op = this.permMod12,
          op = this.perm;
        let xp, Lp, Dp, Ap;
        const Pp = (pp + ip + cp) * Ip,
          Wp = Math.floor(pp + Pp),
          yp = Math.floor(ip + Pp),
          Up = Math.floor(cp + Pp),
          wp = (Wp + yp + Up) * Sp,
          vp = pp - (Wp - wp),
          tp = ip - (yp - wp),
          Hp = cp - (Up - wp);
        let dp, ep, jp, kp, mp, Rp;
        vp >= tp ? tp >= Hp ? (dp = 1, ep = 0, jp = 0, kp = 1, mp = 1, Rp = 0) : vp >= Hp ? (dp = 1, ep = 0, jp = 0, kp = 1, mp = 0, Rp = 1) : (dp = 0, ep = 0, jp = 1, kp = 1, mp = 0, Rp = 1) : tp < Hp ? (dp = 0, ep = 0, jp = 1, kp = 0, mp = 1, Rp = 1) : vp < Hp ? (dp = 0, ep = 1, jp = 0, kp = 0, mp = 1, Rp = 1) : (dp = 0, ep = 1, jp = 0, kp = 1, mp = 1, Rp = 0);
        const qp = vp - dp + Sp,
          Mp = tp - ep + Sp,
          Cp = Hp - jp + Sp,
          Ep = vp - kp + 2 * Sp,
          Xp = tp - mp + 2 * Sp,
          lp = Hp - Rp + 2 * Sp,
          Qp = vp - 1 + .5,
          Jp = tp - 1 + .5,
          Bp = Hp - 1 + .5,
          Np = 255 & Wp,
          Tp = 255 & yp,
          fp = 255 & Up;
        let bp = .6 - vp * vp - tp * tp - Hp * Hp;
        if (bp < 0) xp = 0;
        else {
          const pp = 3 * Op[Np + op[Tp + op[fp]]];
          bp *= bp, xp = bp * bp * (Yp[pp] * vp + Yp[pp + 1] * tp + Yp[pp + 2] * Hp)
        }
        let hp = .6 - qp * qp - Mp * Mp - Cp * Cp;
        if (hp < 0) Lp = 0;
        else {
          const pp = 3 * Op[Np + dp + op[Tp + ep + op[fp + jp]]];
          hp *= hp, Lp = hp * hp * (Yp[pp] * qp + Yp[pp + 1] * Mp + Yp[pp + 2] * Cp)
        }
        let ap = .6 - Ep * Ep - Xp * Xp - lp * lp;
        if (ap < 0) Dp = 0;
        else {
          const pp = 3 * Op[Np + kp + op[Tp + mp + op[fp + Rp]]];
          ap *= ap, Dp = ap * ap * (Yp[pp] * Ep + Yp[pp + 1] * Xp + Yp[pp + 2] * lp)
        }
        let np = .6 - Qp * Qp - Jp * Jp - Bp * Bp;
        if (np < 0) Ap = 0;
        else {
          const pp = 3 * Op[Np + 1 + op[Tp + 1 + op[fp + 1]]];
          np *= np, Ap = np * np * (Yp[pp] * Qp + Yp[pp + 1] * Jp + Yp[pp + 2] * Bp)
        }
        return 32 * (xp + Lp + Dp + Ap)
      }
      noise4D(pp, ip, cp, Op) {
        const op = this.perm;
        let Ip, Sp, Yp, Ap, Pp;
        const Wp = (pp + ip + cp + Op) * xp,
          yp = Math.floor(pp + Wp),
          Up = Math.floor(ip + Wp),
          wp = Math.floor(cp + Wp),
          vp = Math.floor(Op + Wp),
          tp = (yp + Up + wp + vp) * Lp,
          Hp = pp - (yp - tp),
          dp = ip - (Up - tp),
          ep = cp - (wp - tp),
          jp = Op - (vp - tp);
        let kp = 0,
          mp = 0,
          Rp = 0,
          qp = 0;
        Hp > dp ? kp++ : mp++, Hp > ep ? kp++ : Rp++, Hp > jp ? kp++ : qp++, dp > ep ? mp++ : Rp++, dp > jp ? mp++ : qp++, ep > jp ? Rp++ : qp++;
        const Mp = kp >= 3 ? 1 : 0,
          Cp = mp >= 3 ? 1 : 0,
          Ep = Rp >= 3 ? 1 : 0,
          Xp = qp >= 3 ? 1 : 0,
          lp = kp >= 2 ? 1 : 0,
          Qp = mp >= 2 ? 1 : 0,
          Jp = Rp >= 2 ? 1 : 0,
          Bp = qp >= 2 ? 1 : 0,
          Np = kp >= 1 ? 1 : 0,
          Tp = mp >= 1 ? 1 : 0,
          fp = Rp >= 1 ? 1 : 0,
          bp = qp >= 1 ? 1 : 0,
          hp = Hp - Mp + Lp,
          ap = dp - Cp + Lp,
          np = ep - Ep + Lp,
          Fp = jp - Xp + Lp,
          gp = Hp - lp + 2 * Lp,
          Gp = dp - Qp + 2 * Lp,
          rp = ep - Jp + 2 * Lp,
          Zp = jp - Bp + 2 * Lp,
          zp = Hp - Np + 3 * Lp,
          sp = dp - Tp + 3 * Lp,
          Kp = ep - fp + 3 * Lp,
          Vp = jp - bp + 3 * Lp,
          ii = Hp - 1 + 4 * Lp,
          ci = dp - 1 + 4 * Lp,
          Oi = ep - 1 + 4 * Lp,
          oi = jp - 1 + 4 * Lp,
          Ii = 255 & yp,
          Si = 255 & Up,
          xi = 255 & wp,
          Li = 255 & vp;
        let Yi = .6 - Hp * Hp - dp * dp - ep * ep - jp * jp;
        if (Yi < 0) Ip = 0;
        else {
          const pp = op[Ii + op[Si + op[xi + op[Li]]]] % 32 * 4;
          Yi *= Yi, Ip = Yi * Yi * (Dp[pp] * Hp + Dp[pp + 1] * dp + Dp[pp + 2] * ep + Dp[pp + 3] * jp)
        }
        let Di = .6 - hp * hp - ap * ap - np * np - Fp * Fp;
        if (Di < 0) Sp = 0;
        else {
          const pp = op[Ii + Mp + op[Si + Cp + op[xi + Ep + op[Li + Xp]]]] % 32 * 4;
          Di *= Di, Sp = Di * Di * (Dp[pp] * hp + Dp[pp + 1] * ap + Dp[pp + 2] * np + Dp[pp + 3] * Fp)
        }
        let Ai = .6 - gp * gp - Gp * Gp - rp * rp - Zp * Zp;
        if (Ai < 0) Yp = 0;
        else {
          const pp = op[Ii + lp + op[Si + Qp + op[xi + Jp + op[Li + Bp]]]] % 32 * 4;
          Ai *= Ai, Yp = Ai * Ai * (Dp[pp] * gp + Dp[pp + 1] * Gp + Dp[pp + 2] * rp + Dp[pp + 3] * Zp)
        }
        let Pi = .6 - zp * zp - sp * sp - Kp * Kp - Vp * Vp;
        if (Pi < 0) Ap = 0;
        else {
          const pp = op[Ii + Np + op[Si + Tp + op[xi + fp + op[Li + bp]]]] % 32 * 4;
          Pi *= Pi, Ap = Pi * Pi * (Dp[pp] * zp + Dp[pp + 1] * sp + Dp[pp + 2] * Kp + Dp[pp + 3] * Vp)
        }
        let Wi = .6 - ii * ii - ci * ci - Oi * Oi - oi * oi;
        if (Wi < 0) Pp = 0;
        else {
          const pp = op[Ii + 1 + op[Si + 1 + op[xi + 1 + op[Li + 1]]]] % 32 * 4;
          Wi *= Wi, Pp = Wi * Wi * (Dp[pp] * ii + Dp[pp + 1] * ci + Dp[pp + 2] * Oi + Dp[pp + 3] * oi)
        }
        return 27 * (Ip + Sp + Yp + Ap + Pp)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);