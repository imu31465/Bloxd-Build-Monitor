export const id = 29;
export const ids = [29];
export const modules = {
  34354: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      clientHintsRead: () => QG,
      debugDeviceLines: () => hG
    });
    var wG = ZG(631),
      SG = ZG(80),
      LG = ZG(116),
      yG = ZG(111),
      kG = ZG(3252);
    const UG = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function YG(GG) {
      if ("ios" === GG.os) return function(GG) {
        if (null !== GG.appIosVersion) return `${GG.appIosVersion} (the iOS app's)`;
        const bG = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(GG.userAgent);
        if (bG) return `${bG[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: ZG,
          os: wG
        } = GG.agent;
        if ("Safari" === ZG.name && ZG.version) return `${ZG.version} (Safari's version, which follows iOS)`;
        const SG = wG.version;
        if ("iOS" !== wG.name || !SG) return "? (a desktop user agent)";
        const [LG, yG = 0] = SG.split(".").map(Number);
        return LG < 18 || 18 === LG && yG < 6 ? `${SG} (user agent)` : `? (the user agent says ${SG}, frozen from iOS 26)`
      }(GG);
      const bG = GG.hintsPlatformVersion;
      if (bG) return "windows" === GG.os ? `${bG} (${function(GG){const bG=parseInt(GG,10);if(bG>=13)return"Windows 11";return bG>=1?"Windows 10":"Windows 8.1 or older"}(bG)}, client hints)` : `${bG} (client hints)`;
      const ZG = GG.agent.os.version;
      return ZG ? UG.has(ZG) ? `${ZG} (user agent, which may be frozen)` : `${ZG} (user agent)` : "?"
    }

    function VG(GG) {
      var bG;
      const ZG = (null !== (bG = GG.fullVersionList) && void 0 !== bG ? bG : []).filter((GG => {
        let {
          brand: bG
        } = GG;
        return !/not.a.brand/i.test(bG)
      })).map((GG => {
        let {
          brand: bG,
          version: ZG
        } = GG;
        return `${bG} ${ZG}`
      }));
      return `${GG.platform} ${GG.platformVersion||"?"}, ${ZG.join(", ")||"?"}, ${GG.architecture||"?"} ${GG.bitness||"?"}-bit, model ${GG.model||"?"}, mobile ${GG.mobile}`
    }
    let pG = "pending";
    const fG = navigator.userAgentData;
    void 0 === fG && (pG = "none (the browser has none)");
    const QG = void 0 === fG ? Promise.resolve() : fG.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((GG => {
      pG = GG
    }), (GG => {
      pG = `failed (${String(GG)})`
    }));

    function KG() {
      const GG = (0, yG.q)(),
        bG = null !== GG && void 0 !== GG ? GG : (0, yG.l)(),
        ZG = (0, yG.i)();
      return [bG ? `webgl ${bG.vendor} / ${bG.renderer} (${GG?"the renderer's context":"a probe"})` : "webgl ?", ZG ? `webgpu adapter ${ZG.vendor||"?"}/${ZG.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function hG() {
      var GG, bG, ZG, yG, UG, fG;
      const QG = (0, SG.getUserAgentDetails)(),
        hG = (0, SG.getOperatingSystem)(),
        dG = YG({
          os: hG,
          userAgent: navigator.userAgent,
          agent: QG,
          appIosVersion: kG.g,
          hintsPlatformVersion: "string" === typeof pG ? void 0 : pG.platformVersion
        }),
        JG = (0, wG.m)(navigator.platform, navigator.maxTouchPoints, LG.siteUsed, (0, SG.getWebGpuSupported)());
      return [`os ${hG} ${dG}; user agent's ${null!==(GG=QG.os.name)&&void 0!==GG?GG:"?"} ${null!==(bG=QG.os.version)&&void 0!==bG?bG:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,SG.getPlatformType)()}`, `browser ${null!==(ZG=QG.browser.name)&&void 0!==ZG?ZG:"?"} ${null!==(yG=QG.browser.version)&&void 0!==yG?yG:"?"}, engine ${null!==(UG=QG.engine.name)&&void 0!==UG?UG:"?"} ${null!==(fG=QG.engine.version)&&void 0!==fG?fG:"?"}`, `client hints ${"string"===typeof pG?pG:VG(pG)}`, `gpu ${KG()}`, `client ${wG.s.client} (${wG.s.reason})`, `surface site ${LG.siteUsed}, subsite ${LG.subsiteUsed}${LG.isIframed?", iframed":""}, capped surface ${null!==JG&&void 0!==JG?JG:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);