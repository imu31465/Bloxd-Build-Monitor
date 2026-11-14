export const id = 365;
export const ids = [365];
export const modules = {
  59285: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      rebuildScenePbrPipelines: () => bR,
      rebuildSceneRenderables: () => yR
    });
    var wW = MW(39196),
      CW = (WW, RW) => WW.order - RW.order,
      zR = 8,
      AW = WW => yR(WW);
    async function bR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await NW(WW, "pbr", RW)
    }
    async function yR(WW) {
      await NW(WW, void 0, !1)
    }
    async function NW(WW, RW, bR) {
      const yR = WW;
      if (!yR._built && !bR) return;
      const NW = yR._lightListVersion ?? 0,
        eW = yR.surface.engine,
        BW = WW => {
          yR._z ? WW.forEach((WW => WW())) : (0, wW.b)(eW, (() => WW.forEach((WW => WW()))))
        };
      let tR = !1,
        TW = !1,
        gR = !1,
        iR = !1;
      try {
        for (let WW = 1;; WW++) {
          if (void 0 !== RW) {
            await YW();
            break
          }
          if (PW(yR), await YW(), !JW(yR)) break;
          if (WW >= zR) {
            yR._rebuildHook = AW, iR = !0, TW = !0;
            break
          }
        }
        gR = !0
      } finally {
        if (tR && (yR._renderables.sort(CW), yR._renderableVersion++, yR._materialEpoch++, yR._built && yR._frameGraph.build()), void 0 === RW && gR && !TW && (yR._lightListVersion ?? 0) === NW) {
          const WW = yR._pendingTopologyRetirements?.splice(0);
          WW?.length && BW(WW), iR || (yR._rebuildHook = void 0)
        }
      }
      async function YW() {
        for (const [WW, wW] of yR._groups) {
          if (void 0 !== RW && WW._materialFamily !== RW) continue;
          if (0 === wW.length) {
            (wW.o || wW.r) && (IW(WW, wW), tR = !0);
            continue
          }
          const CW = yR._runtimeBuilds;
          await (CW?.wait(wW));
          let zR = !1;
          const bR = async () => {
            const RW = yR._runtimeBuilds,
              MW = [...wW].filter((RW => yR.meshes.includes(RW) && RW.material?._buildGroup === WW));
            if (0 === MW.length) return void IW(WW, wW);
            const AW = !!wW.r,
              bR = yR._disposables.length,
              NW = new Map,
              eW = new Map(MW.map((WW => [WW, WW.material])));
            for (const WW of MW) {
              const MW = yR._meshDisposables.get(WW);
              MW && (NW.set(WW, MW), yR._meshDisposables.delete(WW), RW?.holdPendingDisposers(WW, MW))
            }
            let tR, TW;
            yR._p = WW => (TW = WW, !0);
            try {
              tR = await WW(yR, MW)
            } catch (FW) {
              TW?.[1]();
              for (const CW of MW) {
                const MW = NW.get(CW),
                  zR = yR._meshDisposables.get(CW);
                if (zR && zR !== MW)
                  for (const WW of zR) WW();
                const AW = yR.meshes.includes(CW) && CW.material === eW.get(CW) && CW.material?._buildGroup === WW && wW.includes(CW);
                MW && AW ? yR._meshDisposables.set(CW, MW) : (yR._meshDisposables.delete(CW), MW && BW(MW)), MW && RW?.releasePendingDisposers(CW, MW)
              }
              throw FW
            } finally {
              delete yR._p
            }
            if (yR._z || CW?._d()) {
              TW?.[1]();
              for (const RW of MW) {
                const WW = yR._meshDisposables.get(RW),
                  MW = NW.get(RW);
                if (WW && WW !== MW)
                  for (const RW of WW) RW();
                yR._meshDisposables.delete(RW)
              }
              for (const RW of yR._disposables.splice(0)) RW();
              const WW = [...NW.values()].flat();
              BW(WW);
              for (const [MW, wW] of NW) RW?.releasePendingDisposers(MW, wW);
              return
            }
            TW?.[0](), WW._rebuildSingle = tR.rebuildSingle, wW.r = yR._runtimeBuilds?.base(WW, tR.rebuildSingle) ?? tR.rebuildSingle, "pbr" === WW._materialFamily && tR._G && (wW._w = null), AW && oW(yR, bR);
            const gR = new Set(MW.filter((RW => yR.meshes.includes(RW) && RW.material === eW.get(RW) && RW.material?._buildGroup === WW && wW.includes(RW))));
            if (gR.size !== MW.length && tR.renderables.some((WW => !WW.mesh))) {
              for (const WW of MW) {
                const MW = yR._meshDisposables.get(WW),
                  wW = NW.get(WW);
                if (MW && MW !== wW)
                  for (const WW of MW) WW();
                wW && yR.meshes.includes(WW) ? yR._meshDisposables.set(WW, wW) : (yR._meshDisposables.delete(WW), wW && BW(wW)), wW && RW?.releasePendingDisposers(WW, wW)
              }
              return void(zR = !0)
            }
            const iR = new Set;
            for (const WW of MW)
              if (gR.has(WW)) iR.add(WW.material), yR._runtimeBuilds?.reset(WW);
              else {
                const MW = NW.get(WW),
                  wW = yR._meshDisposables.get(WW);
                if (wW && wW !== MW)
                  for (const WW of wW) WW();
                MW && yR.meshes.includes(WW) ? (yR._meshDisposables.set(WW, MW), NW.delete(WW), RW?.releasePendingDisposers(WW, MW)) : yR._meshDisposables.delete(WW)
              } for (const WW of iR) WW._csmGen = (WW._csmGen ?? 0) + 1;
            const YW = wW.o,
              JW = YW?.length ? new Set(YW) : null;
            for (let WW = yR._renderables.length - 1; WW >= 0; WW--) {
              const RW = yR._renderables[WW];
              (gR.has(RW.mesh) || JW?.has(RW)) && yR._renderables.splice(WW, 1)
            }
            const PW = tR.renderables.filter((WW => !WW.mesh || gR.has(WW.mesh)));
            yR._renderables.push(...PW), wW.o = PW;
            const lW = [...NW.values()].flat();
            BW(lW);
            for (const [WW, wW] of NW) RW?.releasePendingDisposers(WW, wW)
          }, {
            X: NW
          } = await Promise.resolve().then((() => MW(58697))), eW = 3;
          for (let RW = 1;; RW++) {
            if (zR = !1, await NW(yR, WW, bR), yR._z || CW?._d()) return void(TW = !0);
            if (!zR) break;
            if (RW >= eW) {
              IW(WW, wW), yR._rebuildHook = AW, iR = !0, TW = !0;
              break
            }
          }
          zR ? tR = !0 : tR = !0
        }
      }

      function JW(WW) {
        for (const RW of WW.meshes) {
          const MW = RW.material?._buildGroup;
          if (MW && !WW._groups.get(MW)?.includes(RW)) return !0
        }
        return !1
      }

      function PW(WW) {
        const RW = new Map;
        for (const MW of WW.meshes) {
          const WW = MW.material?._buildGroup;
          if (!WW) continue;
          const wW = RW.get(WW);
          wW ? wW.push(MW) : RW.set(WW, [MW])
        }
        for (const [MW, wW] of WW._groups) {
          const WW = RW.get(MW) ?? [];
          (wW.length !== WW.length || WW.some(((WW, RW) => wW[RW] !== WW))) && (wW.length = 0, wW.push(...WW)), RW.delete(MW)
        }
        for (const [MW, wW] of RW) {
          const RW = wW;
          WW._groups.set(MW, RW)
        }
      }

      function IW(WW, RW) {
        const MW = RW.o;
        if (MW?.length) {
          const WW = new Set(MW);
          for (let RW = yR._renderables.length - 1; RW >= 0; RW--) WW.has(yR._renderables[RW]) && yR._renderables.splice(RW, 1)
        }
        RW.o = void 0, RW.r = void 0, yR._runtimeBuilds?.dropBase(WW), yR._rebuildHook = AW, iR = !0
      }

      function oW(WW, RW) {
        const MW = new Set(WW._disposables.slice(0, RW));
        for (let wW = WW._disposables.length - 1; wW >= RW; wW--) MW.has(WW._disposables[wW]) && WW._disposables.splice(wW, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);