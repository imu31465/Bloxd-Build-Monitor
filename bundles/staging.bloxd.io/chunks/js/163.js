export const id = 163;
export const ids = [163];
export const modules = {
  53966: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      compilePagePack: () => Lb,
      prefetchCompiler: () => gb,
      reconcileHint: () => lb
    });
    var eb = Mb(7798),
      Hb = Mb(7840),
      pb = Mb(7819),
      Vb = Mb(7833);

    function gb() {
      (0, eb.loadPageShaderPackCompiler)()
    }
    async function lb() {
      const bb = await (0, eb.loadPageShaderPackCompiler)();
      await (bb ? (0, Hb.reconcileStoredShaderPackHint)(bb) : (0, Hb.forgetShaderPackActiveHint)())
    }
    async function Lb(bb) {
      const wb = await (0, eb.loadPageShaderPackCompiler)();
      if (!wb) return {
        status: "none"
      };
      const Mb = await (0, Vb.c)(bb, wb),
        gb = (0, Hb.storedPackOutcome)(Mb, wb);
      if ("none" === gb.kind) return {
        status: "none"
      };
      const lb = wb.Xwb((0, Hb.storedShaderPackFiles)(Mb), (0, pb.shaderPackTextures)());
      if ("blocked" === gb.kind) return {
        status: "blocked",
        messageKey: gb.messageKey,
        variants: 0 === lb.errors.length ? lb.variants : null
      };
      if (lb.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", lb.errors), {
        status: "none"
      };
      const {
        name: Lb,
        keepCircleShadows: Ib
      } = Mb.manifest;
      return {
        status: "active",
        pack: {
          name: Lb,
          variants: lb.variants,
          keepCircleShadows: !0 === Ib
        }
      }
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
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);