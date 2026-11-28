export const id = 154;
export const ids = [154, 159, 160];
export const modules = {
  42181: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob,
      installListedShaderPack: () => Ib
    });
    var eb = Mb(7760),
      Hb = Mb(6110),
      pb = Mb(1271),
      Vb = Mb(7798),
      gb = Mb(6105),
      lb = Mb(7840),
      Lb = Mb(7833);
    async function Ib(bb) {
      const wb = await (0, Vb.loadPageShaderPackCompiler)();
      if (null === wb) return {
        kind: "failed",
        reason: "compiler"
      };
      const Mb = await Ob(bb, wb);
      return "failed" === Mb.kind ? Mb : await (0, lb.saveShaderPack)(Mb.stored, wb) ? ((0, lb.markShaderPackChangePending)(), Mb) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Ob(bb, wb) {
      const Mb = await async function(bb) {
        let {
          packId: wb,
          sourceHash: Mb
        } = bb;
        try {
          const bb = await fetch(`${pb.clientSideServerUrls.s3Url}/${(0,eb.O)(wb,Mb)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!bb.ok) return console.error(`Failed to download shader pack ${wb} (${bb.status})`), null;
          const Hb = await bb.json();
          return "object" !== typeof Hb || null === Hb ? (console.error(`Shader pack ${wb}'s source isn't an object`), null) : Hb
        } catch (Hb) {
          return console.error(`Failed to download shader pack ${wb}`, Hb), null
        }
      }(bb);
      if (null === Mb) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, gb.h)(Mb.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Vb = (0, Hb.p)(Mb.files);
      if ("string" === typeof Vb) return console.error(`A listed shader pack breaks the pack rules: ${Vb}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Ib = await (0, Lb.d)(wb, Vb);
      if (!1 === (null === Ib || void 0 === Ib ? void 0 : Ib.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Ob = {
        manifest: {
          apiVersion: Mb.apiVersion,
          name: bb.name,
          author: bb.ownerName,
          description: bb.description || null,
          keepCircleShadows: !0 === Mb.keepCircleShadows
        },
        files: Vb
      };
      return {
        kind: "loaded",
        stored: (0, lb.toStoredShaderPack)(Ob, Ib, {
          packId: bb.packId,
          sourceHash: bb.sourceHash
        })
      }
    }
  },
  45157: (bb, wb, Mb) => {
    Mb.d(wb, {
      followListingUpdates: () => Ub
    });
    var eb = Mb(236),
      Hb = Mb(26),
      pb = Mb(1677),
      Vb = Mb(1186),
      gb = Mb(7798),
      lb = Mb(6105),
      Lb = Mb(42181),
      Ib = Mb(7840);
    const Ob = ["apiVersion", "invalid", "errors"];
    async function Ub(bb, wb) {
      const Mb = await Vb.userContextManager.getCurrentUserContext(),
        Ub = await pb.e.getShaderPackVersions(Mb, [wb.packId]),
        tb = function(bb, wb, Mb) {
          var eb;
          if (void 0 === Mb || "unlisted" === Mb.status) return {
            kind: "none"
          };
          if ("banned" === Mb.status) return {
            kind: "remove"
          };
          if (!(0, lb.h)(Mb.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Hb,
            name: pb,
            ownerName: Vb,
            description: gb
          } = Mb;
          return Hb !== wb.sourceHash && Hb !== wb.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Hb,
            name: pb,
            ownerName: Vb,
            description: gb
          } : pb !== bb.manifest.name || Vb !== bb.manifest.author || (gb || null) !== (null !== (eb = bb.manifest.description) && void 0 !== eb ? eb : null) ? {
            kind: "rename",
            name: pb,
            ownerName: Vb,
            description: gb
          } : {
            kind: "none"
          }
        }(bb, wb, (0, eb.c)(Ub, wb.packId));
      if ("update" === tb.kind && "landingPage" !== Hb.c.get("gameState")) return !1;
      const Cb = "update" === tb.kind || "rename" === tb.kind,
        Eb = Cb ? await (0, gb.loadPageShaderPackCompiler)() : null;
      if (Cb && null === Eb) return console.warn(`Didn't follow shader pack ${wb.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const Fb = await async function(bb, wb, Mb, eb) {
        switch (Mb.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...bb, manifest: {
                ...bb.manifest,
                name: Mb.name,
                author: Mb.ownerName,
                description: Mb.description || null
              }
            };
          case "update": {
            if (null === eb) return;
            const {
              sourceHash: Hb,
              name: pb,
              ownerName: Vb,
              description: gb
            } = Mb, lb = await (0, Lb.d)({
              packId: wb.packId,
              sourceHash: Hb,
              name: pb,
              ownerName: Vb,
              description: gb
            }, eb);
            if ("loaded" === lb.kind && null !== lb.stored.validation) return lb.stored;
            const Ib = "failed" === lb.kind ? lb.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${wb.packId}: ${Ib}`), "failed" === lb.kind && Ob.includes(lb.reason) ? {
              ...bb,
              listing: {
                ...wb,
                rejectedSourceHash: Hb
              }
            } : void 0
          }
        }
      }(bb, wb, tb, Eb);
      return void 0 === Fb || (await (0, Ib.replaceShaderPack)(bb, Fb, Eb) ? (null !== Fb && Fb.files === bb.files || (0, Ib.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7840: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      forgetShaderPackActiveHint: () => Db,
      isOtherApiVersion: () => jb,
      isShaderPackActive: () => hb,
      isShaderPackChangePending: () => xb,
      markShaderPackChangePending: () => Xb,
      pageShaderPackValidationVersion: () => Kb,
      reconcileStoredShaderPackHint: () => Rb,
      removeShaderPack: () => mb,
      replaceShaderPack: () => Fb,
      saveShaderPack: () => Eb,
      shaderPackNeedsCheck: () => rb,
      storedPackOutcome: () => zb,
      storedShaderPackFiles: () => Ub,
      toStoredShaderPack: () => Ob
    });
    var eb = Mb(6110),
      Hb = Mb(6105),
      pb = Mb(43),
      Vb = Mb(4843),
      gb = Mb(7848),
      lb = Mb(7819);
    const Lb = "shaderPackChangePending";
    let Ib = null;

    function Ob(bb, wb, Mb) {
      return {
        manifest: bb.manifest,
        files: (0, eb.t)(bb.files),
        validation: wb,
        ...Mb && {
          listing: Mb
        }
      }
    }

    function Ub(bb) {
      return Object.keys(bb.files).map((wb => ({
        path: wb,
        source: bb.files[wb]
      })))
    }
    let tb = Promise.resolve();

    function Cb(bb) {
      const wb = tb.then(bb);
      return tb = wb.catch((() => {})), wb
    }

    function Eb(bb, wb) {
      return Cb((() => Bb(bb, wb)))
    }

    function Fb(bb, wb, Mb) {
      return Cb((async () => JSON.stringify(await (0, gb.g)()) === JSON.stringify(bb) && (null === wb ? (await sb(), !0) : Bb(wb, Mb))))
    }
    async function Bb(bb, wb) {
      const Mb = await pb.h.setItem(gb.c, bb);
      return Mb && cb(bb, wb), Mb
    }
    async function sb() {
      await pb.h.removeItem(gb.c), pb.i.removeItem(Vb.d)
    }

    function mb() {
      return Cb(sb)
    }

    function hb(bb, wb) {
      return "active" === zb(bb, wb).kind
    }

    function zb(bb, wb) {
      var Mb;
      return null === bb ? {
        kind: "none",
        reason: "nothingStored"
      } : jb(bb) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Mb = bb.validation) || void 0 === Mb ? void 0 : Mb.ok) || bb.validation.fromRecheck ? null === wb ? {
        kind: "none",
        reason: "noCompiler"
      } : rb(bb, wb) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : bb.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Xb() {
      pb.j.setItem(Lb, performance.timeOrigin)
    }

    function xb() {
      return pb.j.getItem(Lb) === performance.timeOrigin
    }

    function jb(bb) {
      return !(0, Hb.h)(bb.manifest.apiVersion)
    }

    function Kb(bb) {
      return Ib ??= bb.MJ((0, lb.shaderPackTextures)()), Ib
    }

    function rb(bb, wb) {
      var Mb;
      return (null === (Mb = bb.validation) || void 0 === Mb ? void 0 : Mb.headerVersion) !== Kb(wb)
    }

    function Rb(bb) {
      return Cb((async () => {
        cb(await (0, gb.g)(!0), bb)
      }))
    }

    function Db() {
      return Cb((async () => {
        pb.i.removeItem(Vb.d)
      }))
    }

    function cb(bb, wb) {
      hb(bb, wb) ? pb.i.setItem(Vb.d, !0) : pb.i.removeItem(Vb.d)
    }
  },
  7819: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      loadShaderPackTextures: () => Vb,
      shaderPackTextures: () => gb
    });
    var eb = Mb(6110);
    let Hb = null,
      pb = null;

    function Vb() {
      return pb ??= Promise.all([Mb.e(85), Mb.e(126)]).then((() => Mb(42174))).then((bb => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: wb,
          textureNameToIndex: Mb,
          textureAnimationData: pb
        } = bb;
        return Hb ??= (0, eb.h)(Mb, pb, wb), Hb
      })), pb
    }

    function gb() {
      if (null === Hb) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Hb
    }
  },
  7833: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => lb,
      d: () => gb
    });
    var eb = Mb(7840),
      Hb = Mb(7819),
      pb = Mb(135);
    const Vb = 100;
    async function gb(bb, wb) {
      var Mb;
      let eb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Mb = navigator.gpu) && void 0 !== Mb ? Mb : null;
      const Vb = bb.Xwb(wb, (0, Hb.shaderPackTextures)());
      if (Vb.errors.length > 0) return Lb(bb, Vb.errors, Vb.offInStrict);
      const gb = await async function(bb) {
        if (!bb) return null;
        try {
          const wb = await (0, pb.w)(bb);
          return wb ? await wb.requestDevice() : null
        } catch (wb) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", wb), null
        }
      }(eb);
      if (!gb) return null;
      let lb = !1;
      gb.lost.then((() => {
        lb = !0
      }));
      try {
        const wb = await Promise.all(Vb.validationModules.map((wb => async function(bb, wb, Mb) {
          wb.pushErrorScope("validation");
          const eb = wb.createShaderModule({
              code: Mb.code
            }),
            Hb = wb.popErrorScope(),
            {
              messages: pb
            } = await eb.getCompilationInfo(),
            Vb = pb.filter((bb => "error" === bb.type)).map((wb => bb.mapValidationMessage(Mb, wb))),
            gb = await Hb;
          gb && 0 === Vb.length && Vb.push({
            file: null,
            line: 0,
            message: gb.message,
            variants: [Mb.key]
          });
          return Vb
        }(bb, gb, wb))));
        return lb ? null : Lb(bb, bb.FHb(wb.flat()), Vb.offInStrict)
      } catch (Ib) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Ib), null
      } finally {
        gb.destroy()
      }
    }
    async function lb(bb, wb) {
      var Mb;
      if (!(0, eb.shaderPackNeedsCheck)(bb, wb) || (0, eb.isOtherApiVersion)(bb)) return bb;
      const Hb = await gb(wb, (0, eb.storedShaderPackFiles)(bb));
      if (!Hb) return bb;
      const pb = !1 === (null === (Mb = bb.validation) || void 0 === Mb ? void 0 : Mb.ok) && !bb.validation.fromRecheck,
        Vb = {
          ...bb,
          validation: pb ? Hb : {
            ...Hb,
            fromRecheck: !0
          }
        };
      return await (0, eb.replaceShaderPack)(bb, Vb, wb) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Vb
    }

    function Lb(bb, wb, Mb) {
      return {
        headerVersion: (0, eb.pageShaderPackValidationVersion)(bb),
        ok: 0 === wb.length,
        errors: wb.slice(0, Vb),
        moreErrors: Math.max(0, wb.length - Vb),
        offInStrict: Mb
      }
    }
  },
  7760: (bb, wb, Mb) => {
    Mb.d(wb, {
      B: () => zb,
      C: () => pb,
      G: () => gb,
      H: () => Vb,
      I: () => eb,
      J: () => Ub,
      M: () => Ib,
      O: () => hb,
      S: () => Ob,
      T: () => Lb,
      e: () => Cb,
      i: () => Fb,
      j: () => Eb,
      m: () => tb,
      q: () => mb,
      u: () => Xb,
      y: () => lb,
      z: () => Hb
    });
    const eb = ["forest", "desert", "water", "night", "cave"];
    const Hb = {
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
      pb = ["popular", "updated", "newest"],
      Vb = 3,
      gb = 32,
      lb = 300;

    function Lb(bb, wb) {
      return bb.slice(0, wb).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Ib = 64,
      Ob = 512,
      Ub = 18e5;

    function tb(bb) {
      const wb = bb,
        Mb = null === wb || void 0 === wb ? void 0 : wb.files;
      return "number" === typeof(null === wb || void 0 === wb ? void 0 : wb.apiVersion) && "string" === typeof wb.name && (null === wb.author || "string" === typeof wb.author) && (void 0 === wb.keepCircleShadows || "boolean" === typeof wb.keepCircleShadows) && "object" === typeof Mb && null !== Mb && Object.values(Mb).every((bb => "string" === typeof bb))
    }
    const Cb = "Bloxdhub",
      Eb = "https://bloxdhub.com/shaders";

    function Fb(bb) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(bb)}`
    }
    const Bb = "Screenshot generation failed.",
      sb = "Its screenshots couldn't be generated:";

    function mb(bb) {
      var wb;
      return bb === Bb || null !== (wb = null === bb || void 0 === bb ? void 0 : bb.startsWith(sb)) && void 0 !== wb && wb
    }

    function hb(bb, wb) {
      return `shaderPacks/${bb}/${wb}.json`
    }

    function zb(bb, wb, Mb, eb) {
      return null === wb.renderId ? Xb(bb, wb.baselineVersion, Mb, eb) : `${bb}/${function(bb,wb,Mb,eb){return`shaderPacks/${bb}/${wb}/${Mb}-${eb}.webp`}(wb.packId,wb.renderId,Mb,eb)}`
    }

    function Xb(bb, wb, Mb, eb) {
      return `${bb}/${function(bb,wb,Mb){return`shaderPacks/baseline/${bb}/${wb}-${Mb}.webp`}(wb,Mb,eb)}`
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);