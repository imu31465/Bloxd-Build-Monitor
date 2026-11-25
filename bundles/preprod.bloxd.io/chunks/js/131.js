export const id = 131;
export const ids = [131];
export const modules = {
  6944: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => uQ
    });
    var wQ = XQ(61),
      qQ = XQ(1581),
      TQ = XQ(1081),
      zQ = XQ.n(TQ),
      sQ = XQ(382),
      FQ = XQ(6952),
      PQ = XQ(1094),
      gQ = XQ(1567),
      JQ = XQ(4879),
      rQ = XQ(1507),
      IQ = XQ(3398),
      jQ = XQ(4882),
      BQ = XQ(1739),
      yQ = XQ(4875),
      VQ = XQ(1162),
      DQ = XQ(26),
      pQ = XQ(1548),
      GQ = XQ(1238),
      UQ = XQ(105),
      bQ = XQ(1226),
      vQ = XQ(1391),
      dQ = XQ(1257),
      HQ = XQ(6946),
      aQ = XQ(6954),
      lQ = XQ(1145);

    function hQ(QQ) {
      let {
        pack: WQ,
        view: XQ,
        favourite: wQ,
        notice: qQ
      } = QQ;
      const {
        width: TQ,
        height: sQ
      } = FQ.p.thumb, {
        live: JQ
      } = WQ;
      return (0, lQ.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, lQ.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, lQ.jsxs)(gQ.LinkPreserveSearch, {
            to: (0, HQ.V)(WQ.packId),
            className: "ShaderPackCardLink",
            children: [JQ && (0, lQ.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, FQ.r)(GQ.clientSideServerUrls.s3Url, JQ, XQ, "thumb"),
              width: TQ,
              height: sQ,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), JQ && (0, lQ.jsx)(aQ.d, {
              item: JQ
            }), !JQ && (0, lQ.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, lQ.jsx)(PQ.d, {
                name: "hourglass"
              })
            }), (0, lQ.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [qQ && (0, lQ.jsx)("div", {
                className: zQ()("ShaderPackCardNotice", {
                  Warning: "warning" === qQ.tone
                }),
                children: qQ.text
              }), (0, lQ.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: WQ.name
              })]
            })]
          }), JQ && (0, lQ.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, lQ.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, lQ.jsx)(PQ.d, {
                name: "download"
              }), (0, dQ.O)(JQ.downloads)]
            }), wQ && (0, lQ.jsx)(rQ.C, {
              onClick: wQ.onToggle,
              isLiked: !0 === wQ.isFavourite,
              isLoading: null === wQ.isFavourite
            })]
          })]
        })
      })
    }
    var iQ = XQ(6957);

    function cQ(QQ) {
      let {
        results: WQ,
        loading: XQ,
        failed: wQ,
        onRetry: qQ,
        view: TQ,
        previewView: sQ
      } = QQ;
      const {
        t: FQ
      } = (0, bQ.C)(), PQ = (0, iQ.m)(), gQ = Date.now(), JQ = null === WQ ? 0 : "owned" === WQ.kind ? WQ.packs.length : WQ.page.results.length;
      return (0, lQ.jsxs)("div", {
        className: zQ()("ShaderPackBrowseResults", {
          Loading: XQ && null !== WQ
        }),
        children: [XQ && null === WQ && (0, lQ.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, lQ.jsx)(vQ.e, {})
        }), wQ && (0, lQ.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [FQ("shaderPackListing:loadFailed"), (0, lQ.jsx)(rQ.h, {
            onClick: qQ,
            children: FQ("general:tryAgain")
          })]
        }), "listing" === (null === WQ || void 0 === WQ ? void 0 : WQ.kind) && JQ > 0 && (0, lQ.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: WQ.page.results.map((QQ => (0, lQ.jsx)(hQ, {
            pack: {
              packId: QQ.packId,
              name: QQ.name,
              live: QQ
            },
            view: sQ,
            favourite: {
              isFavourite: PQ.isFavourite(QQ.packId),
              onToggle: () => {
                PQ.toggle(QQ.packId)
              }
            }
          }, QQ.packId)))
        }), "owned" === (null === WQ || void 0 === WQ ? void 0 : WQ.kind) && JQ > 0 && (0, lQ.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: WQ.packs.map((QQ => {
            var WQ;
            return (0, lQ.jsx)(hQ, {
              pack: QQ,
              view: sQ,
              notice: QQ.owner ? (0, HQ.S)(QQ.owner, !(null === (WQ = QQ.live) || void 0 === WQ || !WQ.renderId), gQ, FQ)[0] : void 0
            }, QQ.packId)
          }))
        }), null !== WQ && 0 === JQ && (0, lQ.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: FQ(AQ(TQ))
        })]
      })
    }

    function AQ(QQ) {
      return "mine" === QQ.section ? "shaderPackListing:noOwnPacks" : (0, HQ.v)(QQ) ? "general:noResults" : "favourites" === QQ.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var RQ = XQ(6964);
    const EQ = 24,
      CQ = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function uQ() {
      var QQ, WQ, XQ, TQ;
      const {
        t: vQ
      } = (0, bQ.C)(), dQ = (0, gQ.useNavigatePreserveSearch)(), aQ = (0, qQ.w)(), {
        userContext: hQ,
        isUserContextUpdating: AQ
      } = (0, VQ.c)(), [uQ, LQ] = (0, iQ.j)(), [kQ, fQ] = (0, iQ.g)(), SQ = (0, wQ.useRef)(!1), [tQ, oQ] = (0, JQ.p)(), eQ = (0, HQ.D)(tQ), [nQ, xQ] = (0, wQ.useState)(null !== (QQ = eQ.searchQuery) && void 0 !== QQ ? QQ : ""), YQ = (0, wQ.useRef)(null), {
        searchQuery: NQ
      } = eQ;
      (0, wQ.useEffect)((() => {
        xQ(null !== NQ && void 0 !== NQ ? NQ : ""), YQ.current && (YQ.current.value = null !== NQ && void 0 !== NQ ? NQ : "")
      }), [NQ]);
      const [ZQ, OQ] = (0, wQ.useState)(null), [KQ, mQ] = (0, wQ.useState)(!1), [MQ, QW] = (0, wQ.useState)(!1), [WW, XW] = (0, wQ.useState)(0), wW = (0, wQ.useRef)(0), qW = JSON.stringify(eQ), TW = (0, HQ.m)();

      function zW() {
        null !== TW ? (dQ(TW), DQ.b.set({
          openEverythingMenuName: sQ.r.SETTINGS,
          openSettingsCategory: "xI"
        })) : dQ("/")
      }

      function sW(QQ) {
        oQ((WQ => {
          (0, HQ.hb)(WQ, {
            ...eQ,
            pageNumber: 1,
            ...QQ
          })
        }))
      }

      function FW() {
        const QQ = nQ.trim() || null;
        sW({
          searchQuery: QQ,
          ...null !== QQ && !SQ.current && (0, HQ.q)(eQ) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, yQ.b)(zW), (0, iQ.c)(), (0, wQ.useEffect)((() => {
        if (AQ) return;
        const QQ = ++wW.current,
          WQ = JSON.parse(qW);
        mQ(!0), QW(!1), async function(QQ) {
          if ("mine" === QQ.section) return {
            kind: "owned",
            packs: await pQ.e.getOwnedShaderPacks(hQ)
          };
          const WQ = "favourites" === QQ.section,
            XQ = WQ && (0, HQ.q)(QQ),
            wQ = await pQ.e.getShaderPacks(hQ, {
              sort: WQ ? HQ.f : QQ.sort,
              features: XQ ? [] : QQ.withFeatures,
              withoutFeatures: XQ ? [] : QQ.withoutFeatures,
              searchQuery: QQ.searchQuery,
              pageNumber: QQ.pageNumber,
              pageSize: EQ,
              onlyFavourites: WQ,
              banned: (0, HQ.s)(hQ) ? (0, HQ.d)(QQ.banned) : void 0
            });
          return {
            kind: "listing",
            page: wQ
          }
        }(WQ).then((WQ => {
          wW.current === QQ && OQ(WQ)
        })).catch((WQ => {
          wW.current === QQ && (console.error("Failed to get shader packs", WQ), OQ(null), QW(!0))
        })).finally((() => {
          wW.current === QQ && mQ(!1)
        }))
      }), [qW, hQ, AQ, WW]);
      const [PW, gW] = (0, wQ.useState)(null), JW = null !== (XQ = null === (TQ = ("listing" === (null === ZQ || void 0 === ZQ ? void 0 : ZQ.kind) ? ZQ.page.results : (null !== (WQ = null === ZQ || void 0 === ZQ ? void 0 : ZQ.packs) && void 0 !== WQ ? WQ : []).flatMap((QQ => QQ.live ? [QQ.live] : [])))[0]) || void 0 === TQ ? void 0 : TQ.baselineVersion) && void 0 !== XQ ? XQ : null;
      (0, wQ.useEffect)((() => {
        null !== JW && gW(JW)
      }), [JW]);
      const rW = "mine" === eQ.section,
        IW = (0, HQ.s)(hQ),
        jW = QQ => {
          "explore" !== eQ.section && (QQ.stopPropagation(), QQ.preventDefault(), sW({
            section: "explore"
          }))
        };
      return (0, lQ.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, lQ.jsx)(rQ.e, {
          onClick: zW,
          children: vQ(null === TW ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, lQ.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, lQ.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, lQ.jsx)("h1", {
              className: "VisuallyHidden",
              children: vQ("shaderPackListing:title")
            }), (0, lQ.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, lQ.jsx)("div", {
                className: zQ()("ShaderPackBrowseSort", {
                  Active: "explore" === eQ.section
                }),
                onMouseDownCapture: jW,
                onTouchEndCapture: jW,
                children: (0, lQ.jsx)(IQ.c, {
                  options: FQ.u.map((QQ => ({
                    value: QQ,
                    label: vQ(HQ.$[QQ])
                  }))),
                  value: eQ.sort,
                  onChange: QQ => {
                    sW({
                      section: "explore",
                      sort: QQ.value
                    })
                  }
                })
              }), Object.keys(CQ).map((QQ => (0, lQ.jsx)(rQ.T, {
                active: eQ.section === QQ,
                onClick: () => {
                  sW({
                    section: QQ
                  })
                },
                children: vQ(CQ[QQ])
              }, QQ)))]
            }), !rW && (0, lQ.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !rW && (0, lQ.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, lQ.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, lQ.jsx)(PQ.d, {
                  name: "magnifying-glass"
                })
              }), (0, lQ.jsx)(BQ.e, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: vQ("shaderPackListing:searchPlaceholder"),
                maxLength: FQ.G,
                defaultValue: nQ,
                domRef: YQ,
                onValueChange: xQ,
                onEnter: FW
              }), (0, lQ.jsx)(rQ.h, {
                onClick: FW,
                children: vQ("general:search")
              })]
            }), !rW && (0, lQ.jsxs)(rQ.T, {
              className: zQ()("ShaderPackBrowseFilterToggle", {
                Open: kQ
              }),
              pressed: kQ,
              onClick: () => {
                fQ(!kQ)
              },
              children: [vQ("shaderPackListing:filter"), " ", (0, lQ.jsx)(PQ.d, {
                name: kQ ? "angle-up" : "angle-down"
              })]
            }), (0, lQ.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), UQ.featureFlags.settings.canUseShaderPacks && (0, lQ.jsxs)(rQ.s, {
              onClick: () => {
                dQ(HQ.Z)
              },
              children: [(0, lQ.jsx)(PQ.d, {
                name: "upload"
              }), " ", vQ("shaderPackListing:publish")]
            })]
          }), !rW && kQ && (0, lQ.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [HQ.A.map((QQ => {
              const WQ = (0, HQ.j)(eQ, QQ),
                XQ = vQ(HQ.I[QQ]);
              return (0, lQ.jsx)(rQ.T, {
                className: zQ()("ShaderPackBrowseFeature", {
                  Without: "without" === WQ
                }),
                active: "with" === WQ,
                pressed: null !== WQ,
                onClick: () => {
                  SQ.current = !0, sW((0, HQ.eb)(eQ, QQ))
                },
                children: (0, lQ.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, lQ.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, lQ.jsx)(PQ.d, {
                      name: "check"
                    }), " ", XQ]
                  }), (0, lQ.jsxs)("span", {
                    children: [null !== WQ && (0, lQ.jsx)(PQ.d, {
                      name: "with" === WQ ? "check" : "xmark"
                    }), " ", XQ]
                  })]
                })
              }, QQ)
            })), IW && (0, lQ.jsx)(rQ.T, {
              className: zQ()("ShaderPackBrowseFeature", {
                Without: "without" === eQ.banned
              }),
              active: "with" === eQ.banned,
              pressed: null !== eQ.banned,
              onClick: () => {
                const QQ = "without" === eQ.banned && !SQ.current && (0, HQ.q)(eQ);
                sW({
                  banned: (0, HQ.B)(eQ.banned),
                  ...QQ && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, lQ.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, lQ.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, lQ.jsx)(PQ.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, lQ.jsxs)("span", {
                  children: [null !== eQ.banned && (0, lQ.jsx)(PQ.d, {
                    name: "with" === eQ.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!rW || null !== PW) && (0, lQ.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, lQ.jsx)(RQ.e, {
            selected: uQ,
            onSelect: LQ,
            imageUrl: QQ => null === PW ? null : (0, FQ.m)(GQ.clientSideServerUrls.s3Url, PW, QQ, "thumb")
          })
        }), (0, lQ.jsx)(cQ, {
          results: ZQ,
          loading: KQ,
          failed: MQ,
          onRetry: () => {
            XW((QQ => QQ + 1))
          },
          view: eQ,
          previewView: uQ
        }), "listing" === (null === ZQ || void 0 === ZQ ? void 0 : ZQ.kind) && (0, lQ.jsx)(jQ.b, {
          className: "ShaderPackBrowsePagination",
          page: ZQ.page.pageNumber,
          totalPages: ZQ.page.totalPages,
          onSetPage: QQ => {
            oQ((WQ => {
              (0, JQ.m)(WQ, QQ)
            }))
          },
          getPageHref: function(QQ) {
            const WQ = new URLSearchParams(tQ);
            (0, JQ.m)(WQ, QQ);
            const XQ = WQ.toString();
            return XQ ? `${aQ.pathname}?${XQ}` : aQ.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);