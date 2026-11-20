export const id = 25;
export const ids = [25];
export const modules = {
  36648: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Nq,
      g: () => aq,
      h: () => Wq,
      j: () => Bq
    });
    var Yq = gq(9277),
      lq = gq(36657),
      Oq = gq(36662),
      mq = gq(8669),
      xq = gq(1416),
      Aq = gq(57),
      cq = gq(71),
      uq = gq(1070);

    function Bq() {
      var qq;
      return (0, xq.h)(lq.c, (0, lq.l)()), (0, uq.jsx)(uq.Fragment, {
        children: null === (qq = (0, lq.l)()) || void 0 === qq ? void 0 : qq.content
      })
    }

    function Wq(qq) {
      var Eq;
      let {
        show: gq
      } = qq;
      (0, xq.h)(lq.c, (0, lq.l)());
      const cq = null === (Eq = (0, lq.l)()) || void 0 === Eq ? void 0 : Eq.menu;
      return (0, Aq.useEffect)((() => {
        var qq;
        gq || (null === cq || void 0 === cq || null === (qq = cq.onClose) || void 0 === qq || qq.call(cq), (0, Oq.m)())
      }), [gq, cq]), (0, Aq.useEffect)((() => gq ? (0, mq.i)(Oq.r, Oq.d) : void 0), [gq]), (0, uq.jsx)(Yq.b, {
        showing: gq,
        globallyUniqueKey: "clientGameMenu",
        children: null === cq || void 0 === cq ? void 0 : cq.content
      })
    }

    function Nq(qq) {
      let {
        placement: Eq = "bottom"
      } = qq;
      return (0, uq.jsx)("div", {
        id: `clientGameHud-${Eq}`,
        style: {
          display: "contents"
        }
      })
    }

    function aq(qq) {
      let {
        children: Eq,
        placement: gq = "bottom"
      } = qq;
      const [Yq, lq] = (0, Aq.useState)(null);
      return (0, Aq.useEffect)((() => {
        lq(document.getElementById(`clientGameHud-${gq}`))
      }), [gq]), Yq ? (0, cq.createPortal)(Eq, Yq) : null
    }
  },
  4648: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => dq,
      g: () => jq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(1183),
      xq = gq(4656),
      Aq = gq(1876),
      cq = gq(2383),
      uq = gq(4662),
      Bq = gq(1070);
    const Wq = new WeakMap;
    let Nq = 0;

    function aq(qq) {
      let Eq = Wq.get(qq);
      return void 0 === Eq && (Eq = Nq++, Wq.set(qq, Eq)), Eq
    }

    function Vq(qq) {
      let {
        piece: Eq
      } = qq;
      return "space" === Eq.kind ? (0, Bq.jsx)(Bq.Fragment, {
        children: Eq.text
      }) : (0, Bq.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Eq.delayMs}ms`
        },
        children: (0, Bq.jsx)(xq.e, {
          text: "icon" === Eq.kind ? `[[${Eq.icon}]]` : Eq.text
        })
      })
    }

    function dq(qq) {
      let {
        display: Eq
      } = qq;
      const {
        selectedLanguage: gq
      } = (0, mq.v)(), Yq = (0, Oq.useMemo)((() => (0, uq.b)((0, uq.f)(Eq).plan.pieces)), [Eq, gq.code]);
      return (0, Bq.jsxs)("div", {
        className: lq()("Dialogue", {
          DialogueAnimateIn: !1 !== Eq.animateIn
        }),
        children: [Eq.speakerName && (0, Bq.jsx)(Aq.c, {
          text: Eq.speakerName,
          className: "DialogueSpeaker"
        }), (0, Bq.jsx)("p", {
          className: "DialogueLine",
          children: Yq.map(((qq, Eq) => 1 === qq.length && "space" === qq[0].kind ? qq[0].text : (0, Bq.jsx)("span", {
            className: "DialogueGlue",
            children: qq.map(((qq, Eq) => (0, Bq.jsx)(Vq, {
              piece: qq
            }, Eq)))
          }, Eq)))
        })]
      })
    }
    const jq = (0, Oq.memo)((function() {
      const qq = (0, cq.h)("dialogue");
      return (0, Bq.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: qq && (0, Bq.jsx)(dq, {
          display: qq
        }, aq(qq))
      })
    }))
  },
  4656: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq
    });
    var Yq = gq(57),
      lq = gq(296),
      Oq = gq(1895),
      mq = gq(1070);

    function xq(qq) {
      let {
        text: Eq
      } = qq;
      const gq = [];
      let xq = "";
      return (0, lq.Zb)(Eq).forEach(((qq, Eq) => {
        if ("string" === typeof qq || !(0, Oq.i)(qq.icon)) return void(xq += "string" === typeof qq ? qq : qq.icon);
        const lq = Math.max(0, xq.trimEnd().search(/\S{1,12}$/));
        gq.push((0, mq.jsxs)(Yq.Fragment, {
          children: [xq.slice(0, lq), (0, mq.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [xq.slice(lq), (0, mq.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": qq.icon,
              children: (0, mq.jsx)(Oq.e, {
                itemName: qq.icon,
                amount: 0
              })
            })]
          })]
        }, Eq)), xq = ""
      })), gq.push(xq), (0, mq.jsx)(mq.Fragment, {
        children: gq
      })
    }
  },
  9277: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(4364),
      lq = gq(4367);

    function Oq(qq) {
      let {
        children: Eq,
        showing: gq,
        globallyUniqueKey: Oq,
        alwaysMountChildren: mq = !1,
        doGameplayStartStopOnShow: xq = !0,
        keepsMovement: Aq = !1
      } = qq;
      return (0, lq.e)(!0, gq, Oq, Aq), (0, Yq.d)(xq, gq), gq || mq ? Eq : null
    }
  },
  4662: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Tq,
      f: () => Mq
    });
    var Yq = gq(4671),
      lq = gq(296);
    const Oq = 120,
      mq = 260,
      xq = 1.15,
      Aq = 1.2,
      cq = 2,
      uq = 1.08,
      Bq = .8,
      Wq = .95,
      Nq = 8,
      aq = "[\"')\\]\u300d\u300f\uff09]*",
      Vq = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${aq}$`),
      dq = new RegExp(`[?\uff1f]${aq}$`),
      jq = new RegExp(`[!\uff01]${aq}$`),
      Hq = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      oq = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Pq = new RegExp(`[${oq}]`),
      Qq = new RegExp(`[${oq}]|[^${oq}]+`, "g"),
      yq = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function tq(qq) {
      let Eq = 2166136261;
      for (let gq = 0; gq < qq.length; gq++) Eq ^= qq.charCodeAt(gq), Eq = Math.imul(Eq, 16777619);
      return (Eq >>> 0) / 4294967295 * 2 - 1
    }

    function rq(qq) {
      var Eq;
      if (Pq.test(qq)) return 1;
      const gq = qq.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Yq = gq.replace(/[^0-9]/g, "");
      if (Yq.length > 0 && !/\p{L}/u.test(gq)) return Math.min(Yq.length, 4);
      const lq = null !== (Eq = gq.match(yq)) && void 0 !== Eq ? Eq : [];
      if (0 === lq.length) {
        var Oq, mq;
        const qq = null !== (Oq = null === (mq = gq.match(/\p{L}/gu)) || void 0 === mq ? void 0 : mq.length) && void 0 !== Oq ? Oq : 0;
        return 0 === qq ? 0 : Math.min(Math.max(1, Math.round(qq / 2.5)), Nq)
      }
      const xq = gq.replace(/[^\p{L}]/gu, ""),
        Aq = lq.length > 1 && "e" === lq.at(-1) && xq.endsWith("e") && !xq.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(qq.replace(/[^\p{L}]/gu, ""));
      return Math.min(lq.length - (Aq ? 1 : 0), Nq)
    }

    function vq(qq) {
      return qq.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function hq(qq) {
      const Eq = qq.replace(/[^\p{L}]/gu, "");
      return Eq.length >= 2 && Eq === Eq.toUpperCase() && Eq !== Eq.toLowerCase()
    }

    function nq(qq, Eq) {
      var gq;
      const Nq = Eq && (0, Yq.i)(Eq),
        aq = null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.syllableMs) && void 0 !== gq ? gq : Yq.b,
        oq = function(qq) {
          const Eq = [];
          for (const Yq of (0, lq.Zb)(qq))
            if ("string" === typeof Yq)
              for (const qq of Yq.split(/(\s+)/)) {
                if ("" === qq) continue;
                if (/^\s+$/.test(qq)) {
                  Eq.push({
                    kind: "space",
                    text: qq
                  });
                  continue
                }
                if (!Pq.test(qq)) {
                  Eq.push({
                    kind: "word",
                    text: qq,
                    delayMs: 0
                  });
                  continue
                }
                let Yq = !0;
                for (const lq of null !== (gq = qq.match(Qq)) && void 0 !== gq ? gq : []) {
                  var gq;
                  const qq = Eq.at(-1);
                  Yq || "word" !== (null === qq || void 0 === qq ? void 0 : qq.kind) || Pq.test(lq) || /[\p{L}\p{N}]/u.test(lq) ? (Yq || Eq.push({
                    kind: "space",
                    text: "\u200b"
                  }), Eq.push({
                    kind: "word",
                    text: lq,
                    delayMs: 0
                  }), Yq = !1) : qq.text += lq
                }
              } else Eq.push({
                kind: "icon",
                text: Yq.icon,
                delayMs: 0
              });
          return Eq
        }(qq),
        yq = [];
      let nq = [];
      for (const Yq of oq) "space" !== Yq.kind && (nq.push(Yq), Vq.test(Yq.text) && (yq.push(nq), nq = []));
      yq.push(nq);
      const bq = [];
      let iq = 0;
      for (const Yq of yq) {
        var Zq, fq;
        const qq = null !== (Zq = null === (fq = Yq.at(-1)) || void 0 === fq ? void 0 : fq.text) && void 0 !== Zq ? Zq : "",
          Eq = dq.test(qq),
          gq = jq.test(qq),
          lq = Yq.map((qq => "word" === qq.kind ? rq(qq.text) : 1)),
          oq = lq.findLastIndex((qq => qq > 0));
        for (const [dq, jq] of Yq.entries()) {
          const qq = "word" === jq.kind,
            Yq = lq[dq];
          jq.delayMs = iq;
          for (let lq = 0; Nq && lq < Yq; lq++) {
            const {
              intonation: Oq
            } = Nq;
            let mq = oq > 0 ? -Oq.declineSemitones * (dq / oq) : 0;
            mq += tq(`${vq(jq.text)}|${lq}`) * Oq.variationSemitones;
            const Vq = Math.min(1, Oq.variationSemitones);
            let Hq = Nq.glideSemitones,
              Pq = 1;
            gq && (mq += Oq.exclaimLiftSemitones, Pq *= xq), Eq && dq === oq && (mq += Oq.questionRiseSemitones * (Yq > 1 ? .5 + .5 * lq / (Yq - 1) : 1), lq === Yq - 1 && (Hq = Math.abs(Hq) + Oq.questionRiseSemitones / 2)), qq && hq(jq.text) && (mq += cq * Vq, Pq *= Aq), Yq > 1 && 0 === lq && (mq += Bq * Vq, Pq *= uq), bq.push({
              atMs: iq + lq * aq,
              semitones: mq,
              glideSemitones: Hq,
              durationMs: lq < Yq - 1 ? Math.min(Nq.durationMs, aq * Wq) : Nq.durationMs,
              level: Pq
            })
          }
          iq += Yq * aq + (Vq.test(jq.text) ? mq : Hq.test(jq.text) ? Oq : 0)
        }
      }
      return {
        pieces: oq.map((qq => "space" === qq.kind ? qq : "icon" === qq.kind ? {
          kind: "icon",
          icon: qq.text,
          delayMs: qq.delayMs
        } : {
          kind: "word",
          text: qq.text,
          delayMs: qq.delayMs
        })),
        blips: bq
      }
    }
    var bq = gq(1183),
      iq = gq(1241),
      Zq = gq(1906);

    function fq(qq) {
      if ("string" === typeof qq) return qq;
      const Eq = iq.h.get().getCurrentLanguageCode();
      return (0, bq.n)(Eq, qq.translationKey, (0, bq.j)(qq.params, Zq.d.shown))
    }

    function Mq(qq) {
      const Eq = void 0 === qq.voice ? null : (0, Yq.m)(qq.voice),
        gq = Eq && (0, Yq.i)(Eq);
      return {
        plan: nq(fq(qq.line), gq),
        synth: gq
      }
    }

    function Tq(qq) {
      const Eq = [];
      let gq = [];
      for (const [lq, Oq] of qq.entries()) {
        var Yq;
        "space" === Oq.kind && (" " !== Oq.text || "icon" !== (null === (Yq = qq[lq + 1]) || void 0 === Yq ? void 0 : Yq.kind)) ? (gq.length > 0 && Eq.push(gq), Eq.push([Oq]), gq = []) : gq.push(Oq)
      }
      return gq.length > 0 && Eq.push(gq), Eq
    }
  },
  8669: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      i: () => lq
    });
    let Yq = null;
    const lq = function(qq) {
        const Eq = {
          cycle: qq,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Yq = Eq, () => {
          Yq === Eq && (Yq = null)
        }
      },
      Oq = () => {
        var qq;
        return null !== (qq = Yq) && void 0 !== qq && qq.canCycle() ? Yq.cycle : null
      }
  },
  36662: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      d: () => Vq,
      g: () => dq,
      h: () => xq,
      l: () => Wq,
      m: () => jq,
      o: () => Bq,
      p: () => oq,
      r: () => aq,
      v: () => Hq
    });
    var Yq = gq(24),
      lq = gq(31);
    const Oq = "clientGameInventoryButtonsChanged",
      mq = new Map;

    function xq() {
      return [...mq.values()].sort(((qq, Eq) => {
        var gq, Yq;
        return (null !== (gq = qq.order) && void 0 !== gq ? gq : 0) - (null !== (Yq = Eq.order) && void 0 !== Yq ? Yq : 0)
      }))
    }
    let Aq = null;

    function cq(qq) {
      Aq = qq
    }
    let uq = !1;

    function Bq(qq) {
      uq = !0;
      try {
        qq.onClick()
      } finally {
        uq = !1
      }
      qq.panel && "clientGame" === Yq.b.get("openInGameMenuName") && cq(qq.id)
    }

    function Wq() {
      return uq
    }

    function Nq() {
      return xq().filter((qq => qq.panel && !qq.disabled))
    }

    function aq(qq) {
      const Eq = Nq(),
        gq = Eq.findIndex((qq => qq.id === Aq));
      return !(gq < 0 || Eq.length < 2) && (Bq(Eq[(gq + qq + Eq.length) % Eq.length]), !0)
    }

    function Vq() {
      return null !== Aq && Nq().length > 1
    }

    function dq() {
      cq(null)
    }

    function jq() {
      "inventory" !== Yq.b.get("openInGameMenuName") && cq(null)
    }

    function Hq() {
      const qq = Aq;
      return cq(null), qq
    }

    function oq(qq) {
      return mq.set(qq.id, qq), lq.i.TV(Oq, xq(), !0), () => {
        mq.get(qq.id) === qq && (mq.delete(qq.id), lq.i.TV(Oq, xq()))
      }
    }
  },
  36657: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => xq,
      e: () => dq,
      h: () => jq,
      j: () => Wq,
      l: () => cq,
      m: () => Vq,
      n: () => Nq,
      r: () => uq
    });
    var Yq = gq(24),
      lq = gq(31),
      Oq = gq(1274),
      mq = gq(36662);
    const xq = "clientGameUiChanged";
    let Aq = null;

    function cq() {
      return Aq
    }

    function uq(qq, Eq) {
      const gq = {
        content: qq,
        menu: Eq
      };
      return Aq = gq, lq.i.TV(xq, Aq, !0), () => {
        Aq === gq && (Aq = null, aq = !1, dq(), lq.i.TV(xq, null))
      }
    }
    let Bq = null;

    function Wq() {
      return Bq
    }

    function Nq(qq) {
      return Bq = qq, () => {
        Bq === qq && (Bq = null)
      }
    }
    let aq = !1;

    function Vq() {
      const qq = Yq.b.get("openInGameMenuName");
      "clientGame" !== qq && (aq = "inventory" === qq), (0, mq.l)() || (0, mq.g)(), (0, Oq.m)(Oq.d), Yq.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function dq() {
      Hq(!1)
    }

    function jq() {
      Hq(aq)
    }

    function Hq(qq) {
      "clientGame" === Yq.b.get("openInGameMenuName") && Yq.b.set({
        openInGameMenuName: qq ? "inventory" : null
      }), qq || (0, mq.g)(), aq = !1
    }
  },
  38479: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq) {
      const Yq = new Set,
        lq = new ResizeObserver(gq),
        Oq = () => {
          const Eq = new Set(document.querySelectorAll(qq));
          let Oq = !1;
          for (const qq of Yq) Eq.has(qq) || (lq.unobserve(qq), Yq.delete(qq), Oq = !0);
          for (const qq of Eq) Yq.has(qq) || (lq.observe(qq), mq.observe(qq, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Yq.add(qq));
          Oq && gq()
        },
        mq = new MutationObserver((Eq => {
          Eq.some((qq => "attributes" === qq.type)) && gq(), Eq.some((Eq => function(qq, Eq, gq) {
            if ("childList" !== qq.type) return !1;
            for (const Yq of qq.addedNodes)
              if (Yq instanceof Element && (Yq.matches(Eq) || Yq.querySelector(Eq))) return !0;
            for (const Yq of qq.removedNodes)
              if (Yq instanceof Element)
                for (const qq of gq)
                  if (Yq.contains(qq)) return !0;
            return !1
          }(Eq, qq, Yq))) && Oq()
        }));
      mq.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const xq of Eq) lq.observe(xq);
      return window.addEventListener("resize", gq), Oq(), gq(), () => {
        lq.disconnect(), mq.disconnect(), window.removeEventListener("resize", gq)
      }
    }
    gq.d(Eq, {
      b: () => Yq
    })
  },
  8846: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      e: () => Aq
    });
    var Yq = gq(24),
      lq = gq(1308),
      Oq = gq(96);
    const mq = {
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

    function xq() {
      return (0, Oq.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Aq = new class {
      constructor(qq) {
        this.deps = qq, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(qq, Eq) {
        var gq;
        if (!this.deps.enabled()) return;
        const Yq = mq[qq],
          lq = null !== Eq && void 0 !== Eq ? Eq : Yq.pattern;
        if (null === lq) return void console.warn("No vibration pattern for", qq);
        const Oq = this.deps.now();
        Oq - this.lastAnyAt < 40 && Yq.priority < this.playingPriority || Oq - (null !== (gq = this.lastAt.get(qq)) && void 0 !== gq ? gq : -1 / 0) < Yq.minGapMs || Oq < this.playingUntil && Yq.priority < this.playingPriority || (this.lastAt.set(qq, Oq), this.lastAnyAt = Oq, this.playingUntil = Oq + lq.reduce(((qq, Eq) => qq + Eq), 0), this.playingPriority = Yq.priority, this.deps.vibrate(lq))
      }
    }({
      vibrate: qq => {
        navigator.vibrate([...qq])
      },
      now: () => performance.now(),
      enabled: () => xq() && Yq.b.get("isTouchScreen") && Yq.b.get("clientEscMenuOptions").vibration && !(0, lq.i)()
    })
  },
  37195: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => xq,
      g: () => mq
    });
    var Yq = gq(37183),
      lq = gq(307),
      Oq = gq(1870);

    function mq(qq) {
      if ("aq" in qq) return yq.createAnimationScript(qq);
      return new cq(qq).createAnimationScript()
    }

    function xq(qq, Eq, gq, lq) {
      const Oq = qq.aq <= 0 ? 1 : Eq + gq * Math.max(0, lq) / qq.aq;
      return qq.Vq === Yq.l.LoopOnLastFrame ? Oq % 1 : qq.Vq === Yq.l.NoLoop && Oq >= 1 ? null : Math.min(1, Oq)
    }
    class Aq {
      createAnimationScript(qq) {
        const {
          aq: Eq,
          loop: gq,
          dq: Yq
        } = qq;
        return {
          aq: Math.round(Eq),
          Vq: this.createLoopMode(null !== gq && void 0 !== gq && gq),
          dq: this.createNodeSkeletonAnimationScript(null !== Yq && void 0 !== Yq ? Yq : null)
        }
      }
      createLoopMode(qq) {
        switch (qq) {
          case !1:
            return Yq.l.NoLoop;
          case !0:
            return Yq.l.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Yq.l.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${qq}`)
      }
      createNodeSkeletonAnimationScript(qq) {
        if (null === qq) return null;
        const Eq = {};
        for (const gq in qq) {
          const Yq = qq[gq];
          Eq[gq] = this.createNodeAnimationScript(Yq)
        }
        return Eq
      }
      createNodeAnimationScript(qq) {
        const {
          timeline: Eq
        } = qq, gq = Eq.filter((qq => Number.isFinite(qq.timeFraction)));
        return gq.sort(((qq, Eq) => qq.timeFraction - Eq.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(gq, "rotation", Wq),
          position: this.createTimelineFromKeyframes(gq, "position", aq)
        }
      }
      createTimelineFromKeyframes(qq, Eq, gq) {
        const Yq = [];
        for (const Aq of qq) {
          const qq = Aq[Eq];
          if (qq) {
            const Eq = this.createAnimationFrameWithoutPrecomputes(Aq.timeFraction, qq);
            uq(Eq) && Yq.push(Eq)
          }
        }
        const lq = [];
        for (let Aq = 0; Aq < Yq.length; Aq++) {
          var Oq, mq, xq;
          const qq = Yq[Aq],
            Eq = null !== (Oq = Yq[Aq - 1]) && void 0 !== Oq ? Oq : qq,
            cq = null !== (mq = Yq[Aq + 1]) && void 0 !== mq ? mq : qq,
            uq = null !== (xq = Yq[Aq + 2]) && void 0 !== xq ? xq : cq;
          lq.push({
            ...qq,
            ...gq(Eq.post, Eq.timeFraction, qq.post, qq.timeFraction, cq.pre, cq.timeFraction, uq.pre, uq.timeFraction)
          })
        }
        return lq
      }
      createAnimationFrameWithoutPrecomputes(qq, Eq) {
        let gq, Yq, lq = null;
        var Oq;
        if ("object" === typeof Eq && "point" in Eq) lq = null !== (Oq = Eq.oq) && void 0 !== Oq ? Oq : null, gq = Eq.point, Yq = Eq.point;
        else if ("object" === typeof Eq && "pre" in Eq) {
          var mq;
          lq = null !== (mq = Eq.oq) && void 0 !== mq ? mq : null, gq = Eq.pre, Yq = Eq.post
        } else gq = Eq, Yq = Eq;
        return {
          timeFraction: qq,
          oq: this.createLerpMode(lq),
          pre: gq,
          post: Yq
        }
      }
      createLerpMode(qq) {
        return null === qq ? Yq.k.Linear : Aq.LERP_MODE_SCHEMA_MAPPING[qq]
      }
    }
    Aq.LERP_MODE_SCHEMA_MAPPING = {
      linear: Yq.k.Linear,
      "catmull-rom-spline": Yq.k.CatmullRomSpline
    };
    class cq {
      constructor(qq) {
        this.animationSchema = qq
      }
      createAnimationScript() {
        const {
          animation_length: qq,
          loop: Eq,
          bones: gq
        } = this.animationSchema;
        return {
          aq: Math.round(1e3 * qq),
          Vq: this.createLoopMode(null !== Eq && void 0 !== Eq && Eq),
          dq: this.createNodeSkeletonAnimationScript(null !== gq && void 0 !== gq ? gq : null)
        }
      }
      createLoopMode(qq) {
        switch (qq) {
          case !1:
            return Yq.l.NoLoop;
          case !0:
            return Yq.l.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Yq.l.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${qq}`)
      }
      createNodeSkeletonAnimationScript(qq) {
        if (null === qq) return null;
        const Eq = {};
        for (const gq in qq) {
          const Yq = qq[gq];
          Eq[gq] = this.createNodeAnimationScript(Yq)
        }
        return Eq
      }
      createNodeAnimationScript(qq) {
        const {
          rotation: Eq,
          position: gq
        } = qq;
        return {
          rotation: this.createAnimationTimeline(null !== Eq && void 0 !== Eq ? Eq : null, dq, Wq, !0),
          position: this.createAnimationTimeline(null !== gq && void 0 !== gq ? gq : null, Hq, aq, !1)
        }
      }
      createAnimationTimeline(qq, Eq, gq, Yq) {
        if (null === qq) return [];
        if (Array.isArray(qq)) {
          qq = {
            "0.0": qq
          }
        }
        const lq = Object.entries(qq).map((qq => {
          let [gq, Yq] = qq;
          const lq = Number(gq) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(lq, Yq, Eq)
        })).filter(uq);
        lq.sort(((qq, Eq) => qq.timeFraction - Eq.timeFraction)), Yq && function(qq) {
          for (let Eq = 1; Eq < qq.length; Eq++) {
            const gq = qq[Eq - 1].post,
              Yq = qq[Eq],
              lq = oq(Yq.pre),
              Oq = oq(Yq.post),
              mq = Qq(gq, Yq.pre);
            Qq(gq, lq) < mq && (qq[Eq] = {
              ...Yq,
              pre: lq,
              post: Oq
            })
          }
        }(lq);
        const Oq = [];
        for (let cq = 0; cq < lq.length; cq++) {
          var mq, xq, Aq;
          const qq = lq[cq],
            Eq = null !== (mq = lq[cq - 1]) && void 0 !== mq ? mq : qq,
            Yq = null !== (xq = lq[cq + 1]) && void 0 !== xq ? xq : qq,
            uq = null !== (Aq = lq[cq + 2]) && void 0 !== Aq ? Aq : Yq;
          Oq.push({
            ...qq,
            ...gq(Eq.post, Eq.timeFraction, qq.post, qq.timeFraction, Yq.pre, Yq.timeFraction, uq.pre, uq.timeFraction)
          })
        }
        return Oq
      }
      createAnimationFrameWithoutPrecomputes(qq, Eq, gq) {
        let Yq, lq, Oq = null;
        if ("object" === typeof Eq && "post" in Eq) {
          var mq;
          Oq = null !== (mq = Eq.lerp_mode) && void 0 !== mq ? mq : null, lq = Vq(Eq.post, gq), Yq = Eq.pre ? Vq(Eq.pre, gq) : lq
        } else {
          const qq = Vq(Eq, gq);
          lq = qq, Yq = qq
        }
        return {
          timeFraction: qq,
          oq: this.createLerpMode(Oq),
          pre: Yq,
          post: lq
        }
      }
      createLerpMode(qq) {
        return null === qq ? Yq.k.Linear : cq.LERP_MODE_SCHEMA_MAPPING[qq]
      }
    }

    function uq(qq) {
      return Number.isFinite(qq.timeFraction) && Bq(qq.pre) && Bq(qq.post)
    }

    function Bq(qq) {
      return Number.isFinite(qq[0]) && Number.isFinite(qq[1]) && Number.isFinite(qq[2])
    }

    function Wq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
      const Aq = Oq - Eq,
        cq = Oq - Yq,
        uq = xq - Yq,
        Bq = [null, null, null];
      for (let Wq = 0; Wq < Bq.length; Wq++) Bq[Wq] = Nq(qq[Wq], gq[Wq], lq[Wq], mq[Wq], Aq, uq);
      return {
        Pq: cq,
        Qq: Bq
      }
    }

    function Nq(qq, Eq, gq, Yq, Oq, mq) {
      return {
        tq: lq.c.computeShortestRotation(qq, gq) / Oq,
        rq: lq.c.computeShortestRotation(Eq, Yq) / mq,
        delta: lq.c.computeShortestRotation(Eq, gq)
      }
    }

    function aq(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
      const Aq = Oq - Eq,
        cq = Oq - Yq,
        uq = xq - Yq,
        Bq = [null, null, null];
      for (let Wq = 0; Wq < Bq.length; Wq++) Bq[Wq] = {
        tq: (lq[Wq] - qq[Wq]) / Aq,
        rq: (mq[Wq] - gq[Wq]) / uq,
        delta: lq[Wq] - gq[Wq]
      };
      return {
        Pq: cq,
        Qq: Bq
      }
    }

    function Vq(qq, Eq) {
      return null === Eq ? qq : Eq(qq)
    }

    function dq(qq) {
      const [Eq, gq, Yq] = qq, mq = -(0, Oq.j)(Eq), xq = -(0, Oq.j)(gq), Aq = (0, Oq.j)(Yq), cq = lq.c.quaternionFromEulerZYX(mq, xq, Aq);
      return lq.c.eulerYXZFromQuaternion(cq)
    }
    cq.LERP_MODE_SCHEMA_MAPPING = {
      linear: Yq.k.Linear,
      catmullrom: Yq.k.CatmullRomSpline
    };
    const jq = 1 / 16;

    function Hq(qq) {
      return [-qq[0] * jq, qq[1] * jq, qq[2] * jq]
    }

    function oq(qq) {
      const [Eq, gq, Yq] = qq;
      return [Eq >= 0 ? Math.PI - Eq : -Math.PI - Eq, Pq(gq + Math.PI), Pq(Yq + Math.PI)]
    }

    function Pq(qq) {
      return lq.c.mod(qq + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Qq(qq, Eq) {
      return Math.abs(lq.c.computeShortestRotation(qq[0], Eq[0])) + Math.abs(lq.c.computeShortestRotation(qq[1], Eq[1])) + Math.abs(lq.c.computeShortestRotation(qq[2], Eq[2]))
    }
    const yq = new Aq
  },
  37183: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => mq,
      g: () => Oq,
      k: () => Yq,
      l: () => lq
    });
    let Yq = function(qq) {
        return qq[qq.Linear = 0] = "Linear", qq[qq.CatmullRomSpline = 1] = "CatmullRomSpline", qq
      }({}),
      lq = function(qq) {
        return qq[qq.NoLoop = 0] = "NoLoop", qq[qq.LoopOnLastFrame = 1] = "LoopOnLastFrame", qq[qq.HoldOnLastFrame = 2] = "HoldOnLastFrame", qq
      }({}),
      Oq = function(qq) {
        return qq[qq.Movement = 0] = "Movement", qq[qq.Action = 1] = "Action", qq[qq.Emote = 2] = "Emote", qq[qq.Custom = 3] = "Custom", qq
      }({}),
      mq = function(qq) {
        return qq[qq.Start = 0] = "Start", qq[qq.Stop = 1] = "Stop", qq
      }({})
  },
  4671: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Yq,
      f: () => Oq,
      i: () => Aq,
      m: () => mq
    });
    const Yq = ["sine", "triangle", "square", "sawtooth"],
      lq = 55,
      Oq = {
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

    function mq(qq) {
      return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
    }

    function xq(qq, Eq, gq) {
      return Math.min(gq, Math.max(Eq, qq))
    }

    function Aq(qq) {
      const Eq = xq(qq.durationMs, 10, 500),
        gq = xq(qq.attackMs, 0, Eq),
        {
          intonation: lq
        } = qq;
      return {
        waveform: Yq.includes(qq.waveform) ? qq.waveform : "sine",
        pitchHz: xq(qq.pitchHz, 20, 4e3),
        glideSemitones: xq(qq.glideSemitones, -24, 24),
        durationMs: Eq,
        attackMs: gq,
        releaseMs: xq(qq.releaseMs, 0, Eq - gq),
        lowpassHz: null === qq.lowpassHz ? null : xq(qq.lowpassHz, 20, 2e4),
        volume: xq(qq.volume, 0, 2),
        intonation: {
          variationSemitones: xq(lq.variationSemitones, 0, 6),
          declineSemitones: xq(lq.declineSemitones, 0, 12),
          questionRiseSemitones: xq(lq.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: xq(lq.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: xq(qq.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);