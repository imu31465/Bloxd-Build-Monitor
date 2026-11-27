export const id = 154;
export const ids = [154, 159, 160];
export const modules = {
  42339: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => xr,
      installListedShaderPack: () => pr
    });
    var Zr = Qr(7533),
      Wr = Qr(6007),
      ar = Qr(1262),
      jr = Qr(7575),
      Ir = Qr(6005),
      fr = Qr(7615),
      Er = Qr(7610);
    async function pr(rr) {
      const Sr = await (0, jr.loadPageShaderPackCompiler)();
      if (null === Sr) return {
        kind: "failed",
        reason: "compiler"
      };
      const Qr = await xr(rr, Sr);
      return "failed" === Qr.kind ? Qr : await (0, fr.saveShaderPack)(Qr.stored, Sr) ? ((0, fr.markShaderPackChangePending)(), Qr) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function xr(rr, Sr) {
      const Qr = await async function(rr) {
        let {
          packId: Sr,
          sourceHash: Qr
        } = rr;
        try {
          const rr = await fetch(`${ar.clientSideServerUrls.s3Url}/${(0,Zr.J)(Sr,Qr)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!rr.ok) return console.error(`Failed to download shader pack ${Sr} (${rr.status})`), null;
          const Wr = await rr.json();
          return "object" !== typeof Wr || null === Wr ? (console.error(`Shader pack ${Sr}'s source isn't an object`), null) : Wr
        } catch (Wr) {
          return console.error(`Failed to download shader pack ${Sr}`, Wr), null
        }
      }(rr);
      if (null === Qr) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Ir.i)(Qr.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const jr = (0, Wr.v)(Qr.files);
      if ("string" === typeof jr) return console.error(`A listed shader pack breaks the pack rules: ${jr}`), {
        kind: "failed",
        reason: "invalid"
      };
      const pr = await (0, Er.e)(Sr, jr);
      if (!1 === (null === pr || void 0 === pr ? void 0 : pr.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const xr = {
        manifest: {
          apiVersion: Qr.apiVersion,
          name: rr.name,
          author: rr.ownerName,
          description: rr.description || null,
          keepCircleShadows: !0 === Qr.keepCircleShadows
        },
        files: jr
      };
      return {
        kind: "loaded",
        stored: (0, fr.toStoredShaderPack)(xr, pr, {
          packId: rr.packId,
          sourceHash: rr.sourceHash
        })
      }
    }
  },
  45297: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      followListingUpdates: () => mr
    });
    var Zr = Qr(215),
      Wr = Qr(26),
      ar = Qr(1629),
      jr = Qr(1187),
      Ir = Qr(7575),
      fr = Qr(6005),
      Er = Qr(42339),
      pr = Qr(7615);
    const xr = ["apiVersion", "invalid", "errors"];
    async function mr(rr, Sr) {
      const Qr = await jr.userContextManager.getCurrentUserContext(),
        mr = await ar.c.getShaderPackVersions(Qr, [Sr.packId]),
        Nr = function(rr, Sr, Qr) {
          var Zr;
          if (void 0 === Qr || "unlisted" === Qr.status) return {
            kind: "none"
          };
          if ("banned" === Qr.status) return {
            kind: "remove"
          };
          if (!(0, fr.i)(Qr.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Wr,
            name: ar,
            ownerName: jr,
            description: Ir
          } = Qr;
          return Wr !== Sr.sourceHash && Wr !== Sr.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Wr,
            name: ar,
            ownerName: jr,
            description: Ir
          } : ar !== rr.manifest.name || jr !== rr.manifest.author || (Ir || null) !== (null !== (Zr = rr.manifest.description) && void 0 !== Zr ? Zr : null) ? {
            kind: "rename",
            name: ar,
            ownerName: jr,
            description: Ir
          } : {
            kind: "none"
          }
        }(rr, Sr, (0, Zr.b)(mr, Sr.packId));
      if ("update" === Nr.kind && "landingPage" !== Wr.c.get("gameState")) return !1;
      const Ur = "update" === Nr.kind || "rename" === Nr.kind,
        tr = Ur ? await (0, Ir.loadPageShaderPackCompiler)() : null;
      if (Ur && null === tr) return console.warn(`Didn't follow shader pack ${Sr.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const hr = await async function(rr, Sr, Qr, Zr) {
        switch (Qr.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...rr, manifest: {
                ...rr.manifest,
                name: Qr.name,
                author: Qr.ownerName,
                description: Qr.description || null
              }
            };
          case "update": {
            if (null === Zr) return;
            const {
              sourceHash: Wr,
              name: ar,
              ownerName: jr,
              description: Ir
            } = Qr, fr = await (0, Er.c)({
              packId: Sr.packId,
              sourceHash: Wr,
              name: ar,
              ownerName: jr,
              description: Ir
            }, Zr);
            if ("loaded" === fr.kind && null !== fr.stored.validation) return fr.stored;
            const pr = "failed" === fr.kind ? fr.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Sr.packId}: ${pr}`), "failed" === fr.kind && xr.includes(fr.reason) ? {
              ...rr,
              listing: {
                ...Sr,
                rejectedSourceHash: Wr
              }
            } : void 0
          }
        }
      }(rr, Sr, Nr, tr);
      return void 0 === hr || (await (0, pr.replaceShaderPack)(rr, hr, tr) ? (null !== hr && hr.files === rr.files || (0, pr.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7615: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      forgetShaderPackActiveHint: () => lr,
      isOtherApiVersion: () => Tr,
      isShaderPackActive: () => er,
      isShaderPackChangePending: () => Br,
      markShaderPackChangePending: () => yr,
      pageShaderPackValidationVersion: () => vr,
      reconcileStoredShaderPackHint: () => Lr,
      removeShaderPack: () => nr,
      replaceShaderPack: () => hr,
      saveShaderPack: () => tr,
      shaderPackNeedsCheck: () => Or,
      storedPackOutcome: () => Kr,
      storedShaderPackFiles: () => mr,
      toStoredShaderPack: () => xr
    });
    var Zr = Qr(6007),
      Wr = Qr(6005),
      ar = Qr(43),
      jr = Qr(4690),
      Ir = Qr(7617),
      fr = Qr(7588);
    const Er = "shaderPackChangePending";
    let pr = null;

    function xr(rr, Sr, Qr) {
      return {
        manifest: rr.manifest,
        files: (0, Zr.w)(rr.files),
        validation: Sr,
        ...Qr && {
          listing: Qr
        }
      }
    }

    function mr(rr) {
      return Object.keys(rr.files).map((Sr => ({
        path: Sr,
        source: rr.files[Sr]
      })))
    }
    let Nr = Promise.resolve();

    function Ur(rr) {
      const Sr = Nr.then(rr);
      return Nr = Sr.catch((() => {})), Sr
    }

    function tr(rr, Sr) {
      return Ur((() => zr(rr, Sr)))
    }

    function hr(rr, Sr, Qr) {
      return Ur((async () => JSON.stringify(await (0, Ir.e)()) === JSON.stringify(rr) && (null === Sr ? (await Yr(), !0) : zr(Sr, Qr))))
    }
    async function zr(rr, Sr) {
      const Qr = await ar.h.setItem(Ir.b, rr);
      return Qr && Xr(rr, Sr), Qr
    }
    async function Yr() {
      await ar.h.removeItem(Ir.b), ar.j.removeItem(jr.b)
    }

    function nr() {
      return Ur(Yr)
    }

    function er(rr, Sr) {
      return "active" === Kr(rr, Sr).kind
    }

    function Kr(rr, Sr) {
      var Qr;
      return null === rr ? {
        kind: "none",
        reason: "nothingStored"
      } : Tr(rr) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) || rr.validation.fromRecheck ? null === Sr ? {
        kind: "none",
        reason: "noCompiler"
      } : Or(rr, Sr) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : rr.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function yr() {
      ar.n.setItem(Er, performance.timeOrigin)
    }

    function Br() {
      return ar.n.getItem(Er) === performance.timeOrigin
    }

    function Tr(rr) {
      return !(0, Wr.i)(rr.manifest.apiVersion)
    }

    function vr(rr) {
      return pr ??= rr.rC((0, fr.shaderPackTextures)()), pr
    }

    function Or(rr, Sr) {
      var Qr;
      return (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.headerVersion) !== vr(Sr)
    }

    function Lr(rr) {
      return Ur((async () => {
        Xr(await (0, Ir.e)(!0), rr)
      }))
    }

    function lr() {
      return Ur((async () => {
        ar.j.removeItem(jr.b)
      }))
    }

    function Xr(rr, Sr) {
      er(rr, Sr) ? ar.j.setItem(jr.b, !0) : ar.j.removeItem(jr.b)
    }
  },
  7588: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      loadShaderPackTextures: () => jr,
      shaderPackTextures: () => Ir
    });
    var Zr = Qr(6007);
    let Wr = null,
      ar = null;

    function jr() {
      return ar ??= Promise.all([Qr.e(85), Qr.e(126)]).then((() => Qr(42330))).then((rr => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Sr,
          textureNameToIndex: Qr,
          textureAnimationData: ar
        } = rr;
        return Wr ??= (0, Zr.k)(Qr, ar, Sr), Wr
      })), ar
    }

    function Ir() {
      if (null === Wr) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Wr
    }
  },
  7610: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => fr,
      e: () => Ir
    });
    var Zr = Qr(7615),
      Wr = Qr(7588),
      ar = Qr(127);
    const jr = 100;
    async function Ir(rr, Sr) {
      var Qr;
      let Zr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Qr = navigator.gpu) && void 0 !== Qr ? Qr : null;
      const jr = rr.Vrr(Sr, (0, Wr.shaderPackTextures)());
      if (jr.errors.length > 0) return Er(rr, jr.errors, jr.offInStrict);
      const Ir = await async function(rr) {
        if (!rr) return null;
        try {
          const Sr = await (0, ar.t)(rr);
          return Sr ? await Sr.requestDevice() : null
        } catch (Sr) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Sr), null
        }
      }(Zr);
      if (!Ir) return null;
      let fr = !1;
      Ir.lost.then((() => {
        fr = !0
      }));
      try {
        const Sr = await Promise.all(jr.validationModules.map((Sr => async function(rr, Sr, Qr) {
          Sr.pushErrorScope("validation");
          const Zr = Sr.createShaderModule({
              code: Qr.code
            }),
            Wr = Sr.popErrorScope(),
            {
              messages: ar
            } = await Zr.getCompilationInfo(),
            jr = ar.filter((rr => "error" === rr.type)).map((Sr => rr.mapValidationMessage(Qr, Sr))),
            Ir = await Wr;
          Ir && 0 === jr.length && jr.push({
            file: null,
            line: 0,
            message: Ir.message,
            variants: [Qr.key]
          });
          return jr
        }(rr, Ir, Sr))));
        return fr ? null : Er(rr, rr.RZr(Sr.flat()), jr.offInStrict)
      } catch (pr) {
        return console.error("Couldn't validate the shader pack on WebGPU.", pr), null
      } finally {
        Ir.destroy()
      }
    }
    async function fr(rr, Sr) {
      var Qr;
      if (!(0, Zr.shaderPackNeedsCheck)(rr, Sr) || (0, Zr.isOtherApiVersion)(rr)) return rr;
      const Wr = await Ir(Sr, (0, Zr.storedShaderPackFiles)(rr));
      if (!Wr) return rr;
      const ar = !1 === (null === (Qr = rr.validation) || void 0 === Qr ? void 0 : Qr.ok) && !rr.validation.fromRecheck,
        jr = {
          ...rr,
          validation: ar ? Wr : {
            ...Wr,
            fromRecheck: !0
          }
        };
      return await (0, Zr.replaceShaderPack)(rr, jr, Sr) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), jr
    }

    function Er(rr, Sr, Qr) {
      return {
        headerVersion: (0, Zr.pageShaderPackValidationVersion)(rr),
        ok: 0 === Sr.length,
        errors: Sr.slice(0, jr),
        moreErrors: Math.max(0, Sr.length - jr),
        offInStrict: Qr
      }
    }
  },
  7533: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      C: () => jr,
      D: () => Zr,
      E: () => mr,
      I: () => pr,
      J: () => er,
      K: () => xr,
      L: () => Er,
      c: () => Ur,
      g: () => hr,
      i: () => tr,
      j: () => Nr,
      l: () => nr,
      o: () => yr,
      q: () => fr,
      r: () => Wr,
      u: () => Kr,
      w: () => ar,
      z: () => Ir
    });
    const Zr = ["forest", "desert", "water", "night", "cave"];
    const Wr = {
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
      ar = ["popular", "updated", "newest"],
      jr = 3,
      Ir = 32,
      fr = 300;

    function Er(rr, Sr) {
      return rr.slice(0, Sr).replace(/[\uD800-\uDBFF]$/, "")
    }
    const pr = 64,
      xr = 512,
      mr = 18e5;

    function Nr(rr) {
      const Sr = rr,
        Qr = null === Sr || void 0 === Sr ? void 0 : Sr.files;
      return "number" === typeof(null === Sr || void 0 === Sr ? void 0 : Sr.apiVersion) && "string" === typeof Sr.name && (null === Sr.author || "string" === typeof Sr.author) && (void 0 === Sr.keepCircleShadows || "boolean" === typeof Sr.keepCircleShadows) && "object" === typeof Qr && null !== Qr && Object.values(Qr).every((rr => "string" === typeof rr))
    }
    const Ur = "Bloxdhub",
      tr = "https://bloxdhub.com/shaders";

    function hr(rr) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(rr)}`
    }
    const zr = "Screenshot generation failed.",
      Yr = "Its screenshots couldn't be generated:";

    function nr(rr) {
      var Sr;
      return rr === zr || null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.startsWith(Yr)) && void 0 !== Sr && Sr
    }

    function er(rr, Sr) {
      return `shaderPacks/${rr}/${Sr}.json`
    }

    function Kr(rr, Sr, Qr, Zr) {
      return null === Sr.renderId ? yr(rr, Sr.baselineVersion, Qr, Zr) : `${rr}/${function(rr,Sr,Qr,Zr){return`shaderPacks/${rr}/${Sr}/${Qr}-${Zr}.webp`}(Sr.packId,Sr.renderId,Qr,Zr)}`
    }

    function yr(rr, Sr, Qr, Zr) {
      return `${rr}/${function(rr,Sr,Qr){return`shaderPacks/baseline/${rr}/${Sr}-${Qr}.webp`}(Sr,Qr,Zr)}`
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);