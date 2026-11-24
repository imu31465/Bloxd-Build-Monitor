export const id = 29;
export const ids = [29];
export const modules = {
  34135: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      clientHintsRead: () => pT,
      debugDeviceLines: () => ZT
    });
    var WT = mT(681),
      zT = mT(102),
      MT = mT(133),
      gT = mT(130),
      nT = mT(3386);
    const HT = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function kT(TT) {
      if ("ios" === TT.os) return function(TT) {
        if (null !== TT.appIosVersion) return `${TT.appIosVersion} (the iOS app's)`;
        const UT = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(TT.userAgent);
        if (UT) return `${UT[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: mT,
          os: WT
        } = TT.agent;
        if ("Safari" === mT.name && mT.version) return `${mT.version} (Safari's version, which follows iOS)`;
        const zT = WT.version;
        if ("iOS" !== WT.name || !zT) return "? (a desktop user agent)";
        const [MT, gT = 0] = zT.split(".").map(Number);
        return MT < 18 || 18 === MT && gT < 6 ? `${zT} (user agent)` : `? (the user agent says ${zT}, frozen from iOS 26)`
      }(TT);
      const UT = TT.hintsPlatformVersion;
      if (UT) return "windows" === TT.os ? `${UT} (${function(TT){const UT=parseInt(TT,10);if(UT>=13)return"Windows 11";return UT>=1?"Windows 10":"Windows 8.1 or older"}(UT)}, client hints)` : `${UT} (client hints)`;
      const mT = TT.agent.os.version;
      return mT ? HT.has(mT) ? `${mT} (user agent, which may be frozen)` : `${mT} (user agent)` : "?"
    }

    function jT(TT) {
      var UT;
      const mT = (null !== (UT = TT.fullVersionList) && void 0 !== UT ? UT : []).filter((TT => {
        let {
          brand: UT
        } = TT;
        return !/not.a.brand/i.test(UT)
      })).map((TT => {
        let {
          brand: UT,
          version: mT
        } = TT;
        return `${UT} ${mT}`
      }));
      return `${TT.platform} ${TT.platformVersion||"?"}, ${mT.join(", ")||"?"}, ${TT.architecture||"?"} ${TT.bitness||"?"}-bit, model ${TT.model||"?"}, mobile ${TT.mobile}`
    }
    let lT = "pending";
    const LT = navigator.userAgentData;
    void 0 === LT && (lT = "none (the browser has none)");
    const pT = void 0 === LT ? Promise.resolve() : LT.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((TT => {
      lT = TT
    }), (TT => {
      lT = `failed (${String(TT)})`
    }));

    function BT() {
      const TT = (0, gT.s)(),
        UT = null !== TT && void 0 !== TT ? TT : (0, gT.l)(),
        mT = (0, gT.i)();
      return [UT ? `webgl ${UT.vendor} / ${UT.renderer} (${TT?"the renderer's context":"a probe"})` : "webgl ?", mT ? `webgpu adapter ${mT.vendor||"?"}/${mT.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function ZT() {
      var TT, UT, mT, gT, HT, LT;
      const pT = (0, zT.getUserAgentDetails)(),
        ZT = (0, zT.getOperatingSystem)(),
        cT = kT({
          os: ZT,
          userAgent: navigator.userAgent,
          agent: pT,
          appIosVersion: nT.e,
          hintsPlatformVersion: "string" === typeof lT ? void 0 : lT.platformVersion
        }),
        vT = (0, WT.k)(navigator.platform, navigator.maxTouchPoints, MT.siteUsed, (0, zT.getWebGpuSupported)());
      return [`os ${ZT} ${cT}; user agent's ${null!==(TT=pT.os.name)&&void 0!==TT?TT:"?"} ${null!==(UT=pT.os.version)&&void 0!==UT?UT:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,zT.getPlatformType)()}`, `browser ${null!==(mT=pT.browser.name)&&void 0!==mT?mT:"?"} ${null!==(gT=pT.browser.version)&&void 0!==gT?gT:"?"}, engine ${null!==(HT=pT.engine.name)&&void 0!==HT?HT:"?"} ${null!==(LT=pT.engine.version)&&void 0!==LT?LT:"?"}`, `client hints ${"string"===typeof lT?lT:jT(lT)}`, `gpu ${BT()}`, `client ${WT.r.client} (${WT.r.reason})`, `surface site ${MT.siteUsed}, subsite ${MT.subsiteUsed}${MT.isIframed?", iframed":""}, capped surface ${null!==vT&&void 0!==vT?vT:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);