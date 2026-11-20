export const id = 124;
export const ids = [124];
export const modules = {
  6302: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      ShaderPackPublishForm: () => Gv
    });
    var hv = Pv(52),
      Sv = Pv(6268),
      ev = Pv(194),
      gv = Pv(6306),
      pv = Pv(1042),
      dv = Pv(1442),
      Nv = Pv(1647),
      lv = Pv(1108),
      Tv = Pv(6315),
      Wv = Pv(6335),
      wv = Pv(1482),
      av = Pv(1175),
      sv = Pv(6339),
      Cv = Pv(6367),
      iv = Pv(6263),
      cv = Pv(1082);

    function Gv(vv) {
      var zv, Pv, Tv;
      let {
        existing: Gv,
        onPublished: jv
      } = vv;
      const {
        t: Fv
      } = (0, av.x)(), {
        userContext: Yv,
        isUserContextUpdating: nv
      } = (0, lv.d)(), [Ov, Dv] = (0, hv.useState)(null), [Kv, Vv] = (0, hv.useState)(0), [Uv, Rv] = (0, hv.useState)(null !== (zv = null === Gv || void 0 === Gv ? void 0 : Gv.name) && void 0 !== zv ? zv : ""), xv = (0, hv.useRef)(Uv), tv = (0, hv.useRef)(""), qv = vv => {
        xv.current = vv, Rv(vv)
      }, [Iv, Qv] = (0, hv.useState)(null !== (Pv = null === Gv || void 0 === Gv ? void 0 : Gv.description) && void 0 !== Pv ? Pv : ""), Zv = (0, hv.useRef)(Iv), Av = (0, hv.useRef)(""), Lv = vv => {
        Zv.current = vv, Qv(vv)
      }, [Hv, Mv] = (0, hv.useState)(!1), {
        loading: yv,
        error: Bv,
        setError: Jv,
        onFiles: Ev
      } = (0, Wv.f)((async vv => {
        const zv = await (0, sv.loadPageShaderPackCompiler)();
        if (!zv) return void Jv(Fv("shaderPack:compilerUnavailable"));
        const Pv = await (0, Cv.e)(zv, vv.files);
        if (Dv({
            pack: vv,
            validation: Pv,
            sourceBytes: (0, gv.x)(vv.files)
          }), !Gv) {
          var hv;
          if ("" !== xv.current.trim() && xv.current !== tv.current || (tv.current = (0, Sv.R)(vv.manifest.name.trim(), Sv.A), qv(tv.current)), "" === Zv.current.trim() || Zv.current === Av.current) Av.current = (0, Sv.R)((null !== (hv = vv.manifest.description) && void 0 !== hv ? hv : "").trim(), Sv.q), Lv(Av.current);
          Vv((vv => vv + 1))
        }
      })), ov = !nv && !Yv.isLoggedIn() && !ev.e.offlineMode, bv = Uv.trim(), rv = bv.length < Sv.B, kv = null !== Ov && !1 !== (null === (Tv = Ov.validation) || void 0 === Tv ? void 0 : Tv.ok) && !yv && !rv && !ov && !nv;
      return (0, cv.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, cv.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Gv ? Fv("shaderPackListing:uploadIntro", {
            minutes: String(Sv.G / 6e4)
          }) : Fv("shaderPackListing:publishIntro")
        }), (0, cv.jsx)(fv, {}), ov && (0, cv.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Fv("shaderPackListing:publishNeedsLogin")
        }), (0, cv.jsx)(Wv.d, {
          busy: yv,
          disabled: yv || Hv,
          onFiles: vv => {
            Dv(null), Ev(vv)
          }
        }), Ov && (0, cv.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, cv.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Ov.pack.manifest.name
          }), (0, cv.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Fv("shaderPackListing:sizeValue", {
              kilobytes: String((0, iv.K)(Ov.sourceBytes))
            }), " \xb7", " ", Fv("shaderPackListing:filesValue", {
              files: String(Ov.pack.files.length)
            })]
          }), (0, cv.jsx)(mv, {
            picked: Ov
          })]
        }), !Gv && (0, cv.jsxs)(cv.Fragment, {
          children: [(0, cv.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, cv.jsx)("span", {
              children: Fv("general:name")
            }), (0, cv.jsx)(Nv.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Uv,
              maxLength: Sv.A,
              onValueChange: qv
            }, Kv), Ov && rv && (0, cv.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Fv("shaderPackListing:nameTooShort", {
                min: String(Sv.B)
              })
            })]
          }), (0, cv.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, cv.jsx)("span", {
              children: Fv("general:description")
            }), (0, cv.jsx)(Nv.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Iv,
              maxLength: Sv.q,
              onValueChange: Lv,
              useTextarea: !0
            }, Kv)]
          })]
        }), Bv && (0, cv.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Bv
        }), (0, cv.jsxs)(dv.j, {
          className: "ShaderPackPublishButton",
          disabled: !kv,
          loading: Hv,
          onClick: () => {
            !async function() {
              var vv;
              if (!Ov) return;
              const {
                name: zv,
                description: Pv
              } = null !== Gv && void 0 !== Gv ? Gv : {
                name: bv,
                description: Iv.trim()
              }, hv = {
                packId: null !== (vv = null === Gv || void 0 === Gv ? void 0 : Gv.packId) && void 0 !== vv ? vv : null,
                name: zv,
                description: Pv,
                apiVersion: Ov.pack.manifest.apiVersion,
                files: (0, gv.u)(Ov.pack.files),
                keepCircleShadows: !0 === Ov.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(hv)).byteLength > 1024 * Sv.N) Jv(Fv("shaderPackListing:publishTooBig", {
                kilobytes: String(Sv.N)
              }));
              else {
                Mv(!0), Jv(null);
                try {
                  jv(await wv.e.publishShaderPack(Yv, hv))
                } catch (ev) {
                  console.error("Failed to publish the shader pack", ev), Jv((0, iv.w)(ev, Fv, "shaderPackListing:publishFailed"))
                } finally {
                  Mv(!1)
                }
              }
            }()
          },
          children: [(0, cv.jsx)(pv.b, {
            name: "upload"
          }), " ", Fv(Gv ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function mv(vv) {
      let {
        picked: zv
      } = vv;
      const {
        t: Pv
      } = (0, av.x)(), {
        validation: hv
      } = zv;
      return null === hv ? (0, cv.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Pv("shaderPackListing:publishUnchecked")
      }) : hv.ok ? (0, cv.jsxs)(cv.Fragment, {
        children: [(0, cv.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, cv.jsx)(pv.b, {
            name: "circle-check"
          }), " ", Pv("shaderPackListing:publishReady")]
        }), hv.offInStrict.length > 0 && (0, cv.jsxs)(cv.Fragment, {
          children: [(0, cv.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, cv.jsx)(pv.b, {
              name: "triangle-exclamation"
            }), " ", Pv("shaderPack:offInStrict")]
          }), (0, cv.jsx)(Tv.e, {
            diagnostics: hv.offInStrict,
            t: Pv
          })]
        })]
      }) : (0, cv.jsxs)(cv.Fragment, {
        children: [(0, cv.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, cv.jsx)(pv.b, {
            name: "triangle-exclamation"
          }), " ", Pv("shaderPackListing:publishHasErrors")]
        }), (0, cv.jsx)(Tv.e, {
          diagnostics: hv.errors,
          more: hv.moreErrors,
          t: Pv
        })]
      })
    }
    const jv = "\0";

    function fv() {
      const {
        t: vv
      } = (0, av.x)(), [zv, Pv] = vv("shaderPackListing:bloxdhubHelp", {
        site: jv
      }).split(jv);
      return (0, cv.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [zv, (0, cv.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Sv.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Sv.c
        }), Pv]
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);