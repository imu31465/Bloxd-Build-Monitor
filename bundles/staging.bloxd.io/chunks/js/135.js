export const id = 135;
export const ids = [135];
export const modules = {
  6092: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => VR,
      g: () => fR
    });
    var yR = GR(66),
      tR = GR(1590),
      uR = GR(1270),
      ZR = GR(103),
      qR = GR(4385),
      iR = GR(1378);

    function fR() {
      return !(0, ZR.isMobile)()
    }

    function VR(RR) {
      let {
        disabled: JR,
        openFolderPicker: GR,
        onFiles: ZR
      } = RR;
      const {
        t: VR
      } = (0, uR.A)(), KR = (0, yR.useRef)(null);
      return (0, iR.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, iR.jsx)("input", {
          ref: KR,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(RR) {
            const JR = Array.from(RR.target.files);
            RR.target.value = "", ZR(JR)
          }
        }), fR() && (0, iR.jsx)(tR.g, {
          disabled: JR,
          onClick: GR,
          children: VR("general:chooseFolder")
        }), (0, iR.jsx)(tR.g, {
          disabled: JR,
          onClick: () => {
            (0, qR.e)(KR.current)
          },
          children: VR("general:chooseZip")
        })]
      })
    }
  },
  6076: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      c: () => ZR,
      d: () => uR
    });
    var yR = GR(6080);
    const tR = [RR => RR.strict ? "strict" : "nonStrict", RR => RR.program];

    function uR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const yR = {};
      for (const tR in GR) yR[tR] = `\0${tR}\0`;
      return RR(JR, yR).replace(/\0(\w+)\0/g, ((RR, JR) => GR[JR]))
    }

    function ZR(RR) {
      return null === RR.file ? null : RR.line > 0 ? `${RR.file}:${RR.line}` : RR.file
    }

    function qR(RR) {
      const JR = new Map(RR.map((RR => [iR(RR).join("."), RR])));
      if (0 === JR.size) return [];
      const GR = VR([...JR.values()]);
      return 0 === GR[0].length ? [] : GR
    }

    function iR(RR) {
      return tR.map((JR => JR(RR)))
    }
    const fR = tR.map((RR => new Set(yR.g.map(RR)).size));

    function VR(RR) {
      const JR = tR.map((JR => new Set(RR.map(JR)))),
        GR = JR.reduce(((RR, JR) => RR * JR.size), 1),
        yR = JR.every(((RR, JR) => 1 === RR.size || RR.size === fR[JR]));
      if (GR === RR.length && yR) return [tR.filter(((RR, GR) => 1 === JR[GR].size)).map((JR => JR(RR[0])))];
      let uR = null;
      for (let ZR = 0; ZR < tR.length; ZR++) {
        if (1 === JR[ZR].size) continue;
        const GR = KR(RR, tR[ZR]).flatMap(VR);
        (null === uR || GR.length < uR.length) && (uR = GR)
      }
      return uR
    }

    function KR(RR, JR) {
      const GR = new Map;
      for (const tR of RR) {
        var yR;
        const RR = JR(tR);
        GR.set(RR, [...null !== (yR = GR.get(RR)) && void 0 !== yR ? yR : [], tR])
      }
      return [...GR.values()]
    }
  },
  7736: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      ShaderPackPublishForm: () => WR
    });
    var yR = GR(66),
      tR = GR(7702),
      uR = GR(212),
      ZR = GR(6084),
      qR = GR(1468),
      iR = GR(1590),
      fR = GR(1867),
      VR = GR(1196),
      KR = GR(7743),
      wR = GR(7750),
      rR = GR(1647),
      eR = GR(1270),
      aR = GR(7756),
      LR = GR(7792),
      nR = GR(7697),
      UR = GR(1378);

    function WR(RR) {
      var JR, GR, KR;
      let {
        existing: WR,
        onPublished: CR
      } = RR;
      const {
        t: MR
      } = (0, eR.A)(), {
        userContext: BR,
        isUserContextUpdating: lR
      } = (0, VR.d)(), [pR, gR] = (0, yR.useState)(null), [bR, vR] = (0, yR.useState)(0), [OR, xR] = (0, yR.useState)(null !== (JR = null === WR || void 0 === WR ? void 0 : WR.name) && void 0 !== JR ? JR : ""), NR = (0, yR.useRef)(OR), DR = (0, yR.useRef)(""), HR = RR => {
        NR.current = RR, xR(RR)
      }, [oR, cR] = (0, yR.useState)(null !== (GR = null === WR || void 0 === WR ? void 0 : WR.description) && void 0 !== GR ? GR : ""), PR = (0, yR.useRef)(oR), IR = (0, yR.useRef)(""), mR = RR => {
        PR.current = RR, cR(RR)
      }, [zR, SR] = (0, yR.useState)(!1), {
        loading: jR,
        error: dR,
        setError: ER,
        onFiles: YR
      } = (0, wR.i)((async RR => {
        const JR = await (0, aR.loadPageShaderPackCompiler)();
        if (!JR) return void ER(MR("shaderPack:compilerUnavailable"));
        const GR = await (0, LR.h)(JR, RR.files);
        if (gR({
            pack: RR,
            validation: GR,
            sourceBytes: (0, ZR.z)(RR.files)
          }), !WR) {
          var yR;
          if ("" !== NR.current.trim() && NR.current !== DR.current || (DR.current = (0, tR.N)(RR.manifest.name.trim(), tR.w), HR(DR.current)), "" === PR.current.trim() || PR.current === IR.current) IR.current = (0, tR.N)((null !== (yR = RR.manifest.description) && void 0 !== yR ? yR : "").trim(), tR.q), mR(IR.current);
          vR((RR => RR + 1))
        }
      })), kR = !lR && !BR.isLoggedIn() && !uR.c.offlineMode, QR = OR.trim(), FR = QR.length < tR.z, TR = null !== pR && !1 !== (null === (KR = pR.validation) || void 0 === KR ? void 0 : KR.ok) && !jR && !FR && !kR && !lR;
      return (0, UR.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, UR.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: WR ? MR("shaderPackListing:uploadIntro", {
            minutes: String(tR.C / 6e4)
          }) : MR("shaderPackListing:publishIntro")
        }), (0, UR.jsx)(XR, {}), kR && (0, UR.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: MR("shaderPackListing:publishNeedsLogin")
        }), (0, UR.jsx)(wR.e, {
          busy: jR,
          disabled: jR || zR,
          onFiles: RR => {
            gR(null), YR(RR)
          }
        }), pR && (0, UR.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, UR.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: pR.pack.manifest.name
          }), (0, UR.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [MR("shaderPackListing:sizeValue", {
              kilobytes: String((0, nR.V)(pR.sourceBytes))
            }), " \xb7", " ", MR("shaderPackListing:filesValue", {
              files: String(pR.pack.files.length)
            })]
          }), (0, UR.jsx)(AR, {
            picked: pR
          })]
        }), !WR && (0, UR.jsxs)(UR.Fragment, {
          children: [(0, UR.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, UR.jsx)("span", {
              children: MR("general:name")
            }), (0, UR.jsx)(fR.b, {
              className: "ShaderPackPublishInput",
              defaultValue: OR,
              maxLength: tR.w,
              onValueChange: HR
            }, bR), pR && FR && (0, UR.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: MR("shaderPackListing:nameTooShort", {
                min: String(tR.z)
              })
            })]
          }), (0, UR.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, UR.jsx)("span", {
              children: MR("general:description")
            }), (0, UR.jsx)(fR.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: oR,
              maxLength: tR.q,
              onValueChange: mR,
              useTextarea: !0
            }, bR)]
          })]
        }), dR && (0, UR.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: dR
        }), (0, UR.jsxs)(iR.n, {
          className: "ShaderPackPublishButton",
          disabled: !TR,
          loading: zR,
          onClick: () => {
            !async function() {
              var RR;
              if (!pR) return;
              const {
                name: JR,
                description: GR
              } = null !== WR && void 0 !== WR ? WR : {
                name: QR,
                description: oR.trim()
              }, yR = {
                packId: null !== (RR = null === WR || void 0 === WR ? void 0 : WR.packId) && void 0 !== RR ? RR : null,
                name: JR,
                description: GR,
                apiVersion: pR.pack.manifest.apiVersion,
                files: (0, ZR.x)(pR.pack.files),
                keepCircleShadows: !0 === pR.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(yR)).byteLength > 1024 * tR.M) ER(MR("shaderPackListing:publishTooBig", {
                kilobytes: String(tR.M)
              }));
              else {
                SR(!0), ER(null);
                try {
                  CR(await rR.c.publishShaderPack(BR, yR))
                } catch (uR) {
                  console.error("Failed to publish the shader pack", uR), ER((0, nR.F)(uR, MR, "shaderPackListing:publishFailed"))
                } finally {
                  SR(!1)
                }
              }
            }()
          },
          children: [(0, UR.jsx)(qR.d, {
            name: "upload"
          }), " ", MR(WR ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function AR(RR) {
      let {
        picked: JR
      } = RR;
      const {
        t: GR
      } = (0, eR.A)(), {
        validation: yR
      } = JR;
      return null === yR ? (0, UR.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: GR("shaderPackListing:publishUnchecked")
      }) : yR.ok ? (0, UR.jsxs)(UR.Fragment, {
        children: [(0, UR.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, UR.jsx)(qR.d, {
            name: "circle-check"
          }), " ", GR("shaderPackListing:publishReady")]
        }), yR.offInStrict.length > 0 && (0, UR.jsxs)(UR.Fragment, {
          children: [(0, UR.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, UR.jsx)(qR.d, {
              name: "triangle-exclamation"
            }), " ", GR("shaderPack:offInStrict")]
          }), (0, UR.jsx)(KR.c, {
            diagnostics: yR.offInStrict,
            t: GR
          })]
        })]
      }) : (0, UR.jsxs)(UR.Fragment, {
        children: [(0, UR.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, UR.jsx)(qR.d, {
            name: "triangle-exclamation"
          }), " ", GR("shaderPackListing:publishHasErrors")]
        }), (0, UR.jsx)(KR.c, {
          diagnostics: yR.errors,
          more: yR.moreErrors,
          t: GR
        })]
      })
    }
    const CR = "\0";

    function XR() {
      const {
        t: RR
      } = (0, eR.A)(), [JR, GR] = RR("shaderPackListing:bloxdhubHelp", {
        site: CR
      }).split(CR);
      return (0, UR.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [JR, (0, UR.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: tR.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: tR.d
        }), GR]
      })
    }
  },
  6080: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.f,
      g: () => tR,
      i: () => yR.o
    });
    var yR = GR(6084);
    const tR = [!1, !0].flatMap((RR => ["terrain", "liquid", "model"].map((JR => ({
      strict: RR,
      program: JR
    })))))
  },
  6084: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => ZR,
      f: () => yR,
      j: () => aR,
      l: () => KR,
      o: () => tR,
      r: () => uR,
      t: () => fR,
      x: () => VR,
      z: () => wR
    });
    const yR = 5;

    function tR(RR) {
      return RR === yR
    }

    function uR(RR) {
      return [...RR.features]
    }
    const ZR = 262144,
      qR = 256,
      iR = 256;

    function fR(RR) {
      if ("object" !== typeof RR || null === RR || Array.isArray(RR)) return "The pack has no files.";
      const JR = [];
      for (const [GR, yR] of Object.entries(RR)) {
        if ("string" !== typeof yR) return `${GR} isn't text.`;
        JR.push({
          path: GR,
          source: yR
        })
      }
      return JR.sort(((RR, JR) => KR(RR.path, JR.path))),
        function(RR) {
          if (0 === RR.length) return "The pack has no .wgsl files.";
          if (RR.length > qR) return `The pack has more than ${qR} .wgsl files.`;
          const JR = new Set;
          for (const {
              path: GR
            }
            of RR) {
            const RR = rR(GR);
            if (null !== RR) return RR;
            if (JR.has(GR)) return `The pack has two files at ${GR}.`;
            JR.add(GR)
          }
          return wR(RR) > ZR ? `The pack's .wgsl files are over ${ZR/1024} KB in total.` : null
        }(JR) ?? JR
    }

    function VR(RR) {
      const JR = {};
      for (const GR of RR) JR[GR.path] = GR.source;
      return JR
    }

    function KR(RR, JR) {
      return RR < JR ? -1 : RR > JR ? 1 : 0
    }

    function wR(RR) {
      const JR = new TextEncoder;
      let GR = 0;
      for (const {
          source: yR
        }
        of RR) GR += JR.encode(yR).byteLength;
      return GR
    }

    function rR(RR) {
      if (!RR.toLowerCase().endsWith(".wgsl")) return `${RR} isn't a .wgsl file.`;
      if (RR.length > iR) return `A file path is over ${iR} characters.`;
      if (RR.includes("\\") || /[\u0000-\u001f]/.test(RR)) return `${RR} isn't a valid file path.`;
      return RR.split("/").some((RR => "" === RR || "." === RR || ".." === RR)) ? `${RR} isn't a valid file path.` : null
    }
    const eR = /^(.*)\[rot\[([1-4])$/;

    function aR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const yR = new Map;
      JR.forEach(((RR, JR) => {
        let {
          numAnimStates: GR,
          animStartIdx: tR
        } = RR;
        for (let uR = 1; uR < GR; uR++) yR.set(tR + uR - 1, JR)
      }));
      const tR = Object.entries(RR),
        uR = new Map;
      for (const [aR, LR] of tR) {
        const RR = eR.exec(aR);
        "1" === RR?.[2] && uR.set(RR[1], LR + 1)
      }
      const ZR = RR => {
          const JR = eR.exec(RR);
          return JR && uR.has(JR[1]) ? {
            root: JR[1],
            rotation: Number(JR[2]) - 1
          } : null
        },
        qR = new Set(tR.map((RR => {
          let [JR] = RR;
          return ZR(JR)?.root ?? JR
        }))),
        iR = (RR, GR) => {
          const yR = RR.replace(/_?0$/, "");
          return (JR[GR]?.numAnimStates ?? 0) > 1 && !qR.has(yR) ? yR : RR
        },
        fR = new Map;
      for (const [eR, aR] of tR) fR.set(aR, iR(ZR(eR)?.root ?? eR, aR));
      const VR = tR.reduce(((RR, JR) => {
          let [, GR] = JR;
          return Math.max(RR, GR + 1)
        }), 0),
        KR = Array.from({
          length: VR
        }, ((RR, JR) => ({
          id: JR + 1,
          rotation: 0
        }))),
        wR = new Map,
        rR = new Map;
      for (const [eR, aR] of tR) {
        const RR = ZR(eR),
          JR = yR.get(aR);
        if (void 0 !== JR) {
          const GR = fR.get(JR);
          rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "frame"
          }), RR && !rR.has(RR.root) && rR.set(RR.root, {
            name: RR.root,
            texture: GR,
            kind: "frame"
          });
          continue
        }
        const GR = fR.get(aR),
          tR = RR?.root ?? eR;
        if (GR !== tR && rR.set(tR, {
            name: tR,
            texture: GR,
            kind: "frame"
          }), RR) {
          const JR = uR.get(RR.root);
          KR[aR] = {
            id: JR,
            rotation: RR.rotation
          }, wR.set(GR, JR), rR.set(eR, {
            name: eR,
            texture: GR,
            kind: "rotation"
          })
        } else wR.set(GR, aR + 1)
      }
      for (const eR of wR.keys()) rR.delete(eR);
      for (const [eR, aR] of GR) {
        const RR = wR.get(aR);
        void 0 === RR || wR.has(eR) || (wR.set(eR, RR), rR.delete(eR))
      }
      return {
        named: [...wR].sort(((RR, JR) => {
          let [GR] = RR, [yR] = JR;
          return GR < yR ? -1 : GR > yR ? 1 : 0
        })).map((RR => {
          let [JR, GR] = RR;
          return {
            name: JR,
            id: GR
          }
        })),
        aliases: [...rR.values()],
        layers: KR
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);