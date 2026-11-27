export const id = 711;
export const ids = [711];
export const modules = {
  65203: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      rebuildScenePbrPipelines: () => Ir,
      rebuildSceneRenderables: () => fr
    });
    var Zr = Qr(54245),
      Wr = (rr, Sr) => rr.order - Sr.order,
      ar = 8,
      jr = rr => fr(rr);
    async function Ir(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      await Er(rr, "pbr", Sr)
    }
    async function fr(rr) {
      await Er(rr, void 0, !1)
    }
    async function Er(rr, Sr, Ir) {
      const fr = rr;
      if (!fr._built && !Ir) return;
      const Er = fr._lightListVersion ?? 0,
        pr = fr.surface.engine,
        xr = rr => {
          fr._z ? rr.forEach((rr => rr())) : (0, Zr.f)(pr, (() => rr.forEach((rr => rr()))))
        };
      let mr = !1,
        Nr = !1,
        Ur = !1,
        tr = !1;
      try {
        for (let rr = 1;; rr++) {
          if (void 0 !== Sr) {
            await hr();
            break
          }
          if (Yr(fr), await hr(), !zr(fr)) break;
          if (rr >= ar) {
            fr._rebuildHook = jr, tr = !0, Nr = !0;
            break
          }
        }
        Ur = !0
      } finally {
        if (mr && (fr._renderables.sort(Wr), fr._renderableVersion++, fr._materialEpoch++, fr._built && fr._frameGraph.build()), void 0 === Sr && Ur && !Nr && (fr._lightListVersion ?? 0) === Er) {
          const rr = fr._pendingTopologyRetirements?.splice(0);
          rr?.length && xr(rr), tr || (fr._rebuildHook = void 0)
        }
      }
      async function hr() {
        for (const [rr, Zr] of fr._groups) {
          if (void 0 !== Sr && rr._materialFamily !== Sr) continue;
          if (0 === Zr.length) {
            (Zr.o || Zr.r) && (nr(rr, Zr), mr = !0);
            continue
          }
          const Wr = fr._runtimeBuilds;
          await (Wr?.wait(Zr));
          let ar = !1;
          const Ir = async () => {
            const Sr = fr._runtimeBuilds,
              Qr = [...Zr].filter((Sr => fr.meshes.includes(Sr) && Sr.material?._buildGroup === rr));
            if (0 === Qr.length) return void nr(rr, Zr);
            const jr = !!Zr.r,
              Ir = fr._disposables.length,
              Er = new Map,
              pr = new Map(Qr.map((rr => [rr, rr.material])));
            for (const rr of Qr) {
              const Qr = fr._meshDisposables.get(rr);
              Qr && (Er.set(rr, Qr), fr._meshDisposables.delete(rr), Sr?.holdPendingDisposers(rr, Qr))
            }
            let mr, Nr;
            fr._p = rr => (Nr = rr, !0);
            try {
              mr = await rr(fr, Qr)
            } catch (yr) {
              Nr?.[1]();
              for (const Wr of Qr) {
                const Qr = Er.get(Wr),
                  ar = fr._meshDisposables.get(Wr);
                if (ar && ar !== Qr)
                  for (const rr of ar) rr();
                const jr = fr.meshes.includes(Wr) && Wr.material === pr.get(Wr) && Wr.material?._buildGroup === rr && Zr.includes(Wr);
                Qr && jr ? fr._meshDisposables.set(Wr, Qr) : (fr._meshDisposables.delete(Wr), Qr && xr(Qr)), Qr && Sr?.releasePendingDisposers(Wr, Qr)
              }
              throw yr
            } finally {
              delete fr._p
            }
            if (fr._z || Wr?._d()) {
              Nr?.[1]();
              for (const Sr of Qr) {
                const rr = fr._meshDisposables.get(Sr),
                  Qr = Er.get(Sr);
                if (rr && rr !== Qr)
                  for (const Sr of rr) Sr();
                fr._meshDisposables.delete(Sr)
              }
              for (const Sr of fr._disposables.splice(0)) Sr();
              const rr = [...Er.values()].flat();
              xr(rr);
              for (const [Qr, Zr] of Er) Sr?.releasePendingDisposers(Qr, Zr);
              return
            }
            Nr?.[0](), rr._rebuildSingle = mr.rebuildSingle, Zr.r = fr._runtimeBuilds?.base(rr, mr.rebuildSingle) ?? mr.rebuildSingle, "pbr" === rr._materialFamily && mr._G && (Zr._w = null), jr && er(fr, Ir);
            const Ur = new Set(Qr.filter((Sr => fr.meshes.includes(Sr) && Sr.material === pr.get(Sr) && Sr.material?._buildGroup === rr && Zr.includes(Sr))));
            if (Ur.size !== Qr.length && mr.renderables.some((rr => !rr.mesh))) {
              for (const rr of Qr) {
                const Qr = fr._meshDisposables.get(rr),
                  Zr = Er.get(rr);
                if (Qr && Qr !== Zr)
                  for (const rr of Qr) rr();
                Zr && fr.meshes.includes(rr) ? fr._meshDisposables.set(rr, Zr) : (fr._meshDisposables.delete(rr), Zr && xr(Zr)), Zr && Sr?.releasePendingDisposers(rr, Zr)
              }
              return void(ar = !0)
            }
            const tr = new Set;
            for (const rr of Qr)
              if (Ur.has(rr)) tr.add(rr.material), fr._runtimeBuilds?.reset(rr);
              else {
                const Qr = Er.get(rr),
                  Zr = fr._meshDisposables.get(rr);
                if (Zr && Zr !== Qr)
                  for (const rr of Zr) rr();
                Qr && fr.meshes.includes(rr) ? (fr._meshDisposables.set(rr, Qr), Er.delete(rr), Sr?.releasePendingDisposers(rr, Qr)) : fr._meshDisposables.delete(rr)
              } for (const rr of tr) rr._csmGen = (rr._csmGen ?? 0) + 1;
            const hr = Zr.o,
              zr = hr?.length ? new Set(hr) : null;
            for (let rr = fr._renderables.length - 1; rr >= 0; rr--) {
              const Sr = fr._renderables[rr];
              (Ur.has(Sr.mesh) || zr?.has(Sr)) && fr._renderables.splice(rr, 1)
            }
            const Yr = mr.renderables.filter((rr => !rr.mesh || Ur.has(rr.mesh)));
            fr._renderables.push(...Yr), Zr.o = Yr;
            const Kr = [...Er.values()].flat();
            xr(Kr);
            for (const [rr, Zr] of Er) Sr?.releasePendingDisposers(rr, Zr)
          }, {
            X: Er
          } = await Promise.resolve().then((() => Qr(64722))), pr = 3;
          for (let Sr = 1;; Sr++) {
            if (ar = !1, await Er(fr, rr, Ir), fr._z || Wr?._d()) return void(Nr = !0);
            if (!ar) break;
            if (Sr >= pr) {
              nr(rr, Zr), fr._rebuildHook = jr, tr = !0, Nr = !0;
              break
            }
          }
          ar ? mr = !0 : mr = !0
        }
      }

      function zr(rr) {
        for (const Sr of rr.meshes) {
          const Qr = Sr.material?._buildGroup;
          if (Qr && !rr._groups.get(Qr)?.includes(Sr)) return !0
        }
        return !1
      }

      function Yr(rr) {
        const Sr = new Map;
        for (const Qr of rr.meshes) {
          const rr = Qr.material?._buildGroup;
          if (!rr) continue;
          const Zr = Sr.get(rr);
          Zr ? Zr.push(Qr) : Sr.set(rr, [Qr])
        }
        for (const [Qr, Zr] of rr._groups) {
          const rr = Sr.get(Qr) ?? [];
          (Zr.length !== rr.length || rr.some(((rr, Sr) => Zr[Sr] !== rr))) && (Zr.length = 0, Zr.push(...rr)), Sr.delete(Qr)
        }
        for (const [Qr, Zr] of Sr) {
          const Sr = Zr;
          rr._groups.set(Qr, Sr)
        }
      }

      function nr(rr, Sr) {
        const Qr = Sr.o;
        if (Qr?.length) {
          const rr = new Set(Qr);
          for (let Sr = fr._renderables.length - 1; Sr >= 0; Sr--) rr.has(fr._renderables[Sr]) && fr._renderables.splice(Sr, 1)
        }
        Sr.o = void 0, Sr.r = void 0, fr._runtimeBuilds?.dropBase(rr), fr._rebuildHook = jr, tr = !0
      }

      function er(rr, Sr) {
        const Qr = new Set(rr._disposables.slice(0, Sr));
        for (let Zr = rr._disposables.length - 1; Zr >= Sr; Zr--) Qr.has(rr._disposables[Zr]) && rr._disposables.splice(Zr, 1)
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);