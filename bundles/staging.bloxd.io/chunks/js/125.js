export const id = 125;
export const ids = [125];
export const modules = {
  6085: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ShaderPackPublishForm: () => gT
    });
    var iT = IT(46),
      zT = IT(6045),
      kT = IT(195),
      WT = IT(6092),
      XT = IT(1055),
      BT = IT(1408),
      FT = IT(1624),
      ST = IT(1110),
      DT = IT(6099),
      LT = IT(6107),
      xT = IT(1451),
      cT = IT(1171),
      KT = IT(6114),
      MT = IT(6146),
      rT = IT(6042),
      AT = IT(1083);

    function gT(TT) {
      var oT, IT, DT;
      let {
        existing: gT,
        onPublished: wT
      } = TT;
      const {
        t: eT
      } = (0, cT.t)(), {
        userContext: RT,
        isUserContextUpdating: uT
      } = (0, ST.b)(), [vT, ET] = (0, iT.useState)(null), [fT, CT] = (0, iT.useState)(0), [jT, JT] = (0, iT.useState)(null !== (oT = null === gT || void 0 === gT ? void 0 : gT.name) && void 0 !== oT ? oT : ""), UT = (0, iT.useRef)(jT), aT = (0, iT.useRef)(""), YT = TT => {
        UT.current = TT, JT(TT)
      }, [QT, OT] = (0, iT.useState)(null !== (IT = null === gT || void 0 === gT ? void 0 : gT.description) && void 0 !== IT ? IT : ""), HT = (0, iT.useRef)(QT), nT = (0, iT.useRef)(""), qT = TT => {
        HT.current = TT, OT(TT)
      }, [ZT, lT] = (0, iT.useState)(!1), {
        loading: sT,
        error: tT,
        setError: GT,
        onFiles: pT
      } = (0, LT.d)((async TT => {
        const oT = await (0, KT.loadPageShaderPackCompiler)();
        if (!oT) return void GT(eT("shaderPack:compilerUnavailable"));
        const IT = await (0, MT.c)(oT, TT.files);
        if (ET({
            pack: TT,
            validation: IT,
            sourceBytes: (0, WT.u)(TT.files)
          }), !gT) {
          var iT;
          if ("" !== UT.current.trim() && UT.current !== aT.current || (aT.current = (0, zT.Y)(TT.manifest.name.trim(), zT.E), YT(aT.current)), "" === HT.current.trim() || HT.current === nT.current) nT.current = (0, zT.Y)((null !== (iT = TT.manifest.description) && void 0 !== iT ? iT : "").trim(), zT.s), qT(nT.current);
          CT((TT => TT + 1))
        }
      })), bT = !uT && !RT.isLoggedIn() && !kT.d.offlineMode, yT = jT.trim(), NT = yT.length < zT.I, PT = null !== vT && !1 !== (null === (DT = vT.validation) || void 0 === DT ? void 0 : DT.ok) && !sT && !NT && !bT && !uT;
      return (0, AT.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, AT.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: gT ? eT("shaderPackListing:uploadIntro", {
            minutes: String(zT.N / 6e4)
          }) : eT("shaderPackListing:publishIntro")
        }), (0, AT.jsx)(mT, {}), bT && (0, AT.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: eT("shaderPackListing:publishNeedsLogin")
        }), (0, AT.jsx)(LT.b, {
          busy: sT,
          disabled: sT || ZT,
          onFiles: TT => {
            ET(null), pT(TT)
          }
        }), vT && (0, AT.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, AT.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: vT.pack.manifest.name
          }), (0, AT.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [eT("shaderPackListing:sizeValue", {
              kilobytes: String((0, rT.P)(vT.sourceBytes))
            }), " \xb7", " ", eT("shaderPackListing:filesValue", {
              files: String(vT.pack.files.length)
            })]
          }), (0, AT.jsx)(hT, {
            picked: vT
          })]
        }), !gT && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, AT.jsx)("span", {
              children: eT("general:name")
            }), (0, AT.jsx)(FT.e, {
              className: "ShaderPackPublishInput",
              defaultValue: jT,
              maxLength: zT.E,
              onValueChange: YT
            }, fT), vT && NT && (0, AT.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: eT("shaderPackListing:nameTooShort", {
                min: String(zT.I)
              })
            })]
          }), (0, AT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, AT.jsx)("span", {
              children: eT("general:description")
            }), (0, AT.jsx)(FT.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: QT,
              maxLength: zT.s,
              onValueChange: qT,
              useTextarea: !0
            }, fT)]
          })]
        }), tT && (0, AT.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: tT
        }), (0, AT.jsxs)(BT.m, {
          className: "ShaderPackPublishButton",
          disabled: !PT,
          loading: ZT,
          onClick: () => {
            !async function() {
              var TT;
              if (!vT) return;
              const {
                name: oT,
                description: IT
              } = null !== gT && void 0 !== gT ? gT : {
                name: yT,
                description: QT.trim()
              }, iT = {
                packId: null !== (TT = null === gT || void 0 === gT ? void 0 : gT.packId) && void 0 !== TT ? TT : null,
                name: oT,
                description: IT,
                apiVersion: vT.pack.manifest.apiVersion,
                files: (0, WT.t)(vT.pack.files),
                keepCircleShadows: !0 === vT.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(iT)).byteLength > 1024 * zT.U) GT(eT("shaderPackListing:publishTooBig", {
                kilobytes: String(zT.U)
              }));
              else {
                lT(!0), GT(null);
                try {
                  wT(await xT.e.publishShaderPack(RT, iT))
                } catch (kT) {
                  console.error("Failed to publish the shader pack", kT), GT((0, rT.A)(kT, eT, "shaderPackListing:publishFailed"))
                } finally {
                  lT(!1)
                }
              }
            }()
          },
          children: [(0, AT.jsx)(XT.e, {
            name: "upload"
          }), " ", eT(gT ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function hT(TT) {
      let {
        picked: oT
      } = TT;
      const {
        t: IT
      } = (0, cT.t)(), {
        validation: iT
      } = oT;
      return null === iT ? (0, AT.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: IT("shaderPackListing:publishUnchecked")
      }) : iT.ok ? (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, AT.jsx)(XT.e, {
            name: "circle-check"
          }), " ", IT("shaderPackListing:publishReady")]
        }), iT.offInStrict.length > 0 && (0, AT.jsxs)(AT.Fragment, {
          children: [(0, AT.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, AT.jsx)(XT.e, {
              name: "triangle-exclamation"
            }), " ", IT("shaderPack:offInStrict")]
          }), (0, AT.jsx)(DT.e, {
            diagnostics: iT.offInStrict,
            t: IT
          })]
        })]
      }) : (0, AT.jsxs)(AT.Fragment, {
        children: [(0, AT.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, AT.jsx)(XT.e, {
            name: "triangle-exclamation"
          }), " ", IT("shaderPackListing:publishHasErrors")]
        }), (0, AT.jsx)(DT.e, {
          diagnostics: iT.errors,
          more: iT.moreErrors,
          t: IT
        })]
      })
    }
    const wT = "\0";

    function mT() {
      const {
        t: TT
      } = (0, cT.t)(), [oT, IT] = TT("shaderPackListing:bloxdhubHelp", {
        site: wT
      }).split(wT);
      return (0, AT.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [oT, (0, AT.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: zT.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: zT.c
        }), IT]
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);