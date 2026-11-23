export const id = 112;
export const ids = [112];
export const modules = {
  5008: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      f: () => qC
    });
    var QC = ZC(48),
      wC = ZC(1388),
      bC = ZC(1143),
      nC = ZC(77),
      fC = ZC(3123),
      oC = ZC(1056);

    function qC() {
      return !(0, nC.isMobile)()
    }

    function FC(CC) {
      let {
        disabled: zC,
        openFolderPicker: ZC,
        onFiles: nC
      } = CC;
      const {
        t: FC
      } = (0, bC.y)(), WC = (0, QC.useRef)(null);
      return (0, oC.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, oC.jsx)("input", {
          ref: WC,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(CC) {
            const zC = Array.from(CC.target.files);
            CC.target.value = "", nC(zC)
          }
        }), qC() && (0, oC.jsx)(wC.g, {
          disabled: zC,
          onClick: ZC,
          children: FC("general:chooseFolder")
        }), (0, oC.jsx)(wC.g, {
          disabled: zC,
          onClick: () => {
            (0, fC.c)(WC.current)
          },
          children: FC("general:chooseZip")
        })]
      })
    }
  },
  4992: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      g: () => nC,
      h: () => bC
    });
    var QC = ZC(4998);
    const wC = [CC => CC.strict ? "strict" : "nonStrict", CC => CC.program];

    function bC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const QC = {};
      for (const wC in ZC) QC[wC] = `\0${wC}\0`;
      return CC(zC, QC).replace(/\0(\w+)\0/g, ((CC, zC) => ZC[zC]))
    }

    function nC(CC) {
      return null === CC.file ? null : CC.line > 0 ? `${CC.file}:${CC.line}` : CC.file
    }

    function fC(CC) {
      const zC = new Map(CC.map((CC => [oC(CC).join("."), CC])));
      if (0 === zC.size) return [];
      const ZC = FC([...zC.values()]);
      return 0 === ZC[0].length ? [] : ZC
    }

    function oC(CC) {
      return wC.map((zC => zC(CC)))
    }
    const qC = wC.map((CC => new Set(QC.f.map(CC)).size));

    function FC(CC) {
      const zC = wC.map((zC => new Set(CC.map(zC)))),
        ZC = zC.reduce(((CC, zC) => CC * zC.size), 1),
        QC = zC.every(((CC, zC) => 1 === CC.size || CC.size === qC[zC]));
      if (ZC === CC.length && QC) return [wC.filter(((CC, ZC) => 1 === zC[ZC].size)).map((zC => zC(CC[0])))];
      let bC = null;
      for (let nC = 0; nC < wC.length; nC++) {
        if (1 === zC[nC].size) continue;
        const ZC = WC(CC, wC[nC]).flatMap(FC);
        (null === bC || ZC.length < bC.length) && (bC = ZC)
      }
      return bC
    }

    function WC(CC, zC) {
      const ZC = new Map;
      for (const wC of CC) {
        var QC;
        const CC = zC(wC);
        ZC.set(CC, [...null !== (QC = ZC.get(CC)) && void 0 !== QC ? QC : [], wC])
      }
      return [...ZC.values()]
    }
  },
  6594: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      ShaderPackPublishForm: () => RC
    });
    var QC = ZC(48),
      wC = ZC(6560),
      bC = ZC(189),
      nC = ZC(5002),
      fC = ZC(1013),
      oC = ZC(1388),
      qC = ZC(1593),
      FC = ZC(1076),
      WC = ZC(6596),
      NC = ZC(6600),
      MC = ZC(1439),
      gC = ZC(1143),
      SC = ZC(6609),
      pC = ZC(6651),
      PC = ZC(6556),
      GC = ZC(1056);

    function RC(CC) {
      var zC, ZC, WC;
      let {
        existing: RC,
        onPublished: xC
      } = CC;
      const {
        t: IC
      } = (0, gC.y)(), {
        userContext: iC,
        isUserContextUpdating: vC
      } = (0, FC.e)(), [eC, hC] = (0, QC.useState)(null), [KC, YC] = (0, QC.useState)(0), [dC, mC] = (0, QC.useState)(null !== (zC = null === RC || void 0 === RC ? void 0 : RC.name) && void 0 !== zC ? zC : ""), HC = (0, QC.useRef)(dC), EC = (0, QC.useRef)(""), lC = CC => {
        HC.current = CC, mC(CC)
      }, [XC, cC] = (0, QC.useState)(null !== (ZC = null === RC || void 0 === RC ? void 0 : RC.description) && void 0 !== ZC ? ZC : ""), uC = (0, QC.useRef)(XC), rC = (0, QC.useRef)(""), sC = CC => {
        uC.current = CC, cC(CC)
      }, [TC, aC] = (0, QC.useState)(!1), {
        loading: tC,
        error: DC,
        setError: jC,
        onFiles: yC
      } = (0, NC.i)((async CC => {
        const zC = await (0, SC.loadPageShaderPackCompiler)();
        if (!zC) return void jC(IC("shaderPack:compilerUnavailable"));
        const ZC = await (0, pC.c)(zC, CC.files);
        if (hC({
            pack: CC,
            validation: ZC,
            sourceBytes: (0, nC.y)(CC.files)
          }), !RC) {
          var QC;
          if ("" !== HC.current.trim() && HC.current !== EC.current || (EC.current = (0, wC.P)(CC.manifest.name.trim(), wC.y), lC(EC.current)), "" === uC.current.trim() || uC.current === rC.current) rC.current = (0, wC.P)((null !== (QC = CC.manifest.description) && void 0 !== QC ? QC : "").trim(), wC.o), sC(rC.current);
          YC((CC => CC + 1))
        }
      })), LC = !vC && !iC.isLoggedIn() && !bC.e.offlineMode, UC = dC.trim(), BC = UC.length < wC.A, OC = null !== eC && !1 !== (null === (WC = eC.validation) || void 0 === WC ? void 0 : WC.ok) && !tC && !BC && !LC && !vC;
      return (0, GC.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, GC.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: RC ? IC("shaderPackListing:uploadIntro", {
            minutes: String(wC.E / 6e4)
          }) : IC("shaderPackListing:publishIntro")
        }), (0, GC.jsx)(JC, {}), LC && (0, GC.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: IC("shaderPackListing:publishNeedsLogin")
        }), (0, GC.jsx)(NC.e, {
          busy: tC,
          disabled: tC || TC,
          onFiles: CC => {
            hC(null), yC(CC)
          }
        }), eC && (0, GC.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, GC.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: eC.pack.manifest.name
          }), (0, GC.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [IC("shaderPackListing:sizeValue", {
              kilobytes: String((0, PC.S)(eC.sourceBytes))
            }), " \xb7", " ", IC("shaderPackListing:filesValue", {
              files: String(eC.pack.files.length)
            })]
          }), (0, GC.jsx)(AC, {
            picked: eC
          })]
        }), !RC && (0, GC.jsxs)(GC.Fragment, {
          children: [(0, GC.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, GC.jsx)("span", {
              children: IC("general:name")
            }), (0, GC.jsx)(qC.c, {
              className: "ShaderPackPublishInput",
              defaultValue: dC,
              maxLength: wC.y,
              onValueChange: lC
            }, KC), eC && BC && (0, GC.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: IC("shaderPackListing:nameTooShort", {
                min: String(wC.A)
              })
            })]
          }), (0, GC.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, GC.jsx)("span", {
              children: IC("general:description")
            }), (0, GC.jsx)(qC.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: XC,
              maxLength: wC.o,
              onValueChange: sC,
              useTextarea: !0
            }, KC)]
          })]
        }), DC && (0, GC.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: DC
        }), (0, GC.jsxs)(oC.o, {
          className: "ShaderPackPublishButton",
          disabled: !OC,
          loading: TC,
          onClick: () => {
            !async function() {
              var CC;
              if (!eC) return;
              const {
                name: zC,
                description: ZC
              } = null !== RC && void 0 !== RC ? RC : {
                name: UC,
                description: XC.trim()
              }, QC = {
                packId: null !== (CC = null === RC || void 0 === RC ? void 0 : RC.packId) && void 0 !== CC ? CC : null,
                name: zC,
                description: ZC,
                apiVersion: eC.pack.manifest.apiVersion,
                files: (0, nC.w)(eC.pack.files),
                keepCircleShadows: !0 === eC.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(QC)).byteLength > 1024 * wC.L) jC(IC("shaderPackListing:publishTooBig", {
                kilobytes: String(wC.L)
              }));
              else {
                aC(!0), jC(null);
                try {
                  xC(await MC.d.publishShaderPack(iC, QC))
                } catch (bC) {
                  console.error("Failed to publish the shader pack", bC), jC((0, PC.z)(bC, IC, "shaderPackListing:publishFailed"))
                } finally {
                  aC(!1)
                }
              }
            }()
          },
          children: [(0, GC.jsx)(fC.c, {
            name: "upload"
          }), " ", IC(RC ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function AC(CC) {
      let {
        picked: zC
      } = CC;
      const {
        t: ZC
      } = (0, gC.y)(), {
        validation: QC
      } = zC;
      return null === QC ? (0, GC.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ZC("shaderPackListing:publishUnchecked")
      }) : QC.ok ? (0, GC.jsxs)(GC.Fragment, {
        children: [(0, GC.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, GC.jsx)(fC.c, {
            name: "circle-check"
          }), " ", ZC("shaderPackListing:publishReady")]
        }), QC.offInStrict.length > 0 && (0, GC.jsxs)(GC.Fragment, {
          children: [(0, GC.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, GC.jsx)(fC.c, {
              name: "triangle-exclamation"
            }), " ", ZC("shaderPack:offInStrict")]
          }), (0, GC.jsx)(WC.d, {
            diagnostics: QC.offInStrict,
            t: ZC
          })]
        })]
      }) : (0, GC.jsxs)(GC.Fragment, {
        children: [(0, GC.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, GC.jsx)(fC.c, {
            name: "triangle-exclamation"
          }), " ", ZC("shaderPackListing:publishHasErrors")]
        }), (0, GC.jsx)(WC.d, {
          diagnostics: QC.errors,
          more: QC.moreErrors,
          t: ZC
        })]
      })
    }
    const xC = "\0";

    function JC() {
      const {
        t: CC
      } = (0, gC.y)(), [zC, ZC] = CC("shaderPackListing:bloxdhubHelp", {
        site: xC
      }).split(xC);
      return (0, GC.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [zC, (0, GC.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: wC.f,
          target: "_blank",
          rel: "noopener noreferrer",
          children: wC.b
        }), ZC]
      })
    }
  },
  4998: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC.j,
      f: () => wC,
      i: () => QC.q
    });
    var QC = ZC(5002);
    const wC = [!1, !0].flatMap((CC => ["terrain", "liquid", "model"].map((zC => ({
      strict: CC,
      program: zC
    })))))
  },
  5002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      g: () => nC,
      j: () => QC,
      k: () => SC,
      m: () => WC,
      q: () => wC,
      r: () => bC,
      s: () => qC,
      w: () => FC,
      y: () => NC
    });
    const QC = 5;

    function wC(CC) {
      return CC === QC
    }

    function bC(CC) {
      return [...CC.features]
    }
    const nC = 262144,
      fC = 256,
      oC = 256;

    function qC(CC) {
      if ("object" !== typeof CC || null === CC || Array.isArray(CC)) return "The pack has no files.";
      const zC = [];
      for (const [ZC, QC] of Object.entries(CC)) {
        if ("string" !== typeof QC) return `${ZC} isn't text.`;
        zC.push({
          path: ZC,
          source: QC
        })
      }
      return zC.sort(((CC, zC) => WC(CC.path, zC.path))),
        function(CC) {
          if (0 === CC.length) return "The pack has no .wgsl files.";
          if (CC.length > fC) return `The pack has more than ${fC} .wgsl files.`;
          const zC = new Set;
          for (const {
              path: ZC
            }
            of CC) {
            const CC = MC(ZC);
            if (null !== CC) return CC;
            if (zC.has(ZC)) return `The pack has two files at ${ZC}.`;
            zC.add(ZC)
          }
          return NC(CC) > nC ? `The pack's .wgsl files are over ${nC/1024} KB in total.` : null
        }(zC) ?? zC
    }

    function FC(CC) {
      const zC = {};
      for (const ZC of CC) zC[ZC.path] = ZC.source;
      return zC
    }

    function WC(CC, zC) {
      return CC < zC ? -1 : CC > zC ? 1 : 0
    }

    function NC(CC) {
      const zC = new TextEncoder;
      let ZC = 0;
      for (const {
          source: QC
        }
        of CC) ZC += zC.encode(QC).byteLength;
      return ZC
    }

    function MC(CC) {
      if (!CC.toLowerCase().endsWith(".wgsl")) return `${CC} isn't a .wgsl file.`;
      if (CC.length > oC) return `A file path is over ${oC} characters.`;
      if (CC.includes("\\") || /[\u0000-\u001f]/.test(CC)) return `${CC} isn't a valid file path.`;
      return CC.split("/").some((CC => "" === CC || "." === CC || ".." === CC)) ? `${CC} isn't a valid file path.` : null
    }
    const gC = /^(.*)\[rot\[([1-4])$/;

    function SC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const QC = new Map;
      zC.forEach(((CC, zC) => {
        let {
          numAnimStates: ZC,
          animStartIdx: wC
        } = CC;
        for (let bC = 1; bC < ZC; bC++) QC.set(wC + bC - 1, zC)
      }));
      const wC = Object.entries(CC),
        bC = new Map;
      for (const [SC, pC] of wC) {
        const CC = gC.exec(SC);
        "1" === CC?.[2] && bC.set(CC[1], pC + 1)
      }
      const nC = CC => {
          const zC = gC.exec(CC);
          return zC && bC.has(zC[1]) ? {
            root: zC[1],
            rotation: Number(zC[2]) - 1
          } : null
        },
        fC = new Set(wC.map((CC => {
          let [zC] = CC;
          return nC(zC)?.root ?? zC
        }))),
        oC = (CC, ZC) => {
          const QC = CC.replace(/_?0$/, "");
          return (zC[ZC]?.numAnimStates ?? 0) > 1 && !fC.has(QC) ? QC : CC
        },
        qC = new Map;
      for (const [gC, SC] of wC) qC.set(SC, oC(nC(gC)?.root ?? gC, SC));
      const FC = wC.reduce(((CC, zC) => {
          let [, ZC] = zC;
          return Math.max(CC, ZC + 1)
        }), 0),
        WC = Array.from({
          length: FC
        }, ((CC, zC) => ({
          id: zC + 1,
          rotation: 0
        }))),
        NC = new Map,
        MC = new Map;
      for (const [gC, SC] of wC) {
        const CC = nC(gC),
          zC = QC.get(SC);
        if (void 0 !== zC) {
          const ZC = qC.get(zC);
          MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "frame"
          }), CC && !MC.has(CC.root) && MC.set(CC.root, {
            name: CC.root,
            texture: ZC,
            kind: "frame"
          });
          continue
        }
        const ZC = qC.get(SC),
          wC = CC?.root ?? gC;
        if (ZC !== wC && MC.set(wC, {
            name: wC,
            texture: ZC,
            kind: "frame"
          }), CC) {
          const zC = bC.get(CC.root);
          WC[SC] = {
            id: zC,
            rotation: CC.rotation
          }, NC.set(ZC, zC), MC.set(gC, {
            name: gC,
            texture: ZC,
            kind: "rotation"
          })
        } else NC.set(ZC, SC + 1)
      }
      for (const gC of NC.keys()) MC.delete(gC);
      for (const [gC, SC] of ZC) {
        const CC = NC.get(SC);
        void 0 === CC || NC.has(gC) || (NC.set(gC, CC), MC.delete(gC))
      }
      return {
        named: [...NC].sort(((CC, zC) => {
          let [ZC] = CC, [QC] = zC;
          return ZC < QC ? -1 : ZC > QC ? 1 : 0
        })).map((CC => {
          let [zC, ZC] = CC;
          return {
            name: zC,
            id: ZC
          }
        })),
        aliases: [...MC.values()],
        layers: WC
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);