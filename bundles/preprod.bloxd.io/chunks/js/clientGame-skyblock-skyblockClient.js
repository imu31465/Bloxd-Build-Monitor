export const id = 25;
export const ids = [25];
export const modules = {
  35370: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => qb,
      f: () => sy,
      g: () => ey,
      k: () => Ky
    });
    var Uy = Wy(8408),
      hy = Wy(35379),
      fy = Wy(35383),
      Zy = Wy(7911),
      cb = Wy(1268),
      Py = Wy(55),
      oy = Wy(70),
      By = Wy(952);

    function Ky() {
      var yb;
      return (0, cb.m)(hy.e, (0, hy.s)()), (0, By.jsx)(By.Fragment, {
        children: null === (yb = (0, hy.s)()) || void 0 === yb ? void 0 : yb.content
      })
    }

    function ey(yb) {
      var bb;
      let {
        show: Wy
      } = yb;
      (0, cb.m)(hy.e, (0, hy.s)());
      const oy = null === (bb = (0, hy.s)()) || void 0 === bb ? void 0 : bb.menu;
      return (0, Py.useEffect)((() => {
        var yb;
        Wy || (null === oy || void 0 === oy || null === (yb = oy.onClose) || void 0 === yb || yb.call(oy), (0, fy.l)())
      }), [Wy, oy]), (0, Py.useEffect)((() => Wy ? (0, Zy.f)(fy.t, fy.e) : void 0), [Wy]), (0, By.jsx)(Uy.b, {
        showing: Wy,
        globallyUniqueKey: "clientGameMenu",
        children: null === oy || void 0 === oy ? void 0 : oy.content
      })
    }

    function qb(yb) {
      let {
        placement: bb = "bottom"
      } = yb;
      return (0, By.jsx)("div", {
        id: `clientGameHud-${bb}`,
        style: {
          display: "contents"
        }
      })
    }

    function sy(yb) {
      let {
        children: bb,
        placement: Wy = "bottom"
      } = yb;
      const [Uy, hy] = (0, Py.useState)(null);
      return (0, Py.useEffect)((() => {
        hy(document.getElementById(`clientGameHud-${Wy}`))
      }), [Wy]), Uy ? (0, oy.createPortal)(bb, Uy) : null
    }
  },
  4037: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Ey,
      d: () => ly
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(1042),
      cb = Wy(4046),
      Py = Wy(1546),
      oy = Wy(2005),
      By = Wy(4050),
      Ky = Wy(952);
    const ey = new WeakMap;
    let qb = 0;

    function sy(yb) {
      let bb = ey.get(yb);
      return void 0 === bb && (bb = qb++, ey.set(yb, bb)), bb
    }

    function Sy(yb) {
      let {
        piece: bb
      } = yb;
      return "space" === bb.kind ? (0, Ky.jsx)(Ky.Fragment, {
        children: bb.text
      }) : (0, Ky.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${bb.delayMs}ms`
        },
        children: (0, Ky.jsx)(cb.c, {
          text: "icon" === bb.kind ? `[[${bb.icon}]]` : bb.text
        })
      })
    }

    function Ey(yb) {
      let {
        display: bb
      } = yb;
      const {
        selectedLanguage: Wy
      } = (0, Zy.D)(), Uy = (0, fy.useMemo)((() => (0, By.d)((0, By.f)(bb).plan.pieces)), [bb, Wy.code]);
      return (0, Ky.jsxs)("div", {
        className: hy()("Dialogue", {
          DialogueAnimateIn: !1 !== bb.animateIn
        }),
        children: [bb.speakerName && (0, Ky.jsx)(Py.d, {
          text: bb.speakerName,
          className: "DialogueSpeaker"
        }), (0, Ky.jsx)("p", {
          className: "DialogueLine",
          children: Uy.map(((yb, bb) => 1 === yb.length && "space" === yb[0].kind ? yb[0].text : (0, Ky.jsx)("span", {
            className: "DialogueGlue",
            children: yb.map(((yb, bb) => (0, Ky.jsx)(Sy, {
              piece: yb
            }, bb)))
          }, bb)))
        })]
      })
    }
    const ly = (0, fy.memo)((function() {
      const yb = (0, oy.k)("dialogue");
      return (0, Ky.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: yb && (0, Ky.jsx)(Ey, {
          display: yb
        }, sy(yb))
      })
    }))
  },
  4046: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb
    });
    var Uy = Wy(55),
      hy = Wy(248),
      fy = Wy(1556),
      Zy = Wy(952);

    function cb(yb) {
      let {
        text: bb
      } = yb;
      const Wy = [];
      let cb = "";
      return (0, hy.Vb)(bb).forEach(((yb, bb) => {
        if ("string" === typeof yb || !(0, fy.h)(yb.icon)) return void(cb += "string" === typeof yb ? yb : yb.icon);
        const hy = Math.max(0, cb.trimEnd().search(/\S{1,12}$/));
        Wy.push((0, Zy.jsxs)(Uy.Fragment, {
          children: [cb.slice(0, hy), (0, Zy.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [cb.slice(hy), (0, Zy.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": yb.icon,
              children: (0, Zy.jsx)(fy.d, {
                itemName: yb.icon,
                amount: 0
              })
            })]
          })]
        }, bb)), cb = ""
      })), Wy.push(cb), (0, Zy.jsx)(Zy.Fragment, {
        children: Wy
      })
    }
  },
  8408: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy
    });
    var Uy = Wy(3739),
      hy = Wy(3742);

    function fy(yb) {
      let {
        children: bb,
        showing: Wy,
        globallyUniqueKey: fy,
        alwaysMountChildren: Zy = !1,
        doGameplayStartStopOnShow: cb = !0,
        keepsMovement: Py = !1
      } = yb;
      return (0, hy.b)(!0, Wy, fy, Py), (0, Uy.b)(cb, Wy), Wy || Zy ? bb : null
    }
  },
  4050: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => uy,
      f: () => ny
    });
    var Uy = Wy(4052),
      hy = Wy(248);
    const fy = 120,
      Zy = 260,
      cb = 1.15,
      Py = 1.2,
      oy = 2,
      By = 1.08,
      Ky = .8,
      ey = .95,
      qb = 8,
      sy = "[\"')\\]\u300d\u300f\uff09]*",
      Sy = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${sy}$`),
      Ey = new RegExp(`[?\uff1f]${sy}$`),
      ly = new RegExp(`[!\uff01]${sy}$`),
      mb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Cy = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Ty = new RegExp(`[${Cy}]`),
      Vy = new RegExp(`[${Cy}]|[^${Cy}]+`, "g"),
      Jy = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function gb(yb) {
      let bb = 2166136261;
      for (let Wy = 0; Wy < yb.length; Wy++) bb ^= yb.charCodeAt(Wy), bb = Math.imul(bb, 16777619);
      return (bb >>> 0) / 4294967295 * 2 - 1
    }

    function Gy(yb) {
      var bb;
      if (Ty.test(yb)) return 1;
      const Wy = yb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Uy = Wy.replace(/[^0-9]/g, "");
      if (Uy.length > 0 && !/\p{L}/u.test(Wy)) return Math.min(Uy.length, 4);
      const hy = null !== (bb = Wy.match(Jy)) && void 0 !== bb ? bb : [];
      if (0 === hy.length) {
        var fy, Zy;
        const yb = null !== (fy = null === (Zy = Wy.match(/\p{L}/gu)) || void 0 === Zy ? void 0 : Zy.length) && void 0 !== fy ? fy : 0;
        return 0 === yb ? 0 : Math.min(Math.max(1, Math.round(yb / 2.5)), qb)
      }
      const cb = Wy.replace(/[^\p{L}]/gu, ""),
        Py = hy.length > 1 && "e" === hy.at(-1) && cb.endsWith("e") && !cb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(yb.replace(/[^\p{L}]/gu, ""));
      return Math.min(hy.length - (Py ? 1 : 0), qb)
    }

    function Oy(yb) {
      return yb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ry(yb) {
      const bb = yb.replace(/[^\p{L}]/gu, "");
      return bb.length >= 2 && bb === bb.toUpperCase() && bb !== bb.toLowerCase()
    }

    function vb(yb, bb) {
      var Wy;
      const qb = bb && (0, Uy.l)(bb),
        sy = null !== (Wy = null === qb || void 0 === qb ? void 0 : qb.syllableMs) && void 0 !== Wy ? Wy : Uy.d,
        Cy = function(yb) {
          const bb = [];
          for (const Uy of (0, hy.Vb)(yb))
            if ("string" === typeof Uy)
              for (const yb of Uy.split(/(\s+)/)) {
                if ("" === yb) continue;
                if (/^\s+$/.test(yb)) {
                  bb.push({
                    kind: "space",
                    text: yb
                  });
                  continue
                }
                if (!Ty.test(yb)) {
                  bb.push({
                    kind: "word",
                    text: yb,
                    delayMs: 0
                  });
                  continue
                }
                let Uy = !0;
                for (const hy of null !== (Wy = yb.match(Vy)) && void 0 !== Wy ? Wy : []) {
                  var Wy;
                  const yb = bb.at(-1);
                  Uy || "word" !== (null === yb || void 0 === yb ? void 0 : yb.kind) || Ty.test(hy) || /[\p{L}\p{N}]/u.test(hy) ? (Uy || bb.push({
                    kind: "space",
                    text: "\u200b"
                  }), bb.push({
                    kind: "word",
                    text: hy,
                    delayMs: 0
                  }), Uy = !1) : yb.text += hy
                }
              } else bb.push({
                kind: "icon",
                text: Uy.icon,
                delayMs: 0
              });
          return bb
        }(yb),
        Jy = [];
      let vb = [];
      for (const Uy of Cy) "space" !== Uy.kind && (vb.push(Uy), Sy.test(Uy.text) && (Jy.push(vb), vb = []));
      Jy.push(vb);
      const ib = [];
      let My = 0;
      for (const Uy of Jy) {
        var Yy, Xy;
        const yb = null !== (Yy = null === (Xy = Uy.at(-1)) || void 0 === Xy ? void 0 : Xy.text) && void 0 !== Yy ? Yy : "",
          bb = Ey.test(yb),
          Wy = ly.test(yb),
          hy = Uy.map((yb => "word" === yb.kind ? Gy(yb.text) : 1)),
          Cy = hy.findLastIndex((yb => yb > 0));
        for (const [Ey, ly] of Uy.entries()) {
          const yb = "word" === ly.kind,
            Uy = hy[Ey];
          ly.delayMs = My;
          for (let hy = 0; qb && hy < Uy; hy++) {
            const {
              intonation: fy
            } = qb;
            let Zy = Cy > 0 ? -fy.declineSemitones * (Ey / Cy) : 0;
            Zy += gb(`${Oy(ly.text)}|${hy}`) * fy.variationSemitones;
            const Sy = Math.min(1, fy.variationSemitones);
            let mb = qb.glideSemitones,
              Ty = 1;
            Wy && (Zy += fy.exclaimLiftSemitones, Ty *= cb), bb && Ey === Cy && (Zy += fy.questionRiseSemitones * (Uy > 1 ? .5 + .5 * hy / (Uy - 1) : 1), hy === Uy - 1 && (mb = Math.abs(mb) + fy.questionRiseSemitones / 2)), yb && Ry(ly.text) && (Zy += oy * Sy, Ty *= Py), Uy > 1 && 0 === hy && (Zy += Ky * Sy, Ty *= By), ib.push({
              atMs: My + hy * sy,
              semitones: Zy,
              glideSemitones: mb,
              durationMs: hy < Uy - 1 ? Math.min(qb.durationMs, sy * ey) : qb.durationMs,
              level: Ty
            })
          }
          My += Uy * sy + (Sy.test(ly.text) ? Zy : mb.test(ly.text) ? fy : 0)
        }
      }
      return {
        pieces: Cy.map((yb => "space" === yb.kind ? yb : "icon" === yb.kind ? {
          kind: "icon",
          icon: yb.text,
          delayMs: yb.delayMs
        } : {
          kind: "word",
          text: yb.text,
          delayMs: yb.delayMs
        })),
        blips: ib
      }
    }
    var ib = Wy(1042),
      My = Wy(1115),
      Yy = Wy(1580);

    function Xy(yb) {
      if ("string" === typeof yb) return yb;
      const bb = My.f.get().getCurrentLanguageCode();
      return (0, ib.t)(bb, yb.translationKey, (0, ib.s)(yb.params, Yy.d.shown))
    }

    function ny(yb) {
      const bb = void 0 === yb.voice ? null : (0, Uy.p)(yb.voice),
        Wy = bb && (0, Uy.l)(bb);
      return {
        plan: vb(Xy(yb.line), Wy),
        synth: Wy
      }
    }

    function uy(yb) {
      const bb = [];
      let Wy = [];
      for (const [hy, fy] of yb.entries()) {
        var Uy;
        "space" === fy.kind && (" " !== fy.text || "icon" !== (null === (Uy = yb[hy + 1]) || void 0 === Uy ? void 0 : Uy.kind)) ? (Wy.length > 0 && bb.push(Wy), bb.push([fy]), Wy = []) : Wy.push(fy)
      }
      return Wy.length > 0 && bb.push(Wy), bb
    }
  },
  7911: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy,
      f: () => hy
    });
    let Uy = null;
    const hy = function(yb) {
        const bb = {
          cycle: yb,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Uy = bb, () => {
          Uy === bb && (Uy = null)
        }
      },
      fy = () => {
        var yb;
        return null !== (yb = Uy) && void 0 !== yb && yb.canCycle() ? Uy.cycle : null
      }
  },
  35383: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => fy,
      e: () => Sy,
      g: () => Ey,
      j: () => cb,
      k: () => ey,
      l: () => ly,
      p: () => Ky,
      s: () => Cy,
      t: () => sy,
      w: () => mb
    });
    var Uy = Wy(19),
      hy = Wy(23);
    const fy = "clientGameInventoryButtonsChanged",
      Zy = new Map;

    function cb() {
      return [...Zy.values()].sort(((yb, bb) => {
        var Wy, Uy;
        return (null !== (Wy = yb.order) && void 0 !== Wy ? Wy : 0) - (null !== (Uy = bb.order) && void 0 !== Uy ? Uy : 0)
      }))
    }
    let Py = null;

    function oy(yb) {
      Py = yb
    }
    let By = !1;

    function Ky(yb) {
      By = !0;
      try {
        yb.onClick()
      } finally {
        By = !1
      }
      yb.panel && "clientGame" === Uy.d.get("openInGameMenuName") && oy(yb.id)
    }

    function ey() {
      return By
    }

    function qb() {
      return cb().filter((yb => yb.panel && !yb.disabled))
    }

    function sy(yb) {
      const bb = qb(),
        Wy = bb.findIndex((yb => yb.id === Py));
      return !(Wy < 0 || bb.length < 2) && (Ky(bb[(Wy + yb + bb.length) % bb.length]), !0)
    }

    function Sy() {
      return null !== Py && qb().length > 1
    }

    function Ey() {
      oy(null)
    }

    function ly() {
      "inventory" !== Uy.d.get("openInGameMenuName") && oy(null)
    }

    function mb() {
      const yb = Py;
      return oy(null), yb
    }

    function Cy(yb) {
      return Zy.set(yb.id, yb), hy.g.EZ(fy, cb(), !0), () => {
        Zy.get(yb.id) === yb && (Zy.delete(yb.id), hy.g.EZ(fy, cb()))
      }
    }
  },
  35379: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => cb,
      h: () => Ey,
      k: () => ly,
      o: () => ey,
      s: () => oy,
      t: () => Sy,
      v: () => qb,
      z: () => By
    });
    var Uy = Wy(19),
      hy = Wy(23),
      fy = Wy(1145),
      Zy = Wy(35383);
    const cb = "clientGameUiChanged";
    let Py = null;

    function oy() {
      return Py
    }

    function By(yb, bb) {
      const Wy = {
        content: yb,
        menu: bb
      };
      return Py = Wy, hy.g.EZ(cb, Py, !0), () => {
        Py === Wy && (Py = null, sy = !1, Ey(), hy.g.EZ(cb, null))
      }
    }
    let Ky = null;

    function ey() {
      return Ky
    }

    function qb(yb) {
      return Ky = yb, () => {
        Ky === yb && (Ky = null)
      }
    }
    let sy = !1;

    function Sy() {
      const yb = Uy.d.get("openInGameMenuName");
      "clientGame" !== yb && (sy = "inventory" === yb), (0, Zy.k)() || (0, Zy.g)(), (0, fy.h)("InGameMenu"), Uy.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Ey() {
      mb(!1)
    }

    function ly() {
      mb(sy)
    }

    function mb(yb) {
      "clientGame" === Uy.d.get("openInGameMenuName") && Uy.d.set({
        openInGameMenuName: yb ? "inventory" : null
      }), yb || (0, Zy.g)(), sy = !1
    }
  },
  37197: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy) {
      const Uy = new Set,
        hy = new ResizeObserver(Wy),
        fy = () => {
          const bb = new Set(document.querySelectorAll(yb));
          let fy = !1;
          for (const yb of Uy) bb.has(yb) || (hy.unobserve(yb), Uy.delete(yb), fy = !0);
          for (const yb of bb) Uy.has(yb) || (hy.observe(yb), Zy.observe(yb, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Uy.add(yb));
          fy && Wy()
        },
        Zy = new MutationObserver((bb => {
          bb.some((yb => "attributes" === yb.type)) && Wy(), bb.some((bb => function(yb, bb, Wy) {
            if ("childList" !== yb.type) return !1;
            for (const Uy of yb.addedNodes)
              if (Uy instanceof Element && (Uy.matches(bb) || Uy.querySelector(bb))) return !0;
            for (const Uy of yb.removedNodes)
              if (Uy instanceof Element)
                for (const yb of Wy)
                  if (Uy.contains(yb)) return !0;
            return !1
          }(bb, yb, Uy))) && fy()
        }));
      Zy.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const cb of bb) hy.observe(cb);
      return window.addEventListener("resize", Wy), fy(), Wy(), () => {
        hy.disconnect(), Zy.disconnect(), window.removeEventListener("resize", Wy)
      }
    }
    Wy.d(bb, {
      c: () => Uy
    })
  },
  8026: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      e: () => Py
    });
    var Uy = Wy(19),
      hy = Wy(1177),
      fy = Wy(94);
    const Zy = {
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

    function cb() {
      return (0, fy.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Py = new class {
      constructor(yb) {
        this.deps = yb, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(yb, bb) {
        var Wy;
        if (!this.deps.enabled()) return;
        const Uy = Zy[yb],
          hy = null !== bb && void 0 !== bb ? bb : Uy.pattern;
        if (null === hy) return void console.warn("No vibration pattern for", yb);
        const fy = this.deps.now();
        fy - this.lastAnyAt < 40 && Uy.priority < this.playingPriority || fy - (null !== (Wy = this.lastAt.get(yb)) && void 0 !== Wy ? Wy : -1 / 0) < Uy.minGapMs || fy < this.playingUntil && Uy.priority < this.playingPriority || (this.lastAt.set(yb, fy), this.lastAnyAt = fy, this.playingUntil = fy + hy.reduce(((yb, bb) => yb + bb), 0), this.playingPriority = Uy.priority, this.deps.vibrate(hy))
      }
    }({
      vibrate: yb => {
        navigator.vibrate([...yb])
      },
      now: () => performance.now(),
      enabled: () => cb() && Uy.d.get("isTouchScreen") && Uy.d.get("clientEscMenuOptions").vibration && !(0, hy.f)()
    })
  },
  36237: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => cb,
      d: () => Zy
    });
    var Uy = Wy(36235),
      hy = Wy(258),
      fy = Wy(1541);

    function Zy(yb) {
      if ("cby" in yb) return Jy.createAnimationScript(yb);
      return new oy(yb).createAnimationScript()
    }

    function cb(yb, bb, Wy, hy) {
      const fy = yb.cby <= 0 ? 1 : bb + Wy * Math.max(0, hy) / yb.cby;
      return yb.Pyy === Uy.k.LoopOnLastFrame ? fy % 1 : yb.Pyy === Uy.k.NoLoop && fy >= 1 ? null : Math.min(1, fy)
    }
    class Py {
      createAnimationScript(yb) {
        const {
          cby: bb,
          loop: Wy,
          oyy: Uy
        } = yb;
        return {
          cby: Math.round(bb),
          Pyy: this.createLoopMode(null !== Wy && void 0 !== Wy && Wy),
          oyy: this.createNodeSkeletonAnimationScript(null !== Uy && void 0 !== Uy ? Uy : null)
        }
      }
      createLoopMode(yb) {
        switch (yb) {
          case !1:
            return Uy.k.NoLoop;
          case !0:
            return Uy.k.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Uy.k.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${yb}`)
      }
      createNodeSkeletonAnimationScript(yb) {
        if (null === yb) return null;
        const bb = {};
        for (const Wy in yb) {
          const Uy = yb[Wy];
          bb[Wy] = this.createNodeAnimationScript(Uy)
        }
        return bb
      }
      createNodeAnimationScript(yb) {
        const {
          timeline: bb
        } = yb, Wy = bb.filter((yb => Number.isFinite(yb.timeFraction)));
        return Wy.sort(((yb, bb) => yb.timeFraction - bb.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(Wy, "rotation", ey),
          position: this.createTimelineFromKeyframes(Wy, "position", sy)
        }
      }
      createTimelineFromKeyframes(yb, bb, Wy) {
        const Uy = [];
        for (const Py of yb) {
          const yb = Py[bb];
          if (yb) {
            const bb = this.createAnimationFrameWithoutPrecomputes(Py.timeFraction, yb);
            By(bb) && Uy.push(bb)
          }
        }
        const hy = [];
        for (let Py = 0; Py < Uy.length; Py++) {
          var fy, Zy, cb;
          const yb = Uy[Py],
            bb = null !== (fy = Uy[Py - 1]) && void 0 !== fy ? fy : yb,
            oy = null !== (Zy = Uy[Py + 1]) && void 0 !== Zy ? Zy : yb,
            By = null !== (cb = Uy[Py + 2]) && void 0 !== cb ? cb : oy;
          hy.push({
            ...yb,
            ...Wy(bb.post, bb.timeFraction, yb.post, yb.timeFraction, oy.pre, oy.timeFraction, By.pre, By.timeFraction)
          })
        }
        return hy
      }
      createAnimationFrameWithoutPrecomputes(yb, bb) {
        let Wy, Uy, hy = null;
        var fy;
        if ("object" === typeof bb && "point" in bb) hy = null !== (fy = bb.Kyy) && void 0 !== fy ? fy : null, Wy = bb.point, Uy = bb.point;
        else if ("object" === typeof bb && "pre" in bb) {
          var Zy;
          hy = null !== (Zy = bb.Kyy) && void 0 !== Zy ? Zy : null, Wy = bb.pre, Uy = bb.post
        } else Wy = bb, Uy = bb;
        return {
          timeFraction: yb,
          Kyy: this.createLerpMode(hy),
          pre: Wy,
          post: Uy
        }
      }
      createLerpMode(yb) {
        return null === yb ? Uy.i.Linear : Py.LERP_MODE_SCHEMA_MAPPING[yb]
      }
    }
    Py.LERP_MODE_SCHEMA_MAPPING = {
      linear: Uy.i.Linear,
      "catmull-rom-spline": Uy.i.CatmullRomSpline
    };
    class oy {
      constructor(yb) {
        this.animationSchema = yb
      }
      createAnimationScript() {
        const {
          animation_length: yb,
          loop: bb,
          bones: Wy
        } = this.animationSchema;
        return {
          cby: Math.round(1e3 * yb),
          Pyy: this.createLoopMode(null !== bb && void 0 !== bb && bb),
          oyy: this.createNodeSkeletonAnimationScript(null !== Wy && void 0 !== Wy ? Wy : null)
        }
      }
      createLoopMode(yb) {
        switch (yb) {
          case !1:
            return Uy.k.NoLoop;
          case !0:
            return Uy.k.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Uy.k.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${yb}`)
      }
      createNodeSkeletonAnimationScript(yb) {
        if (null === yb) return null;
        const bb = {};
        for (const Wy in yb) {
          const Uy = yb[Wy];
          bb[Wy] = this.createNodeAnimationScript(Uy)
        }
        return bb
      }
      createNodeAnimationScript(yb) {
        const {
          rotation: bb,
          position: Wy
        } = yb;
        return {
          rotation: this.createAnimationTimeline(null !== bb && void 0 !== bb ? bb : null, Ey, ey, !0),
          position: this.createAnimationTimeline(null !== Wy && void 0 !== Wy ? Wy : null, mb, sy, !1)
        }
      }
      createAnimationTimeline(yb, bb, Wy, Uy) {
        if (null === yb) return [];
        if (Array.isArray(yb)) {
          yb = {
            "0.0": yb
          }
        }
        const hy = Object.entries(yb).map((yb => {
          let [Wy, Uy] = yb;
          const hy = Number(Wy) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(hy, Uy, bb)
        })).filter(By);
        hy.sort(((yb, bb) => yb.timeFraction - bb.timeFraction)), Uy && function(yb) {
          for (let bb = 1; bb < yb.length; bb++) {
            const Wy = yb[bb - 1].post,
              Uy = yb[bb],
              hy = Cy(Uy.pre),
              fy = Cy(Uy.post),
              Zy = Vy(Wy, Uy.pre);
            Vy(Wy, hy) < Zy && (yb[bb] = {
              ...Uy,
              pre: hy,
              post: fy
            })
          }
        }(hy);
        const fy = [];
        for (let oy = 0; oy < hy.length; oy++) {
          var Zy, cb, Py;
          const yb = hy[oy],
            bb = null !== (Zy = hy[oy - 1]) && void 0 !== Zy ? Zy : yb,
            Uy = null !== (cb = hy[oy + 1]) && void 0 !== cb ? cb : yb,
            By = null !== (Py = hy[oy + 2]) && void 0 !== Py ? Py : Uy;
          fy.push({
            ...yb,
            ...Wy(bb.post, bb.timeFraction, yb.post, yb.timeFraction, Uy.pre, Uy.timeFraction, By.pre, By.timeFraction)
          })
        }
        return fy
      }
      createAnimationFrameWithoutPrecomputes(yb, bb, Wy) {
        let Uy, hy, fy = null;
        if ("object" === typeof bb && "post" in bb) {
          var Zy;
          fy = null !== (Zy = bb.lerp_mode) && void 0 !== Zy ? Zy : null, hy = Sy(bb.post, Wy), Uy = bb.pre ? Sy(bb.pre, Wy) : hy
        } else {
          const yb = Sy(bb, Wy);
          hy = yb, Uy = yb
        }
        return {
          timeFraction: yb,
          Kyy: this.createLerpMode(fy),
          pre: Uy,
          post: hy
        }
      }
      createLerpMode(yb) {
        return null === yb ? Uy.i.Linear : oy.LERP_MODE_SCHEMA_MAPPING[yb]
      }
    }

    function By(yb) {
      return Number.isFinite(yb.timeFraction) && Ky(yb.pre) && Ky(yb.post)
    }

    function Ky(yb) {
      return Number.isFinite(yb[0]) && Number.isFinite(yb[1]) && Number.isFinite(yb[2])
    }

    function ey(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
      const Py = fy - bb,
        oy = fy - Uy,
        By = cb - Uy,
        Ky = [null, null, null];
      for (let ey = 0; ey < Ky.length; ey++) Ky[ey] = qb(yb[ey], Wy[ey], hy[ey], Zy[ey], Py, By);
      return {
        eyy: oy,
        qby: Ky
      }
    }

    function qb(yb, bb, Wy, Uy, fy, Zy) {
      return {
        Syy: hy.c.computeShortestRotation(yb, Wy) / fy,
        Eyy: hy.c.computeShortestRotation(bb, Uy) / Zy,
        delta: hy.c.computeShortestRotation(bb, Wy)
      }
    }

    function sy(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
      const Py = fy - bb,
        oy = fy - Uy,
        By = cb - Uy,
        Ky = [null, null, null];
      for (let ey = 0; ey < Ky.length; ey++) Ky[ey] = {
        Syy: (hy[ey] - yb[ey]) / Py,
        Eyy: (Zy[ey] - Wy[ey]) / By,
        delta: hy[ey] - Wy[ey]
      };
      return {
        eyy: oy,
        qby: Ky
      }
    }

    function Sy(yb, bb) {
      return null === bb ? yb : bb(yb)
    }

    function Ey(yb) {
      const [bb, Wy, Uy] = yb, Zy = -(0, fy.j)(bb), cb = -(0, fy.j)(Wy), Py = (0, fy.j)(Uy), oy = hy.c.quaternionFromEulerZYX(Zy, cb, Py);
      return hy.c.eulerYXZFromQuaternion(oy)
    }
    oy.LERP_MODE_SCHEMA_MAPPING = {
      linear: Uy.i.Linear,
      catmullrom: Uy.i.CatmullRomSpline
    };
    const ly = 1 / 16;

    function mb(yb) {
      return [-yb[0] * ly, yb[1] * ly, yb[2] * ly]
    }

    function Cy(yb) {
      const [bb, Wy, Uy] = yb;
      return [bb >= 0 ? Math.PI - bb : -Math.PI - bb, Ty(Wy + Math.PI), Ty(Uy + Math.PI)]
    }

    function Ty(yb) {
      return hy.c.mod(yb + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Vy(yb, bb) {
      return Math.abs(hy.c.computeShortestRotation(yb[0], bb[0])) + Math.abs(hy.c.computeShortestRotation(yb[1], bb[1])) + Math.abs(hy.c.computeShortestRotation(yb[2], bb[2]))
    }
    const Jy = new Py
  },
  36235: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      h: () => fy,
      i: () => Uy,
      k: () => hy
    });
    let Uy = function(yb) {
        return yb[yb.Linear = 0] = "Linear", yb[yb.CatmullRomSpline = 1] = "CatmullRomSpline", yb
      }({}),
      hy = function(yb) {
        return yb[yb.NoLoop = 0] = "NoLoop", yb[yb.LoopOnLastFrame = 1] = "LoopOnLastFrame", yb[yb.HoldOnLastFrame = 2] = "HoldOnLastFrame", yb
      }({}),
      fy = function(yb) {
        return yb[yb.Movement = 0] = "Movement", yb[yb.Action = 1] = "Action", yb[yb.Emote = 2] = "Emote", yb[yb.Custom = 3] = "Custom", yb
      }({}),
      Zy = function(yb) {
        return yb[yb.Start = 0] = "Start", yb[yb.Stop = 1] = "Stop", yb
      }({})
  },
  4052: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      h: () => Uy,
      i: () => fy,
      l: () => Py,
      p: () => Zy
    });
    const Uy = ["sine", "triangle", "square", "sawtooth"],
      hy = 55,
      fy = {
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

    function Zy(yb) {
      return "string" !== typeof yb ? yb : Object.hasOwn(fy, yb) ? fy[yb] : null
    }

    function cb(yb, bb, Wy) {
      return Math.min(Wy, Math.max(bb, yb))
    }

    function Py(yb) {
      const bb = cb(yb.durationMs, 10, 500),
        Wy = cb(yb.attackMs, 0, bb),
        {
          intonation: hy
        } = yb;
      return {
        waveform: Uy.includes(yb.waveform) ? yb.waveform : "sine",
        pitchHz: cb(yb.pitchHz, 20, 4e3),
        glideSemitones: cb(yb.glideSemitones, -24, 24),
        durationMs: bb,
        attackMs: Wy,
        releaseMs: cb(yb.releaseMs, 0, bb - Wy),
        lowpassHz: null === yb.lowpassHz ? null : cb(yb.lowpassHz, 20, 2e4),
        volume: cb(yb.volume, 0, 2),
        intonation: {
          variationSemitones: cb(hy.variationSemitones, 0, 6),
          declineSemitones: cb(hy.declineSemitones, 0, 12),
          questionRiseSemitones: cb(hy.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: cb(hy.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: cb(yb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);