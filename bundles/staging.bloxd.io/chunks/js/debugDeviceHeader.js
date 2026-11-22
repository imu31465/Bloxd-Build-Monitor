export const id = 29;
export const ids = [29];
export const modules = {
  33653: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      debugDeviceLines: () => Uk
    });
    var Dk = ik(610),
      fk = ik(99),
      Sk = ik(131),
      bk = ik(129),
      rk = ik(3236);
    const Pk = new Set(["NT 10.0", "10", "10.15.7", "10.15"]);

    function mk(kk) {
      if ("ios" === kk.os) return function(kk) {
        if (null !== kk.appIosVersion) return `${kk.appIosVersion} (the iOS app's)`;
        const ek = /\b(?:iOS |FBSV\/)(\d+(?:[_.]\d+)*)/.exec(kk.userAgent);
        if (ek) return `${ek[1].replaceAll("_",".")} (the in-app browser's iOS token)`;
        const {
          browser: ik,
          os: Dk
        } = kk.agent;
        if ("Safari" === ik.name && ik.version) return `${ik.version} (Safari's version, which follows iOS)`;
        const fk = Dk.version;
        if ("iOS" !== Dk.name || !fk) return "? (a desktop user agent)";
        const [Sk, bk = 0] = fk.split(".").map(Number);
        return Sk < 18 || 18 === Sk && bk < 6 ? `${fk} (user agent)` : `? (the user agent says ${fk}, frozen from iOS 26)`
      }(kk);
      const ek = kk.hintsPlatformVersion;
      if (ek) return "windows" === kk.os ? `${ek} (${function(kk){const ek=parseInt(kk,10);if(ek>=13)return"Windows 11";return ek>=1?"Windows 10":"Windows 8.1 or older"}(ek)}, client hints)` : `${ek} (client hints)`;
      const ik = kk.agent.os.version;
      return ik ? Pk.has(ik) ? `${ik} (user agent, which may be frozen)` : `${ik} (user agent)` : "?"
    }

    function Mk(kk) {
      var ek;
      const ik = (null !== (ek = kk.fullVersionList) && void 0 !== ek ? ek : []).filter((kk => {
        let {
          brand: ek
        } = kk;
        return !/not.a.brand/i.test(ek)
      })).map((kk => {
        let {
          brand: ek,
          version: ik
        } = kk;
        return `${ek} ${ik}`
      }));
      return `${kk.platform} ${kk.platformVersion||"?"}, ${ik.join(", ")||"?"}, ${kk.architecture||"?"} ${kk.bitness||"?"}-bit, model ${kk.model||"?"}, mobile ${kk.mobile}`
    }
    let Kk = "pending";
    const xk = navigator.userAgentData;

    function nk() {
      const kk = (0, bk.p)(),
        ek = null !== kk && void 0 !== kk ? kk : (0, bk.k)(),
        ik = (0, bk.g)();
      return [ek ? `webgl ${ek.vendor} / ${ek.renderer} (${kk?"the renderer's context":"a probe"})` : "webgl ?", ik ? `webgpu adapter ${ik.vendor||"?"}/${ik.architecture||"?"}` : "webgpu adapter ?"].join("; ")
    }

    function Uk() {
      var kk, ek, ik, bk, Pk, xk;
      const Uk = (0, fk.getUserAgentDetails)(),
        Hk = (0, fk.getOperatingSystem)(),
        wk = mk({
          os: Hk,
          userAgent: navigator.userAgent,
          agent: Uk,
          appIosVersion: rk.e,
          hintsPlatformVersion: "string" === typeof Kk ? void 0 : Kk.platformVersion
        }),
        lk = (0, Dk.i)(navigator.platform, navigator.maxTouchPoints, Sk.t);
      return [`os ${Hk} ${wk}; user agent's ${null!==(kk=Uk.os.name)&&void 0!==kk?kk:"?"} ${null!==(ek=Uk.os.version)&&void 0!==ek?ek:"?"}, platform ${navigator.platform}, touch points ${navigator.maxTouchPoints}, ${(0,fk.getPlatformType)()}`, `browser ${null!==(ik=Uk.browser.name)&&void 0!==ik?ik:"?"} ${null!==(bk=Uk.browser.version)&&void 0!==bk?bk:"?"}, engine ${null!==(Pk=Uk.engine.name)&&void 0!==Pk?Pk:"?"} ${null!==(xk=Uk.engine.version)&&void 0!==xk?xk:"?"}`, `client hints ${"string"===typeof Kk?Kk:Mk(Kk)}`, `gpu ${nk()}`, `client ${Dk.l.client} (${Dk.l.reason})`, `surface site ${Sk.t}, subsite ${Sk.E}${Sk.j?", iframed":""}, capped surface ${null!==lk&&void 0!==lk?lk:"none"}`]
    }
    void 0 === xk ? Kk = "none (the browser has none)" : xk.getHighEntropyValues(["platformVersion", "fullVersionList", "architecture", "bitness", "model"]).then((kk => {
      Kk = kk
    }), (kk => {
      Kk = `failed (${String(kk)})`
    }))
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);