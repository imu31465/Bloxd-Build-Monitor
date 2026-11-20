export const id = 29;
export const ids = [29];
export const modules = {
  8931: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      debugDeviceLines: () => Su
    });
    var Eu = yu(624),
      Ku = yu(106),
      Qu = yu(145),
      mu = yu(143),
      Ju = yu(4159);
    const Nu = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Xu(uu) {
      if ("ios" === uu.os) return function(uu) {
        if (null !== uu.appIosVersion) return `${uu.appIosVersion} (the iOS app's)`;
        const Ru = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(uu.userAgent);
        if (Ru) return `${Ru[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: yu,
          os: Eu
        } = uu.agent;
        if ("Safari" === yu.name && yu.version) return `${yu.version} (Safari's version, which follows iOS)`;
        const Ku = Eu.version;
        if ("iOS" !== Eu.name || !Ku) return "? (a desktop user agent)";
        const [Qu, mu = 0] = Ku.split(".").map(Number);
        return Qu < 18 || 18 === Qu && mu < 6 ? `${Ku} (user agent)` : `? (the user agent says ${Ku}, frozen from iOS 26)`
      }(uu);
      const Ru = uu.hintsPlatformVersion;
      if (Ru) return "windows" === uu.os ? `${Ru} (${function(uu){const Ru=parseInt(uu,10);if(Ru>=13)return"Windows 11";return Ru>=1?"Windows 10":"Windows 8.1 or older"}(Ru)}, client hints)` : `${Ru} (client hints)`;
      const yu = uu.agent.os.version;
      return yu ? Nu.has(yu) ? `${yu} (user agent, which may be frozen)` : `${yu} (user agent)` : "?"
    }

    function Vu(uu) {
      var Ru;
      const yu = (null !== (Ru = uu.fullVersionList) && void 0 !== Ru ? Ru : []).filter((uu => {
        let {
          brand: Ru
        } = uu;
        return !/not.a.brand/i.test(Ru)
      })).map((uu => {
        let {
          brand: Ru,
          version: yu
        } = uu;
        return `${Ru} ${yu}`
      }));
      return `${uu.platform} ${uu.platformVersion||"?"}, ${yu.join(", ")||"?"}, ${uu.architecture||"?"} ${uu.bitness||"?"}-bit, model ${uu.model||"?"}, mobile ${uu.mobile}`
    }
    let ru = "pending";
    const Bu = navigator.userAgentData;

    function xu() {
      const uu = (0, mu.j)(),
        Ru = null !== uu && void 0 !== uu ? uu : (0, mu.g)(),
        yu = (0, mu.d)();
      return [Ru ? `webgl ${Ru.vendor} / ${Ru.renderer} (${uu?"the renderer's context":"a probe"})` : "webgl ?", yu ? `webgpu adapter ${yu.vendor||"?"}/${yu.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Su() {
      var uu, Ru, yu, mu, Nu, Bu;
      const Su = (0, Ku.getUserAgentDetails)(),
        pu = (0, Ku.getOperatingSystem)(),
        Tu = Xu({
          os: pu,
          userAgent: navigator.userAgent,
          agent: Su,
          appIosVersion: Ju.h,
          hintsPlatformVersion: "string" === typeof ru ? void 0 : ru.platformVersion
        }),
        Wu = (0, Eu.g)(navigator.platform, navigator.maxTouchPoints, Qu.v);
      return [`os ${pu} ${Tu}; user agent's ${null!==(uu=Su.os.name)&&void 0!==uu?uu:"?"} ${null!==(Ru=Su.os.version)&&void 0!==Ru?Ru:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Ku.getPlatformType)()}`, `browser ${null!==(yu=Su.browser.name)&&void 0!==yu?yu:"?"} ${null!==(mu=Su.browser.version)&&void 0!==mu?mu:"?"}, engine ${null!==(Nu=Su.engine.name)&&void 0!==Nu?Nu:"?"} ${null!==(Bu=Su.engine.version)&&void 0!==Bu?Bu:"?"}`, `client hints ${"string"===typeof ru?ru:Vu(ru)}`, `gpu ${xu()}`, `client ${Eu.i.client} (${Eu.i.reason})`, `surface site ${Qu.v}, subsite ${Qu.C}${Qu.j?", iframed":""}, capped surface ${null!==Wu&&void 0!==Wu?Wu:"none"}`]
    }
    void 0 === Bu ? ru = "none (the browser has none)" : Bu.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((uu => {
      ru = uu
    }), (uu => {
      ru = `failed (${String(uu)})`
    }))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);