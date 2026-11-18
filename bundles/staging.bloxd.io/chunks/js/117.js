export const id = 117;
export const ids = [117];
export const modules = {
  5926: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ShaderPackPublishForm: () => vJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(5889),
      eJ = ZJ(164),
      XJ = ZJ(5934),
      AJ = ZJ(942),
      qJ = ZJ(1329),
      jJ = ZJ(1566),
      YJ = ZJ(1022),
      hJ = ZJ(5939),
      DJ = ZJ(5955),
      sJ = ZJ(1389),
      nJ = ZJ(1086),
      GJ = ZJ(5960),
      fJ = ZJ(5994),
      xJ = ZJ(5886),
      rJ = ZJ(990);

    function vJ(JJ) {
      var cJ, ZJ, hJ;
      let {
        existing: vJ,
        onPublished: QJ
      } = JJ;
      const {
        t: VJ
      } = (0, nJ.F)(), {
        userContext: KJ,
        isUserContextUpdating: yJ
      } = (0, YJ.d)(), [SJ, IJ] = (0, FJ.useState)(null), [MJ, bJ] = (0, FJ.useState)(0), [wJ, WJ] = (0, FJ.useState)(null !== (cJ = null === vJ || void 0 === vJ ? void 0 : vJ.name) && void 0 !== cJ ? cJ : ""), gJ = (0, FJ.useRef)(wJ), HJ = (0, FJ.useRef)(""), PJ = JJ => {
        gJ.current = JJ, WJ(JJ)
      }, [kJ, pJ] = (0, FJ.useState)(null !== (ZJ = null === vJ || void 0 === vJ ? void 0 : vJ.description) && void 0 !== ZJ ? ZJ : ""), dJ = (0, FJ.useRef)(kJ), zJ = (0, FJ.useRef)(""), NJ = JJ => {
        dJ.current = JJ, pJ(JJ)
      }, [OJ, TJ] = (0, FJ.useState)(!1), {
        loading: CJ,
        error: uJ,
        setError: iJ,
        onFiles: RJ
      } = (0, DJ.g)((async JJ => {
        const cJ = await (0, GJ.loadPageShaderPackCompiler)();
        if (!cJ) return void iJ(VJ("shaderPack:compilerUnavailable"));
        const ZJ = await (0, fJ.f)(cJ, JJ.files);
        if (IJ({
            pack: JJ,
            validation: ZJ,
            sourceBytes: (0, XJ.q)(JJ.files)
          }), !vJ) {
          var FJ;
          if ("" !== gJ.current.trim() && gJ.current !== HJ.current || (HJ.current = (0, UJ.L)(JJ.manifest.name.trim(), UJ.u), PJ(HJ.current)), "" === dJ.current.trim() || dJ.current === zJ.current) zJ.current = (0, UJ.L)((null !== (FJ = JJ.manifest.description) && void 0 !== FJ ? FJ : "").trim(), UJ.n), NJ(zJ.current);
          bJ((JJ => JJ + 1))
        }
      })), LJ = !yJ && !KJ.isLoggedIn() && !eJ.e.offlineMode, aJ = wJ.trim(), BJ = aJ.length < UJ.x, tJ = null !== SJ && !1 !== (null === (hJ = SJ.validation) || void 0 === hJ ? void 0 : hJ.ok) && !CJ && !BJ && !LJ && !yJ;
      return (0, rJ.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, rJ.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: vJ ? VJ("shaderPackListing:uploadIntro", {
            minutes: String(UJ.C / 6e4)
          }) : VJ("shaderPackListing:publishIntro")
        }), (0, rJ.jsx)(EJ, {}), LJ && (0, rJ.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: VJ("shaderPackListing:publishNeedsLogin")
        }), (0, rJ.jsx)(DJ.e, {
          busy: CJ,
          disabled: CJ || OJ,
          onFiles: JJ => {
            IJ(null), RJ(JJ)
          }
        }), SJ && (0, rJ.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, rJ.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: SJ.pack.manifest.name
          }), (0, rJ.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [VJ("shaderPackListing:sizeValue", {
              kilobytes: String((0, xJ.Q)(SJ.sourceBytes))
            }), " \xb7", " ", VJ("shaderPackListing:filesValue", {
              files: String(SJ.pack.files.length)
            })]
          }), (0, rJ.jsx)(mJ, {
            picked: SJ
          })]
        }), !vJ && (0, rJ.jsxs)(rJ.Fragment, {
          children: [(0, rJ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, rJ.jsx)("span", {
              children: VJ("general:name")
            }), (0, rJ.jsx)(jJ.e, {
              className: "ShaderPackPublishInput",
              defaultValue: wJ,
              maxLength: UJ.u,
              onValueChange: PJ
            }, MJ), SJ && BJ && (0, rJ.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: VJ("shaderPackListing:nameTooShort", {
                min: String(UJ.x)
              })
            })]
          }), (0, rJ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, rJ.jsx)("span", {
              children: VJ("general:description")
            }), (0, rJ.jsx)(jJ.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: kJ,
              maxLength: UJ.n,
              onValueChange: NJ,
              useTextarea: !0
            }, MJ)]
          })]
        }), uJ && (0, rJ.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: uJ
        }), (0, rJ.jsxs)(qJ.m, {
          className: "ShaderPackPublishButton",
          disabled: !tJ,
          loading: OJ,
          onClick: () => {
            !async function() {
              var JJ;
              if (!SJ) return;
              const {
                name: cJ,
                description: ZJ
              } = null !== vJ && void 0 !== vJ ? vJ : {
                name: aJ,
                description: kJ.trim()
              }, FJ = {
                packId: null !== (JJ = null === vJ || void 0 === vJ ? void 0 : vJ.packId) && void 0 !== JJ ? JJ : null,
                name: cJ,
                description: ZJ,
                apiVersion: SJ.pack.manifest.apiVersion,
                files: (0, XJ.o)(SJ.pack.files),
                keepCircleShadows: !0 === SJ.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(FJ)).byteLength > 1024 * UJ.I) iJ(VJ("shaderPackListing:publishTooBig", {
                kilobytes: String(UJ.I)
              }));
              else {
                TJ(!0), iJ(null);
                try {
                  QJ(await sJ.c.publishShaderPack(KJ, FJ))
                } catch (eJ) {
                  console.error("Failed to publish the shader pack", eJ), iJ((0, xJ.C)(eJ, VJ, "shaderPackListing:publishFailed"))
                } finally {
                  TJ(!1)
                }
              }
            }()
          },
          children: [(0, rJ.jsx)(AJ.c, {
            name: "upload"
          }), " ", VJ(vJ ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function mJ(JJ) {
      let {
        picked: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, nJ.F)(), {
        validation: FJ
      } = cJ;
      return null === FJ ? (0, rJ.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ZJ("shaderPackListing:publishUnchecked")
      }) : FJ.ok ? (0, rJ.jsxs)(rJ.Fragment, {
        children: [(0, rJ.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, rJ.jsx)(AJ.c, {
            name: "circle-check"
          }), " ", ZJ("shaderPackListing:publishReady")]
        }), FJ.offInStrict.length > 0 && (0, rJ.jsxs)(rJ.Fragment, {
          children: [(0, rJ.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, rJ.jsx)(AJ.c, {
              name: "triangle-exclamation"
            }), " ", ZJ("shaderPack:offInStrict")]
          }), (0, rJ.jsx)(hJ.e, {
            diagnostics: FJ.offInStrict,
            t: ZJ
          })]
        })]
      }) : (0, rJ.jsxs)(rJ.Fragment, {
        children: [(0, rJ.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, rJ.jsx)(AJ.c, {
            name: "triangle-exclamation"
          }), " ", ZJ("shaderPackListing:publishHasErrors")]
        }), (0, rJ.jsx)(hJ.e, {
          diagnostics: FJ.errors,
          more: FJ.moreErrors,
          t: ZJ
        })]
      })
    }
    const QJ = "\0";

    function EJ() {
      const {
        t: JJ
      } = (0, nJ.F)(), [cJ, ZJ] = JJ("shaderPackListing:bloxdhubHelp", {
        site: QJ
      }).split(QJ);
      return (0, rJ.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [cJ, (0, rJ.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: UJ.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: UJ.b
        }), ZJ]
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);