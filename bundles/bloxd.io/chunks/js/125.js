export const id = 125;
export const ids = [125];
export const modules = {
  6456: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      ShaderPackPublishForm: () => oq
    });
    var Yq = gq(57),
      lq = gq(6424),
      Oq = gq(195),
      mq = gq(6458),
      xq = gq(1025),
      Aq = gq(1422),
      cq = gq(1659),
      uq = gq(1101),
      Bq = gq(6467),
      Wq = gq(6490),
      Nq = gq(1477),
      aq = gq(1183),
      Vq = gq(6496),
      dq = gq(6526),
      jq = gq(6422),
      Hq = gq(1070);

    function oq(qq) {
      var Eq, gq, Bq;
      let {
        existing: oq,
        onPublished: Qq
      } = qq;
      const {
        t: tq
      } = (0, aq.v)(), {
        userContext: rq,
        isUserContextUpdating: vq
      } = (0, uq.c)(), [hq, nq] = (0, Yq.useState)(null), [bq, iq] = (0, Yq.useState)(0), [Zq, fq] = (0, Yq.useState)(null !== (Eq = null === oq || void 0 === oq ? void 0 : oq.name) && void 0 !== Eq ? Eq : ""), Mq = (0, Yq.useRef)(Zq), Tq = (0, Yq.useRef)(""), zq = qq => {
        Mq.current = qq, fq(qq)
      }, [Sq, pq] = (0, Yq.useState)(null !== (gq = null === oq || void 0 === oq ? void 0 : oq.description) && void 0 !== gq ? gq : ""), Gq = (0, Yq.useRef)(Sq), Lq = (0, Yq.useRef)(""), Jq = qq => {
        Gq.current = qq, pq(qq)
      }, [kq, Rq] = (0, Yq.useState)(!1), {
        loading: Uq,
        error: Fq,
        setError: sq,
        onFiles: Xq
      } = (0, Wq.c)((async qq => {
        const Eq = await (0, Vq.loadPageShaderPackCompiler)();
        if (!Eq) return void sq(tq("shaderPack:compilerUnavailable"));
        const gq = await (0, dq.e)(Eq, qq.files);
        if (nq({
            pack: qq,
            validation: gq,
            sourceBytes: (0, mq.A)(qq.files)
          }), !oq) {
          var Yq;
          if ("" !== Mq.current.trim() && Mq.current !== Tq.current || (Tq.current = (0, lq.R)(qq.manifest.name.trim(), lq.z), zq(Tq.current)), "" === Gq.current.trim() || Gq.current === Lq.current) Lq.current = (0, lq.R)((null !== (Yq = qq.manifest.description) && void 0 !== Yq ? Yq : "").trim(), lq.n), Jq(Lq.current);
          iq((qq => qq + 1))
        }
      })), wq = !vq && !rq.isLoggedIn() && !Oq.c.offlineMode, Kq = Zq.trim(), Cq = Kq.length < lq.D, Iq = null !== hq && !1 !== (null === (Bq = hq.validation) || void 0 === Bq ? void 0 : Bq.ok) && !Uq && !Cq && !wq && !vq;
      return (0, Hq.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Hq.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: oq ? tq("shaderPackListing:uploadIntro", {
            minutes: String(lq.G / 6e4)
          }) : tq("shaderPackListing:publishIntro")
        }), (0, Hq.jsx)(yq, {}), wq && (0, Hq.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: tq("shaderPackListing:publishNeedsLogin")
        }), (0, Hq.jsx)(Wq.b, {
          busy: Uq,
          disabled: Uq || kq,
          onFiles: qq => {
            nq(null), Xq(qq)
          }
        }), hq && (0, Hq.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Hq.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: hq.pack.manifest.name
          }), (0, Hq.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [tq("shaderPackListing:sizeValue", {
              kilobytes: String((0, jq.O)(hq.sourceBytes))
            }), " \xb7", " ", tq("shaderPackListing:filesValue", {
              files: String(hq.pack.files.length)
            })]
          }), (0, Hq.jsx)(Pq, {
            picked: hq
          })]
        }), !oq && (0, Hq.jsxs)(Hq.Fragment, {
          children: [(0, Hq.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Hq.jsx)("span", {
              children: tq("general:name")
            }), (0, Hq.jsx)(cq.b, {
              className: "ShaderPackPublishInput",
              defaultValue: Zq,
              maxLength: lq.z,
              onValueChange: zq
            }, bq), hq && Cq && (0, Hq.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: tq("shaderPackListing:nameTooShort", {
                min: String(lq.D)
              })
            })]
          }), (0, Hq.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Hq.jsx)("span", {
              children: tq("general:description")
            }), (0, Hq.jsx)(cq.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Sq,
              maxLength: lq.n,
              onValueChange: Jq,
              useTextarea: !0
            }, bq)]
          })]
        }), Fq && (0, Hq.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Fq
        }), (0, Hq.jsxs)(Aq.p, {
          className: "ShaderPackPublishButton",
          disabled: !Iq,
          loading: kq,
          onClick: () => {
            !async function() {
              var qq;
              if (!hq) return;
              const {
                name: Eq,
                description: gq
              } = null !== oq && void 0 !== oq ? oq : {
                name: Kq,
                description: Sq.trim()
              }, Yq = {
                packId: null !== (qq = null === oq || void 0 === oq ? void 0 : oq.packId) && void 0 !== qq ? qq : null,
                name: Eq,
                description: gq,
                apiVersion: hq.pack.manifest.apiVersion,
                files: (0, mq.w)(hq.pack.files),
                keepCircleShadows: !0 === hq.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Yq)).byteLength > 1024 * lq.N) sq(tq("shaderPackListing:publishTooBig", {
                kilobytes: String(lq.N)
              }));
              else {
                Rq(!0), sq(null);
                try {
                  Qq(await Nq.e.publishShaderPack(rq, Yq))
                } catch (Oq) {
                  console.error("Failed to publish the shader pack", Oq), sq((0, jq.s)(Oq, tq, "shaderPackListing:publishFailed"))
                } finally {
                  Rq(!1)
                }
              }
            }()
          },
          children: [(0, Hq.jsx)(xq.d, {
            name: "upload"
          }), " ", tq(oq ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Pq(qq) {
      let {
        picked: Eq
      } = qq;
      const {
        t: gq
      } = (0, aq.v)(), {
        validation: Yq
      } = Eq;
      return null === Yq ? (0, Hq.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: gq("shaderPackListing:publishUnchecked")
      }) : Yq.ok ? (0, Hq.jsxs)(Hq.Fragment, {
        children: [(0, Hq.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Hq.jsx)(xq.d, {
            name: "circle-check"
          }), " ", gq("shaderPackListing:publishReady")]
        }), Yq.offInStrict.length > 0 && (0, Hq.jsxs)(Hq.Fragment, {
          children: [(0, Hq.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Hq.jsx)(xq.d, {
              name: "triangle-exclamation"
            }), " ", gq("shaderPack:offInStrict")]
          }), (0, Hq.jsx)(Bq.b, {
            diagnostics: Yq.offInStrict,
            t: gq
          })]
        })]
      }) : (0, Hq.jsxs)(Hq.Fragment, {
        children: [(0, Hq.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Hq.jsx)(xq.d, {
            name: "triangle-exclamation"
          }), " ", gq("shaderPackListing:publishHasErrors")]
        }), (0, Hq.jsx)(Bq.b, {
          diagnostics: Yq.errors,
          more: Yq.moreErrors,
          t: gq
        })]
      })
    }
    const Qq = "\0";

    function yq() {
      const {
        t: qq
      } = (0, aq.v)(), [Eq, gq] = qq("shaderPackListing:bloxdhubHelp", {
        site: Qq
      }).split(Qq);
      return (0, Hq.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Eq, (0, Hq.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: lq.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: lq.e
        }), gq]
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);