export const id = 112;
export const ids = [112];
export const modules = {
  5228: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => IS,
      f: () => uS
    });
    var tS = gS(64),
      bS = gS(1528),
      XS = gS(1281),
      xS = gS(104),
      NS = gS(3308),
      qS = gS(1181);

    function uS() {
      return !(0, xS.isMobile)()
    }

    function IS(SS) {
      let {
        disabled: HS,
        openFolderPicker: gS,
        onFiles: xS
      } = SS;
      const {
        t: IS
      } = (0, XS.F)(), fS = (0, tS.useRef)(null);
      return (0, qS.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, qS.jsx)("input", {
          ref: fS,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(SS) {
            const HS = Array.from(SS.target.files);
            SS.target.value = "", xS(HS)
          }
        }), uS() && (0, qS.jsx)(bS.g, {
          disabled: HS,
          onClick: gS,
          children: IS("general:chooseFolder")
        }), (0, qS.jsx)(bS.g, {
          disabled: HS,
          onClick: () => {
            (0, NS.d)(fS.current)
          },
          children: IS("general:chooseZip")
        })]
      })
    }
  },
  5204: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => NS,
      f: () => xS,
      j: () => XS
    });
    var tS = gS(5212);
    const bS = [SS => SS.strict ? "strict" : "nonStrict", SS => SS.program];

    function XS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const tS = {};
      for (const bS in gS) tS[bS] = `\0${bS}\0`;
      return SS(HS, tS).replace(/\0(\w+)\0/g, ((SS, HS) => gS[HS]))
    }

    function xS(SS) {
      return null === SS.file ? null : SS.line > 0 ? `${SS.file}:${SS.line}` : SS.file
    }

    function NS(SS) {
      const HS = new Map(SS.map((SS => [qS(SS).join("."), SS])));
      if (0 === HS.size) return [];
      const gS = IS([...HS.values()]);
      return 0 === gS[0].length ? [] : gS
    }

    function qS(SS) {
      return bS.map((HS => HS(SS)))
    }
    const uS = bS.map((SS => new Set(tS.i.map(SS)).size));

    function IS(SS) {
      const HS = bS.map((HS => new Set(SS.map(HS)))),
        gS = HS.reduce(((SS, HS) => SS * HS.size), 1),
        tS = HS.every(((SS, HS) => 1 === SS.size || SS.size === uS[HS]));
      if (gS === SS.length && tS) return [bS.filter(((SS, gS) => 1 === HS[gS].size)).map((HS => HS(SS[0])))];
      let XS = null;
      for (let xS = 0; xS < bS.length; xS++) {
        if (1 === HS[xS].size) continue;
        const gS = fS(SS, bS[xS]).flatMap(IS);
        (null === XS || gS.length < XS.length) && (XS = gS)
      }
      return XS
    }

    function fS(SS, HS) {
      const gS = new Map;
      for (const bS of SS) {
        var tS;
        const SS = HS(bS);
        gS.set(SS, [...null !== (tS = gS.get(SS)) && void 0 !== tS ? tS : [], bS])
      }
      return [...gS.values()]
    }
  },
  6790: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      ShaderPackPublishForm: () => PS
    });
    var tS = gS(64),
      bS = gS(6760),
      XS = gS(207),
      xS = gS(5221),
      NS = gS(1127),
      qS = gS(1528),
      uS = gS(1774),
      IS = gS(1211),
      fS = gS(6796),
      kS = gS(6805),
      aS = gS(1588),
      KS = gS(1281),
      jS = gS(6810),
      GS = gS(6839),
      CS = gS(6754),
      nS = gS(1181);

    function PS(SS) {
      var HS, gS, fS;
      let {
        existing: PS,
        onPublished: DS
      } = SS;
      const {
        t: hS
      } = (0, KS.F)(), {
        userContext: ZS,
        isUserContextUpdating: JS
      } = (0, IS.b)(), [OS, dS] = (0, tS.useState)(null), [cS, vS] = (0, tS.useState)(0), [ES, LS] = (0, tS.useState)(null !== (HS = null === PS || void 0 === PS ? void 0 : PS.name) && void 0 !== HS ? HS : ""), YS = (0, tS.useRef)(ES), AS = (0, tS.useRef)(""), yS = SS => {
        YS.current = SS, LS(SS)
      }, [VS, iS] = (0, tS.useState)(null !== (gS = null === PS || void 0 === PS ? void 0 : PS.description) && void 0 !== gS ? gS : ""), WS = (0, tS.useRef)(VS), zS = (0, tS.useRef)(""), US = SS => {
        WS.current = SS, iS(SS)
      }, [pS, sS] = (0, tS.useState)(!1), {
        loading: BS,
        error: MS,
        setError: FS,
        onFiles: RS
      } = (0, kS.h)((async SS => {
        const HS = await (0, jS.loadPageShaderPackCompiler)();
        if (!HS) return void FS(hS("shaderPack:compilerUnavailable"));
        const gS = await (0, GS.g)(HS, SS.files);
        if (dS({
            pack: SS,
            validation: gS,
            sourceBytes: (0, xS.y)(SS.files)
          }), !PS) {
          var tS;
          if ("" !== YS.current.trim() && YS.current !== AS.current || (AS.current = (0, bS.V)(SS.manifest.name.trim(), bS.E), yS(AS.current)), "" === WS.current.trim() || WS.current === zS.current) zS.current = (0, bS.V)((null !== (tS = SS.manifest.description) && void 0 !== tS ? tS : "").trim(), bS.v), US(zS.current);
          vS((SS => SS + 1))
        }
      })), TS = !JS && !ZS.isLoggedIn() && !XS.c.offlineMode, oS = ES.trim(), lS = oS.length < bS.I, mS = null !== OS && !1 !== (null === (fS = OS.validation) || void 0 === fS ? void 0 : fS.ok) && !BS && !lS && !TS && !JS;
      return (0, nS.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, nS.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: PS ? hS("shaderPackListing:uploadIntro", {
            minutes: String(bS.M / 6e4)
          }) : hS("shaderPackListing:publishIntro")
        }), (0, nS.jsx)(wS, {}), TS && (0, nS.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: hS("shaderPackListing:publishNeedsLogin")
        }), (0, nS.jsx)(kS.e, {
          busy: BS,
          disabled: BS || pS,
          onFiles: SS => {
            dS(null), RS(SS)
          }
        }), OS && (0, nS.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, nS.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: OS.pack.manifest.name
          }), (0, nS.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [hS("shaderPackListing:sizeValue", {
              kilobytes: String((0, CS.K)(OS.sourceBytes))
            }), " \xb7", " ", hS("shaderPackListing:filesValue", {
              files: String(OS.pack.files.length)
            })]
          }), (0, nS.jsx)(QS, {
            picked: OS
          })]
        }), !PS && (0, nS.jsxs)(nS.Fragment, {
          children: [(0, nS.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, nS.jsx)("span", {
              children: hS("general:name")
            }), (0, nS.jsx)(uS.e, {
              className: "ShaderPackPublishInput",
              defaultValue: ES,
              maxLength: bS.E,
              onValueChange: yS
            }, cS), OS && lS && (0, nS.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: hS("shaderPackListing:nameTooShort", {
                min: String(bS.I)
              })
            })]
          }), (0, nS.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, nS.jsx)("span", {
              children: hS("general:description")
            }), (0, nS.jsx)(uS.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: VS,
              maxLength: bS.v,
              onValueChange: US,
              useTextarea: !0
            }, cS)]
          })]
        }), MS && (0, nS.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: MS
        }), (0, nS.jsxs)(qS.p, {
          className: "ShaderPackPublishButton",
          disabled: !mS,
          loading: pS,
          onClick: () => {
            !async function() {
              var SS;
              if (!OS) return;
              const {
                name: HS,
                description: gS
              } = null !== PS && void 0 !== PS ? PS : {
                name: oS,
                description: VS.trim()
              }, tS = {
                packId: null !== (SS = null === PS || void 0 === PS ? void 0 : PS.packId) && void 0 !== SS ? SS : null,
                name: HS,
                description: gS,
                apiVersion: OS.pack.manifest.apiVersion,
                files: (0, xS.v)(OS.pack.files),
                keepCircleShadows: !0 === OS.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(tS)).byteLength > 1024 * bS.T) FS(hS("shaderPackListing:publishTooBig", {
                kilobytes: String(bS.T)
              }));
              else {
                sS(!0), FS(null);
                try {
                  DS(await aS.b.publishShaderPack(ZS, tS))
                } catch (XS) {
                  console.error("Failed to publish the shader pack", XS), FS((0, CS.s)(XS, hS, "shaderPackListing:publishFailed"))
                } finally {
                  sS(!1)
                }
              }
            }()
          },
          children: [(0, nS.jsx)(NS.d, {
            name: "upload"
          }), " ", hS(PS ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function QS(SS) {
      let {
        picked: HS
      } = SS;
      const {
        t: gS
      } = (0, KS.F)(), {
        validation: tS
      } = HS;
      return null === tS ? (0, nS.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: gS("shaderPackListing:publishUnchecked")
      }) : tS.ok ? (0, nS.jsxs)(nS.Fragment, {
        children: [(0, nS.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, nS.jsx)(NS.d, {
            name: "circle-check"
          }), " ", gS("shaderPackListing:publishReady")]
        }), tS.offInStrict.length > 0 && (0, nS.jsxs)(nS.Fragment, {
          children: [(0, nS.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, nS.jsx)(NS.d, {
              name: "triangle-exclamation"
            }), " ", gS("shaderPack:offInStrict")]
          }), (0, nS.jsx)(fS.c, {
            diagnostics: tS.offInStrict,
            t: gS
          })]
        })]
      }) : (0, nS.jsxs)(nS.Fragment, {
        children: [(0, nS.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, nS.jsx)(NS.d, {
            name: "triangle-exclamation"
          }), " ", gS("shaderPackListing:publishHasErrors")]
        }), (0, nS.jsx)(fS.c, {
          diagnostics: tS.errors,
          more: tS.moreErrors,
          t: gS
        })]
      })
    }
    const DS = "\0";

    function wS() {
      const {
        t: SS
      } = (0, KS.F)(), [HS, gS] = SS("shaderPackListing:bloxdhubHelp", {
        site: DS
      }).split(DS);
      return (0, nS.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [HS, (0, nS.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: bS.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: bS.e
        }), gS]
      })
    }
  },
  5212: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.h,
      i: () => bS,
      j: () => tS.n
    });
    var tS = gS(5221);
    const bS = [!1, !0].flatMap((SS => ["terrain", "liquid", "model"].map((HS => ({
      strict: SS,
      program: HS
    })))))
  },
  5221: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => NS,
      e: () => xS,
      h: () => tS,
      j: () => jS,
      m: () => fS,
      n: () => bS,
      r: () => XS,
      u: () => uS,
      v: () => IS,
      y: () => kS
    });
    const tS = 5;

    function bS(SS) {
      return SS === tS
    }

    function XS(SS) {
      return [...SS.features]
    }
    const xS = 262144,
      NS = 256,
      qS = 256;

    function uS(SS) {
      if ("object" !== typeof SS || null === SS || Array.isArray(SS)) return "The pack has no files.";
      const HS = [];
      for (const [gS, tS] of Object.entries(SS)) {
        if ("string" !== typeof tS) return `${gS} isn't text.`;
        HS.push({
          path: gS,
          source: tS
        })
      }
      return HS.sort(((SS, HS) => fS(SS.path, HS.path))),
        function(SS) {
          if (0 === SS.length) return "The pack has no .wgsl files.";
          if (SS.length > NS) return `The pack has more than ${NS} .wgsl files.`;
          const HS = new Set;
          for (const {
              path: gS
            }
            of SS) {
            const SS = aS(gS);
            if (null !== SS) return SS;
            if (HS.has(gS)) return `The pack has two files at ${gS}.`;
            HS.add(gS)
          }
          return kS(SS) > xS ? `The pack's .wgsl files are over ${xS/1024} KB in total.` : null
        }(HS) ?? HS
    }

    function IS(SS) {
      const HS = {};
      for (const gS of SS) HS[gS.path] = gS.source;
      return HS
    }

    function fS(SS, HS) {
      return SS < HS ? -1 : SS > HS ? 1 : 0
    }

    function kS(SS) {
      const HS = new TextEncoder;
      let gS = 0;
      for (const {
          source: tS
        }
        of SS) gS += HS.encode(tS).byteLength;
      return gS
    }

    function aS(SS) {
      if (!SS.toLowerCase().endsWith(".wgsl")) return `${SS} isn't a .wgsl file.`;
      if (SS.length > qS) return `A file path is over ${qS} characters.`;
      if (SS.includes("\\") || /[\u0000-\u001f]/.test(SS)) return `${SS} isn't a valid file path.`;
      return SS.split("/").some((SS => "" === SS || "." === SS || ".." === SS)) ? `${SS} isn't a valid file path.` : null
    }
    const KS = /^(.*)\[rot\[([1-4])$/;

    function jS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const tS = new Map;
      HS.forEach(((SS, HS) => {
        let {
          numAnimStates: gS,
          animStartIdx: bS
        } = SS;
        for (let XS = 1; XS < gS; XS++) tS.set(bS + XS - 1, HS)
      }));
      const bS = Object.entries(SS),
        XS = new Map;
      for (const [jS, GS] of bS) {
        const SS = KS.exec(jS);
        "1" === SS?.[2] && XS.set(SS[1], GS + 1)
      }
      const xS = SS => {
          const HS = KS.exec(SS);
          return HS && XS.has(HS[1]) ? {
            root: HS[1],
            rotation: Number(HS[2]) - 1
          } : null
        },
        NS = new Set(bS.map((SS => {
          let [HS] = SS;
          return xS(HS)?.root ?? HS
        }))),
        qS = (SS, gS) => {
          const tS = SS.replace(/_?0$/, "");
          return (HS[gS]?.numAnimStates ?? 0) > 1 && !NS.has(tS) ? tS : SS
        },
        uS = new Map;
      for (const [KS, jS] of bS) uS.set(jS, qS(xS(KS)?.root ?? KS, jS));
      const IS = bS.reduce(((SS, HS) => {
          let [, gS] = HS;
          return Math.max(SS, gS + 1)
        }), 0),
        fS = Array.from({
          length: IS
        }, ((SS, HS) => ({
          id: HS + 1,
          rotation: 0
        }))),
        kS = new Map,
        aS = new Map;
      for (const [KS, jS] of bS) {
        const SS = xS(KS),
          HS = tS.get(jS);
        if (void 0 !== HS) {
          const gS = uS.get(HS);
          aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "frame"
          }), SS && !aS.has(SS.root) && aS.set(SS.root, {
            name: SS.root,
            texture: gS,
            kind: "frame"
          });
          continue
        }
        const gS = uS.get(jS),
          bS = SS?.root ?? KS;
        if (gS !== bS && aS.set(bS, {
            name: bS,
            texture: gS,
            kind: "frame"
          }), SS) {
          const HS = XS.get(SS.root);
          fS[jS] = {
            id: HS,
            rotation: SS.rotation
          }, kS.set(gS, HS), aS.set(KS, {
            name: KS,
            texture: gS,
            kind: "rotation"
          })
        } else kS.set(gS, jS + 1)
      }
      for (const KS of kS.keys()) aS.delete(KS);
      for (const [KS, jS] of gS) {
        const SS = kS.get(jS);
        void 0 === SS || kS.has(KS) || (kS.set(KS, SS), aS.delete(KS))
      }
      return {
        named: [...kS].sort(((SS, HS) => {
          let [gS] = SS, [tS] = HS;
          return gS < tS ? -1 : gS > tS ? 1 : 0
        })).map((SS => {
          let [HS, gS] = SS;
          return {
            name: HS,
            id: gS
          }
        })),
        aliases: [...aS.values()],
        layers: fS
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);