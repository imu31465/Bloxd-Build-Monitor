export const id = 94;
export const ids = [94];
export const modules = {
  35187: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Py
    });
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(55),
      Zy = Wy(3771),
      cb = Wy(952);

    function Py(yb) {
      let {
        locked: bb,
        children: Wy
      } = yb;
      const Uy = (0, fy.useRef)(null),
        Py = (0, Zy.b)(Uy, "y");
      return (0, cb.jsx)("div", {
        ref: Uy,
        className: hy()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Py.before,
          CreateCustomLobbyBodyMoreBelow: Py.after
        }),
        "data-pad-ignore": bb || void 0,
        children: Wy
      })
    }
  },
  35239: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      showFirstWorldSetupPopup: () => sy
    });
    Wy(4152), Wy(35167);
    var Uy = Wy(3838),
      hy = Wy(55),
      fy = Wy(3788),
      Zy = Wy(1042),
      cb = Wy(1207),
      Py = Wy(35187),
      oy = Wy(1273),
      By = Wy(2793),
      Ky = Wy(35181),
      ey = Wy(3822),
      qb = Wy(952);

    function sy(yb) {
      const bb = {
        requested: !1,
        closed: !1
      };
      cb.NotificationProvider.showCustomPopup({
        body: Wy => (0, qb.jsx)(Sy, {
          flow: bb,
          close: Wy,
          ...yb
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          bb.closed = !0, bb.requested || (0, ey.c)()
        }
      })
    }

    function Sy(yb) {
      let {
        flow: bb,
        close: Wy,
        onCreating: cb,
        onCreated: sy,
        onFailedClosed: Sy,
        join: Ey
      } = yb;
      const {
        t: ly
      } = (0, Zy.D)(), [mb, Cy] = (0, hy.useState)(Uy.q), [Ty, Vy] = (0, hy.useState)(!1), [Jy, gb] = (0, hy.useState)(""), Gy = (0, By.d)();
      (0, hy.useEffect)((() => {
        (0, ey.m)()
      }), []);
      return (0, qb.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, qb.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, qb.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: ly("homePage:myWorld")
          })
        }), (0, qb.jsx)(Py.c, {
          locked: Ty,
          children: (0, qb.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, qb.jsx)(Ky.d, {
              value: mb.defaultGamemode,
              onChange: yb => {
                (0, Uy.s)(yb) && yb !== mb.defaultGamemode && ((0, ey.g)({
                  defaultGamemode: yb
                }), Cy({
                  ...mb,
                  defaultGamemode: yb
                }))
              },
              showAll: !1,
              disabled: Ty
            }), (0, qb.jsx)(Ky.f, {
              mapTypes: Uy.i,
              value: mb.mapType,
              onChange: yb => {
                (0, Uy.u)(yb) && yb !== mb.mapType && ((0, ey.g)({
                  mapType: yb
                }), Cy({
                  ...mb,
                  mapType: yb
                }))
              },
              showAll: !1,
              disabled: Ty
            })]
          })
        }), (0, qb.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, qb.jsx)(oy.i, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Ty,
            onClick: () => {
              bb.requested = !0, Vy(!0), cb(!0), gb(""), (0, ey.j)(mb), fy.c.createPersonalWorld(mb).then((yb => {
                cb(!1);
                const Uy = sy(yb);
                !bb.closed && Gy.current ? (Wy(), Ey(yb)) : Uy || (0, ey.c)()
              }), (yb => {
                if (console.error("Failed to create personal world:", yb), cb(!1), bb.requested = !1, bb.closed || !Gy.current) return (0, ey.c)(), void Sy(yb);
                gb(yb.message), Vy(!1)
              }))
            },
            children: ly("general:play")
          }), Jy && (0, qb.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: Jy
          })]
        })]
      })
    }
  },
  35181: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => oy,
      f: () => By
    });
    Wy(55);
    var Uy = Wy(898),
      hy = Wy.n(Uy),
      fy = Wy(3838),
      Zy = Wy(248),
      cb = Wy(1042),
      Py = Wy(952);

    function oy(yb) {
      let {
        value: bb,
        onChange: Wy,
        showAll: Uy,
        disabled: oy = !1
      } = yb;
      const {
        t: By
      } = (0, cb.D)();
      return (0, Py.jsxs)("div", {
        className: hy()("BloxdForm GamemodeForm", {
          BasicOptions: !Uy
        }),
        children: [(0, Py.jsx)("div", {
          className: "SectionTitle",
          children: By("classic:defaultGamemode")
        }), (0, Py.jsx)("div", {
          className: "SectionBody",
          children: fy.y.map((yb => Uy || (0, fy.s)(yb) ? (0, Py.jsx)("button", {
            type: "button",
            className: hy()("WorldGamemode", {
              Selected: bb === yb
            }),
            disabled: oy,
            onClick: () => {
              Wy(yb)
            },
            style: {
              "--background-image": `url(${Zy.u[yb]})`
            },
            children: Zy.q[yb]
          }, yb) : null))
        })]
      })
    }

    function By(yb) {
      let {
        mapTypes: bb,
        value: Wy,
        onChange: Uy,
        showAll: oy,
        disabled: By = !1,
        children: Ky
      } = yb;
      const {
        t: ey
      } = (0, cb.D)();
      return (0, Py.jsxs)("div", {
        className: hy()("BloxdForm MapTypeForm", {
          BasicOptions: !oy
        }),
        children: [(0, Py.jsx)("div", {
          className: "SectionTitle",
          children: ey("customLobby:mapType")
        }), (0, Py.jsx)("div", {
          className: "SectionBody",
          children: bb.map((yb => oy || (0, fy.u)(yb) ? (0, Py.jsx)("button", {
            type: "button",
            className: hy()("MapType", {
              Selected: Wy === yb
            }),
            disabled: By,
            onClick: () => {
              Uy(yb)
            },
            style: {
              "--background-image": `url(${Zy.n[yb]})`
            },
            children: Zy.k[yb]
          }, yb) : null))
        }), Ky]
      })
    }
  },
  4152: () => {},
  35167: () => {}
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);