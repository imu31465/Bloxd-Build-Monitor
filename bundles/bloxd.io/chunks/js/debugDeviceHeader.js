export const id = 35;
export const ids = [35];
export const modules = {
  35197: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      clientHintsRead: () => Cb,
      debugDeviceLines: () => Fb
    });
    var eb = Mb(698),
      Hb = Mb(110),
      pb = Mb(160),
      Vb = Mb(153),
      gb = Mb(4631),
      lb = Mb(759);
    const Lb = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Ib(bb) {
      if ("ios" === bb.os) return function(bb) {
        if (null !== bb.appIosVersion) return `${bb.appIosVersion} (the iOS app's)`;
        const wb = (0, lb.c)(bb.userAgent);
        if (null !== wb) return `${wb} (the in-app browser's iOS token)`;
        const {
          browser: Mb,
          os: eb
        } = bb.agent;
        if ("Safari" === Mb.name && Mb.version) return `${Mb.version} (Safari's version, which follows iOS)`;
        const Hb = eb.version;
        if ("iOS" !== eb.name || !Hb) return "? (a desktop user agent)";
        const [pb, Vb = 0] = Hb.split(".").map(Number);
        return pb < 18 || 18 === pb && Vb < 6 ? `${Hb} (user agent)` : `? (the user agent says ${Hb}, frozen from iOS 26)`
      }(bb);
      const wb = bb.hintsPlatformVersion;
      if (wb) return "windows" === bb.os ? `${wb} (${function(bb){const wb=parseInt(bb,10);if(wb>=13)return"Windows 11";return wb>=1?"Windows 10":"Windows 8.1 or older"}(wb)}, client hints)` : `${wb} (client hints)`;
      const Mb = bb.agent.os.version;
      return Mb ? Lb.has(Mb) ? `${Mb} (user agent, which may be frozen)` : `${Mb} (user agent)` : "?"
    }

    function Ob(bb) {
      var wb;
      const Mb = (null !== (wb = bb.fullVersionList) && void 0 !== wb ? wb : []).filter((bb => {
        let {
          brand: wb
        } = bb;
        return !/not.a.brand/i.test(wb)
      })).map((bb => {
        let {
          brand: wb,
          version: Mb
        } = bb;
        return `${wb} ${Mb}`
      }));
      return `${bb.platform} ${bb.platformVersion||"?"}, ${Mb.join(", ")||"?"}, ${bb.architecture||"?"} ${bb.bitness||"?"}-bit, model ${bb.model||"?"}, mobile ${bb.mobile}`
    }
    let Ub = "pending";
    const tb = navigator.userAgentData;
    void 0 === tb && (Ub = "none (the browser has none)");
    const Cb = void 0 === tb ? Promise.resolve() : tb.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((bb => {
      Ub = bb
    }), (bb => {
      Ub = `failed (${String(bb)})`
    }));

    function Eb() {
      const bb = (0, Vb.x)(),
        wb = null !== bb && void 0 !== bb ? bb : (0, Vb.n)(),
        Mb = (0, Vb.k)();
      return [wb ? `webgl ${wb.vendor} / ${wb.renderer} (${bb?"the renderer's context":"a probe"})` : "webgl ?", Mb ? `webgpu adapter ${Mb.vendor||"?"}/${Mb.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Fb() {
      var bb, wb, Mb, Vb, lb, Lb;
      const tb = (0, Hb.getUserAgentDetails)(),
        Cb = (0, Hb.getOperatingSystem)(),
        Fb = Ib({
          os: Cb,
          userAgent: navigator.userAgent,
          agent: tb,
          appIosVersion: gb.g,
          hintsPlatformVersion: "string" === typeof Ub ? void 0 : Ub.platformVersion
        }),
        Bb = (0, eb.p)(navigator.platform, navigator.maxTouchPoints, pb.siteUsed, (0, Hb.getWebGpuSupported)());
      return [`os ${Cb} ${Fb}; user agent's ${null!==(bb=tb.os.name)&&void 0!==bb?bb:"?"} ${null!==(wb=tb.os.version)&&void 0!==wb?wb:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Hb.getPlatformType)()}`, `browser ${null!==(Mb=tb.browser.name)&&void 0!==Mb?Mb:"?"} ${null!==(Vb=tb.browser.version)&&void 0!==Vb?Vb:"?"}, engine ${null!==(lb=tb.engine.name)&&void 0!==lb?lb:"?"} ${null!==(Lb=tb.engine.version)&&void 0!==Lb?Lb:"?"}`, `client hints ${"string"===typeof Ub?Ub:Ob(Ub)}`, `gpu ${Eb()}`, `client ${eb.A.client} (${eb.A.reason})`, `surface site ${pb.siteUsed}, subsite ${pb.subsiteUsed}${pb.isIframed?", iframed":""}, capped surface ${null!==Bb&&void 0!==Bb?Bb:"none"}`]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);