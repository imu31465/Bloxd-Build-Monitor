export const id = 135;
export const ids = [135];
export const modules = {
  41501: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      compilePagePack: () => cq,
      prefetchCompiler: () => xq,
      reconcileHint: () => Aq
    });
    var Yq = gq(6496),
      lq = gq(6531),
      Oq = gq(6514),
      mq = gq(6526);

    function xq() {
      (0, Yq.loadPageShaderPackCompiler)()
    }
    async function Aq() {
      const qq = await (0, Yq.loadPageShaderPackCompiler)();
      await (qq ? (0, lq.reconcileStoredShaderPackHint)(qq) : (0, lq.forgetShaderPackActiveHint)())
    }
    async function cq(qq) {
      const Eq = await (0, Yq.loadPageShaderPackCompiler)();
      if (!Eq) return {
        status: "none"
      };
      const gq = await (0, mq.b)(qq, Eq),
        xq = (0, lq.storedPackOutcome)(gq, Eq);
      if ("none" === xq.kind) return {
        status: "none"
      };
      const Aq = Eq.tqq((0, lq.storedShaderPackFiles)(gq), (0, Oq.shaderPackTextures)());
      if ("blocked" === xq.kind) return {
        status: "blocked",
        messageKey: xq.messageKey,
        variants: 0 === Aq.errors.length ? Aq.variants : null
      };
      if (Aq.errors.length > 0) return console.error("Shader pack failed to compile after passing validation", Aq.errors), {
        status: "none"
      };
      const {
        name: cq,
        keepCircleShadows: uq
      } = gq.manifest;
      return {
        status: "active",
        pack: {
          name: cq,
          variants: Aq.variants,
          keepCircleShadows: !0 === uq
        }
      }
    }
  },
  6531: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      forgetShaderPackActiveHint: () => bq,
      isOtherApiVersion: () => rq,
      isShaderPackActive: () => Pq,
      isShaderPackChangePending: () => tq,
      markShaderPackChangePending: () => yq,
      pageShaderPackValidationVersion: () => vq,
      reconcileStoredShaderPackHint: () => nq,
      removeShaderPack: () => oq,
      replaceShaderPack: () => dq,
      saveShaderPack: () => Vq,
      shaderPackNeedsCheck: () => hq,
      storedPackOutcome: () => Qq,
      storedShaderPackFiles: () => Wq,
      toStoredShaderPack: () => Bq
    });
    var Yq = gq(6458),
      lq = gq(6482),
      Oq = gq(38),
      mq = gq(3324),
      xq = gq(6535),
      Aq = gq(6514);
    const cq = "shaderPackChangePending";
    let uq = null;

    function Bq(qq, Eq, gq) {
      return {
        manifest: qq.manifest,
        files: (0, Yq.w)(qq.files),
        validation: Eq,
        ...gq && {
          listing: gq
        }
      }
    }

    function Wq(qq) {
      return Object.keys(qq.files).map((Eq => ({
        path: Eq,
        source: qq.files[Eq]
      })))
    }
    let Nq = Promise.resolve();

    function aq(qq) {
      const Eq = Nq.then(qq);
      return Nq = Eq.catch((() => {})), Eq
    }

    function Vq(qq, Eq) {
      return aq((() => jq(qq, Eq)))
    }

    function dq(qq, Eq, gq) {
      return aq((async () => JSON.stringify(await (0, xq.d)()) === JSON.stringify(qq) && (null === Eq ? (await Hq(), !0) : jq(Eq, gq))))
    }
    async function jq(qq, Eq) {
      const gq = await Oq.f.setItem(xq.b, qq);
      return gq && iq(qq, Eq), gq
    }
    async function Hq() {
      await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
    }

    function oq() {
      return aq(Hq)
    }

    function Pq(qq, Eq) {
      return "active" === Qq(qq, Eq).kind
    }

    function Qq(qq, Eq) {
      var gq;
      return null === qq ? {
        kind: "none",
        reason: "nothingStored"
      } : rq(qq) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.ok) || qq.validation.fromRecheck ? null === Eq ? {
        kind: "none",
        reason: "noCompiler"
      } : hq(qq, Eq) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : qq.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yq() {
      Oq.k.setItem(cq, performance.timeOrigin)
    }

    function tq() {
      return Oq.k.getItem(cq) === performance.timeOrigin
    }

    function rq(qq) {
      return !(0, lq.e)(qq.manifest.apiVersion)
    }

    function vq(qq) {
      return uq ??= qq.yJ((0, Aq.shaderPackTextures)()), uq
    }

    function hq(qq, Eq) {
      var gq;
      return (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.headerVersion) !== vq(Eq)
    }

    function nq(qq) {
      return aq((async () => {
        iq(await (0, xq.d)(!0), qq)
      }))
    }

    function bq() {
      return aq((async () => {
        Oq.i.removeItem(mq.c)
      }))
    }

    function iq(qq, Eq) {
      Pq(qq, Eq) ? Oq.i.setItem(mq.c, !0) : Oq.i.removeItem(mq.c)
    }
  },
  6526: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Aq,
      e: () => xq
    });
    var Yq = gq(6531),
      lq = gq(6514),
      Oq = gq(118);
    const mq = 100;
    async function xq(qq, Eq) {
      var gq;
      let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gq = navigator.gpu) && void 0 !== gq ? gq : null;
      const mq = qq.tqq(Eq, (0, lq.shaderPackTextures)());
      if (mq.errors.length > 0) return cq(qq, mq.errors, mq.offInStrict);
      const xq = await async function(qq) {
        if (!qq) return null;
        try {
          const Eq = await (0, Oq.v)(qq);
          return Eq ? await Eq.requestDevice() : null
        } catch (Eq) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Eq), null
        }
      }(Yq);
      if (!xq) return null;
      let Aq = !1;
      xq.lost.then((() => {
        Aq = !0
      }));
      try {
        const Eq = await Promise.all(mq.validationModules.map((Eq => async function(qq, Eq, gq) {
          Eq.pushErrorScope("validation");
          const Yq = Eq.createShaderModule({
              code: gq.code
            }),
            lq = Eq.popErrorScope(),
            {
              messages: Oq
            } = await Yq.getCompilationInfo(),
            mq = Oq.filter((qq => "error" === qq.type)).map((Eq => qq.mapValidationMessage(gq, Eq))),
            xq = await lq;
          xq && 0 === mq.length && mq.push({
            file: null,
            line: 0,
            message: xq.message,
            variants: [gq.key]
          });
          return mq
        }(qq, xq, Eq))));
        return Aq ? null : cq(qq, qq.aYq(Eq.flat()), mq.offInStrict)
      } catch (uq) {
        return console.error("Couldn't validate the shader pack on WebGPU.", uq), null
      } finally {
        xq.destroy()
      }
    }
    async function Aq(qq, Eq) {
      var gq;
      if (!(0, Yq.shaderPackNeedsCheck)(qq, Eq) || (0, Yq.isOtherApiVersion)(qq)) return qq;
      const lq = await xq(Eq, (0, Yq.storedShaderPackFiles)(qq));
      if (!lq) return qq;
      const Oq = !1 === (null === (gq = qq.validation) || void 0 === gq ? void 0 : gq.ok) && !qq.validation.fromRecheck,
        mq = {
          ...qq,
          validation: Oq ? lq : {
            ...lq,
            fromRecheck: !0
          }
        };
      return await (0, Yq.replaceShaderPack)(qq, mq, Eq) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mq
    }

    function cq(qq, Eq, gq) {
      return {
        headerVersion: (0, Yq.pageShaderPackValidationVersion)(qq),
        ok: 0 === Eq.length,
        errors: Eq.slice(0, mq),
        moreErrors: Math.max(0, Eq.length - mq),
        offInStrict: gq
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);