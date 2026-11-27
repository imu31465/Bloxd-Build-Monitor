export const id = 710;
export const ids = [710];
export const modules = {
  65059: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      rebuildScenePbrPipelines: () => LW,
      rebuildSceneRenderables: () => cW
    });
    var mW = OW(53885),
      EW = (WW, iW) => WW.order - iW.order,
      NW = 8,
      PW = WW => cW(WW);
    async function LW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await wW(WW, "pbr", iW)
    }
    async function cW(WW) {
      await wW(WW, void 0, !1)
    }
    async function wW(WW, iW, LW) {
      const cW = WW;
      if (!cW._built && !LW) return;
      const wW = cW._lightListVersion ?? 0,
        tW = cW.surface.engine,
        ZW = WW => {
          cW._z ? WW.forEach((WW => WW())) : (0, mW.g)(tW, (() => WW.forEach((WW => WW()))))
        };
      let xW = !1,
        lW = !1,
        AW = !1,
        bW = !1;
      try {
        for (let WW = 1;; WW++) {
          if (void 0 !== iW) {
            await jW();
            break
          }
          if (kW(cW), await jW(), !UW(cW)) break;
          if (WW >= NW) {
            cW._rebuildHook = PW, bW = !0, lW = !0;
            break
          }
        }
        AW = !0
      } finally {
        if (xW && (cW._renderables.sort(EW), cW._renderableVersion++, cW._materialEpoch++, cW._built && cW._frameGraph.build()), void 0 === iW && AW && !lW && (cW._lightListVersion ?? 0) === wW) {
          const WW = cW._pendingTopologyRetirements?.splice(0);
          WW?.length && ZW(WW), bW || (cW._rebuildHook = void 0)
        }
      }
      async function jW() {
        for (const [WW, mW] of cW._groups) {
          if (void 0 !== iW && WW._materialFamily !== iW) continue;
          if (0 === mW.length) {
            (mW.o || mW.r) && (sW(WW, mW), xW = !0);
            continue
          }
          const EW = cW._runtimeBuilds;
          await (EW?.wait(mW));
          let NW = !1;
          const LW = async () => {
            const iW = cW._runtimeBuilds,
              OW = [...mW].filter((iW => cW.meshes.includes(iW) && iW.material?._buildGroup === WW));
            if (0 === OW.length) return void sW(WW, mW);
            const PW = !!mW.r,
              LW = cW._disposables.length,
              wW = new Map,
              tW = new Map(OW.map((WW => [WW, WW.material])));
            for (const WW of OW) {
              const OW = cW._meshDisposables.get(WW);
              OW && (wW.set(WW, OW), cW._meshDisposables.delete(WW), iW?.holdPendingDisposers(WW, OW))
            }
            let xW, lW;
            cW._p = WW => (lW = WW, !0);
            try {
              xW = await WW(cW, OW)
            } catch (SW) {
              lW?.[1]();
              for (const EW of OW) {
                const OW = wW.get(EW),
                  NW = cW._meshDisposables.get(EW);
                if (NW && NW !== OW)
                  for (const WW of NW) WW();
                const PW = cW.meshes.includes(EW) && EW.material === tW.get(EW) && EW.material?._buildGroup === WW && mW.includes(EW);
                OW && PW ? cW._meshDisposables.set(EW, OW) : (cW._meshDisposables.delete(EW), OW && ZW(OW)), OW && iW?.releasePendingDisposers(EW, OW)
              }
              throw SW
            } finally {
              delete cW._p
            }
            if (cW._z || EW?._d()) {
              lW?.[1]();
              for (const iW of OW) {
                const WW = cW._meshDisposables.get(iW),
                  OW = wW.get(iW);
                if (WW && WW !== OW)
                  for (const iW of WW) iW();
                cW._meshDisposables.delete(iW)
              }
              for (const iW of cW._disposables.splice(0)) iW();
              const WW = [...wW.values()].flat();
              ZW(WW);
              for (const [OW, mW] of wW) iW?.releasePendingDisposers(OW, mW);
              return
            }
            lW?.[0](), WW._rebuildSingle = xW.rebuildSingle, mW.r = cW._runtimeBuilds?.base(WW, xW.rebuildSingle) ?? xW.rebuildSingle, "pbr" === WW._materialFamily && xW._G && (mW._w = null), PW && MW(cW, LW);
            const AW = new Set(OW.filter((iW => cW.meshes.includes(iW) && iW.material === tW.get(iW) && iW.material?._buildGroup === WW && mW.includes(iW))));
            if (AW.size !== OW.length && xW.renderables.some((WW => !WW.mesh))) {
              for (const WW of OW) {
                const OW = cW._meshDisposables.get(WW),
                  mW = wW.get(WW);
                if (OW && OW !== mW)
                  for (const WW of OW) WW();
                mW && cW.meshes.includes(WW) ? cW._meshDisposables.set(WW, mW) : (cW._meshDisposables.delete(WW), mW && ZW(mW)), mW && iW?.releasePendingDisposers(WW, mW)
              }
              return void(NW = !0)
            }
            const bW = new Set;
            for (const WW of OW)
              if (AW.has(WW)) bW.add(WW.material), cW._runtimeBuilds?.reset(WW);
              else {
                const OW = wW.get(WW),
                  mW = cW._meshDisposables.get(WW);
                if (mW && mW !== OW)
                  for (const WW of mW) WW();
                OW && cW.meshes.includes(WW) ? (cW._meshDisposables.set(WW, OW), wW.delete(WW), iW?.releasePendingDisposers(WW, OW)) : cW._meshDisposables.delete(WW)
              } for (const WW of bW) WW._csmGen = (WW._csmGen ?? 0) + 1;
            const jW = mW.o,
              UW = jW?.length ? new Set(jW) : null;
            for (let WW = cW._renderables.length - 1; WW >= 0; WW--) {
              const iW = cW._renderables[WW];
              (AW.has(iW.mesh) || UW?.has(iW)) && cW._renderables.splice(WW, 1)
            }
            const kW = xW.renderables.filter((WW => !WW.mesh || AW.has(WW.mesh)));
            cW._renderables.push(...kW), mW.o = kW;
            const KW = [...wW.values()].flat();
            ZW(KW);
            for (const [WW, mW] of wW) iW?.releasePendingDisposers(WW, mW)
          }, {
            X: wW
          } = await Promise.resolve().then((() => OW(64503))), tW = 3;
          for (let iW = 1;; iW++) {
            if (NW = !1, await wW(cW, WW, LW), cW._z || EW?._d()) return void(lW = !0);
            if (!NW) break;
            if (iW >= tW) {
              sW(WW, mW), cW._rebuildHook = PW, bW = !0, lW = !0;
              break
            }
          }
          NW ? xW = !0 : xW = !0
        }
      }

      function UW(WW) {
        for (const iW of WW.meshes) {
          const OW = iW.material?._buildGroup;
          if (OW && !WW._groups.get(OW)?.includes(iW)) return !0
        }
        return !1
      }

      function kW(WW) {
        const iW = new Map;
        for (const OW of WW.meshes) {
          const WW = OW.material?._buildGroup;
          if (!WW) continue;
          const mW = iW.get(WW);
          mW ? mW.push(OW) : iW.set(WW, [OW])
        }
        for (const [OW, mW] of WW._groups) {
          const WW = iW.get(OW) ?? [];
          (mW.length !== WW.length || WW.some(((WW, iW) => mW[iW] !== WW))) && (mW.length = 0, mW.push(...WW)), iW.delete(OW)
        }
        for (const [OW, mW] of iW) {
          const iW = mW;
          WW._groups.set(OW, iW)
        }
      }

      function sW(WW, iW) {
        const OW = iW.o;
        if (OW?.length) {
          const WW = new Set(OW);
          for (let iW = cW._renderables.length - 1; iW >= 0; iW--) WW.has(cW._renderables[iW]) && cW._renderables.splice(iW, 1)
        }
        iW.o = void 0, iW.r = void 0, cW._runtimeBuilds?.dropBase(WW), cW._rebuildHook = PW, bW = !0
      }

      function MW(WW, iW) {
        const OW = new Set(WW._disposables.slice(0, iW));
        for (let mW = WW._disposables.length - 1; mW >= iW; mW--) OW.has(WW._disposables[mW]) && WW._disposables.splice(mW, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);