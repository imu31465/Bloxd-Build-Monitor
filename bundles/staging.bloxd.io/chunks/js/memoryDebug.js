export const id = 40;
export const ids = [40];
export const modules = {
  4868: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      startMemoryDebug: () => Xt
    });
    var Ot = Vt(2961),
      qt = Vt(2902);
    const Dt = 6e4,
      mt = 5,
      dt = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var jt = Vt(730);
    const Ht = [];

    function Xt() {
      (0, qt.x)() && (0, qt.E)(lt), Qt(), setInterval(Qt, Dt)
    }

    function Qt() {
      var tt;
      const {
        client: et,
        playedS: Vt,
        snapshot: Dt
      } = (0, jt.q)(), Xt = null !== (tt = Dt.wasmMainMiB) && void 0 !== tt ? tt : function() {
        try {
          return (0, jt.E)((0, Ot.z)().buffer.byteLength)
        } catch {
          return null
        }
      }(), Qt = function(tt) {
        let {
          client: et,
          playedS: Vt,
          hidden: Ot,
          snapshot: qt
        } = tt;
        const Dt = [`client=${null!==et&&void 0!==et?et:"none"}`];
        null !== Vt && Dt.push(`playedS=${Vt}`);
        const mt = qt.pageAgeS;
        "number" === typeof mt && Dt.push(`pageAgeS=${mt}`), Dt.push("hidden=" + (Ot ? 1 : 0));
        for (const jt of dt) {
          const tt = qt[jt];
          "number" === typeof tt && Number.isFinite(tt) && Dt.push(`${jt}=${tt}`)
        }
        return Dt.join(" ")
      }({
        client: et,
        playedS: Vt,
        hidden: document.hidden,
        snapshot: {
          ...Dt,
          wasmMainMiB: Xt
        }
      });
      (0, qt.x)() ? (Ht.push(Qt), Ht.length >= mt && lt()) : (0, qt.n)("memory", Qt)
    }

    function lt() {
      for (const tt of Ht.splice(0))(0, qt.n)("memory", tt)
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);