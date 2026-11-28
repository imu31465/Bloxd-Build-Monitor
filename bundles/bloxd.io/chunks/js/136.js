export const id = 136;
export const ids = [136, 139, 159, 160];
export const modules = {
  5951: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.f,
      g: () => Fd,
      k: () => Wd.o
    });
    var Wd = md(5954);
    const Fd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Od => ({
      strict: dd,
      program: Od
    })))))
  },
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
  5954: (dd, Od, md) => {
    md.d(Od, {
      c: () => Kd,
      e: () => Xd,
      f: () => Wd,
      h: () => Hd,
      l: () => td,
      o: () => Fd,
      p: () => Rd,
      r: () => vd,
      v: () => Qd,
      w: () => od
    });
    const Wd = 5;

    function Fd(dd) {
      return dd === Wd
    }

    function Rd(dd) {
      return [...dd.features]
    }
    const Xd = 262144,
      Kd = 256,
      hd = 256;

    function vd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Od = [];
      for (const [md, Wd] of Object.entries(dd)) {
        if ("string" !== typeof Wd) return `${md} isn't text.`;
        Od.push({
          path: md,
          source: Wd
        })
      }
      return Od.sort(((dd, Od) => td(dd.path, Od.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Kd) return `The pack has more than ${Kd} .wgsl files.`;
          const Od = new Set;
          for (const {
              path: md
            }
            of dd) {
            const dd = Nd(md);
            if (null !== dd) return dd;
            if (Od.has(md)) return `The pack has two files at ${md}.`;
            Od.add(md)
          }
          return od(dd) > Xd ? `The pack's .wgsl files are over ${Xd/1024} KB in total.` : null
        }(Od) ?? Od
    }

    function Qd(dd) {
      const Od = {};
      for (const md of dd) Od[md.path] = md.source;
      return Od
    }

    function td(dd, Od) {
      return dd < Od ? -1 : dd > Od ? 1 : 0
    }

    function od(dd) {
      const Od = new TextEncoder;
      let md = 0;
      for (const {
          source: Wd
        }
        of dd) md += Od.encode(Wd).byteLength;
      return md
    }

    function Nd(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > hd) return `A file path is over ${hd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const qd = /^(.*)\[rot\[([1-4])$/;

    function Hd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Wd = new Map;
      Od.forEach(((dd, Od) => {
        let {
          numAnimStates: md,
          animStartIdx: Fd
        } = dd;
        for (let Rd = 1; Rd < md; Rd++) Wd.set(Fd + Rd - 1, Od)
      }));
      const Fd = Object.entries(dd),
        Rd = new Map;
      for (const [Hd, yd] of Fd) {
        const dd = qd.exec(Hd);
        "1" === dd?.[2] && Rd.set(dd[1], yd + 1)
      }
      const Xd = dd => {
          const Od = qd.exec(dd);
          return Od && Rd.has(Od[1]) ? {
            root: Od[1],
            rotation: Number(Od[2]) - 1
          } : null
        },
        Kd = new Set(Fd.map((dd => {
          let [Od] = dd;
          return Xd(Od)?.root ?? Od
        }))),
        hd = (dd, md) => {
          const Wd = dd.replace(/_?0$/, "");
          return (Od[md]?.numAnimStates ?? 0) > 1 && !Kd.has(Wd) ? Wd : dd
        },
        vd = new Map;
      for (const [qd, Hd] of Fd) vd.set(Hd, hd(Xd(qd)?.root ?? qd, Hd));
      const Qd = Fd.reduce(((dd, Od) => {
          let [, md] = Od;
          return Math.max(dd, md + 1)
        }), 0),
        td = Array.from({
          length: Qd
        }, ((dd, Od) => ({
          id: Od + 1,
          rotation: 0
        }))),
        od = new Map,
        Nd = new Map;
      for (const [qd, Hd] of Fd) {
        const dd = Xd(qd),
          Od = Wd.get(Hd);
        if (void 0 !== Od) {
          const md = vd.get(Od);
          Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "frame"
          }), dd && !Nd.has(dd.root) && Nd.set(dd.root, {
            name: dd.root,
            texture: md,
            kind: "frame"
          });
          continue
        }
        const md = vd.get(Hd),
          Fd = dd?.root ?? qd;
        if (md !== Fd && Nd.set(Fd, {
            name: Fd,
            texture: md,
            kind: "frame"
          }), dd) {
          const Od = Rd.get(dd.root);
          td[Hd] = {
            id: Od,
            rotation: dd.rotation
          }, od.set(md, Od), Nd.set(qd, {
            name: qd,
            texture: md,
            kind: "rotation"
          })
        } else od.set(md, Hd + 1)
      }
      for (const qd of od.keys()) Nd.delete(qd);
      for (const [qd, Hd] of md) {
        const dd = od.get(Hd);
        void 0 === dd || od.has(qd) || (od.set(qd, dd), Nd.delete(qd))
      }
      return {
        named: [...od].sort(((dd, Od) => {
          let [md] = dd, [Wd] = Od;
          return md < Wd ? -1 : md > Wd ? 1 : 0
        })).map((dd => {
          let [Od, md] = dd;
          return {
            name: Od,
            id: md
          }
        })),
        aliases: [...Nd.values()],
        layers: td
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);