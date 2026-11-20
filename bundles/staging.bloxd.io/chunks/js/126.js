export const id = 126;
export const ids = [126, 127, 130];
export const modules = {
  6381: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Eu.j,
      e: () => Ku,
      i: () => Eu.q
    });
    var Eu = yu(6362);
    const Ku = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Ru => ({
      strict: uu,
      program: Ru
    })))))
  },
  40067: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => ru,
      installListedShaderPack: () => Vu
    });
    var Eu = yu(6322),
      Ku = yu(6362),
      Qu = yu(1176),
      mu = yu(6395),
      Ju = yu(6381),
      Nu = yu(6430),
      Xu = yu(6424);
    async function Vu(uu) {
      const Ru = await (0, mu.loadPageShaderPackCompiler)();
      if (null === Ru) return {
        kind: "failed",
        reason: "compiler"
      };
      const yu = await ru(uu, Ru);
      return "failed" === yu.kind ? yu : await (0, Nu.saveShaderPack)(yu.stored, Ru) ? ((0, Nu.markShaderPackChangePending)(), yu) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function ru(uu, Ru) {
      const yu = await async function(uu) {
        let {
          packId: Ru,
          sourceHash: yu
        } = uu;
        try {
          const uu = await fetch(`${Qu.clientSideServerUrls.s3Url}/${(0,Eu.K)(Ru,yu)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!uu.ok) return console.error(`Failed to download shader pack ${Ru} (${uu.status})`), null;
          const Ku = await uu.json();
          return "object" !== typeof Ku || null === Ku ? (console.error(`Shader pack ${Ru}'s source isn't an object`), null) : Ku
        } catch (Ku) {
          return console.error(`Failed to download shader pack ${Ru}`, Ku), null
        }
      }(uu);
      if (null === yu) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Ju.i)(yu.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const mu = (0, Ku.s)(yu.files);
      if ("string" === typeof mu) return console.error(`A listed shader pack breaks the pack rules: ${mu}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Vu = await (0, Xu.g)(Ru, mu);
      if (!1 === (null === Vu || void 0 === Vu ? void 0 : Vu.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const ru = {
        manifest: {
          apiVersion: yu.apiVersion,
          name: uu.name,
          author: uu.ownerName,
          description: uu.description || null,
          keepCircleShadows: !0 === yu.keepCircleShadows
        },
        files: mu
      };
      return {
        kind: "loaded",
        stored: (0, Nu.toStoredShaderPack)(ru, Vu, {
          packId: uu.packId,
          sourceHash: uu.sourceHash
        })
      }
    }
  },
  6430: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      forgetShaderPackActiveHint: () => Iu,
      isOtherApiVersion: () => eu,
      isShaderPackActive: () => du,
      isShaderPackChangePending: () => ku,
      markShaderPackChangePending: () => Cu,
      pageShaderPackValidationVersion: () => Au,
      reconcileStoredShaderPackHint: () => Mu,
      removeShaderPack: () => Hu,
      replaceShaderPack: () => Tu,
      saveShaderPack: () => pu,
      shaderPackNeedsCheck: () => Du,
      storedPackOutcome: () => bu,
      storedShaderPackFiles: () => Bu,
      toStoredShaderPack: () => ru
    });
    var Eu = yu(6362),
      Ku = yu(6381),
      Qu = yu(47),
      mu = yu(3255),
      Ju = yu(6436),
      Nu = yu(6407);
    const Xu = "shaderPackChangePending";
    let Vu = null;

    function ru(uu, Ru, yu) {
      return {
        manifest: uu.manifest,
        files: (0, Eu.w)(uu.files),
        validation: Ru,
        ...yu && {
          listing: yu
        }
      }
    }

    function Bu(uu) {
      return Object.keys(uu.files).map((Ru => ({
        path: Ru,
        source: uu.files[Ru]
      })))
    }
    let xu = Promise.resolve();

    function Su(uu) {
      const Ru = xu.then(uu);
      return xu = Ru.catch((() => {})), Ru
    }

    function pu(uu, Ru) {
      return Su((() => Wu(uu, Ru)))
    }

    function Tu(uu, Ru, yu) {
      return Su((async () => JSON.stringify(await (0, Ju.h)()) === JSON.stringify(uu) && (null === Ru ? (await ju(), !0) : Wu(Ru, yu))))
    }
    async function Wu(uu, Ru) {
      const yu = await Qu.f.setItem(Ju.e, uu);
      return yu && Gu(uu, Ru), yu
    }
    async function ju() {
      await Qu.f.removeItem(Ju.e), Qu.i.removeItem(mu.d)
    }

    function Hu() {
      return Su(ju)
    }

    function du(uu, Ru) {
      return "active" === bu(uu, Ru).kind
    }

    function bu(uu, Ru) {
      var yu;
      return null === uu ? {
        kind: "none",
        reason: "nothingStored"
      } : eu(uu) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.ok) || uu.validation.fromRecheck ? null === Ru ? {
        kind: "none",
        reason: "noCompiler"
      } : Du(uu, Ru) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : uu.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Cu() {
      Qu.j.setItem(Xu, performance.timeOrigin)
    }

    function ku() {
      return Qu.j.getItem(Xu) === performance.timeOrigin
    }

    function eu(uu) {
      return !(0, Ku.i)(uu.manifest.apiVersion)
    }

    function Au(uu) {
      return Vu ??= uu.dD((0, Nu.shaderPackTextures)()), Vu
    }

    function Du(uu, Ru) {
      var yu;
      return (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.headerVersion) !== Au(Ru)
    }

    function Mu(uu) {
      return Su((async () => {
        Gu(await (0, Ju.h)(!0), uu)
      }))
    }

    function Iu() {
      return Su((async () => {
        Qu.i.removeItem(mu.d)
      }))
    }

    function Gu(uu, Ru) {
      du(uu, Ru) ? Qu.i.setItem(mu.d, !0) : Qu.i.removeItem(mu.d)
    }
  },
  6407: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      loadShaderPackTextures: () => mu,
      shaderPackTextures: () => Ju
    });
    var Eu = yu(6362);
    let Ku = null,
      Qu = null;

    function mu() {
      return Qu ??= Promise.all([yu.e(69), yu.e(198)]).then((() => yu(40062))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Ru,
          textureNameToIndex: yu,
          textureAnimationData: Qu
        } = uu;
        return Ku ??= (0, Eu.l)(yu, Qu, Ru), Ku
      })), Qu
    }

    function Ju() {
      if (null === Ku) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Ku
    }
  },
  6424: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Nu,
      g: () => Ju
    });
    var Eu = yu(6430),
      Ku = yu(6407),
      Qu = yu(129);
    const mu = 100;
    async function Ju(uu, Ru) {
      var yu;
      let Eu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (yu = navigator.gpu) && void 0 !== yu ? yu : null;
      const mu = uu.juu(Ru, (0, Ku.shaderPackTextures)());
      if (mu.errors.length > 0) return Xu(uu, mu.errors, mu.offInStrict);
      const Ju = await async function(uu) {
        if (!uu) return null;
        try {
          const Ru = await (0, Qu.y)(uu);
          return Ru ? await Ru.requestDevice() : null
        } catch (Ru) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Ru), null
        }
      }(Eu);
      if (!Ju) return null;
      let Nu = !1;
      Ju.lost.then((() => {
        Nu = !0
      }));
      try {
        const Ru = await Promise.all(mu.validationModules.map((Ru => async function(uu, Ru, yu) {
          Ru.pushErrorScope("validation");
          const Eu = Ru.createShaderModule({
              code: yu.code
            }),
            Ku = Ru.popErrorScope(),
            {
              messages: Qu
            } = await Eu.getCompilationInfo(),
            mu = Qu.filter((uu => "error" === uu.type)).map((Ru => uu.mapValidationMessage(yu, Ru))),
            Ju = await Ku;
          Ju && 0 === mu.length && mu.push({
            file: null,
            line: 0,
            message: Ju.message,
            variants: [yu.key]
          });
          return mu
        }(uu, Ju, Ru))));
        return Nu ? null : Xu(uu, uu.rEu(Ru.flat()), mu.offInStrict)
      } catch (Vu) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Vu), null
      } finally {
        Ju.destroy()
      }
    }
    async function Nu(uu, Ru) {
      var yu;
      if (!(0, Eu.shaderPackNeedsCheck)(uu, Ru) || (0, Eu.isOtherApiVersion)(uu)) return uu;
      const Ku = await Ju(Ru, (0, Eu.storedShaderPackFiles)(uu));
      if (!Ku) return uu;
      const Qu = !1 === (null === (yu = uu.validation) || void 0 === yu ? void 0 : yu.ok) && !uu.validation.fromRecheck,
        mu = {
          ...uu,
          validation: Qu ? Ku : {
            ...Ku,
            fromRecheck: !0
          }
        };
      return await (0, Eu.replaceShaderPack)(uu, mu, Ru) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mu
    }

    function Xu(uu, Ru, yu) {
      return {
        headerVersion: (0, Eu.pageShaderPackValidationVersion)(uu),
        ok: 0 === Ru.length,
        errors: Ru.slice(0, mu),
        moreErrors: Math.max(0, Ru.length - mu),
        offInStrict: yu
      }
    }
  },
  6362: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => mu,
      g: () => Qu,
      j: () => Eu,
      l: () => Su,
      o: () => Vu,
      q: () => Ku,
      s: () => Nu,
      w: () => Xu,
      x: () => ru
    });
    const Eu = 5;

    function Ku(uu) {
      return uu === Eu
    }
    const Qu = 262144,
      mu = 256,
      Ju = 256;

    function Nu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Ru = [];
      for (const [yu, Eu] of Object.entries(uu)) {
        if ("string" !== typeof Eu) return `${yu} isn't text.`;
        Ru.push({
          path: yu,
          source: Eu
        })
      }
      return Ru.sort(((uu, Ru) => Vu(uu.path, Ru.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > mu) return `The pack has more than ${mu} .wgsl files.`;
          const Ru = new Set;
          for (const {
              path: yu
            }
            of uu) {
            const uu = Bu(yu);
            if (null !== uu) return uu;
            if (Ru.has(yu)) return `The pack has two files at ${yu}.`;
            Ru.add(yu)
          }
          return ru(uu) > Qu ? `The pack's .wgsl files are over ${Qu/1024} KB in total.` : null
        }(Ru) ?? Ru
    }

    function Xu(uu) {
      const Ru = {};
      for (const yu of uu) Ru[yu.path] = yu.source;
      return Ru
    }

    function Vu(uu, Ru) {
      return uu < Ru ? -1 : uu > Ru ? 1 : 0
    }

    function ru(uu) {
      const Ru = new TextEncoder;
      let yu = 0;
      for (const {
          source: Eu
        }
        of uu) yu += Ru.encode(Eu).byteLength;
      return yu
    }

    function Bu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > Ju) return `A file path is over ${Ju} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const xu = /^(.*)\[rot\[([1-4])$/;

    function Su(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Eu = new Map;
      Ru.forEach(((uu, Ru) => {
        let {
          numAnimStates: yu,
          animStartIdx: Ku
        } = uu;
        for (let Qu = 1; Qu < yu; Qu++) Eu.set(Ku + Qu - 1, Ru)
      }));
      const Ku = Object.entries(uu),
        Qu = new Map;
      for (const [pu, Tu] of Ku) {
        const uu = xu.exec(pu);
        "1" === uu?.[2] && Qu.set(uu[1], Tu + 1)
      }
      const mu = uu => {
          const Ru = xu.exec(uu);
          return Ru && Qu.has(Ru[1]) ? {
            root: Ru[1],
            rotation: Number(Ru[2]) - 1
          } : null
        },
        Ju = new Set(Ku.map((uu => {
          let [Ru] = uu;
          return mu(Ru)?.root ?? Ru
        }))),
        Nu = (uu, yu) => {
          const Eu = uu.replace(/_?0$/, "");
          return (Ru[yu]?.numAnimStates ?? 0) > 1 && !Ju.has(Eu) ? Eu : uu
        },
        Xu = new Map;
      for (const [xu, pu] of Ku) Xu.set(pu, Nu(mu(xu)?.root ?? xu, pu));
      const Vu = Ku.reduce(((uu, Ru) => {
          let [, yu] = Ru;
          return Math.max(uu, yu + 1)
        }), 0),
        ru = Array.from({
          length: Vu
        }, ((uu, Ru) => ({
          id: Ru + 1,
          rotation: 0
        }))),
        Bu = new Map,
        Su = new Map;
      for (const [xu, pu] of Ku) {
        const uu = mu(xu),
          Ru = Eu.get(pu);
        if (void 0 !== Ru) {
          const yu = Xu.get(Ru);
          Su.set(xu, {
            name: xu,
            texture: yu,
            kind: "frame"
          }), uu && !Su.has(uu.root) && Su.set(uu.root, {
            name: uu.root,
            texture: yu,
            kind: "frame"
          });
          continue
        }
        const yu = Xu.get(pu),
          Ku = uu?.root ?? xu;
        if (yu !== Ku && Su.set(Ku, {
            name: Ku,
            texture: yu,
            kind: "frame"
          }), uu) {
          const Ru = Qu.get(uu.root);
          ru[pu] = {
            id: Ru,
            rotation: uu.rotation
          }, Bu.set(yu, Ru), Su.set(xu, {
            name: xu,
            texture: yu,
            kind: "rotation"
          })
        } else Bu.set(yu, pu + 1)
      }
      for (const xu of Bu.keys()) Su.delete(xu);
      for (const [xu, pu] of yu) {
        const uu = Bu.get(pu);
        void 0 === uu || Bu.has(xu) || (Bu.set(xu, uu), Su.delete(xu))
      }
      return {
        named: [...Bu].sort(((uu, Ru) => {
          let [yu] = uu, [Eu] = Ru;
          return yu < Eu ? -1 : yu > Eu ? 1 : 0
        })).map((uu => {
          let [Ru, yu] = uu;
          return {
            name: Ru,
            id: yu
          }
        })),
        aliases: [...Su.values()],
        layers: ru
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);