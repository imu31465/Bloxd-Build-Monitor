export const id = 29;
export const ids = [29];
export const modules = {
  8639: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      debugDeviceLines: () => cT
    });
    var iT = IT(637),
      zT = IT(90),
      kT = IT(139),
      WT = IT(134),
      XT = IT(3912);
    const BT = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function FT(TT) {
      if ("ios" === TT.os) return function(TT) {
        if (null !== TT.appIosVersion) return `${TT.appIosVersion} (the iOS app's)`;
        const oT = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(TT.userAgent);
        if (oT) return `${oT[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: IT,
          os: iT
        } = TT.agent;
        if ("Safari" === IT.name && IT.version) return `${IT.version} (Safari's version, which follows iOS)`;
        const zT = iT.version;
        if ("iOS" !== iT.name || !zT) return "? (a desktop user agent)";
        const [kT, WT = 0] = zT.split(".").map(Number);
        return kT < 18 || 18 === kT && WT < 6 ? `${zT} (user agent)` : `? (the user agent says ${zT}, frozen from iOS 26)`
      }(TT);
      const oT = TT.hintsPlatformVersion;
      if (oT) return "windows" === TT.os ? `${oT} (${function(TT){const oT=parseInt(TT,10);if(oT>=13)return"Windows 11";return oT>=1?"Windows 10":"Windows 8.1 or older"}(oT)}, client hints)` : `${oT} (client hints)`;
      const IT = TT.agent.os.version;
      return IT ? BT.has(IT) ? `${IT} (user agent, which may be frozen)` : `${IT} (user agent)` : "?"
    }

    function ST(TT) {
      var oT;
      const IT = (null !== (oT = TT.fullVersionList) && void 0 !== oT ? oT : []).filter((TT => {
        let {
          brand: oT
        } = TT;
        return !/not.a.brand/i.test(oT)
      })).map((TT => {
        let {
          brand: oT,
          version: IT
        } = TT;
        return `${oT} ${IT}`
      }));
      return `${TT.platform} ${TT.platformVersion||"?"}, ${IT.join(", ")||"?"}, ${TT.architecture||"?"} ${TT.bitness||"?"}-bit, model ${TT.model||"?"}, mobile ${TT.mobile}`
    }
    let DT = "pending";
    const LT = navigator.userAgentData;

    function xT() {
      const TT = (0, WT.m)(),
        oT = null !== TT && void 0 !== TT ? TT : (0, WT.h)(),
        IT = (0, WT.f)();
      return [oT ? `webgl ${oT.vendor} / ${oT.renderer} (${TT?"the renderer's context":"a probe"})` : "webgl ?", IT ? `webgpu adapter ${IT.vendor||"?"}/${IT.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function cT() {
      var TT, oT, IT, WT, BT, LT;
      const cT = (0, zT.getUserAgentDetails)(),
        KT = (0, zT.getOperatingSystem)(),
        MT = FT({
          os: KT,
          userAgent: navigator.userAgent,
          agent: cT,
          appIosVersion: XT.e,
          hintsPlatformVersion: "string" === typeof DT ? void 0 : DT.platformVersion
        }),
        rT = (0, iT.k)(navigator.platform, navigator.maxTouchPoints, kT.p);
      return [`os ${KT} ${MT}; user agent's ${null!==(TT=cT.os.name)&&void 0!==TT?TT:"?"} ${null!==(oT=cT.os.version)&&void 0!==oT?oT:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,zT.getPlatformType)()}`, `browser ${null!==(IT=cT.browser.name)&&void 0!==IT?IT:"?"} ${null!==(WT=cT.browser.version)&&void 0!==WT?WT:"?"}, engine ${null!==(BT=cT.engine.name)&&void 0!==BT?BT:"?"} ${null!==(LT=cT.engine.version)&&void 0!==LT?LT:"?"}`, `client hints ${"string"===typeof DT?DT:ST(DT)}`, `gpu ${xT()}`, `client ${iT.n.client} (${iT.n.reason})`, `surface site ${kT.p}, subsite ${kT.w}${kT.i?", iframed":""}, capped surface ${null!==rT&&void 0!==rT?rT:"none"}`]
    }
    void 0 === LT ? DT = "none (the browser has none)" : LT.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((TT => {
      DT = TT
    }), (TT => {
      DT = `failed (${String(TT)})`
    }))
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);