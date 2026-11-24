export const id = 114;
export const ids = [114];
export const modules = {
  5125: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      f: () => UB
    });
    var QB = zB(62),
      nB = zB(1478),
      dB = zB(1240),
      IB = zB(106),
      NB = zB(3258),
      uB = zB(1148);

    function UB() {
      return !(0, IB.isMobile)()
    }

    function aB(BB) {
      let {
        disabled: jB,
        openFolderPicker: zB,
        onFiles: IB
      } = BB;
      const {
        t: aB
      } = (0, dB.D)(), pB = (0, QB.useRef)(null);
      return (0, uB.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, uB.jsx)("input", {
          ref: pB,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(BB) {
            const jB = Array.from(BB.target.files);
            BB.target.value = "", IB(jB)
          }
        }), UB() && (0, uB.jsx)(nB.f, {
          disabled: jB,
          onClick: zB,
          children: aB("general:chooseFolder")
        }), (0, uB.jsx)(nB.f, {
          disabled: jB,
          onClick: () => {
            (0, NB.f)(pB.current)
          },
          children: aB("general:chooseZip")
        })]
      })
    }
  },
  5110: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      g: () => IB,
      h: () => dB
    });
    var QB = zB(5115);
    const nB = [BB => BB.strict ? "strict" : "nonStrict", BB => BB.program];

    function dB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QB = {};
      for (const nB in zB) QB[nB] = `\0${nB}\0`;
      return BB(jB, QB).replace(/\0(\w+)\0/g, ((BB, jB) => zB[jB]))
    }

    function IB(BB) {
      return null === BB.file ? null : BB.line > 0 ? `${BB.file}:${BB.line}` : BB.file
    }

    function NB(BB) {
      const jB = new Map(BB.map((BB => [uB(BB).join("."), BB])));
      if (0 === jB.size) return [];
      const zB = aB([...jB.values()]);
      return 0 === zB[0].length ? [] : zB
    }

    function uB(BB) {
      return nB.map((jB => jB(BB)))
    }
    const UB = nB.map((BB => new Set(QB.g.map(BB)).size));

    function aB(BB) {
      const jB = nB.map((jB => new Set(BB.map(jB)))),
        zB = jB.reduce(((BB, jB) => BB * jB.size), 1),
        QB = jB.every(((BB, jB) => 1 === BB.size || BB.size === UB[jB]));
      if (zB === BB.length && QB) return [nB.filter(((BB, zB) => 1 === jB[zB].size)).map((jB => jB(BB[0])))];
      let dB = null;
      for (let IB = 0; IB < nB.length; IB++) {
        if (1 === jB[IB].size) continue;
        const zB = pB(BB, nB[IB]).flatMap(aB);
        (null === dB || zB.length < dB.length) && (dB = zB)
      }
      return dB
    }

    function pB(BB, jB) {
      const zB = new Map;
      for (const nB of BB) {
        var QB;
        const BB = jB(nB);
        zB.set(BB, [...null !== (QB = zB.get(BB)) && void 0 !== QB ? QB : [], nB])
      }
      return [...zB.values()]
    }
  },
  6562: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      ShaderPackPublishForm: () => LB
    });
    var QB = zB(62),
      nB = zB(6523),
      dB = zB(221),
      IB = zB(5120),
      NB = zB(1108),
      uB = zB(1478),
      UB = zB(1710),
      aB = zB(1169),
      pB = zB(6567),
      rB = zB(6572),
      sB = zB(1532),
      JB = zB(1240),
      mB = zB(6574),
      yB = zB(6598),
      kB = zB(6515),
      GB = zB(1148);

    function LB(BB) {
      var jB, zB, pB;
      let {
        existing: LB,
        onPublished: tB
      } = BB;
      const {
        t: MB
      } = (0, JB.D)(), {
        userContext: EB,
        isUserContextUpdating: iB
      } = (0, aB.d)(), [qB, fB] = (0, QB.useState)(null), [oB, HB] = (0, QB.useState)(0), [DB, FB] = (0, QB.useState)(null !== (jB = null === LB || void 0 === LB ? void 0 : LB.name) && void 0 !== jB ? jB : ""), YB = (0, QB.useRef)(DB), VB = (0, QB.useRef)(""), hB = BB => {
        YB.current = BB, FB(BB)
      }, [XB, ZB] = (0, QB.useState)(null !== (zB = null === LB || void 0 === LB ? void 0 : LB.description) && void 0 !== zB ? zB : ""), AB = (0, QB.useRef)(XB), TB = (0, QB.useRef)(""), PB = BB => {
        AB.current = BB, ZB(BB)
      }, [WB, eB] = (0, QB.useState)(!1), {
        loading: lB,
        error: wB,
        setError: xB,
        onFiles: KB
      } = (0, rB.e)((async BB => {
        const jB = await (0, mB.loadPageShaderPackCompiler)();
        if (!jB) return void xB(MB("shaderPack:compilerUnavailable"));
        const zB = await (0, yB.f)(jB, BB.files);
        if (fB({
            pack: BB,
            validation: zB,
            sourceBytes: (0, IB.z)(BB.files)
          }), !LB) {
          var QB;
          if ("" !== YB.current.trim() && YB.current !== VB.current || (VB.current = (0, nB.U)(BB.manifest.name.trim(), nB.B), hB(VB.current)), "" === AB.current.trim() || AB.current === TB.current) TB.current = (0, nB.U)((null !== (QB = BB.manifest.description) && void 0 !== QB ? QB : "").trim(), nB.o), PB(TB.current);
          HB((BB => BB + 1))
        }
      })), CB = !iB && !EB.isLoggedIn() && !dB.d.offlineMode, cB = DB.trim(), bB = cB.length < nB.D, vB = null !== qB && !1 !== (null === (pB = qB.validation) || void 0 === pB ? void 0 : pB.ok) && !lB && !bB && !CB && !iB;
      return (0, GB.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, GB.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: LB ? MB("shaderPackListing:uploadIntro", {
            minutes: String(nB.L / 6e4)
          }) : MB("shaderPackListing:publishIntro")
        }), (0, GB.jsx)(SB, {}), CB && (0, GB.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: MB("shaderPackListing:publishNeedsLogin")
        }), (0, GB.jsx)(rB.d, {
          busy: lB,
          disabled: lB || WB,
          onFiles: BB => {
            fB(null), KB(BB)
          }
        }), qB && (0, GB.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, GB.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: qB.pack.manifest.name
          }), (0, GB.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [MB("shaderPackListing:sizeValue", {
              kilobytes: String((0, kB.N)(qB.sourceBytes))
            }), " \xb7", " ", MB("shaderPackListing:filesValue", {
              files: String(qB.pack.files.length)
            })]
          }), (0, GB.jsx)(gB, {
            picked: qB
          })]
        }), !LB && (0, GB.jsxs)(GB.Fragment, {
          children: [(0, GB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, GB.jsx)("span", {
              children: MB("general:name")
            }), (0, GB.jsx)(UB.d, {
              className: "ShaderPackPublishInput",
              defaultValue: DB,
              maxLength: nB.B,
              onValueChange: hB
            }, oB), qB && bB && (0, GB.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: MB("shaderPackListing:nameTooShort", {
                min: String(nB.D)
              })
            })]
          }), (0, GB.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, GB.jsx)("span", {
              children: MB("general:description")
            }), (0, GB.jsx)(UB.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: XB,
              maxLength: nB.o,
              onValueChange: PB,
              useTextarea: !0
            }, oB)]
          })]
        }), wB && (0, GB.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: wB
        }), (0, GB.jsxs)(uB.m, {
          className: "ShaderPackPublishButton",
          disabled: !vB,
          loading: WB,
          onClick: () => {
            !async function() {
              var BB;
              if (!qB) return;
              const {
                name: jB,
                description: zB
              } = null !== LB && void 0 !== LB ? LB : {
                name: cB,
                description: XB.trim()
              }, QB = {
                packId: null !== (BB = null === LB || void 0 === LB ? void 0 : LB.packId) && void 0 !== BB ? BB : null,
                name: jB,
                description: zB,
                apiVersion: qB.pack.manifest.apiVersion,
                files: (0, IB.w)(qB.pack.files),
                keepCircleShadows: !0 === qB.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(QB)).byteLength > 1024 * nB.T) xB(MB("shaderPackListing:publishTooBig", {
                kilobytes: String(nB.T)
              }));
              else {
                eB(!0), xB(null);
                try {
                  tB(await sB.b.publishShaderPack(EB, QB))
                } catch (dB) {
                  console.error("Failed to publish the shader pack", dB), xB((0, kB.z)(dB, MB, "shaderPackListing:publishFailed"))
                } finally {
                  eB(!1)
                }
              }
            }()
          },
          children: [(0, GB.jsx)(NB.c, {
            name: "upload"
          }), " ", MB(LB ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function gB(BB) {
      let {
        picked: jB
      } = BB;
      const {
        t: zB
      } = (0, JB.D)(), {
        validation: QB
      } = jB;
      return null === QB ? (0, GB.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: zB("shaderPackListing:publishUnchecked")
      }) : QB.ok ? (0, GB.jsxs)(GB.Fragment, {
        children: [(0, GB.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, GB.jsx)(NB.c, {
            name: "circle-check"
          }), " ", zB("shaderPackListing:publishReady")]
        }), QB.offInStrict.length > 0 && (0, GB.jsxs)(GB.Fragment, {
          children: [(0, GB.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, GB.jsx)(NB.c, {
              name: "triangle-exclamation"
            }), " ", zB("shaderPack:offInStrict")]
          }), (0, GB.jsx)(pB.e, {
            diagnostics: QB.offInStrict,
            t: zB
          })]
        })]
      }) : (0, GB.jsxs)(GB.Fragment, {
        children: [(0, GB.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, GB.jsx)(NB.c, {
            name: "triangle-exclamation"
          }), " ", zB("shaderPackListing:publishHasErrors")]
        }), (0, GB.jsx)(pB.e, {
          diagnostics: QB.errors,
          more: QB.moreErrors,
          t: zB
        })]
      })
    }
    const tB = "\0";

    function SB() {
      const {
        t: BB
      } = (0, JB.D)(), [jB, zB] = BB("shaderPackListing:bloxdhubHelp", {
        site: tB
      }).split(tB);
      return (0, GB.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [jB, (0, GB.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: nB.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: nB.d
        }), zB]
      })
    }
  },
  5115: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.f,
      g: () => nB,
      k: () => QB.n
    });
    var QB = zB(5120);
    const nB = [!1, !0].flatMap((BB => ["terrain", "liquid", "model"].map((jB => ({
      strict: BB,
      program: jB
    })))))
  },
  5120: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB,
      e: () => IB,
      f: () => QB,
      j: () => mB,
      m: () => pB,
      n: () => nB,
      o: () => dB,
      s: () => UB,
      w: () => aB,
      z: () => rB
    });
    const QB = 5;

    function nB(BB) {
      return BB === QB
    }

    function dB(BB) {
      return [...BB.features]
    }
    const IB = 262144,
      NB = 256,
      uB = 256;

    function UB(BB) {
      if ("object" !== typeof BB || null === BB || Array.isArray(BB)) return "The pack has no files.";
      const jB = [];
      for (const [zB, QB] of Object.entries(BB)) {
        if ("string" !== typeof QB) return `${zB} isn't text.`;
        jB.push({
          path: zB,
          source: QB
        })
      }
      return jB.sort(((BB, jB) => pB(BB.path, jB.path))),
        function(BB) {
          if (0 === BB.length) return "The pack has no .wgsl files.";
          if (BB.length > NB) return `The pack has more than ${NB} .wgsl files.`;
          const jB = new Set;
          for (const {
              path: zB
            }
            of BB) {
            const BB = sB(zB);
            if (null !== BB) return BB;
            if (jB.has(zB)) return `The pack has two files at ${zB}.`;
            jB.add(zB)
          }
          return rB(BB) > IB ? `The pack's .wgsl files are over ${IB/1024} KB in total.` : null
        }(jB) ?? jB
    }

    function aB(BB) {
      const jB = {};
      for (const zB of BB) jB[zB.path] = zB.source;
      return jB
    }

    function pB(BB, jB) {
      return BB < jB ? -1 : BB > jB ? 1 : 0
    }

    function rB(BB) {
      const jB = new TextEncoder;
      let zB = 0;
      for (const {
          source: QB
        }
        of BB) zB += jB.encode(QB).byteLength;
      return zB
    }

    function sB(BB) {
      if (!BB.toLowerCase().endsWith(".wgsl")) return `${BB} isn't a .wgsl file.`;
      if (BB.length > uB) return `A file path is over ${uB} characters.`;
      if (BB.includes("\\") || /[\u0000-\u001f]/.test(BB)) return `${BB} isn't a valid file path.`;
      return BB.split("/").some((BB => "" === BB || "." === BB || ".." === BB)) ? `${BB} isn't a valid file path.` : null
    }
    const JB = /^(.*)\[rot\[([1-4])$/;

    function mB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QB = new Map;
      jB.forEach(((BB, jB) => {
        let {
          numAnimStates: zB,
          animStartIdx: nB
        } = BB;
        for (let dB = 1; dB < zB; dB++) QB.set(nB + dB - 1, jB)
      }));
      const nB = Object.entries(BB),
        dB = new Map;
      for (const [mB, yB] of nB) {
        const BB = JB.exec(mB);
        "1" === BB?.[2] && dB.set(BB[1], yB + 1)
      }
      const IB = BB => {
          const jB = JB.exec(BB);
          return jB && dB.has(jB[1]) ? {
            root: jB[1],
            rotation: Number(jB[2]) - 1
          } : null
        },
        NB = new Set(nB.map((BB => {
          let [jB] = BB;
          return IB(jB)?.root ?? jB
        }))),
        uB = (BB, zB) => {
          const QB = BB.replace(/_?0$/, "");
          return (jB[zB]?.numAnimStates ?? 0) > 1 && !NB.has(QB) ? QB : BB
        },
        UB = new Map;
      for (const [JB, mB] of nB) UB.set(mB, uB(IB(JB)?.root ?? JB, mB));
      const aB = nB.reduce(((BB, jB) => {
          let [, zB] = jB;
          return Math.max(BB, zB + 1)
        }), 0),
        pB = Array.from({
          length: aB
        }, ((BB, jB) => ({
          id: jB + 1,
          rotation: 0
        }))),
        rB = new Map,
        sB = new Map;
      for (const [JB, mB] of nB) {
        const BB = IB(JB),
          jB = QB.get(mB);
        if (void 0 !== jB) {
          const zB = UB.get(jB);
          sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "frame"
          }), BB && !sB.has(BB.root) && sB.set(BB.root, {
            name: BB.root,
            texture: zB,
            kind: "frame"
          });
          continue
        }
        const zB = UB.get(mB),
          nB = BB?.root ?? JB;
        if (zB !== nB && sB.set(nB, {
            name: nB,
            texture: zB,
            kind: "frame"
          }), BB) {
          const jB = dB.get(BB.root);
          pB[mB] = {
            id: jB,
            rotation: BB.rotation
          }, rB.set(zB, jB), sB.set(JB, {
            name: JB,
            texture: zB,
            kind: "rotation"
          })
        } else rB.set(zB, mB + 1)
      }
      for (const JB of rB.keys()) sB.delete(JB);
      for (const [JB, mB] of zB) {
        const BB = rB.get(mB);
        void 0 === BB || rB.has(JB) || (rB.set(JB, BB), sB.delete(JB))
      }
      return {
        named: [...rB].sort(((BB, jB) => {
          let [zB] = BB, [QB] = jB;
          return zB < QB ? -1 : zB > QB ? 1 : 0
        })).map((BB => {
          let [jB, zB] = BB;
          return {
            name: jB,
            id: zB
          }
        })),
        aliases: [...sB.values()],
        layers: pB
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);