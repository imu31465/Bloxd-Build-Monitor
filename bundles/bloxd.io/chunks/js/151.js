export const id = 151;
export const ids = [151];
export const modules = {
  7688: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => oR
    });
    var yR = GR(66),
      tR = GR(1677),
      uR = GR(1163),
      ZR = GR.n(uR),
      qR = GR(359),
      iR = GR(7702),
      fR = GR(1468),
      VR = GR(1663),
      KR = GR(5368),
      wR = GR(1590),
      rR = GR(4375),
      eR = GR(5375),
      aR = GR(1867),
      LR = GR(5361),
      nR = GR(1196),
      UR = GR(25),
      WR = GR(1647),
      AR = GR(1282),
      CR = GR(103),
      XR = GR(1270),
      MR = GR(1465),
      BR = GR(1317),
      lR = GR(7697),
      pR = GR(7709),
      gR = GR(1378);

    function bR(RR) {
      let {
        pack: JR,
        view: GR,
        favourite: yR,
        notice: tR
      } = RR;
      const {
        width: uR,
        height: qR
      } = iR.s.thumb, {
        live: KR
      } = JR;
      return (0, gR.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, gR.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, gR.jsxs)(VR.LinkPreserveSearch, {
            to: (0, lR.ab)(JR.packId),
            className: "ShaderPackCardLink",
            children: [KR && (0, gR.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, iR.u)(AR.clientSideServerUrls.s3Url, KR, GR, "thumb"),
              width: uR,
              height: qR,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), KR && (0, gR.jsx)(pR.d, {
              item: KR
            }), !KR && (0, gR.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, gR.jsx)(fR.d, {
                name: "hourglass"
              })
            }), (0, gR.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [tR && (0, gR.jsx)("div", {
                className: ZR()("ShaderPackCardNotice", {
                  Warning: "warning" === tR.tone
                }),
                children: tR.text
              }), (0, gR.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: JR.name
              })]
            })]
          }), KR && (0, gR.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, gR.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, gR.jsx)(fR.d, {
                name: "download"
              }), (0, BR.J)(KR.downloads)]
            }), yR && (0, gR.jsx)(wR.y, {
              onClick: yR.onToggle,
              isLiked: !0 === yR.isFavourite,
              isLoading: null === yR.isFavourite
            })]
          })]
        })
      })
    }
    var vR = GR(7714);

    function OR(RR) {
      let {
        results: JR,
        loading: GR,
        failed: yR,
        onRetry: tR,
        view: uR,
        previewView: qR
      } = RR;
      const {
        t: iR
      } = (0, XR.A)(), fR = (0, vR.k)(), VR = Date.now(), KR = null === JR ? 0 : "owned" === JR.kind ? JR.packs.length : JR.page.results.length;
      return (0, gR.jsxs)("div", {
        className: ZR()("ShaderPackBrowseResults", {
          Loading: GR && null !== JR
        }),
        children: [GR && null === JR && (0, gR.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, gR.jsx)(MR.d, {})
        }), yR && (0, gR.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [iR("shaderPackListing:loadFailed"), (0, gR.jsx)(wR.g, {
            onClick: tR,
            children: iR("general:tryAgain")
          })]
        }), "listing" === (null === JR || void 0 === JR ? void 0 : JR.kind) && KR > 0 && (0, gR.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: JR.page.results.map((RR => (0, gR.jsx)(bR, {
            pack: {
              packId: RR.packId,
              name: RR.name,
              live: RR
            },
            view: qR,
            favourite: {
              isFavourite: fR.isFavourite(RR.packId),
              onToggle: () => {
                fR.toggle(RR.packId)
              }
            }
          }, RR.packId)))
        }), "owned" === (null === JR || void 0 === JR ? void 0 : JR.kind) && KR > 0 && (0, gR.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: JR.packs.map((RR => {
            var JR;
            return (0, gR.jsx)(bR, {
              pack: RR,
              view: qR,
              notice: RR.owner ? (0, lR._)(RR.owner, !(null === (JR = RR.live) || void 0 === JR || !JR.renderId), VR, iR)[0] : void 0
            }, RR.packId)
          }))
        }), null !== JR && 0 === KR && (0, gR.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: iR(xR(uR))
        })]
      })
    }

    function xR(RR) {
      return "mine" === RR.section ? "shaderPackListing:noOwnPacks" : (0, lR.B)(RR) ? "general:noResults" : "favourites" === RR.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var NR = GR(7725);
    const DR = 24,
      HR = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function oR() {
      var RR, JR, GR, uR;
      const {
        t: MR
      } = (0, XR.A)(), BR = (0, VR.useNavigatePreserveSearch)(), pR = (0, tR.r)(), {
        userContext: bR,
        isUserContextUpdating: xR
      } = (0, nR.d)(), [oR, cR] = (0, vR.h)(), [PR, IR] = (0, vR.e)(), mR = (0, yR.useRef)(!1), [zR, SR] = (0, KR.o)(), jR = (0, lR.M)(zR), [dR, ER] = (0, yR.useState)(null !== (RR = jR.searchQuery) && void 0 !== RR ? RR : ""), YR = (0, yR.useRef)(null), {
        searchQuery: kR
      } = jR;
      (0, yR.useEffect)((() => {
        ER(null !== kR && void 0 !== kR ? kR : ""), YR.current && (YR.current.value = null !== kR && void 0 !== kR ? kR : "")
      }), [kR]);
      const [QR, FR] = (0, yR.useState)(null), [TR, sR] = (0, yR.useState)(!1), [hR, RJ] = (0, yR.useState)(!1), [JJ, GJ] = (0, yR.useState)(0), yJ = (0, yR.useRef)(0), tJ = JSON.stringify(jR), uJ = (0, lR.s)();

      function ZJ() {
        null !== uJ ? (BR(uJ), UR.d.set({
          openEverythingMenuName: qR.o.SETTINGS,
          openSettingsCategory: "Be"
        })) : BR("/")
      }

      function qJ(RR) {
        SR((JR => {
          (0, lR.kb)(JR, {
            ...jR,
            pageNumber: 1,
            ...RR
          })
        }))
      }

      function iJ() {
        const RR = dR.trim() || null;
        qJ({
          searchQuery: RR,
          ...null !== RR && !mR.current && (0, lR.u)(jR) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, LR.c)(ZJ), (0, vR.d)(), (0, yR.useEffect)((() => {
        if (xR) return;
        const RR = ++yJ.current,
          JR = JSON.parse(tJ);
        sR(!0), RJ(!1), async function(RR) {
          if ("mine" === RR.section) return {
            kind: "owned",
            packs: await WR.c.getOwnedShaderPacks(bR)
          };
          const JR = "favourites" === RR.section,
            GR = JR && (0, lR.u)(RR),
            yR = await WR.c.getShaderPacks(bR, {
              sort: JR ? lR.h : RR.sort,
              features: GR ? [] : RR.withFeatures,
              withoutFeatures: GR ? [] : RR.withoutFeatures,
              searchQuery: RR.searchQuery,
              pageNumber: RR.pageNumber,
              pageSize: DR,
              onlyFavourites: JR,
              banned: (0, lR.x)(bR) ? (0, lR.e)(RR.banned) : void 0
            });
          return {
            kind: "listing",
            page: yR
          }
        }(JR).then((JR => {
          yJ.current === RR && FR(JR)
        })).catch((JR => {
          yJ.current === RR && (console.error("Failed to get shader packs", JR), FR(null), RJ(!0))
        })).finally((() => {
          yJ.current === RR && sR(!1)
        }))
      }), [tJ, bR, xR, JJ]);
      const [fJ, VJ] = (0, yR.useState)(null), KJ = null !== (GR = null === (uR = ("listing" === (null === QR || void 0 === QR ? void 0 : QR.kind) ? QR.page.results : (null !== (JR = null === QR || void 0 === QR ? void 0 : QR.packs) && void 0 !== JR ? JR : []).flatMap((RR => RR.live ? [RR.live] : [])))[0]) || void 0 === uR ? void 0 : uR.baselineVersion) && void 0 !== GR ? GR : null;
      (0, yR.useEffect)((() => {
        null !== KJ && VJ(KJ)
      }), [KJ]);
      const wJ = "mine" === jR.section,
        rJ = (0, lR.x)(bR),
        eJ = RR => {
          "explore" !== jR.section && (RR.stopPropagation(), RR.preventDefault(), qJ({
            section: "explore"
          }))
        };
      return (0, gR.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, gR.jsx)(wR.d, {
          onClick: ZJ,
          children: MR(null === uJ ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, gR.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, gR.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, gR.jsx)("h1", {
              className: "VisuallyHidden",
              children: MR("shaderPackListing:title")
            }), (0, gR.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, gR.jsx)("div", {
                className: ZR()("ShaderPackBrowseSort", {
                  Active: "explore" === jR.section
                }),
                onMouseDownCapture: eJ,
                onTouchEndCapture: eJ,
                children: (0, gR.jsx)(rR.e, {
                  options: iR.v.map((RR => ({
                    value: RR,
                    label: MR(lR.db[RR])
                  }))),
                  value: jR.sort,
                  onChange: RR => {
                    qJ({
                      section: "explore",
                      sort: RR.value
                    })
                  }
                })
              }), Object.keys(HR).map((RR => (0, gR.jsx)(wR.U, {
                active: jR.section === RR,
                onClick: () => {
                  qJ({
                    section: RR
                  })
                },
                children: MR(HR[RR])
              }, RR)))]
            }), !wJ && (0, gR.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !wJ && (0, gR.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, gR.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, gR.jsx)(fR.d, {
                  name: "magnifying-glass"
                })
              }), (0, gR.jsx)(aR.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: MR("shaderPackListing:searchPlaceholder"),
                maxLength: iR.E,
                defaultValue: dR,
                domRef: YR,
                onValueChange: ER,
                onEnter: iJ
              }), (0, gR.jsx)(wR.g, {
                onClick: iJ,
                children: MR("general:search")
              })]
            }), !wJ && (0, gR.jsxs)(wR.U, {
              className: ZR()("ShaderPackBrowseFilterToggle", {
                Open: PR
              }),
              pressed: PR,
              onClick: () => {
                IR(!PR)
              },
              children: [MR("shaderPackListing:filter"), " ", (0, gR.jsx)(fR.d, {
                name: PR ? "angle-up" : "angle-down"
              })]
            }), (0, gR.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), CR.featureFlags.settings.canUseShaderPacks && (0, gR.jsxs)(wR.n, {
              onClick: () => {
                BR(lR.bb)
              },
              children: [(0, gR.jsx)(fR.d, {
                name: "upload"
              }), " ", MR("shaderPackListing:publish")]
            })]
          }), !wJ && PR && (0, gR.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [lR.I.map((RR => {
              const JR = (0, lR.l)(jR, RR),
                GR = MR(lR.T[RR]);
              return (0, gR.jsx)(wR.U, {
                className: ZR()("ShaderPackBrowseFeature", {
                  Without: "without" === JR
                }),
                active: "with" === JR,
                pressed: null !== JR,
                onClick: () => {
                  mR.current = !0, qJ((0, lR.jb)(jR, RR))
                },
                children: (0, gR.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, gR.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, gR.jsx)(fR.d, {
                      name: "check"
                    }), " ", GR]
                  }), (0, gR.jsxs)("span", {
                    children: [null !== JR && (0, gR.jsx)(fR.d, {
                      name: "with" === JR ? "check" : "xmark"
                    }), " ", GR]
                  })]
                })
              }, RR)
            })), rJ && (0, gR.jsx)(wR.U, {
              className: ZR()("ShaderPackBrowseFeature", {
                Without: "without" === jR.banned
              }),
              active: "with" === jR.banned,
              pressed: null !== jR.banned,
              onClick: () => {
                const RR = "without" === jR.banned && !mR.current && (0, lR.u)(jR);
                qJ({
                  banned: (0, lR.K)(jR.banned),
                  ...RR && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, gR.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, gR.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, gR.jsx)(fR.d, {
                    name: "check"
                  }), " BANNED"]
                }), (0, gR.jsxs)("span", {
                  children: [null !== jR.banned && (0, gR.jsx)(fR.d, {
                    name: "with" === jR.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!wJ || null !== fJ) && (0, gR.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, gR.jsx)(NR.e, {
            selected: oR,
            onSelect: cR,
            imageUrl: RR => null === fJ ? null : (0, iR.p)(AR.clientSideServerUrls.s3Url, fJ, RR, "thumb")
          })
        }), (0, gR.jsx)(OR, {
          results: QR,
          loading: TR,
          failed: hR,
          onRetry: () => {
            GJ((RR => RR + 1))
          },
          view: jR,
          previewView: oR
        }), "listing" === (null === QR || void 0 === QR ? void 0 : QR.kind) && (0, gR.jsx)(eR.c, {
          className: "ShaderPackBrowsePagination",
          page: QR.page.pageNumber,
          totalPages: QR.page.totalPages,
          onSetPage: RR => {
            SR((JR => {
              (0, KR.l)(JR, RR)
            }))
          },
          getPageHref: function(RR) {
            const JR = new URLSearchParams(zR);
            (0, KR.l)(JR, RR);
            const GR = JR.toString();
            return GR ? `${pR.pathname}?${GR}` : pR.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);