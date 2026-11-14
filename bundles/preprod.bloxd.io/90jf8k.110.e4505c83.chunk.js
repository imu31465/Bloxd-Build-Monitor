export const id = 110;
export const ids = [110];
export const modules = {
  5557: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      ShaderPackPublishForm: () => aW
    });
    var CF = SF(46),
      AF = SF(5520),
      uF = SF(170),
      hF = SF(5564),
      bW = SF(929),
      dF = SF(1266),
      PF = SF(1504),
      RF = SF(996),
      iW = SF(5572),
      eF = SF(5585),
      EF = SF(1336),
      QF = SF(1046),
      rW = SF(5589),
      gW = SF(5624),
      tW = SF(5512),
      TF = SF(971);

    function aW(FF) {
      var WF, SF, iW;
      let {
        existing: aW,
        onPublished: qW
      } = FF;
      const {
        t: NF
      } = (0, QF.B)(), {
        userContext: DF,
        isUserContextUpdating: LF
      } = (0, RF.b)(), [mW, OF] = (0, CF.useState)(null), [xW, ZF] = (0, CF.useState)(0), [oF, YF] = (0, CF.useState)(null !== (WF = null === aW || void 0 === aW ? void 0 : aW.name) && void 0 !== WF ? WF : ""), MF = (0, CF.useRef)(oF), cW = (0, CF.useRef)(""), GF = FF => {
        MF.current = FF, YF(FF)
      }, [zW, IF] = (0, CF.useState)(null !== (SF = null === aW || void 0 === aW ? void 0 : aW.description) && void 0 !== SF ? SF : ""), fF = (0, CF.useRef)(zW), yW = (0, CF.useRef)(""), sF = FF => {
        fF.current = FF, IF(FF)
      }, [nF, HF] = (0, CF.useState)(!1), {
        loading: KF,
        error: wF,
        setError: XF,
        onFiles: UF
      } = (0, eF.d)((async FF => {
        const WF = await (0, rW.loadPageShaderPackCompiler)();
        if (!WF) return void XF(NF("shaderPack:compilerUnavailable"));
        const SF = await (0, gW.f)(WF, FF.files);
        if (OF({
            pack: FF,
            validation: SF,
            sourceBytes: (0, hF.t)(FF.files)
          }), !aW) {
          var CF;
          if ("" !== MF.current.trim() && MF.current !== cW.current || (cW.current = (0, AF.Q)(FF.manifest.name.trim(), AF.E), GF(cW.current)), "" === fF.current.trim() || fF.current === yW.current) yW.current = (0, AF.Q)((null !== (CF = FF.manifest.description) && void 0 !== CF ? CF : "").trim(), AF.q), sF(yW.current);
          ZF((FF => FF + 1))
        }
      })), BF = !LF && !DF.isLoggedIn() && !uF.e.offlineMode, jW = oF.trim(), vW = jW.length < AF.F, JF = null !== mW && !1 !== (null === (iW = mW.validation) || void 0 === iW ? void 0 : iW.ok) && !KF && !vW && !BF && !LF;
      return (0, TF.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, TF.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: aW ? NF("shaderPackListing:uploadIntro", {
            minutes: String(AF.L / 6e4)
          }) : NF("shaderPackListing:publishIntro")
        }), (0, TF.jsx)(VF, {}), BF && (0, TF.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: NF("shaderPackListing:publishNeedsLogin")
        }), (0, TF.jsx)(eF.b, {
          busy: KF,
          disabled: KF || nF,
          onFiles: FF => {
            OF(null), UF(FF)
          }
        }), mW && (0, TF.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, TF.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: mW.pack.manifest.name
          }), (0, TF.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [NF("shaderPackListing:sizeValue", {
              kilobytes: String((0, tW.K)(mW.sourceBytes))
            }), " \xb7", " ", NF("shaderPackListing:filesValue", {
              files: String(mW.pack.files.length)
            })]
          }), (0, TF.jsx)(kW, {
            picked: mW
          })]
        }), !aW && (0, TF.jsxs)(TF.Fragment, {
          children: [(0, TF.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, TF.jsx)("span", {
              children: NF("general:name")
            }), (0, TF.jsx)(PF.d, {
              className: "ShaderPackPublishInput",
              defaultValue: oF,
              maxLength: AF.E,
              onValueChange: GF
            }, xW), mW && vW && (0, TF.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: NF("shaderPackListing:nameTooShort", {
                min: String(AF.F)
              })
            })]
          }), (0, TF.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, TF.jsx)("span", {
              children: NF("general:description")
            }), (0, TF.jsx)(PF.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: zW,
              maxLength: AF.q,
              onValueChange: sF,
              useTextarea: !0
            }, xW)]
          })]
        }), wF && (0, TF.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: wF
        }), (0, TF.jsxs)(dF.k, {
          className: "ShaderPackPublishButton",
          disabled: !JF,
          loading: nF,
          onClick: () => {
            !async function() {
              var FF;
              if (!mW) return;
              const {
                name: WF,
                description: SF
              } = null !== aW && void 0 !== aW ? aW : {
                name: jW,
                description: zW.trim()
              }, CF = {
                packId: null !== (FF = null === aW || void 0 === aW ? void 0 : aW.packId) && void 0 !== FF ? FF : null,
                name: WF,
                description: SF,
                apiVersion: mW.pack.manifest.apiVersion,
                files: (0, hF.r)(mW.pack.files),
                keepCircleShadows: !0 === mW.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(CF)).byteLength > 1024 * AF.P) XF(NF("shaderPackListing:publishTooBig", {
                kilobytes: String(AF.P)
              }));
              else {
                HF(!0), XF(null);
                try {
                  qW(await EF.b.publishShaderPack(DF, CF))
                } catch (uF) {
                  console.error("Failed to publish the shader pack", uF), XF((0, tW.u)(uF, NF, "shaderPackListing:publishFailed"))
                } finally {
                  HF(!1)
                }
              }
            }()
          },
          children: [(0, TF.jsx)(bW.e, {
            name: "upload"
          }), " ", NF(aW ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function kW(FF) {
      let {
        picked: WF
      } = FF;
      const {
        t: SF
      } = (0, QF.B)(), {
        validation: CF
      } = WF;
      return null === CF ? (0, TF.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: SF("shaderPackListing:publishUnchecked")
      }) : CF.ok ? (0, TF.jsxs)(TF.Fragment, {
        children: [(0, TF.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, TF.jsx)(bW.e, {
            name: "circle-check"
          }), " ", SF("shaderPackListing:publishReady")]
        }), CF.offInStrict.length > 0 && (0, TF.jsxs)(TF.Fragment, {
          children: [(0, TF.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, TF.jsx)(bW.e, {
              name: "triangle-exclamation"
            }), " ", SF("shaderPack:offInStrict")]
          }), (0, TF.jsx)(iW.d, {
            diagnostics: CF.offInStrict,
            t: SF
          })]
        })]
      }) : (0, TF.jsxs)(TF.Fragment, {
        children: [(0, TF.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, TF.jsx)(bW.e, {
            name: "triangle-exclamation"
          }), " ", SF("shaderPackListing:publishHasErrors")]
        }), (0, TF.jsx)(iW.d, {
          diagnostics: CF.errors,
          more: CF.moreErrors,
          t: SF
        })]
      })
    }
    const qW = "\0";

    function VF() {
      const {
        t: FF
      } = (0, QF.B)(), [WF, SF] = FF("shaderPackListing:bloxdhubHelp", {
        site: qW
      }).split(qW);
      return (0, TF.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [WF, (0, TF.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: AF.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: AF.d
        }), SF]
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);