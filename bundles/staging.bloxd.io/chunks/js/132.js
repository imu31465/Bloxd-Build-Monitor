export const id = 132;
export const ids = [132, 138, 139];
export const modules = {
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
  41529: (uu, Eu, ju) => {
    ju.d(Eu, {
      followListingUpdates: () => cu
    });
    var su = ju(207),
      Uu = ju(22),
      Zu = ju(1559),
      Xu = ju(1183),
      lu = ju(6810),
      qu = ju(5206),
      fu = ju(40753),
      Cu = ju(6851);
    const bu = ["apiVersion", "invalid", "errors"];
    async function cu(uu, Eu) {
      const ju = await Xu.userContextManager.getCurrentUserContext(),
        cu = await Zu.b.getShaderPackVersions(ju, [Eu.packId]),
        Nu = function(uu, Eu, ju) {
          var su;
          if (void 0 === ju || "unlisted" === ju.status) return {
            kind: "none"
          };
          if ("banned" === ju.status) return {
            kind: "remove"
          };
          if (!(0, qu.k)(ju.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Uu,
            name: Zu,
            ownerName: Xu,
            description: lu
          } = ju;
          return Uu !== Eu.sourceHash && Uu !== Eu.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Uu,
            name: Zu,
            ownerName: Xu,
            description: lu
          } : Zu !== uu.manifest.name || Xu !== uu.manifest.author || (lu || null) !== (null !== (su = uu.manifest.description) && void 0 !== su ? su : null) ? {
            kind: "rename",
            name: Zu,
            ownerName: Xu,
            description: lu
          } : {
            kind: "none"
          }
        }(uu, Eu, (0, su.c)(cu, Eu.packId));
      if ("update" === Nu.kind && "landingPage" !== Uu.d.get("gameState")) return !1;
      const Ou = "update" === Nu.kind || "rename" === Nu.kind,
        Yu = Ou ? await (0, lu.loadPageShaderPackCompiler)() : null;
      if (Ou && null === Yu) return console.warn(`Didn't follow shader pack ${Eu.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const hu = await async function(uu, Eu, ju, su) {
        switch (ju.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...uu, manifest: {
                ...uu.manifest,
                name: ju.name,
                author: ju.ownerName,
                description: ju.description || null
              }
            };
          case "update": {
            if (null === su) return;
            const {
              sourceHash: Uu,
              name: Zu,
              ownerName: Xu,
              description: lu
            } = ju, qu = await (0, fu.b)({
              packId: Eu.packId,
              sourceHash: Uu,
              name: Zu,
              ownerName: Xu,
              description: lu
            }, su);
            if ("loaded" === qu.kind && null !== qu.stored.validation) return qu.stored;
            const Cu = "failed" === qu.kind ? qu.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Eu.packId}: ${Cu}`), "failed" === qu.kind && bu.includes(qu.reason) ? {
              ...uu,
              listing: {
                ...Eu,
                rejectedSourceHash: Uu
              }
            } : void 0
          }
        }
      }(uu, Eu, Nu, Yu);
      return void 0 === hu || (await (0, Cu.replaceShaderPack)(uu, hu, Yu) ? (null !== hu && hu.files === uu.files || (0, Cu.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
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
  6764: (uu, Eu, ju) => {
    ju.d(Eu, {
      C: () => Gu,
      E: () => Zu,
      F: () => lu,
      I: () => Xu,
      M: () => su,
      Q: () => cu,
      R: () => Cu,
      U: () => eu,
      X: () => bu,
      _: () => fu,
      c: () => Ou,
      f: () => hu,
      j: () => Yu,
      n: () => Nu,
      r: () => Mu,
      t: () => pu,
      x: () => qu,
      z: () => Uu
    });
    const su = ["forest", "desert", "water", "night", "cave"];
    const Uu = {
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
      Zu = ["popular", "updated", "newest"],
      Xu = 3,
      lu = 32,
      qu = 300;

    function fu(uu, Eu) {
      return uu.slice(0, Eu).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Cu = 64,
      bu = 512,
      cu = 18e5;

    function Nu(uu) {
      const Eu = uu,
        ju = null === Eu || void 0 === Eu ? void 0 : Eu.files;
      return "number" === typeof(null === Eu || void 0 === Eu ? void 0 : Eu.apiVersion) && "string" === typeof Eu.name && (null === Eu.author || "string" === typeof Eu.author) && (void 0 === Eu.keepCircleShadows || "boolean" === typeof Eu.keepCircleShadows) && "object" === typeof ju && null !== ju && Object.values(ju).every((uu => "string" === typeof uu))
    }
    const Ou = "Bloxdhub",
      Yu = "https://bloxdhub.com/shaders";

    function hu(uu) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(uu)}`
    }
    const Du = "Screenshot generation failed.",
      gu = "Its screenshots couldn't be generated:";

    function Mu(uu) {
      var Eu;
      return uu === Du || null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.startsWith(gu)) && void 0 !== Eu && Eu
    }

    function eu(uu, Eu) {
      return `shaderPacks/${uu}/${Eu}.json`
    }

    function Gu(uu, Eu, ju, su) {
      return null === Eu.renderId ? pu(uu, Eu.baselineVersion, ju, su) : `${uu}/${function(uu,Eu,ju,su){return`shaderPacks/${uu}/${Eu}/${ju}-${su}.webp`}(Eu.packId,Eu.renderId,ju,su)}`
    }

    function pu(uu, Eu, ju, su) {
      return `${uu}/${function(uu,Eu,ju){return`shaderPacks/baseline/${uu}/${Eu}-${ju}.webp`}(Eu,ju,su)}`
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);