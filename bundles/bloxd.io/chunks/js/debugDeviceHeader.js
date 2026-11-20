export const id = 29;
export const ids = [29];
export const modules = {
  8874: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      debugDeviceLines: () => av
    });
    var hv = Pv(635),
      Sv = Pv(73),
      ev = Pv(108),
      gv = Pv(101),
      pv = Pv(4142);
    const dv = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Nv(vv) {
      if ("ios" === vv.os) return function(vv) {
        if (null !== vv.appIosVersion) return `${vv.appIosVersion} (the iOS app's)`;
        const zv = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(vv.userAgent);
        if (zv) return `${zv[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: Pv,
          os: hv
        } = vv.agent;
        if ("Safari" === Pv.name && Pv.version) return `${Pv.version} (Safari's version, which follows iOS)`;
        const Sv = hv.version;
        if ("iOS" !== hv.name || !Sv) return "? (a desktop user agent)";
        const [ev, gv = 0] = Sv.split(".").map(Number);
        return ev < 18 || 18 === ev && gv < 6 ? `${Sv} (user agent)` : `? (the user agent says ${Sv}, frozen from iOS 26)`
      }(vv);
      const zv = vv.hintsPlatformVersion;
      if (zv) return "windows" === vv.os ? `${zv} (${function(vv){const zv=parseInt(vv,10);if(zv>=13)return"Windows 11";return zv>=1?"Windows 10":"Windows 8.1 or older"}(zv)}, client hints)` : `${zv} (client hints)`;
      const Pv = vv.agent.os.version;
      return Pv ? dv.has(Pv) ? `${Pv} (user agent, which may be frozen)` : `${Pv} (user agent)` : "?"
    }

    function lv(vv) {
      var zv;
      const Pv = (null !== (zv = vv.fullVersionList) && void 0 !== zv ? zv : []).filter((vv => {
        let {
          brand: zv
        } = vv;
        return !/not.a.brand/i.test(zv)
      })).map((vv => {
        let {
          brand: zv,
          version: Pv
        } = vv;
        return `${zv} ${Pv}`
      }));
      return `${vv.platform} ${vv.platformVersion||"?"}, ${Pv.join(", ")||"?"}, ${vv.architecture||"?"} ${vv.bitness||"?"}-bit, model ${vv.model||"?"}, mobile ${vv.mobile}`
    }
    let Tv = "pending";
    const Wv = navigator.userAgentData;

    function wv() {
      const vv = (0, gv.s)(),
        zv = null !== vv && void 0 !== vv ? vv : (0, gv.m)(),
        Pv = (0, gv.i)();
      return [zv ? `webgl ${zv.vendor} / ${zv.renderer} (${vv?"the renderer's context":"a probe"})` : "webgl ?", Pv ? `webgpu adapter ${Pv.vendor||"?"}/${Pv.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function av() {
      var vv, zv, Pv, gv, dv, Wv;
      const av = (0, Sv.getUserAgentDetails)(),
        sv = (0, Sv.getOperatingSystem)(),
        Cv = Nv({
          os: sv,
          userAgent: navigator.userAgent,
          agent: av,
          appIosVersion: pv.e,
          hintsPlatformVersion: "string" === typeof Tv ? void 0 : Tv.platformVersion
        }),
        iv = (0, hv.i)(navigator.platform, navigator.maxTouchPoints, ev.o);
      return [`os ${sv} ${Cv}; user agent's ${null!==(vv=av.os.name)&&void 0!==vv?vv:"?"} ${null!==(zv=av.os.version)&&void 0!==zv?zv:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Sv.getPlatformType)()}`, `browser ${null!==(Pv=av.browser.name)&&void 0!==Pv?Pv:"?"} ${null!==(gv=av.browser.version)&&void 0!==gv?gv:"?"}, engine ${null!==(dv=av.engine.name)&&void 0!==dv?dv:"?"} ${null!==(Wv=av.engine.version)&&void 0!==Wv?Wv:"?"}`, `client hints ${"string"===typeof Tv?Tv:lv(Tv)}`, `gpu ${wv()}`, `client ${hv.m.client} (${hv.m.reason})`, `surface site ${ev.o}, subsite ${ev.v}${ev.f?", iframed":""}, capped surface ${null!==iv&&void 0!==iv?iv:"none"}`]
    }
    void 0 === Wv ? Tv = "none (the browser has none)" : Wv.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((vv => {
      Tv = vv
    }), (vv => {
      Tv = `failed (${String(vv)})`
    }))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);