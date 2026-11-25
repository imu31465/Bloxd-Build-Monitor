export const id = 115;
export const ids = [115, 118, 138, 139];
export const modules = {
  5216: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot.k,
      g: () => qt,
      h: () => Ot.s
    });
    var Ot = Vt(5223);
    const qt = [!1, !0].flatMap((tt => ["terrain", "liquid", "model"].map((et => ({
      strict: tt,
      program: et
    })))))
  },
  40682: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Qt,
      installListedShaderPack: () => Xt
    });
    var Ot = Vt(6756),
      qt = Vt(5223),
      Dt = Vt(1293),
      mt = Vt(6816),
      dt = Vt(5216),
      jt = Vt(6866),
      Ht = Vt(6857);
    async function Xt(tt) {
      const et = await (0, mt.loadPageShaderPackCompiler)();
      if (null === et) return {
        kind: "failed",
        reason: "compiler"
      };
      const Vt = await Qt(tt, et);
      return "failed" === Vt.kind ? Vt : await (0, jt.saveShaderPack)(Vt.stored, et) ? ((0, jt.markShaderPackChangePending)(), Vt) : {
        kind: "failed",
        reason: "save"
      }
    }
    async function Qt(tt, et) {
      const Vt = await async function(tt) {
        let {
          packId: et,
          sourceHash: Vt
        } = tt;
        try {
          const tt = await fetch(`${Dt.clientSideServerUrls.s3Url}/${(0,Ot.K)(et,Vt)}`, {
            headers: {
              Accept: "application/json"
            }
          });
          if (!tt.ok) return console.error(`Failed to download shader pack ${et} (${tt.status})`), null;
          const qt = await tt.json();
          return "object" !== typeof qt || null === qt ? (console.error(`Shader pack ${et}'s source isn't an object`), null) : qt
        } catch (qt) {
          return console.error(`Failed to download shader pack ${et}`, qt), null
        }
      }(tt);
      if (null === Vt) return {
        kind: "failed",
        reason: "download"
      };
      if (!(0, dt.h)(Vt.apiVersion)) return {
        kind: "failed",
        reason: "apiVersion"
      };
      const mt = (0, qt.y)(Vt.files);
      if ("string" === typeof mt) return console.error(`A listed shader pack breaks the pack rules: ${mt}`), {
        kind: "failed",
        reason: "invalid"
      };
      const Xt = await (0, Ht.f)(et, mt);
      if (!1 === (null === Xt || void 0 === Xt ? void 0 : Xt.ok)) return {
        kind: "failed",
        reason: "errors"
      };
      const Qt = {
        manifest: {
          apiVersion: Vt.apiVersion,
          name: tt.name,
          author: tt.ownerName,
          description: tt.description || null,
          keepCircleShadows: !0 === Vt.keepCircleShadows
        },
        files: mt
      };
      return {
        kind: "loaded",
        stored: (0, jt.toStoredShaderPack)(Qt, Xt, {
          packId: tt.packId,
          sourceHash: tt.sourceHash
        })
      }
    }
  },
  6866: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      forgetShaderPackActiveHint: () => ct,
      isOtherApiVersion: () => ht,
      isShaderPackActive: () => Jt,
      isShaderPackChangePending: () => Kt,
      markShaderPackChangePending: () => ut,
      pageShaderPackValidationVersion: () => vt,
      reconcileStoredShaderPackHint: () => St,
      removeShaderPack: () => bt,
      replaceShaderPack: () => yt,
      saveShaderPack: () => wt,
      shaderPackNeedsCheck: () => Wt,
      storedPackOutcome: () => Ct,
      storedShaderPackFiles: () => lt,
      toStoredShaderPack: () => Qt
    });
    var Ot = Vt(5223),
      qt = Vt(5216),
      Dt = Vt(39),
      mt = Vt(3524),
      dt = Vt(6873),
      jt = Vt(6830);
    const Ht = "shaderPackChangePending";
    let Xt = null;

    function Qt(tt, et, Vt) {
      return {
        manifest: tt.manifest,
        files: (0, Ot.C)(tt.files),
        validation: et,
        ...Vt && {
          listing: Vt
        }
      }
    }

    function lt(tt) {
      return Object.keys(tt.files).map((et => ({
        path: et,
        source: tt.files[et]
      })))
    }
    let Et = Promise.resolve();

    function ft(tt) {
      const et = Et.then(tt);
      return Et = et.catch((() => {})), et
    }

    function wt(tt, et) {
      return ft((() => Nt(tt, et)))
    }

    function yt(tt, et, Vt) {
      return ft((async () => JSON.stringify(await (0, dt.g)()) === JSON.stringify(tt) && (null === et ? (await Mt(), !0) : Nt(et, Vt))))
    }
    async function Nt(tt, et) {
      const Vt = await Dt.c.setItem(dt.e, tt);
      return Vt && Rt(tt, et), Vt
    }
    async function Mt() {
      await Dt.c.removeItem(dt.e), Dt.e.removeItem(mt.e)
    }

    function bt() {
      return ft(Mt)
    }

    function Jt(tt, et) {
      return "active" === Ct(tt, et).kind
    }

    function Ct(tt, et) {
      var Vt;
      return null === tt ? {
        kind: "none",
        reason: "nothingStored"
      } : ht(tt) ? {
        kind: "none",
        reason: "otherApiVersion"
      } : !1 !== (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) || tt.validation.fromRecheck ? null === et ? {
        kind: "none",
        reason: "noCompiler"
      } : Wt(tt, et) ? {
        kind: "blocked",
        messageKey: "shaderPack:failedUnchecked"
      } : tt.validation.ok ? {
        kind: "active"
      } : {
        kind: "blocked",
        messageKey: "shaderPack:failedValidation"
      } : {
        kind: "none",
        reason: "failedWhenLoaded"
      }
    }

    function ut() {
      Dt.h.setItem(Ht, performance.timeOrigin)
    }

    function Kt() {
      return Dt.h.getItem(Ht) === performance.timeOrigin
    }

    function ht(tt) {
      return !(0, qt.h)(tt.manifest.apiVersion)
    }

    function vt(tt) {
      return Xt ??= tt.yI((0, jt.shaderPackTextures)()), Xt
    }

    function Wt(tt, et) {
      var Vt;
      return (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.headerVersion) !== vt(et)
    }

    function St(tt) {
      return ft((async () => {
        Rt(await (0, dt.g)(!0), tt)
      }))
    }

    function ct() {
      return ft((async () => {
        Dt.e.removeItem(mt.e)
      }))
    }

    function Rt(tt, et) {
      Jt(tt, et) ? Dt.e.setItem(mt.e, !0) : Dt.e.removeItem(mt.e)
    }
  },
  6830: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      loadShaderPackTextures: () => mt,
      shaderPackTextures: () => dt
    });
    var Ot = Vt(5223);
    let qt = null,
      Dt = null;

    function mt() {
      return Dt ??= Promise.all([Vt.e(73), Vt.e(190)]).then((() => Vt(40674))).then((tt => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: et,
          textureNameToIndex: Vt,
          textureAnimationData: Dt
        } = tt;
        return qt ??= (0, Ot.m)(Vt, Dt, et), qt
      })), Dt
    }

    function dt() {
      if (null === qt) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qt
    }
  },
  6857: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      f: () => dt
    });
    var Ot = Vt(6866),
      qt = Vt(6830),
      Dt = Vt(133);
    const mt = 100;
    async function dt(tt, et) {
      var Vt;
      let Ot = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (Vt = navigator.gpu) && void 0 !== Vt ? Vt : null;
      const mt = tt.mtt(et, (0, qt.shaderPackTextures)());
      if (mt.errors.length > 0) return Ht(tt, mt.errors, mt.offInStrict);
      const dt = await async function(tt) {
        if (!tt) return null;
        try {
          const et = await (0, Dt.t)(tt);
          return et ? await et.requestDevice() : null
        } catch (et) {
          return console.error("Couldn't get a WebGPU device to validate the shader pack.", et), null
        }
      }(Ot);
      if (!dt) return null;
      let jt = !1;
      dt.lost.then((() => {
        jt = !0
      }));
      try {
        const et = await Promise.all(mt.validationModules.map((et => async function(tt, et, Vt) {
          et.pushErrorScope("validation");
          const Ot = et.createShaderModule({
              code: Vt.code
            }),
            qt = et.popErrorScope(),
            {
              messages: Dt
            } = await Ot.getCompilationInfo(),
            mt = Dt.filter((tt => "error" === tt.type)).map((et => tt.mapValidationMessage(Vt, et))),
            dt = await qt;
          dt && 0 === mt.length && mt.push({
            file: null,
            line: 0,
            message: dt.message,
            variants: [Vt.key]
          });
          return mt
        }(tt, dt, et))));
        return jt ? null : Ht(tt, tt.uOt(et.flat()), mt.offInStrict)
      } catch (Xt) {
        return console.error("Couldn't validate the shader pack on WebGPU.", Xt), null
      } finally {
        dt.destroy()
      }
    }
    async function jt(tt, et) {
      var Vt;
      if (!(0, Ot.shaderPackNeedsCheck)(tt, et) || (0, Ot.isOtherApiVersion)(tt)) return tt;
      const qt = await dt(et, (0, Ot.storedShaderPackFiles)(tt));
      if (!qt) return tt;
      const Dt = !1 === (null === (Vt = tt.validation) || void 0 === Vt ? void 0 : Vt.ok) && !tt.validation.fromRecheck,
        mt = {
          ...tt,
          validation: Dt ? qt : {
            ...qt,
            fromRecheck: !0
          }
        };
      return await (0, Ot.replaceShaderPack)(tt, mt, et) || console.warn("Didn't save the shader pack's validation result: the stored pack changed or couldn't be written"), mt
    }

    function Ht(tt, et, Vt) {
      return {
        headerVersion: (0, Ot.pageShaderPackValidationVersion)(tt),
        ok: 0 === et.length,
        errors: et.slice(0, mt),
        moreErrors: Math.max(0, et.length - mt),
        offInStrict: Vt
      }
    }
  },
  5223: (tt, et, Vt) => {
    Vt.d(et, {
      C: () => Xt,
      E: () => lt,
      e: () => dt,
      h: () => mt,
      k: () => Ot,
      m: () => wt,
      p: () => Qt,
      s: () => qt,
      u: () => Dt,
      y: () => Ht
    });
    const Ot = 5;

    function qt(tt) {
      return tt === Ot
    }

    function Dt(tt) {
      return [...tt.features]
    }
    const mt = 262144,
      dt = 256,
      jt = 256;

    function Ht(tt) {
      if ("object" !== typeof tt || null === tt || Array.isArray(tt)) return "The pack has no files.";
      const et = [];
      for (const [Vt, Ot] of Object.entries(tt)) {
        if ("string" !== typeof Ot) return `${Vt} isn't text.`;
        et.push({
          path: Vt,
          source: Ot
        })
      }
      return et.sort(((tt, et) => Qt(tt.path, et.path))),
        function(tt) {
          if (0 === tt.length) return "The pack has no .wgsl files.";
          if (tt.length > dt) return `The pack has more than ${dt} .wgsl files.`;
          const et = new Set;
          for (const {
              path: Vt
            }
            of tt) {
            const tt = Et(Vt);
            if (null !== tt) return tt;
            if (et.has(Vt)) return `The pack has two files at ${Vt}.`;
            et.add(Vt)
          }
          return lt(tt) > mt ? `The pack's .wgsl files are over ${mt/1024} KB in total.` : null
        }(et) ?? et
    }

    function Xt(tt) {
      const et = {};
      for (const Vt of tt) et[Vt.path] = Vt.source;
      return et
    }

    function Qt(tt, et) {
      return tt < et ? -1 : tt > et ? 1 : 0
    }

    function lt(tt) {
      const et = new TextEncoder;
      let Vt = 0;
      for (const {
          source: Ot
        }
        of tt) Vt += et.encode(Ot).byteLength;
      return Vt
    }

    function Et(tt) {
      if (!tt.toLowerCase().endsWith(".wgsl")) return `${tt} isn't a .wgsl file.`;
      if (tt.length > jt) return `A file path is over ${jt} characters.`;
      if (tt.includes("\\") || /[\u0000-\u001f]/.test(tt)) return `${tt} isn't a valid file path.`;
      return tt.split("/").some((tt => "" === tt || "." === tt || ".." === tt)) ? `${tt} isn't a valid file path.` : null
    }
    const ft = /^(.*)\[rot\[([1-4])$/;

    function wt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Ot = new Map;
      et.forEach(((tt, et) => {
        let {
          numAnimStates: Vt,
          animStartIdx: qt
        } = tt;
        for (let Dt = 1; Dt < Vt; Dt++) Ot.set(qt + Dt - 1, et)
      }));
      const qt = Object.entries(tt),
        Dt = new Map;
      for (const [wt, yt] of qt) {
        const tt = ft.exec(wt);
        "1" === tt?.[2] && Dt.set(tt[1], yt + 1)
      }
      const mt = tt => {
          const et = ft.exec(tt);
          return et && Dt.has(et[1]) ? {
            root: et[1],
            rotation: Number(et[2]) - 1
          } : null
        },
        dt = new Set(qt.map((tt => {
          let [et] = tt;
          return mt(et)?.root ?? et
        }))),
        jt = (tt, Vt) => {
          const Ot = tt.replace(/_?0$/, "");
          return (et[Vt]?.numAnimStates ?? 0) > 1 && !dt.has(Ot) ? Ot : tt
        },
        Ht = new Map;
      for (const [ft, wt] of qt) Ht.set(wt, jt(mt(ft)?.root ?? ft, wt));
      const Xt = qt.reduce(((tt, et) => {
          let [, Vt] = et;
          return Math.max(tt, Vt + 1)
        }), 0),
        Qt = Array.from({
          length: Xt
        }, ((tt, et) => ({
          id: et + 1,
          rotation: 0
        }))),
        lt = new Map,
        Et = new Map;
      for (const [ft, wt] of qt) {
        const tt = mt(ft),
          et = Ot.get(wt);
        if (void 0 !== et) {
          const Vt = Ht.get(et);
          Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "frame"
          }), tt && !Et.has(tt.root) && Et.set(tt.root, {
            name: tt.root,
            texture: Vt,
            kind: "frame"
          });
          continue
        }
        const Vt = Ht.get(wt),
          qt = tt?.root ?? ft;
        if (Vt !== qt && Et.set(qt, {
            name: qt,
            texture: Vt,
            kind: "frame"
          }), tt) {
          const et = Dt.get(tt.root);
          Qt[wt] = {
            id: et,
            rotation: tt.rotation
          }, lt.set(Vt, et), Et.set(ft, {
            name: ft,
            texture: Vt,
            kind: "rotation"
          })
        } else lt.set(Vt, wt + 1)
      }
      for (const ft of lt.keys()) Et.delete(ft);
      for (const [ft, wt] of Vt) {
        const tt = lt.get(wt);
        void 0 === tt || lt.has(ft) || (lt.set(ft, tt), Et.delete(ft))
      }
      return {
        named: [...lt].sort(((tt, et) => {
          let [Vt] = tt, [Ot] = et;
          return Vt < Ot ? -1 : Vt > Ot ? 1 : 0
        })).map((tt => {
          let [et, Vt] = tt;
          return {
            name: et,
            id: Vt
          }
        })),
        aliases: [...Et.values()],
        layers: Qt
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);