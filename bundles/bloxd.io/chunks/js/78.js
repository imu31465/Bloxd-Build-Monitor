export const id = 78;
export const ids = [78];
export const modules = {
  4708: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => nb,
      g: () => pZ,
      h: () => Ob,
      i: () => bZ,
      l: () => tb,
      o: () => xb,
      q: () => Mb,
      t: () => Rb,
      v: () => Ib,
      y: () => VZ,
      C: () => YZ,
      F: () => Tb,
      I: () => Pb
    });
    var wG = ZG(2868);
    const SG = Function.prototype.toString,
      LG = RegExp.prototype.exec,
      yG = Reflect.apply,
      kG = Function.prototype.call,
      UG = Function.prototype.apply,
      YG = Function.prototype.bind,
      VG = Object.defineProperty,
      pG = Uint8Array;
    let fG, QG;
    try {
      fG = globalThis.crypto, QG = void 0 === fG || null === fG ? void 0 : fG.getRandomValues
    } catch {}
    const KG = "bloxdBindApply";
    let hG;
    try {
      const GG = kG;
      VG(GG, KG, {
        __proto__: null,
        value: YG,
        configurable: !0
      });
      try {
        hG = GG[KG](UG)
      } finally {
        delete GG[KG]
      }
    } catch {}
    const dG = 16,
      JG = 256,
      rG = 0,
      zG = 1,
      EG = 2,
      oG = 3;
    let XG, uG = rG,
      iG = yG,
      CG = 0;

    function WG(GG, bG) {
      return GG === `function ${bG}() { [native code] }` || GG === `function ${bG}() {\n    [native code]\n}`
    }
    const mG = 0,
      IG = 1,
      FG = 2;
    let vG = mG;

    function aG(GG, bG, ZG) {
      if (vG === FG && uG === zG && ! function() {
          const GG = XG;
          return CG >= JG && (iG(QG, fG, [GG]), CG = 0), GG[CG++] < 256 / dG
        }()) return function(GG, bG, ZG) {
        return iG(GG, bG, ZG ?? 0)
      }(...arguments);
      if (vG === mG || uG === EG) return yG(GG, bG, ZG);
      let wG;
      vG = mG;
      try {
        uG === rG && (uG = oG, uG = function() {
          const GG = yG(SG, yG, []);
          if (WG(GG, "apply")) return EG;
          if (null === yG(LG, /\(\.\.\.arguments\)/, [GG]) && null === yG(LG, /^function\s*\(\.\.\.[\w$]+\)/, [GG])) return EG;
          if ("function" !== typeof hG || "function" !== typeof kG || "function" !== typeof UG || "function" !== typeof YG || "function" !== typeof VG || "function" !== typeof QG || "function" !== typeof pG || !WG(yG(SG, kG, []), "call") || !WG(yG(SG, UG, []), "apply") || !WG(yG(SG, YG, []), "bind") || !WG(yG(SG, VG, []), "defineProperty") || !WG(yG(SG, QG, []), "getRandomValues") || !WG(yG(SG, pG, []), "Uint8Array")) return EG;
          const bG = hG,
            ZG = {},
            wG = function(GG) {
              return this === ZG && GG === ZG
            };
          try {
            if (!0 !== bG(wG, ZG, [ZG])) return EG;
            const GG = new pG(JG);
            bG(QG, fG, [GG]), XG = GG
          } catch {
            return EG
          }
          return iG = bG, zG
        }()), wG = yG(GG, bG, ZG)
      } catch (KG) {
        throw uG = EG, KG
      }
      return vG = FG, wG
    }
    let cG = yG;

    function lG() {
      return (cG === yG ? 0 : 3) + vG
    }

    function jG() {
      const GG = lG();
      return cG = yG, GG
    }

    function PG(GG) {
      cG = GG >= 3 ? aG : yG, vG = GG % 3
    }
    const MG = Function.prototype.toString,
      AG = Object.getOwnPropertyDescriptor,
      sG = Object.prototype.hasOwnProperty,
      qG = RegExp.prototype.exec,
      nG = TextEncoder.prototype.encodeInto,
      gG = String.prototype.startsWith,
      eG = Number.prototype.toString,
      RG = WeakMap.prototype.get,
      TG = WeakMap.prototype.set,
      HG = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      tG = new TextEncoder,
      DG = new Uint8Array(1024),
      NG = 9999999,
      OG = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      xG = new WeakMap;

    function BG(GG) {
      if ("function" !== typeof GG) return "#a0.0";
      const bG = cG(RG, xG, [GG]);
      if (void 0 !== bG) return bG;
      const ZG = cG(MG, GG, []),
        wG = ZG.length > NG ? NG : ZG.length,
        SG = `#${function(GG,bG){const ZG=cG(qG,HG,[bG]);if(null===ZG)return"s";const wG=ZG[1];if("ProxyObject"===wG)return"p";if(""!==wG)return cG(gG,wG,["bound "])?"b":"n";try{const bG=AG(GG,"name"),ZG=void 0!==bG&&cG(sG,bG,["value"])?bG.value:void 0;return"string"===typeof ZG&&cG(gG,ZG,["bound "])?"b":"p"}catch{return"p"}}(GG,ZG)}${wG}.${function(GG){const{written:bG}=cG(nG,tG,[GG,DG]);let ZG=2166136261;for(let wG=0;wG<bG;wG++)ZG=(ZG^DG[wG])>>>0,ZG=ZG+(ZG<<1)+(ZG<<4)+(ZG<<7)+(ZG<<8)+(ZG<<24)>>>0;return cG(eG,ZG,[36])}(ZG)}`;
      return cG(TG, xG, [GG, SG]), SG
    }

    function Gb(GG) {
      const bG = cG(qG, OG, [GG]);
      return null === bG ? GG : bG[1]
    }
    var bb = ZG(2881);
    const Zb = Function.prototype.toString,
      wb = Object.getOwnPropertyDescriptor,
      Sb = RegExp.prototype.exec,
      Lb = Object.prototype.hasOwnProperty,
      yb = Set.prototype.has,
      kb = WeakMap.prototype.get,
      Ub = WeakMap.prototype.set,
      Yb = Reflect.get,
      Vb = Object.getPrototypeOf,
      pb = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function fb(GG, bG, ZG) {
      return {
        code: GG,
        holder: bG,
        key: ZG,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${ZG}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Qb() {
      return pb
    }
    const Kb = pb?.Instance.prototype,
      hb = pb?.Memory.prototype;

    function db() {
      return hb
    }
    let Jb, rb;
    try {
      const GG = globalThis.crypto,
        bG = GG?.subtle;
      Jb = GG ? Vb(GG) : void 0, rb = bG ? Vb(bG) : void 0
    } catch {}

    function zb(GG, bG) {
      for (let ZG = GG; void 0 !== ZG && null !== ZG; ZG = Vb(ZG)) {
        const GG = wb(ZG, bG);
        if (GG) return GG
      }
    }
    const Eb = [fb("in", Qb, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), fb("is", Qb, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), fb("co", Qb, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), fb("cs", Qb, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), fb("mo", Qb, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), fb("it", Qb, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), fb("me", Qb, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), fb("ex", (function() {
      return Kb
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), fb("bu", db, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), fb("gr", db, "grow", {
      tier: "punished"
    }), fb("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), fb("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), fb("su", (function() {
      return Jb
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), fb("dg", (function() {
      return rb
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function ob(GG) {
      let bG;
      try {
        const ZG = Yb(globalThis, GG);
        bG = "function" === typeof ZG ? ZG.prototype : void 0
      } catch {}
      return () => bG
    }

    function Xb(GG, bG, ZG) {
      return ZG.map((ZG => fb(GG, bG, ZG)))
    }
    const ub = fb("rx", ob("HTMLCanvasElement"), "getContext"),
      ib = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      Cb = {
        webgpu: [...Xb("gd", ob("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Xb("gq", ob("GPUQueue"), ["submit", "writeBuffer"]), ...Xb("ge", ob("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Xb("gp", ob("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), ub],
        webgl: [...Xb("g2", ob("WebGL2RenderingContext"), [...ib, "drawArraysInstanced", "drawElementsInstanced"]), ub],
        webgl1: [...Xb("g1", ob("WebGLRenderingContext"), ib), ub]
      };
    let Wb = [];
    const mb = new WeakMap;

    function Ib(GG, bG) {
      const ZG = jG();
      try {
        cG(Ub, mb, [GG, bG])
      } finally {
        PG(ZG)
      }
    }

    function Fb(GG) {
      try {
        const bG = kZ(GG),
          ZG = cG(kb, mb, [bG]);
        return GZ(ZG, GG) ? vb(GG, !0) : `${vb(GG,!1)}${BG(ZG??bG)}`
      } catch {
        return `${vb(GG,!1)}${BG(void 0)}`
      }
    }

    function vb(GG, bG) {
      let {
        code: ZG,
        key: wG
      } = GG;
      return `wh:${ZG}${bG?"-dbg":""}:${wG}`
    }

    function ab(GG) {
      return Object.values(Cb).flatMap((bG => bG.map((bG => vb(bG, GG)))))
    }
    const cb = new Set(ab(!0)),
      lb = new Set([...ab(!1), ...cb]),
      jb = vb(ub, !1);

    function Pb(GG) {
      Wb = Cb[GG]
    }

    function Mb(GG) {
      const bG = jG();
      try {
        return Ab(GG) || Ab(Gb(GG))
      } finally {
        PG(bG)
      }
    }

    function Ab(GG) {
      return cG(yb, lb, [GG])
    }

    function sb(GG) {
      return new Set(Eb.filter((bG => bG.tier === GG)).map((GG => `wh:${GG.code}`)))
    }
    const qb = sb("punished"),
      nb = !1,
      gb = new Set(bb.c),
      eb = sb("weighted");

    function Rb(GG) {
      const bG = jG();
      try {
        return Hb(Gb(GG))
      } finally {
        PG(bG)
      }
    }

    function Tb(GG) {
      const bG = jG();
      try {
        return Gb(GG)
      } finally {
        PG(bG)
      }
    }

    function Hb(GG) {
      return cG(yb, eb, [GG])
    }

    function tb(GG) {
      const bG = jG();
      try {
        return Db(GG)
      } finally {
        PG(bG)
      }
    }

    function Db(GG) {
      return cG(yb, gb, [GG])
    }

    function Nb(GG) {
      return "wb" === GG || cG(yb, qb, [GG])
    }

    function Ob(GG) {
      const bG = jG();
      try {
        return Nb(GG) || Db(GG)
      } finally {
        PG(bG)
      }
    }

    function xb(GG) {
      const bG = jG();
      try {
        return "wb" === GG || nb && Nb(GG)
      } finally {
        PG(bG)
      }
    }

    function Bb(GG, bG) {
      let {
        isGetter: ZG
      } = bG;
      const wG = wb(GG, ZG ? "get" : "value");
      return void 0 === wG ? void 0 : wG.value
    }

    function GZ(GG, bG) {
      let {
        isConstructor: ZG,
        native: wG
      } = bG;
      return "function" === typeof GG && (!(!ZG && cG(Lb, GG, ["prototype"])) && null !== cG(Sb, wG, [cG(Zb, GG, [])]))
    }

    function bZ(GG, bG) {
      return GZ(GG, fb("", (() => {}), bG, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let ZZ = null,
      wZ = !1;

    function SZ() {
      try {
        return globalThis.WebAssembly === pb
      } catch {
        return !1
      }
    }

    function LZ(GG) {
      try {
        return function(GG) {
          const {
            holder: bG,
            key: ZG,
            onNamespace: wG,
            inSecureContext: SG
          } = GG, LG = bG(), yG = zb(LG, ZG);
          if (!yG) return !(SG && !0 === globalThis.isSecureContext);
          const kG = Bb(yG, GG);
          if (!GZ(kG, GG)) return !1;
          if (wG) {
            const bG = globalThis.WebAssembly;
            if (bG !== LG && null !== bG && ("object" === typeof bG || "function" === typeof bG)) {
              const wG = Yb(bG, ZG);
              return wG === kG || void 0 === wG || GZ(wG, GG)
            }
          }
          return !0
        }(GG)
      } catch {
        return !1
      }
    }

    function yZ(GG) {
      const bG = `wh:${GG.code}`;
      if ("punished" === GG.tier) return bG;
      try {
        return `${bG}${BG(kZ(GG))}`
      } catch {
        return `${bG}${BG(void 0)}`
      }
    }

    function kZ(GG) {
      const bG = zb(GG.holder(), GG.key),
        ZG = void 0 === bG ? void 0 : Bb(bG, GG);
      return GG.onNamespace && !SZ() && GZ(ZG, GG) ? Yb(globalThis.WebAssembly, GG.key) : ZG
    }

    function UZ(GG) {
      if (Nb(GG)) return 5;
      const bG = Gb(GG);
      return Hb(bG) ? 4 : Db(GG) ? 3 : Ab(bG) ? function(GG) {
        return cG(yb, cb, [GG])
      }(bG) ? -1 : bG === jb ? 0 : 1 : 2
    }

    function YZ() {
      const GG = function() {
        const GG = lG();
        return uG === rG || uG === zG ? (cG = aG, vG = IG) : cG = yG, GG
      }();
      try {
        if (null === ZZ || !Nb(ZZ)) {
          const GG = function() {
            if (void 0 === pb) return null;
            let GG = SZ() ? null : "wh:wa";
            const bG = bG => {
              null !== bG && (null === GG || UZ(bG) > UZ(GG)) && (GG = bG)
            };
            for (let ZG = 0; ZG < Eb.length; ZG++) {
              const GG = Eb[ZG];
              void 0 === GG || LZ(GG) || bG(yZ(GG))
            }
            bG((0, bb.n)());
            for (let ZG = 0; ZG < Wb.length; ZG++) {
              const GG = Wb[ZG];
              void 0 === GG || LZ(GG) || bG(Fb(GG))
            }
            return GG
          }();
          (null === ZZ || null !== GG && UZ(GG) > UZ(ZZ)) && (ZZ = GG)
        }
      } finally {
        PG(GG)
      }
    }

    function VZ() {
      wZ = !0
    }

    function pZ() {
      if (wZ) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && YZ(), null !== ZZ) return ZZ;
      if (void 0 === pb) return "wn:unsupported";
      const GG = (0, wG.r)();
      return null === GG ? null : `wn:${GG}`
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);