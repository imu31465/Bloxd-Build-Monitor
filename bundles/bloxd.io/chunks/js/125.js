export const id = 125;
export const ids = [125];
export const modules = {
  6406: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      ShaderPackPublishForm: () => GQ
    });
    var LQ = wQ(53),
      qQ = wQ(6374),
      oQ = wQ(210),
      DQ = wQ(6414),
      kQ = wQ(1079),
      vQ = wQ(1451),
      mQ = wQ(1682),
      uQ = wQ(1140),
      HQ = wQ(6422),
      bQ = wQ(6435),
      YQ = wQ(1489),
      xQ = wQ(1207),
      AQ = wQ(6438),
      tQ = wQ(6476),
      eQ = wQ(6371),
      MQ = wQ(1107);

    function GQ(QQ) {
      var FQ, wQ, HQ;
      let {
        existing: GQ,
        onPublished: cQ
      } = QQ;
      const {
        t: SQ
      } = (0, xQ.y)(), {
        userContext: iQ,
        isUserContextUpdating: WQ
      } = (0, uQ.e)(), [RQ, OQ] = (0, LQ.useState)(null), [sQ, rQ] = (0, LQ.useState)(0), [IQ, UQ] = (0, LQ.useState)(null !== (FQ = null === GQ || void 0 === GQ ? void 0 : GQ.name) && void 0 !== FQ ? FQ : ""), NQ = (0, LQ.useRef)(IQ), TQ = (0, LQ.useRef)(""), KQ = QQ => {
        NQ.current = QQ, UQ(QQ)
      }, [zQ, lQ] = (0, LQ.useState)(null !== (wQ = null === GQ || void 0 === GQ ? void 0 : GQ.description) && void 0 !== wQ ? wQ : ""), jQ = (0, LQ.useRef)(zQ), aQ = (0, LQ.useRef)(""), XQ = QQ => {
        jQ.current = QQ, lQ(QQ)
      }, [fQ, VQ] = (0, LQ.useState)(!1), {
        loading: hQ,
        error: JQ,
        setError: EQ,
        onFiles: nQ
      } = (0, bQ.g)((async QQ => {
        const FQ = await (0, AQ.loadPageShaderPackCompiler)();
        if (!FQ) return void EQ(SQ("shaderPack:compilerUnavailable"));
        const wQ = await (0, tQ.f)(FQ, QQ.files);
        if (OQ({
            pack: QQ,
            validation: wQ,
            sourceBytes: (0, DQ.v)(QQ.files)
          }), !GQ) {
          var LQ;
          if ("" !== NQ.current.trim() && NQ.current !== TQ.current || (TQ.current = (0, qQ.O)(QQ.manifest.name.trim(), qQ.z), KQ(TQ.current)), "" === jQ.current.trim() || jQ.current === aQ.current) aQ.current = (0, qQ.O)((null !== (LQ = QQ.manifest.description) && void 0 !== LQ ? LQ : "").trim(), qQ.p), XQ(aQ.current);
          rQ((QQ => QQ + 1))
        }
      })), gQ = !WQ && !iQ.isLoggedIn() && !oQ.d.offlineMode, PQ = IQ.trim(), ZQ = PQ.length < qQ.B, yQ = null !== RQ && !1 !== (null === (HQ = RQ.validation) || void 0 === HQ ? void 0 : HQ.ok) && !hQ && !ZQ && !gQ && !WQ;
      return (0, MQ.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, MQ.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: GQ ? SQ("shaderPackListing:uploadIntro", {
            minutes: String(qQ.H / 6e4)
          }) : SQ("shaderPackListing:publishIntro")
        }), (0, MQ.jsx)(CQ, {}), gQ && (0, MQ.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: SQ("shaderPackListing:publishNeedsLogin")
        }), (0, MQ.jsx)(bQ.c, {
          busy: hQ,
          disabled: hQ || fQ,
          onFiles: QQ => {
            OQ(null), nQ(QQ)
          }
        }), RQ && (0, MQ.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, MQ.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: RQ.pack.manifest.name
          }), (0, MQ.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [SQ("shaderPackListing:sizeValue", {
              kilobytes: String((0, eQ.R)(RQ.sourceBytes))
            }), " \xb7", " ", SQ("shaderPackListing:filesValue", {
              files: String(RQ.pack.files.length)
            })]
          }), (0, MQ.jsx)(pQ, {
            picked: RQ
          })]
        }), !GQ && (0, MQ.jsxs)(MQ.Fragment, {
          children: [(0, MQ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, MQ.jsx)("span", {
              children: SQ("general:name")
            }), (0, MQ.jsx)(mQ.b, {
              className: "ShaderPackPublishInput",
              defaultValue: IQ,
              maxLength: qQ.z,
              onValueChange: KQ
            }, sQ), RQ && ZQ && (0, MQ.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: SQ("shaderPackListing:nameTooShort", {
                min: String(qQ.B)
              })
            })]
          }), (0, MQ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, MQ.jsx)("span", {
              children: SQ("general:description")
            }), (0, MQ.jsx)(mQ.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: zQ,
              maxLength: qQ.p,
              onValueChange: XQ,
              useTextarea: !0
            }, sQ)]
          })]
        }), JQ && (0, MQ.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: JQ
        }), (0, MQ.jsxs)(vQ.m, {
          className: "ShaderPackPublishButton",
          disabled: !yQ,
          loading: fQ,
          onClick: () => {
            !async function() {
              var QQ;
              if (!RQ) return;
              const {
                name: FQ,
                description: wQ
              } = null !== GQ && void 0 !== GQ ? GQ : {
                name: PQ,
                description: zQ.trim()
              }, LQ = {
                packId: null !== (QQ = null === GQ || void 0 === GQ ? void 0 : GQ.packId) && void 0 !== QQ ? QQ : null,
                name: FQ,
                description: wQ,
                apiVersion: RQ.pack.manifest.apiVersion,
                files: (0, DQ.r)(RQ.pack.files),
                keepCircleShadows: !0 === RQ.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(LQ)).byteLength > 1024 * qQ.L) EQ(SQ("shaderPackListing:publishTooBig", {
                kilobytes: String(qQ.L)
              }));
              else {
                VQ(!0), EQ(null);
                try {
                  cQ(await YQ.b.publishShaderPack(iQ, LQ))
                } catch (oQ) {
                  console.error("Failed to publish the shader pack", oQ), EQ((0, eQ.z)(oQ, SQ, "shaderPackListing:publishFailed"))
                } finally {
                  VQ(!1)
                }
              }
            }()
          },
          children: [(0, MQ.jsx)(kQ.c, {
            name: "upload"
          }), " ", SQ(GQ ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function pQ(QQ) {
      let {
        picked: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, xQ.y)(), {
        validation: LQ
      } = FQ;
      return null === LQ ? (0, MQ.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: wQ("shaderPackListing:publishUnchecked")
      }) : LQ.ok ? (0, MQ.jsxs)(MQ.Fragment, {
        children: [(0, MQ.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, MQ.jsx)(kQ.c, {
            name: "circle-check"
          }), " ", wQ("shaderPackListing:publishReady")]
        }), LQ.offInStrict.length > 0 && (0, MQ.jsxs)(MQ.Fragment, {
          children: [(0, MQ.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, MQ.jsx)(kQ.c, {
              name: "triangle-exclamation"
            }), " ", wQ("shaderPack:offInStrict")]
          }), (0, MQ.jsx)(HQ.e, {
            diagnostics: LQ.offInStrict,
            t: wQ
          })]
        })]
      }) : (0, MQ.jsxs)(MQ.Fragment, {
        children: [(0, MQ.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, MQ.jsx)(kQ.c, {
            name: "triangle-exclamation"
          }), " ", wQ("shaderPackListing:publishHasErrors")]
        }), (0, MQ.jsx)(HQ.e, {
          diagnostics: LQ.errors,
          more: LQ.moreErrors,
          t: wQ
        })]
      })
    }
    const cQ = "\0";

    function CQ() {
      const {
        t: QQ
      } = (0, xQ.y)(), [FQ, wQ] = QQ("shaderPackListing:bloxdhubHelp", {
        site: cQ
      }).split(cQ);
      return (0, MQ.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [FQ, (0, MQ.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: qQ.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: qQ.c
        }), wQ]
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);