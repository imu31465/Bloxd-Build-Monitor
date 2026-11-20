export const id = 124;
export const ids = [124];
export const modules = {
  6263: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ShaderPackPublishForm: () => fU
    });
    var tU = gU(56),
      pU = gU(6222),
      EU = gU(193),
      PU = gU(6265),
      TU = gU(1049),
      qU = gU(1412),
      KU = gU(1602),
      cU = gU(1112),
      GU = gU(6270),
      jU = gU(6292),
      uU = gU(1461),
      CU = gU(1181),
      hU = gU(6295),
      QU = gU(6321),
      eU = gU(6220),
      WU = gU(1090);

    function fU(UU) {
      var RU, gU, GU;
      let {
        existing: fU,
        onPublished: mU
      } = UU;
      const {
        t: JU
      } = (0, CU.B)(), {
        userContext: wU,
        isUserContextUpdating: nU
      } = (0, cU.e)(), [bU, oU] = (0, tU.useState)(null), [ZU, aU] = (0, tU.useState)(0), [YU, BU] = (0, tU.useState)(null !== (RU = null === fU || void 0 === fU ? void 0 : fU.name) && void 0 !== RU ? RU : ""), VU = (0, tU.useRef)(YU), rU = (0, tU.useRef)(""), XU = UU => {
        VU.current = UU, BU(UU)
      }, [vU, dU] = (0, tU.useState)(null !== (gU = null === fU || void 0 === fU ? void 0 : fU.description) && void 0 !== gU ? gU : ""), HU = (0, tU.useRef)(vU), SU = (0, tU.useRef)(""), sU = UU => {
        HU.current = UU, dU(UU)
      }, [yU, kU] = (0, tU.useState)(!1), {
        loading: FU,
        error: iU,
        setError: AU,
        onFiles: zU
      } = (0, jU.g)((async UU => {
        const RU = await (0, hU.loadPageShaderPackCompiler)();
        if (!RU) return void AU(JU("shaderPack:compilerUnavailable"));
        const gU = await (0, QU.f)(RU, UU.files);
        if (oU({
            pack: UU,
            validation: gU,
            sourceBytes: (0, PU.x)(UU.files)
          }), !fU) {
          var tU;
          if ("" !== VU.current.trim() && VU.current !== rU.current || (rU.current = (0, pU.P)(UU.manifest.name.trim(), pU.z), XU(rU.current)), "" === HU.current.trim() || HU.current === SU.current) SU.current = (0, pU.P)((null !== (tU = UU.manifest.description) && void 0 !== tU ? tU : "").trim(), pU.r), sU(SU.current);
          aU((UU => UU + 1))
        }
      })), MU = !nU && !wU.isLoggedIn() && !EU.b.offlineMode, DU = YU.trim(), LU = DU.length < pU.A, NU = null !== bU && !1 !== (null === (GU = bU.validation) || void 0 === GU ? void 0 : GU.ok) && !FU && !LU && !MU && !nU;
      return (0, WU.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, WU.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: fU ? JU("shaderPackListing:uploadIntro", {
            minutes: String(pU.I / 6e4)
          }) : JU("shaderPackListing:publishIntro")
        }), (0, WU.jsx)(IU, {}), MU && (0, WU.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: JU("shaderPackListing:publishNeedsLogin")
        }), (0, WU.jsx)(jU.e, {
          busy: FU,
          disabled: FU || yU,
          onFiles: UU => {
            oU(null), zU(UU)
          }
        }), bU && (0, WU.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, WU.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: bU.pack.manifest.name
          }), (0, WU.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [JU("shaderPackListing:sizeValue", {
              kilobytes: String((0, eU.L)(bU.sourceBytes))
            }), " \xb7", " ", JU("shaderPackListing:filesValue", {
              files: String(bU.pack.files.length)
            })]
          }), (0, WU.jsx)(xU, {
            picked: bU
          })]
        }), !fU && (0, WU.jsxs)(WU.Fragment, {
          children: [(0, WU.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, WU.jsx)("span", {
              children: JU("general:name")
            }), (0, WU.jsx)(KU.d, {
              className: "ShaderPackPublishInput",
              defaultValue: YU,
              maxLength: pU.z,
              onValueChange: XU
            }, ZU), bU && LU && (0, WU.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: JU("shaderPackListing:nameTooShort", {
                min: String(pU.A)
              })
            })]
          }), (0, WU.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, WU.jsx)("span", {
              children: JU("general:description")
            }), (0, WU.jsx)(KU.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: vU,
              maxLength: pU.r,
              onValueChange: sU,
              useTextarea: !0
            }, ZU)]
          })]
        }), iU && (0, WU.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: iU
        }), (0, WU.jsxs)(qU.j, {
          className: "ShaderPackPublishButton",
          disabled: !NU,
          loading: yU,
          onClick: () => {
            !async function() {
              var UU;
              if (!bU) return;
              const {
                name: RU,
                description: gU
              } = null !== fU && void 0 !== fU ? fU : {
                name: DU,
                description: vU.trim()
              }, tU = {
                packId: null !== (UU = null === fU || void 0 === fU ? void 0 : fU.packId) && void 0 !== UU ? UU : null,
                name: RU,
                description: gU,
                apiVersion: bU.pack.manifest.apiVersion,
                files: (0, PU.t)(bU.pack.files),
                keepCircleShadows: !0 === bU.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(tU)).byteLength > 1024 * pU.O) AU(JU("shaderPackListing:publishTooBig", {
                kilobytes: String(pU.O)
              }));
              else {
                kU(!0), AU(null);
                try {
                  mU(await uU.c.publishShaderPack(wU, tU))
                } catch (EU) {
                  console.error("Failed to publish the shader pack", EU), AU((0, eU.q)(EU, JU, "shaderPackListing:publishFailed"))
                } finally {
                  kU(!1)
                }
              }
            }()
          },
          children: [(0, WU.jsx)(TU.c, {
            name: "upload"
          }), " ", JU(fU ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function xU(UU) {
      let {
        picked: RU
      } = UU;
      const {
        t: gU
      } = (0, CU.B)(), {
        validation: tU
      } = RU;
      return null === tU ? (0, WU.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: gU("shaderPackListing:publishUnchecked")
      }) : tU.ok ? (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, WU.jsx)(TU.c, {
            name: "circle-check"
          }), " ", gU("shaderPackListing:publishReady")]
        }), tU.offInStrict.length > 0 && (0, WU.jsxs)(WU.Fragment, {
          children: [(0, WU.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, WU.jsx)(TU.c, {
              name: "triangle-exclamation"
            }), " ", gU("shaderPack:offInStrict")]
          }), (0, WU.jsx)(GU.b, {
            diagnostics: tU.offInStrict,
            t: gU
          })]
        })]
      }) : (0, WU.jsxs)(WU.Fragment, {
        children: [(0, WU.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, WU.jsx)(TU.c, {
            name: "triangle-exclamation"
          }), " ", gU("shaderPackListing:publishHasErrors")]
        }), (0, WU.jsx)(GU.b, {
          diagnostics: tU.errors,
          more: tU.moreErrors,
          t: gU
        })]
      })
    }
    const mU = "\0";

    function IU() {
      const {
        t: UU
      } = (0, CU.B)(), [RU, gU] = UU("shaderPackListing:bloxdhubHelp", {
        site: mU
      }).split(mU);
      return (0, WU.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [RU, (0, WU.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: pU.k,
          target: "_blank",
          rel: "noopener noreferrer",
          children: pU.e
        }), gU]
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);