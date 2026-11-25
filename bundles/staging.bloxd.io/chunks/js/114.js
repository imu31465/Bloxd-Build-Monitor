export const id = 114;
export const ids = [114];
export const modules = {
  5214: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      g: () => cB
    });
    var TB = ZB(63),
      JB = ZB(1516),
      oB = ZB(1248),
      GB = ZB(105),
      vB = ZB(3306),
      kB = ZB(1153);

    function cB() {
      return !(0, GB.isMobile)()
    }

    function nB(BB) {
      let {
        disabled: IB,
        openFolderPicker: ZB,
        onFiles: GB
      } = BB;
      const {
        t: nB
      } = (0, oB.G)(), hB = (0, TB.useRef)(null);
      return (0, kB.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, kB.jsx)("input", {
          ref: hB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const IB = Array.from(BB.target.files);
            BB.target.value = "", GB(IB)
          }
        }), cB() && (0, kB.jsx)(JB.g, {
          disabled: IB,
          onClick: ZB,
          children: nB("general:chooseFolder")
        }), (0, kB.jsx)(JB.g, {
          disabled: IB,
          onClick: () => {
            (0, vB.i)(hB.current)
          },
          children: nB("general:chooseZip")
        })]
      })
    }
  },
  5198: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => vB,
      g: () => GB,
      h: () => oB
    });
    var TB = ZB(5204);
    const JB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function oB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const TB = {};
      for (const JB in ZB) TB[JB] = `\0${JB}\0`;
      return BB(IB, TB).replace(/\0(\w+)\0/g, ((BB, IB) => ZB[IB]))
    }

    function GB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function vB(BB) {
      const IB = new Map(BB.map((BB => [kB(BB).join("."), BB])));
      if (0 === IB.size) return [];
      const ZB = nB([...IB.values()]);
      return 0 === ZB[0].length ? [] : ZB
    }

    function kB(BB) {
      return JB.map((IB => IB(BB)))
    }
    const cB = JB.map((BB => new Set(TB.d.map(BB)).size));

    function nB(BB) {
      const IB = JB.map((IB => new Set(BB.map(IB)))),
        ZB = IB.reduce(((BB, IB) => BB * IB.size), 1),
        TB = IB.every(((BB, IB) => 1 === BB.size || BB.size === cB[IB]));
      if (ZB === BB.length && TB) return [JB.filter(((BB, ZB) => 1 === IB[ZB].size)).map((IB => IB(BB[0])))];
      let oB = null;
      for (let GB = 0; GB < JB.length; GB++) {
        if (1 === IB[GB].size) continue;
        const ZB = hB(BB, JB[GB]).flatMap(nB);
        (null === oB || ZB.length < oB.length) && (oB = ZB)
      }
      return oB
    }

    function hB(BB, IB) {
      const ZB = new Map;
      for (const JB of BB) {
        var TB;
        const BB = IB(JB);
        ZB.set(BB, [...null !== (TB = ZB.get(BB)) && void 0 !== TB ? TB : [], JB])
      }
      return [...ZB.values()]
    }
  },
  6753: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      ShaderPackPublishForm: () => WB
    });
    var TB = ZB(63),
      JB = ZB(6731),
      oB = ZB(208),
      GB = ZB(5210),
      vB = ZB(1102),
      kB = ZB(1516),
      cB = ZB(1746),
      nB = ZB(1179),
      hB = ZB(6758),
      zB = ZB(6760),
      FB = ZB(1561),
      NB = ZB(1248),
      gB = ZB(6763),
      qB = ZB(6792),
      yB = ZB(6726),
      UB = ZB(1153);

    function WB(BB) {
      var IB, ZB, hB;
      let {
        existing: WB,
        onPublished: CB
      } = BB;
      const {
        t: sB
      } = (0, NB.G)(), {
        userContext: wB,
        isUserContextUpdating: OB
      } = (0, nB.d)(), [YB, iB] = (0, TB.useState)(null), [pB, aB] = (0, TB.useState)(0), [HB, MB] = (0, TB.useState)(null !== (IB = null === WB || void 0 === WB ? void 0 : WB.name) && void 0 !== IB ? IB : ""), jB = (0, TB.useRef)(HB), PB = (0, TB.useRef)(""), RB = BB => {
        jB.current = BB, MB(BB)
      }, [rB, mB] = (0, TB.useState)(null !== (ZB = null === WB || void 0 === WB ? void 0 : WB.description) && void 0 !== ZB ? ZB : ""), XB = (0, TB.useRef)(rB), LB = (0, TB.useRef)(""), eB = BB => {
        XB.current = BB, mB(BB)
      }, [uB, fB] = (0, TB.useState)(!1), {
        loading: lB,
        error: AB,
        setError: tB,
        onFiles: bB
      } = (0, zB.e)((async BB => {
        const IB = await (0, gB.loadPageShaderPackCompiler)();
        if (!IB) return void tB(sB("shaderPack:compilerUnavailable"));
        const ZB = await (0, qB.h)(IB, BB.files);
        if (iB({
            pack: BB,
            validation: ZB,
            sourceBytes: (0, GB.B)(BB.files)
          }), !WB) {
          var TB;
          if ("" !== jB.current.trim() && jB.current !== PB.current || (PB.current = (0, JB.R)(BB.manifest.name.trim(), JB.A), RB(PB.current)), "" === XB.current.trim() || XB.current === LB.current) LB.current = (0, JB.R)((null !== (TB = BB.manifest.description) && void 0 !== TB ? TB : "").trim(), JB.o), eB(LB.current);
          aB((BB => BB + 1))
        }
      })), xB = !OB && !wB.isLoggedIn() && !oB.b.offlineMode, EB = HB.trim(), DB = EB.length < JB.B, KB = null !== YB && !1 !== (null === (hB = YB.validation) || void 0 === hB ? void 0 : hB.ok) && !lB && !DB && !xB && !OB;
      return (0, UB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, UB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: WB ? sB("shaderPackListing:uploadIntro", {
            minutes: String(JB.G / 6e4)
          }) : sB("shaderPackListing:publishIntro")
        }), (0, UB.jsx)(QB, {}), xB && (0, UB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: sB("shaderPackListing:publishNeedsLogin")
        }), (0, UB.jsx)(zB.b, {
          busy: lB,
          disabled: lB || uB,
          onFiles: BB => {
            iB(null), bB(BB)
          }
        }), YB && (0, UB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, UB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: YB.pack.manifest.name
          }), (0, UB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [sB("shaderPackListing:sizeValue", {
              kilobytes: String((0, yB.O)(YB.sourceBytes))
            }), " \xb7", " ", sB("shaderPackListing:filesValue", {
              files: String(YB.pack.files.length)
            })]
          }), (0, UB.jsx)(dB, {
            picked: YB
          })]
        }), !WB && (0, UB.jsxs)(UB.Fragment, {
          children: [(0, UB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, UB.jsx)("span", {
              children: sB("general:name")
            }), (0, UB.jsx)(cB.c, {
              className: "ShaderPackPublishInput",
              defaultValue: HB,
              maxLength: JB.A,
              onValueChange: RB
            }, pB), YB && DB && (0, UB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: sB("shaderPackListing:nameTooShort", {
                min: String(JB.B)
              })
            })]
          }), (0, UB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, UB.jsx)("span", {
              children: sB("general:description")
            }), (0, UB.jsx)(cB.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: rB,
              maxLength: JB.o,
              onValueChange: eB,
              useTextarea: !0
            }, pB)]
          })]
        }), AB && (0, UB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: AB
        }), (0, UB.jsxs)(kB.p, {
          className: "ShaderPackPublishButton",
          disabled: !KB,
          loading: uB,
          onClick: () => {
            !async function() {
              var BB;
              if (!YB) return;
              const {
                name: IB,
                description: ZB
              } = null !== WB && void 0 !== WB ? WB : {
                name: EB,
                description: rB.trim()
              }, TB = {
                packId: null !== (BB = null === WB || void 0 === WB ? void 0 : WB.packId) && void 0 !== BB ? BB : null,
                name: IB,
                description: ZB,
                apiVersion: YB.pack.manifest.apiVersion,
                files: (0, GB.y)(YB.pack.files),
                keepCircleShadows: !0 === YB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(TB)).byteLength > 1024 * JB.P) tB(sB("shaderPackListing:publishTooBig", {
                kilobytes: String(JB.P)
              }));
              else {
                fB(!0), tB(null);
                try {
                  CB(await FB.c.publishShaderPack(wB, TB))
                } catch (oB) {
                  console.error("Failed to publish the shader pack", oB), tB((0, yB.x)(oB, sB, "shaderPackListing:publishFailed"))
                } finally {
                  fB(!1)
                }
              }
            }()
          },
          children: [(0, UB.jsx)(vB.d, {
            name: "upload"
          }), " ", sB(WB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function dB(BB) {
      let {
        picked: IB
      } = BB;
      const {
        t: ZB
      } = (0, NB.G)(), {
        validation: TB
      } = IB;
      return null === TB ? (0, UB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ZB("shaderPackListing:publishUnchecked")
      }) : TB.ok ? (0, UB.jsxs)(UB.Fragment, {
        children: [(0, UB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, UB.jsx)(vB.d, {
            name: "circle-check"
          }), " ", ZB("shaderPackListing:publishReady")]
        }), TB.offInStrict.length > 0 && (0, UB.jsxs)(UB.Fragment, {
          children: [(0, UB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, UB.jsx)(vB.d, {
              name: "triangle-exclamation"
            }), " ", ZB("shaderPack:offInStrict")]
          }), (0, UB.jsx)(hB.c, {
            diagnostics: TB.offInStrict,
            t: ZB
          })]
        })]
      }) : (0, UB.jsxs)(UB.Fragment, {
        children: [(0, UB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, UB.jsx)(vB.d, {
            name: "triangle-exclamation"
          }), " ", ZB("shaderPackListing:publishHasErrors")]
        }), (0, UB.jsx)(hB.c, {
          diagnostics: TB.errors,
          more: TB.moreErrors,
          t: ZB
        })]
      })
    }
    const CB = "\0";

    function QB() {
      const {
        t: BB
      } = (0, NB.G)(), [IB, ZB] = BB("shaderPackListing:bloxdhubHelp", {
        site: CB
      }).split(CB);
      return (0, UB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [IB, (0, UB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: JB.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: JB.d
        }), ZB]
      })
    }
  },
  5204: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB.j,
      d: () => JB,
      g: () => TB.o
    });
    var TB = ZB(5210);
    const JB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((IB => ({
      strict: BB,
      program: IB
    })))))
  },
  5210: (BB, IB, ZB) => {
    ZB.d(IB, {
      B: () => zB,
      d: () => vB,
      g: () => GB,
      j: () => TB,
      l: () => gB,
      m: () => hB,
      o: () => JB,
      q: () => oB,
      u: () => cB,
      y: () => nB
    });
    const TB = 5;

    function JB(BB) {
      return BB === TB
    }

    function oB(BB) {
      return [...BB.features]
    }
    const GB = 262144,
      vB = 256,
      kB = 256;

    function cB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const IB = [];
      for (const [ZB, TB] of Object.entries(BB)) {
        if ("string" !== typeof TB) return `${ZB} isn't text.`;
        IB.push({
          path: ZB,
          source: TB
        })
      }
      return IB.sort(((BB, IB) => hB(BB.path, IB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > vB) return `The pack has more than ${vB} .wgsl files.`;
          const IB = new Set;
          for (const {
              path: ZB
            }
            of BB) {
            const BB = FB(ZB);
            if (null !== BB) return BB;
            if (IB.has(ZB)) return `The pack has two files at ${ZB}.`;
            IB.add(ZB)
          }
          return zB(BB) > GB ? `The pack's .wgsl files are over ${GB/1024} KB in total.` : null
        }(IB) ?? IB
    }

    function nB(BB) {
      const IB = {};
      for (const ZB of BB) IB[ZB.path] = ZB.source;
      return IB
    }

    function hB(BB, IB) {
      return BB < IB ? -1 : BB > IB ? 1 : 0
    }

    function zB(BB) {
      const IB = new TextEncoder;
      let ZB = 0;
      for (const {
          source: TB
        }
        of BB) ZB += IB.encode(TB).byteLength;
      return ZB
    }

    function FB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > kB) return `A file path is over ${kB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const NB = /^(.*)\[rot\[([1-4])$/;

    function gB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const TB = new Map;
      IB.forEach(((BB, IB) => {
        let {
          numAnimStates: ZB,
          animStartIdx: JB
        } = BB;
        for (let oB = 1; oB < ZB; oB++) TB.set(JB + oB - 1, IB)
      }));
      const JB = Object.entries(BB),
        oB = new Map;
      for (const [gB, qB] of JB) {
        const BB = NB.exec(gB);
        "1" === BB?.[2] && oB.set(BB[1], qB + 1)
      }
      const GB = BB => {
          const IB = NB.exec(BB);
          return IB && oB.has(IB[1]) ? {
            root: IB[1],
            rotation: Number(IB[2]) - 1
          } : null
        },
        vB = new Set(JB.map((BB => {
          let [IB] = BB;
          return GB(IB)?.root ?? IB
        }))),
        kB = (BB, ZB) => {
          const TB = BB.replace(/_?0$/, "");
          return (IB[ZB]?.numAnimStates ?? 0) > 1 && !vB.has(TB) ? TB : BB
        },
        cB = new Map;
      for (const [NB, gB] of JB) cB.set(gB, kB(GB(NB)?.root ?? NB, gB));
      const nB = JB.reduce(((BB, IB) => {
          let [, ZB] = IB;
          return Math.max(BB, ZB + 1)
        }), 0),
        hB = Array.from({
          length: nB
        }, ((BB, IB) => ({
          id: IB + 1,
          rotation: 0
        }))),
        zB = new Map,
        FB = new Map;
      for (const [NB, gB] of JB) {
        const BB = GB(NB),
          IB = TB.get(gB);
        if (void 0 !== IB) {
          const ZB = cB.get(IB);
          FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "frame"
          }), BB && !FB.has(BB.root) && FB.set(BB.root, {
            name: BB.root,
            texture: ZB,
            kind: "frame"
          });
          continue
        }
        const ZB = cB.get(gB),
          JB = BB?.root ?? NB;
        if (ZB !== JB && FB.set(JB, {
            name: JB,
            texture: ZB,
            kind: "frame"
          }), BB) {
          const IB = oB.get(BB.root);
          hB[gB] = {
            id: IB,
            rotation: BB.rotation
          }, zB.set(ZB, IB), FB.set(NB, {
            name: NB,
            texture: ZB,
            kind: "rotation"
          })
        } else zB.set(ZB, gB + 1)
      }
      for (const NB of zB.keys()) FB.delete(NB);
      for (const [NB, gB] of ZB) {
        const BB = zB.get(gB);
        void 0 === BB || zB.has(NB) || (zB.set(NB, BB), FB.delete(NB))
      }
      return {
        named: [...zB].sort(((BB, IB) => {
          let [ZB] = BB, [TB] = IB;
          return ZB < TB ? -1 : ZB > TB ? 1 : 0
        })).map((BB => {
          let [IB, ZB] = BB;
          return {
            name: IB,
            id: ZB
          }
        })),
        aliases: [...FB.values()],
        layers: hB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);