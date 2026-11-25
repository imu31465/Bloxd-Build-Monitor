export const id = 114;
export const ids = [114];
export const modules = {
  5064: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => VG,
      e: () => YG
    });
    var wG = ZG(51),
      SG = ZG(1393),
      LG = ZG(1151),
      yG = ZG(80),
      kG = ZG(3122),
      UG = ZG(1067);

    function YG() {
      return !(0, yG.isMobile)()
    }

    function VG(GG) {
      let {
        disabled: bG,
        openFolderPicker: ZG,
        onFiles: yG
      } = GG;
      const {
        t: VG
      } = (0, LG.w)(), pG = (0, wG.useRef)(null);
      return (0, UG.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, UG.jsx)("input", {
          ref: pG,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(GG) {
            const bG = Array.from(GG.target.files);
            GG.target.value = "", yG(bG)
          }
        }), YG() && (0, UG.jsx)(SG.d, {
          disabled: bG,
          onClick: ZG,
          children: VG("general:chooseFolder")
        }), (0, UG.jsx)(SG.d, {
          disabled: bG,
          onClick: () => {
            (0, kG.f)(pG.current)
          },
          children: VG("general:chooseZip")
        })]
      })
    }
  },
  5046: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      d: () => yG,
      h: () => LG
    });
    var wG = ZG(5055);
    const SG = [GG => GG.strict ? "strict" : "nonStrict", GG => GG.program];

    function LG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wG = {};
      for (const SG in ZG) wG[SG] = `\0${SG}\0`;
      return GG(bG, wG).replace(/\0(\w+)\0/g, ((GG, bG) => ZG[bG]))
    }

    function yG(GG) {
      return null === GG.file ? null : GG.line > 0 ? `${GG.file}:${GG.line}` : GG.file
    }

    function kG(GG) {
      const bG = new Map(GG.map((GG => [UG(GG).join("."), GG])));
      if (0 === bG.size) return [];
      const ZG = VG([...bG.values()]);
      return 0 === ZG[0].length ? [] : ZG
    }

    function UG(GG) {
      return SG.map((bG => bG(GG)))
    }
    const YG = SG.map((GG => new Set(wG.f.map(GG)).size));

    function VG(GG) {
      const bG = SG.map((bG => new Set(GG.map(bG)))),
        ZG = bG.reduce(((GG, bG) => GG * bG.size), 1),
        wG = bG.every(((GG, bG) => 1 === GG.size || GG.size === YG[bG]));
      if (ZG === GG.length && wG) return [SG.filter(((GG, ZG) => 1 === bG[ZG].size)).map((bG => bG(GG[0])))];
      let LG = null;
      for (let yG = 0; yG < SG.length; yG++) {
        if (1 === bG[yG].size) continue;
        const ZG = pG(GG, SG[yG]).flatMap(VG);
        (null === LG || ZG.length < LG.length) && (LG = ZG)
      }
      return LG
    }

    function pG(GG, bG) {
      const ZG = new Map;
      for (const SG of GG) {
        var wG;
        const GG = bG(SG);
        ZG.set(GG, [...null !== (wG = ZG.get(GG)) && void 0 !== wG ? wG : [], SG])
      }
      return [...ZG.values()]
    }
  },
  6591: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      ShaderPackPublishForm: () => zG
    });
    var wG = ZG(51),
      SG = ZG(6561),
      LG = ZG(191),
      yG = ZG(5062),
      kG = ZG(1016),
      UG = ZG(1393),
      YG = ZG(1621),
      VG = ZG(1092),
      pG = ZG(6598),
      fG = ZG(6602),
      QG = ZG(1431),
      KG = ZG(1151),
      hG = ZG(6608),
      dG = ZG(6645),
      JG = ZG(6559),
      rG = ZG(1067);

    function zG(GG) {
      var bG, ZG, pG;
      let {
        existing: zG,
        onPublished: oG
      } = GG;
      const {
        t: uG
      } = (0, KG.w)(), {
        userContext: iG,
        isUserContextUpdating: CG
      } = (0, VG.e)(), [WG, mG] = (0, wG.useState)(null), [IG, FG] = (0, wG.useState)(0), [vG, aG] = (0, wG.useState)(null !== (bG = null === zG || void 0 === zG ? void 0 : zG.name) && void 0 !== bG ? bG : ""), cG = (0, wG.useRef)(vG), lG = (0, wG.useRef)(""), jG = GG => {
        cG.current = GG, aG(GG)
      }, [PG, MG] = (0, wG.useState)(null !== (ZG = null === zG || void 0 === zG ? void 0 : zG.description) && void 0 !== ZG ? ZG : ""), AG = (0, wG.useRef)(PG), sG = (0, wG.useRef)(""), qG = GG => {
        AG.current = GG, MG(GG)
      }, [nG, gG] = (0, wG.useState)(!1), {
        loading: eG,
        error: RG,
        setError: TG,
        onFiles: HG
      } = (0, fG.g)((async GG => {
        const bG = await (0, hG.loadPageShaderPackCompiler)();
        if (!bG) return void TG(uG("shaderPack:compilerUnavailable"));
        const ZG = await (0, dG.g)(bG, GG.files);
        if (mG({
            pack: GG,
            validation: ZG,
            sourceBytes: (0, yG.A)(GG.files)
          }), !zG) {
          var wG;
          if ("" !== cG.current.trim() && cG.current !== lG.current || (lG.current = (0, SG.T)(GG.manifest.name.trim(), SG.B), jG(lG.current)), "" === AG.current.trim() || AG.current === sG.current) sG.current = (0, SG.T)((null !== (wG = GG.manifest.description) && void 0 !== wG ? wG : "").trim(), SG.q), qG(sG.current);
          FG((GG => GG + 1))
        }
      })), tG = !CG && !iG.isLoggedIn() && !LG.b.offlineMode, DG = vG.trim(), NG = DG.length < SG.C, OG = null !== WG && !1 !== (null === (pG = WG.validation) || void 0 === pG ? void 0 : pG.ok) && !eG && !NG && !tG && !CG;
      return (0, rG.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, rG.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: zG ? uG("shaderPackListing:uploadIntro", {
            minutes: String(SG.G / 6e4)
          }) : uG("shaderPackListing:publishIntro")
        }), (0, rG.jsx)(XG, {}), tG && (0, rG.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: uG("shaderPackListing:publishNeedsLogin")
        }), (0, rG.jsx)(fG.c, {
          busy: eG,
          disabled: eG || nG,
          onFiles: GG => {
            mG(null), HG(GG)
          }
        }), WG && (0, rG.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, rG.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: WG.pack.manifest.name
          }), (0, rG.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [uG("shaderPackListing:sizeValue", {
              kilobytes: String((0, JG.V)(WG.sourceBytes))
            }), " \xb7", " ", uG("shaderPackListing:filesValue", {
              files: String(WG.pack.files.length)
            })]
          }), (0, rG.jsx)(EG, {
            picked: WG
          })]
        }), !zG && (0, rG.jsxs)(rG.Fragment, {
          children: [(0, rG.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, rG.jsx)("span", {
              children: uG("general:name")
            }), (0, rG.jsx)(YG.b, {
              className: "ShaderPackPublishInput",
              defaultValue: vG,
              maxLength: SG.B,
              onValueChange: jG
            }, IG), WG && NG && (0, rG.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: uG("shaderPackListing:nameTooShort", {
                min: String(SG.C)
              })
            })]
          }), (0, rG.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, rG.jsx)("span", {
              children: uG("general:description")
            }), (0, rG.jsx)(YG.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: PG,
              maxLength: SG.q,
              onValueChange: qG,
              useTextarea: !0
            }, IG)]
          })]
        }), RG && (0, rG.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: RG
        }), (0, rG.jsxs)(UG.k, {
          className: "ShaderPackPublishButton",
          disabled: !OG,
          loading: nG,
          onClick: () => {
            !async function() {
              var GG;
              if (!WG) return;
              const {
                name: bG,
                description: ZG
              } = null !== zG && void 0 !== zG ? zG : {
                name: DG,
                description: PG.trim()
              }, wG = {
                packId: null !== (GG = null === zG || void 0 === zG ? void 0 : zG.packId) && void 0 !== GG ? GG : null,
                name: bG,
                description: ZG,
                apiVersion: WG.pack.manifest.apiVersion,
                files: (0, yG.y)(WG.pack.files),
                keepCircleShadows: !0 === WG.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(wG)).byteLength > 1024 * SG.S) TG(uG("shaderPackListing:publishTooBig", {
                kilobytes: String(SG.S)
              }));
              else {
                gG(!0), TG(null);
                try {
                  oG(await QG.d.publishShaderPack(iG, wG))
                } catch (LG) {
                  console.error("Failed to publish the shader pack", LG), TG((0, JG.z)(LG, uG, "shaderPackListing:publishFailed"))
                } finally {
                  gG(!1)
                }
              }
            }()
          },
          children: [(0, rG.jsx)(kG.c, {
            name: "upload"
          }), " ", uG(zG ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function EG(GG) {
      let {
        picked: bG
      } = GG;
      const {
        t: ZG
      } = (0, KG.w)(), {
        validation: wG
      } = bG;
      return null === wG ? (0, rG.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ZG("shaderPackListing:publishUnchecked")
      }) : wG.ok ? (0, rG.jsxs)(rG.Fragment, {
        children: [(0, rG.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, rG.jsx)(kG.c, {
            name: "circle-check"
          }), " ", ZG("shaderPackListing:publishReady")]
        }), wG.offInStrict.length > 0 && (0, rG.jsxs)(rG.Fragment, {
          children: [(0, rG.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, rG.jsx)(kG.c, {
              name: "triangle-exclamation"
            }), " ", ZG("shaderPack:offInStrict")]
          }), (0, rG.jsx)(pG.c, {
            diagnostics: wG.offInStrict,
            t: ZG
          })]
        })]
      }) : (0, rG.jsxs)(rG.Fragment, {
        children: [(0, rG.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, rG.jsx)(kG.c, {
            name: "triangle-exclamation"
          }), " ", ZG("shaderPackListing:publishHasErrors")]
        }), (0, rG.jsx)(pG.c, {
          diagnostics: wG.errors,
          more: wG.moreErrors,
          t: ZG
        })]
      })
    }
    const oG = "\0";

    function XG() {
      const {
        t: GG
      } = (0, KG.w)(), [bG, ZG] = GG("shaderPackListing:bloxdhubHelp", {
        site: oG
      }).split(oG);
      return (0, rG.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [bG, (0, rG.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: SG.e,
          target: "_blank",
          rel: "noopener noreferrer",
          children: SG.b
        }), ZG]
      })
    }
  },
  5055: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => wG.i,
      f: () => SG,
      g: () => wG.o
    });
    var wG = ZG(5062);
    const SG = [!1, !0].flatMap((GG => ["terrain", "liquid", "model"].map((bG => ({
      strict: GG,
      program: bG
    })))))
  },
  5062: (GG, bG, ZG) => {
    ZG.d(bG, {
      A: () => fG,
      d: () => kG,
      h: () => yG,
      i: () => wG,
      j: () => hG,
      k: () => pG,
      o: () => SG,
      s: () => LG,
      u: () => YG,
      y: () => VG
    });
    const wG = 5;

    function SG(GG) {
      return GG === wG
    }

    function LG(GG) {
      return [...GG.features]
    }
    const yG = 262144,
      kG = 256,
      UG = 256;

    function YG(GG) {
      if ("object" !== typeof GG || null === GG || Array.isArray(GG)) return "The pack has no files.";
      const bG = [];
      for (const [ZG, wG] of Object.entries(GG)) {
        if ("string" !== typeof wG) return `${ZG} isn't text.`;
        bG.push({
          path: ZG,
          source: wG
        })
      }
      return bG.sort(((GG, bG) => pG(GG.path, bG.path))),
        function(GG) {
          if (0 === GG.length) return "The pack has no .wgsl files.";
          if (GG.length > kG) return `The pack has more than ${kG} .wgsl files.`;
          const bG = new Set;
          for (const {
              path: ZG
            }
            of GG) {
            const GG = QG(ZG);
            if (null !== GG) return GG;
            if (bG.has(ZG)) return `The pack has two files at ${ZG}.`;
            bG.add(ZG)
          }
          return fG(GG) > yG ? `The pack's .wgsl files are over ${yG/1024} KB in total.` : null
        }(bG) ?? bG
    }

    function VG(GG) {
      const bG = {};
      for (const ZG of GG) bG[ZG.path] = ZG.source;
      return bG
    }

    function pG(GG, bG) {
      return GG < bG ? -1 : GG > bG ? 1 : 0
    }

    function fG(GG) {
      const bG = new TextEncoder;
      let ZG = 0;
      for (const {
          source: wG
        }
        of GG) ZG += bG.encode(wG).byteLength;
      return ZG
    }

    function QG(GG) {
      if (!GG.toLowerCase().endsWith(".wgsl")) return `${GG} isn't a .wgsl file.`;
      if (GG.length > UG) return `A file path is over ${UG} characters.`;
      if (GG.includes("\\") || /[\u0000-\u001f]/.test(GG)) return `${GG} isn't a valid file path.`;
      return GG.split("/").some((GG => "" === GG || "." === GG || ".." === GG)) ? `${GG} isn't a valid file path.` : null
    }
    const KG = /^(.*)\[rot\[([1-4])$/;

    function hG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wG = new Map;
      bG.forEach(((GG, bG) => {
        let {
          numAnimStates: ZG,
          animStartIdx: SG
        } = GG;
        for (let LG = 1; LG < ZG; LG++) wG.set(SG + LG - 1, bG)
      }));
      const SG = Object.entries(GG),
        LG = new Map;
      for (const [hG, dG] of SG) {
        const GG = KG.exec(hG);
        "1" === GG?.[2] && LG.set(GG[1], dG + 1)
      }
      const yG = GG => {
          const bG = KG.exec(GG);
          return bG && LG.has(bG[1]) ? {
            root: bG[1],
            rotation: Number(bG[2]) - 1
          } : null
        },
        kG = new Set(SG.map((GG => {
          let [bG] = GG;
          return yG(bG)?.root ?? bG
        }))),
        UG = (GG, ZG) => {
          const wG = GG.replace(/_?0$/, "");
          return (bG[ZG]?.numAnimStates ?? 0) > 1 && !kG.has(wG) ? wG : GG
        },
        YG = new Map;
      for (const [KG, hG] of SG) YG.set(hG, UG(yG(KG)?.root ?? KG, hG));
      const VG = SG.reduce(((GG, bG) => {
          let [, ZG] = bG;
          return Math.max(GG, ZG + 1)
        }), 0),
        pG = Array.from({
          length: VG
        }, ((GG, bG) => ({
          id: bG + 1,
          rotation: 0
        }))),
        fG = new Map,
        QG = new Map;
      for (const [KG, hG] of SG) {
        const GG = yG(KG),
          bG = wG.get(hG);
        if (void 0 !== bG) {
          const ZG = YG.get(bG);
          QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "frame"
          }), GG && !QG.has(GG.root) && QG.set(GG.root, {
            name: GG.root,
            texture: ZG,
            kind: "frame"
          });
          continue
        }
        const ZG = YG.get(hG),
          SG = GG?.root ?? KG;
        if (ZG !== SG && QG.set(SG, {
            name: SG,
            texture: ZG,
            kind: "frame"
          }), GG) {
          const bG = LG.get(GG.root);
          pG[hG] = {
            id: bG,
            rotation: GG.rotation
          }, fG.set(ZG, bG), QG.set(KG, {
            name: KG,
            texture: ZG,
            kind: "rotation"
          })
        } else fG.set(ZG, hG + 1)
      }
      for (const KG of fG.keys()) QG.delete(KG);
      for (const [KG, hG] of ZG) {
        const GG = fG.get(hG);
        void 0 === GG || fG.has(KG) || (fG.set(KG, GG), QG.delete(KG))
      }
      return {
        named: [...fG].sort(((GG, bG) => {
          let [ZG] = GG, [wG] = bG;
          return ZG < wG ? -1 : ZG > wG ? 1 : 0
        })).map((GG => {
          let [bG, ZG] = GG;
          return {
            name: bG,
            id: ZG
          }
        })),
        aliases: [...QG.values()],
        layers: pG
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);