export const id = 116;
export const ids = [116];
export const modules = {
  5398: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => gQ,
      e: () => PQ
    });
    var wQ = XQ(61),
      qQ = XQ(1507),
      TQ = XQ(1226),
      zQ = XQ(105),
      sQ = XQ(3408),
      FQ = XQ(1145);

    function PQ() {
      return !(0, zQ.isMobile)()
    }

    function gQ(QQ) {
      let {
        disabled: WQ,
        openFolderPicker: XQ,
        onFiles: zQ
      } = QQ;
      const {
        t: gQ
      } = (0, TQ.C)(), JQ = (0, wQ.useRef)(null);
      return (0, FQ.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, FQ.jsx)("input", {
          ref: JQ,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(QQ) {
            const WQ = Array.from(QQ.target.files);
            QQ.target.value = "", zQ(WQ)
          }
        }), PQ() && (0, FQ.jsx)(qQ.h, {
          disabled: WQ,
          onClick: XQ,
          children: gQ("general:chooseFolder")
        }), (0, FQ.jsx)(qQ.h, {
          disabled: WQ,
          onClick: () => {
            (0, sQ.d)(JQ.current)
          },
          children: gQ("general:chooseZip")
        })]
      })
    }
  },
  5386: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sQ,
      i: () => zQ,
      l: () => TQ
    });
    var wQ = XQ(5394);
    const qQ = [QQ => QQ.strict ? "strict" : "nonStrict", QQ => QQ.program];

    function TQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const wQ = {};
      for (const qQ in XQ) wQ[qQ] = `\0${qQ}\0`;
      return QQ(WQ, wQ).replace(/\0(\w+)\0/g, ((QQ, WQ) => XQ[WQ]))
    }

    function zQ(QQ) {
      return null === QQ.file ? null : QQ.line > 0 ? `${QQ.file}:${QQ.line}` : QQ.file
    }

    function sQ(QQ) {
      const WQ = new Map(QQ.map((QQ => [FQ(QQ).join("."), QQ])));
      if (0 === WQ.size) return [];
      const XQ = gQ([...WQ.values()]);
      return 0 === XQ[0].length ? [] : XQ
    }

    function FQ(QQ) {
      return qQ.map((WQ => WQ(QQ)))
    }
    const PQ = qQ.map((QQ => new Set(wQ.c.map(QQ)).size));

    function gQ(QQ) {
      const WQ = qQ.map((WQ => new Set(QQ.map(WQ)))),
        XQ = WQ.reduce(((QQ, WQ) => QQ * WQ.size), 1),
        wQ = WQ.every(((QQ, WQ) => 1 === QQ.size || QQ.size === PQ[WQ]));
      if (XQ === QQ.length && wQ) return [qQ.filter(((QQ, XQ) => 1 === WQ[XQ].size)).map((WQ => WQ(QQ[0])))];
      let TQ = null;
      for (let zQ = 0; zQ < qQ.length; zQ++) {
        if (1 === WQ[zQ].size) continue;
        const XQ = JQ(QQ, qQ[zQ]).flatMap(gQ);
        (null === TQ || XQ.length < TQ.length) && (TQ = XQ)
      }
      return TQ
    }

    function JQ(QQ, WQ) {
      const XQ = new Map;
      for (const qQ of QQ) {
        var wQ;
        const QQ = WQ(qQ);
        XQ.set(QQ, [...null !== (wQ = XQ.get(QQ)) && void 0 !== wQ ? wQ : [], qQ])
      }
      return [...XQ.values()]
    }
  },
  6970: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ShaderPackPublishForm: () => pQ
    });
    var wQ = XQ(61),
      qQ = XQ(6952),
      TQ = XQ(240),
      zQ = XQ(5396),
      sQ = XQ(1094),
      FQ = XQ(1507),
      PQ = XQ(1739),
      gQ = XQ(1162),
      JQ = XQ(6972),
      rQ = XQ(6979),
      IQ = XQ(1548),
      jQ = XQ(1226),
      BQ = XQ(6984),
      yQ = XQ(7018),
      VQ = XQ(6946),
      DQ = XQ(1145);

    function pQ(QQ) {
      var WQ, XQ, JQ;
      let {
        existing: pQ,
        onPublished: UQ
      } = QQ;
      const {
        t: vQ
      } = (0, jQ.C)(), {
        userContext: dQ,
        isUserContextUpdating: HQ
      } = (0, gQ.c)(), [aQ, lQ] = (0, wQ.useState)(null), [hQ, iQ] = (0, wQ.useState)(0), [cQ, AQ] = (0, wQ.useState)(null !== (WQ = null === pQ || void 0 === pQ ? void 0 : pQ.name) && void 0 !== WQ ? WQ : ""), RQ = (0, wQ.useRef)(cQ), EQ = (0, wQ.useRef)(""), CQ = QQ => {
        RQ.current = QQ, AQ(QQ)
      }, [uQ, LQ] = (0, wQ.useState)(null !== (XQ = null === pQ || void 0 === pQ ? void 0 : pQ.description) && void 0 !== XQ ? XQ : ""), kQ = (0, wQ.useRef)(uQ), fQ = (0, wQ.useRef)(""), SQ = QQ => {
        kQ.current = QQ, LQ(QQ)
      }, [tQ, oQ] = (0, wQ.useState)(!1), {
        loading: eQ,
        error: nQ,
        setError: xQ,
        onFiles: YQ
      } = (0, rQ.d)((async QQ => {
        const WQ = await (0, BQ.loadPageShaderPackCompiler)();
        if (!WQ) return void xQ(vQ("shaderPack:compilerUnavailable"));
        const XQ = await (0, yQ.g)(WQ, QQ.files);
        if (lQ({
            pack: QQ,
            validation: XQ,
            sourceBytes: (0, zQ.z)(QQ.files)
          }), !pQ) {
          var wQ;
          if ("" !== RQ.current.trim() && RQ.current !== EQ.current || (EQ.current = (0, qQ.M)(QQ.manifest.name.trim(), qQ.w), CQ(EQ.current)), "" === kQ.current.trim() || kQ.current === fQ.current) fQ.current = (0, qQ.M)((null !== (wQ = QQ.manifest.description) && void 0 !== wQ ? wQ : "").trim(), qQ.o), SQ(fQ.current);
          iQ((QQ => QQ + 1))
        }
      })), NQ = !HQ && !dQ.isLoggedIn() && !TQ.e.offlineMode, ZQ = cQ.trim(), OQ = ZQ.length < qQ.z, KQ = null !== aQ && !1 !== (null === (JQ = aQ.validation) || void 0 === JQ ? void 0 : JQ.ok) && !eQ && !OQ && !NQ && !HQ;
      return (0, DQ.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, DQ.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: pQ ? vQ("shaderPackListing:uploadIntro", {
            minutes: String(qQ.E / 6e4)
          }) : vQ("shaderPackListing:publishIntro")
        }), (0, DQ.jsx)(bQ, {}), NQ && (0, DQ.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: vQ("shaderPackListing:publishNeedsLogin")
        }), (0, DQ.jsx)(rQ.b, {
          busy: eQ,
          disabled: eQ || tQ,
          onFiles: QQ => {
            lQ(null), YQ(QQ)
          }
        }), aQ && (0, DQ.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, DQ.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: aQ.pack.manifest.name
          }), (0, DQ.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [vQ("shaderPackListing:sizeValue", {
              kilobytes: String((0, VQ.L)(aQ.sourceBytes))
            }), " \xb7", " ", vQ("shaderPackListing:filesValue", {
              files: String(aQ.pack.files.length)
            })]
          }), (0, DQ.jsx)(GQ, {
            picked: aQ
          })]
        }), !pQ && (0, DQ.jsxs)(DQ.Fragment, {
          children: [(0, DQ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, DQ.jsx)("span", {
              children: vQ("general:name")
            }), (0, DQ.jsx)(PQ.e, {
              className: "ShaderPackPublishInput",
              defaultValue: cQ,
              maxLength: qQ.w,
              onValueChange: CQ
            }, hQ), aQ && OQ && (0, DQ.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: vQ("shaderPackListing:nameTooShort", {
                min: String(qQ.z)
              })
            })]
          }), (0, DQ.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, DQ.jsx)("span", {
              children: vQ("general:description")
            }), (0, DQ.jsx)(PQ.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: uQ,
              maxLength: qQ.o,
              onValueChange: SQ,
              useTextarea: !0
            }, hQ)]
          })]
        }), nQ && (0, DQ.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: nQ
        }), (0, DQ.jsxs)(FQ.s, {
          className: "ShaderPackPublishButton",
          disabled: !KQ,
          loading: tQ,
          onClick: () => {
            !async function() {
              var QQ;
              if (!aQ) return;
              const {
                name: WQ,
                description: XQ
              } = null !== pQ && void 0 !== pQ ? pQ : {
                name: ZQ,
                description: uQ.trim()
              }, wQ = {
                packId: null !== (QQ = null === pQ || void 0 === pQ ? void 0 : pQ.packId) && void 0 !== QQ ? QQ : null,
                name: WQ,
                description: XQ,
                apiVersion: aQ.pack.manifest.apiVersion,
                files: (0, zQ.w)(aQ.pack.files),
                keepCircleShadows: !0 === aQ.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(wQ)).byteLength > 1024 * qQ.K) xQ(vQ("shaderPackListing:publishTooBig", {
                kilobytes: String(qQ.K)
              }));
              else {
                oQ(!0), xQ(null);
                try {
                  UQ(await IQ.e.publishShaderPack(dQ, wQ))
                } catch (TQ) {
                  console.error("Failed to publish the shader pack", TQ), xQ((0, VQ.y)(TQ, vQ, "shaderPackListing:publishFailed"))
                } finally {
                  oQ(!1)
                }
              }
            }()
          },
          children: [(0, DQ.jsx)(sQ.d, {
            name: "upload"
          }), " ", vQ(pQ ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function GQ(QQ) {
      let {
        picked: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, jQ.C)(), {
        validation: wQ
      } = WQ;
      return null === wQ ? (0, DQ.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: XQ("shaderPackListing:publishUnchecked")
      }) : wQ.ok ? (0, DQ.jsxs)(DQ.Fragment, {
        children: [(0, DQ.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, DQ.jsx)(sQ.d, {
            name: "circle-check"
          }), " ", XQ("shaderPackListing:publishReady")]
        }), wQ.offInStrict.length > 0 && (0, DQ.jsxs)(DQ.Fragment, {
          children: [(0, DQ.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, DQ.jsx)(sQ.d, {
              name: "triangle-exclamation"
            }), " ", XQ("shaderPack:offInStrict")]
          }), (0, DQ.jsx)(JQ.e, {
            diagnostics: wQ.offInStrict,
            t: XQ
          })]
        })]
      }) : (0, DQ.jsxs)(DQ.Fragment, {
        children: [(0, DQ.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, DQ.jsx)(sQ.d, {
            name: "triangle-exclamation"
          }), " ", XQ("shaderPackListing:publishHasErrors")]
        }), (0, DQ.jsx)(JQ.e, {
          diagnostics: wQ.errors,
          more: wQ.moreErrors,
          t: XQ
        })]
      })
    }
    const UQ = "\0";

    function bQ() {
      const {
        t: QQ
      } = (0, jQ.C)(), [WQ, XQ] = QQ("shaderPackListing:bloxdhubHelp", {
        site: UQ
      }).split(UQ);
      return (0, DQ.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [WQ, (0, DQ.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: qQ.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: qQ.c
        }), XQ]
      })
    }
  },
  5394: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      c: () => qQ,
      g: () => wQ.n
    });
    var wQ = XQ(5396);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
      strict: QQ,
      program: WQ
    })))))
  },
  5396: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => zQ,
      i: () => wQ,
      l: () => BQ,
      m: () => JQ,
      n: () => qQ,
      r: () => TQ,
      t: () => PQ,
      w: () => gQ,
      z: () => rQ
    });
    const wQ = 5;

    function qQ(QQ) {
      return QQ === wQ
    }

    function TQ(QQ) {
      return [...QQ.features]
    }
    const zQ = 262144,
      sQ = 256,
      FQ = 256;

    function PQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const WQ = [];
      for (const [XQ, wQ] of Object.entries(QQ)) {
        if ("string" !== typeof wQ) return `${XQ} isn't text.`;
        WQ.push({
          path: XQ,
          source: wQ
        })
      }
      return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
          const WQ = new Set;
          for (const {
              path: XQ
            }
            of QQ) {
            const QQ = IQ(XQ);
            if (null !== QQ) return QQ;
            if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
            WQ.add(XQ)
          }
          return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
        }(WQ) ?? WQ
    }

    function gQ(QQ) {
      const WQ = {};
      for (const XQ of QQ) WQ[XQ.path] = XQ.source;
      return WQ
    }

    function JQ(QQ, WQ) {
      return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
    }

    function rQ(QQ) {
      const WQ = new TextEncoder;
      let XQ = 0;
      for (const {
          source: wQ
        }
        of QQ) XQ += WQ.encode(wQ).byteLength;
      return XQ
    }

    function IQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const jQ = /^(.*)\[rot\[([1-4])$/;

    function BQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wQ = new Map;
      WQ.forEach(((QQ, WQ) => {
        let {
          numAnimStates: XQ,
          animStartIdx: qQ
        } = QQ;
        for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
      }));
      const qQ = Object.entries(QQ),
        TQ = new Map;
      for (const [BQ, yQ] of qQ) {
        const QQ = jQ.exec(BQ);
        "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
      }
      const zQ = QQ => {
          const WQ = jQ.exec(QQ);
          return WQ && TQ.has(WQ[1]) ? {
            root: WQ[1],
            rotation: Number(WQ[2]) - 1
          } : null
        },
        sQ = new Set(qQ.map((QQ => {
          let [WQ] = QQ;
          return zQ(WQ)?.root ?? WQ
        }))),
        FQ = (QQ, XQ) => {
          const wQ = QQ.replace(/_?0$/, "");
          return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
        },
        PQ = new Map;
      for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
      const gQ = qQ.reduce(((QQ, WQ) => {
          let [, XQ] = WQ;
          return Math.max(QQ, XQ + 1)
        }), 0),
        JQ = Array.from({
          length: gQ
        }, ((QQ, WQ) => ({
          id: WQ + 1,
          rotation: 0
        }))),
        rQ = new Map,
        IQ = new Map;
      for (const [jQ, BQ] of qQ) {
        const QQ = zQ(jQ),
          WQ = wQ.get(BQ);
        if (void 0 !== WQ) {
          const XQ = PQ.get(WQ);
          IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "frame"
          }), QQ && !IQ.has(QQ.root) && IQ.set(QQ.root, {
            name: QQ.root,
            texture: XQ,
            kind: "frame"
          });
          continue
        }
        const XQ = PQ.get(BQ),
          qQ = QQ?.root ?? jQ;
        if (XQ !== qQ && IQ.set(qQ, {
            name: qQ,
            texture: XQ,
            kind: "frame"
          }), QQ) {
          const WQ = TQ.get(QQ.root);
          JQ[BQ] = {
            id: WQ,
            rotation: QQ.rotation
          }, rQ.set(XQ, WQ), IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "rotation"
          })
        } else rQ.set(XQ, BQ + 1)
      }
      for (const jQ of rQ.keys()) IQ.delete(jQ);
      for (const [jQ, BQ] of XQ) {
        const QQ = rQ.get(BQ);
        void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
      }
      return {
        named: [...rQ].sort(((QQ, WQ) => {
          let [XQ] = QQ, [wQ] = WQ;
          return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
        })).map((QQ => {
          let [WQ, XQ] = QQ;
          return {
            name: WQ,
            id: XQ
          }
        })),
        aliases: [...IQ.values()],
        layers: JQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);