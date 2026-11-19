export const id = 25;
export const ids = [25];
export const modules = {
  36066: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Fz,
      d: () => Zz,
      g: () => dz,
      h: () => pz
    });
    var Ez = bz(8982),
      nz = bz(36071),
      iz = bz(36080),
      lz = bz(8378),
      Mz = bz(1417),
      tz = bz(56),
      Hz = bz(79),
      Oz = bz(1089);

    function pz() {
      var zz;
      return (0, Mz.h)(nz.e, (0, nz.o)()), (0, Oz.jsx)(Oz.Fragment, {
        children: null === (zz = (0, nz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function dz(zz) {
      var uz;
      let {
        show: bz
      } = zz;
      (0, Mz.h)(nz.e, (0, nz.o)());
      const Hz = null === (uz = (0, nz.o)()) || void 0 === uz ? void 0 : uz.menu;
      return (0, tz.useEffect)((() => {
        var zz;
        bz || (null === Hz || void 0 === Hz || null === (zz = Hz.onClose) || void 0 === zz || zz.call(Hz), (0, iz.j)())
      }), [bz, Hz]), (0, tz.useEffect)((() => bz ? (0, lz.e)(iz.u, iz.d) : void 0), [bz]), (0, Oz.jsx)(Ez.d, {
        showing: bz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Hz || void 0 === Hz ? void 0 : Hz.content
      })
    }

    function Fz(zz) {
      let {
        placement: uz = "bottom"
      } = zz;
      return (0, Oz.jsx)("div", {
        id: `clientGameHud-${uz}`,
        style: {
          display: "contents"
        }
      })
    }

    function Zz(zz) {
      let {
        children: uz,
        placement: bz = "bottom"
      } = zz;
      const [Ez, nz] = (0, tz.useState)(null);
      return (0, tz.useEffect)((() => {
        nz(document.getElementById(`clientGameHud-${bz}`))
      }), [bz]), Ez ? (0, Hz.createPortal)(uz, Ez) : null
    }
  },
  4590: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Kz,
      f: () => wz
    });
    var Ez = bz(1038),
      nz = bz.n(Ez),
      iz = bz(56),
      lz = bz(1181),
      Mz = bz(4598),
      tz = bz(1846),
      Hz = bz(2313),
      Oz = bz(4601),
      pz = bz(1089);
    const dz = new WeakMap;
    let Fz = 0;

    function Zz(zz) {
      let uz = dz.get(zz);
      return void 0 === uz && (uz = Fz++, dz.set(zz, uz)), uz
    }

    function Rz(zz) {
      let {
        piece: uz
      } = zz;
      return "space" === uz.kind ? (0, pz.jsx)(pz.Fragment, {
        children: uz.text
      }) : (0, pz.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${uz.delayMs}ms`
        },
        children: (0, pz.jsx)(Mz.b, {
          text: "icon" === uz.kind ? `[[${uz.icon}]]` : uz.text
        })
      })
    }

    function Kz(zz) {
      let {
        display: uz
      } = zz;
      const {
        selectedLanguage: bz
      } = (0, lz.F)(), Ez = (0, iz.useMemo)((() => (0, Oz.e)((0, Oz.g)(uz).plan.pieces)), [uz, bz.code]);
      return (0, pz.jsxs)("div", {
        className: nz()("Dialogue", {
          DialogueAnimateIn: !1 !== uz.animateIn
        }),
        children: [uz.speakerName && (0, pz.jsx)(tz.b, {
          text: uz.speakerName,
          className: "DialogueSpeaker"
        }), (0, pz.jsx)("p", {
          className: "DialogueLine",
          children: Ez.map(((zz, uz) => 1 === zz.length && "space" === zz[0].kind ? zz[0].text : (0, pz.jsx)("span", {
            className: "DialogueGlue",
            children: zz.map(((zz, uz) => (0, pz.jsx)(Rz, {
              piece: zz
            }, uz)))
          }, uz)))
        })]
      })
    }
    const wz = (0, iz.memo)((function() {
      const zz = (0, Hz.g)("dialogue");
      return (0, pz.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: zz && (0, pz.jsx)(Kz, {
          display: zz
        }, Zz(zz))
      })
    }))
  },
  4598: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz
    });
    var Ez = bz(56),
      nz = bz(316),
      iz = bz(1856),
      lz = bz(1089);

    function Mz(zz) {
      let {
        text: uz
      } = zz;
      const bz = [];
      let Mz = "";
      return (0, nz.uc)(uz).forEach(((zz, uz) => {
        if ("string" === typeof zz || !(0, iz.d)(zz.icon)) return void(Mz += "string" === typeof zz ? zz : zz.icon);
        const nz = Math.max(0, Mz.trimEnd().search(/\S{1,12}$/));
        bz.push((0, lz.jsxs)(Ez.Fragment, {
          children: [Mz.slice(0, nz), (0, lz.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [Mz.slice(nz), (0, lz.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": zz.icon,
              children: (0, lz.jsx)(iz.c, {
                itemName: zz.icon,
                amount: 0
              })
            })]
          })]
        }, uz)), Mz = ""
      })), bz.push(Mz), (0, lz.jsx)(lz.Fragment, {
        children: bz
      })
    }
  },
  8982: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => iz
    });
    var Ez = bz(4298),
      nz = bz(4300);

    function iz(zz) {
      let {
        children: uz,
        showing: bz,
        globallyUniqueKey: iz,
        alwaysMountChildren: lz = !1,
        doGameplayStartStopOnShow: Mz = !0,
        keepsMovement: tz = !1
      } = zz;
      return (0, nz.e)(!0, bz, iz, tz), (0, Ez.d)(Mz, bz), bz || lz ? uz : null
    }
  },
  4601: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Vz,
      g: () => az
    });
    var Ez = bz(4605),
      nz = bz(316);
    const iz = 120,
      lz = 260,
      Mz = 1.15,
      tz = 1.2,
      Hz = 2,
      Oz = 1.08,
      pz = .8,
      dz = .95,
      Fz = 8,
      Zz = "[\"')\\]\u300d\u300f\uff09]*",
      Rz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Zz}$`),
      Kz = new RegExp(`[?\uff1f]${Zz}$`),
      wz = new RegExp(`[!\uff01]${Zz}$`),
      Xz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      fz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      sz = new RegExp(`[${fz}]`),
      rz = new RegExp(`[${fz}]|[^${fz}]+`, "g"),
      oz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Nz(zz) {
      let uz = 2166136261;
      for (let bz = 0; bz < zz.length; bz++) uz ^= zz.charCodeAt(bz), uz = Math.imul(uz, 16777619);
      return (uz >>> 0) / 4294967295 * 2 - 1
    }

    function vz(zz) {
      var uz;
      if (sz.test(zz)) return 1;
      const bz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Ez = bz.replace(/[^0-9]/g, "");
      if (Ez.length > 0 && !/\p{L}/u.test(bz)) return Math.min(Ez.length, 4);
      const nz = null !== (uz = bz.match(oz)) && void 0 !== uz ? uz : [];
      if (0 === nz.length) {
        var iz, lz;
        const zz = null !== (iz = null === (lz = bz.match(/\p{L}/gu)) || void 0 === lz ? void 0 : lz.length) && void 0 !== iz ? iz : 0;
        return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), Fz)
      }
      const Mz = bz.replace(/[^\p{L}]/gu, ""),
        tz = nz.length > 1 && "e" === nz.at(-1) && Mz.endsWith("e") && !Mz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
      return Math.min(nz.length - (tz ? 1 : 0), Fz)
    }

    function xz(zz) {
      return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Jz(zz) {
      const uz = zz.replace(/[^\p{L}]/gu, "");
      return uz.length >= 2 && uz === uz.toUpperCase() && uz !== uz.toLowerCase()
    }

    function Az(zz, uz) {
      var bz;
      const Fz = uz && (0, Ez.k)(uz),
        Zz = null !== (bz = null === Fz || void 0 === Fz ? void 0 : Fz.syllableMs) && void 0 !== bz ? bz : Ez.e,
        fz = function(zz) {
          const uz = [];
          for (const Ez of (0, nz.uc)(zz))
            if ("string" === typeof Ez)
              for (const zz of Ez.split(/(\s+)/)) {
                if ("" === zz) continue;
                if (/^\s+$/.test(zz)) {
                  uz.push({
                    kind: "space",
                    text: zz
                  });
                  continue
                }
                if (!sz.test(zz)) {
                  uz.push({
                    kind: "word",
                    text: zz,
                    delayMs: 0
                  });
                  continue
                }
                let Ez = !0;
                for (const nz of null !== (bz = zz.match(rz)) && void 0 !== bz ? bz : []) {
                  var bz;
                  const zz = uz.at(-1);
                  Ez || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || sz.test(nz) || /[\p{L}\p{N}]/u.test(nz) ? (Ez || uz.push({
                    kind: "space",
                    text: "\u200b"
                  }), uz.push({
                    kind: "word",
                    text: nz,
                    delayMs: 0
                  }), Ez = !1) : zz.text += nz
                }
              } else uz.push({
                kind: "icon",
                text: Ez.icon,
                delayMs: 0
              });
          return uz
        }(zz),
        oz = [];
      let Az = [];
      for (const Ez of fz) "space" !== Ez.kind && (Az.push(Ez), Rz.test(Ez.text) && (oz.push(Az), Az = []));
      oz.push(Az);
      const Tz = [];
      let Lz = 0;
      for (const Ez of oz) {
        var Pz, Gz;
        const zz = null !== (Pz = null === (Gz = Ez.at(-1)) || void 0 === Gz ? void 0 : Gz.text) && void 0 !== Pz ? Pz : "",
          uz = Kz.test(zz),
          bz = wz.test(zz),
          nz = Ez.map((zz => "word" === zz.kind ? vz(zz.text) : 1)),
          fz = nz.findLastIndex((zz => zz > 0));
        for (const [Kz, wz] of Ez.entries()) {
          const zz = "word" === wz.kind,
            Ez = nz[Kz];
          wz.delayMs = Lz;
          for (let nz = 0; Fz && nz < Ez; nz++) {
            const {
              intonation: iz
            } = Fz;
            let lz = fz > 0 ? -iz.declineSemitones * (Kz / fz) : 0;
            lz += Nz(`${xz(wz.text)}|${nz}`) * iz.variationSemitones;
            const Rz = Math.min(1, iz.variationSemitones);
            let Xz = Fz.glideSemitones,
              sz = 1;
            bz && (lz += iz.exclaimLiftSemitones, sz *= Mz), uz && Kz === fz && (lz += iz.questionRiseSemitones * (Ez > 1 ? .5 + .5 * nz / (Ez - 1) : 1), nz === Ez - 1 && (Xz = Math.abs(Xz) + iz.questionRiseSemitones / 2)), zz && Jz(wz.text) && (lz += Hz * Rz, sz *= tz), Ez > 1 && 0 === nz && (lz += pz * Rz, sz *= Oz), Tz.push({
              atMs: Lz + nz * Zz,
              semitones: lz,
              glideSemitones: Xz,
              durationMs: nz < Ez - 1 ? Math.min(Fz.durationMs, Zz * dz) : Fz.durationMs,
              level: sz
            })
          }
          Lz += Ez * Zz + (Rz.test(wz.text) ? lz : Xz.test(wz.text) ? iz : 0)
        }
      }
      return {
        pieces: fz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
          kind: "icon",
          icon: zz.text,
          delayMs: zz.delayMs
        } : {
          kind: "word",
          text: zz.text,
          delayMs: zz.delayMs
        })),
        blips: Tz
      }
    }
    var Tz = bz(1181),
      Lz = bz(1241),
      Pz = bz(1873);

    function Gz(zz) {
      if ("string" === typeof zz) return zz;
      const uz = Lz.h.get().getCurrentLanguageCode();
      return (0, Tz.s)(uz, zz.translationKey, (0, Tz.q)(zz.params, Pz.b.shown))
    }

    function az(zz) {
      const uz = void 0 === zz.voice ? null : (0, Ez.n)(zz.voice),
        bz = uz && (0, Ez.k)(uz);
      return {
        plan: Az(Gz(zz.line), bz),
        synth: bz
      }
    }

    function Vz(zz) {
      const uz = [];
      let bz = [];
      for (const [nz, iz] of zz.entries()) {
        var Ez;
        "space" === iz.kind && (" " !== iz.text || "icon" !== (null === (Ez = zz[nz + 1]) || void 0 === Ez ? void 0 : Ez.kind)) ? (bz.length > 0 && uz.push(bz), uz.push([iz]), bz = []) : bz.push(iz)
      }
      return bz.length > 0 && uz.push(bz), uz
    }
  },
  8378: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      e: () => nz
    });
    let Ez = null;
    const nz = function(zz) {
        const uz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Ez = uz, () => {
          Ez === uz && (Ez = null)
        }
      },
      iz = () => {
        var zz;
        return null !== (zz = Ez) && void 0 !== zz && zz.canCycle() ? Ez.cycle : null
      }
  },
  36080: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => iz,
      d: () => Rz,
      g: () => Kz,
      h: () => Mz,
      i: () => dz,
      j: () => wz,
      n: () => pz,
      q: () => fz,
      u: () => Zz,
      x: () => Xz
    });
    var Ez = bz(20),
      nz = bz(22);
    const iz = "clientGameInventoryButtonsChanged",
      lz = new Map;

    function Mz() {
      return [...lz.values()].sort(((zz, uz) => {
        var bz, Ez;
        return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
      }))
    }
    let tz = null;

    function Hz(zz) {
      tz = zz
    }
    let Oz = !1;

    function pz(zz) {
      Oz = !0;
      try {
        zz.onClick()
      } finally {
        Oz = !1
      }
      zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
    }

    function dz() {
      return Oz
    }

    function Fz() {
      return Mz().filter((zz => zz.panel && !zz.disabled))
    }

    function Zz(zz) {
      const uz = Fz(),
        bz = uz.findIndex((zz => zz.id === tz));
      return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
    }

    function Rz() {
      return null !== tz && Fz().length > 1
    }

    function Kz() {
      Hz(null)
    }

    function wz() {
      "inventory" !== Ez.e.get("openInGameMenuName") && Hz(null)
    }

    function Xz() {
      const zz = tz;
      return Hz(null), zz
    }

    function fz(zz) {
      return lz.set(zz.id, zz), nz.k.sK(iz, Mz(), !0), () => {
        lz.get(zz.id) === zz && (lz.delete(zz.id), nz.k.sK(iz, Mz()))
      }
    }
  },
  36071: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz,
      i: () => Kz,
      l: () => wz,
      n: () => dz,
      o: () => Hz,
      p: () => Rz,
      t: () => Fz,
      x: () => Oz
    });
    var Ez = bz(20),
      nz = bz(22),
      iz = bz(1269),
      lz = bz(36080);
    const Mz = "clientGameUiChanged";
    let tz = null;

    function Hz() {
      return tz
    }

    function Oz(zz, uz) {
      const bz = {
        content: zz,
        menu: uz
      };
      return tz = bz, nz.k.sK(Mz, tz, !0), () => {
        tz === bz && (tz = null, Zz = !1, Kz(), nz.k.sK(Mz, null))
      }
    }
    let pz = null;

    function dz() {
      return pz
    }

    function Fz(zz) {
      return pz = zz, () => {
        pz === zz && (pz = null)
      }
    }
    let Zz = !1;

    function Rz() {
      const zz = Ez.e.get("openInGameMenuName");
      "clientGame" !== zz && (Zz = "inventory" === zz), (0, lz.i)() || (0, lz.g)(), (0, iz.m)(iz.b), Ez.e.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Kz() {
      Xz(!1)
    }

    function wz() {
      Xz(Zz)
    }

    function Xz(zz) {
      "clientGame" === Ez.e.get("openInGameMenuName") && Ez.e.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, lz.g)(), Zz = !1
    }
  },
  37896: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      const Ez = new Set,
        nz = new ResizeObserver(bz),
        iz = () => {
          const uz = new Set(document.querySelectorAll(zz));
          let iz = !1;
          for (const zz of Ez) uz.has(zz) || (nz.unobserve(zz), Ez.delete(zz), iz = !0);
          for (const zz of uz) Ez.has(zz) || (nz.observe(zz), lz.observe(zz, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Ez.add(zz));
          iz && bz()
        },
        lz = new MutationObserver((uz => {
          uz.some((zz => "attributes" === zz.type)) && bz(), uz.some((uz => function(zz, uz, bz) {
            if ("childList" !== zz.type) return !1;
            for (const Ez of zz.addedNodes)
              if (Ez instanceof Element && (Ez.matches(uz) || Ez.querySelector(uz))) return !0;
            for (const Ez of zz.removedNodes)
              if (Ez instanceof Element)
                for (const zz of bz)
                  if (Ez.contains(zz)) return !0;
            return !1
          }(uz, zz, Ez))) && iz()
        }));
      lz.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const Mz of uz) nz.observe(Mz);
      return window.addEventListener("resize", bz), iz(), bz(), () => {
        nz.disconnect(), lz.disconnect(), window.removeEventListener("resize", bz)
      }
    }
    bz.d(uz, {
      e: () => Ez
    })
  },
  8554: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      e: () => tz
    });
    var Ez = bz(20),
      nz = bz(1296),
      iz = bz(96);
    const lz = {
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

    function Mz() {
      return (0, iz.isMobile)() && "function" === typeof navigator.vibrate
    }
    const tz = new class {
      constructor(zz) {
        this.deps = zz, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(zz, uz) {
        var bz;
        if (!this.deps.enabled()) return;
        const Ez = lz[zz],
          nz = null !== uz && void 0 !== uz ? uz : Ez.pattern;
        if (null === nz) return void console.warn("No vibration pattern for", zz);
        const iz = this.deps.now();
        iz - this.lastAnyAt < 40 && Ez.priority < this.playingPriority || iz - (null !== (bz = this.lastAt.get(zz)) && void 0 !== bz ? bz : -1 / 0) < Ez.minGapMs || iz < this.playingUntil && Ez.priority < this.playingPriority || (this.lastAt.set(zz, iz), this.lastAnyAt = iz, this.playingUntil = iz + nz.reduce(((zz, uz) => zz + uz), 0), this.playingPriority = Ez.priority, this.deps.vibrate(nz))
      }
    }({
      vibrate: zz => {
        navigator.vibrate([...zz])
      },
      now: () => performance.now(),
      enabled: () => Mz() && Ez.e.get("isTouchScreen") && Ez.e.get("clientEscMenuOptions").vibration && !(0, nz.d)()
    })
  },
  36588: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Mz,
      f: () => lz
    });
    var Ez = bz(36577),
      nz = bz(328),
      iz = bz(1840);

    function lz(zz) {
      if ("Ui" in zz) return oz.createAnimationScript(zz);
      return new Hz(zz).createAnimationScript()
    }

    function Mz(zz, uz, bz, nz) {
      const iz = zz.Ui <= 0 ? 1 : uz + bz * Math.max(0, nz) / zz.Ui;
      return zz.gi === Ez.m.LoopOnLastFrame ? iz % 1 : zz.gi === Ez.m.NoLoop && iz >= 1 ? null : Math.min(1, iz)
    }
    class tz {
      createAnimationScript(zz) {
        const {
          Ui: uz,
          loop: bz,
          Si: Ez
        } = zz;
        return {
          Ui: Math.round(uz),
          gi: this.createLoopMode(null !== bz && void 0 !== bz && bz),
          Si: this.createNodeSkeletonAnimationScript(null !== Ez && void 0 !== Ez ? Ez : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Ez.m.NoLoop;
          case !0:
            return Ez.m.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Ez.m.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const uz = {};
        for (const bz in zz) {
          const Ez = zz[bz];
          uz[bz] = this.createNodeAnimationScript(Ez)
        }
        return uz
      }
      createNodeAnimationScript(zz) {
        const {
          timeline: uz
        } = zz, bz = uz.filter((zz => Number.isFinite(zz.timeFraction)));
        return bz.sort(((zz, uz) => zz.timeFraction - uz.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(bz, "rotation", dz),
          position: this.createTimelineFromKeyframes(bz, "position", Zz)
        }
      }
      createTimelineFromKeyframes(zz, uz, bz) {
        const Ez = [];
        for (const tz of zz) {
          const zz = tz[uz];
          if (zz) {
            const uz = this.createAnimationFrameWithoutPrecomputes(tz.timeFraction, zz);
            Oz(uz) && Ez.push(uz)
          }
        }
        const nz = [];
        for (let tz = 0; tz < Ez.length; tz++) {
          var iz, lz, Mz;
          const zz = Ez[tz],
            uz = null !== (iz = Ez[tz - 1]) && void 0 !== iz ? iz : zz,
            Hz = null !== (lz = Ez[tz + 1]) && void 0 !== lz ? lz : zz,
            Oz = null !== (Mz = Ez[tz + 2]) && void 0 !== Mz ? Mz : Hz;
          nz.push({
            ...zz,
            ...bz(uz.post, uz.timeFraction, zz.post, zz.timeFraction, Hz.pre, Hz.timeFraction, Oz.pre, Oz.timeFraction)
          })
        }
        return nz
      }
      createAnimationFrameWithoutPrecomputes(zz, uz) {
        let bz, Ez, nz = null;
        var iz;
        if ("object" === typeof uz && "point" in uz) nz = null !== (iz = uz.Qi) && void 0 !== iz ? iz : null, bz = uz.point, Ez = uz.point;
        else if ("object" === typeof uz && "pre" in uz) {
          var lz;
          nz = null !== (lz = uz.Qi) && void 0 !== lz ? lz : null, bz = uz.pre, Ez = uz.post
        } else bz = uz, Ez = uz;
        return {
          timeFraction: zz,
          Qi: this.createLerpMode(nz),
          pre: bz,
          post: Ez
        }
      }
      createLerpMode(zz) {
        return null === zz ? Ez.j.Linear : tz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }
    tz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ez.j.Linear,
      "catmull-rom-spline": Ez.j.CatmullRomSpline
    };
    class Hz {
      constructor(zz) {
        this.animationSchema = zz
      }
      createAnimationScript() {
        const {
          animation_length: zz,
          loop: uz,
          bones: bz
        } = this.animationSchema;
        return {
          Ui: Math.round(1e3 * zz),
          gi: this.createLoopMode(null !== uz && void 0 !== uz && uz),
          Si: this.createNodeSkeletonAnimationScript(null !== bz && void 0 !== bz ? bz : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Ez.m.NoLoop;
          case !0:
            return Ez.m.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Ez.m.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const uz = {};
        for (const bz in zz) {
          const Ez = zz[bz];
          uz[bz] = this.createNodeAnimationScript(Ez)
        }
        return uz
      }
      createNodeAnimationScript(zz) {
        const {
          rotation: uz,
          position: bz
        } = zz;
        return {
          rotation: this.createAnimationTimeline(null !== uz && void 0 !== uz ? uz : null, Kz, dz, !0),
          position: this.createAnimationTimeline(null !== bz && void 0 !== bz ? bz : null, Xz, Zz, !1)
        }
      }
      createAnimationTimeline(zz, uz, bz, Ez) {
        if (null === zz) return [];
        if (Array.isArray(zz)) {
          zz = {
            "0.0": zz
          }
        }
        const nz = Object.entries(zz).map((zz => {
          let [bz, Ez] = zz;
          const nz = Number(bz) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(nz, Ez, uz)
        })).filter(Oz);
        nz.sort(((zz, uz) => zz.timeFraction - uz.timeFraction)), Ez && function(zz) {
          for (let uz = 1; uz < zz.length; uz++) {
            const bz = zz[uz - 1].post,
              Ez = zz[uz],
              nz = fz(Ez.pre),
              iz = fz(Ez.post),
              lz = rz(bz, Ez.pre);
            rz(bz, nz) < lz && (zz[uz] = {
              ...Ez,
              pre: nz,
              post: iz
            })
          }
        }(nz);
        const iz = [];
        for (let Hz = 0; Hz < nz.length; Hz++) {
          var lz, Mz, tz;
          const zz = nz[Hz],
            uz = null !== (lz = nz[Hz - 1]) && void 0 !== lz ? lz : zz,
            Ez = null !== (Mz = nz[Hz + 1]) && void 0 !== Mz ? Mz : zz,
            Oz = null !== (tz = nz[Hz + 2]) && void 0 !== tz ? tz : Ez;
          iz.push({
            ...zz,
            ...bz(uz.post, uz.timeFraction, zz.post, zz.timeFraction, Ez.pre, Ez.timeFraction, Oz.pre, Oz.timeFraction)
          })
        }
        return iz
      }
      createAnimationFrameWithoutPrecomputes(zz, uz, bz) {
        let Ez, nz, iz = null;
        if ("object" === typeof uz && "post" in uz) {
          var lz;
          iz = null !== (lz = uz.lerp_mode) && void 0 !== lz ? lz : null, nz = Rz(uz.post, bz), Ez = uz.pre ? Rz(uz.pre, bz) : nz
        } else {
          const zz = Rz(uz, bz);
          nz = zz, Ez = zz
        }
        return {
          timeFraction: zz,
          Qi: this.createLerpMode(iz),
          pre: Ez,
          post: nz
        }
      }
      createLerpMode(zz) {
        return null === zz ? Ez.j.Linear : Hz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }

    function Oz(zz) {
      return Number.isFinite(zz.timeFraction) && pz(zz.pre) && pz(zz.post)
    }

    function pz(zz) {
      return Number.isFinite(zz[0]) && Number.isFinite(zz[1]) && Number.isFinite(zz[2])
    }

    function dz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      const tz = iz - uz,
        Hz = iz - Ez,
        Oz = Mz - Ez,
        pz = [null, null, null];
      for (let dz = 0; dz < pz.length; dz++) pz[dz] = Fz(zz[dz], bz[dz], nz[dz], lz[dz], tz, Oz);
      return {
        Wi: Hz,
        ji: pz
      }
    }

    function Fz(zz, uz, bz, Ez, iz, lz) {
      return {
        Bi: nz.d.computeShortestRotation(zz, bz) / iz,
        Ci: nz.d.computeShortestRotation(uz, Ez) / lz,
        delta: nz.d.computeShortestRotation(uz, bz)
      }
    }

    function Zz(zz, uz, bz, Ez, nz, iz, lz, Mz) {
      const tz = iz - uz,
        Hz = iz - Ez,
        Oz = Mz - Ez,
        pz = [null, null, null];
      for (let dz = 0; dz < pz.length; dz++) pz[dz] = {
        Bi: (nz[dz] - zz[dz]) / tz,
        Ci: (lz[dz] - bz[dz]) / Oz,
        delta: nz[dz] - bz[dz]
      };
      return {
        Wi: Hz,
        ji: pz
      }
    }

    function Rz(zz, uz) {
      return null === uz ? zz : uz(zz)
    }

    function Kz(zz) {
      const [uz, bz, Ez] = zz, lz = -(0, iz.j)(uz), Mz = -(0, iz.j)(bz), tz = (0, iz.j)(Ez), Hz = nz.d.quaternionFromEulerZYX(lz, Mz, tz);
      return nz.d.eulerYXZFromQuaternion(Hz)
    }
    Hz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Ez.j.Linear,
      catmullrom: Ez.j.CatmullRomSpline
    };
    const wz = 1 / 16;

    function Xz(zz) {
      return [-zz[0] * wz, zz[1] * wz, zz[2] * wz]
    }

    function fz(zz) {
      const [uz, bz, Ez] = zz;
      return [uz >= 0 ? Math.PI - uz : -Math.PI - uz, sz(bz + Math.PI), sz(Ez + Math.PI)]
    }

    function sz(zz) {
      return nz.d.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
    }

    function rz(zz, uz) {
      return Math.abs(nz.d.computeShortestRotation(zz[0], uz[0])) + Math.abs(nz.d.computeShortestRotation(zz[1], uz[1])) + Math.abs(nz.d.computeShortestRotation(zz[2], uz[2]))
    }
    const oz = new tz
  },
  36577: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      g: () => iz,
      j: () => Ez,
      m: () => nz
    });
    let Ez = function(zz) {
        return zz[zz.Linear = 0] = "Linear", zz[zz.CatmullRomSpline = 1] = "CatmullRomSpline", zz
      }({}),
      nz = function(zz) {
        return zz[zz.NoLoop = 0] = "NoLoop", zz[zz.LoopOnLastFrame = 1] = "LoopOnLastFrame", zz[zz.HoldOnLastFrame = 2] = "HoldOnLastFrame", zz
      }({}),
      iz = function(zz) {
        return zz[zz.Movement = 0] = "Movement", zz[zz.Action = 1] = "Action", zz[zz.Emote = 2] = "Emote", zz[zz.Custom = 3] = "Custom", zz
      }({}),
      lz = function(zz) {
        return zz[zz.Start = 0] = "Start", zz[zz.Stop = 1] = "Stop", zz
      }({})
  },
  4605: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz,
      h: () => Ez,
      i: () => iz,
      k: () => tz,
      n: () => lz
    });
    const Ez = ["sine", "triangle", "square", "sawtooth"],
      nz = 55,
      iz = {
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

    function lz(zz) {
      return "string" !== typeof zz ? zz : Object.hasOwn(iz, zz) ? iz[zz] : null
    }

    function Mz(zz, uz, bz) {
      return Math.min(bz, Math.max(uz, zz))
    }

    function tz(zz) {
      const uz = Mz(zz.durationMs, 10, 500),
        bz = Mz(zz.attackMs, 0, uz),
        {
          intonation: nz
        } = zz;
      return {
        waveform: Ez.includes(zz.waveform) ? zz.waveform : "sine",
        pitchHz: Mz(zz.pitchHz, 20, 4e3),
        glideSemitones: Mz(zz.glideSemitones, -24, 24),
        durationMs: uz,
        attackMs: bz,
        releaseMs: Mz(zz.releaseMs, 0, uz - bz),
        lowpassHz: null === zz.lowpassHz ? null : Mz(zz.lowpassHz, 20, 2e4),
        volume: Mz(zz.volume, 0, 2),
        intonation: {
          variationSemitones: Mz(nz.variationSemitones, 0, 6),
          declineSemitones: Mz(nz.declineSemitones, 0, 12),
          questionRiseSemitones: Mz(nz.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: Mz(nz.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: Mz(zz.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);