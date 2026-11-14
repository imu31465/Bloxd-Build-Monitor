export const id = 110;
export const ids = [110];
export const modules = {
  5589: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      ShaderPackPublishForm: () => IW
    });
    var wW = MW(75),
      CW = MW(5557),
      zR = MW(182),
      AW = MW(5596),
      bR = MW(904),
      yR = MW(1255),
      NW = MW(1489),
      eW = MW(969),
      BW = MW(5605),
      tR = MW(5619),
      TW = MW(1314),
      gR = MW(1027),
      iR = MW(5621),
      YW = MW(5653),
      JW = MW(5548),
      PW = MW(940);

    function IW(WW) {
      var RW, MW, BW;
      let {
        existing: IW,
        onPublished: lW
      } = WW;
      const {
        t: fW
      } = (0, gR.C)(), {
        userContext: QW,
        isUserContextUpdating: rR
      } = (0, eW.c)(), [cR, XW] = (0, wW.useState)(null), [jR, kR] = (0, wW.useState)(0), [aR, sW] = (0, wW.useState)(null !== (RW = null === IW || void 0 === IW ? void 0 : IW.name) && void 0 !== RW ? RW : ""), dW = (0, wW.useRef)(aR), pW = (0, wW.useRef)(""), hW = WW => {
        dW.current = WW, sW(WW)
      }, [UW, EW] = (0, wW.useState)(null !== (MW = null === IW || void 0 === IW ? void 0 : IW.description) && void 0 !== MW ? MW : ""), VW = (0, wW.useRef)(UW), mR = (0, wW.useRef)(""), xR = WW => {
        VW.current = WW, EW(WW)
      }, [vR, KW] = (0, wW.useState)(!1), {
        loading: uW,
        error: OW,
        setError: nW,
        onFiles: GW
      } = (0, tR.h)((async WW => {
        const RW = await (0, iR.loadPageShaderPackCompiler)();
        if (!RW) return void nW(fW("shaderPack:compilerUnavailable"));
        const MW = await (0, YW.f)(RW, WW.files);
        if (XW({
            pack: WW,
            validation: MW,
            sourceBytes: (0, AW.v)(WW.files)
          }), !IW) {
          var wW;
          if ("" !== dW.current.trim() && dW.current !== pW.current || (pW.current = (0, CW.M)(WW.manifest.name.trim(), CW.t), hW(pW.current)), "" === VW.current.trim() || VW.current === mR.current) mR.current = (0, CW.M)((null !== (wW = WW.manifest.description) && void 0 !== wW ? wW : "").trim(), CW.k), xR(mR.current);
          kR((WW => WW + 1))
        }
      })), LW = !rR && !QW.isLoggedIn() && !zR.d.offlineMode, HW = aR.trim(), DW = HW.length < CW.u, qR = null !== cR && !1 !== (null === (BW = cR.validation) || void 0 === BW ? void 0 : BW.ok) && !uW && !DW && !LW && !rR;
      return (0, PW.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, PW.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: IW ? fW("shaderPackListing:uploadIntro", {
            minutes: String(CW.C / 6e4)
          }) : fW("shaderPackListing:publishIntro")
        }), (0, PW.jsx)(FW, {}), LW && (0, PW.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: fW("shaderPackListing:publishNeedsLogin")
        }), (0, PW.jsx)(tR.d, {
          busy: uW,
          disabled: uW || vR,
          onFiles: WW => {
            XW(null), GW(WW)
          }
        }), cR && (0, PW.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, PW.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: cR.pack.manifest.name
          }), (0, PW.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [fW("shaderPackListing:sizeValue", {
              kilobytes: String((0, JW.T)(cR.sourceBytes))
            }), " \xb7", " ", fW("shaderPackListing:filesValue", {
              files: String(cR.pack.files.length)
            })]
          }), (0, PW.jsx)(oW, {
            picked: cR
          })]
        }), !IW && (0, PW.jsxs)(PW.Fragment, {
          children: [(0, PW.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, PW.jsx)("span", {
              children: fW("general:name")
            }), (0, PW.jsx)(NW.e, {
              className: "ShaderPackPublishInput",
              defaultValue: aR,
              maxLength: CW.t,
              onValueChange: hW
            }, jR), cR && DW && (0, PW.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: fW("shaderPackListing:nameTooShort", {
                min: String(CW.u)
              })
            })]
          }), (0, PW.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, PW.jsx)("span", {
              children: fW("general:description")
            }), (0, PW.jsx)(NW.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: UW,
              maxLength: CW.k,
              onValueChange: xR,
              useTextarea: !0
            }, jR)]
          })]
        }), OW && (0, PW.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: OW
        }), (0, PW.jsxs)(yR.m, {
          className: "ShaderPackPublishButton",
          disabled: !qR,
          loading: vR,
          onClick: () => {
            !async function() {
              var WW;
              if (!cR) return;
              const {
                name: RW,
                description: MW
              } = null !== IW && void 0 !== IW ? IW : {
                name: HW,
                description: UW.trim()
              }, wW = {
                packId: null !== (WW = null === IW || void 0 === IW ? void 0 : IW.packId) && void 0 !== WW ? WW : null,
                name: RW,
                description: MW,
                apiVersion: cR.pack.manifest.apiVersion,
                files: (0, AW.r)(cR.pack.files),
                keepCircleShadows: !0 === cR.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(wW)).byteLength > 1024 * CW.K) nW(fW("shaderPackListing:publishTooBig", {
                kilobytes: String(CW.K)
              }));
              else {
                KW(!0), nW(null);
                try {
                  lW(await TW.c.publishShaderPack(QW, wW))
                } catch (zR) {
                  console.error("Failed to publish the shader pack", zR), nW((0, JW.y)(zR, fW, "shaderPackListing:publishFailed"))
                } finally {
                  KW(!1)
                }
              }
            }()
          },
          children: [(0, PW.jsx)(bR.e, {
            name: "upload"
          }), " ", fW(IW ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function oW(WW) {
      let {
        picked: RW
      } = WW;
      const {
        t: MW
      } = (0, gR.C)(), {
        validation: wW
      } = RW;
      return null === wW ? (0, PW.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: MW("shaderPackListing:publishUnchecked")
      }) : wW.ok ? (0, PW.jsxs)(PW.Fragment, {
        children: [(0, PW.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, PW.jsx)(bR.e, {
            name: "circle-check"
          }), " ", MW("shaderPackListing:publishReady")]
        }), wW.offInStrict.length > 0 && (0, PW.jsxs)(PW.Fragment, {
          children: [(0, PW.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, PW.jsx)(bR.e, {
              name: "triangle-exclamation"
            }), " ", MW("shaderPack:offInStrict")]
          }), (0, PW.jsx)(BW.c, {
            diagnostics: wW.offInStrict,
            t: MW
          })]
        })]
      }) : (0, PW.jsxs)(PW.Fragment, {
        children: [(0, PW.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, PW.jsx)(bR.e, {
            name: "triangle-exclamation"
          }), " ", MW("shaderPackListing:publishHasErrors")]
        }), (0, PW.jsx)(BW.c, {
          diagnostics: wW.errors,
          more: wW.moreErrors,
          t: MW
        })]
      })
    }
    const lW = "\0";

    function FW() {
      const {
        t: WW
      } = (0, gR.C)(), [RW, MW] = WW("shaderPackListing:bloxdhubHelp", {
        site: lW
      }).split(lW);
      return (0, PW.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [RW, (0, PW.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: CW.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: CW.c
        }), MW]
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);