export const id = 114;
export const ids = [114];
export const modules = {
  5151: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => jT,
      i: () => kT
    });
    var WT = mT(63),
      zT = mT(1569),
      MT = mT(1288),
      gT = mT(102),
      nT = mT(3278),
      HT = mT(1188);

    function kT() {
      return !(0, gT.isMobile)()
    }

    function jT(TT) {
      let {
        disabled: UT,
        openFolderPicker: mT,
        onFiles: gT
      } = TT;
      const {
        t: jT
      } = (0, MT.z)(), lT = (0, WT.useRef)(null);
      return (0, HT.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, HT.jsx)("input", {
          ref: lT,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(TT) {
            const UT = Array.from(TT.target.files);
            TT.target.value = "", gT(UT)
          }
        }), kT() && (0, HT.jsx)(zT.e, {
          disabled: UT,
          onClick: mT,
          children: jT("general:chooseFolder")
        }), (0, HT.jsx)(zT.e, {
          disabled: UT,
          onClick: () => {
            (0, nT.f)(lT.current)
          },
          children: jT("general:chooseZip")
        })]
      })
    }
  },
  5136: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      c: () => gT,
      f: () => MT
    });
    var WT = mT(5139);
    const zT = [TT => TT.strict ? "strict" : "nonStrict", TT => TT.program];

    function MT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const WT = {};
      for (const zT in mT) WT[zT] = `\0${zT}\0`;
      return TT(UT, WT).replace(/\0(\w+)\0/g, ((TT, UT) => mT[UT]))
    }

    function gT(TT) {
      return null === TT.file ? null : TT.line > 0 ? `${TT.file}:${TT.line}` : TT.file
    }

    function nT(TT) {
      const UT = new Map(TT.map((TT => [HT(TT).join("."), TT])));
      if (0 === UT.size) return [];
      const mT = jT([...UT.values()]);
      return 0 === mT[0].length ? [] : mT
    }

    function HT(TT) {
      return zT.map((UT => UT(TT)))
    }
    const kT = zT.map((TT => new Set(WT.e.map(TT)).size));

    function jT(TT) {
      const UT = zT.map((UT => new Set(TT.map(UT)))),
        mT = UT.reduce(((TT, UT) => TT * UT.size), 1),
        WT = UT.every(((TT, UT) => 1 === TT.size || TT.size === kT[UT]));
      if (mT === TT.length && WT) return [zT.filter(((TT, mT) => 1 === UT[mT].size)).map((UT => UT(TT[0])))];
      let MT = null;
      for (let gT = 0; gT < zT.length; gT++) {
        if (1 === UT[gT].size) continue;
        const mT = lT(TT, zT[gT]).flatMap(jT);
        (null === MT || mT.length < MT.length) && (MT = mT)
      }
      return MT
    }

    function lT(TT, UT) {
      const mT = new Map;
      for (const zT of TT) {
        var WT;
        const TT = UT(zT);
        mT.set(TT, [...null !== (WT = mT.get(TT)) && void 0 !== WT ? WT : [], zT])
      }
      return [...mT.values()]
    }
  },
  6668: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ShaderPackPublishForm: () => qT
    });
    var WT = mT(63),
      zT = mT(6630),
      MT = mT(212),
      gT = mT(5142),
      nT = mT(1135),
      HT = mT(1569),
      kT = mT(1792),
      jT = mT(1225),
      lT = mT(6674),
      LT = mT(6680),
      pT = mT(1613),
      BT = mT(1288),
      ZT = mT(6682),
      cT = mT(6716),
      vT = mT(6623),
      fT = mT(1188);

    function qT(TT) {
      var UT, mT, lT;
      let {
        existing: qT,
        onPublished: bT
      } = TT;
      const {
        t: eT
      } = (0, BT.z)(), {
        userContext: YT,
        isUserContextUpdating: JT
      } = (0, jT.d)(), [xT, dT] = (0, WT.useState)(null), [wT, tT] = (0, WT.useState)(0), [aT, yT] = (0, WT.useState)(null !== (UT = null === qT || void 0 === qT ? void 0 : qT.name) && void 0 !== UT ? UT : ""), XT = (0, WT.useRef)(aT), IT = (0, WT.useRef)(""), QT = TT => {
        XT.current = TT, yT(TT)
      }, [sT, FT] = (0, WT.useState)(null !== (mT = null === qT || void 0 === qT ? void 0 : qT.description) && void 0 !== mT ? mT : ""), PT = (0, WT.useRef)(sT), VT = (0, WT.useRef)(""), uT = TT => {
        PT.current = TT, FT(TT)
      }, [CT, rT] = (0, WT.useState)(!1), {
        loading: KT,
        error: ST,
        setError: GT,
        onFiles: NT
      } = (0, LT.d)((async TT => {
        const UT = await (0, ZT.loadPageShaderPackCompiler)();
        if (!UT) return void GT(eT("shaderPack:compilerUnavailable"));
        const mT = await (0, cT.f)(UT, TT.files);
        if (dT({
            pack: TT,
            validation: mT,
            sourceBytes: (0, gT.x)(TT.files)
          }), !qT) {
          var WT;
          if ("" !== XT.current.trim() && XT.current !== IT.current || (IT.current = (0, zT.T)(TT.manifest.name.trim(), zT.C), QT(IT.current)), "" === PT.current.trim() || PT.current === VT.current) VT.current = (0, zT.T)((null !== (WT = TT.manifest.description) && void 0 !== WT ? WT : "").trim(), zT.s), uT(VT.current);
          tT((TT => TT + 1))
        }
      })), ET = !JT && !YT.isLoggedIn() && !MT.d.offlineMode, hT = aT.trim(), DT = hT.length < zT.F, oT = null !== xT && !1 !== (null === (lT = xT.validation) || void 0 === lT ? void 0 : lT.ok) && !KT && !DT && !ET && !JT;
      return (0, fT.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, fT.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: qT ? eT("shaderPackListing:uploadIntro", {
            minutes: String(zT.K / 6e4)
          }) : eT("shaderPackListing:publishIntro")
        }), (0, fT.jsx)(OT, {}), ET && (0, fT.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: eT("shaderPackListing:publishNeedsLogin")
        }), (0, fT.jsx)(LT.b, {
          busy: KT,
          disabled: KT || CT,
          onFiles: TT => {
            dT(null), NT(TT)
          }
        }), xT && (0, fT.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, fT.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: xT.pack.manifest.name
          }), (0, fT.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [eT("shaderPackListing:sizeValue", {
              kilobytes: String((0, vT.G)(xT.sourceBytes))
            }), " \xb7", " ", eT("shaderPackListing:filesValue", {
              files: String(xT.pack.files.length)
            })]
          }), (0, fT.jsx)(iT, {
            picked: xT
          })]
        }), !qT && (0, fT.jsxs)(fT.Fragment, {
          children: [(0, fT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, fT.jsx)("span", {
              children: eT("general:name")
            }), (0, fT.jsx)(kT.e, {
              className: "ShaderPackPublishInput",
              defaultValue: aT,
              maxLength: zT.C,
              onValueChange: QT
            }, wT), xT && DT && (0, fT.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: eT("shaderPackListing:nameTooShort", {
                min: String(zT.F)
              })
            })]
          }), (0, fT.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, fT.jsx)("span", {
              children: eT("general:description")
            }), (0, fT.jsx)(kT.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: sT,
              maxLength: zT.s,
              onValueChange: uT,
              useTextarea: !0
            }, wT)]
          })]
        }), ST && (0, fT.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: ST
        }), (0, fT.jsxs)(HT.l, {
          className: "ShaderPackPublishButton",
          disabled: !oT,
          loading: CT,
          onClick: () => {
            !async function() {
              var TT;
              if (!xT) return;
              const {
                name: UT,
                description: mT
              } = null !== qT && void 0 !== qT ? qT : {
                name: hT,
                description: sT.trim()
              }, WT = {
                packId: null !== (TT = null === qT || void 0 === qT ? void 0 : qT.packId) && void 0 !== TT ? TT : null,
                name: UT,
                description: mT,
                apiVersion: xT.pack.manifest.apiVersion,
                files: (0, gT.w)(xT.pack.files),
                keepCircleShadows: !0 === xT.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(WT)).byteLength > 1024 * zT.S) GT(eT("shaderPackListing:publishTooBig", {
                kilobytes: String(zT.S)
              }));
              else {
                rT(!0), GT(null);
                try {
                  bT(await pT.b.publishShaderPack(YT, WT))
                } catch (MT) {
                  console.error("Failed to publish the shader pack", MT), GT((0, vT.s)(MT, eT, "shaderPackListing:publishFailed"))
                } finally {
                  rT(!1)
                }
              }
            }()
          },
          children: [(0, fT.jsx)(nT.c, {
            name: "upload"
          }), " ", eT(qT ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function iT(TT) {
      let {
        picked: UT
      } = TT;
      const {
        t: mT
      } = (0, BT.z)(), {
        validation: WT
      } = UT;
      return null === WT ? (0, fT.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: mT("shaderPackListing:publishUnchecked")
      }) : WT.ok ? (0, fT.jsxs)(fT.Fragment, {
        children: [(0, fT.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, fT.jsx)(nT.c, {
            name: "circle-check"
          }), " ", mT("shaderPackListing:publishReady")]
        }), WT.offInStrict.length > 0 && (0, fT.jsxs)(fT.Fragment, {
          children: [(0, fT.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, fT.jsx)(nT.c, {
              name: "triangle-exclamation"
            }), " ", mT("shaderPack:offInStrict")]
          }), (0, fT.jsx)(lT.b, {
            diagnostics: WT.offInStrict,
            t: mT
          })]
        })]
      }) : (0, fT.jsxs)(fT.Fragment, {
        children: [(0, fT.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, fT.jsx)(nT.c, {
            name: "triangle-exclamation"
          }), " ", mT("shaderPackListing:publishHasErrors")]
        }), (0, fT.jsx)(lT.b, {
          diagnostics: WT.errors,
          more: WT.moreErrors,
          t: mT
        })]
      })
    }
    const bT = "\0";

    function OT() {
      const {
        t: TT
      } = (0, BT.z)(), [UT, mT] = TT("shaderPackListing:bloxdhubHelp", {
        site: bT
      }).split(bT);
      return (0, fT.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [UT, (0, fT.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: zT.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: zT.e
        }), mT]
      })
    }
  },
  5139: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT.j,
      e: () => zT,
      f: () => WT.q
    });
    var WT = mT(5142);
    const zT = [!1, !0].flatMap((TT => ["terrain", "liquid", "model"].map((UT => ({
      strict: TT,
      program: UT
    })))))
  },
  5142: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => nT,
      f: () => gT,
      j: () => WT,
      l: () => ZT,
      o: () => lT,
      q: () => zT,
      s: () => MT,
      v: () => kT,
      w: () => jT,
      x: () => LT
    });
    const WT = 5;

    function zT(TT) {
      return TT === WT
    }

    function MT(TT) {
      return [...TT.features]
    }
    const gT = 262144,
      nT = 256,
      HT = 256;

    function kT(TT) {
      if ("object" !== typeof TT || null === TT || Array.isArray(TT)) return "The pack has no files.";
      const UT = [];
      for (const [mT, WT] of Object.entries(TT)) {
        if ("string" !== typeof WT) return `${mT} isn't text.`;
        UT.push({
          path: mT,
          source: WT
        })
      }
      return UT.sort(((TT, UT) => lT(TT.path, UT.path))),
        function(TT) {
          if (0 === TT.length) return "The pack has no .wgsl files.";
          if (TT.length > nT) return `The pack has more than ${nT} .wgsl files.`;
          const UT = new Set;
          for (const {
              path: mT
            }
            of TT) {
            const TT = pT(mT);
            if (null !== TT) return TT;
            if (UT.has(mT)) return `The pack has two files at ${mT}.`;
            UT.add(mT)
          }
          return LT(TT) > gT ? `The pack's .wgsl files are over ${gT/1024} KB in total.` : null
        }(UT) ?? UT
    }

    function jT(TT) {
      const UT = {};
      for (const mT of TT) UT[mT.path] = mT.source;
      return UT
    }

    function lT(TT, UT) {
      return TT < UT ? -1 : TT > UT ? 1 : 0
    }

    function LT(TT) {
      const UT = new TextEncoder;
      let mT = 0;
      for (const {
          source: WT
        }
        of TT) mT += UT.encode(WT).byteLength;
      return mT
    }

    function pT(TT) {
      if (!TT.toLowerCase().endsWith(".wgsl")) return `${TT} isn't a .wgsl file.`;
      if (TT.length > HT) return `A file path is over ${HT} characters.`;
      if (TT.includes("\\") || /[\u0000-\u001f]/.test(TT)) return `${TT} isn't a valid file path.`;
      return TT.split("/").some((TT => "" === TT || "." === TT || ".." === TT)) ? `${TT} isn't a valid file path.` : null
    }
    const BT = /^(.*)\[rot\[([1-4])$/;

    function ZT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const WT = new Map;
      UT.forEach(((TT, UT) => {
        let {
          numAnimStates: mT,
          animStartIdx: zT
        } = TT;
        for (let MT = 1; MT < mT; MT++) WT.set(zT + MT - 1, UT)
      }));
      const zT = Object.entries(TT),
        MT = new Map;
      for (const [ZT, cT] of zT) {
        const TT = BT.exec(ZT);
        "1" === TT?.[2] && MT.set(TT[1], cT + 1)
      }
      const gT = TT => {
          const UT = BT.exec(TT);
          return UT && MT.has(UT[1]) ? {
            root: UT[1],
            rotation: Number(UT[2]) - 1
          } : null
        },
        nT = new Set(zT.map((TT => {
          let [UT] = TT;
          return gT(UT)?.root ?? UT
        }))),
        HT = (TT, mT) => {
          const WT = TT.replace(/_?0$/, "");
          return (UT[mT]?.numAnimStates ?? 0) > 1 && !nT.has(WT) ? WT : TT
        },
        kT = new Map;
      for (const [BT, ZT] of zT) kT.set(ZT, HT(gT(BT)?.root ?? BT, ZT));
      const jT = zT.reduce(((TT, UT) => {
          let [, mT] = UT;
          return Math.max(TT, mT + 1)
        }), 0),
        lT = Array.from({
          length: jT
        }, ((TT, UT) => ({
          id: UT + 1,
          rotation: 0
        }))),
        LT = new Map,
        pT = new Map;
      for (const [BT, ZT] of zT) {
        const TT = gT(BT),
          UT = WT.get(ZT);
        if (void 0 !== UT) {
          const mT = kT.get(UT);
          pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "frame"
          }), TT && !pT.has(TT.root) && pT.set(TT.root, {
            name: TT.root,
            texture: mT,
            kind: "frame"
          });
          continue
        }
        const mT = kT.get(ZT),
          zT = TT?.root ?? BT;
        if (mT !== zT && pT.set(zT, {
            name: zT,
            texture: mT,
            kind: "frame"
          }), TT) {
          const UT = MT.get(TT.root);
          lT[ZT] = {
            id: UT,
            rotation: TT.rotation
          }, LT.set(mT, UT), pT.set(BT, {
            name: BT,
            texture: mT,
            kind: "rotation"
          })
        } else LT.set(mT, ZT + 1)
      }
      for (const BT of LT.keys()) pT.delete(BT);
      for (const [BT, ZT] of mT) {
        const TT = LT.get(ZT);
        void 0 === TT || LT.has(BT) || (LT.set(BT, TT), pT.delete(BT))
      }
      return {
        named: [...LT].sort(((TT, UT) => {
          let [mT] = TT, [WT] = UT;
          return mT < WT ? -1 : mT > WT ? 1 : 0
        })).map((TT => {
          let [UT, mT] = TT;
          return {
            name: UT,
            id: mT
          }
        })),
        aliases: [...pT.values()],
        layers: lT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);