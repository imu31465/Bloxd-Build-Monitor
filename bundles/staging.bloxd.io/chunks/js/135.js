export const id = 135;
export const ids = [135];
export const modules = {
  6010: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => pr,
      d: () => Er
    });
    var Zr = Qr(72),
      Wr = Qr(1576),
      ar = Qr(1251),
      jr = Qr(109),
      Ir = Qr(4334),
      fr = Qr(1338);

    function Er() {
      return !(0, jr.isMobile)()
    }

    function pr(rr) {
      let {
        disabled: Sr,
        openFolderPicker: Qr,
        onFiles: jr
      } = rr;
      const {
        t: pr
      } = (0, ar.E)(), xr = (0, Zr.useRef)(null);
      return (0, fr.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, fr.jsx)("input", {
          ref: xr,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(rr) {
            const Sr = Array.from(rr.target.files);
            rr.target.value = "", jr(Sr)
          }
        }), Er() && (0, fr.jsx)(Wr.h, {
          disabled: Sr,
          onClick: Qr,
          children: pr("general:chooseFolder")
        }), (0, fr.jsx)(Wr.h, {
          disabled: Sr,
          onClick: () => {
            (0, Ir.e)(xr.current)
          },
          children: pr("general:chooseZip")
        })]
      })
    }
  },
  5998: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Ir,
      f: () => jr,
      g: () => ar
    });
    var Zr = Qr(6005);
    const Wr = [rr => rr.strict ? "strict" : "nonStrict", rr => rr.program];

    function ar(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Zr = {};
      for (const Wr in Qr) Zr[Wr] = `\0${Wr}\0`;
      return rr(Sr, Zr).replace(/\0(\w+)\0/g, ((rr, Sr) => Qr[Sr]))
    }

    function jr(rr) {
      return null === rr.file ? null : rr.line > 0 ? `${rr.file}:${rr.line}` : rr.file
    }

    function Ir(rr) {
      const Sr = new Map(rr.map((rr => [fr(rr).join("."), rr])));
      if (0 === Sr.size) return [];
      const Qr = pr([...Sr.values()]);
      return 0 === Qr[0].length ? [] : Qr
    }

    function fr(rr) {
      return Wr.map((Sr => Sr(rr)))
    }
    const Er = Wr.map((rr => new Set(Zr.e.map(rr)).size));

    function pr(rr) {
      const Sr = Wr.map((Sr => new Set(rr.map(Sr)))),
        Qr = Sr.reduce(((rr, Sr) => rr * Sr.size), 1),
        Zr = Sr.every(((rr, Sr) => 1 === rr.size || rr.size === Er[Sr]));
      if (Qr === rr.length && Zr) return [Wr.filter(((rr, Qr) => 1 === Sr[Qr].size)).map((Sr => Sr(rr[0])))];
      let ar = null;
      for (let jr = 0; jr < Wr.length; jr++) {
        if (1 === Sr[jr].size) continue;
        const Qr = xr(rr, Wr[jr]).flatMap(pr);
        (null === ar || Qr.length < ar.length) && (ar = Qr)
      }
      return ar
    }

    function xr(rr, Sr) {
      const Qr = new Map;
      for (const Wr of rr) {
        var Zr;
        const rr = Sr(Wr);
        Qr.set(rr, [...null !== (Zr = Qr.get(rr)) && void 0 !== Zr ? Zr : [], Wr])
      }
      return [...Qr.values()]
    }
  },
  7561: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ShaderPackPublishForm: () => nr
    });
    var Zr = Qr(72),
      Wr = Qr(7533),
      ar = Qr(213),
      jr = Qr(6007),
      Ir = Qr(1448),
      fr = Qr(1576),
      Er = Qr(1804),
      pr = Qr(1181),
      xr = Qr(7567),
      mr = Qr(7573),
      Nr = Qr(1629),
      Ur = Qr(1251),
      tr = Qr(7575),
      hr = Qr(7610),
      zr = Qr(7526),
      Yr = Qr(1338);

    function nr(rr) {
      var Sr, Qr, xr;
      let {
        existing: nr,
        onPublished: Kr
      } = rr;
      const {
        t: Br
      } = (0, Ur.E)(), {
        userContext: Tr,
        isUserContextUpdating: vr
      } = (0, pr.c)(), [Or, Lr] = (0, Zr.useState)(null), [lr, Xr] = (0, Zr.useState)(0), [Pr, Hr] = (0, Zr.useState)(null !== (Sr = null === nr || void 0 === nr ? void 0 : nr.name) && void 0 !== Sr ? Sr : ""), qr = (0, Zr.useRef)(Pr), Rr = (0, Zr.useRef)(""), gr = rr => {
        qr.current = rr, Hr(rr)
      }, [Cr, Mr] = (0, Zr.useState)(null !== (Qr = null === nr || void 0 === nr ? void 0 : nr.description) && void 0 !== Qr ? Qr : ""), Gr = (0, Zr.useRef)(Cr), kr = (0, Zr.useRef)(""), Ar = rr => {
        Gr.current = rr, Mr(rr)
      }, [Vr, ir] = (0, Zr.useState)(!1), {
        loading: wr,
        error: cr,
        setError: Fr,
        onFiles: or
      } = (0, mr.e)((async rr => {
        const Sr = await (0, tr.loadPageShaderPackCompiler)();
        if (!Sr) return void Fr(Br("shaderPack:compilerUnavailable"));
        const Qr = await (0, hr.e)(Sr, rr.files);
        if (Lr({
            pack: rr,
            validation: Qr,
            sourceBytes: (0, jr.z)(rr.files)
          }), !nr) {
          var Zr;
          if ("" !== qr.current.trim() && qr.current !== Rr.current || (Rr.current = (0, Wr.L)(rr.manifest.name.trim(), Wr.z), gr(Rr.current)), "" === Gr.current.trim() || Gr.current === kr.current) kr.current = (0, Wr.L)((null !== (Zr = rr.manifest.description) && void 0 !== Zr ? Zr : "").trim(), Wr.q), Ar(kr.current);
          Xr((rr => rr + 1))
        }
      })), br = !vr && !Tr.isLoggedIn() && !ar.d.offlineMode, Jr = Pr.trim(), Dr = Jr.length < Wr.C, dr = null !== Or && !1 !== (null === (xr = Or.validation) || void 0 === xr ? void 0 : xr.ok) && !wr && !Dr && !br && !vr;
      return (0, Yr.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Yr.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: nr ? Br("shaderPackListing:uploadIntro", {
            minutes: String(Wr.E / 6e4)
          }) : Br("shaderPackListing:publishIntro")
        }), (0, Yr.jsx)(yr, {}), br && (0, Yr.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Br("shaderPackListing:publishNeedsLogin")
        }), (0, Yr.jsx)(mr.c, {
          busy: wr,
          disabled: wr || Vr,
          onFiles: rr => {
            Lr(null), or(rr)
          }
        }), Or && (0, Yr.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Yr.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Or.pack.manifest.name
          }), (0, Yr.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Br("shaderPackListing:sizeValue", {
              kilobytes: String((0, zr.R)(Or.sourceBytes))
            }), " \xb7", " ", Br("shaderPackListing:filesValue", {
              files: String(Or.pack.files.length)
            })]
          }), (0, Yr.jsx)(er, {
            picked: Or
          })]
        }), !nr && (0, Yr.jsxs)(Yr.Fragment, {
          children: [(0, Yr.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Yr.jsx)("span", {
              children: Br("general:name")
            }), (0, Yr.jsx)(Er.b, {
              className: "ShaderPackPublishInput",
              defaultValue: Pr,
              maxLength: Wr.z,
              onValueChange: gr
            }, lr), Or && Dr && (0, Yr.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Br("shaderPackListing:nameTooShort", {
                min: String(Wr.C)
              })
            })]
          }), (0, Yr.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Yr.jsx)("span", {
              children: Br("general:description")
            }), (0, Yr.jsx)(Er.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Cr,
              maxLength: Wr.q,
              onValueChange: Ar,
              useTextarea: !0
            }, lr)]
          })]
        }), cr && (0, Yr.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: cr
        }), (0, Yr.jsxs)(fr.p, {
          className: "ShaderPackPublishButton",
          disabled: !dr,
          loading: Vr,
          onClick: () => {
            !async function() {
              var rr;
              if (!Or) return;
              const {
                name: Sr,
                description: Qr
              } = null !== nr && void 0 !== nr ? nr : {
                name: Jr,
                description: Cr.trim()
              }, Zr = {
                packId: null !== (rr = null === nr || void 0 === nr ? void 0 : nr.packId) && void 0 !== rr ? rr : null,
                name: Sr,
                description: Qr,
                apiVersion: Or.pack.manifest.apiVersion,
                files: (0, jr.w)(Or.pack.files),
                keepCircleShadows: !0 === Or.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Zr)).byteLength > 1024 * Wr.K) Fr(Br("shaderPackListing:publishTooBig", {
                kilobytes: String(Wr.K)
              }));
              else {
                ir(!0), Fr(null);
                try {
                  Kr(await Nr.c.publishShaderPack(Tr, Zr))
                } catch (ar) {
                  console.error("Failed to publish the shader pack", ar), Fr((0, zr.z)(ar, Br, "shaderPackListing:publishFailed"))
                } finally {
                  ir(!1)
                }
              }
            }()
          },
          children: [(0, Yr.jsx)(Ir.c, {
            name: "upload"
          }), " ", Br(nr ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function er(rr) {
      let {
        picked: Sr
      } = rr;
      const {
        t: Qr
      } = (0, Ur.E)(), {
        validation: Zr
      } = Sr;
      return null === Zr ? (0, Yr.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Qr("shaderPackListing:publishUnchecked")
      }) : Zr.ok ? (0, Yr.jsxs)(Yr.Fragment, {
        children: [(0, Yr.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Yr.jsx)(Ir.c, {
            name: "circle-check"
          }), " ", Qr("shaderPackListing:publishReady")]
        }), Zr.offInStrict.length > 0 && (0, Yr.jsxs)(Yr.Fragment, {
          children: [(0, Yr.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Yr.jsx)(Ir.c, {
              name: "triangle-exclamation"
            }), " ", Qr("shaderPack:offInStrict")]
          }), (0, Yr.jsx)(xr.e, {
            diagnostics: Zr.offInStrict,
            t: Qr
          })]
        })]
      }) : (0, Yr.jsxs)(Yr.Fragment, {
        children: [(0, Yr.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Yr.jsx)(Ir.c, {
            name: "triangle-exclamation"
          }), " ", Qr("shaderPackListing:publishHasErrors")]
        }), (0, Yr.jsx)(xr.e, {
          diagnostics: Zr.errors,
          more: Zr.moreErrors,
          t: Qr
        })]
      })
    }
    const Kr = "\0";

    function yr() {
      const {
        t: rr
      } = (0, Ur.E)(), [Sr, Qr] = rr("shaderPackListing:bloxdhubHelp", {
        site: Kr
      }).split(Kr);
      return (0, Yr.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Sr, (0, Yr.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Wr.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Wr.c
        }), Qr]
      })
    }
  },
  6005: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.j,
      e: () => Wr,
      i: () => Zr.r
    });
    var Zr = Qr(6007);
    const Wr = [!1, !0].flatMap((rr => ["terrain", "liquid", "model"].map((Sr => ({
      strict: rr,
      program: Sr
    })))))
  },
  6007: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Ir,
      g: () => jr,
      j: () => Zr,
      k: () => tr,
      n: () => xr,
      r: () => Wr,
      s: () => ar,
      v: () => Er,
      w: () => pr,
      z: () => mr
    });
    const Zr = 5;

    function Wr(rr) {
      return rr === Zr
    }

    function ar(rr) {
      return [...rr.features]
    }
    const jr = 262144,
      Ir = 256,
      fr = 256;

    function Er(rr) {
      if ("object" !== typeof rr || null === rr || Array.isArray(rr)) return "The pack has no files.";
      const Sr = [];
      for (const [Qr, Zr] of Object.entries(rr)) {
        if ("string" !== typeof Zr) return `${Qr} isn't text.`;
        Sr.push({
          path: Qr,
          source: Zr
        })
      }
      return Sr.sort(((rr, Sr) => xr(rr.path, Sr.path))),
        function(rr) {
          if (0 === rr.length) return "The pack has no .wgsl files.";
          if (rr.length > Ir) return `The pack has more than ${Ir} .wgsl files.`;
          const Sr = new Set;
          for (const {
              path: Qr
            }
            of rr) {
            const rr = Nr(Qr);
            if (null !== rr) return rr;
            if (Sr.has(Qr)) return `The pack has two files at ${Qr}.`;
            Sr.add(Qr)
          }
          return mr(rr) > jr ? `The pack's .wgsl files are over ${jr/1024} KB in total.` : null
        }(Sr) ?? Sr
    }

    function pr(rr) {
      const Sr = {};
      for (const Qr of rr) Sr[Qr.path] = Qr.source;
      return Sr
    }

    function xr(rr, Sr) {
      return rr < Sr ? -1 : rr > Sr ? 1 : 0
    }

    function mr(rr) {
      const Sr = new TextEncoder;
      let Qr = 0;
      for (const {
          source: Zr
        }
        of rr) Qr += Sr.encode(Zr).byteLength;
      return Qr
    }

    function Nr(rr) {
      if (!rr.toLowerCase().endsWith(".wgsl")) return `${rr} isn't a .wgsl file.`;
      if (rr.length > fr) return `A file path is over ${fr} characters.`;
      if (rr.includes("\\") || /[\u0000-\u001f]/.test(rr)) return `${rr} isn't a valid file path.`;
      return rr.split("/").some((rr => "" === rr || "." === rr || ".." === rr)) ? `${rr} isn't a valid file path.` : null
    }
    const Ur = /^(.*)\[rot\[([1-4])$/;

    function tr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Zr = new Map;
      Sr.forEach(((rr, Sr) => {
        let {
          numAnimStates: Qr,
          animStartIdx: Wr
        } = rr;
        for (let ar = 1; ar < Qr; ar++) Zr.set(Wr + ar - 1, Sr)
      }));
      const Wr = Object.entries(rr),
        ar = new Map;
      for (const [tr, hr] of Wr) {
        const rr = Ur.exec(tr);
        "1" === rr?.[2] && ar.set(rr[1], hr + 1)
      }
      const jr = rr => {
          const Sr = Ur.exec(rr);
          return Sr && ar.has(Sr[1]) ? {
            root: Sr[1],
            rotation: Number(Sr[2]) - 1
          } : null
        },
        Ir = new Set(Wr.map((rr => {
          let [Sr] = rr;
          return jr(Sr)?.root ?? Sr
        }))),
        fr = (rr, Qr) => {
          const Zr = rr.replace(/_?0$/, "");
          return (Sr[Qr]?.numAnimStates ?? 0) > 1 && !Ir.has(Zr) ? Zr : rr
        },
        Er = new Map;
      for (const [Ur, tr] of Wr) Er.set(tr, fr(jr(Ur)?.root ?? Ur, tr));
      const pr = Wr.reduce(((rr, Sr) => {
          let [, Qr] = Sr;
          return Math.max(rr, Qr + 1)
        }), 0),
        xr = Array.from({
          length: pr
        }, ((rr, Sr) => ({
          id: Sr + 1,
          rotation: 0
        }))),
        mr = new Map,
        Nr = new Map;
      for (const [Ur, tr] of Wr) {
        const rr = jr(Ur),
          Sr = Zr.get(tr);
        if (void 0 !== Sr) {
          const Qr = Er.get(Sr);
          Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "frame"
          }), rr && !Nr.has(rr.root) && Nr.set(rr.root, {
            name: rr.root,
            texture: Qr,
            kind: "frame"
          });
          continue
        }
        const Qr = Er.get(tr),
          Wr = rr?.root ?? Ur;
        if (Qr !== Wr && Nr.set(Wr, {
            name: Wr,
            texture: Qr,
            kind: "frame"
          }), rr) {
          const Sr = ar.get(rr.root);
          xr[tr] = {
            id: Sr,
            rotation: rr.rotation
          }, mr.set(Qr, Sr), Nr.set(Ur, {
            name: Ur,
            texture: Qr,
            kind: "rotation"
          })
        } else mr.set(Qr, tr + 1)
      }
      for (const Ur of mr.keys()) Nr.delete(Ur);
      for (const [Ur, tr] of Qr) {
        const rr = mr.get(tr);
        void 0 === rr || mr.has(Ur) || (mr.set(Ur, rr), Nr.delete(Ur))
      }
      return {
        named: [...mr].sort(((rr, Sr) => {
          let [Qr] = rr, [Zr] = Sr;
          return Qr < Zr ? -1 : Qr > Zr ? 1 : 0
        })).map((rr => {
          let [Sr, Qr] = rr;
          return {
            name: Sr,
            id: Qr
          }
        })),
        aliases: [...Nr.values()],
        layers: xr
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);