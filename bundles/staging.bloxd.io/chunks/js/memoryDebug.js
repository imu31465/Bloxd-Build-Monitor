export const id = 40;
export const ids = [40];
export const modules = {
  4796: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      startMemoryDebug: () => aB
    });
    var QB = zB(2967),
      nB = zB(2912);
    const dB = 6e4,
      IB = 5,
      NB = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var uB = zB(694);
    const UB = [];

    function aB() {
      (0, nB.t)() && (0, nB.B)(rB), pB(), setInterval(pB, dB)
    }

    function pB() {
      var BB;
      const {
        client: jB,
        playedS: zB,
        snapshot: dB
      } = (0, uB.r)(), aB = null !== (BB = dB.wasmMainMiB) && void 0 !== BB ? BB : function() {
        try {
          return (0, uB.L)((0, QB.t)().buffer.byteLength)
        } catch {
          return null
        }
      }(), pB = function(BB) {
        let {
          client: jB,
          playedS: zB,
          hidden: QB,
          snapshot: nB
        } = BB;
        const dB = [`client=${null!==jB&&void 0!==jB?jB:"none"}`];
        null !== zB && dB.push(`playedS=${zB}`);
        const IB = nB.pageAgeS;
        "number" === typeof IB && dB.push(`pageAgeS=${IB}`), dB.push("hidden=" + (QB ? 1 : 0));
        for (const uB of NB) {
          const BB = nB[uB];
          "number" === typeof BB && Number.isFinite(BB) && dB.push(`${uB}=${BB}`)
        }
        return dB.join(" ")
      }({
        client: jB,
        playedS: zB,
        hidden: document.hidden,
        snapshot: {
          ...dB,
          wasmMainMiB: aB
        }
      });
      (0, nB.t)() ? (UB.push(pB), UB.length >= IB && rB()) : (0, nB.n)("memory", pB)
    }

    function rB() {
      for (const BB of UB.splice(0))(0, nB.n)("memory", BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);