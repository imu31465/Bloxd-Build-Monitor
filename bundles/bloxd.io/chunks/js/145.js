export const id = 145;
export const ids = [145, 152, 153];
export const modules = {
  41618: (ee, ie, He) => {
    He.d(ie, {
      b: () => Re,
      installListedShaderPack: () => oe
    });
    var ye = He(7206),
      be = He(5570),
      Me = He(1141),
      Ke = He(7249),
      Ue = He(5563),
      Fe = He(7290),
      Je = He(7283);
    async function oe(ee) {
      const ie = await (0, Ke.loadPageShaderPackCompiler)();
      if (null === ie) return {
        kind: "failed",
        reason: "compiler"
      };
      const He = await Re(ee, ie);
      return "failed" === He.kind ? He : await (0, Fe.saveShaderPack)(He.stored, ie) ? ((0, Fe.markShaderPackChangePending)(), He) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Re(ee, ie) {
      const He = await async function(ee) {
        let {
          packId: ie,
          sourceHash: He
        } = ee;
        try {
          const ee = await fetch(`${Me.clientSideServerUrls.s3Url}/${(0,ye.H)(ie,He)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!ee.ok) return console.error(`Failed to download shader pack ${ie} (${ee.status})`), null;
          const be = await ee.json();
          return "object" !== typeof be || null === be ? (console.error(`Shader pack ${ie}'s source isn't an object`), null) : be
        } catch (be) {
          return console.error(`Failed to download shader pack ${ie}`, be), null
        }
      }(ee);
      if (null === He) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Ue.h)(He.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Ke = (0, be.r)(He.files);
      if ("string" === typeof Ke) return console.error(`A listed shader pack breaks the pack rules: ${Ke}`), {
        kind: "failed",
        reason: "invalid"
      };
      const oe = await (0, Je.g)(ie, Ke);
      if (!1 === (null === oe || void 0 === oe ? void 0 : oe.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Re = {
        manifest: {
          apiVersion: He.apiVersion,
          name: ee.name,
          author: ee.ownerName,
          description: ee.description || null,
          keepCircleShadows: !0 === He.keepCircleShadows
        },
        files: Ke
      };
      return {
        kind: "loaded",
        stored: (0, Fe.toStoredShaderPack)(Re, oe, {
          packId: ee.packId,
          sourceHash: ee.sourceHash
        })
      }
    }
  },
  44490: (ee, ie, He) => {
    He.d(ie, {
      followListingUpdates: () => ke
    });
    var ye = He(198),
      be = He(18),
      Me = He(1490),
      Ke = He(1083),
      Ue = He(7249),
      Fe = He(5563),
      Je = He(41618),
      oe = He(7290);
    const Re = ["apiVersion", "invalid", "errors"];
    async function ke(ee, ie) {
      const He = await Ke.userContextManager.getCurrentUserContext(),
        ke = await Me.b.getShaderPackVersions(He, [ie.packId]),
        qe = function(ee, ie, He) {
          var ye;
          if (void 0 === He || "unlisted" === He.status) return {
            kind: "none"
          };
          if ("banned" === He.status) return {
            kind: "remove"
          };
          if (!(0, Fe.h)(He.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: be,
            name: Me,
            ownerName: Ke,
            description: Ue
          } = He;
          return be !== ie.sourceHash && be !== ie.rejectedSourceHash ? {
            kind: "update",
            sourceHash: be,
            name: Me,
            ownerName: Ke,
            description: Ue
          } : Me !== ee.manifest.name || Ke !== ee.manifest.author || (Ue || null) !== (null !== (ye = ee.manifest.description) && void 0 !== ye ? ye : null) ? {
            kind: "rename",
            name: Me,
            ownerName: Ke,
            description: Ue
          } : {
            kind: "none"
          }
        }(ee, ie, (0, ye.b)(ke, ie.packId));
      if ("update" === qe.kind && "landingPage" !== be.e.get("gameState")) return !1;
      const fe = "update" === qe.kind || "rename" === qe.kind,
        Te = fe ? await (0, Ue.loadPageShaderPackCompiler)() : null;
      if (fe && null === Te) return console.warn(`Didn't follow shader pack ${ie.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const pe = await async function(ee, ie, He, ye) {
        switch (He.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...ee, manifest: {
                ...ee.manifest,
                name: He.name,
                author: He.ownerName,
                description: He.description || null
              }
            };
          case "update": {
            if (null === ye) return;
            const {
              sourceHash: be,
              name: Me,
              ownerName: Ke,
              description: Ue
            } = He, Fe = await (0, Je.b)({
              packId: ie.packId,
              sourceHash: be,
              name: Me,
              ownerName: Ke,
              description: Ue
            }, ye);
            if ("loaded" === Fe.kind && null !== Fe.stored.validation) return Fe.stored;
            const oe = "failed" === Fe.kind ? Fe.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${ie.packId}: ${oe}`), "failed" === Fe.kind && Re.includes(Fe.reason) ? {
              ...ee,
              listing: {
                ...ie,
                rejectedSourceHash: be
              }
            } : void 0
          }
        }
      }(ee, ie, qe, Te);
      return void 0 === pe || (await (0, oe.replaceShaderPack)(ee, pe, Te) ? (null !== pe && pe.files === ee.files || (0, oe.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7290: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      forgetShaderPackActiveHint: () => De,
      isOtherApiVersion: () => We,
      isShaderPackActive: () => Ee,
      isShaderPackChangePending: () => de,
      markShaderPackChangePending: () => Oe,
      pageShaderPackValidationVersion: () => te,
      reconcileStoredShaderPackHint: () => we,
      removeShaderPack: () => Be,
      replaceShaderPack: () => pe,
      saveShaderPack: () => Te,
      shaderPackNeedsCheck: () => Ze,
      storedPackOutcome: () => ge,
      storedShaderPackFiles: () => ke,
      toStoredShaderPack: () => Re
    });
    var ye = He(5570),
      be = He(5563),
      Me = He(35),
      Ke = He(3808),
      Ue = He(7296),
      Fe = He(7262);
    const Je = "shaderPackChangePending";
    let oe = null;

    function Re(ee, ie, He) {
      return {
        manifest: ee.manifest,
        files: (0, ye.s)(ee.files),
        validation: ie,
        ...He && {
          listing: He
        }
      }
    }

    function ke(ee) {
      return Object.keys(ee.files).map((ie => ({
        path: ie,
        source: ee.files[ie]
      })))
    }
    let qe = Promise.resolve();

    function fe(ee) {
      const ie = qe.then(ee);
      return qe = ie.catch((() => {})), ie
    }

    function Te(ee, ie) {
      return fe((() => Xe(ee, ie)))
    }

    function pe(ee, ie, He) {
      return fe((async () => JSON.stringify(await (0, Ue.h)()) === JSON.stringify(ee) && (null === ie ? (await ze(), !0) : Xe(ie, He))))
    }
    async function Xe(ee, ie) {
      const He = await Me.e.setItem(Ue.e, ee);
      return He && Pe(ee, ie), He
    }
    async function ze() {
      await Me.e.removeItem(Ue.e), Me.i.removeItem(Ke.b)
    }

    function Be() {
      return fe(ze)
    }

    function Ee(ee, ie) {
      return "active" === ge(ee, ie).kind
    }

    function ge(ee, ie) {
      var He;
      return null === ee ? {
        kind: "none",
        reason: "nothingStored"
      } : We(ee) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) || ee.validation.fromRecheck ? null === ie ? {
        kind: "none",
        reason: "noCompiler"
      } : Ze(ee, ie) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : ee.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function Oe() {
      Me.m.setItem(Je, performance.timeOrigin)
    }

    function de() {
      return Me.m.getItem(Je) === performance.timeOrigin
    }

    function We(ee) {
      return !(0, be.h)(ee.manifest.apiVersion)
    }

    function te(ee) {
      return oe ??= ee.cV((0, Fe.shaderPackTextures)()), oe
    }

    function Ze(ee, ie) {
      var He;
      return (null === (He = ee.validation) || void 0 === He ? void 0 : He.headerVersion) !== te(ie)
    }

    function we(ee) {
      return fe((async () => {
        Pe(await (0, Ue.h)(!0), ee)
      }))
    }

    function De() {
      return fe((async () => {
        Me.i.removeItem(Ke.b)
      }))
    }

    function Pe(ee, ie) {
      Ee(ee, ie) ? Me.i.setItem(Ke.b, !0) : Me.i.removeItem(Ke.b)
    }
  },
  7262: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      loadShaderPackTextures: () => Ke,
      shaderPackTextures: () => Ue
    });
    var ye = He(5570);
    let be = null,
      Me = null;

    function Ke() {
      return Me ??= Promise.all([He.e(84), He.e(206)]).then((() => He(41616))).then((ee => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ie,
          textureNameToIndex: He,
          textureAnimationData: Me
        } = ee;
        return be ??= (0, ye.h)(He, Me, ie), be
      })), Me
    }

    function Ue() {
      if (null === be) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return be
    }
  },
  7283: (ee, ie, He) => {
    He.d(ie, {
      e: () => Fe,
      g: () => Ue
    });
    var ye = He(7290),
      be = He(7262),
      Me = He(115);
    const Ke = 100;
    async function Ue(ee, ie) {
      var He;
      let ye = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (He = navigator.gpu) && void 0 !== He ? He : null;
      const Ke = ee.vie(ie, (0, be.shaderPackTextures)());
      if (Ke.errors.length > 0) return Je(ee, Ke.errors, Ke.offInStrict);
      const Ue = await async function(ee) {
        if (!ee) return null;
        try {
          const ie = await (0, Me.v)(ee);
          return ie ? await ie.requestDevice() : null
        } catch (ie) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ie), null
        }
      }(ye);
      if (!Ue) return null;
      let Fe = !1;
      Ue.lost.then((() => {
        Fe = !0
      }));
      try {
        const ie = await Promise.all(Ke.validationModules.map((ie => async function(ee, ie, He) {
          ie.pushErrorScope("validation");
          const ye = ie.createShaderModule({
              code: He.code
            }),
            be = ie.popErrorScope(),
            {
              messages: Me
            } = await ye.getCompilationInfo(),
            Ke = Me.filter((ee => "error" === ee.type)).map((ie => ee.mapValidationMessage(He, ie))),
            Ue = await be;
          Ue && 0 === Ke.length && Ke.push({
            file: null,
            line: 0,
            message: Ue.message,
            variants: [He.key]
          });
          return Ke
        }(ee, Ue, ie))));
        return Fe ? null : Je(ee, ee.Lbe(ie.flat()), Ke.offInStrict)
      } catch (oe) {
        return console.error("Couldn't validate the shader pack on WebGPU.", oe), null
      } finally {
        Ue.destroy()
      }
    }
    async function Fe(ee, ie) {
      var He;
      if (!(0, ye.shaderPackNeedsCheck)(ee, ie) || (0, ye.isOtherApiVersion)(ee)) return ee;
      const be = await Ue(ie, (0, ye.storedShaderPackFiles)(ee));
      if (!be) return ee;
      const Me = !1 === (null === (He = ee.validation) || void 0 === He ? void 0 : He.ok) && !ee.validation.fromRecheck,
        Ke = {
          ...ee,
          validation: Me ? be : {
            ...be,
            fromRecheck: !0
          }
        };
      return await (0, ye.replaceShaderPack)(ee, Ke, ie) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Ke
    }

    function Je(ee, ie, He) {
      return {
        headerVersion: (0, ye.pageShaderPackValidationVersion)(ee),
        ok: 0 === ie.length,
        errors: ie.slice(0, Ke),
        moreErrors: Math.max(0, ie.length - Ke),
        offInStrict: He
      }
    }
  },
  7206: (ee, ie, He) => {
    He.d(ie, {
      A: () => Ke,
      C: () => ye,
      D: () => ke,
      G: () => oe,
      H: () => Ee,
      L: () => Re,
      M: () => Je,
      d: () => fe,
      h: () => pe,
      i: () => Te,
      j: () => qe,
      l: () => Be,
      m: () => Oe,
      o: () => Fe,
      s: () => be,
      t: () => ge,
      w: () => Me,
      y: () => Ue
    });
    const ye = ["forest", "desert", "water", "night", "cave"];
    const be = {
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
      Me = ["popular", "updated", "newest"],
      Ke = 3,
      Ue = 32,
      Fe = 300;

    function Je(ee, ie) {
      return ee.slice(0, ie).replace(/[\uD800-\uDBFF]$/, "")
    }
    const oe = 64,
      Re = 512,
      ke = 18e5;

    function qe(ee) {
      const ie = ee,
        He = null === ie || void 0 === ie ? void 0 : ie.files;
      return "number" === typeof(null === ie || void 0 === ie ? void 0 : ie.apiVersion) && "string" === typeof ie.name && (null === ie.author || "string" === typeof ie.author) && (void 0 === ie.keepCircleShadows || "boolean" === typeof ie.keepCircleShadows) && "object" === typeof He && null !== He && Object.values(He).every((ee => "string" === typeof ee))
    }
    const fe = "Bloxdhub",
      Te = "https://bloxdhub.com/shaders";

    function pe(ee) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(ee)}`
    }
    const Xe = "Screenshot generation failed.",
      ze = "Its screenshots couldn't be generated:";

    function Be(ee) {
      var ie;
      return ee === Xe || null !== (ie = null === ee || void 0 === ee ? void 0 : ee.startsWith(ze)) && void 0 !== ie && ie
    }

    function Ee(ee, ie) {
      return `shaderPacks/${ee}/${ie}.json`
    }

    function ge(ee, ie, He, ye) {
      return null === ie.renderId ? Oe(ee, ie.baselineVersion, He, ye) : `${ee}/${function(ee,ie,He,ye){return`shaderPacks/${ee}/${ie}/${He}-${ye}.webp`}(ie.packId,ie.renderId,He,ye)}`
    }

    function Oe(ee, ie, He, ye) {
      return `${ee}/${function(ee,ie,He){return`shaderPacks/baseline/${ee}/${ie}-${He}.webp`}(ie,He,ye)}`
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);