export const id = 135;
export const ids = [135];
export const modules = {
  5978: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => tW,
      e: () => wW
    });
    var mW = OW(62),
      EW = OW(1532),
      NW = OW(1172),
      PW = OW(100),
      LW = OW(4304),
      cW = OW(1283);

    function wW() {
      return !(0, PW.isMobile)()
    }

    function tW(WW) {
      let {
        disabled: iW,
        openFolderPicker: OW,
        onFiles: PW
      } = WW;
      const {
        t: tW
      } = (0, NW.B)(), ZW = (0, mW.useRef)(null);
      return (0, cW.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, cW.jsx)("input", {
          ref: ZW,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(WW) {
            const iW = Array.from(WW.target.files);
            WW.target.value = "", PW(iW)
          }
        }), wW() && (0, cW.jsx)(EW.f, {
          disabled: iW,
          onClick: OW,
          children: tW("general:chooseFolder")
        }), (0, cW.jsx)(EW.f, {
          disabled: iW,
          onClick: () => {
            (0, LW.f)(ZW.current)
          },
          children: tW("general:chooseZip")
        })]
      })
    }
  },
  5952: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      e: () => PW,
      h: () => NW
    });
    var mW = OW(5961);
    const EW = [WW => WW.strict ? "strict" : "nonStrict", WW => WW.program];

    function NW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const mW = {};
      for (const EW in OW) mW[EW] = `\0${EW}\0`;
      return WW(iW, mW).replace(/\0(\w+)\0/g, ((WW, iW) => OW[iW]))
    }

    function PW(WW) {
      return null === WW.file ? null : WW.line > 0 ? `${WW.file}:${WW.line}` : WW.file
    }

    function LW(WW) {
      const iW = new Map(WW.map((WW => [cW(WW).join("."), WW])));
      if (0 === iW.size) return [];
      const OW = tW([...iW.values()]);
      return 0 === OW[0].length ? [] : OW
    }

    function cW(WW) {
      return EW.map((iW => iW(WW)))
    }
    const wW = EW.map((WW => new Set(mW.c.map(WW)).size));

    function tW(WW) {
      const iW = EW.map((iW => new Set(WW.map(iW)))),
        OW = iW.reduce(((WW, iW) => WW * iW.size), 1),
        mW = iW.every(((WW, iW) => 1 === WW.size || WW.size === wW[iW]));
      if (OW === WW.length && mW) return [EW.filter(((WW, OW) => 1 === iW[OW].size)).map((iW => iW(WW[0])))];
      let NW = null;
      for (let PW = 0; PW < EW.length; PW++) {
        if (1 === iW[PW].size) continue;
        const OW = ZW(WW, EW[PW]).flatMap(tW);
        (null === NW || OW.length < NW.length) && (NW = OW)
      }
      return NW
    }

    function ZW(WW, iW) {
      const OW = new Map;
      for (const EW of WW) {
        var mW;
        const WW = iW(EW);
        OW.set(WW, [...null !== (mW = OW.get(WW)) && void 0 !== mW ? mW : [], EW])
      }
      return [...OW.values()]
    }
  },
  7600: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      ShaderPackPublishForm: () => sW
    });
    var mW = OW(62),
      EW = OW(7570),
      NW = OW(190),
      PW = OW(5970),
      LW = OW(1391),
      cW = OW(1532),
      wW = OW(1782),
      tW = OW(1107),
      ZW = OW(7609),
      xW = OW(7615),
      lW = OW(1584),
      AW = OW(1172),
      bW = OW(7621),
      jW = OW(7648),
      UW = OW(7567),
      kW = OW(1283);

    function sW(WW) {
      var iW, OW, ZW;
      let {
        existing: sW,
        onPublished: KW
      } = WW;
      const {
        t: YW
      } = (0, AW.B)(), {
        userContext: yW,
        isUserContextUpdating: TW
      } = (0, tW.e)(), [JW, hW] = (0, mW.useState)(null), [HW, nW] = (0, mW.useState)(0), [uW, oW] = (0, mW.useState)(null !== (iW = null === sW || void 0 === sW ? void 0 : sW.name) && void 0 !== iW ? iW : ""), dW = (0, mW.useRef)(uW), eW = (0, mW.useRef)(""), vW = WW => {
        dW.current = WW, oW(WW)
      }, [gW, DW] = (0, mW.useState)(null !== (OW = null === sW || void 0 === sW ? void 0 : sW.description) && void 0 !== OW ? OW : ""), VW = (0, mW.useRef)(gW), pW = (0, mW.useRef)(""), fW = WW => {
        VW.current = WW, DW(WW)
      }, [CW, XW] = (0, mW.useState)(!1), {
        loading: BW,
        error: qW,
        setError: RW,
        onFiles: GW
      } = (0, xW.d)((async WW => {
        const iW = await (0, bW.loadPageShaderPackCompiler)();
        if (!iW) return void RW(YW("shaderPack:compilerUnavailable"));
        const OW = await (0, jW.g)(iW, WW.files);
        if (hW({
            pack: WW,
            validation: OW,
            sourceBytes: (0, PW.D)(WW.files)
          }), !sW) {
          var mW;
          if ("" !== dW.current.trim() && dW.current !== eW.current || (eW.current = (0, EW.N)(WW.manifest.name.trim(), EW.x), vW(eW.current)), "" === VW.current.trim() || VW.current === pW.current) pW.current = (0, EW.N)((null !== (mW = WW.manifest.description) && void 0 !== mW ? mW : "").trim(), EW.j), fW(pW.current);
          nW((WW => WW + 1))
        }
      })), IW = !TW && !yW.isLoggedIn() && !NW.b.offlineMode, aW = uW.trim(), rW = aW.length < EW.B, zW = null !== JW && !1 !== (null === (ZW = JW.validation) || void 0 === ZW ? void 0 : ZW.ok) && !BW && !rW && !IW && !TW;
      return (0, kW.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, kW.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: sW ? YW("shaderPackListing:uploadIntro", {
            minutes: String(EW.G / 6e4)
          }) : YW("shaderPackListing:publishIntro")
        }), (0, kW.jsx)(SW, {}), IW && (0, kW.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: YW("shaderPackListing:publishNeedsLogin")
        }), (0, kW.jsx)(xW.c, {
          busy: BW,
          disabled: BW || CW,
          onFiles: WW => {
            hW(null), GW(WW)
          }
        }), JW && (0, kW.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, kW.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: JW.pack.manifest.name
          }), (0, kW.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [YW("shaderPackListing:sizeValue", {
              kilobytes: String((0, UW.Q)(JW.sourceBytes))
            }), " \xb7", " ", YW("shaderPackListing:filesValue", {
              files: String(JW.pack.files.length)
            })]
          }), (0, kW.jsx)(MW, {
            picked: JW
          })]
        }), !sW && (0, kW.jsxs)(kW.Fragment, {
          children: [(0, kW.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, kW.jsx)("span", {
              children: YW("general:name")
            }), (0, kW.jsx)(wW.b, {
              className: "ShaderPackPublishInput",
              defaultValue: uW,
              maxLength: EW.x,
              onValueChange: vW
            }, HW), JW && rW && (0, kW.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: YW("shaderPackListing:nameTooShort", {
                min: String(EW.B)
              })
            })]
          }), (0, kW.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, kW.jsx)("span", {
              children: YW("general:description")
            }), (0, kW.jsx)(wW.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: gW,
              maxLength: EW.j,
              onValueChange: fW,
              useTextarea: !0
            }, HW)]
          })]
        }), qW && (0, kW.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: qW
        }), (0, kW.jsxs)(cW.n, {
          className: "ShaderPackPublishButton",
          disabled: !zW,
          loading: CW,
          onClick: () => {
            !async function() {
              var WW;
              if (!JW) return;
              const {
                name: iW,
                description: OW
              } = null !== sW && void 0 !== sW ? sW : {
                name: aW,
                description: gW.trim()
              }, mW = {
                packId: null !== (WW = null === sW || void 0 === sW ? void 0 : sW.packId) && void 0 !== WW ? WW : null,
                name: iW,
                description: OW,
                apiVersion: JW.pack.manifest.apiVersion,
                files: (0, PW.A)(JW.pack.files),
                keepCircleShadows: !0 === JW.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(mW)).byteLength > 1024 * EW.M) RW(YW("shaderPackListing:publishTooBig", {
                kilobytes: String(EW.M)
              }));
              else {
                XW(!0), RW(null);
                try {
                  KW(await lW.e.publishShaderPack(yW, mW))
                } catch (NW) {
                  console.error("Failed to publish the shader pack", NW), RW((0, UW.y)(NW, YW, "shaderPackListing:publishFailed"))
                } finally {
                  XW(!1)
                }
              }
            }()
          },
          children: [(0, kW.jsx)(LW.c, {
            name: "upload"
          }), " ", YW(sW ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function MW(WW) {
      let {
        picked: iW
      } = WW;
      const {
        t: OW
      } = (0, AW.B)(), {
        validation: mW
      } = iW;
      return null === mW ? (0, kW.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: OW("shaderPackListing:publishUnchecked")
      }) : mW.ok ? (0, kW.jsxs)(kW.Fragment, {
        children: [(0, kW.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, kW.jsx)(LW.c, {
            name: "circle-check"
          }), " ", OW("shaderPackListing:publishReady")]
        }), mW.offInStrict.length > 0 && (0, kW.jsxs)(kW.Fragment, {
          children: [(0, kW.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, kW.jsx)(LW.c, {
              name: "triangle-exclamation"
            }), " ", OW("shaderPack:offInStrict")]
          }), (0, kW.jsx)(ZW.b, {
            diagnostics: mW.offInStrict,
            t: OW
          })]
        })]
      }) : (0, kW.jsxs)(kW.Fragment, {
        children: [(0, kW.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, kW.jsx)(LW.c, {
            name: "triangle-exclamation"
          }), " ", OW("shaderPackListing:publishHasErrors")]
        }), (0, kW.jsx)(ZW.b, {
          diagnostics: mW.errors,
          more: mW.moreErrors,
          t: OW
        })]
      })
    }
    const KW = "\0";

    function SW() {
      const {
        t: WW
      } = (0, AW.B)(), [iW, OW] = WW("shaderPackListing:bloxdhubHelp", {
        site: KW
      }).split(KW);
      return (0, kW.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [iW, (0, kW.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: EW.e,
          target: "_blank",
          rel: "noopener noreferrer",
          children: EW.c
        }), OW]
      })
    }
  },
  5961: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW.l,
      c: () => EW,
      g: () => mW.r
    });
    var mW = OW(5970);
    const EW = [!1, !0].flatMap((WW => ["terrain", "liquid", "model"].map((iW => ({
      strict: WW,
      program: iW
    })))))
  },
  5970: (WW, iW, OW) => {
    OW.d(iW, {
      A: () => tW,
      D: () => xW,
      e: () => LW,
      i: () => PW,
      l: () => mW,
      o: () => bW,
      p: () => ZW,
      r: () => EW,
      v: () => NW,
      x: () => wW
    });
    const mW = 5;

    function EW(WW) {
      return WW === mW
    }

    function NW(WW) {
      return [...WW.features]
    }
    const PW = 262144,
      LW = 256,
      cW = 256;

    function wW(WW) {
      if ("object" !== typeof WW || null === WW || Array.isArray(WW)) return "The pack has no files.";
      const iW = [];
      for (const [OW, mW] of Object.entries(WW)) {
        if ("string" !== typeof mW) return `${OW} isn't text.`;
        iW.push({
          path: OW,
          source: mW
        })
      }
      return iW.sort(((WW, iW) => ZW(WW.path, iW.path))),
        function(WW) {
          if (0 === WW.length) return "The pack has no .wgsl files.";
          if (WW.length > LW) return `The pack has more than ${LW} .wgsl files.`;
          const iW = new Set;
          for (const {
              path: OW
            }
            of WW) {
            const WW = lW(OW);
            if (null !== WW) return WW;
            if (iW.has(OW)) return `The pack has two files at ${OW}.`;
            iW.add(OW)
          }
          return xW(WW) > PW ? `The pack's .wgsl files are over ${PW/1024} KB in total.` : null
        }(iW) ?? iW
    }

    function tW(WW) {
      const iW = {};
      for (const OW of WW) iW[OW.path] = OW.source;
      return iW
    }

    function ZW(WW, iW) {
      return WW < iW ? -1 : WW > iW ? 1 : 0
    }

    function xW(WW) {
      const iW = new TextEncoder;
      let OW = 0;
      for (const {
          source: mW
        }
        of WW) OW += iW.encode(mW).byteLength;
      return OW
    }

    function lW(WW) {
      if (!WW.toLowerCase().endsWith(".wgsl")) return `${WW} isn't a .wgsl file.`;
      if (WW.length > cW) return `A file path is over ${cW} characters.`;
      if (WW.includes("\\") || /[\u0000-\u001f]/.test(WW)) return `${WW} isn't a valid file path.`;
      return WW.split("/").some((WW => "" === WW || "." === WW || ".." === WW)) ? `${WW} isn't a valid file path.` : null
    }
    const AW = /^(.*)\[rot\[([1-4])$/;

    function bW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const mW = new Map;
      iW.forEach(((WW, iW) => {
        let {
          numAnimStates: OW,
          animStartIdx: EW
        } = WW;
        for (let NW = 1; NW < OW; NW++) mW.set(EW + NW - 1, iW)
      }));
      const EW = Object.entries(WW),
        NW = new Map;
      for (const [bW, jW] of EW) {
        const WW = AW.exec(bW);
        "1" === WW?.[2] && NW.set(WW[1], jW + 1)
      }
      const PW = WW => {
          const iW = AW.exec(WW);
          return iW && NW.has(iW[1]) ? {
            root: iW[1],
            rotation: Number(iW[2]) - 1
          } : null
        },
        LW = new Set(EW.map((WW => {
          let [iW] = WW;
          return PW(iW)?.root ?? iW
        }))),
        cW = (WW, OW) => {
          const mW = WW.replace(/_?0$/, "");
          return (iW[OW]?.numAnimStates ?? 0) > 1 && !LW.has(mW) ? mW : WW
        },
        wW = new Map;
      for (const [AW, bW] of EW) wW.set(bW, cW(PW(AW)?.root ?? AW, bW));
      const tW = EW.reduce(((WW, iW) => {
          let [, OW] = iW;
          return Math.max(WW, OW + 1)
        }), 0),
        ZW = Array.from({
          length: tW
        }, ((WW, iW) => ({
          id: iW + 1,
          rotation: 0
        }))),
        xW = new Map,
        lW = new Map;
      for (const [AW, bW] of EW) {
        const WW = PW(AW),
          iW = mW.get(bW);
        if (void 0 !== iW) {
          const OW = wW.get(iW);
          lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "frame"
          }), WW && !lW.has(WW.root) && lW.set(WW.root, {
            name: WW.root,
            texture: OW,
            kind: "frame"
          });
          continue
        }
        const OW = wW.get(bW),
          EW = WW?.root ?? AW;
        if (OW !== EW && lW.set(EW, {
            name: EW,
            texture: OW,
            kind: "frame"
          }), WW) {
          const iW = NW.get(WW.root);
          ZW[bW] = {
            id: iW,
            rotation: WW.rotation
          }, xW.set(OW, iW), lW.set(AW, {
            name: AW,
            texture: OW,
            kind: "rotation"
          })
        } else xW.set(OW, bW + 1)
      }
      for (const AW of xW.keys()) lW.delete(AW);
      for (const [AW, bW] of OW) {
        const WW = xW.get(bW);
        void 0 === WW || xW.has(AW) || (xW.set(AW, WW), lW.delete(AW))
      }
      return {
        named: [...xW].sort(((WW, iW) => {
          let [OW] = WW, [mW] = iW;
          return OW < mW ? -1 : OW > mW ? 1 : 0
        })).map((WW => {
          let [iW, OW] = WW;
          return {
            name: iW,
            id: OW
          }
        })),
        aliases: [...lW.values()],
        layers: ZW
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);