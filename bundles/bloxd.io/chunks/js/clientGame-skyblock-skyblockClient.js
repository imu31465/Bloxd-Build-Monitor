export const id = 25;
export const ids = [25];
export const modules = {
  36013: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Xb,
      e: () => jb,
      h: () => Pb,
      k: () => Lb
    });
    var Ab = Ub(8906),
      Mb = Ub(36017),
      Tb = Ub(36023),
      Eb = Ub(8280),
      Yb = Ub(1345),
      Bb = Ub(52),
      eb = Ub(75),
      vb = Ub(1023);

    function Lb() {
      var bb;
      return (0, Yb.i)(Mb.c, (0, Mb.l)()), (0, vb.jsx)(vb.Fragment, {
        children: null === (bb = (0, Mb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Pb(bb) {
      var ab;
      let {
        show: Ub
      } = bb;
      (0, Yb.i)(Mb.c, (0, Mb.l)());
      const eb = null === (ab = (0, Mb.l)()) || void 0 === ab ? void 0 : ab.menu;
      return (0, Bb.useEffect)((() => {
        var bb;
        Ub || (null === eb || void 0 === eb || null === (bb = eb.onClose) || void 0 === bb || bb.call(eb), (0, Tb.p)())
      }), [Ub, eb]), (0, Bb.useEffect)((() => Ub ? (0, Eb.g)(Tb.v, Tb.i) : void 0), [Ub]), (0, vb.jsx)(Ab.d, {
        showing: Ub,
        globallyUniqueKey: "clientGameMenu",
        children: null === eb || void 0 === eb ? void 0 : eb.content
      })
    }

    function Xb(bb) {
      let {
        placement: ab = "bottom"
      } = bb;
      return (0, vb.jsx)("div", {
        id: `clientGameHud-${ab}`,
        style: {
          display: "contents"
        }
      })
    }

    function jb(bb) {
      let {
        children: ab,
        placement: Ub = "bottom"
      } = bb;
      const [Ab, Mb] = (0, Bb.useState)(null);
      return (0, Bb.useEffect)((() => {
        Mb(document.getElementById(`clientGameHud-${Ub}`))
      }), [Ub]), Ab ? (0, eb.createPortal)(ab, Ab) : null
    }
  },
  4516: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => kb,
      f: () => yb
    });
    var Ab = Ub(984),
      Mb = Ub.n(Ab),
      Tb = Ub(52),
      Eb = Ub(1134),
      Yb = Ub(4522),
      Bb = Ub(1794),
      eb = Ub(2268),
      vb = Ub(4531),
      Lb = Ub(1023);
    const Pb = new WeakMap;
    let Xb = 0;

    function jb(bb) {
      let ab = Pb.get(bb);
      return void 0 === ab && (ab = Xb++, Pb.set(bb, ab)), ab
    }

    function Rb(bb) {
      let {
        piece: ab
      } = bb;
      return "space" === ab.kind ? (0, Lb.jsx)(Lb.Fragment, {
        children: ab.text
      }) : (0, Lb.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${ab.delayMs}ms`
        },
        children: (0, Lb.jsx)(Yb.c, {
          text: "icon" === ab.kind ? `[[${ab.icon}]]` : ab.text
        })
      })
    }

    function kb(bb) {
      let {
        display: ab
      } = bb;
      const {
        selectedLanguage: Ub
      } = (0, Eb.A)(), Ab = (0, Tb.useMemo)((() => (0, vb.e)((0, vb.g)(ab).plan.pieces)), [ab, Ub.code]);
      return (0, Lb.jsxs)("div", {
        className: Mb()("Dialogue", {
          DialogueAnimateIn: !1 !== ab.animateIn
        }),
        children: [ab.speakerName && (0, Lb.jsx)(Bb.c, {
          text: ab.speakerName,
          className: "DialogueSpeaker"
        }), (0, Lb.jsx)("p", {
          className: "DialogueLine",
          children: Ab.map(((bb, ab) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Lb.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, ab) => (0, Lb.jsx)(Rb, {
              piece: bb
            }, ab)))
          }, ab)))
        })]
      })
    }
    const yb = (0, Tb.memo)((function() {
      const bb = (0, eb.h)("dialogue");
      return (0, Lb.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Lb.jsx)(kb, {
          display: bb
        }, jb(bb))
      })
    }))
  },
  4522: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb
    });
    var Ab = Ub(52),
      Mb = Ub(307),
      Tb = Ub(1812),
      Eb = Ub(1023);

    function Yb(bb) {
      let {
        text: ab
      } = bb;
      const Ub = [];
      let Yb = "";
      return (0, Mb.cc)(ab).forEach(((bb, ab) => {
        if ("string" === typeof bb || !(0, Tb.f)(bb.icon)) return void(Yb += "string" === typeof bb ? bb : bb.icon);
        const Mb = Math.max(0, Yb.trimEnd().search(/\S{1,12}$/));
        Ub.push((0, Eb.jsxs)(Ab.Fragment, {
          children: [Yb.slice(0, Mb), (0, Eb.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Yb.slice(Mb), (0, Eb.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Eb.jsx)(Tb.c, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, ab)), Yb = ""
      })), Ub.push(Yb), (0, Eb.jsx)(Eb.Fragment, {
        children: Ub
      })
    }
  },
  8906: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb
    });
    var Ab = Ub(4218),
      Mb = Ub(4225);

    function Tb(bb) {
      let {
        children: ab,
        showing: Ub,
        globallyUniqueKey: Tb,
        alwaysMountChildren: Eb = !1,
        doGameplayStartStopOnShow: Yb = !0,
        keepsMovement: Bb = !1
      } = bb;
      return (0, Mb.b)(!0, Ub, Tb, Bb), (0, Ab.c)(Yb, Ub), Ub || Eb ? ab : null
    }
  },
  4531: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Gb,
      g: () => hb
    });
    var Ab = Ub(4536),
      Mb = Ub(307);
    const Tb = 120,
      Eb = 260,
      Yb = 1.15,
      Bb = 1.2,
      eb = 2,
      vb = 1.08,
      Lb = .8,
      Pb = .95,
      Xb = 8,
      jb = "[\"')\\]\u300d\u300f\uff09]*",
      Rb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${jb}$`),
      kb = new RegExp(`[?\uff1f]${jb}$`),
      yb = new RegExp(`[!\uff01]${jb}$`),
      Zb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Db = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      zb = new RegExp(`[${Db}]`),
      xb = new RegExp(`[${Db}]|[^${Db}]+`, "g"),
      ib = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fb(bb) {
      let ab = 2166136261;
      for (let Ub = 0; Ub < bb.length; Ub++) ab ^= bb.charCodeAt(Ub), ab = Math.imul(ab, 16777619);
      return (ab >>> 0) / 4294967295 * 2 - 1
    }

    function mb(bb) {
      var ab;
      if (zb.test(bb)) return 1;
      const Ub = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ab = Ub.replace(/[^0-9]/g, "");
      if (Ab.length > 0 && !/\p{L}/u.test(Ub)) return Math.min(Ab.length, 4);
      const Mb = null !== (ab = Ub.match(ib)) && void 0 !== ab ? ab : [];
      if (0 === Mb.length) {
        var Tb, Eb;
        const bb = null !== (Tb = null === (Eb = Ub.match(/\p{L}/gu)) || void 0 === Eb ? void 0 : Eb.length) && void 0 !== Tb ? Tb : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), Xb)
      }
      const Yb = Ub.replace(/[^\p{L}]/gu, ""),
        Bb = Mb.length > 1 && "e" === Mb.at(-1) && Yb.endsWith("e") && !Yb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Mb.length - (Bb ? 1 : 0), Xb)
    }

    function pb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Nb(bb) {
      const ab = bb.replace(/[^\p{L}]/gu, "");
      return ab.length >= 2 && ab === ab.toUpperCase() && ab !== ab.toLowerCase()
    }

    function Wb(bb, ab) {
      var Ub;
      const Xb = ab && (0, Ab.k)(ab),
        jb = null !== (Ub = null === Xb || void 0 === Xb ? void 0 : Xb.syllableMs) && void 0 !== Ub ? Ub : Ab.b,
        Db = function(bb) {
          const ab = [];
          for (const Ab of (0, Mb.cc)(bb))
            if ("string" === typeof Ab)
              for (const bb of Ab.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  ab.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!zb.test(bb)) {
                  ab.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let Ab = !0;
                for (const Mb of null !== (Ub = bb.match(xb)) && void 0 !== Ub ? Ub : []) {
                  var Ub;
                  const bb = ab.at(-1);
                  Ab || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || zb.test(Mb) || /[\p{L}\p{N}]/u.test(Mb) ? (Ab || ab.push({
                    kind: "space",
                    text: "\u200b"
                  }), ab.push({
                    kind: "word",
                    text: Mb,
                    delayMs: 0
                  }), Ab = !1) : bb.text += Mb
                }
              } else ab.push({
                kind: "icon",
                text: Ab.icon,
                delayMs: 0
              });
          return ab
        }(bb),
        ib = [];
      let Wb = [];
      for (const Ab of Db) "space" !== Ab.kind && (Wb.push(Ab), Rb.test(Ab.text) && (ib.push(Wb), Wb = []));
      ib.push(Wb);
      const Hb = [];
      let Ib = 0;
      for (const Ab of ib) {
        var db, Fb;
        const bb = null !== (db = null === (Fb = Ab.at(-1)) || void 0 === Fb ? void 0 : Fb.text) && void 0 !== db ? db : "",
          ab = kb.test(bb),
          Ub = yb.test(bb),
          Mb = Ab.map((bb => "word" === bb.kind ? mb(bb.text) : 1)),
          Db = Mb.findLastIndex((bb => bb > 0));
        for (const [kb, yb] of Ab.entries()) {
          const bb = "word" === yb.kind,
            Ab = Mb[kb];
          yb.delayMs = Ib;
          for (let Mb = 0; Xb && Mb < Ab; Mb++) {
            const {
              intonation: Tb
            } = Xb;
            let Eb = Db > 0 ? -Tb.declineSemitones * (kb / Db) : 0;
            Eb += fb(`${pb(yb.text)}|${Mb}`) * Tb.variationSemitones;
            const Rb = Math.min(1, Tb.variationSemitones);
            let Zb = Xb.glideSemitones,
              zb = 1;
            Ub && (Eb += Tb.exclaimLiftSemitones, zb *= Yb), ab && kb === Db && (Eb += Tb.questionRiseSemitones * (Ab > 1 ? .5 + .5 * Mb / (Ab - 1) : 1), Mb === Ab - 1 && (Zb = Math.abs(Zb) + Tb.questionRiseSemitones / 2)), bb && Nb(yb.text) && (Eb += eb * Rb, zb *= Bb), Ab > 1 && 0 === Mb && (Eb += Lb * Rb, zb *= vb), Hb.push({
              atMs: Ib + Mb * jb,
              semitones: Eb,
              glideSemitones: Zb,
              durationMs: Mb < Ab - 1 ? Math.min(Xb.durationMs, jb * Pb) : Xb.durationMs,
              level: zb
            })
          }
          Ib += Ab * jb + (Rb.test(yb.text) ? Eb : Zb.test(yb.text) ? Tb : 0)
        }
      }
      return {
        pieces: Db.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: Hb
      }
    }
    var Hb = Ub(1134),
      Ib = Ub(1198),
      db = Ub(1829);

    function Fb(bb) {
      if ("string" === typeof bb) return bb;
      const ab = Ib.f.get().getCurrentLanguageCode();
      return (0, Hb.p)(ab, bb.translationKey, (0, Hb.m)(bb.params, db.c.shown))
    }

    function hb(bb) {
      const ab = void 0 === bb.voice ? null : (0, Ab.n)(bb.voice),
        Ub = ab && (0, Ab.k)(ab);
      return {
        plan: Wb(Fb(bb.line), Ub),
        synth: Ub
      }
    }

    function Gb(bb) {
      const ab = [];
      let Ub = [];
      for (const [Mb, Tb] of bb.entries()) {
        var Ab;
        "space" === Tb.kind && (" " !== Tb.text || "icon" !== (null === (Ab = bb[Mb + 1]) || void 0 === Ab ? void 0 : Ab.kind)) ? (Ub.length > 0 && ab.push(Ub), ab.push([Tb]), Ub = []) : Ub.push(Tb)
      }
      return Ub.length > 0 && ab.push(Ub), ab
    }
  },
  8280: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Tb,
      g: () => Mb
    });
    let Ab = null;
    const Mb = function(bb) {
        const ab = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ab = ab, () => {
          Ab === ab && (Ab = null)
        }
      },
      Tb = () => {
        var bb;
        return null !== (bb = Ab) && void 0 !== bb && bb.canCycle() ? Ab.cycle : null
      }
  },
  36023: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      i: () => Rb,
      j: () => kb,
      l: () => Yb,
      n: () => Pb,
      p: () => yb,
      s: () => Lb,
      u: () => Db,
      v: () => jb,
      x: () => Zb
    });
    var Ab = Ub(19),
      Mb = Ub(22);
    const Tb = "clientGameInventoryButtonsChanged",
      Eb = new Map;

    function Yb() {
      return [...Eb.values()].sort(((bb, ab) => {
        var Ub, Ab;
        return (null !== (Ub = bb.order) && void 0 !== Ub ? Ub : 0) - (null !== (Ab = ab.order) && void 0 !== Ab ? Ab : 0)
      }))
    }
    let Bb = null;

    function eb(bb) {
      Bb = bb
    }
    let vb = !1;

    function Lb(bb) {
      vb = !0;
      try {
        bb.onClick()
      } finally {
        vb = !1
      }
      bb.panel && "clientGame" === Ab.c.get("openInGameMenuName") && eb(bb.id)
    }

    function Pb() {
      return vb
    }

    function Xb() {
      return Yb().filter((bb => bb.panel && !bb.disabled))
    }

    function jb(bb) {
      const ab = Xb(),
        Ub = ab.findIndex((bb => bb.id === Bb));
      return !(Ub < 0 || ab.length < 2) && (Lb(ab[(Ub + bb + ab.length) % ab.length]), !0)
    }

    function Rb() {
      return null !== Bb && Xb().length > 1
    }

    function kb() {
      eb(null)
    }

    function yb() {
      "inventory" !== Ab.c.get("openInGameMenuName") && eb(null)
    }

    function Zb() {
      const bb = Bb;
      return eb(null), bb
    }

    function Db(bb) {
      return Eb.set(bb.id, bb), Mb.m.IR(Tb, Yb(), !0), () => {
        Eb.get(bb.id) === bb && (Eb.delete(bb.id), Mb.m.IR(Tb, Yb()))
      }
    }
  },
  36017: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      g: () => kb,
      i: () => yb,
      j: () => Pb,
      l: () => eb,
      o: () => Rb,
      s: () => Xb,
      w: () => vb
    });
    var Ab = Ub(19),
      Mb = Ub(22),
      Tb = Ub(1216),
      Eb = Ub(36023);
    const Yb = "clientGameUiChanged";
    let Bb = null;

    function eb() {
      return Bb
    }

    function vb(bb, ab) {
      const Ub = {
        content: bb,
        menu: ab
      };
      return Bb = Ub, Mb.m.IR(Yb, Bb, !0), () => {
        Bb === Ub && (Bb = null, jb = !1, kb(), Mb.m.IR(Yb, null))
      }
    }
    let Lb = null;

    function Pb() {
      return Lb
    }

    function Xb(bb) {
      return Lb = bb, () => {
        Lb === bb && (Lb = null)
      }
    }
    let jb = !1;

    function Rb() {
      const bb = Ab.c.get("openInGameMenuName");
      "clientGame" !== bb && (jb = "inventory" === bb), (0, Eb.n)() || (0, Eb.j)(), (0, Tb.h)(Tb.b), Ab.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function kb() {
      Zb(!1)
    }

    function yb() {
      Zb(jb)
    }

    function Zb(bb) {
      "clientGame" === Ab.c.get("openInGameMenuName") && Ab.c.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Eb.j)(), jb = !1
    }
  },
  37843: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub) {
      const Ab = new Set,
        Mb = new ResizeObserver(Ub),
        Tb = () => {
          const ab = new Set(document.querySelectorAll(bb));
          let Tb = !1;
          for (const bb of Ab) ab.has(bb) || (Mb.unobserve(bb), Ab.delete(bb), Tb = !0);
          for (const bb of ab) Ab.has(bb) || (Mb.observe(bb), Eb.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Ab.add(bb));
          Tb && Ub()
        },
        Eb = new MutationObserver((ab => {
          ab.some((bb => "attributes" === bb.type)) && Ub(), ab.some((ab => function(bb, ab, Ub) {
            if ("childList" !== bb.type) return !1;
            for (const Ab of bb.addedNodes)
              if (Ab instanceof Element && (Ab.matches(ab) || Ab.querySelector(ab))) return !0;
            for (const Ab of bb.removedNodes)
              if (Ab instanceof Element)
                for (const bb of Ub)
                  if (Ab.contains(bb)) return !0;
            return !1
          }(ab, bb, Ab))) && Tb()
        }));
      Eb.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Yb of ab) Mb.observe(Yb);
      return window.addEventListener("resize", Ub), Tb(), Ub(), () => {
        Mb.disconnect(), Eb.disconnect(), window.removeEventListener("resize", Ub)
      }
    }
    Ub.d(ab, {
      e: () => Ab
    })
  },
  8441: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb,
      f: () => Bb
    });
    var Ab = Ub(19),
      Mb = Ub(1242),
      Tb = Ub(101);
    const Eb = {
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

    function Yb() {
      return (0, Tb.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Bb = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, ab) {
        var Ub;
        if (!this.deps.enabled()) return;
        const Ab = Eb[bb],
          Mb = null !== ab && void 0 !== ab ? ab : Ab.pattern;
        if (null === Mb) return void console.warn("No vibration pattern for", bb);
        const Tb = this.deps.now();
        Tb - this.lastAnyAt < 40 && Ab.priority < this.playingPriority || Tb - (null !== (Ub = this.lastAt.get(bb)) && void 0 !== Ub ? Ub : -1 / 0) < Ab.minGapMs || Tb < this.playingUntil && Ab.priority < this.playingPriority || (this.lastAt.set(bb, Tb), this.lastAnyAt = Tb, this.playingUntil = Tb + Mb.reduce(((bb, ab) => bb + ab), 0), this.playingPriority = Ab.priority, this.deps.vibrate(Mb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Yb() && Ab.c.get("isTouchScreen") && Ab.c.get("clientEscMenuOptions").vibration && !(0, Mb.f)()
    })
  },
  36471: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Yb,
      e: () => Eb
    });
    var Ab = Ub(36460),
      Mb = Ub(325),
      Tb = Ub(1786);

    function Eb(bb) {
      if ("jT" in bb) return ib.createAnimationScript(bb);
      return new eb(bb).createAnimationScript()
    }

    function Yb(bb, ab, Ub, Mb) {
      const Tb = bb.jT <= 0 ? 1 : ab + Ub * Math.max(0, Mb) / bb.jT;
      return bb.RT === Ab.k.LoopOnLastFrame ? Tb % 1 : bb.RT === Ab.k.NoLoop && Tb >= 1 ? null : Math.min(1, Tb)
    }
    class Bb {
      createAnimationScript(bb) {
        const {
          jT: ab,
          loop: Ub,
          kT: Ab
        } = bb;
        return {
          jT: Math.round(ab),
          RT: this.createLoopMode(null !== Ub && void 0 !== Ub && Ub),
          kT: this.createNodeSkeletonAnimationScript(null !== Ab && void 0 !== Ab ? Ab : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Ab.k.NoLoop;
          case !0:
            return Ab.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Ab.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ab = {};
        for (const Ub in bb) {
          const Ab = bb[Ub];
          ab[Ub] = this.createNodeAnimationScript(Ab)
        }
        return ab
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: ab
        } = bb, Ub = ab.filter((bb => Number.isFinite(bb.timeFraction)));
        return Ub.sort(((bb, ab) => bb.timeFraction - ab.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Ub, "rotation", Pb),
          position: this.createTimelineFromKeyframes(Ub, "position", jb)
        }
      }
      createTimelineFromKeyframes(bb, ab, Ub) {
        const Ab = [];
        for (const Bb of bb) {
          const bb = Bb[ab];
          if (bb) {
            const ab = this.createAnimationFrameWithoutPrecomputes(Bb.timeFraction, bb);
            vb(ab) && Ab.push(ab)
          }
        }
        const Mb = [];
        for (let Bb = 0; Bb < Ab.length; Bb++) {
          var Tb, Eb, Yb;
          const bb = Ab[Bb],
            ab = null !== (Tb = Ab[Bb - 1]) && void 0 !== Tb ? Tb : bb,
            eb = null !== (Eb = Ab[Bb + 1]) && void 0 !== Eb ? Eb : bb,
            vb = null !== (Yb = Ab[Bb + 2]) && void 0 !== Yb ? Yb : eb;
          Mb.push({
            ...bb,
            ...Ub(ab.post, ab.timeFraction, bb.post, bb.timeFraction, eb.pre, eb.timeFraction, vb.pre, vb.timeFraction)
          })
        }
        return Mb
      }
      createAnimationFrameWithoutPrecomputes(bb, ab) {
        let Ub, Ab, Mb = null;
        var Tb;
        if ("object" === typeof ab && "point" in ab) Mb = null !== (Tb = ab.DT) && void 0 !== Tb ? Tb : null, Ub = ab.point, Ab = ab.point;
        else if ("object" === typeof ab && "pre" in ab) {
          var Eb;
          Mb = null !== (Eb = ab.DT) && void 0 !== Eb ? Eb : null, Ub = ab.pre, Ab = ab.post
        } else Ub = ab, Ab = ab;
        return {
          timeFraction: bb,
          DT: this.createLerpMode(Mb),
          pre: Ub,
          post: Ab
        }
      }
      createLerpMode(bb) {
        return null === bb ? Ab.h.Linear : Bb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Bb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ab.h.Linear,
      "catmull-rom-spline": Ab.h.CatmullRomSpline
    };
    class eb {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: ab,
          bones: Ub
        } = this.animationSchema;
        return {
          jT: Math.round(1e3 * bb),
          RT: this.createLoopMode(null !== ab && void 0 !== ab && ab),
          kT: this.createNodeSkeletonAnimationScript(null !== Ub && void 0 !== Ub ? Ub : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return Ab.k.NoLoop;
          case !0:
            return Ab.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Ab.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const ab = {};
        for (const Ub in bb) {
          const Ab = bb[Ub];
          ab[Ub] = this.createNodeAnimationScript(Ab)
        }
        return ab
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: ab,
          position: Ub
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== ab && void 0 !== ab ? ab : null, kb, Pb, !0),
          position: this.createAnimationTimeline(null !== Ub && void 0 !== Ub ? Ub : null, Zb, jb, !1)
        }
      }
      createAnimationTimeline(bb, ab, Ub, Ab) {
        if (null === bb) return [];
        if (Array.isArray(bb)) {
          bb = {
            "0.0": bb
          }
        }
        const Mb = Object.entries(bb).map((bb => {
          let [Ub, Ab] = bb;
          const Mb = Number(Ub) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Mb, Ab, ab)
        })).filter(vb);
        Mb.sort(((bb, ab) => bb.timeFraction - ab.timeFraction)), Ab && function(bb) {
          for (let ab = 1; ab < bb.length; ab++) {
            const Ub = bb[ab - 1].post,
              Ab = bb[ab],
              Mb = Db(Ab.pre),
              Tb = Db(Ab.post),
              Eb = xb(Ub, Ab.pre);
            xb(Ub, Mb) < Eb && (bb[ab] = {
              ...Ab,
              pre: Mb,
              post: Tb
            })
          }
        }(Mb);
        const Tb = [];
        for (let eb = 0; eb < Mb.length; eb++) {
          var Eb, Yb, Bb;
          const bb = Mb[eb],
            ab = null !== (Eb = Mb[eb - 1]) && void 0 !== Eb ? Eb : bb,
            Ab = null !== (Yb = Mb[eb + 1]) && void 0 !== Yb ? Yb : bb,
            vb = null !== (Bb = Mb[eb + 2]) && void 0 !== Bb ? Bb : Ab;
          Tb.push({
            ...bb,
            ...Ub(ab.post, ab.timeFraction, bb.post, bb.timeFraction, Ab.pre, Ab.timeFraction, vb.pre, vb.timeFraction)
          })
        }
        return Tb
      }
      createAnimationFrameWithoutPrecomputes(bb, ab, Ub) {
        let Ab, Mb, Tb = null;
        if ("object" === typeof ab && "post" in ab) {
          var Eb;
          Tb = null !== (Eb = ab.lerp_mode) && void 0 !== Eb ? Eb : null, Mb = Rb(ab.post, Ub), Ab = ab.pre ? Rb(ab.pre, Ub) : Mb
        } else {
          const bb = Rb(ab, Ub);
          Mb = bb, Ab = bb
        }
        return {
          timeFraction: bb,
          DT: this.createLerpMode(Tb),
          pre: Ab,
          post: Mb
        }
      }
      createLerpMode(bb) {
        return null === bb ? Ab.h.Linear : eb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function vb(bb) {
      return Number.isFinite(bb.timeFraction) && Lb(bb.pre) && Lb(bb.post)
    }

    function Lb(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function Pb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      const Bb = Tb - ab,
        eb = Tb - Ab,
        vb = Yb - Ab,
        Lb = [null, null, null];
      for (let Pb = 0; Pb < Lb.length; Pb++) Lb[Pb] = Xb(bb[Pb], Ub[Pb], Mb[Pb], Eb[Pb], Bb, vb);
      return {
        zT: eb,
        xT: Lb
      }
    }

    function Xb(bb, ab, Ub, Ab, Tb, Eb) {
      return {
        fT: Mb.d.computeShortestRotation(bb, Ub) / Tb,
        mT: Mb.d.computeShortestRotation(ab, Ab) / Eb,
        delta: Mb.d.computeShortestRotation(ab, Ub)
      }
    }

    function jb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      const Bb = Tb - ab,
        eb = Tb - Ab,
        vb = Yb - Ab,
        Lb = [null, null, null];
      for (let Pb = 0; Pb < Lb.length; Pb++) Lb[Pb] = {
        fT: (Mb[Pb] - bb[Pb]) / Bb,
        mT: (Eb[Pb] - Ub[Pb]) / vb,
        delta: Mb[Pb] - Ub[Pb]
      };
      return {
        zT: eb,
        xT: Lb
      }
    }

    function Rb(bb, ab) {
      return null === ab ? bb : ab(bb)
    }

    function kb(bb) {
      const [ab, Ub, Ab] = bb, Eb = -(0, Tb.i)(ab), Yb = -(0, Tb.i)(Ub), Bb = (0, Tb.i)(Ab), eb = Mb.d.quaternionFromEulerZYX(Eb, Yb, Bb);
      return Mb.d.eulerYXZFromQuaternion(eb)
    }
    eb.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ab.h.Linear,
      catmullrom: Ab.h.CatmullRomSpline
    };
    const yb = 1 / 16;

    function Zb(bb) {
      return [-bb[0] * yb, bb[1] * yb, bb[2] * yb]
    }

    function Db(bb) {
      const [ab, Ub, Ab] = bb;
      return [ab >= 0 ? Math.PI - ab : -Math.PI - ab, zb(Ub + Math.PI), zb(Ab + Math.PI)]
    }

    function zb(bb) {
      return Mb.d.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function xb(bb, ab) {
      return Math.abs(Mb.d.computeShortestRotation(bb[0], ab[0])) + Math.abs(Mb.d.computeShortestRotation(bb[1], ab[1])) + Math.abs(Mb.d.computeShortestRotation(bb[2], ab[2]))
    }
    const ib = new Bb
  },
  36460: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      d: () => Tb,
      h: () => Ab,
      k: () => Mb
    });
    let Ab = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Mb = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Eb = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  },
  4536: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb,
      e: () => Ab,
      i: () => Tb,
      k: () => Bb,
      n: () => Eb
    });
    const Ab = ["sine", "triangle", "square", "sawtooth"],
      Mb = 55,
      Tb = {
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

    function Eb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(Tb, bb) ? Tb[bb] : null
    }

    function Yb(bb, ab, Ub) {
      return Math.min(Ub, Math.max(ab, bb))
    }

    function Bb(bb) {
      const ab = Yb(bb.durationMs, 10, 500),
        Ub = Yb(bb.attackMs, 0, ab),
        {
          intonation: Mb
        } = bb;
      return {
        waveform: Ab.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Yb(bb.pitchHz, 20, 4e3),
        glideSemitones: Yb(bb.glideSemitones, -24, 24),
        durationMs: ab,
        attackMs: Ub,
        releaseMs: Yb(bb.releaseMs, 0, ab - Ub),
        lowpassHz: null === bb.lowpassHz ? null : Yb(bb.lowpassHz, 20, 2e4),
        volume: Yb(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Yb(Mb.variationSemitones, 0, 6),
          declineSemitones: Yb(Mb.declineSemitones, 0, 12),
          questionRiseSemitones: Yb(Mb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Yb(Mb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Yb(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);