export const id = 611;
export const ids = [611];
export const modules = {
  45289: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      CharacterPreview: () => Nr
    });
    var Zr = Qr(72),
      Wr = Qr(3855),
      ar = Qr(1287),
      jr = Qr(3601),
      Ir = Qr(35505),
      fr = Qr(4876),
      Er = Qr(1338);
    let pr = null;
    const xr = [],
      mr = .6 * Math.PI,
      Nr = (0, Zr.memo)((0, Zr.forwardRef)((function(rr, Sr) {
        let {
          onReady: Qr,
          onDrawn: Nr,
          onSetupFailed: Ur,
          owner: tr = "other",
          framing: hr = "player",
          forcedCosmetics: zr,
          II: Yr,
          emotePlaySeq: nr,
          turntableFromYaw: er = null,
          nametag: Kr
        } = rr;
        const yr = (0, Zr.useRef)(null),
          {
            width: Br,
            height: Tr
          } = (0, Wr.b)(yr),
          vr = (0, Zr.useRef)({
            width: Br,
            height: Tr
          });
        vr.current = {
          width: Br,
          height: Tr
        };
        const Or = (0, Zr.useRef)(null),
          Lr = (0, Zr.useRef)({}),
          lr = (0, Zr.useRef)({}),
          [Xr, Pr] = (0, Zr.useState)(!1),
          Hr = (0, Zr.useRef)(Qr);
        Hr.current = Qr;
        const qr = (0, Zr.useRef)(Nr);
        qr.current = Nr;
        const Rr = (0, Zr.useRef)(Ur);
        Rr.current = Ur;
        const gr = (0, Zr.useRef)(null),
          Cr = (0, Zr.useRef)(!1),
          Mr = (0, Zr.useRef)(Kr);
        Mr.current = Kr;
        const Gr = (0, Zr.useRef)(!0),
          kr = (0, Zr.useRef)(!1),
          Ar = (0, Zr.useCallback)((() => {
            const rr = Or.current;
            if (!rr || !qr.current || Cr.current || !kr.current) return;
            const Sr = {};
            gr.current = Sr, queueMicrotask((() => {
              if (gr.current !== Sr) return;
              const Qr = Promise.all(ar.A.map((Sr => rr.untilDrawn(Sr)))).then((() => !0), (rr => (console.error("Failed to draw the character preview", rr), !1))),
                Zr = new Promise((rr => {
                  setTimeout((() => {
                    rr(!1)
                  }), 1e4)
                }));
              Promise.race([Qr, Zr]).then((Qr => {
                const Zr = qr.current;
                Or.current === rr && gr.current === Sr && !Cr.current && Zr && (Cr.current = !0, Zr(Qr))
              }))
            }))
          }), []);
        return (0, Zr.useImperativeHandle)(Sr, (() => {
          const rr = (rr, Sr) => {
            var Qr;
            (Lr.current[rr] = Sr, null !== zr && void 0 !== zr && zr[rr]) || (null === (Qr = Or.current) || void 0 === Qr || Qr.setCosmetic(rr, Sr), Ar())
          };
          return {
            updateCosmetic: rr,
            setAllCosmetics(Sr) {
              for (const Zr of ar.A) {
                var Qr;
                rr(Zr, null !== (Qr = Sr[Zr]) && void 0 !== Qr ? Qr : (0, jr.b)(Zr))
              }
            },
            isReady() {
              var rr, Sr;
              return null !== (rr = null === (Sr = Or.current) || void 0 === Sr ? void 0 : Sr.isReady()) && void 0 !== rr && rr
            },
            resetCamera() {
              var rr;
              null === (rr = Or.current) || void 0 === rr || rr.resetCamera()
            },
            setOrbit(rr) {
              var Sr;
              null === (Sr = Or.current) || void 0 === Sr || Sr.setOrbit(rr)
            },
            turnCamera(rr) {
              var Sr;
              const Qr = Ir.c[hr];
              null === (Sr = Or.current) || void 0 === Sr || Sr.setOrbit({
                ...Qr,
                yaw: Qr.yaw + rr
              })
            },
            async ensureReadyForCapture(rr) {
              var Sr;
              await (null === (Sr = Or.current) || void 0 === Sr ? void 0 : Sr.untilDrawn(rr))
            },
            getDevTools() {
              var rr;
              return null !== (rr = Or.current) && void 0 !== rr && rr.isReady() ? Or.current.dev : null
            },
            setNametagShown(rr) {
              var Sr, Qr;
              Gr.current = rr, null === (Sr = Or.current) || void 0 === Sr || Sr.setNametag(rr && null !== (Qr = Mr.current) && void 0 !== Qr ? Qr : null)
            }
          }
        }), [zr, hr, Ar]), (0, Zr.useEffect)((() => {
          const rr = fr.c.register(tr);
          let Sr = !0;
          const Qr = rr => {
            const Qr = Or.current,
              Zr = Ir.j.openCharacter(yr.current, hr);
            if (Or.current = Zr, pr = Zr, Qr) {
              Qr.close();
              const {
                width: rr,
                height: Sr
              } = vr.current;
              rr > 0 && Sr > 0 && Zr.resize(rr, Sr)
            }
            lr.current = {}, Pr(!1), Zr.ready.then((() => {
              if (Sr && Or.current === Zr)
                if (Pr(!0), rr) {
                  Zr.resetCamera();
                  for (const rr of ar.A) {
                    var Qr;
                    Zr.setCosmetic(rr, null !== (Qr = Lr.current[rr]) && void 0 !== Qr ? Qr : (0, jr.b)(rr))
                  }
                } else Hr.current()
            })).catch((rr => {
              var Qr;
              (console.error("Failed to set up the character preview", rr), Sr && Or.current === Zr) && (null === (Qr = Rr.current) || void 0 === Qr || Qr.call(Rr))
            }))
          };
          Qr(!1);
          const Zr = {
            reopen: () => {
              Qr(!0)
            }
          };
          return xr.push(Zr), () => {
            Sr = !1, rr();
            const Qr = Or.current;
            pr === Qr && (Qr.resetCamera(), pr = null), Qr.close(), Or.current = null;
            const Wr = xr.indexOf(Zr);
            if (xr.splice(Wr, 1), Wr === xr.length && Wr > 0) {
              const rr = xr[Wr - 1];
              queueMicrotask((() => {
                xr.at(-1) === rr && null === pr && Ir.j.sharesCharacter() && rr.reopen()
              }))
            }
          }
        }), []), (0, Zr.useEffect)((() => {
          Br <= 0 || Tr <= 0 || Or.current.resize(Br, Tr)
        }), [Br, Tr]), (0, Zr.useEffect)((() => {
          if (!Xr) return;
          const rr = lr.current;
          for (const Sr of ar.A) {
            const Qr = null === zr || void 0 === zr ? void 0 : zr[Sr],
              Zr = rr[Sr];
            Qr && Qr !== Zr ? Or.current.setCosmetic(Sr, Qr) : !Qr && Zr && Lr.current[Sr] && Or.current.setCosmetic(Sr, Lr.current[Sr])
          }
          lr.current = {
            ...zr
          }, kr.current = !0, Ar()
        }), [zr, Xr, Ar]), (0, Zr.useEffect)((() => {
          Xr && Or.current.playEmote(null !== Yr && void 0 !== Yr ? Yr : null)
        }), [Yr, nr, Xr]), (0, Zr.useEffect)((() => {
          Xr && Gr.current && Or.current.setNametag(null !== Kr && void 0 !== Kr ? Kr : null)
        }), [Kr, Xr]), (0, Zr.useEffect)((() => {
          if (!Xr || null === er) return;
          const rr = Or.current,
            {
              pitch: Sr,
              radius: Qr
            } = Ir.c[hr];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return rr.setOrbit({
            yaw: er + mr,
            pitch: Sr,
            radius: Qr
          }), () => {
            pr === rr && rr.resetCamera()
          };
          const Zr = performance.now();
          let Wr = 0;
          const ar = jr => {
            Or.current === rr && (rr.setOrbit({
              yaw: er + (jr - Zr) / 6e3 * 2 * Math.PI,
              pitch: Sr,
              radius: Qr
            }), Wr = requestAnimationFrame(ar))
          };
          return Wr = requestAnimationFrame(ar), () => {
            cancelAnimationFrame(Wr), pr === rr && rr.resetCamera()
          }
        }), [Xr, er]), (0, Er.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: yr
        })
      })))
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);