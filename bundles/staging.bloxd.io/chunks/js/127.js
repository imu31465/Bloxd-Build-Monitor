export const id = 127;
export const ids = [127];
export const modules = {
  5578: (ee, ie, He) => {
    He.d(ie, {
      e: () => oe,
      f: () => Je
    });
    var ye = He(59),
      be = He(1438),
      Me = He(1127),
      Ke = He(97),
      Ue = He(3447),
      Fe = He(1228);

    function Je() {
      return !(0, Ke.isMobile)()
    }

    function oe(ee) {
      let {
        disabled: ie,
        openFolderPicker: He,
        onFiles: Ke
      } = ee;
      const {
        t: oe
      } = (0, Me.v)(), Re = (0, ye.useRef)(null);
      return (0, Fe.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, Fe.jsx)("input", {
          ref: Re,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(ee) {
            const ie = Array.from(ee.target.files);
            ee.target.value = "", Ke(ie)
          }
        }), Je() && (0, Fe.jsx)(be.c, {
          disabled: ie,
          onClick: He,
          children: oe("general:chooseFolder")
        }), (0, Fe.jsx)(be.c, {
          disabled: ie,
          onClick: () => {
            (0, Ue.f)(Re.current)
          },
          children: oe("general:chooseZip")
        })]
      })
    }
  },
  5557: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ue,
      e: () => Ke,
      i: () => Me
    });
    var ye = He(5563);
    const be = [ee => ee.strict ? "strict" : "nonStrict", ee => ee.program];

    function Me(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ye = {};
      for (const be in He) ye[be] = `\0${be}\0`;
      return ee(ie, ye).replace(/\0(\w+)\0/g, ((ee, ie) => He[ie]))
    }

    function Ke(ee) {
      return null === ee.file ? null : ee.line > 0 ? `${ee.file}:${ee.line}` : ee.file
    }

    function Ue(ee) {
      const ie = new Map(ee.map((ee => [Fe(ee).join("."), ee])));
      if (0 === ie.size) return [];
      const He = oe([...ie.values()]);
      return 0 === He[0].length ? [] : He
    }

    function Fe(ee) {
      return be.map((ie => ie(ee)))
    }
    const Je = be.map((ee => new Set(ye.g.map(ee)).size));

    function oe(ee) {
      const ie = be.map((ie => new Set(ee.map(ie)))),
        He = ie.reduce(((ee, ie) => ee * ie.size), 1),
        ye = ie.every(((ee, ie) => 1 === ee.size || ee.size === Je[ie]));
      if (He === ee.length && ye) return [be.filter(((ee, He) => 1 === ie[He].size)).map((ie => ie(ee[0])))];
      let Me = null;
      for (let Ke = 0; Ke < be.length; Ke++) {
        if (1 === ie[Ke].size) continue;
        const He = Re(ee, be[Ke]).flatMap(oe);
        (null === Me || He.length < Me.length) && (Me = He)
      }
      return Me
    }

    function Re(ee, ie) {
      const He = new Map;
      for (const be of ee) {
        var ye;
        const ee = ie(be);
        He.set(ee, [...null !== (ye = He.get(ee)) && void 0 !== ye ? ye : [], be])
      }
      return [...He.values()]
    }
  },
  7238: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ShaderPackPublishForm: () => Be
    });
    var ye = He(59),
      be = He(7206),
      Me = He(189),
      Ke = He(5570),
      Ue = He(1323),
      Fe = He(1438),
      Je = He(1674),
      oe = He(1075),
      Re = He(7242),
      ke = He(7247),
      qe = He(1490),
      fe = He(1127),
      Te = He(7249),
      pe = He(7283),
      Xe = He(7201),
      ze = He(1228);

    function Be(ee) {
      var ie, He, Re;
      let {
        existing: Be,
        onPublished: ge
      } = ee;
      const {
        t: de
      } = (0, fe.v)(), {
        userContext: We,
        isUserContextUpdating: te
      } = (0, oe.b)(), [Ze, we] = (0, ye.useState)(null), [De, Pe] = (0, ye.useState)(0), [Ae, Ye] = (0, ye.useState)(null !== (ie = null === Be || void 0 === Be ? void 0 : Be.name) && void 0 !== ie ? ie : ""), Ve = (0, ye.useRef)(Ae), ae = (0, ye.useRef)(""), ce = ee => {
        Ve.current = ee, Ye(ee)
      }, [xe, Le] = (0, ye.useState)(null !== (He = null === Be || void 0 === Be ? void 0 : Be.description) && void 0 !== He ? He : ""), Ce = (0, ye.useRef)(xe), ve = (0, ye.useRef)(""), ue = ee => {
        Ce.current = ee, Le(ee)
      }, [me, le] = (0, ye.useState)(!1), {
        loading: Se,
        error: ne,
        setError: je,
        onFiles: se
      } = (0, ke.f)((async ee => {
        const ie = await (0, Te.loadPageShaderPackCompiler)();
        if (!ie) return void je(de("shaderPack:compilerUnavailable"));
        const He = await (0, pe.g)(ie, ee.files);
        if (we({
            pack: ee,
            validation: He,
            sourceBytes: (0, Ke.t)(ee.files)
          }), !Be) {
          var ye;
          if ("" !== Ve.current.trim() && Ve.current !== ae.current || (ae.current = (0, be.M)(ee.manifest.name.trim(), be.y), ce(ae.current)), "" === Ce.current.trim() || Ce.current === ve.current) ve.current = (0, be.M)((null !== (ye = ee.manifest.description) && void 0 !== ye ? ye : "").trim(), be.o), ue(ve.current);
          Pe((ee => ee + 1))
        }
      })), Ie = !te && !We.isLoggedIn() && !Me.e.offlineMode, he = Ae.trim(), Ne = he.length < be.A, Ge = null !== Ze && !1 !== (null === (Re = Ze.validation) || void 0 === Re ? void 0 : Re.ok) && !Se && !Ne && !Ie && !te;
      return (0, ze.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, ze.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Be ? de("shaderPackListing:uploadIntro", {
            minutes: String(be.D / 6e4)
          }) : de("shaderPackListing:publishIntro")
        }), (0, ze.jsx)(Oe, {}), Ie && (0, ze.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: de("shaderPackListing:publishNeedsLogin")
        }), (0, ze.jsx)(ke.b, {
          busy: Se,
          disabled: Se || me,
          onFiles: ee => {
            we(null), se(ee)
          }
        }), Ze && (0, ze.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, ze.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Ze.pack.manifest.name
          }), (0, ze.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [de("shaderPackListing:sizeValue", {
              kilobytes: String((0, Xe.T)(Ze.sourceBytes))
            }), " \xb7", " ", de("shaderPackListing:filesValue", {
              files: String(Ze.pack.files.length)
            })]
          }), (0, ze.jsx)(Ee, {
            picked: Ze
          })]
        }), !Be && (0, ze.jsxs)(ze.Fragment, {
          children: [(0, ze.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ze.jsx)("span", {
              children: de("general:name")
            }), (0, ze.jsx)(Je.d, {
              className: "ShaderPackPublishInput",
              defaultValue: Ae,
              maxLength: be.y,
              onValueChange: ce
            }, De), Ze && Ne && (0, ze.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: de("shaderPackListing:nameTooShort", {
                min: String(be.A)
              })
            })]
          }), (0, ze.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, ze.jsx)("span", {
              children: de("general:description")
            }), (0, ze.jsx)(Je.d, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: xe,
              maxLength: be.o,
              onValueChange: ue,
              useTextarea: !0
            }, De)]
          })]
        }), ne && (0, ze.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: ne
        }), (0, ze.jsxs)(Fe.m, {
          className: "ShaderPackPublishButton",
          disabled: !Ge,
          loading: me,
          onClick: () => {
            !async function() {
              var ee;
              if (!Ze) return;
              const {
                name: ie,
                description: He
              } = null !== Be && void 0 !== Be ? Be : {
                name: he,
                description: xe.trim()
              }, ye = {
                packId: null !== (ee = null === Be || void 0 === Be ? void 0 : Be.packId) && void 0 !== ee ? ee : null,
                name: ie,
                description: He,
                apiVersion: Ze.pack.manifest.apiVersion,
                files: (0, Ke.s)(Ze.pack.files),
                keepCircleShadows: !0 === Ze.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(ye)).byteLength > 1024 * be.L) je(de("shaderPackListing:publishTooBig", {
                kilobytes: String(be.L)
              }));
              else {
                le(!0), je(null);
                try {
                  ge(await qe.b.publishShaderPack(We, ye))
                } catch (Me) {
                  console.error("Failed to publish the shader pack", Me), je((0, Xe.z)(Me, de, "shaderPackListing:publishFailed"))
                } finally {
                  le(!1)
                }
              }
            }()
          },
          children: [(0, ze.jsx)(Ue.e, {
            name: "upload"
          }), " ", de(Be ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Ee(ee) {
      let {
        picked: ie
      } = ee;
      const {
        t: He
      } = (0, fe.v)(), {
        validation: ye
      } = ie;
      return null === ye ? (0, ze.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: He("shaderPackListing:publishUnchecked")
      }) : ye.ok ? (0, ze.jsxs)(ze.Fragment, {
        children: [(0, ze.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, ze.jsx)(Ue.e, {
            name: "circle-check"
          }), " ", He("shaderPackListing:publishReady")]
        }), ye.offInStrict.length > 0 && (0, ze.jsxs)(ze.Fragment, {
          children: [(0, ze.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, ze.jsx)(Ue.e, {
              name: "triangle-exclamation"
            }), " ", He("shaderPack:offInStrict")]
          }), (0, ze.jsx)(Re.b, {
            diagnostics: ye.offInStrict,
            t: He
          })]
        })]
      }) : (0, ze.jsxs)(ze.Fragment, {
        children: [(0, ze.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, ze.jsx)(Ue.e, {
            name: "triangle-exclamation"
          }), " ", He("shaderPackListing:publishHasErrors")]
        }), (0, ze.jsx)(Re.b, {
          diagnostics: ye.errors,
          more: ye.moreErrors,
          t: He
        })]
      })
    }
    const ge = "\0";

    function Oe() {
      const {
        t: ee
      } = (0, fe.v)(), [ie, He] = ee("shaderPackListing:bloxdhubHelp", {
        site: ge
      }).split(ge);
      return (0, ze.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [ie, (0, ze.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: be.i,
          target: "_blank",
          rel: "noopener noreferrer",
          children: be.d
        }), He]
      })
    }
  },
  5563: (ee, ie, He) => {
    He.d(ie, {
      c: () => ye.e,
      g: () => be,
      h: () => ye.m
    });
    var ye = He(5570);
    const be = [!1, !0].flatMap((ee => ["terrain", "liquid", "model"].map((ie => ({
      strict: ee,
      program: ie
    })))))
  },
  5570: (ee, ie, He) => {
    He.d(ie, {
      b: () => Ue,
      d: () => Ke,
      e: () => ye,
      h: () => Te,
      k: () => Re,
      m: () => be,
      q: () => Me,
      r: () => Je,
      s: () => oe,
      t: () => ke
    });
    const ye = 5;

    function be(ee) {
      return ee === ye
    }

    function Me(ee) {
      return [...ee.features]
    }
    const Ke = 262144,
      Ue = 256,
      Fe = 256;

    function Je(ee) {
      if ("object" !== typeof ee || null === ee || Array.isArray(ee)) return "The pack has no files.";
      const ie = [];
      for (const [He, ye] of Object.entries(ee)) {
        if ("string" !== typeof ye) return `${He} isn't text.`;
        ie.push({
          path: He,
          source: ye
        })
      }
      return ie.sort(((ee, ie) => Re(ee.path, ie.path))),
        function(ee) {
          if (0 === ee.length) return "The pack has no .wgsl files.";
          if (ee.length > Ue) return `The pack has more than ${Ue} .wgsl files.`;
          const ie = new Set;
          for (const {
              path: He
            }
            of ee) {
            const ee = qe(He);
            if (null !== ee) return ee;
            if (ie.has(He)) return `The pack has two files at ${He}.`;
            ie.add(He)
          }
          return ke(ee) > Ke ? `The pack's .wgsl files are over ${Ke/1024} KB in total.` : null
        }(ie) ?? ie
    }

    function oe(ee) {
      const ie = {};
      for (const He of ee) ie[He.path] = He.source;
      return ie
    }

    function Re(ee, ie) {
      return ee < ie ? -1 : ee > ie ? 1 : 0
    }

    function ke(ee) {
      const ie = new TextEncoder;
      let He = 0;
      for (const {
          source: ye
        }
        of ee) He += ie.encode(ye).byteLength;
      return He
    }

    function qe(ee) {
      if (!ee.toLowerCase().endsWith(".wgsl")) return `${ee} isn't a .wgsl file.`;
      if (ee.length > Fe) return `A file path is over ${Fe} characters.`;
      if (ee.includes("\\") || /[\u0000-\u001f]/.test(ee)) return `${ee} isn't a valid file path.`;
      return ee.split("/").some((ee => "" === ee || "." === ee || ".." === ee)) ? `${ee} isn't a valid file path.` : null
    }
    const fe = /^(.*)\[rot\[([1-4])$/;

    function Te(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const ye = new Map;
      ie.forEach(((ee, ie) => {
        let {
          numAnimStates: He,
          animStartIdx: be
        } = ee;
        for (let Me = 1; Me < He; Me++) ye.set(be + Me - 1, ie)
      }));
      const be = Object.entries(ee),
        Me = new Map;
      for (const [Te, pe] of be) {
        const ee = fe.exec(Te);
        "1" === ee?.[2] && Me.set(ee[1], pe + 1)
      }
      const Ke = ee => {
          const ie = fe.exec(ee);
          return ie && Me.has(ie[1]) ? {
            root: ie[1],
            rotation: Number(ie[2]) - 1
          } : null
        },
        Ue = new Set(be.map((ee => {
          let [ie] = ee;
          return Ke(ie)?.root ?? ie
        }))),
        Fe = (ee, He) => {
          const ye = ee.replace(/_?0$/, "");
          return (ie[He]?.numAnimStates ?? 0) > 1 && !Ue.has(ye) ? ye : ee
        },
        Je = new Map;
      for (const [fe, Te] of be) Je.set(Te, Fe(Ke(fe)?.root ?? fe, Te));
      const oe = be.reduce(((ee, ie) => {
          let [, He] = ie;
          return Math.max(ee, He + 1)
        }), 0),
        Re = Array.from({
          length: oe
        }, ((ee, ie) => ({
          id: ie + 1,
          rotation: 0
        }))),
        ke = new Map,
        qe = new Map;
      for (const [fe, Te] of be) {
        const ee = Ke(fe),
          ie = ye.get(Te);
        if (void 0 !== ie) {
          const He = Je.get(ie);
          qe.set(fe, {
            name: fe,
            texture: He,
            kind: "frame"
          }), ee && !qe.has(ee.root) && qe.set(ee.root, {
            name: ee.root,
            texture: He,
            kind: "frame"
          });
          continue
        }
        const He = Je.get(Te),
          be = ee?.root ?? fe;
        if (He !== be && qe.set(be, {
            name: be,
            texture: He,
            kind: "frame"
          }), ee) {
          const ie = Me.get(ee.root);
          Re[Te] = {
            id: ie,
            rotation: ee.rotation
          }, ke.set(He, ie), qe.set(fe, {
            name: fe,
            texture: He,
            kind: "rotation"
          })
        } else ke.set(He, Te + 1)
      }
      for (const fe of ke.keys()) qe.delete(fe);
      for (const [fe, Te] of He) {
        const ee = ke.get(Te);
        void 0 === ee || ke.has(fe) || (ke.set(fe, ee), qe.delete(fe))
      }
      return {
        named: [...ke].sort(((ee, ie) => {
          let [He] = ee, [ye] = ie;
          return He < ye ? -1 : He > ye ? 1 : 0
        })).map((ee => {
          let [ie, He] = ee;
          return {
            name: ie,
            id: He
          }
        })),
        aliases: [...qe.values()],
        layers: Re
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);