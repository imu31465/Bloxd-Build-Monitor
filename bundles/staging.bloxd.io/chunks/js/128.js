export const id = 128;
export const ids = [127, 128, 130];
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
  6436: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(47);
    const Ku = "shaderPack";
    async function Qu() {
      var uu;
      let Ru = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await Eu.f.getItem(Ku, Ru)) && void 0 !== uu ? uu : null
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