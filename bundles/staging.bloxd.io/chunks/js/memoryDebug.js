export const id = 47;
export const ids = [47];
export const modules = {
  5186: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      startMemoryDebug: () => MB
    });
    var YB = GB(3206),
      DB = GB(3136);
    const QB = 6e4,
      oB = 5,
      jB = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var yB = GB(670);
    const JB = [];

    function MB() {
      (0, DB.u)() && (0, DB.B)(zB), PB(), setInterval(PB, QB)
    }

    function PB() {
      var BB;
      const {
        client: OB,
        playedS: GB,
        snapshot: QB
      } = (0, yB.p)(), MB = null !== (BB = QB.wasmMainMiB) && void 0 !== BB ? BB : function() {
        try {
          return (0, yB.O)((0, YB.u)().buffer.byteLength)
        } catch {
          return null
        }
      }(), PB = function(BB) {
        let {
          client: OB,
          playedS: GB,
          hidden: YB,
          snapshot: DB
        } = BB;
        const QB = [`client=${null!==OB&&void 0!==OB?OB:"none"}`];
        null !== GB && QB.push(`playedS=${GB}`);
        const oB = DB.pageAgeS;
        "number" === typeof oB && QB.push(`pageAgeS=${oB}`), QB.push("hidden=" + (YB ? 1 : 0));
        for (const yB of jB) {
          const BB = DB[yB];
          "number" === typeof BB && Number.isFinite(BB) && QB.push(`${yB}=${BB}`)
        }
        return QB.join(" ")
      }({
        client: OB,
        playedS: GB,
        hidden: document.hidden,
        snapshot: {
          ...QB,
          wasmMainMiB: MB
        }
      });
      (0, DB.u)() ? (JB.push(PB), JB.length >= oB && zB()) : (0, DB.m)("memory", PB)
    }

    function zB() {
      for (const BB of JB.splice(0))(0, DB.m)("memory", BB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);