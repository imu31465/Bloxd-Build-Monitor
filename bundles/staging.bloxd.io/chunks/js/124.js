export const id = 124;
export const ids = [124];
export const modules = {
  6578: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      ShaderPackPublishForm: () => ST
    });
    var lT = cT(71),
      MT = cT(6550),
      KT = cT(221),
      OT = cT(6581),
      yT = cT(1061),
      fT = cT(1470),
      xT = cT(1692),
      IT = cT(1130),
      AT = cT(6586),
      CT = cT(6604),
      jT = cT(1518),
      vT = cT(1195),
      tT = cT(6607),
      hT = cT(6636),
      NT = cT(6547),
      QT = cT(1099);

    function ST(TT) {
      var kT, cT, AT;
      let {
        existing: ST,
        onPublished: aT
      } = TT;
      const {
        t: rT
      } = (0, vT.B)(), {
        userContext: PT,
        isUserContextUpdating: wT
      } = (0, IT.b)(), [mT, bT] = (0, lT.useState)(null), [zT, JT] = (0, lT.useState)(0), [oT, HT] = (0, lT.useState)(null !== (kT = null === ST || void 0 === ST ? void 0 : ST.name) && void 0 !== kT ? kT : ""), eT = (0, lT.useRef)(oT), GT = (0, lT.useRef)(""), VT = TT => {
        eT.current = TT, HT(TT)
      }, [ET, ZT] = (0, lT.useState)(null !== (cT = null === ST || void 0 === ST ? void 0 : ST.description) && void 0 !== cT ? cT : ""), uT = (0, lT.useRef)(ET), XT = (0, lT.useRef)(""), dT = TT => {
        uT.current = TT, ZT(TT)
      }, [LT, RT] = (0, lT.useState)(!1), {
        loading: gT,
        error: UT,
        setError: YT,
        onFiles: BT
      } = (0, CT.f)((async TT => {
        const kT = await (0, tT.loadPageShaderPackCompiler)();
        if (!kT) return void YT(rT("shaderPack:compilerUnavailable"));
        const cT = await (0, hT.h)(kT, TT.files);
        if (bT({
            pack: TT,
            validation: cT,
            sourceBytes: (0, OT.u)(TT.files)
          }), !ST) {
          var lT;
          if ("" !== eT.current.trim() && eT.current !== GT.current || (GT.current = (0, MT.L)(TT.manifest.name.trim(), MT.v), VT(GT.current)), "" === uT.current.trim() || uT.current === XT.current) XT.current = (0, MT.L)((null !== (lT = TT.manifest.description) && void 0 !== lT ? lT : "").trim(), MT.m), dT(XT.current);
          JT((TT => TT + 1))
        }
      })), WT = !wT && !PT.isLoggedIn() && !KT.d.offlineMode, nT = oT.trim(), pT = nT.length < MT.w, iT = null !== mT && !1 !== (null === (AT = mT.validation) || void 0 === AT ? void 0 : AT.ok) && !gT && !pT && !WT && !wT;
      return (0, QT.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, QT.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: ST ? rT("shaderPackListing:uploadIntro", {
            minutes: String(MT.A / 6e4)
          }) : rT("shaderPackListing:publishIntro")
        }), (0, QT.jsx)(FT, {}), WT && (0, QT.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: rT("shaderPackListing:publishNeedsLogin")
        }), (0, QT.jsx)(CT.c, {
          busy: gT,
          disabled: gT || LT,
          onFiles: TT => {
            bT(null), BT(TT)
          }
        }), mT && (0, QT.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, QT.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: mT.pack.manifest.name
          }), (0, QT.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [rT("shaderPackListing:sizeValue", {
              kilobytes: String((0, NT.K)(mT.sourceBytes))
            }), " \xb7", " ", rT("shaderPackListing:filesValue", {
              files: String(mT.pack.files.length)
            })]
          }), (0, QT.jsx)(DT, {
            picked: mT
          })]
        }), !ST && (0, QT.jsxs)(QT.Fragment, {
          children: [(0, QT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, QT.jsx)("span", {
              children: rT("general:name")
            }), (0, QT.jsx)(xT.b, {
              className: "ShaderPackPublishInput",
              defaultValue: oT,
              maxLength: MT.v,
              onValueChange: VT
            }, zT), mT && pT && (0, QT.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: rT("shaderPackListing:nameTooShort", {
                min: String(MT.w)
              })
            })]
          }), (0, QT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, QT.jsx)("span", {
              children: rT("general:description")
            }), (0, QT.jsx)(xT.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: ET,
              maxLength: MT.m,
              onValueChange: dT,
              useTextarea: !0
            }, zT)]
          })]
        }), UT && (0, QT.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: UT
        }), (0, QT.jsxs)(fT.m, {
          className: "ShaderPackPublishButton",
          disabled: !iT,
          loading: LT,
          onClick: () => {
            !async function() {
              var TT;
              if (!mT) return;
              const {
                name: kT,
                description: cT
              } = null !== ST && void 0 !== ST ? ST : {
                name: nT,
                description: ET.trim()
              }, lT = {
                packId: null !== (TT = null === ST || void 0 === ST ? void 0 : ST.packId) && void 0 !== TT ? TT : null,
                name: kT,
                description: cT,
                apiVersion: mT.pack.manifest.apiVersion,
                files: (0, OT.s)(mT.pack.files),
                keepCircleShadows: !0 === mT.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(lT)).byteLength > 1024 * MT.H) YT(rT("shaderPackListing:publishTooBig", {
                kilobytes: String(MT.H)
              }));
              else {
                RT(!0), YT(null);
                try {
                  aT(await jT.d.publishShaderPack(PT, lT))
                } catch (KT) {
                  console.error("Failed to publish the shader pack", KT), YT((0, NT.v)(KT, rT, "shaderPackListing:publishFailed"))
                } finally {
                  RT(!1)
                }
              }
            }()
          },
          children: [(0, QT.jsx)(yT.e, {
            name: "upload"
          }), " ", rT(ST ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function DT(TT) {
      let {
        picked: kT
      } = TT;
      const {
        t: cT
      } = (0, vT.B)(), {
        validation: lT
      } = kT;
      return null === lT ? (0, QT.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: cT("shaderPackListing:publishUnchecked")
      }) : lT.ok ? (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, QT.jsx)(yT.e, {
            name: "circle-check"
          }), " ", cT("shaderPackListing:publishReady")]
        }), lT.offInStrict.length > 0 && (0, QT.jsxs)(QT.Fragment, {
          children: [(0, QT.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, QT.jsx)(yT.e, {
              name: "triangle-exclamation"
            }), " ", cT("shaderPack:offInStrict")]
          }), (0, QT.jsx)(AT.e, {
            diagnostics: lT.offInStrict,
            t: cT
          })]
        })]
      }) : (0, QT.jsxs)(QT.Fragment, {
        children: [(0, QT.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, QT.jsx)(yT.e, {
            name: "triangle-exclamation"
          }), " ", cT("shaderPackListing:publishHasErrors")]
        }), (0, QT.jsx)(AT.e, {
          diagnostics: lT.errors,
          more: lT.moreErrors,
          t: cT
        })]
      })
    }
    const aT = "\0";

    function FT() {
      const {
        t: TT
      } = (0, vT.B)(), [kT, cT] = TT("shaderPackListing:bloxdhubHelp", {
        site: aT
      }).split(aT);
      return (0, QT.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [kT, (0, QT.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: MT.e,
          target: "_blank",
          rel: "noopener noreferrer",
          children: MT.b
        }), cT]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);