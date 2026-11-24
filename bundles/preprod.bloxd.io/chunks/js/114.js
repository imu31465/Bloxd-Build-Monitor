export const id = 114;
export const ids = [114];
export const modules = {
  5173: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Dp,
      e: () => Yp
    });
    var Op = cp(62),
      op = cp(1480),
      Ip = cp(1201),
      Sp = cp(104),
      xp = cp(3235),
      Lp = cp(1112);

    function Yp() {
      return !(0, Sp.isMobile)()
    }

    function Dp(pp) {
      let {
        disabled: ip,
        openFolderPicker: cp,
        onFiles: Sp
      } = pp;
      const {
        t: Dp
      } = (0, Ip.H)(), Ap = (0, Op.useRef)(null);
      return (0, Lp.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, Lp.jsx)("input", {
          ref: Ap,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(pp) {
            const ip = Array.from(pp.target.files);
            pp.target.value = "", Sp(ip)
          }
        }), Yp() && (0, Lp.jsx)(op.f, {
          disabled: ip,
          onClick: cp,
          children: Dp("general:chooseFolder")
        }), (0, Lp.jsx)(op.f, {
          disabled: ip,
          onClick: () => {
            (0, xp.h)(Ap.current)
          },
          children: Dp("general:chooseZip")
        })]
      })
    }
  },
  5156: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => xp,
      e: () => Sp,
      f: () => Ip
    });
    var Op = cp(5159);
    const op = [pp => pp.strict ? "strict" : "nonStrict", pp => pp.program];

    function Ip(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Op = {};
      for (const op in cp) Op[op] = `\0${op}\0`;
      return pp(ip, Op).replace(/\0(\w+)\0/g, ((pp, ip) => cp[ip]))
    }

    function Sp(pp) {
      return null === pp.file ? null : pp.line > 0 ? `${pp.file}:${pp.line}` : pp.file
    }

    function xp(pp) {
      const ip = new Map(pp.map((pp => [Lp(pp).join("."), pp])));
      if (0 === ip.size) return [];
      const cp = Dp([...ip.values()]);
      return 0 === cp[0].length ? [] : cp
    }

    function Lp(pp) {
      return op.map((ip => ip(pp)))
    }
    const Yp = op.map((pp => new Set(Op.g.map(pp)).size));

    function Dp(pp) {
      const ip = op.map((ip => new Set(pp.map(ip)))),
        cp = ip.reduce(((pp, ip) => pp * ip.size), 1),
        Op = ip.every(((pp, ip) => 1 === pp.size || pp.size === Yp[ip]));
      if (cp === pp.length && Op) return [op.filter(((pp, cp) => 1 === ip[cp].size)).map((ip => ip(pp[0])))];
      let Ip = null;
      for (let Sp = 0; Sp < op.length; Sp++) {
        if (1 === ip[Sp].size) continue;
        const cp = Ap(pp, op[Sp]).flatMap(Dp);
        (null === Ip || cp.length < Ip.length) && (Ip = cp)
      }
      return Ip
    }

    function Ap(pp, ip) {
      const cp = new Map;
      for (const op of pp) {
        var Op;
        const pp = ip(op);
        cp.set(pp, [...null !== (Op = cp.get(pp)) && void 0 !== Op ? Op : [], op])
      }
      return [...cp.values()]
    }
  },
  6743: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      ShaderPackPublishForm: () => Hp
    });
    var Op = cp(62),
      op = cp(6704),
      Ip = cp(203),
      Sp = cp(5167),
      xp = cp(1060),
      Lp = cp(1480),
      Yp = cp(1692),
      Dp = cp(1141),
      Ap = cp(6750),
      Pp = cp(6752),
      Wp = cp(1520),
      yp = cp(1201),
      Up = cp(6758),
      wp = cp(6792),
      vp = cp(6698),
      tp = cp(1112);

    function Hp(pp) {
      var ip, cp, Ap;
      let {
        existing: Hp,
        onPublished: ep
      } = pp;
      const {
        t: kp
      } = (0, yp.H)(), {
        userContext: mp,
        isUserContextUpdating: Rp
      } = (0, Dp.b)(), [qp, Mp] = (0, Op.useState)(null), [Cp, Ep] = (0, Op.useState)(0), [Xp, lp] = (0, Op.useState)(null !== (ip = null === Hp || void 0 === Hp ? void 0 : Hp.name) && void 0 !== ip ? ip : ""), Qp = (0, Op.useRef)(Xp), Jp = (0, Op.useRef)(""), Bp = pp => {
        Qp.current = pp, lp(pp)
      }, [Np, Tp] = (0, Op.useState)(null !== (cp = null === Hp || void 0 === Hp ? void 0 : Hp.description) && void 0 !== cp ? cp : ""), fp = (0, Op.useRef)(Np), bp = (0, Op.useRef)(""), hp = pp => {
        fp.current = pp, Tp(pp)
      }, [ap, np] = (0, Op.useState)(!1), {
        loading: Fp,
        error: gp,
        setError: Gp,
        onFiles: rp
      } = (0, Pp.f)((async pp => {
        const ip = await (0, Up.loadPageShaderPackCompiler)();
        if (!ip) return void Gp(kp("shaderPack:compilerUnavailable"));
        const cp = await (0, wp.h)(ip, pp.files);
        if (Mp({
            pack: pp,
            validation: cp,
            sourceBytes: (0, Sp.z)(pp.files)
          }), !Hp) {
          var Op;
          if ("" !== Qp.current.trim() && Qp.current !== Jp.current || (Jp.current = (0, op.W)(pp.manifest.name.trim(), op.D), Bp(Jp.current)), "" === fp.current.trim() || fp.current === bp.current) bp.current = (0, op.W)((null !== (Op = pp.manifest.description) && void 0 !== Op ? Op : "").trim(), op.t), hp(bp.current);
          Ep((pp => pp + 1))
        }
      })), Zp = !Rp && !mp.isLoggedIn() && !Ip.b.offlineMode, zp = Xp.trim(), sp = zp.length < op.G, Kp = null !== qp && !1 !== (null === (Ap = qp.validation) || void 0 === Ap ? void 0 : Ap.ok) && !Fp && !sp && !Zp && !Rp;
      return (0, tp.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, tp.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Hp ? kp("shaderPackListing:uploadIntro", {
            minutes: String(op.M / 6e4)
          }) : kp("shaderPackListing:publishIntro")
        }), (0, tp.jsx)(jp, {}), Zp && (0, tp.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: kp("shaderPackListing:publishNeedsLogin")
        }), (0, tp.jsx)(Pp.b, {
          busy: Fp,
          disabled: Fp || ap,
          onFiles: pp => {
            Mp(null), rp(pp)
          }
        }), qp && (0, tp.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, tp.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: qp.pack.manifest.name
          }), (0, tp.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [kp("shaderPackListing:sizeValue", {
              kilobytes: String((0, vp.O)(qp.sourceBytes))
            }), " \xb7", " ", kp("shaderPackListing:filesValue", {
              files: String(qp.pack.files.length)
            })]
          }), (0, tp.jsx)(dp, {
            picked: qp
          })]
        }), !Hp && (0, tp.jsxs)(tp.Fragment, {
          children: [(0, tp.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, tp.jsx)("span", {
              children: kp("general:name")
            }), (0, tp.jsx)(Yp.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Xp,
              maxLength: op.D,
              onValueChange: Bp
            }, Cp), qp && sp && (0, tp.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: kp("shaderPackListing:nameTooShort", {
                min: String(op.G)
              })
            })]
          }), (0, tp.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, tp.jsx)("span", {
              children: kp("general:description")
            }), (0, tp.jsx)(Yp.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Np,
              maxLength: op.t,
              onValueChange: hp,
              useTextarea: !0
            }, Cp)]
          })]
        }), gp && (0, tp.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: gp
        }), (0, tp.jsxs)(Lp.o, {
          className: "ShaderPackPublishButton",
          disabled: !Kp,
          loading: ap,
          onClick: () => {
            !async function() {
              var pp;
              if (!qp) return;
              const {
                name: ip,
                description: cp
              } = null !== Hp && void 0 !== Hp ? Hp : {
                name: zp,
                description: Np.trim()
              }, Op = {
                packId: null !== (pp = null === Hp || void 0 === Hp ? void 0 : Hp.packId) && void 0 !== pp ? pp : null,
                name: ip,
                description: cp,
                apiVersion: qp.pack.manifest.apiVersion,
                files: (0, Sp.v)(qp.pack.files),
                keepCircleShadows: !0 === qp.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Op)).byteLength > 1024 * op.V) Gp(kp("shaderPackListing:publishTooBig", {
                kilobytes: String(op.V)
              }));
              else {
                np(!0), Gp(null);
                try {
                  ep(await Wp.b.publishShaderPack(mp, Op))
                } catch (Ip) {
                  console.error("Failed to publish the shader pack", Ip), Gp((0, vp.s)(Ip, kp, "shaderPackListing:publishFailed"))
                } finally {
                  np(!1)
                }
              }
            }()
          },
          children: [(0, tp.jsx)(xp.d, {
            name: "upload"
          }), " ", kp(Hp ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function dp(pp) {
      let {
        picked: ip
      } = pp;
      const {
        t: cp
      } = (0, yp.H)(), {
        validation: Op
      } = ip;
      return null === Op ? (0, tp.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: cp("shaderPackListing:publishUnchecked")
      }) : Op.ok ? (0, tp.jsxs)(tp.Fragment, {
        children: [(0, tp.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, tp.jsx)(xp.d, {
            name: "circle-check"
          }), " ", cp("shaderPackListing:publishReady")]
        }), Op.offInStrict.length > 0 && (0, tp.jsxs)(tp.Fragment, {
          children: [(0, tp.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, tp.jsx)(xp.d, {
              name: "triangle-exclamation"
            }), " ", cp("shaderPack:offInStrict")]
          }), (0, tp.jsx)(Ap.b, {
            diagnostics: Op.offInStrict,
            t: cp
          })]
        })]
      }) : (0, tp.jsxs)(tp.Fragment, {
        children: [(0, tp.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, tp.jsx)(xp.d, {
            name: "triangle-exclamation"
          }), " ", cp("shaderPackListing:publishHasErrors")]
        }), (0, tp.jsx)(Ap.b, {
          diagnostics: Op.errors,
          more: Op.moreErrors,
          t: cp
        })]
      })
    }
    const ep = "\0";

    function jp() {
      const {
        t: pp
      } = (0, yp.H)(), [ip, cp] = pp("shaderPackListing:bloxdhubHelp", {
        site: ep
      }).split(ep);
      return (0, tp.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ip, (0, tp.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: op.j,
          target: "_blank",
          rel: "noopener noreferrer",
          children: op.d
        }), cp]
      })
    }
  },
  5159: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op.f,
      g: () => op,
      k: () => Op.o
    });
    var Op = cp(5167);
    const op = [!1, !0].flatMap((pp => ["terrain", "liquid", "model"].map((ip => ({
      strict: pp,
      program: ip
    })))))
  },
  5167: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      e: () => Sp,
      f: () => Op,
      j: () => Up,
      m: () => Ap,
      o: () => op,
      p: () => Ip,
      s: () => Yp,
      v: () => Dp,
      z: () => Pp
    });
    const Op = 5;

    function op(pp) {
      return pp === Op
    }

    function Ip(pp) {
      return [...pp.features]
    }
    const Sp = 262144,
      xp = 256,
      Lp = 256;

    function Yp(pp) {
      if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
      const ip = [];
      for (const [cp, Op] of Object.entries(pp)) {
        if ("string" !== typeof Op) return `${cp} isn't text.`;
        ip.push({
          path: cp,
          source: Op
        })
      }
      return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
        function(pp) {
          if (0 === pp.length) return "The pack has no .wgsl files.";
          if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
          const ip = new Set;
          for (const {
              path: cp
            }
            of pp) {
            const pp = Wp(cp);
            if (null !== pp) return pp;
            if (ip.has(cp)) return `The pack has two files at ${cp}.`;
            ip.add(cp)
          }
          return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
        }(ip) ?? ip
    }

    function Dp(pp) {
      const ip = {};
      for (const cp of pp) ip[cp.path] = cp.source;
      return ip
    }

    function Ap(pp, ip) {
      return pp < ip ? -1 : pp > ip ? 1 : 0
    }

    function Pp(pp) {
      const ip = new TextEncoder;
      let cp = 0;
      for (const {
          source: Op
        }
        of pp) cp += ip.encode(Op).byteLength;
      return cp
    }

    function Wp(pp) {
      if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
      if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
      if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
      return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
    }
    const yp = /^(.*)\[rot\[([1-4])$/;

    function Up(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Op = new Map;
      ip.forEach(((pp, ip) => {
        let {
          numAnimStates: cp,
          animStartIdx: op
        } = pp;
        for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
      }));
      const op = Object.entries(pp),
        Ip = new Map;
      for (const [Up, wp] of op) {
        const pp = yp.exec(Up);
        "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
      }
      const Sp = pp => {
          const ip = yp.exec(pp);
          return ip && Ip.has(ip[1]) ? {
            root: ip[1],
            rotation: Number(ip[2]) - 1
          } : null
        },
        xp = new Set(op.map((pp => {
          let [ip] = pp;
          return Sp(ip)?.root ?? ip
        }))),
        Lp = (pp, cp) => {
          const Op = pp.replace(/_?0$/, "");
          return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
        },
        Yp = new Map;
      for (const [yp, Up] of op) Yp.set(Up, Lp(Sp(yp)?.root ?? yp, Up));
      const Dp = op.reduce(((pp, ip) => {
          let [, cp] = ip;
          return Math.max(pp, cp + 1)
        }), 0),
        Ap = Array.from({
          length: Dp
        }, ((pp, ip) => ({
          id: ip + 1,
          rotation: 0
        }))),
        Pp = new Map,
        Wp = new Map;
      for (const [yp, Up] of op) {
        const pp = Sp(yp),
          ip = Op.get(Up);
        if (void 0 !== ip) {
          const cp = Yp.get(ip);
          Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "frame"
          }), pp && !Wp.has(pp.root) && Wp.set(pp.root, {
            name: pp.root,
            texture: cp,
            kind: "frame"
          });
          continue
        }
        const cp = Yp.get(Up),
          op = pp?.root ?? yp;
        if (cp !== op && Wp.set(op, {
            name: op,
            texture: cp,
            kind: "frame"
          }), pp) {
          const ip = Ip.get(pp.root);
          Ap[Up] = {
            id: ip,
            rotation: pp.rotation
          }, Pp.set(cp, ip), Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "rotation"
          })
        } else Pp.set(cp, Up + 1)
      }
      for (const yp of Pp.keys()) Wp.delete(yp);
      for (const [yp, Up] of cp) {
        const pp = Pp.get(Up);
        void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
      }
      return {
        named: [...Pp].sort(((pp, ip) => {
          let [cp] = pp, [Op] = ip;
          return cp < Op ? -1 : cp > Op ? 1 : 0
        })).map((pp => {
          let [ip, cp] = pp;
          return {
            name: ip,
            id: cp
          }
        })),
        aliases: [...Wp.values()],
        layers: Ap
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);