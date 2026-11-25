export const id = 114;
export const ids = [114];
export const modules = {
  5216: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Cu,
      h: () => fu
    });
    var su = ju(58),
      Uu = ju(1506),
      Zu = ju(1244),
      Xu = ju(91),
      lu = ju(3318),
      qu = ju(1154);

    function fu() {
      return !(0, Xu.isMobile)()
    }

    function Cu(uu) {
      let {
        disabled: Eu,
        openFolderPicker: ju,
        onFiles: Xu
      } = uu;
      const {
        t: Cu
      } = (0, Zu.A)(), bu = (0, su.useRef)(null);
      return (0, qu.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, qu.jsx)("input", {
          ref: bu,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(uu) {
            const Eu = Array.from(uu.target.files);
            uu.target.value = "", Xu(Eu)
          }
        }), fu() && (0, qu.jsx)(Uu.f, {
          disabled: Eu,
          onClick: ju,
          children: Cu("general:chooseFolder")
        }), (0, qu.jsx)(Uu.f, {
          disabled: Eu,
          onClick: () => {
            (0, lu.e)(bu.current)
          },
          children: Cu("general:chooseZip")
        })]
      })
    }
  },
  5197: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => lu,
      f: () => Xu,
      g: () => Zu
    });
    var su = ju(5206);
    const Uu = [uu => uu.strict ? "strict" : "nonStrict", uu => uu.program];

    function Zu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const su = {};
      for (const Uu in ju) su[Uu] = `\0${Uu}\0`;
      return uu(Eu, su).replace(/\0(\w+)\0/g, ((uu, Eu) => ju[Eu]))
    }

    function Xu(uu) {
      return null === uu.file ? null : uu.line > 0 ? `${uu.file}:${uu.line}` : uu.file
    }

    function lu(uu) {
      const Eu = new Map(uu.map((uu => [qu(uu).join("."), uu])));
      if (0 === Eu.size) return [];
      const ju = Cu([...Eu.values()]);
      return 0 === ju[0].length ? [] : ju
    }

    function qu(uu) {
      return Uu.map((Eu => Eu(uu)))
    }
    const fu = Uu.map((uu => new Set(su.h.map(uu)).size));

    function Cu(uu) {
      const Eu = Uu.map((Eu => new Set(uu.map(Eu)))),
        ju = Eu.reduce(((uu, Eu) => uu * Eu.size), 1),
        su = Eu.every(((uu, Eu) => 1 === uu.size || uu.size === fu[Eu]));
      if (ju === uu.length && su) return [Uu.filter(((uu, ju) => 1 === Eu[ju].size)).map((Eu => Eu(uu[0])))];
      let Zu = null;
      for (let Xu = 0; Xu < Uu.length; Xu++) {
        if (1 === Eu[Xu].size) continue;
        const ju = bu(uu, Uu[Xu]).flatMap(Cu);
        (null === Zu || ju.length < Zu.length) && (Zu = ju)
      }
      return Zu
    }

    function bu(uu, Eu) {
      const ju = new Map;
      for (const Uu of uu) {
        var su;
        const uu = Eu(Uu);
        ju.set(uu, [...null !== (su = ju.get(uu)) && void 0 !== su ? su : [], Uu])
      }
      return [...ju.values()]
    }
  },
  6796: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ShaderPackPublishForm: () => Mu
    });
    var su = ju(58),
      Uu = ju(6764),
      Zu = ju(204),
      Xu = ju(5209),
      lu = ju(1116),
      qu = ju(1506),
      fu = ju(1723),
      Cu = ju(1178),
      bu = ju(6800),
      cu = ju(6806),
      Nu = ju(1559),
      Ou = ju(1244),
      Yu = ju(6810),
      hu = ju(6849),
      Du = ju(6761),
      gu = ju(1154);

    function Mu(uu) {
      var Eu, ju, bu;
      let {
        existing: Mu,
        onPublished: Gu
      } = uu;
      const {
        t: wu
      } = (0, Ou.A)(), {
        userContext: Ju,
        isUserContextUpdating: du
      } = (0, Cu.c)(), [au, Pu] = (0, su.useState)(null), [ou, ku] = (0, su.useState)(0), [mu, vu] = (0, su.useState)(null !== (Eu = null === Mu || void 0 === Mu ? void 0 : Mu.name) && void 0 !== Eu ? Eu : ""), Ku = (0, su.useRef)(mu), Vu = (0, su.useRef)(""), ru = uu => {
        Ku.current = uu, vu(uu)
      }, [Qu, iu] = (0, su.useState)(null !== (ju = null === Mu || void 0 === Mu ? void 0 : Mu.description) && void 0 !== ju ? ju : ""), Wu = (0, su.useRef)(Qu), Su = (0, su.useRef)(""), Iu = uu => {
        Wu.current = uu, iu(uu)
      }, [Fu, Bu] = (0, su.useState)(!1), {
        loading: Lu,
        error: tu,
        setError: xu,
        onFiles: Tu
      } = (0, cu.g)((async uu => {
        const Eu = await (0, Yu.loadPageShaderPackCompiler)();
        if (!Eu) return void xu(wu("shaderPack:compilerUnavailable"));
        const ju = await (0, hu.e)(Eu, uu.files);
        if (Pu({
            pack: uu,
            validation: ju,
            sourceBytes: (0, Xu.A)(uu.files)
          }), !Mu) {
          var su;
          if ("" !== Ku.current.trim() && Ku.current !== Vu.current || (Vu.current = (0, Uu._)(uu.manifest.name.trim(), Uu.F), ru(Vu.current)), "" === Wu.current.trim() || Wu.current === Su.current) Su.current = (0, Uu._)((null !== (su = uu.manifest.description) && void 0 !== su ? su : "").trim(), Uu.x), Iu(Su.current);
          ku((uu => uu + 1))
        }
      })), Hu = !du && !Ju.isLoggedIn() && !Zu.d.offlineMode, Au = mu.trim(), nu = Au.length < Uu.I, yu = null !== au && !1 !== (null === (bu = au.validation) || void 0 === bu ? void 0 : bu.ok) && !Lu && !nu && !Hu && !du;
      return (0, gu.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, gu.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Mu ? wu("shaderPackListing:uploadIntro", {
            minutes: String(Uu.Q / 6e4)
          }) : wu("shaderPackListing:publishIntro")
        }), (0, gu.jsx)(pu, {}), Hu && (0, gu.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: wu("shaderPackListing:publishNeedsLogin")
        }), (0, gu.jsx)(cu.c, {
          busy: Lu,
          disabled: Lu || Fu,
          onFiles: uu => {
            Pu(null), Tu(uu)
          }
        }), au && (0, gu.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, gu.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: au.pack.manifest.name
          }), (0, gu.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [wu("shaderPackListing:sizeValue", {
              kilobytes: String((0, Du.M)(au.sourceBytes))
            }), " \xb7", " ", wu("shaderPackListing:filesValue", {
              files: String(au.pack.files.length)
            })]
          }), (0, gu.jsx)(eu, {
            picked: au
          })]
        }), !Mu && (0, gu.jsxs)(gu.Fragment, {
          children: [(0, gu.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, gu.jsx)("span", {
              children: wu("general:name")
            }), (0, gu.jsx)(fu.d, {
              className: "ShaderPackPublishInput",
              defaultValue: mu,
              maxLength: Uu.F,
              onValueChange: ru
            }, ou), au && nu && (0, gu.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: wu("shaderPackListing:nameTooShort", {
                min: String(Uu.I)
              })
            })]
          }), (0, gu.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, gu.jsx)("span", {
              children: wu("general:description")
            }), (0, gu.jsx)(fu.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Qu,
              maxLength: Uu.x,
              onValueChange: Iu,
              useTextarea: !0
            }, ou)]
          })]
        }), tu && (0, gu.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: tu
        }), (0, gu.jsxs)(qu.p, {
          className: "ShaderPackPublishButton",
          disabled: !yu,
          loading: Fu,
          onClick: () => {
            !async function() {
              var uu;
              if (!au) return;
              const {
                name: Eu,
                description: ju
              } = null !== Mu && void 0 !== Mu ? Mu : {
                name: Au,
                description: Qu.trim()
              }, su = {
                packId: null !== (uu = null === Mu || void 0 === Mu ? void 0 : Mu.packId) && void 0 !== uu ? uu : null,
                name: Eu,
                description: ju,
                apiVersion: au.pack.manifest.apiVersion,
                files: (0, Xu.w)(au.pack.files),
                keepCircleShadows: !0 === au.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(su)).byteLength > 1024 * Uu.X) xu(wu("shaderPackListing:publishTooBig", {
                kilobytes: String(Uu.X)
              }));
              else {
                Bu(!0), xu(null);
                try {
                  Gu(await Nu.b.publishShaderPack(Ju, su))
                } catch (Zu) {
                  console.error("Failed to publish the shader pack", Zu), xu((0, Du.x)(Zu, wu, "shaderPackListing:publishFailed"))
                } finally {
                  Bu(!1)
                }
              }
            }()
          },
          children: [(0, gu.jsx)(lu.e, {
            name: "upload"
          }), " ", wu(Mu ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function eu(uu) {
      let {
        picked: Eu
      } = uu;
      const {
        t: ju
      } = (0, Ou.A)(), {
        validation: su
      } = Eu;
      return null === su ? (0, gu.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: ju("shaderPackListing:publishUnchecked")
      }) : su.ok ? (0, gu.jsxs)(gu.Fragment, {
        children: [(0, gu.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, gu.jsx)(lu.e, {
            name: "circle-check"
          }), " ", ju("shaderPackListing:publishReady")]
        }), su.offInStrict.length > 0 && (0, gu.jsxs)(gu.Fragment, {
          children: [(0, gu.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, gu.jsx)(lu.e, {
              name: "triangle-exclamation"
            }), " ", ju("shaderPack:offInStrict")]
          }), (0, gu.jsx)(bu.d, {
            diagnostics: su.offInStrict,
            t: ju
          })]
        })]
      }) : (0, gu.jsxs)(gu.Fragment, {
        children: [(0, gu.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, gu.jsx)(lu.e, {
            name: "triangle-exclamation"
          }), " ", ju("shaderPackListing:publishHasErrors")]
        }), (0, gu.jsx)(bu.d, {
          diagnostics: su.errors,
          more: su.moreErrors,
          t: ju
        })]
      })
    }
    const Gu = "\0";

    function pu() {
      const {
        t: uu
      } = (0, Ou.A)(), [Eu, ju] = uu("shaderPackListing:bloxdhubHelp", {
        site: Gu
      }).split(Gu);
      return (0, gu.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Eu, (0, gu.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Uu.j,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Uu.c
        }), ju]
      })
    }
  },
  5206: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.h,
      h: () => Uu,
      k: () => su.o
    });
    var su = ju(5209);
    const Uu = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Eu => ({
      strict: uu,
      program: Eu
    })))))
  },
  5209: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      c: () => lu,
      e: () => Xu,
      h: () => su,
      j: () => Yu,
      k: () => bu,
      o: () => Uu,
      p: () => Zu,
      s: () => fu,
      w: () => Cu
    });
    const su = 5;

    function Uu(uu) {
      return uu === su
    }

    function Zu(uu) {
      return [...uu.features]
    }
    const Xu = 262144,
      lu = 256,
      qu = 256;

    function fu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Eu = [];
      for (const [ju, su] of Object.entries(uu)) {
        if ("string" !== typeof su) return `${ju} isn't text.`;
        Eu.push({
          path: ju,
          source: su
        })
      }
      return Eu.sort(((uu, Eu) => bu(uu.path, Eu.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > lu) return `The pack has more than ${lu} .wgsl files.`;
          const Eu = new Set;
          for (const {
              path: ju
            }
            of uu) {
            const uu = Nu(ju);
            if (null !== uu) return uu;
            if (Eu.has(ju)) return `The pack has two files at ${ju}.`;
            Eu.add(ju)
          }
          return cu(uu) > Xu ? `The pack's .wgsl files are over ${Xu/1024} KB in total.` : null
        }(Eu) ?? Eu
    }

    function Cu(uu) {
      const Eu = {};
      for (const ju of uu) Eu[ju.path] = ju.source;
      return Eu
    }

    function bu(uu, Eu) {
      return uu < Eu ? -1 : uu > Eu ? 1 : 0
    }

    function cu(uu) {
      const Eu = new TextEncoder;
      let ju = 0;
      for (const {
          source: su
        }
        of uu) ju += Eu.encode(su).byteLength;
      return ju
    }

    function Nu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > qu) return `A file path is over ${qu} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const Ou = /^(.*)\[rot\[([1-4])$/;

    function Yu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const su = new Map;
      Eu.forEach(((uu, Eu) => {
        let {
          numAnimStates: ju,
          animStartIdx: Uu
        } = uu;
        for (let Zu = 1; Zu < ju; Zu++) su.set(Uu + Zu - 1, Eu)
      }));
      const Uu = Object.entries(uu),
        Zu = new Map;
      for (const [Yu, hu] of Uu) {
        const uu = Ou.exec(Yu);
        "1" === uu?.[2] && Zu.set(uu[1], hu + 1)
      }
      const Xu = uu => {
          const Eu = Ou.exec(uu);
          return Eu && Zu.has(Eu[1]) ? {
            root: Eu[1],
            rotation: Number(Eu[2]) - 1
          } : null
        },
        lu = new Set(Uu.map((uu => {
          let [Eu] = uu;
          return Xu(Eu)?.root ?? Eu
        }))),
        qu = (uu, ju) => {
          const su = uu.replace(/_?0$/, "");
          return (Eu[ju]?.numAnimStates ?? 0) > 1 && !lu.has(su) ? su : uu
        },
        fu = new Map;
      for (const [Ou, Yu] of Uu) fu.set(Yu, qu(Xu(Ou)?.root ?? Ou, Yu));
      const Cu = Uu.reduce(((uu, Eu) => {
          let [, ju] = Eu;
          return Math.max(uu, ju + 1)
        }), 0),
        bu = Array.from({
          length: Cu
        }, ((uu, Eu) => ({
          id: Eu + 1,
          rotation: 0
        }))),
        cu = new Map,
        Nu = new Map;
      for (const [Ou, Yu] of Uu) {
        const uu = Xu(Ou),
          Eu = su.get(Yu);
        if (void 0 !== Eu) {
          const ju = fu.get(Eu);
          Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "frame"
          }), uu && !Nu.has(uu.root) && Nu.set(uu.root, {
            name: uu.root,
            texture: ju,
            kind: "frame"
          });
          continue
        }
        const ju = fu.get(Yu),
          Uu = uu?.root ?? Ou;
        if (ju !== Uu && Nu.set(Uu, {
            name: Uu,
            texture: ju,
            kind: "frame"
          }), uu) {
          const Eu = Zu.get(uu.root);
          bu[Yu] = {
            id: Eu,
            rotation: uu.rotation
          }, cu.set(ju, Eu), Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "rotation"
          })
        } else cu.set(ju, Yu + 1)
      }
      for (const Ou of cu.keys()) Nu.delete(Ou);
      for (const [Ou, Yu] of ju) {
        const uu = cu.get(Yu);
        void 0 === uu || cu.has(Ou) || (cu.set(Ou, uu), Nu.delete(Ou))
      }
      return {
        named: [...cu].sort(((uu, Eu) => {
          let [ju] = uu, [su] = Eu;
          return ju < su ? -1 : ju > su ? 1 : 0
        })).map((uu => {
          let [Eu, ju] = uu;
          return {
            name: Eu,
            id: ju
          }
        })),
        aliases: [...Nu.values()],
        layers: bu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);