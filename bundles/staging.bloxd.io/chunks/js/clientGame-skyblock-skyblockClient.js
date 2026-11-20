export const id = 25;
export const ids = [25];
export const modules = {
  36208: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Zb,
      e: () => Xb,
      f: () => wb,
      h: () => Hb
    });
    var Bb = hb(9085),
      Ob = hb(36214),
      Gb = hb(36217),
      Ub = hb(8444),
      Lb = hb(1348),
      Yb = hb(49),
      Sb = hb(65),
      ab = hb(1007);

    function Hb() {
      var bb;
      return (0, Lb.k)(Ob.c, (0, Ob.m)()), (0, ab.jsx)(ab.Fragment, {
        children: null === (bb = (0, Ob.m)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function wb(bb) {
      var ub;
      let {
        show: hb
      } = bb;
      (0, Lb.k)(Ob.c, (0, Ob.m)());
      const Sb = null === (ub = (0, Ob.m)()) || void 0 === ub ? void 0 : ub.menu;
      return (0, Yb.useEffect)((() => {
        var bb;
        hb || (null === Sb || void 0 === Sb || null === (bb = Sb.onClose) || void 0 === bb || bb.call(Sb), (0, Gb.o)())
      }), [hb, Sb]), (0, Yb.useEffect)((() => hb ? (0, Ub.f)(Gb.u, Gb.e) : void 0), [hb]), (0, ab.jsx)(Bb.b, {
        showing: hb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Sb || void 0 === Sb ? void 0 : Sb.content
      })
    }

    function Zb(bb) {
      let {
        placement: ub = "bottom"
      } = bb;
      return (0, ab.jsx)("div", {
        id: `clientGameHud-${ub}`,
        style: {
          display: "contents"
        }
      })
    }

    function Xb(bb) {
      let {
        children: ub,
        placement: hb = "bottom"
      } = bb;
      const [Bb, Ob] = (0, Yb.useState)(null);
      return (0, Yb.useEffect)((() => {
        Ob(document.getElementById(`clientGameHud-${hb}`))
      }), [hb]), Bb ? (0, Sb.createPortal)(ub, Bb) : null
    }
  },
  4598: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => ob,
      g: () => Ab
    });
    var Bb = hb(958),
      Ob = hb.n(Bb),
      Gb = hb(49),
      Ub = hb(1095),
      Lb = hb(4606),
      Yb = hb(1789),
      Sb = hb(2288),
      ab = hb(4611),
      Hb = hb(1007);
    const wb = new WeakMap;
    let Zb = 0;

    function Xb(bb) {
      let ub = wb.get(bb);
      return void 0 === ub && (ub = Zb++, wb.set(bb, ub)), ub
    }

    function pb(bb) {
      let {
        piece: ub
      } = bb;
      return "space" === ub.kind ? (0, Hb.jsx)(Hb.Fragment, {
        children: ub.text
      }) : (0, Hb.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ub.delayMs}ms`
        },
        children: (0, Hb.jsx)(Lb.c, {
          text: "icon" === ub.kind ? `[[${ub.icon}]]` : ub.text
        })
      })
    }

    function ob(bb) {
      let {
        display: ub
      } = bb;
      const {
        selectedLanguage: hb
      } = (0, Ub.K)(), Bb = (0, Gb.useMemo)((() => (0, ab.e)((0, ab.i)(ub).plan.pieces)), [ub, hb.code]);
      return (0, Hb.jsxs)("div", {
        className: Ob()("Dialogue", {
          DialogueAnimateIn: !1 !== ub.animateIn
        }),
        children: [ub.speakerName && (0, Hb.jsx)(Yb.c, {
          text: ub.speakerName,
          className: "DialogueSpeaker"
        }), (0, Hb.jsx)("p", {
          className: "DialogueLine",
          children: Bb.map(((bb, ub) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Hb.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, ub) => (0, Hb.jsx)(pb, {
              piece: bb
            }, ub)))
          }, ub)))
        })]
      })
    }
    const Ab = (0, Gb.memo)((function() {
      const bb = (0, Sb.f)("dialogue");
      return (0, Hb.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Hb.jsx)(ob, {
          display: bb
        }, Xb(bb))
      })
    }))
  },
  4606: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = hb(49),
      Ob = hb(298),
      Gb = hb(1799),
      Ub = hb(1007);

    function Lb(bb) {
      let {
        text: ub
      } = bb;
      const hb = [];
      let Lb = "";
      return (0, Ob.nc)(ub).forEach(((bb, ub) => {
        if ("string" === typeof bb || !(0, Gb.e)(bb.icon)) return void(Lb += "string" === typeof bb ? bb : bb.icon);
        const Ob = Math.max(0, Lb.trimEnd().search(/\S{1,12}$/));
        hb.push((0, Ub.jsxs)(Bb.Fragment, {
          children: [Lb.slice(0, Ob), (0, Ub.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Lb.slice(Ob), (0, Ub.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Ub.jsx)(Gb.d, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, ub)), Lb = ""
      })), hb.push(Lb), (0, Ub.jsx)(Ub.Fragment, {
        children: hb
      })
    }
  },
  9085: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(4296),
      Ob = hb(4302);

    function Gb(bb) {
      let {
        children: ub,
        showing: hb,
        globallyUniqueKey: Gb,
        alwaysMountChildren: Ub = !1,
        doGameplayStartStopOnShow: Lb = !0,
        keepsMovement: Yb = !1
      } = bb;
      return (0, Ob.c)(!0, hb, Gb, Yb), (0, Bb.c)(Lb, hb), hb || Ub ? ub : null
    }
  },
  4611: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Jb,
      i: () => tb
    });
    var Bb = hb(4617),
      Ob = hb(298);
    const Gb = 120,
      Ub = 260,
      Lb = 1.15,
      Yb = 1.2,
      Sb = 2,
      ab = 1.08,
      Hb = .8,
      wb = .95,
      Zb = 8,
      Xb = "[\"')\\]\u300d\u300f\uff09]*",
      pb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Xb}$`),
      ob = new RegExp(`[?\uff1f]${Xb}$`),
      Ab = new RegExp(`[!\uff01]${Xb}$`),
      lb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Kb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Wb = new RegExp(`[${Kb}]`),
      Cb = new RegExp(`[${Kb}]|[^${Kb}]+`, "g"),
      db = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function rb(bb) {
      let ub = 2166136261;
      for (let hb = 0; hb < bb.length; hb++) ub ^= bb.charCodeAt(hb), ub = Math.imul(ub, 16777619);
      return (ub >>> 0) / 4294967295 * 2 - 1
    }

    function jb(bb) {
      var ub;
      if (Wb.test(bb)) return 1;
      const hb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Bb = hb.replace(/[^0-9]/g, "");
      if (Bb.length > 0 && !/\p{L}/u.test(hb)) return Math.min(Bb.length, 4);
      const Ob = null !== (ub = hb.match(db)) && void 0 !== ub ? ub : [];
      if (0 === Ob.length) {
        var Gb, Ub;
        const bb = null !== (Gb = null === (Ub = hb.match(/\p{L}/gu)) || void 0 === Ub ? void 0 : Ub.length) && void 0 !== Gb ? Gb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Zb)
      }
      const Lb = hb.replace(/[^\p{L}]/gu, ""),
        Yb = Ob.length > 1 && "e" === Ob.at(-1) && Lb.endsWith("e") && !Lb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ob.length - (Yb ? 1 : 0), Zb)
    }

    function nb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Db(bb) {
      const ub = bb.replace(/[^\p{L}]/gu, "");
      return ub.length >= 2 && ub === ub.toUpperCase() && ub !== ub.toLowerCase()
    }

    function xb(bb, ub) {
      var hb;
      const Zb = ub && (0, Bb.l)(ub),
        Xb = null !== (hb = null === Zb || void 0 === Zb ? void 0 : Zb.syllableMs) && void 0 !== hb ? hb : Bb.d,
        Kb = function(bb) {
          const ub = [];
          for (const Bb of (0, Ob.nc)(bb))
            if ("string" === typeof Bb)
              for (const bb of Bb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  ub.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!Wb.test(bb)) {
                  ub.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let Bb = !0;
                for (const Ob of null !== (hb = bb.match(Cb)) && void 0 !== hb ? hb : []) {
                  var hb;
                  const bb = ub.at(-1);
                  Bb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Wb.test(Ob) || /[\p{L}\p{N}]/u.test(Ob) ? (Bb || ub.push({
                    kind: "space",
                    text: "\u200b"
                  }), ub.push({
                    kind: "word",
                    text: Ob,
                    delayMs: 0
                  }), Bb = !1) : bb.text += Ob
                }
              } else ub.push({
                kind: "icon",
                text: Bb.icon,
                delayMs: 0
              });
          return ub
        }(bb),
        db = [];
      let xb = [];
      for (const Bb of Kb) "space" !== Bb.kind && (xb.push(Bb), pb.test(Bb.text) && (db.push(xb), xb = []));
      db.push(xb);
      const zb = [];
      let gb = 0;
      for (const Bb of db) {
        var ib, vb;
        const bb = null !== (ib = null === (vb = Bb.at(-1)) || void 0 === vb ? void 0 : vb.text) && void 0 !== ib ? ib : "",
          ub = ob.test(bb),
          hb = Ab.test(bb),
          Ob = Bb.map((bb => "word" === bb.kind ? jb(bb.text) : 1)),
          Kb = Ob.findLastIndex((bb => bb > 0));
        for (const [ob, Ab] of Bb.entries()) {
          const bb = "word" === Ab.kind,
            Bb = Ob[ob];
          Ab.delayMs = gb;
          for (let Ob = 0; Zb && Ob < Bb; Ob++) {
            const {
              intonation: Gb
            } = Zb;
            let Ub = Kb > 0 ? -Gb.declineSemitones * (ob / Kb) : 0;
            Ub += rb(`${nb(Ab.text)}|${Ob}`) * Gb.variationSemitones;
            const pb = Math.min(1, Gb.variationSemitones);
            let lb = Zb.glideSemitones,
              Wb = 1;
            hb && (Ub += Gb.exclaimLiftSemitones, Wb *= Lb), ub && ob === Kb && (Ub += Gb.questionRiseSemitones * (Bb > 1 ? .5 + .5 * Ob / (Bb - 1) : 1), Ob === Bb - 1 && (lb = Math.abs(lb) + Gb.questionRiseSemitones / 2)), bb && Db(Ab.text) && (Ub += Sb * pb, Wb *= Yb), Bb > 1 && 0 === Ob && (Ub += Hb * pb, Wb *= ab), zb.push({
              atMs: gb + Ob * Xb,
              semitones: Ub,
              glideSemitones: lb,
              durationMs: Ob < Bb - 1 ? Math.min(Zb.durationMs, Xb * wb) : Zb.durationMs,
              level: Wb
            })
          }
          gb += Bb * Xb + (pb.test(Ab.text) ? Ub : lb.test(Ab.text) ? Gb : 0)
        }
      }
      return {
        pieces: Kb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: zb
      }
    }
    var zb = hb(1095),
      gb = hb(1144),
      ib = hb(1819);

    function vb(bb) {
      if ("string" === typeof bb) return bb;
      const ub = gb.h.get().getCurrentLanguageCode();
      return (0, zb.w)(ub, bb.translationKey, (0, zb.s)(bb.params, ib.d.shown))
    }

    function tb(bb) {
      const ub = void 0 === bb.voice ? null : (0, Bb.o)(bb.voice),
        hb = ub && (0, Bb.l)(ub);
      return {
        plan: xb(vb(bb.line), hb),
        synth: hb
      }
    }

    function Jb(bb) {
      const ub = [];
      let hb = [];
      for (const [Ob, Gb] of bb.entries()) {
        var Bb;
        "space" === Gb.kind && (" " !== Gb.text || "icon" !== (null === (Bb = bb[Ob + 1]) || void 0 === Bb ? void 0 : Bb.kind)) ? (hb.length > 0 && ub.push(hb), ub.push([Gb]), hb = []) : hb.push(Gb)
      }
      return hb.length > 0 && ub.push(hb), ub
    }
  },
  8444: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    let Bb = null;
    const Ob = function(bb) {
        const ub = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Bb = ub, () => {
          Bb === ub && (Bb = null)
        }
      },
      Gb = () => {
        var bb;
        return null !== (bb = Bb) && void 0 !== bb && bb.canCycle() ? Bb.cycle : null
      }
  },
  36217: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => pb,
      i: () => ob,
      k: () => Lb,
      m: () => wb,
      o: () => Ab,
      q: () => Hb,
      r: () => Kb,
      u: () => Xb,
      v: () => lb
    });
    var Bb = hb(13),
      Ob = hb(16);
    const Gb = "clientGameInventoryButtonsChanged",
      Ub = new Map;

    function Lb() {
      return [...Ub.values()].sort(((bb, ub) => {
        var hb, Bb;
        return (null !== (hb = bb.order) && void 0 !== hb ? hb : 0) - (null !== (Bb = ub.order) && void 0 !== Bb ? Bb : 0)
      }))
    }
    let Yb = null;

    function Sb(bb) {
      Yb = bb
    }
    let ab = !1;

    function Hb(bb) {
      ab = !0;
      try {
        bb.onClick()
      } finally {
        ab = !1
      }
      bb.panel && "clientGame" === Bb.d.get("openInGameMenuName") && Sb(bb.id)
    }

    function wb() {
      return ab
    }

    function Zb() {
      return Lb().filter((bb => bb.panel && !bb.disabled))
    }

    function Xb(bb) {
      const ub = Zb(),
        hb = ub.findIndex((bb => bb.id === Yb));
      return !(hb < 0 || ub.length < 2) && (Hb(ub[(hb + bb + ub.length) % ub.length]), !0)
    }

    function pb() {
      return null !== Yb && Zb().length > 1
    }

    function ob() {
      Sb(null)
    }

    function Ab() {
      "inventory" !== Bb.d.get("openInGameMenuName") && Sb(null)
    }

    function lb() {
      const bb = Yb;
      return Sb(null), bb
    }

    function Kb(bb) {
      return Ub.set(bb.id, bb), Ob.i.vp(Gb, Lb(), !0), () => {
        Ub.get(bb.id) === bb && (Ub.delete(bb.id), Ob.i.vp(Gb, Lb()))
      }
    }
  },
  36214: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb,
      g: () => ob,
      j: () => Ab,
      l: () => wb,
      m: () => Sb,
      p: () => pb,
      q: () => Zb,
      t: () => ab
    });
    var Bb = hb(13),
      Ob = hb(16),
      Gb = hb(1184),
      Ub = hb(36217);
    const Lb = "clientGameUiChanged";
    let Yb = null;

    function Sb() {
      return Yb
    }

    function ab(bb, ub) {
      const hb = {
        content: bb,
        menu: ub
      };
      return Yb = hb, Ob.i.vp(Lb, Yb, !0), () => {
        Yb === hb && (Yb = null, Xb = !1, ob(), Ob.i.vp(Lb, null))
      }
    }
    let Hb = null;

    function wb() {
      return Hb
    }

    function Zb(bb) {
      return Hb = bb, () => {
        Hb === bb && (Hb = null)
      }
    }
    let Xb = !1;

    function pb() {
      const bb = Bb.d.get("openInGameMenuName");
      "clientGame" !== bb && (Xb = "inventory" === bb), (0, Ub.m)() || (0, Ub.i)(), (0, Gb.l)(Gb.b), Bb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function ob() {
      lb(!1)
    }

    function Ab() {
      lb(Xb)
    }

    function lb(bb) {
      "clientGame" === Bb.d.get("openInGameMenuName") && Bb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Ub.i)(), Xb = !1
    }
  },
  38134: (bb, ub, hb) => {
    function Bb(bb, ub, hb) {
      const Bb = new Set,
        Ob = new ResizeObserver(hb),
        Gb = () => {
          const ub = new Set(document.querySelectorAll(bb));
          let Gb = !1;
          for (const bb of Bb) ub.has(bb) || (Ob.unobserve(bb), Bb.delete(bb), Gb = !0);
          for (const bb of ub) Bb.has(bb) || (Ob.observe(bb), Ub.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Bb.add(bb));
          Gb && hb()
        },
        Ub = new MutationObserver((ub => {
          ub.some((bb => "attributes" === bb.type)) && hb(), ub.some((ub => function(bb, ub, hb) {
            if ("childList" !== bb.type) return !1;
            for (const Bb of bb.addedNodes)
              if (Bb instanceof Element && (Bb.matches(ub) || Bb.querySelector(ub))) return !0;
            for (const Bb of bb.removedNodes)
              if (Bb instanceof Element)
                for (const bb of hb)
                  if (Bb.contains(bb)) return !0;
            return !1
          }(ub, bb, Bb))) && Gb()
        }));
      Ub.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Lb of ub) Ob.observe(Lb);
      return window.addEventListener("resize", hb), Gb(), hb(), () => {
        Ob.disconnect(), Ub.disconnect(), window.removeEventListener("resize", hb)
      }
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  8613: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Lb,
      f: () => Yb
    });
    var Bb = hb(13),
      Ob = hb(1218),
      Gb = hb(86);
    const Ub = {
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

    function Lb() {
      return (0, Gb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Yb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, ub) {
        var hb;
        if (!this.deps.enabled()) return;
        const Bb = Ub[bb],
          Ob = null !== ub && void 0 !== ub ? ub : Bb.pattern;
        if (null === Ob) return void console.warn("No vibration pattern for", bb);
        const Gb = this.deps.now();
        Gb - this.lastAnyAt < 40 && Bb.priority < this.playingPriority || Gb - (null !== (hb = this.lastAt.get(bb)) && void 0 !== hb ? hb : -1 / 0) < Bb.minGapMs || Gb < this.playingUntil && Bb.priority < this.playingPriority || (this.lastAt.set(bb, Gb), this.lastAnyAt = Gb, this.playingUntil = Gb + Ob.reduce(((bb, ub) => bb + ub), 0), this.playingPriority = Bb.priority, this.deps.vibrate(Ob))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Lb() && Bb.d.get("isTouchScreen") && Bb.d.get("clientEscMenuOptions").vibration && !(0, Ob.c)()
    })
  },
  36787: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      f: () => Ub
    });
    var Bb = hb(36772),
      Ob = hb(314),
      Gb = hb(1784);

    function Ub(bb) {
      if ("Xb" in bb) return db.createAnimationScript(bb);
      return new Sb(bb).createAnimationScript()
    }

    function Lb(bb, ub, hb, Ob) {
      const Gb = bb.Xb <= 0 ? 1 : ub + hb * Math.max(0, Ob) / bb.Xb;
      return bb.pb === Bb.k.LoopOnLastFrame ? Gb % 1 : bb.pb === Bb.k.NoLoop && Gb >= 1 ? null : Math.min(1, Gb)
    }
    class Yb {
      createAnimationScript(bb) {
        const {
          Xb: ub,
          loop: hb,
          ob: Bb
        } = bb;
        return {
          Xb: Math.round(ub),
          pb: this.createLoopMode(null !== hb && void 0 !== hb && hb),
          ob: this.createNodeSkeletonAnimationScript(null !== Bb && void 0 !== Bb ? Bb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Bb.k.NoLoop;
          case !0:
            return Bb.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Bb.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ub = {};
        for (const hb in bb) {
          const Bb = bb[hb];
          ub[hb] = this.createNodeAnimationScript(Bb)
        }
        return ub
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: ub
        } = bb, hb = ub.filter((bb => Number.isFinite(bb.timeFraction)));
        return hb.sort(((bb, ub) => bb.timeFraction - ub.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(hb, "rotation", wb),
          position: this.createTimelineFromKeyframes(hb, "position", Xb)
        }
      }
      createTimelineFromKeyframes(bb, ub, hb) {
        const Bb = [];
        for (const Yb of bb) {
          const bb = Yb[ub];
          if (bb) {
            const ub = this.createAnimationFrameWithoutPrecomputes(Yb.timeFraction, bb);
            ab(ub) && Bb.push(ub)
          }
        }
        const Ob = [];
        for (let Yb = 0; Yb < Bb.length; Yb++) {
          var Gb, Ub, Lb;
          const bb = Bb[Yb],
            ub = null !== (Gb = Bb[Yb - 1]) && void 0 !== Gb ? Gb : bb,
            Sb = null !== (Ub = Bb[Yb + 1]) && void 0 !== Ub ? Ub : bb,
            ab = null !== (Lb = Bb[Yb + 2]) && void 0 !== Lb ? Lb : Sb;
          Ob.push({
            ...bb,
            ...hb(ub.post, ub.timeFraction, bb.post, bb.timeFraction, Sb.pre, Sb.timeFraction, ab.pre, ab.timeFraction)
          })
        }
        return Ob
      }
      createAnimationFrameWithoutPrecomputes(bb, ub) {
        let hb, Bb, Ob = null;
        var Gb;
        if ("object" === typeof ub && "point" in ub) Ob = null !== (Gb = ub.Kb) && void 0 !== Gb ? Gb : null, hb = ub.point, Bb = ub.point;
        else if ("object" === typeof ub && "pre" in ub) {
          var Ub;
          Ob = null !== (Ub = ub.Kb) && void 0 !== Ub ? Ub : null, hb = ub.pre, Bb = ub.post
        } else hb = ub, Bb = ub;
        return {
          timeFraction: bb,
          Kb: this.createLerpMode(Ob),
          pre: hb,
          post: Bb
        }
      }
      createLerpMode(bb) {
        return null === bb ? Bb.h.Linear : Yb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Yb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Bb.h.Linear,
      "catmull-rom-spline": Bb.h.CatmullRomSpline
    };
    class Sb {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: ub,
          bones: hb
        } = this.animationSchema;
        return {
          Xb: Math.round(1e3 * bb),
          pb: this.createLoopMode(null !== ub && void 0 !== ub && ub),
          ob: this.createNodeSkeletonAnimationScript(null !== hb && void 0 !== hb ? hb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Bb.k.NoLoop;
          case !0:
            return Bb.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Bb.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ub = {};
        for (const hb in bb) {
          const Bb = bb[hb];
          ub[hb] = this.createNodeAnimationScript(Bb)
        }
        return ub
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: ub,
          position: hb
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== ub && void 0 !== ub ? ub : null, ob, wb, !0),
          position: this.createAnimationTimeline(null !== hb && void 0 !== hb ? hb : null, lb, Xb, !1)
        }
      }
      createAnimationTimeline(bb, ub, hb, Bb) {
        if (null === bb) return [];
        if (Array.isArray(bb)) {
          bb = {
            "0.0": bb
          }
        }
        const Ob = Object.entries(bb).map((bb => {
          let [hb, Bb] = bb;
          const Ob = Number(hb) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Ob, Bb, ub)
        })).filter(ab);
        Ob.sort(((bb, ub) => bb.timeFraction - ub.timeFraction)), Bb && function(bb) {
          for (let ub = 1; ub < bb.length; ub++) {
            const hb = bb[ub - 1].post,
              Bb = bb[ub],
              Ob = Kb(Bb.pre),
              Gb = Kb(Bb.post),
              Ub = Cb(hb, Bb.pre);
            Cb(hb, Ob) < Ub && (bb[ub] = {
              ...Bb,
              pre: Ob,
              post: Gb
            })
          }
        }(Ob);
        const Gb = [];
        for (let Sb = 0; Sb < Ob.length; Sb++) {
          var Ub, Lb, Yb;
          const bb = Ob[Sb],
            ub = null !== (Ub = Ob[Sb - 1]) && void 0 !== Ub ? Ub : bb,
            Bb = null !== (Lb = Ob[Sb + 1]) && void 0 !== Lb ? Lb : bb,
            ab = null !== (Yb = Ob[Sb + 2]) && void 0 !== Yb ? Yb : Bb;
          Gb.push({
            ...bb,
            ...hb(ub.post, ub.timeFraction, bb.post, bb.timeFraction, Bb.pre, Bb.timeFraction, ab.pre, ab.timeFraction)
          })
        }
        return Gb
      }
      createAnimationFrameWithoutPrecomputes(bb, ub, hb) {
        let Bb, Ob, Gb = null;
        if ("object" === typeof ub && "post" in ub) {
          var Ub;
          Gb = null !== (Ub = ub.lerp_mode) && void 0 !== Ub ? Ub : null, Ob = pb(ub.post, hb), Bb = ub.pre ? pb(ub.pre, hb) : Ob
        } else {
          const bb = pb(ub, hb);
          Ob = bb, Bb = bb
        }
        return {
          timeFraction: bb,
          Kb: this.createLerpMode(Gb),
          pre: Bb,
          post: Ob
        }
      }
      createLerpMode(bb) {
        return null === bb ? Bb.h.Linear : Sb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function ab(bb) {
      return Number.isFinite(bb.timeFraction) && Hb(bb.pre) && Hb(bb.post)
    }

    function Hb(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function wb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
      const Yb = Gb - ub,
        Sb = Gb - Bb,
        ab = Lb - Bb,
        Hb = [null, null, null];
      for (let wb = 0; wb < Hb.length; wb++) Hb[wb] = Zb(bb[wb], hb[wb], Ob[wb], Ub[wb], Yb, ab);
      return {
        Wb: Sb,
        Cb: Hb
      }
    }

    function Zb(bb, ub, hb, Bb, Gb, Ub) {
      return {
        jb: Ob.d.computeShortestRotation(bb, hb) / Gb,
        nb: Ob.d.computeShortestRotation(ub, Bb) / Ub,
        delta: Ob.d.computeShortestRotation(ub, hb)
      }
    }

    function Xb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
      const Yb = Gb - ub,
        Sb = Gb - Bb,
        ab = Lb - Bb,
        Hb = [null, null, null];
      for (let wb = 0; wb < Hb.length; wb++) Hb[wb] = {
        jb: (Ob[wb] - bb[wb]) / Yb,
        nb: (Ub[wb] - hb[wb]) / ab,
        delta: Ob[wb] - hb[wb]
      };
      return {
        Wb: Sb,
        Cb: Hb
      }
    }

    function pb(bb, ub) {
      return null === ub ? bb : ub(bb)
    }

    function ob(bb) {
      const [ub, hb, Bb] = bb, Ub = -(0, Gb.k)(ub), Lb = -(0, Gb.k)(hb), Yb = (0, Gb.k)(Bb), Sb = Ob.d.quaternionFromEulerZYX(Ub, Lb, Yb);
      return Ob.d.eulerYXZFromQuaternion(Sb)
    }
    Sb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Bb.h.Linear,
      catmullrom: Bb.h.CatmullRomSpline
    };
    const Ab = 1 / 16;

    function lb(bb) {
      return [-bb[0] * Ab, bb[1] * Ab, bb[2] * Ab]
    }

    function Kb(bb) {
      const [ub, hb, Bb] = bb;
      return [ub >= 0 ? Math.PI - ub : -Math.PI - ub, Wb(hb + Math.PI), Wb(Bb + Math.PI)]
    }

    function Wb(bb) {
      return Ob.d.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Cb(bb, ub) {
      return Math.abs(Ob.d.computeShortestRotation(bb[0], ub[0])) + Math.abs(Ob.d.computeShortestRotation(bb[1], ub[1])) + Math.abs(Ob.d.computeShortestRotation(bb[2], ub[2]))
    }
    const db = new Yb
  },
  36772: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub,
      f: () => Gb,
      h: () => Bb,
      k: () => Ob
    });
    let Bb = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Ob = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      Gb = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Ub = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  },
  4617: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob,
      h: () => Bb,
      i: () => Gb,
      l: () => Yb,
      o: () => Ub
    });
    const Bb = ["sine", "triangle", "square", "sawtooth"],
      Ob = 55,
      Gb = {
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

    function Ub(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(Gb, bb) ? Gb[bb] : null
    }

    function Lb(bb, ub, hb) {
      return Math.min(hb, Math.max(ub, bb))
    }

    function Yb(bb) {
      const ub = Lb(bb.durationMs, 10, 500),
        hb = Lb(bb.attackMs, 0, ub),
        {
          intonation: Ob
        } = bb;
      return {
        waveform: Bb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Lb(bb.pitchHz, 20, 4e3),
        glideSemitones: Lb(bb.glideSemitones, -24, 24),
        durationMs: ub,
        attackMs: hb,
        releaseMs: Lb(bb.releaseMs, 0, ub - hb),
        lowpassHz: null === bb.lowpassHz ? null : Lb(bb.lowpassHz, 20, 2e4),
        volume: Lb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Lb(Ob.variationSemitones, 0, 6),
          declineSemitones: Lb(Ob.declineSemitones, 0, 12),
          questionRiseSemitones: Lb(Ob.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Lb(Ob.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Lb(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);