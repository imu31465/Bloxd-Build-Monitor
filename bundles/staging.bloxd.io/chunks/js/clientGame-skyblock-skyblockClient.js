export const id = 25;
export const ids = [25];
export const modules = {
  36681: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => om,
      e: () => Om,
      f: () => Em,
      i: () => pm
    });
    var hm = fm(34283),
      Am = fm(36686),
      am = fm(36689),
      xm = fm(8654),
      wm = fm(1449),
      Dm = fm(59),
      im = fm(77),
      Rm = fm(1135);

    function pm() {
      var mm;
      return (0, wm.i)(Am.e, (0, Am.p)()), (0, Rm.jsx)(Rm.Fragment, {
        children: null === (mm = (0, Am.p)()) || void 0 === mm ? void 0 : mm.content
      })
    }

    function Em(mm) {
      var Tm;
      let {
        show: fm
      } = mm;
      (0, wm.i)(Am.e, (0, Am.p)());
      const im = null === (Tm = (0, Am.p)()) || void 0 === Tm ? void 0 : Tm.menu;
      return (0, Dm.useEffect)((() => {
        var mm;
        fm || (null === im || void 0 === im || null === (mm = im.onClose) || void 0 === mm || mm.call(im), (0, am.m)())
      }), [fm, im]), (0, Dm.useEffect)((() => fm ? (0, xm.h)(am.u, am.d) : void 0), [fm]), (0, Rm.jsx)(hm.c, {
        showing: fm,
        globallyUniqueKey: "clientGameMenu",
        children: null === im || void 0 === im ? void 0 : im.content
      })
    }

    function om(mm) {
      let {
        placement: Tm = "bottom"
      } = mm;
      return (0, Rm.jsx)("div", {
        id: `clientGameHud-${Tm}`,
        style: {
          display: "contents"
        }
      })
    }

    function Om(mm) {
      let {
        children: Tm,
        placement: fm = "bottom"
      } = mm;
      const [hm, Am] = (0, Dm.useState)(null);
      return (0, Dm.useEffect)((() => {
        Am(document.getElementById(`clientGameHud-${fm}`))
      }), [fm]), hm ? (0, im.createPortal)(Tm, hm) : null
    }
  },
  4773: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => qm,
      e: () => jm
    });
    var hm = fm(1080),
      Am = fm.n(hm),
      am = fm(59),
      xm = fm(1208),
      wm = fm(4782),
      Dm = fm(1884),
      im = fm(2391),
      Rm = fm(4784),
      pm = fm(1135);
    const Em = new WeakMap;
    let om = 0;

    function Om(mm) {
      let Tm = Em.get(mm);
      return void 0 === Tm && (Tm = om++, Em.set(mm, Tm)), Tm
    }

    function Ym(mm) {
      let {
        piece: Tm
      } = mm;
      return "space" === Tm.kind ? (0, pm.jsx)(pm.Fragment, {
        children: Tm.text
      }) : (0, pm.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Tm.delayMs}ms`
        },
        children: (0, pm.jsx)(wm.e, {
          text: "icon" === Tm.kind ? `[[${Tm.icon}]]` : Tm.text
        })
      })
    }

    function qm(mm) {
      let {
        display: Tm
      } = mm;
      const {
        selectedLanguage: fm
      } = (0, xm.A)(), hm = (0, am.useMemo)((() => (0, Rm.c)((0, Rm.f)(Tm).plan.pieces)), [Tm, fm.code]);
      return (0, pm.jsxs)("div", {
        className: Am()("Dialogue", {
          DialogueAnimateIn: !1 !== Tm.animateIn
        }),
        children: [Tm.speakerName && (0, pm.jsx)(Dm.b, {
          text: Tm.speakerName,
          className: "DialogueSpeaker"
        }), (0, pm.jsx)("p", {
          className: "DialogueLine",
          children: hm.map(((mm, Tm) => 1 === mm.length && "space" === mm[0].kind ? mm[0].text : (0, pm.jsx)("span", {
            className: "DialogueGlue",
            children: mm.map(((mm, Tm) => (0, pm.jsx)(Ym, {
              piece: mm
            }, Tm)))
          }, Tm)))
        })]
      })
    }
    const jm = (0, am.memo)((function() {
      const mm = (0, im.g)("dialogue");
      return (0, pm.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: mm && (0, pm.jsx)(qm, {
          display: mm
        }, Om(mm))
      })
    }))
  },
  4782: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm
    });
    var hm = fm(59),
      Am = fm(339),
      am = fm(1893),
      xm = fm(1135);

    function wm(mm) {
      let {
        text: Tm
      } = mm;
      const fm = [];
      let wm = "";
      return (0, Am.Zb)(Tm).forEach(((mm, Tm) => {
        if ("string" === typeof mm || !(0, am.f)(mm.icon)) return void(wm += "string" === typeof mm ? mm : mm.icon);
        const Am = Math.max(0, wm.trimEnd().search(/\S{1,12}$/));
        fm.push((0, xm.jsxs)(hm.Fragment, {
          children: [wm.slice(0, Am), (0, xm.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [wm.slice(Am), (0, xm.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": mm.icon,
              children: (0, xm.jsx)(am.d, {
                itemName: mm.icon,
                amount: 0
              })
            })]
          })]
        }, Tm)), wm = ""
      })), fm.push(wm), (0, xm.jsx)(xm.Fragment, {
        children: fm
      })
    }
  },
  34283: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(4477),
      Am = fm(4481);

    function am(mm) {
      let {
        children: Tm,
        showing: fm,
        globallyUniqueKey: am,
        alwaysMountChildren: xm = !1,
        doGameplayStartStopOnShow: wm = !0,
        keepsMovement: Dm = !1
      } = mm;
      return (0, Am.d)(!0, fm, am, Dm), (0, hm.c)(wm, fm), fm || xm ? Tm : null
    }
  },
  4784: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Xm,
      f: () => Gm
    });
    var hm = fm(4789),
      Am = fm(339);
    const am = 120,
      xm = 260,
      wm = 1.15,
      Dm = 1.2,
      im = 2,
      Rm = 1.08,
      pm = .8,
      Em = .95,
      om = 8,
      Om = "[\"')\\]\u300d\u300f\uff09]*",
      Ym = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Om}$`),
      qm = new RegExp(`[?\uff1f]${Om}$`),
      jm = new RegExp(`[!\uff01]${Om}$`),
      Vm = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Im = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Km = new RegExp(`[${Im}]`),
      Qm = new RegExp(`[${Im}]|[^${Im}]+`, "g"),
      nm = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Jm(mm) {
      let Tm = 2166136261;
      for (let fm = 0; fm < mm.length; fm++) Tm ^= mm.charCodeAt(fm), Tm = Math.imul(Tm, 16777619);
      return (Tm >>> 0) / 4294967295 * 2 - 1
    }

    function cm(mm) {
      var Tm;
      if (Km.test(mm)) return 1;
      const fm = mm.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        hm = fm.replace(/[^0-9]/g, "");
      if (hm.length > 0 && !/\p{L}/u.test(fm)) return Math.min(hm.length, 4);
      const Am = null !== (Tm = fm.match(nm)) && void 0 !== Tm ? Tm : [];
      if (0 === Am.length) {
        var am, xm;
        const mm = null !== (am = null === (xm = fm.match(/\p{L}/gu)) || void 0 === xm ? void 0 : xm.length) && void 0 !== am ? am : 0;
        return 0 === mm ? 0 : Math.min(Math.max(1, Math.round(mm / 2.5)), om)
      }
      const wm = fm.replace(/[^\p{L}]/gu, ""),
        Dm = Am.length > 1 && "e" === Am.at(-1) && wm.endsWith("e") && !wm.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(mm.replace(/[^\p{L}]/gu, ""));
      return Math.min(Am.length - (Dm ? 1 : 0), om)
    }

    function zm(mm) {
      return mm.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Zm(mm) {
      const Tm = mm.replace(/[^\p{L}]/gu, "");
      return Tm.length >= 2 && Tm === Tm.toUpperCase() && Tm !== Tm.toLowerCase()
    }

    function km(mm, Tm) {
      var fm;
      const om = Tm && (0, hm.g)(Tm),
        Om = null !== (fm = null === om || void 0 === om ? void 0 : om.syllableMs) && void 0 !== fm ? fm : hm.d,
        Im = function(mm) {
          const Tm = [];
          for (const hm of (0, Am.Zb)(mm))
            if ("string" === typeof hm)
              for (const mm of hm.split(/(\s+)/)) {
                if ("" === mm) continue;
                if (/^\s+$/.test(mm)) {
                  Tm.push({
                    kind: "space",
                    text: mm
                  });
                  continue
                }
                if (!Km.test(mm)) {
                  Tm.push({
                    kind: "word",
                    text: mm,
                    delayMs: 0
                  });
                  continue
                }
                let hm = !0;
                for (const Am of null !== (fm = mm.match(Qm)) && void 0 !== fm ? fm : []) {
                  var fm;
                  const mm = Tm.at(-1);
                  hm || "word" !== (null === mm || void 0 === mm ? void 0 : mm.kind) || Km.test(Am) || /[\p{L}\p{N}]/u.test(Am) ? (hm || Tm.push({
                    kind: "space",
                    text: "\u200b"
                  }), Tm.push({
                    kind: "word",
                    text: Am,
                    delayMs: 0
                  }), hm = !1) : mm.text += Am
                }
              } else Tm.push({
                kind: "icon",
                text: hm.icon,
                delayMs: 0
              });
          return Tm
        }(mm),
        nm = [];
      let km = [];
      for (const hm of Im) "space" !== hm.kind && (km.push(hm), Ym.test(hm.text) && (nm.push(km), km = []));
      nm.push(km);
      const bm = [];
      let Sm = 0;
      for (const hm of nm) {
        var em, Nm;
        const mm = null !== (em = null === (Nm = hm.at(-1)) || void 0 === Nm ? void 0 : Nm.text) && void 0 !== em ? em : "",
          Tm = qm.test(mm),
          fm = jm.test(mm),
          Am = hm.map((mm => "word" === mm.kind ? cm(mm.text) : 1)),
          Im = Am.findLastIndex((mm => mm > 0));
        for (const [qm, jm] of hm.entries()) {
          const mm = "word" === jm.kind,
            hm = Am[qm];
          jm.delayMs = Sm;
          for (let Am = 0; om && Am < hm; Am++) {
            const {
              intonation: am
            } = om;
            let xm = Im > 0 ? -am.declineSemitones * (qm / Im) : 0;
            xm += Jm(`${zm(jm.text)}|${Am}`) * am.variationSemitones;
            const Ym = Math.min(1, am.variationSemitones);
            let Vm = om.glideSemitones,
              Km = 1;
            fm && (xm += am.exclaimLiftSemitones, Km *= wm), Tm && qm === Im && (xm += am.questionRiseSemitones * (hm > 1 ? .5 + .5 * Am / (hm - 1) : 1), Am === hm - 1 && (Vm = Math.abs(Vm) + am.questionRiseSemitones / 2)), mm && Zm(jm.text) && (xm += im * Ym, Km *= Dm), hm > 1 && 0 === Am && (xm += pm * Ym, Km *= Rm), bm.push({
              atMs: Sm + Am * Om,
              semitones: xm,
              glideSemitones: Vm,
              durationMs: Am < hm - 1 ? Math.min(om.durationMs, Om * Em) : om.durationMs,
              level: Km
            })
          }
          Sm += hm * Om + (Ym.test(jm.text) ? xm : Vm.test(jm.text) ? am : 0)
        }
      }
      return {
        pieces: Im.map((mm => "space" === mm.kind ? mm : "icon" === mm.kind ? {
          kind: "icon",
          icon: mm.text,
          delayMs: mm.delayMs
        } : {
          kind: "word",
          text: mm.text,
          delayMs: mm.delayMs
        })),
        blips: bm
      }
    }
    var bm = fm(1208),
      Sm = fm(1259),
      em = fm(1912);

    function Nm(mm) {
      if ("string" === typeof mm) return mm;
      const Tm = Sm.e.get().getCurrentLanguageCode();
      return (0, bm.t)(Tm, mm.translationKey, (0, bm.r)(mm.params, em.e.shown))
    }

    function Gm(mm) {
      const Tm = void 0 === mm.voice ? null : (0, hm.k)(mm.voice),
        fm = Tm && (0, hm.g)(Tm);
      return {
        plan: km(Nm(mm.line), fm),
        synth: fm
      }
    }

    function Xm(mm) {
      const Tm = [];
      let fm = [];
      for (const [Am, am] of mm.entries()) {
        var hm;
        "space" === am.kind && (" " !== am.text || "icon" !== (null === (hm = mm[Am + 1]) || void 0 === hm ? void 0 : hm.kind)) ? (fm.length > 0 && Tm.push(fm), Tm.push([am]), fm = []) : fm.push(am)
      }
      return fm.length > 0 && Tm.push(fm), Tm
    }
  },
  8654: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => am,
      h: () => Am
    });
    let hm = null;
    const Am = function(mm) {
        const Tm = {
          cycle: mm,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return hm = Tm, () => {
          hm === Tm && (hm = null)
        }
      },
      am = () => {
        var mm;
        return null !== (mm = hm) && void 0 !== mm && mm.canCycle() ? hm.cycle : null
      }
  },
  36689: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Ym,
      e: () => qm,
      h: () => wm,
      i: () => Em,
      m: () => jm,
      p: () => pm,
      r: () => Im,
      u: () => Om,
      v: () => Vm
    });
    var hm = fm(23),
      Am = fm(31);
    const am = "clientGameInventoryButtonsChanged",
      xm = new Map;

    function wm() {
      return [...xm.values()].sort(((mm, Tm) => {
        var fm, hm;
        return (null !== (fm = mm.order) && void 0 !== fm ? fm : 0) - (null !== (hm = Tm.order) && void 0 !== hm ? hm : 0)
      }))
    }
    let Dm = null;

    function im(mm) {
      Dm = mm
    }
    let Rm = !1;

    function pm(mm) {
      Rm = !0;
      try {
        mm.onClick()
      } finally {
        Rm = !1
      }
      mm.panel && "clientGame" === hm.c.get("openInGameMenuName") && im(mm.id)
    }

    function Em() {
      return Rm
    }

    function om() {
      return wm().filter((mm => mm.panel && !mm.disabled))
    }

    function Om(mm) {
      const Tm = om(),
        fm = Tm.findIndex((mm => mm.id === Dm));
      return !(fm < 0 || Tm.length < 2) && (pm(Tm[(fm + mm + Tm.length) % Tm.length]), !0)
    }

    function Ym() {
      return null !== Dm && om().length > 1
    }

    function qm() {
      im(null)
    }

    function jm() {
      "inventory" !== hm.c.get("openInGameMenuName") && im(null)
    }

    function Vm() {
      const mm = Dm;
      return im(null), mm
    }

    function Im(mm) {
      return xm.set(mm.id, mm), Am.j.gp(am, wm(), !0), () => {
        xm.get(mm.id) === mm && (xm.delete(mm.id), Am.j.gp(am, wm()))
      }
    }
  },
  36686: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => qm,
      j: () => jm,
      m: () => Em,
      p: () => im,
      s: () => Ym,
      u: () => om,
      w: () => Rm
    });
    var hm = fm(23),
      Am = fm(31),
      am = fm(1286),
      xm = fm(36689);
    const wm = "clientGameUiChanged";
    let Dm = null;

    function im() {
      return Dm
    }

    function Rm(mm, Tm) {
      const fm = {
        content: mm,
        menu: Tm
      };
      return Dm = fm, Am.j.gp(wm, Dm, !0), () => {
        Dm === fm && (Dm = null, Om = !1, qm(), Am.j.gp(wm, null))
      }
    }
    let pm = null;

    function Em() {
      return pm
    }

    function om(mm) {
      return pm = mm, () => {
        pm === mm && (pm = null)
      }
    }
    let Om = !1;

    function Ym() {
      const mm = hm.c.get("openInGameMenuName");
      "clientGame" !== mm && (Om = "inventory" === mm), (0, xm.i)() || (0, xm.e)(), (0, am.p)(am.c), hm.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function qm() {
      Vm(!1)
    }

    function jm() {
      Vm(Om)
    }

    function Vm(mm) {
      "clientGame" === hm.c.get("openInGameMenuName") && hm.c.set({
        openInGameMenuName: mm ? "inventory" : null
      }), mm || (0, xm.e)(), Om = !1
    }
  },
  38609: (mm, Tm, fm) => {
    function hm(mm, Tm, fm) {
      const hm = new Set,
        Am = new ResizeObserver(fm),
        am = () => {
          const Tm = new Set(document.querySelectorAll(mm));
          let am = !1;
          for (const mm of hm) Tm.has(mm) || (Am.unobserve(mm), hm.delete(mm), am = !0);
          for (const mm of Tm) hm.has(mm) || (Am.observe(mm), xm.observe(mm, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), hm.add(mm));
          am && fm()
        },
        xm = new MutationObserver((Tm => {
          Tm.some((mm => "attributes" === mm.type)) && fm(), Tm.some((Tm => function(mm, Tm, fm) {
            if ("childList" !== mm.type) return !1;
            for (const hm of mm.addedNodes)
              if (hm instanceof Element && (hm.matches(Tm) || hm.querySelector(Tm))) return !0;
            for (const hm of mm.removedNodes)
              if (hm instanceof Element)
                for (const mm of fm)
                  if (hm.contains(mm)) return !0;
            return !1
          }(Tm, mm, hm))) && am()
        }));
      xm.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const wm of Tm) Am.observe(wm);
      return window.addEventListener("resize", fm), am(), fm(), () => {
        Am.disconnect(), xm.disconnect(), window.removeEventListener("resize", fm)
      }
    }
    fm.d(Tm, {
      e: () => hm
    })
  },
  8824: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      g: () => Dm
    });
    var hm = fm(23),
      Am = fm(1321),
      am = fm(105);
    const xm = {
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

    function wm() {
      return (0, am.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Dm = new class {
      constructor(mm) {
        this.deps = mm, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(mm, Tm) {
        var fm;
        if (!this.deps.enabled()) return;
        const hm = xm[mm],
          Am = null !== Tm && void 0 !== Tm ? Tm : hm.pattern;
        if (null === Am) return void console.warn("No vibration pattern for", mm);
        const am = this.deps.now();
        am - this.lastAnyAt < 40 && hm.priority < this.playingPriority || am - (null !== (fm = this.lastAt.get(mm)) && void 0 !== fm ? fm : -1 / 0) < hm.minGapMs || am < this.playingUntil && hm.priority < this.playingPriority || (this.lastAt.set(mm, am), this.lastAnyAt = am, this.playingUntil = am + Am.reduce(((mm, Tm) => mm + Tm), 0), this.playingPriority = hm.priority, this.deps.vibrate(Am))
      }
    }({
      vibrate: mm => {
        navigator.vibrate([...mm])
      },
      now: () => performance.now(),
      enabled: () => wm() && hm.c.get("isTouchScreen") && hm.c.get("clientEscMenuOptions").vibration && !(0, Am.f)()
    })
  },
  37243: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => xm
    });
    var hm = fm(37233),
      Am = fm(354),
      am = fm(1877);

    function xm(mm) {
      if ("Ra" in mm) return nm.createAnimationScript(mm);
      return new im(mm).createAnimationScript()
    }

    function wm(mm, Tm, fm, Am) {
      const am = mm.Ra <= 0 ? 1 : Tm + fm * Math.max(0, Am) / mm.Ra;
      return mm.Ea === hm.k.LoopOnLastFrame ? am % 1 : mm.Ea === hm.k.NoLoop && am >= 1 ? null : Math.min(1, am)
    }
    class Dm {
      createAnimationScript(mm) {
        const {
          Ra: Tm,
          loop: fm,
          oa: hm
        } = mm;
        return {
          Ra: Math.round(Tm),
          Ea: this.createLoopMode(null !== fm && void 0 !== fm && fm),
          oa: this.createNodeSkeletonAnimationScript(null !== hm && void 0 !== hm ? hm : null)
        }
      }
      createLoopMode(mm) {
        switch (mm) {
          case !1:
            return hm.k.NoLoop;
          case !0:
            return hm.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return hm.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${mm}`)
      }
      createNodeSkeletonAnimationScript(mm) {
        if (null === mm) return null;
        const Tm = {};
        for (const fm in mm) {
          const hm = mm[fm];
          Tm[fm] = this.createNodeAnimationScript(hm)
        }
        return Tm
      }
      createNodeAnimationScript(mm) {
        const {
          timeline: Tm
        } = mm, fm = Tm.filter((mm => Number.isFinite(mm.timeFraction)));
        return fm.sort(((mm, Tm) => mm.timeFraction - Tm.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(fm, "rotation", Em),
          position: this.createTimelineFromKeyframes(fm, "position", Om)
        }
      }
      createTimelineFromKeyframes(mm, Tm, fm) {
        const hm = [];
        for (const Dm of mm) {
          const mm = Dm[Tm];
          if (mm) {
            const Tm = this.createAnimationFrameWithoutPrecomputes(Dm.timeFraction, mm);
            Rm(Tm) && hm.push(Tm)
          }
        }
        const Am = [];
        for (let Dm = 0; Dm < hm.length; Dm++) {
          var am, xm, wm;
          const mm = hm[Dm],
            Tm = null !== (am = hm[Dm - 1]) && void 0 !== am ? am : mm,
            im = null !== (xm = hm[Dm + 1]) && void 0 !== xm ? xm : mm,
            Rm = null !== (wm = hm[Dm + 2]) && void 0 !== wm ? wm : im;
          Am.push({
            ...mm,
            ...fm(Tm.post, Tm.timeFraction, mm.post, mm.timeFraction, im.pre, im.timeFraction, Rm.pre, Rm.timeFraction)
          })
        }
        return Am
      }
      createAnimationFrameWithoutPrecomputes(mm, Tm) {
        let fm, hm, Am = null;
        var am;
        if ("object" === typeof Tm && "point" in Tm) Am = null !== (am = Tm.qa) && void 0 !== am ? am : null, fm = Tm.point, hm = Tm.point;
        else if ("object" === typeof Tm && "pre" in Tm) {
          var xm;
          Am = null !== (xm = Tm.qa) && void 0 !== xm ? xm : null, fm = Tm.pre, hm = Tm.post
        } else fm = Tm, hm = Tm;
        return {
          timeFraction: mm,
          qa: this.createLerpMode(Am),
          pre: fm,
          post: hm
        }
      }
      createLerpMode(mm) {
        return null === mm ? hm.i.Linear : Dm.LERP_MODE_SCHEMA_MAPPING[mm]
      }
    }
    Dm.LERP_MODE_SCHEMA_MAPPING = {
      linear: hm.i.Linear,
      "catmull-rom-spline": hm.i.CatmullRomSpline
    };
    class im {
      constructor(mm) {
        this.animationSchema = mm
      }
      createAnimationScript() {
        const {
          animation_length: mm,
          loop: Tm,
          bones: fm
        } = this.animationSchema;
        return {
          Ra: Math.round(1e3 * mm),
          Ea: this.createLoopMode(null !== Tm && void 0 !== Tm && Tm),
          oa: this.createNodeSkeletonAnimationScript(null !== fm && void 0 !== fm ? fm : null)
        }
      }
      createLoopMode(mm) {
        switch (mm) {
          case !1:
            return hm.k.NoLoop;
          case !0:
            return hm.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return hm.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${mm}`)
      }
      createNodeSkeletonAnimationScript(mm) {
        if (null === mm) return null;
        const Tm = {};
        for (const fm in mm) {
          const hm = mm[fm];
          Tm[fm] = this.createNodeAnimationScript(hm)
        }
        return Tm
      }
      createNodeAnimationScript(mm) {
        const {
          rotation: Tm,
          position: fm
        } = mm;
        return {
          rotation: this.createAnimationTimeline(null !== Tm && void 0 !== Tm ? Tm : null, qm, Em, !0),
          position: this.createAnimationTimeline(null !== fm && void 0 !== fm ? fm : null, Vm, Om, !1)
        }
      }
      createAnimationTimeline(mm, Tm, fm, hm) {
        if (null === mm) return [];
        if (Array.isArray(mm)) {
          mm = {
            "0.0": mm
          }
        }
        const Am = Object.entries(mm).map((mm => {
          let [fm, hm] = mm;
          const Am = Number(fm) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Am, hm, Tm)
        })).filter(Rm);
        Am.sort(((mm, Tm) => mm.timeFraction - Tm.timeFraction)), hm && function(mm) {
          for (let Tm = 1; Tm < mm.length; Tm++) {
            const fm = mm[Tm - 1].post,
              hm = mm[Tm],
              Am = Im(hm.pre),
              am = Im(hm.post),
              xm = Qm(fm, hm.pre);
            Qm(fm, Am) < xm && (mm[Tm] = {
              ...hm,
              pre: Am,
              post: am
            })
          }
        }(Am);
        const am = [];
        for (let im = 0; im < Am.length; im++) {
          var xm, wm, Dm;
          const mm = Am[im],
            Tm = null !== (xm = Am[im - 1]) && void 0 !== xm ? xm : mm,
            hm = null !== (wm = Am[im + 1]) && void 0 !== wm ? wm : mm,
            Rm = null !== (Dm = Am[im + 2]) && void 0 !== Dm ? Dm : hm;
          am.push({
            ...mm,
            ...fm(Tm.post, Tm.timeFraction, mm.post, mm.timeFraction, hm.pre, hm.timeFraction, Rm.pre, Rm.timeFraction)
          })
        }
        return am
      }
      createAnimationFrameWithoutPrecomputes(mm, Tm, fm) {
        let hm, Am, am = null;
        if ("object" === typeof Tm && "post" in Tm) {
          var xm;
          am = null !== (xm = Tm.lerp_mode) && void 0 !== xm ? xm : null, Am = Ym(Tm.post, fm), hm = Tm.pre ? Ym(Tm.pre, fm) : Am
        } else {
          const mm = Ym(Tm, fm);
          Am = mm, hm = mm
        }
        return {
          timeFraction: mm,
          qa: this.createLerpMode(am),
          pre: hm,
          post: Am
        }
      }
      createLerpMode(mm) {
        return null === mm ? hm.i.Linear : im.LERP_MODE_SCHEMA_MAPPING[mm]
      }
    }

    function Rm(mm) {
      return Number.isFinite(mm.timeFraction) && pm(mm.pre) && pm(mm.post)
    }

    function pm(mm) {
      return Number.isFinite(mm[0]) && Number.isFinite(mm[1]) && Number.isFinite(mm[2])
    }

    function Em(mm, Tm, fm, hm, Am, am, xm, wm) {
      const Dm = am - Tm,
        im = am - hm,
        Rm = wm - hm,
        pm = [null, null, null];
      for (let Em = 0; Em < pm.length; Em++) pm[Em] = om(mm[Em], fm[Em], Am[Em], xm[Em], Dm, Rm);
      return {
        ja: im,
        Va: pm
      }
    }

    function om(mm, Tm, fm, hm, am, xm) {
      return {
        Ka: Am.c.computeShortestRotation(mm, fm) / am,
        Qa: Am.c.computeShortestRotation(Tm, hm) / xm,
        delta: Am.c.computeShortestRotation(Tm, fm)
      }
    }

    function Om(mm, Tm, fm, hm, Am, am, xm, wm) {
      const Dm = am - Tm,
        im = am - hm,
        Rm = wm - hm,
        pm = [null, null, null];
      for (let Em = 0; Em < pm.length; Em++) pm[Em] = {
        Ka: (Am[Em] - mm[Em]) / Dm,
        Qa: (xm[Em] - fm[Em]) / Rm,
        delta: Am[Em] - fm[Em]
      };
      return {
        ja: im,
        Va: pm
      }
    }

    function Ym(mm, Tm) {
      return null === Tm ? mm : Tm(mm)
    }

    function qm(mm) {
      const [Tm, fm, hm] = mm, xm = -(0, am.j)(Tm), wm = -(0, am.j)(fm), Dm = (0, am.j)(hm), im = Am.c.quaternionFromEulerZYX(xm, wm, Dm);
      return Am.c.eulerYXZFromQuaternion(im)
    }
    im.LERP_MODE_SCHEMA_MAPPING = {
      linear: hm.i.Linear,
      catmullrom: hm.i.CatmullRomSpline
    };
    const jm = 1 / 16;

    function Vm(mm) {
      return [-mm[0] * jm, mm[1] * jm, mm[2] * jm]
    }

    function Im(mm) {
      const [Tm, fm, hm] = mm;
      return [Tm >= 0 ? Math.PI - Tm : -Math.PI - Tm, Km(fm + Math.PI), Km(hm + Math.PI)]
    }

    function Km(mm) {
      return Am.c.mod(mm + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Qm(mm, Tm) {
      return Math.abs(Am.c.computeShortestRotation(mm[0], Tm[0])) + Math.abs(Am.c.computeShortestRotation(mm[1], Tm[1])) + Math.abs(Am.c.computeShortestRotation(mm[2], Tm[2]))
    }
    const nm = new Dm
  },
  37233: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => am,
      i: () => hm,
      k: () => Am
    });
    let hm = function(mm) {
        return mm[mm.Linear = 0] = "Linear", mm[mm.CatmullRomSpline = 1] = "CatmullRomSpline", mm
      }({}),
      Am = function(mm) {
        return mm[mm.NoLoop = 0] = "NoLoop", mm[mm.LoopOnLastFrame = 1] = "LoopOnLastFrame", mm[mm.HoldOnLastFrame = 2] = "HoldOnLastFrame", mm
      }({}),
      am = function(mm) {
        return mm[mm.Movement = 0] = "Movement", mm[mm.Action = 1] = "Action", mm[mm.Emote = 2] = "Emote", mm[mm.Custom = 3] = "Custom", mm
      }({}),
      xm = function(mm) {
        return mm[mm.Start = 0] = "Start", mm[mm.Stop = 1] = "Stop", mm
      }({})
  },
  4789: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am,
      e: () => hm,
      f: () => am,
      g: () => Dm,
      k: () => xm
    });
    const hm = ["sine", "triangle", "square", "sawtooth"],
      Am = 55,
      am = {
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

    function xm(mm) {
      return "string" !== typeof mm ? mm : Object.hasOwn(am, mm) ? am[mm] : null
    }

    function wm(mm, Tm, fm) {
      return Math.min(fm, Math.max(Tm, mm))
    }

    function Dm(mm) {
      const Tm = wm(mm.durationMs, 10, 500),
        fm = wm(mm.attackMs, 0, Tm),
        {
          intonation: Am
        } = mm;
      return {
        waveform: hm.includes(mm.waveform) ? mm.waveform : "sine",
        pitchHz: wm(mm.pitchHz, 20, 4e3),
        glideSemitones: wm(mm.glideSemitones, -24, 24),
        durationMs: Tm,
        attackMs: fm,
        releaseMs: wm(mm.releaseMs, 0, Tm - fm),
        lowpassHz: null === mm.lowpassHz ? null : wm(mm.lowpassHz, 20, 2e4),
        volume: wm(mm.volume, 0, 2),
        intonation: {
          variationSemitones: wm(Am.variationSemitones, 0, 6),
          declineSemitones: wm(Am.declineSemitones, 0, 12),
          questionRiseSemitones: wm(Am.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: wm(Am.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: wm(mm.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);