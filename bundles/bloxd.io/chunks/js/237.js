export const id = 237;
export const ids = [237];
export const modules = {
  44451: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      CharacterPreview: () => ZB
    });
    var YB = GB(56),
      DB = GB(3072),
      QB = GB(1238),
      oB = GB(2787),
      jB = GB(34828),
      yB = GB(4056),
      JB = GB(36948),
      MB = GB(36963),
      PB = GB(36991),
      zB = GB(1282);

    function lB(BB) {
      let {
        nametag: OB
      } = BB;
      const GB = (0, YB.useRef)(null),
        {
          height: QB
        } = (0, DB.e)(GB),
        [oB, jB] = (0, YB.useState)(!1),
        {
          name: yB,
          ranks: lB,
          nameColour: pB
        } = OB;
      return (0, YB.useEffect)((() => {
        let BB = !0;
        return PB.k.untilLoadedFor(yB).then((() => {
          BB && jB(!0)
        })), () => {
          BB = !1
        }
      }), [yB]), (0, YB.useEffect)((() => {
        if (!oB || QB <= 0) return;
        const BB = GB.current,
          OB = (0, JB.e)(BB),
          YB = () => {
            const GB = (0, MB.d)({
              name: yB,
              ranks: lB,
              colour: pB,
              player: !1
            }, OB, PB.s, {
              nameAsGiven: !0
            });
            if (null === GB) return BB.width = 0, void(BB.height = 0);
            const YB = QB * devicePixelRatio / GB.height;
            BB.width = Math.ceil(GB.width * YB), BB.height = Math.ceil(GB.height * YB), OB.scale(YB, YB), GB.draw(OB)
          };
        return YB(), (0, PB.h)(YB)
      }), [oB, QB, yB, lB, pB]), (0, zB.jsx)("canvas", {
        ref: GB,
        className: "CharacterPreviewNametag",
        role: "img",
        "aria-label": yB,
        style: {
          visibility: oB ? void 0 : "hidden"
        }
      })
    }
    let pB = null;
    const qB = .6 * Math.PI,
      ZB = (0, YB.memo)((0, YB.forwardRef)((function(BB, OB) {
        let {
          onReady: GB,
          onDrawn: JB,
          owner: MB = "other",
          framing: PB = "player",
          forcedCosmetics: ZB,
          NM: NB,
          emotePlaySeq: RB,
          turntableFromYaw: WB = null,
          nametag: AB
        } = BB;
        const VB = (0, YB.useRef)(null),
          {
            width: SB,
            height: nB
          } = (0, DB.e)(VB),
          UB = (0, YB.useRef)(null),
          fB = (0, YB.useRef)({}),
          kB = (0, YB.useRef)({}),
          [dB, KB] = (0, YB.useState)(!1),
          uB = (0, YB.useRef)(GB);
        uB.current = GB;
        const mB = (0, YB.useRef)(JB);
        mB.current = JB;
        const IB = (0, YB.useRef)(null),
          FB = (0, YB.useRef)(!1),
          iB = (0, YB.useRef)(!1),
          LB = (0, YB.useCallback)((() => {
            const BB = UB.current;
            if (!BB || !mB.current || FB.current || !iB.current) return;
            const OB = {};
            IB.current = OB, queueMicrotask((() => {
              if (IB.current !== OB) return;
              const GB = Promise.all(QB.t.map((OB => BB.untilDrawn(OB)))).then((() => !0), (BB => (console.error("Failed to draw the character preview", BB), !1))),
                YB = new Promise((BB => {
                  setTimeout((() => {
                    BB(!1)
                  }), 1e4)
                }));
              Promise.race([GB, YB]).then((GB => {
                var YB;
                UB.current !== BB || IB.current !== OB || FB.current || (FB.current = !0, null === (YB = mB.current) || void 0 === YB || YB.call(mB, GB))
              }))
            }))
          }), []);
        return (0, YB.useImperativeHandle)(OB, (() => {
          const BB = (BB, OB) => {
            var GB;
            (fB.current[BB] = OB, null !== ZB && void 0 !== ZB && ZB[BB]) || (null === (GB = UB.current) || void 0 === GB || GB.setCosmetic(BB, OB), LB())
          };
          return {
            updateCosmetic: BB,
            setAllCosmetics(OB) {
              for (const YB of QB.t) {
                var GB;
                BB(YB, null !== (GB = OB[YB]) && void 0 !== GB ? GB : (0, oB.d)(YB))
              }
            },
            isReady() {
              var BB, OB;
              return null !== (BB = null === (OB = UB.current) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
            },
            resetCamera() {
              var BB;
              null === (BB = UB.current) || void 0 === BB || BB.resetCamera()
            },
            setOrbit(BB) {
              var OB;
              null === (OB = UB.current) || void 0 === OB || OB.setOrbit(BB)
            },
            turnCamera(BB) {
              var OB;
              const GB = jB.b[PB];
              null === (OB = UB.current) || void 0 === OB || OB.setOrbit({
                ...GB,
                yaw: GB.yaw + BB
              })
            },
            async ensureReadyForCapture(BB) {
              var OB;
              await (null === (OB = UB.current) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
            },
            getDevTools() {
              var BB;
              return null !== (BB = UB.current) && void 0 !== BB && BB.isReady() ? UB.current.dev : null
            }
          }
        }), [ZB, PB, LB]), (0, YB.useEffect)((() => {
          const BB = yB.c.register(MB),
            OB = jB.g.openCharacter(VB.current, PB);
          UB.current = OB, pB = OB;
          let GB = !0;
          return OB.ready.then((() => {
            GB && (KB(!0), uB.current())
          })).catch((BB => {
            console.error("Failed to set up the character preview", BB)
          })), () => {
            GB = !1, BB(), pB === OB && (OB.resetCamera(), pB = null), OB.close(), UB.current = null
          }
        }), []), (0, YB.useEffect)((() => {
          SB <= 0 || nB <= 0 || UB.current.resize(SB, nB)
        }), [SB, nB]), (0, YB.useEffect)((() => {
          if (!dB) return;
          const BB = kB.current;
          for (const OB of QB.t) {
            const GB = null === ZB || void 0 === ZB ? void 0 : ZB[OB],
              YB = BB[OB];
            GB && GB !== YB ? UB.current.setCosmetic(OB, GB) : !GB && YB && fB.current[OB] && UB.current.setCosmetic(OB, fB.current[OB])
          }
          kB.current = {
            ...ZB
          }, iB.current = !0, LB()
        }), [ZB, dB, LB]), (0, YB.useEffect)((() => {
          dB && UB.current.playEmote(null !== NB && void 0 !== NB ? NB : null)
        }), [NB, RB, dB]), (0, YB.useEffect)((() => {
          if (!dB || null === WB) return;
          const BB = UB.current,
            {
              pitch: OB,
              radius: GB
            } = jB.b[PB];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return BB.setOrbit({
            yaw: WB + qB,
            pitch: OB,
            radius: GB
          }), () => {
            pB === BB && BB.resetCamera()
          };
          const YB = performance.now();
          let DB = 0;
          const QB = oB => {
            BB.setOrbit({
              yaw: WB + (oB - YB) / 6e3 * 2 * Math.PI,
              pitch: OB,
              radius: GB
            }), DB = requestAnimationFrame(QB)
          };
          return DB = requestAnimationFrame(QB), () => {
            cancelAnimationFrame(DB), pB === BB && BB.resetCamera()
          }
        }), [dB, WB]), (0, zB.jsxs)(zB.Fragment, {
          children: [(0, zB.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: VB
          }), AB && (0, zB.jsx)(lB, {
            nametag: AB
          })]
        })
      })))
  },
  36948: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, OB).getContext("2d", GB);
      const YB = document.createElement("canvas");
      return YB.width = BB, YB.height = OB, YB.getContext("2d", GB)
    }

    function DB(BB, OB) {
      return BB.getContext("2d", OB)
    }
    GB.d(OB, {
      e: () => DB,
      f: () => YB
    })
  },
  36997: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => yB,
      k: () => jB,
      o: () => JB
    });
    var YB = GB(2034);
    let DB = null,
      QB = 0;
    const oB = new Set;

    function jB() {
      return DB
    }

    function yB() {
      return QB
    }

    function JB(BB) {
      DB = BB, QB++, (0, YB.b)();
      for (const OB of oB) OB()
    }

    function MB(BB) {
      oB.add(BB)
    }
  },
  37009: (BB, OB, GB) => {
    function YB() {
      return GB(37013)
    }

    function DB() {
      return GB(37018)
    }

    function QB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    GB.d(OB, {
      b: () => QB,
      c: () => YB,
      e: () => DB
    })
  },
  37013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37018: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);