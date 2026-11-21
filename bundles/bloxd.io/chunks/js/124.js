export const id = 124;
export const ids = [124, 127, 128, 131];
export const modules = {
  6466: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.l,
      i: () => Nd,
      m: () => pd.t
    });
    var pd = kd(6457);
    const Nd = [!1, !0].flatMap((dd => ["terrain", "liquid", "model"].map((Jd => ({
      strict: dd,
      program: Jd
    })))))
  },
  40486: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => od,
      installListedShaderPack: () => Kd
    });
    var pd = kd(6425),
      Nd = kd(6457),
      Wd = kd(1220),
      Pd = kd(6478),
      Zd = kd(6466),
      gd = kd(6526),
      Cd = kd(6522);
    async function Kd(dd) {
      const Jd = await (0, Pd.loadPageShaderPackCompiler)();
      if (null === Jd) return {
        kind: "failed",
        reason: "compiler"
      };
      const kd = await od(dd, Jd);
      return "failed" === kd.kind ? kd : await (0, gd.saveShaderPack)(kd.stored, Jd) ? ((0, gd.markShaderPackChangePending)(), kd) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function od(dd, Jd) {
      const kd = await async function(dd) {
        let {
          packId: Jd,
          sourceHash: kd
        } = dd;
        try {
          const dd = await fetch(`${Wd.clientSideServerUrls.s3Url}/${(0,pd.D)(Jd,kd)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!dd.ok) return console.error(`Failed to download shader pack ${Jd} (${dd.status})`), null;
          const Nd = await dd.json();
          return "object" !== typeof Nd || null === Nd ? (console.error(`Shader pack ${Jd}'s source isn't an object`), null) : Nd
        } catch (Nd) {
          return console.error(`Failed to download shader pack ${Jd}`, Nd), null
        }
      }(dd);
      if (null === kd) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, Zd.m)(kd.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const Pd = (0, Nd.u)(kd.files);
      if ("string" === typeof Pd) return console.error(`A listed shader pack breaks the pack rules: ${Pd}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Kd = await (0, Cd.f)(Jd, Pd);
      if (!1 === (null === Kd || void 0 === Kd ? void 0 : Kd.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const od = {
        manifest: {
          apiVersion: kd.apiVersion,
          name: dd.name,
          author: dd.ownerName,
          description: dd.description || null,
          keepCircleShadows: !0 === kd.keepCircleShadows
        },
        files: Pd
      };
      return {
        kind: "loaded",
        stored: (0, gd.toStoredShaderPack)(od, Kd, {
          packId: dd.packId,
          sourceHash: dd.sourceHash
        })
      }
    }
  },
  41259: (dd, Jd, kd) => {
    kd.d(Jd, {
      followListingUpdates: () => ld
    });
    var pd = kd(201),
      Nd = kd(22),
      Wd = kd(1520),
      Pd = kd(1147),
      Zd = kd(6478),
      gd = kd(6466),
      Cd = kd(40486),
      Kd = kd(6526);
    const od = ["apiVersion", "invalid", "errors"];
    async function ld(dd, Jd) {
      const kd = await Pd.userContextManager.getCurrentUserContext(),
        ld = await Wd.d.getShaderPackVersions(kd, [Jd.packId]),
        Qd = function(dd, Jd, kd) {
          var pd;
          if (void 0 === kd || "unlisted" === kd.status) return {
            kind: "none"
          };
          if ("banned" === kd.status) return {
            kind: "remove"
          };
          if (!(0, gd.m)(kd.apiVersion)) return {
            kind: "none"
          };
          const {
            sourceHash: Nd,
            name: Wd,
            ownerName: Pd,
            description: Zd
          } = kd;
          return Nd !== Jd.sourceHash && Nd !== Jd.rejectedSourceHash ? {
            kind: "update",
            sourceHash: Nd,
            name: Wd,
            ownerName: Pd,
            description: Zd
          } : Wd !== dd.manifest.name || Pd !== dd.manifest.author || (Zd || null) !== (null !== (pd = dd.manifest.description) && void 0 !== pd ? pd : null) ? {
            kind: "rename",
            name: Wd,
            ownerName: Pd,
            description: Zd
          } : {
            kind: "none"
          }
        }(dd, Jd, (0, pd.d)(ld, Jd.packId));
      if ("update" === Qd.kind && "landingPage" !== Nd.d.get("gameState")) return !1;
      const Ld = "update" === Qd.kind || "rename" === Qd.kind,
        Od = Ld ? await (0, Zd.loadPageShaderPackCompiler)() : null;
      if (Ld && null === Od) return console.warn(`Didn't follow shader pack ${Jd.packId}'s listing: the shader pack compiler couldn't load`), !0;
      const ed = await async function(dd, Jd, kd, pd) {
        switch (kd.kind) {
          case "none":
            return;
          case "remove":
            return null;
          case "rename":
            return {
              ...dd, manifest: {
                ...dd.manifest,
                name: kd.name,
                author: kd.ownerName,
                description: kd.description || null
              }
            };
          case "update": {
            if (null === pd) return;
            const {
              sourceHash: Nd,
              name: Wd,
              ownerName: Pd,
              description: Zd
            } = kd, gd = await (0, Cd.e)({
              packId: Jd.packId,
              sourceHash: Nd,
              name: Wd,
              ownerName: Pd,
              description: Zd
            }, pd);
            if ("loaded" === gd.kind && null !== gd.stored.validation) return gd.stored;
            const Kd = "failed" === gd.kind ? gd.reason : "no WebGPU device could check it";
            return console.warn(`Didn't update shader pack ${Jd.packId}: ${Kd}`), "failed" === gd.kind && od.includes(gd.reason) ? {
              ...dd,
              listing: {
                ...Jd,
                rejectedSourceHash: Nd
              }
            } : void 0
          }
        }
      }(dd, Jd, Qd, Od);
      return void 0 === ed || (await (0, Kd.replaceShaderPack)(dd, ed, Od) ? (null !== ed && ed.files === dd.files || (0, Kd.markShaderPackChangePending)(), !0) : (console.warn("Didn't apply the shader pack listing's update: the stored pack changed or couldn't be written"), !0))
    }
  },
  6526: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      forgetShaderPackActiveHint: () => Yd,
      isOtherApiVersion: () => sd,
      isShaderPackActive: () => vd,
      isShaderPackChangePending: () => Bd,
      markShaderPackChangePending: () => qd,
      pageShaderPackValidationVersion: () => ad,
      reconcileStoredShaderPackHint: () => Fd,
      removeShaderPack: () => Gd,
      replaceShaderPack: () => ed,
      saveShaderPack: () => Od,
      shaderPackNeedsCheck: () => Md,
      storedPackOutcome: () => xd,
      storedShaderPackFiles: () => ld,
      toStoredShaderPack: () => od
    });
    var pd = kd(6457),
      Nd = kd(6466),
      Wd = kd(33),
      Pd = kd(3282),
      Zd = kd(6534),
      gd = kd(6496);
    const Cd = "shaderPackChangePending";
    let Kd = null;

    function od(dd, Jd, kd) {
      return {
        manifest: dd.manifest,
        files: (0, pd.v)(dd.files),
        validation: Jd,
        ...kd && {
          listing: kd
        }
      }
    }

    function ld(dd) {
      return Object.keys(dd.files).map((Jd => ({
        path: Jd,
        source: dd.files[Jd]
      })))
    }
    let Qd = Promise.resolve();

    function Ld(dd) {
      const Jd = Qd.then(dd);
      return Qd = Jd.catch((() => {})), Jd
    }

    function Od(dd, Jd) {
      return Ld((() => Rd(dd, Jd)))
    }

    function ed(dd, Jd, kd) {
      return Ld((async () => JSON.stringify(await (0, Zd.g)()) === JSON.stringify(dd) && (null === Jd ? (await Id(), !0) : Rd(Jd, kd))))
    }
    async function Rd(dd, Jd) {
      const kd = await Wd.f.setItem(Zd.c, dd);
      return kd && md(dd, Jd), kd
    }
    async function Id() {
      await Wd.f.removeItem(Zd.c), Wd.i.removeItem(Pd.b)
    }

    function Gd() {
      return Ld(Id)
    }

    function vd(dd, Jd) {
      return "active" === xd(dd, Jd).kind
    }

    function xd(dd, Jd) {
      var kd;
      return null === dd ? {
        kind: "none",
        reason: "nothingStored"
      } : sd(dd) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.ok) || dd.validation.fromRecheck ? null === Jd ? {
        kind: "none",
        reason: "noCompiler"
      } : Md(dd, Jd) ? {
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

    function qd() {
      Wd.k.setItem(Cd, performance.timeOrigin)
    }

    function Bd() {
      return Wd.k.getItem(Cd) === performance.timeOrigin
    }

    function sd(dd) {
      return !(0, Nd.m)(dd.manifest.apiVersion)
    }

    function ad(dd) {
      return Kd ??= dd.rY((0, gd.shaderPackTextures)()), Kd
    }

    function Md(dd, Jd) {
      var kd;
      return (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.headerVersion) !== ad(Jd)
    }

    function Fd(dd) {
      return Ld((async () => {
        md(await (0, Zd.g)(!0), dd)
      }))
    }

    function Yd() {
      return Ld((async () => {
        Wd.i.removeItem(Pd.b)
      }))
    }

    function md(dd, Jd) {
      vd(dd, Jd) ? Wd.i.setItem(Pd.b, !0) : Wd.i.removeItem(Pd.b)
    }
  },
  6496: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      loadShaderPackTextures: () => Pd,
      shaderPackTextures: () => Zd
    });
    var pd = kd(6457);
    let Nd = null,
      Wd = null;

    function Pd() {
      return Wd ??= Promise.all([kd.e(70), kd.e(199)]).then((() => kd(40477))).then((dd => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: Jd,
          textureNameToIndex: kd,
          textureAnimationData: Wd
        } = dd;
        return Nd ??= (0, pd.o)(kd, Wd, Jd), Nd
      })), Wd
    }

    function Zd() {
      if (null === Nd) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Nd
    }
  },
  6522: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => gd,
      f: () => Zd
    });
    var pd = kd(6526),
      Nd = kd(6496),
      Wd = kd(111);
    const Pd = 100;
    async function Zd(dd, Jd) {
      var kd;
      let pd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (kd = navigator.gpu) && void 0 !== kd ? kd : null;
      const Pd = dd.Kdd(Jd, (0, Nd.shaderPackTextures)());
      if (Pd.errors.length > 0) return Cd(dd, Pd.errors, Pd.offInStrict);
      const Zd = await async function(dd) {
        if (!dd) return null;
        try {
          const Jd = await (0, Wd.p)(dd);
          return Jd ? await Jd.requestDevice() : null
        } catch (Jd) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", Jd), null
        }
      }(pd);
      if (!Zd) return null;
      let gd = !1;
      Zd.lost.then((() => {
        gd = !0
      }));
      try {
        const Jd = await Promise.all(Pd.validationModules.map((Jd => async function(dd, Jd, kd) {
          Jd.pushErrorScope("validation");
          const pd = Jd.createShaderModule({
              code: kd.code
            }),
            Nd = Jd.popErrorScope(),
            {
              messages: Wd
            } = await pd.getCompilationInfo(),
            Pd = Wd.filter((dd => "error" === dd.type)).map((Jd => dd.mapValidationMessage(kd, Jd))),
            Zd = await Nd;
          Zd && 0 === Pd.length && Pd.push({
            file: null,
            line: 0,
            message: Zd.message,
            variants: [kd.key]
          });
          return Pd
        }(dd, Zd, Jd))));
        return gd ? null : Cd(dd, dd.gpd(Jd.flat()), Pd.offInStrict)
      } catch (Kd) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Kd), null
      } finally {
        Zd.destroy()
      }
    }
    async function gd(dd, Jd) {
      var kd;
      if (!(0, pd.shaderPackNeedsCheck)(dd, Jd) || (0, pd.isOtherApiVersion)(dd)) return dd;
      const Nd = await Zd(Jd, (0, pd.storedShaderPackFiles)(dd));
      if (!Nd) return dd;
      const Wd = !1 === (null === (kd = dd.validation) || void 0 === kd ? void 0 : kd.ok) && !dd.validation.fromRecheck,
        Pd = {
          ...dd,
          validation: Wd ? Nd : {
            ...Nd,
            fromRecheck: !0
          }
        };
      return await (0, pd.replaceShaderPack)(dd, Pd, Jd) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), Pd
    }

    function Cd(dd, Jd, kd) {
      return {
        headerVersion: (0, pd.pageShaderPackValidationVersion)(dd),
        ok: 0 === Jd.length,
        errors: Jd.slice(0, Pd),
        moreErrors: Math.max(0, Jd.length - Pd),
        offInStrict: kd
      }
    }
  },
  6425: (dd, Jd, kd) => {
    kd.d(Jd, {
      B: () => Kd,
      D: () => Gd,
      G: () => od,
      I: () => Cd,
      c: () => Qd,
      f: () => Od,
      g: () => Ld,
      h: () => Id,
      k: () => xd,
      m: () => gd,
      p: () => Nd,
      q: () => vd,
      s: () => Wd,
      t: () => Zd,
      v: () => Pd,
      w: () => pd,
      z: () => ld
    });
    const pd = ["forest", "desert", "water", "night", "cave"];
    const Nd = {
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
      Wd = ["popular", "updated", "newest"],
      Pd = 3,
      Zd = 32,
      gd = 300;

    function Cd(dd, Jd) {
      return dd.slice(0, Jd).replace(/[\uD800-\uDBFF]$/, "")
    }
    const Kd = 64,
      od = 512,
      ld = 18e5;
    const Qd = "Bloxdhub",
      Ld = "https://bloxdhub.com/shaders";

    function Od(dd) {
      return `https://bloxdhub.com/workshop/${encodeURIComponent(dd)}`
    }
    const ed = "Screenshot generation failed.",
      Rd = "Its screenshots couldn't be generated:";

    function Id(dd) {
      var Jd;
      return dd === ed || null !== (Jd = null === dd || void 0 === dd ? void 0 : dd.startsWith(Rd)) && void 0 !== Jd && Jd
    }

    function Gd(dd, Jd) {
      return `shaderPacks/${dd}/${Jd}.json`
    }

    function vd(dd, Jd, kd, pd) {
      return null === Jd.renderId ? xd(dd, Jd.baselineVersion, kd, pd) : `${dd}/${function(dd,Jd,kd,pd){return`shaderPacks/${dd}/${Jd}/${kd}-${pd}.webp`}(Jd.packId,Jd.renderId,kd,pd)}`
    }

    function xd(dd, Jd, kd, pd) {
      return `${dd}/${function(dd,Jd,kd){return`shaderPacks/baseline/${dd}/${Jd}-${kd}.webp`}(Jd,kd,pd)}`
    }
  },
  6457: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Pd,
      h: () => Wd,
      l: () => pd,
      o: () => Ld,
      r: () => Kd,
      t: () => Nd,
      u: () => gd,
      v: () => Cd,
      w: () => od
    });
    const pd = 5;

    function Nd(dd) {
      return dd === pd
    }
    const Wd = 262144,
      Pd = 256,
      Zd = 256;

    function gd(dd) {
      if ("object" !== typeof dd || null === dd || Array.isArray(dd)) return "The pack has no files.";
      const Jd = [];
      for (const [kd, pd] of Object.entries(dd)) {
        if ("string" !== typeof pd) return `${kd} isn't text.`;
        Jd.push({
          path: kd,
          source: pd
        })
      }
      return Jd.sort(((dd, Jd) => Kd(dd.path, Jd.path))),
        function(dd) {
          if (0 === dd.length) return "The pack has no .wgsl files.";
          if (dd.length > Pd) return `The pack has more than ${Pd} .wgsl files.`;
          const Jd = new Set;
          for (const {
              path: kd
            }
            of dd) {
            const dd = ld(kd);
            if (null !== dd) return dd;
            if (Jd.has(kd)) return `The pack has two files at ${kd}.`;
            Jd.add(kd)
          }
          return od(dd) > Wd ? `The pack's .wgsl files are over ${Wd/1024} KB in total.` : null
        }(Jd) ?? Jd
    }

    function Cd(dd) {
      const Jd = {};
      for (const kd of dd) Jd[kd.path] = kd.source;
      return Jd
    }

    function Kd(dd, Jd) {
      return dd < Jd ? -1 : dd > Jd ? 1 : 0
    }

    function od(dd) {
      const Jd = new TextEncoder;
      let kd = 0;
      for (const {
          source: pd
        }
        of dd) kd += Jd.encode(pd).byteLength;
      return kd
    }

    function ld(dd) {
      if (!dd.toLowerCase().endsWith(".wgsl")) return `${dd} isn't a .wgsl file.`;
      if (dd.length > Zd) return `A file path is over ${Zd} characters.`;
      if (dd.includes("\\") || /[\u0000-\u001f]/.test(dd)) return `${dd} isn't a valid file path.`;
      return dd.split("/").some((dd => "" === dd || "." === dd || ".." === dd)) ? `${dd} isn't a valid file path.` : null
    }
    const Qd = /^(.*)\[rot\[([1-4])$/;

    function Ld(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const pd = new Map;
      Jd.forEach(((dd, Jd) => {
        let {
          numAnimStates: kd,
          animStartIdx: Nd
        } = dd;
        for (let Wd = 1; Wd < kd; Wd++) pd.set(Nd + Wd - 1, Jd)
      }));
      const Nd = Object.entries(dd),
        Wd = new Map;
      for (const [Od, ed] of Nd) {
        const dd = Qd.exec(Od);
        "1" === dd?.[2] && Wd.set(dd[1], ed + 1)
      }
      const Pd = dd => {
          const Jd = Qd.exec(dd);
          return Jd && Wd.has(Jd[1]) ? {
            root: Jd[1],
            rotation: Number(Jd[2]) - 1
          } : null
        },
        Zd = new Set(Nd.map((dd => {
          let [Jd] = dd;
          return Pd(Jd)?.root ?? Jd
        }))),
        gd = (dd, kd) => {
          const pd = dd.replace(/_?0$/, "");
          return (Jd[kd]?.numAnimStates ?? 0) > 1 && !Zd.has(pd) ? pd : dd
        },
        Cd = new Map;
      for (const [Qd, Od] of Nd) Cd.set(Od, gd(Pd(Qd)?.root ?? Qd, Od));
      const Kd = Nd.reduce(((dd, Jd) => {
          let [, kd] = Jd;
          return Math.max(dd, kd + 1)
        }), 0),
        od = Array.from({
          length: Kd
        }, ((dd, Jd) => ({
          id: Jd + 1,
          rotation: 0
        }))),
        ld = new Map,
        Ld = new Map;
      for (const [Qd, Od] of Nd) {
        const dd = Pd(Qd),
          Jd = pd.get(Od);
        if (void 0 !== Jd) {
          const kd = Cd.get(Jd);
          Ld.set(Qd, {
            name: Qd,
            texture: kd,
            kind: "frame"
          }), dd && !Ld.has(dd.root) && Ld.set(dd.root, {
            name: dd.root,
            texture: kd,
            kind: "frame"
          });
          continue
        }
        const kd = Cd.get(Od),
          Nd = dd?.root ?? Qd;
        if (kd !== Nd && Ld.set(Nd, {
            name: Nd,
            texture: kd,
            kind: "frame"
          }), dd) {
          const Jd = Wd.get(dd.root);
          od[Od] = {
            id: Jd,
            rotation: dd.rotation
          }, ld.set(kd, Jd), Ld.set(Qd, {
            name: Qd,
            texture: kd,
            kind: "rotation"
          })
        } else ld.set(kd, Od + 1)
      }
      for (const Qd of ld.keys()) Ld.delete(Qd);
      for (const [Qd, Od] of kd) {
        const dd = ld.get(Od);
        void 0 === dd || ld.has(Qd) || (ld.set(Qd, dd), Ld.delete(Qd))
      }
      return {
        named: [...ld].sort(((dd, Jd) => {
          let [kd] = dd, [pd] = Jd;
          return kd < pd ? -1 : kd > pd ? 1 : 0
        })).map((dd => {
          let [Jd, kd] = dd;
          return {
            name: Jd,
            id: kd
          }
        })),
        aliases: [...Ld.values()],
        layers: od
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);