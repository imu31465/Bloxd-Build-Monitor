export const id = 112;
export const ids = [112];
export const modules = {
  4970: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk,
      e: () => Pk
    });
    var Dk = ik(60),
      fk = ik(1410),
      Sk = ik(1172),
      bk = ik(99),
      rk = ik(1066);

    function Pk() {
      return !(0, bk.isMobile)()
    }

    function mk(kk) {
      let {
        disabled: ek,
        openFolderPicker: ik,
        onFiles: bk
      } = kk;
      const {
        t: mk
      } = (0, Sk.D)(), Mk = (0, Dk.useRef)(null);
      return (0, rk.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, rk.jsx)("input", {
          ref: Mk,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(kk) {
            const ek = Array.from(kk.target.files);
            kk.target.value = "", bk(ek)
          }
        }), Pk() && (0, rk.jsx)(fk.f, {
          disabled: ek,
          onClick: ik,
          children: mk("general:chooseFolder")
        }), (0, rk.jsx)(fk.f, {
          disabled: ek,
          onClick: () => {
            Mk.current.click()
          },
          children: mk("general:chooseZip")
        })]
      })
    }
  },
  4959: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => rk,
      g: () => bk,
      j: () => Sk
    });
    var Dk = ik(4961);
    const fk = [kk => kk.strict ? "strict" : "nonStrict", kk => kk.program];

    function Sk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const Dk = {};
      for (const fk in ik) Dk[fk] = `\0${fk}\0`;
      return kk(ek, Dk).replace(/\0(\w+)\0/g, ((kk, ek) => ik[ek]))
    }

    function bk(kk) {
      return null === kk.file ? null : kk.line > 0 ? `${kk.file}:${kk.line}` : kk.file
    }

    function rk(kk) {
      const ek = new Map(kk.map((kk => [Pk(kk).join("."), kk])));
      if (0 === ek.size) return [];
      const ik = Mk([...ek.values()]);
      return 0 === ik[0].length ? [] : ik
    }

    function Pk(kk) {
      return fk.map((ek => ek(kk)))
    }
    const mk = fk.map((kk => new Set(Dk.e.map(kk)).size));

    function Mk(kk) {
      const ek = fk.map((ek => new Set(kk.map(ek)))),
        ik = ek.reduce(((kk, ek) => kk * ek.size), 1),
        Dk = ek.every(((kk, ek) => 1 === kk.size || kk.size === mk[ek]));
      if (ik === kk.length && Dk) return [fk.filter(((kk, ik) => 1 === ek[ik].size)).map((ek => ek(kk[0])))];
      let Sk = null;
      for (let bk = 0; bk < fk.length; bk++) {
        if (1 === ek[bk].size) continue;
        const ik = Kk(kk, fk[bk]).flatMap(Mk);
        (null === Sk || ik.length < Sk.length) && (Sk = ik)
      }
      return Sk
    }

    function Kk(kk, ek) {
      const ik = new Map;
      for (const fk of kk) {
        var Dk;
        const kk = ek(fk);
        ik.set(kk, [...null !== (Dk = ik.get(kk)) && void 0 !== Dk ? Dk : [], fk])
      }
      return [...ik.values()]
    }
  },
  6432: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      ShaderPackPublishForm: () => yk
    });
    var Dk = ik(60),
      fk = ik(6396),
      Sk = ik(194),
      bk = ik(4965),
      rk = ik(1033),
      Pk = ik(1410),
      mk = ik(1648),
      Mk = ik(1095),
      Kk = ik(6436),
      xk = ik(6445),
      nk = ik(1459),
      Uk = ik(1172),
      Hk = ik(6451),
      wk = ik(6493),
      lk = ik(6393),
      pk = ik(1066);

    function yk(kk) {
      var ek, ik, Kk;
      let {
        existing: yk,
        onPublished: Lk
      } = kk;
      const {
        t: Ak
      } = (0, Uk.D)(), {
        userContext: jk,
        isUserContextUpdating: sk
      } = (0, Mk.d)(), [dk, Vk] = (0, Dk.useState)(null), [Fk, uk] = (0, Dk.useState)(0), [qk, Ik] = (0, Dk.useState)(null !== (ek = null === yk || void 0 === yk ? void 0 : yk.name) && void 0 !== ek ? ek : ""), zk = (0, Dk.useRef)(qk), Qk = (0, Dk.useRef)(""), vk = kk => {
        zk.current = kk, Ik(kk)
      }, [Ek, hk] = (0, Dk.useState)(null !== (ik = null === yk || void 0 === yk ? void 0 : yk.description) && void 0 !== ik ? ik : ""), ak = (0, Dk.useRef)(Ek), Wk = (0, Dk.useRef)(""), tk = kk => {
        ak.current = kk, hk(kk)
      }, [Xk, Bk] = (0, Dk.useState)(!1), {
        loading: ck,
        error: Tk,
        setError: Zk,
        onFiles: Ok
      } = (0, xk.i)((async kk => {
        const ek = await (0, Hk.loadPageShaderPackCompiler)();
        if (!ek) return void Zk(Ak("shaderPack:compilerUnavailable"));
        const ik = await (0, wk.c)(ek, kk.files);
        if (Vk({
            pack: kk,
            validation: ik,
            sourceBytes: (0, bk.u)(kk.files)
          }), !yk) {
          var Dk;
          if ("" !== zk.current.trim() && zk.current !== Qk.current || (Qk.current = (0, fk.V)(kk.manifest.name.trim(), fk.F), vk(Qk.current)), "" === ak.current.trim() || ak.current === Wk.current) Wk.current = (0, fk.V)((null !== (Dk = kk.manifest.description) && void 0 !== Dk ? Dk : "").trim(), fk.v), tk(Wk.current);
          uk((kk => kk + 1))
        }
      })), gk = !sk && !jk.isLoggedIn() && !Sk.b.offlineMode, Gk = qk.trim(), Nk = Gk.length < fk.G, Rk = null !== dk && !1 !== (null === (Kk = dk.validation) || void 0 === Kk ? void 0 : Kk.ok) && !ck && !Nk && !gk && !sk;
      return (0, pk.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, pk.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: yk ? Ak("shaderPackListing:uploadIntro", {
            minutes: String(fk.K / 6e4)
          }) : Ak("shaderPackListing:publishIntro")
        }), (0, pk.jsx)(Ck, {}), gk && (0, pk.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Ak("shaderPackListing:publishNeedsLogin")
        }), (0, pk.jsx)(xk.e, {
          busy: ck,
          disabled: ck || Xk,
          onFiles: kk => {
            Vk(null), Ok(kk)
          }
        }), dk && (0, pk.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, pk.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: dk.pack.manifest.name
          }), (0, pk.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Ak("shaderPackListing:sizeValue", {
              kilobytes: String((0, lk.O)(dk.sourceBytes))
            }), " \xb7", " ", Ak("shaderPackListing:filesValue", {
              files: String(dk.pack.files.length)
            })]
          }), (0, pk.jsx)(Yk, {
            picked: dk
          })]
        }), !yk && (0, pk.jsxs)(pk.Fragment, {
          children: [(0, pk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, pk.jsx)("span", {
              children: Ak("general:name")
            }), (0, pk.jsx)(mk.b, {
              className: "ShaderPackPublishInput",
              defaultValue: qk,
              maxLength: fk.F,
              onValueChange: vk
            }, Fk), dk && Nk && (0, pk.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Ak("shaderPackListing:nameTooShort", {
                min: String(fk.G)
              })
            })]
          }), (0, pk.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, pk.jsx)("span", {
              children: Ak("general:description")
            }), (0, pk.jsx)(mk.b, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Ek,
              maxLength: fk.v,
              onValueChange: tk,
              useTextarea: !0
            }, Fk)]
          })]
        }), Tk && (0, pk.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Tk
        }), (0, pk.jsxs)(Pk.r, {
          className: "ShaderPackPublishButton",
          disabled: !Rk,
          loading: Xk,
          onClick: () => {
            !async function() {
              var kk;
              if (!dk) return;
              const {
                name: ek,
                description: ik
              } = null !== yk && void 0 !== yk ? yk : {
                name: Gk,
                description: Ek.trim()
              }, Dk = {
                packId: null !== (kk = null === yk || void 0 === yk ? void 0 : yk.packId) && void 0 !== kk ? kk : null,
                name: ek,
                description: ik,
                apiVersion: dk.pack.manifest.apiVersion,
                files: (0, bk.t)(dk.pack.files),
                keepCircleShadows: !0 === dk.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(Dk)).byteLength > 1024 * fk.R) Zk(Ak("shaderPackListing:publishTooBig", {
                kilobytes: String(fk.R)
              }));
              else {
                Bk(!0), Zk(null);
                try {
                  Lk(await nk.b.publishShaderPack(jk, Dk))
                } catch (Sk) {
                  console.error("Failed to publish the shader pack", Sk), Zk((0, lk.D)(Sk, Ak, "shaderPackListing:publishFailed"))
                } finally {
                  Bk(!1)
                }
              }
            }()
          },
          children: [(0, pk.jsx)(rk.d, {
            name: "upload"
          }), " ", Ak(yk ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Yk(kk) {
      let {
        picked: ek
      } = kk;
      const {
        t: ik
      } = (0, Uk.D)(), {
        validation: Dk
      } = ek;
      return null === Dk ? (0, pk.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ik("shaderPackListing:publishUnchecked")
      }) : Dk.ok ? (0, pk.jsxs)(pk.Fragment, {
        children: [(0, pk.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, pk.jsx)(rk.d, {
            name: "circle-check"
          }), " ", ik("shaderPackListing:publishReady")]
        }), Dk.offInStrict.length > 0 && (0, pk.jsxs)(pk.Fragment, {
          children: [(0, pk.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, pk.jsx)(rk.d, {
              name: "triangle-exclamation"
            }), " ", ik("shaderPack:offInStrict")]
          }), (0, pk.jsx)(Kk.b, {
            diagnostics: Dk.offInStrict,
            t: ik
          })]
        })]
      }) : (0, pk.jsxs)(pk.Fragment, {
        children: [(0, pk.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, pk.jsx)(rk.d, {
            name: "triangle-exclamation"
          }), " ", ik("shaderPackListing:publishHasErrors")]
        }), (0, pk.jsx)(Kk.b, {
          diagnostics: Dk.errors,
          more: Dk.moreErrors,
          t: ik
        })]
      })
    }
    const Lk = "\0";

    function Ck() {
      const {
        t: kk
      } = (0, Uk.D)(), [ek, ik] = kk("shaderPackListing:bloxdhubHelp", {
        site: Lk
      }).split(Lk);
      return (0, pk.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ek, (0, pk.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: fk.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: fk.e
        }), ik]
      })
    }
  },
  4961: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.g,
      e: () => fk,
      g: () => Dk.l
    });
    var Dk = ik(4965);
    const fk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((ek => ({
      strict: kk,
      program: ek
    })))))
  },
  4965: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk,
      c: () => bk,
      g: () => Dk,
      h: () => Hk,
      i: () => Kk,
      l: () => fk,
      p: () => Sk,
      r: () => mk,
      t: () => Mk,
      u: () => xk
    });
    const Dk = 5;

    function fk(kk) {
      return kk === Dk
    }

    function Sk(kk) {
      return [...kk.features]
    }
    const bk = 262144,
      rk = 256,
      Pk = 256;

    function mk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const ek = [];
      for (const [ik, Dk] of Object.entries(kk)) {
        if ("string" !== typeof Dk) return `${ik} isn't text.`;
        ek.push({
          path: ik,
          source: Dk
        })
      }
      return ek.sort(((kk, ek) => Kk(kk.path, ek.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > rk) return `The pack has more than ${rk} .wgsl files.`;
          const ek = new Set;
          for (const {
              path: ik
            }
            of kk) {
            const kk = nk(ik);
            if (null !== kk) return kk;
            if (ek.has(ik)) return `The pack has two files at ${ik}.`;
            ek.add(ik)
          }
          return xk(kk) > bk ? `The pack's .wgsl files are over ${bk/1024} KB in total.` : null
        }(ek) ?? ek
    }

    function Mk(kk) {
      const ek = {};
      for (const ik of kk) ek[ik.path] = ik.source;
      return ek
    }

    function Kk(kk, ek) {
      return kk < ek ? -1 : kk > ek ? 1 : 0
    }

    function xk(kk) {
      const ek = new TextEncoder;
      let ik = 0;
      for (const {
          source: Dk
        }
        of kk) ik += ek.encode(Dk).byteLength;
      return ik
    }

    function nk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > Pk) return `A file path is over ${Pk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Uk = /^(.*)\[rot\[([1-4])$/;

    function Hk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Dk = new Map;
      ek.forEach(((kk, ek) => {
        let {
          numAnimStates: ik,
          animStartIdx: fk
        } = kk;
        for (let Sk = 1; Sk < ik; Sk++) Dk.set(fk + Sk - 1, ek)
      }));
      const fk = Object.entries(kk),
        Sk = new Map;
      for (const [Hk, wk] of fk) {
        const kk = Uk.exec(Hk);
        "1" === kk?.[2] && Sk.set(kk[1], wk + 1)
      }
      const bk = kk => {
          const ek = Uk.exec(kk);
          return ek && Sk.has(ek[1]) ? {
            root: ek[1],
            rotation: Number(ek[2]) - 1
          } : null
        },
        rk = new Set(fk.map((kk => {
          let [ek] = kk;
          return bk(ek)?.root ?? ek
        }))),
        Pk = (kk, ik) => {
          const Dk = kk.replace(/_?0$/, "");
          return (ek[ik]?.numAnimStates ?? 0) > 1 && !rk.has(Dk) ? Dk : kk
        },
        mk = new Map;
      for (const [Uk, Hk] of fk) mk.set(Hk, Pk(bk(Uk)?.root ?? Uk, Hk));
      const Mk = fk.reduce(((kk, ek) => {
          let [, ik] = ek;
          return Math.max(kk, ik + 1)
        }), 0),
        Kk = Array.from({
          length: Mk
        }, ((kk, ek) => ({
          id: ek + 1,
          rotation: 0
        }))),
        xk = new Map,
        nk = new Map;
      for (const [Uk, Hk] of fk) {
        const kk = bk(Uk),
          ek = Dk.get(Hk);
        if (void 0 !== ek) {
          const ik = mk.get(ek);
          nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "frame"
          }), kk && !nk.has(kk.root) && nk.set(kk.root, {
            name: kk.root,
            texture: ik,
            kind: "frame"
          });
          continue
        }
        const ik = mk.get(Hk),
          fk = kk?.root ?? Uk;
        if (ik !== fk && nk.set(fk, {
            name: fk,
            texture: ik,
            kind: "frame"
          }), kk) {
          const ek = Sk.get(kk.root);
          Kk[Hk] = {
            id: ek,
            rotation: kk.rotation
          }, xk.set(ik, ek), nk.set(Uk, {
            name: Uk,
            texture: ik,
            kind: "rotation"
          })
        } else xk.set(ik, Hk + 1)
      }
      for (const Uk of xk.keys()) nk.delete(Uk);
      for (const [Uk, Hk] of ik) {
        const kk = xk.get(Hk);
        void 0 === kk || xk.has(Uk) || (xk.set(Uk, kk), nk.delete(Uk))
      }
      return {
        named: [...xk].sort(((kk, ek) => {
          let [ik] = kk, [Dk] = ek;
          return ik < Dk ? -1 : ik > Dk ? 1 : 0
        })).map((kk => {
          let [ek, ik] = kk;
          return {
            name: ek,
            id: ik
          }
        })),
        aliases: [...nk.values()],
        layers: Kk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);