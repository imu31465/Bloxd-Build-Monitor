export const id = 124;
export const ids = [124];
export const modules = {
  6244: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ShaderPackPublishForm: () => Nb
    });
    var kb = sb(64),
      Wb = sb(6209),
      ab = sb(230),
      Tb = sb(6250),
      Ub = sb(1039),
      Ib = sb(1431),
      Hb = sb(1664),
      fb = sb(1117),
      Mb = sb(6258),
      Xb = sb(6273),
      nb = sb(1474),
      mb = sb(1197),
      lb = sb(6276),
      Qb = sb(6314),
      eb = sb(6204),
      Cb = sb(1087);

    function Nb(bb) {
      var cb, sb, Mb;
      let {
        existing: Nb,
        onPublished: Lb
      } = bb;
      const {
        t: Yb
      } = (0, mb.E)(), {
        userContext: hb,
        isUserContextUpdating: Jb
      } = (0, fb.c)(), [gb, Bb] = (0, kb.useState)(null), [tb, yb] = (0, kb.useState)(0), [Pb, Db] = (0, kb.useState)(null !== (cb = null === Nb || void 0 === Nb ? void 0 : Nb.name) && void 0 !== cb ? cb : ""), Eb = (0, kb.useRef)(Pb), ib = (0, kb.useRef)(""), Ob = bb => {
        Eb.current = bb, Db(bb)
      }, [Gb, Kb] = (0, kb.useState)(null !== (sb = null === Nb || void 0 === Nb ? void 0 : Nb.description) && void 0 !== sb ? sb : ""), Zb = (0, kb.useRef)(Gb), zb = (0, kb.useRef)(""), qb = bb => {
        Zb.current = bb, Kb(bb)
      }, [db, Ab] = (0, kb.useState)(!1), {
        loading: wb,
        error: rb,
        setError: ob,
        onFiles: Sb
      } = (0, Xb.h)((async bb => {
        const cb = await (0, lb.loadPageShaderPackCompiler)();
        if (!cb) return void ob(Yb("shaderPack:compilerUnavailable"));
        const sb = await (0, Qb.d)(cb, bb.files);
        if (Bb({
            pack: bb,
            validation: sb,
            sourceBytes: (0, Tb.w)(bb.files)
          }), !Nb) {
          var kb;
          if ("" !== Eb.current.trim() && Eb.current !== ib.current || (ib.current = (0, Wb.Y)(bb.manifest.name.trim(), Wb.D), Ob(ib.current)), "" === Zb.current.trim() || Zb.current === zb.current) zb.current = (0, Wb.Y)((null !== (kb = bb.manifest.description) && void 0 !== kb ? kb : "").trim(), Wb.t), qb(zb.current);
          yb((bb => bb + 1))
        }
      })), Rb = !Jb && !hb.isLoggedIn() && !ab.d.offlineMode, vb = Pb.trim(), Fb = vb.length < Wb.H, xb = null !== gb && !1 !== (null === (Mb = gb.validation) || void 0 === Mb ? void 0 : Mb.ok) && !wb && !Fb && !Rb && !Jb;
      return (0, Cb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Cb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Nb ? Yb("shaderPackListing:uploadIntro", {
            minutes: String(Wb.M / 6e4)
          }) : Yb("shaderPackListing:publishIntro")
        }), (0, Cb.jsx)(ub, {}), Rb && (0, Cb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Yb("shaderPackListing:publishNeedsLogin")
        }), (0, Cb.jsx)(Xb.e, {
          busy: wb,
          disabled: wb || db,
          onFiles: bb => {
            Bb(null), Sb(bb)
          }
        }), gb && (0, Cb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Cb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: gb.pack.manifest.name
          }), (0, Cb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Yb("shaderPackListing:sizeValue", {
              kilobytes: String((0, eb.O)(gb.sourceBytes))
            }), " \xb7", " ", Yb("shaderPackListing:filesValue", {
              files: String(gb.pack.files.length)
            })]
          }), (0, Cb.jsx)(Vb, {
            picked: gb
          })]
        }), !Nb && (0, Cb.jsxs)(Cb.Fragment, {
          children: [(0, Cb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Cb.jsx)("span", {
              children: Yb("general:name")
            }), (0, Cb.jsx)(Hb.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Pb,
              maxLength: Wb.D,
              onValueChange: Ob
            }, tb), gb && Fb && (0, Cb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Yb("shaderPackListing:nameTooShort", {
                min: String(Wb.H)
              })
            })]
          }), (0, Cb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Cb.jsx)("span", {
              children: Yb("general:description")
            }), (0, Cb.jsx)(Hb.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Gb,
              maxLength: Wb.t,
              onValueChange: qb,
              useTextarea: !0
            }, tb)]
          })]
        }), rb && (0, Cb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: rb
        }), (0, Cb.jsxs)(Ib.n, {
          className: "ShaderPackPublishButton",
          disabled: !xb,
          loading: db,
          onClick: () => {
            !async function() {
              var bb;
              if (!gb) return;
              const {
                name: cb,
                description: sb
              } = null !== Nb && void 0 !== Nb ? Nb : {
                name: vb,
                description: Gb.trim()
              }, kb = {
                packId: null !== (bb = null === Nb || void 0 === Nb ? void 0 : Nb.packId) && void 0 !== bb ? bb : null,
                name: cb,
                description: sb,
                apiVersion: gb.pack.manifest.apiVersion,
                files: (0, Tb.u)(gb.pack.files),
                keepCircleShadows: !0 === gb.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(kb)).byteLength > 1024 * Wb.U) ob(Yb("shaderPackListing:publishTooBig", {
                kilobytes: String(Wb.U)
              }));
              else {
                Ab(!0), ob(null);
                try {
                  Lb(await nb.b.publishShaderPack(hb, kb))
                } catch (ab) {
                  console.error("Failed to publish the shader pack", ab), ob((0, eb.y)(ab, Yb, "shaderPackListing:publishFailed"))
                } finally {
                  Ab(!1)
                }
              }
            }()
          },
          children: [(0, Cb.jsx)(Ub.b, {
            name: "upload"
          }), " ", Yb(Nb ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Vb(bb) {
      let {
        picked: cb
      } = bb;
      const {
        t: sb
      } = (0, mb.E)(), {
        validation: kb
      } = cb;
      return null === kb ? (0, Cb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: sb("shaderPackListing:publishUnchecked")
      }) : kb.ok ? (0, Cb.jsxs)(Cb.Fragment, {
        children: [(0, Cb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Cb.jsx)(Ub.b, {
            name: "circle-check"
          }), " ", sb("shaderPackListing:publishReady")]
        }), kb.offInStrict.length > 0 && (0, Cb.jsxs)(Cb.Fragment, {
          children: [(0, Cb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Cb.jsx)(Ub.b, {
              name: "triangle-exclamation"
            }), " ", sb("shaderPack:offInStrict")]
          }), (0, Cb.jsx)(Mb.c, {
            diagnostics: kb.offInStrict,
            t: sb
          })]
        })]
      }) : (0, Cb.jsxs)(Cb.Fragment, {
        children: [(0, Cb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Cb.jsx)(Ub.b, {
            name: "triangle-exclamation"
          }), " ", sb("shaderPackListing:publishHasErrors")]
        }), (0, Cb.jsx)(Mb.c, {
          diagnostics: kb.errors,
          more: kb.moreErrors,
          t: sb
        })]
      })
    }
    const Lb = "\0";

    function ub() {
      const {
        t: bb
      } = (0, mb.E)(), [cb, sb] = bb("shaderPackListing:bloxdhubHelp", {
        site: Lb
      }).split(Lb);
      return (0, Cb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [cb, (0, Cb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Wb.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Wb.b
        }), sb]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);