export const id = 135;
export const ids = [135];
export const modules = {
  5958: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      g: () => vd
    });
    var Wd = md(66),
      Fd = md(1572),
      Rd = md(1238),
      Xd = md(107),
      Kd = md(4337),
      hd = md(1341);

    function vd() {
      return !(0, Xd.isMobile)()
    }

    function Qd(dd) {
      let {
        disabled: Od,
        openFolderPicker: md,
        onFiles: Xd
      } = dd;
      const {
        t: Qd
      } = (0, Rd.G)(), td = (0, Wd.useRef)(null);
      return (0, hd.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, hd.jsx)("input", {
          ref: td,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(dd) {
            const Od = Array.from(dd.target.files);
            dd.target.value = "", Xd(Od)
          }
        }), vd() && (0, hd.jsx)(Fd.g, {
          disabled: Od,
          onClick: md,
          children: Qd("general:chooseFolder")
        }), (0, hd.jsx)(Fd.g, {
          disabled: Od,
          onClick: () => {
            (0, Kd.g)(td.current)
          },
          children: Qd("general:chooseZip")
        })]
      })
    }
  },
  5947: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      h: () => Xd,
      i: () => Rd
    });
    var Wd = md(5951);
    const Fd = [dd => dd.strict ? "strict" : "nonStrict", dd => dd.program];

    function Rd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Wd = {};
      for (const Fd in md) Wd[Fd] = `\0${Fd}\0`;
      return dd(Od, Wd).replace(/\0(\w+)\0/g, ((dd, Od) => md[Od]))
    }

    function Xd(dd) {
      return null === dd.file ? null : dd.line > 0 ? `${dd.file}:${dd.line}` : dd.file
    }

    function Kd(dd) {
      const Od = new Map(dd.map((dd => [hd(dd).join("."), dd])));
      if (0 === Od.size) return [];
      const md = Qd([...Od.values()]);
      return 0 === md[0].length ? [] : md
    }

    function hd(dd) {
      return Fd.map((Od => Od(dd)))
    }
    const vd = Fd.map((dd => new Set(Wd.g.map(dd)).size));

    function Qd(dd) {
      const Od = Fd.map((Od => new Set(dd.map(Od)))),
        md = Od.reduce(((dd, Od) => dd * Od.size), 1),
        Wd = Od.every(((dd, Od) => 1 === dd.size || dd.size === vd[Od]));
      if (md === dd.length && Wd) return [Fd.filter(((dd, md) => 1 === Od[md].size)).map((Od => Od(dd[0])))];
      let Rd = null;
      for (let Xd = 0; Xd < Fd.length; Xd++) {
        if (1 === Od[Xd].size) continue;
        const md = td(dd, Fd[Xd]).flatMap(Qd);
        (null === Rd || md.length < Rd.length) && (Rd = md)
      }
      return Rd
    }

    function td(dd, Od) {
      const md = new Map;
      for (const Fd of dd) {
        var Wd;
        const dd = Od(Fd);
        md.set(dd, [...null !== (Wd = md.get(dd)) && void 0 !== Wd ? Wd : [], Fd])
      }
      return [...md.values()]
    }
  },
  7550: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ShaderPackPublishForm: () => pd
    });
    var Wd = md(66),
      Fd = md(7512),
      Rd = md(222),
      Xd = md(5954),
      Kd = md(1443),
      hd = md(1572),
      vd = md(1808),
      Qd = md(1186),
      td = md(7558),
      od = md(7561),
      Nd = md(1627),
      qd = md(1238),
      Hd = md(7566),
      yd = md(7595),
      bd = md(7509),
      Td = md(1341);

    function pd(dd) {
      var Od, md, td;
      let {
        existing: pd,
        onPublished: gd
      } = dd;
      const {
        t: Ed
      } = (0, qd.G)(), {
        userContext: Jd,
        isUserContextUpdating: Ud
      } = (0, Qd.d)(), [xd, Bd] = (0, Wd.useState)(null), [Sd, sd] = (0, Wd.useState)(0), [ud, Vd] = (0, Wd.useState)(null !== (Od = null === pd || void 0 === pd ? void 0 : pd.name) && void 0 !== Od ? Od : ""), Ad = (0, Wd.useRef)(ud), rd = (0, Wd.useRef)(""), Gd = dd => {
        Ad.current = dd, Vd(dd)
      }, [nd, Ld] = (0, Wd.useState)(null !== (md = null === pd || void 0 === pd ? void 0 : pd.description) && void 0 !== md ? md : ""), Pd = (0, Wd.useRef)(nd), zd = (0, Wd.useRef)(""), cd = dd => {
        Pd.current = dd, Ld(dd)
      }, [jd, Dd] = (0, Wd.useState)(!1), {
        loading: ed,
        error: Id,
        setError: ld,
        onFiles: Cd
      } = (0, od.c)((async dd => {
        const Od = await (0, Hd.loadPageShaderPackCompiler)();
        if (!Od) return void ld(Ed("shaderPack:compilerUnavailable"));
        const md = await (0, yd.e)(Od, dd.files);
        if (Bd({
            pack: dd,
            validation: md,
            sourceBytes: (0, Xd.w)(dd.files)
          }), !pd) {
          var Wd;
          if ("" !== Ad.current.trim() && Ad.current !== rd.current || (rd.current = (0, Fd.P)(dd.manifest.name.trim(), Fd.w), Gd(rd.current)), "" === Pd.current.trim() || Pd.current === zd.current) zd.current = (0, Fd.P)((null !== (Wd = dd.manifest.description) && void 0 !== Wd ? Wd : "").trim(), Fd.p), cd(zd.current);
          sd((dd => dd + 1))
        }
      })), Zd = !Ud && !Jd.isLoggedIn() && !Rd.b.offlineMode, kd = ud.trim(), fd = kd.length < Fd.y, Md = null !== xd && !1 !== (null === (td = xd.validation) || void 0 === td ? void 0 : td.ok) && !ed && !fd && !Zd && !Ud;
      return (0, Td.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Td.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: pd ? Ed("shaderPackListing:uploadIntro", {
            minutes: String(Fd.D / 6e4)
          }) : Ed("shaderPackListing:publishIntro")
        }), (0, Td.jsx)(wd, {}), Zd && (0, Td.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Ed("shaderPackListing:publishNeedsLogin")
        }), (0, Td.jsx)(od.b, {
          busy: ed,
          disabled: ed || jd,
          onFiles: dd => {
            Bd(null), Cd(dd)
          }
        }), xd && (0, Td.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Td.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: xd.pack.manifest.name
          }), (0, Td.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Ed("shaderPackListing:sizeValue", {
              kilobytes: String((0, bd.Q)(xd.sourceBytes))
            }), " \xb7", " ", Ed("shaderPackListing:filesValue", {
              files: String(xd.pack.files.length)
            })]
          }), (0, Td.jsx)(Yd, {
            picked: xd
          })]
        }), !pd && (0, Td.jsxs)(Td.Fragment, {
          children: [(0, Td.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Td.jsx)("span", {
              children: Ed("general:name")
            }), (0, Td.jsx)(vd.c, {
              className: "ShaderPackPublishInput",
              defaultValue: ud,
              maxLength: Fd.w,
              onValueChange: Gd
            }, Sd), xd && fd && (0, Td.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Ed("shaderPackListing:nameTooShort", {
                min: String(Fd.y)
              })
            })]
          }), (0, Td.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Td.jsx)("span", {
              children: Ed("general:description")
            }), (0, Td.jsx)(vd.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: nd,
              maxLength: Fd.p,
              onValueChange: cd,
              useTextarea: !0
            }, Sd)]
          })]
        }), Id && (0, Td.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Id
        }), (0, Td.jsxs)(hd.m, {
          className: "ShaderPackPublishButton",
          disabled: !Md,
          loading: jd,
          onClick: () => {
            !async function() {
              var dd;
              if (!xd) return;
              const {
                name: Od,
                description: md
              } = null !== pd && void 0 !== pd ? pd : {
                name: kd,
                description: nd.trim()
              }, Wd = {
                packId: null !== (dd = null === pd || void 0 === pd ? void 0 : pd.packId) && void 0 !== dd ? dd : null,
                name: Od,
                description: md,
                apiVersion: xd.pack.manifest.apiVersion,
                files: (0, Xd.v)(xd.pack.files),
                keepCircleShadows: !0 === xd.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Wd)).byteLength > 1024 * Fd.L) ld(Ed("shaderPackListing:publishTooBig", {
                kilobytes: String(Fd.L)
              }));
              else {
                Dd(!0), ld(null);
                try {
                  gd(await Nd.e.publishShaderPack(Jd, Wd))
                } catch (Rd) {
                  console.error("Failed to publish the shader pack", Rd), ld((0, bd.w)(Rd, Ed, "shaderPackListing:publishFailed"))
                } finally {
                  Dd(!1)
                }
              }
            }()
          },
          children: [(0, Td.jsx)(Kd.c, {
            name: "upload"
          }), " ", Ed(pd ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Yd(dd) {
      let {
        picked: Od
      } = dd;
      const {
        t: md
      } = (0, qd.G)(), {
        validation: Wd
      } = Od;
      return null === Wd ? (0, Td.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: md("shaderPackListing:publishUnchecked")
      }) : Wd.ok ? (0, Td.jsxs)(Td.Fragment, {
        children: [(0, Td.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Td.jsx)(Kd.c, {
            name: "circle-check"
          }), " ", md("shaderPackListing:publishReady")]
        }), Wd.offInStrict.length > 0 && (0, Td.jsxs)(Td.Fragment, {
          children: [(0, Td.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Td.jsx)(Kd.c, {
              name: "triangle-exclamation"
            }), " ", md("shaderPack:offInStrict")]
          }), (0, Td.jsx)(td.e, {
            diagnostics: Wd.offInStrict,
            t: md
          })]
        })]
      }) : (0, Td.jsxs)(Td.Fragment, {
        children: [(0, Td.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Td.jsx)(Kd.c, {
            name: "triangle-exclamation"
          }), " ", md("shaderPackListing:publishHasErrors")]
        }), (0, Td.jsx)(td.e, {
          diagnostics: Wd.errors,
          more: Wd.moreErrors,
          t: md
        })]
      })
    }
    const gd = "\0";

    function wd() {
      const {
        t: dd
      } = (0, qd.G)(), [Od, md] = dd("shaderPackListing:bloxdhubHelp", {
        site: gd
      }).split(gd);
      return (0, Td.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Od, (0, Td.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Fd.j,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Fd.d
        }), md]
      })
    }
  },
  5951: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.f,
      g: () => Fd,
      k: () => Wd.o
    });
    var Wd = md(5954);
    const Fd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Od => ({
      strict: dd,
      program: Od
    })))))
  },
  5954: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      e: () => Xd,
      f: () => Wd,
      h: () => Hd,
      l: () => td,
      o: () => Fd,
      p: () => Rd,
      r: () => vd,
      v: () => Qd,
      w: () => od
    });
    const Wd = 5;

    function Fd(dd) {
      return dd === Wd
    }

    function Rd(dd) {
      return [...dd.features]
    }
    const Xd = 262144,
      Kd = 256,
      hd = 256;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Od = [];
      for (const [md, Wd] of Object.entries(dd)) {
        if ("string" !== typeof Wd) return `${md} isn't text.`;
        Od.push({
          path: md,
          source: Wd
        })
      }
      return Od.sort(((dd, Od) => td(dd.path, Od.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Kd) return `The pack has more than ${Kd} .wgsl files.`;
          const Od = new Set;
          for (const {
              path: md
            }
            of dd) {
            const dd = Nd(md);
            if (null !== dd) return dd;
            if (Od.has(md)) return `The pack has two files at ${md}.`;
            Od.add(md)
          }
          return od(dd) > Xd ? `The pack's .wgsl files are over ${Xd/1024} KB in total.` : null
        }(Od) ?? Od
    }

    function Qd(dd) {
      const Od = {};
      for (const md of dd) Od[md.path] = md.source;
      return Od
    }

    function td(dd, Od) {
      return dd < Od ? -1 : dd > Od ? 1 : 0
    }

    function od(dd) {
      const Od = new TextEncoder;
      let md = 0;
      for (const {
          source: Wd
        }
        of dd) md += Od.encode(Wd).byteLength;
      return md
    }

    function Nd(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > hd) return `A file path is over ${hd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const qd = /^(.*)\[rot\[([1-4])$/;

    function Hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Wd = new Map;
      Od.forEach(((dd, Od) => {
        let {
          numAnimStates: md,
          animStartIdx: Fd
        } = dd;
        for (let Rd = 1; Rd < md; Rd++) Wd.set(Fd + Rd - 1, Od)
      }));
      const Fd = Object.entries(dd),
        Rd = new Map;
      for (const [Hd, yd] of Fd) {
        const dd = qd.exec(Hd);
        "1" === dd?.[2] && Rd.set(dd[1], yd + 1)
      }
      const Xd = dd => {
          const Od = qd.exec(dd);
          return Od && Rd.has(Od[1]) ? {
            root: Od[1],
            rotation: Number(Od[2]) - 1
          } : null
        },
        Kd = new Set(Fd.map((dd => {
          let [Od] = dd;
          return Xd(Od)?.root ?? Od
        }))),
        hd = (dd, md) => {
          const Wd = dd.replace(/_?0$/, "");
          return (Od[md]?.numAnimStates ?? 0) > 1 && !Kd.has(Wd) ? Wd : dd
        },
        vd = new Map;
      for (const [qd, Hd] of Fd) vd.set(Hd, hd(Xd(qd)?.root ?? qd, Hd));
      const Qd = Fd.reduce(((dd, Od) => {
          let [, md] = Od;
          return Math.max(dd, md + 1)
        }), 0),
        td = Array.from({
          length: Qd
        }, ((dd, Od) => ({
          id: Od + 1,
          rotation: 0
        }))),
        od = new Map,
        Nd = new Map;
      for (const [qd, Hd] of Fd) {
        const dd = Xd(qd),
          Od = Wd.get(Hd);
        if (void 0 !== Od) {
          const md = vd.get(Od);
          Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "frame"
          }), dd && !Nd.has(dd.root) && Nd.set(dd.root, {
            name: dd.root,
            texture: md,
            kind: "frame"
          });
          continue
        }
        const md = vd.get(Hd),
          Fd = dd?.root ?? qd;
        if (md !== Fd && Nd.set(Fd, {
            name: Fd,
            texture: md,
            kind: "frame"
          }), dd) {
          const Od = Rd.get(dd.root);
          td[Hd] = {
            id: Od,
            rotation: dd.rotation
          }, od.set(md, Od), Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "rotation"
          })
        } else od.set(md, Hd + 1)
      }
      for (const qd of od.keys()) Nd.delete(qd);
      for (const [qd, Hd] of md) {
        const dd = od.get(Hd);
        void 0 === dd || od.has(qd) || (od.set(qd, dd), Nd.delete(qd))
      }
      return {
        named: [...od].sort(((dd, Od) => {
          let [md] = dd, [Wd] = Od;
          return md < Wd ? -1 : md > Wd ? 1 : 0
        })).map((dd => {
          let [Od, md] = dd;
          return {
            name: Od,
            id: md
          }
        })),
        aliases: [...Nd.values()],
        layers: td
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);