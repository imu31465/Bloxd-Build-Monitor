export const id = 25;
export const ids = [25];
export const modules = {
  36235: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => nb,
      e: () => mb,
      i: () => Xb,
      j: () => Mb
    });
    var kb = sb(8917),
      Wb = sb(36240),
      ab = sb(36247),
      Tb = sb(8330),
      Ub = sb(1423),
      Ib = sb(64),
      Hb = sb(89),
      fb = sb(1087);

    function Mb() {
      var bb;
      return (0, Ub.h)(Wb.c, (0, Wb.l)()), (0, fb.jsx)(fb.Fragment, {
        children: null === (bb = (0, Wb.l)()) || void 0 === bb ? void 0 : bb.content
      })
    }

    function Xb(bb) {
      var cb;
      let {
        show: sb
      } = bb;
      (0, Ub.h)(Wb.c, (0, Wb.l)());
      const Hb = null === (cb = (0, Wb.l)()) || void 0 === cb ? void 0 : cb.menu;
      return (0, Ib.useEffect)((() => {
        var bb;
        sb || (null === Hb || void 0 === Hb || null === (bb = Hb.onClose) || void 0 === bb || bb.call(Hb), (0, ab.o)())
      }), [sb, Hb]), (0, Ib.useEffect)((() => sb ? (0, Tb.e)(ab.v, ab.g) : void 0), [sb]), (0, fb.jsx)(kb.b, {
        showing: sb,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hb || void 0 === Hb ? void 0 : Hb.content
      })
    }

    function nb(bb) {
      let {
        placement: cb = "bottom"
      } = bb;
      return (0, fb.jsx)("div", {
        id: `clientGameHud-${cb}`,
        style: {
          display: "contents"
        }
      })
    }

    function mb(bb) {
      let {
        children: cb,
        placement: sb = "bottom"
      } = bb;
      const [kb, Wb] = (0, Ib.useState)(null);
      return (0, Ib.useEffect)((() => {
        Wb(document.getElementById(`clientGameHud-${sb}`))
      }), [sb]), kb ? (0, Hb.createPortal)(cb, kb) : null
    }
  },
  4553: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Qb,
      e: () => eb
    });
    var kb = sb(1033),
      Wb = sb.n(kb),
      ab = sb(64),
      Tb = sb(1197),
      Ub = sb(4556),
      Ib = sb(1839),
      Hb = sb(2337),
      fb = sb(4561),
      Mb = sb(1087);
    const Xb = new WeakMap;
    let nb = 0;

    function mb(bb) {
      let cb = Xb.get(bb);
      return void 0 === cb && (cb = nb++, Xb.set(bb, cb)), cb
    }

    function lb(bb) {
      let {
        piece: cb
      } = bb;
      return "space" === cb.kind ? (0, Mb.jsx)(Mb.Fragment, {
        children: cb.text
      }) : (0, Mb.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${cb.delayMs}ms`
        },
        children: (0, Mb.jsx)(Ub.b, {
          text: "icon" === cb.kind ? `[[${cb.icon}]]` : cb.text
        })
      })
    }

    function Qb(bb) {
      let {
        display: cb
      } = bb;
      const {
        selectedLanguage: sb
      } = (0, Tb.E)(), kb = (0, ab.useMemo)((() => (0, fb.e)((0, fb.h)(cb).plan.pieces)), [cb, sb.code]);
      return (0, Mb.jsxs)("div", {
        className: Wb()("Dialogue", {
          DialogueAnimateIn: !1 !== cb.animateIn
        }),
        children: [cb.speakerName && (0, Mb.jsx)(Ib.d, {
          text: cb.speakerName,
          className: "DialogueSpeaker"
        }), (0, Mb.jsx)("p", {
          className: "DialogueLine",
          children: kb.map(((bb, cb) => 1 === bb.length && "space" === bb[0].kind ? bb[0].text : (0, Mb.jsx)("span", {
            className: "DialogueGlue",
            children: bb.map(((bb, cb) => (0, Mb.jsx)(lb, {
              piece: bb
            }, cb)))
          }, cb)))
        })]
      })
    }
    const eb = (0, ab.memo)((function() {
      const bb = (0, Hb.d)("dialogue");
      return (0, Mb.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: bb && (0, Mb.jsx)(Qb, {
          display: bb
        }, mb(bb))
      })
    }))
  },
  4556: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub
    });
    var kb = sb(64),
      Wb = sb(334),
      ab = sb(1858),
      Tb = sb(1087);

    function Ub(bb) {
      let {
        text: cb
      } = bb;
      const sb = [];
      let Ub = "";
      return (0, Wb.ic)(cb).forEach(((bb, cb) => {
        if ("string" === typeof bb || !(0, ab.e)(bb.icon)) return void(Ub += "string" === typeof bb ? bb : bb.icon);
        const Wb = Math.max(0, Ub.trimEnd().search(/\S{1,12}$/));
        sb.push((0, Tb.jsxs)(kb.Fragment, {
          children: [Ub.slice(0, Wb), (0, Tb.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Ub.slice(Wb), (0, Tb.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": bb.icon,
              children: (0, Tb.jsx)(ab.d, {
                itemName: bb.icon,
                amount: 0
              })
            })]
          })]
        }, cb)), Ub = ""
      })), sb.push(Ub), (0, Tb.jsx)(Tb.Fragment, {
        children: sb
      })
    }
  },
  8917: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = sb(4275),
      Wb = sb(4282);

    function ab(bb) {
      let {
        children: cb,
        showing: sb,
        globallyUniqueKey: ab,
        alwaysMountChildren: Tb = !1,
        doGameplayStartStopOnShow: Ub = !0,
        keepsMovement: Ib = !1
      } = bb;
      return (0, Wb.d)(!0, sb, ab, Ib), (0, kb.e)(Ub, sb), sb || Tb ? cb : null
    }
  },
  4561: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ib,
      h: () => Eb
    });
    var kb = sb(4569),
      Wb = sb(334);
    const ab = 120,
      Tb = 260,
      Ub = 1.15,
      Ib = 1.2,
      Hb = 2,
      fb = 1.08,
      Mb = .8,
      Xb = .95,
      nb = 8,
      mb = "[\"')\\]\u300d\u300f\uff09]*",
      lb = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mb}$`),
      Qb = new RegExp(`[?\uff1f]${mb}$`),
      eb = new RegExp(`[!\uff01]${mb}$`),
      Cb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Nb = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Vb = new RegExp(`[${Nb}]`),
      Lb = new RegExp(`[${Nb}]|[^${Nb}]+`, "g"),
      ub = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Yb(bb) {
      let cb = 2166136261;
      for (let sb = 0; sb < bb.length; sb++) cb ^= bb.charCodeAt(sb), cb = Math.imul(cb, 16777619);
      return (cb >>> 0) / 4294967295 * 2 - 1
    }

    function hb(bb) {
      var cb;
      if (Vb.test(bb)) return 1;
      const sb = bb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        kb = sb.replace(/[^0-9]/g, "");
      if (kb.length > 0 && !/\p{L}/u.test(sb)) return Math.min(kb.length, 4);
      const Wb = null !== (cb = sb.match(ub)) && void 0 !== cb ? cb : [];
      if (0 === Wb.length) {
        var ab, Tb;
        const bb = null !== (ab = null === (Tb = sb.match(/\p{L}/gu)) || void 0 === Tb ? void 0 : Tb.length) && void 0 !== ab ? ab : 0;
        return 0 === bb ? 0 : Math.min(Math.max(1, Math.round(bb / 2.5)), nb)
      }
      const Ub = sb.replace(/[^\p{L}]/gu, ""),
        Ib = Wb.length > 1 && "e" === Wb.at(-1) && Ub.endsWith("e") && !Ub.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(bb.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wb.length - (Ib ? 1 : 0), nb)
    }

    function Jb(bb) {
      return bb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function gb(bb) {
      const cb = bb.replace(/[^\p{L}]/gu, "");
      return cb.length >= 2 && cb === cb.toUpperCase() && cb !== cb.toLowerCase()
    }

    function Bb(bb, cb) {
      var sb;
      const nb = cb && (0, kb.g)(cb),
        mb = null !== (sb = null === nb || void 0 === nb ? void 0 : nb.syllableMs) && void 0 !== sb ? sb : kb.b,
        Nb = function(bb) {
          const cb = [];
          for (const kb of (0, Wb.ic)(bb))
            if ("string" === typeof kb)
              for (const bb of kb.split(/(\s+)/)) {
                if ("" === bb) continue;
                if (/^\s+$/.test(bb)) {
                  cb.push({
                    kind: "space",
                    text: bb
                  });
                  continue
                }
                if (!Vb.test(bb)) {
                  cb.push({
                    kind: "word",
                    text: bb,
                    delayMs: 0
                  });
                  continue
                }
                let kb = !0;
                for (const Wb of null !== (sb = bb.match(Lb)) && void 0 !== sb ? sb : []) {
                  var sb;
                  const bb = cb.at(-1);
                  kb || "word" !== (null === bb || void 0 === bb ? void 0 : bb.kind) || Vb.test(Wb) || /[\p{L}\p{N}]/u.test(Wb) ? (kb || cb.push({
                    kind: "space",
                    text: "\u200b"
                  }), cb.push({
                    kind: "word",
                    text: Wb,
                    delayMs: 0
                  }), kb = !1) : bb.text += Wb
                }
              } else cb.push({
                kind: "icon",
                text: kb.icon,
                delayMs: 0
              });
          return cb
        }(bb),
        ub = [];
      let Bb = [];
      for (const kb of Nb) "space" !== kb.kind && (Bb.push(kb), lb.test(kb.text) && (ub.push(Bb), Bb = []));
      ub.push(Bb);
      const tb = [];
      let yb = 0;
      for (const kb of ub) {
        var Pb, Db;
        const bb = null !== (Pb = null === (Db = kb.at(-1)) || void 0 === Db ? void 0 : Db.text) && void 0 !== Pb ? Pb : "",
          cb = Qb.test(bb),
          sb = eb.test(bb),
          Wb = kb.map((bb => "word" === bb.kind ? hb(bb.text) : 1)),
          Nb = Wb.findLastIndex((bb => bb > 0));
        for (const [Qb, eb] of kb.entries()) {
          const bb = "word" === eb.kind,
            kb = Wb[Qb];
          eb.delayMs = yb;
          for (let Wb = 0; nb && Wb < kb; Wb++) {
            const {
              intonation: ab
            } = nb;
            let Tb = Nb > 0 ? -ab.declineSemitones * (Qb / Nb) : 0;
            Tb += Yb(`${Jb(eb.text)}|${Wb}`) * ab.variationSemitones;
            const lb = Math.min(1, ab.variationSemitones);
            let Cb = nb.glideSemitones,
              Vb = 1;
            sb && (Tb += ab.exclaimLiftSemitones, Vb *= Ub), cb && Qb === Nb && (Tb += ab.questionRiseSemitones * (kb > 1 ? .5 + .5 * Wb / (kb - 1) : 1), Wb === kb - 1 && (Cb = Math.abs(Cb) + ab.questionRiseSemitones / 2)), bb && gb(eb.text) && (Tb += Hb * lb, Vb *= Ib), kb > 1 && 0 === Wb && (Tb += Mb * lb, Vb *= fb), tb.push({
              atMs: yb + Wb * mb,
              semitones: Tb,
              glideSemitones: Cb,
              durationMs: Wb < kb - 1 ? Math.min(nb.durationMs, mb * Xb) : nb.durationMs,
              level: Vb
            })
          }
          yb += kb * mb + (lb.test(eb.text) ? Tb : Cb.test(eb.text) ? ab : 0)
        }
      }
      return {
        pieces: Nb.map((bb => "space" === bb.kind ? bb : "icon" === bb.kind ? {
          kind: "icon",
          icon: bb.text,
          delayMs: bb.delayMs
        } : {
          kind: "word",
          text: bb.text,
          delayMs: bb.delayMs
        })),
        blips: tb
      }
    }
    var tb = sb(1197),
      yb = sb(1258),
      Pb = sb(1876);

    function Db(bb) {
      if ("string" === typeof bb) return bb;
      const cb = yb.e.get().getCurrentLanguageCode();
      return (0, tb.q)(cb, bb.translationKey, (0, tb.p)(bb.params, Pb.b.shown))
    }

    function Eb(bb) {
      const cb = void 0 === bb.voice ? null : (0, kb.i)(bb.voice),
        sb = cb && (0, kb.g)(cb);
      return {
        plan: Bb(Db(bb.line), sb),
        synth: sb
      }
    }

    function ib(bb) {
      const cb = [];
      let sb = [];
      for (const [Wb, ab] of bb.entries()) {
        var kb;
        "space" === ab.kind && (" " !== ab.text || "icon" !== (null === (kb = bb[Wb + 1]) || void 0 === kb ? void 0 : kb.kind)) ? (sb.length > 0 && cb.push(sb), cb.push([ab]), sb = []) : sb.push(ab)
      }
      return sb.length > 0 && cb.push(sb), cb
    }
  },
  8330: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab,
      e: () => Wb
    });
    let kb = null;
    const Wb = function(bb) {
        const cb = {
          cycle: bb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return kb = cb, () => {
          kb === cb && (kb = null)
        }
      },
      ab = () => {
        var bb;
        return null !== (bb = kb) && void 0 !== bb && bb.canCycle() ? kb.cycle : null
      }
  },
  36247: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => lb,
      i: () => Qb,
      l: () => Ub,
      n: () => Xb,
      o: () => eb,
      q: () => Mb,
      s: () => Nb,
      v: () => mb,
      z: () => Cb
    });
    var kb = sb(19),
      Wb = sb(26);
    const ab = "clientGameInventoryButtonsChanged",
      Tb = new Map;

    function Ub() {
      return [...Tb.values()].sort(((bb, cb) => {
        var sb, kb;
        return (null !== (sb = bb.order) && void 0 !== sb ? sb : 0) - (null !== (kb = cb.order) && void 0 !== kb ? kb : 0)
      }))
    }
    let Ib = null;

    function Hb(bb) {
      Ib = bb
    }
    let fb = !1;

    function Mb(bb) {
      fb = !0;
      try {
        bb.onClick()
      } finally {
        fb = !1
      }
      bb.panel && "clientGame" === kb.d.get("openInGameMenuName") && Hb(bb.id)
    }

    function Xb() {
      return fb
    }

    function nb() {
      return Ub().filter((bb => bb.panel && !bb.disabled))
    }

    function mb(bb) {
      const cb = nb(),
        sb = cb.findIndex((bb => bb.id === Ib));
      return !(sb < 0 || cb.length < 2) && (Mb(cb[(sb + bb + cb.length) % cb.length]), !0)
    }

    function lb() {
      return null !== Ib && nb().length > 1
    }

    function Qb() {
      Hb(null)
    }

    function eb() {
      "inventory" !== kb.d.get("openInGameMenuName") && Hb(null)
    }

    function Cb() {
      const bb = Ib;
      return Hb(null), bb
    }

    function Nb(bb) {
      return Tb.set(bb.id, bb), Wb.j.QQ(ab, Ub(), !0), () => {
        Tb.get(bb.id) === bb && (Tb.delete(bb.id), Wb.j.QQ(ab, Ub()))
      }
    }
  },
  36240: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ub,
      e: () => Qb,
      g: () => eb,
      i: () => Xb,
      l: () => Hb,
      m: () => lb,
      p: () => nb,
      s: () => fb
    });
    var kb = sb(19),
      Wb = sb(26),
      ab = sb(1287),
      Tb = sb(36247);
    const Ub = "clientGameUiChanged";
    let Ib = null;

    function Hb() {
      return Ib
    }

    function fb(bb, cb) {
      const sb = {
        content: bb,
        menu: cb
      };
      return Ib = sb, Wb.j.QQ(Ub, Ib, !0), () => {
        Ib === sb && (Ib = null, mb = !1, Qb(), Wb.j.QQ(Ub, null))
      }
    }
    let Mb = null;

    function Xb() {
      return Mb
    }

    function nb(bb) {
      return Mb = bb, () => {
        Mb === bb && (Mb = null)
      }
    }
    let mb = !1;

    function lb() {
      const bb = kb.d.get("openInGameMenuName");
      "clientGame" !== bb && (mb = "inventory" === bb), (0, Tb.n)() || (0, Tb.i)(), (0, ab.n)(ab.b), kb.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Qb() {
      Cb(!1)
    }

    function eb() {
      Cb(mb)
    }

    function Cb(bb) {
      "clientGame" === kb.d.get("openInGameMenuName") && kb.d.set({
        openInGameMenuName: bb ? "inventory" : null
      }), bb || (0, Tb.i)(), mb = !1
    }
  },
  38124: (bb, cb, sb) => {
    function kb(bb, cb, sb) {
      const kb = new Set,
        Wb = new ResizeObserver(sb),
        ab = () => {
          const cb = new Set(document.querySelectorAll(bb));
          let ab = !1;
          for (const bb of kb) cb.has(bb) || (Wb.unobserve(bb), kb.delete(bb), ab = !0);
          for (const bb of cb) kb.has(bb) || (Wb.observe(bb), Tb.observe(bb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), kb.add(bb));
          ab && sb()
        },
        Tb = new MutationObserver((cb => {
          cb.some((bb => "attributes" === bb.type)) && sb(), cb.some((cb => function(bb, cb, sb) {
            if ("childList" !== bb.type) return !1;
            for (const kb of bb.addedNodes)
              if (kb instanceof Element && (kb.matches(cb) || kb.querySelector(cb))) return !0;
            for (const kb of bb.removedNodes)
              if (kb instanceof Element)
                for (const bb of sb)
                  if (kb.contains(bb)) return !0;
            return !1
          }(cb, bb, kb))) && ab()
        }));
      Tb.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Ub of cb) Wb.observe(Ub);
      return window.addEventListener("resize", sb), ab(), sb(), () => {
        Wb.disconnect(), Tb.disconnect(), window.removeEventListener("resize", sb)
      }
    }
    sb.d(cb, {
      c: () => kb
    })
  },
  8487: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      f: () => Ib
    });
    var kb = sb(19),
      Wb = sb(1312),
      ab = sb(117);
    const Tb = {
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

    function Ub() {
      return (0, ab.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Ib = new class {
      constructor(bb) {
        this.deps = bb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(bb, cb) {
        var sb;
        if (!this.deps.enabled()) return;
        const kb = Tb[bb],
          Wb = null !== cb && void 0 !== cb ? cb : kb.pattern;
        if (null === Wb) return void console.warn("No vibration pattern for", bb);
        const ab = this.deps.now();
        ab - this.lastAnyAt < 40 && kb.priority < this.playingPriority || ab - (null !== (sb = this.lastAt.get(bb)) && void 0 !== sb ? sb : -1 / 0) < kb.minGapMs || ab < this.playingUntil && kb.priority < this.playingPriority || (this.lastAt.set(bb, ab), this.lastAnyAt = ab, this.playingUntil = ab + Wb.reduce(((bb, cb) => bb + cb), 0), this.playingPriority = kb.priority, this.deps.vibrate(Wb))
      }
    }({
      vibrate: bb => {
        navigator.vibrate([...bb])
      },
      now: () => performance.now(),
      enabled: () => Ub() && kb.d.get("isTouchScreen") && kb.d.get("clientEscMenuOptions").vibration && !(0, Wb.h)()
    })
  },
  36717: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ub,
      g: () => Tb
    });
    var kb = sb(36705),
      Wb = sb(344),
      ab = sb(1832);

    function Tb(bb) {
      if ("da" in bb) return ub.createAnimationScript(bb);
      return new Hb(bb).createAnimationScript()
    }

    function Ub(bb, cb, sb, Wb) {
      const ab = bb.da <= 0 ? 1 : cb + sb * Math.max(0, Wb) / bb.da;
      return bb.Aa === kb.m.LoopOnLastFrame ? ab % 1 : bb.Aa === kb.m.NoLoop && ab >= 1 ? null : Math.min(1, ab)
    }
    class Ib {
      createAnimationScript(bb) {
        const {
          da: cb,
          loop: sb,
          ra: kb
        } = bb;
        return {
          da: Math.round(cb),
          Aa: this.createLoopMode(null !== sb && void 0 !== sb && sb),
          ra: this.createNodeSkeletonAnimationScript(null !== kb && void 0 !== kb ? kb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return kb.m.NoLoop;
          case !0:
            return kb.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return kb.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const cb = {};
        for (const sb in bb) {
          const kb = bb[sb];
          cb[sb] = this.createNodeAnimationScript(kb)
        }
        return cb
      }
      createNodeAnimationScript(bb) {
        const {
          timeline: cb
        } = bb, sb = cb.filter((bb => Number.isFinite(bb.timeFraction)));
        return sb.sort(((bb, cb) => bb.timeFraction - cb.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(sb, "rotation", Xb),
          position: this.createTimelineFromKeyframes(sb, "position", mb)
        }
      }
      createTimelineFromKeyframes(bb, cb, sb) {
        const kb = [];
        for (const Ib of bb) {
          const bb = Ib[cb];
          if (bb) {
            const cb = this.createAnimationFrameWithoutPrecomputes(Ib.timeFraction, bb);
            fb(cb) && kb.push(cb)
          }
        }
        const Wb = [];
        for (let Ib = 0; Ib < kb.length; Ib++) {
          var ab, Tb, Ub;
          const bb = kb[Ib],
            cb = null !== (ab = kb[Ib - 1]) && void 0 !== ab ? ab : bb,
            Hb = null !== (Tb = kb[Ib + 1]) && void 0 !== Tb ? Tb : bb,
            fb = null !== (Ub = kb[Ib + 2]) && void 0 !== Ub ? Ub : Hb;
          Wb.push({
            ...bb,
            ...sb(cb.post, cb.timeFraction, bb.post, bb.timeFraction, Hb.pre, Hb.timeFraction, fb.pre, fb.timeFraction)
          })
        }
        return Wb
      }
      createAnimationFrameWithoutPrecomputes(bb, cb) {
        let sb, kb, Wb = null;
        var ab;
        if ("object" === typeof cb && "point" in cb) Wb = null !== (ab = cb.Ra) && void 0 !== ab ? ab : null, sb = cb.point, kb = cb.point;
        else if ("object" === typeof cb && "pre" in cb) {
          var Tb;
          Wb = null !== (Tb = cb.Ra) && void 0 !== Tb ? Tb : null, sb = cb.pre, kb = cb.post
        } else sb = cb, kb = cb;
        return {
          timeFraction: bb,
          Ra: this.createLerpMode(Wb),
          pre: sb,
          post: kb
        }
      }
      createLerpMode(bb) {
        return null === bb ? kb.i.Linear : Ib.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }
    Ib.LERP_MODE_SCHEMA_MAPPING = {
      linear: kb.i.Linear,
      "catmull-rom-spline": kb.i.CatmullRomSpline
    };
    class Hb {
      constructor(bb) {
        this.animationSchema = bb
      }
      createAnimationScript() {
        const {
          animation_length: bb,
          loop: cb,
          bones: sb
        } = this.animationSchema;
        return {
          da: Math.round(1e3 * bb),
          Aa: this.createLoopMode(null !== cb && void 0 !== cb && cb),
          ra: this.createNodeSkeletonAnimationScript(null !== sb && void 0 !== sb ? sb : null)
        }
      }
      createLoopMode(bb) {
        switch (bb) {
          case !1:
            return kb.m.NoLoop;
          case !0:
            return kb.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return kb.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${bb}`)
      }
      createNodeSkeletonAnimationScript(bb) {
        if (null === bb) return null;
        const cb = {};
        for (const sb in bb) {
          const kb = bb[sb];
          cb[sb] = this.createNodeAnimationScript(kb)
        }
        return cb
      }
      createNodeAnimationScript(bb) {
        const {
          rotation: cb,
          position: sb
        } = bb;
        return {
          rotation: this.createAnimationTimeline(null !== cb && void 0 !== cb ? cb : null, Qb, Xb, !0),
          position: this.createAnimationTimeline(null !== sb && void 0 !== sb ? sb : null, Cb, mb, !1)
        }
      }
      createAnimationTimeline(bb, cb, sb, kb) {
        if (null === bb) return [];
        if (Array.isArray(bb)) {
          bb = {
            "0.0": bb
          }
        }
        const Wb = Object.entries(bb).map((bb => {
          let [sb, kb] = bb;
          const Wb = Number(sb) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Wb, kb, cb)
        })).filter(fb);
        Wb.sort(((bb, cb) => bb.timeFraction - cb.timeFraction)), kb && function(bb) {
          for (let cb = 1; cb < bb.length; cb++) {
            const sb = bb[cb - 1].post,
              kb = bb[cb],
              Wb = Nb(kb.pre),
              ab = Nb(kb.post),
              Tb = Lb(sb, kb.pre);
            Lb(sb, Wb) < Tb && (bb[cb] = {
              ...kb,
              pre: Wb,
              post: ab
            })
          }
        }(Wb);
        const ab = [];
        for (let Hb = 0; Hb < Wb.length; Hb++) {
          var Tb, Ub, Ib;
          const bb = Wb[Hb],
            cb = null !== (Tb = Wb[Hb - 1]) && void 0 !== Tb ? Tb : bb,
            kb = null !== (Ub = Wb[Hb + 1]) && void 0 !== Ub ? Ub : bb,
            fb = null !== (Ib = Wb[Hb + 2]) && void 0 !== Ib ? Ib : kb;
          ab.push({
            ...bb,
            ...sb(cb.post, cb.timeFraction, bb.post, bb.timeFraction, kb.pre, kb.timeFraction, fb.pre, fb.timeFraction)
          })
        }
        return ab
      }
      createAnimationFrameWithoutPrecomputes(bb, cb, sb) {
        let kb, Wb, ab = null;
        if ("object" === typeof cb && "post" in cb) {
          var Tb;
          ab = null !== (Tb = cb.lerp_mode) && void 0 !== Tb ? Tb : null, Wb = lb(cb.post, sb), kb = cb.pre ? lb(cb.pre, sb) : Wb
        } else {
          const bb = lb(cb, sb);
          Wb = bb, kb = bb
        }
        return {
          timeFraction: bb,
          Ra: this.createLerpMode(ab),
          pre: kb,
          post: Wb
        }
      }
      createLerpMode(bb) {
        return null === bb ? kb.i.Linear : Hb.LERP_MODE_SCHEMA_MAPPING[bb]
      }
    }

    function fb(bb) {
      return Number.isFinite(bb.timeFraction) && Mb(bb.pre) && Mb(bb.post)
    }

    function Mb(bb) {
      return Number.isFinite(bb[0]) && Number.isFinite(bb[1]) && Number.isFinite(bb[2])
    }

    function Xb(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      const Ib = ab - cb,
        Hb = ab - kb,
        fb = Ub - kb,
        Mb = [null, null, null];
      for (let Xb = 0; Xb < Mb.length; Xb++) Mb[Xb] = nb(bb[Xb], sb[Xb], Wb[Xb], Tb[Xb], Ib, fb);
      return {
        va: Hb,
        Fa: Mb
      }
    }

    function nb(bb, cb, sb, kb, ab, Tb) {
      return {
        ja: Wb.d.computeShortestRotation(bb, sb) / ab,
        bT: Wb.d.computeShortestRotation(cb, kb) / Tb,
        delta: Wb.d.computeShortestRotation(cb, sb)
      }
    }

    function mb(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      const Ib = ab - cb,
        Hb = ab - kb,
        fb = Ub - kb,
        Mb = [null, null, null];
      for (let Xb = 0; Xb < Mb.length; Xb++) Mb[Xb] = {
        ja: (Wb[Xb] - bb[Xb]) / Ib,
        bT: (Tb[Xb] - sb[Xb]) / fb,
        delta: Wb[Xb] - sb[Xb]
      };
      return {
        va: Hb,
        Fa: Mb
      }
    }

    function lb(bb, cb) {
      return null === cb ? bb : cb(bb)
    }

    function Qb(bb) {
      const [cb, sb, kb] = bb, Tb = -(0, ab.i)(cb), Ub = -(0, ab.i)(sb), Ib = (0, ab.i)(kb), Hb = Wb.d.quaternionFromEulerZYX(Tb, Ub, Ib);
      return Wb.d.eulerYXZFromQuaternion(Hb)
    }
    Hb.LERP_MODE_SCHEMA_MAPPING = {
      linear: kb.i.Linear,
      catmullrom: kb.i.CatmullRomSpline
    };
    const eb = 1 / 16;

    function Cb(bb) {
      return [-bb[0] * eb, bb[1] * eb, bb[2] * eb]
    }

    function Nb(bb) {
      const [cb, sb, kb] = bb;
      return [cb >= 0 ? Math.PI - cb : -Math.PI - cb, Vb(sb + Math.PI), Vb(kb + Math.PI)]
    }

    function Vb(bb) {
      return Wb.d.mod(bb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Lb(bb, cb) {
      return Math.abs(Wb.d.computeShortestRotation(bb[0], cb[0])) + Math.abs(Wb.d.computeShortestRotation(bb[1], cb[1])) + Math.abs(Wb.d.computeShortestRotation(bb[2], cb[2]))
    }
    const ub = new Ib
  },
  36705: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Tb,
      f: () => ab,
      i: () => kb,
      m: () => Wb
    });
    let kb = function(bb) {
        return bb[bb.Linear = 0] = "Linear", bb[bb.CatmullRomSpline = 1] = "CatmullRomSpline", bb
      }({}),
      Wb = function(bb) {
        return bb[bb.NoLoop = 0] = "NoLoop", bb[bb.LoopOnLastFrame = 1] = "LoopOnLastFrame", bb[bb.HoldOnLastFrame = 2] = "HoldOnLastFrame", bb
      }({}),
      ab = function(bb) {
        return bb[bb.Movement = 0] = "Movement", bb[bb.Action = 1] = "Action", bb[bb.Emote = 2] = "Emote", bb[bb.Custom = 3] = "Custom", bb
      }({}),
      Tb = function(bb) {
        return bb[bb.Start = 0] = "Start", bb[bb.Stop = 1] = "Stop", bb
      }({})
  },
  4569: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      e: () => kb,
      f: () => ab,
      g: () => Ib,
      i: () => Tb
    });
    const kb = ["sine", "triangle", "square", "sawtooth"],
      Wb = 55,
      ab = {
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

    function Tb(bb) {
      return "string" !== typeof bb ? bb : Object.hasOwn(ab, bb) ? ab[bb] : null
    }

    function Ub(bb, cb, sb) {
      return Math.min(sb, Math.max(cb, bb))
    }

    function Ib(bb) {
      const cb = Ub(bb.durationMs, 10, 500),
        sb = Ub(bb.attackMs, 0, cb),
        {
          intonation: Wb
        } = bb;
      return {
        waveform: kb.includes(bb.waveform) ? bb.waveform : "sine",
        pitchHz: Ub(bb.pitchHz, 20, 4e3),
        glideSemitones: Ub(bb.glideSemitones, -24, 24),
        durationMs: cb,
        attackMs: sb,
        releaseMs: Ub(bb.releaseMs, 0, cb - sb),
        lowpassHz: null === bb.lowpassHz ? null : Ub(bb.lowpassHz, 20, 2e4),
        volume: Ub(bb.volume, 0, 2),
        intonation: {
          variationSemitones: Ub(Wb.variationSemitones, 0, 6),
          declineSemitones: Ub(Wb.declineSemitones, 0, 12),
          questionRiseSemitones: Ub(Wb.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Ub(Wb.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Ub(bb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);