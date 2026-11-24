export const id = 112;
export const ids = [112];
export const modules = {
  5091: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      h: () => gD
    });
    var pD = wD(58),
      sD = wD(1447),
      KD = wD(1200),
      rD = wD(103),
      LD = wD(3128),
      cD = wD(1096);

    function gD() {
      return !(0, rD.isMobile)()
    }

    function RD(DD) {
      let {
        disabled: zD,
        openFolderPicker: wD,
        onFiles: rD
      } = DD;
      const {
        t: RD
      } = (0, KD.E)(), AD = (0, pD.useRef)(null);
      return (0, cD.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, cD.jsx)("input", {
          ref: AD,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(DD) {
            const zD = Array.from(DD.target.files);
            DD.target.value = "", rD(zD)
          }
        }), gD() && (0, cD.jsx)(sD.f, {
          disabled: zD,
          onClick: wD,
          children: RD("general:chooseFolder")
        }), (0, cD.jsx)(sD.f, {
          disabled: zD,
          onClick: () => {
            (0, LD.e)(AD.current)
          },
          children: RD("general:chooseZip")
        })]
      })
    }
  },
  5070: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => LD,
      g: () => rD,
      i: () => KD
    });
    var pD = wD(5076);
    const sD = [DD => DD.strict ? "strict" : "nonStrict", DD => DD.program];

    function KD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pD = {};
      for (const sD in wD) pD[sD] = `\0${sD}\0`;
      return DD(zD, pD).replace(/\0(\w+)\0/g, ((DD, zD) => wD[zD]))
    }

    function rD(DD) {
      return null === DD.file ? null : DD.line > 0 ? `${DD.file}:${DD.line}` : DD.file
    }

    function LD(DD) {
      const zD = new Map(DD.map((DD => [cD(DD).join("."), DD])));
      if (0 === zD.size) return [];
      const wD = RD([...zD.values()]);
      return 0 === wD[0].length ? [] : wD
    }

    function cD(DD) {
      return sD.map((zD => zD(DD)))
    }
    const gD = sD.map((DD => new Set(pD.d.map(DD)).size));

    function RD(DD) {
      const zD = sD.map((zD => new Set(DD.map(zD)))),
        wD = zD.reduce(((DD, zD) => DD * zD.size), 1),
        pD = zD.every(((DD, zD) => 1 === DD.size || DD.size === gD[zD]));
      if (wD === DD.length && pD) return [sD.filter(((DD, wD) => 1 === zD[wD].size)).map((zD => zD(DD[0])))];
      let KD = null;
      for (let rD = 0; rD < sD.length; rD++) {
        if (1 === zD[rD].size) continue;
        const wD = AD(DD, sD[rD]).flatMap(RD);
        (null === KD || wD.length < KD.length) && (KD = wD)
      }
      return KD
    }

    function AD(DD, zD) {
      const wD = new Map;
      for (const sD of DD) {
        var pD;
        const DD = zD(sD);
        wD.set(DD, [...null !== (pD = wD.get(DD)) && void 0 !== pD ? pD : [], sD])
      }
      return [...wD.values()]
    }
  },
  6624: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      ShaderPackPublishForm: () => MD
    });
    var pD = wD(58),
      sD = wD(6594),
      KD = wD(206),
      rD = wD(5084),
      LD = wD(1057),
      cD = wD(1447),
      gD = wD(1687),
      RD = wD(1127),
      AD = wD(6630),
      UD = wD(6637),
      fD = wD(1495),
      ID = wD(1200),
      BD = wD(6645),
      GD = wD(6682),
      hD = wD(6590),
      nD = wD(1096);

    function MD(DD) {
      var zD, wD, AD;
      let {
        existing: MD,
        onPublished: JD
      } = DD;
      const {
        t: QD
      } = (0, ID.E)(), {
        userContext: XD,
        isUserContextUpdating: VD
      } = (0, RD.c)(), [PD, CD] = (0, pD.useState)(null), [xD, TD] = (0, pD.useState)(0), [bD, jD] = (0, pD.useState)(null !== (zD = null === MD || void 0 === MD ? void 0 : MD.name) && void 0 !== zD ? zD : ""), dD = (0, pD.useRef)(bD), SD = (0, pD.useRef)(""), iD = DD => {
        dD.current = DD, jD(DD)
      }, [lD, WD] = (0, pD.useState)(null !== (wD = null === MD || void 0 === MD ? void 0 : MD.description) && void 0 !== wD ? wD : ""), ND = (0, pD.useRef)(lD), ZD = (0, pD.useRef)(""), yD = DD => {
        ND.current = DD, WD(DD)
      }, [kD, mD] = (0, pD.useState)(!1), {
        loading: eD,
        error: oD,
        setError: aD,
        onFiles: uD
      } = (0, UD.f)((async DD => {
        const zD = await (0, BD.loadPageShaderPackCompiler)();
        if (!zD) return void aD(QD("shaderPack:compilerUnavailable"));
        const wD = await (0, GD.h)(zD, DD.files);
        if (CD({
            pack: DD,
            validation: wD,
            sourceBytes: (0, rD.A)(DD.files)
          }), !MD) {
          var pD;
          if ("" !== dD.current.trim() && dD.current !== SD.current || (SD.current = (0, sD.R)(DD.manifest.name.trim(), sD.C), iD(SD.current)), "" === ND.current.trim() || ND.current === ZD.current) ZD.current = (0, sD.R)((null !== (pD = DD.manifest.description) && void 0 !== pD ? pD : "").trim(), sD.p), yD(ZD.current);
          TD((DD => DD + 1))
        }
      })), vD = !VD && !XD.isLoggedIn() && !KD.e.offlineMode, tD = bD.trim(), FD = tD.length < sD.G, YD = null !== PD && !1 !== (null === (AD = PD.validation) || void 0 === AD ? void 0 : AD.ok) && !eD && !FD && !vD && !VD;
      return (0, nD.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, nD.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: MD ? QD("shaderPackListing:uploadIntro", {
            minutes: String(sD.I / 6e4)
          }) : QD("shaderPackListing:publishIntro")
        }), (0, nD.jsx)(ED, {}), vD && (0, nD.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: QD("shaderPackListing:publishNeedsLogin")
        }), (0, nD.jsx)(UD.e, {
          busy: eD,
          disabled: eD || kD,
          onFiles: DD => {
            CD(null), uD(DD)
          }
        }), PD && (0, nD.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, nD.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: PD.pack.manifest.name
          }), (0, nD.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [QD("shaderPackListing:sizeValue", {
              kilobytes: String((0, hD.L)(PD.sourceBytes))
            }), " \xb7", " ", QD("shaderPackListing:filesValue", {
              files: String(PD.pack.files.length)
            })]
          }), (0, nD.jsx)(OD, {
            picked: PD
          })]
        }), !MD && (0, nD.jsxs)(nD.Fragment, {
          children: [(0, nD.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, nD.jsx)("span", {
              children: QD("general:name")
            }), (0, nD.jsx)(gD.e, {
              className: "ShaderPackPublishInput",
              defaultValue: bD,
              maxLength: sD.C,
              onValueChange: iD
            }, xD), PD && FD && (0, nD.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: QD("shaderPackListing:nameTooShort", {
                min: String(sD.G)
              })
            })]
          }), (0, nD.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, nD.jsx)("span", {
              children: QD("general:description")
            }), (0, nD.jsx)(gD.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: lD,
              maxLength: sD.p,
              onValueChange: yD,
              useTextarea: !0
            }, xD)]
          })]
        }), oD && (0, nD.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: oD
        }), (0, nD.jsxs)(cD.o, {
          className: "ShaderPackPublishButton",
          disabled: !YD,
          loading: kD,
          onClick: () => {
            !async function() {
              var DD;
              if (!PD) return;
              const {
                name: zD,
                description: wD
              } = null !== MD && void 0 !== MD ? MD : {
                name: tD,
                description: lD.trim()
              }, pD = {
                packId: null !== (DD = null === MD || void 0 === MD ? void 0 : MD.packId) && void 0 !== DD ? DD : null,
                name: zD,
                description: wD,
                apiVersion: PD.pack.manifest.apiVersion,
                files: (0, rD.z)(PD.pack.files),
                keepCircleShadows: !0 === PD.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(pD)).byteLength > 1024 * sD.N) aD(QD("shaderPackListing:publishTooBig", {
                kilobytes: String(sD.N)
              }));
              else {
                mD(!0), aD(null);
                try {
                  JD(await fD.d.publishShaderPack(XD, pD))
                } catch (KD) {
                  console.error("Failed to publish the shader pack", KD), aD((0, hD.u)(KD, QD, "shaderPackListing:publishFailed"))
                } finally {
                  mD(!1)
                }
              }
            }()
          },
          children: [(0, nD.jsx)(LD.e, {
            name: "upload"
          }), " ", QD(MD ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function OD(DD) {
      let {
        picked: zD
      } = DD;
      const {
        t: wD
      } = (0, ID.E)(), {
        validation: pD
      } = zD;
      return null === pD ? (0, nD.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: wD("shaderPackListing:publishUnchecked")
      }) : pD.ok ? (0, nD.jsxs)(nD.Fragment, {
        children: [(0, nD.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, nD.jsx)(LD.e, {
            name: "circle-check"
          }), " ", wD("shaderPackListing:publishReady")]
        }), pD.offInStrict.length > 0 && (0, nD.jsxs)(nD.Fragment, {
          children: [(0, nD.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, nD.jsx)(LD.e, {
              name: "triangle-exclamation"
            }), " ", wD("shaderPack:offInStrict")]
          }), (0, nD.jsx)(AD.b, {
            diagnostics: pD.offInStrict,
            t: wD
          })]
        })]
      }) : (0, nD.jsxs)(nD.Fragment, {
        children: [(0, nD.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, nD.jsx)(LD.e, {
            name: "triangle-exclamation"
          }), " ", wD("shaderPackListing:publishHasErrors")]
        }), (0, nD.jsx)(AD.b, {
          diagnostics: pD.errors,
          more: pD.moreErrors,
          t: wD
        })]
      })
    }
    const JD = "\0";

    function ED() {
      const {
        t: DD
      } = (0, ID.E)(), [zD, wD] = DD("shaderPackListing:bloxdhubHelp", {
        site: JD
      }).split(JD);
      return (0, nD.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [zD, (0, nD.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: sD.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: sD.d
        }), wD]
      })
    }
  },
  5076: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.i,
      d: () => sD,
      h: () => pD.q
    });
    var pD = wD(5084);
    const sD = [!1, !0].flatMap((DD => ["terrain", "liquid", "model"].map((zD => ({
      strict: DD,
      program: zD
    })))))
  },
  5084: (DD, zD, wD) => {
    wD.d(zD, {
      A: () => UD,
      d: () => LD,
      e: () => rD,
      i: () => pD,
      m: () => BD,
      n: () => AD,
      q: () => sD,
      r: () => KD,
      v: () => gD,
      z: () => RD
    });
    const pD = 5;

    function sD(DD) {
      return DD === pD
    }

    function KD(DD) {
      return [...DD.features]
    }
    const rD = 262144,
      LD = 256,
      cD = 256;

    function gD(DD) {
      if ("object" !== typeof DD || null === DD || Array.isArray(DD)) return "The pack has no files.";
      const zD = [];
      for (const [wD, pD] of Object.entries(DD)) {
        if ("string" !== typeof pD) return `${wD} isn't text.`;
        zD.push({
          path: wD,
          source: pD
        })
      }
      return zD.sort(((DD, zD) => AD(DD.path, zD.path))),
        function(DD) {
          if (0 === DD.length) return "The pack has no .wgsl files.";
          if (DD.length > LD) return `The pack has more than ${LD} .wgsl files.`;
          const zD = new Set;
          for (const {
              path: wD
            }
            of DD) {
            const DD = fD(wD);
            if (null !== DD) return DD;
            if (zD.has(wD)) return `The pack has two files at ${wD}.`;
            zD.add(wD)
          }
          return UD(DD) > rD ? `The pack's .wgsl files are over ${rD/1024} KB in total.` : null
        }(zD) ?? zD
    }

    function RD(DD) {
      const zD = {};
      for (const wD of DD) zD[wD.path] = wD.source;
      return zD
    }

    function AD(DD, zD) {
      return DD < zD ? -1 : DD > zD ? 1 : 0
    }

    function UD(DD) {
      const zD = new TextEncoder;
      let wD = 0;
      for (const {
          source: pD
        }
        of DD) wD += zD.encode(pD).byteLength;
      return wD
    }

    function fD(DD) {
      if (!DD.toLowerCase().endsWith(".wgsl")) return `${DD} isn't a .wgsl file.`;
      if (DD.length > cD) return `A file path is over ${cD} characters.`;
      if (DD.includes("\\") || /[\u0000-\u001f]/.test(DD)) return `${DD} isn't a valid file path.`;
      return DD.split("/").some((DD => "" === DD || "." === DD || ".." === DD)) ? `${DD} isn't a valid file path.` : null
    }
    const ID = /^(.*)\[rot\[([1-4])$/;

    function BD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pD = new Map;
      zD.forEach(((DD, zD) => {
        let {
          numAnimStates: wD,
          animStartIdx: sD
        } = DD;
        for (let KD = 1; KD < wD; KD++) pD.set(sD + KD - 1, zD)
      }));
      const sD = Object.entries(DD),
        KD = new Map;
      for (const [BD, GD] of sD) {
        const DD = ID.exec(BD);
        "1" === DD?.[2] && KD.set(DD[1], GD + 1)
      }
      const rD = DD => {
          const zD = ID.exec(DD);
          return zD && KD.has(zD[1]) ? {
            root: zD[1],
            rotation: Number(zD[2]) - 1
          } : null
        },
        LD = new Set(sD.map((DD => {
          let [zD] = DD;
          return rD(zD)?.root ?? zD
        }))),
        cD = (DD, wD) => {
          const pD = DD.replace(/_?0$/, "");
          return (zD[wD]?.numAnimStates ?? 0) > 1 && !LD.has(pD) ? pD : DD
        },
        gD = new Map;
      for (const [ID, BD] of sD) gD.set(BD, cD(rD(ID)?.root ?? ID, BD));
      const RD = sD.reduce(((DD, zD) => {
          let [, wD] = zD;
          return Math.max(DD, wD + 1)
        }), 0),
        AD = Array.from({
          length: RD
        }, ((DD, zD) => ({
          id: zD + 1,
          rotation: 0
        }))),
        UD = new Map,
        fD = new Map;
      for (const [ID, BD] of sD) {
        const DD = rD(ID),
          zD = pD.get(BD);
        if (void 0 !== zD) {
          const wD = gD.get(zD);
          fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "frame"
          }), DD && !fD.has(DD.root) && fD.set(DD.root, {
            name: DD.root,
            texture: wD,
            kind: "frame"
          });
          continue
        }
        const wD = gD.get(BD),
          sD = DD?.root ?? ID;
        if (wD !== sD && fD.set(sD, {
            name: sD,
            texture: wD,
            kind: "frame"
          }), DD) {
          const zD = KD.get(DD.root);
          AD[BD] = {
            id: zD,
            rotation: DD.rotation
          }, UD.set(wD, zD), fD.set(ID, {
            name: ID,
            texture: wD,
            kind: "rotation"
          })
        } else UD.set(wD, BD + 1)
      }
      for (const ID of UD.keys()) fD.delete(ID);
      for (const [ID, BD] of wD) {
        const DD = UD.get(BD);
        void 0 === DD || UD.has(ID) || (UD.set(ID, DD), fD.delete(ID))
      }
      return {
        named: [...UD].sort(((DD, zD) => {
          let [wD] = DD, [pD] = zD;
          return wD < pD ? -1 : wD > pD ? 1 : 0
        })).map((DD => {
          let [zD, wD] = DD;
          return {
            name: zD,
            id: wD
          }
        })),
        aliases: [...fD.values()],
        layers: AD
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);