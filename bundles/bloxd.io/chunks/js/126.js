export const id = 126;
export const ids = [126];
export const modules = {
  5564: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => nV
    });
    var JV = xV(62),
      YV = xV(1551),
      UV = xV(1220),
      yV = xV(99),
      pV = xV(3561),
      QV = xV(1321);

    function nV() {
      return !(0, yV.isMobile)()
    }

    function wV(VV) {
      let {
        disabled: eV,
        openFolderPicker: xV,
        onFiles: yV
      } = VV;
      const {
        t: wV
      } = (0, UV.A)(), ZV = (0, JV.useRef)(null);
      return (0, QV.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, QV.jsx)("input", {
          ref: ZV,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(VV) {
            const eV = Array.from(VV.target.files);
            VV.target.value = "", yV(eV)
          }
        }), nV() && (0, QV.jsx)(YV.f, {
          disabled: eV,
          onClick: xV,
          children: wV("general:chooseFolder")
        }), (0, QV.jsx)(YV.f, {
          disabled: eV,
          onClick: () => {
            (0, pV.g)(ZV.current)
          },
          children: wV("general:chooseZip")
        })]
      })
    }
  },
  5548: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      f: () => yV,
      h: () => UV
    });
    var JV = xV(5556);
    const YV = [VV => VV.strict ? "strict" : "nonStrict", VV => VV.program];

    function UV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const JV = {};
      for (const YV in xV) JV[YV] = `\0${YV}\0`;
      return VV(eV, JV).replace(/\0(\w+)\0/g, ((VV, eV) => xV[eV]))
    }

    function yV(VV) {
      return null === VV.file ? null : VV.line > 0 ? `${VV.file}:${VV.line}` : VV.file
    }

    function pV(VV) {
      const eV = new Map(VV.map((VV => [QV(VV).join("."), VV])));
      if (0 === eV.size) return [];
      const xV = wV([...eV.values()]);
      return 0 === xV[0].length ? [] : xV
    }

    function QV(VV) {
      return YV.map((eV => eV(VV)))
    }
    const nV = YV.map((VV => new Set(JV.g.map(VV)).size));

    function wV(VV) {
      const eV = YV.map((eV => new Set(VV.map(eV)))),
        xV = eV.reduce(((VV, eV) => VV * eV.size), 1),
        JV = eV.every(((VV, eV) => 1 === VV.size || VV.size === nV[eV]));
      if (xV === VV.length && JV) return [YV.filter(((VV, xV) => 1 === eV[xV].size)).map((eV => eV(VV[0])))];
      let UV = null;
      for (let yV = 0; yV < YV.length; yV++) {
        if (1 === eV[yV].size) continue;
        const xV = ZV(VV, YV[yV]).flatMap(wV);
        (null === UV || xV.length < UV.length) && (UV = xV)
      }
      return UV
    }

    function ZV(VV, eV) {
      const xV = new Map;
      for (const YV of VV) {
        var JV;
        const VV = eV(YV);
        xV.set(VV, [...null !== (JV = xV.get(VV)) && void 0 !== JV ? JV : [], YV])
      }
      return [...xV.values()]
    }
  },
  7164: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      ShaderPackPublishForm: () => qV
    });
    var JV = xV(62),
      YV = xV(7132),
      UV = xV(212),
      yV = xV(5561),
      pV = xV(1414),
      QV = xV(1551),
      nV = xV(1772),
      wV = xV(1168),
      ZV = xV(7169),
      vV = xV(7174),
      rV = xV(1603),
      kV = xV(1220),
      bV = xV(7176),
      EV = xV(7208),
      BV = xV(7130),
      jV = xV(1321);

    function qV(VV) {
      var eV, xV, ZV;
      let {
        existing: qV,
        onPublished: FV
      } = VV;
      const {
        t: PV
      } = (0, kV.A)(), {
        userContext: AV,
        isUserContextUpdating: NV
      } = (0, wV.d)(), [XV, MV] = (0, JV.useState)(null), [zV, GV] = (0, JV.useState)(0), [WV, RV] = (0, JV.useState)(null !== (eV = null === qV || void 0 === qV ? void 0 : qV.name) && void 0 !== eV ? eV : ""), gV = (0, JV.useRef)(WV), DV = (0, JV.useRef)(""), iV = VV => {
        gV.current = VV, RV(VV)
      }, [CV, aV] = (0, JV.useState)(null !== (xV = null === qV || void 0 === qV ? void 0 : qV.description) && void 0 !== xV ? xV : ""), oV = (0, JV.useRef)(CV), cV = (0, JV.useRef)(""), hV = VV => {
        oV.current = VV, aV(VV)
      }, [lV, LV] = (0, JV.useState)(!1), {
        loading: fV,
        error: mV,
        setError: KV,
        onFiles: HV
      } = (0, vV.c)((async VV => {
        const eV = await (0, bV.loadPageShaderPackCompiler)();
        if (!eV) return void KV(PV("shaderPack:compilerUnavailable"));
        const xV = await (0, EV.d)(eV, VV.files);
        if (MV({
            pack: VV,
            validation: xV,
            sourceBytes: (0, yV.x)(VV.files)
          }), !qV) {
          var JV;
          if ("" !== gV.current.trim() && gV.current !== DV.current || (DV.current = (0, YV.X)(VV.manifest.name.trim(), YV.D), iV(DV.current)), "" === oV.current.trim() || oV.current === cV.current) cV.current = (0, YV.X)((null !== (JV = VV.manifest.description) && void 0 !== JV ? JV : "").trim(), YV.s), hV(cV.current);
          GV((VV => VV + 1))
        }
      })), uV = !NV && !AV.isLoggedIn() && !UV.b.offlineMode, sV = WV.trim(), SV = sV.length < YV.H, IV = null !== XV && !1 !== (null === (ZV = XV.validation) || void 0 === ZV ? void 0 : ZV.ok) && !fV && !SV && !uV && !NV;
      return (0, jV.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, jV.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: qV ? PV("shaderPackListing:uploadIntro", {
            minutes: String(YV.O / 6e4)
          }) : PV("shaderPackListing:publishIntro")
        }), (0, jV.jsx)(TV, {}), uV && (0, jV.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: PV("shaderPackListing:publishNeedsLogin")
        }), (0, jV.jsx)(vV.b, {
          busy: fV,
          disabled: fV || lV,
          onFiles: VV => {
            MV(null), HV(VV)
          }
        }), XV && (0, jV.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, jV.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: XV.pack.manifest.name
          }), (0, jV.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [PV("shaderPackListing:sizeValue", {
              kilobytes: String((0, BV.T)(XV.sourceBytes))
            }), " \xb7", " ", PV("shaderPackListing:filesValue", {
              files: String(XV.pack.files.length)
            })]
          }), (0, jV.jsx)(tV, {
            picked: XV
          })]
        }), !qV && (0, jV.jsxs)(jV.Fragment, {
          children: [(0, jV.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, jV.jsx)("span", {
              children: PV("general:name")
            }), (0, jV.jsx)(nV.d, {
              className: "ShaderPackPublishInput",
              defaultValue: WV,
              maxLength: YV.D,
              onValueChange: iV
            }, zV), XV && SV && (0, jV.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: PV("shaderPackListing:nameTooShort", {
                min: String(YV.H)
              })
            })]
          }), (0, jV.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, jV.jsx)("span", {
              children: PV("general:description")
            }), (0, jV.jsx)(nV.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: CV,
              maxLength: YV.s,
              onValueChange: hV,
              useTextarea: !0
            }, zV)]
          })]
        }), mV && (0, jV.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: mV
        }), (0, jV.jsxs)(QV.m, {
          className: "ShaderPackPublishButton",
          disabled: !IV,
          loading: lV,
          onClick: () => {
            !async function() {
              var VV;
              if (!XV) return;
              const {
                name: eV,
                description: xV
              } = null !== qV && void 0 !== qV ? qV : {
                name: sV,
                description: CV.trim()
              }, JV = {
                packId: null !== (VV = null === qV || void 0 === qV ? void 0 : qV.packId) && void 0 !== VV ? VV : null,
                name: eV,
                description: xV,
                apiVersion: XV.pack.manifest.apiVersion,
                files: (0, yV.t)(XV.pack.files),
                keepCircleShadows: !0 === XV.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(JV)).byteLength > 1024 * YV.V) KV(PV("shaderPackListing:publishTooBig", {
                kilobytes: String(YV.V)
              }));
              else {
                LV(!0), KV(null);
                try {
                  FV(await rV.b.publishShaderPack(AV, JV))
                } catch (UV) {
                  console.error("Failed to publish the shader pack", UV), KV((0, BV.x)(UV, PV, "shaderPackListing:publishFailed"))
                } finally {
                  LV(!1)
                }
              }
            }()
          },
          children: [(0, jV.jsx)(pV.b, {
            name: "upload"
          }), " ", PV(qV ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function tV(VV) {
      let {
        picked: eV
      } = VV;
      const {
        t: xV
      } = (0, kV.A)(), {
        validation: JV
      } = eV;
      return null === JV ? (0, jV.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: xV("shaderPackListing:publishUnchecked")
      }) : JV.ok ? (0, jV.jsxs)(jV.Fragment, {
        children: [(0, jV.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, jV.jsx)(pV.b, {
            name: "circle-check"
          }), " ", xV("shaderPackListing:publishReady")]
        }), JV.offInStrict.length > 0 && (0, jV.jsxs)(jV.Fragment, {
          children: [(0, jV.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, jV.jsx)(pV.b, {
              name: "triangle-exclamation"
            }), " ", xV("shaderPack:offInStrict")]
          }), (0, jV.jsx)(ZV.d, {
            diagnostics: JV.offInStrict,
            t: xV
          })]
        })]
      }) : (0, jV.jsxs)(jV.Fragment, {
        children: [(0, jV.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, jV.jsx)(pV.b, {
            name: "triangle-exclamation"
          }), " ", xV("shaderPackListing:publishHasErrors")]
        }), (0, jV.jsx)(ZV.d, {
          diagnostics: JV.errors,
          more: JV.moreErrors,
          t: xV
        })]
      })
    }
    const FV = "\0";

    function TV() {
      const {
        t: VV
      } = (0, kV.A)(), [eV, xV] = VV("shaderPackListing:bloxdhubHelp", {
        site: FV
      }).split(FV);
      return (0, jV.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [eV, (0, jV.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: YV.h,
          target: "_blank",
          rel: "noopener noreferrer",
          children: YV.d
        }), xV]
      })
    }
  },
  5556: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.f,
      g: () => YV,
      j: () => JV.o
    });
    var JV = xV(5561);
    const YV = [!1, !0].flatMap((VV => ["terrain", "liquid", "model"].map((eV => ({
      strict: VV,
      program: eV
    })))))
  },
  5561: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => pV,
      d: () => yV,
      f: () => JV,
      j: () => bV,
      n: () => ZV,
      o: () => YV,
      p: () => UV,
      s: () => nV,
      t: () => wV,
      x: () => vV
    });
    const JV = 5;

    function YV(VV) {
      return VV === JV
    }

    function UV(VV) {
      return [...VV.features]
    }
    const yV = 262144,
      pV = 256,
      QV = 256;

    function nV(VV) {
      if ("object" !== typeof VV || null === VV || Array.isArray(VV)) return "The pack has no files.";
      const eV = [];
      for (const [xV, JV] of Object.entries(VV)) {
        if ("string" !== typeof JV) return `${xV} isn't text.`;
        eV.push({
          path: xV,
          source: JV
        })
      }
      return eV.sort(((VV, eV) => ZV(VV.path, eV.path))),
        function(VV) {
          if (0 === VV.length) return "The pack has no .wgsl files.";
          if (VV.length > pV) return `The pack has more than ${pV} .wgsl files.`;
          const eV = new Set;
          for (const {
              path: xV
            }
            of VV) {
            const VV = rV(xV);
            if (null !== VV) return VV;
            if (eV.has(xV)) return `The pack has two files at ${xV}.`;
            eV.add(xV)
          }
          return vV(VV) > yV ? `The pack's .wgsl files are over ${yV/1024} KB in total.` : null
        }(eV) ?? eV
    }

    function wV(VV) {
      const eV = {};
      for (const xV of VV) eV[xV.path] = xV.source;
      return eV
    }

    function ZV(VV, eV) {
      return VV < eV ? -1 : VV > eV ? 1 : 0
    }

    function vV(VV) {
      const eV = new TextEncoder;
      let xV = 0;
      for (const {
          source: JV
        }
        of VV) xV += eV.encode(JV).byteLength;
      return xV
    }

    function rV(VV) {
      if (!VV.toLowerCase().endsWith(".wgsl")) return `${VV} isn't a .wgsl file.`;
      if (VV.length > QV) return `A file path is over ${QV} characters.`;
      if (VV.includes("\\") || /[\u0000-\u001f]/.test(VV)) return `${VV} isn't a valid file path.`;
      return VV.split("/").some((VV => "" === VV || "." === VV || ".." === VV)) ? `${VV} isn't a valid file path.` : null
    }
    const kV = /^(.*)\[rot\[([1-4])$/;

    function bV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const JV = new Map;
      eV.forEach(((VV, eV) => {
        let {
          numAnimStates: xV,
          animStartIdx: YV
        } = VV;
        for (let UV = 1; UV < xV; UV++) JV.set(YV + UV - 1, eV)
      }));
      const YV = Object.entries(VV),
        UV = new Map;
      for (const [bV, EV] of YV) {
        const VV = kV.exec(bV);
        "1" === VV?.[2] && UV.set(VV[1], EV + 1)
      }
      const yV = VV => {
          const eV = kV.exec(VV);
          return eV && UV.has(eV[1]) ? {
            root: eV[1],
            rotation: Number(eV[2]) - 1
          } : null
        },
        pV = new Set(YV.map((VV => {
          let [eV] = VV;
          return yV(eV)?.root ?? eV
        }))),
        QV = (VV, xV) => {
          const JV = VV.replace(/_?0$/, "");
          return (eV[xV]?.numAnimStates ?? 0) > 1 && !pV.has(JV) ? JV : VV
        },
        nV = new Map;
      for (const [kV, bV] of YV) nV.set(bV, QV(yV(kV)?.root ?? kV, bV));
      const wV = YV.reduce(((VV, eV) => {
          let [, xV] = eV;
          return Math.max(VV, xV + 1)
        }), 0),
        ZV = Array.from({
          length: wV
        }, ((VV, eV) => ({
          id: eV + 1,
          rotation: 0
        }))),
        vV = new Map,
        rV = new Map;
      for (const [kV, bV] of YV) {
        const VV = yV(kV),
          eV = JV.get(bV);
        if (void 0 !== eV) {
          const xV = nV.get(eV);
          rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "frame"
          }), VV && !rV.has(VV.root) && rV.set(VV.root, {
            name: VV.root,
            texture: xV,
            kind: "frame"
          });
          continue
        }
        const xV = nV.get(bV),
          YV = VV?.root ?? kV;
        if (xV !== YV && rV.set(YV, {
            name: YV,
            texture: xV,
            kind: "frame"
          }), VV) {
          const eV = UV.get(VV.root);
          ZV[bV] = {
            id: eV,
            rotation: VV.rotation
          }, vV.set(xV, eV), rV.set(kV, {
            name: kV,
            texture: xV,
            kind: "rotation"
          })
        } else vV.set(xV, bV + 1)
      }
      for (const kV of vV.keys()) rV.delete(kV);
      for (const [kV, bV] of xV) {
        const VV = vV.get(bV);
        void 0 === VV || vV.has(kV) || (vV.set(kV, VV), rV.delete(kV))
      }
      return {
        named: [...vV].sort(((VV, eV) => {
          let [xV] = VV, [JV] = eV;
          return xV < JV ? -1 : xV > JV ? 1 : 0
        })).map((VV => {
          let [eV, xV] = VV;
          return {
            name: eV,
            id: xV
          }
        })),
        aliases: [...rV.values()],
        layers: ZV
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);