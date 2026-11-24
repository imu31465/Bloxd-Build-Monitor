export const id = 112;
export const ids = [112];
export const modules = {
  4993: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Rm,
      h: () => im
    });
    var hm = fm(59),
      Am = fm(1454),
      am = fm(1208),
      xm = fm(105),
      wm = fm(3139),
      Dm = fm(1135);

    function im() {
      return !(0, xm.isMobile)()
    }

    function Rm(mm) {
      let {
        disabled: Tm,
        openFolderPicker: fm,
        onFiles: xm
      } = mm;
      const {
        t: Rm
      } = (0, am.A)(), pm = (0, hm.useRef)(null);
      return (0, Dm.jsxs)("div", {
        className: "PackPickButtons",
        "data-pad-mouse-only": !0,
        children: [(0, Dm.jsx)("input", {
          ref: pm,
          type: "file",
          accept: ".zip,application/zip",
          hidden: !0,
          onChange: function(mm) {
            const Tm = Array.from(mm.target.files);
            mm.target.value = "", xm(Tm)
          }
        }), im() && (0, Dm.jsx)(Am.e, {
          disabled: Tm,
          onClick: fm,
          children: Rm("general:chooseFolder")
        }), (0, Dm.jsx)(Am.e, {
          disabled: Tm,
          onClick: () => {
            (0, wm.e)(pm.current)
          },
          children: Rm("general:chooseZip")
        })]
      })
    }
  },
  4980: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => wm,
      f: () => xm,
      j: () => am
    });
    var hm = fm(4985);
    const Am = [mm => mm.strict ? "strict" : "nonStrict", mm => mm.program];

    function am(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const hm = {};
      for (const Am in fm) hm[Am] = `\0${Am}\0`;
      return mm(Tm, hm).replace(/\0(\w+)\0/g, ((mm, Tm) => fm[Tm]))
    }

    function xm(mm) {
      return null === mm.file ? null : mm.line > 0 ? `${mm.file}:${mm.line}` : mm.file
    }

    function wm(mm) {
      const Tm = new Map(mm.map((mm => [Dm(mm).join("."), mm])));
      if (0 === Tm.size) return [];
      const fm = Rm([...Tm.values()]);
      return 0 === fm[0].length ? [] : fm
    }

    function Dm(mm) {
      return Am.map((Tm => Tm(mm)))
    }
    const im = Am.map((mm => new Set(hm.d.map(mm)).size));

    function Rm(mm) {
      const Tm = Am.map((Tm => new Set(mm.map(Tm)))),
        fm = Tm.reduce(((mm, Tm) => mm * Tm.size), 1),
        hm = Tm.every(((mm, Tm) => 1 === mm.size || mm.size === im[Tm]));
      if (fm === mm.length && hm) return [Am.filter(((mm, fm) => 1 === Tm[fm].size)).map((Tm => Tm(mm[0])))];
      let am = null;
      for (let xm = 0; xm < Am.length; xm++) {
        if (1 === Tm[xm].size) continue;
        const fm = pm(mm, Am[xm]).flatMap(Rm);
        (null === am || fm.length < am.length) && (am = fm)
      }
      return am
    }

    function pm(mm, Tm) {
      const fm = new Map;
      for (const Am of mm) {
        var hm;
        const mm = Tm(Am);
        fm.set(mm, [...null !== (hm = fm.get(mm)) && void 0 !== hm ? hm : [], Am])
      }
      return [...fm.values()]
    }
  },
  6547: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ShaderPackPublishForm: () => Im
    });
    var hm = fm(59),
      Am = fm(6509),
      am = fm(201),
      xm = fm(4989),
      wm = fm(1089),
      Dm = fm(1454),
      im = fm(1676),
      Rm = fm(1160),
      pm = fm(6552),
      Em = fm(6555),
      om = fm(1494),
      Om = fm(1208),
      Ym = fm(6562),
      qm = fm(6595),
      jm = fm(6507),
      Vm = fm(1135);

    function Im(mm) {
      var Tm, fm, pm;
      let {
        existing: Im,
        onPublished: Qm
      } = mm;
      const {
        t: Jm
      } = (0, Om.A)(), {
        userContext: cm,
        isUserContextUpdating: zm
      } = (0, Rm.e)(), [Zm, km] = (0, hm.useState)(null), [bm, Sm] = (0, hm.useState)(0), [em, Nm] = (0, hm.useState)(null !== (Tm = null === Im || void 0 === Im ? void 0 : Im.name) && void 0 !== Tm ? Tm : ""), Gm = (0, hm.useRef)(em), Xm = (0, hm.useRef)(""), Pm = mm => {
        Gm.current = mm, Nm(mm)
      }, [Hm, ym] = (0, hm.useState)(null !== (fm = null === Im || void 0 === Im ? void 0 : Im.description) && void 0 !== fm ? fm : ""), Cm = (0, hm.useRef)(Hm), rm = (0, hm.useRef)(""), sm = mm => {
        Cm.current = mm, ym(mm)
      }, [lm, Mm] = (0, hm.useState)(!1), {
        loading: um,
        error: Bm,
        setError: Lm,
        onFiles: tm
      } = (0, Em.f)((async mm => {
        const Tm = await (0, Ym.loadPageShaderPackCompiler)();
        if (!Tm) return void Lm(Jm("shaderPack:compilerUnavailable"));
        const fm = await (0, qm.f)(Tm, mm.files);
        if (km({
            pack: mm,
            validation: fm,
            sourceBytes: (0, xm.t)(mm.files)
          }), !Im) {
          var hm;
          if ("" !== Gm.current.trim() && Gm.current !== Xm.current || (Xm.current = (0, Am.X)(mm.manifest.name.trim(), Am.D), Pm(Xm.current)), "" === Cm.current.trim() || Cm.current === rm.current) rm.current = (0, Am.X)((null !== (hm = mm.manifest.description) && void 0 !== hm ? hm : "").trim(), Am.r), sm(rm.current);
          Sm((mm => mm + 1))
        }
      })), Um = !zm && !cm.isLoggedIn() && !am.e.offlineMode, dm = em.trim(), gm = dm.length < Am.H, Wm = null !== Zm && !1 !== (null === (pm = Zm.validation) || void 0 === pm ? void 0 : pm.ok) && !um && !gm && !Um && !zm;
      return (0, Vm.jsxs)("div", {
        className: "ShaderPackPublishForm",
        children: [(0, Vm.jsx)("p", {
          className: "ShaderPackPublishIntro",
          children: Im ? Jm("shaderPackListing:uploadIntro", {
            minutes: String(Am.L / 6e4)
          }) : Jm("shaderPackListing:publishIntro")
        }), (0, Vm.jsx)(nm, {}), Um && (0, Vm.jsx)("div", {
          className: "ShaderPackPublishNote Warning",
          children: Jm("shaderPackListing:publishNeedsLogin")
        }), (0, Vm.jsx)(Em.c, {
          busy: um,
          disabled: um || lm,
          onFiles: mm => {
            km(null), tm(mm)
          }
        }), Zm && (0, Vm.jsxs)("div", {
          className: "ShaderPackPublishSummary",
          children: [(0, Vm.jsx)("div", {
            className: "ShaderPackPublishPackName",
            children: Zm.pack.manifest.name
          }), (0, Vm.jsxs)("div", {
            className: "ShaderPackPublishPackSize",
            children: [Jm("shaderPackListing:sizeValue", {
              kilobytes: String((0, jm.N)(Zm.sourceBytes))
            }), " \xb7", " ", Jm("shaderPackListing:filesValue", {
              files: String(Zm.pack.files.length)
            })]
          }), (0, Vm.jsx)(Km, {
            picked: Zm
          })]
        }), !Im && (0, Vm.jsxs)(Vm.Fragment, {
          children: [(0, Vm.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Vm.jsx)("span", {
              children: Jm("general:name")
            }), (0, Vm.jsx)(im.e, {
              className: "ShaderPackPublishInput",
              defaultValue: em,
              maxLength: Am.D,
              onValueChange: Pm
            }, bm), Zm && gm && (0, Vm.jsx)("span", {
              className: "ShaderPackPublishHint",
              children: Jm("shaderPackListing:nameTooShort", {
                min: String(Am.H)
              })
            })]
          }), (0, Vm.jsxs)("label", {
            className: "ShaderPackPublishField",
            children: [(0, Vm.jsx)("span", {
              children: Jm("general:description")
            }), (0, Vm.jsx)(im.e, {
              className: "ShaderPackPublishInput ShaderPackPublishDescription",
              defaultValue: Hm,
              maxLength: Am.r,
              onValueChange: sm,
              useTextarea: !0
            }, bm)]
          })]
        }), Bm && (0, Vm.jsx)("div", {
          className: "ShaderPackPublishNote Error",
          children: Bm
        }), (0, Vm.jsxs)(Dm.m, {
          className: "ShaderPackPublishButton",
          disabled: !Wm,
          loading: lm,
          onClick: () => {
            !async function() {
              var mm;
              if (!Zm) return;
              const {
                name: Tm,
                description: fm
              } = null !== Im && void 0 !== Im ? Im : {
                name: dm,
                description: Hm.trim()
              }, hm = {
                packId: null !== (mm = null === Im || void 0 === Im ? void 0 : Im.packId) && void 0 !== mm ? mm : null,
                name: Tm,
                description: fm,
                apiVersion: Zm.pack.manifest.apiVersion,
                files: (0, xm.r)(Zm.pack.files),
                keepCircleShadows: !0 === Zm.pack.manifest.keepCircleShadows
              };
              if ((new TextEncoder).encode(JSON.stringify(hm)).byteLength > 1024 * Am.V) Lm(Jm("shaderPackListing:publishTooBig", {
                kilobytes: String(Am.V)
              }));
              else {
                Mm(!0), Lm(null);
                try {
                  Qm(await om.d.publishShaderPack(cm, hm))
                } catch (am) {
                  console.error("Failed to publish the shader pack", am), Lm((0, jm.x)(am, Jm, "shaderPackListing:publishFailed"))
                } finally {
                  Mm(!1)
                }
              }
            }()
          },
          children: [(0, Vm.jsx)(wm.c, {
            name: "upload"
          }), " ", Jm(Im ? "shaderPackListing:uploadButton" : "shaderPackListing:publishButton")]
        })]
      })
    }

    function Km(mm) {
      let {
        picked: Tm
      } = mm;
      const {
        t: fm
      } = (0, Om.A)(), {
        validation: hm
      } = Tm;
      return null === hm ? (0, Vm.jsx)("div", {
        className: "ShaderPackPublishNote",
        children: fm("shaderPackListing:publishUnchecked")
      }) : hm.ok ? (0, Vm.jsxs)(Vm.Fragment, {
        children: [(0, Vm.jsxs)("div", {
          className: "ShaderPackPublishNote Ready",
          children: [(0, Vm.jsx)(wm.c, {
            name: "circle-check"
          }), " ", fm("shaderPackListing:publishReady")]
        }), hm.offInStrict.length > 0 && (0, Vm.jsxs)(Vm.Fragment, {
          children: [(0, Vm.jsxs)("div", {
            className: "ShaderPackPublishNote Warning",
            children: [(0, Vm.jsx)(wm.c, {
              name: "triangle-exclamation"
            }), " ", fm("shaderPack:offInStrict")]
          }), (0, Vm.jsx)(pm.c, {
            diagnostics: hm.offInStrict,
            t: fm
          })]
        })]
      }) : (0, Vm.jsxs)(Vm.Fragment, {
        children: [(0, Vm.jsxs)("div", {
          className: "ShaderPackPublishNote Error",
          children: [(0, Vm.jsx)(wm.c, {
            name: "triangle-exclamation"
          }), " ", fm("shaderPackListing:publishHasErrors")]
        }), (0, Vm.jsx)(pm.c, {
          diagnostics: hm.errors,
          more: hm.moreErrors,
          t: fm
        })]
      })
    }
    const Qm = "\0";

    function nm() {
      const {
        t: mm
      } = (0, Om.A)(), [Tm, fm] = mm("shaderPackListing:bloxdhubHelp", {
        site: Qm
      }).split(Qm);
      return (0, Vm.jsxs)("p", {
        className: "ShaderPackPublishIntro",
        children: [Tm, (0, Vm.jsx)("a", {
          className: "ShaderPackPublishLink",
          href: Am.k,
          target: "_blank",
          rel: "noopener noreferrer",
          children: Am.e
        }), fm]
      })
    }
  },
  4985: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.d,
      d: () => Am,
      e: () => hm.l
    });
    var hm = fm(4989);
    const Am = [!1, !0].flatMap((mm => ["terrain", "liquid", "model"].map((Tm => ({
      strict: mm,
      program: Tm
    })))))
  },
  4989: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => wm,
      c: () => xm,
      d: () => hm,
      g: () => Ym,
      i: () => pm,
      l: () => Am,
      o: () => am,
      q: () => im,
      r: () => Rm,
      t: () => Em
    });
    const hm = 5;

    function Am(mm) {
      return mm === hm
    }

    function am(mm) {
      return [...mm.features]
    }
    const xm = 262144,
      wm = 256,
      Dm = 256;

    function im(mm) {
      if ("object" !== typeof mm || null === mm || Array.isArray(mm)) return "The pack has no files.";
      const Tm = [];
      for (const [fm, hm] of Object.entries(mm)) {
        if ("string" !== typeof hm) return `${fm} isn't text.`;
        Tm.push({
          path: fm,
          source: hm
        })
      }
      return Tm.sort(((mm, Tm) => pm(mm.path, Tm.path))),
        function(mm) {
          if (0 === mm.length) return "The pack has no .wgsl files.";
          if (mm.length > wm) return `The pack has more than ${wm} .wgsl files.`;
          const Tm = new Set;
          for (const {
              path: fm
            }
            of mm) {
            const mm = om(fm);
            if (null !== mm) return mm;
            if (Tm.has(fm)) return `The pack has two files at ${fm}.`;
            Tm.add(fm)
          }
          return Em(mm) > xm ? `The pack's .wgsl files are over ${xm/1024} KB in total.` : null
        }(Tm) ?? Tm
    }

    function Rm(mm) {
      const Tm = {};
      for (const fm of mm) Tm[fm.path] = fm.source;
      return Tm
    }

    function pm(mm, Tm) {
      return mm < Tm ? -1 : mm > Tm ? 1 : 0
    }

    function Em(mm) {
      const Tm = new TextEncoder;
      let fm = 0;
      for (const {
          source: hm
        }
        of mm) fm += Tm.encode(hm).byteLength;
      return fm
    }

    function om(mm) {
      if (!mm.toLowerCase().endsWith(".wgsl")) return `${mm} isn't a .wgsl file.`;
      if (mm.length > Dm) return `A file path is over ${Dm} characters.`;
      if (mm.includes("\\") || /[\u0000-\u001f]/.test(mm)) return `${mm} isn't a valid file path.`;
      return mm.split("/").some((mm => "" === mm || "." === mm || ".." === mm)) ? `${mm} isn't a valid file path.` : null
    }
    const Om = /^(.*)\[rot\[([1-4])$/;

    function Ym(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const hm = new Map;
      Tm.forEach(((mm, Tm) => {
        let {
          numAnimStates: fm,
          animStartIdx: Am
        } = mm;
        for (let am = 1; am < fm; am++) hm.set(Am + am - 1, Tm)
      }));
      const Am = Object.entries(mm),
        am = new Map;
      for (const [Ym, qm] of Am) {
        const mm = Om.exec(Ym);
        "1" === mm?.[2] && am.set(mm[1], qm + 1)
      }
      const xm = mm => {
          const Tm = Om.exec(mm);
          return Tm && am.has(Tm[1]) ? {
            root: Tm[1],
            rotation: Number(Tm[2]) - 1
          } : null
        },
        wm = new Set(Am.map((mm => {
          let [Tm] = mm;
          return xm(Tm)?.root ?? Tm
        }))),
        Dm = (mm, fm) => {
          const hm = mm.replace(/_?0$/, "");
          return (Tm[fm]?.numAnimStates ?? 0) > 1 && !wm.has(hm) ? hm : mm
        },
        im = new Map;
      for (const [Om, Ym] of Am) im.set(Ym, Dm(xm(Om)?.root ?? Om, Ym));
      const Rm = Am.reduce(((mm, Tm) => {
          let [, fm] = Tm;
          return Math.max(mm, fm + 1)
        }), 0),
        pm = Array.from({
          length: Rm
        }, ((mm, Tm) => ({
          id: Tm + 1,
          rotation: 0
        }))),
        Em = new Map,
        om = new Map;
      for (const [Om, Ym] of Am) {
        const mm = xm(Om),
          Tm = hm.get(Ym);
        if (void 0 !== Tm) {
          const fm = im.get(Tm);
          om.set(Om, {
            name: Om,
            texture: fm,
            kind: "frame"
          }), mm && !om.has(mm.root) && om.set(mm.root, {
            name: mm.root,
            texture: fm,
            kind: "frame"
          });
          continue
        }
        const fm = im.get(Ym),
          Am = mm?.root ?? Om;
        if (fm !== Am && om.set(Am, {
            name: Am,
            texture: fm,
            kind: "frame"
          }), mm) {
          const Tm = am.get(mm.root);
          pm[Ym] = {
            id: Tm,
            rotation: mm.rotation
          }, Em.set(fm, Tm), om.set(Om, {
            name: Om,
            texture: fm,
            kind: "rotation"
          })
        } else Em.set(fm, Ym + 1)
      }
      for (const Om of Em.keys()) om.delete(Om);
      for (const [Om, Ym] of fm) {
        const mm = Em.get(Ym);
        void 0 === mm || Em.has(Om) || (Em.set(Om, mm), om.delete(Om))
      }
      return {
        named: [...Em].sort(((mm, Tm) => {
          let [fm] = mm, [hm] = Tm;
          return fm < hm ? -1 : fm > hm ? 1 : 0
        })).map((mm => {
          let [Tm, fm] = mm;
          return {
            name: Tm,
            id: fm
          }
        })),
        aliases: [...om.values()],
        layers: pm
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);