export const id = 114;
export const ids = [114];
export const modules = {
  5228: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Xt,
      g: () => Ht
    });
    var Ot = Vt(63),
      qt = Vt(1556),
      Dt = Vt(1286),
      mt = Vt(106),
      dt = Vt(3207),
      jt = Vt(1188);

    function Ht() {
      return !(0, mt.isMobile)()
    }

    function Xt(tt) {
      let {
        disabled: et,
        openFolderPicker: Vt,
        onFiles: mt
      } = tt;
      const {
        t: Xt
      } = (0, Dt.H)(), Qt = (0, Ot.useRef)(null);
      return (0, jt.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, jt.jsx)("input", {
          ref: Qt,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(tt) {
            const et = Array.from(tt.target.files);
            tt.target.value = "", mt(et)
          }
        }), Ht() && (0, jt.jsx)(qt.f, {
          disabled: et,
          onClick: Vt,
          children: Xt("general:chooseFolder")
        }), (0, jt.jsx)(qt.f, {
          disabled: et,
          onClick: () => {
            (0, dt.f)(Qt.current)
          },
          children: Xt("general:chooseZip")
        })]
      })
    }
  },
  5208: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => dt,
      f: () => mt,
      j: () => Dt
    });
    var Ot = Vt(5216);
    const qt = [tt => tt.strict ? "strict" : "nonStrict", tt => tt.program];

    function Dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Ot = {};
      for (const qt in Vt) Ot[qt] = `\0${qt}\0`;
      return tt(et, Ot).replace(/\0(\w+)\0/g, ((tt, et) => Vt[et]))
    }

    function mt(tt) {
      return null === tt.file ? null : tt.line > 0 ? `${tt.file}:${tt.line}` : tt.file
    }

    function dt(tt) {
      const et = new Map(tt.map((tt => [jt(tt).join("."), tt])));
      if (0 === et.size) return [];
      const Vt = Xt([...et.values()]);
      return 0 === Vt[0].length ? [] : Vt
    }

    function jt(tt) {
      return qt.map((et => et(tt)))
    }
    const Ht = qt.map((tt => new Set(Ot.g.map(tt)).size));

    function Xt(tt) {
      const et = qt.map((et => new Set(tt.map(et)))),
        Vt = et.reduce(((tt, et) => tt * et.size), 1),
        Ot = et.every(((tt, et) => 1 === tt.size || tt.size === Ht[et]));
      if (Vt === tt.length && Ot) return [qt.filter(((tt, Vt) => 1 === et[Vt].size)).map((et => et(tt[0])))];
      let Dt = null;
      for (let mt = 0; mt < qt.length; mt++) {
        if (1 === et[mt].size) continue;
        const Vt = Qt(tt, qt[mt]).flatMap(Xt);
        (null === Dt || Vt.length < Dt.length) && (Dt = Vt)
      }
      return Dt
    }

    function Qt(tt, et) {
      const Vt = new Map;
      for (const qt of tt) {
        var Ot;
        const tt = et(qt);
        Vt.set(tt, [...null !== (Ot = Vt.get(tt)) && void 0 !== Ot ? Ot : [], qt])
      }
      return [...Vt.values()]
    }
  },
  6797: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ShaderPackPublishForm: () => bt
    });
    var Ot = Vt(63),
      qt = Vt(6756),
      Dt = Vt(233),
      mt = Vt(5223),
      dt = Vt(1152),
      jt = Vt(1556),
      Ht = Vt(1770),
      Xt = Vt(1218),
      Qt = Vt(6801),
      lt = Vt(6810),
      Et = Vt(1600),
      ft = Vt(1286),
      wt = Vt(6816),
      yt = Vt(6857),
      Nt = Vt(6754),
      Mt = Vt(1188);

    function bt(tt) {
      var et, Vt, Qt;
      let {
        existing: bt,
        onPublished: Ct
      } = tt;
      const {
        t: Kt
      } = (0, ft.H)(), {
        userContext: ht,
        isUserContextUpdating: vt
      } = (0, Xt.d)(), [Wt, St] = (0, Ot.useState)(null), [ct, Rt] = (0, Ot.useState)(0), [It, Pt] = (0, Ot.useState)(null !== (et = null === bt || void 0 === bt ? void 0 : bt.name) && void 0 !== et ? et : ""), Zt = (0, Ot.useRef)(It), Lt = (0, Ot.useRef)(""), Ft = tt => {
        Zt.current = tt, Pt(tt)
      }, [kt, Gt] = (0, Ot.useState)(null !== (Vt = null === bt || void 0 === bt ? void 0 : bt.description) && void 0 !== Vt ? Vt : ""), zt = (0, Ot.useRef)(kt), ot = (0, Ot.useRef)(""), rt = tt => {
        zt.current = tt, Gt(tt)
      }, [Ut, At] = (0, Ot.useState)(!1), {
        loading: it,
        error: Yt,
        setError: Bt,
        onFiles: pt
      } = (0, lt.e)((async tt => {
        const et = await (0, wt.loadPageShaderPackCompiler)();
        if (!et) return void Bt(Kt("shaderPack:compilerUnavailable"));
        const Vt = await (0, yt.f)(et, tt.files);
        if (St({
            pack: tt,
            validation: Vt,
            sourceBytes: (0, mt.E)(tt.files)
          }), !bt) {
          var Ot;
          if ("" !== Zt.current.trim() && Zt.current !== Lt.current || (Lt.current = (0, qt.P)(tt.manifest.name.trim(), qt.B), Ft(Lt.current)), "" === zt.current.trim() || zt.current === ot.current) ot.current = (0, qt.P)((null !== (Ot = tt.manifest.description) && void 0 !== Ot ? Ot : "").trim(), qt.u), rt(ot.current);
          Rt((tt => tt + 1))
        }
      })), xt = !vt && !ht.isLoggedIn() && !Dt.b.offlineMode, Tt = It.trim(), gt = Tt.length < qt.E, st = null !== Wt && !1 !== (null === (Qt = Wt.validation) || void 0 === Qt ? void 0 : Qt.ok) && !it && !gt && !xt && !vt;
      return (0, Mt.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Mt.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: bt ? Kt("shaderPackListing:uploadIntro", {
            minutes: String(qt.H / 6e4)
          }) : Kt("shaderPackListing:publishIntro")
        }), (0, Mt.jsx)(ut, {}), xt && (0, Mt.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Kt("shaderPackListing:publishNeedsLogin")
        }), (0, Mt.jsx)(lt.d, {
          busy: it,
          disabled: it || Ut,
          onFiles: tt => {
            St(null), pt(tt)
          }
        }), Wt && (0, Mt.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Mt.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Wt.pack.manifest.name
          }), (0, Mt.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Kt("shaderPackListing:sizeValue", {
              kilobytes: String((0, Nt.U)(Wt.sourceBytes))
            }), " \xb7", " ", Kt("shaderPackListing:filesValue", {
              files: String(Wt.pack.files.length)
            })]
          }), (0, Mt.jsx)(Jt, {
            picked: Wt
          })]
        }), !bt && (0, Mt.jsxs)(Mt.Fragment, {
          children: [(0, Mt.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Mt.jsx)("span", {
              children: Kt("general:name")
            }), (0, Mt.jsx)(Ht.d, {
              className: "ShaderPackPublishInput",
              defaultValue: It,
              maxLength: qt.B,
              onValueChange: Ft
            }, ct), Wt && gt && (0, Mt.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Kt("shaderPackListing:nameTooShort", {
                min: String(qt.E)
              })
            })]
          }), (0, Mt.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Mt.jsx)("span", {
              children: Kt("general:description")
            }), (0, Mt.jsx)(Ht.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: kt,
              maxLength: qt.u,
              onValueChange: rt,
              useTextarea: !0
            }, ct)]
          })]
        }), Yt && (0, Mt.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Yt
        }), (0, Mt.jsxs)(jt.m, {
          className: "ShaderPackPublishButton",
          disabled: !st,
          loading: Ut,
          onClick: () => {
            !async function() {
              var tt;
              if (!Wt) return;
              const {
                name: et,
                description: Vt
              } = null !== bt && void 0 !== bt ? bt : {
                name: Tt,
                description: kt.trim()
              }, Ot = {
                packId: null !== (tt = null === bt || void 0 === bt ? void 0 : bt.packId) && void 0 !== tt ? tt : null,
                name: et,
                description: Vt,
                apiVersion: Wt.pack.manifest.apiVersion,
                files: (0, mt.C)(Wt.pack.files),
                keepCircleShadows: !0 === Wt.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Ot)).byteLength > 1024 * qt.L) Bt(Kt("shaderPackListing:publishTooBig", {
                kilobytes: String(qt.L)
              }));
              else {
                At(!0), Bt(null);
                try {
                  Ct(await Et.e.publishShaderPack(ht, Ot))
                } catch (Dt) {
                  console.error("Failed to publish the shader pack", Dt), Bt((0, Nt.z)(Dt, Kt, "shaderPackListing:publishFailed"))
                } finally {
                  At(!1)
                }
              }
            }()
          },
          children: [(0, Mt.jsx)(dt.b, {
            name: "upload"
          }), " ", Kt(bt ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Jt(tt) {
      let {
        picked: et
      } = tt;
      const {
        t: Vt
      } = (0, ft.H)(), {
        validation: Ot
      } = et;
      return null === Ot ? (0, Mt.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Vt("shaderPackListing:publishUnchecked")
      }) : Ot.ok ? (0, Mt.jsxs)(Mt.Fragment, {
        children: [(0, Mt.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Mt.jsx)(dt.b, {
            name: "circle-check"
          }), " ", Vt("shaderPackListing:publishReady")]
        }), Ot.offInStrict.length > 0 && (0, Mt.jsxs)(Mt.Fragment, {
          children: [(0, Mt.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Mt.jsx)(dt.b, {
              name: "triangle-exclamation"
            }), " ", Vt("shaderPack:offInStrict")]
          }), (0, Mt.jsx)(Qt.b, {
            diagnostics: Ot.offInStrict,
            t: Vt
          })]
        })]
      }) : (0, Mt.jsxs)(Mt.Fragment, {
        children: [(0, Mt.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Mt.jsx)(dt.b, {
            name: "triangle-exclamation"
          }), " ", Vt("shaderPackListing:publishHasErrors")]
        }), (0, Mt.jsx)(Qt.b, {
          diagnostics: Ot.errors,
          more: Ot.moreErrors,
          t: Vt
        })]
      })
    }
    const Ct = "\0";

    function ut() {
      const {
        t: tt
      } = (0, ft.H)(), [et, Vt] = tt("shaderPackListing:bloxdhubHelp", {
        site: Ct
      }).split(Ct);
      return (0, Mt.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [et, (0, Mt.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: qt.k,
          target: "_blank",
          rel: "noopener noreferrer",
          children: qt.e
        }), Vt]
      })
    }
  },
  5216: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.k,
      g: () => qt,
      h: () => Ot.s
    });
    var Ot = Vt(5223);
    const qt = [!1, !0].flatMap((tt => ["terrain", "liquid", "model"].map((et => ({
      strict: tt,
      program: et
    })))))
  },
  5223: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Xt,
      E: () => lt,
      e: () => dt,
      h: () => mt,
      k: () => Ot,
      m: () => wt,
      p: () => Qt,
      s: () => qt,
      u: () => Dt,
      y: () => Ht
    });
    const Ot = 5;

    function qt(tt) {
      return tt === Ot
    }

    function Dt(tt) {
      return [...tt.features]
    }
    const mt = 262144,
      dt = 256,
      jt = 256;

    function Ht(tt) {
      if ("object" !== typeof tt || null === tt || Array.isArray(tt)) return "The pack has no files.";
      const et = [];
      for (const [Vt, Ot] of Object.entries(tt)) {
        if ("string" !== typeof Ot) return `${Vt} isn't text.`;
        et.push({
          path: Vt,
          source: Ot
        })
      }
      return et.sort(((tt, et) => Qt(tt.path, et.path))),
        function(tt) {
          if (0 === tt.length) return "The pack has no .wgsl files.";
          if (tt.length > dt) return `The pack has more than ${dt} .wgsl files.`;
          const et = new Set;
          for (const {
              path: Vt
            }
            of tt) {
            const tt = Et(Vt);
            if (null !== tt) return tt;
            if (et.has(Vt)) return `The pack has two files at ${Vt}.`;
            et.add(Vt)
          }
          return lt(tt) > mt ? `The pack's .wgsl files are over ${mt/1024} KB in total.` : null
        }(et) ?? et
    }

    function Xt(tt) {
      const et = {};
      for (const Vt of tt) et[Vt.path] = Vt.source;
      return et
    }

    function Qt(tt, et) {
      return tt < et ? -1 : tt > et ? 1 : 0
    }

    function lt(tt) {
      const et = new TextEncoder;
      let Vt = 0;
      for (const {
          source: Ot
        }
        of tt) Vt += et.encode(Ot).byteLength;
      return Vt
    }

    function Et(tt) {
      if (!tt.toLowerCase().endsWith(".wgsl")) return `${tt} isn't a .wgsl file.`;
      if (tt.length > jt) return `A file path is over ${jt} characters.`;
      if (tt.includes("\\") || /[\u0000-\u001f]/.test(tt)) return `${tt} isn't a valid file path.`;
      return tt.split("/").some((tt => "" === tt || "." === tt || ".." === tt)) ? `${tt} isn't a valid file path.` : null
    }
    const ft = /^(.*)\[rot\[([1-4])$/;

    function wt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ot = new Map;
      et.forEach(((tt, et) => {
        let {
          numAnimStates: Vt,
          animStartIdx: qt
        } = tt;
        for (let Dt = 1; Dt < Vt; Dt++) Ot.set(qt + Dt - 1, et)
      }));
      const qt = Object.entries(tt),
        Dt = new Map;
      for (const [wt, yt] of qt) {
        const tt = ft.exec(wt);
        "1" === tt?.[2] && Dt.set(tt[1], yt + 1)
      }
      const mt = tt => {
          const et = ft.exec(tt);
          return et && Dt.has(et[1]) ? {
            root: et[1],
            rotation: Number(et[2]) - 1
          } : null
        },
        dt = new Set(qt.map((tt => {
          let [et] = tt;
          return mt(et)?.root ?? et
        }))),
        jt = (tt, Vt) => {
          const Ot = tt.replace(/_?0$/, "");
          return (et[Vt]?.numAnimStates ?? 0) > 1 && !dt.has(Ot) ? Ot : tt
        },
        Ht = new Map;
      for (const [ft, wt] of qt) Ht.set(wt, jt(mt(ft)?.root ?? ft, wt));
      const Xt = qt.reduce(((tt, et) => {
          let [, Vt] = et;
          return Math.max(tt, Vt + 1)
        }), 0),
        Qt = Array.from({
          length: Xt
        }, ((tt, et) => ({
          id: et + 1,
          rotation: 0
        }))),
        lt = new Map,
        Et = new Map;
      for (const [ft, wt] of qt) {
        const tt = mt(ft),
          et = Ot.get(wt);
        if (void 0 !== et) {
          const Vt = Ht.get(et);
          Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "frame"
          }), tt && !Et.has(tt.root) && Et.set(tt.root, {
            name: tt.root,
            texture: Vt,
            kind: "frame"
          });
          continue
        }
        const Vt = Ht.get(wt),
          qt = tt?.root ?? ft;
        if (Vt !== qt && Et.set(qt, {
            name: qt,
            texture: Vt,
            kind: "frame"
          }), tt) {
          const et = Dt.get(tt.root);
          Qt[wt] = {
            id: et,
            rotation: tt.rotation
          }, lt.set(Vt, et), Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "rotation"
          })
        } else lt.set(Vt, wt + 1)
      }
      for (const ft of lt.keys()) Et.delete(ft);
      for (const [ft, wt] of Vt) {
        const tt = lt.get(wt);
        void 0 === tt || lt.has(ft) || (lt.set(ft, tt), Et.delete(ft))
      }
      return {
        named: [...lt].sort(((tt, et) => {
          let [Vt] = tt, [Ot] = et;
          return Vt < Ot ? -1 : Vt > Ot ? 1 : 0
        })).map((tt => {
          let [et, Vt] = tt;
          return {
            name: et,
            id: Vt
          }
        })),
        aliases: [...Et.values()],
        layers: Qt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);