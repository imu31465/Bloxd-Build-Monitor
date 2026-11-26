export const id = 125;
export const ids = [125];
export const modules = {
  5617: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => EU,
      h: () => DU
    });
    var cU = zU(61),
      yU = zU(1494),
      QU = zU(1193),
      AU = zU(97),
      FU = zU(3498),
      oU = zU(1305);

    function DU() {
      return !(0, AU.isMobile)()
    }

    function EU(UU) {
      let {
        disabled: XU,
        openFolderPicker: zU,
        onFiles: AU
      } = UU;
      const {
        t: EU
      } = (0, QU.I)(), YU = (0, cU.useRef)(null);
      return (0, oU.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, oU.jsx)("input", {
          ref: YU,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(UU) {
            const XU = Array.from(UU.target.files);
            UU.target.value = "", AU(XU)
          }
        }), DU() && (0, oU.jsx)(yU.f, {
          disabled: XU,
          onClick: zU,
          children: EU("general:chooseFolder")
        }), (0, oU.jsx)(yU.f, {
          disabled: XU,
          onClick: () => {
            (0, FU.g)(YU.current)
          },
          children: EU("general:chooseZip")
        })]
      })
    }
  },
  5597: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => AU,
      i: () => QU
    });
    var cU = zU(5603);
    const yU = [UU => UU.strict ? "strict" : "nonStrict", UU => UU.program];

    function QU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const cU = {};
      for (const yU in zU) cU[yU] = `\0${yU}\0`;
      return UU(XU, cU).replace(/\0(\w+)\0/g, ((UU, XU) => zU[XU]))
    }

    function AU(UU) {
      return null === UU.file ? null : UU.line > 0 ? `${UU.file}:${UU.line}` : UU.file
    }

    function FU(UU) {
      const XU = new Map(UU.map((UU => [oU(UU).join("."), UU])));
      if (0 === XU.size) return [];
      const zU = EU([...XU.values()]);
      return 0 === zU[0].length ? [] : zU
    }

    function oU(UU) {
      return yU.map((XU => XU(UU)))
    }
    const DU = yU.map((UU => new Set(cU.e.map(UU)).size));

    function EU(UU) {
      const XU = yU.map((XU => new Set(UU.map(XU)))),
        zU = XU.reduce(((UU, XU) => UU * XU.size), 1),
        cU = XU.every(((UU, XU) => 1 === UU.size || UU.size === DU[XU]));
      if (zU === UU.length && cU) return [yU.filter(((UU, zU) => 1 === XU[zU].size)).map((XU => XU(UU[0])))];
      let QU = null;
      for (let AU = 0; AU < yU.length; AU++) {
        if (1 === XU[AU].size) continue;
        const zU = YU(UU, yU[AU]).flatMap(EU);
        (null === QU || zU.length < QU.length) && (QU = zU)
      }
      return QU
    }

    function YU(UU, XU) {
      const zU = new Map;
      for (const yU of UU) {
        var cU;
        const UU = XU(yU);
        zU.set(UU, [...null !== (cU = zU.get(UU)) && void 0 !== cU ? cU : [], yU])
      }
      return [...zU.values()]
    }
  },
  7196: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      ShaderPackPublishForm: () => GU
    });
    var cU = zU(61),
      yU = zU(7158),
      QU = zU(217),
      AU = zU(5608),
      FU = zU(1390),
      oU = zU(1494),
      DU = zU(1726),
      EU = zU(1129),
      YU = zU(7198),
      NU = zU(7203),
      IU = zU(1545),
      pU = zU(1193),
      aU = zU(7209),
      tU = zU(7242),
      gU = zU(7150),
      kU = zU(1305);

    function GU(UU) {
      var XU, zU, YU;
      let {
        existing: GU,
        onPublished: ZU
      } = UU;
      const {
        t: PU
      } = (0, pU.I)(), {
        userContext: WU,
        isUserContextUpdating: dU
      } = (0, EU.d)(), [LU, eU] = (0, cU.useState)(null), [CU, wU] = (0, cU.useState)(0), [qU, OU] = (0, cU.useState)(null !== (XU = null === GU || void 0 === GU ? void 0 : GU.name) && void 0 !== XU ? XU : ""), SU = (0, cU.useRef)(qU), rU = (0, cU.useRef)(""), uU = UU => {
        SU.current = UU, OU(UU)
      }, [fU, iU] = (0, cU.useState)(null !== (zU = null === GU || void 0 === GU ? void 0 : GU.description) && void 0 !== zU ? zU : ""), HU = (0, cU.useRef)(fU), MU = (0, cU.useRef)(""), vU = UU => {
        HU.current = UU, iU(UU)
      }, [VU, sU] = (0, cU.useState)(!1), {
        loading: nU,
        error: mU,
        setError: lU,
        onFiles: xU
      } = (0, NU.f)((async UU => {
        const XU = await (0, aU.loadPageShaderPackCompiler)();
        if (!XU) return void lU(PU("shaderPack:compilerUnavailable"));
        const zU = await (0, tU.h)(XU, UU.files);
        if (eU({
            pack: UU,
            validation: zU,
            sourceBytes: (0, AU.y)(UU.files)
          }), !GU) {
          var cU;
          if ("" !== SU.current.trim() && SU.current !== rU.current || (rU.current = (0, yU.O)(UU.manifest.name.trim(), yU.B), uU(rU.current)), "" === HU.current.trim() || HU.current === MU.current) MU.current = (0, yU.O)((null !== (cU = UU.manifest.description) && void 0 !== cU ? cU : "").trim(), yU.r), vU(MU.current);
          wU((UU => UU + 1))
        }
      })), JU = !dU && !WU.isLoggedIn() && !QU.d.offlineMode, jU = qU.trim(), KU = jU.length < yU.C, bU = null !== LU && !1 !== (null === (YU = LU.validation) || void 0 === YU ? void 0 : YU.ok) && !nU && !KU && !JU && !dU;
      return (0, kU.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, kU.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: GU ? PU("shaderPackListing:uploadIntro", {
            minutes: String(yU.H / 6e4)
          }) : PU("shaderPackListing:publishIntro")
        }), (0, kU.jsx)(RU, {}), JU && (0, kU.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: PU("shaderPackListing:publishNeedsLogin")
        }), (0, kU.jsx)(NU.b, {
          busy: nU,
          disabled: nU || VU,
          onFiles: UU => {
            eU(null), xU(UU)
          }
        }), LU && (0, kU.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, kU.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: LU.pack.manifest.name
          }), (0, kU.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [PU("shaderPackListing:sizeValue", {
              kilobytes: String((0, gU.Q)(LU.sourceBytes))
            }), " \xb7", " ", PU("shaderPackListing:filesValue", {
              files: String(LU.pack.files.length)
            })]
          }), (0, kU.jsx)(BU, {
            picked: LU
          })]
        }), !GU && (0, kU.jsxs)(kU.Fragment, {
          children: [(0, kU.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, kU.jsx)("span", {
              children: PU("general:name")
            }), (0, kU.jsx)(DU.e, {
              className: "ShaderPackPublishInput",
              defaultValue: qU,
              maxLength: yU.B,
              onValueChange: uU
            }, CU), LU && KU && (0, kU.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: PU("shaderPackListing:nameTooShort", {
                min: String(yU.C)
              })
            })]
          }), (0, kU.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, kU.jsx)("span", {
              children: PU("general:description")
            }), (0, kU.jsx)(DU.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: fU,
              maxLength: yU.r,
              onValueChange: vU,
              useTextarea: !0
            }, CU)]
          })]
        }), mU && (0, kU.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: mU
        }), (0, kU.jsxs)(oU.l, {
          className: "ShaderPackPublishButton",
          disabled: !bU,
          loading: VU,
          onClick: () => {
            !async function() {
              var UU;
              if (!LU) return;
              const {
                name: XU,
                description: zU
              } = null !== GU && void 0 !== GU ? GU : {
                name: jU,
                description: fU.trim()
              }, cU = {
                packId: null !== (UU = null === GU || void 0 === GU ? void 0 : GU.packId) && void 0 !== UU ? UU : null,
                name: XU,
                description: zU,
                apiVersion: LU.pack.manifest.apiVersion,
                files: (0, AU.u)(LU.pack.files),
                keepCircleShadows: !0 === LU.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(cU)).byteLength > 1024 * yU.N) lU(PU("shaderPackListing:publishTooBig", {
                kilobytes: String(yU.N)
              }));
              else {
                sU(!0), lU(null);
                try {
                  ZU(await IU.c.publishShaderPack(WU, cU))
                } catch (QU) {
                  console.error("Failed to publish the shader pack", QU), lU((0, gU.w)(QU, PU, "shaderPackListing:publishFailed"))
                } finally {
                  sU(!1)
                }
              }
            }()
          },
          children: [(0, kU.jsx)(FU.d, {
            name: "upload"
          }), " ", PU(GU ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function BU(UU) {
      let {
        picked: XU
      } = UU;
      const {
        t: zU
      } = (0, pU.I)(), {
        validation: cU
      } = XU;
      return null === cU ? (0, kU.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: zU("shaderPackListing:publishUnchecked")
      }) : cU.ok ? (0, kU.jsxs)(kU.Fragment, {
        children: [(0, kU.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, kU.jsx)(FU.d, {
            name: "circle-check"
          }), " ", zU("shaderPackListing:publishReady")]
        }), cU.offInStrict.length > 0 && (0, kU.jsxs)(kU.Fragment, {
          children: [(0, kU.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, kU.jsx)(FU.d, {
              name: "triangle-exclamation"
            }), " ", zU("shaderPack:offInStrict")]
          }), (0, kU.jsx)(YU.d, {
            diagnostics: cU.offInStrict,
            t: zU
          })]
        })]
      }) : (0, kU.jsxs)(kU.Fragment, {
        children: [(0, kU.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, kU.jsx)(FU.d, {
            name: "triangle-exclamation"
          }), " ", zU("shaderPackListing:publishHasErrors")]
        }), (0, kU.jsx)(YU.d, {
          diagnostics: cU.errors,
          more: cU.moreErrors,
          t: zU
        })]
      })
    }
    const ZU = "\0";

    function RU() {
      const {
        t: UU
      } = (0, pU.I)(), [XU, zU] = UU("shaderPackListing:bloxdhubHelp", {
        site: ZU
      }).split(ZU);
      return (0, kU.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [XU, (0, kU.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: yU.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: yU.c
        }), zU]
      })
    }
  },
  5603: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.j,
      e: () => yU,
      i: () => cU.o
    });
    var cU = zU(5608);
    const yU = [!1, !0].flatMap((UU => ["terrain", "liquid", "model"].map((XU => ({
      strict: UU,
      program: XU
    })))))
  },
  5608: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => FU,
      h: () => AU,
      j: () => cU,
      k: () => aU,
      m: () => YU,
      o: () => yU,
      q: () => QU,
      r: () => DU,
      u: () => EU,
      y: () => NU
    });
    const cU = 5;

    function yU(UU) {
      return UU === cU
    }

    function QU(UU) {
      return [...UU.features]
    }
    const AU = 262144,
      FU = 256,
      oU = 256;

    function DU(UU) {
      if ("object" !== typeof UU || null === UU || Array.isArray(UU)) return "The pack has no files.";
      const XU = [];
      for (const [zU, cU] of Object.entries(UU)) {
        if ("string" !== typeof cU) return `${zU} isn't text.`;
        XU.push({
          path: zU,
          source: cU
        })
      }
      return XU.sort(((UU, XU) => YU(UU.path, XU.path))),
        function(UU) {
          if (0 === UU.length) return "The pack has no .wgsl files.";
          if (UU.length > FU) return `The pack has more than ${FU} .wgsl files.`;
          const XU = new Set;
          for (const {
              path: zU
            }
            of UU) {
            const UU = IU(zU);
            if (null !== UU) return UU;
            if (XU.has(zU)) return `The pack has two files at ${zU}.`;
            XU.add(zU)
          }
          return NU(UU) > AU ? `The pack's .wgsl files are over ${AU/1024} KB in total.` : null
        }(XU) ?? XU
    }

    function EU(UU) {
      const XU = {};
      for (const zU of UU) XU[zU.path] = zU.source;
      return XU
    }

    function YU(UU, XU) {
      return UU < XU ? -1 : UU > XU ? 1 : 0
    }

    function NU(UU) {
      const XU = new TextEncoder;
      let zU = 0;
      for (const {
          source: cU
        }
        of UU) zU += XU.encode(cU).byteLength;
      return zU
    }

    function IU(UU) {
      if (!UU.toLowerCase().endsWith(".wgsl")) return `${UU} isn't a .wgsl file.`;
      if (UU.length > oU) return `A file path is over ${oU} characters.`;
      if (UU.includes("\\") || /[\u0000-\u001f]/.test(UU)) return `${UU} isn't a valid file path.`;
      return UU.split("/").some((UU => "" === UU || "." === UU || ".." === UU)) ? `${UU} isn't a valid file path.` : null
    }
    const pU = /^(.*)\[rot\[([1-4])$/;

    function aU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const cU = new Map;
      XU.forEach(((UU, XU) => {
        let {
          numAnimStates: zU,
          animStartIdx: yU
        } = UU;
        for (let QU = 1; QU < zU; QU++) cU.set(yU + QU - 1, XU)
      }));
      const yU = Object.entries(UU),
        QU = new Map;
      for (const [aU, tU] of yU) {
        const UU = pU.exec(aU);
        "1" === UU?.[2] && QU.set(UU[1], tU + 1)
      }
      const AU = UU => {
          const XU = pU.exec(UU);
          return XU && QU.has(XU[1]) ? {
            root: XU[1],
            rotation: Number(XU[2]) - 1
          } : null
        },
        FU = new Set(yU.map((UU => {
          let [XU] = UU;
          return AU(XU)?.root ?? XU
        }))),
        oU = (UU, zU) => {
          const cU = UU.replace(/_?0$/, "");
          return (XU[zU]?.numAnimStates ?? 0) > 1 && !FU.has(cU) ? cU : UU
        },
        DU = new Map;
      for (const [pU, aU] of yU) DU.set(aU, oU(AU(pU)?.root ?? pU, aU));
      const EU = yU.reduce(((UU, XU) => {
          let [, zU] = XU;
          return Math.max(UU, zU + 1)
        }), 0),
        YU = Array.from({
          length: EU
        }, ((UU, XU) => ({
          id: XU + 1,
          rotation: 0
        }))),
        NU = new Map,
        IU = new Map;
      for (const [pU, aU] of yU) {
        const UU = AU(pU),
          XU = cU.get(aU);
        if (void 0 !== XU) {
          const zU = DU.get(XU);
          IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "frame"
          }), UU && !IU.has(UU.root) && IU.set(UU.root, {
            name: UU.root,
            texture: zU,
            kind: "frame"
          });
          continue
        }
        const zU = DU.get(aU),
          yU = UU?.root ?? pU;
        if (zU !== yU && IU.set(yU, {
            name: yU,
            texture: zU,
            kind: "frame"
          }), UU) {
          const XU = QU.get(UU.root);
          YU[aU] = {
            id: XU,
            rotation: UU.rotation
          }, NU.set(zU, XU), IU.set(pU, {
            name: pU,
            texture: zU,
            kind: "rotation"
          })
        } else NU.set(zU, aU + 1)
      }
      for (const pU of NU.keys()) IU.delete(pU);
      for (const [pU, aU] of zU) {
        const UU = NU.get(aU);
        void 0 === UU || NU.has(pU) || (NU.set(pU, UU), IU.delete(pU))
      }
      return {
        named: [...NU].sort(((UU, XU) => {
          let [zU] = UU, [cU] = XU;
          return zU < cU ? -1 : zU > cU ? 1 : 0
        })).map((UU => {
          let [XU, zU] = UU;
          return {
            name: XU,
            id: zU
          }
        })),
        aliases: [...IU.values()],
        layers: YU
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);