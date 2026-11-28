export const id = 154;
export const ids = [154, 159, 160];
export const modules = {
  42441: (dd, Od, md) => {
    md.d(Od, {
      b: () => td,
      installListedShaderPack: () => Qd
    });
    var Wd = md(7512),
      Fd = md(5954),
      Rd = md(1253),
      Xd = md(7566),
      Kd = md(5951),
      hd = md(7598),
      vd = md(7595);
    async function Qd(dd) {
      const Od = await (0, Xd.loadPageShaderPackCompiler)();
      if (null === Od) return {
        kind: "failed",
        reason: "compiler"
      };
      const md = await td(dd, Od);
      return "failed" === md.kind ? md : await (0, hd.saveShaderPack)(md.stored, Od) ? ((0, hd.markShaderPackChangePending)(), md) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function td(dd, Od) {
      const md = await async function(dd) {
        let {
          packId: Od,
          sourceHash: md
        } = dd;
        try {
          const dd = await fetch(`${Rd.clientSideServerUrls.s3Url}/${(0,Wd.H)(Od,md)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!dd.ok) return console.error(`Failed to download shader pack ${Od} (${dd.status})`), null;
          const Fd = await dd.json();
          return "object" !== typeof Fd || null === Fd ? (console.error(`Shader pack ${Od}'s source isn't an object`), null) : Fd
        } catch (Fd) {
          return console.error(`Failed to download shader pack ${Od}`, Fd), null
        }
      }(dd);
      if (null === md) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Kd.k)(md.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Xd = (0, Fd.r)(md.files);
      if ("string" === typeof Xd) return console.error(`A listed shader pack breaks the pack rules: ${Xd}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Qd = await (0, vd.e)(Od, Xd);
      if (!1 === (null === Qd || void 0 === Qd ? void 0 : Qd.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const td = {
        manifest: {
          apiVersion: md.apiVersion,
          name: dd.name,
          author: dd.ownerName,
          description: dd.description || null,
          keepCircleShadows: !0 === md.keepCircleShadows
        },
        files: Xd
      };
      return {
        kind: "loaded",
        stored: (0, hd.toStoredShaderPack)(td, Qd, {
          packId: dd.packId,
          sourceHash: dd.sourceHash
        })
      }
    }
  },
  45340: (dd, Od, md) => {
    md.d(Od, {
      followListingUpdates: () => od
    });
    var Wd = md(231),
      Fd = md(29),
      Rd = md(1627),
      Xd = md(1189),
      Kd = md(7566),
      hd = md(5951),
      vd = md(42441),
      Qd = md(7598);
    const td = ["apiVersion", "invalid", "errors"];
    async function od(dd, Od) {
      const md = await Xd.userContextManager.getCurrentUserContext(),
        od = await Rd.e.getShaderPackVersions(md, [Od.packId]),
        Nd = function(dd, Od, md) {
          var Wd;
          if (void 0 === md || "unlisted" === md.status) return {
            kind: "none"
          };
          if ("banned" === md.status) return {
            kind: "remove"
          };
          if (!(0, hd.k)(md.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Fd,
            name: Rd,
            ownerName: Xd,
            description: Kd
          } = md;
          return Fd !== Od.sourceHash && Fd !== Od.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Fd,
            name: Rd,
            ownerName: Xd,
            description: Kd
          } : Rd !== dd.manifest.name || Xd !== dd.manifest.author || (Kd || null) !== (null !== (Wd = dd.manifest.description) && void 0 !== Wd ? Wd : null) ? {
            kind: "rename",
            name: Rd,
            ownerName: Xd,
            description: Kd
          } : {
            kind: "none"
          }
        }(dd, Od, (0, Wd.b)(od, Od.packId));
      if ("update" === Nd.kind && "landingPage" !== Fd.e.get("gameState")) return !1;
      const qd = "update" === Nd.kind || "rename" === Nd.kind,
        Hd = qd ? await (0, Kd.loadPageShaderPackCompiler)() : null;
      if (qd && null === Hd) return console.warn(`Didn't follow shader pack ${Od.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const yd = await async function(dd, Od, md, Wd) {
        switch (md.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...dd, manifest: {
                ...dd.manifest,
                name: md.name,
                author: md.ownerName,
                description: md.description || null
              }
            };
          case "update": {
            if (null === Wd) return;
            const {
              sourceHash: Fd,
              name: Rd,
              ownerName: Xd,
              description: Kd
            } = md, hd = await (0, vd.b)({
              packId: Od.packId,
              sourceHash: Fd,
              name: Rd,
              ownerName: Xd,
              description: Kd
            }, Wd);
            if ("loaded" === hd.kind && null !== hd.stored.validation) return hd.stored;
            const Qd = "failed" === hd.kind ? hd.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Od.packId}: ${Qd}`), "failed" === hd.kind && td.includes(hd.reason) ? {
              ...dd,
              listing: {
                ...Od,
                rejectedSourceHash: Fd
              }
            } : void 0
          }
        }
      }(dd, Od, Nd, Hd);
      return void 0 === yd || (await (0, Qd.replaceShaderPack)(dd, yd, Hd) ? (null !== yd && yd.files === dd.files || (0, Qd.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  7598: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      forgetShaderPackActiveHint: () => Sd,
      isOtherApiVersion: () => Jd,
      isShaderPackActive: () => Yd,
      isShaderPackChangePending: () => Ed,
      markShaderPackChangePending: () => wd,
      pageShaderPackValidationVersion: () => Ud,
      reconcileStoredShaderPackHint: () => Bd,
      removeShaderPack: () => pd,
      replaceShaderPack: () => yd,
      saveShaderPack: () => Hd,
      shaderPackNeedsCheck: () => xd,
      storedPackOutcome: () => gd,
      storedShaderPackFiles: () => od,
      toStoredShaderPack: () => td
    });
    var Wd = md(5954),
      Fd = md(5951),
      Rd = md(46),
      Xd = md(4674),
      Kd = md(7602),
      hd = md(7583);
    const vd = "shaderPackChangePending";
    let Qd = null;

    function td(dd, Od, md) {
      return {
        manifest: dd.manifest,
        files: (0, Wd.v)(dd.files),
        validation: Od,
        ...md && {
          listing: md
        }
      }
    }

    function od(dd) {
      return Object.keys(dd.files).map((Od => ({
        path: Od,
        source: dd.files[Od]
      })))
    }
    let Nd = Promise.resolve();

    function qd(dd) {
      const Od = Nd.then(dd);
      return Nd = Od.catch((() => {})), Od
    }

    function Hd(dd, Od) {
      return qd((() => bd(dd, Od)))
    }

    function yd(dd, Od, md) {
      return qd((async () => JSON.stringify(await (0, Kd.g)()) === JSON.stringify(dd) && (null === Od ? (await Td(), !0) : bd(Od, md))))
    }
    async function bd(dd, Od) {
      const md = await Rd.h.setItem(Kd.e, dd);
      return md && sd(dd, Od), md
    }
    async function Td() {
      await Rd.h.removeItem(Kd.e), Rd.k.removeItem(Xd.d)
    }

    function pd() {
      return qd(Td)
    }

    function Yd(dd, Od) {
      return "active" === gd(dd, Od).kind
    }

    function gd(dd, Od) {
      var md;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : Jd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) || dd.validation.fromRecheck ? null === Od ? {
        kind: "none",
        reason: "noCompiler"
      } : xd(dd, Od) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : dd.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function wd() {
      Rd.o.setItem(vd, performance.timeOrigin)
    }

    function Ed() {
      return Rd.o.getItem(vd) === performance.timeOrigin
    }

    function Jd(dd) {
      return !(0, Fd.k)(dd.manifest.apiVersion)
    }

    function Ud(dd) {
      return Qd ??= dd.HV((0, hd.shaderPackTextures)()), Qd
    }

    function xd(dd, Od) {
      var md;
      return (null === (md = dd.validation) || void 0 === md ? void 0 : md.headerVersion) !== Ud(Od)
    }

    function Bd(dd) {
      return qd((async () => {
        sd(await (0, Kd.g)(!0), dd)
      }))
    }

    function Sd() {
      return qd((async () => {
        Rd.k.removeItem(Xd.d)
      }))
    }

    function sd(dd, Od) {
      Yd(dd, Od) ? Rd.k.setItem(Xd.d, !0) : Rd.k.removeItem(Xd.d)
    }
  },
  7583: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      loadShaderPackTextures: () => Xd,
      shaderPackTextures: () => Kd
    });
    var Wd = md(5954);
    let Fd = null,
      Rd = null;

    function Xd() {
      return Rd ??= Promise.all([md.e(85), md.e(126)]).then((() => md(42438))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Od,
          textureNameToIndex: md,
          textureAnimationData: Rd
        } = dd;
        return Fd ??= (0, Wd.h)(md, Rd, Od), Fd
      })), Rd
    }

    function Kd() {
      if (null === Fd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Fd
    }
  },
  7595: (dd, Od, md) => {
    md.d(Od, {
      c: () => hd,
      e: () => Kd
    });
    var Wd = md(7598),
      Fd = md(7583),
      Rd = md(132);
    const Xd = 100;
    async function Kd(dd, Od) {
      var md;
      let Wd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (md = navigator.gpu) && void 0 !== md ? md : null;
      const Xd = dd.HOd(Od, (0, Fd.shaderPackTextures)());
      if (Xd.errors.length > 0) return vd(dd, Xd.errors, Xd.offInStrict);
      const Kd = await async function(dd) {
        if (!dd) return null;
        try {
          const Od = await (0, Rd.v)(dd);
          return Od ? await Od.requestDevice() : null
        } catch (Od) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Od), null
        }
      }(Wd);
      if (!Kd) return null;
      let hd = !1;
      Kd.lost.then((() => {
        hd = !0
      }));
      try {
        const Od = await Promise.all(Xd.validationModules.map((Od => async function(dd, Od, md) {
          Od.pushErrorScope("validation");
          const Wd = Od.createShaderModule({
              code: md.code
            }),
            Fd = Od.popErrorScope(),
            {
              messages: Rd
            } = await Wd.getCompilationInfo(),
            Xd = Rd.filter((dd => "error" === dd.type)).map((Od => dd.mapValidationMessage(md, Od))),
            Kd = await Fd;
          Kd && 0 === Xd.length && Xd.push({
            file: null,
            line: 0,
            message: Kd.message,
            variants: [md.key]
          });
          return Xd
        }(dd, Kd, Od))));
        return hd ? null : vd(dd, dd.HFd(Od.flat()), Xd.offInStrict)
      } catch (Qd) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Qd), null
      } finally {
        Kd.destroy()
      }
    }
    async function hd(dd, Od) {
      var md;
      if (!(0, Wd.shaderPackNeedsCheck)(dd, Od) || (0, Wd.isOtherApiVersion)(dd)) return dd;
      const Fd = await Kd(Od, (0, Wd.storedShaderPackFiles)(dd));
      if (!Fd) return dd;
      const Rd = !1 === (null === (md = dd.validation) || void 0 === md ? void 0 : md.ok) && !dd.validation.fromRecheck,
        Xd = {
          ...dd,
          validation: Rd ? Fd : {
            ...Fd,
            fromRecheck: !0
          }
        };
      return await (0, Wd.replaceShaderPack)(dd, Xd, Od) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Xd
    }

    function vd(dd, Od, md) {
      return {
        headerVersion: (0, Wd.pageShaderPackValidationVersion)(dd),
        ok: 0 === Od.length,
        errors: Od.slice(0, Xd),
        moreErrors: Math.max(0, Od.length - Xd),
        offInStrict: md
      }
    }
  },
  7512: (dd, Od, md) => {
    md.d(Od, {
      A: () => Wd,
      D: () => od,
      F: () => Qd,
      H: () => Yd,
      L: () => td,
      P: () => vd,
      d: () => qd,
      f: () => yd,
      j: () => Hd,
      l: () => Nd,
      m: () => pd,
      n: () => wd,
      p: () => hd,
      q: () => Fd,
      r: () => gd,
      v: () => Rd,
      w: () => Kd,
      y: () => Xd
    });
    const Wd = ["forest", "desert", "water", "night", "cave"];
    const Fd = {
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
      Rd = ["popular", "updated", "newest"],
      Xd = 3,
      Kd = 32,
      hd = 300;

    function vd(dd, Od) {
      return dd.slice(0, Od).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Qd = 64,
      td = 512,
      od = 18e5;

    function Nd(dd) {
      const Od = dd,
        md = null === Od || void 0 === Od ? void 0 : Od.files;
      return "number" === typeof(null === Od || void 0 === Od ? void 0 : Od.apiVersion) && "string" === typeof Od.name && (null === Od.author || "string" === typeof Od.author) && (void 0 === Od.keepCircleShadows || "boolean" === typeof Od.keepCircleShadows) && "object" === typeof md && null !== md && Object.values(md).every((dd => "string" === typeof dd))
    }
    const qd = "Bloxdhub",
      Hd = "https://bloxdhub.com/shaders";

    function yd(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const bd = "Screenshot generation failed.",
      Td = "Its screenshots couldn't be generated:";

    function pd(dd) {
      var Od;
      return dd === bd || null !== (Od = null === dd || void 0 === dd ? void 0 : dd.startsWith(Td)) && void 0 !== Od && Od
    }

    function Yd(dd, Od) {
      return `shaderPacks/${dd}/${Od}.json`
    }

    function gd(dd, Od, md, Wd) {
      return null === Od.renderId ? wd(dd, Od.baselineVersion, md, Wd) : `${dd}/${function(dd,Od,md,Wd){return`shaderPacks/${dd}/${Od}/${md}-${Wd}.webp`}(Od.packId,Od.renderId,md,Wd)}`
    }

    function wd(dd, Od, md, Wd) {
      return `${dd}/${function(dd,Od,md){return`shaderPacks/baseline/${dd}/${Od}-${md}.webp`}(Od,md,Wd)}`
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);