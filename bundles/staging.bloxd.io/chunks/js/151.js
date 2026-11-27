export const id = 151;
export const ids = [151];
export const modules = {
  7519: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => Cr
    });
    var Zr = Qr(72),
      Wr = Qr(1653),
      ar = Qr(1155),
      jr = Qr.n(ar),
      Ir = Qr(360),
      fr = Qr(7533),
      Er = Qr(1448),
      pr = Qr(1644),
      xr = Qr(5323),
      mr = Qr(1576),
      Nr = Qr(4323),
      Ur = Qr(5331),
      tr = Qr(1804),
      hr = Qr(5320),
      zr = Qr(1181),
      Yr = Qr(26),
      nr = Qr(1629),
      er = Qr(1262),
      Kr = Qr(109),
      yr = Qr(1251),
      Br = Qr(1444),
      Tr = Qr(1279),
      vr = Qr(7526),
      Or = Qr(7539),
      Lr = Qr(1338);

    function lr(rr) {
      let {
        pack: Sr,
        view: Qr,
        favourite: Zr,
        notice: Wr
      } = rr;
      const {
        width: ar,
        height: Ir
      } = fr.r.thumb, {
        live: xr
      } = Sr;
      return (0, Lr.jsx)("div", {
        className: "ShaderPackCard",
        children: (0, Lr.jsxs)("div", {
          className: "ShaderPackCardTile",
          children: [(0, Lr.jsxs)(pr.LinkPreserveSearch, {
            to: (0, vr._)(Sr.packId),
            className: "ShaderPackCardLink",
            children: [xr && (0, Lr.jsx)("img", {
              className: "ShaderPackCardImage",
              src: (0, fr.u)(er.clientSideServerUrls.s3Url, xr, Qr, "thumb"),
              width: ar,
              height: Ir,
              loading: "lazy",
              alt: "",
              draggable: !1
            }), xr && (0, Lr.jsx)(Or.d, {
              item: xr
            }), !xr && (0, Lr.jsx)("div", {
              className: "ShaderPackCardImage ShaderPackCardImagePending",
              children: (0, Lr.jsx)(Er.c, {
                name: "hourglass"
              })
            }), (0, Lr.jsxs)("div", {
              className: "ShaderPackCardText",
              children: [Wr && (0, Lr.jsx)("div", {
                className: jr()("ShaderPackCardNotice", {
                  Warning: "warning" === Wr.tone
                }),
                children: Wr.text
              }), (0, Lr.jsx)("div", {
                className: "ShaderPackCardName SmallTextBold",
                children: Sr.name
              })]
            })]
          }), xr && (0, Lr.jsxs)("div", {
            className: "ShaderPackCardStats",
            children: [(0, Lr.jsxs)("div", {
              className: "ShaderPackCardUses SmallTextBold",
              children: [(0, Lr.jsx)(Er.c, {
                name: "download"
              }), (0, Tr.S)(xr.downloads)]
            }), Zr && (0, Lr.jsx)(mr.w, {
              onClick: Zr.onToggle,
              isLiked: !0 === Zr.isFavourite,
              isLoading: null === Zr.isFavourite
            })]
          })]
        })
      })
    }
    var Xr = Qr(7541);

    function Pr(rr) {
      let {
        results: Sr,
        loading: Qr,
        failed: Zr,
        onRetry: Wr,
        view: ar,
        previewView: Ir
      } = rr;
      const {
        t: fr
      } = (0, yr.E)(), Er = (0, Xr.l)(), pr = Date.now(), xr = null === Sr ? 0 : "owned" === Sr.kind ? Sr.packs.length : Sr.page.results.length;
      return (0, Lr.jsxs)("div", {
        className: jr()("ShaderPackBrowseResults", {
          Loading: Qr && null !== Sr
        }),
        children: [Qr && null === Sr && (0, Lr.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: (0, Lr.jsx)(Br.c, {})
        }), Zr && (0, Lr.jsxs)("div", {
          className: "ShaderPackBrowseMessage",
          children: [fr("shaderPackListing:loadFailed"), (0, Lr.jsx)(mr.h, {
            onClick: Wr,
            children: fr("general:tryAgain")
          })]
        }), "listing" === (null === Sr || void 0 === Sr ? void 0 : Sr.kind) && xr > 0 && (0, Lr.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Sr.page.results.map((rr => (0, Lr.jsx)(lr, {
            pack: {
              packId: rr.packId,
              name: rr.name,
              live: rr
            },
            view: Ir,
            favourite: {
              isFavourite: Er.isFavourite(rr.packId),
              onToggle: () => {
                Er.toggle(rr.packId)
              }
            }
          }, rr.packId)))
        }), "owned" === (null === Sr || void 0 === Sr ? void 0 : Sr.kind) && xr > 0 && (0, Lr.jsx)("div", {
          className: "ShaderPackBrowseGrid",
          children: Sr.packs.map((rr => {
            var Sr;
            return (0, Lr.jsx)(lr, {
              pack: rr,
              view: Ir,
              notice: rr.owner ? (0, vr.Z)(rr.owner, !(null === (Sr = rr.live) || void 0 === Sr || !Sr.renderId), pr, fr)[0] : void 0
            }, rr.packId)
          }))
        }), null !== Sr && 0 === xr && (0, Lr.jsx)("div", {
          className: "ShaderPackBrowseMessage",
          children: fr(Hr(ar))
        })]
      })
    }

    function Hr(rr) {
      return "mine" === rr.section ? "shaderPackListing:noOwnPacks" : (0, vr.v)(rr) ? "general:noResults" : "favourites" === rr.section ? "shaderPackListing:noFavourites" : "general:noResults"
    }
    var qr = Qr(7554);
    const Rr = 24,
      gr = {
        favourites: "general:favourites",
        mine: "shaderPackListing:mine"
      };

    function Cr() {
      var rr, Sr, Qr, ar;
      const {
        t: Br
      } = (0, yr.E)(), Tr = (0, pr.useNavigatePreserveSearch)(), Or = (0, Wr.s)(), {
        userContext: lr,
        isUserContextUpdating: Hr
      } = (0, zr.c)(), [Cr, Mr] = (0, Xr.i)(), [Gr, kr] = (0, Xr.f)(), Ar = (0, Zr.useRef)(!1), [Vr, ir] = (0, xr.m)(), wr = (0, vr.F)(Vr), [cr, Fr] = (0, Zr.useState)(null !== (rr = wr.searchQuery) && void 0 !== rr ? rr : ""), or = (0, Zr.useRef)(null), {
        searchQuery: br
      } = wr;
      (0, Zr.useEffect)((() => {
        Fr(null !== br && void 0 !== br ? br : ""), or.current && (or.current.value = null !== br && void 0 !== br ? br : "")
      }), [br]);
      const [Jr, Dr] = (0, Zr.useState)(null), [dr, sr] = (0, Zr.useState)(!1), [ur, rS] = (0, Zr.useState)(!1), [SS, QS] = (0, Zr.useState)(0), ZS = (0, Zr.useRef)(0), WS = JSON.stringify(wr), aS = (0, vr.n)();

      function jS() {
        null !== aS ? (Tr(aS), Yr.c.set({
          openEverythingMenuName: Ir.q.SETTINGS,
          openSettingsCategory: "zU"
        })) : Tr("/")
      }

      function IS(rr) {
        ir((Sr => {
          (0, vr.kb)(Sr, {
            ...wr,
            pageNumber: 1,
            ...rr
          })
        }))
      }

      function fS() {
        const rr = cr.trim() || null;
        IS({
          searchQuery: rr,
          ...null !== rr && !Ar.current && (0, vr.p)(wr) && {
            withFeatures: [],
            withoutFeatures: []
          }
        })
      }(0, hr.e)(jS), (0, Xr.b)(), (0, Zr.useEffect)((() => {
        if (Hr) return;
        const rr = ++ZS.current,
          Sr = JSON.parse(WS);
        sr(!0), rS(!1), async function(rr) {
          if ("mine" === rr.section) return {
            kind: "owned",
            packs: await nr.c.getOwnedShaderPacks(lr)
          };
          const Sr = "favourites" === rr.section,
            Qr = Sr && (0, vr.p)(rr),
            Zr = await nr.c.getShaderPacks(lr, {
              sort: Sr ? vr.h : rr.sort,
              features: Qr ? [] : rr.withFeatures,
              withoutFeatures: Qr ? [] : rr.withoutFeatures,
              searchQuery: rr.searchQuery,
              pageNumber: rr.pageNumber,
              pageSize: Rr,
              onlyFavourites: Sr,
              banned: (0, vr.t)(lr) ? (0, vr.d)(rr.banned) : void 0
            });
          return {
            kind: "listing",
            page: Zr
          }
        }(Sr).then((Sr => {
          ZS.current === rr && Dr(Sr)
        })).catch((Sr => {
          ZS.current === rr && (console.error("Failed to get shader packs", Sr), Dr(null), rS(!0))
        })).finally((() => {
          ZS.current === rr && sr(!1)
        }))
      }), [WS, lr, Hr, SS]);
      const [ES, pS] = (0, Zr.useState)(null), xS = null !== (Qr = null === (ar = ("listing" === (null === Jr || void 0 === Jr ? void 0 : Jr.kind) ? Jr.page.results : (null !== (Sr = null === Jr || void 0 === Jr ? void 0 : Jr.packs) && void 0 !== Sr ? Sr : []).flatMap((rr => rr.live ? [rr.live] : [])))[0]) || void 0 === ar ? void 0 : ar.baselineVersion) && void 0 !== Qr ? Qr : null;
      (0, Zr.useEffect)((() => {
        null !== xS && pS(xS)
      }), [xS]);
      const mS = "mine" === wr.section,
        NS = (0, vr.t)(lr),
        US = rr => {
          "explore" !== wr.section && (rr.stopPropagation(), rr.preventDefault(), IS({
            section: "explore"
          }))
        };
      return (0, Lr.jsxs)("div", {
        className: "ShaderPackBrowse AnimFadeIn",
        children: [(0, Lr.jsx)(mr.d, {
          onClick: jS,
          children: Br(null === aS ? "homePage:backToGames" : "shaderPackListing:backToSettings")
        }), (0, Lr.jsxs)("div", {
          className: "ShaderPackBrowseHeader",
          children: [(0, Lr.jsxs)("div", {
            className: "ShaderPackBrowseHeaderRow",
            children: [(0, Lr.jsx)("h1", {
              className: "VisuallyHidden",
              children: Br("shaderPackListing:title")
            }), (0, Lr.jsxs)("div", {
              className: "ShaderPackBrowseTabs",
              children: [(0, Lr.jsx)("div", {
                className: jr()("ShaderPackBrowseSort", {
                  Active: "explore" === wr.section
                }),
                onMouseDownCapture: US,
                onTouchEndCapture: US,
                children: (0, Lr.jsx)(Nr.c, {
                  options: fr.w.map((rr => ({
                    value: rr,
                    label: Br(vr.cb[rr])
                  }))),
                  value: wr.sort,
                  onChange: rr => {
                    IS({
                      section: "explore",
                      sort: rr.value
                    })
                  }
                })
              }), Object.keys(gr).map((rr => (0, Lr.jsx)(mr.U, {
                active: wr.section === rr,
                onClick: () => {
                  IS({
                    section: rr
                  })
                },
                children: Br(gr[rr])
              }, rr)))]
            }), !mS && (0, Lr.jsx)("div", {
              className: "ShaderPackBrowseDivider"
            }), !mS && (0, Lr.jsxs)("div", {
              className: "ShaderPackBrowseSearch",
              children: [(0, Lr.jsx)("div", {
                className: "ShaderPackBrowseSearchIcon",
                children: (0, Lr.jsx)(Er.c, {
                  name: "magnifying-glass"
                })
              }), (0, Lr.jsx)(tr.b, {
                className: "ShaderPackBrowseSearchInput",
                placeholderText: Br("shaderPackListing:searchPlaceholder"),
                maxLength: fr.I,
                defaultValue: cr,
                domRef: or,
                onValueChange: Fr,
                onEnter: fS
              }), (0, Lr.jsx)(mr.h, {
                onClick: fS,
                children: Br("general:search")
              })]
            }), !mS && (0, Lr.jsxs)(mr.U, {
              className: jr()("ShaderPackBrowseFilterToggle", {
                Open: Gr
              }),
              pressed: Gr,
              onClick: () => {
                kr(!Gr)
              },
              children: [Br("shaderPackListing:filter"), " ", (0, Lr.jsx)(Er.c, {
                name: Gr ? "angle-up" : "angle-down"
              })]
            }), (0, Lr.jsx)("div", {
              className: "ShaderPackBrowseSpace"
            }), Kr.featureFlags.settings.canUseShaderPacks && (0, Lr.jsxs)(mr.p, {
              onClick: () => {
                Tr(vr.bb)
              },
              children: [(0, Lr.jsx)(Er.c, {
                name: "upload"
              }), " ", Br("shaderPackListing:publish")]
            })]
          }), !mS && Gr && (0, Lr.jsxs)("div", {
            className: "ShaderPackBrowseFeatures",
            children: [vr.A.map((rr => {
              const Sr = (0, vr.i)(wr, rr),
                Qr = Br(vr.Q[rr]);
              return (0, Lr.jsx)(mr.U, {
                className: jr()("ShaderPackBrowseFeature", {
                  Without: "without" === Sr
                }),
                active: "with" === Sr,
                pressed: null !== Sr,
                onClick: () => {
                  Ar.current = !0, IS((0, vr.gb)(wr, rr))
                },
                children: (0, Lr.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureLabel",
                  children: [(0, Lr.jsxs)("span", {
                    className: "ShaderPackBrowseFeatureReserve",
                    children: [(0, Lr.jsx)(Er.c, {
                      name: "check"
                    }), " ", Qr]
                  }), (0, Lr.jsxs)("span", {
                    children: [null !== Sr && (0, Lr.jsx)(Er.c, {
                      name: "with" === Sr ? "check" : "xmark"
                    }), " ", Qr]
                  })]
                })
              }, rr)
            })), NS && (0, Lr.jsx)(mr.U, {
              className: jr()("ShaderPackBrowseFeature", {
                Without: "without" === wr.banned
              }),
              active: "with" === wr.banned,
              pressed: null !== wr.banned,
              onClick: () => {
                const rr = "without" === wr.banned && !Ar.current && (0, vr.p)(wr);
                IS({
                  banned: (0, vr.B)(wr.banned),
                  ...rr && {
                    withFeatures: [],
                    withoutFeatures: []
                  }
                })
              },
              children: (0, Lr.jsxs)("span", {
                className: "ShaderPackBrowseFeatureLabel",
                children: [(0, Lr.jsxs)("span", {
                  className: "ShaderPackBrowseFeatureReserve",
                  children: [(0, Lr.jsx)(Er.c, {
                    name: "check"
                  }), " BANNED"]
                }), (0, Lr.jsxs)("span", {
                  children: [null !== wr.banned && (0, Lr.jsx)(Er.c, {
                    name: "with" === wr.banned ? "check" : "xmark"
                  }), " BANNED"]
                })]
              })
            })]
          })]
        }), (!mS || null !== ES) && (0, Lr.jsx)("div", {
          className: "ShaderPackBrowseScenes",
          children: (0, Lr.jsx)(qr.b, {
            selected: Cr,
            onSelect: Mr,
            imageUrl: rr => null === ES ? null : (0, fr.o)(er.clientSideServerUrls.s3Url, ES, rr, "thumb")
          })
        }), (0, Lr.jsx)(Pr, {
          results: Jr,
          loading: dr,
          failed: ur,
          onRetry: () => {
            QS((rr => rr + 1))
          },
          view: wr,
          previewView: Cr
        }), "listing" === (null === Jr || void 0 === Jr ? void 0 : Jr.kind) && (0, Lr.jsx)(Ur.b, {
          className: "ShaderPackBrowsePagination",
          page: Jr.page.pageNumber,
          totalPages: Jr.page.totalPages,
          onSetPage: rr => {
            ir((Sr => {
              (0, xr.j)(Sr, rr)
            }))
          },
          getPageHref: function(rr) {
            const Sr = new URLSearchParams(Vr);
            (0, xr.j)(Sr, rr);
            const Qr = Sr.toString();
            return Qr ? `${Or.pathname}?${Qr}` : Or.pathname
          }
        })]
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);