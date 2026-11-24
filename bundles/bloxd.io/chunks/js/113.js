export const id = 113;
export const ids = [113, 116, 136, 137];
export const modules = {
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
  40601: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => pm,
      installListedShaderPack: () => Rm
    });
    var hm = fm(6509),
      Am = fm(4989),
      am = fm(1214),
      xm = fm(6562),
      wm = fm(4985),
      Dm = fm(6600),
      im = fm(6595);
    async function Rm(mm) {
      const Tm = await (0, xm.loadPageShaderPackCompiler)();
      if (null === Tm) return {
        kind: "failed",
        reason: "compiler"
      };
      const fm = await pm(mm, Tm);
      return "failed" === fm.kind ? fm : await (0, Dm.saveShaderPack)(fm.stored, Tm) ? ((0, Dm.markShaderPackChangePending)(), fm) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function pm(mm, Tm) {
      const fm = await async function(mm) {
        let {
          packId: Tm,
          sourceHash: fm
        } = mm;
        try {
          const mm = await fetch(`${am.clientSideServerUrls.s3Url}/${(0,hm.S)(Tm,fm)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!mm.ok) return console.error(`Failed to download shader pack ${Tm} (${mm.status})`), null;
          const Am = await mm.json();
          return "object" !== typeof Am || null === Am ? (console.error(`Shader pack ${Tm}'s source isn't an object`), null) : Am
        } catch (Am) {
          return console.error(`Failed to download shader pack ${Tm}`, Am), null
        }
      }(mm);
      if (null === fm) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, wm.e)(fm.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const xm = (0, Am.q)(fm.files);
      if ("string" === typeof xm) return console.error(`A listed shader pack breaks the pack rules: ${xm}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Rm = await (0, im.f)(Tm, xm);
      if (!1 === (null === Rm || void 0 === Rm ? void 0 : Rm.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const pm = {
        manifest: {
          apiVersion: fm.apiVersion,
          name: mm.name,
          author: mm.ownerName,
          description: mm.description || null,
          keepCircleShadows: !0 === fm.keepCircleShadows
        },
        files: xm
      };
      return {
        kind: "loaded",
        stored: (0, Dm.toStoredShaderPack)(pm, Rm, {
          packId: mm.packId,
          sourceHash: mm.sourceHash
        })
      }
    }
  },
  6600: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      forgetShaderPackActiveHint: () => bm,
      isOtherApiVersion: () => cm,
      isShaderPackActive: () => Km,
      isShaderPackChangePending: () => Jm,
      markShaderPackChangePending: () => nm,
      pageShaderPackValidationVersion: () => zm,
      reconcileStoredShaderPackHint: () => km,
      removeShaderPack: () => Im,
      replaceShaderPack: () => qm,
      saveShaderPack: () => Ym,
      shaderPackNeedsCheck: () => Zm,
      storedPackOutcome: () => Qm,
      storedShaderPackFiles: () => Em,
      toStoredShaderPack: () => pm
    });
    var hm = fm(4989),
      Am = fm(4985),
      am = fm(37),
      xm = fm(3461),
      wm = fm(6609),
      Dm = fm(6578);
    const im = "shaderPackChangePending";
    let Rm = null;

    function pm(mm, Tm, fm) {
      return {
        manifest: mm.manifest,
        files: (0, hm.r)(mm.files),
        validation: Tm,
        ...fm && {
          listing: fm
        }
      }
    }

    function Em(mm) {
      return Object.keys(mm.files).map((Tm => ({
        path: Tm,
        source: mm.files[Tm]
      })))
    }
    let om = Promise.resolve();

    function Om(mm) {
      const Tm = om.then(mm);
      return om = Tm.catch((() => {})), Tm
    }

    function Ym(mm, Tm) {
      return Om((() => jm(mm, Tm)))
    }

    function qm(mm, Tm, fm) {
      return Om((async () => JSON.stringify(await (0, wm.e)()) === JSON.stringify(mm) && (null === Tm ? (await Vm(), !0) : jm(Tm, fm))))
    }
    async function jm(mm, Tm) {
      const fm = await am.e.setItem(wm.c, mm);
      return fm && Sm(mm, Tm), fm
    }
    async function Vm() {
      await am.e.removeItem(wm.c), am.g.removeItem(xm.b)
    }

    function Im() {
      return Om(Vm)
    }

    function Km(mm, Tm) {
      return "active" === Qm(mm, Tm).kind
    }

    function Qm(mm, Tm) {
      var fm;
      return null === mm ? {
        kind: "none",
        reason: "nothingStored"
      } : cm(mm) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.ok) || mm.validation.fromRecheck ? null === Tm ? {
        kind: "none",
        reason: "noCompiler"
      } : Zm(mm, Tm) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : mm.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function nm() {
      am.k.setItem(im, performance.timeOrigin)
    }

    function Jm() {
      return am.k.getItem(im) === performance.timeOrigin
    }

    function cm(mm) {
      return !(0, Am.e)(mm.manifest.apiVersion)
    }

    function zm(mm) {
      return Rm ??= mm.mG((0, Dm.shaderPackTextures)()), Rm
    }

    function Zm(mm, Tm) {
      var fm;
      return (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.headerVersion) !== zm(Tm)
    }

    function km(mm) {
      return Om((async () => {
        Sm(await (0, wm.e)(!0), mm)
      }))
    }

    function bm() {
      return Om((async () => {
        am.g.removeItem(xm.b)
      }))
    }

    function Sm(mm, Tm) {
      Km(mm, Tm) ? am.g.setItem(xm.b, !0) : am.g.removeItem(xm.b)
    }
  },
  6578: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      loadShaderPackTextures: () => xm,
      shaderPackTextures: () => wm
    });
    var hm = fm(4989);
    let Am = null,
      am = null;

    function xm() {
      return am ??= Promise.all([fm.e(72), fm.e(188)]).then((() => fm(40597))).then((mm => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Tm,
          textureNameToIndex: fm,
          textureAnimationData: am
        } = mm;
        return Am ??= (0, hm.g)(fm, am, Tm), Am
      })), am
    }

    function wm() {
      if (null === Am) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Am
    }
  },
  6595: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Dm,
      f: () => wm
    });
    var hm = fm(6600),
      Am = fm(6578),
      am = fm(118);
    const xm = 100;
    async function wm(mm, Tm) {
      var fm;
      let hm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (fm = navigator.gpu) && void 0 !== fm ? fm : null;
      const xm = mm.Z6(Tm, (0, Am.shaderPackTextures)());
      if (xm.errors.length > 0) return im(mm, xm.errors, xm.offInStrict);
      const wm = await async function(mm) {
        if (!mm) return null;
        try {
          const Tm = await (0, am.v)(mm);
          return Tm ? await Tm.requestDevice() : null
        } catch (Tm) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Tm), null
        }
      }(hm);
      if (!wm) return null;
      let Dm = !1;
      wm.lost.then((() => {
        Dm = !0
      }));
      try {
        const Tm = await Promise.all(xm.validationModules.map((Tm => async function(mm, Tm, fm) {
          Tm.pushErrorScope("validation");
          const hm = Tm.createShaderModule({
              code: fm.code
            }),
            Am = Tm.popErrorScope(),
            {
              messages: am
            } = await hm.getCompilationInfo(),
            xm = am.filter((mm => "error" === mm.type)).map((Tm => mm.mapValidationMessage(fm, Tm))),
            wm = await Am;
          wm && 0 === xm.length && xm.push({
            file: null,
            line: 0,
            message: wm.message,
            variants: [fm.key]
          });
          return xm
        }(mm, wm, Tm))));
        return Dm ? null : im(mm, mm.Lfm(Tm.flat()), xm.offInStrict)
      } catch (Rm) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Rm), null
      } finally {
        wm.destroy()
      }
    }
    async function Dm(mm, Tm) {
      var fm;
      if (!(0, hm.shaderPackNeedsCheck)(mm, Tm) || (0, hm.isOtherApiVersion)(mm)) return mm;
      const Am = await wm(Tm, (0, hm.storedShaderPackFiles)(mm));
      if (!Am) return mm;
      const am = !1 === (null === (fm = mm.validation) || void 0 === fm ? void 0 : fm.ok) && !mm.validation.fromRecheck,
        xm = {
          ...mm,
          validation: am ? Am : {
            ...Am,
            fromRecheck: !0
          }
        };
      return await (0, hm.replaceShaderPack)(mm, xm, Tm) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), xm
    }

    function im(mm, Tm, fm) {
      return {
        headerVersion: (0, hm.pageShaderPackValidationVersion)(mm),
        ok: 0 === Tm.length,
        errors: Tm.slice(0, xm),
        moreErrors: Math.max(0, Tm.length - xm),
        offInStrict: fm
      }
    }
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