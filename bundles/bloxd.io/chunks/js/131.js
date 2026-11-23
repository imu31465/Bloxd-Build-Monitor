export const id = 131;
export const ids = [131];
export const modules = {
  41745: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      startHarnessShaderPack: () => tk
    });
    var Xk = Ik(6544),
      Tk = Ik(5053),
      ik = Ik(6622),
      yk = Ik(6596),
      lk = Ik(5047),
      ak = Ik(39224),
      qk = Ik(6611),
      Lk = Ik(6631);
    async function tk(kk, Fk) {
      const {
        stored: Ik,
        info: tk
      } = await async function(kk, Fk) {
        const Ik = await async function(kk) {
          const Fk = await fetch(kk);
          if (!Fk.ok) throw new Error(`Couldn't fetch the shader pack at ${kk}: HTTP ${Fk.status}`);
          const Ik = await Fk.json();
          if (!(0, Xk.j)(Ik)) throw new Error(`The shader pack at ${kk} isn't a shader pack listing source`);
          return Ik
        }(kk);
        if (!(0, lk.i)(Ik.apiVersion)) throw new Error(`The pack is for shader pack API version ${Ik.apiVersion}; this build runs version ${lk.b}`);
        const ak = {
            manifest: {
              apiVersion: Ik.apiVersion,
              name: Ik.name,
              author: Ik.author,
              description: null,
              keepCircleShadows: !0 === Ik.keepCircleShadows
            },
            files: Ik.files,
            validation: null
          },
          tk = {
            url: kk,
            name: Ik.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          Zk = (0, Tk.t)(Ik.files);
        if ("string" === typeof Zk) return tk.errors = [{
          file: null,
          line: 0,
          message: Zk
        }], {
          stored: ak,
          info: tk
        };
        const jk = await (0, yk.loadPageShaderPackCompiler)();
        if (!jk) throw new Error("The shader pack compiler couldn't load");
        const ek = await (0, Lk.f)(jk, Zk);
        if (!ek) throw new Error("No WebGPU device could validate the shader pack");
        if (tk.errors = [...ek.errors], ek.ok) {
          const kk = jk.N7(Zk, (0, qk.shaderPackTextures)());
          tk.features = (0, Tk.p)(kk), tk.runsInMode = (0, ik.f)(kk.variants, Fk)
        }
        return {
          stored: {
            ...ak,
            validation: ek
          },
          info: tk
        }
      }(kk, Fk), [Zk] = tk.errors;
      if (Zk) {
        const kk = null === Zk.file ? "" : `${Zk.file}:${Zk.line}: `,
          Fk = tk.errors.length > 1 ? ` (${tk.errors.length-1} more)` : "";
        return {
          info: tk,
          problem: `The shader pack doesn't compile: ${kk}${Zk.message}${Fk}`
        }
      }
      return tk.runsInMode ? ((0, ak.setHarnessUrlShaderPack)(Ik, Fk), {
        info: tk,
        problem: null
      }) : {
        info: tk,
        problem: `The shader pack runs nothing in ${Fk} mode`
      }
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