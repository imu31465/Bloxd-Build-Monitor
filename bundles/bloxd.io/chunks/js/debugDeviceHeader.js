export const id = 34;
export const ids = [34];
export const modules = {
  34738: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      clientHintsRead: () => fe,
      debugDeviceLines: () => pe
    });
    var ye = He(645),
      be = He(97),
      Me = He(125),
      Ke = He(123),
      Ue = He(3586),
      Fe = He(691);
    const Je = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function oe(ee) {
      if ("ios" === ee.os) return function(ee) {
        if (null !== ee.appIosVersion) return `${ee.appIosVersion} (the iOS app's)`;
        const ie = (0, Fe.b)(ee.userAgent);
        if (null !== ie) return `${ie} (the in-app browser's iOS token)`;
        const {
          browser: He,
          os: ye
        } = ee.agent;
        if ("Safari" === He.name && He.version) return `${He.version} (Safari's version, which follows iOS)`;
        const be = ye.version;
        if ("iOS" !== ye.name || !be) return "? (a desktop user agent)";
        const [Me, Ke = 0] = be.split(".").map(Number);
        return Me < 18 || 18 === Me && Ke < 6 ? `${be} (user agent)` : `? (the user agent says ${be}, frozen from iOS 26)`
      }(ee);
      const ie = ee.hintsPlatformVersion;
      if (ie) return "windows" === ee.os ? `${ie} (${function(ee){const ie=parseInt(ee,10);if(ie>=13)return"Windows 11";return ie>=1?"Windows 10":"Windows 8.1 or older"}(ie)}, client hints)` : `${ie} (client hints)`;
      const He = ee.agent.os.version;
      return He ? Je.has(He) ? `${He} (user agent, which may be frozen)` : `${He} (user agent)` : "?"
    }

    function Re(ee) {
      var ie;
      const He = (null !== (ie = ee.fullVersionList) && void 0 !== ie ? ie : []).filter((ee => {
        let {
          brand: ie
        } = ee;
        return !/not.a.brand/i.test(ie)
      })).map((ee => {
        let {
          brand: ie,
          version: He
        } = ee;
        return `${ie} ${He}`
      }));
      return `${ee.platform} ${ee.platformVersion||"?"}, ${He.join(", ")||"?"}, ${ee.architecture||"?"} ${ee.bitness||"?"}-bit, model ${ee.model||"?"}, mobile ${ee.mobile}`
    }
    let ke = "pending";
    const qe = navigator.userAgentData;
    void 0 === qe && (ke = "none (the browser has none)");
    const fe = void 0 === qe ? Promise.resolve() : qe.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((ee => {
      ke = ee
    }), (ee => {
      ke = `failed (${String(ee)})`
    }));

    function Te() {
      const ee = (0, Ke.D)(),
        ie = null !== ee && void 0 !== ee ? ee : (0, Ke.p)(),
        He = (0, Ke.n)();
      return [ie ? `webgl ${ie.vendor} / ${ie.renderer} (${ee?"the renderer's context":"a probe"})` : "webgl ?", He ? `webgpu adapter ${He.vendor||"?"}/${He.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function pe() {
      var ee, ie, He, Ke, Fe, Je;
      const qe = (0, be.getUserAgentDetails)(),
        fe = (0, be.getOperatingSystem)(),
        pe = oe({
          os: fe,
          userAgent: navigator.userAgent,
          agent: qe,
          appIosVersion: Ue.f,
          hintsPlatformVersion: "string" === typeof ke ? void 0 : ke.platformVersion
        }),
        Xe = (0, ye.p)(navigator.platform, navigator.maxTouchPoints, Me.siteUsed, (0, be.getWebGpuSupported)());
      return [`os ${fe} ${pe}; user agent's ${null!==(ee=qe.os.name)&&void 0!==ee?ee:"?"} ${null!==(ie=qe.os.version)&&void 0!==ie?ie:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,be.getPlatformType)()}`, `browser ${null!==(He=qe.browser.name)&&void 0!==He?He:"?"} ${null!==(Ke=qe.browser.version)&&void 0!==Ke?Ke:"?"}, engine ${null!==(Fe=qe.engine.name)&&void 0!==Fe?Fe:"?"} ${null!==(Je=qe.engine.version)&&void 0!==Je?Je:"?"}`, `client hints ${"string"===typeof ke?ke:Re(ke)}`, `gpu ${Te()}`, `client ${ye.y.client} (${ye.y.reason})`, `surface site ${Me.siteUsed}, subsite ${Me.subsiteUsed}${Me.isIframed?", iframed":""}, capped surface ${null!==Xe&&void 0!==Xe?Xe:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);