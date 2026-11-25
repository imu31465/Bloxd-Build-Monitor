export const id = 132;
export const ids = [132, 138, 139];
export const modules = {
  40682: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      installListedShaderPack: () => Xt
    });
    var Ot = Vt(6756),
      qt = Vt(5223),
      Dt = Vt(1293),
      mt = Vt(6816),
      dt = Vt(5216),
      jt = Vt(6866),
      Ht = Vt(6857);
    async function Xt(tt) {
      const et = await (0, mt.loadPageShaderPackCompiler)();
      if (null === et) return {
        kind: "failed",
        reason: "compiler"
      };
      const Vt = await Qt(tt, et);
      return "failed" === Vt.kind ? Vt : await (0, jt.saveShaderPack)(Vt.stored, et) ? ((0, jt.markShaderPackChangePending)(), Vt) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Qt(tt, et) {
      const Vt = await async function(tt) {
        let {
          packId: et,
          sourceHash: Vt
        } = tt;
        try {
          const tt = await fetch(`${Dt.clientSideServerUrls.s3Url}/${(0,Ot.K)(et,Vt)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!tt.ok) return console.error(`Failed to download shader pack ${et} (${tt.status})`), null;
          const qt = await tt.json();
          return "object" !== typeof qt || null === qt ? (console.error(`Shader pack ${et}'s source isn't an object`), null) : qt
        } catch (qt) {
          return console.error(`Failed to download shader pack ${et}`, qt), null
        }
      }(tt);
      if (null === Vt) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, dt.h)(Vt.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const mt = (0, qt.y)(Vt.files);
      if ("string" === typeof mt) return console.error(`A listed shader pack breaks the pack rules: ${mt}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Xt = await (0, Ht.f)(et, mt);
      if (!1 === (null === Xt || void 0 === Xt ? void 0 : Xt.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Qt = {
        manifest: {
          apiVersion: Vt.apiVersion,
          name: tt.name,
          author: tt.ownerName,
          description: tt.description || null,
          keepCircleShadows: !0 === Vt.keepCircleShadows
        },
        files: mt
      };
      return {
        kind: "loaded",
        stored: (0, jt.toStoredShaderPack)(Qt, Xt, {
          packId: tt.packId,
          sourceHash: tt.sourceHash
        })
      }
    }
  },
  41518: (tt, et, Vt) => {
    Vt.d(et, {
      followListingUpdates: () => lt
    });
    var Ot = Vt(241),
      qt = Vt(26),
      Dt = Vt(1600),
      mt = Vt(1223),
      dt = Vt(6816),
      jt = Vt(5216),
      Ht = Vt(40682),
      Xt = Vt(6866);
    const Qt = ["apiVersion", "invalid", "errors"];
    async function lt(tt, et) {
      const Vt = await mt.userContextManager.getCurrentUserContext(),
        lt = await Dt.e.getShaderPackVersions(Vt, [et.packId]),
        Et = function(tt, et, Vt) {
          var Ot;
          if (void 0 === Vt || "unlisted" === Vt.status) return {
            kind: "none"
          };
          if ("banned" === Vt.status) return {
            kind: "remove"
          };
          if (!(0, jt.h)(Vt.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: qt,
            name: Dt,
            ownerName: mt,
            description: dt
          } = Vt;
          return qt !== et.sourceHash && qt !== et.rejectedSourceHash ? {
            kind: "update",
            sourceHash: qt,
            name: Dt,
            ownerName: mt,
            description: dt
          } : Dt !== tt.manifest.name || mt !== tt.manifest.author || (dt || null) !== (null !== (Ot = tt.manifest.description) && void 0 !== Ot ? Ot : null) ? {
            kind: "rename",
            name: Dt,
            ownerName: mt,
            description: dt
          } : {
            kind: "none"
          }
        }(tt, et, (0, Ot.c)(lt, et.packId));
      if ("update" === Et.kind && "landingPage" !== qt.b.get("gameState")) return !1;
      const ft = "update" === Et.kind || "rename" === Et.kind,
        wt = ft ? await (0, dt.loadPageShaderPackCompiler)() : null;
      if (ft && null === wt) return console.warn(`Didn't follow shader pack ${et.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const yt = await async function(tt, et, Vt, Ot) {
        switch (Vt.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...tt, manifest: {
                ...tt.manifest,
                name: Vt.name,
                author: Vt.ownerName,
                description: Vt.description || null
              }
            };
          case "update": {
            if (null === Ot) return;
            const {
              sourceHash: qt,
              name: Dt,
              ownerName: mt,
              description: dt
            } = Vt, jt = await (0, Ht.c)({
              packId: et.packId,
              sourceHash: qt,
              name: Dt,
              ownerName: mt,
              description: dt
            }, Ot);
            if ("loaded" === jt.kind && null !== jt.stored.validation) return jt.stored;
            const Xt = "failed" === jt.kind ? jt.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${et.packId}: ${Xt}`), "failed" === jt.kind && Qt.includes(jt.reason) ? {
              ...tt,
              listing: {
                ...et,
                rejectedSourceHash: qt
              }
            } : void 0
          }
        }
      }(tt, et, Et, wt);
      return void 0 === yt || (await (0, Xt.replaceShaderPack)(tt, yt, wt) ? (null !== yt && yt.files === tt.files || (0, Xt.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6866: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      forgetShaderPackActiveHint: () => ct,
      isOtherApiVersion: () => ht,
      isShaderPackActive: () => Jt,
      isShaderPackChangePending: () => Kt,
      markShaderPackChangePending: () => ut,
      pageShaderPackValidationVersion: () => vt,
      reconcileStoredShaderPackHint: () => St,
      removeShaderPack: () => bt,
      replaceShaderPack: () => yt,
      saveShaderPack: () => wt,
      shaderPackNeedsCheck: () => Wt,
      storedPackOutcome: () => Ct,
      storedShaderPackFiles: () => lt,
      toStoredShaderPack: () => Qt
    });
    var Ot = Vt(5223),
      qt = Vt(5216),
      Dt = Vt(39),
      mt = Vt(3524),
      dt = Vt(6873),
      jt = Vt(6830);
    const Ht = "shaderPackChangePending";
    let Xt = null;

    function Qt(tt, et, Vt) {
      return {
        manifest: tt.manifest,
        files: (0, Ot.C)(tt.files),
        validation: et,
        ...Vt && {
          listing: Vt
        }
      }
    }

    function lt(tt) {
      return Object.keys(tt.files).map((et => ({
        path: et,
        source: tt.files[et]
      })))
    }
    let Et = Promise.resolve();

    function ft(tt) {
      const et = Et.then(tt);
      return Et = et.catch((() => {})), et
    }

    function wt(tt, et) {
      return ft((() => Nt(tt, et)))
    }

    function yt(tt, et, Vt) {
      return ft((async () => JSON.stringify(await (0, dt.g)()) === JSON.stringify(tt) && (null === et ? (await Mt(), !0) : Nt(et, Vt))))
    }
    async function Nt(tt, et) {
      const Vt = await Dt.c.setItem(dt.e, tt);
      return Vt && Rt(tt, et), Vt
    }
    async function Mt() {
      await Dt.c.removeItem(dt.e), Dt.e.removeItem(mt.e)
    }

    function bt() {
      return ft(Mt)
    }

    function Jt(tt, et) {
      return "active" === Ct(tt, et).kind
    }

    function Ct(tt, et) {
      var Vt;
      return null === tt ? {
        kind: "none",
        reason: "nothingStored"
      } : ht(tt) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) || tt.validation.fromRecheck ? null === et ? {
        kind: "none",
        reason: "noCompiler"
      } : Wt(tt, et) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : tt.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ut() {
      Dt.h.setItem(Ht, performance.timeOrigin)
    }

    function Kt() {
      return Dt.h.getItem(Ht) === performance.timeOrigin
    }

    function ht(tt) {
      return !(0, qt.h)(tt.manifest.apiVersion)
    }

    function vt(tt) {
      return Xt ??= tt.yI((0, jt.shaderPackTextures)()), Xt
    }

    function Wt(tt, et) {
      var Vt;
      return (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.headerVersion) !== vt(et)
    }

    function St(tt) {
      return ft((async () => {
        Rt(await (0, dt.g)(!0), tt)
      }))
    }

    function ct() {
      return ft((async () => {
        Dt.e.removeItem(mt.e)
      }))
    }

    function Rt(tt, et) {
      Jt(tt, et) ? Dt.e.setItem(mt.e, !0) : Dt.e.removeItem(mt.e)
    }
  },
  6830: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadShaderPackTextures: () => mt,
      shaderPackTextures: () => dt
    });
    var Ot = Vt(5223);
    let qt = null,
      Dt = null;

    function mt() {
      return Dt ??= Promise.all([Vt.e(73), Vt.e(190)]).then((() => Vt(40674))).then((tt => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: et,
          textureNameToIndex: Vt,
          textureAnimationData: Dt
        } = tt;
        return qt ??= (0, Ot.m)(Vt, Dt, et), qt
      })), Dt
    }

    function dt() {
      if (null === qt) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qt
    }
  },
  6857: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      f: () => dt
    });
    var Ot = Vt(6866),
      qt = Vt(6830),
      Dt = Vt(133);
    const mt = 100;
    async function dt(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Vt = navigator.gpu) && void 0 !== Vt ? Vt : null;
      const mt = tt.mtt(et, (0, qt.shaderPackTextures)());
      if (mt.errors.length > 0) return Ht(tt, mt.errors, mt.offInStrict);
      const dt = await async function(tt) {
        if (!tt) return null;
        try {
          const et = await (0, Dt.t)(tt);
          return et ? await et.requestDevice() : null
        } catch (et) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", et), null
        }
      }(Ot);
      if (!dt) return null;
      let jt = !1;
      dt.lost.then((() => {
        jt = !0
      }));
      try {
        const et = await Promise.all(mt.validationModules.map((et => async function(tt, et, Vt) {
          et.pushErrorScope("validation");
          const Ot = et.createShaderModule({
              code: Vt.code
            }),
            qt = et.popErrorScope(),
            {
              messages: Dt
            } = await Ot.getCompilationInfo(),
            mt = Dt.filter((tt => "error" === tt.type)).map((et => tt.mapValidationMessage(Vt, et))),
            dt = await qt;
          dt && 0 === mt.length && mt.push({
            file: null,
            line: 0,
            message: dt.message,
            variants: [Vt.key]
          });
          return mt
        }(tt, dt, et))));
        return jt ? null : Ht(tt, tt.uOt(et.flat()), mt.offInStrict)
      } catch (Xt) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Xt), null
      } finally {
        dt.destroy()
      }
    }
    async function jt(tt, et) {
      var Vt;
      if (!(0, Ot.shaderPackNeedsCheck)(tt, et) || (0, Ot.isOtherApiVersion)(tt)) return tt;
      const qt = await dt(et, (0, Ot.storedShaderPackFiles)(tt));
      if (!qt) return tt;
      const Dt = !1 === (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) && !tt.validation.fromRecheck,
        mt = {
          ...tt,
          validation: Dt ? qt : {
            ...qt,
            fromRecheck: !0
          }
        };
      return await (0, Ot.replaceShaderPack)(tt, mt, et) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mt
    }

    function Ht(tt, et, Vt) {
      return {
        headerVersion: (0, Ot.pageShaderPackValidationVersion)(tt),
        ok: 0 === et.length,
        errors: et.slice(0, mt),
        moreErrors: Math.max(0, et.length - mt),
        offInStrict: Vt
      }
    }
  },
  6756: (tt, et, Vt) => {
    Vt.d(et, {
      B: () => dt,
      E: () => mt,
      G: () => Ot,
      H: () => lt,
      I: () => Xt,
      K: () => Jt,
      L: () => Qt,
      P: () => Ht,
      e: () => ft,
      i: () => yt,
      k: () => wt,
      o: () => Et,
      q: () => bt,
      t: () => ut,
      u: () => jt,
      v: () => qt,
      w: () => Ct,
      x: () => Dt
    });
    const Ot = ["forest", "desert", "water", "night", "cave"];
    const qt = {
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
      Dt = ["popular", "updated", "newest"],
      mt = 3,
      dt = 32,
      jt = 300;

    function Ht(tt, et) {
      return tt.slice(0, et).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Xt = 64,
      Qt = 512,
      lt = 18e5;

    function Et(tt) {
      const et = tt,
        Vt = null === et || void 0 === et ? void 0 : et.files;
      return "number" === typeof(null === et || void 0 === et ? void 0 : et.apiVersion) && "string" === typeof et.name && (null === et.author || "string" === typeof et.author) && (void 0 === et.keepCircleShadows || "boolean" === typeof et.keepCircleShadows) && "object" === typeof Vt && null !== Vt && Object.values(Vt).every((tt => "string" === typeof tt))
    }
    const ft = "Bloxdhub",
      wt = "https://bloxdhub.com/shaders";

    function yt(tt) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(tt)}`
    }
    const Nt = "Screenshot generation failed.",
      Mt = "Its screenshots couldn't be generated:";

    function bt(tt) {
      var et;
      return tt === Nt || null !== (et = null === tt || void 0 === tt ? void 0 : tt.startsWith(Mt)) && void 0 !== et && et
    }

    function Jt(tt, et) {
      return `shaderPacks/${tt}/${et}.json`
    }

    function Ct(tt, et, Vt, Ot) {
      return null === et.renderId ? ut(tt, et.baselineVersion, Vt, Ot) : `${tt}/${function(tt,et,Vt,Ot){return`shaderPacks/${tt}/${et}/${Vt}-${Ot}.webp`}(et.packId,et.renderId,Vt,Ot)}`
    }

    function ut(tt, et, Vt, Ot) {
      return `${tt}/${function(tt,et,Vt){return`shaderPacks/baseline/${tt}/${et}-${Vt}.webp`}(et,Vt,Ot)}`
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);