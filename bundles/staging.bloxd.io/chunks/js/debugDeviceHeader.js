export const id = 29;
export const ids = [29];
export const modules = {
  9150: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      debugDeviceLines: () => aq
    });
    var Yq = gq(611),
      lq = gq(96),
      Oq = gq(136),
      mq = gq(128),
      xq = gq(4212);
    const Aq = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function cq(qq) {
      if ("ios" === qq.os) return function(qq) {
        if (null !== qq.appIosVersion) return `${qq.appIosVersion} (the iOS app's)`;
        const Eq = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(qq.userAgent);
        if (Eq) return `${Eq[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: gq,
          os: Yq
        } = qq.agent;
        if ("Safari" === gq.name && gq.version) return `${gq.version} (Safari's version, which follows iOS)`;
        const lq = Yq.version;
        if ("iOS" !== Yq.name || !lq) return "? (a desktop user agent)";
        const [Oq, mq = 0] = lq.split(".").map(Number);
        return Oq < 18 || 18 === Oq && mq < 6 ? `${lq} (user agent)` : `? (the user agent says ${lq}, frozen from iOS 26)`
      }(qq);
      const Eq = qq.hintsPlatformVersion;
      if (Eq) return "windows" === qq.os ? `${Eq} (${function(qq){const Eq=parseInt(qq,10);if(Eq>=13)return"Windows 11";return Eq>=1?"Windows 10":"Windows 8.1 or older"}(Eq)}, client hints)` : `${Eq} (client hints)`;
      const gq = qq.agent.os.version;
      return gq ? Aq.has(gq) ? `${gq} (user agent, which may be frozen)` : `${gq} (user agent)` : "?"
    }

    function uq(qq) {
      var Eq;
      const gq = (null !== (Eq = qq.fullVersionList) && void 0 !== Eq ? Eq : []).filter((qq => {
        let {
          brand: Eq
        } = qq;
        return !/not.a.brand/i.test(Eq)
      })).map((qq => {
        let {
          brand: Eq,
          version: gq
        } = qq;
        return `${Eq} ${gq}`
      }));
      return `${qq.platform} ${qq.platformVersion||"?"}, ${gq.join(", ")||"?"}, ${qq.architecture||"?"} ${qq.bitness||"?"}-bit, model ${qq.model||"?"}, mobile ${qq.mobile}`
    }
    let Bq = "pending";
    const Wq = navigator.userAgentData;

    function Nq() {
      const qq = (0, mq.t)(),
        Eq = null !== qq && void 0 !== qq ? qq : (0, mq.n)(),
        gq = (0, mq.j)();
      return [Eq ? `webgl ${Eq.vendor} / ${Eq.renderer} (${qq?"the renderer's context":"a probe"})` : "webgl ?", gq ? `webgpu adapter ${gq.vendor||"?"}/${gq.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function aq() {
      var qq, Eq, gq, mq, Aq, Wq;
      const aq = (0, lq.getUserAgentDetails)(),
        Vq = (0, lq.getOperatingSystem)(),
        dq = cq({
          os: Vq,
          userAgent: navigator.userAgent,
          agent: aq,
          appIosVersion: xq.c,
          hintsPlatformVersion: "string" === typeof Bq ? void 0 : Bq.platformVersion
        }),
        jq = (0, Yq.h)(navigator.platform, navigator.maxTouchPoints, Oq.n);
      return [`os ${Vq} ${dq}; user agent's ${null!==(qq=aq.os.name)&&void 0!==qq?qq:"?"} ${null!==(Eq=aq.os.version)&&void 0!==Eq?Eq:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,lq.getPlatformType)()}`, `browser ${null!==(gq=aq.browser.name)&&void 0!==gq?gq:"?"} ${null!==(mq=aq.browser.version)&&void 0!==mq?mq:"?"}, engine ${null!==(Aq=aq.engine.name)&&void 0!==Aq?Aq:"?"} ${null!==(Wq=aq.engine.version)&&void 0!==Wq?Wq:"?"}`, `client hints ${"string"===typeof Bq?Bq:uq(Bq)}`, `gpu ${Nq()}`, `client ${Yq.k.client} (${Yq.k.reason})`, `surface site ${Oq.n}, subsite ${Oq.q}${Oq.g?", iframed":""}, capped surface ${null!==jq&&void 0!==jq?jq:"none"}`]
    }
    void 0 === Wq ? Bq = "none (the browser has none)" : Wq.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((qq => {
      Bq = qq
    }), (qq => {
      Bq = `failed (${String(qq)})`
    }))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);