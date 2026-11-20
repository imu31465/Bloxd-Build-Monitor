export const id = 25;
export const ids = [25];
export const modules = {
  36078: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => bz,
      e: () => wz,
      g: () => Nz,
      h: () => uz
    });
    var Fz = sz(8843),
      Wz = sz(36086),
      Xz = sz(36090),
      Oz = sz(8238),
      oz = sz(1416),
      vz = sz(65),
      Uz = sz(78),
      Kz = sz(1087);

    function uz() {
      var zz;
      return (0, oz.h)(Wz.e, (0, Wz.o)()), (0, Kz.jsx)(Kz.Fragment, {
        children: null === (zz = (0, Wz.o)()) || void 0 === zz ? void 0 : zz.content
      })
    }

    function Nz(zz) {
      var tz;
      let {
        show: sz
      } = zz;
      (0, oz.h)(Wz.e, (0, Wz.o)());
      const Uz = null === (tz = (0, Wz.o)()) || void 0 === tz ? void 0 : tz.menu;
      return (0, vz.useEffect)((() => {
        var zz;
        sz || (null === Uz || void 0 === Uz || null === (zz = Uz.onClose) || void 0 === zz || zz.call(Uz), (0, Xz.p)())
      }), [sz, Uz]), (0, vz.useEffect)((() => sz ? (0, Oz.f)(Xz.w, Xz.e) : void 0), [sz]), (0, Kz.jsx)(Fz.c, {
        showing: sz,
        globallyUniqueKey: "clientGameMenu",
        children: null === Uz || void 0 === Uz ? void 0 : Uz.content
      })
    }

    function bz(zz) {
      let {
        placement: tz = "bottom"
      } = zz;
      return (0, Kz.jsx)("div", {
        id: `clientGameHud-${tz}`,
        style: {
          display: "contents"
        }
      })
    }

    function wz(zz) {
      let {
        children: tz,
        placement: sz = "bottom"
      } = zz;
      const [Fz, Wz] = (0, vz.useState)(null);
      return (0, vz.useEffect)((() => {
        Wz(document.getElementById(`clientGameHud-${sz}`))
      }), [sz]), Fz ? (0, Uz.createPortal)(tz, Fz) : null
    }
  },
  4464: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => gz,
      e: () => Hz
    });
    var Fz = sz(1020),
      Wz = sz.n(Fz),
      Xz = sz(65),
      Oz = sz(1173),
      oz = sz(4467),
      vz = sz(1831),
      Uz = sz(2290),
      Kz = sz(4472),
      uz = sz(1087);
    const Nz = new WeakMap;
    let bz = 0;

    function wz(zz) {
      let tz = Nz.get(zz);
      return void 0 === tz && (tz = bz++, Nz.set(zz, tz)), tz
    }

    function Dz(zz) {
      let {
        piece: tz
      } = zz;
      return "space" === tz.kind ? (0, uz.jsx)(uz.Fragment, {
        children: tz.text
      }) : (0, uz.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${tz.delayMs}ms`
        },
        children: (0, uz.jsx)(oz.b, {
          text: "icon" === tz.kind ? `[[${tz.icon}]]` : tz.text
        })
      })
    }

    function gz(zz) {
      let {
        display: tz
      } = zz;
      const {
        selectedLanguage: sz
      } = (0, Oz.B)(), Fz = (0, Xz.useMemo)((() => (0, Kz.d)((0, Kz.f)(tz).plan.pieces)), [tz, sz.code]);
      return (0, uz.jsxs)("div", {
        className: Wz()("Dialogue", {
          DialogueAnimateIn: !1 !== tz.animateIn
        }),
        children: [tz.speakerName && (0, uz.jsx)(vz.c, {
          text: tz.speakerName,
          className: "DialogueSpeaker"
        }), (0, uz.jsx)("p", {
          className: "DialogueLine",
          children: Fz.map(((zz, tz) => 1 === zz.length && "space" === zz[0].kind ? zz[0].text : (0, uz.jsx)("span", {
            className: "DialogueGlue",
            children: zz.map(((zz, tz) => (0, uz.jsx)(Dz, {
              piece: zz
            }, tz)))
          }, tz)))
        })]
      })
    }
    const Hz = (0, Xz.memo)((function() {
      const zz = (0, Uz.e)("dialogue");
      return (0, uz.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: zz && (0, uz.jsx)(gz, {
          display: zz
        }, wz(zz))
      })
    }))
  },
  4467: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => oz
    });
    var Fz = sz(65),
      Wz = sz(308),
      Xz = sz(1845),
      Oz = sz(1087);

    function oz(zz) {
      let {
        text: tz
      } = zz;
      const sz = [];
      let oz = "";
      return (0, Wz.bc)(tz).forEach(((zz, tz) => {
        if ("string" === typeof zz || !(0, Xz.f)(zz.icon)) return void(oz += "string" === typeof zz ? zz : zz.icon);
        const Wz = Math.max(0, oz.trimEnd().search(/\S{1,12}$/));
        sz.push((0, Oz.jsxs)(Fz.Fragment, {
          children: [oz.slice(0, Wz), (0, Oz.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [oz.slice(Wz), (0, Oz.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": zz.icon,
              children: (0, Oz.jsx)(Xz.c, {
                itemName: zz.icon,
                amount: 0
              })
            })]
          })]
        }, tz)), oz = ""
      })), sz.push(oz), (0, Oz.jsx)(Oz.Fragment, {
        children: sz
      })
    }
  },
  8843: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz
    });
    var Fz = sz(4178),
      Wz = sz(4180);

    function Xz(zz) {
      let {
        children: tz,
        showing: sz,
        globallyUniqueKey: Xz,
        alwaysMountChildren: Oz = !1,
        doGameplayStartStopOnShow: oz = !0,
        keepsMovement: vz = !1
      } = zz;
      return (0, Wz.b)(!0, sz, Xz, vz), (0, Fz.e)(oz, sz), sz || Oz ? tz : null
    }
  },
  4472: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Az,
      f: () => jz
    });
    var Fz = sz(4476),
      Wz = sz(308);
    const Xz = 120,
      Oz = 260,
      oz = 1.15,
      vz = 1.2,
      Uz = 2,
      Kz = 1.08,
      uz = .8,
      Nz = .95,
      bz = 8,
      wz = "[\"')\\]\u300d\u300f\uff09]*",
      Dz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${wz}$`),
      gz = new RegExp(`[?\uff1f]${wz}$`),
      Hz = new RegExp(`[!\uff01]${wz}$`),
      Bz = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Pz = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      rz = new RegExp(`[${Pz}]`),
      Yz = new RegExp(`[${Pz}]|[^${Pz}]+`, "g"),
      xz = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function mz(zz) {
      let tz = 2166136261;
      for (let sz = 0; sz < zz.length; sz++) tz ^= zz.charCodeAt(sz), tz = Math.imul(tz, 16777619);
      return (tz >>> 0) / 4294967295 * 2 - 1
    }

    function Jz(zz) {
      var tz;
      if (rz.test(zz)) return 1;
      const sz = zz.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Fz = sz.replace(/[^0-9]/g, "");
      if (Fz.length > 0 && !/\p{L}/u.test(sz)) return Math.min(Fz.length, 4);
      const Wz = null !== (tz = sz.match(xz)) && void 0 !== tz ? tz : [];
      if (0 === Wz.length) {
        var Xz, Oz;
        const zz = null !== (Xz = null === (Oz = sz.match(/\p{L}/gu)) || void 0 === Oz ? void 0 : Oz.length) && void 0 !== Xz ? Xz : 0;
        return 0 === zz ? 0 : Math.min(Math.max(1, Math.round(zz / 2.5)), bz)
      }
      const oz = sz.replace(/[^\p{L}]/gu, ""),
        vz = Wz.length > 1 && "e" === Wz.at(-1) && oz.endsWith("e") && !oz.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(zz.replace(/[^\p{L}]/gu, ""));
      return Math.min(Wz.length - (vz ? 1 : 0), bz)
    }

    function Iz(zz) {
      return zz.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Cz(zz) {
      const tz = zz.replace(/[^\p{L}]/gu, "");
      return tz.length >= 2 && tz === tz.toUpperCase() && tz !== tz.toLowerCase()
    }

    function ez(zz, tz) {
      var sz;
      const bz = tz && (0, Fz.l)(tz),
        wz = null !== (sz = null === bz || void 0 === bz ? void 0 : bz.syllableMs) && void 0 !== sz ? sz : Fz.e,
        Pz = function(zz) {
          const tz = [];
          for (const Fz of (0, Wz.bc)(zz))
            if ("string" === typeof Fz)
              for (const zz of Fz.split(/(\s+)/)) {
                if ("" === zz) continue;
                if (/^\s+$/.test(zz)) {
                  tz.push({
                    kind: "space",
                    text: zz
                  });
                  continue
                }
                if (!rz.test(zz)) {
                  tz.push({
                    kind: "word",
                    text: zz,
                    delayMs: 0
                  });
                  continue
                }
                let Fz = !0;
                for (const Wz of null !== (sz = zz.match(Yz)) && void 0 !== sz ? sz : []) {
                  var sz;
                  const zz = tz.at(-1);
                  Fz || "word" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || rz.test(Wz) || /[\p{L}\p{N}]/u.test(Wz) ? (Fz || tz.push({
                    kind: "space",
                    text: "\u200b"
                  }), tz.push({
                    kind: "word",
                    text: Wz,
                    delayMs: 0
                  }), Fz = !1) : zz.text += Wz
                }
              } else tz.push({
                kind: "icon",
                text: Fz.icon,
                delayMs: 0
              });
          return tz
        }(zz),
        xz = [];
      let ez = [];
      for (const Fz of Pz) "space" !== Fz.kind && (ez.push(Fz), Dz.test(Fz.text) && (xz.push(ez), ez = []));
      xz.push(ez);
      const Zz = [];
      let Gz = 0;
      for (const Fz of xz) {
        var Tz, cz;
        const zz = null !== (Tz = null === (cz = Fz.at(-1)) || void 0 === cz ? void 0 : cz.text) && void 0 !== Tz ? Tz : "",
          tz = gz.test(zz),
          sz = Hz.test(zz),
          Wz = Fz.map((zz => "word" === zz.kind ? Jz(zz.text) : 1)),
          Pz = Wz.findLastIndex((zz => zz > 0));
        for (const [gz, Hz] of Fz.entries()) {
          const zz = "word" === Hz.kind,
            Fz = Wz[gz];
          Hz.delayMs = Gz;
          for (let Wz = 0; bz && Wz < Fz; Wz++) {
            const {
              intonation: Xz
            } = bz;
            let Oz = Pz > 0 ? -Xz.declineSemitones * (gz / Pz) : 0;
            Oz += mz(`${Iz(Hz.text)}|${Wz}`) * Xz.variationSemitones;
            const Dz = Math.min(1, Xz.variationSemitones);
            let Bz = bz.glideSemitones,
              rz = 1;
            sz && (Oz += Xz.exclaimLiftSemitones, rz *= oz), tz && gz === Pz && (Oz += Xz.questionRiseSemitones * (Fz > 1 ? .5 + .5 * Wz / (Fz - 1) : 1), Wz === Fz - 1 && (Bz = Math.abs(Bz) + Xz.questionRiseSemitones / 2)), zz && Cz(Hz.text) && (Oz += Uz * Dz, rz *= vz), Fz > 1 && 0 === Wz && (Oz += uz * Dz, rz *= Kz), Zz.push({
              atMs: Gz + Wz * wz,
              semitones: Oz,
              glideSemitones: Bz,
              durationMs: Wz < Fz - 1 ? Math.min(bz.durationMs, wz * Nz) : bz.durationMs,
              level: rz
            })
          }
          Gz += Fz * wz + (Dz.test(Hz.text) ? Oz : Bz.test(Hz.text) ? Xz : 0)
        }
      }
      return {
        pieces: Pz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
          kind: "icon",
          icon: zz.text,
          delayMs: zz.delayMs
        } : {
          kind: "word",
          text: zz.text,
          delayMs: zz.delayMs
        })),
        blips: Zz
      }
    }
    var Zz = sz(1173),
      Gz = sz(1237),
      Tz = sz(1862);

    function cz(zz) {
      if ("string" === typeof zz) return zz;
      const tz = Gz.g.get().getCurrentLanguageCode();
      return (0, Zz.s)(tz, zz.translationKey, (0, Zz.r)(zz.params, Tz.d.shown))
    }

    function jz(zz) {
      const tz = void 0 === zz.voice ? null : (0, Fz.n)(zz.voice),
        sz = tz && (0, Fz.l)(tz);
      return {
        plan: ez(cz(zz.line), sz),
        synth: sz
      }
    }

    function Az(zz) {
      const tz = [];
      let sz = [];
      for (const [Wz, Xz] of zz.entries()) {
        var Fz;
        "space" === Xz.kind && (" " !== Xz.text || "icon" !== (null === (Fz = zz[Wz + 1]) || void 0 === Fz ? void 0 : Fz.kind)) ? (sz.length > 0 && tz.push(sz), tz.push([Xz]), sz = []) : sz.push(Xz)
      }
      return sz.length > 0 && tz.push(sz), tz
    }
  },
  8238: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Xz,
      f: () => Wz
    });
    let Fz = null;
    const Wz = function(zz) {
        const tz = {
          cycle: zz,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Fz = tz, () => {
          Fz === tz && (Fz = null)
        }
      },
      Xz = () => {
        var zz;
        return null !== (zz = Fz) && void 0 !== zz && zz.canCycle() ? Fz.cycle : null
      }
  },
  36090: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      e: () => Dz,
      i: () => gz,
      k: () => oz,
      m: () => Nz,
      p: () => Hz,
      r: () => uz,
      t: () => Pz,
      w: () => wz,
      z: () => Bz
    });
    var Fz = sz(30),
      Wz = sz(34);
    const Xz = "clientGameInventoryButtonsChanged",
      Oz = new Map;

    function oz() {
      return [...Oz.values()].sort(((zz, tz) => {
        var sz, Fz;
        return (null !== (sz = zz.order) && void 0 !== sz ? sz : 0) - (null !== (Fz = tz.order) && void 0 !== Fz ? Fz : 0)
      }))
    }
    let vz = null;

    function Uz(zz) {
      vz = zz
    }
    let Kz = !1;

    function uz(zz) {
      Kz = !0;
      try {
        zz.onClick()
      } finally {
        Kz = !1
      }
      zz.panel && "clientGame" === Fz.b.get("openInGameMenuName") && Uz(zz.id)
    }

    function Nz() {
      return Kz
    }

    function bz() {
      return oz().filter((zz => zz.panel && !zz.disabled))
    }

    function wz(zz) {
      const tz = bz(),
        sz = tz.findIndex((zz => zz.id === vz));
      return !(sz < 0 || tz.length < 2) && (uz(tz[(sz + zz + tz.length) % tz.length]), !0)
    }

    function Dz() {
      return null !== vz && bz().length > 1
    }

    function gz() {
      Uz(null)
    }

    function Hz() {
      "inventory" !== Fz.b.get("openInGameMenuName") && Uz(null)
    }

    function Bz() {
      const zz = vz;
      return Uz(null), zz
    }

    function Pz(zz) {
      return Oz.set(zz.id, zz), Wz.o.Yg(Xz, oz(), !0), () => {
        Oz.get(zz.id) === zz && (Oz.delete(zz.id), Wz.o.Yg(Xz, oz()))
      }
    }
  },
  36086: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      h: () => gz,
      j: () => Hz,
      l: () => Nz,
      o: () => Uz,
      s: () => Dz,
      w: () => bz,
      x: () => Kz
    });
    var Fz = sz(30),
      Wz = sz(34),
      Xz = sz(1269),
      Oz = sz(36090);
    const oz = "clientGameUiChanged";
    let vz = null;

    function Uz() {
      return vz
    }

    function Kz(zz, tz) {
      const sz = {
        content: zz,
        menu: tz
      };
      return vz = sz, Wz.o.Yg(oz, vz, !0), () => {
        vz === sz && (vz = null, wz = !1, gz(), Wz.o.Yg(oz, null))
      }
    }
    let uz = null;

    function Nz() {
      return uz
    }

    function bz(zz) {
      return uz = zz, () => {
        uz === zz && (uz = null)
      }
    }
    let wz = !1;

    function Dz() {
      const zz = Fz.b.get("openInGameMenuName");
      "clientGame" !== zz && (wz = "inventory" === zz), (0, Oz.m)() || (0, Oz.i)(), (0, Xz.n)(Xz.c), Fz.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gz() {
      Bz(!1)
    }

    function Hz() {
      Bz(wz)
    }

    function Bz(zz) {
      "clientGame" === Fz.b.get("openInGameMenuName") && Fz.b.set({
        openInGameMenuName: zz ? "inventory" : null
      }), zz || (0, Oz.i)(), wz = !1
    }
  },
  37934: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      const Fz = new Set,
        Wz = new ResizeObserver(sz),
        Xz = () => {
          const tz = new Set(document.querySelectorAll(zz));
          let Xz = !1;
          for (const zz of Fz) tz.has(zz) || (Wz.unobserve(zz), Fz.delete(zz), Xz = !0);
          for (const zz of tz) Fz.has(zz) || (Wz.observe(zz), Oz.observe(zz, {
            attributes: !0,
            attributeFilter: ["class", "style"]
          }), Fz.add(zz));
          Xz && sz()
        },
        Oz = new MutationObserver((tz => {
          tz.some((zz => "attributes" === zz.type)) && sz(), tz.some((tz => function(zz, tz, sz) {
            if ("childList" !== zz.type) return !1;
            for (const Fz of zz.addedNodes)
              if (Fz instanceof Element && (Fz.matches(tz) || Fz.querySelector(tz))) return !0;
            for (const Fz of zz.removedNodes)
              if (Fz instanceof Element)
                for (const zz of sz)
                  if (Fz.contains(zz)) return !0;
            return !1
          }(tz, zz, Fz))) && Xz()
        }));
      Oz.observe(document.body, {
        childList: !0,
        subtree: !0
      });
      for (const oz of tz) Wz.observe(oz);
      return window.addEventListener("resize", sz), Xz(), sz(), () => {
        Wz.disconnect(), Oz.disconnect(), window.removeEventListener("resize", sz)
      }
    }
    sz.d(tz, {
      c: () => Fz
    })
  },
  8376: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      e: () => vz
    });
    var Fz = sz(30),
      Wz = sz(1293),
      Xz = sz(106);
    const Oz = {
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

    function oz() {
      return (0, Xz.isMobile)() && "function" === typeof navigator.vibrate
    }
    const vz = new class {
      constructor(zz) {
        this.deps = zz, this.lastAt = new Map, this.lastAnyAt = -1 / 0, this.playingUntil = -1 / 0, this.playingPriority = 0
      }
      play(zz, tz) {
        var sz;
        if (!this.deps.enabled()) return;
        const Fz = Oz[zz],
          Wz = null !== tz && void 0 !== tz ? tz : Fz.pattern;
        if (null === Wz) return void console.warn("No vibration pattern for", zz);
        const Xz = this.deps.now();
        Xz - this.lastAnyAt < 40 && Fz.priority < this.playingPriority || Xz - (null !== (sz = this.lastAt.get(zz)) && void 0 !== sz ? sz : -1 / 0) < Fz.minGapMs || Xz < this.playingUntil && Fz.priority < this.playingPriority || (this.lastAt.set(zz, Xz), this.lastAnyAt = Xz, this.playingUntil = Xz + Wz.reduce(((zz, tz) => zz + tz), 0), this.playingPriority = Fz.priority, this.deps.vibrate(Wz))
      }
    }({
      vibrate: zz => {
        navigator.vibrate([...zz])
      },
      now: () => performance.now(),
      enabled: () => oz() && Fz.b.get("isTouchScreen") && Fz.b.get("clientEscMenuOptions").vibration && !(0, Wz.e)()
    })
  },
  36547: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => oz,
      f: () => Oz
    });
    var Fz = sz(36531),
      Wz = sz(321),
      Xz = sz(1824);

    function Oz(zz) {
      if ("dX" in zz) return xz.createAnimationScript(zz);
      return new Uz(zz).createAnimationScript()
    }

    function oz(zz, tz, sz, Wz) {
      const Xz = zz.dX <= 0 ? 1 : tz + sz * Math.max(0, Wz) / zz.dX;
      return zz.hX === Fz.g.LoopOnLastFrame ? Xz % 1 : zz.hX === Fz.g.NoLoop && Xz >= 1 ? null : Math.min(1, Xz)
    }
    class vz {
      createAnimationScript(zz) {
        const {
          dX: tz,
          loop: sz,
          QX: Fz
        } = zz;
        return {
          dX: Math.round(tz),
          hX: this.createLoopMode(null !== sz && void 0 !== sz && sz),
          QX: this.createNodeSkeletonAnimationScript(null !== Fz && void 0 !== Fz ? Fz : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Fz.g.NoLoop;
          case !0:
            return Fz.g.LoopOnLastFrame;
          case "hold-on-last-frame":
            return Fz.g.HoldOnLastFrame
        }
        throw new Error(`Invalid loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const tz = {};
        for (const sz in zz) {
          const Fz = zz[sz];
          tz[sz] = this.createNodeAnimationScript(Fz)
        }
        return tz
      }
      createNodeAnimationScript(zz) {
        const {
          timeline: tz
        } = zz, sz = tz.filter((zz => Number.isFinite(zz.timeFraction)));
        return sz.sort(((zz, tz) => zz.timeFraction - tz.timeFraction)), {
          rotation: this.createTimelineFromKeyframes(sz, "rotation", Nz),
          position: this.createTimelineFromKeyframes(sz, "position", wz)
        }
      }
      createTimelineFromKeyframes(zz, tz, sz) {
        const Fz = [];
        for (const vz of zz) {
          const zz = vz[tz];
          if (zz) {
            const tz = this.createAnimationFrameWithoutPrecomputes(vz.timeFraction, zz);
            Kz(tz) && Fz.push(tz)
          }
        }
        const Wz = [];
        for (let vz = 0; vz < Fz.length; vz++) {
          var Xz, Oz, oz;
          const zz = Fz[vz],
            tz = null !== (Xz = Fz[vz - 1]) && void 0 !== Xz ? Xz : zz,
            Uz = null !== (Oz = Fz[vz + 1]) && void 0 !== Oz ? Oz : zz,
            Kz = null !== (oz = Fz[vz + 2]) && void 0 !== oz ? oz : Uz;
          Wz.push({
            ...zz,
            ...sz(tz.post, tz.timeFraction, zz.post, zz.timeFraction, Uz.pre, Uz.timeFraction, Kz.pre, Kz.timeFraction)
          })
        }
        return Wz
      }
      createAnimationFrameWithoutPrecomputes(zz, tz) {
        let sz, Fz, Wz = null;
        var Xz;
        if ("object" === typeof tz && "point" in tz) Wz = null !== (Xz = tz.LX) && void 0 !== Xz ? Xz : null, sz = tz.point, Fz = tz.point;
        else if ("object" === typeof tz && "pre" in tz) {
          var Oz;
          Wz = null !== (Oz = tz.LX) && void 0 !== Oz ? Oz : null, sz = tz.pre, Fz = tz.post
        } else sz = tz, Fz = tz;
        return {
          timeFraction: zz,
          LX: this.createLerpMode(Wz),
          pre: sz,
          post: Fz
        }
      }
      createLerpMode(zz) {
        return null === zz ? Fz.f.Linear : vz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }
    vz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Fz.f.Linear,
      "catmull-rom-spline": Fz.f.CatmullRomSpline
    };
    class Uz {
      constructor(zz) {
        this.animationSchema = zz
      }
      createAnimationScript() {
        const {
          animation_length: zz,
          loop: tz,
          bones: sz
        } = this.animationSchema;
        return {
          dX: Math.round(1e3 * zz),
          hX: this.createLoopMode(null !== tz && void 0 !== tz && tz),
          QX: this.createNodeSkeletonAnimationScript(null !== sz && void 0 !== sz ? sz : null)
        }
      }
      createLoopMode(zz) {
        switch (zz) {
          case !1:
            return Fz.g.NoLoop;
          case !0:
            return Fz.g.LoopOnLastFrame;
          case "hold_on_last_frame":
            return Fz.g.HoldOnLastFrame
        }
        throw new Error(`Invalid Blockbench loop mode schema: ${zz}`)
      }
      createNodeSkeletonAnimationScript(zz) {
        if (null === zz) return null;
        const tz = {};
        for (const sz in zz) {
          const Fz = zz[sz];
          tz[sz] = this.createNodeAnimationScript(Fz)
        }
        return tz
      }
      createNodeAnimationScript(zz) {
        const {
          rotation: tz,
          position: sz
        } = zz;
        return {
          rotation: this.createAnimationTimeline(null !== tz && void 0 !== tz ? tz : null, gz, Nz, !0),
          position: this.createAnimationTimeline(null !== sz && void 0 !== sz ? sz : null, Bz, wz, !1)
        }
      }
      createAnimationTimeline(zz, tz, sz, Fz) {
        if (null === zz) return [];
        if (Array.isArray(zz)) {
          zz = {
            "0.0": zz
          }
        }
        const Wz = Object.entries(zz).map((zz => {
          let [sz, Fz] = zz;
          const Wz = Number(sz) / this.animationSchema.animation_length;
          return this.createAnimationFrameWithoutPrecomputes(Wz, Fz, tz)
        })).filter(Kz);
        Wz.sort(((zz, tz) => zz.timeFraction - tz.timeFraction)), Fz && function(zz) {
          for (let tz = 1; tz < zz.length; tz++) {
            const sz = zz[tz - 1].post,
              Fz = zz[tz],
              Wz = Pz(Fz.pre),
              Xz = Pz(Fz.post),
              Oz = Yz(sz, Fz.pre);
            Yz(sz, Wz) < Oz && (zz[tz] = {
              ...Fz,
              pre: Wz,
              post: Xz
            })
          }
        }(Wz);
        const Xz = [];
        for (let Uz = 0; Uz < Wz.length; Uz++) {
          var Oz, oz, vz;
          const zz = Wz[Uz],
            tz = null !== (Oz = Wz[Uz - 1]) && void 0 !== Oz ? Oz : zz,
            Fz = null !== (oz = Wz[Uz + 1]) && void 0 !== oz ? oz : zz,
            Kz = null !== (vz = Wz[Uz + 2]) && void 0 !== vz ? vz : Fz;
          Xz.push({
            ...zz,
            ...sz(tz.post, tz.timeFraction, zz.post, zz.timeFraction, Fz.pre, Fz.timeFraction, Kz.pre, Kz.timeFraction)
          })
        }
        return Xz
      }
      createAnimationFrameWithoutPrecomputes(zz, tz, sz) {
        let Fz, Wz, Xz = null;
        if ("object" === typeof tz && "post" in tz) {
          var Oz;
          Xz = null !== (Oz = tz.lerp_mode) && void 0 !== Oz ? Oz : null, Wz = Dz(tz.post, sz), Fz = tz.pre ? Dz(tz.pre, sz) : Wz
        } else {
          const zz = Dz(tz, sz);
          Wz = zz, Fz = zz
        }
        return {
          timeFraction: zz,
          LX: this.createLerpMode(Xz),
          pre: Fz,
          post: Wz
        }
      }
      createLerpMode(zz) {
        return null === zz ? Fz.f.Linear : Uz.LERP_MODE_SCHEMA_MAPPING[zz]
      }
    }

    function Kz(zz) {
      return Number.isFinite(zz.timeFraction) && uz(zz.pre) && uz(zz.post)
    }

    function uz(zz) {
      return Number.isFinite(zz[0]) && Number.isFinite(zz[1]) && Number.isFinite(zz[2])
    }

    function Nz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      const vz = Xz - tz,
        Uz = Xz - Fz,
        Kz = oz - Fz,
        uz = [null, null, null];
      for (let Nz = 0; Nz < uz.length; Nz++) uz[Nz] = bz(zz[Nz], sz[Nz], Wz[Nz], Oz[Nz], vz, Kz);
      return {
        lX: Uz,
        aX: uz
      }
    }

    function bz(zz, tz, sz, Fz, Xz, Oz) {
      return {
        SX: Wz.c.computeShortestRotation(zz, sz) / Xz,
        VX: Wz.c.computeShortestRotation(tz, Fz) / Oz,
        delta: Wz.c.computeShortestRotation(tz, sz)
      }
    }

    function wz(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
      const vz = Xz - tz,
        Uz = Xz - Fz,
        Kz = oz - Fz,
        uz = [null, null, null];
      for (let Nz = 0; Nz < uz.length; Nz++) uz[Nz] = {
        SX: (Wz[Nz] - zz[Nz]) / vz,
        VX: (Oz[Nz] - sz[Nz]) / Kz,
        delta: Wz[Nz] - sz[Nz]
      };
      return {
        lX: Uz,
        aX: uz
      }
    }

    function Dz(zz, tz) {
      return null === tz ? zz : tz(zz)
    }

    function gz(zz) {
      const [tz, sz, Fz] = zz, Oz = -(0, Xz.h)(tz), oz = -(0, Xz.h)(sz), vz = (0, Xz.h)(Fz), Uz = Wz.c.quaternionFromEulerZYX(Oz, oz, vz);
      return Wz.c.eulerYXZFromQuaternion(Uz)
    }
    Uz.LERP_MODE_SCHEMA_MAPPING = {
      linear: Fz.f.Linear,
      catmullrom: Fz.f.CatmullRomSpline
    };
    const Hz = 1 / 16;

    function Bz(zz) {
      return [-zz[0] * Hz, zz[1] * Hz, zz[2] * Hz]
    }

    function Pz(zz) {
      const [tz, sz, Fz] = zz;
      return [tz >= 0 ? Math.PI - tz : -Math.PI - tz, rz(sz + Math.PI), rz(Fz + Math.PI)]
    }

    function rz(zz) {
      return Wz.c.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
    }

    function Yz(zz, tz) {
      return Math.abs(Wz.c.computeShortestRotation(zz[0], tz[0])) + Math.abs(Wz.c.computeShortestRotation(zz[1], tz[1])) + Math.abs(Wz.c.computeShortestRotation(zz[2], tz[2]))
    }
    const xz = new vz
  },
  36531: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Oz,
      c: () => Xz,
      f: () => Fz,
      g: () => Wz
    });
    let Fz = function(zz) {
        return zz[zz.Linear = 0] = "Linear", zz[zz.CatmullRomSpline = 1] = "CatmullRomSpline", zz
      }({}),
      Wz = function(zz) {
        return zz[zz.NoLoop = 0] = "NoLoop", zz[zz.LoopOnLastFrame = 1] = "LoopOnLastFrame", zz[zz.HoldOnLastFrame = 2] = "HoldOnLastFrame", zz
      }({}),
      Xz = function(zz) {
        return zz[zz.Movement = 0] = "Movement", zz[zz.Action = 1] = "Action", zz[zz.Emote = 2] = "Emote", zz[zz.Custom = 3] = "Custom", zz
      }({}),
      Oz = function(zz) {
        return zz[zz.Start = 0] = "Start", zz[zz.Stop = 1] = "Stop", zz
      }({})
  },
  4476: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Fz,
      h: () => Xz,
      l: () => vz,
      n: () => Oz
    });
    const Fz = ["sine", "triangle", "square", "sawtooth"],
      Wz = 55,
      Xz = {
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

    function Oz(zz) {
      return "string" !== typeof zz ? zz : Object.hasOwn(Xz, zz) ? Xz[zz] : null
    }

    function oz(zz, tz, sz) {
      return Math.min(sz, Math.max(tz, zz))
    }

    function vz(zz) {
      const tz = oz(zz.durationMs, 10, 500),
        sz = oz(zz.attackMs, 0, tz),
        {
          intonation: Wz
        } = zz;
      return {
        waveform: Fz.includes(zz.waveform) ? zz.waveform : "sine",
        pitchHz: oz(zz.pitchHz, 20, 4e3),
        glideSemitones: oz(zz.glideSemitones, -24, 24),
        durationMs: tz,
        attackMs: sz,
        releaseMs: oz(zz.releaseMs, 0, tz - sz),
        lowpassHz: null === zz.lowpassHz ? null : oz(zz.lowpassHz, 20, 2e4),
        volume: oz(zz.volume, 0, 2),
        intonation: {
          variationSemitones: oz(Wz.variationSemitones, 0, 6),
          declineSemitones: oz(Wz.declineSemitones, 0, 12),
          questionRiseSemitones: oz(Wz.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: oz(Wz.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: oz(zz.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);