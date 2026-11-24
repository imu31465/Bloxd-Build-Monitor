export const id = 113;
export const ids = [113, 116, 136, 137];
export const modules = {
  5047: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.d,
      e: () => Tk,
      i: () => Xk.m
    });
    var Xk = Ik(5053);
    const Tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
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
  5053: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      c: () => yk,
      d: () => Xk,
      g: () => wk,
      k: () => tk,
      m: () => Tk,
      p: () => ik,
      t: () => qk,
      w: () => Lk,
      x: () => Zk
    });
    const Xk = 5;

    function Tk(kk) {
      return kk === Xk
    }

    function ik(kk) {
      return [...kk.features]
    }
    const yk = 262144,
      lk = 256,
      ak = 256;

    function qk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Ik, Xk] of Object.entries(kk)) {
        if ("string" !== typeof Xk) return `${Ik} isn't text.`;
        Fk.push({
          path: Ik,
          source: Xk
        })
      }
      return Fk.sort(((kk, Fk) => tk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > lk) return `The pack has more than ${lk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Ik
            }
            of kk) {
            const kk = jk(Ik);
            if (null !== kk) return kk;
            if (Fk.has(Ik)) return `The pack has two files at ${Ik}.`;
            Fk.add(Ik)
          }
          return Zk(kk) > yk ? `The pack's .wgsl files are over ${yk/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function Lk(kk) {
      const Fk = {};
      for (const Ik of kk) Fk[Ik.path] = Ik.source;
      return Fk
    }

    function tk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Zk(kk) {
      const Fk = new TextEncoder;
      let Ik = 0;
      for (const {
          source: Xk
        }
        of kk) Ik += Fk.encode(Xk).byteLength;
      return Ik
    }

    function jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > ak) return `A file path is over ${ak} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const ek = /^(.*)\[rot\[([1-4])$/;

    function wk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Xk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Ik,
          animStartIdx: Tk
        } = kk;
        for (let ik = 1; ik < Ik; ik++) Xk.set(Tk + ik - 1, Fk)
      }));
      const Tk = Object.entries(kk),
        ik = new Map;
      for (const [wk, Hk] of Tk) {
        const kk = ek.exec(wk);
        "1" === kk?.[2] && ik.set(kk[1], Hk + 1)
      }
      const yk = kk => {
          const Fk = ek.exec(kk);
          return Fk && ik.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        lk = new Set(Tk.map((kk => {
          let [Fk] = kk;
          return yk(Fk)?.root ?? Fk
        }))),
        ak = (kk, Ik) => {
          const Xk = kk.replace(/_?0$/, "");
          return (Fk[Ik]?.numAnimStates ?? 0) > 1 && !lk.has(Xk) ? Xk : kk
        },
        qk = new Map;
      for (const [ek, wk] of Tk) qk.set(wk, ak(yk(ek)?.root ?? ek, wk));
      const Lk = Tk.reduce(((kk, Fk) => {
          let [, Ik] = Fk;
          return Math.max(kk, Ik + 1)
        }), 0),
        tk = Array.from({
          length: Lk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Zk = new Map,
        jk = new Map;
      for (const [ek, wk] of Tk) {
        const kk = yk(ek),
          Fk = Xk.get(wk);
        if (void 0 !== Fk) {
          const Ik = qk.get(Fk);
          jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "frame"
          }), kk && !jk.has(kk.root) && jk.set(kk.root, {
            name: kk.root,
            texture: Ik,
            kind: "frame"
          });
          continue
        }
        const Ik = qk.get(wk),
          Tk = kk?.root ?? ek;
        if (Ik !== Tk && jk.set(Tk, {
            name: Tk,
            texture: Ik,
            kind: "frame"
          }), kk) {
          const Fk = ik.get(kk.root);
          tk[wk] = {
            id: Fk,
            rotation: kk.rotation
          }, Zk.set(Ik, Fk), jk.set(ek, {
            name: ek,
            texture: Ik,
            kind: "rotation"
          })
        } else Zk.set(Ik, wk + 1)
      }
      for (const ek of Zk.keys()) jk.delete(ek);
      for (const [ek, wk] of Ik) {
        const kk = Zk.get(wk);
        void 0 === kk || Zk.has(ek) || (Zk.set(ek, kk), jk.delete(ek))
      }
      return {
        named: [...Zk].sort(((kk, Fk) => {
          let [Ik] = kk, [Xk] = Fk;
          return Ik < Xk ? -1 : Ik > Xk ? 1 : 0
        })).map((kk => {
          let [Fk, Ik] = kk;
          return {
            name: Fk,
            id: Ik
          }
        })),
        aliases: [...jk.values()],
        layers: tk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);