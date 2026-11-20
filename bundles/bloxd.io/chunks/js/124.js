export const id = 124;
export const ids = [124];
export const modules = {
  6357: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ShaderPackPublishForm: () => Hu
    });
    var Eu = yu(64),
      Ku = yu(6322),
      Qu = yu(219),
      mu = yu(6362),
      Ju = yu(1043),
      Nu = yu(1408),
      Xu = yu(1617),
      Vu = yu(1107),
      ru = yu(6370),
      Bu = yu(6389),
      xu = yu(1447),
      Su = yu(1170),
      pu = yu(6395),
      Tu = yu(6424),
      Wu = yu(6314),
      ju = yu(1079);

    function Hu(uu) {
      var Ru, yu, ru;
      let {
        existing: Hu,
        onPublished: bu
      } = uu;
      const {
        t: ku
      } = (0, Su.E)(), {
        userContext: eu,
        isUserContextUpdating: Au
      } = (0, Vu.d)(), [Du, Mu] = (0, Eu.useState)(null), [Iu, Gu] = (0, Eu.useState)(0), [Uu, nu] = (0, Eu.useState)(null !== (Ru = null === Hu || void 0 === Hu ? void 0 : Hu.name) && void 0 !== Ru ? Ru : ""), su = (0, Eu.useRef)(Uu), tu = (0, Eu.useRef)(""), lu = uu => {
        su.current = uu, nu(uu)
      }, [gu, cu] = (0, Eu.useState)(null !== (yu = null === Hu || void 0 === Hu ? void 0 : Hu.description) && void 0 !== yu ? yu : ""), Lu = (0, Eu.useRef)(gu), zu = (0, Eu.useRef)(""), Fu = uu => {
        Lu.current = uu, cu(uu)
      }, [wu, Zu] = (0, Eu.useState)(!1), {
        loading: hu,
        error: Pu,
        setError: iu,
        onFiles: Yu
      } = (0, Bu.d)((async uu => {
        const Ru = await (0, pu.loadPageShaderPackCompiler)();
        if (!Ru) return void iu(ku("shaderPack:compilerUnavailable"));
        const yu = await (0, Tu.g)(Ru, uu.files);
        if (Mu({
            pack: uu,
            validation: yu,
            sourceBytes: (0, mu.x)(uu.files)
          }), !Hu) {
          var Eu;
          if ("" !== su.current.trim() && su.current !== tu.current || (tu.current = (0, Ku.R)(uu.manifest.name.trim(), Ku.w), lu(tu.current)), "" === Lu.current.trim() || Lu.current === zu.current) zu.current = (0, Ku.R)((null !== (Eu = uu.manifest.description) && void 0 !== Eu ? Eu : "").trim(), Ku.l), Fu(zu.current);
          Gu((uu => uu + 1))
        }
      })), ou = !Au && !eu.isLoggedIn() && !Qu.b.offlineMode, qu = Uu.trim(), Ou = qu.length < Ku.x, vu = null !== Du && !1 !== (null === (ru = Du.validation) || void 0 === ru ? void 0 : ru.ok) && !hu && !Ou && !ou && !Au;
      return (0, ju.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, ju.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Hu ? ku("shaderPackListing:uploadIntro", {
            minutes: String(Ku.D / 6e4)
          }) : ku("shaderPackListing:publishIntro")
        }), (0, ju.jsx)(Cu, {}), ou && (0, ju.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: ku("shaderPackListing:publishNeedsLogin")
        }), (0, ju.jsx)(Bu.b, {
          busy: hu,
          disabled: hu || wu,
          onFiles: uu => {
            Mu(null), Yu(uu)
          }
        }), Du && (0, ju.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, ju.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Du.pack.manifest.name
          }), (0, ju.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [ku("shaderPackListing:sizeValue", {
              kilobytes: String((0, Wu.K)(Du.sourceBytes))
            }), " \xb7", " ", ku("shaderPackListing:filesValue", {
              files: String(Du.pack.files.length)
            })]
          }), (0, ju.jsx)(du, {
            picked: Du
          })]
        }), !Hu && (0, ju.jsxs)(ju.Fragment, {
          children: [(0, ju.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ju.jsx)("span", {
              children: ku("general:name")
            }), (0, ju.jsx)(Xu.b, {
              className: "ShaderPackPublishInput",
              defaultValue: Uu,
              maxLength: Ku.w,
              onValueChange: lu
            }, Iu), Du && Ou && (0, ju.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: ku("shaderPackListing:nameTooShort", {
                min: String(Ku.x)
              })
            })]
          }), (0, ju.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ju.jsx)("span", {
              children: ku("general:description")
            }), (0, ju.jsx)(Xu.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: gu,
              maxLength: Ku.l,
              onValueChange: Fu,
              useTextarea: !0
            }, Iu)]
          })]
        }), Pu && (0, ju.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Pu
        }), (0, ju.jsxs)(Nu.l, {
          className: "ShaderPackPublishButton",
          disabled: !vu,
          loading: wu,
          onClick: () => {
            !async function() {
              var uu;
              if (!Du) return;
              const {
                name: Ru,
                description: yu
              } = null !== Hu && void 0 !== Hu ? Hu : {
                name: qu,
                description: gu.trim()
              }, Eu = {
                packId: null !== (uu = null === Hu || void 0 === Hu ? void 0 : Hu.packId) && void 0 !== uu ? uu : null,
                name: Ru,
                description: yu,
                apiVersion: Du.pack.manifest.apiVersion,
                files: (0, mu.w)(Du.pack.files),
                keepCircleShadows: !0 === Du.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Eu)).byteLength > 1024 * Ku.N) iu(ku("shaderPackListing:publishTooBig", {
                kilobytes: String(Ku.N)
              }));
              else {
                Zu(!0), iu(null);
                try {
                  bu(await xu.e.publishShaderPack(eu, Eu))
                } catch (Qu) {
                  console.error("Failed to publish the shader pack", Qu), iu((0, Wu.u)(Qu, ku, "shaderPackListing:publishFailed"))
                } finally {
                  Zu(!1)
                }
              }
            }()
          },
          children: [(0, ju.jsx)(Ju.c, {
            name: "upload"
          }), " ", ku(Hu ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function du(uu) {
      let {
        picked: Ru
      } = uu;
      const {
        t: yu
      } = (0, Su.E)(), {
        validation: Eu
      } = Ru;
      return null === Eu ? (0, ju.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: yu("shaderPackListing:publishUnchecked")
      }) : Eu.ok ? (0, ju.jsxs)(ju.Fragment, {
        children: [(0, ju.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, ju.jsx)(Ju.c, {
            name: "circle-check"
          }), " ", yu("shaderPackListing:publishReady")]
        }), Eu.offInStrict.length > 0 && (0, ju.jsxs)(ju.Fragment, {
          children: [(0, ju.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, ju.jsx)(Ju.c, {
              name: "triangle-exclamation"
            }), " ", yu("shaderPack:offInStrict")]
          }), (0, ju.jsx)(ru.d, {
            diagnostics: Eu.offInStrict,
            t: yu
          })]
        })]
      }) : (0, ju.jsxs)(ju.Fragment, {
        children: [(0, ju.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, ju.jsx)(Ju.c, {
            name: "triangle-exclamation"
          }), " ", yu("shaderPackListing:publishHasErrors")]
        }), (0, ju.jsx)(ru.d, {
          diagnostics: Eu.errors,
          more: Eu.moreErrors,
          t: yu
        })]
      })
    }
    const bu = "\0";

    function Cu() {
      const {
        t: uu
      } = (0, Su.E)(), [Ru, yu] = uu("shaderPackListing:bloxdhubHelp", {
        site: bu
      }).split(bu);
      return (0, ju.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Ru, (0, ju.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Ku.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Ku.c
        }), yu]
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);