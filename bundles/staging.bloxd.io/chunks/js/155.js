export const id = 155;
export const ids = [155];
export const modules = {
  54168: (dd, Od, md) => {
    md.d(Od, {
      startHarnessShaderPack: () => td
    });
    var Wd = md(7512),
      Fd = md(5954),
      Rd = md(7592),
      Xd = md(7566),
      Kd = md(5951),
      hd = md(40819),
      vd = md(7583),
      Qd = md(7595);
    async function td(dd, Od) {
      const {
        stored: md,
        info: td
      } = await async function(dd, Od) {
        const md = await async function(dd) {
          const Od = await fetch(dd);
          if (!Od.ok) throw new Error(`Couldn't fetch the shader pack at ${dd}: HTTP ${Od.status}`);
          const md = await Od.json();
          if (!(0, Wd.l)(md)) throw new Error(`The shader pack at ${dd} isn't a shader pack listing source`);
          return md
        }(dd);
        if (!(0, Kd.k)(md.apiVersion)) throw new Error(`The pack is for shader pack API version ${md.apiVersion}; this build runs version ${Kd.c}`);
        const hd = {
            manifest: {
              apiVersion: md.apiVersion,
              name: md.name,
              author: md.author,
              description: null,
              keepCircleShadows: !0 === md.keepCircleShadows
            },
            files: md.files,
            validation: null
          },
          td = {
            url: dd,
            name: md.name,
            features: [],
            errors: [],
            runsInMode: !1
          },
          od = (0, Fd.r)(md.files);
        if ("string" === typeof od) return td.errors = [{
          file: null,
          line: 0,
          message: od
        }], {
          stored: hd,
          info: td
        };
        const Nd = await (0, Xd.loadPageShaderPackCompiler)();
        if (!Nd) throw new Error("The shader pack compiler couldn't load");
        const qd = await (0, Qd.e)(Nd, od);
        if (!qd) throw new Error("No WebGPU device could validate the shader pack");
        if (td.errors = [...qd.errors], qd.ok) {
          const dd = Nd.HOd(od, (0, vd.shaderPackTextures)());
          td.features = (0, Fd.p)(dd), td.runsInMode = (0, Rd.k)(dd.variants, Od)
        }
        return {
          stored: {
            ...hd,
            validation: qd
          },
          info: td
        }
      }(dd, Od), [od] = td.errors;
      if (od) {
        const dd = null === od.file ? "" : `${od.file}:${od.line}: `,
          Od = td.errors.length > 1 ? ` (${td.errors.length-1} more)` : "";
        return {
          info: td,
          problem: `The shader pack doesn't compile: ${dd}${od.message}${Od}`
        }
      }
      return td.runsInMode ? ((0, hd.setHarnessUrlShaderPack)(md, Od), {
        info: td,
        problem: null
      }) : {
        info: td,
        problem: `The shader pack runs nothing in ${Od} mode`
      }
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