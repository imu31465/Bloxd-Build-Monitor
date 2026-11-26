export const id = 127;
export const ids = [127];
export const modules = {
  5539: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => EH,
      d: () => CH
    });
    var AH = LH(45),
      rH = LH(1455),
      SH = LH(1123),
      hH = LH(81),
      tH = LH(3484),
      zH = LH(1225);

    function CH() {
      return !(0, hH.isMobile)()
    }

    function EH(HH) {
      let {
        disabled: BH,
        openFolderPicker: LH,
        onFiles: hH
      } = HH;
      const {
        t: EH
      } = (0, SH.B)(), XH = (0, AH.useRef)(null);
      return (0, zH.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, zH.jsx)("input", {
          ref: XH,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(HH) {
            const BH = Array.from(HH.target.files);
            HH.target.value = "", hH(BH)
          }
        }), CH() && (0, zH.jsx)(rH.i, {
          disabled: BH,
          onClick: LH,
          children: EH("general:chooseFolder")
        }), (0, zH.jsx)(rH.i, {
          disabled: BH,
          onClick: () => {
            (0, tH.g)(XH.current)
          },
          children: EH("general:chooseZip")
        })]
      })
    }
  },
  5520: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => tH,
      f: () => hH,
      i: () => SH
    });
    var AH = LH(5523);
    const rH = [HH => HH.strict ? "strict" : "nonStrict", HH => HH.program];

    function SH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const AH = {};
      for (const rH in LH) AH[rH] = `\0${rH}\0`;
      return HH(BH, AH).replace(/\0(\w+)\0/g, ((HH, BH) => LH[BH]))
    }

    function hH(HH) {
      return null === HH.file ? null : HH.line > 0 ? `${HH.file}:${HH.line}` : HH.file
    }

    function tH(HH) {
      const BH = new Map(HH.map((HH => [zH(HH).join("."), HH])));
      if (0 === BH.size) return [];
      const LH = EH([...BH.values()]);
      return 0 === LH[0].length ? [] : LH
    }

    function zH(HH) {
      return rH.map((BH => BH(HH)))
    }
    const CH = rH.map((HH => new Set(AH.e.map(HH)).size));

    function EH(HH) {
      const BH = rH.map((BH => new Set(HH.map(BH)))),
        LH = BH.reduce(((HH, BH) => HH * BH.size), 1),
        AH = BH.every(((HH, BH) => 1 === HH.size || HH.size === CH[BH]));
      if (LH === HH.length && AH) return [rH.filter(((HH, LH) => 1 === BH[LH].size)).map((BH => BH(HH[0])))];
      let SH = null;
      for (let hH = 0; hH < rH.length; hH++) {
        if (1 === BH[hH].size) continue;
        const LH = XH(HH, rH[hH]).flatMap(EH);
        (null === SH || LH.length < SH.length) && (SH = LH)
      }
      return SH
    }

    function XH(HH, BH) {
      const LH = new Map;
      for (const rH of HH) {
        var AH;
        const HH = BH(rH);
        LH.set(HH, [...null !== (AH = LH.get(HH)) && void 0 !== AH ? AH : [], rH])
      }
      return [...LH.values()]
    }
  },
  7149: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      ShaderPackPublishForm: () => vH
    });
    var AH = LH(45),
      rH = LH(7114),
      SH = LH(180),
      hH = LH(5531),
      tH = LH(1315),
      zH = LH(1455),
      CH = LH(1706),
      EH = LH(1061),
      XH = LH(7155),
      GH = LH(7161),
      YH = LH(1502),
      uH = LH(1123),
      QH = LH(7165),
      WH = LH(7196),
      MH = LH(7111),
      xH = LH(1225);

    function vH(HH) {
      var BH, LH, XH;
      let {
        existing: vH,
        onPublished: TH
      } = HH;
      const {
        t: VH
      } = (0, uH.B)(), {
        userContext: OH,
        isUserContextUpdating: bH
      } = (0, EH.e)(), [kH, mH] = (0, AH.useState)(null), [oH, IH] = (0, AH.useState)(0), [fH, lH] = (0, AH.useState)(null !== (BH = null === vH || void 0 === vH ? void 0 : vH.name) && void 0 !== BH ? BH : ""), KH = (0, AH.useRef)(fH), cH = (0, AH.useRef)(""), eH = HH => {
        KH.current = HH, lH(HH)
      }, [qH, gH] = (0, AH.useState)(null !== (LH = null === vH || void 0 === vH ? void 0 : vH.description) && void 0 !== LH ? LH : ""), NH = (0, AH.useRef)(qH), RH = (0, AH.useRef)(""), jH = HH => {
        NH.current = HH, gH(HH)
      }, [nH, FH] = (0, AH.useState)(!1), {
        loading: DH,
        error: wH,
        setError: ZH,
        onFiles: dH
      } = (0, GH.f)((async HH => {
        const BH = await (0, QH.loadPageShaderPackCompiler)();
        if (!BH) return void ZH(VH("shaderPack:compilerUnavailable"));
        const LH = await (0, WH.d)(BH, HH.files);
        if (mH({
            pack: HH,
            validation: LH,
            sourceBytes: (0, hH.u)(HH.files)
          }), !vH) {
          var AH;
          if ("" !== KH.current.trim() && KH.current !== cH.current || (cH.current = (0, rH.V)(HH.manifest.name.trim(), rH.F), eH(cH.current)), "" === NH.current.trim() || NH.current === RH.current) RH.current = (0, rH.V)((null !== (AH = HH.manifest.description) && void 0 !== AH ? AH : "").trim(), rH.v), jH(RH.current);
          IH((HH => HH + 1))
        }
      })), aH = !bH && !OH.isLoggedIn() && !SH.e.offlineMode, sH = fH.trim(), JH = sH.length < rH.H, iH = null !== kH && !1 !== (null === (XH = kH.validation) || void 0 === XH ? void 0 : XH.ok) && !DH && !JH && !aH && !bH;
      return (0, xH.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, xH.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: vH ? VH("shaderPackListing:uploadIntro", {
            minutes: String(rH.M / 6e4)
          }) : VH("shaderPackListing:publishIntro")
        }), (0, xH.jsx)(UH, {}), aH && (0, xH.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: VH("shaderPackListing:publishNeedsLogin")
        }), (0, xH.jsx)(GH.b, {
          busy: DH,
          disabled: DH || nH,
          onFiles: HH => {
            mH(null), dH(HH)
          }
        }), kH && (0, xH.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, xH.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: kH.pack.manifest.name
          }), (0, xH.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [VH("shaderPackListing:sizeValue", {
              kilobytes: String((0, MH.M)(kH.sourceBytes))
            }), " \xb7", " ", VH("shaderPackListing:filesValue", {
              files: String(kH.pack.files.length)
            })]
          }), (0, xH.jsx)(PH, {
            picked: kH
          })]
        }), !vH && (0, xH.jsxs)(xH.Fragment, {
          children: [(0, xH.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, xH.jsx)("span", {
              children: VH("general:name")
            }), (0, xH.jsx)(CH.e, {
              className: "ShaderPackPublishInput",
              defaultValue: fH,
              maxLength: rH.F,
              onValueChange: eH
            }, oH), kH && JH && (0, xH.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: VH("shaderPackListing:nameTooShort", {
                min: String(rH.H)
              })
            })]
          }), (0, xH.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, xH.jsx)("span", {
              children: VH("general:description")
            }), (0, xH.jsx)(CH.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: qH,
              maxLength: rH.v,
              onValueChange: jH,
              useTextarea: !0
            }, oH)]
          })]
        }), wH && (0, xH.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: wH
        }), (0, xH.jsxs)(zH.u, {
          className: "ShaderPackPublishButton",
          disabled: !iH,
          loading: nH,
          onClick: () => {
            !async function() {
              var HH;
              if (!kH) return;
              const {
                name: BH,
                description: LH
              } = null !== vH && void 0 !== vH ? vH : {
                name: sH,
                description: qH.trim()
              }, AH = {
                packId: null !== (HH = null === vH || void 0 === vH ? void 0 : vH.packId) && void 0 !== HH ? HH : null,
                name: BH,
                description: LH,
                apiVersion: kH.pack.manifest.apiVersion,
                files: (0, hH.t)(kH.pack.files),
                keepCircleShadows: !0 === kH.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(AH)).byteLength > 1024 * rH.R) ZH(VH("shaderPackListing:publishTooBig", {
                kilobytes: String(rH.R)
              }));
              else {
                FH(!0), ZH(null);
                try {
                  TH(await YH.d.publishShaderPack(OH, AH))
                } catch (SH) {
                  console.error("Failed to publish the shader pack", SH), ZH((0, MH.s)(SH, VH, "shaderPackListing:publishFailed"))
                } finally {
                  FH(!1)
                }
              }
            }()
          },
          children: [(0, xH.jsx)(tH.c, {
            name: "upload"
          }), " ", VH(vH ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function PH(HH) {
      let {
        picked: BH
      } = HH;
      const {
        t: LH
      } = (0, uH.B)(), {
        validation: AH
      } = BH;
      return null === AH ? (0, xH.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: LH("shaderPackListing:publishUnchecked")
      }) : AH.ok ? (0, xH.jsxs)(xH.Fragment, {
        children: [(0, xH.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, xH.jsx)(tH.c, {
            name: "circle-check"
          }), " ", LH("shaderPackListing:publishReady")]
        }), AH.offInStrict.length > 0 && (0, xH.jsxs)(xH.Fragment, {
          children: [(0, xH.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, xH.jsx)(tH.c, {
              name: "triangle-exclamation"
            }), " ", LH("shaderPack:offInStrict")]
          }), (0, xH.jsx)(XH.d, {
            diagnostics: AH.offInStrict,
            t: LH
          })]
        })]
      }) : (0, xH.jsxs)(xH.Fragment, {
        children: [(0, xH.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, xH.jsx)(tH.c, {
            name: "triangle-exclamation"
          }), " ", LH("shaderPackListing:publishHasErrors")]
        }), (0, xH.jsx)(XH.d, {
          diagnostics: AH.errors,
          more: AH.moreErrors,
          t: LH
        })]
      })
    }
    const TH = "\0";

    function UH() {
      const {
        t: HH
      } = (0, uH.B)(), [BH, LH] = HH("shaderPackListing:bloxdhubHelp", {
        site: TH
      }).split(TH);
      return (0, xH.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [BH, (0, xH.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: rH.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: rH.d
        }), LH]
      })
    }
  },
  5523: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.e,
      e: () => rH,
      g: () => AH.l
    });
    var AH = LH(5531);
    const rH = [!1, !0].flatMap((HH => ["terrain", "liquid", "model"].map((BH => ({
      strict: HH,
      program: BH
    })))))
  },
  5531: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => tH,
      d: () => hH,
      e: () => AH,
      f: () => QH,
      j: () => XH,
      l: () => rH,
      n: () => SH,
      q: () => CH,
      t: () => EH,
      u: () => GH
    });
    const AH = 5;

    function rH(HH) {
      return HH === AH
    }

    function SH(HH) {
      return [...HH.features]
    }
    const hH = 262144,
      tH = 256,
      zH = 256;

    function CH(HH) {
      if ("object" !== typeof HH || null === HH || Array.isArray(HH)) return "The pack has no files.";
      const BH = [];
      for (const [LH, AH] of Object.entries(HH)) {
        if ("string" !== typeof AH) return `${LH} isn't text.`;
        BH.push({
          path: LH,
          source: AH
        })
      }
      return BH.sort(((HH, BH) => XH(HH.path, BH.path))),
        function(HH) {
          if (0 === HH.length) return "The pack has no .wgsl files.";
          if (HH.length > tH) return `The pack has more than ${tH} .wgsl files.`;
          const BH = new Set;
          for (const {
              path: LH
            }
            of HH) {
            const HH = YH(LH);
            if (null !== HH) return HH;
            if (BH.has(LH)) return `The pack has two files at ${LH}.`;
            BH.add(LH)
          }
          return GH(HH) > hH ? `The pack's .wgsl files are over ${hH/1024} KB in total.` : null
        }(BH) ?? BH
    }

    function EH(HH) {
      const BH = {};
      for (const LH of HH) BH[LH.path] = LH.source;
      return BH
    }

    function XH(HH, BH) {
      return HH < BH ? -1 : HH > BH ? 1 : 0
    }

    function GH(HH) {
      const BH = new TextEncoder;
      let LH = 0;
      for (const {
          source: AH
        }
        of HH) LH += BH.encode(AH).byteLength;
      return LH
    }

    function YH(HH) {
      if (!HH.toLowerCase().endsWith(".wgsl")) return `${HH} isn't a .wgsl file.`;
      if (HH.length > zH) return `A file path is over ${zH} characters.`;
      if (HH.includes("\\") || /[\u0000-\u001f]/.test(HH)) return `${HH} isn't a valid file path.`;
      return HH.split("/").some((HH => "" === HH || "." === HH || ".." === HH)) ? `${HH} isn't a valid file path.` : null
    }
    const uH = /^(.*)\[rot\[([1-4])$/;

    function QH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const AH = new Map;
      BH.forEach(((HH, BH) => {
        let {
          numAnimStates: LH,
          animStartIdx: rH
        } = HH;
        for (let SH = 1; SH < LH; SH++) AH.set(rH + SH - 1, BH)
      }));
      const rH = Object.entries(HH),
        SH = new Map;
      for (const [QH, WH] of rH) {
        const HH = uH.exec(QH);
        "1" === HH?.[2] && SH.set(HH[1], WH + 1)
      }
      const hH = HH => {
          const BH = uH.exec(HH);
          return BH && SH.has(BH[1]) ? {
            root: BH[1],
            rotation: Number(BH[2]) - 1
          } : null
        },
        tH = new Set(rH.map((HH => {
          let [BH] = HH;
          return hH(BH)?.root ?? BH
        }))),
        zH = (HH, LH) => {
          const AH = HH.replace(/_?0$/, "");
          return (BH[LH]?.numAnimStates ?? 0) > 1 && !tH.has(AH) ? AH : HH
        },
        CH = new Map;
      for (const [uH, QH] of rH) CH.set(QH, zH(hH(uH)?.root ?? uH, QH));
      const EH = rH.reduce(((HH, BH) => {
          let [, LH] = BH;
          return Math.max(HH, LH + 1)
        }), 0),
        XH = Array.from({
          length: EH
        }, ((HH, BH) => ({
          id: BH + 1,
          rotation: 0
        }))),
        GH = new Map,
        YH = new Map;
      for (const [uH, QH] of rH) {
        const HH = hH(uH),
          BH = AH.get(QH);
        if (void 0 !== BH) {
          const LH = CH.get(BH);
          YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "frame"
          }), HH && !YH.has(HH.root) && YH.set(HH.root, {
            name: HH.root,
            texture: LH,
            kind: "frame"
          });
          continue
        }
        const LH = CH.get(QH),
          rH = HH?.root ?? uH;
        if (LH !== rH && YH.set(rH, {
            name: rH,
            texture: LH,
            kind: "frame"
          }), HH) {
          const BH = SH.get(HH.root);
          XH[QH] = {
            id: BH,
            rotation: HH.rotation
          }, GH.set(LH, BH), YH.set(uH, {
            name: uH,
            texture: LH,
            kind: "rotation"
          })
        } else GH.set(LH, QH + 1)
      }
      for (const uH of GH.keys()) YH.delete(uH);
      for (const [uH, QH] of LH) {
        const HH = GH.get(QH);
        void 0 === HH || GH.has(uH) || (GH.set(uH, HH), YH.delete(uH))
      }
      return {
        named: [...GH].sort(((HH, BH) => {
          let [LH] = HH, [AH] = BH;
          return LH < AH ? -1 : LH > AH ? 1 : 0
        })).map((HH => {
          let [BH, LH] = HH;
          return {
            name: BH,
            id: LH
          }
        })),
        aliases: [...YH.values()],
        layers: XH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);