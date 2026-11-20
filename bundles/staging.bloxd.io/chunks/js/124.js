export const id = 124;
export const ids = [124];
export const modules = {
  6203: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ShaderPackPublishForm: () => Db
    });
    var Ab = Ub(52),
      Mb = Ub(6167),
      Tb = Ub(210),
      Eb = Ub(6212),
      Yb = Ub(990),
      Bb = Ub(1352),
      eb = Ub(1589),
      vb = Ub(1060),
      Lb = Ub(6219),
      Pb = Ub(6237),
      Xb = Ub(1413),
      jb = Ub(1134),
      Rb = Ub(6244),
      kb = Ub(6281),
      yb = Ub(6161),
      Zb = Ub(1023);

    function Db(bb) {
      var ab, Ub, Lb;
      let {
        existing: Db,
        onPublished: xb
      } = bb;
      const {
        t: fb
      } = (0, jb.A)(), {
        userContext: mb,
        isUserContextUpdating: pb
      } = (0, vb.c)(), [Nb, Wb] = (0, Ab.useState)(null), [Hb, Ib] = (0, Ab.useState)(0), [db, Fb] = (0, Ab.useState)(null !== (ab = null === Db || void 0 === Db ? void 0 : Db.name) && void 0 !== ab ? ab : ""), hb = (0, Ab.useRef)(db), Gb = (0, Ab.useRef)(""), Qb = bb => {
        hb.current = bb, Fb(bb)
      }, [qb, ub] = (0, Ab.useState)(null !== (Ub = null === Db || void 0 === Db ? void 0 : Db.description) && void 0 !== Ub ? Ub : ""), rb = (0, Ab.useRef)(qb), Kb = (0, Ab.useRef)(""), ob = bb => {
        rb.current = bb, ub(bb)
      }, [lb, tb] = (0, Ab.useState)(!1), {
        loading: wb,
        error: sb,
        setError: gb,
        onFiles: Cb
      } = (0, Pb.g)((async bb => {
        const ab = await (0, Rb.loadPageShaderPackCompiler)();
        if (!ab) return void gb(fb("shaderPack:compilerUnavailable"));
        const Ub = await (0, kb.d)(ab, bb.files);
        if (Wb({
            pack: bb,
            validation: Ub,
            sourceBytes: (0, Eb.y)(bb.files)
          }), !Db) {
          var Ab;
          if ("" !== hb.current.trim() && hb.current !== Gb.current || (Gb.current = (0, Mb.T)(bb.manifest.name.trim(), Mb.C), Qb(Gb.current)), "" === rb.current.trim() || rb.current === Kb.current) Kb.current = (0, Mb.T)((null !== (Ab = bb.manifest.description) && void 0 !== Ab ? Ab : "").trim(), Mb.o), ob(Kb.current);
          Ib((bb => bb + 1))
        }
      })), Vb = !pb && !mb.isLoggedIn() && !Tb.e.offlineMode, Ob = db.trim(), cb = Ob.length < Mb.E, Jb = null !== Nb && !1 !== (null === (Lb = Nb.validation) || void 0 === Lb ? void 0 : Lb.ok) && !wb && !cb && !Vb && !pb;
      return (0, Zb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Zb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Db ? fb("shaderPackListing:uploadIntro", {
            minutes: String(Mb.I / 6e4)
          }) : fb("shaderPackListing:publishIntro")
        }), (0, Zb.jsx)(ib, {}), Vb && (0, Zb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: fb("shaderPackListing:publishNeedsLogin")
        }), (0, Zb.jsx)(Pb.d, {
          busy: wb,
          disabled: wb || lb,
          onFiles: bb => {
            Wb(null), Cb(bb)
          }
        }), Nb && (0, Zb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Zb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Nb.pack.manifest.name
          }), (0, Zb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [fb("shaderPackListing:sizeValue", {
              kilobytes: String((0, yb.O)(Nb.sourceBytes))
            }), " \xb7", " ", fb("shaderPackListing:filesValue", {
              files: String(Nb.pack.files.length)
            })]
          }), (0, Zb.jsx)(zb, {
            picked: Nb
          })]
        }), !Db && (0, Zb.jsxs)(Zb.Fragment, {
          children: [(0, Zb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Zb.jsx)("span", {
              children: fb("general:name")
            }), (0, Zb.jsx)(eb.c, {
              className: "ShaderPackPublishInput",
              defaultValue: db,
              maxLength: Mb.C,
              onValueChange: Qb
            }, Hb), Nb && cb && (0, Zb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: fb("shaderPackListing:nameTooShort", {
                min: String(Mb.E)
              })
            })]
          }), (0, Zb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Zb.jsx)("span", {
              children: fb("general:description")
            }), (0, Zb.jsx)(eb.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: qb,
              maxLength: Mb.o,
              onValueChange: ob,
              useTextarea: !0
            }, Hb)]
          })]
        }), sb && (0, Zb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: sb
        }), (0, Zb.jsxs)(Bb.m, {
          className: "ShaderPackPublishButton",
          disabled: !Jb,
          loading: lb,
          onClick: () => {
            !async function() {
              var bb;
              if (!Nb) return;
              const {
                name: ab,
                description: Ub
              } = null !== Db && void 0 !== Db ? Db : {
                name: Ob,
                description: qb.trim()
              }, Ab = {
                packId: null !== (bb = null === Db || void 0 === Db ? void 0 : Db.packId) && void 0 !== bb ? bb : null,
                name: ab,
                description: Ub,
                apiVersion: Nb.pack.manifest.apiVersion,
                files: (0, Eb.w)(Nb.pack.files),
                keepCircleShadows: !0 === Nb.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Ab)).byteLength > 1024 * Mb.R) gb(fb("shaderPackListing:publishTooBig", {
                kilobytes: String(Mb.R)
              }));
              else {
                tb(!0), gb(null);
                try {
                  xb(await Xb.b.publishShaderPack(mb, Ab))
                } catch (Tb) {
                  console.error("Failed to publish the shader pack", Tb), gb((0, yb.z)(Tb, fb, "shaderPackListing:publishFailed"))
                } finally {
                  tb(!1)
                }
              }
            }()
          },
          children: [(0, Zb.jsx)(Yb.e, {
            name: "upload"
          }), " ", fb(Db ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function zb(bb) {
      let {
        picked: ab
      } = bb;
      const {
        t: Ub
      } = (0, jb.A)(), {
        validation: Ab
      } = ab;
      return null === Ab ? (0, Zb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Ub("shaderPackListing:publishUnchecked")
      }) : Ab.ok ? (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Zb.jsx)(Yb.e, {
            name: "circle-check"
          }), " ", Ub("shaderPackListing:publishReady")]
        }), Ab.offInStrict.length > 0 && (0, Zb.jsxs)(Zb.Fragment, {
          children: [(0, Zb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Zb.jsx)(Yb.e, {
              name: "triangle-exclamation"
            }), " ", Ub("shaderPack:offInStrict")]
          }), (0, Zb.jsx)(Lb.d, {
            diagnostics: Ab.offInStrict,
            t: Ub
          })]
        })]
      }) : (0, Zb.jsxs)(Zb.Fragment, {
        children: [(0, Zb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Zb.jsx)(Yb.e, {
            name: "triangle-exclamation"
          }), " ", Ub("shaderPackListing:publishHasErrors")]
        }), (0, Zb.jsx)(Lb.d, {
          diagnostics: Ab.errors,
          more: Ab.moreErrors,
          t: Ub
        })]
      })
    }
    const xb = "\0";

    function ib() {
      const {
        t: bb
      } = (0, jb.A)(), [ab, Ub] = bb("shaderPackListing:bloxdhubHelp", {
        site: xb
      }).split(xb);
      return (0, Zb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ab, (0, Zb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Mb.j,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Mb.e
        }), Ub]
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);