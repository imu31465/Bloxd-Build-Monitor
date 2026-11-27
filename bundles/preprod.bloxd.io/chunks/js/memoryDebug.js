export const id = 48;
export const ids = [48];
export const modules = {
  5448: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      startMemoryDebug: () => tW
    });
    var mW = OW(2381),
      EW = OW(3866);
    const NW = 6e4,
      PW = 5,
      LW = ["wasmMainMiB", "wasmWorkersMiB", "jsHeapMiB", "gpuMiB", "footprintMiB", "footprintBudgetMiB", "decodedAudioMiB", "storedChunks", "knownChunks", "liveParticleSystems", "renderDistance", "sheds", "gcFull60s", "gcHighS"];
    var cW = OW(673);
    const wW = [];

    function tW() {
      (0, EW.x)() && (0, EW.D)(xW), ZW(), setInterval(ZW, NW)
    }

    function ZW() {
      var WW;
      const {
        client: iW,
        playedS: OW,
        snapshot: NW
      } = (0, cW.n)(), tW = null !== (WW = NW.wasmMainMiB) && void 0 !== WW ? WW : function() {
        try {
          return (0, cW.Q)((0, mW.v)().buffer.byteLength)
        } catch {
          return null
        }
      }(), ZW = function(WW) {
        let {
          client: iW,
          playedS: OW,
          hidden: mW,
          snapshot: EW
        } = WW;
        const NW = [`client=${null!==iW&&void 0!==iW?iW:"none"}`];
        null !== OW && NW.push(`playedS=${OW}`);
        const PW = EW.pageAgeS;
        "number" === typeof PW && NW.push(`pageAgeS=${PW}`), NW.push("hidden=" + (mW ? 1 : 0));
        for (const cW of LW) {
          const WW = EW[cW];
          "number" === typeof WW && Number.isFinite(WW) && NW.push(`${cW}=${WW}`)
        }
        return NW.join(" ")
      }({
        client: iW,
        playedS: OW,
        hidden: document.hidden,
        snapshot: {
          ...NW,
          wasmMainMiB: tW
        }
      });
      (0, EW.x)() ? (wW.push(ZW), wW.length >= PW && xW()) : (0, EW.m)("memory", ZW)
    }

    function xW() {
      for (const WW of wW.splice(0))(0, EW.m)("memory", WW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);