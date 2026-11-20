export const id = 295;
export const ids = [295];
export const modules = {
  41127: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Jk,
      h: () => mk,
      l: () => Ak,
      o: () => ek,
      r: () => vk,
      s: () => Wk
    });
    var Rk = Bk(41081);
    var tk = "Babylon Lite v1.32.0",
      ak = Bk(41130);

    function Xk(kk) {
      return "clientWidth" in kk
    }
    var bk = 1;

    function wk(kk, Fk, Bk) {
      const wk = Fk.getContext("webgpu");
      wk || (0, Rk.c)(54), Xk(Fk) && Fk.setAttribute("data-engine", tk);
      const dk = Bk?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        sk = Bk?.srgb ? (Vk = dk).endsWith("-srgb") ? Vk : `${Vk}-srgb` : dk;
      var Vk;
      const Jk = Bk?.alphaMode ?? "opaque";
      wk.configure({
        device: kk._device,
        format: dk,
        alphaMode: Jk,
        viewFormats: [sk]
      });
      const Ak = 1 === Bk?.msaaSamples ? 1 : 4,
        ek = (0, ak.c)({
          lbl: "swapchain",
          format: sk,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return ek._eager = !0, {
        engine: kk,
        canvas: Fk,
        format: sk,
        msaaSamples: Ak,
        scRT: ek,
        maxDevicePixelRatio: Bk?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: bk++,
        _context: wk,
        _configureFormat: dk,
        _alphaMode: Jk,
        _renderingContexts: []
      }
    }

    function dk(kk) {
      const Fk = kk._context.getCurrentTexture(),
        Bk = kk.scRT;
      Bk._colorTexture = Fk, Bk._colorView = Fk.createView({
        format: kk.format
      }), Bk._width = Fk.width, Bk._height = Fk.height
    }

    function sk(kk) {
      const Fk = kk.canvas;
      if (!Xk(Fk)) return;
      const Bk = kk._w ?? Fk.clientWidth,
        Rk = kk._h ?? Fk.clientHeight;
      if (!(Bk > 0 && Rk > 0)) return;
      const tk = Math.min(globalThis.devicePixelRatio || 1, kk.maxDevicePixelRatio);
      Vk(kk, Bk * tk | 0, Rk * tk | 0)
    }

    function Vk(kk, Fk, Bk) {
      const Rk = kk.canvas,
        tk = 0 | Fk,
        ak = 0 | Bk;
      if (tk > 0 && ak > 0 && (tk !== Rk.width || ak !== Rk.height)) {
        Rk.width = tk, Rk.height = ak, kk.scRT._width = tk, kk.scRT._height = ak;
        for (const Fk of kk._renderingContexts) Fk._resize?.()
      }
    }
    var Jk = 0;

    function Ak(kk, Fk) {
      return -1 !== kk._renderingContexts.indexOf(Fk)
    }

    function ek(kk, Fk) {
      return -1 === kk._renderingContexts.indexOf(Fk) && (kk._renderingContexts.push(Fk), !0)
    }
    var yk = null;
    var fk = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function mk(kk, Fk) {
      const ak = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...yk ? yk() : {}
      });
      ak || (0, Rk.c)(47);
      const Xk = yk?.deviceFeatures?.(ak, Fk) ?? function(kk) {
          return fk.filter((Fk => kk.features.has(Fk)))
        }(ak),
        bk = await ak.requestDevice({
          requiredFeatures: Xk,
          requiredLimits: Fk?.requiredLimits
        });
      console.log(`${tk} - WebGPU engine`);
      const Vk = !!Fk?.useHighPrecisionMatrix,
        Jk = !!Fk?.useFloatingOrigin;
      if (Jk && !Vk && (0, Rk.c)(48), Vk) {
        const {
          allocateF64Mat4: kk
        } = await Bk.e(349).then((() => Bk(60985)));
        0
      }
      let Ak, ek, mk, Wk;
      if (Jk) {
        const [{
          wrapRenderableForFO: kk,
          lightFoVersion: Fk,
          applyLightFoOffset: Rk
        }, {
          makePackMeshWorld: tk
        }] = await Promise.all([Bk.e(350).then((() => Bk(60990))), Bk.e(351).then((() => Bk(60995)))]);
        Ak = kk, ek = tk, mk = Fk, Wk = Rk
      }
      const vk = {
          _device: bk
        },
        ik = [vk];
      return Object.assign(vk, {
        engine: vk,
        surfaces: ik,
        _surfaces: ik,
        _device: bk,
        _options: Fk,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Vk,
        useFloatingOrigin: Jk,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Ak,
        _makePackMeshWorld: ek,
        _lightFoVersion: mk,
        _applyLightFoOffset: Wk
      }, wk(vk, kk, Fk)), sk(vk), dk(vk), vk
    }

    function Wk(kk, Fk, Bk) {
      Vk(kk, Fk, Bk)
    }

    function vk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.surfaces;
      if (Bk !== kk.surfaces)
        for (let tk = Bk.length; tk--;) Bk[tk].engine !== kk && (0, Rk.c)(49);
      ik(kk, Fk, Bk)
    }

    function ik(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk._surfaces,
        Rk = 0;
      for (let ak = Bk.length; ak--;) Rk += Bk[ak]._renderingContexts.length;
      if (!Rk) return kk.drawCallCount = 0, kk._flushGpuRetirements?.(kk);
      const tk = kk._device.createCommandEncoder({
        label: "frame"
      });
      kk._currentEncoder = tk, kk._currentDelta = Fk;
      try {
        kk._gpuTimerBegin?.(tk), Rk = 0;
        for (let kk = 0; kk < Bk.length; kk++) {
          const Fk = Bk[kk];
          Fk._capturePreFrame?.(Fk), dk(Fk);
          const tk = Fk._renderingContexts;
          for (let kk = 0; kk < tk.length; kk++) {
            const Fk = tk[kk];
            Fk._update(), Rk += Fk._drawCallsPre + Fk._record()
          }
        }
        const Fk = kk._currentEncoder;
        for (let kk = 0; kk < Bk.length; kk++) {
          const Rk = Bk[kk];
          Rk._captureService?.(Rk, Fk)
        }
        kk._gpuTimerEnd?.(Fk), kk._cbs[0] = Fk.finish(), kk._device.queue.submit(kk._cbs), kk._flushGpuRetirements?.(kk), kk.drawCallCount = Rk, kk._gpuTimerResolve?.()
      } finally {
        kk._currentEncoder = void 0
      }
    }
  },
  41085: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => tk,
      e: () => ak,
      h: () => Rk
    });
    var Rk = globalThis.GPUTextureUsage,
      tk = globalThis.GPUBufferUsage,
      ak = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41145: (kk, Fk, Bk) => {
    function Rk(kk) {
      tk(kk.splice(0))
    }

    function tk(kk) {
      for (const Bk of kk) try {
        Bk()
      } catch (Fk) {
        console.error("GPU resource retirement failed.", Fk)
      }
    }

    function ak(kk, Fk) {
      kk._flushGpuRetirements ??= Xk, (kk._retirements ??= []).push(Fk)
    }

    function Xk(kk) {
      const Fk = kk._retirements;
      if (!Fk) return;
      kk._retirements = null;
      const Bk = kk._retiring ??= new Set;
      Bk.add(Fk), queueMicrotask((() => {
        kk._device.queue.onSubmittedWorkDone().then((() => {
          Bk.delete(Fk), Rk(Fk)
        })).catch((() => {}))
      }))
    }
    Bk.d(Fk, {
      e: () => ak
    })
  },
  41130: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      e: () => Xk,
      g: () => bk
    });
    var Rk = Bk(41085);

    function tk(kk) {
      const Fk = kk.size;
      return "canvas" in Fk ? Fk.canvas : Fk
    }

    function ak(kk) {
      return {
        _descriptor: kk,
        _resolveSize: tk,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Xk(kk, Fk) {
      if (kk._eager) return void kk._syncEager?.(Fk);
      bk(kk);
      const Bk = kk._descriptor,
        {
          width: ak,
          height: Xk
        } = (kk._resolveSize ?? tk)(Bk);
      kk._width = ak, kk._height = Xk;
      const wk = Fk._device;
      Bk.format && (kk._colorTexture = wk.createTexture({
        label: Bk.lbl,
        size: {
          width: ak,
          height: Xk
        },
        format: Bk.format,
        sampleCount: Bk.samples,
        usage: Rk.h.RENDER_ATTACHMENT | Rk.h.TEXTURE_BINDING | Rk.h.COPY_SRC | Rk.h.COPY_DST
      }), kk._colorView = kk._colorTexture.createView()), Bk.dFormat && (kk._depthTexture = wk.createTexture({
        label: Bk.lbl,
        size: {
          width: ak,
          height: Xk
        },
        format: Bk.dFormat,
        sampleCount: Bk.samples,
        usage: Rk.h.RENDER_ATTACHMENT | Rk.h.TEXTURE_BINDING
      }), kk._depthView = kk._depthTexture.createView())
    }

    function bk(kk) {
      if (!kk || kk._eager && !kk._disposeAttachments) return;
      const Fk = kk._colorTexture,
        Bk = kk._depthTexture;
      if (kk._colorTexture = kk._depthTexture = null, kk._colorView = kk._depthView = null, kk._width = kk._height = 0, kk._disposeAttachments) kk._disposeAttachments(Fk, Bk);
      else try {
        Fk?.destroy()
      } finally {
        !1 !== kk._ownsDepthTexture && Bk?.destroy()
      }
    }
  },
  41141: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk,
      g: () => tk,
      i: () => ak
    });
    var Rk = Float32Array,
      tk = Float64Array,
      ak = Uint32Array
  },
  41154: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    var Rk = 16
  },
  41081: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = null;

    function tk(kk) {
      for (var Fk = arguments.length, Bk = new Array(Fk > 1 ? Fk - 1 : 0), tk = 1; tk < Fk; tk++) Bk[tk - 1] = arguments[tk];
      const ak = new Error(Rk?.(kk, Bk) ?? `#${kk}`);
      throw ak.lite = Bk, ak
    }
  },
  41113: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => tk
    });
    var Rk = Bk(41097);

    function tk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Bk = Fk.compare,
        tk = Fk.lodMinClamp ?? 0,
        ak = Fk.lodMaxClamp ?? 32,
        Xk = void 0 !== Bk || 0 !== tk || 32 !== ak ? `${Bk??""}:${tk}:${ak}` : "";
      return (0, Rk.e)(kk, Fk, Xk)
    }
  },
  41088: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak
    });
    var Rk = null;

    function tk(kk) {
      const Fk = Rk ??= new WeakMap;
      Fk.set(kk, (Fk.get(kk) ?? 0) + 1)
    }

    function ak(kk) {
      tk(kk.texture)
    }
  },
  41097: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk
    });
    var Rk = null,
      tk = "nearest",
      ak = "clamp-to-edge",
      Xk = {
        minFilter: tk,
        magFilter: tk,
        mipmapFilter: tk,
        addressModeU: ak,
        addressModeV: ak,
        addressModeW: ak,
        maxAnisotropy: 1
      };

    function bk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const tk = kk._device,
        ak = Rk ??= new WeakMap;
      let bk = ak.get(tk);
      bk || ak.set(tk, bk = new Map);
      let wk = Bk;
      for (const Rk in Xk) {
        const kk = Rk;
        wk += `:${Fk[kk]??Xk[kk]}`
      }
      let dk = bk.get(wk);
      return dk || bk.set(wk, dk = tk.createSampler(Fk)), dk
    }
  },
  41138: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Dk,
      f: () => hk
    });
    var Rk = Bk(41130),
      tk = Bk(41127);

    function ak(kk, Fk) {
      Fk._passes.length = 0, kk._currentProcessedTask = Fk;
      try {
        Fk.record()
      } finally {
        kk._currentProcessedTask = null
      }
    }
    var Xk = Bk(41141);

    function bk(kk) {
      const Fk = kk.worldMatrixVersion;
      if (kk._viewVer === Fk) return kk._viewCache;
      const Bk = kk._viewCache,
        Rk = kk.worldMatrix,
        tk = kk._useFloatingOrigin,
        ak = tk ? 0 : Rk[12],
        Xk = tk ? 0 : Rk[13],
        bk = tk ? 0 : Rk[14];
      return Bk[0] = Rk[0], Bk[1] = Rk[4], Bk[2] = Rk[8], Bk[3] = 0, Bk[4] = Rk[1], Bk[5] = Rk[5], Bk[6] = Rk[9], Bk[7] = 0, Bk[8] = Rk[2], Bk[9] = Rk[6], Bk[10] = Rk[10], Bk[11] = 0, Bk[12] = -(Rk[0] * ak + Rk[1] * Xk + Rk[2] * bk), Bk[13] = -(Rk[4] * ak + Rk[5] * Xk + Rk[6] * bk), Bk[14] = -(Rk[8] * ak + Rk[9] * Xk + Rk[10] * bk), Bk[15] = 1, kk._viewVer = Fk, Bk
    }
    var wk = null;

    function dk(kk) {
      return kk._projFov === kk.fov && kk._projNear === kk.nearPlane && kk._projFar === kk.farPlane || (kk._projFov = kk.fov, kk._projNear = kk.nearPlane, kk._projFar = kk.farPlane, kk._projRev = (kk._projRev ?? 0) + 1), kk.worldMatrixVersion + (kk._projRev ?? 0)
    }

    function sk(kk, Fk) {
      const Bk = dk(kk);
      if (kk._projVer === Bk && kk._projAspect === Fk) return kk._projCache;
      const Rk = kk._projCache;
      return null !== wk && kk.ortho ? wk(kk, Fk, Rk) : function(kk, Fk, Bk, Rk, tk) {
        const ak = 1 / Math.tan(.5 * Fk),
          Xk = tk - Rk;
        kk[0] = ak / Bk, kk[5] = ak, kk[10] = -Rk / Xk, kk[11] = 1, kk[14] = tk * Rk / Xk
      }(Rk, kk.fov, Fk, kk.nearPlane, kk.farPlane), kk._projVer = Bk, kk._projAspect = Fk, Rk
    }
    var Vk = Bk(41085);

    function Jk(kk, Fk, Bk) {
      return kk._device.createBuffer({
        label: Bk,
        size: (Rk = Fk, tk = 16, Math.ceil(Rk / tk) * tk),
        usage: Vk.d.UNIFORM | Vk.d.COPY_DST
      });
      var Rk, tk
    }
    var Ak = Bk(41145),
      ek = null;

    function yk(kk) {
      const Fk = kk._device,
        Bk = ek ??= new WeakMap;
      let Rk = Bk.get(Fk);
      return Rk || (Rk = Fk.createBindGroupLayout({
        label: "ef",
        entries: [{
          binding: 0,
          visibility: Vk.e.VERTEX | Vk.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Vk.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Bk.set(Fk, Rk)), Rk
    }

    function fk(kk, Fk, Bk) {
      const Rk = kk._device,
        tk = Jk(kk, Fk.byteLength, Bk);
      try {
        Rk.queue.writeBuffer(tk, 0, Fk.buffer, Fk.byteOffset, Fk.byteLength)
      } catch (ak) {
        throw tk.destroy(), ak
      }
      return tk
    }
    var mk = Bk(41154),
      Wk = new Xk.i(1),
      vk = new Xk.e(Wk.buffer);

    function ik(kk) {
      let Fk = 0;
      for (const Bk of kk) Fk += Bk._lightVersion ?? 0;
      return Fk
    }

    function Yk(kk, Fk) {
      kk.fill(0);
      let Bk = 0;
      for (const Rk of Fk) {
        if (Bk >= mk.d) break;
        Rk._writeLightUbo && (Rk._writeLightUbo(kk, 4 + 16 * Bk), Bk++)
      }
      Wk[0] = Bk, kk[0] = vk[0]
    }

    function Lk(kk, Fk) {
      let Bk = Fk._lightGpuState;
      const Rk = 16 + 16 * mk.d * 4;
      if (Bk && Bk._byteSize === Rk) return Bk;
      const tk = !Bk;
      Bk?._buffer.destroy();
      const ak = new Xk.e(Rk / 4);
      return Yk(ak, Fk.lights), kk._applyLightFoOffset?.(ak, Fk), Bk = {
        _buffer: fk(kk, ak),
        _scratch: ak,
        iG: ik(Fk.lights) + (kk._lightFoVersion?.(Fk) ?? 0),
        _listVersion: Fk._lightListVersion ?? 0,
        _lightCount: Fk.lights.length,
        _byteSize: Rk
      }, Fk._lightGpuState = Bk, tk && Fk._disposables.push((() => {
        Fk._lightGpuState?._buffer.destroy(), Fk._lightGpuState = void 0
      })), Bk
    }

    function Ok(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const tk = Fk;
      if (0 === Rk && 16 === tk.length) return void kk.set(tk, Bk);
      const ak = Rk,
        Xk = Bk;
      kk[Xk + 0] = tk[ak + 0], kk[Xk + 1] = tk[ak + 1], kk[Xk + 2] = tk[ak + 2], kk[Xk + 3] = tk[ak + 3], kk[Xk + 4] = tk[ak + 4], kk[Xk + 5] = tk[ak + 5], kk[Xk + 6] = tk[ak + 6], kk[Xk + 7] = tk[ak + 7], kk[Xk + 8] = tk[ak + 8], kk[Xk + 9] = tk[ak + 9], kk[Xk + 10] = tk[ak + 10], kk[Xk + 11] = tk[ak + 11], kk[Xk + 12] = tk[ak + 12], kk[Xk + 13] = tk[ak + 13], kk[Xk + 14] = tk[ak + 14], kk[Xk + 15] = tk[ak + 15]
    }

    function Ek(kk, Fk, Bk, Rk, tk) {
      kk.fill(0);
      const ak = function(kk, Fk) {
          const Bk = dk(kk);
          if (kk._vpVer === Bk && kk._vpAspect === Fk) return kk._vpCache;
          const Rk = kk._vpCache;
          return function(kk, Fk, Bk, Rk, tk, ak) {
            const Xk = Bk[Rk],
              bk = Bk[Rk + 1],
              wk = Bk[Rk + 2],
              dk = Bk[Rk + 3],
              sk = Bk[Rk + 4],
              Vk = Bk[Rk + 5],
              Jk = Bk[Rk + 6],
              Ak = Bk[Rk + 7],
              ek = Bk[Rk + 8],
              yk = Bk[Rk + 9],
              fk = Bk[Rk + 10],
              mk = Bk[Rk + 11],
              Wk = Bk[Rk + 12],
              vk = Bk[Rk + 13],
              ik = Bk[Rk + 14],
              Yk = Bk[Rk + 15];
            let Lk = tk[ak],
              Ok = tk[ak + 1],
              Ek = tk[ak + 2],
              Sk = tk[ak + 3];
            kk[Fk] = Xk * Lk + sk * Ok + ek * Ek + Wk * Sk, kk[Fk + 1] = bk * Lk + Vk * Ok + yk * Ek + vk * Sk, kk[Fk + 2] = wk * Lk + Jk * Ok + fk * Ek + ik * Sk, kk[Fk + 3] = dk * Lk + Ak * Ok + mk * Ek + Yk * Sk, Lk = tk[ak + 4], Ok = tk[ak + 5], Ek = tk[ak + 6], Sk = tk[ak + 7], kk[Fk + 4] = Xk * Lk + sk * Ok + ek * Ek + Wk * Sk, kk[Fk + 5] = bk * Lk + Vk * Ok + yk * Ek + vk * Sk, kk[Fk + 6] = wk * Lk + Jk * Ok + fk * Ek + ik * Sk, kk[Fk + 7] = dk * Lk + Ak * Ok + mk * Ek + Yk * Sk, Lk = tk[ak + 8], Ok = tk[ak + 9], Ek = tk[ak + 10], Sk = tk[ak + 11], kk[Fk + 8] = Xk * Lk + sk * Ok + ek * Ek + Wk * Sk, kk[Fk + 9] = bk * Lk + Vk * Ok + yk * Ek + vk * Sk, kk[Fk + 10] = wk * Lk + Jk * Ok + fk * Ek + ik * Sk, kk[Fk + 11] = dk * Lk + Ak * Ok + mk * Ek + Yk * Sk, Lk = tk[ak + 12], Ok = tk[ak + 13], Ek = tk[ak + 14], Sk = tk[ak + 15], kk[Fk + 12] = Xk * Lk + sk * Ok + ek * Ek + Wk * Sk, kk[Fk + 13] = bk * Lk + Vk * Ok + yk * Ek + vk * Sk, kk[Fk + 14] = wk * Lk + Jk * Ok + fk * Ek + ik * Sk, kk[Fk + 15] = dk * Lk + Ak * Ok + mk * Ek + Yk * Sk
          }(Rk, 0, sk(kk, Fk), 0, bk(kk), 0), kk._vpVer = Bk, kk._vpAspect = Fk, Rk
        }(Rk, tk),
        Xk = bk(Rk),
        wk = Rk.worldMatrix;
      Ok(kk, ak, 0), Ok(kk, Xk, 16), Fk.useFloatingOrigin ? (kk[32] = 0, kk[33] = 0, kk[34] = 0) : (kk[32] = wk[12], kk[33] = wk[13], kk[34] = wk[14]), kk[87] = Fk.canvas.width;
      const Vk = Bk.imageProcessing;
      kk[76] = Vk.exposure, kk[77] = Vk.contrast, kk[78] = Bk._envTextures?.lodGenerationScale ?? .8, kk[79] = +Vk.toneMappingEnabled, kk[37] = Fk.canvas.height
    }

    function Sk(kk, Fk) {
      return {
        _renderables: kk,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Fk
      }
    }

    function Nk(kk, Fk, Bk) {
      kk.clr ??= !0;
      const tk = kk.rt._descriptor,
        ak = kk.depth?._descriptor,
        wk = {
          _colorFormat: tk.format,
          _depthStencilFormat: ak?.dFormat ?? tk.dFormat,
          _depthCompare: tk.depthCompare ?? ak?.depthCompare,
          _sampleCount: tk.samples
        },
        sk = {
          loadOp: "clear",
          storeOp: "store"
        },
        Vk = {
          ...Sk([], -1),
          name: kk.name,
          _config: kk,
          _ownsTargets: !kk.sharedRt,
          engine: Fk,
          ef: Bk,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [sk]
          },
          _colorAttachment: sk,
          _sceneUBO: Jk(Fk, 368),
          _suData: new Xk.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: wk,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Vk._disposed) throw new Error("RenderTask has been disposed.");
            Vk._recordExplicit ? Vk._recordExplicit(Vk, !0) : Mk(Vk, !1 !== kk.autoMirror ? Bk._renderables.slice() : Vk._renderables, !0)
          },
          execute: () => function(kk, Fk, Bk) {
            if (!1 === kk.enabled) return 0;
            const Rk = kk.ef;
            ! function(kk, Fk, Bk) {
              const Rk = kk.ef;
              !1 !== kk._config.autoMirror && kk._lastVersion !== Rk._renderableVersion && Mk(kk, Rk._renderables.slice());
              Uk(kk, Fk);
              const tk = kk._updateContext,
                ak = kk._config.cam ?? Rk.camera;
              Bk._colorFormat && (kk._config._skipClusteredLights || Rk._clusteredLightUpdater?.(ak, tk.targetWidth, tk.targetHeight), function(kk, Fk) {
                const Bk = Lk(kk, Fk),
                  Rk = ik(Fk.lights) + (kk._lightFoVersion?.(Fk) ?? 0),
                  tk = Fk._lightListVersion ?? 0;
                Rk === Bk.iG && tk === Bk._listVersion && Fk.lights.length === Bk._lightCount || (Bk.iG = Rk, Bk._listVersion = tk, Bk._lightCount = Fk.lights.length, Yk(Bk._scratch, Fk.lights), kk._applyLightFoOffset?.(Bk._scratch, Fk), kk._device.queue.writeBuffer(Bk._buffer, 0, Bk._scratch)), Bk._buffer
              }(Fk, Rk));
              (function(kk, Fk, Bk, Rk) {
                if (!Rk) return;
                const tk = Rk.viewport,
                  ak = kk._config.rt,
                  Xk = (kk._config.cs ? Fk.canvas.width / Fk.canvas.height : ak._width / ak._height) * (tk ? tk.width / tk.height : 1),
                  bk = Bk.fog,
                  wk = Bk.imageProcessing,
                  sk = dk(Rk),
                  Vk = Bk._envTextures,
                  Jk = kk._sceneUboCacheKey;
                if (Jk[0] === Rk && Jk[1] === bk && Jk[2] === sk && Jk[3] === Xk && Jk[4] === wk.exposure && Jk[5] === wk.contrast && Jk[6] === Vk) return;
                Jk[0] = Rk, Jk[1] = bk, Jk[2] = sk, Jk[3] = Xk, Jk[4] = wk.exposure, Jk[5] = wk.contrast, Jk[6] = Vk;
                const Ak = kk._suData;
                Ek(Ak, Fk, Bk, Rk, Xk);
                const ek = Bk._sceneUboContributors;
                if (ek)
                  for (const dk of ek) dk(Ak, Bk);
                Fk._device.queue.writeBuffer(kk._sceneUBO, 0, Ak)
              })(kk, Fk, Rk, ak), tk.sK = ak, kk._batchState?._reset(), ck(kk._opaqueBindings, tk), ck(kk._directBindings, tk), ck(kk._transparentBindings, tk), kk._batchState?._flush(Fk),
                function(kk, Fk) {
                  const Bk = kk._transparentBindings;
                  if (Bk.length <= 1 || !Fk) return;
                  const Rk = bk(Fk);
                  for (const tk of Bk) {
                    const kk = tk.renderable._worldCenter;
                    tk._sortDistance = kk ? kk[0] * Rk[2] + kk[1] * Rk[6] + kk[2] * Rk[10] + Rk[14] : 0
                  }
                  Bk.sort(Hk)
                }(kk, ak)
            }(kk, Fk, Bk);
            const tk = kk._colorAttachment,
              ak = kk._config;
            ak.rt._colorView && (ak.rt === Rk.surface.scRT && (tk.view = ak.rt._colorView), tk.resolveTarget = ak.rst?._colorView ?? void 0, tk.clearValue = ak.clrColor ?? Rk.clearColor, tk.loadOp = ak.clr ? "clear" : "load");
            if (kk._executeWithTransmission) return kk._executeWithTransmission(Bk._sampleCount);
            const Xk = Fk._currentEncoder.beginRenderPass(kk._renderPassDescriptor),
              wk = gk(kk, Xk);
            return Xk.end(), wk
          }(Vk, Fk, wk),
          dispose() {
            if (Vk._disposed) return;
            Vk._disposed = !0;
            const Fk = Vk._pendingMeshes;
            Fk && (Fk.length = 0);
            for (const kk of Vk._renderables) Vk._retireRenderable?.(Vk.engine, kk);
            Vk._passes.length = Vk._opaqueBindings.length = Vk._directBindings.length = 0, Vk._transparentBindings.length = Vk._renderables.length = Vk._ob.length = 0, Vk._ownsTargets && ((0, Rk.g)(kk.rt), (0, Rk.g)(kk.rst)), kk.depth?._eager || (0, Rk.g)(kk.depth);
            const Bk = Vk._sceneUBO;
            (0, Ak.e)(Vk.engine, (() => Bk.destroy())), Vk._batchState?._release(Vk.engine), Vk._batchState = void 0
          }
        };
      return Vk
    }

    function Hk(kk, Fk) {
      return Fk._sortDistance - kk._sortDistance || kk.renderable.order - Fk.renderable.order
    }

    function uk(kk, Fk) {
      return kk.renderable.order - Fk.renderable.order
    }

    function Mk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk._renderables,
        Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        tk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        ak = arguments.length > 4 ? arguments[4] : void 0;
      const Xk = kk._config,
        bk = Xk.rt,
        wk = kk._batchState,
        dk = Sk(Fk, kk.ef._renderableVersion);
      if (Bk) {
        const Fk = (Fk, Bk) => {
          Fk && (Bk || kk._ownsTargets || Fk._eager) && (0, Rk.e)(Fk, kk.engine)
        };
        Fk(bk), bk._descriptor.samples > 1 && Fk(Xk.rst), Fk(Xk.depth, !0)
      }
      const {
        _opaqueBindings: sk,
        _directBindings: Vk,
        _transparentBindings: Jk
      } = dk;
      try {
        for (const Bk of Fk) {
          const Fk = Bk.bind(kk.engine, kk._targetSignature);
          dk._batchState = kk._targetSignature._collectBatches?.(dk._batchState, Fk), Bk.isTransparent || Bk._transmissive ? Jk.push(Fk) : Bk._direct ? Vk.push(Fk) : sk.push(Fk)
        }
        sk.sort(uk), Vk.sort(uk), Bk && Uk(kk, kk.engine, !1)
      } catch (Ak) {
        throw dk._batchState?._release(void 0, ak ?? [wk]), Ak
      }
      return Bk && (! function(kk, Fk) {
        const Bk = kk._config,
          Rk = kk._colorAttachment;
        Rk.view = Fk._colorView, kk._renderPassDescriptor.colorAttachments = Fk._colorView ? [Rk] : [];
        const tk = Bk.depth ?? Fk,
          ak = tk._depthView;
        let Xk;
        if (ak) {
          const kk = tk._descriptor,
            Fk = (Bk.depth ? tk._eager : !1 === Bk.depthClear) ? "load" : "clear";
          Xk = {
            view: ak,
            depthClearValue: kk.depthClearValue ?? 0,
            depthLoadOp: Fk,
            depthStoreOp: "store"
          }, kk.dFormat?.includes("stencil") && (Xk.stencilClearValue = 0, Xk.stencilLoadOp = Fk, Xk.stencilStoreOp = "store")
        }
        kk._renderPassDescriptor.depthStencilAttachment = Xk
      }(kk, bk), kk._updateContext.targetWidth = bk._width, kk._updateContext.targetHeight = bk._height), tk && (Object.assign(kk, dk), wk?._release(kk.engine, [dk._batchState])), dk
    }

    function gk(kk, Fk) {
      const Bk = kk.engine,
        Rk = kk._config,
        ak = Rk.rt,
        Xk = kk.ef,
        bk = kk._opaqueBindings,
        wk = kk._ob,
        dk = kk._sceneBG;
      if (function(kk, Fk, Bk, Rk) {
          const tk = Fk?.viewport;
          if (!tk) return;
          const ak = Math.floor(tk.x * Bk),
            Xk = Math.floor((1 - tk.y - tk.height) * Rk),
            bk = Math.ceil((tk.x + tk.width) * Bk) - ak,
            wk = Math.ceil((1 - tk.y) * Rk) - Xk;
          kk.setViewport(ak, Xk, bk, wk, 0, 1), kk.setScissorRect(ak, Xk, bk, wk)
        }(Fk, Rk.cam ?? Xk.camera, ak._width, ak._height), Fk.setBindGroup(0, dk), kk._lastVis !== tk.e || !wk.length) {
        const Fk = ak._descriptor,
          Rk = Bk._device.createRenderBundleEncoder({
            colorFormats: Fk.format ? [Fk.format] : [],
            depthStencilFormat: kk._targetSignature._depthStencilFormat,
            sampleCount: Fk.samples
          });
        Rk.setBindGroup(0, dk), Gk(Rk, bk, Bk), wk[0] = Rk.finish(), kk._lastVis = tk.e
      }
      let sk = bk.length;
      return Fk.executeBundles(wk), Fk.setBindGroup(0, dk), sk += Gk(Fk, kk._directBindings, Bk), sk += Gk(Fk, kk._transparentBindings, Bk), sk
    }

    function Uk(kk, Fk) {
      let Bk = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Rk = Lk(Fk, kk.ef)._buffer;
      if (Rk === kk._lightsUBO) return;
      const tk = Fk._device.createBindGroup({
        layout: yk(Fk),
        entries: [{
          binding: 0,
          resource: {
            buffer: kk._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Rk
          }
        }]
      });
      kk._lightsUBO = Rk, kk._sceneBG = tk, Bk && (kk._ob = [])
    }

    function ck(kk, Fk) {
      for (const Bk of kk) Bk.update?.(Fk)
    }

    function Gk(kk, Fk, Bk) {
      let Rk = null,
        tk = 0;
      for (const ak of Fk) {
        const Fk = ak.renderable.mesh;
        Fk && !1 === Fk.visible || (ak.pipeline !== Rk && (kk.setPipeline(ak.pipeline), Rk = ak.pipeline), tk += ak.draw(kk, Bk))
      }
      return tk
    }

    function Tk(kk) {
      const Fk = kk._materialSwapQueue;
      if (!Fk[0] || kk._runtimeBuilds?.w) return;
      let Rk, tk, ak;
      const Xk = kk._renderables;
      for (const Bk of Fk) {
        const Fk = Bk.material;
        if (!Fk) continue;
        const bk = Bk._runtimeThinBuild;
        if (bk) {
          tk = bk(kk, Bk, tk);
          continue
        }
        const wk = kk._groups.get(Fk._buildGroup),
          dk = wk?.r;
        if (!dk) {
          (ak ??= []).push(Bk);
          continue
        }
        if (wk._w?.(Bk)) {
          (ak ??= []).push([Bk, Fk]);
          continue
        }
        const sk = kk._meshDisposables.get(Bk);
        sk && (kk._meshDisposables.delete(Bk), (0, Ak.e)(kk.surface.engine, (() => sk.forEach((kk => kk())))));
        const Vk = wk.o;
        let Jk;
        for (let kk = Xk.length; kk--;) Xk[kk].mesh === Bk && (Jk = Xk.splice(kk, 1)[0]);
        Fk._csmGen = -~Fk._csmGen;
        const ek = dk(kk, Bk);
        if (Vk) {
          const kk = Vk.indexOf(Jk);
          kk < 0 ? Vk.push(ek) : Vk[kk] = ek
        }
        Rk = Xk.push(ek)
      }
      if (Rk && (Xk.sort(((kk, Fk) => kk.order - Fk.order)), kk._renderableVersion++, kk._materialEpoch++), Fk.length = 0, !ak) return tk;
      const bk = ak;
      return Bk.e(355).then((() => Bk(61013))).then((Fk => {
        let {
          C: Bk
        } = Fk;
        return Bk(kk, bk, tk)
      }), (Fk => {
        const Bk = kk._runtimeBuilds;
        Bk ? Bk._x(Fk) : console.error(Fk)
      }))
    }
    var rk = null;

    function Dk(kk, Fk) {
      const Bk = kk.engine,
        tk = {
          _kind: "ef",
          surface: kk,
          clearColor: {
            r: .2,
            g: .2,
            b: .3,
            a: 1
          },
          camera: null,
          lights: [],
          meshes: [],
          animationGroups: [],
          fog: null,
          clipPlane: null,
          shadowGenerators: [],
          imageProcessing: {
            exposure: 1,
            contrast: 1,
            toneMappingEnabled: !1
          },
          _renderables: [],
          _prePasses: [],
          _pickSources: [],
          _uniformUpdaters: [],
          fixedDeltaMs: 0,
          _beforeRender: [],
          _deferredBuilders: [],
          _groups: new Map,
          _disposables: [],
          _meshDisposables: new Map,
          _materialSwapQueue: [],
          _renderableVersion: 0,
          _materialEpoch: 0,
          _built: !1,
          _drawCallsPre: 0,
          _update() {
            Bk.useFloatingOrigin && tk.camera && !tk.camera._useFloatingOrigin && (tk.camera._useFloatingOrigin = !0, tk.camera._viewVer = -1, tk.camera._vpVer = -1);
            const kk = tk.fixedDeltaMs > 0 ? tk.fixedDeltaMs : Bk._currentDelta,
              Fk = Bk._currentEncoder;
            let Rk = 0;
            for (const Bk of tk._beforeRender) Bk(kk);
            tk._materialSwapQueue.length && Tk(tk);
            for (const ak of tk._prePasses) Rk += ak.execute(Fk, Bk);
            for (const ak of tk._uniformUpdaters) ak.update(Bk);
            tk._drawCallsPre = Rk
          },
          _record: () => tk._frameGraph.execute(),
          _resize() {
            tk._frameGraph.build()
          }
        },
        Xk = function() {
          const kk = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Fk = 0; Fk < kk._tasks.length; Fk++) ak(kk, kk._tasks[Fk]);
              for (const Fk of kk._tasks)
                for (const kk of Fk._passes) kk._initialize()
            },
            execute() {
              let Fk = 0;
              for (const Bk of kk._tasks)
                if (!1 !== Bk.executionEnabled)
                  if (Bk.execute) Fk += Bk.execute();
                  else
                    for (const kk of Bk._passes) Fk += kk._execute();
              return Fk
            },
            dispose() {
              for (const Fk of kk._tasks) Fk.dispose();
              kk._tasks.length = 0, kk._currentProcessedTask = null
            }
          };
          return kk
        }();
      if (tk._frameGraph = Xk, !1 !== Fk?.defaultRenderTask) {
        const Fk = kk.msaaSamples > 1,
          ak = Fk ? (0, Rk.c)({
            lbl: "scene-color",
            format: kk.format,
            dFormat: "depth24plus-stencil8",
            samples: kk.msaaSamples,
            size: kk
          }) : kk.scRT,
          bk = Fk ? void 0 : (0, Rk.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: kk
          });
        ! function(kk, Fk) {
          kk._tasks.push(Fk)
        }(Xk, Nk({
          name: "ef",
          rt: ak,
          rst: Fk ? kk.scRT : void 0,
          depth: bk
        }, Bk, tk))
      }
      return tk._disposables.push((() => Xk.dispose())), tk
    }
    async function zk(kk) {
      const Fk = kk;
      for (Fk._built || (Fk._materialSwapQueue.length = 0); Fk._deferredBuilders.length;) {
        const kk = Fk._deferredBuilders.splice(0);
        await Promise.all(kk.map((kk => kk())))
      }
      await Tk(Fk), rk?.get(Fk)?.() || (Fk._runtimeBuilds?._e(), Fk._renderableVersion++, Fk._built = !0), await (Fk._rebuildHook?.(Fk))
    }
    var Pk = null;
    async function hk(kk) {
      const Fk = kk,
        Rk = Fk.surface;
      (0, tk.l)(Rk, Fk) || (await zk(kk), Fk._renderables.sort(qk), await Promise.all(Fk._frameGraph._tasks.map((kk => kk._preload?.()))), Pk && await Pk(Fk), Fk._frameGraph.build(), Rk._renderingContexts[0] && (await Bk.e(353).then((() => Bk(61006)))).configureSwapchainOverlayScene(Rk, Fk), rk?.get(Fk)?.() || (0, tk.o)(Rk, Fk))
    }
    var qk = (kk, Fk) => kk.order - Fk.order
  },
  41124: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => dk,
      h: () => sk
    });
    var Rk = Bk(41081),
      tk = Bk(41085),
      ak = Bk(41088),
      Xk = Bk(41097),
      bk = Bk(41102),
      wk = Bk(41105);

    function dk(kk, Fk, Bk) {
      let bk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Fk < 1 || Bk < 1) && (0, Rk.c)(676, Fk, Bk);
      const dk = kk._device,
        sk = bk.mipMaps ?? !1,
        Vk = bk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Jk = sk ? (0, wk.b)(Fk, Bk) : 1,
        Ak = dk.createTexture({
          size: {
            width: Fk,
            height: Bk
          },
          format: Vk,
          mipLevelCount: Jk,
          usage: tk.h.TEXTURE_BINDING | tk.h.COPY_DST | tk.h.RENDER_ATTACHMENT
        }),
        ek = {
          addressModeU: bk.addressModeU ?? "clamp-to-edge",
          addressModeV: bk.addressModeV ?? "clamp-to-edge",
          minFilter: bk.minFilter ?? "linear",
          magFilter: bk.magFilter ?? "linear",
          mipmapFilter: sk ? "linear" : "nearest"
        },
        yk = (0, Xk.e)(kk, ek),
        fk = {
          texture: Ak,
          view: Ak.createView(),
          sampler: yk,
          width: Fk,
          height: Bk
        };
      return (0, ak.c)(fk), kk._dlr && kk._dlr.t(fk, {
        kind: "dynamic",
        width: Fk,
        height: Bk,
        format: Vk,
        levels: Jk,
        samplerDesc: ek,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), fk
    }

    function sk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const tk = Rk.invertY ?? !0,
        ak = Rk.premultiplyAlpha ?? !1;
      kk._device.queue.copyExternalImageToTexture({
        source: Bk,
        flipY: tk
      }, {
        texture: Fk.texture,
        premultipliedAlpha: ak
      }, [Fk.width, Fk.height]);
      const Xk = Fk._recoverySource;
      Xk && "dynamic" === Xk.kind && (Xk.source = Bk, Xk.flipY = tk, Xk.premultipliedAlpha = ak), Fk.texture.mipLevelCount > 1 && (0, bk.generateMipmaps)(kk, Fk.texture)
    }
  },
  41117: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => wk
    });
    var Rk = Bk(41081),
      tk = Bk(41085),
      ak = Bk(41088),
      Xk = Bk(41097),
      bk = Bk(41105);
    async function wk(kk, Fk) {
      let wk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [dk, sk] = function(kk) {
        const Fk = kk,
          Bk = [
            [Fk.displayWidth, Fk.displayHeight],
            [Fk.videoWidth, Fk.videoHeight],
            [Fk.naturalWidth, Fk.naturalHeight],
            [Fk.width, Fk.height]
          ];
        for (const [Rk, tk] of Bk)
          if (void 0 !== Rk && void 0 !== tk && Number.isInteger(Rk) && Number.isInteger(tk) && Rk > 0 && tk > 0) return [Rk, tk];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Fk), [Vk, Jk] = function(kk, Fk, Bk) {
        if (void 0 === Bk) return [kk, Fk];
        if (!Number.isInteger(Bk) || Bk < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Bk})`);
        if (Math.max(kk, Fk) <= Bk) return [kk, Fk];
        const Rk = Bk / Math.max(kk, Fk);
        return kk >= Fk ? [Bk, Math.max(1, Math.round(Fk * Rk))] : [Math.max(1, Math.round(kk * Rk)), Bk]
      }(dk, sk, wk.maxDimension), Ak = wk.mipMaps ?? !0, ek = wk.premultiplyAlpha ?? !1;
      let yk = Fk,
        fk = null;
      const mk = {
        texture: null
      };
      try {
        Vk === dk && Jk === sk || (fk = await createImageBitmap(Fk, {
          resizeWidth: Vk,
          resizeHeight: Jk,
          resizeQuality: "high",
          premultiplyAlpha: ek ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), yk = fk);
        const Wk = kk._device,
          vk = wk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          ik = Ak ? (0, bk.b)(Vk, Jk) : 1,
          Yk = ik > 1 ? (await Promise.resolve().then((() => Bk(41102)))).generateMipmaps : null,
          Lk = {
            addressModeU: wk.addressModeU ?? "repeat",
            addressModeV: wk.addressModeV ?? "repeat",
            minFilter: wk.minFilter ?? "linear",
            magFilter: wk.magFilter ?? "linear",
            mipmapFilter: Ak ? "linear" : "nearest"
          };
        Lk.maxAnisotropy = "linear" === Lk.minFilter && "linear" === Lk.magFilter && "linear" === Lk.mipmapFilter ? 4 : 1;
        const Ok = wk.invertY ?? !0,
          Ek = async Fk => {
            let Bk;
            Wk.pushErrorScope("validation"), Wk.pushErrorScope("out-of-memory");
            let ak = null;
            try {
              const Bk = mk.texture = Wk.createTexture({
                size: {
                  width: Vk,
                  height: Jk
                },
                format: vk,
                mipLevelCount: ik,
                usage: tk.h.TEXTURE_BINDING | tk.h.COPY_DST | tk.h.RENDER_ATTACHMENT
              });
              Wk.queue.copyExternalImageToTexture({
                source: Fk,
                flipY: Ok
              }, {
                texture: Bk,
                premultipliedAlpha: ek
              }, {
                width: Vk,
                height: Jk
              }), Yk && Yk(kk, Bk), ak = (0, Xk.e)(kk, Lk)
            } catch (Ak) {
              Bk = Ak
            }
            const [bk, wk] = await Promise.all([Wk.popErrorScope(), Wk.popErrorScope()]);
            if (Bk) throw Bk;
            const dk = wk ?? bk;
            if (dk) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${dk.message}`, {
              cause: dk
            });
            const sk = mk.texture;
            return sk && ak || (0, Rk.c)(677), {
              texture: sk,
              view: sk.createView(),
              sampler: ak,
              width: Vk,
              height: Jk
            }
          }, Sk = await (kk._dlr?.x(yk, Vk, Jk, vk, ik, Lk, Ok, ek, Ek)) ?? await Ek(yk);
        return (0, ak.c)(Sk), Sk
      } catch (Wk) {
        throw mk.texture?.destroy(), Wk
      } finally {
        fk?.close()
      }
    }
  },
  41102: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      generateMipmaps: () => Ak,
      recordMipmaps: () => ek
    });
    var Rk = Bk(41085),
      tk = Bk(41097),
      ak = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Xk = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      bk = null,
      wk = null,
      dk = null,
      sk = null,
      Vk = null;

    function Jk(kk) {
      const Fk = kk._device;
      Fk !== Vk && (bk?.clear(), bk = null, wk = null, dk = null, sk = null, Vk = null, Vk = Fk), wk ??= Fk.createShaderModule({
        code: Xk
      }), dk ??= function(kk) {
        return (0, tk.e)(kk, ak)
      }(kk), sk ??= Fk.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Rk.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Rk.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Ak(kk, Fk, Bk) {
      const Rk = kk._device,
        tk = Rk.createCommandEncoder();
      ek(kk, Fk, tk, Bk), Rk.queue.submit([tk.finish()])
    }

    function ek(kk, Fk, Bk, Rk) {
      if (Fk.mipLevelCount <= 1) return;
      const tk = kk._device,
        ak = function(kk, Fk) {
          const Bk = kk._device;
          Jk(kk), bk ??= new Map;
          let Rk = bk.get(Fk);
          return Rk || (Rk = Bk.createRenderPipeline({
            layout: Bk.createPipelineLayout({
              bindGroupLayouts: [sk]
            }),
            vertex: {
              module: wk,
              entryPoint: "vs"
            },
            fragment: {
              module: wk,
              entryPoint: "fs",
              targets: [{
                format: Fk
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), bk.set(Fk, Rk)), Rk
        }(kk, Fk.format),
        Xk = null != Rk ? {
          dimension: "2d",
          baseArrayLayer: Rk,
          arrayLayerCount: 1
        } : {};
      for (let bk = 1; bk < Fk.mipLevelCount; bk++) {
        const kk = Fk.createView({
            baseMipLevel: bk - 1,
            mipLevelCount: 1,
            ...Xk
          }),
          Rk = Fk.createView({
            baseMipLevel: bk,
            mipLevelCount: 1,
            ...Xk
          }),
          wk = tk.createBindGroup({
            layout: sk,
            entries: [{
              binding: 0,
              resource: kk
            }, {
              binding: 1,
              resource: dk
            }]
          }),
          Vk = Bk.beginRenderPass({
            colorAttachments: [{
              view: Rk,
              loadOp: "clear",
              storeOp: "store",
              clearValue: {
                r: 0,
                g: 0,
                b: 0,
                a: 0
              }
            }]
          });
        Vk.setPipeline(ak), Vk.setBindGroup(0, wk), Vk.draw(3), Vk.end()
      }
    }
  },
  41105: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      return Math.floor(Math.log2(Math.max(kk, Fk))) + 1
    }
    Bk.d(Fk, {
      b: () => Rk
    })
  },
  41077: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => dk,
      f: () => sk
    });
    var Rk = Bk(41081),
      tk = Bk(41085),
      ak = Bk(41088),
      Xk = Bk(41097),
      bk = Bk(41102),
      wk = Bk(41105);

    function dk(kk, Fk, Bk, bk) {
      let dk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Fk < 1 || Bk < 1 || bk < 1) && (0, Rk.c)(722, Fk, Bk, bk);
      const sk = kk._device,
        Vk = dk.mipMaps ?? !0,
        Jk = dk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Ak = sk.createTexture({
          size: {
            width: Fk,
            height: Bk,
            depthOrArrayLayers: bk
          },
          dimension: "2d",
          format: Jk,
          mipLevelCount: Vk ? (0, wk.b)(Fk, Bk) : 1,
          usage: tk.h.TEXTURE_BINDING | tk.h.COPY_DST | tk.h.RENDER_ATTACHMENT
        }),
        ek = (0, Xk.e)(kk, {
          addressModeU: dk.addressModeU ?? "repeat",
          addressModeV: dk.addressModeV ?? "repeat",
          minFilter: dk.minFilter ?? "linear",
          magFilter: dk.magFilter ?? "linear",
          mipmapFilter: Vk ? "linear" : "nearest"
        }),
        yk = {
          texture: Ak,
          view: Ak.createView({
            dimension: "2d-array"
          }),
          sampler: ek,
          width: Fk,
          height: Bk,
          layers: bk
        };
      return (0, ak.c)(yk), yk
    }

    function sk(kk, Fk, Bk, tk) {
      let ak = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Bk < 0 || Bk >= Fk.layers || (0 | Bk) !== Bk) && (0, Rk.c)(723, Fk.layers, Bk);
      const Xk = ak.invertY ?? !0,
        wk = ak.premultiplyAlpha ?? !1;
      kk._device.queue.copyExternalImageToTexture({
        source: tk,
        flipY: Xk
      }, {
        texture: Fk.texture,
        origin: [0, 0, Bk],
        premultipliedAlpha: wk
      }, [Fk.width, Fk.height, 1]), Fk.texture.mipLevelCount > 1 && (0, bk.generateMipmaps)(kk, Fk.texture, Bk)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);