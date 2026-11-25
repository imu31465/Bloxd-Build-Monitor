export const id = 116;
export const ids = [116, 118, 138, 139];
export const modules = {
  5206: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => su.h,
      h: () => Uu,
      k: () => su.o
    });
    var su = ju(5209);
    const Uu = [!1, !0].flatMap((uu => ["terrain", "liquid", "model"].map((Eu => ({
      strict: uu,
      program: Eu
    })))))
  },
  6851: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      forgetShaderPackActiveHint: () => ou,
      isOtherApiVersion: () => Ju,
      isShaderPackActive: () => eu,
      isShaderPackChangePending: () => wu,
      markShaderPackChangePending: () => pu,
      pageShaderPackValidationVersion: () => du,
      reconcileStoredShaderPackHint: () => Pu,
      removeShaderPack: () => Mu,
      replaceShaderPack: () => hu,
      saveShaderPack: () => Yu,
      shaderPackNeedsCheck: () => au,
      storedPackOutcome: () => Gu,
      storedShaderPackFiles: () => cu,
      toStoredShaderPack: () => bu
    });
    var su = ju(5209),
      Uu = ju(5206),
      Zu = ju(31),
      Xu = ju(3651),
      lu = ju(6854),
      qu = ju(6827);
    const fu = "shaderPackChangePending";
    let Cu = null;

    function bu(uu, Eu, ju) {
      return {
        manifest: uu.manifest,
        files: (0, su.w)(uu.files),
        validation: Eu,
        ...ju && {
          listing: ju
        }
      }
    }

    function cu(uu) {
      return Object.keys(uu.files).map((Eu => ({
        path: Eu,
        source: uu.files[Eu]
      })))
    }
    let Nu = Promise.resolve();

    function Ou(uu) {
      const Eu = Nu.then(uu);
      return Nu = Eu.catch((() => {})), Eu
    }

    function Yu(uu, Eu) {
      return Ou((() => Du(uu, Eu)))
    }

    function hu(uu, Eu, ju) {
      return Ou((async () => JSON.stringify(await (0, lu.e)()) === JSON.stringify(uu) && (null === Eu ? (await gu(), !0) : Du(Eu, ju))))
    }
    async function Du(uu, Eu) {
      const ju = await Zu.h.setItem(lu.b, uu);
      return ju && ku(uu, Eu), ju
    }
    async function gu() {
      await Zu.h.removeItem(lu.b), Zu.k.removeItem(Xu.c)
    }

    function Mu() {
      return Ou(gu)
    }

    function eu(uu, Eu) {
      return "active" === Gu(uu, Eu).kind
    }

    function Gu(uu, Eu) {
      var ju;
      return null === uu ? {
        kind: "none",
        reason: "nothingStored"
      } : Ju(uu) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.ok) || uu.validation.fromRecheck ? null === Eu ? {
        kind: "none",
        reason: "noCompiler"
      } : au(uu, Eu) ? {
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

    function pu() {
      Zu.l.setItem(fu, performance.timeOrigin)
    }

    function wu() {
      return Zu.l.getItem(fu) === performance.timeOrigin
    }

    function Ju(uu) {
      return !(0, Uu.k)(uu.manifest.apiVersion)
    }

    function du(uu) {
      return Cu ??= uu.fV((0, qu.shaderPackTextures)()), Cu
    }

    function au(uu, Eu) {
      var ju;
      return (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.headerVersion) !== du(Eu)
    }

    function Pu(uu) {
      return Ou((async () => {
        ku(await (0, lu.e)(!0), uu)
      }))
    }

    function ou() {
      return Ou((async () => {
        Zu.k.removeItem(Xu.c)
      }))
    }

    function ku(uu, Eu) {
      eu(uu, Eu) ? Zu.k.setItem(Xu.c, !0) : Zu.k.removeItem(Xu.c)
    }
  },
  6854: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu,
      e: () => Zu
    });
    var su = ju(31);
    const Uu = "shaderPack";
    async function Zu() {
      var uu;
      let Eu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (uu = await su.h.getItem(Uu, Eu)) && void 0 !== uu ? uu : null
    }
  },
  6827: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      loadShaderPackTextures: () => Xu,
      shaderPackTextures: () => lu
    });
    var su = ju(5209);
    let Uu = null,
      Zu = null;

    function Xu() {
      return Zu ??= Promise.all([ju.e(73), ju.e(190)]).then((() => ju(40746))).then((uu => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Eu,
          textureNameToIndex: ju,
          textureAnimationData: Zu
        } = uu;
        return Uu ??= (0, su.j)(ju, Zu, Eu), Uu
      })), Zu
    }

    function lu() {
      if (null === Uu) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Uu
    }
  },
  5209: (uu, Eu, ju) => {
    ju.d(Eu, {
      A: () => cu,
      c: () => lu,
      e: () => Xu,
      h: () => su,
      j: () => Yu,
      k: () => bu,
      o: () => Uu,
      p: () => Zu,
      s: () => fu,
      w: () => Cu
    });
    const su = 5;

    function Uu(uu) {
      return uu === su
    }

    function Zu(uu) {
      return [...uu.features]
    }
    const Xu = 262144,
      lu = 256,
      qu = 256;

    function fu(uu) {
      if ("object" !== typeof uu || null === uu || Array.isArray(uu)) return "The pack has no files.";
      const Eu = [];
      for (const [ju, su] of Object.entries(uu)) {
        if ("string" !== typeof su) return `${ju} isn't text.`;
        Eu.push({
          path: ju,
          source: su
        })
      }
      return Eu.sort(((uu, Eu) => bu(uu.path, Eu.path))),
        function(uu) {
          if (0 === uu.length) return "The pack has no .wgsl files.";
          if (uu.length > lu) return `The pack has more than ${lu} .wgsl files.`;
          const Eu = new Set;
          for (const {
              path: ju
            }
            of uu) {
            const uu = Nu(ju);
            if (null !== uu) return uu;
            if (Eu.has(ju)) return `The pack has two files at ${ju}.`;
            Eu.add(ju)
          }
          return cu(uu) > Xu ? `The pack's .wgsl files are over ${Xu/1024} KB in total.` : null
        }(Eu) ?? Eu
    }

    function Cu(uu) {
      const Eu = {};
      for (const ju of uu) Eu[ju.path] = ju.source;
      return Eu
    }

    function bu(uu, Eu) {
      return uu < Eu ? -1 : uu > Eu ? 1 : 0
    }

    function cu(uu) {
      const Eu = new TextEncoder;
      let ju = 0;
      for (const {
          source: su
        }
        of uu) ju += Eu.encode(su).byteLength;
      return ju
    }

    function Nu(uu) {
      if (!uu.toLowerCase().endsWith(".wgsl")) return `${uu} isn't a .wgsl file.`;
      if (uu.length > qu) return `A file path is over ${qu} characters.`;
      if (uu.includes("\\") || /[\u0000-\u001f]/.test(uu)) return `${uu} isn't a valid file path.`;
      return uu.split("/").some((uu => "" === uu || "." === uu || ".." === uu)) ? `${uu} isn't a valid file path.` : null
    }
    const Ou = /^(.*)\[rot\[([1-4])$/;

    function Yu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const su = new Map;
      Eu.forEach(((uu, Eu) => {
        let {
          numAnimStates: ju,
          animStartIdx: Uu
        } = uu;
        for (let Zu = 1; Zu < ju; Zu++) su.set(Uu + Zu - 1, Eu)
      }));
      const Uu = Object.entries(uu),
        Zu = new Map;
      for (const [Yu, hu] of Uu) {
        const uu = Ou.exec(Yu);
        "1" === uu?.[2] && Zu.set(uu[1], hu + 1)
      }
      const Xu = uu => {
          const Eu = Ou.exec(uu);
          return Eu && Zu.has(Eu[1]) ? {
            root: Eu[1],
            rotation: Number(Eu[2]) - 1
          } : null
        },
        lu = new Set(Uu.map((uu => {
          let [Eu] = uu;
          return Xu(Eu)?.root ?? Eu
        }))),
        qu = (uu, ju) => {
          const su = uu.replace(/_?0$/, "");
          return (Eu[ju]?.numAnimStates ?? 0) > 1 && !lu.has(su) ? su : uu
        },
        fu = new Map;
      for (const [Ou, Yu] of Uu) fu.set(Yu, qu(Xu(Ou)?.root ?? Ou, Yu));
      const Cu = Uu.reduce(((uu, Eu) => {
          let [, ju] = Eu;
          return Math.max(uu, ju + 1)
        }), 0),
        bu = Array.from({
          length: Cu
        }, ((uu, Eu) => ({
          id: Eu + 1,
          rotation: 0
        }))),
        cu = new Map,
        Nu = new Map;
      for (const [Ou, Yu] of Uu) {
        const uu = Xu(Ou),
          Eu = su.get(Yu);
        if (void 0 !== Eu) {
          const ju = fu.get(Eu);
          Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "frame"
          }), uu && !Nu.has(uu.root) && Nu.set(uu.root, {
            name: uu.root,
            texture: ju,
            kind: "frame"
          });
          continue
        }
        const ju = fu.get(Yu),
          Uu = uu?.root ?? Ou;
        if (ju !== Uu && Nu.set(Uu, {
            name: Uu,
            texture: ju,
            kind: "frame"
          }), uu) {
          const Eu = Zu.get(uu.root);
          bu[Yu] = {
            id: Eu,
            rotation: uu.rotation
          }, cu.set(ju, Eu), Nu.set(Ou, {
            name: Ou,
            texture: ju,
            kind: "rotation"
          })
        } else cu.set(ju, Yu + 1)
      }
      for (const Ou of cu.keys()) Nu.delete(Ou);
      for (const [Ou, Yu] of ju) {
        const uu = cu.get(Yu);
        void 0 === uu || cu.has(Ou) || (cu.set(Ou, uu), Nu.delete(Ou))
      }
      return {
        named: [...cu].sort(((uu, Eu) => {
          let [ju] = uu, [su] = Eu;
          return ju < su ? -1 : ju > su ? 1 : 0
        })).map((uu => {
          let [Eu, ju] = uu;
          return {
            name: Eu,
            id: ju
          }
        })),
        aliases: [...Nu.values()],
        layers: bu
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);