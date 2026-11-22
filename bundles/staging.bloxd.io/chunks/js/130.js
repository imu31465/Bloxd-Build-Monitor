export const id = 130;
export const ids = [130, 135, 136];
export const modules = {
  40066: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Kk,
      installListedShaderPack: () => Mk
    });
    var Dk = ik(6396),
      fk = ik(4965),
      Sk = ik(1177),
      bk = ik(6451),
      rk = ik(4961),
      Pk = ik(6498),
      mk = ik(6493);
    async function Mk(kk) {
      const ek = await (0, bk.loadPageShaderPackCompiler)();
      if (null === ek) return {
        kind: "failed",
        reason: "compiler"
      };
      const ik = await Kk(kk, ek);
      return "failed" === ik.kind ? ik : await (0, Pk.saveShaderPack)(ik.stored, ek) ? ((0, Pk.markShaderPackChangePending)(), ik) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Kk(kk, ek) {
      const ik = await async function(kk) {
        let {
          packId: ek,
          sourceHash: ik
        } = kk;
        try {
          const kk = await fetch(`${Sk.clientSideServerUrls.s3Url}/${(0,Dk.Q)(ek,ik)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!kk.ok) return console.error(`Failed to download shader pack ${ek} (${kk.status})`), null;
          const fk = await kk.json();
          return "object" !== typeof fk || null === fk ? (console.error(`Shader pack ${ek}'s source isn't an object`), null) : fk
        } catch (fk) {
          return console.error(`Failed to download shader pack ${ek}`, fk), null
        }
      }(kk);
      if (null === ik) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, rk.g)(ik.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const bk = (0, fk.r)(ik.files);
      if ("string" === typeof bk) return console.error(`A listed shader pack breaks the pack rules: ${bk}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Mk = await (0, mk.c)(ek, bk);
      if (!1 === (null === Mk || void 0 === Mk ? void 0 : Mk.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Kk = {
        manifest: {
          apiVersion: ik.apiVersion,
          name: kk.name,
          author: kk.ownerName,
          description: kk.description || null,
          keepCircleShadows: !0 === ik.keepCircleShadows
        },
        files: bk
      };
      return {
        kind: "loaded",
        stored: (0, Pk.toStoredShaderPack)(Kk, Mk, {
          packId: kk.packId,
          sourceHash: kk.sourceHash
        })
      }
    }
  },
  40861: (kk, ek, ik) => {
    ik.d(ek, {
      followListingUpdates: () => xk
    });
    var Dk = ik(197),
      fk = ik(22),
      Sk = ik(1459),
      bk = ik(1104),
      rk = ik(6451),
      Pk = ik(4961),
      mk = ik(40066),
      Mk = ik(6498);
    const Kk = ["apiVersion", "invalid", "errors"];
    async function xk(kk, ek) {
      const ik = await bk.userContextManager.getCurrentUserContext(),
        xk = await Sk.b.getShaderPackVersions(ik, [ek.packId]),
        nk = function(kk, ek, ik) {
          var Dk;
          if (void 0 === ik || "unlisted" === ik.status) return {
            kind: "none"
          };
          if ("banned" === ik.status) return {
            kind: "remove"
          };
          if (!(0, Pk.g)(ik.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: fk,
            name: Sk,
            ownerName: bk,
            description: rk
          } = ik;
          return fk !== ek.sourceHash && fk !== ek.rejectedSourceHash ? {
            kind: "update",
            sourceHash: fk,
            name: Sk,
            ownerName: bk,
            description: rk
          } : Sk !== kk.manifest.name || bk !== kk.manifest.author || (rk || null) !== (null !== (Dk = kk.manifest.description) && void 0 !== Dk ? Dk : null) ? {
            kind: "rename",
            name: Sk,
            ownerName: bk,
            description: rk
          } : {
            kind: "none"
          }
        }(kk, ek, (0, Dk.c)(xk, ek.packId));
      if ("update" === nk.kind && "landingPage" !== fk.b.get("gameState")) return !1;
      const Uk = "update" === nk.kind || "rename" === nk.kind,
        Hk = Uk ? await (0, rk.loadPageShaderPackCompiler)() : null;
      if (Uk && null === Hk) return console.warn(`Didn't follow shader pack ${ek.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const wk = await async function(kk, ek, ik, Dk) {
        switch (ik.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...kk, manifest: {
                ...kk.manifest,
                name: ik.name,
                author: ik.ownerName,
                description: ik.description || null
              }
            };
          case "update": {
            if (null === Dk) return;
            const {
              sourceHash: fk,
              name: Sk,
              ownerName: bk,
              description: rk
            } = ik, Pk = await (0, mk.e)({
              packId: ek.packId,
              sourceHash: fk,
              name: Sk,
              ownerName: bk,
              description: rk
            }, Dk);
            if ("loaded" === Pk.kind && null !== Pk.stored.validation) return Pk.stored;
            const Mk = "failed" === Pk.kind ? Pk.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${ek.packId}: ${Mk}`), "failed" === Pk.kind && Kk.includes(Pk.reason) ? {
              ...kk,
              listing: {
                ...ek,
                rejectedSourceHash: fk
              }
            } : void 0
          }
        }
      }(kk, ek, nk, Hk);
      return void 0 === wk || (await (0, Mk.replaceShaderPack)(kk, wk, Hk) ? (null !== wk && wk.files === kk.files || (0, Mk.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6498: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      forgetShaderPackActiveHint: () => Fk,
      isOtherApiVersion: () => jk,
      isShaderPackActive: () => Yk,
      isShaderPackChangePending: () => Ak,
      markShaderPackChangePending: () => Ck,
      pageShaderPackValidationVersion: () => sk,
      reconcileStoredShaderPackHint: () => Vk,
      removeShaderPack: () => yk,
      replaceShaderPack: () => wk,
      saveShaderPack: () => Hk,
      shaderPackNeedsCheck: () => dk,
      storedPackOutcome: () => Lk,
      storedShaderPackFiles: () => xk,
      toStoredShaderPack: () => Kk
    });
    var Dk = ik(4965),
      fk = ik(4961),
      Sk = ik(38),
      bk = ik(3419),
      rk = ik(6505),
      Pk = ik(6477);
    const mk = "shaderPackChangePending";
    let Mk = null;

    function Kk(kk, ek, ik) {
      return {
        manifest: kk.manifest,
        files: (0, Dk.t)(kk.files),
        validation: ek,
        ...ik && {
          listing: ik
        }
      }
    }

    function xk(kk) {
      return Object.keys(kk.files).map((ek => ({
        path: ek,
        source: kk.files[ek]
      })))
    }
    let nk = Promise.resolve();

    function Uk(kk) {
      const ek = nk.then(kk);
      return nk = ek.catch((() => {})), ek
    }

    function Hk(kk, ek) {
      return Uk((() => lk(kk, ek)))
    }

    function wk(kk, ek, ik) {
      return Uk((async () => JSON.stringify(await (0, rk.f)()) === JSON.stringify(kk) && (null === ek ? (await pk(), !0) : lk(ek, ik))))
    }
    async function lk(kk, ek) {
      const ik = await Sk.e.setItem(rk.c, kk);
      return ik && uk(kk, ek), ik
    }
    async function pk() {
      await Sk.e.removeItem(rk.c), Sk.f.removeItem(bk.e)
    }

    function yk() {
      return Uk(pk)
    }

    function Yk(kk, ek) {
      return "active" === Lk(kk, ek).kind
    }

    function Lk(kk, ek) {
      var ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : jk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) || kk.validation.fromRecheck ? null === ek ? {
        kind: "none",
        reason: "noCompiler"
      } : dk(kk, ek) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : kk.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Ck() {
      Sk.g.setItem(mk, performance.timeOrigin)
    }

    function Ak() {
      return Sk.g.getItem(mk) === performance.timeOrigin
    }

    function jk(kk) {
      return !(0, fk.g)(kk.manifest.apiVersion)
    }

    function sk(kk) {
      return Mk ??= kk.jF((0, Pk.shaderPackTextures)()), Mk
    }

    function dk(kk, ek) {
      var ik;
      return (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.headerVersion) !== sk(ek)
    }

    function Vk(kk) {
      return Uk((async () => {
        uk(await (0, rk.f)(!0), kk)
      }))
    }

    function Fk() {
      return Uk((async () => {
        Sk.f.removeItem(bk.e)
      }))
    }

    function uk(kk, ek) {
      Yk(kk, ek) ? Sk.f.setItem(bk.e, !0) : Sk.f.removeItem(bk.e)
    }
  },
  6477: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      loadShaderPackTextures: () => bk,
      shaderPackTextures: () => rk
    });
    var Dk = ik(4965);
    let fk = null,
      Sk = null;

    function bk() {
      return Sk ??= Promise.all([ik.e(72), ik.e(190)]).then((() => ik(40060))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ek,
          textureNameToIndex: ik,
          textureAnimationData: Sk
        } = kk;
        return fk ??= (0, Dk.h)(ik, Sk, ek), fk
      })), Sk
    }

    function rk() {
      if (null === fk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return fk
    }
  },
  6493: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Pk,
      c: () => rk
    });
    var Dk = ik(6498),
      fk = ik(6477),
      Sk = ik(115);
    const bk = 100;
    async function rk(kk, ek) {
      var ik;
      let Dk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ik = navigator.gpu) && void 0 !== ik ? ik : null;
      const bk = kk.B5(ek, (0, fk.shaderPackTextures)());
      if (bk.errors.length > 0) return mk(kk, bk.errors, bk.offInStrict);
      const rk = await async function(kk) {
        if (!kk) return null;
        try {
          const ek = await (0, Sk.t)(kk);
          return ek ? await ek.requestDevice() : null
        } catch (ek) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ek), null
        }
      }(Dk);
      if (!rk) return null;
      let Pk = !1;
      rk.lost.then((() => {
        Pk = !0
      }));
      try {
        const ek = await Promise.all(bk.validationModules.map((ek => async function(kk, ek, ik) {
          ek.pushErrorScope("validation");
          const Dk = ek.createShaderModule({
              code: ik.code
            }),
            fk = ek.popErrorScope(),
            {
              messages: Sk
            } = await Dk.getCompilationInfo(),
            bk = Sk.filter((kk => "error" === kk.type)).map((ek => kk.mapValidationMessage(ik, ek))),
            rk = await fk;
          rk && 0 === bk.length && bk.push({
            file: null,
            line: 0,
            message: rk.message,
            variants: [ik.key]
          });
          return bk
        }(kk, rk, ek))));
        return Pk ? null : mk(kk, kk.uik(ek.flat()), bk.offInStrict)
      } catch (Mk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Mk), null
      } finally {
        rk.destroy()
      }
    }
    async function Pk(kk, ek) {
      var ik;
      if (!(0, Dk.shaderPackNeedsCheck)(kk, ek) || (0, Dk.isOtherApiVersion)(kk)) return kk;
      const fk = await rk(ek, (0, Dk.storedShaderPackFiles)(kk));
      if (!fk) return kk;
      const Sk = !1 === (null === (ik = kk.validation) || void 0 === ik ? void 0 : ik.ok) && !kk.validation.fromRecheck,
        bk = {
          ...kk,
          validation: Sk ? fk : {
            ...fk,
            fromRecheck: !0
          }
        };
      return await (0, Dk.replaceShaderPack)(kk, bk, ek) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), bk
    }

    function mk(kk, ek, ik) {
      return {
        headerVersion: (0, Dk.pageShaderPackValidationVersion)(kk),
        ok: 0 === ek.length,
        errors: ek.slice(0, bk),
        moreErrors: Math.max(0, ek.length - bk),
        offInStrict: ik
      }
    }
  },
  6396: (kk, ek, ik) => {
    ik.d(ek, {
      C: () => Sk,
      F: () => rk,
      G: () => bk,
      H: () => Dk,
      K: () => xk,
      N: () => Mk,
      Q: () => Yk,
      R: () => Kk,
      V: () => mk,
      e: () => Uk,
      h: () => wk,
      i: () => Hk,
      m: () => nk,
      p: () => yk,
      t: () => Ck,
      v: () => Pk,
      x: () => fk,
      y: () => Lk
    });
    const Dk = ["forest", "desert", "water", "night", "cave"];
    const fk = {
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
      Sk = ["popular", "updated", "newest"],
      bk = 3,
      rk = 32,
      Pk = 300;

    function mk(kk, ek) {
      return kk.slice(0, ek).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Mk = 64,
      Kk = 512,
      xk = 18e5;

    function nk(kk) {
      const ek = kk,
        ik = null === ek || void 0 === ek ? void 0 : ek.files;
      return "number" === typeof(null === ek || void 0 === ek ? void 0 : ek.apiVersion) && "string" === typeof ek.name && (null === ek.author || "string" === typeof ek.author) && (void 0 === ek.keepCircleShadows || "boolean" === typeof ek.keepCircleShadows) && "object" === typeof ik && null !== ik && Object.values(ik).every((kk => "string" === typeof kk))
    }
    const Uk = "Bloxdhub",
      Hk = "https://bloxdhub.com/shaders";

    function wk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const lk = "Screenshot generation failed.",
      pk = "Its screenshots couldn't be generated:";

    function yk(kk) {
      var ek;
      return kk === lk || null !== (ek = null === kk || void 0 === kk ? void 0 : kk.startsWith(pk)) && void 0 !== ek && ek
    }

    function Yk(kk, ek) {
      return `shaderPacks/${kk}/${ek}.json`
    }

    function Lk(kk, ek, ik, Dk) {
      return null === ek.renderId ? Ck(kk, ek.baselineVersion, ik, Dk) : `${kk}/${function(kk,ek,ik,Dk){return`shaderPacks/${kk}/${ek}/${ik}-${Dk}.webp`}(ek.packId,ek.renderId,ik,Dk)}`
    }

    function Ck(kk, ek, ik, Dk) {
      return `${kk}/${function(kk,ek,ik){return`shaderPacks/baseline/${kk}/${ek}-${ik}.webp`}(ek,ik,Dk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);