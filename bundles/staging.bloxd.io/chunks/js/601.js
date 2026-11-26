export const id = 601;
export const ids = [601];
export const modules = {
  44209: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CharacterPreview: () => ZV
    });
    var JV = xV(62),
      YV = xV(3080),
      UV = xV(1269),
      yV = xV(2822),
      pV = xV(35337),
      QV = xV(4024),
      nV = xV(1321);
    const wV = .6 * Math.PI,
      ZV = (0, JV.memo)((0, JV.forwardRef)((function(VV, eV) {
        let {
          onReady: xV,
          onDrawn: ZV,
          owner: vV = "other",
          framing: rV = "player",
          forcedCosmetics: kV,
          Py: bV,
          emotePlaySeq: EV,
          turntableFromYaw: BV = null
        } = VV;
        const jV = (0, JV.useRef)(null),
          {
            width: qV,
            height: tV
          } = (0, YV.d)(jV),
          FV = (0, JV.useRef)(null),
          TV = (0, JV.useRef)({}),
          PV = (0, JV.useRef)({}),
          [AV, NV] = (0, JV.useState)(!1),
          XV = (0, JV.useRef)(xV);
        XV.current = xV;
        const MV = (0, JV.useRef)(ZV);
        MV.current = ZV;
        const zV = (0, JV.useRef)(null),
          GV = (0, JV.useRef)(!1),
          WV = (0, JV.useRef)(!1),
          RV = (0, JV.useCallback)((() => {
            const VV = FV.current;
            if (!VV || !MV.current || GV.current || !WV.current) return;
            const eV = {};
            zV.current = eV, queueMicrotask((() => {
              if (zV.current !== eV) return;
              const xV = Promise.all(UV.w.map((eV => VV.untilDrawn(eV)))).catch((VV => {
                  console.error("Failed to draw the character preview", VV)
                })),
                JV = new Promise((VV => {
                  setTimeout(VV, 1e4)
                }));
              Promise.race([xV, JV]).then((() => {
                var xV;
                FV.current !== VV || zV.current !== eV || GV.current || (GV.current = !0, null === (xV = MV.current) || void 0 === xV || xV.call(MV))
              }))
            }))
          }), []);
        return (0, JV.useImperativeHandle)(eV, (() => {
          const VV = (VV, eV) => {
            var xV;
            (TV.current[VV] = eV, null !== kV && void 0 !== kV && kV[VV]) || (null === (xV = FV.current) || void 0 === xV || xV.setCosmetic(VV, eV), RV())
          };
          return {
            updateCosmetic: VV,
            setAllCosmetics(eV) {
              for (const JV of UV.w) {
                var xV;
                VV(JV, null !== (xV = eV[JV]) && void 0 !== xV ? xV : (0, yV.b)(JV))
              }
            },
            isReady() {
              var VV, eV;
              return null !== (VV = null === (eV = FV.current) || void 0 === eV ? void 0 : eV.isReady()) && void 0 !== VV && VV
            },
            resetCamera() {
              var VV;
              null === (VV = FV.current) || void 0 === VV || VV.resetCamera()
            },
            setOrbit(VV) {
              var eV;
              null === (eV = FV.current) || void 0 === eV || eV.setOrbit(VV)
            },
            turnCamera(VV) {
              var eV;
              const xV = pV.c[rV];
              null === (eV = FV.current) || void 0 === eV || eV.setOrbit({
                ...xV,
                yaw: xV.yaw + VV
              })
            },
            async ensureReadyForCapture(VV) {
              var eV;
              await (null === (eV = FV.current) || void 0 === eV ? void 0 : eV.untilDrawn(VV))
            },
            getDevTools() {
              var VV;
              return null !== (VV = FV.current) && void 0 !== VV && VV.isReady() ? FV.current.dev : null
            }
          }
        }), [kV, rV, RV]), (0, JV.useEffect)((() => {
          const VV = QV.c.register(vV),
            eV = pV.h.openCharacter(jV.current, rV);
          FV.current = eV;
          let xV = !0;
          return eV.ready.then((() => {
            xV && (NV(!0), XV.current())
          })).catch((VV => {
            console.error("Failed to set up the character preview", VV)
          })), () => {
            xV = !1, VV(), eV.resetCamera(), eV.close(), FV.current = null
          }
        }), []), (0, JV.useEffect)((() => {
          qV <= 0 || tV <= 0 || FV.current.resize(qV, tV)
        }), [qV, tV]), (0, JV.useEffect)((() => {
          if (!AV) return;
          const VV = PV.current;
          for (const eV of UV.w) {
            const xV = null === kV || void 0 === kV ? void 0 : kV[eV],
              JV = VV[eV];
            xV && xV !== JV ? FV.current.setCosmetic(eV, xV) : !xV && JV && TV.current[eV] && FV.current.setCosmetic(eV, TV.current[eV])
          }
          PV.current = {
            ...kV
          }, WV.current = !0, RV()
        }), [kV, AV, RV]), (0, JV.useEffect)((() => {
          AV && FV.current.playEmote(null !== bV && void 0 !== bV ? bV : null)
        }), [bV, EV, AV]), (0, JV.useEffect)((() => {
          if (!AV || null === BV) return;
          const VV = FV.current,
            {
              pitch: eV,
              radius: xV
            } = pV.c[rV];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return VV.setOrbit({
            yaw: BV + wV,
            pitch: eV,
            radius: xV
          }), () => {
            VV.resetCamera()
          };
          const JV = performance.now();
          let YV = 0;
          const UV = yV => {
            VV.setOrbit({
              yaw: BV + (yV - JV) / 6e3 * 2 * Math.PI,
              pitch: eV,
              radius: xV
            }), YV = requestAnimationFrame(UV)
          };
          return YV = requestAnimationFrame(UV), () => {
            cancelAnimationFrame(YV), VV.resetCamera()
          }
        }), [AV, BV]), (0, nV.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: jV
        })
      })))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);