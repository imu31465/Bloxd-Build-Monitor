export const id = 29;
export const ids = [29];
export const modules = {
  8955: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      debugDeviceLines: () => Xb
    });
    var Bb = hb(599),
      Ob = hb(86),
      Gb = hb(115),
      Ub = hb(113),
      Lb = hb(4137);
    const Yb = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function Sb(bb) {
      if ("ios" === bb.os) return function(bb) {
        if (null !== bb.appIosVersion) return `${bb.appIosVersion} (the iOS app's)`;
        const ub = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(bb.userAgent);
        if (ub) return `${ub[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: hb,
          os: Bb
        } = bb.agent;
        if ("Safari" === hb.name && hb.version) return `${hb.version} (Safari's version, which follows iOS)`;
        const Ob = Bb.version;
        if ("iOS" !== Bb.name || !Ob) return "? (a desktop user agent)";
        const [Gb, Ub = 0] = Ob.split(".").map(Number);
        return Gb < 18 || 18 === Gb && Ub < 6 ? `${Ob} (user agent)` : `? (the user agent says ${Ob}, frozen from iOS 26)`
      }(bb);
      const ub = bb.hintsPlatformVersion;
      if (ub) return "windows" === bb.os ? `${ub} (${function(bb){const ub=parseInt(bb,10);if(ub>=13)return"Windows 11";return ub>=1?"Windows 10":"Windows 8.1 or older"}(ub)}, client hints)` : `${ub} (client hints)`;
      const hb = bb.agent.os.version;
      return hb ? Yb.has(hb) ? `${hb} (user agent, which may be frozen)` : `${hb} (user agent)` : "?"
    }

    function ab(bb) {
      var ub;
      const hb = (null !== (ub = bb.fullVersionList) && void 0 !== ub ? ub : []).filter((bb => {
        let {
          brand: ub
        } = bb;
        return !/not.a.brand/i.test(ub)
      })).map((bb => {
        let {
          brand: ub,
          version: hb
        } = bb;
        return `${ub} ${hb}`
      }));
      return `${bb.platform} ${bb.platformVersion||"?"}, ${hb.join(", ")||"?"}, ${bb.architecture||"?"} ${bb.bitness||"?"}-bit, model ${bb.model||"?"}, mobile ${bb.mobile}`
    }
    let Hb = "pending";
    const wb = navigator.userAgentData;

    function Zb() {
      const bb = (0, Ub.o)(),
        ub = null !== bb && void 0 !== bb ? bb : (0, Ub.j)(),
        hb = (0, Ub.h)();
      return [ub ? `webgl ${ub.vendor} / ${ub.renderer} (${bb?"the renderer's context":"a probe"})` : "webgl ?", hb ? `webgpu adapter ${hb.vendor||"?"}/${hb.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Xb() {
      var bb, ub, hb, Ub, Yb, wb;
      const Xb = (0, Ob.getUserAgentDetails)(),
        pb = (0, Ob.getOperatingSystem)(),
        ob = Sb({
          os: pb,
          userAgent: navigator.userAgent,
          agent: Xb,
          appIosVersion: Lb.f,
          hintsPlatformVersion: "string" === typeof Hb ? void 0 : Hb.platformVersion
        }),
        Ab = (0, Bb.e)(navigator.platform, navigator.maxTouchPoints, Gb.s);
      return [`os ${pb} ${ob}; user agent's ${null!==(bb=Xb.os.name)&&void 0!==bb?bb:"?"} ${null!==(ub=Xb.os.version)&&void 0!==ub?ub:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,Ob.getPlatformType)()}`, `browser ${null!==(hb=Xb.browser.name)&&void 0!==hb?hb:"?"} ${null!==(Ub=Xb.browser.version)&&void 0!==Ub?Ub:"?"}, engine ${null!==(Yb=Xb.engine.name)&&void 0!==Yb?Yb:"?"} ${null!==(wb=Xb.engine.version)&&void 0!==wb?wb:"?"}`, `client hints ${"string"===typeof Hb?Hb:ab(Hb)}`, `gpu ${Zb()}`, `client ${Bb.f.client} (${Bb.f.reason})`, `surface site ${Gb.s}, subsite ${Gb.A}${Gb.i?", iframed":""}, capped surface ${null!==Ab&&void 0!==Ab?Ab:"none"}`]
    }
    void 0 === wb ? Hb = "none (the browser has none)" : wb.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((bb => {
      Hb = bb
    }), (bb => {
      Hb = `failed (${String(bb)})`
    }))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);