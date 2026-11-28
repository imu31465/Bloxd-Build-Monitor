export const id = 135;
export const ids = [135];
export const modules = {
  6116: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ib,
      g: () => Lb
    });
    var eb = Mb(64),
      Hb = Mb(1616),
      pb = Mb(1259),
      Vb = Mb(110),
      gb = Mb(4498),
      lb = Mb(1364);

    function Lb() {
      return !(0, Vb.isMobile)()
    }

    function Ib(bb) {
      let {
        disabled: wb,
        openFolderPicker: Mb,
        onFiles: Vb
      } = bb;
      const {
        t: Ib
      } = (0, pb.C)(), Ob = (0, eb.useRef)(null);
      return (0, lb.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, lb.jsx)("input", {
          ref: Ob,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(bb) {
            const wb = Array.from(bb.target.files);
            bb.target.value = "", Vb(wb)
          }
        }), Lb() && (0, lb.jsx)(Hb.f, {
          disabled: wb,
          onClick: Mb,
          children: Ib("general:chooseFolder")
        }), (0, lb.jsx)(Hb.f, {
          disabled: wb,
          onClick: () => {
            (0, gb.f)(Ob.current)
          },
          children: Ib("general:chooseZip")
        })]
      })
    }
  },
  6098: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb,
      h: () => Vb,
      i: () => pb
    });
    var eb = Mb(6105);
    const Hb = [bb => bb.strict ? "strict" : "nonStrict", bb => bb.program];

    function pb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const eb = {};
      for (const Hb in Mb) eb[Hb] = `\0${Hb}\0`;
      return bb(wb, eb).replace(/\0(\w+)\0/g, ((bb, wb) => Mb[wb]))
    }

    function Vb(bb) {
      return null === bb.file ? null : bb.line > 0 ? `${bb.file}:${bb.line}` : bb.file
    }

    function gb(bb) {
      const wb = new Map(bb.map((bb => [lb(bb).join("."), bb])));
      if (0 === wb.size) return [];
      const Mb = Ib([...wb.values()]);
      return 0 === Mb[0].length ? [] : Mb
    }

    function lb(bb) {
      return Hb.map((wb => wb(bb)))
    }
    const Lb = Hb.map((bb => new Set(eb.f.map(bb)).size));

    function Ib(bb) {
      const wb = Hb.map((wb => new Set(bb.map(wb)))),
        Mb = wb.reduce(((bb, wb) => bb * wb.size), 1),
        eb = wb.every(((bb, wb) => 1 === bb.size || bb.size === Lb[wb]));
      if (Mb === bb.length && eb) return [Hb.filter(((bb, Mb) => 1 === wb[Mb].size)).map((wb => wb(bb[0])))];
      let pb = null;
      for (let Vb = 0; Vb < Hb.length; Vb++) {
        if (1 === wb[Vb].size) continue;
        const Mb = Ob(bb, Hb[Vb]).flatMap(Ib);
        (null === pb || Mb.length < pb.length) && (pb = Mb)
      }
      return pb
    }

    function Ob(bb, wb) {
      const Mb = new Map;
      for (const Hb of bb) {
        var eb;
        const bb = wb(Hb);
        Mb.set(bb, [...null !== (eb = Mb.get(bb)) && void 0 !== eb ? eb : [], Hb])
      }
      return [...Mb.values()]
    }
  },
  7784: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ShaderPackPublishForm: () => mb
    });
    var eb = Mb(64),
      Hb = Mb(7760),
      pb = Mb(232),
      Vb = Mb(6110),
      gb = Mb(1475),
      lb = Mb(1616),
      Lb = Mb(1876),
      Ib = Mb(1179),
      Ob = Mb(7787),
      Ub = Mb(7795),
      tb = Mb(1677),
      Cb = Mb(1259),
      Eb = Mb(7798),
      Fb = Mb(7833),
      Bb = Mb(7754),
      sb = Mb(1364);

    function mb(bb) {
      var wb, Mb, Ob;
      let {
        existing: mb,
        onPublished: zb
      } = bb;
      const {
        t: xb
      } = (0, Cb.C)(), {
        userContext: jb,
        isUserContextUpdating: Kb
      } = (0, Ib.e)(), [rb, Rb] = (0, eb.useState)(null), [Db, cb] = (0, eb.useState)(0), [Yb, Zb] = (0, eb.useState)(null !== (wb = null === mb || void 0 === mb ? void 0 : mb.name) && void 0 !== wb ? wb : ""), fb = (0, eb.useRef)(Yb), Ab = (0, eb.useRef)(""), Wb = bb => {
        fb.current = bb, Zb(bb)
      }, [Jb, Sb] = (0, eb.useState)(null !== (Mb = null === mb || void 0 === mb ? void 0 : mb.description) && void 0 !== Mb ? Mb : ""), Nb = (0, eb.useRef)(Jb), vb = (0, eb.useRef)(""), Qb = bb => {
        Nb.current = bb, Sb(bb)
      }, [Gb, qb] = (0, eb.useState)(!1), {
        loading: ab,
        error: ib,
        setError: ub,
        onFiles: db
      } = (0, Ub.f)((async bb => {
        const wb = await (0, Eb.loadPageShaderPackCompiler)();
        if (!wb) return void ub(xb("shaderPack:compilerUnavailable"));
        const Mb = await (0, Fb.d)(wb, bb.files);
        if (Rb({
            pack: bb,
            validation: Mb,
            sourceBytes: (0, Vb.x)(bb.files)
          }), !mb) {
          var eb;
          if ("" !== fb.current.trim() && fb.current !== Ab.current || (Ab.current = (0, Hb.T)(bb.manifest.name.trim(), Hb.G), Wb(Ab.current)), "" === Nb.current.trim() || Nb.current === vb.current) vb.current = (0, Hb.T)((null !== (eb = bb.manifest.description) && void 0 !== eb ? eb : "").trim(), Hb.y), Qb(vb.current);
          cb((bb => bb + 1))
        }
      })), Pb = !Kb && !jb.isLoggedIn() && !pb.d.offlineMode, nb = Yb.trim(), yb = nb.length < Hb.H, ob = null !== rb && !1 !== (null === (Ob = rb.validation) || void 0 === Ob ? void 0 : Ob.ok) && !ab && !yb && !Pb && !Kb;
      return (0, sb.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, sb.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: mb ? xb("shaderPackListing:uploadIntro", {
            minutes: String(Hb.J / 6e4)
          }) : xb("shaderPackListing:publishIntro")
        }), (0, sb.jsx)(Xb, {}), Pb && (0, sb.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: xb("shaderPackListing:publishNeedsLogin")
        }), (0, sb.jsx)(Ub.c, {
          busy: ab,
          disabled: ab || Gb,
          onFiles: bb => {
            Rb(null), db(bb)
          }
        }), rb && (0, sb.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, sb.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: rb.pack.manifest.name
          }), (0, sb.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [xb("shaderPackListing:sizeValue", {
              kilobytes: String((0, Bb.I)(rb.sourceBytes))
            }), " \xb7", " ", xb("shaderPackListing:filesValue", {
              files: String(rb.pack.files.length)
            })]
          }), (0, sb.jsx)(hb, {
            picked: rb
          })]
        }), !mb && (0, sb.jsxs)(sb.Fragment, {
          children: [(0, sb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, sb.jsx)("span", {
              children: xb("general:name")
            }), (0, sb.jsx)(Lb.d, {
              className: "ShaderPackPublishInput",
              defaultValue: Yb,
              maxLength: Hb.G,
              onValueChange: Wb
            }, Db), rb && yb && (0, sb.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: xb("shaderPackListing:nameTooShort", {
                min: String(Hb.H)
              })
            })]
          }), (0, sb.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, sb.jsx)("span", {
              children: xb("general:description")
            }), (0, sb.jsx)(Lb.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Jb,
              maxLength: Hb.y,
              onValueChange: Qb,
              useTextarea: !0
            }, Db)]
          })]
        }), ib && (0, sb.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: ib
        }), (0, sb.jsxs)(lb.p, {
          className: "ShaderPackPublishButton",
          disabled: !ob,
          loading: Gb,
          onClick: () => {
            !async function() {
              var bb;
              if (!rb) return;
              const {
                name: wb,
                description: Mb
              } = null !== mb && void 0 !== mb ? mb : {
                name: nb,
                description: Jb.trim()
              }, eb = {
                packId: null !== (bb = null === mb || void 0 === mb ? void 0 : mb.packId) && void 0 !== bb ? bb : null,
                name: wb,
                description: Mb,
                apiVersion: rb.pack.manifest.apiVersion,
                files: (0, Vb.t)(rb.pack.files),
                keepCircleShadows: !0 === rb.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(eb)).byteLength > 1024 * Hb.S) ub(xb("shaderPackListing:publishTooBig", {
                kilobytes: String(Hb.S)
              }));
              else {
                qb(!0), ub(null);
                try {
                  zb(await tb.e.publishShaderPack(jb, eb))
                } catch (pb) {
                  console.error("Failed to publish the shader pack", pb), ub((0, Bb.t)(pb, xb, "shaderPackListing:publishFailed"))
                } finally {
                  qb(!1)
                }
              }
            }()
          },
          children: [(0, sb.jsx)(gb.b, {
            name: "upload"
          }), " ", xb(mb ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function hb(bb) {
      let {
        picked: wb
      } = bb;
      const {
        t: Mb
      } = (0, Cb.C)(), {
        validation: eb
      } = wb;
      return null === eb ? (0, sb.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Mb("shaderPackListing:publishUnchecked")
      }) : eb.ok ? (0, sb.jsxs)(sb.Fragment, {
        children: [(0, sb.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, sb.jsx)(gb.b, {
            name: "circle-check"
          }), " ", Mb("shaderPackListing:publishReady")]
        }), eb.offInStrict.length > 0 && (0, sb.jsxs)(sb.Fragment, {
          children: [(0, sb.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, sb.jsx)(gb.b, {
              name: "triangle-exclamation"
            }), " ", Mb("shaderPack:offInStrict")]
          }), (0, sb.jsx)(Ob.e, {
            diagnostics: eb.offInStrict,
            t: Mb
          })]
        })]
      }) : (0, sb.jsxs)(sb.Fragment, {
        children: [(0, sb.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, sb.jsx)(gb.b, {
            name: "triangle-exclamation"
          }), " ", Mb("shaderPackListing:publishHasErrors")]
        }), (0, sb.jsx)(Ob.e, {
          diagnostics: eb.errors,
          more: eb.moreErrors,
          t: Mb
        })]
      })
    }
    const zb = "\0";

    function Xb() {
      const {
        t: bb
      } = (0, Cb.C)(), [wb, Mb] = bb("shaderPackListing:bloxdhubHelp", {
        site: zb
      }).split(zb);
      return (0, sb.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [wb, (0, sb.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Hb.j,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Hb.e
        }), Mb]
      })
    }
  },
  6105: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g,
      f: () => Hb,
      h: () => eb.j
    });
    var eb = Mb(6110);
    const Hb = [!1, !0].flatMap((bb => ["terrain", "liquid", "model"].map((wb => ({
      strict: bb,
      program: wb
    })))))
  },
  6110: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      e: () => Vb,
      g: () => eb,
      h: () => Eb,
      i: () => Ob,
      j: () => Hb,
      l: () => pb,
      p: () => Lb,
      t: () => Ib,
      x: () => Ub
    });
    const eb = 5;

    function Hb(bb) {
      return bb === eb
    }

    function pb(bb) {
      return [...bb.features]
    }
    const Vb = 262144,
      gb = 256,
      lb = 256;

    function Lb(bb) {
      if ("object" !== typeof bb || null === bb || Array.isArray(bb)) return "The pack has no files.";
      const wb = [];
      for (const [Mb, eb] of Object.entries(bb)) {
        if ("string" !== typeof eb) return `${Mb} isn't text.`;
        wb.push({
          path: Mb,
          source: eb
        })
      }
      return wb.sort(((bb, wb) => Ob(bb.path, wb.path))),
        function(bb) {
          if (0 === bb.length) return "The pack has no .wgsl files.";
          if (bb.length > gb) return `The pack has more than ${gb} .wgsl files.`;
          const wb = new Set;
          for (const {
              path: Mb
            }
            of bb) {
            const bb = tb(Mb);
            if (null !== bb) return bb;
            if (wb.has(Mb)) return `The pack has two files at ${Mb}.`;
            wb.add(Mb)
          }
          return Ub(bb) > Vb ? `The pack's .wgsl files are over ${Vb/1024} KB in total.` : null
        }(wb) ?? wb
    }

    function Ib(bb) {
      const wb = {};
      for (const Mb of bb) wb[Mb.path] = Mb.source;
      return wb
    }

    function Ob(bb, wb) {
      return bb < wb ? -1 : bb > wb ? 1 : 0
    }

    function Ub(bb) {
      const wb = new TextEncoder;
      let Mb = 0;
      for (const {
          source: eb
        }
        of bb) Mb += wb.encode(eb).byteLength;
      return Mb
    }

    function tb(bb) {
      if (!bb.toLowerCase().endsWith(".wgsl")) return `${bb} isn't a .wgsl file.`;
      if (bb.length > lb) return `A file path is over ${lb} characters.`;
      if (bb.includes("\\") || /[\u0000-\u001f]/.test(bb)) return `${bb} isn't a valid file path.`;
      return bb.split("/").some((bb => "" === bb || "." === bb || ".." === bb)) ? `${bb} isn't a valid file path.` : null
    }
    const Cb = /^(.*)\[rot\[([1-4])$/;

    function Eb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const eb = new Map;
      wb.forEach(((bb, wb) => {
        let {
          numAnimStates: Mb,
          animStartIdx: Hb
        } = bb;
        for (let pb = 1; pb < Mb; pb++) eb.set(Hb + pb - 1, wb)
      }));
      const Hb = Object.entries(bb),
        pb = new Map;
      for (const [Eb, Fb] of Hb) {
        const bb = Cb.exec(Eb);
        "1" === bb?.[2] && pb.set(bb[1], Fb + 1)
      }
      const Vb = bb => {
          const wb = Cb.exec(bb);
          return wb && pb.has(wb[1]) ? {
            root: wb[1],
            rotation: Number(wb[2]) - 1
          } : null
        },
        gb = new Set(Hb.map((bb => {
          let [wb] = bb;
          return Vb(wb)?.root ?? wb
        }))),
        lb = (bb, Mb) => {
          const eb = bb.replace(/_?0$/, "");
          return (wb[Mb]?.numAnimStates ?? 0) > 1 && !gb.has(eb) ? eb : bb
        },
        Lb = new Map;
      for (const [Cb, Eb] of Hb) Lb.set(Eb, lb(Vb(Cb)?.root ?? Cb, Eb));
      const Ib = Hb.reduce(((bb, wb) => {
          let [, Mb] = wb;
          return Math.max(bb, Mb + 1)
        }), 0),
        Ob = Array.from({
          length: Ib
        }, ((bb, wb) => ({
          id: wb + 1,
          rotation: 0
        }))),
        Ub = new Map,
        tb = new Map;
      for (const [Cb, Eb] of Hb) {
        const bb = Vb(Cb),
          wb = eb.get(Eb);
        if (void 0 !== wb) {
          const Mb = Lb.get(wb);
          tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "frame"
          }), bb && !tb.has(bb.root) && tb.set(bb.root, {
            name: bb.root,
            texture: Mb,
            kind: "frame"
          });
          continue
        }
        const Mb = Lb.get(Eb),
          Hb = bb?.root ?? Cb;
        if (Mb !== Hb && tb.set(Hb, {
            name: Hb,
            texture: Mb,
            kind: "frame"
          }), bb) {
          const wb = pb.get(bb.root);
          Ob[Eb] = {
            id: wb,
            rotation: bb.rotation
          }, Ub.set(Mb, wb), tb.set(Cb, {
            name: Cb,
            texture: Mb,
            kind: "rotation"
          })
        } else Ub.set(Mb, Eb + 1)
      }
      for (const Cb of Ub.keys()) tb.delete(Cb);
      for (const [Cb, Eb] of Mb) {
        const bb = Ub.get(Eb);
        void 0 === bb || Ub.has(Cb) || (Ub.set(Cb, bb), tb.delete(Cb))
      }
      return {
        named: [...Ub].sort(((bb, wb) => {
          let [Mb] = bb, [eb] = wb;
          return Mb < eb ? -1 : Mb > eb ? 1 : 0
        })).map((bb => {
          let [wb, Mb] = bb;
          return {
            name: wb,
            id: Mb
          }
        })),
        aliases: [...tb.values()],
        layers: Ob
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);