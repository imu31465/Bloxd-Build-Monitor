export const id = 117;
export const ids = [117];
export const modules = {
  5921: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ShaderPackPublishForm: () => mB
    });
    var VB = dB(62),
      yB = dB(5898),
      pB = dB(193),
      lB = dB(5924),
      JB = dB(946),
      YB = dB(1324),
      gB = dB(1555),
      oB = dB(1011),
      kB = dB(5932),
      LB = dB(5943),
      OB = dB(1393),
      DB = dB(1078),
      uB = dB(5949),
      HB = dB(5985),
      EB = dB(5891),
      vB = dB(980);

    function mB(BB) {
      var TB, dB, kB;
      let {
        existing: mB,
        onPublished: NB
      } = BB;
      const {
        t: fB
      } = (0, DB.z)(), {
        userContext: sB,
        isUserContextUpdating: MB
      } = (0, oB.b)(), [zB, wB] = (0, VB.useState)(null), [UB, FB] = (0, VB.useState)(0), [KB, rB] = (0, VB.useState)(null !== (TB = null === mB || void 0 === mB ? void 0 : mB.name) && void 0 !== TB ? TB : ""), IB = (0, VB.useRef)(KB), cB = (0, VB.useRef)(""), SB = BB => {
        IB.current = BB, rB(BB)
      }, [PB, QB] = (0, VB.useState)(null !== (dB = null === mB || void 0 === mB ? void 0 : mB.description) && void 0 !== dB ? dB : ""), RB = (0, VB.useRef)(PB), aB = (0, VB.useRef)(""), ZB = BB => {
        RB.current = BB, QB(BB)
      }, [XB, WB] = (0, VB.useState)(!1), {
        loading: hB,
        error: CB,
        setError: GB,
        onFiles: qB
      } = (0, LB.g)((async BB => {
        const TB = await (0, uB.loadPageShaderPackCompiler)();
        if (!TB) return void GB(fB("shaderPack:compilerUnavailable"));
        const dB = await (0, HB.f)(TB, BB.files);
        if (wB({
            pack: BB,
            validation: dB,
            sourceBytes: (0, lB.x)(BB.files)
          }), !mB) {
          var VB;
          if ("" !== IB.current.trim() && IB.current !== cB.current || (cB.current = (0, yB.S)(BB.manifest.name.trim(), yB.w), SB(cB.current)), "" === RB.current.trim() || RB.current === aB.current) aB.current = (0, yB.S)((null !== (VB = BB.manifest.description) && void 0 !== VB ? VB : "").trim(), yB.n), ZB(aB.current);
          FB((BB => BB + 1))
        }
      })), xB = !MB && !sB.isLoggedIn() && !pB.c.offlineMode, jB = KB.trim(), AB = jB.length < yB.A, bB = null !== zB && !1 !== (null === (kB = zB.validation) || void 0 === kB ? void 0 : kB.ok) && !hB && !AB && !xB && !MB;
      return (0, vB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, vB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: mB ? fB("shaderPackListing:uploadIntro", {
            minutes: String(yB.H / 6e4)
          }) : fB("shaderPackListing:publishIntro")
        }), (0, vB.jsx)(tB, {}), xB && (0, vB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: fB("shaderPackListing:publishNeedsLogin")
        }), (0, vB.jsx)(LB.e, {
          busy: hB,
          disabled: hB || XB,
          onFiles: BB => {
            wB(null), qB(BB)
          }
        }), zB && (0, vB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, vB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: zB.pack.manifest.name
          }), (0, vB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [fB("shaderPackListing:sizeValue", {
              kilobytes: String((0, EB.O)(zB.sourceBytes))
            }), " \xb7", " ", fB("shaderPackListing:filesValue", {
              files: String(zB.pack.files.length)
            })]
          }), (0, vB.jsx)(iB, {
            picked: zB
          })]
        }), !mB && (0, vB.jsxs)(vB.Fragment, {
          children: [(0, vB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, vB.jsx)("span", {
              children: fB("general:name")
            }), (0, vB.jsx)(gB.e, {
              className: "ShaderPackPublishInput",
              defaultValue: KB,
              maxLength: yB.w,
              onValueChange: SB
            }, UB), zB && AB && (0, vB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: fB("shaderPackListing:nameTooShort", {
                min: String(yB.A)
              })
            })]
          }), (0, vB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, vB.jsx)("span", {
              children: fB("general:description")
            }), (0, vB.jsx)(gB.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: PB,
              maxLength: yB.n,
              onValueChange: ZB,
              useTextarea: !0
            }, UB)]
          })]
        }), CB && (0, vB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: CB
        }), (0, vB.jsxs)(YB.k, {
          className: "ShaderPackPublishButton",
          disabled: !bB,
          loading: XB,
          onClick: () => {
            !async function() {
              var BB;
              if (!zB) return;
              const {
                name: TB,
                description: dB
              } = null !== mB && void 0 !== mB ? mB : {
                name: jB,
                description: PB.trim()
              }, VB = {
                packId: null !== (BB = null === mB || void 0 === mB ? void 0 : mB.packId) && void 0 !== BB ? BB : null,
                name: TB,
                description: dB,
                apiVersion: zB.pack.manifest.apiVersion,
                files: (0, lB.u)(zB.pack.files),
                keepCircleShadows: !0 === zB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(VB)).byteLength > 1024 * yB.P) GB(fB("shaderPackListing:publishTooBig", {
                kilobytes: String(yB.P)
              }));
              else {
                WB(!0), GB(null);
                try {
                  NB(await OB.c.publishShaderPack(sB, VB))
                } catch (pB) {
                  console.error("Failed to publish the shader pack", pB), GB((0, EB.D)(pB, fB, "shaderPackListing:publishFailed"))
                } finally {
                  WB(!1)
                }
              }
            }()
          },
          children: [(0, vB.jsx)(JB.e, {
            name: "upload"
          }), " ", fB(mB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function iB(BB) {
      let {
        picked: TB
      } = BB;
      const {
        t: dB
      } = (0, DB.z)(), {
        validation: VB
      } = TB;
      return null === VB ? (0, vB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: dB("shaderPackListing:publishUnchecked")
      }) : VB.ok ? (0, vB.jsxs)(vB.Fragment, {
        children: [(0, vB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, vB.jsx)(JB.e, {
            name: "circle-check"
          }), " ", dB("shaderPackListing:publishReady")]
        }), VB.offInStrict.length > 0 && (0, vB.jsxs)(vB.Fragment, {
          children: [(0, vB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, vB.jsx)(JB.e, {
              name: "triangle-exclamation"
            }), " ", dB("shaderPack:offInStrict")]
          }), (0, vB.jsx)(kB.c, {
            diagnostics: VB.offInStrict,
            t: dB
          })]
        })]
      }) : (0, vB.jsxs)(vB.Fragment, {
        children: [(0, vB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, vB.jsx)(JB.e, {
            name: "triangle-exclamation"
          }), " ", dB("shaderPackListing:publishHasErrors")]
        }), (0, vB.jsx)(kB.c, {
          diagnostics: VB.errors,
          more: VB.moreErrors,
          t: dB
        })]
      })
    }
    const NB = "\0";

    function tB() {
      const {
        t: BB
      } = (0, DB.z)(), [TB, dB] = BB("shaderPackListing:bloxdhubHelp", {
        site: NB
      }).split(NB);
      return (0, vB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [TB, (0, vB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: yB.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: yB.b
        }), dB]
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);