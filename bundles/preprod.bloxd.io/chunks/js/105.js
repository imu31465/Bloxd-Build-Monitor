export const id = 105;
export const ids = [105];
export const modules = {
  36428: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Aq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(57),
      mq = gq(4405),
      xq = gq(1070);

    function Aq(qq) {
      let {
        locked: Eq,
        children: gq
      } = qq;
      const Yq = (0, Oq.useRef)(null),
        Aq = (0, mq.c)(Yq, "y");
      return (0, xq.jsx)("div", {
        ref: Yq,
        className: lq()("CreateCustomLobbyBody", {
          CreateCustomLobbyBodyMoreAbove: Aq.before,
          CreateCustomLobbyBodyMoreBelow: Aq.after
        }),
        "data-pad-ignore": Eq || void 0,
        children: gq
      })
    }
  },
  36490: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      showFirstWorldSetupPopup: () => Vq
    });
    gq(4781), gq(36406);
    var Yq = gq(4456),
      lq = gq(57),
      Oq = gq(4413),
      mq = gq(1183),
      xq = gq(1336),
      Aq = gq(36428),
      cq = gq(4786),
      uq = gq(1422),
      Bq = gq(3369),
      Wq = gq(36424),
      Nq = gq(4443),
      aq = gq(1070);

    function Vq(qq) {
      const Eq = {
        requested: !1,
        closed: !1
      };
      xq.NotificationProvider.showCustomPopup({
        body: gq => (0, aq.jsx)(dq, {
          flow: Eq,
          close: gq,
          ...qq
        }),
        middleScreenPopupClassName: "CreateCustomLobbyPopup",
        onClose: () => {
          Eq.closed = !0, Eq.requested || (0, Nq.h)()
        }
      })
    }

    function dq(qq) {
      let {
        flow: Eq,
        close: gq,
        onCreating: xq,
        onCreated: Vq,
        onFailedClosed: dq,
        join: jq
      } = qq;
      const {
        t: Hq
      } = (0, mq.v)(), [oq, Pq] = (0, lq.useState)(Yq.u), [Qq, yq] = (0, lq.useState)(!1), [tq, rq] = (0, lq.useState)(""), vq = (0, Bq.c)();
      (0, lq.useEffect)((() => {
        (0, Nq.o)()
      }), []);
      const hq = qq => ({
        isEnabled: () => oq.plugins[qq],
        hG: Eq => {
          (0, Nq.l)({
            plugin: qq,
            enabled: Eq
          }), Pq({
            ...oq,
            plugins: {
              ...oq.plugins,
              [qq]: Eq
            }
          })
        }
      });
      return (0, aq.jsxs)("div", {
        className: "CreateCustomLobby",
        children: [(0, aq.jsx)("div", {
          className: "CreateCustomLobbyTitleContainer",
          children: (0, aq.jsx)("div", {
            className: "CreateCustomLobbyTitle",
            children: Hq("homePage:myWorld")
          })
        }), (0, aq.jsx)(Aq.c, {
          locked: Qq,
          children: (0, aq.jsxs)("div", {
            className: "CreateCustomLobbyFields",
            children: [(0, aq.jsx)(Wq.e, {
              value: oq.defaultGamemode,
              onChange: qq => {
                (0, Yq.w)(qq) && qq !== oq.defaultGamemode && ((0, Nq.l)({
                  defaultGamemode: qq
                }), Pq({
                  ...oq,
                  defaultGamemode: qq
                }))
              },
              showAll: !1,
              disabled: Qq
            }), (0, aq.jsx)(Wq.i, {
              mapTypes: Yq.h,
              value: oq.mapType,
              onChange: qq => {
                (0, Yq.x)(qq) && qq !== oq.mapType && ((0, Nq.l)({
                  mapType: qq
                }), Pq({
                  ...oq,
                  mapType: qq
                }))
              },
              showAll: !1,
              disabled: Qq
            }), (0, aq.jsx)(cq.e, {
              callbacks: {
                dayNight: hq("dayNight"),
                fallDamage: hq("fallDamage"),
                survivalGuns: hq("survivalGuns")
              },
              disabled: Qq,
              advancedMode: !1
            })]
          })
        }), (0, aq.jsxs)("div", {
          className: "CreateCustomLobbyFooter",
          children: [(0, aq.jsx)(uq.p, {
            className: "CreateCustomLobbyButton",
            padDefaultFocus: !0,
            loading: Qq,
            onClick: () => {
              Eq.requested = !0, yq(!0), xq(!0), rq(""), (0, Nq.n)(oq), Oq.d.createPersonalWorld(oq).then((qq => {
                xq(!1);
                const Yq = Vq(qq);
                !Eq.closed && vq.current ? (gq(), jq(qq)) : Yq || (0, Nq.h)()
              }), (qq => {
                if (console.error("Failed to create personal world:", qq), xq(!1), Eq.requested = !1, Eq.closed || !vq.current) return (0, Nq.h)(), void dq(qq);
                rq(qq.message), yq(!1)
              }))
            },
            children: Hq("general:play")
          }), tq && (0, aq.jsx)("div", {
            className: "CreateCustomLobbyError AnimFadeInScaleUp",
            children: tq
          })]
        })]
      })
    }
  },
  4786: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq
    });
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(4456),
      mq = gq(1183),
      xq = gq(1070);
    const Aq = [...Oq.i, "tpRequests", "spawnProtection", "spawnReset", "smpMarketplace"];

    function cq(qq) {
      const {
        disabled: Eq,
        hideWrapper: gq
      } = qq, {
        t: Yq
      } = (0, mq.v)(), cq = qq.advancedMode ? Aq.map((Eq => [Eq, qq.callbacks[Eq]])) : Oq.i.map((Eq => [Eq, qq.callbacks[Eq]])), Bq = (0, xq.jsx)("div", {
        className: lq()("PluginsGrid", {
          SectionBody: !gq
        }),
        children: cq.map((qq => {
          let [gq, Yq] = qq;
          return (0, xq.jsx)(uq, {
            plugin: gq,
            callbacks: Yq,
            disabled: Eq
          }, gq)
        }))
      });
      return gq ? Bq : (0, xq.jsxs)("div", {
        className: "BloxdForm",
        children: [(0, xq.jsx)("div", {
          className: "SectionTitle",
          children: Yq("worldBuilder:pluginsSection")
        }), Bq]
      })
    }

    function uq(qq) {
      let {
        plugin: Eq,
        callbacks: {
          isEnabled: gq,
          hG: Yq
        },
        disabled: Oq
      } = qq;
      const {
        t: Aq
      } = (0, mq.v)(), cq = gq();
      return (0, xq.jsxs)("div", {
        className: lq()("PluginCard", {
          PluginCardEnabled: cq,
          PluginCardDisabledForm: Oq
        }),
        "data-pad-focusable": !0,
        "aria-disabled": Oq || void 0,
        onClick: () => {
          Oq || Yq(!cq)
        },
        children: [(0, xq.jsx)("div", {
          className: "PluginCardIcon",
          children: (0, xq.jsx)("img", {
            src: `/textures/games/classic/customGames/${Eq}.png`,
            alt: Eq
          })
        }), (0, xq.jsxs)("div", {
          className: "PluginCardBody",
          children: [(0, xq.jsx)("div", {
            className: "PluginCardTitle",
            children: Aq(Bq[Eq])
          }), (0, xq.jsx)("div", {
            className: "PluginCardDescription",
            children: Aq(Wq[Eq])
          })]
        }), (0, xq.jsx)("span", {
          className: "PluginCardToggleLabel",
          children: Aq(cq ? "general:on" : "general:off")
        })]
      })
    }
    const Bq = {
        fallDamage: "classic:enableFallDamage",
        tpRequests: "classic:enableTpRequests",
        spawnProtection: "classic:enableSpawnProtection",
        spawnReset: "classic:enableSpawnReset",
        smpMarketplace: "classic:enableSmpMarketplace",
        survivalGuns: "classic:enableSurvivalGuns",
        dayNight: "classic:enableDayNight"
      },
      Wq = {
        fallDamage: "classic:enableFallDamageDescription",
        tpRequests: "classic:enableTpRequestsDescription",
        spawnProtection: "classic:enableSpawnProtectionDescription",
        spawnReset: "classic:enableSpawnResetDescription",
        smpMarketplace: "classic:enableSmpMarketplaceDescription",
        survivalGuns: "classic:enableSurvivalGunsDescription",
        dayNight: "classic:enableDayNightDescription"
      }
  },
  36424: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => cq,
      i: () => uq
    });
    gq(57);
    var Yq = gq(1018),
      lq = gq.n(Yq),
      Oq = gq(4456),
      mq = gq(296),
      xq = gq(1183),
      Aq = gq(1070);

    function cq(qq) {
      let {
        value: Eq,
        onChange: gq,
        showAll: Yq,
        disabled: cq = !1
      } = qq;
      const {
        t: uq
      } = (0, xq.v)();
      return (0, Aq.jsxs)("div", {
        className: lq()("BloxdForm GamemodeForm", {
          BasicOptions: !Yq
        }),
        children: [(0, Aq.jsx)("div", {
          className: "SectionTitle",
          children: uq("classic:defaultGamemode")
        }), (0, Aq.jsx)("div", {
          className: "SectionBody",
          children: Oq.A.map((qq => Yq || (0, Oq.w)(qq) ? (0, Aq.jsx)("button", {
            type: "button",
            className: lq()("WorldGamemode", {
              Selected: Eq === qq
            }),
            disabled: cq,
            onClick: () => {
              gq(qq)
            },
            style: {
              "--background-image": `url(${mq.v[qq]})`
            },
            children: mq.r[qq]
          }, qq) : null))
        })]
      })
    }

    function uq(qq) {
      let {
        mapTypes: Eq,
        value: gq,
        onChange: Yq,
        showAll: cq,
        disabled: uq = !1,
        children: Bq
      } = qq;
      const {
        t: Wq
      } = (0, xq.v)();
      return (0, Aq.jsxs)("div", {
        className: lq()("BloxdForm MapTypeForm", {
          BasicOptions: !cq
        }),
        children: [(0, Aq.jsx)("div", {
          className: "SectionTitle",
          children: Wq("customLobby:mapType")
        }), (0, Aq.jsx)("div", {
          className: "SectionBody",
          children: Eq.map((qq => cq || (0, Oq.x)(qq) ? (0, Aq.jsx)("button", {
            type: "button",
            className: lq()("MapType", {
              Selected: gq === qq
            }),
            disabled: uq,
            onClick: () => {
              Yq(qq)
            },
            style: {
              "--background-image": `url(${mq.o[qq]})`
            },
            children: mq.k[qq]
          }, qq) : null))
        }), Bq]
      })
    }
  },
  4781: () => {},
  36406: () => {}
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);