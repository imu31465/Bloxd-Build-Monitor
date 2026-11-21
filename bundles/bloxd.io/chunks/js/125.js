export const id = 125;
export const ids = [125];
export const modules = {
  6451: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ShaderPackPublishForm: () => Gd
    });
    var pd = kd(56),
      Nd = kd(6425),
      Wd = kd(195),
      Pd = kd(6457),
      Zd = kd(1059),
      gd = kd(1461),
      Cd = kd(1714),
      Kd = kd(1140),
      od = kd(6459),
      ld = kd(6472),
      Qd = kd(1520),
      Ld = kd(1211),
      Od = kd(6478),
      ed = kd(6522),
      Rd = kd(6419),
      Id = kd(1103);

    function Gd(dd) {
      var Jd, kd, od;
      let {
        existing: Gd,
        onPublished: xd
      } = dd;
      const {
        t: Bd
      } = (0, Ld.B)(), {
        userContext: sd,
        isUserContextUpdating: ad
      } = (0, Kd.c)(), [Md, Fd] = (0, pd.useState)(null), [Yd, md] = (0, pd.useState)(0), [bd, Sd] = (0, pd.useState)(null !== (Jd = null === Gd || void 0 === Gd ? void 0 : Gd.name) && void 0 !== Jd ? Jd : ""), jd = (0, pd.useRef)(bd), Xd = (0, pd.useRef)(""), fd = dd => {
        jd.current = dd, Sd(dd)
      }, [nd, Ud] = (0, pd.useState)(null !== (kd = null === Gd || void 0 === Gd ? void 0 : Gd.description) && void 0 !== kd ? kd : ""), yd = (0, pd.useRef)(nd), Dd = (0, pd.useRef)(""), Td = dd => {
        yd.current = dd, Ud(dd)
      }, [Ed, cd] = (0, pd.useState)(!1), {
        loading: hd,
        error: rd,
        setError: ud,
        onFiles: td
      } = (0, ld.h)((async dd => {
        const Jd = await (0, Od.loadPageShaderPackCompiler)();
        if (!Jd) return void ud(Bd("shaderPack:compilerUnavailable"));
        const kd = await (0, ed.f)(Jd, dd.files);
        if (Fd({
            pack: dd,
            validation: kd,
            sourceBytes: (0, Pd.w)(dd.files)
          }), !Gd) {
          var pd;
          if ("" !== jd.current.trim() && jd.current !== Xd.current || (Xd.current = (0, Nd.I)(dd.manifest.name.trim(), Nd.t), fd(Xd.current)), "" === yd.current.trim() || yd.current === Dd.current) Dd.current = (0, Nd.I)((null !== (pd = dd.manifest.description) && void 0 !== pd ? pd : "").trim(), Nd.m), Td(Dd.current);
          md((dd => dd + 1))
        }
      })), Vd = !ad && !sd.isLoggedIn() && !Wd.b.offlineMode, zd = bd.trim(), Hd = zd.length < Nd.v, wd = null !== Md && !1 !== (null === (od = Md.validation) || void 0 === od ? void 0 : od.ok) && !hd && !Hd && !Vd && !ad;
      return (0, Id.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Id.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Gd ? Bd("shaderPackListing:uploadIntro", {
            minutes: String(Nd.z / 6e4)
          }) : Bd("shaderPackListing:publishIntro")
        }), (0, Id.jsx)(qd, {}), Vd && (0, Id.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Bd("shaderPackListing:publishNeedsLogin")
        }), (0, Id.jsx)(ld.e, {
          busy: hd,
          disabled: hd || Ed,
          onFiles: dd => {
            Fd(null), td(dd)
          }
        }), Md && (0, Id.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Id.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Md.pack.manifest.name
          }), (0, Id.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Bd("shaderPackListing:sizeValue", {
              kilobytes: String((0, Rd.R)(Md.sourceBytes))
            }), " \xb7", " ", Bd("shaderPackListing:filesValue", {
              files: String(Md.pack.files.length)
            })]
          }), (0, Id.jsx)(vd, {
            picked: Md
          })]
        }), !Gd && (0, Id.jsxs)(Id.Fragment, {
          children: [(0, Id.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Id.jsx)("span", {
              children: Bd("general:name")
            }), (0, Id.jsx)(Cd.e, {
              className: "ShaderPackPublishInput",
              defaultValue: bd,
              maxLength: Nd.t,
              onValueChange: fd
            }, Yd), Md && Hd && (0, Id.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Bd("shaderPackListing:nameTooShort", {
                min: String(Nd.v)
              })
            })]
          }), (0, Id.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Id.jsx)("span", {
              children: Bd("general:description")
            }), (0, Id.jsx)(Cd.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: nd,
              maxLength: Nd.m,
              onValueChange: Td,
              useTextarea: !0
            }, Yd)]
          })]
        }), rd && (0, Id.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: rd
        }), (0, Id.jsxs)(gd.j, {
          className: "ShaderPackPublishButton",
          disabled: !wd,
          loading: Ed,
          onClick: () => {
            !async function() {
              var dd;
              if (!Md) return;
              const {
                name: Jd,
                description: kd
              } = null !== Gd && void 0 !== Gd ? Gd : {
                name: zd,
                description: nd.trim()
              }, pd = {
                packId: null !== (dd = null === Gd || void 0 === Gd ? void 0 : Gd.packId) && void 0 !== dd ? dd : null,
                name: Jd,
                description: kd,
                apiVersion: Md.pack.manifest.apiVersion,
                files: (0, Pd.v)(Md.pack.files),
                keepCircleShadows: !0 === Md.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(pd)).byteLength > 1024 * Nd.G) ud(Bd("shaderPackListing:publishTooBig", {
                kilobytes: String(Nd.G)
              }));
              else {
                cd(!0), ud(null);
                try {
                  xd(await Qd.d.publishShaderPack(sd, pd))
                } catch (Wd) {
                  console.error("Failed to publish the shader pack", Wd), ud((0, Rd.x)(Wd, Bd, "shaderPackListing:publishFailed"))
                } finally {
                  cd(!1)
                }
              }
            }()
          },
          children: [(0, Id.jsx)(Zd.e, {
            name: "upload"
          }), " ", Bd(Gd ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function vd(dd) {
      let {
        picked: Jd
      } = dd;
      const {
        t: kd
      } = (0, Ld.B)(), {
        validation: pd
      } = Jd;
      return null === pd ? (0, Id.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: kd("shaderPackListing:publishUnchecked")
      }) : pd.ok ? (0, Id.jsxs)(Id.Fragment, {
        children: [(0, Id.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Id.jsx)(Zd.e, {
            name: "circle-check"
          }), " ", kd("shaderPackListing:publishReady")]
        }), pd.offInStrict.length > 0 && (0, Id.jsxs)(Id.Fragment, {
          children: [(0, Id.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Id.jsx)(Zd.e, {
              name: "triangle-exclamation"
            }), " ", kd("shaderPack:offInStrict")]
          }), (0, Id.jsx)(od.c, {
            diagnostics: pd.offInStrict,
            t: kd
          })]
        })]
      }) : (0, Id.jsxs)(Id.Fragment, {
        children: [(0, Id.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Id.jsx)(Zd.e, {
            name: "triangle-exclamation"
          }), " ", kd("shaderPackListing:publishHasErrors")]
        }), (0, Id.jsx)(od.c, {
          diagnostics: pd.errors,
          more: pd.moreErrors,
          t: kd
        })]
      })
    }
    const xd = "\0";

    function qd() {
      const {
        t: dd
      } = (0, Ld.B)(), [Jd, kd] = dd("shaderPackListing:bloxdhubHelp", {
        site: xd
      }).split(xd);
      return (0, Id.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Jd, (0, Id.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Nd.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Nd.c
        }), kd]
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);