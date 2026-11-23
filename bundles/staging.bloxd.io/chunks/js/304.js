export const id = 304;
export const ids = [304];
export const modules = {
  41705: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Zk,
      g: () => Jk,
      j: () => jk,
      n: () => ek,
      o: () => Pk,
      s: () => xk
    });
    var Xk = Ik(41652);
    var Tk = "Babylon Lite v1.32.0",
      ik = Ik(41707);

    function yk(kk) {
      return "clientWidth" in kk
    }
    var lk = 1;

    function ak(kk, Fk, Ik) {
      const ak = Fk.getContext("webgpu");
      ak || (0, Xk.c)(54), yk(Fk) && Fk.setAttribute("data-engine", Tk);
      const qk = Ik?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Lk = Ik?.srgb ? (tk = qk).endsWith("-srgb") ? tk : `${tk}-srgb` : qk;
      var tk;
      const Zk = Ik?.alphaMode ?? "opaque";
      ak.configure({
        device: kk._device,
        format: qk,
        alphaMode: Zk,
        viewFormats: [Lk]
      });
      const jk = 1 === Ik?.msaaSamples ? 1 : 4,
        ek = (0, ik.d)({
          lbl: "swapchain",
          format: Lk,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return ek._eager = !0, {
        engine: kk,
        canvas: Fk,
        format: Lk,
        msaaSamples: jk,
        scRT: ek,
        maxDevicePixelRatio: Ik?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: lk++,
        _context: ak,
        _configureFormat: qk,
        _alphaMode: Zk,
        _renderingContexts: []
      }
    }

    function qk(kk) {
      const Fk = kk._context.getCurrentTexture(),
        Ik = kk.scRT;
      Ik._colorTexture = Fk, Ik._colorView = Fk.createView({
        format: kk.format
      }), Ik._width = Fk.width, Ik._height = Fk.height
    }

    function Lk(kk) {
      const Fk = kk.canvas;
      if (!yk(Fk)) return;
      const Ik = kk._w ?? Fk.clientWidth,
        Xk = kk._h ?? Fk.clientHeight;
      if (!(Ik > 0 && Xk > 0)) return;
      const Tk = Math.min(globalThis.devicePixelRatio || 1, kk.maxDevicePixelRatio);
      tk(kk, Ik * Tk | 0, Xk * Tk | 0)
    }

    function tk(kk, Fk, Ik) {
      const Xk = kk.canvas,
        Tk = 0 | Fk,
        ik = 0 | Ik;
      if (Tk > 0 && ik > 0 && (Tk !== Xk.width || ik !== Xk.height)) {
        Xk.width = Tk, Xk.height = ik, kk.scRT._width = Tk, kk.scRT._height = ik;
        for (const Fk of kk._renderingContexts) Fk._resize?.()
      }
    }
    var Zk = 0;

    function jk(kk, Fk) {
      return -1 !== kk._renderingContexts.indexOf(Fk)
    }

    function ek(kk, Fk) {
      return -1 === kk._renderingContexts.indexOf(Fk) && (kk._renderingContexts.push(Fk), !0)
    }
    var wk = null;
    var Hk = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Jk(kk, Fk) {
      const ik = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...wk ? wk() : {}
      });
      ik || (0, Xk.c)(47);
      const yk = wk?.deviceFeatures?.(ik, Fk) ?? function(kk) {
          return Hk.filter((Fk => kk.features.has(Fk)))
        }(ik),
        lk = await ik.requestDevice({
          requiredFeatures: yk,
          requiredLimits: Fk?.requiredLimits
        });
      console.log(`${Tk} - WebGPU engine`);
      const tk = !!Fk?.useHighPrecisionMatrix,
        Zk = !!Fk?.useFloatingOrigin;
      if (Zk && !tk && (0, Xk.c)(48), tk) {
        const {
          allocateF64Mat4: kk
        } = await Ik.e(357).then((() => Ik(61349)));
        0
      }
      let jk, ek, Jk, xk;
      if (Zk) {
        const [{
          wrapRenderableForFO: kk,
          lightFoVersion: Fk,
          applyLightFoOffset: Xk
        }, {
          makePackMeshWorld: Tk
        }] = await Promise.all([Ik.e(358).then((() => Ik(61356))), Ik.e(359).then((() => Ik(61359)))]);
        jk = kk, ek = Tk, Jk = Fk, xk = Xk
      }
      const Pk = {
          _device: lk
        },
        Kk = [Pk];
      return Object.assign(Pk, {
        engine: Pk,
        surfaces: Kk,
        _surfaces: Kk,
        _device: lk,
        _options: Fk,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: tk,
        useFloatingOrigin: Zk,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: jk,
        _makePackMeshWorld: ek,
        _lightFoVersion: Jk,
        _applyLightFoOffset: xk
      }, ak(Pk, kk, Fk)), Lk(Pk), qk(Pk), Pk
    }

    function xk(kk, Fk, Ik) {
      tk(kk, Fk, Ik)
    }

    function Pk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk.surfaces;
      if (Ik !== kk.surfaces)
        for (let Tk = Ik.length; Tk--;) Ik[Tk].engine !== kk && (0, Xk.c)(49);
      Kk(kk, Fk, Ik)
    }

    function Kk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : kk._surfaces,
        Xk = 0;
      for (let ik = Ik.length; ik--;) Xk += Ik[ik]._renderingContexts.length;
      if (!Xk) return kk.drawCallCount = 0, kk._flushGpuRetirements?.(kk);
      const Tk = kk._device.createCommandEncoder({
        label: "frame"
      });
      kk._currentEncoder = Tk, kk._currentDelta = Fk;
      try {
        kk._gpuTimerBegin?.(Tk), Xk = 0;
        for (let kk = 0; kk < Ik.length; kk++) {
          const Fk = Ik[kk];
          Fk._capturePreFrame?.(Fk), qk(Fk);
          const Tk = Fk._renderingContexts;
          for (let kk = 0; kk < Tk.length; kk++) {
            const Fk = Tk[kk];
            Fk._update(), Xk += Fk._drawCallsPre + Fk._record()
          }
        }
        const Fk = kk._currentEncoder;
        for (let kk = 0; kk < Ik.length; kk++) {
          const Xk = Ik[kk];
          Xk._captureService?.(Xk, Fk)
        }
        kk._gpuTimerEnd?.(Fk), kk._cbs[0] = Fk.finish(), kk._device.queue.submit(kk._cbs), kk._flushGpuRetirements?.(kk), kk.drawCallCount = Xk, kk._gpuTimerResolve?.()
      } finally {
        kk._currentEncoder = void 0
      }
    }
  },
  41655: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk,
      g: () => ik,
      h: () => Xk
    });
    var Xk = globalThis.GPUTextureUsage,
      Tk = globalThis.GPUBufferUsage,
      ik = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41723: (kk, Fk, Ik) => {
    function Xk(kk) {
      Tk(kk.splice(0))
    }

    function Tk(kk) {
      for (const Ik of kk) try {
        Ik()
      } catch (Fk) {
        console.error("GPU resource retirement failed.", Fk)
      }
    }

    function ik(kk, Fk) {
      kk._flushGpuRetirements ??= yk, (kk._retirements ??= []).push(Fk)
    }

    function yk(kk) {
      const Fk = kk._retirements;
      if (!Fk) return;
      kk._retirements = null;
      const Ik = kk._retiring ??= new Set;
      Ik.add(Fk), queueMicrotask((() => {
        kk._device.queue.onSubmittedWorkDone().then((() => {
          Ik.delete(Fk), Xk(Fk)
        })).catch((() => {}))
      }))
    }
    Ik.d(Fk, {
      b: () => ik
    })
  },
  41707: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => ik,
      e: () => yk,
      g: () => lk
    });
    var Xk = Ik(41655);

    function Tk(kk) {
      const Fk = kk.size;
      return "canvas" in Fk ? Fk.canvas : Fk
    }

    function ik(kk) {
      return {
        _descriptor: kk,
        _resolveSize: Tk,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function yk(kk, Fk) {
      if (kk._eager) return void kk._syncEager?.(Fk);
      lk(kk);
      const Ik = kk._descriptor,
        {
          width: ik,
          height: yk
        } = (kk._resolveSize ?? Tk)(Ik);
      kk._width = ik, kk._height = yk;
      const ak = Fk._device;
      Ik.format && (kk._colorTexture = ak.createTexture({
        label: Ik.lbl,
        size: {
          width: ik,
          height: yk
        },
        format: Ik.format,
        sampleCount: Ik.samples,
        usage: Xk.h.RENDER_ATTACHMENT | Xk.h.TEXTURE_BINDING | Xk.h.COPY_SRC | Xk.h.COPY_DST
      }), kk._colorView = kk._colorTexture.createView()), Ik.dFormat && (kk._depthTexture = ak.createTexture({
        label: Ik.lbl,
        size: {
          width: ik,
          height: yk
        },
        format: Ik.dFormat,
        sampleCount: Ik.samples,
        usage: Xk.h.RENDER_ATTACHMENT | Xk.h.TEXTURE_BINDING
      }), kk._depthView = kk._depthTexture.createView())
    }

    function lk(kk) {
      if (!kk || kk._eager && !kk._disposeAttachments) return;
      const Fk = kk._colorTexture,
        Ik = kk._depthTexture;
      if (kk._colorTexture = kk._depthTexture = null, kk._colorView = kk._depthView = null, kk._width = kk._height = 0, kk._disposeAttachments) kk._disposeAttachments(Fk, Ik);
      else try {
        Fk?.destroy()
      } finally {
        !1 !== kk._ownsDepthTexture && Ik?.destroy()
      }
    }
  },
  41720: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk,
      i: () => Tk,
      j: () => ik
    });
    var Xk = Float32Array,
      Tk = Float64Array,
      ik = Uint32Array
  },
  41729: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    var Xk = 16
  },
  41652: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Tk
    });
    var Xk = null;

    function Tk(kk) {
      for (var Fk = arguments.length, Ik = new Array(Fk > 1 ? Fk - 1 : 0), Tk = 1; Tk < Fk; Tk++) Ik[Tk - 1] = arguments[Tk];
      const ik = new Error(Xk?.(kk, Ik) ?? `#${kk}`);
      throw ik.lite = Ik, ik
    }
  },
  41688: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk
    });
    var Xk = Ik(41670);

    function Tk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ik = Fk.compare,
        Tk = Fk.lodMinClamp ?? 0,
        ik = Fk.lodMaxClamp ?? 32,
        yk = void 0 !== Ik || 0 !== Tk || 32 !== ik ? `${Ik??""}:${Tk}:${ik}` : "";
      return (0, Xk.e)(kk, Fk, yk)
    }
  },
  41663: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = null;

    function Tk(kk) {
      const Fk = Xk ??= new WeakMap;
      Fk.set(kk, (Fk.get(kk) ?? 0) + 1)
    }

    function ik(kk) {
      Tk(kk.texture)
    }
  },
  41670: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => lk
    });
    var Xk = null,
      Tk = "nearest",
      ik = "clamp-to-edge",
      yk = {
        minFilter: Tk,
        magFilter: Tk,
        mipmapFilter: Tk,
        addressModeU: ik,
        addressModeV: ik,
        addressModeW: ik,
        maxAnisotropy: 1
      };

    function lk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Tk = kk._device,
        ik = Xk ??= new WeakMap;
      let lk = ik.get(Tk);
      lk || ik.set(Tk, lk = new Map);
      let ak = Ik;
      for (const Xk in yk) {
        const kk = Xk;
        ak += `:${Fk[kk]??yk[kk]}`
      }
      let qk = lk.get(ak);
      return qk || lk.set(ak, qk = Tk.createSampler(Fk)), qk
    }
  },
  41712: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Ck,
      e: () => Wk
    });
    var Xk = Ik(41707),
      Tk = Ik(41705);

    function ik(kk, Fk) {
      Fk._passes.length = 0, kk._currentProcessedTask = Fk;
      try {
        Fk.record()
      } finally {
        kk._currentProcessedTask = null
      }
    }
    var yk = Ik(41720);

    function lk(kk) {
      const Fk = kk.worldMatrixVersion;
      if (kk._viewVer === Fk) return kk._viewCache;
      const Ik = kk._viewCache,
        Xk = kk.worldMatrix,
        Tk = kk._useFloatingOrigin,
        ik = Tk ? 0 : Xk[12],
        yk = Tk ? 0 : Xk[13],
        lk = Tk ? 0 : Xk[14];
      return Ik[0] = Xk[0], Ik[1] = Xk[4], Ik[2] = Xk[8], Ik[3] = 0, Ik[4] = Xk[1], Ik[5] = Xk[5], Ik[6] = Xk[9], Ik[7] = 0, Ik[8] = Xk[2], Ik[9] = Xk[6], Ik[10] = Xk[10], Ik[11] = 0, Ik[12] = -(Xk[0] * ik + Xk[1] * yk + Xk[2] * lk), Ik[13] = -(Xk[4] * ik + Xk[5] * yk + Xk[6] * lk), Ik[14] = -(Xk[8] * ik + Xk[9] * yk + Xk[10] * lk), Ik[15] = 1, kk._viewVer = Fk, Ik
    }
    var ak = null;

    function qk(kk) {
      return kk._projFov === kk.fov && kk._projNear === kk.nearPlane && kk._projFar === kk.farPlane || (kk._projFov = kk.fov, kk._projNear = kk.nearPlane, kk._projFar = kk.farPlane, kk._projRev = (kk._projRev ?? 0) + 1), kk.worldMatrixVersion + (kk._projRev ?? 0)
    }

    function Lk(kk, Fk) {
      const Ik = qk(kk);
      if (kk._projVer === Ik && kk._projAspect === Fk) return kk._projCache;
      const Xk = kk._projCache;
      return null !== ak && kk.ortho ? ak(kk, Fk, Xk) : function(kk, Fk, Ik, Xk, Tk) {
        const ik = 1 / Math.tan(.5 * Fk),
          yk = Tk - Xk;
        kk[0] = ik / Ik, kk[5] = ik, kk[10] = -Xk / yk, kk[11] = 1, kk[14] = Tk * Xk / yk
      }(Xk, kk.fov, Fk, kk.nearPlane, kk.farPlane), kk._projVer = Ik, kk._projAspect = Fk, Xk
    }
    var tk = Ik(41655);

    function Zk(kk, Fk, Ik) {
      return kk._device.createBuffer({
        label: Ik,
        size: (Xk = Fk, Tk = 16, Math.ceil(Xk / Tk) * Tk),
        usage: tk.e.UNIFORM | tk.e.COPY_DST
      });
      var Xk, Tk
    }
    var jk = Ik(41723),
      ek = null;

    function wk(kk) {
      const Fk = kk._device,
        Ik = ek ??= new WeakMap;
      let Xk = Ik.get(Fk);
      return Xk || (Xk = Fk.createBindGroupLayout({
        label: "Yw",
        entries: [{
          binding: 0,
          visibility: tk.g.VERTEX | tk.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: tk.g.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Ik.set(Fk, Xk)), Xk
    }

    function Hk(kk, Fk, Ik) {
      const Xk = kk._device,
        Tk = Zk(kk, Fk.byteLength, Ik);
      try {
        Xk.queue.writeBuffer(Tk, 0, Fk.buffer, Fk.byteOffset, Fk.byteLength)
      } catch (ik) {
        throw Tk.destroy(), ik
      }
      return Tk
    }
    var Jk = Ik(41729),
      xk = new yk.j(1),
      Pk = new yk.e(xk.buffer);

    function Kk(kk) {
      let Fk = 0;
      for (const Ik of kk) Fk += Ik._lightVersion ?? 0;
      return Fk
    }

    function Qk(kk, Fk) {
      kk.fill(0);
      let Ik = 0;
      for (const Xk of Fk) {
        if (Ik >= Jk.b) break;
        Xk._writeLightUbo && (Xk._writeLightUbo(kk, 4 + 16 * Ik), Ik++)
      }
      xk[0] = Ik, kk[0] = Pk[0]
    }

    function sk(kk, Fk) {
      let Ik = Fk._lightGpuState;
      const Xk = 16 + 16 * Jk.b * 4;
      if (Ik && Ik._byteSize === Xk) return Ik;
      const Tk = !Ik;
      Ik?._buffer.destroy();
      const ik = new yk.e(Xk / 4);
      return Qk(ik, Fk.lights), kk._applyLightFoOffset?.(ik, Fk), Ik = {
        _buffer: Hk(kk, ik),
        _scratch: ik,
        kN: Kk(Fk.lights) + (kk._lightFoVersion?.(Fk) ?? 0),
        _listVersion: Fk._lightListVersion ?? 0,
        _lightCount: Fk.lights.length,
        _byteSize: Xk
      }, Fk._lightGpuState = Ik, Tk && Fk._disposables.push((() => {
        Fk._lightGpuState?._buffer.destroy(), Fk._lightGpuState = void 0
      })), Ik
    }

    function Vk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Tk = Fk;
      if (0 === Xk && 16 === Tk.length) return void kk.set(Tk, Ik);
      const ik = Xk,
        yk = Ik;
      kk[yk + 0] = Tk[ik + 0], kk[yk + 1] = Tk[ik + 1], kk[yk + 2] = Tk[ik + 2], kk[yk + 3] = Tk[ik + 3], kk[yk + 4] = Tk[ik + 4], kk[yk + 5] = Tk[ik + 5], kk[yk + 6] = Tk[ik + 6], kk[yk + 7] = Tk[ik + 7], kk[yk + 8] = Tk[ik + 8], kk[yk + 9] = Tk[ik + 9], kk[yk + 10] = Tk[ik + 10], kk[yk + 11] = Tk[ik + 11], kk[yk + 12] = Tk[ik + 12], kk[yk + 13] = Tk[ik + 13], kk[yk + 14] = Tk[ik + 14], kk[yk + 15] = Tk[ik + 15]
    }

    function zk(kk, Fk, Ik, Xk, Tk) {
      kk.fill(0);
      const ik = function(kk, Fk) {
          const Ik = qk(kk);
          if (kk._vpVer === Ik && kk._vpAspect === Fk) return kk._vpCache;
          const Xk = kk._vpCache;
          return function(kk, Fk, Ik, Xk, Tk, ik) {
            const yk = Ik[Xk],
              lk = Ik[Xk + 1],
              ak = Ik[Xk + 2],
              qk = Ik[Xk + 3],
              Lk = Ik[Xk + 4],
              tk = Ik[Xk + 5],
              Zk = Ik[Xk + 6],
              jk = Ik[Xk + 7],
              ek = Ik[Xk + 8],
              wk = Ik[Xk + 9],
              Hk = Ik[Xk + 10],
              Jk = Ik[Xk + 11],
              xk = Ik[Xk + 12],
              Pk = Ik[Xk + 13],
              Kk = Ik[Xk + 14],
              Qk = Ik[Xk + 15];
            let sk = Tk[ik],
              Vk = Tk[ik + 1],
              zk = Tk[ik + 2],
              Sk = Tk[ik + 3];
            kk[Fk] = yk * sk + Lk * Vk + ek * zk + xk * Sk, kk[Fk + 1] = lk * sk + tk * Vk + wk * zk + Pk * Sk, kk[Fk + 2] = ak * sk + Zk * Vk + Hk * zk + Kk * Sk, kk[Fk + 3] = qk * sk + jk * Vk + Jk * zk + Qk * Sk, sk = Tk[ik + 4], Vk = Tk[ik + 5], zk = Tk[ik + 6], Sk = Tk[ik + 7], kk[Fk + 4] = yk * sk + Lk * Vk + ek * zk + xk * Sk, kk[Fk + 5] = lk * sk + tk * Vk + wk * zk + Pk * Sk, kk[Fk + 6] = ak * sk + Zk * Vk + Hk * zk + Kk * Sk, kk[Fk + 7] = qk * sk + jk * Vk + Jk * zk + Qk * Sk, sk = Tk[ik + 8], Vk = Tk[ik + 9], zk = Tk[ik + 10], Sk = Tk[ik + 11], kk[Fk + 8] = yk * sk + Lk * Vk + ek * zk + xk * Sk, kk[Fk + 9] = lk * sk + tk * Vk + wk * zk + Pk * Sk, kk[Fk + 10] = ak * sk + Zk * Vk + Hk * zk + Kk * Sk, kk[Fk + 11] = qk * sk + jk * Vk + Jk * zk + Qk * Sk, sk = Tk[ik + 12], Vk = Tk[ik + 13], zk = Tk[ik + 14], Sk = Tk[ik + 15], kk[Fk + 12] = yk * sk + Lk * Vk + ek * zk + xk * Sk, kk[Fk + 13] = lk * sk + tk * Vk + wk * zk + Pk * Sk, kk[Fk + 14] = ak * sk + Zk * Vk + Hk * zk + Kk * Sk, kk[Fk + 15] = qk * sk + jk * Vk + Jk * zk + Qk * Sk
          }(Xk, 0, Lk(kk, Fk), 0, lk(kk), 0), kk._vpVer = Ik, kk._vpAspect = Fk, Xk
        }(Xk, Tk),
        yk = lk(Xk),
        ak = Xk.worldMatrix;
      Vk(kk, ik, 0), Vk(kk, yk, 16), Fk.useFloatingOrigin ? (kk[32] = 0, kk[33] = 0, kk[34] = 0) : (kk[32] = ak[12], kk[33] = ak[13], kk[34] = ak[14]), kk[87] = Fk.canvas.width;
      const tk = Ik.imageProcessing;
      kk[76] = tk.exposure, kk[77] = tk.contrast, kk[78] = Ik._envTextures?.lodGenerationScale ?? .8, kk[79] = +tk.toneMappingEnabled, kk[37] = Fk.canvas.height
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

    function vk(kk, Fk, Ik) {
      kk.clr ??= !0;
      const Tk = kk.rt._descriptor,
        ik = kk.depth?._descriptor,
        ak = {
          _colorFormat: Tk.format,
          _depthStencilFormat: ik?.dFormat ?? Tk.dFormat,
          _depthCompare: Tk.depthCompare ?? ik?.depthCompare,
          _sampleCount: Tk.samples
        },
        Lk = {
          loadOp: "clear",
          storeOp: "store"
        },
        tk = {
          ...Sk([], -1),
          name: kk.name,
          _config: kk,
          _ownsTargets: !kk.sharedRt,
          engine: Fk,
          Yw: Ik,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Lk]
          },
          _colorAttachment: Lk,
          _sceneUBO: Zk(Fk, 368),
          _suData: new yk.e(92),
          _sceneUboCacheKey: [],
          _targetSignature: ak,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (tk._disposed) throw new Error("RenderTask has been disposed.");
            tk._recordExplicit ? tk._recordExplicit(tk, !0) : nk(tk, !1 !== kk.autoMirror ? Ik._renderables.slice() : tk._renderables, !0)
          },
          execute: () => function(kk, Fk, Ik) {
            if (!1 === kk.enabled) return 0;
            const Xk = kk.Yw;
            ! function(kk, Fk, Ik) {
              const Xk = kk.Yw;
              !1 !== kk._config.autoMirror && kk._lastVersion !== Xk._renderableVersion && nk(kk, Xk._renderables.slice());
              pk(kk, Fk);
              const Tk = kk._updateContext,
                ik = kk._config.cam ?? Xk.camera;
              Ik._colorFormat && (kk._config._skipClusteredLights || Xk._clusteredLightUpdater?.(ik, Tk.targetWidth, Tk.targetHeight), function(kk, Fk) {
                const Ik = sk(kk, Fk),
                  Xk = Kk(Fk.lights) + (kk._lightFoVersion?.(Fk) ?? 0),
                  Tk = Fk._lightListVersion ?? 0;
                Xk === Ik.kN && Tk === Ik._listVersion && Fk.lights.length === Ik._lightCount || (Ik.kN = Xk, Ik._listVersion = Tk, Ik._lightCount = Fk.lights.length, Qk(Ik._scratch, Fk.lights), kk._applyLightFoOffset?.(Ik._scratch, Fk), kk._device.queue.writeBuffer(Ik._buffer, 0, Ik._scratch)), Ik._buffer
              }(Fk, Xk));
              (function(kk, Fk, Ik, Xk) {
                if (!Xk) return;
                const Tk = Xk.viewport,
                  ik = kk._config.rt,
                  yk = (kk._config.cs ? Fk.canvas.width / Fk.canvas.height : ik._width / ik._height) * (Tk ? Tk.width / Tk.height : 1),
                  lk = Ik.fog,
                  ak = Ik.imageProcessing,
                  Lk = qk(Xk),
                  tk = Ik._envTextures,
                  Zk = kk._sceneUboCacheKey;
                if (Zk[0] === Xk && Zk[1] === lk && Zk[2] === Lk && Zk[3] === yk && Zk[4] === ak.exposure && Zk[5] === ak.contrast && Zk[6] === tk) return;
                Zk[0] = Xk, Zk[1] = lk, Zk[2] = Lk, Zk[3] = yk, Zk[4] = ak.exposure, Zk[5] = ak.contrast, Zk[6] = tk;
                const jk = kk._suData;
                zk(jk, Fk, Ik, Xk, yk);
                const ek = Ik._sceneUboContributors;
                if (ek)
                  for (const qk of ek) qk(jk, Ik);
                Fk._device.queue.writeBuffer(kk._sceneUBO, 0, jk)
              })(kk, Fk, Xk, ik), Tk.zD = ik, kk._batchState?._reset(), uk(kk._opaqueBindings, Tk), uk(kk._directBindings, Tk), uk(kk._transparentBindings, Tk), kk._batchState?._flush(Fk),
                function(kk, Fk) {
                  const Ik = kk._transparentBindings;
                  if (Ik.length <= 1 || !Fk) return;
                  const Xk = lk(Fk);
                  for (const Tk of Ik) {
                    const kk = Tk.renderable._worldCenter;
                    Tk._sortDistance = kk ? kk[0] * Xk[2] + kk[1] * Xk[6] + kk[2] * Xk[10] + Xk[14] : 0
                  }
                  Ik.sort(Ek)
                }(kk, ik)
            }(kk, Fk, Ik);
            const Tk = kk._colorAttachment,
              ik = kk._config;
            ik.rt._colorView && (ik.rt === Xk.surface.scRT && (Tk.view = ik.rt._colorView), Tk.resolveTarget = ik.rst?._colorView ?? void 0, Tk.clearValue = ik.clrColor ?? Xk.clearColor, Tk.loadOp = ik.clr ? "clear" : "load");
            if (kk._executeWithTransmission) return kk._executeWithTransmission(Ik._sampleCount);
            const yk = Fk._currentEncoder.beginRenderPass(kk._renderPassDescriptor),
              ak = Gk(kk, yk);
            return yk.end(), ak
          }(tk, Fk, ak),
          dispose() {
            if (tk._disposed) return;
            tk._disposed = !0;
            const Fk = tk._pendingMeshes;
            Fk && (Fk.length = 0);
            for (const kk of tk._renderables) tk._retireRenderable?.(tk.engine, kk);
            tk._passes.length = tk._opaqueBindings.length = tk._directBindings.length = 0, tk._transparentBindings.length = tk._renderables.length = tk._ob.length = 0, tk._ownsTargets && ((0, Xk.g)(kk.rt), (0, Xk.g)(kk.rst)), kk.depth?._eager || (0, Xk.g)(kk.depth);
            const Ik = tk._sceneUBO;
            (0, jk.b)(tk.engine, (() => Ik.destroy())), tk._batchState?._release(tk.engine), tk._batchState = void 0
          }
        };
      return tk
    }

    function Ek(kk, Fk) {
      return Fk._sortDistance - kk._sortDistance || kk.renderable.order - Fk.renderable.order
    }

    function Ok(kk, Fk) {
      return kk.renderable.order - Fk.renderable.order
    }

    function nk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kk._renderables,
        Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Tk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        ik = arguments.length > 4 ? arguments[4] : void 0;
      const yk = kk._config,
        lk = yk.rt,
        ak = kk._batchState,
        qk = Sk(Fk, kk.Yw._renderableVersion);
      if (Ik) {
        const Fk = (Fk, Ik) => {
          Fk && (Ik || kk._ownsTargets || Fk._eager) && (0, Xk.e)(Fk, kk.engine)
        };
        Fk(lk), lk._descriptor.samples > 1 && Fk(yk.rst), Fk(yk.depth, !0)
      }
      const {
        _opaqueBindings: Lk,
        _directBindings: tk,
        _transparentBindings: Zk
      } = qk;
      try {
        for (const Ik of Fk) {
          const Fk = Ik.bind(kk.engine, kk._targetSignature);
          qk._batchState = kk._targetSignature._collectBatches?.(qk._batchState, Fk), Ik.isTransparent || Ik._transmissive ? Zk.push(Fk) : Ik._direct ? tk.push(Fk) : Lk.push(Fk)
        }
        Lk.sort(Ok), tk.sort(Ok), Ik && pk(kk, kk.engine, !1)
      } catch (jk) {
        throw qk._batchState?._release(void 0, ik ?? [ak]), jk
      }
      return Ik && (! function(kk, Fk) {
        const Ik = kk._config,
          Xk = kk._colorAttachment;
        Xk.view = Fk._colorView, kk._renderPassDescriptor.colorAttachments = Fk._colorView ? [Xk] : [];
        const Tk = Ik.depth ?? Fk,
          ik = Tk._depthView;
        let yk;
        if (ik) {
          const kk = Tk._descriptor,
            Fk = (Ik.depth ? Tk._eager : !1 === Ik.depthClear) ? "load" : "clear";
          yk = {
            view: ik,
            depthClearValue: kk.depthClearValue ?? 0,
            depthLoadOp: Fk,
            depthStoreOp: "store"
          }, kk.dFormat?.includes("stencil") && (yk.stencilClearValue = 0, yk.stencilLoadOp = Fk, yk.stencilStoreOp = "store")
        }
        kk._renderPassDescriptor.depthStencilAttachment = yk
      }(kk, lk), kk._updateContext.targetWidth = lk._width, kk._updateContext.targetHeight = lk._height), Tk && (Object.assign(kk, qk), ak?._release(kk.engine, [qk._batchState])), qk
    }

    function Gk(kk, Fk) {
      const Ik = kk.engine,
        Xk = kk._config,
        ik = Xk.rt,
        yk = kk.Yw,
        lk = kk._opaqueBindings,
        ak = kk._ob,
        qk = kk._sceneBG;
      if (function(kk, Fk, Ik, Xk) {
          const Tk = Fk?.viewport;
          if (!Tk) return;
          const ik = Math.floor(Tk.x * Ik),
            yk = Math.floor((1 - Tk.y - Tk.height) * Xk),
            lk = Math.ceil((Tk.x + Tk.width) * Ik) - ik,
            ak = Math.ceil((1 - Tk.y) * Xk) - yk;
          kk.setViewport(ik, yk, lk, ak, 0, 1), kk.setScissorRect(ik, yk, lk, ak)
        }(Fk, Xk.cam ?? yk.camera, ik._width, ik._height), Fk.setBindGroup(0, qk), kk._lastVis !== Tk.e || !ak.length) {
        const Fk = ik._descriptor,
          Xk = Ik._device.createRenderBundleEncoder({
            colorFormats: Fk.format ? [Fk.format] : [],
            depthStencilFormat: kk._targetSignature._depthStencilFormat,
            sampleCount: Fk.samples
          });
        Xk.setBindGroup(0, qk), bk(Xk, lk, Ik), ak[0] = Xk.finish(), kk._lastVis = Tk.e
      }
      let Lk = lk.length;
      return Fk.executeBundles(ak), Fk.setBindGroup(0, qk), Lk += bk(Fk, kk._directBindings, Ik), Lk += bk(Fk, kk._transparentBindings, Ik), Lk
    }

    function pk(kk, Fk) {
      let Ik = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Xk = sk(Fk, kk.Yw)._buffer;
      if (Xk === kk._lightsUBO) return;
      const Tk = Fk._device.createBindGroup({
        layout: wk(Fk),
        entries: [{
          binding: 0,
          resource: {
            buffer: kk._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Xk
          }
        }]
      });
      kk._lightsUBO = Xk, kk._sceneBG = Tk, Ik && (kk._ob = [])
    }

    function uk(kk, Fk) {
      for (const Ik of kk) Ik.update?.(Fk)
    }

    function bk(kk, Fk, Ik) {
      let Xk = null,
        Tk = 0;
      for (const ik of Fk) {
        const Fk = ik.renderable.mesh;
        Fk && !1 === Fk.visible || (ik.pipeline !== Xk && (kk.setPipeline(ik.pipeline), Xk = ik.pipeline), Tk += ik.draw(kk, Ik))
      }
      return Tk
    }

    function Rk(kk) {
      const Fk = kk._materialSwapQueue;
      if (!Fk[0] || kk._runtimeBuilds?.w) return;
      let Xk, Tk, ik;
      const yk = kk._renderables;
      for (const Ik of Fk) {
        const Fk = Ik.material;
        if (!Fk) continue;
        const lk = Ik._runtimeThinBuild;
        if (lk) {
          Tk = lk(kk, Ik, Tk);
          continue
        }
        const ak = kk._groups.get(Fk._buildGroup),
          qk = ak?.r;
        if (!qk) {
          (ik ??= []).push(Ik);
          continue
        }
        if (ak._w?.(Ik)) {
          (ik ??= []).push([Ik, Fk]);
          continue
        }
        const Lk = kk._meshDisposables.get(Ik);
        Lk && (kk._meshDisposables.delete(Ik), (0, jk.b)(kk.surface.engine, (() => Lk.forEach((kk => kk())))));
        const tk = ak.o;
        let Zk;
        for (let kk = yk.length; kk--;) yk[kk].mesh === Ik && (Zk = yk.splice(kk, 1)[0]);
        Fk._csmGen = -~Fk._csmGen;
        const ek = qk(kk, Ik);
        if (tk) {
          const kk = tk.indexOf(Zk);
          kk < 0 ? tk.push(ek) : tk[kk] = ek
        }
        Xk = yk.push(ek)
      }
      if (Xk && (yk.sort(((kk, Fk) => kk.order - Fk.order)), kk._renderableVersion++, kk._materialEpoch++), Fk.length = 0, !ik) return Tk;
      const lk = ik;
      return Ik.e(363).then((() => Ik(61371))).then((Fk => {
        let {
          C: Ik
        } = Fk;
        return Ik(kk, lk, Tk)
      }), (Fk => {
        const Ik = kk._runtimeBuilds;
        Ik ? Ik._x(Fk) : console.error(Fk)
      }))
    }
    var Uk = null;

    function Ck(kk, Fk) {
      const Ik = kk.engine,
        Tk = {
          _kind: "Yw",
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
            Ik.useFloatingOrigin && Tk.camera && !Tk.camera._useFloatingOrigin && (Tk.camera._useFloatingOrigin = !0, Tk.camera._viewVer = -1, Tk.camera._vpVer = -1);
            const kk = Tk.fixedDeltaMs > 0 ? Tk.fixedDeltaMs : Ik._currentDelta,
              Fk = Ik._currentEncoder;
            let Xk = 0;
            for (const Ik of Tk._beforeRender) Ik(kk);
            Tk._materialSwapQueue.length && Rk(Tk);
            for (const ik of Tk._prePasses) Xk += ik.execute(Fk, Ik);
            for (const ik of Tk._uniformUpdaters) ik.update(Ik);
            Tk._drawCallsPre = Xk
          },
          _record: () => Tk._frameGraph.execute(),
          _resize() {
            Tk._frameGraph.build()
          }
        },
        yk = function() {
          const kk = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Fk = 0; Fk < kk._tasks.length; Fk++) ik(kk, kk._tasks[Fk]);
              for (const Fk of kk._tasks)
                for (const kk of Fk._passes) kk._initialize()
            },
            execute() {
              let Fk = 0;
              for (const Ik of kk._tasks)
                if (!1 !== Ik.executionEnabled)
                  if (Ik.execute) Fk += Ik.execute();
                  else
                    for (const kk of Ik._passes) Fk += kk._execute();
              return Fk
            },
            dispose() {
              for (const Fk of kk._tasks) Fk.dispose();
              kk._tasks.length = 0, kk._currentProcessedTask = null
            }
          };
          return kk
        }();
      if (Tk._frameGraph = yk, !1 !== Fk?.defaultRenderTask) {
        const Fk = kk.msaaSamples > 1,
          ik = Fk ? (0, Xk.d)({
            lbl: "scene-color",
            format: kk.format,
            dFormat: "depth24plus-stencil8",
            samples: kk.msaaSamples,
            size: kk
          }) : kk.scRT,
          lk = Fk ? void 0 : (0, Xk.d)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: kk
          });
        ! function(kk, Fk) {
          kk._tasks.push(Fk)
        }(yk, vk({
          name: "Yw",
          rt: ik,
          rst: Fk ? kk.scRT : void 0,
          depth: lk
        }, Ik, Tk))
      }
      return Tk._disposables.push((() => yk.dispose())), Tk
    }
    async function Nk(kk) {
      const Fk = kk;
      for (Fk._built || (Fk._materialSwapQueue.length = 0); Fk._deferredBuilders.length;) {
        const kk = Fk._deferredBuilders.splice(0);
        await Promise.all(kk.map((kk => kk())))
      }
      await Rk(Fk), Uk?.get(Fk)?.() || (Fk._runtimeBuilds?._e(), Fk._renderableVersion++, Fk._built = !0), await (Fk._rebuildHook?.(Fk))
    }
    var ck = null;
    async function Wk(kk) {
      const Fk = kk,
        Xk = Fk.surface;
      (0, Tk.j)(Xk, Fk) || (await Nk(kk), Fk._renderables.sort(fk), await Promise.all(Fk._frameGraph._tasks.map((kk => kk._preload?.()))), ck && await ck(Fk), Fk._frameGraph.build(), Xk._renderingContexts[0] && (await Ik.e(361).then((() => Ik(61363)))).configureSwapchainOverlayScene(Xk, Fk), Uk?.get(Fk)?.() || (0, Tk.n)(Xk, Fk))
    }
    var fk = (kk, Fk) => kk.order - Fk.order
  },
  41699: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => qk,
      f: () => Lk
    });
    var Xk = Ik(41652),
      Tk = Ik(41655),
      ik = Ik(41663),
      yk = Ik(41670),
      lk = Ik(41677),
      ak = Ik(41679);

    function qk(kk, Fk, Ik) {
      let lk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Fk < 1 || Ik < 1) && (0, Xk.c)(676, Fk, Ik);
      const qk = kk._device,
        Lk = lk.mipMaps ?? !1,
        tk = lk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Zk = Lk ? (0, ak.d)(Fk, Ik) : 1,
        jk = qk.createTexture({
          size: {
            width: Fk,
            height: Ik
          },
          format: tk,
          mipLevelCount: Zk,
          usage: Tk.h.TEXTURE_BINDING | Tk.h.COPY_DST | Tk.h.RENDER_ATTACHMENT
        }),
        ek = {
          addressModeU: lk.addressModeU ?? "clamp-to-edge",
          addressModeV: lk.addressModeV ?? "clamp-to-edge",
          minFilter: lk.minFilter ?? "linear",
          magFilter: lk.magFilter ?? "linear",
          mipmapFilter: Lk ? "linear" : "nearest"
        },
        wk = (0, yk.e)(kk, ek),
        Hk = {
          texture: jk,
          view: jk.createView(),
          sampler: wk,
          width: Fk,
          height: Ik
        };
      return (0, ik.c)(Hk), kk._dlr && kk._dlr.t(Hk, {
        kind: "dynamic",
        width: Fk,
        height: Ik,
        format: tk,
        levels: Zk,
        samplerDesc: ek,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Hk
    }

    function Lk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Tk = Xk.invertY ?? !0,
        ik = Xk.premultiplyAlpha ?? !1;
      kk._device.queue.copyExternalImageToTexture({
        source: Ik,
        flipY: Tk
      }, {
        texture: Fk.texture,
        premultipliedAlpha: ik
      }, [Fk.width, Fk.height]);
      const yk = Fk._recoverySource;
      yk && "dynamic" === yk.kind && (yk.source = Ik, yk.flipY = Tk, yk.premultipliedAlpha = ik), Fk.texture.mipLevelCount > 1 && (0, lk.generateMipmaps)(kk, Fk.texture)
    }
  },
  41690: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ak
    });
    var Xk = Ik(41652),
      Tk = Ik(41655),
      ik = Ik(41663),
      yk = Ik(41670),
      lk = Ik(41679);
    async function ak(kk, Fk) {
      let ak = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [qk, Lk] = function(kk) {
        const Fk = kk,
          Ik = [
            [Fk.displayWidth, Fk.displayHeight],
            [Fk.videoWidth, Fk.videoHeight],
            [Fk.naturalWidth, Fk.naturalHeight],
            [Fk.width, Fk.height]
          ];
        for (const [Xk, Tk] of Ik)
          if (void 0 !== Xk && void 0 !== Tk && Number.isInteger(Xk) && Number.isInteger(Tk) && Xk > 0 && Tk > 0) return [Xk, Tk];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Fk), [tk, Zk] = function(kk, Fk, Ik) {
        if (void 0 === Ik) return [kk, Fk];
        if (!Number.isInteger(Ik) || Ik < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Ik})`);
        if (Math.max(kk, Fk) <= Ik) return [kk, Fk];
        const Xk = Ik / Math.max(kk, Fk);
        return kk >= Fk ? [Ik, Math.max(1, Math.round(Fk * Xk))] : [Math.max(1, Math.round(kk * Xk)), Ik]
      }(qk, Lk, ak.maxDimension), jk = ak.mipMaps ?? !0, ek = ak.premultiplyAlpha ?? !1;
      let wk = Fk,
        Hk = null;
      const Jk = {
        texture: null
      };
      try {
        tk === qk && Zk === Lk || (Hk = await createImageBitmap(Fk, {
          resizeWidth: tk,
          resizeHeight: Zk,
          resizeQuality: "high",
          premultiplyAlpha: ek ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), wk = Hk);
        const xk = kk._device,
          Pk = ak.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Kk = jk ? (0, lk.d)(tk, Zk) : 1,
          Qk = Kk > 1 ? (await Promise.resolve().then((() => Ik(41677)))).generateMipmaps : null,
          sk = {
            addressModeU: ak.addressModeU ?? "repeat",
            addressModeV: ak.addressModeV ?? "repeat",
            minFilter: ak.minFilter ?? "linear",
            magFilter: ak.magFilter ?? "linear",
            mipmapFilter: jk ? "linear" : "nearest"
          };
        sk.maxAnisotropy = "linear" === sk.minFilter && "linear" === sk.magFilter && "linear" === sk.mipmapFilter ? 4 : 1;
        const Vk = ak.invertY ?? !0,
          zk = async Fk => {
            let Ik;
            xk.pushErrorScope("validation"), xk.pushErrorScope("out-of-memory");
            let ik = null;
            try {
              const Ik = Jk.texture = xk.createTexture({
                size: {
                  width: tk,
                  height: Zk
                },
                format: Pk,
                mipLevelCount: Kk,
                usage: Tk.h.TEXTURE_BINDING | Tk.h.COPY_DST | Tk.h.RENDER_ATTACHMENT
              });
              xk.queue.copyExternalImageToTexture({
                source: Fk,
                flipY: Vk
              }, {
                texture: Ik,
                premultipliedAlpha: ek
              }, {
                width: tk,
                height: Zk
              }), Qk && Qk(kk, Ik), ik = (0, yk.e)(kk, sk)
            } catch (jk) {
              Ik = jk
            }
            const [lk, ak] = await Promise.all([xk.popErrorScope(), xk.popErrorScope()]);
            if (Ik) throw Ik;
            const qk = ak ?? lk;
            if (qk) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${qk.message}`, {
              cause: qk
            });
            const Lk = Jk.texture;
            return Lk && ik || (0, Xk.c)(677), {
              texture: Lk,
              view: Lk.createView(),
              sampler: ik,
              width: tk,
              height: Zk
            }
          }, Sk = await (kk._dlr?.x(wk, tk, Zk, Pk, Kk, sk, Vk, ek, zk)) ?? await zk(wk);
        return (0, ik.c)(Sk), Sk
      } catch (xk) {
        throw Jk.texture?.destroy(), xk
      } finally {
        Hk?.close()
      }
    }
  },
  41677: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      generateMipmaps: () => jk,
      recordMipmaps: () => ek
    });
    var Xk = Ik(41655),
      Tk = Ik(41670),
      ik = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var yk = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      lk = null,
      ak = null,
      qk = null,
      Lk = null,
      tk = null;

    function Zk(kk) {
      const Fk = kk._device;
      Fk !== tk && (lk?.clear(), lk = null, ak = null, qk = null, Lk = null, tk = null, tk = Fk), ak ??= Fk.createShaderModule({
        code: yk
      }), qk ??= function(kk) {
        return (0, Tk.e)(kk, ik)
      }(kk), Lk ??= Fk.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Xk.g.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Xk.g.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function jk(kk, Fk, Ik) {
      const Xk = kk._device,
        Tk = Xk.createCommandEncoder();
      ek(kk, Fk, Tk, Ik), Xk.queue.submit([Tk.finish()])
    }

    function ek(kk, Fk, Ik, Xk) {
      if (Fk.mipLevelCount <= 1) return;
      const Tk = kk._device,
        ik = function(kk, Fk) {
          const Ik = kk._device;
          Zk(kk), lk ??= new Map;
          let Xk = lk.get(Fk);
          return Xk || (Xk = Ik.createRenderPipeline({
            layout: Ik.createPipelineLayout({
              bindGroupLayouts: [Lk]
            }),
            vertex: {
              module: ak,
              entryPoint: "vs"
            },
            fragment: {
              module: ak,
              entryPoint: "fs",
              targets: [{
                format: Fk
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), lk.set(Fk, Xk)), Xk
        }(kk, Fk.format),
        yk = null != Xk ? {
          dimension: "2d",
          baseArrayLayer: Xk,
          arrayLayerCount: 1
        } : {};
      for (let lk = 1; lk < Fk.mipLevelCount; lk++) {
        const kk = Fk.createView({
            baseMipLevel: lk - 1,
            mipLevelCount: 1,
            ...yk
          }),
          Xk = Fk.createView({
            baseMipLevel: lk,
            mipLevelCount: 1,
            ...yk
          }),
          ak = Tk.createBindGroup({
            layout: Lk,
            entries: [{
              binding: 0,
              resource: kk
            }, {
              binding: 1,
              resource: qk
            }]
          }),
          tk = Ik.beginRenderPass({
            colorAttachments: [{
              view: Xk,
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
        tk.setPipeline(ik), tk.setBindGroup(0, ak), tk.draw(3), tk.end()
      }
    }
  },
  41679: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      return Math.floor(Math.log2(Math.max(kk, Fk))) + 1
    }
    Ik.d(Fk, {
      d: () => Xk
    })
  },
  41643: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => qk,
      f: () => Lk
    });
    var Xk = Ik(41652),
      Tk = Ik(41655),
      ik = Ik(41663),
      yk = Ik(41670),
      lk = Ik(41677),
      ak = Ik(41679);

    function qk(kk, Fk, Ik, lk) {
      let qk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Fk < 1 || Ik < 1 || lk < 1) && (0, Xk.c)(722, Fk, Ik, lk);
      const Lk = kk._device,
        tk = qk.mipMaps ?? !0,
        Zk = qk.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        jk = Lk.createTexture({
          size: {
            width: Fk,
            height: Ik,
            depthOrArrayLayers: lk
          },
          dimension: "2d",
          format: Zk,
          mipLevelCount: tk ? (0, ak.d)(Fk, Ik) : 1,
          usage: Tk.h.TEXTURE_BINDING | Tk.h.COPY_DST | Tk.h.RENDER_ATTACHMENT
        }),
        ek = (0, yk.e)(kk, {
          addressModeU: qk.addressModeU ?? "repeat",
          addressModeV: qk.addressModeV ?? "repeat",
          minFilter: qk.minFilter ?? "linear",
          magFilter: qk.magFilter ?? "linear",
          mipmapFilter: tk ? "linear" : "nearest"
        }),
        wk = {
          texture: jk,
          view: jk.createView({
            dimension: "2d-array"
          }),
          sampler: ek,
          width: Fk,
          height: Ik,
          layers: lk
        };
      return (0, ik.c)(wk), wk
    }

    function Lk(kk, Fk, Ik, Tk) {
      let ik = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Ik < 0 || Ik >= Fk.layers || (0 | Ik) !== Ik) && (0, Xk.c)(723, Fk.layers, Ik);
      const yk = ik.invertY ?? !0,
        ak = ik.premultiplyAlpha ?? !1;
      kk._device.queue.copyExternalImageToTexture({
        source: Tk,
        flipY: yk
      }, {
        texture: Fk.texture,
        origin: [0, 0, Ik],
        premultipliedAlpha: ak
      }, [Fk.width, Fk.height, 1]), Fk.texture.mipLevelCount > 1 && (0, lk.generateMipmaps)(kk, Fk.texture, Ik)
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);