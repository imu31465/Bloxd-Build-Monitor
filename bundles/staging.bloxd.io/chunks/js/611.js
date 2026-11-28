export const id = 611;
export const ids = [611];
export const modules = {
  45334: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      CharacterPreview: () => Nd
    });
    var Wd = md(66),
      Fd = md(3851),
      Rd = md(1300),
      Xd = md(3597),
      Kd = md(35582),
      hd = md(4849),
      vd = md(1341);
    let Qd = null;
    const td = [],
      od = .6 * Math.PI,
      Nd = (0, Wd.memo)((0, Wd.forwardRef)((function(dd, Od) {
        let {
          onReady: md,
          onDrawn: Nd,
          onSetupFailed: qd,
          owner: Hd = "other",
          framing: yd = "player",
          forcedCosmetics: bd,
          hK: Td,
          emotePlaySeq: pd,
          turntableFromYaw: Yd = null,
          nametag: gd
        } = dd;
        const wd = (0, Wd.useRef)(null),
          {
            width: Ed,
            height: Jd
          } = (0, Fd.b)(wd),
          Ud = (0, Wd.useRef)({
            width: Ed,
            height: Jd
          });
        Ud.current = {
          width: Ed,
          height: Jd
        };
        const xd = (0, Wd.useRef)(null),
          Bd = (0, Wd.useRef)({}),
          Sd = (0, Wd.useRef)({}),
          [sd, ud] = (0, Wd.useState)(!1),
          Vd = (0, Wd.useRef)(md);
        Vd.current = md;
        const Ad = (0, Wd.useRef)(Nd);
        Ad.current = Nd;
        const rd = (0, Wd.useRef)(qd);
        rd.current = qd;
        const Gd = (0, Wd.useRef)(null),
          nd = (0, Wd.useRef)(!1),
          Ld = (0, Wd.useRef)(gd);
        Ld.current = gd;
        const Pd = (0, Wd.useRef)(!0),
          zd = (0, Wd.useRef)(!1),
          cd = (0, Wd.useCallback)((() => {
            const dd = xd.current;
            if (!dd || !Ad.current || nd.current || !zd.current) return;
            const Od = {};
            Gd.current = Od, queueMicrotask((() => {
              if (Gd.current !== Od) return;
              const md = Promise.all(Rd.s.map((Od => dd.untilDrawn(Od)))).then((() => !0), (dd => (console.error("Failed to draw the character preview", dd), !1))),
                Wd = new Promise((dd => {
                  setTimeout((() => {
                    dd(!1)
                  }), 1e4)
                }));
              Promise.race([md, Wd]).then((md => {
                const Wd = Ad.current;
                xd.current === dd && Gd.current === Od && !nd.current && Wd && (nd.current = !0, Wd(md))
              }))
            }))
          }), []);
        return (0, Wd.useImperativeHandle)(Od, (() => {
          const dd = (dd, Od) => {
            var md;
            (Bd.current[dd] = Od, null !== bd && void 0 !== bd && bd[dd]) || (null === (md = xd.current) || void 0 === md || md.setCosmetic(dd, Od), cd())
          };
          return {
            updateCosmetic: dd,
            setAllCosmetics(Od) {
              for (const Wd of Rd.s) {
                var md;
                dd(Wd, null !== (md = Od[Wd]) && void 0 !== md ? md : (0, Xd.b)(Wd))
              }
            },
            isReady() {
              var dd, Od;
              return null !== (dd = null === (Od = xd.current) || void 0 === Od ? void 0 : Od.isReady()) && void 0 !== dd && dd
            },
            resetCamera() {
              var dd;
              null === (dd = xd.current) || void 0 === dd || dd.resetCamera()
            },
            setOrbit(dd) {
              var Od;
              null === (Od = xd.current) || void 0 === Od || Od.setOrbit(dd)
            },
            turnCamera(dd) {
              var Od;
              const md = Kd.c[yd];
              null === (Od = xd.current) || void 0 === Od || Od.setOrbit({
                ...md,
                yaw: md.yaw + dd
              })
            },
            async ensureReadyForCapture(dd) {
              var Od;
              await (null === (Od = xd.current) || void 0 === Od ? void 0 : Od.untilDrawn(dd))
            },
            getDevTools() {
              var dd;
              return null !== (dd = xd.current) && void 0 !== dd && dd.isReady() ? xd.current.dev : null
            },
            setNametagShown(dd) {
              var Od, md;
              Pd.current = dd, null === (Od = xd.current) || void 0 === Od || Od.setNametag(dd && null !== (md = Ld.current) && void 0 !== md ? md : null)
            }
          }
        }), [bd, yd, cd]), (0, Wd.useEffect)((() => {
          const dd = hd.b.register(Hd);
          let Od = !0;
          const md = dd => {
            const md = xd.current,
              Wd = Kd.i.openCharacter(wd.current, yd);
            if (xd.current = Wd, Qd = Wd, md) {
              md.close();
              const {
                width: dd,
                height: Od
              } = Ud.current;
              dd > 0 && Od > 0 && Wd.resize(dd, Od)
            }
            Sd.current = {}, ud(!1), Wd.ready.then((() => {
              if (Od && xd.current === Wd)
                if (ud(!0), dd) {
                  Wd.resetCamera();
                  for (const dd of Rd.s) {
                    var md;
                    Wd.setCosmetic(dd, null !== (md = Bd.current[dd]) && void 0 !== md ? md : (0, Xd.b)(dd))
                  }
                } else Vd.current()
            })).catch((dd => {
              var md;
              (console.error("Failed to set up the character preview", dd), Od && xd.current === Wd) && (null === (md = rd.current) || void 0 === md || md.call(rd))
            }))
          };
          md(!1);
          const Wd = {
            reopen: () => {
              md(!0)
            }
          };
          return td.push(Wd), () => {
            Od = !1, dd();
            const md = xd.current;
            Qd === md && (md.resetCamera(), Qd = null), md.close(), xd.current = null;
            const Fd = td.indexOf(Wd);
            if (td.splice(Fd, 1), Fd === td.length && Fd > 0) {
              const dd = td[Fd - 1];
              queueMicrotask((() => {
                td.at(-1) === dd && null === Qd && Kd.i.sharesCharacter() && dd.reopen()
              }))
            }
          }
        }), []), (0, Wd.useEffect)((() => {
          Ed <= 0 || Jd <= 0 || xd.current.resize(Ed, Jd)
        }), [Ed, Jd]), (0, Wd.useEffect)((() => {
          if (!sd) return;
          const dd = Sd.current;
          for (const Od of Rd.s) {
            const md = null === bd || void 0 === bd ? void 0 : bd[Od],
              Wd = dd[Od];
            md && md !== Wd ? xd.current.setCosmetic(Od, md) : !md && Wd && Bd.current[Od] && xd.current.setCosmetic(Od, Bd.current[Od])
          }
          Sd.current = {
            ...bd
          }, zd.current = !0, cd()
        }), [bd, sd, cd]), (0, Wd.useEffect)((() => {
          sd && xd.current.playEmote(null !== Td && void 0 !== Td ? Td : null)
        }), [Td, pd, sd]), (0, Wd.useEffect)((() => {
          sd && Pd.current && xd.current.setNametag(null !== gd && void 0 !== gd ? gd : null)
        }), [gd, sd]), (0, Wd.useEffect)((() => {
          if (!sd || null === Yd) return;
          const dd = xd.current,
            {
              pitch: Od,
              radius: md
            } = Kd.c[yd];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return dd.setOrbit({
            yaw: Yd + od,
            pitch: Od,
            radius: md
          }), () => {
            Qd === dd && dd.resetCamera()
          };
          const Wd = performance.now();
          let Fd = 0;
          const Rd = Xd => {
            xd.current === dd && (dd.setOrbit({
              yaw: Yd + (Xd - Wd) / 6e3 * 2 * Math.PI,
              pitch: Od,
              radius: md
            }), Fd = requestAnimationFrame(Rd))
          };
          return Fd = requestAnimationFrame(Rd), () => {
            cancelAnimationFrame(Fd), Qd === dd && dd.resetCamera()
          }
        }), [sd, Yd]), (0, vd.jsx)("div", {
          className: "CharCustomisationPreview",
          ref: wd
        })
      })))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);