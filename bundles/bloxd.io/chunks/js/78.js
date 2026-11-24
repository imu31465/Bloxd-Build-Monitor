export const id = 78;
export const ids = [78];
export const modules = {
  4782: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => Wj,
      e: () => pz,
      g: () => vj,
      h: () => jz,
      j: () => Cj,
      k: () => Rj,
      m: () => Zj,
      n: () => wj,
      r: () => oj,
      t: () => az,
      w: () => Uz,
      x: () => xj,
      z: () => Xj
    });
    var QB = zB(2967);
    const nB = Function.prototype.toString,
      dB = RegExp.prototype.exec,
      IB = Reflect.apply,
      NB = Function.prototype.call,
      uB = Function.prototype.apply,
      UB = Function.prototype.bind,
      aB = Object.defineProperty,
      pB = Uint8Array;
    let rB, sB;
    try {
      rB = globalThis.crypto, sB = void 0 === rB || null === rB ? void 0 : rB.getRandomValues
    } catch {}
    const JB = "bloxdBindApply";
    let mB;
    try {
      const BB = NB;
      aB(BB, JB, {
        __proto__: null,
        value: UB,
        configurable: !0
      });
      try {
        mB = BB[JB](uB)
      } finally {
        delete BB[JB]
      }
    } catch {}
    const yB = 16,
      kB = 256,
      GB = 0,
      LB = 1,
      gB = 2,
      tB = 3;
    let SB, MB = GB,
      EB = IB,
      iB = 0;

    function qB(BB, jB) {
      return BB === `function ${jB}() { [native code] }` || BB === `function ${jB}() {\n    [native code]\n}`
    }
    const fB = 0,
      oB = 1,
      HB = 2;
    let DB = fB;

    function FB(BB, jB, zB) {
      if (DB === HB && MB === LB && ! function() {
          const BB = SB;
          return iB >= kB && (EB(sB, rB, [BB]), iB = 0), BB[iB++] < 256 / yB
        }()) return function(BB, jB, zB) {
        return EB(BB, jB, zB ?? 0)
      }(...arguments);
      if (DB === fB || MB === gB) return IB(BB, jB, zB);
      let QB;
      DB = fB;
      try {
        MB === GB && (MB = tB, MB = function() {
          const BB = IB(nB, IB, []);
          if (qB(BB, "apply")) return gB;
          if (null === IB(dB, /\(\.\.\.arguments\)/, [BB]) && null === IB(dB, /^function\s*\(\.\.\.[\w$]+\)/, [BB])) return gB;
          if ("function" !== typeof mB || "function" !== typeof NB || "function" !== typeof uB || "function" !== typeof UB || "function" !== typeof aB || "function" !== typeof sB || "function" !== typeof pB || !qB(IB(nB, NB, []), "call") || !qB(IB(nB, uB, []), "apply") || !qB(IB(nB, UB, []), "bind") || !qB(IB(nB, aB, []), "defineProperty") || !qB(IB(nB, sB, []), "getRandomValues") || !qB(IB(nB, pB, []), "Uint8Array")) return gB;
          const jB = mB,
            zB = {},
            QB = function(BB) {
              return this === zB && BB === zB
            };
          try {
            if (!0 !== jB(QB, zB, [zB])) return gB;
            const BB = new pB(kB);
            jB(sB, rB, [BB]), SB = BB
          } catch {
            return gB
          }
          return EB = jB, LB
        }()), QB = IB(BB, jB, zB)
      } catch (JB) {
        throw MB = gB, JB
      }
      return DB = HB, QB
    }
    let YB = IB;

    function VB() {
      return (YB === IB ? 0 : 3) + DB
    }

    function hB() {
      const BB = VB();
      return YB = IB, BB
    }

    function XB(BB) {
      YB = BB >= 3 ? FB : IB, DB = BB % 3
    }
    const ZB = Function.prototype.toString,
      AB = Object.getOwnPropertyDescriptor,
      TB = Object.prototype.hasOwnProperty,
      PB = RegExp.prototype.exec,
      WB = TextEncoder.prototype.encodeInto,
      eB = String.prototype.startsWith,
      lB = Number.prototype.toString,
      wB = WeakMap.prototype.get,
      xB = WeakMap.prototype.set,
      KB = /^function ([\w$ ]*)\(\) \{\s*\[native code\]\s*\}$/,
      CB = new TextEncoder,
      cB = new Uint8Array(1024),
      bB = 9999999,
      vB = /^(wh:[^#]+)#[abnps]\d{1,7}\.[0-9a-z]{1,7}$/,
      RB = new WeakMap;

    function OB(BB) {
      if ("function" !== typeof BB) return "#a0.0";
      const jB = YB(wB, RB, [BB]);
      if (void 0 !== jB) return jB;
      const zB = YB(ZB, BB, []),
        QB = zB.length > bB ? bB : zB.length,
        nB = `#${function(BB,jB){const zB=YB(PB,KB,[jB]);if(null===zB)return"s";const QB=zB[1];if("ProxyObject"===QB)return"p";if(""!==QB)return YB(eB,QB,["bound "])?"b":"n";try{const jB=AB(BB,"name"),zB=void 0!==jB&&YB(TB,jB,["value"])?jB.value:void 0;return"string"===typeof zB&&YB(eB,zB,["bound "])?"b":"p"}catch{return"p"}}(BB,zB)}${QB}.${function(BB){const{written:jB}=YB(WB,CB,[BB,cB]);let zB=2166136261;for(let QB=0;QB<jB;QB++)zB=(zB^cB[QB])>>>0,zB=zB+(zB<<1)+(zB<<4)+(zB<<7)+(zB<<8)+(zB<<24)>>>0;return YB(lB,zB,[36])}(zB)}`;
      return YB(xB, RB, [BB, nB]), nB
    }

    function Bj(BB) {
      const jB = YB(PB, vB, [BB]);
      return null === jB ? BB : jB[1]
    }
    var jj = zB(2992);
    const zj = Function.prototype.toString,
      Qj = Object.getOwnPropertyDescriptor,
      nj = RegExp.prototype.exec,
      dj = Object.prototype.hasOwnProperty,
      Ij = Set.prototype.has,
      Nj = WeakMap.prototype.get,
      uj = WeakMap.prototype.set,
      Uj = Reflect.get,
      aj = Object.getPrototypeOf,
      pj = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function rj(BB, jB, zB) {
      return {
        code: BB,
        holder: jB,
        key: zB,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${zB}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function sj() {
      return pj
    }
    const Jj = pj?.Instance.prototype,
      mj = pj?.Memory.prototype;

    function yj() {
      return mj
    }
    let kj, Gj;
    try {
      const BB = globalThis.crypto,
        jB = BB?.subtle;
      kj = BB ? aj(BB) : void 0, Gj = jB ? aj(jB) : void 0
    } catch {}

    function Lj(BB, jB) {
      for (let zB = BB; void 0 !== zB && null !== zB; zB = aj(zB)) {
        const BB = Qj(zB, jB);
        if (BB) return BB
      }
    }
    const gj = [rj("in", sj, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), rj("is", sj, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), rj("co", sj, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), rj("cs", sj, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), rj("mo", sj, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), rj("it", sj, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), rj("me", sj, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), rj("ex", (function() {
      return Jj
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), rj("bu", yj, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), rj("gr", yj, "grow", {
      tier: "punished"
    }), rj("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), rj("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), rj("su", (function() {
      return kj
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), rj("dg", (function() {
      return Gj
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function tj(BB) {
      let jB;
      try {
        const zB = Uj(globalThis, BB);
        jB = "function" === typeof zB ? zB.prototype : void 0
      } catch {}
      return () => jB
    }

    function Sj(BB, jB, zB) {
      return zB.map((zB => rj(BB, jB, zB)))
    }
    const Mj = rj("rx", tj("HTMLCanvasElement"), "getContext"),
      Ej = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      ij = {
        webgpu: [...Sj("gd", tj("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Sj("gq", tj("GPUQueue"), ["submit", "writeBuffer"]), ...Sj("ge", tj("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Sj("gp", tj("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Mj],
        webgl: [...Sj("g2", tj("WebGL2RenderingContext"), [...Ej, "drawArraysInstanced", "drawElementsInstanced"]), Mj],
        webgl1: [...Sj("g1", tj("WebGLRenderingContext"), Ej), Mj]
      };
    let qj = [];
    const fj = new WeakMap;

    function oj(BB, jB) {
      const zB = hB();
      try {
        YB(uj, fj, [BB, jB])
      } finally {
        XB(zB)
      }
    }

    function Hj(BB) {
      try {
        const jB = Nz(BB),
          zB = YB(Nj, fj, [jB]);
        return Bz(zB, BB) ? Dj(BB, !0) : `${Dj(BB,!1)}${OB(zB??jB)}`
      } catch {
        return `${Dj(BB,!1)}${OB(void 0)}`
      }
    }

    function Dj(BB, jB) {
      let {
        code: zB,
        key: QB
      } = BB;
      return `wh:${zB}${jB?"-dbg":""}:${QB}`
    }

    function Fj(BB) {
      return Object.values(ij).flatMap((jB => jB.map((jB => Dj(jB, BB)))))
    }
    const Yj = new Set(Fj(!0)),
      Vj = new Set([...Fj(!1), ...Yj]),
      hj = Dj(Mj, !1);

    function Xj(BB) {
      qj = ij[BB]
    }

    function Zj(BB) {
      const jB = hB();
      try {
        return Aj(BB) || Aj(Bj(BB))
      } finally {
        XB(jB)
      }
    }

    function Aj(BB) {
      return YB(Ij, Vj, [BB])
    }

    function Tj(BB) {
      return new Set(gj.filter((jB => jB.tier === BB)).map((BB => `wh:${BB.code}`)))
    }
    const Pj = Tj("punished"),
      Wj = !1,
      ej = new Set(jj.c),
      lj = Tj("weighted");

    function wj(BB) {
      const jB = hB();
      try {
        return Kj(Bj(BB))
      } finally {
        XB(jB)
      }
    }

    function xj(BB) {
      const jB = hB();
      try {
        return Bj(BB)
      } finally {
        XB(jB)
      }
    }

    function Kj(BB) {
      return YB(Ij, lj, [BB])
    }

    function Cj(BB) {
      const jB = hB();
      try {
        return cj(BB)
      } finally {
        XB(jB)
      }
    }

    function cj(BB) {
      return YB(Ij, ej, [BB])
    }

    function bj(BB) {
      return "wb" === BB || YB(Ij, Pj, [BB])
    }

    function vj(BB) {
      const jB = hB();
      try {
        return bj(BB) || cj(BB)
      } finally {
        XB(jB)
      }
    }

    function Rj(BB) {
      const jB = hB();
      try {
        return "wb" === BB || Wj && bj(BB)
      } finally {
        XB(jB)
      }
    }

    function Oj(BB, jB) {
      let {
        isGetter: zB
      } = jB;
      const QB = Qj(BB, zB ? "get" : "value");
      return void 0 === QB ? void 0 : QB.value
    }

    function Bz(BB, jB) {
      let {
        isConstructor: zB,
        native: QB
      } = jB;
      return "function" === typeof BB && (!(!zB && YB(dj, BB, ["prototype"])) && null !== YB(nj, QB, [YB(zj, BB, [])]))
    }

    function jz(BB, jB) {
      return Bz(BB, rj("", (() => {}), jB, arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? {
        isConstructor: !0
      } : {}))
    }
    let zz = null,
      Qz = !1;

    function nz() {
      try {
        return globalThis.WebAssembly === pj
      } catch {
        return !1
      }
    }

    function dz(BB) {
      try {
        return function(BB) {
          const {
            holder: jB,
            key: zB,
            onNamespace: QB,
            inSecureContext: nB
          } = BB, dB = jB(), IB = Lj(dB, zB);
          if (!IB) return !(nB && !0 === globalThis.isSecureContext);
          const NB = Oj(IB, BB);
          if (!Bz(NB, BB)) return !1;
          if (QB) {
            const jB = globalThis.WebAssembly;
            if (jB !== dB && null !== jB && ("object" === typeof jB || "function" === typeof jB)) {
              const QB = Uj(jB, zB);
              return QB === NB || void 0 === QB || Bz(QB, BB)
            }
          }
          return !0
        }(BB)
      } catch {
        return !1
      }
    }

    function Iz(BB) {
      const jB = `wh:${BB.code}`;
      if ("punished" === BB.tier) return jB;
      try {
        return `${jB}${OB(Nz(BB))}`
      } catch {
        return `${jB}${OB(void 0)}`
      }
    }

    function Nz(BB) {
      const jB = Lj(BB.holder(), BB.key),
        zB = void 0 === jB ? void 0 : Oj(jB, BB);
      return BB.onNamespace && !nz() && Bz(zB, BB) ? Uj(globalThis.WebAssembly, BB.key) : zB
    }

    function uz(BB) {
      if (bj(BB)) return 5;
      const jB = Bj(BB);
      return Kj(jB) ? 4 : cj(BB) ? 3 : Aj(jB) ? function(BB) {
        return YB(Ij, Yj, [BB])
      }(jB) ? -1 : jB === hj ? 0 : 1 : 2
    }

    function Uz() {
      const BB = function() {
        const BB = VB();
        return MB === GB || MB === LB ? (YB = FB, DB = oB) : YB = IB, BB
      }();
      try {
        if (null === zz || !bj(zz)) {
          const BB = function() {
            if (void 0 === pj) return null;
            let BB = nz() ? null : "wh:wa";
            const jB = jB => {
              null !== jB && (null === BB || uz(jB) > uz(BB)) && (BB = jB)
            };
            for (let zB = 0; zB < gj.length; zB++) {
              const BB = gj[zB];
              void 0 === BB || dz(BB) || jB(Iz(BB))
            }
            jB((0, jj.o)());
            for (let zB = 0; zB < qj.length; zB++) {
              const BB = qj[zB];
              void 0 === BB || dz(BB) || jB(Hj(BB))
            }
            return BB
          }();
          (null === zz || null !== BB && uz(BB) > uz(zz)) && (zz = BB)
        }
      } finally {
        XB(BB)
      }
    }

    function az() {
      Qz = !0
    }

    function pz() {
      if (Qz) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Uz(), null !== zz) return zz;
      if (void 0 === pj) return "wn:unsupported";
      const BB = (0, QB.q)();
      return null === BB ? null : `wn:${BB}`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);