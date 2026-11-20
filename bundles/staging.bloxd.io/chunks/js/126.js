export const id = 126;
export const ids = [126, 127, 130];
export const modules = {
  6328: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv.j,
      g: () => Sv,
      i: () => hv.r
    });
    var hv = Pv(6306);
    const Sv = [!1, !0].flatMap((vv => ["terrain", "liquid", "model"].map((zv => ({
      strict: vv,
      program: zv
    })))))
  },
  39809: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Tv,
      installListedShaderPack: () => lv
    });
    var hv = Pv(6268),
      Sv = Pv(6306),
      ev = Pv(1184),
      gv = Pv(6339),
      pv = Pv(6328),
      dv = Pv(6369),
      Nv = Pv(6367);
    async function lv(vv) {
      const zv = await (0, gv.loadPageShaderPackCompiler)();
      if (null === zv) return {
        kind: "failed",
        reason: "compiler"
      };
      const Pv = await Tv(vv, zv);
      return "failed" === Pv.kind ? Pv : await (0, dv.saveShaderPack)(Pv.stored, zv) ? ((0, dv.markShaderPackChangePending)(), Pv) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Tv(vv, zv) {
      const Pv = await async function(vv) {
        let {
          packId: zv,
          sourceHash: Pv
        } = vv;
        try {
          const vv = await fetch(`${ev.clientSideServerUrls.s3Url}/${(0,hv.L)(zv,Pv)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!vv.ok) return console.error(`Failed to download shader pack ${zv} (${vv.status})`), null;
          const Sv = await vv.json();
          return "object" !== typeof Sv || null === Sv ? (console.error(`Shader pack ${zv}'s source isn't an object`), null) : Sv
        } catch (Sv) {
          return console.error(`Failed to download shader pack ${zv}`, Sv), null
        }
      }(vv);
      if (null === Pv) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, pv.i)(Pv.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const gv = (0, Sv.t)(Pv.files);
      if ("string" === typeof gv) return console.error(`A listed shader pack breaks the pack rules: ${gv}`), {
        kind: "failed",
        reason: "invalid"
      };
      const lv = await (0, Nv.e)(zv, gv);
      if (!1 === (null === lv || void 0 === lv ? void 0 : lv.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Tv = {
        manifest: {
          apiVersion: Pv.apiVersion,
          name: vv.name,
          author: vv.ownerName,
          description: vv.description || null,
          keepCircleShadows: !0 === Pv.keepCircleShadows
        },
        files: gv
      };
      return {
        kind: "loaded",
        stored: (0, dv.toStoredShaderPack)(Tv, lv, {
          packId: vv.packId,
          sourceHash: vv.sourceHash
        })
      }
    }
  },
  6369: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      forgetShaderPackActiveHint: () => Kv,
      isOtherApiVersion: () => Yv,
      isShaderPackActive: () => mv,
      isShaderPackChangePending: () => Fv,
      markShaderPackChangePending: () => fv,
      pageShaderPackValidationVersion: () => nv,
      reconcileStoredShaderPackHint: () => Dv,
      removeShaderPack: () => Gv,
      replaceShaderPack: () => Cv,
      saveShaderPack: () => sv,
      shaderPackNeedsCheck: () => Ov,
      storedPackOutcome: () => jv,
      storedShaderPackFiles: () => Wv,
      toStoredShaderPack: () => Tv
    });
    var hv = Pv(6306),
      Sv = Pv(6328),
      ev = Pv(39),
      gv = Pv(3201),
      pv = Pv(6377),
      dv = Pv(6351);
    const Nv = "shaderPackChangePending";
    let lv = null;

    function Tv(vv, zv, Pv) {
      return {
        manifest: vv.manifest,
        files: (0, hv.u)(vv.files),
        validation: zv,
        ...Pv && {
          listing: Pv
        }
      }
    }

    function Wv(vv) {
      return Object.keys(vv.files).map((zv => ({
        path: zv,
        source: vv.files[zv]
      })))
    }
    let wv = Promise.resolve();

    function av(vv) {
      const zv = wv.then(vv);
      return wv = zv.catch((() => {})), zv
    }

    function sv(vv, zv) {
      return av((() => iv(vv, zv)))
    }

    function Cv(vv, zv, Pv) {
      return av((async () => JSON.stringify(await (0, pv.g)()) === JSON.stringify(vv) && (null === zv ? (await cv(), !0) : iv(zv, Pv))))
    }
    async function iv(vv, zv) {
      const Pv = await ev.f.setItem(pv.c, vv);
      return Pv && Vv(vv, zv), Pv
    }
    async function cv() {
      await ev.f.removeItem(pv.c), ev.h.removeItem(gv.b)
    }

    function Gv() {
      return av(cv)
    }

    function mv(vv, zv) {
      return "active" === jv(vv, zv).kind
    }

    function jv(vv, zv) {
      var Pv;
      return null === vv ? {
        kind: "none",
        reason: "nothingStored"
      } : Yv(vv) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.ok) || vv.validation.fromRecheck ? null === zv ? {
        kind: "none",
        reason: "noCompiler"
      } : Ov(vv, zv) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : vv.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function fv() {
      ev.l.setItem(Nv, performance.timeOrigin)
    }

    function Fv() {
      return ev.l.getItem(Nv) === performance.timeOrigin
    }

    function Yv(vv) {
      return !(0, Sv.i)(vv.manifest.apiVersion)
    }

    function nv(vv) {
      return lv ??= vv.RD((0, dv.shaderPackTextures)()), lv
    }

    function Ov(vv, zv) {
      var Pv;
      return (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.headerVersion) !== nv(zv)
    }

    function Dv(vv) {
      return av((async () => {
        Vv(await (0, pv.g)(!0), vv)
      }))
    }

    function Kv() {
      return av((async () => {
        ev.h.removeItem(gv.b)
      }))
    }

    function Vv(vv, zv) {
      mv(vv, zv) ? ev.h.setItem(gv.b, !0) : ev.h.removeItem(gv.b)
    }
  },
  6351: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      loadShaderPackTextures: () => gv,
      shaderPackTextures: () => pv
    });
    var hv = Pv(6306);
    let Sv = null,
      ev = null;

    function gv() {
      return ev ??= Promise.all([Pv.e(70), Pv.e(198)]).then((() => Pv(39807))).then((vv => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: zv,
          textureNameToIndex: Pv,
          textureAnimationData: ev
        } = vv;
        return Sv ??= (0, hv.n)(Pv, ev, zv), Sv
      })), ev
    }

    function pv() {
      if (null === Sv) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return Sv
    }
  },
  6367: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      e: () => pv
    });
    var hv = Pv(6369),
      Sv = Pv(6351),
      ev = Pv(90);
    const gv = 100;
    async function pv(vv, zv) {
      var Pv;
      let hv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Pv = navigator.gpu) && void 0 !== Pv ? Pv : null;
      const gv = vv.L_(zv, (0, Sv.shaderPackTextures)());
      if (gv.errors.length > 0) return Nv(vv, gv.errors, gv.offInStrict);
      const pv = await async function(vv) {
        if (!vv) return null;
        try {
          const zv = await (0, ev.m)(vv);
          return zv ? await zv.requestDevice() : null
        } catch (zv) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", zv), null
        }
      }(hv);
      if (!pv) return null;
      let dv = !1;
      pv.lost.then((() => {
        dv = !0
      }));
      try {
        const zv = await Promise.all(gv.validationModules.map((zv => async function(vv, zv, Pv) {
          zv.pushErrorScope("validation");
          const hv = zv.createShaderModule({
              code: Pv.code
            }),
            Sv = zv.popErrorScope(),
            {
              messages: ev
            } = await hv.getCompilationInfo(),
            gv = ev.filter((vv => "error" === vv.type)).map((zv => vv.mapValidationMessage(Pv, zv))),
            pv = await Sv;
          pv && 0 === gv.length && gv.push({
            file: null,
            line: 0,
            message: pv.message,
            variants: [Pv.key]
          });
          return gv
        }(vv, pv, zv))));
        return dv ? null : Nv(vv, vv.Jzv(zv.flat()), gv.offInStrict)
      } catch (lv) {
        return console.error("Couldn't validate the shader pack on WebGPU.", lv), null
      } finally {
        pv.destroy()
      }
    }
    async function dv(vv, zv) {
      var Pv;
      if (!(0, hv.shaderPackNeedsCheck)(vv, zv) || (0, hv.isOtherApiVersion)(vv)) return vv;
      const Sv = await pv(zv, (0, hv.storedShaderPackFiles)(vv));
      if (!Sv) return vv;
      const ev = !1 === (null === (Pv = vv.validation) || void 0 === Pv ? void 0 : Pv.ok) && !vv.validation.fromRecheck,
        gv = {
          ...vv,
          validation: ev ? Sv : {
            ...Sv,
            fromRecheck: !0
          }
        };
      return await (0, hv.replaceShaderPack)(vv, gv, zv) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), gv
    }

    function Nv(vv, zv, Pv) {
      return {
        headerVersion: (0, hv.pageShaderPackValidationVersion)(vv),
        ok: 0 === zv.length,
        errors: zv.slice(0, gv),
        moreErrors: Math.max(0, zv.length - gv),
        offInStrict: Pv
      }
    }
  },
  6306: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      f: () => ev,
      j: () => hv,
      n: () => av,
      q: () => lv,
      r: () => Sv,
      t: () => dv,
      u: () => Nv,
      x: () => Tv
    });
    const hv = 5;

    function Sv(vv) {
      return vv === hv
    }
    const ev = 262144,
      gv = 256,
      pv = 256;

    function dv(vv) {
      if ("object" !== typeof vv || null === vv || Array.isArray(vv)) return "The pack has no files.";
      const zv = [];
      for (const [Pv, hv] of Object.entries(vv)) {
        if ("string" !== typeof hv) return `${Pv} isn't text.`;
        zv.push({
          path: Pv,
          source: hv
        })
      }
      return zv.sort(((vv, zv) => lv(vv.path, zv.path))),
        function(vv) {
          if (0 === vv.length) return "The pack has no .wgsl files.";
          if (vv.length > gv) return `The pack has more than ${gv} .wgsl files.`;
          const zv = new Set;
          for (const {
              path: Pv
            }
            of vv) {
            const vv = Wv(Pv);
            if (null !== vv) return vv;
            if (zv.has(Pv)) return `The pack has two files at ${Pv}.`;
            zv.add(Pv)
          }
          return Tv(vv) > ev ? `The pack's .wgsl files are over ${ev/1024} KB in total.` : null
        }(zv) ?? zv
    }

    function Nv(vv) {
      const zv = {};
      for (const Pv of vv) zv[Pv.path] = Pv.source;
      return zv
    }

    function lv(vv, zv) {
      return vv < zv ? -1 : vv > zv ? 1 : 0
    }

    function Tv(vv) {
      const zv = new TextEncoder;
      let Pv = 0;
      for (const {
          source: hv
        }
        of vv) Pv += zv.encode(hv).byteLength;
      return Pv
    }

    function Wv(vv) {
      if (!vv.toLowerCase().endsWith(".wgsl")) return `${vv} isn't a .wgsl file.`;
      if (vv.length > pv) return `A file path is over ${pv} characters.`;
      if (vv.includes("\\") || /[\u0000-\u001f]/.test(vv)) return `${vv} isn't a valid file path.`;
      return vv.split("/").some((vv => "" === vv || "." === vv || ".." === vv)) ? `${vv} isn't a valid file path.` : null
    }
    const wv = /^(.*)\[rot\[([1-4])$/;

    function av(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const hv = new Map;
      zv.forEach(((vv, zv) => {
        let {
          numAnimStates: Pv,
          animStartIdx: Sv
        } = vv;
        for (let ev = 1; ev < Pv; ev++) hv.set(Sv + ev - 1, zv)
      }));
      const Sv = Object.entries(vv),
        ev = new Map;
      for (const [sv, Cv] of Sv) {
        const vv = wv.exec(sv);
        "1" === vv?.[2] && ev.set(vv[1], Cv + 1)
      }
      const gv = vv => {
          const zv = wv.exec(vv);
          return zv && ev.has(zv[1]) ? {
            root: zv[1],
            rotation: Number(zv[2]) - 1
          } : null
        },
        pv = new Set(Sv.map((vv => {
          let [zv] = vv;
          return gv(zv)?.root ?? zv
        }))),
        dv = (vv, Pv) => {
          const hv = vv.replace(/_?0$/, "");
          return (zv[Pv]?.numAnimStates ?? 0) > 1 && !pv.has(hv) ? hv : vv
        },
        Nv = new Map;
      for (const [wv, sv] of Sv) Nv.set(sv, dv(gv(wv)?.root ?? wv, sv));
      const lv = Sv.reduce(((vv, zv) => {
          let [, Pv] = zv;
          return Math.max(vv, Pv + 1)
        }), 0),
        Tv = Array.from({
          length: lv
        }, ((vv, zv) => ({
          id: zv + 1,
          rotation: 0
        }))),
        Wv = new Map,
        av = new Map;
      for (const [wv, sv] of Sv) {
        const vv = gv(wv),
          zv = hv.get(sv);
        if (void 0 !== zv) {
          const Pv = Nv.get(zv);
          av.set(wv, {
            name: wv,
            texture: Pv,
            kind: "frame"
          }), vv && !av.has(vv.root) && av.set(vv.root, {
            name: vv.root,
            texture: Pv,
            kind: "frame"
          });
          continue
        }
        const Pv = Nv.get(sv),
          Sv = vv?.root ?? wv;
        if (Pv !== Sv && av.set(Sv, {
            name: Sv,
            texture: Pv,
            kind: "frame"
          }), vv) {
          const zv = ev.get(vv.root);
          Tv[sv] = {
            id: zv,
            rotation: vv.rotation
          }, Wv.set(Pv, zv), av.set(wv, {
            name: wv,
            texture: Pv,
            kind: "rotation"
          })
        } else Wv.set(Pv, sv + 1)
      }
      for (const wv of Wv.keys()) av.delete(wv);
      for (const [wv, sv] of Pv) {
        const vv = Wv.get(sv);
        void 0 === vv || Wv.has(wv) || (Wv.set(wv, vv), av.delete(wv))
      }
      return {
        named: [...Wv].sort(((vv, zv) => {
          let [Pv] = vv, [hv] = zv;
          return Pv < hv ? -1 : Pv > hv ? 1 : 0
        })).map((vv => {
          let [zv, Pv] = vv;
          return {
            name: zv,
            id: Pv
          }
        })),
        aliases: [...av.values()],
        layers: Tv
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);