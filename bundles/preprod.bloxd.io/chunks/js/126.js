export const id = 126;
export const ids = [126];
export const modules = {
  5451: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => zM,
      g: () => QM
    });
    var OM = iM(44),
      SM = iM(1520),
      jM = iM(1188),
      aM = iM(83),
      PM = iM(3540),
      nM = iM(1303);

    function QM() {
      return !(0, aM.isMobile)()
    }

    function zM(MM) {
      let {
        disabled: rM,
        openFolderPicker: iM,
        onFiles: aM
      } = MM;
      const {
        t: zM
      } = (0, jM.A)(), LM = (0, OM.useRef)(null);
      return (0, nM.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, nM.jsx)("input", {
          ref: LM,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(MM) {
            const rM = Array.from(MM.target.files);
            MM.target.value = "", aM(rM)
          }
        }), QM() && (0, nM.jsx)(SM.e, {
          disabled: rM,
          onClick: iM,
          children: zM("general:chooseFolder")
        }), (0, nM.jsx)(SM.e, {
          disabled: rM,
          onClick: () => {
            (0, PM.f)(LM.current)
          },
          children: zM("general:chooseZip")
        })]
      })
    }
  },
  5430: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => aM,
      i: () => jM
    });
    var OM = iM(5435);
    const SM = [MM => MM.strict ? "strict" : "nonStrict", MM => MM.program];

    function jM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const OM = {};
      for (const SM in iM) OM[SM] = `\0${SM}\0`;
      return MM(rM, OM).replace(/\0(\w+)\0/g, ((MM, rM) => iM[rM]))
    }

    function aM(MM) {
      return null === MM.file ? null : MM.line > 0 ? `${MM.file}:${MM.line}` : MM.file
    }

    function PM(MM) {
      const rM = new Map(MM.map((MM => [nM(MM).join("."), MM])));
      if (0 === rM.size) return [];
      const iM = zM([...rM.values()]);
      return 0 === iM[0].length ? [] : iM
    }

    function nM(MM) {
      return SM.map((rM => rM(MM)))
    }
    const QM = SM.map((MM => new Set(OM.g.map(MM)).size));

    function zM(MM) {
      const rM = SM.map((rM => new Set(MM.map(rM)))),
        iM = rM.reduce(((MM, rM) => MM * rM.size), 1),
        OM = rM.every(((MM, rM) => 1 === MM.size || MM.size === QM[rM]));
      if (iM === MM.length && OM) return [SM.filter(((MM, iM) => 1 === rM[iM].size)).map((rM => rM(MM[0])))];
      let jM = null;
      for (let aM = 0; aM < SM.length; aM++) {
        if (1 === rM[aM].size) continue;
        const iM = LM(MM, SM[aM]).flatMap(zM);
        (null === jM || iM.length < jM.length) && (jM = iM)
      }
      return jM
    }

    function LM(MM, rM) {
      const iM = new Map;
      for (const SM of MM) {
        var OM;
        const MM = rM(SM);
        iM.set(MM, [...null !== (OM = iM.get(MM)) && void 0 !== OM ? OM : [], SM])
      }
      return [...iM.values()]
    }
  },
  7093: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      ShaderPackPublishForm: () => EM
    });
    var OM = iM(44),
      SM = iM(7054),
      jM = iM(184),
      aM = iM(5442),
      PM = iM(1398),
      nM = iM(1520),
      QM = iM(1763),
      zM = iM(1142),
      LM = iM(7102),
      mM = iM(7105),
      HM = iM(1573),
      hM = iM(1188),
      JM = iM(7111),
      dM = iM(7134),
      yM = iM(7051),
      lM = iM(1303);

    function EM(MM) {
      var rM, iM, LM;
      let {
        existing: EM,
        onPublished: GM
      } = MM;
      const {
        t: eM
      } = (0, hM.A)(), {
        userContext: bM,
        isUserContextUpdating: wM
      } = (0, zM.b)(), [tM, gM] = (0, OM.useState)(null), [uM, RM] = (0, OM.useState)(0), [pM, WM] = (0, OM.useState)(null !== (rM = null === EM || void 0 === EM ? void 0 : EM.name) && void 0 !== rM ? rM : ""), sM = (0, OM.useRef)(pM), DM = (0, OM.useRef)(""), kM = MM => {
        sM.current = MM, WM(MM)
      }, [ZM, oM] = (0, OM.useState)(null !== (iM = null === EM || void 0 === EM ? void 0 : EM.description) && void 0 !== iM ? iM : ""), fM = (0, OM.useRef)(ZM), YM = (0, OM.useRef)(""), NM = MM => {
        fM.current = MM, oM(MM)
      }, [AM, xM] = (0, OM.useState)(!1), {
        loading: vM,
        error: FM,
        setError: BM,
        onFiles: XM
      } = (0, mM.e)((async MM => {
        const rM = await (0, JM.loadPageShaderPackCompiler)();
        if (!rM) return void BM(eM("shaderPack:compilerUnavailable"));
        const iM = await (0, dM.f)(rM, MM.files);
        if (gM({
            pack: MM,
            validation: iM,
            sourceBytes: (0, aM.z)(MM.files)
          }), !EM) {
          var OM;
          if ("" !== sM.current.trim() && sM.current !== DM.current || (DM.current = (0, SM.V)(MM.manifest.name.trim(), SM.z), kM(DM.current)), "" === fM.current.trim() || fM.current === YM.current) YM.current = (0, SM.V)((null !== (OM = MM.manifest.description) && void 0 !== OM ? OM : "").trim(), SM.t), NM(YM.current);
          RM((MM => MM + 1))
        }
      })), IM = !wM && !bM.isLoggedIn() && !jM.b.offlineMode, KM = pM.trim(), qM = KM.length < SM.D, TM = null !== tM && !1 !== (null === (LM = tM.validation) || void 0 === LM ? void 0 : LM.ok) && !vM && !qM && !IM && !wM;
      return (0, lM.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, lM.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: EM ? eM("shaderPackListing:uploadIntro", {
            minutes: String(SM.I / 6e4)
          }) : eM("shaderPackListing:publishIntro")
        }), (0, lM.jsx)(CM, {}), IM && (0, lM.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: eM("shaderPackListing:publishNeedsLogin")
        }), (0, lM.jsx)(mM.b, {
          busy: vM,
          disabled: vM || AM,
          onFiles: MM => {
            gM(null), XM(MM)
          }
        }), tM && (0, lM.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, lM.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: tM.pack.manifest.name
          }), (0, lM.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [eM("shaderPackListing:sizeValue", {
              kilobytes: String((0, yM.K)(tM.sourceBytes))
            }), " \xb7", " ", eM("shaderPackListing:filesValue", {
              files: String(tM.pack.files.length)
            })]
          }), (0, lM.jsx)(UM, {
            picked: tM
          })]
        }), !EM && (0, lM.jsxs)(lM.Fragment, {
          children: [(0, lM.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, lM.jsx)("span", {
              children: eM("general:name")
            }), (0, lM.jsx)(QM.b, {
              className: "ShaderPackPublishInput",
              defaultValue: pM,
              maxLength: SM.z,
              onValueChange: kM
            }, uM), tM && qM && (0, lM.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: eM("shaderPackListing:nameTooShort", {
                min: String(SM.D)
              })
            })]
          }), (0, lM.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, lM.jsx)("span", {
              children: eM("general:description")
            }), (0, lM.jsx)(QM.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: ZM,
              maxLength: SM.t,
              onValueChange: NM,
              useTextarea: !0
            }, uM)]
          })]
        }), FM && (0, lM.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: FM
        }), (0, lM.jsxs)(nM.p, {
          className: "ShaderPackPublishButton",
          disabled: !TM,
          loading: AM,
          onClick: () => {
            !async function() {
              var MM;
              if (!tM) return;
              const {
                name: rM,
                description: iM
              } = null !== EM && void 0 !== EM ? EM : {
                name: KM,
                description: ZM.trim()
              }, OM = {
                packId: null !== (MM = null === EM || void 0 === EM ? void 0 : EM.packId) && void 0 !== MM ? MM : null,
                name: rM,
                description: iM,
                apiVersion: tM.pack.manifest.apiVersion,
                files: (0, aM.w)(tM.pack.files),
                keepCircleShadows: !0 === tM.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(OM)).byteLength > 1024 * SM.U) BM(eM("shaderPackListing:publishTooBig", {
                kilobytes: String(SM.U)
              }));
              else {
                xM(!0), BM(null);
                try {
                  GM(await HM.c.publishShaderPack(bM, OM))
                } catch (jM) {
                  console.error("Failed to publish the shader pack", jM), BM((0, yM.u)(jM, eM, "shaderPackListing:publishFailed"))
                } finally {
                  xM(!1)
                }
              }
            }()
          },
          children: [(0, lM.jsx)(PM.b, {
            name: "upload"
          }), " ", eM(EM ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function UM(MM) {
      let {
        picked: rM
      } = MM;
      const {
        t: iM
      } = (0, hM.A)(), {
        validation: OM
      } = rM;
      return null === OM ? (0, lM.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: iM("shaderPackListing:publishUnchecked")
      }) : OM.ok ? (0, lM.jsxs)(lM.Fragment, {
        children: [(0, lM.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, lM.jsx)(PM.b, {
            name: "circle-check"
          }), " ", iM("shaderPackListing:publishReady")]
        }), OM.offInStrict.length > 0 && (0, lM.jsxs)(lM.Fragment, {
          children: [(0, lM.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, lM.jsx)(PM.b, {
              name: "triangle-exclamation"
            }), " ", iM("shaderPack:offInStrict")]
          }), (0, lM.jsx)(LM.b, {
            diagnostics: OM.offInStrict,
            t: iM
          })]
        })]
      }) : (0, lM.jsxs)(lM.Fragment, {
        children: [(0, lM.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, lM.jsx)(PM.b, {
            name: "triangle-exclamation"
          }), " ", iM("shaderPackListing:publishHasErrors")]
        }), (0, lM.jsx)(LM.b, {
          diagnostics: OM.errors,
          more: OM.moreErrors,
          t: iM
        })]
      })
    }
    const GM = "\0";

    function CM() {
      const {
        t: MM
      } = (0, hM.A)(), [rM, iM] = MM("shaderPackListing:bloxdhubHelp", {
        site: GM
      }).split(GM);
      return (0, lM.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [rM, (0, lM.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: SM.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: SM.b
        }), iM]
      })
    }
  },
  5435: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.g,
      g: () => SM,
      k: () => OM.o
    });
    var OM = iM(5442);
    const SM = [!1, !0].flatMap((MM => ["terrain", "liquid", "model"].map((rM => ({
      strict: MM,
      program: rM
    })))))
  },
  5442: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      f: () => aM,
      g: () => OM,
      j: () => JM,
      k: () => LM,
      o: () => SM,
      q: () => jM,
      t: () => QM,
      w: () => zM,
      z: () => mM
    });
    const OM = 5;

    function SM(MM) {
      return MM === OM
    }

    function jM(MM) {
      return [...MM.features]
    }
    const aM = 262144,
      PM = 256,
      nM = 256;

    function QM(MM) {
      if ("object" !== typeof MM || null === MM || Array.isArray(MM)) return "The pack has no files.";
      const rM = [];
      for (const [iM, OM] of Object.entries(MM)) {
        if ("string" !== typeof OM) return `${iM} isn't text.`;
        rM.push({
          path: iM,
          source: OM
        })
      }
      return rM.sort(((MM, rM) => LM(MM.path, rM.path))),
        function(MM) {
          if (0 === MM.length) return "The pack has no .wgsl files.";
          if (MM.length > PM) return `The pack has more than ${PM} .wgsl files.`;
          const rM = new Set;
          for (const {
              path: iM
            }
            of MM) {
            const MM = HM(iM);
            if (null !== MM) return MM;
            if (rM.has(iM)) return `The pack has two files at ${iM}.`;
            rM.add(iM)
          }
          return mM(MM) > aM ? `The pack's .wgsl files are over ${aM/1024} KB in total.` : null
        }(rM) ?? rM
    }

    function zM(MM) {
      const rM = {};
      for (const iM of MM) rM[iM.path] = iM.source;
      return rM
    }

    function LM(MM, rM) {
      return MM < rM ? -1 : MM > rM ? 1 : 0
    }

    function mM(MM) {
      const rM = new TextEncoder;
      let iM = 0;
      for (const {
          source: OM
        }
        of MM) iM += rM.encode(OM).byteLength;
      return iM
    }

    function HM(MM) {
      if (!MM.toLowerCase().endsWith(".wgsl")) return `${MM} isn't a .wgsl file.`;
      if (MM.length > nM) return `A file path is over ${nM} characters.`;
      if (MM.includes("\\") || /[\u0000-\u001f]/.test(MM)) return `${MM} isn't a valid file path.`;
      return MM.split("/").some((MM => "" === MM || "." === MM || ".." === MM)) ? `${MM} isn't a valid file path.` : null
    }
    const hM = /^(.*)\[rot\[([1-4])$/;

    function JM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const OM = new Map;
      rM.forEach(((MM, rM) => {
        let {
          numAnimStates: iM,
          animStartIdx: SM
        } = MM;
        for (let jM = 1; jM < iM; jM++) OM.set(SM + jM - 1, rM)
      }));
      const SM = Object.entries(MM),
        jM = new Map;
      for (const [JM, dM] of SM) {
        const MM = hM.exec(JM);
        "1" === MM?.[2] && jM.set(MM[1], dM + 1)
      }
      const aM = MM => {
          const rM = hM.exec(MM);
          return rM && jM.has(rM[1]) ? {
            root: rM[1],
            rotation: Number(rM[2]) - 1
          } : null
        },
        PM = new Set(SM.map((MM => {
          let [rM] = MM;
          return aM(rM)?.root ?? rM
        }))),
        nM = (MM, iM) => {
          const OM = MM.replace(/_?0$/, "");
          return (rM[iM]?.numAnimStates ?? 0) > 1 && !PM.has(OM) ? OM : MM
        },
        QM = new Map;
      for (const [hM, JM] of SM) QM.set(JM, nM(aM(hM)?.root ?? hM, JM));
      const zM = SM.reduce(((MM, rM) => {
          let [, iM] = rM;
          return Math.max(MM, iM + 1)
        }), 0),
        LM = Array.from({
          length: zM
        }, ((MM, rM) => ({
          id: rM + 1,
          rotation: 0
        }))),
        mM = new Map,
        HM = new Map;
      for (const [hM, JM] of SM) {
        const MM = aM(hM),
          rM = OM.get(JM);
        if (void 0 !== rM) {
          const iM = QM.get(rM);
          HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "frame"
          }), MM && !HM.has(MM.root) && HM.set(MM.root, {
            name: MM.root,
            texture: iM,
            kind: "frame"
          });
          continue
        }
        const iM = QM.get(JM),
          SM = MM?.root ?? hM;
        if (iM !== SM && HM.set(SM, {
            name: SM,
            texture: iM,
            kind: "frame"
          }), MM) {
          const rM = jM.get(MM.root);
          LM[JM] = {
            id: rM,
            rotation: MM.rotation
          }, mM.set(iM, rM), HM.set(hM, {
            name: hM,
            texture: iM,
            kind: "rotation"
          })
        } else mM.set(iM, JM + 1)
      }
      for (const hM of mM.keys()) HM.delete(hM);
      for (const [hM, JM] of iM) {
        const MM = mM.get(JM);
        void 0 === MM || mM.has(hM) || (mM.set(hM, MM), HM.delete(hM))
      }
      return {
        named: [...mM].sort(((MM, rM) => {
          let [iM] = MM, [OM] = rM;
          return iM < OM ? -1 : iM > OM ? 1 : 0
        })).map((MM => {
          let [rM, iM] = MM;
          return {
            name: rM,
            id: iM
          }
        })),
        aliases: [...HM.values()],
        layers: LM
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);