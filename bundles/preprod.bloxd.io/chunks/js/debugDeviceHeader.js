export const id = 34;
export const ids = [34];
export const modules = {
  34844: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      clientHintsRead: () => uH,
      debugDeviceLines: () => WH
    });
    var AH = LH(642),
      rH = LH(81),
      SH = LH(120),
      hH = LH(114),
      tH = LH(3622),
      zH = LH(686);
    const CH = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function EH(HH) {
      if ("ios" === HH.os) return function(HH) {
        if (null !== HH.appIosVersion) return `${HH.appIosVersion} (the iOS app's)`;
        const BH = (0, zH.d)(HH.userAgent);
        if (null !== BH) return `${BH} (the in-app browser's iOS token)`;
        const {
          browser: LH,
          os: AH
        } = HH.agent;
        if ("Safari" === LH.name && LH.version) return `${LH.version} (Safari's version, which follows iOS)`;
        const rH = AH.version;
        if ("iOS" !== AH.name || !rH) return "? (a desktop user agent)";
        const [SH, hH = 0] = rH.split(".").map(Number);
        return SH < 18 || 18 === SH && hH < 6 ? `${rH} (user agent)` : `? (the user agent says ${rH}, frozen from iOS 26)`
      }(HH);
      const BH = HH.hintsPlatformVersion;
      if (BH) return "windows" === HH.os ? `${BH} (${function(HH){const BH=parseInt(HH,10);if(BH>=13)return"Windows 11";return BH>=1?"Windows 10":"Windows 8.1 or older"}(BH)}, client hints)` : `${BH} (client hints)`;
      const LH = HH.agent.os.version;
      return LH ? CH.has(LH) ? `${LH} (user agent, which may be frozen)` : `${LH} (user agent)` : "?"
    }

    function XH(HH) {
      var BH;
      const LH = (null !== (BH = HH.fullVersionList) && void 0 !== BH ? BH : []).filter((HH => {
        let {
          brand: BH
        } = HH;
        return !/not.a.brand/i.test(BH)
      })).map((HH => {
        let {
          brand: BH,
          version: LH
        } = HH;
        return `${BH} ${LH}`
      }));
      return `${HH.platform} ${HH.platformVersion||"?"}, ${LH.join(", ")||"?"}, ${HH.architecture||"?"} ${HH.bitness||"?"}-bit, model ${HH.model||"?"}, mobile ${HH.mobile}`
    }
    let GH = "pending";
    const YH = navigator.userAgentData;
    void 0 === YH && (GH = "none (the browser has none)");
    const uH = void 0 === YH ? Promise.resolve() : YH.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((HH => {
      GH = HH
    }), (HH => {
      GH = `failed (${String(HH)})`
    }));

    function QH() {
      const HH = (0, hH.z)(),
        BH = null !== HH && void 0 !== HH ? HH : (0, hH.l)(),
        LH = (0, hH.i)();
      return [BH ? `webgl ${BH.vendor} / ${BH.renderer} (${HH?"the renderer's context":"a probe"})` : "webgl ?", LH ? `webgpu adapter ${LH.vendor||"?"}/${LH.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function WH() {
      var HH, BH, LH, hH, zH, CH;
      const YH = (0, rH.getUserAgentDetails)(),
        uH = (0, rH.getOperatingSystem)(),
        WH = EH({
          os: uH,
          userAgent: navigator.userAgent,
          agent: YH,
          appIosVersion: tH.i,
          hintsPlatformVersion: "string" === typeof GH ? void 0 : GH.platformVersion
        }),
        MH = (0, AH.n)(navigator.platform, navigator.maxTouchPoints, SH.siteUsed, (0, rH.getWebGpuSupported)());
      return [`os ${uH} ${WH}; user agent's ${null!==(HH=YH.os.name)&&void 0!==HH?HH:"?"} ${null!==(BH=YH.os.version)&&void 0!==BH?BH:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,rH.getPlatformType)()}`, `browser ${null!==(LH=YH.browser.name)&&void 0!==LH?LH:"?"} ${null!==(hH=YH.browser.version)&&void 0!==hH?hH:"?"}, engine ${null!==(zH=YH.engine.name)&&void 0!==zH?zH:"?"} ${null!==(CH=YH.engine.version)&&void 0!==CH?CH:"?"}`, `client hints ${"string"===typeof GH?GH:XH(GH)}`, `gpu ${QH()}`, `client ${AH.A.client} (${AH.A.reason})`, `surface site ${SH.siteUsed}, subsite ${SH.subsiteUsed}${SH.isIframed?", iframed":""}, capped surface ${null!==MH&&void 0!==MH?MH:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);