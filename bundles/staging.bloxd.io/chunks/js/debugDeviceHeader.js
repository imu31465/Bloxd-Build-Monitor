export const id = 35;
export const ids = [35];
export const modules = {
  35407: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      clientHintsRead: () => qd,
      debugDeviceLines: () => yd
    });
    var Wd = md(732),
      Fd = md(107),
      Rd = md(151),
      Xd = md(145),
      Kd = md(4485),
      hd = md(788);
    const vd = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Qd(dd) {
      if ("ios" === dd.os) return function(dd) {
        if (null !== dd.appIosVersion) return `${dd.appIosVersion} (the iOS app's)`;
        const Od = (0, hd.e)(dd.userAgent);
        if (null !== Od) return `${Od} (the in-app browser's iOS token)`;
        const {
          browser: md,
          os: Wd
        } = dd.agent;
        if ("Safari" === md.name && md.version) return `${md.version} (Safari's version, which follows iOS)`;
        const Fd = Wd.version;
        if ("iOS" !== Wd.name || !Fd) return "? (a desktop user agent)";
        const [Rd, Xd = 0] = Fd.split(".").map(Number);
        return Rd < 18 || 18 === Rd && Xd < 6 ? `${Fd} (user agent)` : `? (the user agent says ${Fd}, frozen from iOS 26)`
      }(dd);
      const Od = dd.hintsPlatformVersion;
      if (Od) return "windows" === dd.os ? `${Od} (${function(dd){const Od=parseInt(dd,10);if(Od>=13)return"Windows 11";return Od>=1?"Windows 10":"Windows 8.1 or older"}(Od)}, client hints)` : `${Od} (client hints)`;
      const md = dd.agent.os.version;
      return md ? vd.has(md) ? `${md} (user agent, which may be frozen)` : `${md} (user agent)` : "?"
    }

    function td(dd) {
      var Od;
      const md = (null !== (Od = dd.fullVersionList) && void 0 !== Od ? Od : []).filter((dd => {
        let {
          brand: Od
        } = dd;
        return !/not.a.brand/i.test(Od)
      })).map((dd => {
        let {
          brand: Od,
          version: md
        } = dd;
        return `${Od} ${md}`
      }));
      return `${dd.platform} ${dd.platformVersion||"?"}, ${md.join(", ")||"?"}, ${dd.architecture||"?"} ${dd.bitness||"?"}-bit, model ${dd.model||"?"}, mobile ${dd.mobile}`
    }
    let od = "pending";
    const Nd = navigator.userAgentData;
    void 0 === Nd && (od = "none (the browser has none)");
    const qd = void 0 === Nd ? Promise.resolve() : Nd.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((dd => {
      od = dd
    }), (dd => {
      od = `failed (${String(dd)})`
    }));

    function Hd() {
      const dd = (0, Xd.y)(),
        Od = null !== dd && void 0 !== dd ? dd : (0, Xd.p)(),
        md = (0, Xd.l)();
      return [Od ? `webgl ${Od.vendor} / ${Od.renderer} (${dd?"the renderer's context":"a probe"})` : "webgl ?", md ? `webgpu adapter ${md.vendor||"?"}/${md.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function yd() {
      var dd, Od, md, Xd, hd, vd;
      const Nd = (0, Fd.getUserAgentDetails)(),
        qd = (0, Fd.getOperatingSystem)(),
        yd = Qd({
          os: qd,
          userAgent: navigator.userAgent,
          agent: Nd,
          appIosVersion: Kd.h,
          hintsPlatformVersion: "string" === typeof od ? void 0 : od.platformVersion
        }),
        bd = (0, Wd.k)(navigator.platform, navigator.maxTouchPoints, Rd.siteUsed, (0, Fd.getWebGpuSupported)());
      return [`os ${qd} ${yd}; user agent's ${null!==(dd=Nd.os.name)&&void 0!==dd?dd:"?"} ${null!==(Od=Nd.os.version)&&void 0!==Od?Od:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Fd.getPlatformType)()}`, `browser ${null!==(md=Nd.browser.name)&&void 0!==md?md:"?"} ${null!==(Xd=Nd.browser.version)&&void 0!==Xd?Xd:"?"}, engine ${null!==(hd=Nd.engine.name)&&void 0!==hd?hd:"?"} ${null!==(vd=Nd.engine.version)&&void 0!==vd?vd:"?"}`, `client hints ${"string"===typeof od?od:td(od)}`, `gpu ${Hd()}`, `client ${Wd.y.client} (${Wd.y.reason})`, `surface site ${Rd.siteUsed}, subsite ${Rd.subsiteUsed}${Rd.isIframed?", iframed":""}, capped surface ${null!==bd&&void 0!==bd?bd:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);