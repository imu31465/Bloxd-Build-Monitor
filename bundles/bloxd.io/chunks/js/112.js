export const id = 112;
export const ids = [112];
export const modules = {
  5060: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Lk,
      d: () => qk
    });
    var Xk = Ik(58),
      Tk = Ik(1406),
      ik = Ik(1179),
      yk = Ik(95),
      lk = Ik(3078),
      ak = Ik(1096);

    function qk() {
      return !(0, yk.isMobile)()
    }

    function Lk(kk) {
      let {
        disabled: Fk,
        openFolderPicker: Ik,
        onFiles: yk
      } = kk;
      const {
        t: Lk
      } = (0, ik.y)(), tk = (0, Xk.useRef)(null);
      return (0, ak.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, ak.jsx)("input", {
          ref: tk,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(kk) {
            const Fk = Array.from(kk.target.files);
            kk.target.value = "", yk(Fk)
          }
        }), qk() && (0, ak.jsx)(Tk.d, {
          disabled: Fk,
          onClick: Ik,
          children: Lk("general:chooseFolder")
        }), (0, ak.jsx)(Tk.d, {
          disabled: Fk,
          onClick: () => {
            (0, lk.e)(tk.current)
          },
          children: Lk("general:chooseZip")
        })]
      })
    }
  },
  5038: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk,
      h: () => yk,
      k: () => ik
    });
    var Xk = Ik(5047);
    const Tk = [kk => kk.strict ? "strict" : "nonStrict", kk => kk.program];

    function ik(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Xk = {};
      for (const Tk in Ik) Xk[Tk] = `\0${Tk}\0`;
      return kk(Fk, Xk).replace(/\0(\w+)\0/g, ((kk, Fk) => Ik[Fk]))
    }

    function yk(kk) {
      return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
    }

    function lk(kk) {
      const Fk = new Map(kk.map((kk => [ak(kk).join("."), kk])));
      if (0 === Fk.size) return [];
      const Ik = Lk([...Fk.values()]);
      return 0 === Ik[0].length ? [] : Ik
    }

    function ak(kk) {
      return Tk.map((Fk => Fk(kk)))
    }
    const qk = Tk.map((kk => new Set(Xk.e.map(kk)).size));

    function Lk(kk) {
      const Fk = Tk.map((Fk => new Set(kk.map(Fk)))),
        Ik = Fk.reduce(((kk, Fk) => kk * Fk.size), 1),
        Xk = Fk.every(((kk, Fk) => 1 === kk.size || kk.size === qk[Fk]));
      if (Ik === kk.length && Xk) return [Tk.filter(((kk, Ik) => 1 === Fk[Ik].size)).map((Fk => Fk(kk[0])))];
      let ik = null;
      for (let yk = 0; yk < Tk.length; yk++) {
        if (1 === Fk[yk].size) continue;
        const Ik = tk(kk, Tk[yk]).flatMap(Lk);
        (null === ik || Ik.length < ik.length) && (ik = Ik)
      }
      return ik
    }

    function tk(kk, Fk) {
      const Ik = new Map;
      for (const Tk of kk) {
        var Xk;
        const kk = Fk(Tk);
        Ik.set(kk, [...null !== (Xk = Ik.get(kk)) && void 0 !== Xk ? Xk : [], Tk])
      }
      return [...Ik.values()]
    }
  },
  6582: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      ShaderPackPublishForm: () => Pk
    });
    var Xk = Ik(58),
      Tk = Ik(6544),
      ik = Ik(195),
      yk = Ik(5053),
      lk = Ik(1066),
      ak = Ik(1406),
      qk = Ik(1617),
      Lk = Ik(1118),
      tk = Ik(6589),
      Zk = Ik(6591),
      jk = Ik(1453),
      ek = Ik(1179),
      wk = Ik(6596),
      Hk = Ik(6631),
      Jk = Ik(6541),
      xk = Ik(1096);

    function Pk(kk) {
      var Fk, Ik, tk;
      let {
        existing: Pk,
        onPublished: Qk
      } = kk;
      const {
        t: Vk
      } = (0, ek.y)(), {
        userContext: zk,
        isUserContextUpdating: Sk
      } = (0, Lk.d)(), [vk, Ek] = (0, Xk.useState)(null), [Ok, nk] = (0, Xk.useState)(0), [Gk, pk] = (0, Xk.useState)(null !== (Fk = null === Pk || void 0 === Pk ? void 0 : Pk.name) && void 0 !== Fk ? Fk : ""), uk = (0, Xk.useRef)(Gk), bk = (0, Xk.useRef)(""), Rk = kk => {
        uk.current = kk, pk(kk)
      }, [Uk, Ck] = (0, Xk.useState)(null !== (Ik = null === Pk || void 0 === Pk ? void 0 : Pk.description) && void 0 !== Ik ? Ik : ""), Nk = (0, Xk.useRef)(Uk), ck = (0, Xk.useRef)(""), Wk = kk => {
        Nk.current = kk, Ck(kk)
      }, [fk, Bk] = (0, Xk.useState)(!1), {
        loading: dk,
        error: Yk,
        setError: Ak,
        onFiles: gk
      } = (0, Zk.h)((async kk => {
        const Fk = await (0, wk.loadPageShaderPackCompiler)();
        if (!Fk) return void Ak(Vk("shaderPack:compilerUnavailable"));
        const Ik = await (0, Hk.f)(Fk, kk.files);
        if (Ek({
            pack: kk,
            validation: Ik,
            sourceBytes: (0, yk.x)(kk.files)
          }), !Pk) {
          var Xk;
          if ("" !== uk.current.trim() && uk.current !== bk.current || (bk.current = (0, Tk.U)(kk.manifest.name.trim(), Tk.C), Rk(bk.current)), "" === Nk.current.trim() || Nk.current === ck.current) ck.current = (0, Tk.U)((null !== (Xk = kk.manifest.description) && void 0 !== Xk ? Xk : "").trim(), Tk.q), Wk(ck.current);
          nk((kk => kk + 1))
        }
      })), mk = !Sk && !zk.isLoggedIn() && !ik.e.offlineMode, hk = Gk.trim(), rk = hk.length < Tk.E, Dk = null !== vk && !1 !== (null === (tk = vk.validation) || void 0 === tk ? void 0 : tk.ok) && !dk && !rk && !mk && !Sk;
      return (0, xk.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, xk.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Pk ? Vk("shaderPackListing:uploadIntro", {
            minutes: String(Tk.K / 6e4)
          }) : Vk("shaderPackListing:publishIntro")
        }), (0, xk.jsx)(sk, {}), mk && (0, xk.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Vk("shaderPackListing:publishNeedsLogin")
        }), (0, xk.jsx)(Zk.e, {
          busy: dk,
          disabled: dk || fk,
          onFiles: kk => {
            Ek(null), gk(kk)
          }
        }), vk && (0, xk.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, xk.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: vk.pack.manifest.name
          }), (0, xk.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Vk("shaderPackListing:sizeValue", {
              kilobytes: String((0, Jk.V)(vk.sourceBytes))
            }), " \xb7", " ", Vk("shaderPackListing:filesValue", {
              files: String(vk.pack.files.length)
            })]
          }), (0, xk.jsx)(Kk, {
            picked: vk
          })]
        }), !Pk && (0, xk.jsxs)(xk.Fragment, {
          children: [(0, xk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, xk.jsx)("span", {
              children: Vk("general:name")
            }), (0, xk.jsx)(qk.c, {
              className: "ShaderPackPublishInput",
              defaultValue: Gk,
              maxLength: Tk.C,
              onValueChange: Rk
            }, Ok), vk && rk && (0, xk.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Vk("shaderPackListing:nameTooShort", {
                min: String(Tk.E)
              })
            })]
          }), (0, xk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, xk.jsx)("span", {
              children: Vk("general:description")
            }), (0, xk.jsx)(qk.c, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Uk,
              maxLength: Tk.q,
              onValueChange: Wk,
              useTextarea: !0
            }, Ok)]
          })]
        }), Yk && (0, xk.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Yk
        }), (0, xk.jsxs)(ak.m, {
          className: "ShaderPackPublishButton",
          disabled: !Dk,
          loading: fk,
          onClick: () => {
            !async function() {
              var kk;
              if (!vk) return;
              const {
                name: Fk,
                description: Ik
              } = null !== Pk && void 0 !== Pk ? Pk : {
                name: hk,
                description: Uk.trim()
              }, Xk = {
                packId: null !== (kk = null === Pk || void 0 === Pk ? void 0 : Pk.packId) && void 0 !== kk ? kk : null,
                name: Fk,
                description: Ik,
                apiVersion: vk.pack.manifest.apiVersion,
                files: (0, yk.w)(vk.pack.files),
                keepCircleShadows: !0 === vk.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Xk)).byteLength > 1024 * Tk.Q) Ak(Vk("shaderPackListing:publishTooBig", {
                kilobytes: String(Tk.Q)
              }));
              else {
                Bk(!0), Ak(null);
                try {
                  Qk(await jk.e.publishShaderPack(zk, Xk))
                } catch (ik) {
                  console.error("Failed to publish the shader pack", ik), Ak((0, Jk.C)(ik, Vk, "shaderPackListing:publishFailed"))
                } finally {
                  Bk(!1)
                }
              }
            }()
          },
          children: [(0, xk.jsx)(lk.e, {
            name: "upload"
          }), " ", Vk(Pk ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Kk(kk) {
      let {
        picked: Fk
      } = kk;
      const {
        t: Ik
      } = (0, ek.y)(), {
        validation: Xk
      } = Fk;
      return null === Xk ? (0, xk.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: Ik("shaderPackListing:publishUnchecked")
      }) : Xk.ok ? (0, xk.jsxs)(xk.Fragment, {
        children: [(0, xk.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, xk.jsx)(lk.e, {
            name: "circle-check"
          }), " ", Ik("shaderPackListing:publishReady")]
        }), Xk.offInStrict.length > 0 && (0, xk.jsxs)(xk.Fragment, {
          children: [(0, xk.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, xk.jsx)(lk.e, {
              name: "triangle-exclamation"
            }), " ", Ik("shaderPack:offInStrict")]
          }), (0, xk.jsx)(tk.c, {
            diagnostics: Xk.offInStrict,
            t: Ik
          })]
        })]
      }) : (0, xk.jsxs)(xk.Fragment, {
        children: [(0, xk.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, xk.jsx)(lk.e, {
            name: "triangle-exclamation"
          }), " ", Ik("shaderPackListing:publishHasErrors")]
        }), (0, xk.jsx)(tk.c, {
          diagnostics: Xk.errors,
          more: Xk.moreErrors,
          t: Ik
        })]
      })
    }
    const Qk = "\0";

    function sk() {
      const {
        t: kk
      } = (0, ek.y)(), [Fk, Ik] = kk("shaderPackListing:bloxdhubHelp", {
        site: Qk
      }).split(Qk);
      return (0, xk.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Fk, (0, xk.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Tk.g,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Tk.d
        }), Ik]
      })
    }
  },
  5047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.d,
      e: () => Tk,
      i: () => Xk.m
    });
    var Xk = Ik(5053);
    const Tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  5053: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => yk,
      d: () => Xk,
      g: () => wk,
      k: () => tk,
      m: () => Tk,
      p: () => ik,
      t: () => qk,
      w: () => Lk,
      x: () => Zk
    });
    const Xk = 5;

    function Tk(kk) {
      return kk === Xk
    }

    function ik(kk) {
      return [...kk.features]
    }
    const yk = 262144,
      lk = 256,
      ak = 256;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Ik, Xk] of Object.entries(kk)) {
        if ("string" !== typeof Xk) return `${Ik} isn't text.`;
        Fk.push({
          path: Ik,
          source: Xk
        })
      }
      return Fk.sort(((kk, Fk) => tk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Ik
            }
            of kk) {
            const kk = jk(Ik);
            if (null !== kk) return kk;
            if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
            Fk.add(Ik)
          }
          return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function Lk(kk) {
      const Fk = {};
      for (const Ik of kk) Fk[Ik.path] = Ik.source;
      return Fk
    }

    function tk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Zk(kk) {
      const Fk = new TextEncoder;
      let Ik = 0;
      for (const {
          source: Xk
        }
        of kk) Ik += Fk.encode(Xk).byteLength;
      return Ik
    }

    function jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > ak) return `A file path is over ${ak} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const ek = /^(.*)\[rot\[([1-4])$/;

    function wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Xk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Ik,
          animStartIdx: Tk
        } = kk;
        for (let ik = 1; ik < Ik; ik++) Xk.set(Tk + ik - 1, Fk)
      }));
      const Tk = Object.entries(kk),
        ik = new Map;
      for (const [wk, Hk] of Tk) {
        const kk = ek.exec(wk);
        "1" === kk?.[2] && ik.set(kk[1], Hk + 1)
      }
      const yk = kk => {
          const Fk = ek.exec(kk);
          return Fk && ik.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        lk = new Set(Tk.map((kk => {
          let [Fk] = kk;
          return yk(Fk)?.root ?? Fk
        }))),
        ak = (kk, Ik) => {
          const Xk = kk.replace(/_?0$/, "");
          return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
        },
        qk = new Map;
      for (const [ek, wk] of Tk) qk.set(wk, ak(yk(ek)?.root ?? ek, wk));
      const Lk = Tk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return Math.max(kk, Ik + 1)
        }), 0),
        tk = Array.from({
          length: Lk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Zk = new Map,
        jk = new Map;
      for (const [ek, wk] of Tk) {
        const kk = yk(ek),
          Fk = Xk.get(wk);
        if (void 0 !== Fk) {
          const Ik = qk.get(Fk);
          jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "frame"
          }), kk && !jk.has(kk.root) && jk.set(kk.root, {
            name: kk.root,
            texture: Ik,
            kind: "frame"
          });
          continue
        }
        const Ik = qk.get(wk),
          Tk = kk?.root ?? ek;
        if (Ik !== Tk && jk.set(Tk, {
            name: Tk,
            texture: Ik,
            kind: "frame"
          }), kk) {
          const Fk = ik.get(kk.root);
          tk[wk] = {
            id: Fk,
            rotation: kk.rotation
          }, Zk.set(Ik, Fk), jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "rotation"
          })
        } else Zk.set(Ik, wk + 1)
      }
      for (const ek of Zk.keys()) jk.delete(ek);
      for (const [ek, wk] of Ik) {
        const kk = Zk.get(wk);
        void 0 === kk || Zk.has(ek) || (Zk.set(ek, kk), jk.delete(ek))
      }
      return {
        named: [...Zk].sort(((kk, Fk) => {
          let [Ik] = kk, [Xk] = Fk;
          return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
        })).map((kk => {
          let [Fk, Ik] = kk;
          return {
            name: Fk,
            id: Ik
          }
        })),
        aliases: [...jk.values()],
        layers: tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);