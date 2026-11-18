export const id = 116;
export const ids = [116];
export const modules = {
  5833: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ShaderPackPublishForm: () => Cy
    });
    var Uy = Wy(55),
      hy = Wy(5801),
      fy = Wy(175),
      Zy = Wy(5835),
      cb = Wy(910),
      Py = Wy(1273),
      oy = Wy(1486),
      By = Wy(980),
      Ky = Wy(5844),
      ey = Wy(5860),
      qb = Wy(1339),
      sy = Wy(1042),
      Sy = Wy(5867),
      Ey = Wy(5911),
      ly = Wy(5799),
      mb = Wy(952);

    function Cy(yb) {
      var bb, Wy, Ky;
      let {
        existing: Cy,
        onPublished: Vy
      } = yb;
      const {
        t: gb
      } = (0, sy.D)(), {
        userContext: Gy,
        isUserContextUpdating: Oy
      } = (0, By.c)(), [Ry, vb] = (0, Uy.useState)(null), [ib, My] = (0, Uy.useState)(0), [Yy, Xy] = (0, Uy.useState)(null !== (bb = null === Cy || void 0 === Cy ? void 0 : Cy.name) && void 0 !== bb ? bb : ""), ny = (0, Uy.useRef)(Yy), uy = (0, Uy.useRef)(""), rb = yb => {
        ny.current = yb, Xy(yb)
      }, [Hy, ab] = (0, Uy.useState)(null !== (Wy = null === Cy || void 0 === Cy ? void 0 : Cy.description) && void 0 !== Wy ? Wy : ""), Fy = (0, Uy.useRef)(Hy), py = (0, Uy.useRef)(""), Ly = yb => {
        Fy.current = yb, ab(yb)
      }, [Qy, jb] = (0, Uy.useState)(!1), {
        loading: Dy,
        error: tb,
        setError: wy,
        onFiles: kb
      } = (0, ey.f)((async yb => {
        const bb = await (0, Sy.loadPageShaderPackCompiler)();
        if (!bb) return void wy(gb("shaderPack:compilerUnavailable"));
        const Wy = await (0, Ey.e)(bb, yb.files);
        if (vb({
            pack: yb,
            validation: Wy,
            sourceBytes: (0, Zy.x)(yb.files)
          }), !Cy) {
          var Uy;
          if ("" !== ny.current.trim() && ny.current !== uy.current || (uy.current = (0, hy.Y)(yb.manifest.name.trim(), hy.H), rb(uy.current)), "" === Fy.current.trim() || Fy.current === py.current) py.current = (0, hy.Y)((null !== (Uy = yb.manifest.description) && void 0 !== Uy ? Uy : "").trim(), hy.r), Ly(py.current);
          My((yb => yb + 1))
        }
      })), Ny = !Oy && !Gy.isLoggedIn() && !fy.e.offlineMode, zb = Yy.trim(), Iy = zb.length < hy.J, xb = null !== Ry && !1 !== (null === (Ky = Ry.validation) || void 0 === Ky ? void 0 : Ky.ok) && !Dy && !Iy && !Ny && !Oy;
      return (0, mb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, mb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Cy ? gb("shaderPackListing:uploadIntro", {
            minutes: String(hy.R / 6e4)
          }) : gb("shaderPackListing:publishIntro")
        }), (0, mb.jsx)(Jy, {}), Ny && (0, mb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: gb("shaderPackListing:publishNeedsLogin")
        }), (0, mb.jsx)(ey.d, {
          busy: Dy,
          disabled: Dy || Qy,
          onFiles: yb => {
            vb(null), kb(yb)
          }
        }), Ry && (0, mb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, mb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Ry.pack.manifest.name
          }), (0, mb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [gb("shaderPackListing:sizeValue", {
              kilobytes: String((0, ly.J)(Ry.sourceBytes))
            }), " \xb7", " ", gb("shaderPackListing:filesValue", {
              files: String(Ry.pack.files.length)
            })]
          }), (0, mb.jsx)(Ty, {
            picked: Ry
          })]
        }), !Cy && (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, mb.jsx)("span", {
              children: gb("general:name")
            }), (0, mb.jsx)(oy.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Yy,
              maxLength: hy.H,
              onValueChange: rb
            }, ib), Ry && Iy && (0, mb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: gb("shaderPackListing:nameTooShort", {
                min: String(hy.J)
              })
            })]
          }), (0, mb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, mb.jsx)("span", {
              children: gb("general:description")
            }), (0, mb.jsx)(oy.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Hy,
              maxLength: hy.r,
              onValueChange: Ly,
              useTextarea: !0
            }, ib)]
          })]
        }), tb && (0, mb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: tb
        }), (0, mb.jsxs)(Py.i, {
          className: "ShaderPackPublishButton",
          disabled: !xb,
          loading: Qy,
          onClick: () => {
            !async function() {
              var yb;
              if (!Ry) return;
              const {
                name: bb,
                description: Wy
              } = null !== Cy && void 0 !== Cy ? Cy : {
                name: zb,
                description: Hy.trim()
              }, Uy = {
                packId: null !== (yb = null === Cy || void 0 === Cy ? void 0 : Cy.packId) && void 0 !== yb ? yb : null,
                name: bb,
                description: Wy,
                apiVersion: Ry.pack.manifest.apiVersion,
                files: (0, Zy.u)(Ry.pack.files),
                keepCircleShadows: !0 === Ry.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Uy)).byteLength > 1024 * hy.V) wy(gb("shaderPackListing:publishTooBig", {
                kilobytes: String(hy.V)
              }));
              else {
                jb(!0), wy(null);
                try {
                  Vy(await qb.c.publishShaderPack(Gy, Uy))
                } catch (fy) {
                  console.error("Failed to publish the shader pack", fy), wy((0, ly.t)(fy, gb, "shaderPackListing:publishFailed"))
                } finally {
                  jb(!1)
                }
              }
            }()
          },
          children: [(0, mb.jsx)(cb.e, {
            name: "upload"
          }), " ", gb(Cy ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Ty(yb) {
      let {
        picked: bb
      } = yb;
      const {
        t: Wy
      } = (0, sy.D)(), {
        validation: Uy
      } = bb;
      return null === Uy ? (0, mb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Wy("shaderPackListing:publishUnchecked")
      }) : Uy.ok ? (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, mb.jsx)(cb.e, {
            name: "circle-check"
          }), " ", Wy("shaderPackListing:publishReady")]
        }), Uy.offInStrict.length > 0 && (0, mb.jsxs)(mb.Fragment, {
          children: [(0, mb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, mb.jsx)(cb.e, {
              name: "triangle-exclamation"
            }), " ", Wy("shaderPack:offInStrict")]
          }), (0, mb.jsx)(Ky.d, {
            diagnostics: Uy.offInStrict,
            t: Wy
          })]
        })]
      }) : (0, mb.jsxs)(mb.Fragment, {
        children: [(0, mb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, mb.jsx)(cb.e, {
            name: "triangle-exclamation"
          }), " ", Wy("shaderPackListing:publishHasErrors")]
        }), (0, mb.jsx)(Ky.d, {
          diagnostics: Uy.errors,
          more: Uy.moreErrors,
          t: Wy
        })]
      })
    }
    const Vy = "\0";

    function Jy() {
      const {
        t: yb
      } = (0, sy.D)(), [bb, Wy] = yb("shaderPackListing:bloxdhubHelp", {
        site: Vy
      }).split(Vy);
      return (0, mb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [bb, (0, mb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: hy.l,
          target: "_blank",
          rel: "noopener noreferrer",
          children: hy.e
        }), Wy]
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);