export const id = 125;
export const ids = [125];
export const modules = {
  6144: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ShaderPackPublishForm: () => mY
    });
    var FY = DY(61),
      AY = DY(6112),
      IY = DY(222),
      RY = DY(6150),
      OY = DY(1098),
      gY = DY(1437),
      aY = DY(1654),
      vY = DY(1152),
      uY = DY(6157),
      sY = DY(6176),
      iY = DY(1471),
      yY = DY(1211),
      QY = DY(6182),
      oY = DY(6212),
      WY = DY(6108),
      EY = DY(1125);

    function mY(YY) {
      var rY, DY, uY;
      let {
        existing: mY,
        onPublished: SY
      } = YY;
      const {
        t: TY
      } = (0, yY.C)(), {
        userContext: eY,
        isUserContextUpdating: NY
      } = (0, vY.d)(), [BY, cY] = (0, FY.useState)(null), [KY, HY] = (0, FY.useState)(0), [zY, ZY] = (0, FY.useState)(null !== (rY = null === mY || void 0 === mY ? void 0 : mY.name) && void 0 !== rY ? rY : ""), CY = (0, FY.useRef)(zY), fY = (0, FY.useRef)(""), jY = YY => {
        CY.current = YY, ZY(YY)
      }, [hY, dY] = (0, FY.useState)(null !== (DY = null === mY || void 0 === mY ? void 0 : mY.description) && void 0 !== DY ? DY : ""), JY = (0, FY.useRef)(hY), MY = (0, FY.useRef)(""), wY = YY => {
        JY.current = YY, dY(YY)
      }, [bY, XY] = (0, FY.useState)(!1), {
        loading: qY,
        error: pY,
        setError: kY,
        onFiles: GY
      } = (0, sY.i)((async YY => {
        const rY = await (0, QY.loadPageShaderPackCompiler)();
        if (!rY) return void kY(TY("shaderPack:compilerUnavailable"));
        const DY = await (0, oY.g)(rY, YY.files);
        if (cY({
            pack: YY,
            validation: DY,
            sourceBytes: (0, RY.A)(YY.files)
          }), !mY) {
          var FY;
          if ("" !== CY.current.trim() && CY.current !== fY.current || (fY.current = (0, AY.V)(YY.manifest.name.trim(), AY.D), jY(fY.current)), "" === JY.current.trim() || JY.current === MY.current) MY.current = (0, AY.V)((null !== (FY = YY.manifest.description) && void 0 !== FY ? FY : "").trim(), AY.t), wY(MY.current);
          HY((YY => YY + 1))
        }
      })), xY = !NY && !eY.isLoggedIn() && !IY.b.offlineMode, nY = zY.trim(), PY = nY.length < AY.G, UY = null !== BY && !1 !== (null === (uY = BY.validation) || void 0 === uY ? void 0 : uY.ok) && !qY && !PY && !xY && !NY;
      return (0, EY.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, EY.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: mY ? TY("shaderPackListing:uploadIntro", {
            minutes: String(AY.K / 6e4)
          }) : TY("shaderPackListing:publishIntro")
        }), (0, EY.jsx)(lY, {}), xY && (0, EY.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: TY("shaderPackListing:publishNeedsLogin")
        }), (0, EY.jsx)(sY.e, {
          busy: qY,
          disabled: qY || bY,
          onFiles: YY => {
            cY(null), GY(YY)
          }
        }), BY && (0, EY.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, EY.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: BY.pack.manifest.name
          }), (0, EY.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [TY("shaderPackListing:sizeValue", {
              kilobytes: String((0, WY.N)(BY.sourceBytes))
            }), " \xb7", " ", TY("shaderPackListing:filesValue", {
              files: String(BY.pack.files.length)
            })]
          }), (0, EY.jsx)(VY, {
            picked: BY
          })]
        }), !mY && (0, EY.jsxs)(EY.Fragment, {
          children: [(0, EY.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, EY.jsx)("span", {
              children: TY("general:name")
            }), (0, EY.jsx)(aY.d, {
              className: "ShaderPackPublishInput",
              defaultValue: zY,
              maxLength: AY.D,
              onValueChange: jY
            }, KY), BY && PY && (0, EY.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: TY("shaderPackListing:nameTooShort", {
                min: String(AY.G)
              })
            })]
          }), (0, EY.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, EY.jsx)("span", {
              children: TY("general:description")
            }), (0, EY.jsx)(aY.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: hY,
              maxLength: AY.t,
              onValueChange: wY,
              useTextarea: !0
            }, KY)]
          })]
        }), pY && (0, EY.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: pY
        }), (0, EY.jsxs)(gY.n, {
          className: "ShaderPackPublishButton",
          disabled: !UY,
          loading: bY,
          onClick: () => {
            !async function() {
              var YY;
              if (!BY) return;
              const {
                name: rY,
                description: DY
              } = null !== mY && void 0 !== mY ? mY : {
                name: nY,
                description: hY.trim()
              }, FY = {
                packId: null !== (YY = null === mY || void 0 === mY ? void 0 : mY.packId) && void 0 !== YY ? YY : null,
                name: rY,
                description: DY,
                apiVersion: BY.pack.manifest.apiVersion,
                files: (0, RY.z)(BY.pack.files),
                keepCircleShadows: !0 === BY.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(FY)).byteLength > 1024 * AY.S) kY(TY("shaderPackListing:publishTooBig", {
                kilobytes: String(AY.S)
              }));
              else {
                XY(!0), kY(null);
                try {
                  SY(await iY.e.publishShaderPack(eY, FY))
                } catch (IY) {
                  console.error("Failed to publish the shader pack", IY), kY((0, WY.y)(IY, TY, "shaderPackListing:publishFailed"))
                } finally {
                  XY(!1)
                }
              }
            }()
          },
          children: [(0, EY.jsx)(OY.e, {
            name: "upload"
          }), " ", TY(mY ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function VY(YY) {
      let {
        picked: rY
      } = YY;
      const {
        t: DY
      } = (0, yY.C)(), {
        validation: FY
      } = rY;
      return null === FY ? (0, EY.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: DY("shaderPackListing:publishUnchecked")
      }) : FY.ok ? (0, EY.jsxs)(EY.Fragment, {
        children: [(0, EY.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, EY.jsx)(OY.e, {
            name: "circle-check"
          }), " ", DY("shaderPackListing:publishReady")]
        }), FY.offInStrict.length > 0 && (0, EY.jsxs)(EY.Fragment, {
          children: [(0, EY.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, EY.jsx)(OY.e, {
              name: "triangle-exclamation"
            }), " ", DY("shaderPack:offInStrict")]
          }), (0, EY.jsx)(uY.e, {
            diagnostics: FY.offInStrict,
            t: DY
          })]
        })]
      }) : (0, EY.jsxs)(EY.Fragment, {
        children: [(0, EY.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, EY.jsx)(OY.e, {
            name: "triangle-exclamation"
          }), " ", DY("shaderPackListing:publishHasErrors")]
        }), (0, EY.jsx)(uY.e, {
          diagnostics: FY.errors,
          more: FY.moreErrors,
          t: DY
        })]
      })
    }
    const SY = "\0";

    function lY() {
      const {
        t: YY
      } = (0, yY.C)(), [rY, DY] = YY("shaderPackListing:bloxdhubHelp", {
        site: SY
      }).split(SY);
      return (0, EY.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [rY, (0, EY.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: AY.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: AY.d
        }), DY]
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);