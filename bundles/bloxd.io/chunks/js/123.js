export const id = 123;
export const ids = [123, 126, 127, 130];
export const modules = {
  6299: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk.h,
      d: () => tk,
      g: () => Rk.m
    });
    var Rk = Bk(6289);
    const tk = [!1, !0].flatMap((kk => ["terrain", "liquid", "model"].map((Fk => ({
      strict: kk,
      program: Fk
    })))))
  },
  39910: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Vk,
      installListedShaderPack: () => sk
    });
    var Rk = Bk(6253),
      tk = Bk(6289),
      ak = Bk(1154),
      Xk = Bk(6316),
      bk = Bk(6299),
      wk = Bk(6358),
      dk = Bk(6356);
    async function sk(kk) {
      const Fk = await (0, Xk.loadPageShaderPackCompiler)();
      if (null === Fk) return {
        kind: "failed",
        reason: "compiler"
      };
      const Bk = await Vk(kk, Fk);
      return "failed" === Bk.kind ? Bk : await (0, wk.saveShaderPack)(Bk.stored, Fk) ? ((0, wk.markShaderPackChangePending)(), Bk) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Vk(kk, Fk) {
      const Bk = await async function(kk) {
        let {
          packId: Fk,
          sourceHash: Bk
        } = kk;
        try {
          const kk = await fetch(`${ak.clientSideServerUrls.s3Url}/${(0,Rk.Q)(Fk,Bk)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!kk.ok) return console.error(`Failed to download shader pack ${Fk} (${kk.status})`), null;
          const tk = await kk.json();
          return "object" !== typeof tk || null === tk ? (console.error(`Shader pack ${Fk}'s source isn't an object`), null) : tk
        } catch (tk) {
          return console.error(`Failed to download shader pack ${Fk}`, tk), null
        }
      }(kk);
      if (null === Bk) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, bk.g)(Bk.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Xk = (0, tk.q)(Bk.files);
      if ("string" === typeof Xk) return console.error(`A listed shader pack breaks the pack rules: ${Xk}`), {
        kind: "failed",
        reason: "invalid"
      };
      const sk = await (0, dk.g)(Fk, Xk);
      if (!1 === (null === sk || void 0 === sk ? void 0 : sk.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Vk = {
        manifest: {
          apiVersion: Bk.apiVersion,
          name: kk.name,
          author: kk.ownerName,
          description: kk.description || null,
          keepCircleShadows: !0 === Bk.keepCircleShadows
        },
        files: Xk
      };
      return {
        kind: "loaded",
        stored: (0, wk.toStoredShaderPack)(Vk, sk, {
          packId: kk.packId,
          sourceHash: kk.sourceHash
        })
      }
    }
  },
  40723: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      followListingUpdates: () => Jk
    });
    var Rk = Bk(194),
      tk = Bk(22),
      ak = Bk(1441),
      Xk = Bk(1101),
      bk = Bk(6316),
      wk = Bk(6299),
      dk = Bk(39910),
      sk = Bk(6358);
    const Vk = ["apiVersion", "invalid", "errors"];
    async function Jk(kk, Fk) {
      const Bk = await Xk.userContextManager.getCurrentUserContext(),
        Jk = await ak.b.getShaderPackVersions(Bk, [Fk.packId]),
        Ak = function(kk, Fk, Bk) {
          var Rk;
          if (void 0 === Bk || "unlisted" === Bk.status) return {
            kind: "none"
          };
          if ("banned" === Bk.status) return {
            kind: "remove"
          };
          if (!(0, wk.g)(Bk.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: tk,
            name: ak,
            ownerName: Xk,
            description: bk
          } = Bk;
          return tk !== Fk.sourceHash && tk !== Fk.rejectedSourceHash ? {
            kind: "update",
            sourceHash: tk,
            name: ak,
            ownerName: Xk,
            description: bk
          } : ak !== kk.manifest.name || Xk !== kk.manifest.author || (bk || null) !== (null !== (Rk = kk.manifest.description) && void 0 !== Rk ? Rk : null) ? {
            kind: "rename",
            name: ak,
            ownerName: Xk,
            description: bk
          } : {
            kind: "none"
          }
        }(kk, Fk, (0, Rk.d)(Jk, Fk.packId));
      if ("update" === Ak.kind && "landingPage" !== tk.c.get("gameState")) return !1;
      const ek = "update" === Ak.kind || "rename" === Ak.kind,
        yk = ek ? await (0, bk.loadPageShaderPackCompiler)() : null;
      if (ek && null === yk) return console.warn(`Didn't follow shader pack ${Fk.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const fk = await async function(kk, Fk, Bk, Rk) {
        switch (Bk.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...kk, manifest: {
                ...kk.manifest,
                name: Bk.name,
                author: Bk.ownerName,
                description: Bk.description || null
              }
            };
          case "update": {
            if (null === Rk) return;
            const {
              sourceHash: tk,
              name: ak,
              ownerName: Xk,
              description: bk
            } = Bk, wk = await (0, dk.c)({
              packId: Fk.packId,
              sourceHash: tk,
              name: ak,
              ownerName: Xk,
              description: bk
            }, Rk);
            if ("loaded" === wk.kind && null !== wk.stored.validation) return wk.stored;
            const sk = "failed" === wk.kind ? wk.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Fk.packId}: ${sk}`), "failed" === wk.kind && Vk.includes(wk.reason) ? {
              ...kk,
              listing: {
                ...Fk,
                rejectedSourceHash: tk
              }
            } : void 0
          }
        }
      }(kk, Fk, Ak, yk);
      return void 0 === fk || (await (0, sk.replaceShaderPack)(kk, fk, yk) ? (null !== fk && fk.files === kk.files || (0, sk.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6358: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      forgetShaderPackActiveHint: () => uk,
      isOtherApiVersion: () => Ek,
      isShaderPackActive: () => ik,
      isShaderPackChangePending: () => Ok,
      markShaderPackChangePending: () => Lk,
      pageShaderPackValidationVersion: () => Sk,
      reconcileStoredShaderPackHint: () => Hk,
      removeShaderPack: () => vk,
      replaceShaderPack: () => fk,
      saveShaderPack: () => yk,
      shaderPackNeedsCheck: () => Nk,
      storedPackOutcome: () => Yk,
      storedShaderPackFiles: () => Jk,
      toStoredShaderPack: () => Vk
    });
    var Rk = Bk(6289),
      tk = Bk(6299),
      ak = Bk(42),
      Xk = Bk(3255),
      bk = Bk(6361),
      wk = Bk(6340);
    const dk = "shaderPackChangePending";
    let sk = null;

    function Vk(kk, Fk, Bk) {
      return {
        manifest: kk.manifest,
        files: (0, Rk.s)(kk.files),
        validation: Fk,
        ...Bk && {
          listing: Bk
        }
      }
    }

    function Jk(kk) {
      return Object.keys(kk.files).map((Fk => ({
        path: Fk,
        source: kk.files[Fk]
      })))
    }
    let Ak = Promise.resolve();

    function ek(kk) {
      const Fk = Ak.then(kk);
      return Ak = Fk.catch((() => {})), Fk
    }

    function yk(kk, Fk) {
      return ek((() => mk(kk, Fk)))
    }

    function fk(kk, Fk, Bk) {
      return ek((async () => JSON.stringify(await (0, bk.e)()) === JSON.stringify(kk) && (null === Fk ? (await Wk(), !0) : mk(Fk, Bk))))
    }
    async function mk(kk, Fk) {
      const Bk = await ak.f.setItem(bk.d, kk);
      return Bk && Mk(kk, Fk), Bk
    }
    async function Wk() {
      await ak.f.removeItem(bk.d), ak.i.removeItem(Xk.b)
    }

    function vk() {
      return ek(Wk)
    }

    function ik(kk, Fk) {
      return "active" === Yk(kk, Fk).kind
    }

    function Yk(kk, Fk) {
      var Bk;
      return null === kk ? {
        kind: "none",
        reason: "nothingStored"
      } : Ek(kk) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.ok) || kk.validation.fromRecheck ? null === Fk ? {
        kind: "none",
        reason: "noCompiler"
      } : Nk(kk, Fk) ? {
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

    function Lk() {
      ak.j.setItem(dk, performance.timeOrigin)
    }

    function Ok() {
      return ak.j.getItem(dk) === performance.timeOrigin
    }

    function Ek(kk) {
      return !(0, tk.g)(kk.manifest.apiVersion)
    }

    function Sk(kk) {
      return sk ??= kk.qS((0, wk.shaderPackTextures)()), sk
    }

    function Nk(kk, Fk) {
      var Bk;
      return (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.headerVersion) !== Sk(Fk)
    }

    function Hk(kk) {
      return ek((async () => {
        Mk(await (0, bk.e)(!0), kk)
      }))
    }

    function uk() {
      return ek((async () => {
        ak.i.removeItem(Xk.b)
      }))
    }

    function Mk(kk, Fk) {
      ik(kk, Fk) ? ak.i.setItem(Xk.b, !0) : ak.i.removeItem(Xk.b)
    }
  },
  6340: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      loadShaderPackTextures: () => Xk,
      shaderPackTextures: () => bk
    });
    var Rk = Bk(6289);
    let tk = null,
      ak = null;

    function Xk() {
      return ak ??= Promise.all([Bk.e(69), Bk.e(198)]).then((() => Bk(39906))).then((kk => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Fk,
          textureNameToIndex: Bk,
          textureAnimationData: ak
        } = kk;
        return tk ??= (0, Rk.i)(Bk, ak, Fk), tk
      })), ak
    }

    function bk() {
      if (null === tk) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return tk
    }
  },
  6356: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => wk,
      g: () => bk
    });
    var Rk = Bk(6358),
      tk = Bk(6340),
      ak = Bk(117);
    const Xk = 100;
    async function bk(kk, Fk) {
      var Bk;
      let Rk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Bk = navigator.gpu) && void 0 !== Bk ? Bk : null;
      const Xk = kk.N7(Fk, (0, tk.shaderPackTextures)());
      if (Xk.errors.length > 0) return dk(kk, Xk.errors, Xk.offInStrict);
      const bk = await async function(kk) {
        if (!kk) return null;
        try {
          const Fk = await (0, ak.w)(kk);
          return Fk ? await Fk.requestDevice() : null
        } catch (Fk) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Fk), null
        }
      }(Rk);
      if (!bk) return null;
      let wk = !1;
      bk.lost.then((() => {
        wk = !0
      }));
      try {
        const Fk = await Promise.all(Xk.validationModules.map((Fk => async function(kk, Fk, Bk) {
          Fk.pushErrorScope("validation");
          const Rk = Fk.createShaderModule({
              code: Bk.code
            }),
            tk = Fk.popErrorScope(),
            {
              messages: ak
            } = await Rk.getCompilationInfo(),
            Xk = ak.filter((kk => "error" === kk.type)).map((Fk => kk.mapValidationMessage(Bk, Fk))),
            bk = await tk;
          bk && 0 === Xk.length && Xk.push({
            file: null,
            line: 0,
            message: bk.message,
            variants: [Bk.key]
          });
          return Xk
        }(kk, bk, Fk))));
        return wk ? null : dk(kk, kk.EBk(Fk.flat()), Xk.offInStrict)
      } catch (sk) {
        return console.error("Couldn't validate the shader pack on WebGPU.", sk), null
      } finally {
        bk.destroy()
      }
    }
    async function wk(kk, Fk) {
      var Bk;
      if (!(0, Rk.shaderPackNeedsCheck)(kk, Fk) || (0, Rk.isOtherApiVersion)(kk)) return kk;
      const tk = await bk(Fk, (0, Rk.storedShaderPackFiles)(kk));
      if (!tk) return kk;
      const ak = !1 === (null === (Bk = kk.validation) || void 0 === Bk ? void 0 : Bk.ok) && !kk.validation.fromRecheck,
        Xk = {
          ...kk,
          validation: ak ? tk : {
            ...tk,
            fromRecheck: !0
          }
        };
      return await (0, Rk.replaceShaderPack)(kk, Xk, Fk) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xk
    }

    function dk(kk, Fk, Bk) {
      return {
        headerVersion: (0, Rk.pageShaderPackValidationVersion)(kk),
        ok: 0 === Fk.length,
        errors: Fk.slice(0, Xk),
        moreErrors: Math.max(0, Fk.length - Xk),
        offInStrict: Bk
      }
    }
  },
  6253: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      B: () => ak,
      D: () => bk,
      G: () => Xk,
      I: () => Rk,
      J: () => Jk,
      M: () => sk,
      Q: () => vk,
      R: () => Vk,
      T: () => dk,
      e: () => Ak,
      h: () => yk,
      i: () => ek,
      k: () => Wk,
      n: () => Yk,
      p: () => wk,
      t: () => tk,
      x: () => ik
    });
    const Rk = ["forest", "desert", "water", "night", "cave"];
    const tk = {
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
      ak = ["popular", "updated", "newest"],
      Xk = 3,
      bk = 32,
      wk = 300;

    function dk(kk, Fk) {
      return kk.slice(0, Fk).replace(/[\uD800-\uDBFF]$/, "")
    }
    const sk = 64,
      Vk = 512,
      Jk = 18e5;
    const Ak = "Bloxdhub",
      ek = "https://bloxdhub.com/shaders";

    function yk(kk) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(kk)}`
    }
    const fk = "Screenshot generation failed.",
      mk = "Its screenshots couldn't be generated:";

    function Wk(kk) {
      var Fk;
      return kk === fk || null !== (Fk = null === kk || void 0 === kk ? void 0 : kk.startsWith(mk)) && void 0 !== Fk && Fk
    }

    function vk(kk, Fk) {
      return `shaderPacks/${kk}/${Fk}.json`
    }

    function ik(kk, Fk, Bk, Rk) {
      return null === Fk.renderId ? Yk(kk, Fk.baselineVersion, Bk, Rk) : `${kk}/${function(kk,Fk,Bk,Rk){return`shaderPacks/${kk}/${Fk}/${Bk}-${Rk}.webp`}(Fk.packId,Fk.renderId,Bk,Rk)}`
    }

    function Yk(kk, Fk, Bk, Rk) {
      return `${kk}/${function(kk,Fk,Bk){return`shaderPacks/baseline/${kk}/${Fk}-${Bk}.webp`}(Fk,Bk,Rk)}`
    }
  },
  6289: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Xk,
      d: () => ak,
      h: () => Rk,
      i: () => ek,
      k: () => sk,
      m: () => tk,
      q: () => wk,
      s: () => dk,
      w: () => Vk
    });
    const Rk = 5;

    function tk(kk) {
      return kk === Rk
    }
    const ak = 262144,
      Xk = 256,
      bk = 256;

    function wk(kk) {
      if ("object" !== typeof kk || null === kk || Array.isArray(kk)) return "The pack has no files.";
      const Fk = [];
      for (const [Bk, Rk] of Object.entries(kk)) {
        if ("string" !== typeof Rk) return `${Bk} isn't text.`;
        Fk.push({
          path: Bk,
          source: Rk
        })
      }
      return Fk.sort(((kk, Fk) => sk(kk.path, Fk.path))),
        function(kk) {
          if (0 === kk.length) return "The pack has no .wgsl files.";
          if (kk.length > Xk) return `The pack has more than ${Xk} .wgsl files.`;
          const Fk = new Set;
          for (const {
              path: Bk
            }
            of kk) {
            const kk = Jk(Bk);
            if (null !== kk) return kk;
            if (Fk.has(Bk)) return `The pack has two files at ${Bk}.`;
            Fk.add(Bk)
          }
          return Vk(kk) > ak ? `The pack's .wgsl files are over ${ak/1024} KB in total.` : null
        }(Fk) ?? Fk
    }

    function dk(kk) {
      const Fk = {};
      for (const Bk of kk) Fk[Bk.path] = Bk.source;
      return Fk
    }

    function sk(kk, Fk) {
      return kk < Fk ? -1 : kk > Fk ? 1 : 0
    }

    function Vk(kk) {
      const Fk = new TextEncoder;
      let Bk = 0;
      for (const {
          source: Rk
        }
        of kk) Bk += Fk.encode(Rk).byteLength;
      return Bk
    }

    function Jk(kk) {
      if (!kk.toLowerCase().endsWith(".wgsl")) return `${kk} isn't a .wgsl file.`;
      if (kk.length > bk) return `A file path is over ${bk} characters.`;
      if (kk.includes("\\") || /[\u0000-\u001f]/.test(kk)) return `${kk} isn't a valid file path.`;
      return kk.split("/").some((kk => "" === kk || "." === kk || ".." === kk)) ? `${kk} isn't a valid file path.` : null
    }
    const Ak = /^(.*)\[rot\[([1-4])$/;

    function ek(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Rk = new Map;
      Fk.forEach(((kk, Fk) => {
        let {
          numAnimStates: Bk,
          animStartIdx: tk
        } = kk;
        for (let ak = 1; ak < Bk; ak++) Rk.set(tk + ak - 1, Fk)
      }));
      const tk = Object.entries(kk),
        ak = new Map;
      for (const [yk, fk] of tk) {
        const kk = Ak.exec(yk);
        "1" === kk?.[2] && ak.set(kk[1], fk + 1)
      }
      const Xk = kk => {
          const Fk = Ak.exec(kk);
          return Fk && ak.has(Fk[1]) ? {
            root: Fk[1],
            rotation: Number(Fk[2]) - 1
          } : null
        },
        bk = new Set(tk.map((kk => {
          let [Fk] = kk;
          return Xk(Fk)?.root ?? Fk
        }))),
        wk = (kk, Bk) => {
          const Rk = kk.replace(/_?0$/, "");
          return (Fk[Bk]?.numAnimStates ?? 0) > 1 && !bk.has(Rk) ? Rk : kk
        },
        dk = new Map;
      for (const [Ak, yk] of tk) dk.set(yk, wk(Xk(Ak)?.root ?? Ak, yk));
      const sk = tk.reduce(((kk, Fk) => {
          let [, Bk] = Fk;
          return Math.max(kk, Bk + 1)
        }), 0),
        Vk = Array.from({
          length: sk
        }, ((kk, Fk) => ({
          id: Fk + 1,
          rotation: 0
        }))),
        Jk = new Map,
        ek = new Map;
      for (const [Ak, yk] of tk) {
        const kk = Xk(Ak),
          Fk = Rk.get(yk);
        if (void 0 !== Fk) {
          const Bk = dk.get(Fk);
          ek.set(Ak, {
            name: Ak,
            texture: Bk,
            kind: "frame"
          }), kk && !ek.has(kk.root) && ek.set(kk.root, {
            name: kk.root,
            texture: Bk,
            kind: "frame"
          });
          continue
        }
        const Bk = dk.get(yk),
          tk = kk?.root ?? Ak;
        if (Bk !== tk && ek.set(tk, {
            name: tk,
            texture: Bk,
            kind: "frame"
          }), kk) {
          const Fk = ak.get(kk.root);
          Vk[yk] = {
            id: Fk,
            rotation: kk.rotation
          }, Jk.set(Bk, Fk), ek.set(Ak, {
            name: Ak,
            texture: Bk,
            kind: "rotation"
          })
        } else Jk.set(Bk, yk + 1)
      }
      for (const Ak of Jk.keys()) ek.delete(Ak);
      for (const [Ak, yk] of Bk) {
        const kk = Jk.get(yk);
        void 0 === kk || Jk.has(Ak) || (Jk.set(Ak, kk), ek.delete(Ak))
      }
      return {
        named: [...Jk].sort(((kk, Fk) => {
          let [Bk] = kk, [Rk] = Fk;
          return Bk < Rk ? -1 : Bk > Rk ? 1 : 0
        })).map((kk => {
          let [Fk, Bk] = kk;
          return {
            name: Fk,
            id: Bk
          }
        })),
        aliases: [...ek.values()],
        layers: Vk
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);