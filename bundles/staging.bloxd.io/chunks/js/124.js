export const id = 124;
export const ids = [124];
export const modules = {
  6337: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ShaderPackPublishForm: () => gD
    });
    var ID = cD(53),
      pD = cD(6298),
      iD = cD(199),
      fD = cD(6343),
      bD = cD(1064),
      QD = cD(1442),
      wD = cD(1655),
      SD = cD(1120),
      BD = cD(6350),
      yD = cD(6362),
      MD = cD(1497),
      tD = cD(1192),
      ZD = cD(6366),
      oD = cD(6401),
      vD = cD(6291),
      ND = cD(1093);

    function gD(DD) {
      var CD, cD, BD;
      let {
        existing: gD,
        onPublished: mD
      } = DD;
      const {
        t: OD
      } = (0, tD.F)(), {
        userContext: PD,
        isUserContextUpdating: HD
      } = (0, SD.c)(), [UD, xD] = (0, ID.useState)(null), [qD, JD] = (0, ID.useState)(0), [KD, aD] = (0, ID.useState)(null !== (CD = null === gD || void 0 === gD ? void 0 : gD.name) && void 0 !== CD ? CD : ""), VD = (0, ID.useRef)(KD), zD = (0, ID.useRef)(""), jD = DD => {
        VD.current = DD, aD(DD)
      }, [lD, LD] = (0, ID.useState)(null !== (cD = null === gD || void 0 === gD ? void 0 : gD.description) && void 0 !== cD ? cD : ""), TD = (0, ID.useRef)(lD), GD = (0, ID.useRef)(""), RD = DD => {
        TD.current = DD, LD(DD)
      }, [kD, dD] = (0, ID.useState)(!1), {
        loading: YD,
        error: WD,
        setError: sD,
        onFiles: ED
      } = (0, yD.e)((async DD => {
        const CD = await (0, ZD.loadPageShaderPackCompiler)();
        if (!CD) return void sD(OD("shaderPack:compilerUnavailable"));
        const cD = await (0, oD.f)(CD, DD.files);
        if (xD({
            pack: DD,
            validation: cD,
            sourceBytes: (0, fD.A)(DD.files)
          }), !gD) {
          var ID;
          if ("" !== VD.current.trim() && VD.current !== zD.current || (zD.current = (0, pD.U)(DD.manifest.name.trim(), pD.C), jD(zD.current)), "" === TD.current.trim() || TD.current === GD.current) GD.current = (0, pD.U)((null !== (ID = DD.manifest.description) && void 0 !== ID ? ID : "").trim(), pD.t), RD(GD.current);
          JD((DD => DD + 1))
        }
      })), eD = !HD && !PD.isLoggedIn() && !iD.e.offlineMode, uD = KD.trim(), hD = uD.length < pD.E, rD = null !== UD && !1 !== (null === (BD = UD.validation) || void 0 === BD ? void 0 : BD.ok) && !YD && !hD && !eD && !HD;
      return (0, ND.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, ND.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: gD ? OD("shaderPackListing:uploadIntro", {
            minutes: String(pD.L / 6e4)
          }) : OD("shaderPackListing:publishIntro")
        }), (0, ND.jsx)(nD, {}), eD && (0, ND.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: OD("shaderPackListing:publishNeedsLogin")
        }), (0, ND.jsx)(yD.d, {
          busy: YD,
          disabled: YD || kD,
          onFiles: DD => {
            xD(null), ED(DD)
          }
        }), UD && (0, ND.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, ND.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: UD.pack.manifest.name
          }), (0, ND.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [OD("shaderPackListing:sizeValue", {
              kilobytes: String((0, vD.P)(UD.sourceBytes))
            }), " \xb7", " ", OD("shaderPackListing:filesValue", {
              files: String(UD.pack.files.length)
            })]
          }), (0, ND.jsx)(XD, {
            picked: UD
          })]
        }), !gD && (0, ND.jsxs)(ND.Fragment, {
          children: [(0, ND.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ND.jsx)("span", {
              children: OD("general:name")
            }), (0, ND.jsx)(wD.b, {
              className: "ShaderPackPublishInput",
              defaultValue: KD,
              maxLength: pD.C,
              onValueChange: jD
            }, qD), UD && hD && (0, ND.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: OD("shaderPackListing:nameTooShort", {
                min: String(pD.E)
              })
            })]
          }), (0, ND.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ND.jsx)("span", {
              children: OD("general:description")
            }), (0, ND.jsx)(wD.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: lD,
              maxLength: pD.t,
              onValueChange: RD,
              useTextarea: !0
            }, qD)]
          })]
        }), WD && (0, ND.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: WD
        }), (0, ND.jsxs)(QD.o, {
          className: "ShaderPackPublishButton",
          disabled: !rD,
          loading: kD,
          onClick: () => {
            !async function() {
              var DD;
              if (!UD) return;
              const {
                name: CD,
                description: cD
              } = null !== gD && void 0 !== gD ? gD : {
                name: uD,
                description: lD.trim()
              }, ID = {
                packId: null !== (DD = null === gD || void 0 === gD ? void 0 : gD.packId) && void 0 !== DD ? DD : null,
                name: CD,
                description: cD,
                apiVersion: UD.pack.manifest.apiVersion,
                files: (0, fD.w)(UD.pack.files),
                keepCircleShadows: !0 === UD.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(ID)).byteLength > 1024 * pD.T) sD(OD("shaderPackListing:publishTooBig", {
                kilobytes: String(pD.T)
              }));
              else {
                dD(!0), sD(null);
                try {
                  mD(await MD.c.publishShaderPack(PD, ID))
                } catch (iD) {
                  console.error("Failed to publish the shader pack", iD), sD((0, vD.w)(iD, OD, "shaderPackListing:publishFailed"))
                } finally {
                  dD(!1)
                }
              }
            }()
          },
          children: [(0, ND.jsx)(bD.c, {
            name: "upload"
          }), " ", OD(gD ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function XD(DD) {
      let {
        picked: CD
      } = DD;
      const {
        t: cD
      } = (0, tD.F)(), {
        validation: ID
      } = CD;
      return null === ID ? (0, ND.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: cD("shaderPackListing:publishUnchecked")
      }) : ID.ok ? (0, ND.jsxs)(ND.Fragment, {
        children: [(0, ND.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, ND.jsx)(bD.c, {
            name: "circle-check"
          }), " ", cD("shaderPackListing:publishReady")]
        }), ID.offInStrict.length > 0 && (0, ND.jsxs)(ND.Fragment, {
          children: [(0, ND.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, ND.jsx)(bD.c, {
              name: "triangle-exclamation"
            }), " ", cD("shaderPack:offInStrict")]
          }), (0, ND.jsx)(BD.b, {
            diagnostics: ID.offInStrict,
            t: cD
          })]
        })]
      }) : (0, ND.jsxs)(ND.Fragment, {
        children: [(0, ND.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, ND.jsx)(bD.c, {
            name: "triangle-exclamation"
          }), " ", cD("shaderPackListing:publishHasErrors")]
        }), (0, ND.jsx)(BD.b, {
          diagnostics: ID.errors,
          more: ID.moreErrors,
          t: cD
        })]
      })
    }
    const mD = "\0";

    function nD() {
      const {
        t: DD
      } = (0, tD.F)(), [CD, cD] = DD("shaderPackListing:bloxdhubHelp", {
        site: mD
      }).split(mD);
      return (0, ND.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [CD, (0, ND.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: pD.k,
          target: "_blank",
          rel: "noopener noreferrer",
          children: pD.e
        }), cD]
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);