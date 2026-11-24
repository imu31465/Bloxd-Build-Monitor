export const id = 296;
export const ids = [296];
export const modules = {
  41524: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      CharacterPreview: () => Ap
    });
    var Op = cp(62),
      op = cp(2835),
      Ip = cp(1251),
      Sp = cp(2638),
      xp = cp(34462),
      Lp = cp(3731),
      Yp = cp(1112);
    const Dp = .6 * Math.PI,
      Ap = (0, Op.memo)((0, Op.forwardRef)((function(pp, ip) {
        let {
          onReady: cp,
          onDrawn: Ap,
          owner: Pp = "other",
          framing: Wp = "player",
          forcedCosmetics: yp,
          IL: Up,
          emotePlaySeq: wp,
          turntableFromYaw: vp = null
        } = pp;
        const tp = (0, Op.useRef)(null),
          {
            width: Hp,
            height: dp
          } = (0, op.d)(tp),
          ep = (0, Op.useRef)(null),
          jp = (0, Op.useRef)({}),
          kp = (0, Op.useRef)({}),
          [mp, Rp] = (0, Op.useState)(!1),
          qp = (0, Op.useRef)(cp);
        qp.current = cp;
        const Mp = (0, Op.useRef)(Ap);
        Mp.current = Ap;
        const Cp = (0, Op.useRef)(null),
          Ep = (0, Op.useRef)(!1),
          Xp = (0, Op.useRef)(!1),
          lp = (0, Op.useCallback)((() => {
            const pp = ep.current;
            if (!pp || !Mp.current || Ep.current || !Xp.current) return;
            const ip = {};
            Cp.current = ip, queueMicrotask((() => {
              if (Cp.current !== ip) return;
              const cp = Promise.all(Ip.u.map((ip => pp.untilDrawn(ip)))).catch((pp => {
                  console.error("Failed to draw the character preview", pp)
                })),
                Op = new Promise((pp => {
                  setTimeout(pp, 1e4)
                }));
              Promise.race([cp, Op]).then((() => {
                var cp;
                ep.current !== pp || Cp.current !== ip || Ep.current || (Ep.current = !0, null === (cp = Mp.current) || void 0 === cp || cp.call(Mp))
              }))
            }))
          }), []);
        return (0, Op.useImperativeHandle)(ip, (() => {
          const pp = (pp, ip) => {
            var cp;
            (jp.current[pp] = ip, null !== yp && void 0 !== yp && yp[pp]) || (null === (cp = ep.current) || void 0 === cp || cp.setCosmetic(pp, ip), lp())
          };
          return {
            updateCosmetic: pp,
            setAllCosmetics(ip) {
              for (const Op of Ip.u) {
                var cp;
                pp(Op, null !== (cp = ip[Op]) && void 0 !== cp ? cp : (0, Sp.b)(Op))
              }
            },
            isReady() {
              var pp, ip;
              return null !== (pp = null === (ip = ep.current) || void 0 === ip ? void 0 : ip.isReady()) && void 0 !== pp && pp
            },
            resetCamera() {
              var pp;
              null === (pp = ep.current) || void 0 === pp || pp.resetCamera()
            },
            setOrbit(pp) {
              var ip;
              null === (ip = ep.current) || void 0 === ip || ip.setOrbit(pp)
            },
            async ensureReadyForCapture(pp) {
              var ip;
              await (null === (ip = ep.current) || void 0 === ip ? void 0 : ip.untilDrawn(pp))
            },
            getDevTools() {
              var pp;
              return null !== (pp = ep.current) && void 0 !== pp && pp.isReady() ? ep.current.dev : null
            }
          }
        }), [yp, lp]), (0, Op.useEffect)((() => {
          const pp = Lp.c.register(Pp),
            ip = xp.j.openCharacter(tp.current, Wp);
          ep.current = ip;
          let cp = !0;
          return ip.ready.then((() => {
            cp && (Rp(!0), qp.current())
          })).catch((pp => {
            console.error("Failed to set up the character preview", pp)
          })), () => {
            cp = !1, pp(), ip.resetCamera(), ip.close(), ep.current = null
          }
        }), []), (0, Op.useEffect)((() => {
          Hp <= 0 || dp <= 0 || ep.current.resize(Hp, dp)
        }), [Hp, dp]), (0, Op.useEffect)((() => {
          if (!mp) return;
          const pp = kp.current;
          for (const ip of Ip.u) {
            const cp = null === yp || void 0 === yp ? void 0 : yp[ip],
              Op = pp[ip];
            cp && cp !== Op ? ep.current.setCosmetic(ip, cp) : !cp && Op && jp.current[ip] && ep.current.setCosmetic(ip, jp.current[ip])
          }
          kp.current = {
            ...yp
          }, Xp.current = !0, lp()
        }), [yp, mp, lp]), (0, Op.useEffect)((() => {
          mp && ep.current.playEmote(null !== Up && void 0 !== Up ? Up : null)
        }), [Up, wp, mp]), (0, Op.useEffect)((() => {
          if (!mp || null === vp) return;
          const pp = ep.current,
            {
              pitch: ip,
              radius: cp
            } = xp.e[Wp];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return pp.setOrbit({
            yaw: vp + Dp,
            pitch: ip,
            radius: cp
          }), () => {
            pp.resetCamera()
          };
          const Op = performance.now();
          let op = 0;
          const Ip = Sp => {
            pp.setOrbit({
              yaw: vp + (Sp - Op) / 6e3 * 2 * Math.PI,
              pitch: ip,
              radius: cp
            }), op = requestAnimationFrame(Ip)
          };
          return op = requestAnimationFrame(Ip), () => {
            cancelAnimationFrame(op), pp.resetCamera()
          }
        }), [mp, vp]), (0, Yp.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: tp
        })
      })))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);