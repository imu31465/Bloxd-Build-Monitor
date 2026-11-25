export const id = 46;
export const ids = [46];
export const modules = {
  5104: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      startMemoryDebug: () => zM
    });
    var OM = iM(3185),
      SM = iM(3122);
    const jM = 6e4,
      aM = 5,
      PM = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var nM = iM(665);
    const QM = [];

    function zM() {
      (0, SM.q)() && (0, SM.x)(mM), LM(), setInterval(LM, jM)
    }

    function LM() {
      var MM;
      const {
        client: rM,
        playedS: iM,
        snapshot: jM
      } = (0, nM.m)(), zM = null !== (MM = jM.wasmMainMiB) && void 0 !== MM ? MM : function() {
        try {
          return (0, nM.J)((0, OM.y)().buffer.byteLength)
        } catch {
          return null
        }
      }(), LM = function(MM) {
        let {
          client: rM,
          playedS: iM,
          hidden: OM,
          snapshot: SM
        } = MM;
        const jM = [`client=${null!==rM&&void 0!==rM?rM:"none"}`];
        null !== iM && jM.push(`playedS=${iM}`);
        const aM = SM.pageAgeS;
        "number" === typeof aM && jM.push(`pageAgeS=${aM}`), jM.push("hidden=" + (OM ? 1 : 0));
        for (const nM of PM) {
          const MM = SM[nM];
          "number" === typeof MM && Number.isFinite(MM) && jM.push(`${nM}=${MM}`)
        }
        return jM.join(" ")
      }({
        client: rM,
        playedS: iM,
        hidden: document.hidden,
        snapshot: {
          ...jM,
          wasmMainMiB: zM
        }
      });
      (0, SM.q)() ? (QM.push(LM), QM.length >= aM && mM()) : (0, SM.k)("memory", LM)
    }

    function mM() {
      for (const MM of QM.splice(0))(0, SM.k)("memory", MM)
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);