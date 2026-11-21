export const id = 121;
export const ids = [121];
export const modules = {
  6362: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => zQ
    });
    var LQ = wQ(53),
      qQ = wQ(1515),
      oQ = wQ(1070),
      DQ = wQ.n(oQ),
      kQ = wQ(307),
      vQ = wQ(6374),
      mQ = wQ(1079),
      uQ = wQ(1503),
      HQ = wQ(4409),
      bQ = wQ(1451),
      YQ = wQ(3029),
      xQ = wQ(4415),
      AQ = wQ(1682),
      tQ = wQ(4400),
      eQ = wQ(1140),
      MQ = wQ(17),
      GQ = wQ(1489),
      pQ = wQ(1213),
      cQ = wQ(96),
      CQ = wQ(1207),
      SQ = wQ(1348),
      iQ = wQ(1237),
      WQ = wQ(6371),
      RQ = wQ(6377),
      OQ = wQ(1107);

    function sQ(QQ) {
      let {
        pack: FQ,
        view: wQ,
        favourite: LQ,
        notice: qQ
      } = QQ;
      const {
        width: oQ,
        height: kQ
      } = vQ.t.thumb, {
        live: HQ
      } = FQ;
      return (0, OQ.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, OQ.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, OQ.jsxs)(uQ.LinkPreserveSearch, {
            to: (0, WQ.Z)(FQ.packId),
            className: "ShaderPackCardLink",
            children: [HQ && (0, OQ.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, vQ.u)(pQ.clientSideServerUrls.s3Url, HQ, wQ, "thumb"),
              width: oQ,
              height: kQ,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), HQ && (0, OQ.jsx)(RQ.c, {
              item: HQ
            }), !HQ && (0, OQ.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, OQ.jsx)(mQ.c, {
                name: "hourglass"
              })
            }), (0, OQ.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [qQ && (0, OQ.jsx)("div", {
                className: DQ()("ShaderPackCardNotice", {
                  Warning: "warning" === qQ.tone
                }),
                children: qQ.text
              }), (0, OQ.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: FQ.name
              })]
            })]
          }), HQ && (0, OQ.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, OQ.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, OQ.jsx)(mQ.c, {
                name: "download"
              }), (0, iQ.W)(HQ.downloads)]
            }), LQ && (0, OQ.jsx)(bQ.w, {
              onClick: LQ.onToggle,
              isLiked: !0 === LQ.isFavourite,
              isLoading: null === LQ.isFavourite
            })]
          })]
        })
      })
    }
    var rQ = wQ(6382);

    function IQ(QQ) {
      let {
        results: FQ,
        loading: wQ,
        failed: LQ,
        onRetry: qQ,
        view: oQ,
        previewView: kQ
      } = QQ;
      const {
        t: vQ
      } = (0, CQ.y)(), mQ = (0, rQ.j)(), uQ = Date.now(), HQ = null === FQ ? 0 : "owned" === FQ.kind ? FQ.packs.length : FQ.page.results.length;
      return (0, OQ.jsxs)("div", {
        className: DQ()("ShaderPackBrowseResults", {
          Loading: wQ && null !== FQ
        }),
        children: [wQ && null === FQ && (0, OQ.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, OQ.jsx)(SQ.c, {})
        }), LQ && (0, OQ.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [vQ("shaderPackListing:loadFailed"), (0, OQ.jsx)(bQ.f, {
            onClick: qQ,
            children: vQ("general:tryAgain")
          })]
        }), "listing" === (null === FQ || void 0 === FQ ? void 0 : FQ.kind) && HQ > 0 && (0, OQ.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: FQ.page.results.map((QQ => (0, OQ.jsx)(sQ, {
            pack: {
              packId: QQ.packId,
              name: QQ.name,
              live: QQ
            },
            view: kQ,
            favourite: {
              isFavourite: mQ.isFavourite(QQ.packId),
              onToggle: () => {
                mQ.toggle(QQ.packId)
              }
            }
          }, QQ.packId)))
        }), "owned" === (null === FQ || void 0 === FQ ? void 0 : FQ.kind) && HQ > 0 && (0, OQ.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: FQ.packs.map((QQ => {
            var FQ;
            return (0, OQ.jsx)(sQ, {
              pack: QQ,
              view: kQ,
              notice: QQ.owner ? (0, WQ.Y)(QQ.owner, !(null === (FQ = QQ.live) || void 0 === FQ || !FQ.renderId), uQ, vQ)[0] : void 0
            }, QQ.packId)
          }))
        }), null !== FQ && 0 === HQ && (0, OQ.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: vQ(UQ(oQ))
        })]
      })
    }

    function UQ(QQ) {
      return "mine" === QQ.section ? "shaderPackListing:noOwnPacks" : (0, WQ.x)(QQ) ? "general:noResults" : "favourites" === QQ.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var NQ = wQ(6388);
    const TQ = 24,
      KQ = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function zQ() {
      var QQ, FQ, wQ, oQ;
      const {
        t: SQ
      } = (0, CQ.y)(), iQ = (0, uQ.useNavigatePreserveSearch)(), RQ = (0, qQ.r)(), {
        userContext: sQ,
        isUserContextUpdating: UQ
      } = (0, eQ.e)(), [zQ, lQ] = (0, rQ.g)(), [jQ, aQ] = (0, rQ.e)(), XQ = (0, LQ.useRef)(!1), [fQ, VQ] = (0, HQ.k)(), hQ = (0, WQ.G)(fQ), [JQ, EQ] = (0, LQ.useState)(null !== (QQ = hQ.searchQuery) && void 0 !== QQ ? QQ : ""), nQ = (0, LQ.useRef)(null), {
        searchQuery: gQ
      } = hQ;
      (0, LQ.useEffect)((() => {
        EQ(null !== gQ && void 0 !== gQ ? gQ : ""), nQ.current && (nQ.current.value = null !== gQ && void 0 !== gQ ? gQ : "")
      }), [gQ]);
      const [PQ, ZQ] = (0, LQ.useState)(null), [yQ, BQ] = (0, LQ.useState)(!1), [dQ, QF] = (0, LQ.useState)(!1), [FF, wF] = (0, LQ.useState)(0), LF = (0, LQ.useRef)(0), qF = JSON.stringify(hQ), oF = (0, WQ.p)();

      function DF() {
        null !== oF ? (iQ(oF), MQ.c.set({
          openEverythingMenuName: kQ.n.SETTINGS,
          openSettingsCategory: "JY"
        })) : iQ("/")
      }

      function kF(QQ) {
        VQ((FQ => {
          (0, WQ.mb)(FQ, {
            ...hQ,
            pageNumber: 1,
            ...QQ
          })
        }))
      }

      function vF() {
        const QQ = JQ.trim() || null;
        kF({
          searchQuery: QQ,
          ...null !== QQ && !XQ.current && (0, WQ.q)(hQ) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, tQ.c)(DF), (0, rQ.d)(), (0, LQ.useEffect)((() => {
        if (UQ) return;
        const QQ = ++LF.current,
          FQ = JSON.parse(qF);
        BQ(!0), QF(!1), async function(QQ) {
          if ("mine" === QQ.section) return {
            kind: "owned",
            packs: await GQ.b.getOwnedShaderPacks(sQ)
          };
          const FQ = "favourites" === QQ.section,
            wQ = FQ && (0, WQ.q)(QQ),
            LQ = await GQ.b.getShaderPacks(sQ, {
              sort: FQ ? WQ.g : QQ.sort,
              features: wQ ? [] : QQ.withFeatures,
              withoutFeatures: wQ ? [] : QQ.withoutFeatures,
              searchQuery: QQ.searchQuery,
              pageNumber: QQ.pageNumber,
              pageSize: TQ,
              onlyFavourites: FQ,
              banned: (0, WQ.u)(sQ) ? (0, WQ.d)(QQ.banned) : void 0
            });
          return {
            kind: "listing",
            page: LQ
          }
        }(FQ).then((FQ => {
          LF.current === QQ && ZQ(FQ)
        })).catch((FQ => {
          LF.current === QQ && (console.error("Failed to get shader packs", FQ), ZQ(null), QF(!0))
        })).finally((() => {
          LF.current === QQ && BQ(!1)
        }))
      }), [qF, sQ, UQ, FF]);
      const [mF, uF] = (0, LQ.useState)(null), HF = null !== (wQ = null === (oQ = ("listing" === (null === PQ || void 0 === PQ ? void 0 : PQ.kind) ? PQ.page.results : (null !== (FQ = null === PQ || void 0 === PQ ? void 0 : PQ.packs) && void 0 !== FQ ? FQ : []).flatMap((QQ => QQ.live ? [QQ.live] : [])))[0]) || void 0 === oQ ? void 0 : oQ.baselineVersion) && void 0 !== wQ ? wQ : null;
      (0, LQ.useEffect)((() => {
        null !== HF && uF(HF)
      }), [HF]);
      const bF = "mine" === hQ.section,
        YF = (0, WQ.u)(sQ),
        xF = QQ => {
          "explore" !== hQ.section && (QQ.stopPropagation(), QQ.preventDefault(), kF({
            section: "explore"
          }))
        };
      return (0, OQ.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, OQ.jsx)(bQ.b, {
          onClick: DF,
          children: SQ(null === oF ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, OQ.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, OQ.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, OQ.jsx)("h1", {
              className: "VisuallyHidden",
              children: SQ("shaderPackListing:title")
            }), (0, OQ.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, OQ.jsx)("div", {
                className: DQ()("ShaderPackBrowseSort", {
                  Active: "explore" === hQ.section
                }),
                onMouseDownCapture: xF,
                onTouchEndCapture: xF,
                children: (0, OQ.jsx)(YQ.d, {
                  options: vQ.x.map((QQ => ({
                    value: QQ,
                    label: SQ(WQ.fb[QQ])
                  }))),
                  value: hQ.sort,
                  onChange: QQ => {
                    kF({
                      section: "explore",
                      sort: QQ.value
                    })
                  }
                })
              }), Object.keys(KQ).map((QQ => (0, OQ.jsx)(bQ.L, {
                active: hQ.section === QQ,
                onClick: () => {
                  kF({
                    section: QQ
                  })
                },
                children: SQ(KQ[QQ])
              }, QQ)))]
            }), !bF && (0, OQ.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !bF && (0, OQ.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, OQ.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, OQ.jsx)(mQ.c, {
                  name: "magnifying-glass"
                })
              }), (0, OQ.jsx)(AQ.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: SQ("shaderPackListing:searchPlaceholder"),
                maxLength: vQ.I,
                defaultValue: JQ,
                domRef: nQ,
                onValueChange: EQ,
                onEnter: vF
              }), (0, OQ.jsx)(bQ.f, {
                onClick: vF,
                children: SQ("general:search")
              })]
            }), !bF && (0, OQ.jsxs)(bQ.L, {
              className: DQ()("ShaderPackBrowseFilterToggle", {
                Open: jQ
              }),
              pressed: jQ,
              onClick: () => {
                aQ(!jQ)
              },
              children: [SQ("shaderPackListing:filter"), " ", (0, OQ.jsx)(mQ.c, {
                name: jQ ? "angle-up" : "angle-down"
              })]
            }), (0, OQ.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), cQ.featureFlags.settings.canUseShaderPacks && (0, OQ.jsxs)(bQ.m, {
              onClick: () => {
                iQ(WQ.bb)
              },
              children: [(0, OQ.jsx)(mQ.c, {
                name: "upload"
              }), " ", SQ("shaderPackListing:publish")]
            })]
          }), !bF && jQ && (0, OQ.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [WQ.A.map((QQ => {
              const FQ = (0, WQ.j)(hQ, QQ),
                wQ = SQ(WQ.N[QQ]);
              return (0, OQ.jsx)(bQ.L, {
                className: DQ()("ShaderPackBrowseFeature", {
                  Without: "without" === FQ
                }),
                active: "with" === FQ,
                pressed: null !== FQ,
                onClick: () => {
                  XQ.current = !0, kF((0, WQ.jb)(hQ, QQ))
                },
                children: (0, OQ.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, OQ.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, OQ.jsx)(mQ.c, {
                      name: "check"
                    }), " ", wQ]
                  }), (0, OQ.jsxs)("span", {
                    children: [null !== FQ && (0, OQ.jsx)(mQ.c, {
                      name: "with" === FQ ? "check" : "xmark"
                    }), " ", wQ]
                  })]
                })
              }, QQ)
            })), YF && (0, OQ.jsx)(bQ.L, {
              className: DQ()("ShaderPackBrowseFeature", {
                Without: "without" === hQ.banned
              }),
              active: "with" === hQ.banned,
              pressed: null !== hQ.banned,
              onClick: () => {
                const QQ = "without" === hQ.banned && !XQ.current && (0, WQ.q)(hQ);
                kF({
                  banned: (0, WQ.C)(hQ.banned),
                  ...QQ && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, OQ.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, OQ.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, OQ.jsx)(mQ.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, OQ.jsxs)("span", {
                  children: [null !== hQ.banned && (0, OQ.jsx)(mQ.c, {
                    name: "with" === hQ.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!bF || null !== mF) && (0, OQ.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, OQ.jsx)(NQ.b, {
            selected: zQ,
            onSelect: lQ,
            imageUrl: QQ => null === mF ? null : (0, vQ.n)(pQ.clientSideServerUrls.s3Url, mF, QQ, "thumb")
          })
        }), (0, OQ.jsx)(IQ, {
          results: PQ,
          loading: yQ,
          failed: dQ,
          onRetry: () => {
            wF((QQ => QQ + 1))
          },
          view: hQ,
          previewView: zQ
        }), "listing" === (null === PQ || void 0 === PQ ? void 0 : PQ.kind) && (0, OQ.jsx)(xQ.e, {
          className: "ShaderPackBrowsePagination",
          page: PQ.page.pageNumber,
          totalPages: PQ.page.totalPages,
          onSetPage: QQ => {
            VQ((FQ => {
              (0, HQ.i)(FQ, QQ)
            }))
          },
          getPageHref: function(QQ) {
            const FQ = new URLSearchParams(fQ);
            (0, HQ.i)(FQ, QQ);
            const wQ = FQ.toString();
            return wQ ? `${RQ.pathname}?${wQ}` : RQ.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);