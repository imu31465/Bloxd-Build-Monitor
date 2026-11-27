export const id = 237;
export const ids = [237];
export const modules = {
  44481: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      CharacterPreview: () => pe
    });
    var ye = He(59),
      be = He(2957),
      Me = He(1189),
      Ke = He(2683),
      Ue = He(34919),
      Fe = He(4010),
      Je = He(37049),
      oe = He(37064),
      Re = He(37081),
      ke = He(1228);

    function qe(ee) {
      let {
        nametag: ie
      } = ee;
      const He = (0, ye.useRef)(null),
        {
          height: Me
        } = (0, be.e)(He),
        [Ke, Ue] = (0, ye.useState)(!1),
        {
          name: Fe,
          ranks: qe,
          nameColour: fe
        } = ie;
      return (0, ye.useEffect)((() => {
        let ee = !0;
        return Re.j.untilLoadedFor(Fe).then((() => {
          ee && Ue(!0)
        })), () => {
          ee = !1
        }
      }), [Fe]), (0, ye.useEffect)((() => {
        if (!Ke || Me <= 0) return;
        const ee = He.current,
          ie = (0, Je.c)(ee),
          ye = () => {
            const He = (0, oe.e)({
              name: Fe,
              ranks: qe,
              colour: fe,
              player: !1
            }, ie, Re.q, {
              nameAsGiven: !0
            });
            if (null === He) return ee.width = 0, void(ee.height = 0);
            const ye = Me * devicePixelRatio / He.height;
            ee.width = Math.ceil(He.width * ye), ee.height = Math.ceil(He.height * ye), ie.scale(ye, ye), He.draw(ie)
          };
        return ye(), (0, Re.h)(ye)
      }), [Ke, Me, Fe, qe, fe]), (0, ke.jsx)("canvas", {
        ref: He,
        className: "CharacterPreviewNametag",
        role: "img",
        "aria-label": Fe,
        style: {
          visibility: Ke ? void 0 : "hidden"
        }
      })
    }
    let fe = null;
    const Te = .6 * Math.PI,
      pe = (0, ye.memo)((0, ye.forwardRef)((function(ee, ie) {
        let {
          onReady: He,
          onDrawn: Je,
          owner: oe = "other",
          framing: Re = "player",
          forcedCosmetics: pe,
          oo: Xe,
          emotePlaySeq: ze,
          turntableFromYaw: Be = null,
          nametag: Ee
        } = ee;
        const ge = (0, ye.useRef)(null),
          {
            width: Oe,
            height: de
          } = (0, be.e)(ge),
          We = (0, ye.useRef)(null),
          te = (0, ye.useRef)({}),
          Ze = (0, ye.useRef)({}),
          [we, De] = (0, ye.useState)(!1),
          Pe = (0, ye.useRef)(He);
        Pe.current = He;
        const Ae = (0, ye.useRef)(Je);
        Ae.current = Je;
        const Ye = (0, ye.useRef)(null),
          Ve = (0, ye.useRef)(!1),
          ae = (0, ye.useRef)(!1),
          ce = (0, ye.useCallback)((() => {
            const ee = We.current;
            if (!ee || !Ae.current || Ve.current || !ae.current) return;
            const ie = {};
            Ye.current = ie, queueMicrotask((() => {
              if (Ye.current !== ie) return;
              const He = Promise.all(Me.v.map((ie => ee.untilDrawn(ie)))).then((() => !0), (ee => (console.error("Failed to draw the character preview", ee), !1))),
                ye = new Promise((ee => {
                  setTimeout((() => {
                    ee(!1)
                  }), 1e4)
                }));
              Promise.race([He, ye]).then((He => {
                var ye;
                We.current !== ee || Ye.current !== ie || Ve.current || (Ve.current = !0, null === (ye = Ae.current) || void 0 === ye || ye.call(Ae, He))
              }))
            }))
          }), []);
        return (0, ye.useImperativeHandle)(ie, (() => {
          const ee = (ee, ie) => {
            var He;
            (te.current[ee] = ie, null !== pe && void 0 !== pe && pe[ee]) || (null === (He = We.current) || void 0 === He || He.setCosmetic(ee, ie), ce())
          };
          return {
            updateCosmetic: ee,
            setAllCosmetics(ie) {
              for (const ye of Me.v) {
                var He;
                ee(ye, null !== (He = ie[ye]) && void 0 !== He ? He : (0, Ke.e)(ye))
              }
            },
            isReady() {
              var ee, ie;
              return null !== (ee = null === (ie = We.current) || void 0 === ie ? void 0 : ie.isReady()) && void 0 !== ee && ee
            },
            resetCamera() {
              var ee;
              null === (ee = We.current) || void 0 === ee || ee.resetCamera()
            },
            setOrbit(ee) {
              var ie;
              null === (ie = We.current) || void 0 === ie || ie.setOrbit(ee)
            },
            turnCamera(ee) {
              var ie;
              const He = Ue.e[Re];
              null === (ie = We.current) || void 0 === ie || ie.setOrbit({
                ...He,
                yaw: He.yaw + ee
              })
            },
            async ensureReadyForCapture(ee) {
              var ie;
              await (null === (ie = We.current) || void 0 === ie ? void 0 : ie.untilDrawn(ee))
            },
            getDevTools() {
              var ee;
              return null !== (ee = We.current) && void 0 !== ee && ee.isReady() ? We.current.dev : null
            }
          }
        }), [pe, Re, ce]), (0, ye.useEffect)((() => {
          const ee = Fe.b.register(oe),
            ie = Ue.i.openCharacter(ge.current, Re);
          We.current = ie, fe = ie;
          let He = !0;
          return ie.ready.then((() => {
            He && (De(!0), Pe.current())
          })).catch((ee => {
            console.error("Failed to set up the character preview", ee)
          })), () => {
            He = !1, ee(), fe === ie && (ie.resetCamera(), fe = null), ie.close(), We.current = null
          }
        }), []), (0, ye.useEffect)((() => {
          Oe <= 0 || de <= 0 || We.current.resize(Oe, de)
        }), [Oe, de]), (0, ye.useEffect)((() => {
          if (!we) return;
          const ee = Ze.current;
          for (const ie of Me.v) {
            const He = null === pe || void 0 === pe ? void 0 : pe[ie],
              ye = ee[ie];
            He && He !== ye ? We.current.setCosmetic(ie, He) : !He && ye && te.current[ie] && We.current.setCosmetic(ie, te.current[ie])
          }
          Ze.current = {
            ...pe
          }, ae.current = !0, ce()
        }), [pe, we, ce]), (0, ye.useEffect)((() => {
          we && We.current.playEmote(null !== Xe && void 0 !== Xe ? Xe : null)
        }), [Xe, ze, we]), (0, ye.useEffect)((() => {
          if (!we || null === Be) return;
          const ee = We.current,
            {
              pitch: ie,
              radius: He
            } = Ue.e[Re];
          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return ee.setOrbit({
            yaw: Be + Te,
            pitch: ie,
            radius: He
          }), () => {
            fe === ee && ee.resetCamera()
          };
          const ye = performance.now();
          let be = 0;
          const Me = Ke => {
            ee.setOrbit({
              yaw: Be + (Ke - ye) / 6e3 * 2 * Math.PI,
              pitch: ie,
              radius: He
            }), be = requestAnimationFrame(Me)
          };
          return be = requestAnimationFrame(Me), () => {
            cancelAnimationFrame(be), fe === ee && ee.resetCamera()
          }
        }), [we, Be]), (0, ke.jsxs)(ke.Fragment, {
          children: [(0, ke.jsx)("div", {
            className: "CharCustomisationPreview",
            ref: ge
          }), Ee && (0, ke.jsx)(qe, {
            nametag: Ee
          })]
        })
      })))
  },
  37049: (ee, ie, He) => {
    function ye(ee, ie, He) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(ee, ie).getContext("2d", He);
      const ye = document.createElement("canvas");
      return ye.width = ee, ye.height = ie, ye.getContext("2d", He)
    }

    function be(ee, ie) {
      return ee.getContext("2d", ie)
    }
    He.d(ie, {
      c: () => be,
      f: () => ye
    })
  },
  37090: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Fe,
      j: () => Ue,
      n: () => Je
    });
    var ye = He(1992);
    let be = null,
      Me = 0;
    const Ke = new Set;

    function Ue() {
      return be
    }

    function Fe() {
      return Me
    }

    function Je(ee) {
      be = ee, Me++, (0, ye.d)();
      for (const ie of Ke) ie()
    }

    function oe(ee) {
      Ke.add(ee)
    }
  },
  37102: (ee, ie, He) => {
    function ye() {
      return He(37108)
    }

    function be() {
      return He(37116)
    }

    function Me(ee) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(ee)
    }
    He.d(ie, {
      b: () => Me,
      e: () => ye,
      h: () => be
    })
  },
  37108: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37116: (ee, ie, He) => {
    ee.exports = He.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);