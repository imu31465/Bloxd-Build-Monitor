export const id = 29;
export const ids = [29];
export const modules = {
  34024: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      debugDeviceLines: () => gC
    });
    var QC = ZC(615),
      wC = ZC(77),
      bC = ZC(113),
      nC = ZC(107),
      fC = ZC(3258);
    const oC = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function qC(CC) {
      if ("ios" === CC.os) return function(CC) {
        if (null !== CC.appIosVersion) return `${CC.appIosVersion} (the iOS app's)`;
        const zC = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(CC.userAgent);
        if (zC) return `${zC[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: ZC,
          os: QC
        } = CC.agent;
        if ("Safari" === ZC.name && ZC.version) return `${ZC.version} (Safari's version, which follows iOS)`;
        const wC = QC.version;
        if ("iOS" !== QC.name || !wC) return "? (a desktop user agent)";
        const [bC, nC = 0] = wC.split(".").map(Number);
        return bC < 18 || 18 === bC && nC < 6 ? `${wC} (user agent)` : `? (the user agent says ${wC}, frozen from iOS 26)`
      }(CC);
      const zC = CC.hintsPlatformVersion;
      if (zC) return "windows" === CC.os ? `${zC} (${function(CC){const zC=parseInt(CC,10);if(zC>=13)return"Windows 11";return zC>=1?"Windows 10":"Windows 8.1 or older"}(zC)}, client hints)` : `${zC} (client hints)`;
      const ZC = CC.agent.os.version;
      return ZC ? oC.has(ZC) ? `${ZC} (user agent, which may be frozen)` : `${ZC} (user agent)` : "?"
    }

    function FC(CC) {
      var zC;
      const ZC = (null !== (zC = CC.fullVersionList) && void 0 !== zC ? zC : []).filter((CC => {
        let {
          brand: zC
        } = CC;
        return !/not.a.brand/i.test(zC)
      })).map((CC => {
        let {
          brand: zC,
          version: ZC
        } = CC;
        return `${zC} ${ZC}`
      }));
      return `${CC.platform} ${CC.platformVersion||"?"}, ${ZC.join(", ")||"?"}, ${CC.architecture||"?"} ${CC.bitness||"?"}-bit, model ${CC.model||"?"}, mobile ${CC.mobile}`
    }
    let WC = "pending";
    const NC = navigator.userAgentData;

    function MC() {
      const CC = (0, nC.n)(),
        zC = null !== CC && void 0 !== CC ? CC : (0, nC.i)(),
        ZC = (0, nC.h)();
      return [zC ? `webgl ${zC.vendor} / ${zC.renderer} (${CC?"the renderer's context":"a probe"})` : "webgl ?", ZC ? `webgpu adapter ${ZC.vendor||"?"}/${ZC.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function gC() {
      var CC, zC, ZC, nC, oC, NC;
      const gC = (0, wC.getUserAgentDetails)(),
        SC = (0, wC.getOperatingSystem)(),
        pC = qC({
          os: SC,
          userAgent: navigator.userAgent,
          agent: gC,
          appIosVersion: fC.d,
          hintsPlatformVersion: "string" === typeof WC ? void 0 : WC.platformVersion
        }),
        PC = (0, QC.k)(navigator.platform, navigator.maxTouchPoints, bC.y);
      return [`os ${SC} ${pC}; user agent's ${null!==(CC=gC.os.name)&&void 0!==CC?CC:"?"} ${null!==(zC=gC.os.version)&&void 0!==zC?zC:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,wC.getPlatformType)()}`, `browser ${null!==(ZC=gC.browser.name)&&void 0!==ZC?ZC:"?"} ${null!==(nC=gC.browser.version)&&void 0!==nC?nC:"?"}, engine ${null!==(oC=gC.engine.name)&&void 0!==oC?oC:"?"} ${null!==(NC=gC.engine.version)&&void 0!==NC?NC:"?"}`, `client hints ${"string"===typeof WC?WC:FC(WC)}`, `gpu ${MC()}`, `client ${QC.r.client} (${QC.r.reason})`, `surface site ${bC.y}, subsite ${bC.H}${bC.m?", iframed":""}, capped surface ${null!==PC&&void 0!==PC?PC:"none"}`]
    }
    void 0 === NC ? WC = "none (the browser has none)" : NC.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((CC => {
      WC = CC
    }), (CC => {
      WC = `failed (${String(CC)})`
    }))
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);