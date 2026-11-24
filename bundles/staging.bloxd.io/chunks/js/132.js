export const id = 132;
export const ids = [132, 138, 139];
export const modules = {
  40674: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ap,
      installListedShaderPack: () => Dp
    });
    var Op = cp(6704),
      op = cp(5167),
      Ip = cp(1211),
      Sp = cp(6758),
      xp = cp(5159),
      Lp = cp(6798),
      Yp = cp(6792);
    async function Dp(pp) {
      const ip = await (0, Sp.loadPageShaderPackCompiler)();
      if (null === ip) return {
        kind: "failed",
        reason: "compiler"
      };
      const cp = await Ap(pp, ip);
      return "failed" === cp.kind ? cp : await (0, Lp.saveShaderPack)(cp.stored, ip) ? ((0, Lp.markShaderPackChangePending)(), cp) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Ap(pp, ip) {
      const cp = await async function(pp) {
        let {
          packId: ip,
          sourceHash: cp
        } = pp;
        try {
          const pp = await fetch(`${Ip.clientSideServerUrls.s3Url}/${(0,Op.S)(ip,cp)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!pp.ok) return console.error(`Failed to download shader pack ${ip} (${pp.status})`), null;
          const op = await pp.json();
          return "object" !== typeof op || null === op ? (console.error(`Shader pack ${ip}'s source isn't an object`), null) : op
        } catch (op) {
          return console.error(`Failed to download shader pack ${ip}`, op), null
        }
      }(pp);
      if (null === cp) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, xp.k)(cp.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Sp = (0, op.s)(cp.files);
      if ("string" === typeof Sp) return console.error(`A listed shader pack breaks the pack rules: ${Sp}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Dp = await (0, Yp.h)(ip, Sp);
      if (!1 === (null === Dp || void 0 === Dp ? void 0 : Dp.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Ap = {
        manifest: {
          apiVersion: cp.apiVersion,
          name: pp.name,
          author: pp.ownerName,
          description: pp.description || null,
          keepCircleShadows: !0 === cp.keepCircleShadows
        },
        files: Sp
      };
      return {
        kind: "loaded",
        stored: (0, Lp.toStoredShaderPack)(Ap, Dp, {
          packId: pp.packId,
          sourceHash: pp.sourceHash
        })
      }
    }
  },
  41532: (pp, ip, cp) => {
    cp.d(ip, {
      followListingUpdates: () => Pp
    });
    var Op = cp(209),
      op = cp(25),
      Ip = cp(1520),
      Sp = cp(1149),
      xp = cp(6758),
      Lp = cp(5159),
      Yp = cp(40674),
      Dp = cp(6798);
    const Ap = ["apiVersion", "invalid", "errors"];
    async function Pp(pp, ip) {
      const cp = await Sp.userContextManager.getCurrentUserContext(),
        Pp = await Ip.b.getShaderPackVersions(cp, [ip.packId]),
        Wp = function(pp, ip, cp) {
          var Op;
          if (void 0 === cp || "unlisted" === cp.status) return {
            kind: "none"
          };
          if ("banned" === cp.status) return {
            kind: "remove"
          };
          if (!(0, Lp.k)(cp.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: op,
            name: Ip,
            ownerName: Sp,
            description: xp
          } = cp;
          return op !== ip.sourceHash && op !== ip.rejectedSourceHash ? {
            kind: "update",
            sourceHash: op,
            name: Ip,
            ownerName: Sp,
            description: xp
          } : Ip !== pp.manifest.name || Sp !== pp.manifest.author || (xp || null) !== (null !== (Op = pp.manifest.description) && void 0 !== Op ? Op : null) ? {
            kind: "rename",
            name: Ip,
            ownerName: Sp,
            description: xp
          } : {
            kind: "none"
          }
        }(pp, ip, (0, Op.e)(Pp, ip.packId));
      if ("update" === Wp.kind && "landingPage" !== op.c.get("gameState")) return !1;
      const yp = "update" === Wp.kind || "rename" === Wp.kind,
        Up = yp ? await (0, xp.loadPageShaderPackCompiler)() : null;
      if (yp && null === Up) return console.warn(`Didn't follow shader pack ${ip.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const wp = await async function(pp, ip, cp, Op) {
        switch (cp.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...pp, manifest: {
                ...pp.manifest,
                name: cp.name,
                author: cp.ownerName,
                description: cp.description || null
              }
            };
          case "update": {
            if (null === Op) return;
            const {
              sourceHash: op,
              name: Ip,
              ownerName: Sp,
              description: xp
            } = cp, Lp = await (0, Yp.e)({
              packId: ip.packId,
              sourceHash: op,
              name: Ip,
              ownerName: Sp,
              description: xp
            }, Op);
            if ("loaded" === Lp.kind && null !== Lp.stored.validation) return Lp.stored;
            const Dp = "failed" === Lp.kind ? Lp.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${ip.packId}: ${Dp}`), "failed" === Lp.kind && Ap.includes(Lp.reason) ? {
              ...pp,
              listing: {
                ...ip,
                rejectedSourceHash: op
              }
            } : void 0
          }
        }
      }(pp, ip, Wp, Up);
      return void 0 === wp || (await (0, Dp.replaceShaderPack)(pp, wp, Up) ? (null !== wp && wp.files === pp.files || (0, Dp.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6798: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      forgetShaderPackActiveHint: () => Cp,
      isOtherApiVersion: () => mp,
      isShaderPackActive: () => dp,
      isShaderPackChangePending: () => kp,
      markShaderPackChangePending: () => jp,
      pageShaderPackValidationVersion: () => Rp,
      reconcileStoredShaderPackHint: () => Mp,
      removeShaderPack: () => Hp,
      replaceShaderPack: () => wp,
      saveShaderPack: () => Up,
      shaderPackNeedsCheck: () => qp,
      storedPackOutcome: () => ep,
      storedShaderPackFiles: () => Pp,
      toStoredShaderPack: () => Ap
    });
    var Op = cp(5167),
      op = cp(5159),
      Ip = cp(44),
      Sp = cp(3564),
      xp = cp(6804),
      Lp = cp(6772);
    const Yp = "shaderPackChangePending";
    let Dp = null;

    function Ap(pp, ip, cp) {
      return {
        manifest: pp.manifest,
        files: (0, Op.v)(pp.files),
        validation: ip,
        ...cp && {
          listing: cp
        }
      }
    }

    function Pp(pp) {
      return Object.keys(pp.files).map((ip => ({
        path: ip,
        source: pp.files[ip]
      })))
    }
    let Wp = Promise.resolve();

    function yp(pp) {
      const ip = Wp.then(pp);
      return Wp = ip.catch((() => {})), ip
    }

    function Up(pp, ip) {
      return yp((() => vp(pp, ip)))
    }

    function wp(pp, ip, cp) {
      return yp((async () => JSON.stringify(await (0, xp.f)()) === JSON.stringify(pp) && (null === ip ? (await tp(), !0) : vp(ip, cp))))
    }
    async function vp(pp, ip) {
      const cp = await Ip.g.setItem(xp.e, pp);
      return cp && Ep(pp, ip), cp
    }
    async function tp() {
      await Ip.g.removeItem(xp.e), Ip.h.removeItem(Sp.d)
    }

    function Hp() {
      return yp(tp)
    }

    function dp(pp, ip) {
      return "active" === ep(pp, ip).kind
    }

    function ep(pp, ip) {
      var cp;
      return null === pp ? {
        kind: "none",
        reason: "nothingStored"
      } : mp(pp) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) || pp.validation.fromRecheck ? null === ip ? {
        kind: "none",
        reason: "noCompiler"
      } : qp(pp, ip) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : pp.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function jp() {
      Ip.l.setItem(Yp, performance.timeOrigin)
    }

    function kp() {
      return Ip.l.getItem(Yp) === performance.timeOrigin
    }

    function mp(pp) {
      return !(0, op.k)(pp.manifest.apiVersion)
    }

    function Rp(pp) {
      return Dp ??= pp.Rl((0, Lp.shaderPackTextures)()), Dp
    }

    function qp(pp, ip) {
      var cp;
      return (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.headerVersion) !== Rp(ip)
    }

    function Mp(pp) {
      return yp((async () => {
        Ep(await (0, xp.f)(!0), pp)
      }))
    }

    function Cp() {
      return yp((async () => {
        Ip.h.removeItem(Sp.d)
      }))
    }

    function Ep(pp, ip) {
      dp(pp, ip) ? Ip.h.setItem(Sp.d, !0) : Ip.h.removeItem(Sp.d)
    }
  },
  6772: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      loadShaderPackTextures: () => Sp,
      shaderPackTextures: () => xp
    });
    var Op = cp(5167);
    let op = null,
      Ip = null;

    function Sp() {
      return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ip,
          textureNameToIndex: cp,
          textureAnimationData: Ip
        } = pp;
        return op ??= (0, Op.j)(cp, Ip, ip), op
      })), Ip
    }

    function xp() {
      if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return op
    }
  },
  6792: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Lp,
      h: () => xp
    });
    var Op = cp(6798),
      op = cp(6772),
      Ip = cp(118);
    const Sp = 100;
    async function xp(pp, ip) {
      var cp;
      let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (cp = navigator.gpu) && void 0 !== cp ? cp : null;
      const Sp = pp.ipp(ip, (0, op.shaderPackTextures)());
      if (Sp.errors.length > 0) return Yp(pp, Sp.errors, Sp.offInStrict);
      const xp = await async function(pp) {
        if (!pp) return null;
        try {
          const ip = await (0, Ip.s)(pp);
          return ip ? await ip.requestDevice() : null
        } catch (ip) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", ip), null
        }
      }(Op);
      if (!xp) return null;
      let Lp = !1;
      xp.lost.then((() => {
        Lp = !0
      }));
      try {
        const ip = await Promise.all(Sp.validationModules.map((ip => async function(pp, ip, cp) {
          ip.pushErrorScope("validation");
          const Op = ip.createShaderModule({
              code: cp.code
            }),
            op = ip.popErrorScope(),
            {
              messages: Ip
            } = await Op.getCompilationInfo(),
            Sp = Ip.filter((pp => "error" === pp.type)).map((ip => pp.mapValidationMessage(cp, ip))),
            xp = await op;
          xp && 0 === Sp.length && Sp.push({
            file: null,
            line: 0,
            message: xp.message,
            variants: [cp.key]
          });
          return Sp
        }(pp, xp, ip))));
        return Lp ? null : Yp(pp, pp.eOp(ip.flat()), Sp.offInStrict)
      } catch (Dp) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Dp), null
      } finally {
        xp.destroy()
      }
    }
    async function Lp(pp, ip) {
      var cp;
      if (!(0, Op.shaderPackNeedsCheck)(pp, ip) || (0, Op.isOtherApiVersion)(pp)) return pp;
      const op = await xp(ip, (0, Op.storedShaderPackFiles)(pp));
      if (!op) return pp;
      const Ip = !1 === (null === (cp = pp.validation) || void 0 === cp ? void 0 : cp.ok) && !pp.validation.fromRecheck,
        Sp = {
          ...pp,
          validation: Ip ? op : {
            ...op,
            fromRecheck: !0
          }
        };
      return await (0, Op.replaceShaderPack)(pp, Sp, ip) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Sp
    }

    function Yp(pp, ip, cp) {
      return {
        headerVersion: (0, Op.pageShaderPackValidationVersion)(pp),
        ok: 0 === ip.length,
        errors: ip.slice(0, Sp),
        moreErrors: Math.max(0, ip.length - Sp),
        offInStrict: cp
      }
    }
  },
  6704: (pp, ip, cp) => {
    cp.d(ip, {
      A: () => Ip,
      D: () => xp,
      G: () => Sp,
      J: () => Op,
      M: () => Pp,
      P: () => Dp,
      S: () => dp,
      V: () => Ap,
      W: () => Yp,
      d: () => yp,
      g: () => wp,
      j: () => Up,
      l: () => Wp,
      n: () => Hp,
      r: () => jp,
      t: () => Lp,
      u: () => op,
      x: () => ep
    });
    const Op = ["forest", "desert", "water", "night", "cave"];
    const op = {
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
      Ip = ["popular", "updated", "newest"],
      Sp = 3,
      xp = 32,
      Lp = 300;

    function Yp(pp, ip) {
      return pp.slice(0, ip).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Dp = 64,
      Ap = 512,
      Pp = 18e5;

    function Wp(pp) {
      const ip = pp,
        cp = null === ip || void 0 === ip ? void 0 : ip.files;
      return "number" === typeof(null === ip || void 0 === ip ? void 0 : ip.apiVersion) && "string" === typeof ip.name && (null === ip.author || "string" === typeof ip.author) && (void 0 === ip.keepCircleShadows || "boolean" === typeof ip.keepCircleShadows) && "object" === typeof cp && null !== cp && Object.values(cp).every((pp => "string" === typeof pp))
    }
    const yp = "Bloxdhub",
      Up = "https://bloxdhub.com/shaders";

    function wp(pp) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(pp)}`
    }
    const vp = "Screenshot generation failed.",
      tp = "Its screenshots couldn't be generated:";

    function Hp(pp) {
      var ip;
      return pp === vp || null !== (ip = null === pp || void 0 === pp ? void 0 : pp.startsWith(tp)) && void 0 !== ip && ip
    }

    function dp(pp, ip) {
      return `shaderPacks/${pp}/${ip}.json`
    }

    function ep(pp, ip, cp, Op) {
      return null === ip.renderId ? jp(pp, ip.baselineVersion, cp, Op) : `${pp}/${function(pp,ip,cp,Op){return`shaderPacks/${pp}/${ip}/${cp}-${Op}.webp`}(ip.packId,ip.renderId,cp,Op)}`
    }

    function jp(pp, ip, cp, Op) {
      return `${pp}/${function(pp,ip,cp){return`shaderPacks/baseline/${pp}/${ip}-${cp}.webp`}(ip,cp,Op)}`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);