export const id = 29;
export const ids = [29];
export const modules = {
  34431: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      clientHintsRead: () => Nu,
      debugDeviceLines: () => Yu
    });
    var su = ju(680),
      Uu = ju(91),
      Zu = ju(131),
      Xu = ju(124),
      lu = ju(3446);
    const qu = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function fu(uu) {
      if ("ios" === uu.os) return function(uu) {
        if (null !== uu.appIosVersion) return `${uu.appIosVersion} (the iOS app's)`;
        const Eu = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(uu.userAgent);
        if (Eu) return `${Eu[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: ju,
          os: su
        } = uu.agent;
        if ("Safari" === ju.name && ju.version) return `${ju.version} (Safari's version, which follows iOS)`;
        const Uu = su.version;
        if ("iOS" !== su.name || !Uu) return "? (a desktop user agent)";
        const [Zu, Xu = 0] = Uu.split(".").map(Number);
        return Zu < 18 || 18 === Zu && Xu < 6 ? `${Uu} (user agent)` : `? (the user agent says ${Uu}, frozen from iOS 26)`
      }(uu);
      const Eu = uu.hintsPlatformVersion;
      if (Eu) return "windows" === uu.os ? `${Eu} (${function(uu){const Eu=parseInt(uu,10);if(Eu>=13)return"Windows 11";return Eu>=1?"Windows 10":"Windows 8.1 or older"}(Eu)}, client hints)` : `${Eu} (client hints)`;
      const ju = uu.agent.os.version;
      return ju ? qu.has(ju) ? `${ju} (user agent, which may be frozen)` : `${ju} (user agent)` : "?"
    }

    function Cu(uu) {
      var Eu;
      const ju = (null !== (Eu = uu.fullVersionList) && void 0 !== Eu ? Eu : []).filter((uu => {
        let {
          brand: Eu
        } = uu;
        return !/not.a.brand/i.test(Eu)
      })).map((uu => {
        let {
          brand: Eu,
          version: ju
        } = uu;
        return `${Eu} ${ju}`
      }));
      return `${uu.platform} ${uu.platformVersion||"?"}, ${ju.join(", ")||"?"}, ${uu.architecture||"?"} ${uu.bitness||"?"}-bit, model ${uu.model||"?"}, mobile ${uu.mobile}`
    }
    let bu = "pending";
    const cu = navigator.userAgentData;
    void 0 === cu && (bu = "none (the browser has none)");
    const Nu = void 0 === cu ? Promise.resolve() : cu.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((uu => {
      bu = uu
    }), (uu => {
      bu = `failed (${String(uu)})`
    }));

    function Ou() {
      const uu = (0, Xu.q)(),
        Eu = null !== uu && void 0 !== uu ? uu : (0, Xu.o)(),
        ju = (0, Xu.l)();
      return [Eu ? `webgl ${Eu.vendor} / ${Eu.renderer} (${uu?"the renderer's context":"a probe"})` : "webgl ?", ju ? `webgpu adapter ${ju.vendor||"?"}/${ju.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Yu() {
      var uu, Eu, ju, Xu, qu, cu;
      const Nu = (0, Uu.getUserAgentDetails)(),
        Yu = (0, Uu.getOperatingSystem)(),
        hu = fu({
          os: Yu,
          userAgent: navigator.userAgent,
          agent: Nu,
          appIosVersion: lu.e,
          hintsPlatformVersion: "string" === typeof bu ? void 0 : bu.platformVersion
        }),
        Du = (0, su.n)(navigator.platform, navigator.maxTouchPoints, Zu.siteUsed, (0, Uu.getWebGpuSupported)());
      return [`os ${Yu} ${hu}; user agent's ${null!==(uu=Nu.os.name)&&void 0!==uu?uu:"?"} ${null!==(Eu=Nu.os.version)&&void 0!==Eu?Eu:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Uu.getPlatformType)()}`, `browser ${null!==(ju=Nu.browser.name)&&void 0!==ju?ju:"?"} ${null!==(Xu=Nu.browser.version)&&void 0!==Xu?Xu:"?"}, engine ${null!==(qu=Nu.engine.name)&&void 0!==qu?qu:"?"} ${null!==(cu=Nu.engine.version)&&void 0!==cu?cu:"?"}`, `client hints ${"string"===typeof bu?bu:Cu(bu)}`, `gpu ${Ou()}`, `client ${su.r.client} (${su.r.reason})`, `surface site ${Zu.siteUsed}, subsite ${Zu.subsiteUsed}${Zu.isIframed?", iframed":""}, capped surface ${null!==Du&&void 0!==Du?Du:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);