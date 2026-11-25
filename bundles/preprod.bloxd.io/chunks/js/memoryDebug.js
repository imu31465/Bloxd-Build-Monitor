export const id = 42;
export const ids = [42];
export const modules = {
  5030: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      startMemoryDebug: () => gQ
    });
    var wQ = XQ(3107),
      qQ = XQ(3045);
    const TQ = 6e4,
      zQ = 5,
      sQ = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var FQ = XQ(693);
    const PQ = [];

    function gQ() {
      (0, qQ.n)() && (0, qQ.u)(rQ), JQ(), setInterval(JQ, TQ)
    }

    function JQ() {
      var QQ;
      const {
        client: WQ,
        playedS: XQ,
        snapshot: TQ
      } = (0, FQ.p)(), gQ = null !== (QQ = TQ.wasmMainMiB) && void 0 !== QQ ? QQ : function() {
        try {
          return (0, FQ.M)((0, wQ.w)().buffer.byteLength)
        } catch {
          return null
        }
      }(), JQ = function(QQ) {
        let {
          client: WQ,
          playedS: XQ,
          hidden: wQ,
          snapshot: qQ
        } = QQ;
        const TQ = [`client=${null!==WQ&&void 0!==WQ?WQ:"none"}`];
        null !== XQ && TQ.push(`playedS=${XQ}`);
        const zQ = qQ.pageAgeS;
        "number" === typeof zQ && TQ.push(`pageAgeS=${zQ}`), TQ.push("hidden=" + (wQ ? 1 : 0));
        for (const FQ of sQ) {
          const QQ = qQ[FQ];
          "number" === typeof QQ && Number.isFinite(QQ) && TQ.push(`${FQ}=${QQ}`)
        }
        return TQ.join(" ")
      }({
        client: WQ,
        playedS: XQ,
        hidden: document.hidden,
        snapshot: {
          ...TQ,
          wasmMainMiB: gQ
        }
      });
      (0, qQ.n)() ? (PQ.push(JQ), PQ.length >= zQ && rQ()) : (0, qQ.j)("memory", JQ)
    }

    function rQ() {
      for (const QQ of PQ.splice(0))(0, qQ.j)("memory", QQ)
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);