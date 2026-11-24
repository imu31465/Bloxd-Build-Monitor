export const id = 130;
export const ids = [130, 136, 137];
export const modules = {
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
  41341: (mm, Tm, fm) => {
    fm.d(Tm, {
      followListingUpdates: () => Em
    });
    var hm = fm(208),
      Am = fm(23),
      am = fm(1494),
      xm = fm(1162),
      wm = fm(6562),
      Dm = fm(4985),
      im = fm(40601),
      Rm = fm(6600);
    const pm = ["apiVersion", "invalid", "errors"];
    async function Em(mm, Tm) {
      const fm = await xm.userContextManager.getCurrentUserContext(),
        Em = await am.d.getShaderPackVersions(fm, [Tm.packId]),
        om = function(mm, Tm, fm) {
          var hm;
          if (void 0 === fm || "unlisted" === fm.status) return {
            kind: "none"
          };
          if ("banned" === fm.status) return {
            kind: "remove"
          };
          if (!(0, Dm.e)(fm.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Am,
            name: am,
            ownerName: xm,
            description: wm
          } = fm;
          return Am !== Tm.sourceHash && Am !== Tm.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Am,
            name: am,
            ownerName: xm,
            description: wm
          } : am !== mm.manifest.name || xm !== mm.manifest.author || (wm || null) !== (null !== (hm = mm.manifest.description) && void 0 !== hm ? hm : null) ? {
            kind: "rename",
            name: am,
            ownerName: xm,
            description: wm
          } : {
            kind: "none"
          }
        }(mm, Tm, (0, hm.c)(Em, Tm.packId));
      if ("update" === om.kind && "landingPage" !== Am.c.get("gameState")) return !1;
      const Om = "update" === om.kind || "rename" === om.kind,
        Ym = Om ? await (0, wm.loadPageShaderPackCompiler)() : null;
      if (Om && null === Ym) return console.warn(`Didn't follow shader pack ${Tm.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const qm = await async function(mm, Tm, fm, hm) {
        switch (fm.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...mm, manifest: {
                ...mm.manifest,
                name: fm.name,
                author: fm.ownerName,
                description: fm.description || null
              }
            };
          case "update": {
            if (null === hm) return;
            const {
              sourceHash: Am,
              name: am,
              ownerName: xm,
              description: wm
            } = fm, Dm = await (0, im.c)({
              packId: Tm.packId,
              sourceHash: Am,
              name: am,
              ownerName: xm,
              description: wm
            }, hm);
            if ("loaded" === Dm.kind && null !== Dm.stored.validation) return Dm.stored;
            const Rm = "failed" === Dm.kind ? Dm.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Tm.packId}: ${Rm}`), "failed" === Dm.kind && pm.includes(Dm.reason) ? {
              ...mm,
              listing: {
                ...Tm,
                rejectedSourceHash: Am
              }
            } : void 0
          }
        }
      }(mm, Tm, om, Ym);
      return void 0 === qm || (await (0, Rm.replaceShaderPack)(mm, qm, Ym) ? (null !== qm && qm.files === mm.files || (0, Rm.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
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
  6509: (mm, Tm, fm) => {
    fm.d(Tm, {
      D: () => wm,
      H: () => xm,
      K: () => hm,
      L: () => Em,
      P: () => Rm,
      S: () => Km,
      V: () => pm,
      X: () => im,
      e: () => Om,
      g: () => qm,
      k: () => Ym,
      l: () => om,
      m: () => Im,
      o: () => nm,
      r: () => Dm,
      t: () => Am,
      v: () => Qm,
      z: () => am
    });
    const hm = ["forest", "desert", "water", "night", "cave"];
    const Am = {
        full: {
          width: 3840,
          height: 2160
        },
        large: {
          width: 1920,
          height: 1080
        },
        thumb: {
          width: 640,
          height: 360
        }
      },
      am = ["popular", "updated", "newest"],
      xm = 3,
      wm = 32,
      Dm = 300;

    function im(mm, Tm) {
      return mm.slice(0, Tm).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Rm = 64,
      pm = 512,
      Em = 18e5;

    function om(mm) {
      const Tm = mm,
        fm = null === Tm || void 0 === Tm ? void 0 : Tm.files;
      return "number" === typeof(null === Tm || void 0 === Tm ? void 0 : Tm.apiVersion) && "string" === typeof Tm.name && (null === Tm.author || "string" === typeof Tm.author) && (void 0 === Tm.keepCircleShadows || "boolean" === typeof Tm.keepCircleShadows) && "object" === typeof fm && null !== fm && Object.values(fm).every((mm => "string" === typeof mm))
    }
    const Om = "Bloxdhub",
      Ym = "https://bloxdhub.com/shaders";

    function qm(mm) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(mm)}`
    }
    const jm = "Screenshot generation failed.",
      Vm = "Its screenshots couldn't be generated:";

    function Im(mm) {
      var Tm;
      return mm === jm || null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.startsWith(Vm)) && void 0 !== Tm && Tm
    }

    function Km(mm, Tm) {
      return `shaderPacks/${mm}/${Tm}.json`
    }

    function Qm(mm, Tm, fm, hm) {
      return null === Tm.renderId ? nm(mm, Tm.baselineVersion, fm, hm) : `${mm}/${function(mm,Tm,fm,hm){return`shaderPacks/${mm}/${Tm}/${fm}-${hm}.webp`}(Tm.packId,Tm.renderId,fm,hm)}`
    }

    function nm(mm, Tm, fm, hm) {
      return `${mm}/${function(mm,Tm,fm){return`shaderPacks/baseline/${mm}/${Tm}-${fm}.webp`}(Tm,fm,hm)}`
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);