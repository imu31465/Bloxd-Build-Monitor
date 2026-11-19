export const id = 29;
export const ids = [29];
export const modules = {
  8637: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      debugDeviceLines: () => yY
    });
    var FY = DY(649),
      AY = DY(99),
      IY = DY(144),
      RY = DY(138),
      OY = DY(3937);
    const gY = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function aY(YY) {
      if ("ios" === YY.os) return function(YY) {
        if (null !== YY.appIosVersion) return `${YY.appIosVersion} (the iOS app's)`;
        const rY = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(YY.userAgent);
        if (rY) return `${rY[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: DY,
          os: FY
        } = YY.agent;
        if ("Safari" === DY.name && DY.version) return `${DY.version} (Safari's version, which follows iOS)`;
        const AY = FY.version;
        if ("iOS" !== FY.name || !AY) return "? (a desktop user agent)";
        const [IY, RY = 0] = AY.split(".").map(Number);
        return IY < 18 || 18 === IY && RY < 6 ? `${AY} (user agent)` : `? (the user agent says ${AY}, frozen from iOS 26)`
      }(YY);
      const rY = YY.hintsPlatformVersion;
      if (rY) return "windows" === YY.os ? `${rY} (${function(YY){const rY=parseInt(YY,10);if(rY>=13)return"Windows 11";return rY>=1?"Windows 10":"Windows 8.1 or older"}(rY)}, client hints)` : `${rY} (client hints)`;
      const DY = YY.agent.os.version;
      return DY ? gY.has(DY) ? `${DY} (user agent, which may be frozen)` : `${DY} (user agent)` : "?"
    }

    function vY(YY) {
      var rY;
      const DY = (null !== (rY = YY.fullVersionList) && void 0 !== rY ? rY : []).filter((YY => {
        let {
          brand: rY
        } = YY;
        return !/not.a.brand/i.test(rY)
      })).map((YY => {
        let {
          brand: rY,
          version: DY
        } = YY;
        return `${rY} ${DY}`
      }));
      return `${YY.platform} ${YY.platformVersion||"?"}, ${DY.join(", ")||"?"}, ${YY.architecture||"?"} ${YY.bitness||"?"}-bit, model ${YY.model||"?"}, mobile ${YY.mobile}`
    }
    let uY = "pending";
    const sY = navigator.userAgentData;

    function iY() {
      const YY = (0, RY.q)(),
        rY = null !== YY && void 0 !== YY ? YY : (0, RY.m)(),
        DY = (0, RY.i)();
      return [rY ? `webgl ${rY.vendor} / ${rY.renderer} (${YY?"the renderer's context":"a probe"})` : "webgl ?", DY ? `webgpu adapter ${DY.vendor||"?"}/${DY.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function yY() {
      var YY, rY, DY, RY, gY, sY;
      const yY = (0, AY.getUserAgentDetails)(),
        QY = (0, AY.getOperatingSystem)(),
        oY = aY({
          os: QY,
          userAgent: navigator.userAgent,
          agent: yY,
          appIosVersion: OY.e,
          hintsPlatformVersion: "string" === typeof uY ? void 0 : uY.platformVersion
        }),
        WY = (0, FY.h)(navigator.platform, navigator.maxTouchPoints, IY.s);
      return [`os ${QY} ${oY}; user agent's ${null!==(YY=yY.os.name)&&void 0!==YY?YY:"?"} ${null!==(rY=yY.os.version)&&void 0!==rY?rY:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,AY.getPlatformType)()}`, `browser ${null!==(DY=yY.browser.name)&&void 0!==DY?DY:"?"} ${null!==(RY=yY.browser.version)&&void 0!==RY?RY:"?"}, engine ${null!==(gY=yY.engine.name)&&void 0!==gY?gY:"?"} ${null!==(sY=yY.engine.version)&&void 0!==sY?sY:"?"}`, `client hints ${"string"===typeof uY?uY:vY(uY)}`, `gpu ${iY()}`, `client ${FY.i.client} (${FY.i.reason})`, `surface site ${IY.s}, subsite ${IY.C}${IY.f?", iframed":""}, capped surface ${null!==WY&&void 0!==WY?WY:"none"}`]
    }
    void 0 === sY ? uY = "none (the browser has none)" : sY.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((YY => {
      uY = YY
    }), (YY => {
      uY = `failed (${String(YY)})`
    }))
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);