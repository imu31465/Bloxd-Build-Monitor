export const id = 128;
export const ids = [128, 131];
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