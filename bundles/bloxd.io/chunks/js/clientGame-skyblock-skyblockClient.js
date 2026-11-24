export const id = 25;
export const ids = [25];
export const modules = {
  36791: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      h: () => yp,
      i: () => Pp,
      k: () => Ap
    });
    var Op = cp(34430),
      op = cp(36799),
      Ip = cp(36804),
      Sp = cp(8852),
      xp = cp(1476),
      Lp = cp(62),
      Yp = cp(82),
      Dp = cp(1112);

    function Ap() {
      var pp;
      return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
        children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
      })
    }

    function Pp(pp) {
      var ip;
      let {
        show: cp
      } = pp;
      (0, xp.i)(op.d, (0, op.s)());
      const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
      return (0, Lp.useEffect)((() => {
        var pp;
        cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
      }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
        showing: cp,
        globallyUniqueKey: "clientGameMenu",
        children: null === Yp || void 0 === Yp ? void 0 : Yp.content
      })
    }

    function Wp(pp) {
      let {
        placement: ip = "bottom"
      } = pp;
      return (0, Dp.jsx)("div", {
        id: `clientGameHud-${ip}`,
        style: {
          display: "contents"
        }
      })
    }

    function yp(pp) {
      let {
        children: ip,
        placement: cp = "bottom"
      } = pp;
      const [Op, op] = (0, Lp.useState)(null);
      return (0, Lp.useEffect)((() => {
        op(document.getElementById(`clientGameHud-${cp}`))
      }), [cp]), Op ? (0, Yp.createPortal)(ip, Op) : null
    }
  },
  4950: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => wp,
      i: () => vp
    });
    var Op = cp(1049),
      op = cp.n(Op),
      Ip = cp(62),
      Sp = cp(1201),
      xp = cp(4956),
      Lp = cp(1929),
      Yp = cp(2492),
      Dp = cp(4964),
      Ap = cp(1112);
    const Pp = new WeakMap;
    let Wp = 0;

    function yp(pp) {
      let ip = Pp.get(pp);
      return void 0 === ip && (ip = Wp++, Pp.set(pp, ip)), ip
    }

    function Up(pp) {
      let {
        piece: ip
      } = pp;
      return "space" === ip.kind ? (0, Ap.jsx)(Ap.Fragment, {
        children: ip.text
      }) : (0, Ap.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ip.delayMs}ms`
        },
        children: (0, Ap.jsx)(xp.d, {
          text: "icon" === ip.kind ? `[[${ip.icon}]]` : ip.text
        })
      })
    }

    function wp(pp) {
      let {
        display: ip
      } = pp;
      const {
        selectedLanguage: cp
      } = (0, Sp.H)(), Op = (0, Ip.useMemo)((() => (0, Dp.e)((0, Dp.h)(ip).plan.pieces)), [ip, cp.code]);
      return (0, Ap.jsxs)("div", {
        className: op()("Dialogue", {
          DialogueAnimateIn: !1 !== ip.animateIn
        }),
        children: [ip.speakerName && (0, Ap.jsx)(Lp.e, {
          text: ip.speakerName,
          className: "DialogueSpeaker"
        }), (0, Ap.jsx)("p", {
          className: "DialogueLine",
          children: Op.map(((pp, ip) => 1 === pp.length && "space" === pp[0].kind ? pp[0].text : (0, Ap.jsx)("span", {
            className: "DialogueGlue",
            children: pp.map(((pp, ip) => (0, Ap.jsx)(Up, {
              piece: pp
            }, ip)))
          }, ip)))
        })]
      })
    }
    const vp = (0, Ip.memo)((function() {
      const pp = (0, Yp.i)("dialogue");
      return (0, Ap.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: pp && (0, Ap.jsx)(wp, {
          display: pp
        }, yp(pp))
      })
    }))
  },
  4956: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp
    });
    var Op = cp(62),
      op = cp(322),
      Ip = cp(1941),
      Sp = cp(1112);

    function xp(pp) {
      let {
        text: ip
      } = pp;
      const cp = [];
      let xp = "";
      return (0, op.nc)(ip).forEach(((pp, ip) => {
        if ("string" === typeof pp || !(0, Ip.f)(pp.icon)) return void(xp += "string" === typeof pp ? pp : pp.icon);
        const op = Math.max(0, xp.trimEnd().search(/\S{1,12}$/));
        cp.push((0, Sp.jsxs)(Op.Fragment, {
          children: [xp.slice(0, op), (0, Sp.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [xp.slice(op), (0, Sp.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": pp.icon,
              children: (0, Sp.jsx)(Ip.d, {
                itemName: pp.icon,
                amount: 0
              })
            })]
          })]
        }, ip)), xp = ""
      })), cp.push(xp), (0, Sp.jsx)(Sp.Fragment, {
        children: cp
      })
    }
  },
  34430: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(4628),
      op = cp(4635);

    function Ip(pp) {
      let {
        children: ip,
        showing: cp,
        globallyUniqueKey: Ip,
        alwaysMountChildren: Sp = !1,
        doGameplayStartStopOnShow: xp = !0,
        keepsMovement: Lp = !1
      } = pp;
      return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
    }
  },
  4964: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Jp,
      h: () => Qp
    });
    var Op = cp(4970),
      op = cp(322);
    const Ip = 120,
      Sp = 260,
      xp = 1.15,
      Lp = 1.2,
      Yp = 2,
      Dp = 1.08,
      Ap = .8,
      Pp = .95,
      Wp = 8,
      yp = "[\"')\\]\u300d\u300f\uff09]*",
      Up = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${yp}$`),
      wp = new RegExp(`[?\uff1f]${yp}$`),
      vp = new RegExp(`[!\uff01]${yp}$`),
      tp = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Hp = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      dp = new RegExp(`[${Hp}]`),
      ep = new RegExp(`[${Hp}]|[^${Hp}]+`, "g"),
      jp = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function kp(pp) {
      let ip = 2166136261;
      for (let cp = 0; cp < pp.length; cp++) ip ^= pp.charCodeAt(cp), ip = Math.imul(ip, 16777619);
      return (ip >>> 0) / 4294967295 * 2 - 1
    }

    function mp(pp) {
      var ip;
      if (dp.test(pp)) return 1;
      const cp = pp.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Op = cp.replace(/[^0-9]/g, "");
      if (Op.length > 0 && !/\p{L}/u.test(cp)) return Math.min(Op.length, 4);
      const op = null !== (ip = cp.match(jp)) && void 0 !== ip ? ip : [];
      if (0 === op.length) {
        var Ip, Sp;
        const pp = null !== (Ip = null === (Sp = cp.match(/\p{L}/gu)) || void 0 === Sp ? void 0 : Sp.length) && void 0 !== Ip ? Ip : 0;
        return 0 === pp ? 0 : Math.min(Math.max(1, Math.round(pp / 2.5)), Wp)
      }
      const xp = cp.replace(/[^\p{L}]/gu, ""),
        Lp = op.length > 1 && "e" === op.at(-1) && xp.endsWith("e") && !xp.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(pp.replace(/[^\p{L}]/gu, ""));
      return Math.min(op.length - (Lp ? 1 : 0), Wp)
    }

    function Rp(pp) {
      return pp.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function qp(pp) {
      const ip = pp.replace(/[^\p{L}]/gu, "");
      return ip.length >= 2 && ip === ip.toUpperCase() && ip !== ip.toLowerCase()
    }

    function Mp(pp, ip) {
      var cp;
      const Wp = ip && (0, Op.m)(ip),
        yp = null !== (cp = null === Wp || void 0 === Wp ? void 0 : Wp.syllableMs) && void 0 !== cp ? cp : Op.d,
        Hp = function(pp) {
          const ip = [];
          for (const Op of (0, op.nc)(pp))
            if ("string" === typeof Op)
              for (const pp of Op.split(/(\s+)/)) {
                if ("" === pp) continue;
                if (/^\s+$/.test(pp)) {
                  ip.push({
                    kind: "space",
                    text: pp
                  });
                  continue
                }
                if (!dp.test(pp)) {
                  ip.push({
                    kind: "word",
                    text: pp,
                    delayMs: 0
                  });
                  continue
                }
                let Op = !0;
                for (const op of null !== (cp = pp.match(ep)) && void 0 !== cp ? cp : []) {
                  var cp;
                  const pp = ip.at(-1);
                  Op || "word" !== (null === pp || void 0 === pp ? void 0 : pp.kind) || dp.test(op) || /[\p{L}\p{N}]/u.test(op) ? (Op || ip.push({
                    kind: "space",
                    text: "\u200b"
                  }), ip.push({
                    kind: "word",
                    text: op,
                    delayMs: 0
                  }), Op = !1) : pp.text += op
                }
              } else ip.push({
                kind: "icon",
                text: Op.icon,
                delayMs: 0
              });
          return ip
        }(pp),
        jp = [];
      let Mp = [];
      for (const Op of Hp) "space" !== Op.kind && (Mp.push(Op), Up.test(Op.text) && (jp.push(Mp), Mp = []));
      jp.push(Mp);
      const Cp = [];
      let Ep = 0;
      for (const Op of jp) {
        var Xp, lp;
        const pp = null !== (Xp = null === (lp = Op.at(-1)) || void 0 === lp ? void 0 : lp.text) && void 0 !== Xp ? Xp : "",
          ip = wp.test(pp),
          cp = vp.test(pp),
          op = Op.map((pp => "word" === pp.kind ? mp(pp.text) : 1)),
          Hp = op.findLastIndex((pp => pp > 0));
        for (const [wp, vp] of Op.entries()) {
          const pp = "word" === vp.kind,
            Op = op[wp];
          vp.delayMs = Ep;
          for (let op = 0; Wp && op < Op; op++) {
            const {
              intonation: Ip
            } = Wp;
            let Sp = Hp > 0 ? -Ip.declineSemitones * (wp / Hp) : 0;
            Sp += kp(`${Rp(vp.text)}|${op}`) * Ip.variationSemitones;
            const Up = Math.min(1, Ip.variationSemitones);
            let tp = Wp.glideSemitones,
              dp = 1;
            cp && (Sp += Ip.exclaimLiftSemitones, dp *= xp), ip && wp === Hp && (Sp += Ip.questionRiseSemitones * (Op > 1 ? .5 + .5 * op / (Op - 1) : 1), op === Op - 1 && (tp = Math.abs(tp) + Ip.questionRiseSemitones / 2)), pp && qp(vp.text) && (Sp += Yp * Up, dp *= Lp), Op > 1 && 0 === op && (Sp += Ap * Up, dp *= Dp), Cp.push({
              atMs: Ep + op * yp,
              semitones: Sp,
              glideSemitones: tp,
              durationMs: op < Op - 1 ? Math.min(Wp.durationMs, yp * Pp) : Wp.durationMs,
              level: dp
            })
          }
          Ep += Op * yp + (Up.test(vp.text) ? Sp : tp.test(vp.text) ? Ip : 0)
        }
      }
      return {
        pieces: Hp.map((pp => "space" === pp.kind ? pp : "icon" === pp.kind ? {
          kind: "icon",
          icon: pp.text,
          delayMs: pp.delayMs
        } : {
          kind: "word",
          text: pp.text,
          delayMs: pp.delayMs
        })),
        blips: Cp
      }
    }
    var Cp = cp(1201),
      Ep = cp(1260),
      Xp = cp(1963);

    function lp(pp) {
      if ("string" === typeof pp) return pp;
      const ip = Ep.g.get().getCurrentLanguageCode();
      return (0, Cp.w)(ip, pp.translationKey, (0, Cp.t)(pp.params, Xp.d.shown))
    }

    function Qp(pp) {
      const ip = void 0 === pp.voice ? null : (0, Op.o)(pp.voice),
        cp = ip && (0, Op.m)(ip);
      return {
        plan: Mp(lp(pp.line), cp),
        synth: cp
      }
    }

    function Jp(pp) {
      const ip = [];
      let cp = [];
      for (const [op, Ip] of pp.entries()) {
        var Op;
        "space" === Ip.kind && (" " !== Ip.text || "icon" !== (null === (Op = pp[op + 1]) || void 0 === Op ? void 0 : Op.kind)) ? (cp.length > 0 && ip.push(cp), ip.push([Ip]), cp = []) : cp.push(Ip)
      }
      return cp.length > 0 && ip.push(cp), ip
    }
  },
  8852: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      e: () => op
    });
    let Op = null;
    const op = function(pp) {
        const ip = {
          cycle: pp,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Op = ip, () => {
          Op === ip && (Op = null)
        }
      },
      Ip = () => {
        var pp;
        return null !== (pp = Op) && void 0 !== pp && pp.canCycle() ? Op.cycle : null
      }
  },
  36804: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => yp,
      E: () => tp,
      b: () => Ip,
      d: () => Up,
      f: () => wp,
      j: () => xp,
      n: () => Pp,
      q: () => vp,
      u: () => Ap,
      w: () => Hp
    });
    var Op = cp(25),
      op = cp(34);
    const Ip = "clientGameInventoryButtonsChanged",
      Sp = new Map;

    function xp() {
      return [...Sp.values()].sort(((pp, ip) => {
        var cp, Op;
        return (null !== (cp = pp.order) && void 0 !== cp ? cp : 0) - (null !== (Op = ip.order) && void 0 !== Op ? Op : 0)
      }))
    }
    let Lp = null;

    function Yp(pp) {
      Lp = pp
    }
    let Dp = !1;

    function Ap(pp) {
      Dp = !0;
      try {
        pp.onClick()
      } finally {
        Dp = !1
      }
      pp.panel && "clientGame" === Op.c.get("openInGameMenuName") && Yp(pp.id)
    }

    function Pp() {
      return Dp
    }

    function Wp() {
      return xp().filter((pp => pp.panel && !pp.disabled))
    }

    function yp(pp) {
      const ip = Wp(),
        cp = ip.findIndex((pp => pp.id === Lp));
      return !(cp < 0 || ip.length < 2) && (Ap(ip[(cp + pp + ip.length) % ip.length]), !0)
    }

    function Up() {
      return null !== Lp && Wp().length > 1
    }

    function wp() {
      Yp(null)
    }

    function vp() {
      "inventory" !== Op.c.get("openInGameMenuName") && Yp(null)
    }

    function tp() {
      const pp = Lp;
      return Yp(null), pp
    }

    function Hp(pp) {
      return Sp.set(pp.id, pp), op.m.GA(Ip, xp(), !0), () => {
        Sp.get(pp.id) === pp && (Sp.delete(pp.id), op.m.GA(Ip, xp()))
      }
    }
  },
  36799: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Dp,
      d: () => xp,
      h: () => wp,
      l: () => vp,
      o: () => Pp,
      s: () => Yp,
      t: () => Up,
      x: () => Wp
    });
    var Op = cp(25),
      op = cp(34),
      Ip = cp(1308),
      Sp = cp(36804);
    const xp = "clientGameUiChanged";
    let Lp = null;

    function Yp() {
      return Lp
    }

    function Dp(pp, ip) {
      const cp = {
        content: pp,
        menu: ip
      };
      return Lp = cp, op.m.GA(xp, Lp, !0), () => {
        Lp === cp && (Lp = null, yp = !1, wp(), op.m.GA(xp, null))
      }
    }
    let Ap = null;

    function Pp() {
      return Ap
    }

    function Wp(pp) {
      return Ap = pp, () => {
        Ap === pp && (Ap = null)
      }
    }
    let yp = !1;

    function Up() {
      const pp = Op.c.get("openInGameMenuName");
      "clientGame" !== pp && (yp = "inventory" === pp), (0, Sp.n)() || (0, Sp.f)(), (0, Ip.s)(Ip.c), Op.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function wp() {
      tp(!1)
    }

    function vp() {
      tp(yp)
    }

    function tp(pp) {
      "clientGame" === Op.c.get("openInGameMenuName") && Op.c.set({
        openInGameMenuName: pp ? "inventory" : null
      }), pp || (0, Sp.f)(), yp = !1
    }
  },
  38729: (pp, ip, cp) => {
    function Op(pp, ip, cp) {
      const Op = new Set,
        op = new ResizeObserver(cp),
        Ip = () => {
          const ip = new Set(document.querySelectorAll(pp));
          let Ip = !1;
          for (const pp of Op) ip.has(pp) || (op.unobserve(pp), Op.delete(pp), Ip = !0);
          for (const pp of ip) Op.has(pp) || (op.observe(pp), Sp.observe(pp, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Op.add(pp));
          Ip && cp()
        },
        Sp = new MutationObserver((ip => {
          ip.some((pp => "attributes" === pp.type)) && cp(), ip.some((ip => function(pp, ip, cp) {
            if ("childList" !== pp.type) return !1;
            for (const Op of pp.addedNodes)
              if (Op instanceof Element && (Op.matches(ip) || Op.querySelector(ip))) return !0;
            for (const Op of pp.removedNodes)
              if (Op instanceof Element)
                for (const pp of cp)
                  if (Op.contains(pp)) return !0;
            return !1
          }(ip, pp, Op))) && Ip()
        }));
      Sp.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const xp of ip) op.observe(xp);
      return window.addEventListener("resize", cp), Ip(), cp(), () => {
        op.disconnect(), Sp.disconnect(), window.removeEventListener("resize", cp)
      }
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  9002: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp,
      f: () => Lp
    });
    var Op = cp(25),
      op = cp(1349),
      Ip = cp(104);
    const Sp = {
      blockMined: {
        pattern: [18],
        priority: 1,
        minGapMs: 120
      },
      hitLanded: {
        pattern: [20],
        priority: 2,
        minGapMs: 80
      },
      damageTaken: {
        pattern: [45],
        priority: 3,
        minGapMs: 250
      },
      fishBite: {
        pattern: null,
        priority: 3,
        minGapMs: 0
      },
      death: {
        pattern: [60, 70, 120],
        priority: 4,
        minGapMs: 0
      },
      lockReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      lockLocked: {
        pattern: [15, 50, 15],
        priority: 2,
        minGapMs: 0
      },
      autorunLedgeStop: {
        pattern: [40],
        priority: 3,
        minGapMs: 0
      }
    };

    function xp() {
      return (0, Ip.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Lp = new class {
      constructor(pp) {
        this.deps = pp, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(pp, ip) {
        var cp;
        if (!this.deps.enabled()) return;
        const Op = Sp[pp],
          op = null !== ip && void 0 !== ip ? ip : Op.pattern;
        if (null === op) return void console.warn("No vibration pattern for", pp);
        const Ip = this.deps.now();
        Ip - this.lastAnyAt < 40 && Op.priority < this.playingPriority || Ip - (null !== (cp = this.lastAt.get(pp)) && void 0 !== cp ? cp : -1 / 0) < Op.minGapMs || Ip < this.playingUntil && Op.priority < this.playingPriority || (this.lastAt.set(pp, Ip), this.lastAnyAt = Ip, this.playingUntil = Ip + op.reduce(((pp, ip) => pp + ip), 0), this.playingPriority = Op.priority, this.deps.vibrate(op))
      }
    }({
      vibrate: pp => {
        navigator.vibrate([...pp])
      },
      now: () => performance.now(),
      enabled: () => xp() && Op.c.get("isTouchScreen") && Op.c.get("clientEscMenuOptions").vibration && !(0, op.e)()
    })
  },
  4970: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      f: () => Op,
      i: () => Ip,
      m: () => Lp,
      o: () => Sp
    });
    const Op = ["sine", "triangle", "square", "sawtooth"],
      op = 55,
      Ip = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function Sp(pp) {
      return "string" !== typeof pp ? pp : Object.hasOwn(Ip, pp) ? Ip[pp] : null
    }

    function xp(pp, ip, cp) {
      return Math.min(cp, Math.max(ip, pp))
    }

    function Lp(pp) {
      const ip = xp(pp.durationMs, 10, 500),
        cp = xp(pp.attackMs, 0, ip),
        {
          intonation: op
        } = pp;
      return {
        waveform: Op.includes(pp.waveform) ? pp.waveform : "sine",
        pitchHz: xp(pp.pitchHz, 20, 4e3),
        glideSemitones: xp(pp.glideSemitones, -24, 24),
        durationMs: ip,
        attackMs: cp,
        releaseMs: xp(pp.releaseMs, 0, ip - cp),
        lowpassHz: null === pp.lowpassHz ? null : xp(pp.lowpassHz, 20, 2e4),
        volume: xp(pp.volume, 0, 2),
        intonation: {
          variationSemitones: xp(op.variationSemitones, 0, 6),
          declineSemitones: xp(op.declineSemitones, 0, 12),
          questionRiseSemitones: xp(op.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: xp(op.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: xp(pp.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);