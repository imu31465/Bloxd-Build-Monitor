export const id = 130;
export const ids = [130, 136, 137];
export const modules = {
  40505: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => tk,
      installListedShaderPack: () => Lk
    });
    var Xk = Ik(6544),
      Tk = Ik(5053),
      ik = Ik(1194),
      yk = Ik(6596),
      lk = Ik(5047),
      ak = Ik(6639),
      qk = Ik(6631);
    async function Lk(kk) {
      const Fk = await (0, yk.loadPageShaderPackCompiler)();
      if (null === Fk) return {
        kind: "failed",
        reason: "compiler"
      };
      const Ik = await tk(kk, Fk);
      return "failed" === Ik.kind ? Ik : await (0, ak.saveShaderPack)(Ik.stored, Fk) ? ((0, ak.markShaderPackChangePending)(), Ik) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function tk(kk, Fk) {
      const Ik = await async function(kk) {
        let {
          packId: Fk,
          sourceHash: Ik
        } = kk;
        try {
          const kk = await fetch(`${ik.clientSideServerUrls.s3Url}/${(0,Xk.P)(Fk,Ik)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!kk.ok) return console.error(`Failed to download shader pack ${Fk} (${kk.status})`), null;
          const Tk = await kk.json();
          return "object" !== typeof Tk || null === Tk ? (console.error(`Shader pack ${Fk}'s source isn't an object`), null) : Tk
        } catch (Tk) {
          return console.error(`Failed to download shader pack ${Fk}`, Tk), null
        }
      }(kk);
      if (null === Ik) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, lk.i)(Ik.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const yk = (0, Tk.t)(Ik.files);
      if ("string" === typeof yk) return console.error(`A listed shader pack breaks the pack rules: ${yk}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Lk = await (0, qk.f)(Fk, yk);
      if (!1 === (null === Lk || void 0 === Lk ? void 0 : Lk.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const tk = {
        manifest: {
          apiVersion: Ik.apiVersion,
          name: kk.name,
          author: kk.ownerName,
          description: kk.description || null,
          keepCircleShadows: !0 === Ik.keepCircleShadows
        },
        files: yk
      };
      return {
        kind: "loaded",
        stored: (0, ak.toStoredShaderPack)(tk, Lk, {
          packId: kk.packId,
          sourceHash: kk.sourceHash
        })
      }
    }
  },
  41296: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      followListingUpdates: () => Zk
    });
    var Xk = Ik(198),
      Tk = Ik(25),
      ik = Ik(1453),
      yk = Ik(1120),
      lk = Ik(6596),
      ak = Ik(5047),
      qk = Ik(40505),
      Lk = Ik(6639);
    const tk = ["apiVersion", "invalid", "errors"];
    async function Zk(kk, Fk) {
      const Ik = await yk.userContextManager.getCurrentUserContext(),
        Zk = await ik.e.getShaderPackVersions(Ik, [Fk.packId]),
        jk = function(kk, Fk, Ik) {
          var Xk;
          if (void 0 === Ik || "unlisted" === Ik.status) return {
            kind: "none"
          };
          if ("banned" === Ik.status) return {
            kind: "remove"
          };
          if (!(0, ak.i)(Ik.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Tk,
            name: ik,
            ownerName: yk,
            description: lk
          } = Ik;
          return Tk !== Fk.sourceHash && Tk !== Fk.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Tk,
            name: ik,
            ownerName: yk,
            description: lk
          } : ik !== kk.manifest.name || yk !== kk.manifest.author || (lk || null) !== (null !== (Xk = kk.manifest.description) && void 0 !== Xk ? Xk : null) ? {
            kind: "rename",
            name: ik,
            ownerName: yk,
            description: lk
          } : {
            kind: "none"
          }
        }(kk, Fk, (0, Xk.d)(Zk, Fk.packId));
      if ("update" === jk.kind && "landingPage" !== Tk.d.get("gameState")) return !1;
      const ek = "update" === jk.kind || "rename" === jk.kind,
        wk = ek ? await (0, lk.loadPageShaderPackCompiler)() : null;
      if (ek && null === wk) return console.warn(`Didn't follow shader pack ${Fk.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const Hk = await async function(kk, Fk, Ik, Xk) {
        switch (Ik.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...kk, manifest: {
                ...kk.manifest,
                name: Ik.name,
                author: Ik.ownerName,
                description: Ik.description || null
              }
            };
          case "update": {
            if (null === Xk) return;
            const {
              sourceHash: Tk,
              name: ik,
              ownerName: yk,
              description: lk
            } = Ik, ak = await (0, qk.b)({
              packId: Fk.packId,
              sourceHash: Tk,
              name: ik,
              ownerName: yk,
              description: lk
            }, Xk);
            if ("loaded" === ak.kind && null !== ak.stored.validation) return ak.stored;
            const Lk = "failed" === ak.kind ? ak.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Fk.packId}: ${Lk}`), "failed" === ak.kind && tk.includes(ak.reason) ? {
              ...kk,
              listing: {
                ...Fk,
                rejectedSourceHash: Tk
              }
            } : void 0
          }
        }
      }(kk, Fk, jk, wk);
      return void 0 === Hk || (await (0, Lk.replaceShaderPack)(kk, Hk, wk) ? (null !== Hk && Hk.files === kk.files || (0, Lk.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6639: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      forgetShaderPackActiveHint: () => Ok,
      isOtherApiVersion: () => zk,
      isShaderPackActive: () => Kk,
      isShaderPackChangePending: () => Vk,
      markShaderPackChangePending: () => sk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Ek,
      removeShaderPack: () => Pk,
      replaceShaderPack: () => Hk,
      saveShaderPack: () => wk,
      shaderPackNeedsCheck: () => vk,
      storedPackOutcome: () => Qk,
      storedShaderPackFiles: () => Zk,
      toStoredShaderPack: () => tk
    });
    var Xk = Ik(5053),
      Tk = Ik(5047),
      ik = Ik(41),
      yk = Ik(3396),
      lk = Ik(6644),
      ak = Ik(6611);
    const qk = "shaderPackChangePending";
    let Lk = null;

    function tk(kk, Fk, Ik) {
      return {
        manifest: kk.manifest,
        files: (0, Xk.w)(kk.files),
        validation: Fk,
        ...Ik && {
          listing: Ik
        }
      }
    }

    function Zk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let jk = Promise.resolve();

    function ek(kk) {
      const Fk = jk.then(kk);
      return jk = Fk.catch((() => {})), Fk
    }

    function wk(kk, Fk) {
      return ek((() => Jk(kk, Fk)))
    }

    function Hk(kk, Fk, Ik) {
      return ek((async () => JSON.stringify(await (0, lk.i)()) === JSON.stringify(kk) && (null === Fk ? (await xk(), !0) : Jk(Fk, Ik))))
    }
    async function Jk(kk, Fk) {
      const Ik = await ik.g.setItem(lk.e, kk);
      return Ik && nk(kk, Fk), Ik
    }
    async function xk() {
      await ik.g.removeItem(lk.e), ik.j.removeItem(yk.e)
    }

    function Pk() {
      return ek(xk)
    }

    function Kk(kk, Fk) {
      return "active" === Qk(kk, Fk).kind
    }

    function Qk(kk, Fk) {
      var Ik;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : zk(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : vk(kk, Fk) ? {
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

    function sk() {
      ik.m.setItem(qk, performance.timeOrigin)
    }

    function Vk() {
      return ik.m.getItem(qk) === performance.timeOrigin
    }

    function zk(kk) {
      return !(0, Tk.i)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return Lk ??= kk.nG((0, ak.shaderPackTextures)()), Lk
    }

    function vk(kk, Fk) {
      var Ik;
      return (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.headerVersion) !== Sk(Fk)
    }

    function Ek(kk) {
      return ek((async () => {
        nk(await (0, lk.i)(!0), kk)
      }))
    }

    function Ok() {
      return ek((async () => {
        ik.j.removeItem(yk.e)
      }))
    }

    function nk(kk, Fk) {
      Kk(kk, Fk) ? ik.j.setItem(yk.e, !0) : ik.j.removeItem(yk.e)
    }
  },
  6611: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      loadShaderPackTextures: () => yk,
      shaderPackTextures: () => lk
    });
    var Xk = Ik(5053);
    let Tk = null,
      ik = null;

    function yk() {
      return ik ??= Promise.all([Ik.e(72), Ik.e(188)]).then((() => Ik(40500))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Ik,
          textureAnimationData: ik
        } = kk;
        return Tk ??= (0, Xk.g)(Ik, ik, Fk), Tk
      })), ik
    }

    function lk() {
      if (null === Tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Tk
    }
  },
  6631: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak,
      f: () => lk
    });
    var Xk = Ik(6639),
      Tk = Ik(6611),
      ik = Ik(113);
    const yk = 100;
    async function lk(kk, Fk) {
      var Ik;
      let Xk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Ik = navigator.gpu) && void 0 !== Ik ? Ik : null;
      const yk = kk.N7(Fk, (0, Tk.shaderPackTextures)());
      if (yk.errors.length > 0) return qk(kk, yk.errors, yk.offInStrict);
      const lk = await async function(kk) {
        if (!kk) return null;
        try {
          const Fk = await (0, ik.t)(kk);
          return Fk ? await Fk.requestDevice() : null
        } catch (Fk) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Fk), null
        }
      }(Xk);
      if (!lk) return null;
      let ak = !1;
      lk.lost.then((() => {
        ak = !0
      }));
      try {
        const Fk = await Promise.all(yk.validationModules.map((Fk => async function(kk, Fk, Ik) {
          Fk.pushErrorScope("validation");
          const Xk = Fk.createShaderModule({
              code: Ik.code
            }),
            Tk = Fk.popErrorScope(),
            {
              messages: ik
            } = await Xk.getCompilationInfo(),
            yk = ik.filter((kk => "error" === kk.type)).map((Fk => kk.mapValidationMessage(Ik, Fk))),
            lk = await Tk;
          lk && 0 === yk.length && yk.push({
            file: null,
            line: 0,
            message: lk.message,
            variants: [Ik.key]
          });
          return yk
        }(kk, lk, Fk))));
        return ak ? null : qk(kk, kk.YIk(Fk.flat()), yk.offInStrict)
      } catch (Lk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Lk), null
      } finally {
        lk.destroy()
      }
    }
    async function ak(kk, Fk) {
      var Ik;
      if (!(0, Xk.shaderPackNeedsCheck)(kk, Fk) || (0, Xk.isOtherApiVersion)(kk)) return kk;
      const Tk = await lk(Fk, (0, Xk.storedShaderPackFiles)(kk));
      if (!Tk) return kk;
      const ik = !1 === (null === (Ik = kk.validation) || void 0 === Ik ? void 0 : Ik.ok) && !kk.validation.fromRecheck,
        yk = {
          ...kk,
          validation: ik ? Tk : {
            ...Tk,
            fromRecheck: !0
          }
        };
      return await (0, Xk.replaceShaderPack)(kk, yk, Fk) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), yk
    }

    function qk(kk, Fk, Ik) {
      return {
        headerVersion: (0, Xk.pageShaderPackValidationVersion)(kk),
        ok: 0 === Fk.length,
        errors: Fk.slice(0, yk),
        moreErrors: Math.max(0, Fk.length - yk),
        offInStrict: Ik
      }
    }
  },
  6544: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      C: () => lk,
      E: () => yk,
      I: () => Xk,
      K: () => Zk,
      N: () => Lk,
      P: () => Kk,
      Q: () => tk,
      U: () => qk,
      d: () => ek,
      e: () => Hk,
      g: () => wk,
      j: () => jk,
      l: () => Pk,
      p: () => sk,
      q: () => ak,
      u: () => Tk,
      y: () => Qk,
      z: () => ik
    });
    const Xk = ["forest", "desert", "water", "night", "cave"];
    const Tk = {
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
      ik = ["popular", "updated", "newest"],
      yk = 3,
      lk = 32,
      ak = 300;

    function qk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Lk = 64,
      tk = 512,
      Zk = 18e5;

    function jk(kk) {
      const Fk = kk,
        Ik = null === Fk || void 0 === Fk ? void 0 : Fk.files;
      return "number" === typeof(null === Fk || void 0 === Fk ? void 0 : Fk.apiVersion) && "string" === typeof Fk.name && (null === Fk.author || "string" === typeof Fk.author) && (void 0 === Fk.keepCircleShadows || "boolean" === typeof Fk.keepCircleShadows) && "object" === typeof Ik && null !== Ik && Object.values(Ik).every((kk => "string" === typeof kk))
    }
    const ek = "Bloxdhub",
      wk = "https://bloxdhub.com/shaders";

    function Hk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const Jk = "Screenshot generation failed.",
      xk = "Its screenshots couldn't be generated:";

    function Pk(kk) {
      var Fk;
      return kk === Jk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(xk)) && void 0 !== Fk && Fk
    }

    function Kk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function Qk(kk, Fk, Ik, Xk) {
      return null === Fk.renderId ? sk(kk, Fk.baselineVersion, Ik, Xk) : `${kk}/${function(kk,Fk,Ik,Xk){return`shaderPacks/${kk}/${Fk}/${Ik}-${Xk}.webp`}(Fk.packId,Fk.renderId,Ik,Xk)}`
    }

    function sk(kk, Fk, Ik, Xk) {
      return `${kk}/${function(kk,Fk,Ik){return`shaderPacks/baseline/${kk}/${Fk}-${Ik}.webp`}(Fk,Ik,Xk)}`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);