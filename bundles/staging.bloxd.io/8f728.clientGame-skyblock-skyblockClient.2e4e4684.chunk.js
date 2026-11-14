export const id = 23;
export const ids = [23];
export const modules = {
  35245: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      f: () => mB,
      i: () => Tc,
      j: () => Oc
    });
    var Vc = nc(8187),
      Ic = nc(35247),
      rB = nc(35253),
      uc = nc(7684),
      sc = nc(1252),
      Mc = nc(73),
      Pc = nc(83),
      qB = nc(957);

    function Oc() {
      var cB;
      return (0, sc.g)(Ic.d, (0, Ic.o)()), (0, qB.jsx)(qB.Fragment, {
        children: null === (cB = (0, Ic.o)()) || void 0 === cB ? void 0 : cB.content
      })
    }

    function Tc(cB) {
      var Bc;
      let {
        show: nc
      } = cB;
      (0, sc.g)(Ic.d, (0, Ic.o)());
      const Pc = null === (Bc = (0, Ic.o)()) || void 0 === Bc ? void 0 : Bc.menu;
      return (0, Mc.useEffect)((() => {
        nc || (null === Pc || void 0 === Pc || Pc.onClose(), (0, rB.q)())
      }), [nc, Pc]), (0, Mc.useEffect)((() => nc ? (0, uc.f)(rB.x, rB.h) : void 0), [nc]), (0, qB.jsx)(Vc.d, {
        showing: nc,
        globallyUniqueKey: "clientGameMenu",
        children: null === Pc || void 0 === Pc ? void 0 : Pc.content
      })
    }

    function fc(cB) {
      let {
        placement: Bc = "bottom"
      } = cB;
      return (0, qB.jsx)("div", {
        id: `clientGameHud-${Bc}`,
        style: {
          display: "contents"
        }
      })
    }

    function mB(cB) {
      let {
        children: Bc,
        placement: nc = "bottom"
      } = cB;
      const [Vc, Ic] = (0, Mc.useState)(null);
      return (0, Mc.useEffect)((() => {
        Ic(document.getElementById(`clientGameHud-${nc}`))
      }), [nc]), Vc ? (0, Pc.createPortal)(Bc, Vc) : null
    }
  },
  3876: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => tB,
      h: () => Sc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(73),
      uc = nc(1051),
      sc = nc(3883),
      Mc = nc(1536),
      Pc = nc(1946),
      qB = nc(3885),
      Oc = nc(957);
    const Tc = new WeakMap;
    let fc = 0;

    function mB(cB) {
      let Bc = Tc.get(cB);
      return void 0 === Bc && (Bc = fc++, Tc.set(cB, Bc)), Bc
    }

    function ec(cB) {
      let {
        piece: Bc
      } = cB;
      return "space" === Bc.kind ? (0, Oc.jsx)(Oc.Fragment, {
        children: Bc.text
      }) : (0, Oc.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${Bc.delayMs}ms`
        },
        children: (0, Oc.jsx)(sc.e, {
          text: "icon" === Bc.kind ? `[[${Bc.icon}]]` : Bc.text
        })
      })
    }

    function tB(cB) {
      let {
        display: Bc
      } = cB;
      const {
        selectedLanguage: nc
      } = (0, uc.x)(), Vc = (0, rB.useMemo)((() => (0, qB.e)((0, qB.h)(Bc).plan.pieces)), [Bc, nc.code]);
      return (0, Oc.jsxs)("div", {
        className: Ic()("Dialogue", {
          DialogueAnimateIn: !1 !== Bc.animateIn
        }),
        children: [Bc.speakerName && (0, Oc.jsx)(Mc.e, {
          text: Bc.speakerName,
          className: "DialogueSpeaker"
        }), (0, Oc.jsx)("p", {
          className: "DialogueLine",
          children: Vc.map(((cB, Bc) => 1 === cB.length && "space" === cB[0].kind ? cB[0].text : (0, Oc.jsx)("span", {
            className: "DialogueGlue",
            children: cB.map(((cB, Bc) => (0, Oc.jsx)(ec, {
              piece: cB
            }, Bc)))
          }, Bc)))
        })]
      })
    }
    const Sc = (0, rB.memo)((function() {
      const cB = (0, Pc.j)("dialogue");
      return (0, Oc.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: cB && (0, Oc.jsx)(tB, {
          display: cB
        }, mB(cB))
      })
    }))
  },
  3883: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc
    });
    var Vc = nc(73),
      Ic = nc(244),
      rB = nc(1553),
      uc = nc(957);

    function sc(cB) {
      let {
        text: Bc
      } = cB;
      const nc = [];
      let sc = "";
      return (0, Ic.Zb)(Bc).forEach(((cB, Bc) => {
        if ("string" === typeof cB || !(0, rB.g)(cB.icon)) return void(sc += "string" === typeof cB ? cB : cB.icon);
        const Ic = Math.max(0, sc.trimEnd().search(/\S{1,12}$/));
        nc.push((0, uc.jsxs)(Vc.Fragment, {
          children: [sc.slice(0, Ic), (0, uc.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [sc.slice(Ic), (0, uc.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": cB.icon,
              children: (0, uc.jsx)(rB.d, {
                itemName: cB.icon,
                amount: 0
              })
            })]
          })]
        }, Bc)), sc = ""
      })), nc.push(sc), (0, uc.jsx)(uc.Fragment, {
        children: nc
      })
    }
  },
  35175: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      f: () => Tc,
      i: () => Oc,
      m: () => fc,
      q: () => Pc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(35184),
      sc = nc(35),
      Mc = nc(957);

    function Pc(cB, Bc) {
      const nc = (0, Vc.useRef)(null);
      return (0, Vc.useLayoutEffect)((() => (uc.e.set(cB, nc.current, Bc), () => {
        uc.e.set(cB, null)
      })), [cB, Bc]), nc
    }
    const qB = "touchKeysChanged",
      Oc = {
        Crouch: "C",
        Jump: "J",
        Use: "U",
        Primary: "P",
        Attack: "A",
        Game: "G",
        Context: "X"
      },
      Tc = (0, Vc.forwardRef)((function(cB, Bc) {
        let {
          slot: nc,
          canvasZone: Ic = !1,
          lit: uc = !1,
          label: Pc,
          className: Oc,
          children: Tc,
          ...fc
        } = cB;
        return (0, Vc.useEffect)((() => (sc.i.Vu(qB), () => {
          sc.i.Vu(qB)
        })), []), (0, Mc.jsx)("div", {
          ref: Bc,
          className: rB()("TouchKeyHit", `TouchSlot${nc}`, Oc, {
            CanvasZone: Ic
          }),
          ...fc,
          children: (0, Mc.jsxs)("div", {
            className: rB()("TouchKey", {
              Lit: uc,
              Labelled: void 0 !== Pc
            }),
            children: [Tc, void 0 !== Pc && (0, Mc.jsx)("span", {
              className: "TouchKeyLabel",
              children: Pc
            })]
          })
        })
      }));

    function fc(cB, Bc) {
      const nc = Bc ? [Oc.Context] : [Oc.Primary, Oc.Context];
      return cB.filter((cB => null !== cB)).slice(0, nc.length).map(((cB, Bc) => {
        const Ic = nc[Bc];
        return (0, Mc.jsx)(Vc.Fragment, {
          children: cB.render(Ic)
        }, `${cB.id}:${Ic}`)
      }))
    }
  },
  8187: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB
    });
    var Vc = nc(3648),
      Ic = nc(3652);

    function rB(cB) {
      let {
        children: Bc,
        showing: nc,
        globallyUniqueKey: rB,
        alwaysMountChildren: uc = !1,
        doGameplayStartStopOnShow: sc = !0,
        keepsMovement: Mc = !1
      } = cB;
      return (0, Ic.c)(!0, nc, rB, Mc), (0, Vc.c)(sc, nc), nc || uc ? Bc : null
    }
  },
  35345: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      d: () => Mc
    });
    var Vc = nc(73),
      Ic = nc(27),
      rB = nc(1252),
      uc = nc(35175);

    function sc(cB, Bc, nc) {
      let Vc = null;
      for (const rB of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
        const uc = rB.getBoundingClientRect();
        var Ic;
        if (uc.height > 0 && uc.top > nc && uc.left < Bc && uc.right > cB) Vc = Math.min(null !== (Ic = Vc) && void 0 !== Ic ? Ic : uc.top, uc.top)
      }
      return Vc
    }

    function Mc(cB, Bc) {
      const {
        isTouchScreen: nc
      } = (0, Ic.j)(["isTouchScreen"]), Mc = (0, Vc.useRef)(null);
      (0, rB.f)(uc.b, (() => {
        var cB;
        null === (cB = Mc.current) || void 0 === cB || cB.call(Mc)
      })), (0, Vc.useEffect)((() => {
        const Vc = null === cB || void 0 === cB ? void 0 : cB.closest(Bc),
          Ic = document.querySelector(".BottomRightElements");
        if (!nc || !cB || !Vc || !Ic) return;
        const rB = () => {
          ! function(cB, Bc) {
            const nc = cB.getBoundingClientRect(),
              Vc = sc(nc.left, nc.right, -1 / 0),
              Ic = Bc.getBoundingClientRect().bottom + parseFloat(getComputedStyle(Bc).bottom),
              rB = null === Vc ? "0px" : `${Math.ceil(Ic-Vc+4)}px`;
            Bc.style.getPropertyValue("--touch-keys-reach") !== rB && Bc.style.setProperty("--touch-keys-reach", rB)
          }(cB, Vc)
        };
        Mc.current = rB;
        const uc = new ResizeObserver(rB);
        return uc.observe(cB), uc.observe(Ic), window.addEventListener("resize", rB), () => {
          Mc.current = null, uc.disconnect(), window.removeEventListener("resize", rB), Vc.style.setProperty("--touch-keys-reach", "0px")
        }
      }), [nc, cB, Bc])
    }
  },
  3885: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Dc,
      h: () => vB
    });
    var Vc = nc(3893),
      Ic = nc(244);
    const rB = 120,
      uc = 260,
      sc = 1.15,
      Mc = 1.2,
      Pc = 2,
      qB = 1.08,
      Oc = .8,
      Tc = .95,
      fc = 8,
      mB = "[\"')\\]\u300d\u300f\uff09]*",
      ec = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${mB}$`),
      tB = new RegExp(`[?\uff1f]${mB}$`),
      Sc = new RegExp(`[!\uff01]${mB}$`),
      yB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      zB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      pc = new RegExp(`[${zB}]`),
      hc = new RegExp(`[${zB}]|[^${zB}]+`, "g"),
      aB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function lc(cB) {
      let Bc = 2166136261;
      for (let nc = 0; nc < cB.length; nc++) Bc ^= cB.charCodeAt(nc), Bc = Math.imul(Bc, 16777619);
      return (Bc >>> 0) / 4294967295 * 2 - 1
    }

    function Yc(cB) {
      var Bc;
      if (pc.test(cB)) return 1;
      const nc = cB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Vc = nc.replace(/[^0-9]/g, "");
      if (Vc.length > 0 && !/\p{L}/u.test(nc)) return Math.min(Vc.length, 4);
      const Ic = null !== (Bc = nc.match(aB)) && void 0 !== Bc ? Bc : [];
      if (0 === Ic.length) {
        var rB, uc;
        const cB = null !== (rB = null === (uc = nc.match(/\p{L}/gu)) || void 0 === uc ? void 0 : uc.length) && void 0 !== rB ? rB : 0;
        return 0 === cB ? 0 : Math.min(Math.max(1, Math.round(cB / 2.5)), fc)
      }
      const sc = nc.replace(/[^\p{L}]/gu, ""),
        Mc = Ic.length > 1 && "e" === Ic.at(-1) && sc.endsWith("e") && !sc.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(cB.replace(/[^\p{L}]/gu, ""));
      return Math.min(Ic.length - (Mc ? 1 : 0), fc)
    }

    function Lc(cB) {
      return cB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function gB(cB) {
      const Bc = cB.replace(/[^\p{L}]/gu, "");
      return Bc.length >= 2 && Bc === Bc.toUpperCase() && Bc !== Bc.toLowerCase()
    }

    function Uc(cB, Bc) {
      var nc;
      const fc = Bc && (0, Vc.k)(Bc),
        mB = null !== (nc = null === fc || void 0 === fc ? void 0 : fc.syllableMs) && void 0 !== nc ? nc : Vc.e,
        zB = function(cB) {
          const Bc = [];
          for (const Vc of (0, Ic.Zb)(cB))
            if ("string" === typeof Vc)
              for (const cB of Vc.split(/(\s+)/)) {
                if ("" === cB) continue;
                if (/^\s+$/.test(cB)) {
                  Bc.push({
                    kind: "space",
                    text: cB
                  });
                  continue
                }
                if (!pc.test(cB)) {
                  Bc.push({
                    kind: "word",
                    text: cB,
                    delayMs: 0
                  });
                  continue
                }
                let Vc = !0;
                for (const Ic of null !== (nc = cB.match(hc)) && void 0 !== nc ? nc : []) {
                  var nc;
                  const cB = Bc.at(-1);
                  Vc || "word" !== (null === cB || void 0 === cB ? void 0 : cB.kind) || pc.test(Ic) || /[\p{L}\p{N}]/u.test(Ic) ? (Vc || Bc.push({
                    kind: "space",
                    text: "\u200b"
                  }), Bc.push({
                    kind: "word",
                    text: Ic,
                    delayMs: 0
                  }), Vc = !1) : cB.text += Ic
                }
              } else Bc.push({
                kind: "icon",
                text: Vc.icon,
                delayMs: 0
              });
          return Bc
        }(cB),
        aB = [];
      let Uc = [];
      for (const Vc of zB) "space" !== Vc.kind && (Uc.push(Vc), ec.test(Vc.text) && (aB.push(Uc), Uc = []));
      aB.push(Uc);
      const bB = [];
      let Zc = 0;
      for (const Vc of aB) {
        var Qc, Cc;
        const cB = null !== (Qc = null === (Cc = Vc.at(-1)) || void 0 === Cc ? void 0 : Cc.text) && void 0 !== Qc ? Qc : "",
          Bc = tB.test(cB),
          nc = Sc.test(cB),
          Ic = Vc.map((cB => "word" === cB.kind ? Yc(cB.text) : 1)),
          zB = Ic.findLastIndex((cB => cB > 0));
        for (const [tB, Sc] of Vc.entries()) {
          const cB = "word" === Sc.kind,
            Vc = Ic[tB];
          Sc.delayMs = Zc;
          for (let Ic = 0; fc && Ic < Vc; Ic++) {
            const {
              intonation: rB
            } = fc;
            let uc = zB > 0 ? -rB.declineSemitones * (tB / zB) : 0;
            uc += lc(`${Lc(Sc.text)}|${Ic}`) * rB.variationSemitones;
            const ec = Math.min(1, rB.variationSemitones);
            let yB = fc.glideSemitones,
              pc = 1;
            nc && (uc += rB.exclaimLiftSemitones, pc *= sc), Bc && tB === zB && (uc += rB.questionRiseSemitones * (Vc > 1 ? .5 + .5 * Ic / (Vc - 1) : 1), Ic === Vc - 1 && (yB = Math.abs(yB) + rB.questionRiseSemitones / 2)), cB && gB(Sc.text) && (uc += Pc * ec, pc *= Mc), Vc > 1 && 0 === Ic && (uc += Oc * ec, pc *= qB), bB.push({
              atMs: Zc + Ic * mB,
              semitones: uc,
              glideSemitones: yB,
              durationMs: Ic < Vc - 1 ? Math.min(fc.durationMs, mB * Tc) : fc.durationMs,
              level: pc
            })
          }
          Zc += Vc * mB + (ec.test(Sc.text) ? uc : yB.test(Sc.text) ? rB : 0)
        }
      }
      return {
        pieces: zB.map((cB => "space" === cB.kind ? cB : "icon" === cB.kind ? {
          kind: "icon",
          icon: cB.text,
          delayMs: cB.delayMs
        } : {
          kind: "word",
          text: cB.text,
          delayMs: cB.delayMs
        })),
        blips: bB
      }
    }
    var bB = nc(1051),
      Zc = nc(1117),
      Qc = nc(1572);

    function Cc(cB) {
      if ("string" === typeof cB) return cB;
      const Bc = Zc.e.get().getCurrentLanguageCode();
      return (0, bB.l)(Bc, cB.translationKey, (0, bB.j)(cB.params, Qc.d.shown))
    }

    function vB(cB) {
      const Bc = void 0 === cB.voice ? null : (0, Vc.m)(cB.voice),
        nc = Bc && (0, Vc.k)(Bc);
      return {
        plan: Uc(Cc(cB.line), nc),
        synth: nc
      }
    }

    function Dc(cB) {
      const Bc = [];
      let nc = [];
      for (const [Ic, rB] of cB.entries()) {
        var Vc;
        "space" === rB.kind && (" " !== rB.text || "icon" !== (null === (Vc = cB[Ic + 1]) || void 0 === Vc ? void 0 : Vc.kind)) ? (nc.length > 0 && Bc.push(nc), Bc.push([rB]), nc = []) : nc.push(rB)
      }
      return nc.length > 0 && Bc.push(nc), Bc
    }
  },
  7684: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => rB,
      f: () => Ic
    });
    let Vc = null;
    const Ic = function(cB) {
        const Bc = {
          cycle: cB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Vc = Bc, () => {
          Vc === Bc && (Vc = null)
        }
      },
      rB = () => {
        var cB;
        return null !== (cB = Vc) && void 0 !== cB && cB.canCycle() ? Vc.cycle : null
      }
  },
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  37049: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc) {
      const Vc = new Set,
        Ic = new ResizeObserver(nc),
        rB = () => {
          const Bc = new Set(document.querySelectorAll(cB));
          let rB = !1;
          for (const cB of Vc) Bc.has(cB) || (Ic.unobserve(cB), Vc.delete(cB), rB = !0);
          for (const cB of Bc) Vc.has(cB) || (Ic.observe(cB), uc.observe(cB, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Vc.add(cB));
          rB && nc()
        },
        uc = new MutationObserver((Bc => {
          Bc.some((cB => "attributes" === cB.type)) && nc(), Bc.some((Bc => function(cB, Bc, nc) {
            if ("childList" !== cB.type) return !1;
            for (const Vc of cB.addedNodes)
              if (Vc instanceof Element && (Vc.matches(Bc) || Vc.querySelector(Bc))) return !0;
            for (const Vc of cB.removedNodes)
              if (Vc instanceof Element)
                for (const cB of nc)
                  if (Vc.contains(cB)) return !0;
            return !1
          }(Bc, cB, Vc))) && rB()
        }));
      uc.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const sc of Bc) Ic.observe(sc);
      return window.addEventListener("resize", nc), rB(), nc(), () => {
        Ic.disconnect(), uc.disconnect(), window.removeEventListener("resize", nc)
      }
    }
    nc.d(Bc, {
      e: () => Vc
    })
  },
  7795: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      g: () => Mc
    });
    var Vc = nc(27),
      Ic = nc(1177),
      rB = nc(107);
    const uc = {
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
      autorunReady: {
        pattern: [8],
        priority: 2,
        minGapMs: 0
      },
      autorunLocked: {
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

    function sc() {
      return (0, rB.isMobile)() && "function" === typeof navigator.vibrate
    }
    const Mc = new class {
      constructor(cB) {
        this.deps = cB, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(cB, Bc) {
        var nc;
        if (!this.deps.enabled()) return;
        const Vc = uc[cB],
          Ic = null !== Bc && void 0 !== Bc ? Bc : Vc.pattern;
        if (null === Ic) return void console.warn("No vibration pattern for", cB);
        const rB = this.deps.now();
        rB - this.lastAnyAt < 40 && Vc.priority < this.playingPriority || rB - (null !== (nc = this.lastAt.get(cB)) && void 0 !== nc ? nc : -1 / 0) < Vc.minGapMs || rB < this.playingUntil && Vc.priority < this.playingPriority || (this.lastAt.set(cB, rB), this.lastAnyAt = rB, this.playingUntil = rB + Ic.reduce(((cB, Bc) => cB + Bc), 0), this.playingPriority = Vc.priority, this.deps.vibrate(Ic))
      }
    }({
      vibrate: cB => {
        navigator.vibrate([...cB])
      },
      now: () => performance.now(),
      enabled: () => sc() && Vc.d.get("isTouchScreen") && Vc.d.get("clientEscMenuOptions").vibration && !(0, Ic.g)()
    })
  },
  35184: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc,
      e: () => qB,
      f: () => sc
    });
    var Vc = nc(1927),
      Ic = nc(1934),
      rB = nc(1940),
      uc = nc(263);

    function sc(cB, Bc) {
      return (!(0, rB.c)() || 0 === cB && 0 === Bc) && (0, Ic.v)(Vc.f.Joystick, 0, cB, Bc, 0)
    }
    const Mc = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Pc(cB) {
      return {
        x: cB.left + cB.width / 2,
        y: cB.top + cB.height / 2,
        radius: Math.min(cB.width, cB.height) / 2
      }
    }
    const qB = new class {
      constructor(cB, Bc) {
        this.write = cB, this.keysHit = Bc, this.elements = new Map
      }
      set(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Bc ? this.elements.set(cB, {
          element: Bc,
          hidden: nc
        }) : this.elements.delete(cB), this.measureOne(cB)
      }
      measure() {
        for (const cB of this.elements.keys()) this.measureOne(cB)
      }
      hitZone(cB, Bc) {
        let nc = null,
          Vc = 1;
        for (const [Ic, {
            element: rB
          }] of this.elements) {
          const uc = this.shownRect(Ic);
          if (!uc) continue;
          const sc = Pc(uc),
            Mc = Math.max(0, uc.width / 2 - sc.radius),
            qB = Math.max(0, uc.height / 2 - sc.radius),
            Oc = Math.max(0, Math.abs(cB - sc.x) - Mc),
            Tc = Math.max(0, Math.abs(Bc - sc.y) - qB),
            fc = rB.firstElementChild;
          let mB = Math.hypot(Oc, Tc) / sc.radius;
          this.keysHit && (mB = Math.min(mB, Math.max(Math.abs(cB - sc.x) / (fc.offsetWidth / 2), Math.abs(Bc - sc.y) / (fc.offsetHeight / 2)))), mB < Vc && (nc = {
            code: Ic,
            element: rB,
            key: fc,
            ...sc
          }, Vc = mB)
        }
        return nc
      }
      measureOne(cB) {
        const Bc = this.shownRect(cB);
        if (!Bc) return void this.write(Vc.f.TouchZone, cB, 0, 0, 0);
        const nc = Pc(Bc);
        this.write(Vc.f.TouchZone, cB, nc.x, nc.y, (0, Ic.i)(nc.radius))
      }
      shownRect(cB) {
        const Bc = this.elements.get(cB),
          nc = Bc && !Bc.hidden ? Bc.element.getBoundingClientRect() : null;
        return !nc || nc.width <= 0 || nc.height <= 0 ? null : nc
      }
    }(Ic.v, !uc.l)
  },
  37024: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => mB
    });
    var Vc = nc(174),
      Ic = nc(36197);
    const rB = 1.2,
      uc = {
        poseRig: "golem",
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 2.2,
          height: 2.8
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        ku: .5,
        IMc: !1
      },
      sc = {
        physicsBodyDimensions: {
          width: .5,
          height: 2.5
        },
        hitBoxDimensions: {
          width: 1.8,
          height: 2.6
        },
        eyeHeight: 2.3,
        rideHeight: 2.3,
        ku: .5,
        IMc: !1
      },
      Mc = {
        physicsBodyDimensions: {
          width: Vc.e.EY,
          height: Vc.e.wY
        },
        hitBoxDimensions: {
          width: Vc.e.EY + .4,
          height: Vc.e.wY + .6
        },
        eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
        rideHeight: Vc.e.wY - .3,
        ku: .5,
        IMc: !1
      },
      Pc = {
        physicsBodyDimensions: {
          width: .5,
          height: .95
        },
        hitBoxDimensions: {
          width: 1.6,
          height: 1.1
        },
        eyeHeight: .9,
        rideHeight: .5,
        ku: .5,
        IMc: !1
      },
      qB = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.8
        },
        hitBoxDimensions: {
          width: 1.7,
          height: 1.9
        },
        eyeHeight: 1.3,
        rideHeight: 1.3,
        ku: .5,
        IMc: !1
      },
      Oc = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.1
        },
        eyeHeight: 1.9,
        rideHeight: 1,
        ku: .5,
        IMc: !1
      },
      Tc = {
        physicsBodyDimensions: {
          width: .5,
          height: 1.9
        },
        hitBoxDimensions: {
          width: 1.5,
          height: 2.4
        },
        eyeHeight: 2,
        rideHeight: 1.8,
        ku: .5,
        IMc: !1
      },
      fc = {
        Player: {
          defaultName: "Player",
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: Ic.e.ku,
          IMc: !0
        },
        Pig: {
          poseNameRise: {
            sitting: 1.4
          },
          physicsBodyDimensions: {
            width: .5,
            height: .8
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.2
          },
          eyeHeight: .8,
          rideHeight: .5,
          ku: .5,
          IMc: !1
        },
        Cow: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: 1.2,
          rideHeight: 1,
          ku: .5,
          IMc: !1
        },
        Sheep: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.1
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.3
          },
          eyeHeight: 1.2,
          rideHeight: .8,
          ku: .5,
          IMc: !1
        },
        Horse: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: .9,
          ku: .5,
          IMc: !1
        },
        Camel: {
          modelScale: rB,
          physicsBodyDimensions: {
            width: .6,
            height: 2.52
          },
          hitBoxDimensions: {
            width: 1.92,
            height: 2.76
          },
          eyeHeight: 2.52,
          rideHeight: 1.7999999999999998,
          ku: .5,
          IMc: !1
        },
        Slime: {
          physicsBodyDimensions: {
            width: .6,
            height: .8
          },
          hitBoxDimensions: {
            width: 1,
            height: .9
          },
          eyeHeight: .5,
          rideHeight: .5,
          ku: .5,
          IMc: !1
        },
        "Cave Golem": uc,
        "Draugr Zombie": {
          ...Mc,
          defaultPose: "zombie"
        },
        "Draugr Skeleton": Mc,
        "Frost Golem": uc,
        "Frost Zombie": {
          ...Mc,
          defaultPose: "zombie"
        },
        "Frost Skeleton": Mc,
        "Draugr Knight": {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: 2.8
          },
          eyeHeight: 1.9,
          rideHeight: 1.8,
          ku: .5,
          IMc: !1
        },
        Wolf: Pc,
        Bear: qB,
        Deer: {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.8,
          rideHeight: .8,
          ku: .5,
          IMc: !1
        },
        Stag: Oc,
        "Gold Watermelon Stag": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.9
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 2.1
          },
          eyeHeight: 1.9,
          rideHeight: 1,
          ku: .5,
          IMc: !1
        },
        Gorilla: Tc,
        Wildcat: {
          physicsBodyDimensions: {
            width: .5,
            height: .7
          },
          hitBoxDimensions: {
            width: 1.5,
            height: .7
          },
          eyeHeight: .55,
          rideHeight: .4,
          ku: .5,
          IMc: !1
        },
        "Draugr Huntress": Mc,
        "Magma Golem": uc,
        "Spirit Golem": uc,
        "Spirit Wolf": Pc,
        "Spirit Bear": qB,
        "Spirit Stag": Oc,
        "Spirit Gorilla": Tc,
        "Draugr Warper": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: .6,
            height: 3
          },
          eyeHeight: 2.4,
          rideHeight: 2.8,
          ku: .5,
          IMc: !1
        },
        "Frost Wraith": {
          poseRig: "wraith",
          physicsBodyDimensions: {
            width: .5,
            height: 2.7
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.8
          },
          eyeHeight: 2.3,
          rideHeight: 2.6,
          ku: .5,
          IMc: !1
        },
        "Draugr Reaver": {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.7
          },
          eyeHeight: 2.2,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        NPC: {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: .5,
          IMc: !1
        },
        67: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 3,
            height: 2.5
          },
          eyeHeight: 1.9,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        "Bobino Musculino": {
          physicsBodyDimensions: {
            width: Vc.e.EY,
            height: Vc.e.wY
          },
          hitBoxDimensions: {
            width: Vc.e.EY + .4,
            height: Vc.e.wY + .6
          },
          eyeHeight: Vc.e.wY * Vc.e.playerEyeToHeightRatio,
          rideHeight: Vc.e.wY - .1,
          ku: .5,
          IMc: !1
        },
        "Capitano Explovissimo": {
          physicsBodyDimensions: {
            width: .5,
            height: 1.8
          },
          hitBoxDimensions: {
            width: .5,
            height: 2.5
          },
          eyeHeight: 1.5,
          rideHeight: 2,
          ku: .5,
          IMc: !1
        },
        "Desert Fennec": {
          physicsBodyDimensions: {
            width: .4,
            height: .8
          },
          hitBoxDimensions: {
            width: .8,
            height: .8
          },
          eyeHeight: .65,
          rideHeight: .6,
          ku: .5,
          IMc: !1
        },
        "Armour Collector": {
          physicsBodyDimensions: {
            width: 1,
            height: 3.5
          },
          hitBoxDimensions: {
            width: 2,
            height: 3.7
          },
          eyeHeight: 3.1,
          rideHeight: 3.6,
          ku: .5,
          IMc: !1
        },
        "Furnace Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.5
          },
          eyeHeight: 2,
          rideHeight: 2.45,
          ku: .5,
          IMc: !1
        },
        "Lil Knight": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.4
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 2.55
          },
          eyeHeight: 2,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        "Glass Gremlin": {
          physicsBodyDimensions: {
            width: .6,
            height: 2.5
          },
          hitBoxDimensions: {
            width: 1,
            height: 2.6
          },
          eyeHeight: 2.2,
          rideHeight: 2.55,
          ku: .5,
          IMc: !1
        },
        "Glass Bro": {
          physicsBodyDimensions: {
            width: .8,
            height: 2.1
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.2
          },
          eyeHeight: 1.8,
          rideHeight: 2.1,
          ku: .5,
          IMc: !1
        },
        "Lord Vulcan": {
          physicsBodyDimensions: {
            width: 1.2,
            height: 5.4
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 5.4
          },
          eyeHeight: 4.1,
          rideHeight: 5.4,
          ku: .5,
          IMc: !1
        },
        Zombie: {
          ...Mc,
          defaultPose: "zombie"
        },
        Skeleton: Mc,
        Mummy: {
          ...Mc,
          defaultPose: "zombie"
        },
        Scorpion: {
          physicsBodyDimensions: {
            width: 1,
            height: .9
          },
          hitBoxDimensions: {
            width: 1.6,
            height: 1.4
          },
          eyeHeight: .6,
          rideHeight: .9,
          ku: .5,
          IMc: !1
        },
        Vulcanite: {
          physicsBodyDimensions: {
            width: .8,
            height: 2
          },
          hitBoxDimensions: {
            width: 1.3,
            height: 2.1
          },
          eyeHeight: 1.6,
          rideHeight: 2.1,
          ku: .5,
          IMc: !1
        },
        "Evil Tome": {
          physicsBodyDimensions: {
            width: .6,
            height: .9
          },
          hitBoxDimensions: {
            width: .9,
            height: .95
          },
          eyeHeight: .6,
          rideHeight: .95,
          ku: .5,
          IMc: !1
        },
        "Magma Toad": {
          physicsBodyDimensions: {
            width: 1,
            height: 1
          },
          hitBoxDimensions: {
            width: 1.5,
            height: 1.15
          },
          eyeHeight: 1,
          rideHeight: 1.1,
          ku: .5,
          IMc: !1
        },
        Stalker: {
          physicsBodyDimensions: {
            width: .5,
            height: 2.6
          },
          hitBoxDimensions: {
            width: .6,
            height: 2.9
          },
          eyeHeight: 2.4,
          rideHeight: 2.5,
          ku: .5,
          IMc: !1
        },
        Crone: {
          turnRate: 1.2,
          physicsBodyDimensions: {
            width: .6,
            height: 2.9
          },
          hitBoxDimensions: {
            width: .7,
            height: 3.2
          },
          eyeHeight: 2.7,
          rideHeight: 2.8,
          ku: .5,
          IMc: !1
        },
        "Iron Guardian": sc,
        "Gold Guardian": sc,
        "Diamond Guardian": sc,
        "Moonstone Guardian": sc,
        "Iron Goofy Golem": sc,
        "Gold Goofy Golem": sc,
        "Diamond Goofy Golem": sc,
        "Moonstone Goofy Golem": sc,
        "Tiki Terror": {
          poseRig: "tiki",
          physicsBodyDimensions: {
            width: 1,
            height: 4.3
          },
          hitBoxDimensions: {
            width: 2.4,
            height: 4.5
          },
          eyeHeight: 3.9,
          rideHeight: 4.3,
          ku: .5,
          IMc: !1
        }
      };

    function mB(cB) {
      return fc[cB]
    }
  },
  35651: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc
    });
    const Vc = {
      "skyblock:forged:astral-astral-astral": {
        name: "Heart of the Cosmos",
        lore: "Three shards of the night sky, forged as one. The stars answer whoever holds it.",
        damageMultiplier: 1.8,
        cooldownMultiplier: .8,
        ability: "starfall"
      },
      "skyblock:forged:astral-moonstone-sanguine": {
        name: "Eclipse Edge",
        lore: "Moonlight over starlight over blood: the sky goes dark wherever it is drawn.",
        damageMultiplier: 1.7,
        cooldownMultiplier: .81,
        ability: "eclipseField"
      },
      "skyblock:forged:astral-diamond-moonstone": {
        name: "Starcutter",
        lore: "A blade so sharp the Forge Mother swears it once cut a falling star in two.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:astral-sanguine-magmasteel": {
        name: "Triune Flame",
        lore: "Each of Lord Vulcan's three faces, bound into one burning edge.",
        damageMultiplier: 1.65,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-magmasteel-magmasteel": {
        name: "Vulcan's Bane",
        lore: "Forged in the heat of his own rift. It remembers the way down.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "magmaWave"
      },
      "skyblock:forged:magmasteel-astral-sanguine": {
        name: "Comet's Wake",
        lore: "It leaves a trail of fire through the air, like something falling from very far up.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "starfall"
      },
      "skyblock:forged:magmasteel-sanguine-astral": {
        name: "Vulcan's Ruin",
        lore: "The Forge Mother made only one, then sat down for a long while.",
        damageMultiplier: 1.6,
        cooldownMultiplier: .83,
        ability: "warcry"
      },
      "skyblock:forged:magmasteel-iron-stone": {
        name: "Forgehand",
        lore: "A smith's sword: plain to look at, and it hits like a hammer.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .9,
        ability: "quake"
      },
      "skyblock:forged:sanguine-sanguine-sanguine": {
        name: "Crimson Covenant",
        lore: "It drinks, and so do you.",
        damageMultiplier: 1.53,
        cooldownMultiplier: .83,
        ability: "bloodPact"
      },
      "skyblock:forged:sanguine-astral-moonstone": {
        name: "Nightbloom",
        lore: "A red flower that only opens after dark.",
        damageMultiplier: 1.56,
        cooldownMultiplier: .83,
        ability: "eclipseField"
      },
      "skyblock:forged:sanguine-iron-wood": {
        name: "Butcher's Oath",
        lore: "Heavy, honest and always hungry.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .95,
        ability: "bloodPact"
      },
      "skyblock:forged:moonstone-moonstone-moonstone": {
        name: "Lunar Requiem",
        lore: "Swung, it leaves a pale arc that lingers like a second moon.",
        damageMultiplier: 1.35,
        cooldownMultiplier: .85,
        ability: "moonDash"
      },
      "skyblock:forged:moonstone-astral-moonstone": {
        name: "Silver Tide",
        lore: "Pulled by the same moon that pulls the sea.",
        damageMultiplier: 1.4,
        cooldownMultiplier: .84,
        ability: "moonDash"
      },
      "skyblock:forged:diamond-diamond-diamond": {
        name: "Prism Fang",
        lore: "Every facet catches a different light, and every strike finds a different weakness.",
        damageMultiplier: 1.29,
        cooldownMultiplier: .88,
        ability: "gildedEdge",
        traits: {
          crit: 1.8
        }
      },
      "skyblock:forged:diamond-moonstone-gold": {
        name: "Jeweller's Pride",
        lore: "Too pretty to fight with. Fight with it anyway.",
        damageMultiplier: 1.24,
        cooldownMultiplier: .91,
        ability: "gildedEdge"
      },
      "skyblock:forged:gold-gold-gold": {
        name: "King's Ransom",
        lore: "Worth more than the treasure it guards.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .91,
        ability: "gildedEdge",
        traits: {
          coins: 2.5
        }
      },
      "skyblock:forged:gold-moonstone-gold": {
        name: "Midas Moon",
        lore: "Mobs it fells seem to rattle with coins.",
        damageMultiplier: 1.18,
        cooldownMultiplier: .92,
        ability: "gildedEdge",
        traits: {
          coins: 2,
          bossBane: .6
        }
      },
      "skyblock:forged:iron-iron-iron": {
        name: "Old Faithful",
        lore: "It has never let anyone down. It never will.",
        damageMultiplier: 1.15,
        cooldownMultiplier: .94,
        ability: "warcry"
      },
      "skyblock:forged:iron-wood-wood": {
        name: "Militia Blade",
        lore: "Handed out at the outpost gate when the rift first opened.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "warcry"
      },
      "skyblock:forged:stone-stone-stone": {
        name: "Quarryman's Cleaver",
        lore: "Chipped from one block of stone, handle and all.",
        damageMultiplier: 1.09,
        cooldownMultiplier: .97,
        ability: "quake"
      },
      "skyblock:forged:wood-wood-wood": {
        name: "Lorenzo's Lesson",
        lore: "Courage matters more than the blade. This one is mostly courage.",
        damageMultiplier: 1.06,
        cooldownMultiplier: .97,
        ability: "warcry"
      }
    }
  },
  36138: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => sc,
      g: () => uc
    });
    var Vc = nc(36130),
      Ic = nc(302),
      rB = nc(1534);

    function uc(cB) {
      if ("A4" in cB) return aB.createAnimationScript(cB);
      return new Pc(cB).createAnimationScript()
    }

    function sc(cB, Bc, nc, Ic) {
      const rB = cB.A4 <= 0 ? 1 : Bc + nc * Math.max(0, Ic) / cB.A4;
      return cB.B_ === Vc.h.LoopOnLastFrame ? rB % 1 : cB.B_ === Vc.h.NoLoop && rB >= 1 ? null : Math.min(1, rB)
    }
    class Mc {
      createAnimationScript(cB) {
        const {
          A4: Bc,
          loop: nc,
          n_: Vc
        } = cB;
        return {
          A4: Math.round(Bc),
          B_: this.createLoopMode(null !== nc && void 0 !== nc && nc),
          n_: this.createNodeSkeletonAnimationScript(null !== Vc && void 0 !== Vc ? Vc : null)
        }
      }
      createLoopMode(cB) {
        switch (cB) {
          case !1:
            return Vc.h.NoLoop;
          case !0:
            return Vc.h.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Vc.h.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${cB}`)
      }
      createNodeSkeletonAnimationScript(cB) {
        if (null === cB) return null;
        const Bc = {};
        for (const nc in cB) {
          const Vc = cB[nc];
          Bc[nc] = this.createNodeAnimationScript(Vc)
        }
        return Bc
      }
      createNodeAnimationScript(cB) {
        const {
          timeline: Bc
        } = cB, nc = Bc.filter((cB => Number.isFinite(cB.timeFraction)));
        return nc.sort(((cB, Bc) => cB.timeFraction - Bc.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(nc, "rotation", Tc),
          position: this.createTimelineFromKeyframes(nc, "position", mB)
        }
      }
      createTimelineFromKeyframes(cB, Bc, nc) {
        const Vc = [];
        for (const Mc of cB) {
          const cB = Mc[Bc];
          if (cB) {
            const Bc = this.createAnimationFrameWithoutPrecomputes(Mc.timeFraction, cB);
            qB(Bc) && Vc.push(Bc)
          }
        }
        const Ic = [];
        for (let Mc = 0; Mc < Vc.length; Mc++) {
          var rB, uc, sc;
          const cB = Vc[Mc],
            Bc = null !== (rB = Vc[Mc - 1]) && void 0 !== rB ? rB : cB,
            Pc = null !== (uc = Vc[Mc + 1]) && void 0 !== uc ? uc : cB,
            qB = null !== (sc = Vc[Mc + 2]) && void 0 !== sc ? sc : Pc;
          Ic.push({
            ...cB,
            ...nc(Bc.post, Bc.timeFraction, cB.post, cB.timeFraction, Pc.pre, Pc.timeFraction, qB.pre, qB.timeFraction)
          })
        }
        return Ic
      }
      createAnimationFrameWithoutPrecomputes(cB, Bc) {
        let nc, Vc, Ic = null;
        var rB;
        if ("object" === typeof Bc && "point" in Bc) Ic = null !== (rB = Bc.P_) && void 0 !== rB ? rB : null, nc = Bc.point, Vc = Bc.point;
        else if ("object" === typeof Bc && "pre" in Bc) {
          var uc;
          Ic = null !== (uc = Bc.P_) && void 0 !== uc ? uc : null, nc = Bc.pre, Vc = Bc.post
        } else nc = Bc, Vc = Bc;
        return {
          timeFraction: cB,
          P_: this.createLerpMode(Ic),
          pre: nc,
          post: Vc
        }
      }
      createLerpMode(cB) {
        return null === cB ? Vc.g.Linear : Mc.LERP_MODE_SCHEMA_MAPPING[cB]
      }
    }
    Mc.LERP_MODE_SCHEMA_MAPPING = {
      linear: Vc.g.Linear,
      "catmull-rom-spline": Vc.g.CatmullRomSpline
    };
    class Pc {
      constructor(cB) {
        this.animationSchema = cB
      }
      createAnimationScript() {
        const {
          animation_length: cB,
          loop: Bc,
          bones: nc
        } = this.animationSchema;
        return {
          A4: Math.round(1e3 * cB),
          B_: this.createLoopMode(null !== Bc && void 0 !== Bc && Bc),
          n_: this.createNodeSkeletonAnimationScript(null !== nc && void 0 !== nc ? nc : null)
        }
      }
      createLoopMode(cB) {
        switch (cB) {
          case !1:
            return Vc.h.NoLoop;
          case !0:
            return Vc.h.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Vc.h.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${cB}`)
      }
      createNodeSkeletonAnimationScript(cB) {
        if (null === cB) return null;
        const Bc = {};
        for (const nc in cB) {
          const Vc = cB[nc];
          Bc[nc] = this.createNodeAnimationScript(Vc)
        }
        return Bc
      }
      createNodeAnimationScript(cB) {
        const {
          rotation: Bc,
          position: nc
        } = cB;
        return {
          rotation: this.createAnimationTimeline(null !== Bc && void 0 !== Bc ? Bc : null, tB, Tc, !0),
          position: this.createAnimationTimeline(null !== nc && void 0 !== nc ? nc : null, yB, mB, !1)
        }
      }
      createAnimationTimeline(cB, Bc, nc, Vc) {
        if (null === cB) return [];
        if (Array.isArray(cB)) {
          cB = {
            "0.0": cB
          }
        }
        const Ic = Object.entries(cB).map((cB => {
          let [nc, Vc] = cB;
          const Ic = Number(nc) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Ic, Vc, Bc)
        })).filter(qB);
        Ic.sort(((cB, Bc) => cB.timeFraction - Bc.timeFraction)), Vc && function(cB) {
          for (let Bc = 1; Bc < cB.length; Bc++) {
            const nc = cB[Bc - 1].post,
              Vc = cB[Bc],
              Ic = zB(Vc.pre),
              rB = zB(Vc.post),
              uc = hc(nc, Vc.pre);
            hc(nc, Ic) < uc && (cB[Bc] = {
              ...Vc,
              pre: Ic,
              post: rB
            })
          }
        }(Ic);
        const rB = [];
        for (let Pc = 0; Pc < Ic.length; Pc++) {
          var uc, sc, Mc;
          const cB = Ic[Pc],
            Bc = null !== (uc = Ic[Pc - 1]) && void 0 !== uc ? uc : cB,
            Vc = null !== (sc = Ic[Pc + 1]) && void 0 !== sc ? sc : cB,
            qB = null !== (Mc = Ic[Pc + 2]) && void 0 !== Mc ? Mc : Vc;
          rB.push({
            ...cB,
            ...nc(Bc.post, Bc.timeFraction, cB.post, cB.timeFraction, Vc.pre, Vc.timeFraction, qB.pre, qB.timeFraction)
          })
        }
        return rB
      }
      createAnimationFrameWithoutPrecomputes(cB, Bc, nc) {
        let Vc, Ic, rB = null;
        if ("object" === typeof Bc && "post" in Bc) {
          var uc;
          rB = null !== (uc = Bc.lerp_mode) && void 0 !== uc ? uc : null, Ic = ec(Bc.post, nc), Vc = Bc.pre ? ec(Bc.pre, nc) : Ic
        } else {
          const cB = ec(Bc, nc);
          Ic = cB, Vc = cB
        }
        return {
          timeFraction: cB,
          P_: this.createLerpMode(rB),
          pre: Vc,
          post: Ic
        }
      }
      createLerpMode(cB) {
        return null === cB ? Vc.g.Linear : Pc.LERP_MODE_SCHEMA_MAPPING[cB]
      }
    }

    function qB(cB) {
      return Number.isFinite(cB.timeFraction) && Oc(cB.pre) && Oc(cB.post)
    }

    function Oc(cB) {
      return Number.isFinite(cB[0]) && Number.isFinite(cB[1]) && Number.isFinite(cB[2])
    }

    function Tc(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      const Mc = rB - Bc,
        Pc = rB - Vc,
        qB = sc - Vc,
        Oc = [null, null, null];
      for (let Tc = 0; Tc < Oc.length; Tc++) Oc[Tc] = fc(cB[Tc], nc[Tc], Ic[Tc], uc[Tc], Mc, qB);
      return {
        T_: Pc,
        f_: Oc
      }
    }

    function fc(cB, Bc, nc, Vc, rB, uc) {
      return {
        t5: Ic.b.computeShortestRotation(cB, nc) / rB,
        S_: Ic.b.computeShortestRotation(Bc, Vc) / uc,
        delta: Ic.b.computeShortestRotation(Bc, nc)
      }
    }

    function mB(cB, Bc, nc, Vc, Ic, rB, uc, sc) {
      const Mc = rB - Bc,
        Pc = rB - Vc,
        qB = sc - Vc,
        Oc = [null, null, null];
      for (let Tc = 0; Tc < Oc.length; Tc++) Oc[Tc] = {
        t5: (Ic[Tc] - cB[Tc]) / Mc,
        S_: (uc[Tc] - nc[Tc]) / qB,
        delta: Ic[Tc] - nc[Tc]
      };
      return {
        T_: Pc,
        f_: Oc
      }
    }

    function ec(cB, Bc) {
      return null === Bc ? cB : Bc(cB)
    }

    function tB(cB) {
      const [Bc, nc, Vc] = cB, uc = -(0, rB.m)(Bc), sc = -(0, rB.m)(nc), Mc = (0, rB.m)(Vc), Pc = Ic.b.quaternionFromEulerZYX(uc, sc, Mc);
      return Ic.b.eulerYXZFromQuaternion(Pc)
    }
    Pc.LERP_MODE_SCHEMA_MAPPING = {
      linear: Vc.g.Linear,
      catmullrom: Vc.g.CatmullRomSpline
    };
    const Sc = 1 / 16;

    function yB(cB) {
      return [-cB[0] * Sc, cB[1] * Sc, cB[2] * Sc]
    }

    function zB(cB) {
      const [Bc, nc, Vc] = cB;
      return [Bc >= 0 ? Math.PI - Bc : -Math.PI - Bc, pc(nc + Math.PI), pc(Vc + Math.PI)]
    }

    function pc(cB) {
      return Ic.b.mod(cB + Math.PI, 2 * Math.PI) - Math.PI
    }

    function hc(cB, Bc) {
      return Math.abs(Ic.b.computeShortestRotation(cB[0], Bc[0])) + Math.abs(Ic.b.computeShortestRotation(cB[1], Bc[1])) + Math.abs(Ic.b.computeShortestRotation(cB[2], Bc[2]))
    }
    const aB = new Mc
  },
  36204: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => uc
    });
    var Vc = nc(309),
      Ic = nc.n(Vc),
      rB = nc(1534);
    let uc;
    var sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec;
    const tB = [2, 0, 1, 8, "c", 186, "i", 7, 5, 126, 11, 255, "length", 55, "d", "a", "e", "undefined", void 0, "f", 219, 3, "b", 63, 6, "fromCodePoint", 12, "push", 150, 169, 142, 235, 91, 121, 101, 8191, 88, 13, 14, 84, !1, "h", 202, 9, 133, 56, 83, "g", 192, 53, 4, !0, 208, 183, 189, 106, 82, 166, 45, 89, 100, 102, 103, null, 97, 98, 99, 104, 105, 93, 94, 95, 96, 112, 113, 114, 115, 116, 117, 118, 37, 32, 27, 41, 176, 195, 1023, 59, 65536, 10, 55296, 56320, 122, 124, 128, 31, 15, 18, 80, 178, 129, 173, 38, 127, 36, 224, 54, 223, 58, 40, 240, "qs", 243, 161, 137, 225, 162, 155, 79, 69, 211, 77, 73, 212, 156, 144, 245, 33554432, 67108864, 110, "on"];

    function Sc(...cB) {
      return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
        for (bB(cB[tB[12]] = tB[2], cB[-tB[5]] = '}WNDOAnHJCrqpiG%~Xx@jos,]1[;9aI?Bhtd7{k/lE4>3&FP(_fec*5ZTb$Kyuv)<V^0+`YR|.mLgSM86QwU#z!2:"=', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[0]].length, cB[-tB[10]] = [], cB[tB[8]] = tB[1], cB[tB[9]] = tB[1], cB[tB[7]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[4]]; cB[tB[3]]++)
          if (cB[tB[6]] = cB[-tB[5]].indexOf(cB[tB[0]][cB[tB[3]]]), cB[tB[6]] !== -tB[2])
            if (cB[tB[7]] < tB[1]) cB[tB[7]] = cB[tB[6]];
            else {
              bB(cB[tB[7]] += cB[tB[6]] * tB[32], cB[tB[8]] |= cB[tB[7]] << cB[tB[9]], cB[tB[9]] += (cB[tB[7]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
              do {
                bB(cB[-tB[10]].push(cB[tB[8]] & tB[11]), cB[tB[8]] >>= tB[3], cB[tB[9]] -= tB[3])
              } while (cB[tB[9]] > tB[7]);
              cB[tB[7]] = -tB[2]
            } return cB[tB[7]] > -tB[2] && cB[-tB[10]].push((cB[tB[8]] | cB[tB[7]] << cB[tB[9]]) & tB[11]), yB(cB[-tB[10]])
      }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
    }

    function yB(cB) {
      return typeof qB !== tB[17] && qB ? (new qB).decode(new Oc(cB)) : typeof Tc !== tB[17] && Tc ? Tc.from(cB).toString("utf-8") : ec(cB)
    }

    function zB() {}
    bB(sc = {}, Mc = ["wYmJ:kSe7<b6/kIaOChe9R^x*i1D>$Y{xb/C__H1*i^SE(r", "j[f;?zmpo<5Hfi9E^vBI8f6]qKC;ZG/k=VRO,bW2Q%S%P$IXg,)Czg46n", '=TjZNm"X~bFZSyE?Dx>atKxN', "c&VJ+*mFo5r~(K4k[F3?Xk!lPTnnf_E?(j0*n!hP=vjn(;F@1m~MOm0bty5", "rFre&TTI@C0%dw+I", "Ejym_+W1n", ',VuZ9c$]75AuZ${?%5"J', "?pdS2U@H}%2W*O", "q)NBZ){PHjxnqkZdmV{Ovy)P9G", "/(&9W8ud)y}Ml~7{r[*ZA`DE<%@I}R$aV9MH+F]cO", "1[Z_NyMcFqMm0Gn{sy=at_8Hz<srJRy4e}", "uj~Cr(}", 'Cm)Ob8Szk$7o=QHkZ,n?e$hdpGHC~UW7v(`r<8Pi"VY.Wu/{kbW', "8KiHGZ9pQ).6QO4@8G[;g7,@VyJL#Rk][W", "&j).gUUi75vWb|/?", "&RGhzgcN0p)OJRxj", '(n"nxQ}', "qRXBRvg])%HDW", "xB1IMkReV)wSMNN>Fj}n", "Zt8CIPuW", "[ll.v$(x_bFcJD+1Fes9ali1bvZd_~OI|et;&{<!FxRF;Nctzj8coc}", "Uj2g{uiE8)nIbOhxP{OA)FUa7b]ZKGT9ZbR55YF$Px;(,Gt,BpPOX", "u(ucimha9Kn+0;Nx+n+*.v$]j@JiGu+]/XEepZ~cgJiI*y8;)t]5T)mcAr", "O>R.1gn7Obs8jUyIKCzf6b|mxySah~rj4{zm9l:vpGGjzyU;l(sh4w+p&qZ", "[lrBcLJc+CX`EuG", "*nCe_L6ce<F9LY1,K{L*T|J]$jQ_gUyIGB5OFT7xeC,XjRf9_e)n", "gV1eJQr!mj|Yyyq[tpHC,MFxniTB1|97^&pZuy$]w%", "y9Oa?R<$8TC|TyJ", "ob6n3Y4$Gx06Cy^xAaBnp(3xh)56dNa7?msghdS8Poq{V7p[xbgam`gF6y|SW", "znDA#&yF{$r+b]VIJdNLyty]%oG;J;j9+9daX7,@Wy@`}~i", "y9re;5*iaGsDz]q1:&%5N!kNfbf`tu2E3v+Z4dJFrX_.o7O]h+8c=.`HU@_", "|5dBk5`itpj`Gfzl1yWBrQ}7xbboW", "8tJhL(5F)x!SnQ19$KBn", "IbU*T)mxLJ;(t_(/o)Y?ZFQ8MJ", "Ndf;w&_WmKdg_in{`v>B/Po@Vp", "F?B_!c_Eao6qeYA1t+b5T|O!BxN{uyz;@[D", "d[vZn!^INb%w}D", "!Y&9oRMn[jv9fi.?z}", "%[e*XkZH_CZO$101~>MR/+|nbVc.d[H?u?OrG", "rp]Cy/n]db/gS`Yx>jROk+|pv%&`E{x9}p]IAm!F3Vo8,fxt", '6{XI`QW1n$"<%G.k', "vDB.8m~J&G?cC(gk;+vOLQ_igX}MS`I4!4rL3uIN", "/(cH1Pmxhy}L7K?4xBgS!`WQ^p+ydwflQtN|RZ@ECr", "Ny*m}#QHU@NLy;h{ByDAWQPENp!)>[d?[{OAu(8E_5r|}", "SV5gk{EP5it?$ud?Vev?;dvxki8TyD=dxb|n}8JcEXnjY1d7gK9r[UM$Y<t", "le=BB5nc}xmY7~W,^.:_[lDiC$nCu]V?^,1Lx", "2tUJO(TIH", "+4|5y/5I|V6q#%O>;+,I46vp$vco%f#lWovH@", 'bK2gxfB]x%"y,[^]OdiZtct7FT$^$u_;8vmaN7/W', "VtoZ<ymcmvgac;r@}^6C`*g$ziL0KY:tNbPnK*Remv9", "ZVyrKt^+Tjm.gU/xDCcm~", ".jEnSUV)u*B", "|(^Jvt}7TXdoK$[E4vW", "sl@a?cvI8%/goAwlBy4eYmHW", "f{9SUv,aN)B8ZK},@x#f&w0dOi!7P$XlABoZ2hRW", "t%!Hb#!p+@7", "n>Oa:USetyJjTD~t:j4eJ8OJGKI`EO", "Z(3?2UBxk@}51OyXVvbn9U6F3Km09Os9haD", "9VWB=z;a}bNwD[j9/{|_c$*i~xQ%i|O>m,xe+|}", ")94|iZ^xKXw_,G}ITn#m.(Qa>qOiGu5l)?sg~7q1*<L)TKoEct*mnm}", "Y,GgO7LbByJeD[rkmTh;wc7xFJCDz7R1=t~MKYOJ)JeKFi3k|nIZ6Rs7D", 'Wa~nx7EPB^"sF1xtKjja/P<n8*#Y$Q943+,MQvXE5<lc>[rjz&PO', "vKDa[lSbv*kcd[97I{scc)]cj5XL@wO?M1:.pm3lj5(_gKT4(noH5#Ei9o", "ipOSE+TFC$8%?G5;nd6./dMn1VLx,G,aaVSH^#@QX%", "tC[embrJP)._b]^{nRncQhmtj<ST_~U;StUBJvNYQ%", ".Gx|JZ9pQ)Y1K$,Eu(P5duGFyJ.OEO1dbRgA", "ojY90|,dj<HLTKE1p+3?DZo`n", "w.tec#rIP%p8:K,a,+};V/3N", "mn{mc|UdCZqw`O%", "Nbh;vF.EAiK^y%Ql4esOD*i*xyx$&Ov7_(]nN!!cD@gO9R0ID>NL[5&LO", "@n3rXZ#tA", "Vv$JAt=t.Gzm0Y[4MtvO!RwpJXDnqN", "A>k?/d5cX5{gZDtX~F}LK*XE))Jnk1z;)tWI,c+$)*7(W", 'TRo9=5_@:V}+k$,E{nvZu*xJ1v?`J/~/"jiHLkc+X%', "NamefSiP<x78W", "zKpZ?R<n7ij?PGW,Zeca5wVeXC_?jKmkd(aOz`jc=XjDW", "S9qaAt,*$Kn$o|(;3X.5oc5c*@Mm;GL[qR%Mq(Ed#@!0}", "ObfazcDiAiuGDfua]V(.(#F$mGpi=18;N^P.;ly!3J*`fkd{R}", "_R4e}tqW", "@kwjf(]X", "yq=5=<}X", "c1T,o!Bt", "pP>8S32F", "^ek?SQjN", "&^aGL1p/", "Rc&C!%Xa", "_25b", "rj&b,^Y", "_c)N", "B$aN~?P", "8US|FBHx", "jU:#6{Hx", "UU0|", "8Ul/<y4x", "!UJBHB(x", "9Gl/dm;x", "7s`/(", "8Ul/HB(x", "9GS|jA`x", "4g1Y7{8x", "A9177m4x", "?@c7=/8x", "^@{B/5(x", "#G/ohl$x", "Eg:#uA(x", "7Q{B~/iv", ".&&7q", "tUS|", "0Ulo[", "gsE7t", "#f]@S;zx", "c~KNq", "Eg@7RMFx", "7N@Yt{P", "Eg@7qmjx", "9G17dBsv", '#GZ7"Afx', "tQ{B~/P", "Px[:S`iD", "B7&MiFbY", "1ovUzcQY", "aOM_7`8", "%_Zp]U>~L", 'OB^"<K?KX', "!ofs[eJ`L", "n@0:~=rKyQi9gehqU@M4ekX", 'n@0:~=rK>(F%AU7xwE;8Wr"YyQi9gep', 'wK9?}FA%&PWv"h#2jKpih1b', "A~qugQE5:Kz!@H=y]N;v)EJ_fF}nBd[", "xT;h<lb:3VdRu=&Z!|2SJb)`6fw9A@a", "lxZ&B~oX?izs&7UCHEZ/&bWX~li", ",)fU9OX", "e@M4D?]a", "Sv$u", "4EF8", "vW>+", "}$RV", "Cw>+", "7dT6M", "DSjV", "*pP8", "J~ZY", "6U`/m5gx", "zQQfe19v", "v>D|z.Lx", "jH?B55Hx", "ZN)Y", "wgKN", "^s@7wl$x", "co)Y", "js)7yB`x", "sQKRsAFx", "=^(|A5(x", ']$?J"AP', "T`t4m)YH", "uY)0K4aL", "W|)]", "bN.0r=fL", "l^75Wad", "%V2B1=3L", "yN)0O{8L", "p}Q0}WGH", "#}`%*P}L", "x|.]jPz", "XKZ|uk4H", "=.T(r", "M@{B/5(x", "js)7Z/_x"]), bB(Pc = function(...cB) {
      bB(cB[tB[12]] = tB[1], cB[tB[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], cB[tB[2]] = tB[18], cB[-tB[13]] = []);
      try {
        bB(cB[tB[2]] = Object, cB[-tB[13]][tB[27]]("".__proto__.constructor.name))
      } catch (Mc) {}
      cB: for (cB[tB[14]] = tB[1]; cB[tB[14]] < cB[tB[15]][tB[12]]; cB[tB[14]]++) try {
        for (cB[tB[2]] = cB[tB[15]][cB[tB[14]]](), cB[tB[16]] = tB[1]; cB[tB[16]] < cB[-tB[13]][tB[12]]; cB[tB[16]]++)
          if (typeof cB[tB[2]][cB[-tB[13]][cB[tB[16]]]] === tB[17]) continue cB;
        return cB[tB[2]]
      } catch (Mc) {}
      return cB[tB[2]] || this
    }() || {}, qB = Pc.TextDecoder, Oc = Pc.Uint8Array, Tc = Pc.QV, fc = Pc.String || String, mB = Pc.Array || Array, ec = function(...cB) {
      return bB(cB[tB[12]] = tB[1], cB[tB[14]] = new mB(tB[94]), cB[tB[16]] = fc[tB[25]] || fc.fromCharCode, cB[tB[19]] = []),
        function(...Bc) {
          for (bB(Bc[tB[12]] = tB[2], Bc[tB[15]] = tB[18], Bc[tB[22]] = tB[18], Bc[tB[21]] = Bc[tB[1]][tB[12]], cB[tB[19]][tB[12]] = tB[1]), Bc[-tB[20]] = tB[1]; Bc[-tB[20]] < Bc[tB[21]];) bB(Bc[tB[22]] = Bc[tB[1]][Bc[-tB[20]]++], Bc[tB[22]] <= tB[103] ? Bc[tB[15]] = Bc[tB[22]] : Bc[tB[22]] <= tB[107] ? Bc[tB[15]] = (Bc[tB[22]] & tB[95]) << tB[24] | Bc[tB[1]][Bc[-tB[20]]++] & tB[23] : Bc[tB[22]] <= 239 ? Bc[tB[15]] = (Bc[tB[22]] & tB[96]) << tB[26] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[23]) << tB[24] | Bc[tB[1]][Bc[-tB[20]]++] & tB[23] : fc[tB[25]] ? Bc[tB[15]] = (Bc[tB[22]] & tB[7]) << tB[97] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[23]) << tB[26] | (Bc[tB[1]][Bc[-tB[20]]++] & tB[23]) << tB[24] | Bc[tB[1]][Bc[-tB[20]]++] & tB[23] : (Bc[tB[15]] = tB[23], Bc[-tB[20]] += tB[21]), cB[tB[19]][tB[27]](cB[tB[14]][Bc[tB[15]]] || (cB[tB[14]][Bc[tB[15]]] = cB[tB[16]](Bc[tB[15]]))));
          return cB[tB[19]].join("")
        }
    }()), Sc(78) in zB && function(...cB) {
      function Bc(...cB) {
        for (bB(cB[tB[12]] = tB[2], cB[-tB[29]] = '%XtiKPjABTQYOWr{&h+vULZ@w3a`:l~?uEq|ns_mz]CyN10}[H<,)So(eg!Md>J$97IR#/f;"bD56c2Vx=G^4p*.kF8', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[22]].length, cB[tB[39]] = [], cB[-tB[33]] = tB[1], cB[-tB[34]] = tB[1], cB[-tB[31]] = -tB[2]), cB[tB[28]] = tB[1]; cB[tB[28]] < cB[tB[4]]; cB[tB[28]]++)
          if (cB[-tB[30]] = cB[-tB[29]].indexOf(cB[tB[22]][cB[tB[28]]]), cB[-tB[30]] !== -tB[2])
            if (cB[-tB[31]] < tB[1]) cB[-tB[31]] = cB[-tB[30]];
            else {
              bB(cB[-tB[31]] += cB[-tB[30]] * tB[32], cB[-tB[33]] |= cB[-tB[31]] << cB[-tB[34]], cB[-tB[34]] += (cB[-tB[31]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
              do {
                bB(cB[tB[39]].push(cB[-tB[33]] & tB[11]), cB[-tB[33]] >>= tB[3], cB[-tB[34]] -= tB[3])
              } while (cB[-tB[34]] > tB[7]);
              cB[-tB[31]] = -tB[2]
            } return cB[-tB[31]] > -tB[2] && cB[tB[39]].push((cB[-tB[33]] | cB[-tB[31]] << cB[-tB[34]]) & tB[11]), yB(cB[tB[39]])
      }

      function nc(...cB) {
        return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Bc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
      }

      function Vc(...cB) {
        cB[tB[12]] = tB[2];
        const Bc = {};
        for (let nc of cB[tB[1]].replace(/[^w]/g, "").toLowerCase()) Bc[nc] = Bc[nc] + tB[2] || tB[2];
        return Bc
      }

      function Ic(...cB) {
        cB[tB[12]] = tB[0];
        const Bc = buildCharMap(cB[tB[1]]),
          nc = buildCharMap(cB[tB[2]]);
        for (let Vc in Bc)
          if (Bc[Vc] !== nc[Vc]) return tB[40];
        return Object.keys(Bc).length !== Object.keys(nc).length ? tB[40] : tB[51]
      }

      function rB(...cB) {
        cB[tB[12]] = tB[2];
        return uc(cB[tB[1]]) !== 1 / 0
      }

      function uc(...cB) {
        if (cB[tB[12]] = tB[2], !cB[tB[1]]) return -tB[2];
        const Bc = uc(cB[tB[1]].left),
          nc = uc(cB[tB[1]].right),
          Vc = Math.abs(Bc - nc);
        if (Bc === 1 / 0 || nc === 1 / 0 || Vc > tB[2]) return 1 / 0;
        return Math.max(Bc, nc) + tB[2]
      }
      cB[tB[12]] = tB[1], window[nc(tB[118]) + nc(tB[98]) + nc(81) + "_"] = {
        buildCharacterMap: Vc,
        isAnagrams: Ic,
        isBalanced: rB,
        getHeightBalanced: uc
      }
    }();
    const pc = Ic()[Sc(tB[46])](),
      hc = Ic()[Sc(tB[46])](),
      aB = Ic()[Sc(tB[46])](),
      lc = Ic()[Sc(tB[46])](),
      Yc = Ic()[Sc(tB[46])](),
      Lc = Ic()[Sc(tB[46])](),
      gB = Ic()[Sc(tB[46])](),
      Uc = (...cB) => {
        function Bc(...cB) {
          return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
            for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = 'Y/aHfIimbjN8*|K9MPOdB)=>7F._QG,TC4XD1Rq<~gtc:u3!y`x&?0;nU#es[AvJr6SV%E{^$l2w@k+p]oL5WhZ(}z"', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[22]].length, cB[tB[50]] = [], cB[tB[48]] = tB[1], cB[tB[49]] = tB[1], cB[tB[47]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[21]]; cB[tB[3]]++)
              if (cB[tB[43]] = cB[tB[2]].indexOf(cB[tB[22]][cB[tB[3]]]), cB[tB[43]] !== -tB[2])
                if (cB[tB[47]] < tB[1]) cB[tB[47]] = cB[tB[43]];
                else {
                  bB(cB[tB[47]] += cB[tB[43]] * tB[32], cB[tB[48]] |= cB[tB[47]] << cB[tB[49]], cB[tB[49]] += (cB[tB[47]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                  do {
                    bB(cB[tB[50]].push(cB[tB[48]] & tB[11]), cB[tB[48]] >>= tB[3], cB[tB[49]] -= tB[3])
                  } while (cB[tB[49]] > tB[7]);
                  cB[tB[47]] = -tB[2]
                } return cB[tB[47]] > -tB[2] && cB[tB[50]].push((cB[tB[48]] | cB[tB[47]] << cB[tB[49]]) & tB[11]), yB(cB[tB[50]])
          }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
        }
        cB[tB[12]] = tB[21], Bc(tB[39]) + "S" in zB && function(...cB) {
          cB[tB[12]] = tB[1];
          const Bc = require("big-integer");
          bB(cB[-tB[54]] = class {
            static randomPrime(...cB) {
              cB[tB[12]] = tB[2];
              const nc = Bc.one.shiftLeft(cB[tB[1]] - tB[2]),
                Vc = Bc.one.shiftLeft(cB[tB[1]]).prev();
              for (; tB[51];) {
                let cB = Bc.randBetween(nc, Vc);
                if (cB.isProbablePrime(256)) return cB
              }
            }
            static generate(...cB) {
              cB[tB[12]] = tB[2];
              const nc = Bc(65537);
              let Vc, Ic;
              cB[-tB[52]] = tB[18];
              do {
                bB(Vc = this.randomPrime(cB[tB[1]] / tB[0]), Ic = this.randomPrime(cB[tB[1]] / tB[0]), cB[-tB[52]] = Bc.lcm(Vc.prev(), Ic.prev()))
              } while (Bc.gcd(nc, cB[-tB[52]]).notEquals(tB[2]) || Vc.minus(Ic).abs().shiftRight(cB[tB[1]] / tB[0] - tB[60]).isZero());
              return {
                e: nc,
                n: Vc.multiply(Ic),
                d: nc.modInv(cB[-tB[52]])
              }
            }
            static encrypt(...cB) {
              return cB[tB[12]] = tB[21], Bc(cB[tB[1]]).modPow(cB[tB[0]], cB[tB[2]])
            }
            static decrypt(...cB) {
              return cB[tB[12]] = tB[21], Bc(cB[tB[1]]).modPow(cB[tB[2]], cB[tB[0]])
            }
            static encode(...cB) {
              cB[tB[12]] = tB[2];
              const nc = cB[tB[1]].split("").map((cB => cB.charCodeAt())).join("");
              return Bc(nc)
            }
            static decode(...cB) {
              cB[tB[12]] = tB[2];
              const Bc = cB[tB[1]].toString();
              cB[tB[53]] = "";
              for (let nc = tB[1]; nc < Bc.length; nc += tB[0]) {
                let Vc = Number(Bc.substr(nc, tB[0]));
                Vc <= 30 ? (cB[tB[53]] += String.fromCharCode(Number(Bc.substr(nc, tB[21]))), nc++) : cB[tB[53]] += String.fromCharCode(Vc)
              }
              return cB[tB[53]]
            }
          }, module.exports = cB[-tB[54]])
        }();
        const nc = Lc;
        return Ic()[Bc(85) + Bc(86)](nc, cB[tB[0]]), Ic()[Bc(87)](cB[tB[1]], nc, Ic()[Bc(tB[36])](nc, cB[tB[2]]))
      };

    function bB() {
      bB = function() {}
    }
    uc = (...cB) => {
      function Bc(...cB) {
        return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[tB[15]] = 'Pvx&>0:eYN|2H*!UFV8[`Sk6_qgc(<tJ7u$Ej^4WG"bsh9zwL%;@}Df#,QIZ~r=CKn+1lM?{aRoiB/mOA5.)pyXT3d]', cB[-tB[55]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[-tB[55]].length, cB[tB[50]] = [], cB[tB[56]] = tB[1], cB[tB[24]] = tB[1], cB[tB[58]] = -tB[2]), cB[-tB[57]] = tB[1]; cB[-tB[57]] < cB[tB[4]]; cB[-tB[57]]++)
            if (cB[tB[43]] = cB[tB[15]].indexOf(cB[-tB[55]][cB[-tB[57]]]), cB[tB[43]] !== -tB[2])
              if (cB[tB[58]] < tB[1]) cB[tB[58]] = cB[tB[43]];
              else {
                bB(cB[tB[58]] += cB[tB[43]] * tB[32], cB[tB[56]] |= cB[tB[58]] << cB[tB[24]], cB[tB[24]] += (cB[tB[58]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                do {
                  bB(cB[tB[50]].push(cB[tB[56]] & tB[11]), cB[tB[56]] >>= tB[3], cB[tB[24]] -= tB[3])
                } while (cB[tB[24]] > tB[7]);
                cB[tB[58]] = -tB[2]
              } return cB[tB[58]] > -tB[2] && cB[tB[50]].push((cB[tB[56]] | cB[tB[58]] << cB[tB[24]]) & tB[11]), yB(cB[tB[50]])
        }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
      }
      cB[tB[12]] = tB[3];
      const nc = cB[tB[1]][Bc(tB[59])][Bc(90) + Bc(tB[32]) + Bc(92)](cB[tB[2]]);
      cB[tB[3]] = cB[tB[1]][Bc(tB[59])][Bc(tB[69]) + Bc(tB[70]) + Bc(tB[71]) + Bc(tB[72])](nc);
      const Vc = cB[tB[3]] === tB[63] ? cB[tB[1]][Bc(tB[59])][Bc(tB[64]) + Bc(tB[65]) + Bc(tB[66]) + Bc(tB[60])](cB[tB[2]], Bc(tB[34]) + Bc(tB[61]) + Bc(tB[62]) + tB[16]) : cB[tB[3]][Bc(tB[34]) + Bc(tB[61]) + Bc(tB[62]) + tB[16]],
        uc = cB[tB[3]] === tB[63] ? cB[tB[1]][Bc(tB[59])][Bc(tB[64]) + Bc(tB[65]) + Bc(tB[66]) + Bc(tB[60])](cB[tB[2]], Bc(tB[67]) + Bc(tB[68]) + Bc(tB[55])) : cB[tB[3]][Bc(tB[67]) + Bc(tB[68]) + Bc(tB[55])];
      bB(Ic()[Bc(107)](pc, tB[1], tB[1], cB[tB[8]]), Ic().fu(pc, pc, Ic()[Bc(108)], cB[tB[21]].heading), Ic()[Bc(109)](gB, cB[tB[50]].Qu), gB[tB[2]] = tB[1]);
      const Pc = cB[tB[0]][Bc(tB[129]) + Bc(111)]();
      if (bB(cB[tB[3]] = cB[tB[1]][Bc(tB[59])][Bc(tB[69]) + Bc(tB[70]) + Bc(tB[71]) + Bc(tB[72])](nc), cB[-tB[113]] = cB[tB[3]] === tB[63] ? cB[tB[1]][Bc(tB[59])][Bc(tB[64]) + Bc(tB[65]) + Bc(tB[66]) + Bc(tB[60])](cB[tB[2]], Bc(tB[73]) + Bc(tB[74])) : cB[tB[3]][Bc(tB[73]) + Bc(tB[74])]), !Pc && Ic()[tB[111]](gB) && (cB[tB[3]] === tB[63] ? cB[tB[1]][Bc(tB[59])][Bc(tB[64]) + Bc(tB[65]) + Bc(tB[66]) + Bc(tB[60])](cB[tB[2]], Bc(tB[75]) + Bc(tB[76]) + Bc(tB[77]) + Bc(tB[78])) : cB[tB[3]][Bc(tB[75]) + Bc(tB[76]) + Bc(tB[77]) + Bc(tB[78])])) {
        function mB(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = 'XDaJSQG78+Vqpt_W<nu"~RfvKIw}]*M4:Oghsx^)@2m$H|dC5U(;oj/zlb[FEe!y>i%L#3NB?6rP=.A`9YT0k1,{&Zc', cB[-tB[79]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[-tB[79]].length, cB[tB[80]] = [], cB[tB[16]] = tB[1], cB[tB[24]] = tB[1], cB[tB[7]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[4]]; cB[tB[3]]++)
            if (cB[tB[32]] = cB[tB[2]].indexOf(cB[-tB[79]][cB[tB[3]]]), cB[tB[32]] !== -tB[2])
              if (cB[tB[7]] < tB[1]) cB[tB[7]] = cB[tB[32]];
              else {
                bB(cB[tB[7]] += cB[tB[32]] * tB[32], cB[tB[16]] |= cB[tB[7]] << cB[tB[24]], cB[tB[24]] += (cB[tB[7]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                do {
                  bB(cB[tB[80]].push(cB[tB[16]] & tB[11]), cB[tB[16]] >>= tB[3], cB[tB[24]] -= tB[3])
                } while (cB[tB[24]] > tB[7]);
                cB[tB[7]] = -tB[2]
              } return cB[tB[7]] > -tB[2] && cB[tB[80]].push((cB[tB[16]] | cB[tB[7]] << cB[tB[24]]) & tB[11]), yB(cB[tB[80]])
        }

        function ec(cB) {
          return typeof sc[cB] === tB[17] ? sc[cB] = mB(Mc[cB]) : sc[cB]
        }

        function Sc(...cB) {
          cB[tB[12]] = tB[1],
            function(...cB) {
              function Bc(...cB) {
                for (bB(cB[tB[12]] = tB[2], cB[tB[15]] = [], cB[-tB[30]] = tB[1], cB[-tB[84]] = cB[tB[1]].length, cB[-tB[85]] = tB[18], cB[tB[8]] = tB[18]); cB[-tB[30]] < cB[-tB[84]];) bB(cB[-tB[85]] = cB[tB[1]].charCodeAt(cB[-tB[30]]++), cB[-tB[85]] >= tB[90] && cB[-tB[85]] <= 56319 && cB[-tB[30]] < cB[-tB[84]] ? (cB[tB[8]] = cB[tB[1]].charCodeAt(cB[-tB[30]]++), (64512 & cB[tB[8]]) == tB[91] ? cB[tB[15]].push(((cB[-tB[85]] & tB[86]) << tB[89]) + (cB[tB[8]] & tB[86]) + tB[88]) : (cB[tB[15]].push(cB[-tB[85]]), cB[-tB[30]]--)) : cB[tB[15]].push(cB[-tB[85]]));
                return cB[tB[15]]
              }

              function nc(...cB) {
                if (cB[tB[12]] = tB[2], cB[tB[1]] >= tB[90] && cB[tB[1]] <= 57343) {
                  function Bc(...cB) {
                    for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = '8HYBtRXLEIprQZSO3Vh&={FT~_+Gyl`aM^Ak069d}]n7juJsb[mov|$5W*:?C%D/!(,zeK"icN2.;Uf#)qgP1<>4@xw', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[-tB[92]] = cB[tB[22]].length, cB[tB[50]] = [], cB[tB[8]] = tB[1], cB[tB[24]] = tB[1], cB[tB[93]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[-tB[92]]; cB[tB[3]]++)
                      if (cB[tB[6]] = cB[tB[2]].indexOf(cB[tB[22]][cB[tB[3]]]), cB[tB[6]] !== -tB[2])
                        if (cB[tB[93]] < tB[1]) cB[tB[93]] = cB[tB[6]];
                        else {
                          bB(cB[tB[93]] += cB[tB[6]] * tB[32], cB[tB[8]] |= cB[tB[93]] << cB[tB[24]], cB[tB[24]] += (cB[tB[93]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                          do {
                            bB(cB[tB[50]].push(cB[tB[8]] & tB[11]), cB[tB[8]] >>= tB[3], cB[tB[24]] -= tB[3])
                          } while (cB[tB[24]] > tB[7]);
                          cB[tB[93]] = -tB[2]
                        } return cB[tB[93]] > -tB[2] && cB[tB[50]].push((cB[tB[8]] | cB[tB[93]] << cB[tB[24]]) & tB[11]), yB(cB[tB[50]])
                  }

                  function nc(...cB) {
                    return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Bc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                  }
                  throw Error(nc(119) + nc(120) + nc(tB[33]) + cB[tB[1]].toString(16).toUpperCase() + (nc(tB[92]) + nc(123) + nc(tB[93]) + tB[16]))
                }
              }

              function Vc(...Bc) {
                return Bc[tB[12]] = tB[0], cB[tB[2]](Bc[tB[1]] >> Bc[tB[2]] & tB[23] | tB[94])
              }

              function Ic(...Bc) {
                return Bc[tB[12]] = tB[2], (4294967168 & Bc[tB[1]]) == tB[1] ? cB[tB[2]](Bc[tB[1]]) : (Bc[tB[15]] = "", (4294965248 & Bc[tB[1]]) == tB[1] ? Bc[tB[15]] = cB[tB[2]](Bc[tB[1]] >> tB[24] & tB[95] | tB[48]) : (4294901760 & Bc[tB[1]]) == tB[1] ? bB(nc(Bc[tB[1]]), Bc[tB[15]] = cB[tB[2]](Bc[tB[1]] >> tB[26] & tB[96] | tB[105]), Bc[tB[15]] += Vc(Bc[tB[1]], tB[24])) : (4292870144 & Bc[tB[1]]) == tB[1] && bB(Bc[tB[15]] = cB[tB[2]](Bc[tB[1]] >> tB[97] & tB[7] | tB[110]), Bc[tB[15]] += Vc(Bc[tB[1]], tB[26]), Bc[tB[15]] += Vc(Bc[tB[1]], tB[24])), Bc[tB[15]] += cB[tB[2]](Bc[tB[1]] & tB[23] | tB[94]), Bc[tB[15]])
              }

              function rB(...Bc) {
                if (Bc[tB[12]] = tB[1], cB[tB[31]] >= cB[tB[4]]) throw Error(ec(125));
                if (bB(Bc[tB[15]] = cB[tB[14]][cB[tB[31]]] & tB[11], cB[tB[31]]++), (Bc[tB[15]] & tB[48]) == tB[94]) return Bc[tB[15]] & tB[23];
                throw Error(ec(tB[9]))
              }

              function uc(...Bc) {
                if (Bc[tB[12]] = tB[1], bB(Bc[-tB[104]] = tB[18], Bc[tB[22]] = tB[18], Bc[tB[4]] = tB[18], Bc[tB[14]] = tB[18], Bc[tB[106]] = tB[18]), cB[tB[31]] > cB[tB[4]]) {
                  function Vc(...cB) {
                    for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = 'bIO7yP]oDSk25N,faw/g}R)=%Cq3*cpi?B"#Z.GYK+>^t({L@jleMzUHQ_6JXh4&[Wnx0ETr|mA;Fsd$v:u918<~!`V', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[22]].length, cB[tB[14]] = [], cB[-tB[102]] = tB[1], cB[tB[24]] = tB[1], cB[tB[47]] = -tB[2]), cB[tB[41]] = tB[1]; cB[tB[41]] < cB[tB[21]]; cB[tB[41]]++)
                      if (cB[tB[6]] = cB[tB[2]].indexOf(cB[tB[22]][cB[tB[41]]]), cB[tB[6]] !== -tB[2])
                        if (cB[tB[47]] < tB[1]) cB[tB[47]] = cB[tB[6]];
                        else {
                          bB(cB[tB[47]] += cB[tB[6]] * tB[32], cB[-tB[102]] |= cB[tB[47]] << cB[tB[24]], cB[tB[24]] += (cB[tB[47]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                          do {
                            bB(cB[tB[14]].push(cB[-tB[102]] & tB[11]), cB[-tB[102]] >>= tB[3], cB[tB[24]] -= tB[3])
                          } while (cB[tB[24]] > tB[7]);
                          cB[tB[47]] = -tB[2]
                        } return cB[tB[47]] > -tB[2] && cB[tB[14]].push((cB[-tB[102]] | cB[tB[47]] << cB[tB[24]]) & tB[11]), yB(cB[tB[14]])
                  }

                  function Ic(...cB) {
                    return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Vc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                  }
                  throw Error(Ic(tB[103]))
                }
                if (cB[tB[31]] == cB[tB[4]]) return tB[40];
                if (bB(Bc[-tB[104]] = cB[tB[14]][cB[tB[31]]] & tB[11], cB[tB[31]]++), (Bc[-tB[104]] & tB[94]) == tB[1]) return Bc[-tB[104]];
                if ((Bc[-tB[104]] & tB[105]) == tB[48]) {
                  if (bB(Bc[tB[22]] = rB(), Bc[tB[106]] = (Bc[-tB[104]] & tB[95]) << tB[24] | Bc[tB[22]]), Bc[tB[106]] >= tB[94]) return Bc[tB[106]];
                  {
                    function uc(...cB) {
                      for (bB(cB[tB[12]] = tB[2], cB[tB[15]] = 'G2MmwF`=vL3l[$<)7A8Jg(Dt5o]khU?*uIBajy>#~1e.6WYVxHK;C"+^ZP&zNd{f:}!/9|iOcbE,Qp@Xn_sq%40SRTr', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[-tB[109]] = cB[tB[0]].length, cB[tB[50]] = [], cB[tB[107]] = tB[1], cB[tB[19]] = tB[1], cB[tB[7]] = -tB[2]), cB[-tB[108]] = tB[1]; cB[-tB[108]] < cB[-tB[109]]; cB[-tB[108]]++)
                        if (cB[tB[6]] = cB[tB[15]].indexOf(cB[tB[0]][cB[-tB[108]]]), cB[tB[6]] !== -tB[2])
                          if (cB[tB[7]] < tB[1]) cB[tB[7]] = cB[tB[6]];
                          else {
                            bB(cB[tB[7]] += cB[tB[6]] * tB[32], cB[tB[107]] |= cB[tB[7]] << cB[tB[19]], cB[tB[19]] += (cB[tB[7]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                            do {
                              bB(cB[tB[50]].push(cB[tB[107]] & tB[11]), cB[tB[107]] >>= tB[3], cB[tB[19]] -= tB[3])
                            } while (cB[tB[19]] > tB[7]);
                            cB[tB[7]] = -tB[2]
                          } return cB[tB[7]] > -tB[2] && cB[tB[50]].push((cB[tB[107]] | cB[tB[7]] << cB[tB[19]]) & tB[11]), yB(cB[tB[50]])
                    }

                    function Pc(...cB) {
                      return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = uc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                    }
                    throw Error(Pc(tB[94]))
                  }
                }
                if ((Bc[-tB[104]] & tB[110]) == tB[105]) {
                  if (bB(Bc[tB[22]] = rB(), Bc[tB[4]] = rB(), Bc[tB[106]] = (Bc[-tB[104]] & tB[96]) << tB[26] | Bc[tB[22]] << tB[24] | Bc[tB[4]]), Bc[tB[106]] >= 2048) return nc(Bc[tB[106]]), Bc[tB[106]];
                  {
                    function qB(...cB) {
                      for (bB(cB[tB[12]] = tB[2], cB[tB[15]] = 'YM,zOfg&SIGNaBHJDx%)<F~^:X!"/e4.hcA}qZ*0T#iLU]8kK=V2nCy{p[rd|@?63wRs>71v(5bEl+u$9`P;oWmtQj_', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[50]] = cB[tB[22]].length, cB[tB[19]] = [], cB[tB[8]] = tB[1], cB[tB[41]] = tB[1], cB[tB[6]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[50]]; cB[tB[3]]++)
                        if (cB[tB[43]] = cB[tB[15]].indexOf(cB[tB[22]][cB[tB[3]]]), cB[tB[43]] !== -tB[2])
                          if (cB[tB[6]] < tB[1]) cB[tB[6]] = cB[tB[43]];
                          else {
                            bB(cB[tB[6]] += cB[tB[43]] * tB[32], cB[tB[8]] |= cB[tB[6]] << cB[tB[41]], cB[tB[41]] += (cB[tB[6]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                            do {
                              bB(cB[tB[19]].push(cB[tB[8]] & tB[11]), cB[tB[8]] >>= tB[3], cB[tB[41]] -= tB[3])
                            } while (cB[tB[41]] > tB[7]);
                            cB[tB[6]] = -tB[2]
                          } return cB[tB[6]] > -tB[2] && cB[tB[19]].push((cB[tB[8]] | cB[tB[6]] << cB[tB[41]]) & tB[11]), yB(cB[tB[19]])
                    }

                    function Oc(...cB) {
                      return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = qB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                    }
                    throw Error(Oc(tB[100]))
                  }
                }
                if ((248 & Bc[-tB[104]]) == tB[110] && (bB(Bc[tB[22]] = rB(), Bc[tB[4]] = rB(), Bc[tB[14]] = rB(), Bc[tB[106]] = (Bc[-tB[104]] & tB[7]) << tB[97] | Bc[tB[22]] << tB[26] | Bc[tB[4]] << tB[24] | Bc[tB[14]]), Bc[tB[106]] >= tB[88] && Bc[tB[106]] <= 1114111)) return Bc[tB[106]];
                throw Error(function(...cB) {
                  return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
                    for (bB(cB[tB[12]] = tB[2], cB[-tB[100]] = 'L<ucdk2[/N$E:^D!flqCB}QjXY+Ps1.)&,>;yvh4x9@ne_a=KmiAw5zHF*67%GWJ?pI]UTMbS`o#~V3(0"gZR|8trO{', cB[tB[0]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[0]].length, cB[tB[14]] = [], cB[tB[16]] = tB[1], cB[-tB[49]] = tB[1], cB[tB[101]] = -tB[2]), cB[tB[41]] = tB[1]; cB[tB[41]] < cB[tB[21]]; cB[tB[41]]++)
                      if (cB[tB[43]] = cB[-tB[100]].indexOf(cB[tB[0]][cB[tB[41]]]), cB[tB[43]] !== -tB[2])
                        if (cB[tB[101]] < tB[1]) cB[tB[101]] = cB[tB[43]];
                        else {
                          bB(cB[tB[101]] += cB[tB[43]] * tB[32], cB[tB[16]] |= cB[tB[101]] << cB[-tB[49]], cB[-tB[49]] += (cB[tB[101]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                          do {
                            bB(cB[tB[14]].push(cB[tB[16]] & tB[11]), cB[tB[16]] >>= tB[3], cB[-tB[49]] -= tB[3])
                          } while (cB[-tB[49]] > tB[7]);
                          cB[tB[101]] = -tB[2]
                        } return cB[tB[101]] > -tB[2] && cB[tB[14]].push((cB[tB[16]] | cB[tB[101]] << cB[-tB[49]]) & tB[11]), yB(cB[tB[14]])
                  }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
                }(130))
              }
              bB(cB[tB[12]] = tB[2], cB[tB[2]] = String.fromCharCode), bB(cB[tB[14]] = tB[18], cB[tB[4]] = tB[18], cB[tB[31]] = tB[18]), bB(cB[tB[1]].version = ec(131), cB[tB[1]].encode = function(...cB) {
                for (bB(cB[tB[12]] = tB[2], cB[-tB[98]] = Bc(cB[tB[1]]), cB[tB[22]] = cB[-tB[98]].length, cB[tB[21]] = -tB[2], cB[-tB[99]] = tB[18], cB[-tB[3]] = ""); ++cB[tB[21]] < cB[tB[22]];) bB(cB[-tB[99]] = cB[-tB[98]][cB[tB[21]]], cB[-tB[3]] += Ic(cB[-tB[99]]));
                return cB[-tB[3]]
              }, cB[tB[1]].decode = function(...nc) {
                for (bB(nc[tB[12]] = tB[2], cB[tB[14]] = Bc(nc[tB[1]]), cB[tB[4]] = cB[tB[14]].length, cB[tB[31]] = tB[1], nc[tB[15]] = [], nc[tB[22]] = tB[18]);
                  (nc[tB[22]] = uc()) !== tB[40];) nc[tB[15]].push(nc[tB[22]]);
                return function(...Bc) {
                  for (bB(Bc[tB[12]] = tB[2], Bc[tB[15]] = Bc[tB[1]].length, Bc[tB[87]] = -tB[2], Bc[tB[4]] = tB[18], Bc[tB[14]] = ""); ++Bc[tB[87]] < Bc[tB[15]];) Bc[tB[4]] = Bc[tB[1]][Bc[tB[87]]], Bc[tB[4]] > 65535 && bB(Bc[tB[4]] -= tB[88], Bc[tB[14]] += cB[tB[2]](Bc[tB[4]] >>> tB[89] & tB[86] | tB[90]), Bc[tB[4]] = tB[91] | Bc[tB[4]] & tB[86]), Bc[tB[14]] += cB[tB[2]](Bc[tB[4]]);
                  return Bc[tB[14]]
                }(nc[tB[15]])
              })
            }(typeof exports === ec(132) + function(...cB) {
              return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = function(...cB) {
                for (bB(cB[tB[12]] = tB[2], cB[tB[81]] = '&WlZKicAunQX}?qvh@b9"_1]zSsp>5!/VYT|~w+;8[BrJ7R{He2LF*PoE4mkxOCM.,DI)y%a0t:$=N`j6<g3fUG^#d(', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[tB[22]].length, cB[tB[14]] = [], cB[tB[8]] = tB[1], cB[tB[83]] = tB[1], cB[-tB[68]] = -tB[2]), cB[tB[3]] = tB[1]; cB[tB[3]] < cB[tB[4]]; cB[tB[3]]++)
                  if (cB[tB[82]] = cB[tB[81]].indexOf(cB[tB[22]][cB[tB[3]]]), cB[tB[82]] !== -tB[2])
                    if (cB[-tB[68]] < tB[1]) cB[-tB[68]] = cB[tB[82]];
                    else {
                      bB(cB[-tB[68]] += cB[tB[82]] * tB[32], cB[tB[8]] |= cB[-tB[68]] << cB[tB[83]], cB[tB[83]] += (cB[-tB[68]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                      do {
                        bB(cB[tB[14]].push(cB[tB[8]] & tB[11]), cB[tB[8]] >>= tB[3], cB[tB[83]] -= tB[3])
                      } while (cB[tB[83]] > tB[7]);
                      cB[-tB[68]] = -tB[2]
                    } return cB[-tB[68]] > -tB[2] && cB[tB[14]].push((cB[tB[8]] | cB[-tB[68]] << cB[tB[83]]) & tB[11]), yB(cB[tB[14]])
              }(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
            }(tB[44]) ? this.utf8 = {} : exports)
        }
        ec(tB[79]) in zB && Sc(), bB(Uc(hc, pc, gB), Uc(aB, gB, pc), Ic()[ec(134)](lc, gB, aB));
        const Lc = Ic()[ec(135)](gB),
          Zc = Ic()[ec(136)](pc, gB) / cB[tB[8]] / Lc,
          Qc = Math[ec(tB[114])](Zc, tB[1]) + tB[2];
        if (cB[tB[8]] * cB[tB[8]] < Ic()[tB[111]](aB)) {
          function Cc(...cB) {
            for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = 'W5HENTmCjl698B!d"}:$,AG7w#qpMvIQSZzyJ)~XgV@<;e1hit*ks2P|0Lo`3]+[f4^KRO%&D/xUu=_F{Ya?rb(.nc>', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[22]].length, cB[tB[112]] = [], cB[-tB[46]] = tB[1], cB[tB[71]] = tB[1], cB[tB[38]] = -tB[2]), cB[tB[41]] = tB[1]; cB[tB[41]] < cB[tB[21]]; cB[tB[41]]++)
              if (cB[tB[6]] = cB[tB[2]].indexOf(cB[tB[22]][cB[tB[41]]]), cB[tB[6]] !== -tB[2])
                if (cB[tB[38]] < tB[1]) cB[tB[38]] = cB[tB[6]];
                else {
                  bB(cB[tB[38]] += cB[tB[6]] * tB[32], cB[-tB[46]] |= cB[tB[38]] << cB[tB[71]], cB[tB[71]] += (cB[tB[38]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                  do {
                    bB(cB[tB[112]].push(cB[-tB[46]] & tB[11]), cB[-tB[46]] >>= tB[3], cB[tB[71]] -= tB[3])
                  } while (cB[tB[71]] > tB[7]);
                  cB[tB[38]] = -tB[2]
                } return cB[tB[38]] > -tB[2] && cB[tB[112]].push((cB[-tB[46]] | cB[tB[38]] << cB[tB[71]]) & tB[11]), yB(cB[tB[112]])
          }

          function vB(...cB) {
            return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Cc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }
          Ic()[vB(138)](pc, pc, aB, Qc)
        }
        bB(cB[-tB[113]] = (0, rB.v)(cB[-tB[113]], 1, Math[ec(tB[114])](tB[2], Math[ec(139)](tB[1], -Zc, tB[2] - Lc / cB[tB[8]]))), Ic()[ec(140)](pc, pc, lc))
      }
      const qB = Yc;
      if (bB(Ic()[Bc(141)](qB, pc, gB), qB[tB[2]] = tB[1], cB[-tB[120]] = Ic()[Bc(tB[30])](qB)), !Pc) {
        function Dc(...cB) {
          bB(cB[tB[12]] = tB[1], cB[-tB[119]] = function(...Bc) {
            return bB(Bc[tB[12]] = tB[2], Bc[tB[15]] = []), (Bc[tB[1]] === tB[2] || Bc[tB[1]] >= tB[50]) && cB[-tB[115]](Bc[tB[15]], [], Bc[tB[1]], tB[1]), Bc[tB[15]]
          }, cB[-tB[115]] = function(...Bc) {
            for (Bc[tB[12]] = tB[50], Bc[tB[15]] = Bc[tB[21]]; Bc[tB[15]] < Bc[tB[0]]; Bc[tB[15]]++) {
              if (Bc[tB[2]].length !== Bc[tB[15]]) return;
              for (Bc[tB[22]] = tB[1]; Bc[tB[22]] < Bc[tB[0]]; Bc[tB[22]]++) cB[tB[4]](Bc[tB[2]], [Bc[tB[15]], Bc[tB[22]]]) && (bB(Bc[tB[2]].push([Bc[tB[15]], Bc[tB[22]]]), cB[-tB[115]](Bc[tB[1]], Bc[tB[2]], Bc[tB[0]], Bc[tB[15]] + tB[2])), Bc[tB[2]].length === Bc[tB[0]] && Bc[tB[1]].push(cB[tB[116]](Bc[tB[2]])), Bc[tB[2]].pop())
            }
          }, cB[tB[116]] = function(...cB) {
            for (bB(cB[tB[12]] = tB[2], cB[tB[36]] = [], cB[tB[22]] = cB[tB[1]].length), cB[tB[4]] = tB[1]; cB[tB[4]] < cB[tB[22]]; cB[tB[4]]++)
              for (cB[tB[36]][cB[tB[4]]] = "", cB[-tB[117]] = tB[1]; cB[-tB[117]] < cB[tB[22]]; cB[-tB[117]]++) cB[tB[36]][cB[tB[4]]] += cB[tB[1]][cB[tB[4]]][tB[2]] === cB[-tB[117]] ? "Q" : ".";
            return cB[tB[36]]
          }, cB[tB[4]] = function(...cB) {
            for (bB(cB[tB[12]] = tB[0], cB[tB[0]] = cB[tB[1]].length), cB[tB[118]] = tB[1]; cB[tB[118]] < cB[tB[0]]; cB[tB[118]]++) {
              if (cB[tB[1]][cB[tB[118]]][tB[1]] === cB[tB[2]][tB[1]] || cB[tB[1]][cB[tB[118]]][tB[2]] === cB[tB[2]][tB[2]]) return tB[40];
              if (Math.abs((cB[tB[1]][cB[tB[118]]][tB[1]] - cB[tB[2]][tB[1]]) / (cB[tB[1]][cB[tB[118]]][tB[2]] - cB[tB[2]][tB[2]])) === tB[2]) return tB[40]
            }
            return tB[51]
          }, console.log(cB[-tB[119]]))
        }
        Bc(143) + "m" in zB && Dc(), cB[-tB[120]] *= cB[-tB[113]]
      }
      const Oc = cB[tB[24]][Bc(tB[125]) + Bc(145) + Bc(146)],
        Tc = Oc ? Math[Bc(147)](Oc, cB[-tB[120]]) : cB[-tB[120]];
      Ic()[Bc(148) + Bc(149)](qB, qB);
      const fc = cB[tB[7]] !== tB[63] && void 0 !== cB[tB[7]] ? cB[tB[7]] : cB[tB[24]][Bc(tB[28]) + Bc(151) + Bc(152) + Bc(153)];
      if (Tc > tB[1]) {
        function Nc(...cB) {
          for (bB(cB[tB[12]] = tB[2], cB[-tB[121]] = 'zHLsMAdX]|Bg/2+V>wlG8nTm^rNQ;%j(0v1bue3oaC!Yq5Kc}4h.Uyf&[:O6`RDWx~i?7,EP_<$9S{=pZIJ)#k*t@F"', cB[-tB[75]] = "" + (cB[tB[1]] || ""), cB[tB[4]] = cB[-tB[75]].length, cB[tB[122]] = [], cB[tB[16]] = tB[1], cB[tB[24]] = tB[1], cB[tB[72]] = -tB[2]), cB[-tB[38]] = tB[1]; cB[-tB[38]] < cB[tB[4]]; cB[-tB[38]]++)
            if (cB[tB[59]] = cB[-tB[121]].indexOf(cB[-tB[75]][cB[-tB[38]]]), cB[tB[59]] !== -tB[2])
              if (cB[tB[72]] < tB[1]) cB[tB[72]] = cB[tB[59]];
              else {
                bB(cB[tB[72]] += cB[tB[59]] * tB[32], cB[tB[16]] |= cB[tB[72]] << cB[tB[24]], cB[tB[24]] += (cB[tB[72]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                do {
                  bB(cB[tB[122]].push(cB[tB[16]] & tB[11]), cB[tB[16]] >>= tB[3], cB[tB[24]] -= tB[3])
                } while (cB[tB[24]] > tB[7]);
                cB[tB[72]] = -tB[2]
              } return cB[tB[72]] > -tB[2] && cB[tB[122]].push((cB[tB[16]] | cB[tB[72]] << cB[tB[24]]) & tB[11]), yB(cB[tB[122]])
        }

        function Ec(...cB) {
          return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = Nc(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
        }

        function oc(...cB) {
          cB[tB[12]] = tB[1]
        }
        Ec(154) + "r" in zB && oc();
        let Wc = cB[tB[0]][Ec(tB[117]) + Ec(tB[124])] * fc;
        if (!Pc) {
          function kB(...cB) {
            for (bB(cB[tB[12]] = tB[2], cB[tB[2]] = 'dekLC|:N_`5V1%{]=F~q"hRPx@A$7<469utT>^Us;SgXE*MzrcKDBI302Oiv}Ql?Go/nwYJ)bZ!,+py8Wam(Hf&#.[j', cB[tB[22]] = "" + (cB[tB[1]] || ""), cB[tB[21]] = cB[tB[22]].length, cB[tB[126]] = [], cB[tB[124]] = tB[1], cB[tB[125]] = tB[1], cB[tB[47]] = -tB[2]), cB[tB[41]] = tB[1]; cB[tB[41]] < cB[tB[21]]; cB[tB[41]]++)
              if (cB[tB[43]] = cB[tB[2]].indexOf(cB[tB[22]][cB[tB[41]]]), cB[tB[43]] !== -tB[2])
                if (cB[tB[47]] < tB[1]) cB[tB[47]] = cB[tB[43]];
                else {
                  bB(cB[tB[47]] += cB[tB[43]] * tB[32], cB[tB[124]] |= cB[tB[47]] << cB[tB[125]], cB[tB[125]] += (cB[tB[47]] & tB[35]) > tB[36] ? tB[37] : tB[38]);
                  do {
                    bB(cB[tB[126]].push(cB[tB[124]] & tB[11]), cB[tB[124]] >>= tB[3], cB[tB[125]] -= tB[3])
                  } while (cB[tB[125]] > tB[7]);
                  cB[tB[47]] = -tB[2]
                } return cB[tB[47]] > -tB[2] && cB[tB[126]].push((cB[tB[124]] | cB[tB[47]] << cB[tB[125]]) & tB[11]), yB(cB[tB[126]])
          }

          function Xc(...cB) {
            return cB[tB[12]] = tB[2], typeof sc[cB[tB[1]]] === tB[17] ? sc[cB[tB[1]]] = kB(Mc[cB[tB[1]]]) : sc[cB[tB[1]]]
          }
          Wc *= cB[tB[0]][Ec(157) + Xc(158)]
        }
        let wc = cB[tB[0]][Ec(159) + Ec(160) + "ss"] * Tc;
        if (Tc < .3) {
          function Hc(...cB) {
            function Bc(...cB) {
              return cB[tB[12]] = tB[2], cB[tB[1]][tB[2]] * tB[128] + (cB[tB[1]][tB[1]] < tB[1] ? tB[127] | cB[tB[1]][tB[1]] : cB[tB[1]][tB[1]])
            }

            function nc(...cB) {
              switch (cB[tB[12]] = tB[2], ((cB[tB[1]] & tB[127]) !== tB[1]) * tB[2] + (cB[tB[1]] < tB[1]) * tB[0]) {
                case tB[1]:
                  return [cB[tB[1]] % tB[127], Math.trunc(cB[tB[1]] / tB[128])];
                case tB[2]:
                  return [cB[tB[1]] % tB[127] - tB[127], Math.trunc(cB[tB[1]] / tB[128]) + tB[2]];
                case tB[0]:
                  return [((cB[tB[1]] + tB[127]) % tB[127] + tB[127]) % tB[127], Math.round(cB[tB[1]] / tB[128])];
                case tB[21]:
                  return [cB[tB[1]] % tB[127], Math.trunc(cB[tB[1]] / tB[128])]
              }
            }
            cB[tB[12]] = tB[1], bB(cB[tB[15]] = Bc([tB[0], tB[50]]), cB[tB[22]] = Bc([tB[2], tB[0]]), cB[tB[0]] = cB[tB[15]] + cB[tB[22]], cB[tB[14]] = cB[tB[0]] - cB[tB[22]], cB[tB[107]] = cB[tB[14]] * tB[0], cB[tB[8]] = cB[tB[107]] / tB[0], console.log(nc(cB[tB[0]])), console.log(nc(cB[tB[14]])), console.log(nc(cB[tB[107]])), console.log(nc(cB[tB[8]])))
          }
          Ec(tB[113]) in zB && Hc(), wc *= Tc
        }
        if (Wc > wc) {
          function Fc(...cB) {
            bB(cB[tB[12]] = tB[1], cB[tB[15]] = function(...cB) {
              for (bB(cB[tB[12]] = tB[2], cB[tB[15]] = cB[tB[1]].length, cB[tB[22]] = [], cB[tB[129]] = tB[1], cB[tB[50]] = tB[1], cB[tB[1]].sort(((cB, Bc) => cB - Bc))), cB[tB[81]] = tB[1]; cB[tB[81]] < cB[tB[15]]; cB[tB[81]]++)
                if (!(cB[tB[81]] > tB[1] && cB[tB[1]][cB[tB[81]]] === cB[tB[1]][cB[tB[81]] - tB[2]]))
                  for (bB(cB[tB[129]] = cB[tB[81]] + tB[2], cB[tB[50]] = cB[tB[15]] - tB[2]); cB[tB[129]] < cB[tB[50]];)
                    if (cB[tB[1]][cB[tB[81]]] + cB[tB[1]][cB[tB[129]]] + cB[tB[1]][cB[tB[50]]] < tB[1]) cB[tB[129]]++;
                    else if (cB[tB[1]][cB[tB[81]]] + cB[tB[1]][cB[tB[129]]] + cB[tB[1]][cB[tB[50]]] > tB[1]) cB[tB[50]]--;
              else {
                for (cB[tB[22]].push([cB[tB[1]][cB[tB[81]]], cB[tB[1]][cB[tB[129]]], cB[tB[1]][cB[tB[50]]]]); cB[tB[129]] < cB[tB[50]] && cB[tB[1]][cB[tB[129]]] === cB[tB[1]][cB[tB[129]] + tB[2]];) cB[tB[129]]++;
                for (; cB[tB[129]] < cB[tB[50]] && cB[tB[1]][cB[tB[50]]] === cB[tB[1]][cB[tB[50]] - tB[2]];) cB[tB[50]]--;
                bB(cB[tB[129]]++, cB[tB[50]]--)
              }
              return cB[tB[22]]
            }, console.log(cB[tB[15]]))
          }
          Ec(tB[116]) in zB && Fc(), Wc = wc
        }
        bB(Ic()[Ec(163)](qB, qB, Wc), cB[tB[50]][Ec(164) + Ec(165)](qB))
      }
      cB[tB[50]][Bc(tB[57]) + tB[130]] = cB[tB[0]][Bc(167) + Bc(tB[61]) + tB[130]] * (Pc ? Vc : uc)
    }
  },
  36197: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc,
      e: () => sc
    });
    var Vc = nc(36204),
      Ic = nc(1534);
    const rB = 2,
      uc = 1,
      sc = {
        ku: 1,
        fluidDrag: -1,
        fluidDragHorizontal: -1,
        fluidDragVertical: -1,
        gravityMultiplier: 2,
        width: .5,
        height: 1.8,
        canRun: !0,
        jumpMultiplier: 1,
        upwardImpulseOnUse: 0,
        canAutoStep: !0,
        canAutoStepByBlock: {},
        riderOffset: [0, 0, 0],
        pose: "standing",
        effect: null,
        standingFriction: 5,
        maxPushDistance: 0,
        movementForceMultiplier: 1,
        disableBaseMovement: !1,
        speedMultiplier: 1,
        landSpeedMultiplier: 1,
        fluidSpeedMultiplier: 1,
        airSpeedMultiplier: 1,
        speedMultiplierByBlock: {},
        disableFootstepSounds: !1,
        horizontalBounciness: 0,
        verticalBounciness: 0,
        minHorizontalSpeedToBounce: 0,
        minVerticalSpeedToBounce: 0,
        horizontalImpactCameraShake: null,
        verticalImpactCameraShake: null,
        steering: null,
        fixedHeading: null,
        fluidSkip: null,
        airborneMode: null,
        airborneMovement: null,
        airborneFallSpeedLimit: null
      };

    function Mc(cB, Bc, nc, sc, Mc, Pc, qB) {
      if (Mc.speed) return (0, Vc.e)(Bc, nc, sc, Mc, Pc, qB, cB), void(Mc.ticksToReachMaxIdleFriction = rB);
      const Oc = sc.isOnGround(),
        Tc = Bc.bloxd.getSyncedClientOptions(Bc.bloxd.getPlayerReader(nc)),
        fc = null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "groundFrictionScale") : Tc.groundFrictionScale,
        mB = null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "airFrictionScale") : Tc.airFrictionScale,
        ec = Oc ? fc : mB,
        tB = Math.max(uc, ec),
        Sc = Mc.ticksToReachMaxIdleFriction / rB,
        yB = (0, Ic.v)(tB, ec, Sc);
      Pc.friction = cB.standingFriction * ((null === Tc ? Bc.bloxd.getClientPredictedOption(nc, "airMomentumConservation") : Tc.airMomentumConservation) ? yB : ec), Mc.ticksToReachMaxIdleFriction > 0 && Mc.ticksToReachMaxIdleFriction--
    }
  },
  36130: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      d: () => rB,
      g: () => Vc,
      h: () => Ic
    });
    let Vc = function(cB) {
        return cB[cB.Linear = 0] = "Linear", cB[cB.CatmullRomSpline = 1] = "CatmullRomSpline", cB
      }({}),
      Ic = function(cB) {
        return cB[cB.NoLoop = 0] = "NoLoop", cB[cB.LoopOnLastFrame = 1] = "LoopOnLastFrame", cB[cB.HoldOnLastFrame = 2] = "HoldOnLastFrame", cB
      }({}),
      rB = function(cB) {
        return cB[cB.Movement = 0] = "Movement", cB[cB.Action = 1] = "Action", cB[cB.Emote = 2] = "Emote", cB[cB.Custom = 3] = "Custom", cB
      }({}),
      uc = function(cB) {
        return cB[cB.Start = 0] = "Start", cB[cB.Stop = 1] = "Stop", cB
      }({})
  },
  3893: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc,
      j: () => rB,
      k: () => Mc,
      m: () => uc
    });
    const Vc = ["sine", "triangle", "square", "sawtooth"],
      Ic = 55,
      rB = {
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

    function uc(cB) {
      return "string" !== typeof cB ? cB : Object.hasOwn(rB, cB) ? rB[cB] : null
    }

    function sc(cB, Bc, nc) {
      return Math.min(nc, Math.max(Bc, cB))
    }

    function Mc(cB) {
      const Bc = sc(cB.durationMs, 10, 500),
        nc = sc(cB.attackMs, 0, Bc),
        {
          intonation: Ic
        } = cB;
      return {
        waveform: Vc.includes(cB.waveform) ? cB.waveform : "sine",
        pitchHz: sc(cB.pitchHz, 20, 4e3),
        glideSemitones: sc(cB.glideSemitones, -24, 24),
        durationMs: Bc,
        attackMs: nc,
        releaseMs: sc(cB.releaseMs, 0, Bc - nc),
        lowpassHz: null === cB.lowpassHz ? null : sc(cB.lowpassHz, 20, 2e4),
        volume: sc(cB.volume, 0, 2),
        intonation: {
          variationSemitones: sc(Ic.variationSemitones, 0, 6),
          declineSemitones: sc(Ic.declineSemitones, 0, 12),
          questionRiseSemitones: sc(Ic.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: sc(Ic.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: sc(cB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);