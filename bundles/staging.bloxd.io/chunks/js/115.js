export const id = 115;
export const ids = [115, 118, 138, 139];
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
  40753: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => bu,
      installListedShaderPack: () => Cu
    });
    var su = ju(6764),
      Uu = ju(5209),
      Zu = ju(1255),
      Xu = ju(6810),
      lu = ju(5206),
      qu = ju(6851),
      fu = ju(6849);
    async function Cu(uu) {
      const Eu = await (0, Xu.loadPageShaderPackCompiler)();
      if (null === Eu) return {
        kind: "failed",
        reason: "compiler"
      };
      const ju = await bu(uu, Eu);
      return "failed" === ju.kind ? ju : await (0, qu.saveShaderPack)(ju.stored, Eu) ? ((0, qu.markShaderPackChangePending)(), ju) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function bu(uu, Eu) {
      const ju = await async function(uu) {
        let {
          packId: Eu,
          sourceHash: ju
        } = uu;
        try {
          const uu = await fetch(`${Zu.clientSideServerUrls.s3Url}/${(0,su.U)(Eu,ju)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!uu.ok) return console.error(`Failed to download shader pack ${Eu} (${uu.status})`), null;
          const Uu = await uu.json();
          return "object" !== typeof Uu || null === Uu ? (console.error(`Shader pack ${Eu}'s source isn't an object`), null) : Uu
        } catch (Uu) {
          return console.error(`Failed to download shader pack ${Eu}`, Uu), null
        }
      }(uu);
      if (null === ju) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, lu.k)(ju.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Xu = (0, Uu.s)(ju.files);
      if ("string" === typeof Xu) return console.error(`A listed shader pack breaks the pack rules: ${Xu}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Cu = await (0, fu.e)(Eu, Xu);
      if (!1 === (null === Cu || void 0 === Cu ? void 0 : Cu.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const bu = {
        manifest: {
          apiVersion: ju.apiVersion,
          name: uu.name,
          author: uu.ownerName,
          description: uu.description || null,
          keepCircleShadows: !0 === ju.keepCircleShadows
        },
        files: Xu
      };
      return {
        kind: "loaded",
        stored: (0, qu.toStoredShaderPack)(bu, Cu, {
          packId: uu.packId,
          sourceHash: uu.sourceHash
        })
      }
    }
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
  6849: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => qu,
      e: () => lu
    });
    var su = ju(6851),
      Uu = ju(6827),
      Zu = ju(115);
    const Xu = 100;
    async function lu(uu, Eu) {
      var ju;
      let su = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (ju = navigator.gpu) && void 0 !== ju ? ju : null;
      const Xu = uu.luu(Eu, (0, Uu.shaderPackTextures)());
      if (Xu.errors.length > 0) return fu(uu, Xu.errors, Xu.offInStrict);
      const lu = await async function(uu) {
        if (!uu) return null;
        try {
          const Eu = await (0, Zu.v)(uu);
          return Eu ? await Eu.requestDevice() : null
        } catch (Eu) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Eu), null
        }
      }(su);
      if (!lu) return null;
      let qu = !1;
      lu.lost.then((() => {
        qu = !0
      }));
      try {
        const Eu = await Promise.all(Xu.validationModules.map((Eu => async function(uu, Eu, ju) {
          Eu.pushErrorScope("validation");
          const su = Eu.createShaderModule({
              code: ju.code
            }),
            Uu = Eu.popErrorScope(),
            {
              messages: Zu
            } = await su.getCompilationInfo(),
            Xu = Zu.filter((uu => "error" === uu.type)).map((Eu => uu.mapValidationMessage(ju, Eu))),
            lu = await Uu;
          lu && 0 === Xu.length && Xu.push({
            file: null,
            line: 0,
            message: lu.message,
            variants: [ju.key]
          });
          return Xu
        }(uu, lu, Eu))));
        return qu ? null : fu(uu, uu.Rju(Eu.flat()), Xu.offInStrict)
      } catch (Cu) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Cu), null
      } finally {
        lu.destroy()
      }
    }
    async function qu(uu, Eu) {
      var ju;
      if (!(0, su.shaderPackNeedsCheck)(uu, Eu) || (0, su.isOtherApiVersion)(uu)) return uu;
      const Uu = await lu(Eu, (0, su.storedShaderPackFiles)(uu));
      if (!Uu) return uu;
      const Zu = !1 === (null === (ju = uu.validation) || void 0 === ju ? void 0 : ju.ok) && !uu.validation.fromRecheck,
        Xu = {
          ...uu,
          validation: Zu ? Uu : {
            ...Uu,
            fromRecheck: !0
          }
        };
      return await (0, su.replaceShaderPack)(uu, Xu, Eu) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xu
    }

    function fu(uu, Eu, ju) {
      return {
        headerVersion: (0, su.pageShaderPackValidationVersion)(uu),
        ok: 0 === Eu.length,
        errors: Eu.slice(0, Xu),
        moreErrors: Math.max(0, Eu.length - Xu),
        offInStrict: ju
      }
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