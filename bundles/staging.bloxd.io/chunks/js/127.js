export const id = 127;
export const ids = [127];
export const modules = {
  5549: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => MB,
      d: () => JB
    });
    var YB = GB(56),
      DB = GB(1485),
      QB = GB(1175),
      oB = GB(92),
      jB = GB(3558),
      yB = GB(1282);

    function JB() {
      return !(0, oB.isMobile)()
    }

    function MB(BB) {
      let {
        disabled: OB,
        openFolderPicker: GB,
        onFiles: oB
      } = BB;
      const {
        t: MB
      } = (0, QB.H)(), PB = (0, YB.useRef)(null);
      return (0, yB.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, yB.jsx)("input", {
          ref: PB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const OB = Array.from(BB.target.files);
            BB.target.value = "", oB(OB)
          }
        }), JB() && (0, yB.jsx)(DB.f, {
          disabled: OB,
          onClick: GB,
          children: MB("general:chooseFolder")
        }), (0, yB.jsx)(DB.f, {
          disabled: OB,
          onClick: () => {
            (0, jB.e)(PB.current)
          },
          children: MB("general:chooseZip")
        })]
      })
    }
  },
  5531: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      g: () => oB,
      j: () => QB
    });
    var YB = GB(5538);
    const DB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function QB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const YB = {};
      for (const DB in GB) YB[DB] = `\0${DB}\0`;
      return BB(OB, YB).replace(/\0(\w+)\0/g, ((BB, OB) => GB[OB]))
    }

    function oB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function jB(BB) {
      const OB = new Map(BB.map((BB => [yB(BB).join("."), BB])));
      if (0 === OB.size) return [];
      const GB = MB([...OB.values()]);
      return 0 === GB[0].length ? [] : GB
    }

    function yB(BB) {
      return DB.map((OB => OB(BB)))
    }
    const JB = DB.map((BB => new Set(YB.c.map(BB)).size));

    function MB(BB) {
      const OB = DB.map((OB => new Set(BB.map(OB)))),
        GB = OB.reduce(((BB, OB) => BB * OB.size), 1),
        YB = OB.every(((BB, OB) => 1 === BB.size || BB.size === JB[OB]));
      if (GB === BB.length && YB) return [DB.filter(((BB, GB) => 1 === OB[GB].size)).map((OB => OB(BB[0])))];
      let QB = null;
      for (let oB = 0; oB < DB.length; oB++) {
        if (1 === OB[oB].size) continue;
        const GB = PB(BB, DB[oB]).flatMap(MB);
        (null === QB || GB.length < QB.length) && (QB = GB)
      }
      return QB
    }

    function PB(BB, OB) {
      const GB = new Map;
      for (const DB of BB) {
        var YB;
        const BB = OB(DB);
        GB.set(BB, [...null !== (YB = GB.get(BB)) && void 0 !== YB ? YB : [], DB])
      }
      return [...GB.values()]
    }
  },
  7139: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      ShaderPackPublishForm: () => WB
    });
    var YB = GB(56),
      DB = GB(7107),
      QB = GB(200),
      oB = GB(5546),
      jB = GB(1383),
      yB = GB(1485),
      JB = GB(1735),
      MB = GB(1112),
      PB = GB(7147),
      zB = GB(7152),
      lB = GB(1540),
      pB = GB(1175),
      qB = GB(7159),
      ZB = GB(7186),
      NB = GB(7099),
      RB = GB(1282);

    function WB(BB) {
      var OB, GB, PB;
      let {
        existing: WB,
        onPublished: VB
      } = BB;
      const {
        t: nB
      } = (0, pB.H)(), {
        userContext: UB,
        isUserContextUpdating: fB
      } = (0, MB.d)(), [kB, dB] = (0, YB.useState)(null), [KB, uB] = (0, YB.useState)(0), [mB, IB] = (0, YB.useState)(null !== (OB = null === WB || void 0 === WB ? void 0 : WB.name) && void 0 !== OB ? OB : ""), FB = (0, YB.useRef)(mB), iB = (0, YB.useRef)(""), LB = BB => {
        FB.current = BB, IB(BB)
      }, [gB, rB] = (0, YB.useState)(null !== (GB = null === WB || void 0 === WB ? void 0 : WB.description) && void 0 !== GB ? GB : ""), XB = (0, YB.useRef)(gB), wB = (0, YB.useRef)(""), EB = BB => {
        XB.current = BB, rB(BB)
      }, [cB, hB] = (0, YB.useState)(!1), {
        loading: aB,
        error: eB,
        setError: TB,
        onFiles: bB
      } = (0, zB.e)((async BB => {
        const OB = await (0, qB.loadPageShaderPackCompiler)();
        if (!OB) return void TB(nB("shaderPack:compilerUnavailable"));
        const GB = await (0, ZB.f)(OB, BB.files);
        if (dB({
            pack: BB,
            validation: GB,
            sourceBytes: (0, oB.B)(BB.files)
          }), !WB) {
          var YB;
          if ("" !== FB.current.trim() && FB.current !== iB.current || (iB.current = (0, DB.X)(BB.manifest.name.trim(), DB.B), LB(iB.current)), "" === XB.current.trim() || XB.current === wB.current) wB.current = (0, DB.X)((null !== (YB = BB.manifest.description) && void 0 !== YB ? YB : "").trim(), DB.r), EB(wB.current);
          uB((BB => BB + 1))
        }
      })), CB = !fB && !UB.isLoggedIn() && !QB.c.offlineMode, HB = mB.trim(), vB = HB.length < DB.E, sB = null !== kB && !1 !== (null === (PB = kB.validation) || void 0 === PB ? void 0 : PB.ok) && !aB && !vB && !CB && !fB;
      return (0, RB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, RB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: WB ? nB("shaderPackListing:uploadIntro", {
            minutes: String(DB.I / 6e4)
          }) : nB("shaderPackListing:publishIntro")
        }), (0, RB.jsx)(SB, {}), CB && (0, RB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: nB("shaderPackListing:publishNeedsLogin")
        }), (0, RB.jsx)(zB.b, {
          busy: aB,
          disabled: aB || cB,
          onFiles: BB => {
            dB(null), bB(BB)
          }
        }), kB && (0, RB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, RB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: kB.pack.manifest.name
          }), (0, RB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [nB("shaderPackListing:sizeValue", {
              kilobytes: String((0, NB.P)(kB.sourceBytes))
            }), " \xb7", " ", nB("shaderPackListing:filesValue", {
              files: String(kB.pack.files.length)
            })]
          }), (0, RB.jsx)(AB, {
            picked: kB
          })]
        }), !WB && (0, RB.jsxs)(RB.Fragment, {
          children: [(0, RB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, RB.jsx)("span", {
              children: nB("general:name")
            }), (0, RB.jsx)(JB.b, {
              className: "ShaderPackPublishInput",
              defaultValue: mB,
              maxLength: DB.B,
              onValueChange: LB
            }, KB), kB && vB && (0, RB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: nB("shaderPackListing:nameTooShort", {
                min: String(DB.E)
              })
            })]
          }), (0, RB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, RB.jsx)("span", {
              children: nB("general:description")
            }), (0, RB.jsx)(JB.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: gB,
              maxLength: DB.r,
              onValueChange: EB,
              useTextarea: !0
            }, KB)]
          })]
        }), eB && (0, RB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: eB
        }), (0, RB.jsxs)(yB.q, {
          className: "ShaderPackPublishButton",
          disabled: !sB,
          loading: cB,
          onClick: () => {
            !async function() {
              var BB;
              if (!kB) return;
              const {
                name: OB,
                description: GB
              } = null !== WB && void 0 !== WB ? WB : {
                name: HB,
                description: gB.trim()
              }, YB = {
                packId: null !== (BB = null === WB || void 0 === WB ? void 0 : WB.packId) && void 0 !== BB ? BB : null,
                name: OB,
                description: GB,
                apiVersion: kB.pack.manifest.apiVersion,
                files: (0, oB.y)(kB.pack.files),
                keepCircleShadows: !0 === kB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(YB)).byteLength > 1024 * DB.U) TB(nB("shaderPackListing:publishTooBig", {
                kilobytes: String(DB.U)
              }));
              else {
                hB(!0), TB(null);
                try {
                  VB(await lB.b.publishShaderPack(UB, YB))
                } catch (QB) {
                  console.error("Failed to publish the shader pack", QB), TB((0, NB.u)(QB, nB, "shaderPackListing:publishFailed"))
                } finally {
                  hB(!1)
                }
              }
            }()
          },
          children: [(0, RB.jsx)(jB.b, {
            name: "upload"
          }), " ", nB(WB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function AB(BB) {
      let {
        picked: OB
      } = BB;
      const {
        t: GB
      } = (0, pB.H)(), {
        validation: YB
      } = OB;
      return null === YB ? (0, RB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: GB("shaderPackListing:publishUnchecked")
      }) : YB.ok ? (0, RB.jsxs)(RB.Fragment, {
        children: [(0, RB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, RB.jsx)(jB.b, {
            name: "circle-check"
          }), " ", GB("shaderPackListing:publishReady")]
        }), YB.offInStrict.length > 0 && (0, RB.jsxs)(RB.Fragment, {
          children: [(0, RB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, RB.jsx)(jB.b, {
              name: "triangle-exclamation"
            }), " ", GB("shaderPack:offInStrict")]
          }), (0, RB.jsx)(PB.c, {
            diagnostics: YB.offInStrict,
            t: GB
          })]
        })]
      }) : (0, RB.jsxs)(RB.Fragment, {
        children: [(0, RB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, RB.jsx)(jB.b, {
            name: "triangle-exclamation"
          }), " ", GB("shaderPackListing:publishHasErrors")]
        }), (0, RB.jsx)(PB.c, {
          diagnostics: YB.errors,
          more: YB.moreErrors,
          t: GB
        })]
      })
    }
    const VB = "\0";

    function SB() {
      const {
        t: BB
      } = (0, pB.H)(), [OB, GB] = BB("shaderPackListing:bloxdhubHelp", {
        site: VB
      }).split(VB);
      return (0, RB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [OB, (0, RB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: DB.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: DB.e
        }), GB]
      })
    }
  },
  5538: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.k,
      c: () => DB,
      g: () => YB.r
    });
    var YB = GB(5546);
    const DB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((OB => ({
      strict: BB,
      program: OB
    })))))
  },
  5546: (BB, OB, GB) => {
    GB.d(OB, {
      B: () => zB,
      e: () => jB,
      h: () => oB,
      k: () => YB,
      o: () => qB,
      p: () => PB,
      r: () => DB,
      u: () => QB,
      v: () => JB,
      y: () => MB
    });
    const YB = 5;

    function DB(BB) {
      return BB === YB
    }

    function QB(BB) {
      return [...BB.features]
    }
    const oB = 262144,
      jB = 256,
      yB = 256;

    function JB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const OB = [];
      for (const [GB, YB] of Object.entries(BB)) {
        if ("string" !== typeof YB) return `${GB} isn't text.`;
        OB.push({
          path: GB,
          source: YB
        })
      }
      return OB.sort(((BB, OB) => PB(BB.path, OB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > jB) return `The pack has more than ${jB} .wgsl files.`;
          const OB = new Set;
          for (const {
              path: GB
            }
            of BB) {
            const BB = lB(GB);
            if (null !== BB) return BB;
            if (OB.has(GB)) return `The pack has two files at ${GB}.`;
            OB.add(GB)
          }
          return zB(BB) > oB ? `The pack's .wgsl files are over ${oB/1024} KB in total.` : null
        }(OB) ?? OB
    }

    function MB(BB) {
      const OB = {};
      for (const GB of BB) OB[GB.path] = GB.source;
      return OB
    }

    function PB(BB, OB) {
      return BB < OB ? -1 : BB > OB ? 1 : 0
    }

    function zB(BB) {
      const OB = new TextEncoder;
      let GB = 0;
      for (const {
          source: YB
        }
        of BB) GB += OB.encode(YB).byteLength;
      return GB
    }

    function lB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > yB) return `A file path is over ${yB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const pB = /^(.*)\[rot\[([1-4])$/;

    function qB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const YB = new Map;
      OB.forEach(((BB, OB) => {
        let {
          numAnimStates: GB,
          animStartIdx: DB
        } = BB;
        for (let QB = 1; QB < GB; QB++) YB.set(DB + QB - 1, OB)
      }));
      const DB = Object.entries(BB),
        QB = new Map;
      for (const [qB, ZB] of DB) {
        const BB = pB.exec(qB);
        "1" === BB?.[2] && QB.set(BB[1], ZB + 1)
      }
      const oB = BB => {
          const OB = pB.exec(BB);
          return OB && QB.has(OB[1]) ? {
            root: OB[1],
            rotation: Number(OB[2]) - 1
          } : null
        },
        jB = new Set(DB.map((BB => {
          let [OB] = BB;
          return oB(OB)?.root ?? OB
        }))),
        yB = (BB, GB) => {
          const YB = BB.replace(/_?0$/, "");
          return (OB[GB]?.numAnimStates ?? 0) > 1 && !jB.has(YB) ? YB : BB
        },
        JB = new Map;
      for (const [pB, qB] of DB) JB.set(qB, yB(oB(pB)?.root ?? pB, qB));
      const MB = DB.reduce(((BB, OB) => {
          let [, GB] = OB;
          return Math.max(BB, GB + 1)
        }), 0),
        PB = Array.from({
          length: MB
        }, ((BB, OB) => ({
          id: OB + 1,
          rotation: 0
        }))),
        zB = new Map,
        lB = new Map;
      for (const [pB, qB] of DB) {
        const BB = oB(pB),
          OB = YB.get(qB);
        if (void 0 !== OB) {
          const GB = JB.get(OB);
          lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "frame"
          }), BB && !lB.has(BB.root) && lB.set(BB.root, {
            name: BB.root,
            texture: GB,
            kind: "frame"
          });
          continue
        }
        const GB = JB.get(qB),
          DB = BB?.root ?? pB;
        if (GB !== DB && lB.set(DB, {
            name: DB,
            texture: GB,
            kind: "frame"
          }), BB) {
          const OB = QB.get(BB.root);
          PB[qB] = {
            id: OB,
            rotation: BB.rotation
          }, zB.set(GB, OB), lB.set(pB, {
            name: pB,
            texture: GB,
            kind: "rotation"
          })
        } else zB.set(GB, qB + 1)
      }
      for (const pB of zB.keys()) lB.delete(pB);
      for (const [pB, qB] of GB) {
        const BB = zB.get(qB);
        void 0 === BB || zB.has(pB) || (zB.set(pB, BB), lB.delete(pB))
      }
      return {
        named: [...zB].sort(((BB, OB) => {
          let [GB] = BB, [YB] = OB;
          return GB < YB ? -1 : GB > YB ? 1 : 0
        })).map((BB => {
          let [OB, GB] = BB;
          return {
            name: OB,
            id: GB
          }
        })),
        aliases: [...lB.values()],
        layers: PB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);