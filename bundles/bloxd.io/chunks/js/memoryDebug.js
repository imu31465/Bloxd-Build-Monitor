export const id = 40;
export const ids = [40];
export const modules = {
  4889: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      startMemoryDebug: () => nB
    });
    var TB = ZB(3036),
      JB = ZB(2973);
    const oB = 6e4,
      GB = 5,
      vB = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var kB = ZB(688);
    const cB = [];

    function nB() {
      (0, JB.u)() && (0, JB.D)(zB), hB(), setInterval(hB, oB)
    }

    function hB() {
      var BB;
      const {
        client: IB,
        playedS: ZB,
        snapshot: oB
      } = (0, kB.l)(), nB = null !== (BB = oB.wasmMainMiB) && void 0 !== BB ? BB : function() {
        try {
          return (0, kB.E)((0, TB.r)().buffer.byteLength)
        } catch {
          return null
        }
      }(), hB = function(BB) {
        let {
          client: IB,
          playedS: ZB,
          hidden: TB,
          snapshot: JB
        } = BB;
        const oB = [`client=${null!==IB&&void 0!==IB?IB:"none"}`];
        null !== ZB && oB.push(`playedS=${ZB}`);
        const GB = JB.pageAgeS;
        "number" === typeof GB && oB.push(`pageAgeS=${GB}`), oB.push("hidden=" + (TB ? 1 : 0));
        for (const kB of vB) {
          const BB = JB[kB];
          "number" === typeof BB && Number.isFinite(BB) && oB.push(`${kB}=${BB}`)
        }
        return oB.join(" ")
      }({
        client: IB,
        playedS: ZB,
        hidden: document.hidden,
        snapshot: {
          ...oB,
          wasmMainMiB: nB
        }
      });
      (0, JB.u)() ? (cB.push(hB), cB.length >= GB && zB()) : (0, JB.o)("memory", hB)
    }

    function zB() {
      for (const BB of cB.splice(0))(0, JB.o)("memory", BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);