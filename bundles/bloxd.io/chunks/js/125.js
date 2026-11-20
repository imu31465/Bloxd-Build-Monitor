export const id = 125;
export const ids = [125];
export const modules = {
  6316: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ShaderPackPublishForm: () => Kb
    });
    var Bb = hb(49),
      Ob = hb(6281),
      Gb = hb(194),
      Ub = hb(6324),
      Lb = hb(966),
      Yb = hb(1357),
      Sb = hb(1585),
      ab = hb(1029),
      Hb = hb(6331),
      wb = hb(6347),
      Zb = hb(1398),
      Xb = hb(1095),
      pb = hb(6350),
      ob = hb(6384),
      Ab = hb(6279),
      lb = hb(1007);

    function Kb(bb) {
      var ub, hb, Hb;
      let {
        existing: Kb,
        onPublished: Cb
      } = bb;
      const {
        t: rb
      } = (0, Xb.K)(), {
        userContext: jb,
        isUserContextUpdating: nb
      } = (0, ab.d)(), [Db, xb] = (0, Bb.useState)(null), [zb, gb] = (0, Bb.useState)(0), [ib, vb] = (0, Bb.useState)(null !== (ub = null === Kb || void 0 === Kb ? void 0 : Kb.name) && void 0 !== ub ? ub : ""), tb = (0, Bb.useRef)(ib), Jb = (0, Bb.useRef)(""), eb = bb => {
        tb.current = bb, vb(bb)
      }, [Nb, sb] = (0, Bb.useState)(null !== (hb = null === Kb || void 0 === Kb ? void 0 : Kb.description) && void 0 !== hb ? hb : ""), Mb = (0, Bb.useRef)(Nb), mb = (0, Bb.useRef)(""), Ib = bb => {
        Mb.current = bb, sb(bb)
      }, [Pb, qb] = (0, Bb.useState)(!1), {
        loading: Eb,
        error: yb,
        setError: Vb,
        onFiles: Fb
      } = (0, wb.d)((async bb => {
        const ub = await (0, pb.loadPageShaderPackCompiler)();
        if (!ub) return void Vb(rb("shaderPack:compilerUnavailable"));
        const hb = await (0, ob.d)(ub, bb.files);
        if (xb({
            pack: bb,
            validation: hb,
            sourceBytes: (0, Ub.z)(bb.files)
          }), !Kb) {
          var Bb;
          if ("" !== tb.current.trim() && tb.current !== Jb.current || (Jb.current = (0, Ob.L)(bb.manifest.name.trim(), Ob.s), eb(Jb.current)), "" === Mb.current.trim() || Mb.current === mb.current) mb.current = (0, Ob.L)((null !== (Bb = bb.manifest.description) && void 0 !== Bb ? Bb : "").trim(), Ob.l), Ib(mb.current);
          gb((bb => bb + 1))
        }
      })), fb = !nb && !jb.isLoggedIn() && !Gb.e.offlineMode, kb = ib.trim(), Tb = kb.length < Ob.v, cb = null !== Db && !1 !== (null === (Hb = Db.validation) || void 0 === Hb ? void 0 : Hb.ok) && !Eb && !Tb && !fb && !nb;
      return (0, lb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, lb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Kb ? rb("shaderPackListing:uploadIntro", {
            minutes: String(Ob.A / 6e4)
          }) : rb("shaderPackListing:publishIntro")
        }), (0, lb.jsx)(db, {}), fb && (0, lb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: rb("shaderPackListing:publishNeedsLogin")
        }), (0, lb.jsx)(wb.c, {
          busy: Eb,
          disabled: Eb || Pb,
          onFiles: bb => {
            xb(null), Fb(bb)
          }
        }), Db && (0, lb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, lb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Db.pack.manifest.name
          }), (0, lb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [rb("shaderPackListing:sizeValue", {
              kilobytes: String((0, Ab.P)(Db.sourceBytes))
            }), " \xb7", " ", rb("shaderPackListing:filesValue", {
              files: String(Db.pack.files.length)
            })]
          }), (0, lb.jsx)(Wb, {
            picked: Db
          })]
        }), !Kb && (0, lb.jsxs)(lb.Fragment, {
          children: [(0, lb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, lb.jsx)("span", {
              children: rb("general:name")
            }), (0, lb.jsx)(Sb.b, {
              className: "ShaderPackPublishInput",
              defaultValue: ib,
              maxLength: Ob.s,
              onValueChange: eb
            }, zb), Db && Tb && (0, lb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: rb("shaderPackListing:nameTooShort", {
                min: String(Ob.v)
              })
            })]
          }), (0, lb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, lb.jsx)("span", {
              children: rb("general:description")
            }), (0, lb.jsx)(Sb.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Nb,
              maxLength: Ob.l,
              onValueChange: Ib,
              useTextarea: !0
            }, zb)]
          })]
        }), yb && (0, lb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: yb
        }), (0, lb.jsxs)(Yb.m, {
          className: "ShaderPackPublishButton",
          disabled: !cb,
          loading: Pb,
          onClick: () => {
            !async function() {
              var bb;
              if (!Db) return;
              const {
                name: ub,
                description: hb
              } = null !== Kb && void 0 !== Kb ? Kb : {
                name: kb,
                description: Nb.trim()
              }, Bb = {
                packId: null !== (bb = null === Kb || void 0 === Kb ? void 0 : Kb.packId) && void 0 !== bb ? bb : null,
                name: ub,
                description: hb,
                apiVersion: Db.pack.manifest.apiVersion,
                files: (0, Ub.v)(Db.pack.files),
                keepCircleShadows: !0 === Db.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Bb)).byteLength > 1024 * Ob.J) Vb(rb("shaderPackListing:publishTooBig", {
                kilobytes: String(Ob.J)
              }));
              else {
                qb(!0), Vb(null);
                try {
                  Cb(await Zb.e.publishShaderPack(jb, Bb))
                } catch (Gb) {
                  console.error("Failed to publish the shader pack", Gb), Vb((0, Ab.w)(Gb, rb, "shaderPackListing:publishFailed"))
                } finally {
                  qb(!1)
                }
              }
            }()
          },
          children: [(0, lb.jsx)(Lb.e, {
            name: "upload"
          }), " ", rb(Kb ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Wb(bb) {
      let {
        picked: ub
      } = bb;
      const {
        t: hb
      } = (0, Xb.K)(), {
        validation: Bb
      } = ub;
      return null === Bb ? (0, lb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: hb("shaderPackListing:publishUnchecked")
      }) : Bb.ok ? (0, lb.jsxs)(lb.Fragment, {
        children: [(0, lb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, lb.jsx)(Lb.e, {
            name: "circle-check"
          }), " ", hb("shaderPackListing:publishReady")]
        }), Bb.offInStrict.length > 0 && (0, lb.jsxs)(lb.Fragment, {
          children: [(0, lb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, lb.jsx)(Lb.e, {
              name: "triangle-exclamation"
            }), " ", hb("shaderPack:offInStrict")]
          }), (0, lb.jsx)(Hb.b, {
            diagnostics: Bb.offInStrict,
            t: hb
          })]
        })]
      }) : (0, lb.jsxs)(lb.Fragment, {
        children: [(0, lb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, lb.jsx)(Lb.e, {
            name: "triangle-exclamation"
          }), " ", hb("shaderPackListing:publishHasErrors")]
        }), (0, lb.jsx)(Hb.b, {
          diagnostics: Bb.errors,
          more: Bb.moreErrors,
          t: hb
        })]
      })
    }
    const Cb = "\0";

    function db() {
      const {
        t: bb
      } = (0, Xb.K)(), [ub, hb] = bb("shaderPackListing:bloxdhubHelp", {
        site: Cb
      }).split(Cb);
      return (0, lb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ub, (0, lb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Ob.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Ob.d
        }), hb]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);