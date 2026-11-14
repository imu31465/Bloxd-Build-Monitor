export const id = 113;
export const ids = [113];
export const modules = {
  5558: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      ShaderPackPublishForm: () => zB
    });
    var Vc = nc(73),
      Ic = nc(5523),
      rB = nc(181),
      uc = nc(5561),
      sc = nc(926),
      Mc = nc(1255),
      Pc = nc(1485),
      qB = nc(985),
      Oc = nc(5564),
      Tc = nc(5577),
      fc = nc(1314),
      mB = nc(1051),
      ec = nc(5583),
      tB = nc(5618),
      Sc = nc(5516),
      yB = nc(957);

    function zB(cB) {
      var Bc, nc, Oc;
      let {
        existing: zB,
        onPublished: hc
      } = cB;
      const {
        t: lc
      } = (0, mB.x)(), {
        userContext: Yc,
        isUserContextUpdating: Lc
      } = (0, qB.c)(), [gB, Uc] = (0, Vc.useState)(null), [bB, Zc] = (0, Vc.useState)(0), [Qc, Cc] = (0, Vc.useState)(null !== (Bc = null === zB || void 0 === zB ? void 0 : zB.name) && void 0 !== Bc ? Bc : ""), vB = (0, Vc.useRef)(Qc), Dc = (0, Vc.useRef)(""), Nc = cB => {
        vB.current = cB, Cc(cB)
      }, [Ec, oc] = (0, Vc.useState)(null !== (nc = null === zB || void 0 === zB ? void 0 : zB.description) && void 0 !== nc ? nc : ""), Wc = (0, Vc.useRef)(Ec), wc = (0, Vc.useRef)(""), kB = cB => {
        Wc.current = cB, oc(cB)
      }, [Xc, Hc] = (0, Vc.useState)(!1), {
        loading: Fc,
        error: Jc,
        setError: jB,
        onFiles: Rc
      } = (0, Tc.g)((async cB => {
        const Bc = await (0, ec.loadPageShaderPackCompiler)();
        if (!Bc) return void jB(lc("shaderPack:compilerUnavailable"));
        const nc = await (0, tB.h)(Bc, cB.files);
        if (Uc({
            pack: cB,
            validation: nc,
            sourceBytes: (0, uc.x)(cB.files)
          }), !zB) {
          var Vc;
          if ("" !== vB.current.trim() && vB.current !== Dc.current || (Dc.current = (0, Ic.T)(cB.manifest.name.trim(), Ic.z), Nc(Dc.current)), "" === Wc.current.trim() || Wc.current === wc.current) wc.current = (0, Ic.T)((null !== (Vc = cB.manifest.description) && void 0 !== Vc ? Vc : "").trim(), Ic.p), kB(wc.current);
          Zc((cB => cB + 1))
        }
      })), iB = !Lc && !Yc.isLoggedIn() && !rB.b.offlineMode, Kc = Qc.trim(), xB = Kc.length < Ic.C, dc = null !== gB && !1 !== (null === (Oc = gB.validation) || void 0 === Oc ? void 0 : Oc.ok) && !Fc && !xB && !iB && !Lc;
      return (0, yB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, yB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: zB ? lc("shaderPackListing:uploadIntro", {
            minutes: String(Ic.I / 6e4)
          }) : lc("shaderPackListing:publishIntro")
        }), (0, yB.jsx)(aB, {}), iB && (0, yB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: lc("shaderPackListing:publishNeedsLogin")
        }), (0, yB.jsx)(Tc.c, {
          busy: Fc,
          disabled: Fc || Xc,
          onFiles: cB => {
            Uc(null), Rc(cB)
          }
        }), gB && (0, yB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, yB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: gB.pack.manifest.name
          }), (0, yB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [lc("shaderPackListing:sizeValue", {
              kilobytes: String((0, Sc.R)(gB.sourceBytes))
            }), " \xb7", " ", lc("shaderPackListing:filesValue", {
              files: String(gB.pack.files.length)
            })]
          }), (0, yB.jsx)(pc, {
            picked: gB
          })]
        }), !zB && (0, yB.jsxs)(yB.Fragment, {
          children: [(0, yB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, yB.jsx)("span", {
              children: lc("general:name")
            }), (0, yB.jsx)(Pc.e, {
              className: "ShaderPackPublishInput",
              defaultValue: Qc,
              maxLength: Ic.z,
              onValueChange: Nc
            }, bB), gB && xB && (0, yB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: lc("shaderPackListing:nameTooShort", {
                min: String(Ic.C)
              })
            })]
          }), (0, yB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, yB.jsx)("span", {
              children: lc("general:description")
            }), (0, yB.jsx)(Pc.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Ec,
              maxLength: Ic.p,
              onValueChange: kB,
              useTextarea: !0
            }, bB)]
          })]
        }), Jc && (0, yB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Jc
        }), (0, yB.jsxs)(Mc.n, {
          className: "ShaderPackPublishButton",
          disabled: !dc,
          loading: Xc,
          onClick: () => {
            !async function() {
              var cB;
              if (!gB) return;
              const {
                name: Bc,
                description: nc
              } = null !== zB && void 0 !== zB ? zB : {
                name: Kc,
                description: Ec.trim()
              }, Vc = {
                packId: null !== (cB = null === zB || void 0 === zB ? void 0 : zB.packId) && void 0 !== cB ? cB : null,
                name: Bc,
                description: nc,
                apiVersion: gB.pack.manifest.apiVersion,
                files: (0, uc.u)(gB.pack.files),
                keepCircleShadows: !0 === gB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Vc)).byteLength > 1024 * Ic.P) jB(lc("shaderPackListing:publishTooBig", {
                kilobytes: String(Ic.P)
              }));
              else {
                Hc(!0), jB(null);
                try {
                  hc(await fc.e.publishShaderPack(Yc, Vc))
                } catch (rB) {
                  console.error("Failed to publish the shader pack", rB), jB((0, Sc.z)(rB, lc, "shaderPackListing:publishFailed"))
                } finally {
                  Hc(!1)
                }
              }
            }()
          },
          children: [(0, yB.jsx)(sc.e, {
            name: "upload"
          }), " ", lc(zB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function pc(cB) {
      let {
        picked: Bc
      } = cB;
      const {
        t: nc
      } = (0, mB.x)(), {
        validation: Vc
      } = Bc;
      return null === Vc ? (0, yB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: nc("shaderPackListing:publishUnchecked")
      }) : Vc.ok ? (0, yB.jsxs)(yB.Fragment, {
        children: [(0, yB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, yB.jsx)(sc.e, {
            name: "circle-check"
          }), " ", nc("shaderPackListing:publishReady")]
        }), Vc.offInStrict.length > 0 && (0, yB.jsxs)(yB.Fragment, {
          children: [(0, yB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, yB.jsx)(sc.e, {
              name: "triangle-exclamation"
            }), " ", nc("shaderPack:offInStrict")]
          }), (0, yB.jsx)(Oc.b, {
            diagnostics: Vc.offInStrict,
            t: nc
          })]
        })]
      }) : (0, yB.jsxs)(yB.Fragment, {
        children: [(0, yB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, yB.jsx)(sc.e, {
            name: "triangle-exclamation"
          }), " ", nc("shaderPackListing:publishHasErrors")]
        }), (0, yB.jsx)(Oc.b, {
          diagnostics: Vc.errors,
          more: Vc.moreErrors,
          t: nc
        })]
      })
    }
    const hc = "\0";

    function aB() {
      const {
        t: cB
      } = (0, mB.x)(), [Bc, nc] = cB("shaderPackListing:bloxdhubHelp", {
        site: hc
      }).split(hc);
      return (0, yB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Bc, (0, yB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Ic.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Ic.c
        }), nc]
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);