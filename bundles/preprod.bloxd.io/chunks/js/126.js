export const id = 126;
export const ids = [126];
export const modules = {
  5885: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => eb,
      g: () => Xb,
      i: () => Tb,
      k: () => lb,
      o: () => Vb,
      s: () => ob,
      v: () => Sb,
      z: () => Yb,
      D: () => Mb,
      F: () => Pb
    });
    var Uy = Wy(2995),
      hy = Wy(3006);
    const fy = Function.prototype.toString,
      Zy = RegExp.prototype.exec,
      cb = Reflect.apply,
      Py = Function.prototype.call,
      oy = Function.prototype.apply,
      By = Function.prototype.bind,
      Ky = Object.defineProperty,
      ey = Uint8Array;
    let qb, sy;
    try {
      qb = globalThis.crypto, sy = void 0 === qb || null === qb ? void 0 : qb.getRandomValues
    } catch {}
    const Sy = "bloxdBindApply";
    let Ey;
    try {
      const yb = Py;
      Ky(yb, Sy, {
        __proto__: null,
        value: By,
        configurable: !0
      });
      try {
        Ey = yb[Sy](oy)
      } finally {
        delete yb[Sy]
      }
    } catch {}
    const ly = 16,
      mb = 256,
      Cy = 0,
      Ty = 1,
      Vy = 2,
      Jy = 3;
    let gb, Gy = Cy,
      Oy = cb,
      Ry = 0;

    function vb(yb, bb) {
      return yb === `function ${bb}() { [native code] }` || yb === `function ${bb}() {\n    [native code]\n}`
    }
    const ib = 0,
      My = 1,
      Yy = 2;
    let Xy = ib;

    function ny(yb, bb, Wy) {
      if (Xy === Yy && Gy === Ty && ! function() {
          const yb = gb;
          return Ry >= mb && (Oy(sy, qb, [yb]), Ry = 0), yb[Ry++] < 256 / ly
        }()) return function(yb, bb, Wy) {
        return Oy(yb, bb, Wy ?? 0)
      }(...arguments);
      if (Xy === ib || Gy === Vy) return cb(yb, bb, Wy);
      let Uy;
      Xy = ib;
      try {
        Gy === Cy && (Gy = Jy, Gy = function() {
          const yb = cb(fy, cb, []);
          if (vb(yb, "apply")) return Vy;
          if (null === cb(Zy, /\(\.\.\.arguments\)/, [yb]) && null === cb(Zy, /^function\s*\(\.\.\.[\w$]+\)/, [yb])) return Vy;
          if ("function" !== typeof Ey || "function" !== typeof Py || "function" !== typeof oy || "function" !== typeof By || "function" !== typeof Ky || "function" !== typeof sy || "function" !== typeof ey || !vb(cb(fy, Py, []), "call") || !vb(cb(fy, oy, []), "apply") || !vb(cb(fy, By, []), "bind") || !vb(cb(fy, Ky, []), "defineProperty") || !vb(cb(fy, sy, []), "getRandomValues") || !vb(cb(fy, ey, []), "Uint8Array")) return Vy;
          const bb = Ey,
            Wy = {},
            Uy = function(yb) {
              return this === Wy && yb === Wy
            };
          try {
            if (!0 !== bb(Uy, Wy, [Wy])) return Vy;
            const yb = new ey(mb);
            bb(sy, qb, [yb]), gb = yb
          } catch {
            return Vy
          }
          return Oy = bb, Ty
        }()), Uy = cb(yb, bb, Wy)
      } catch (hy) {
        throw Gy = Vy, hy
      }
      return Xy = Yy, Uy
    }
    let uy = cb;

    function rb() {
      return (uy === cb ? 0 : 3) + Xy
    }

    function Hy() {
      const yb = rb();
      return uy = cb, yb
    }

    function ab(yb) {
      uy = yb >= 3 ? ny : cb, Xy = yb % 3
    }
    const Fy = Function.prototype.toString,
      py = Object.getOwnPropertyDescriptor,
      Ly = RegExp.prototype.exec,
      Qy = Object.prototype.hasOwnProperty,
      jb = Set.prototype.has,
      Dy = Reflect.get,
      tb = Object.getPrototypeOf,
      wy = "undefined" === typeof WebAssembly ? void 0 : WebAssembly;

    function kb(yb, bb, Wy) {
      return {
        code: yb,
        holder: bb,
        key: Wy,
        ...arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
        native: new RegExp(`^function (get )?${Wy}\\(\\) \\{\\s*\\[native code\\]\\s*\\}$`)
      }
    }

    function Ny() {
      return wy
    }
    const zb = wy?.Instance.prototype,
      Iy = wy?.Memory.prototype;

    function xb() {
      return Iy
    }
    let Ay, dy;
    try {
      const yb = globalThis.crypto,
        bb = yb?.subtle;
      Ay = yb ? tb(yb) : void 0, dy = bb ? tb(bb) : void 0
    } catch {}
    const yW = [kb("in", Ny, "instantiate", {
      tier: "weighted",
      onNamespace: !0
    }), kb("is", Ny, "instantiateStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), kb("co", Ny, "compile", {
      tier: "weighted",
      onNamespace: !0
    }), kb("cs", Ny, "compileStreaming", {
      tier: "weighted",
      onNamespace: !0
    }), kb("mo", Ny, "Module", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), kb("it", Ny, "Instance", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), kb("me", Ny, "Memory", {
      isConstructor: !0,
      tier: "punished",
      onNamespace: !0
    }), kb("ex", (function() {
      return zb
    }), "exports", {
      isGetter: !0,
      tier: "punished"
    }), kb("bu", xb, "buffer", {
      isGetter: !0,
      tier: "punished"
    }), kb("gr", xb, "grow", {
      tier: "punished"
    }), kb("rc", (function() {
      return "undefined" === typeof Response ? void 0 : Response.prototype
    }), "clone"), kb("cr", (function() {
      return globalThis
    }), "crypto", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), kb("su", (function() {
      return Ay
    }), "subtle", {
      isGetter: !0,
      tier: "punished",
      inSecureContext: !0
    }), kb("dg", (function() {
      return dy
    }), "digest", {
      tier: "punished",
      inSecureContext: !0
    })];

    function bW(yb) {
      let bb;
      try {
        const Wy = Dy(globalThis, yb);
        bb = "function" === typeof Wy ? Wy.prototype : void 0
      } catch {}
      return () => bb
    }

    function Wb(yb, bb, Wy) {
      return Wy.map((Wy => kb(yb, bb, Wy)))
    }
    const Ub = kb("rx", bW("HTMLCanvasElement"), "getContext"),
      hb = ["createShader", "shaderSource", "compileShader", "createProgram", "linkProgram", "useProgram", "drawArrays", "drawElements", "depthFunc", "depthMask", "enable", "disable", "blendFuncSeparate", "colorMask"],
      fb = {
        webgpu: [...Wb("gd", bW("GPUDevice"), ["createShaderModule", "createRenderPipeline", "createCommandEncoder"]), ...Wb("gq", bW("GPUQueue"), ["submit", "writeBuffer"]), ...Wb("ge", bW("GPUCommandEncoder"), ["beginRenderPass", "finish"]), ...Wb("gp", bW("GPURenderPassEncoder"), ["setPipeline", "setBindGroup", "draw", "drawIndexed", "drawIndirect", "drawIndexedIndirect", "executeBundles"]), Ub],
        webgl: [...Wb("g2", bW("WebGL2RenderingContext"), [...hb, "drawArraysInstanced", "drawElementsInstanced"]), Ub],
        webgl1: [...Wb("g1", bW("WebGLRenderingContext"), hb), Ub]
      };
    let Zb = [];
    const cW = new Set(Object.values(fb).flatMap((yb => yb.map((yb => `wh:${yb.code}`)))));

    function Pb(yb) {
      Zb = fb[yb]
    }

    function ob(yb) {
      const bb = Hy();
      try {
        return uy(jb, cW, [yb])
      } finally {
        ab(bb)
      }
    }

    function Bb(yb) {
      return new Set(yW.filter((bb => bb.tier === yb)).map((yb => `wh:${yb.code}`)))
    }
    const Kb = Bb("punished"),
      eb = !1,
      qW = new Set(hy.e),
      sb = Bb("weighted");

    function Sb(yb) {
      const bb = Hy();
      try {
        return Eb(yb)
      } finally {
        ab(bb)
      }
    }

    function Eb(yb) {
      return uy(jb, sb, [yb])
    }

    function lb(yb) {
      const bb = Hy();
      try {
        return mW(yb)
      } finally {
        ab(bb)
      }
    }

    function mW(yb) {
      return uy(jb, qW, [yb])
    }

    function Cb(yb) {
      return "wb" === yb || uy(jb, Kb, [yb])
    }

    function Tb(yb) {
      const bb = Hy();
      try {
        return Cb(yb) || mW(yb)
      } finally {
        ab(bb)
      }
    }

    function Vb(yb) {
      const bb = Hy();
      try {
        return "wb" === yb || eb && Cb(yb)
      } finally {
        ab(bb)
      }
    }

    function Jb(yb, bb) {
      let {
        isConstructor: Wy,
        native: Uy
      } = bb;
      return "function" === typeof yb && (!(!Wy && uy(Qy, yb, ["prototype"])) && null !== uy(Ly, Uy, [uy(Fy, yb, [])]))
    }

    function gW(yb) {
      const {
        holder: bb,
        key: Wy,
        isGetter: Uy,
        onNamespace: hy,
        inSecureContext: fy
      } = yb, Zy = bb(), cb = function(yb, bb) {
        for (let Wy = yb; void 0 !== Wy && null !== Wy; Wy = tb(Wy)) {
          const yb = py(Wy, bb);
          if (yb) return yb
        }
      }(Zy, Wy);
      if (!cb) return !(fy && !0 === globalThis.isSecureContext);
      const Py = Uy ? cb.get : cb.value;
      if (!Jb(Py, yb)) return !1;
      if (hy) {
        const bb = globalThis.WebAssembly;
        if (bb !== Zy && null !== bb && ("object" === typeof bb || "function" === typeof bb)) {
          const Uy = Dy(bb, Wy);
          return Uy === Py || void 0 === Uy || Jb(Uy, yb)
        }
      }
      return !0
    }
    let Gb = null,
      Ob = !1;

    function Rb(yb) {
      try {
        return gW(yb)
      } catch {
        return !1
      }
    }

    function vW() {
      if (void 0 === wy) return null;
      let yb = function() {
        try {
          return globalThis.WebAssembly === wy
        } catch {
          return !1
        }
      }() ? null : "wh:wa";
      const bb = bb => {
        null !== bb && (null === yb || iW(bb) > iW(yb)) && (yb = bb)
      };
      for (let Wy = 0; Wy < yW.length; Wy++) {
        const yb = yW[Wy];
        void 0 === yb || Rb(yb) || bb(`wh:${yb.code}`)
      }
      bb((0, hy.o)());
      for (let Wy = 0; Wy < Zb.length; Wy++) {
        const yb = Zb[Wy];
        void 0 === yb || Rb(yb) || bb(`wh:${yb.code}`)
      }
      return yb
    }

    function iW(yb) {
      return Cb(yb) ? 5 : Eb(yb) ? 4 : mW(yb) ? 3 : function(yb) {
        return uy(jb, cW, [yb])
      }(yb) ? "wh:rx" === yb ? 0 : 1 : 2
    }

    function Mb() {
      const yb = function() {
        const yb = rb();
        return Gy === Cy || Gy === Ty ? (uy = ny, Xy = My) : uy = cb, yb
      }();
      try {
        if (null === Gb || !Cb(Gb)) {
          const yb = vW();
          (null === Gb || null !== yb && iW(yb) > iW(Gb)) && (Gb = yb)
        }
      } finally {
        ab(yb)
      }
    }

    function Yb() {
      Ob = !0
    }

    function Xb() {
      if (Ob) return "wb";
      if ((!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && Mb(), null !== Gb) return Gb;
      if (void 0 === wy) return "wn:unsupported";
      const yb = (0, Uy.s)();
      return null === yb ? null : `wn:${yb}`
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);