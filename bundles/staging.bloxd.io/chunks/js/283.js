export const id = 283;
export const ids = [283];
export const modules = {
  41253: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      CharacterPreview: () => od
    });
    var pd = kd(56),
      Nd = kd(2615),
      Wd = kd(1260),
      Pd = kd(8734),
      Zd = kd(9272),
      gd = kd(3519),
      Cd = kd(1103);
    const Kd = .6 * Math.PI,
      od = (0, pd.memo)((0, pd.forwardRef)((function(dd, Jd) {
        let {
          onReady: kd,
          onDrawn: od,
          owner: ld = "other",
          framing: Qd = "player",
          forcedCosmetics: Ld,
          HC: Od,
          emotePlaySeq: ed,
          turntableFromYaw: Rd = null
        } = dd;
        const Id = (0, pd.useRef)(null),
          {
            width: Gd,
            height: vd
          } = (0, Nd.c)(Id),
          xd = (0, pd.useRef)(null),
          qd = (0, pd.useRef)({}),
          Bd = (0, pd.useRef)({}),
          [sd, ad] = (0, pd.useState)(!1),
          Md = (0, pd.useRef)(kd);
        Md.current = kd;
        const Fd = (0, pd.useRef)(od);
        Fd.current = od;
        const Yd = (0, pd.useRef)(null),
          md = (0, pd.useRef)(!1),
          bd = (0, pd.useRef)(!1),
          Sd = (0, pd.useCallback)((() => {
            const dd = xd.current;
            if (!dd || !Fd.current || md.current || !bd.current) return;
            const Jd = {};
            Yd.current = Jd, queueMicrotask((() => {
              if (Yd.current !== Jd) return;
              const kd = Promise.all(Wd.x.map((Jd => dd.untilDrawn(Jd)))).catch((dd => {
                  console.error("Failed to draw the character preview", dd)
                })),
                pd = new Promise((dd => {
                  setTimeout(dd, 1e4)
                }));
              Promise.race([kd, pd]).then((() => {
                var kd;
                xd.current !== dd || Yd.current !== Jd || md.current || (md.current = !0, null === (kd = Fd.current) || void 0 === kd || kd.call(Fd))
              }))
            }))
          }), []);
        return (0, pd.useImperativeHandle)(Jd, (() => {
          const dd = (dd, Jd) => {
            var kd;
            (qd.current[dd] = Jd, null !== Ld && void 0 !== Ld && Ld[dd]) || (null === (kd = xd.current) || void 0 === kd || kd.setCosmetic(dd, Jd), Sd())
          };
          return {
            updateCosmetic: dd,
            setAllCosmetics(Jd) {
              for (const pd of Wd.x) {
                var kd;
                dd(pd, null !== (kd = Jd[pd]) && void 0 !== kd ? kd : (0, Pd.b)(pd))
              }
            },
            isReady() {
              var dd, Jd;
              return null !== (dd = null === (Jd = xd.current) || void 0 === Jd ? void 0 : Jd.isReady()) && void 0 !== dd && dd
            },
            resetCamera() {
              var dd;
              null === (dd = xd.current) || void 0 === dd || dd.resetCamera()
            },
            setOrbit(dd) {
              var Jd;
              null === (Jd = xd.current) || void 0 === Jd || Jd.setOrbit(dd)
            },
            async ensureReadyForCapture(dd) {
              var Jd;
              await (null === (Jd = xd.current) || void 0 === Jd ? void 0 : Jd.untilDrawn(dd))
            },
            getDevTools() {
              var dd;
              return null !== (dd = xd.current) && void 0 !== dd && dd.isReady() ? xd.current.dev : null
            }
          }
        }), [Ld, Sd]), (0, pd.useEffect)((() => {
          const dd = gd.e.register(ld),
            Jd = Zd.j.openCharacter(Id.current, Qd);
          xd.current = Jd;
          let kd = !0;
          return Jd.ready.then((() => {
            kd && (ad(!0), Md.current())
          })).catch((dd => {
            console.error("Failed to set up the character preview", dd)
          })), () => {
            kd = !1, dd(), Jd.resetCamera(), Jd.close(), xd.current = null
          }
        }), []), (0, pd.useEffect)((() => {
          Gd <= 0 || vd <= 0 || xd.current.resize(Gd, vd)
        }), [Gd, vd]), (0, pd.useEffect)((() => {
          if (!sd) return;
          const dd = Bd.current;
          for (const Jd of Wd.x) {
            const kd = null === Ld || void 0 === Ld ? void 0 : Ld[Jd],
              pd = dd[Jd];
            kd && kd !== pd ? xd.current.setCosmetic(Jd, kd) : !kd && pd && qd.current[Jd] && xd.current.setCosmetic(Jd, qd.current[Jd])
          }
          Bd.current = {
            ...Ld
          }, bd.current = !0, Sd()
        }), [Ld, sd, Sd]), (0, pd.useEffect)((() => {
          sd && xd.current.playEmote(null !== Od && void 0 !== Od ? Od : null)
        }), [Od, ed, sd]), (0, pd.useEffect)((() => {
          if (!sd || null === Rd) return;
          const dd = xd.current,
            {
              pitch: Jd,
              radius: kd
            } = Zd.b[Qd];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return dd.setOrbit({
            yaw: Rd + Kd,
            pitch: Jd,
            radius: kd
          }), () => {
            dd.resetCamera()
          };
          const pd = performance.now();
          let Nd = 0;
          const Wd = Pd => {
            dd.setOrbit({
              yaw: Rd + (Pd - pd) / 6e3 * 2 * Math.PI,
              pitch: Jd,
              radius: kd
            }), Nd = requestAnimationFrame(Wd)
          };
          return Nd = requestAnimationFrame(Wd), () => {
            cancelAnimationFrame(Nd), dd.resetCamera()
          }
        }), [sd, Rd]), (0, Cd.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: Id
        })
      })))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);