export const id = 623;
export const ids = [623];
export const modules = {
  54241: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = Qr(54233),
      Wr = Qr(54245);

    function ar(rr) {
      (0, Wr.b)(rr), (0, Zr.r)(rr);
      const Sr = rr._surfaces;
      for (const Qr of Sr) Qr._renderingContexts.length = 0, Qr._ro?.disconnect(), Qr._context.unconfigure();
      Sr.length = 0;
      try {
        rr._disposeManagedResources?.(), rr._disposeStorageBuffers?.()
      } finally {
        rr._device.destroy()
      }
    }
  },
  54233: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => mr,
      f: () => zr,
      g: () => Nr,
      j: () => Ur,
      l: () => er,
      p: () => Yr,
      r: () => nr
    });
    var Zr = Qr(54182);
    var Wr = "Babylon Lite v1.32.0",
      ar = Qr(54235);

    function jr(rr) {
      return "clientWidth" in rr
    }
    var Ir = 1;

    function fr(rr, Sr, Qr) {
      const fr = Sr.getContext("webgpu");
      fr || (0, Zr.e)(54), jr(Sr) && Sr.setAttribute("data-engine", Wr);
      const Er = Qr?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        pr = Qr?.srgb ? (xr = Er).endsWith("-srgb") ? xr : `${xr}-srgb` : Er;
      var xr;
      const mr = Qr?.alphaMode ?? "opaque";
      fr.configure({
        device: rr._device,
        format: Er,
        alphaMode: mr,
        viewFormats: [pr]
      });
      const Nr = 1 === Qr?.msaaSamples ? 1 : 4,
        Ur = (0, ar.b)({
          lbl: "swapchain",
          format: pr,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Ur._eager = !0, {
        engine: rr,
        canvas: Sr,
        format: pr,
        msaaSamples: Nr,
        scRT: Ur,
        maxDevicePixelRatio: Qr?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Ir++,
        _context: fr,
        _configureFormat: Er,
        _alphaMode: mr,
        _renderingContexts: []
      }
    }

    function Er(rr) {
      const Sr = rr._context.getCurrentTexture(),
        Qr = rr.scRT;
      Qr._colorTexture = Sr, Qr._colorView = Sr.createView({
        format: rr.format
      }), Qr._width = Sr.width, Qr._height = Sr.height
    }

    function pr(rr) {
      const Sr = rr.canvas;
      if (!jr(Sr)) return;
      const Qr = rr._w ?? Sr.clientWidth,
        Zr = rr._h ?? Sr.clientHeight;
      if (!(Qr > 0 && Zr > 0)) return;
      const Wr = Math.min(globalThis.devicePixelRatio || 1, rr.maxDevicePixelRatio);
      xr(rr, Qr * Wr | 0, Zr * Wr | 0)
    }

    function xr(rr, Sr, Qr) {
      const Zr = rr.canvas,
        Wr = 0 | Sr,
        ar = 0 | Qr;
      if (Wr > 0 && ar > 0 && (Wr !== Zr.width || ar !== Zr.height)) {
        Zr.width = Wr, Zr.height = ar, rr.scRT._width = Wr, rr.scRT._height = ar;
        for (const Sr of rr._renderingContexts) Sr._resize?.()
      }
    }
    var mr = 0;

    function Nr(rr, Sr) {
      return -1 !== rr._renderingContexts.indexOf(Sr)
    }

    function Ur(rr, Sr) {
      return -1 === rr._renderingContexts.indexOf(Sr) && (rr._renderingContexts.push(Sr), !0)
    }
    var tr = null;
    var hr = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function zr(rr, Sr) {
      const ar = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...tr ? tr() : {}
      });
      ar || (0, Zr.e)(47);
      const jr = tr?.deviceFeatures?.(ar, Sr) ?? function(rr) {
          return hr.filter((Sr => rr.features.has(Sr)))
        }(ar),
        Ir = await ar.requestDevice({
          requiredFeatures: jr,
          requiredLimits: Sr?.requiredLimits
        });
      console.log(`${Wr} - WebGPU engine`);
      const xr = !!Sr?.useHighPrecisionMatrix,
        mr = !!Sr?.useFloatingOrigin;
      if (mr && !xr && (0, Zr.e)(48), xr) {
        const {
          allocateF64Mat4: rr
        } = await Qr.e(675).then((() => Qr(64688)));
        0
      }
      let Nr, Ur, zr, Yr;
      if (mr) {
        const [{
          wrapRenderableForFO: rr,
          lightFoVersion: Sr,
          applyLightFoOffset: Zr
        }, {
          makePackMeshWorld: Wr
        }] = await Promise.all([Qr.e(676).then((() => Qr(64696))), Qr.e(677).then((() => Qr(64701)))]);
        Nr = rr, Ur = Wr, zr = Sr, Yr = Zr
      }
      const nr = {
          _device: Ir
        },
        er = [nr];
      return Object.assign(nr, {
        engine: nr,
        surfaces: er,
        _surfaces: er,
        _device: Ir,
        _options: Sr,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: xr,
        useFloatingOrigin: mr,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Nr,
        _makePackMeshWorld: Ur,
        _lightFoVersion: zr,
        _applyLightFoOffset: Yr
      }, fr(nr, rr, Sr)), pr(nr), Er(nr), nr
    }

    function Yr(rr, Sr, Qr) {
      xr(rr, Sr, Qr)
    }

    function nr(rr) {
      rr._animFrameId && cancelAnimationFrame(rr._animFrameId), rr._animFrameId = 0, rr._renderFn = null, rr._flushGpuRetirements?.(rr)
    }

    function er(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr.surfaces;
      if (Qr !== rr.surfaces)
        for (let Wr = Qr.length; Wr--;) Qr[Wr].engine !== rr && (0, Zr.e)(49);
      Kr(rr, Sr, Qr)
    }

    function Kr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : rr._surfaces,
        Zr = 0;
      for (let ar = Qr.length; ar--;) Zr += Qr[ar]._renderingContexts.length;
      if (!Zr) return rr.drawCallCount = 0, rr._flushGpuRetirements?.(rr);
      const Wr = rr._device.createCommandEncoder({
        label: "frame"
      });
      rr._currentEncoder = Wr, rr._currentDelta = Sr;
      try {
        rr._gpuTimerBegin?.(Wr), Zr = 0;
        for (let rr = 0; rr < Qr.length; rr++) {
          const Sr = Qr[rr];
          Sr._capturePreFrame?.(Sr), Er(Sr);
          const Wr = Sr._renderingContexts;
          for (let rr = 0; rr < Wr.length; rr++) {
            const Sr = Wr[rr];
            Sr._update(), Zr += Sr._drawCallsPre + Sr._record()
          }
        }
        const Sr = rr._currentEncoder;
        for (let rr = 0; rr < Qr.length; rr++) {
          const Zr = Qr[rr];
          Zr._captureService?.(Zr, Sr)
        }
        rr._gpuTimerEnd?.(Sr), rr._cbs[0] = Sr.finish(), rr._device.queue.submit(rr._cbs), rr._flushGpuRetirements?.(rr), rr.drawCallCount = Zr, rr._gpuTimerResolve?.()
      } finally {
        rr._currentEncoder = void 0
      }
    }
  },
  54190: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr,
      h: () => ar,
      k: () => Zr
    });
    var Zr = globalThis.GPUTextureUsage,
      Wr = globalThis.GPUBufferUsage,
      ar = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  54245: (rr, Sr, Qr) => {
    function Zr(rr) {
      Wr(rr.splice(0))
    }

    function Wr(rr) {
      for (const Qr of rr) try {
        Qr()
      } catch (Sr) {
        console.error("GPU resource retirement failed.", Sr)
      }
    }

    function ar(rr, Sr) {
      rr._flushGpuRetirements ??= jr, (rr._retirements ??= []).push(Sr)
    }

    function jr(rr) {
      const Sr = rr._retirements;
      if (!Sr) return;
      rr._retirements = null;
      const Qr = rr._retiring ??= new Set;
      Qr.add(Sr), queueMicrotask((() => {
        rr._device.queue.onSubmittedWorkDone().then((() => {
          Qr.delete(Sr), Zr(Sr)
        })).catch((() => {}))
      }))
    }

    function Ir(rr) {
      const Sr = rr._retirements,
        Qr = rr._retiring;
      rr._retirements = null, rr._retiring = null, Sr && Zr(Sr), Qr?.forEach(Zr)
    }
    Qr.d(Sr, {
      b: () => Ir,
      f: () => ar
    })
  },
  54235: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar,
      e: () => jr,
      f: () => Ir
    });
    var Zr = Qr(54190);

    function Wr(rr) {
      const Sr = rr.size;
      return "canvas" in Sr ? Sr.canvas : Sr
    }

    function ar(rr) {
      return {
        _descriptor: rr,
        _resolveSize: Wr,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function jr(rr, Sr) {
      if (rr._eager) return void rr._syncEager?.(Sr);
      Ir(rr);
      const Qr = rr._descriptor,
        {
          width: ar,
          height: jr
        } = (rr._resolveSize ?? Wr)(Qr);
      rr._width = ar, rr._height = jr;
      const fr = Sr._device;
      Qr.format && (rr._colorTexture = fr.createTexture({
        label: Qr.lbl,
        size: {
          width: ar,
          height: jr
        },
        format: Qr.format,
        sampleCount: Qr.samples,
        usage: Zr.k.RENDER_ATTACHMENT | Zr.k.TEXTURE_BINDING | Zr.k.COPY_SRC | Zr.k.COPY_DST
      }), rr._colorView = rr._colorTexture.createView()), Qr.dFormat && (rr._depthTexture = fr.createTexture({
        label: Qr.lbl,
        size: {
          width: ar,
          height: jr
        },
        format: Qr.dFormat,
        sampleCount: Qr.samples,
        usage: Zr.k.RENDER_ATTACHMENT | Zr.k.TEXTURE_BINDING
      }), rr._depthView = rr._depthTexture.createView())
    }

    function Ir(rr) {
      if (!rr || rr._eager && !rr._disposeAttachments) return;
      const Sr = rr._colorTexture,
        Qr = rr._depthTexture;
      if (rr._colorTexture = rr._depthTexture = null, rr._colorView = rr._depthView = null, rr._width = rr._height = 0, rr._disposeAttachments) rr._disposeAttachments(Sr, Qr);
      else try {
        Sr?.destroy()
      } finally {
        !1 !== rr._ownsDepthTexture && Qr?.destroy()
      }
    }
  },
  54256: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr,
      f: () => Wr,
      g: () => ar
    });
    var Zr = Float32Array,
      Wr = Float64Array,
      ar = Uint32Array
  },
  54263: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    var Zr = 16
  },
  54182: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr
    });
    var Zr = null;

    function Wr(rr) {
      for (var Sr = arguments.length, Qr = new Array(Sr > 1 ? Sr - 1 : 0), Wr = 1; Wr < Sr; Wr++) Qr[Wr - 1] = arguments[Wr];
      const ar = new Error(Zr?.(rr, Qr) ?? `#${rr}`);
      throw ar.lite = Qr, ar
    }
  },
  54211: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(54200);

    function Wr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Qr = Sr.compare,
        Wr = Sr.lodMinClamp ?? 0,
        ar = Sr.lodMaxClamp ?? 32,
        jr = void 0 !== Qr || 0 !== Wr || 32 !== ar ? `${Qr??""}:${Wr}:${ar}` : "";
      return (0, Zr.d)(rr, Sr, jr)
    }
  },
  54194: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar
    });
    var Zr = null;

    function Wr(rr) {
      const Sr = Zr ??= new WeakMap;
      Sr.set(rr, (Sr.get(rr) ?? 0) + 1)
    }

    function ar(rr) {
      Wr(rr.texture)
    }
  },
  54200: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Ir
    });
    var Zr = null,
      Wr = "nearest",
      ar = "clamp-to-edge",
      jr = {
        minFilter: Wr,
        magFilter: Wr,
        mipmapFilter: Wr,
        addressModeU: ar,
        addressModeV: ar,
        addressModeW: ar,
        maxAnisotropy: 1
      };

    function Ir(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Wr = rr._device,
        ar = Zr ??= new WeakMap;
      let Ir = ar.get(Wr);
      Ir || ar.set(Wr, Ir = new Map);
      let fr = Qr;
      for (const Zr in jr) {
        const rr = Zr;
        fr += `:${Sr[rr]??jr[rr]}`
      }
      let Er = Ir.get(fr);
      return Er || Ir.set(fr, Er = Wr.createSampler(Sr)), Er
    }
  },
  54253: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Mr,
      e: () => Ar
    });
    var Zr = Qr(54235),
      Wr = Qr(54233);

    function ar(rr, Sr) {
      Sr._passes.length = 0, rr._currentProcessedTask = Sr;
      try {
        Sr.record()
      } finally {
        rr._currentProcessedTask = null
      }
    }
    var jr = Qr(54256);

    function Ir(rr) {
      const Sr = rr.worldMatrixVersion;
      if (rr._viewVer === Sr) return rr._viewCache;
      const Qr = rr._viewCache,
        Zr = rr.worldMatrix,
        Wr = rr._useFloatingOrigin,
        ar = Wr ? 0 : Zr[12],
        jr = Wr ? 0 : Zr[13],
        Ir = Wr ? 0 : Zr[14];
      return Qr[0] = Zr[0], Qr[1] = Zr[4], Qr[2] = Zr[8], Qr[3] = 0, Qr[4] = Zr[1], Qr[5] = Zr[5], Qr[6] = Zr[9], Qr[7] = 0, Qr[8] = Zr[2], Qr[9] = Zr[6], Qr[10] = Zr[10], Qr[11] = 0, Qr[12] = -(Zr[0] * ar + Zr[1] * jr + Zr[2] * Ir), Qr[13] = -(Zr[4] * ar + Zr[5] * jr + Zr[6] * Ir), Qr[14] = -(Zr[8] * ar + Zr[9] * jr + Zr[10] * Ir), Qr[15] = 1, rr._viewVer = Sr, Qr
    }
    var fr = null;

    function Er(rr) {
      return rr._projFov === rr.fov && rr._projNear === rr.nearPlane && rr._projFar === rr.farPlane || (rr._projFov = rr.fov, rr._projNear = rr.nearPlane, rr._projFar = rr.farPlane, rr._projRev = (rr._projRev ?? 0) + 1), rr.worldMatrixVersion + (rr._projRev ?? 0)
    }

    function pr(rr, Sr) {
      const Qr = Er(rr);
      if (rr._projVer === Qr && rr._projAspect === Sr) return rr._projCache;
      const Zr = rr._projCache;
      return null !== fr && rr.ortho ? fr(rr, Sr, Zr) : function(rr, Sr, Qr, Zr, Wr) {
        const ar = 1 / Math.tan(.5 * Sr),
          jr = Wr - Zr;
        rr[0] = ar / Qr, rr[5] = ar, rr[10] = -Zr / jr, rr[11] = 1, rr[14] = Wr * Zr / jr
      }(Zr, rr.fov, Sr, rr.nearPlane, rr.farPlane), rr._projVer = Qr, rr._projAspect = Sr, Zr
    }
    var xr = Qr(54190);

    function mr(rr, Sr, Qr) {
      return rr._device.createBuffer({
        label: Qr,
        size: (Zr = Sr, Wr = 16, Math.ceil(Zr / Wr) * Wr),
        usage: xr.d.UNIFORM | xr.d.COPY_DST
      });
      var Zr, Wr
    }
    var Nr = Qr(54245),
      Ur = null;

    function tr(rr) {
      const Sr = rr._device,
        Qr = Ur ??= new WeakMap;
      let Zr = Qr.get(Sr);
      return Zr || (Zr = Sr.createBindGroupLayout({
        label: "Dt",
        entries: [{
          binding: 0,
          visibility: xr.h.VERTEX | xr.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: xr.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Qr.set(Sr, Zr)), Zr
    }

    function hr(rr, Sr, Qr) {
      const Zr = rr._device,
        Wr = mr(rr, Sr.byteLength, Qr);
      try {
        Zr.queue.writeBuffer(Wr, 0, Sr.buffer, Sr.byteOffset, Sr.byteLength)
      } catch (ar) {
        throw Wr.destroy(), ar
      }
      return Wr
    }
    var zr = Qr(54263),
      Yr = new jr.g(1),
      nr = new jr.b(Yr.buffer);

    function er(rr) {
      let Sr = 0;
      for (const Qr of rr) Sr += Qr._lightVersion ?? 0;
      return Sr
    }

    function Kr(rr, Sr) {
      rr.fill(0);
      let Qr = 0;
      for (const Zr of Sr) {
        if (Qr >= zr.d) break;
        Zr._writeLightUbo && (Zr._writeLightUbo(rr, 4 + 16 * Qr), Qr++)
      }
      Yr[0] = Qr, rr[0] = nr[0]
    }

    function yr(rr, Sr) {
      let Qr = Sr._lightGpuState;
      const Zr = 16 + 16 * zr.d * 4;
      if (Qr && Qr._byteSize === Zr) return Qr;
      const Wr = !Qr;
      Qr?._buffer.destroy();
      const ar = new jr.b(Zr / 4);
      return Kr(ar, Sr.lights), rr._applyLightFoOffset?.(ar, Sr), Qr = {
        _buffer: hr(rr, ar),
        _scratch: ar,
        HV: er(Sr.lights) + (rr._lightFoVersion?.(Sr) ?? 0),
        _listVersion: Sr._lightListVersion ?? 0,
        _lightCount: Sr.lights.length,
        _byteSize: Zr
      }, Sr._lightGpuState = Qr, Wr && Sr._disposables.push((() => {
        Sr._lightGpuState?._buffer.destroy(), Sr._lightGpuState = void 0
      })), Qr
    }

    function Br(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Wr = Sr;
      if (0 === Zr && 16 === Wr.length) return void rr.set(Wr, Qr);
      const ar = Zr,
        jr = Qr;
      rr[jr + 0] = Wr[ar + 0], rr[jr + 1] = Wr[ar + 1], rr[jr + 2] = Wr[ar + 2], rr[jr + 3] = Wr[ar + 3], rr[jr + 4] = Wr[ar + 4], rr[jr + 5] = Wr[ar + 5], rr[jr + 6] = Wr[ar + 6], rr[jr + 7] = Wr[ar + 7], rr[jr + 8] = Wr[ar + 8], rr[jr + 9] = Wr[ar + 9], rr[jr + 10] = Wr[ar + 10], rr[jr + 11] = Wr[ar + 11], rr[jr + 12] = Wr[ar + 12], rr[jr + 13] = Wr[ar + 13], rr[jr + 14] = Wr[ar + 14], rr[jr + 15] = Wr[ar + 15]
    }

    function Tr(rr, Sr, Qr, Zr, Wr) {
      rr.fill(0);
      const ar = function(rr, Sr) {
          const Qr = Er(rr);
          if (rr._vpVer === Qr && rr._vpAspect === Sr) return rr._vpCache;
          const Zr = rr._vpCache;
          return function(rr, Sr, Qr, Zr, Wr, ar) {
            const jr = Qr[Zr],
              Ir = Qr[Zr + 1],
              fr = Qr[Zr + 2],
              Er = Qr[Zr + 3],
              pr = Qr[Zr + 4],
              xr = Qr[Zr + 5],
              mr = Qr[Zr + 6],
              Nr = Qr[Zr + 7],
              Ur = Qr[Zr + 8],
              tr = Qr[Zr + 9],
              hr = Qr[Zr + 10],
              zr = Qr[Zr + 11],
              Yr = Qr[Zr + 12],
              nr = Qr[Zr + 13],
              er = Qr[Zr + 14],
              Kr = Qr[Zr + 15];
            let yr = Wr[ar],
              Br = Wr[ar + 1],
              Tr = Wr[ar + 2],
              vr = Wr[ar + 3];
            rr[Sr] = jr * yr + pr * Br + Ur * Tr + Yr * vr, rr[Sr + 1] = Ir * yr + xr * Br + tr * Tr + nr * vr, rr[Sr + 2] = fr * yr + mr * Br + hr * Tr + er * vr, rr[Sr + 3] = Er * yr + Nr * Br + zr * Tr + Kr * vr, yr = Wr[ar + 4], Br = Wr[ar + 5], Tr = Wr[ar + 6], vr = Wr[ar + 7], rr[Sr + 4] = jr * yr + pr * Br + Ur * Tr + Yr * vr, rr[Sr + 5] = Ir * yr + xr * Br + tr * Tr + nr * vr, rr[Sr + 6] = fr * yr + mr * Br + hr * Tr + er * vr, rr[Sr + 7] = Er * yr + Nr * Br + zr * Tr + Kr * vr, yr = Wr[ar + 8], Br = Wr[ar + 9], Tr = Wr[ar + 10], vr = Wr[ar + 11], rr[Sr + 8] = jr * yr + pr * Br + Ur * Tr + Yr * vr, rr[Sr + 9] = Ir * yr + xr * Br + tr * Tr + nr * vr, rr[Sr + 10] = fr * yr + mr * Br + hr * Tr + er * vr, rr[Sr + 11] = Er * yr + Nr * Br + zr * Tr + Kr * vr, yr = Wr[ar + 12], Br = Wr[ar + 13], Tr = Wr[ar + 14], vr = Wr[ar + 15], rr[Sr + 12] = jr * yr + pr * Br + Ur * Tr + Yr * vr, rr[Sr + 13] = Ir * yr + xr * Br + tr * Tr + nr * vr, rr[Sr + 14] = fr * yr + mr * Br + hr * Tr + er * vr, rr[Sr + 15] = Er * yr + Nr * Br + zr * Tr + Kr * vr
          }(Zr, 0, pr(rr, Sr), 0, Ir(rr), 0), rr._vpVer = Qr, rr._vpAspect = Sr, Zr
        }(Zr, Wr),
        jr = Ir(Zr),
        fr = Zr.worldMatrix;
      Br(rr, ar, 0), Br(rr, jr, 16), Sr.useFloatingOrigin ? (rr[32] = 0, rr[33] = 0, rr[34] = 0) : (rr[32] = fr[12], rr[33] = fr[13], rr[34] = fr[14]), rr[87] = Sr.canvas.width;
      const xr = Qr.imageProcessing;
      rr[76] = xr.exposure, rr[77] = xr.contrast, rr[78] = Qr._envTextures?.lodGenerationScale ?? .8, rr[79] = +xr.toneMappingEnabled, rr[37] = Sr.canvas.height
    }

    function vr(rr, Sr) {
      return {
        _renderables: rr,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Sr
      }
    }

    function Or(rr, Sr, Qr) {
      rr.clr ??= !0;
      const Wr = rr.rt._descriptor,
        ar = rr.depth?._descriptor,
        fr = {
          _colorFormat: Wr.format,
          _depthStencilFormat: ar?.dFormat ?? Wr.dFormat,
          _depthCompare: Wr.depthCompare ?? ar?.depthCompare,
          _sampleCount: Wr.samples
        },
        pr = {
          loadOp: "clear",
          storeOp: "store"
        },
        xr = {
          ...vr([], -1),
          name: rr.name,
          _config: rr,
          _ownsTargets: !rr.sharedRt,
          engine: Sr,
          Dt: Qr,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [pr]
          },
          _colorAttachment: pr,
          _sceneUBO: mr(Sr, 368),
          _suData: new jr.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: fr,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (xr._disposed) throw new Error("RenderTask has been disposed.");
            xr._recordExplicit ? xr._recordExplicit(xr, !0) : Xr(xr, !1 !== rr.autoMirror ? Qr._renderables.slice() : xr._renderables, !0)
          },
          execute: () => function(rr, Sr, Qr) {
            if (!1 === rr.enabled) return 0;
            const Zr = rr.Dt;
            ! function(rr, Sr, Qr) {
              const Zr = rr.Dt;
              !1 !== rr._config.autoMirror && rr._lastVersion !== Zr._renderableVersion && Xr(rr, Zr._renderables.slice());
              Hr(rr, Sr);
              const Wr = rr._updateContext,
                ar = rr._config.cam ?? Zr.camera;
              Qr._colorFormat && (rr._config._skipClusteredLights || Zr._clusteredLightUpdater?.(ar, Wr.targetWidth, Wr.targetHeight), function(rr, Sr) {
                const Qr = yr(rr, Sr),
                  Zr = er(Sr.lights) + (rr._lightFoVersion?.(Sr) ?? 0),
                  Wr = Sr._lightListVersion ?? 0;
                Zr === Qr.HV && Wr === Qr._listVersion && Sr.lights.length === Qr._lightCount || (Qr.HV = Zr, Qr._listVersion = Wr, Qr._lightCount = Sr.lights.length, Kr(Qr._scratch, Sr.lights), rr._applyLightFoOffset?.(Qr._scratch, Sr), rr._device.queue.writeBuffer(Qr._buffer, 0, Qr._scratch)), Qr._buffer
              }(Sr, Zr));
              (function(rr, Sr, Qr, Zr) {
                if (!Zr) return;
                const Wr = Zr.viewport,
                  ar = rr._config.rt,
                  jr = (rr._config.cs ? Sr.canvas.width / Sr.canvas.height : ar._width / ar._height) * (Wr ? Wr.width / Wr.height : 1),
                  Ir = Qr.fog,
                  fr = Qr.imageProcessing,
                  pr = Er(Zr),
                  xr = Qr._envTextures,
                  mr = rr._sceneUboCacheKey;
                if (mr[0] === Zr && mr[1] === Ir && mr[2] === pr && mr[3] === jr && mr[4] === fr.exposure && mr[5] === fr.contrast && mr[6] === xr) return;
                mr[0] = Zr, mr[1] = Ir, mr[2] = pr, mr[3] = jr, mr[4] = fr.exposure, mr[5] = fr.contrast, mr[6] = xr;
                const Nr = rr._suData;
                Tr(Nr, Sr, Qr, Zr, jr);
                const Ur = Qr._sceneUboContributors;
                if (Ur)
                  for (const Er of Ur) Er(Nr, Qr);
                Sr._device.queue.writeBuffer(rr._sceneUBO, 0, Nr)
              })(rr, Sr, Zr, ar), Wr.Q_ = ar, rr._batchState?._reset(), qr(rr._opaqueBindings, Wr), qr(rr._directBindings, Wr), qr(rr._transparentBindings, Wr), rr._batchState?._flush(Sr),
                function(rr, Sr) {
                  const Qr = rr._transparentBindings;
                  if (Qr.length <= 1 || !Sr) return;
                  const Zr = Ir(Sr);
                  for (const Wr of Qr) {
                    const rr = Wr.renderable._worldCenter;
                    Wr._sortDistance = rr ? rr[0] * Zr[2] + rr[1] * Zr[6] + rr[2] * Zr[10] + Zr[14] : 0
                  }
                  Qr.sort(Lr)
                }(rr, ar)
            }(rr, Sr, Qr);
            const Wr = rr._colorAttachment,
              ar = rr._config;
            ar.rt._colorView && (ar.rt === Zr.surface.scRT && (Wr.view = ar.rt._colorView), Wr.resolveTarget = ar.rst?._colorView ?? void 0, Wr.clearValue = ar.clrColor ?? Zr.clearColor, Wr.loadOp = ar.clr ? "clear" : "load");
            if (rr._executeWithTransmission) return rr._executeWithTransmission(Qr._sampleCount);
            const jr = Sr._currentEncoder.beginRenderPass(rr._renderPassDescriptor),
              fr = Pr(rr, jr);
            return jr.end(), fr
          }(xr, Sr, fr),
          dispose() {
            if (xr._disposed) return;
            xr._disposed = !0;
            const Sr = xr._pendingMeshes;
            Sr && (Sr.length = 0);
            for (const rr of xr._renderables) xr._retireRenderable?.(xr.engine, rr);
            xr._passes.length = xr._opaqueBindings.length = xr._directBindings.length = 0, xr._transparentBindings.length = xr._renderables.length = xr._ob.length = 0, xr._ownsTargets && ((0, Zr.f)(rr.rt), (0, Zr.f)(rr.rst)), rr.depth?._eager || (0, Zr.f)(rr.depth);
            const Qr = xr._sceneUBO;
            (0, Nr.f)(xr.engine, (() => Qr.destroy())), xr._batchState?._release(xr.engine), xr._batchState = void 0
          }
        };
      return xr
    }

    function Lr(rr, Sr) {
      return Sr._sortDistance - rr._sortDistance || rr.renderable.order - Sr.renderable.order
    }

    function lr(rr, Sr) {
      return rr.renderable.order - Sr.renderable.order
    }

    function Xr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rr._renderables,
        Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        ar = arguments.length > 4 ? arguments[4] : void 0;
      const jr = rr._config,
        Ir = jr.rt,
        fr = rr._batchState,
        Er = vr(Sr, rr.Dt._renderableVersion);
      if (Qr) {
        const Sr = (Sr, Qr) => {
          Sr && (Qr || rr._ownsTargets || Sr._eager) && (0, Zr.e)(Sr, rr.engine)
        };
        Sr(Ir), Ir._descriptor.samples > 1 && Sr(jr.rst), Sr(jr.depth, !0)
      }
      const {
        _opaqueBindings: pr,
        _directBindings: xr,
        _transparentBindings: mr
      } = Er;
      try {
        for (const Qr of Sr) {
          const Sr = Qr.bind(rr.engine, rr._targetSignature);
          Er._batchState = rr._targetSignature._collectBatches?.(Er._batchState, Sr), Qr.isTransparent || Qr._transmissive ? mr.push(Sr) : Qr._direct ? xr.push(Sr) : pr.push(Sr)
        }
        pr.sort(lr), xr.sort(lr), Qr && Hr(rr, rr.engine, !1)
      } catch (Nr) {
        throw Er._batchState?._release(void 0, ar ?? [fr]), Nr
      }
      return Qr && (! function(rr, Sr) {
        const Qr = rr._config,
          Zr = rr._colorAttachment;
        Zr.view = Sr._colorView, rr._renderPassDescriptor.colorAttachments = Sr._colorView ? [Zr] : [];
        const Wr = Qr.depth ?? Sr,
          ar = Wr._depthView;
        let jr;
        if (ar) {
          const rr = Wr._descriptor,
            Sr = (Qr.depth ? Wr._eager : !1 === Qr.depthClear) ? "load" : "clear";
          jr = {
            view: ar,
            depthClearValue: rr.depthClearValue ?? 0,
            depthLoadOp: Sr,
            depthStoreOp: "store"
          }, rr.dFormat?.includes("stencil") && (jr.stencilClearValue = 0, jr.stencilLoadOp = Sr, jr.stencilStoreOp = "store")
        }
        rr._renderPassDescriptor.depthStencilAttachment = jr
      }(rr, Ir), rr._updateContext.targetWidth = Ir._width, rr._updateContext.targetHeight = Ir._height), Wr && (Object.assign(rr, Er), fr?._release(rr.engine, [Er._batchState])), Er
    }

    function Pr(rr, Sr) {
      const Qr = rr.engine,
        Zr = rr._config,
        ar = Zr.rt,
        jr = rr.Dt,
        Ir = rr._opaqueBindings,
        fr = rr._ob,
        Er = rr._sceneBG;
      if (function(rr, Sr, Qr, Zr) {
          const Wr = Sr?.viewport;
          if (!Wr) return;
          const ar = Math.floor(Wr.x * Qr),
            jr = Math.floor((1 - Wr.y - Wr.height) * Zr),
            Ir = Math.ceil((Wr.x + Wr.width) * Qr) - ar,
            fr = Math.ceil((1 - Wr.y) * Zr) - jr;
          rr.setViewport(ar, jr, Ir, fr, 0, 1), rr.setScissorRect(ar, jr, Ir, fr)
        }(Sr, Zr.cam ?? jr.camera, ar._width, ar._height), Sr.setBindGroup(0, Er), rr._lastVis !== Wr.d || !fr.length) {
        const Sr = ar._descriptor,
          Zr = Qr._device.createRenderBundleEncoder({
            colorFormats: Sr.format ? [Sr.format] : [],
            depthStencilFormat: rr._targetSignature._depthStencilFormat,
            sampleCount: Sr.samples
          });
        Zr.setBindGroup(0, Er), Rr(Zr, Ir, Qr), fr[0] = Zr.finish(), rr._lastVis = Wr.d
      }
      let pr = Ir.length;
      return Sr.executeBundles(fr), Sr.setBindGroup(0, Er), pr += Rr(Sr, rr._directBindings, Qr), pr += Rr(Sr, rr._transparentBindings, Qr), pr
    }

    function Hr(rr, Sr) {
      let Qr = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Zr = yr(Sr, rr.Dt)._buffer;
      if (Zr === rr._lightsUBO) return;
      const Wr = Sr._device.createBindGroup({
        layout: tr(Sr),
        entries: [{
          binding: 0,
          resource: {
            buffer: rr._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Zr
          }
        }]
      });
      rr._lightsUBO = Zr, rr._sceneBG = Wr, Qr && (rr._ob = [])
    }

    function qr(rr, Sr) {
      for (const Qr of rr) Qr.update?.(Sr)
    }

    function Rr(rr, Sr, Qr) {
      let Zr = null,
        Wr = 0;
      for (const ar of Sr) {
        const Sr = ar.renderable.mesh;
        Sr && !1 === Sr.visible || (ar.pipeline !== Zr && (rr.setPipeline(ar.pipeline), Zr = ar.pipeline), Wr += ar.draw(rr, Qr))
      }
      return Wr
    }

    function gr(rr) {
      const Sr = rr._materialSwapQueue;
      if (!Sr[0] || rr._runtimeBuilds?.w) return;
      let Zr, Wr, ar;
      const jr = rr._renderables;
      for (const Qr of Sr) {
        const Sr = Qr.material;
        if (!Sr) continue;
        const Ir = Qr._runtimeThinBuild;
        if (Ir) {
          Wr = Ir(rr, Qr, Wr);
          continue
        }
        const fr = rr._groups.get(Sr._buildGroup),
          Er = fr?.r;
        if (!Er) {
          (ar ??= []).push(Qr);
          continue
        }
        if (fr._w?.(Qr)) {
          (ar ??= []).push([Qr, Sr]);
          continue
        }
        const pr = rr._meshDisposables.get(Qr);
        pr && (rr._meshDisposables.delete(Qr), (0, Nr.f)(rr.surface.engine, (() => pr.forEach((rr => rr())))));
        const xr = fr.o;
        let mr;
        for (let rr = jr.length; rr--;) jr[rr].mesh === Qr && (mr = jr.splice(rr, 1)[0]);
        Sr._csmGen = -~Sr._csmGen;
        const Ur = Er(rr, Qr);
        if (xr) {
          const rr = xr.indexOf(mr);
          rr < 0 ? xr.push(Ur) : xr[rr] = Ur
        }
        Zr = jr.push(Ur)
      }
      if (Zr && (jr.sort(((rr, Sr) => rr.order - Sr.order)), rr._renderableVersion++, rr._materialEpoch++), Sr.length = 0, !ar) return Wr;
      const Ir = ar;
      return Qr.e(681).then((() => Qr(64722))).then((Sr => {
        let {
          C: Qr
        } = Sr;
        return Qr(rr, Ir, Wr)
      }), (Sr => {
        const Qr = rr._runtimeBuilds;
        Qr ? Qr._x(Sr) : console.error(Sr)
      }))
    }
    var Cr = null;

    function Mr(rr, Sr) {
      const Qr = rr.engine,
        Wr = {
          _kind: "Dt",
          surface: rr,
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
            Qr.useFloatingOrigin && Wr.camera && !Wr.camera._useFloatingOrigin && (Wr.camera._useFloatingOrigin = !0, Wr.camera._viewVer = -1, Wr.camera._vpVer = -1);
            const rr = Wr.fixedDeltaMs > 0 ? Wr.fixedDeltaMs : Qr._currentDelta,
              Sr = Qr._currentEncoder;
            let Zr = 0;
            for (const Qr of Wr._beforeRender) Qr(rr);
            Wr._materialSwapQueue.length && gr(Wr);
            for (const ar of Wr._prePasses) Zr += ar.execute(Sr, Qr);
            for (const ar of Wr._uniformUpdaters) ar.update(Qr);
            Wr._drawCallsPre = Zr
          },
          _record: () => Wr._frameGraph.execute(),
          _resize() {
            Wr._frameGraph.build()
          }
        },
        jr = function() {
          const rr = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Sr = 0; Sr < rr._tasks.length; Sr++) ar(rr, rr._tasks[Sr]);
              for (const Sr of rr._tasks)
                for (const rr of Sr._passes) rr._initialize()
            },
            execute() {
              let Sr = 0;
              for (const Qr of rr._tasks)
                if (!1 !== Qr.executionEnabled)
                  if (Qr.execute) Sr += Qr.execute();
                  else
                    for (const rr of Qr._passes) Sr += rr._execute();
              return Sr
            },
            dispose() {
              for (const Sr of rr._tasks) Sr.dispose();
              rr._tasks.length = 0, rr._currentProcessedTask = null
            }
          };
          return rr
        }();
      if (Wr._frameGraph = jr, !1 !== Sr?.defaultRenderTask) {
        const Sr = rr.msaaSamples > 1,
          ar = Sr ? (0, Zr.b)({
            lbl: "scene-color",
            format: rr.format,
            dFormat: "depth24plus-stencil8",
            samples: rr.msaaSamples,
            size: rr
          }) : rr.scRT,
          Ir = Sr ? void 0 : (0, Zr.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: rr
          });
        ! function(rr, Sr) {
          rr._tasks.push(Sr)
        }(jr, Or({
          name: "Dt",
          rt: ar,
          rst: Sr ? rr.scRT : void 0,
          depth: Ir
        }, Qr, Wr))
      }
      return Wr._disposables.push((() => jr.dispose())), Wr
    }
    async function Gr(rr) {
      const Sr = rr;
      for (Sr._built || (Sr._materialSwapQueue.length = 0); Sr._deferredBuilders.length;) {
        const rr = Sr._deferredBuilders.splice(0);
        await Promise.all(rr.map((rr => rr())))
      }
      await gr(Sr), Cr?.get(Sr)?.() || (Sr._runtimeBuilds?._e(), Sr._renderableVersion++, Sr._built = !0), await (Sr._rebuildHook?.(Sr))
    }
    var kr = null;
    async function Ar(rr) {
      const Sr = rr,
        Zr = Sr.surface;
      (0, Wr.g)(Zr, Sr) || (await Gr(rr), Sr._renderables.sort(Vr), await Promise.all(Sr._frameGraph._tasks.map((rr => rr._preload?.()))), kr && await kr(Sr), Sr._frameGraph.build(), Zr._renderingContexts[0] && (await Qr.e(679).then((() => Qr(64712)))).configureSwapchainOverlayScene(Zr, Sr), Cr?.get(Sr)?.() || (0, Wr.j)(Zr, Sr))
    }
    var Vr = (rr, Sr) => rr.order - Sr.order
  },
  54228: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Er,
      d: () => pr
    });
    var Zr = Qr(54182),
      Wr = Qr(54190),
      ar = Qr(54194),
      jr = Qr(54200),
      Ir = Qr(54202),
      fr = Qr(54206);

    function Er(rr, Sr, Qr) {
      let Ir = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Sr < 1 || Qr < 1) && (0, Zr.e)(676, Sr, Qr);
      const Er = rr._device,
        pr = Ir.mipMaps ?? !1,
        xr = Ir.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        mr = pr ? (0, fr.b)(Sr, Qr) : 1,
        Nr = Er.createTexture({
          size: {
            width: Sr,
            height: Qr
          },
          format: xr,
          mipLevelCount: mr,
          usage: Wr.k.TEXTURE_BINDING | Wr.k.COPY_DST | Wr.k.RENDER_ATTACHMENT
        }),
        Ur = {
          addressModeU: Ir.addressModeU ?? "clamp-to-edge",
          addressModeV: Ir.addressModeV ?? "clamp-to-edge",
          minFilter: Ir.minFilter ?? "linear",
          magFilter: Ir.magFilter ?? "linear",
          mipmapFilter: pr ? "linear" : "nearest"
        },
        tr = (0, jr.d)(rr, Ur),
        hr = {
          texture: Nr,
          view: Nr.createView(),
          sampler: tr,
          width: Sr,
          height: Qr
        };
      return (0, ar.e)(hr), rr._dlr && rr._dlr.t(hr, {
        kind: "dynamic",
        width: Sr,
        height: Qr,
        format: xr,
        levels: mr,
        samplerDesc: Ur,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), hr
    }

    function pr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Wr = Zr.invertY ?? !0,
        ar = Zr.premultiplyAlpha ?? !1;
      rr._device.queue.copyExternalImageToTexture({
        source: Qr,
        flipY: Wr
      }, {
        texture: Sr.texture,
        premultipliedAlpha: ar
      }, [Sr.width, Sr.height]);
      const jr = Sr._recoverySource;
      jr && "dynamic" === jr.kind && (jr.source = Qr, jr.flipY = Wr, jr.premultipliedAlpha = ar), Sr.texture.mipLevelCount > 1 && (0, Ir.generateMipmaps)(rr, Sr.texture)
    }
  },
  54220: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => fr
    });
    var Zr = Qr(54182),
      Wr = Qr(54190),
      ar = Qr(54194),
      jr = Qr(54200),
      Ir = Qr(54206);
    async function fr(rr, Sr) {
      let fr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Er, pr] = function(rr) {
        const Sr = rr,
          Qr = [
            [Sr.displayWidth, Sr.displayHeight],
            [Sr.videoWidth, Sr.videoHeight],
            [Sr.naturalWidth, Sr.naturalHeight],
            [Sr.width, Sr.height]
          ];
        for (const [Zr, Wr] of Qr)
          if (void 0 !== Zr && void 0 !== Wr && Number.isInteger(Zr) && Number.isInteger(Wr) && Zr > 0 && Wr > 0) return [Zr, Wr];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Sr), [xr, mr] = function(rr, Sr, Qr) {
        if (void 0 === Qr) return [rr, Sr];
        if (!Number.isInteger(Qr) || Qr < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Qr})`);
        if (Math.max(rr, Sr) <= Qr) return [rr, Sr];
        const Zr = Qr / Math.max(rr, Sr);
        return rr >= Sr ? [Qr, Math.max(1, Math.round(Sr * Zr))] : [Math.max(1, Math.round(rr * Zr)), Qr]
      }(Er, pr, fr.maxDimension), Nr = fr.mipMaps ?? !0, Ur = fr.premultiplyAlpha ?? !1;
      let tr = Sr,
        hr = null;
      const zr = {
        texture: null
      };
      try {
        xr === Er && mr === pr || (hr = await createImageBitmap(Sr, {
          resizeWidth: xr,
          resizeHeight: mr,
          resizeQuality: "high",
          premultiplyAlpha: Ur ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), tr = hr);
        const Yr = rr._device,
          nr = fr.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          er = Nr ? (0, Ir.b)(xr, mr) : 1,
          Kr = er > 1 ? (await Promise.resolve().then((() => Qr(54202)))).generateMipmaps : null,
          yr = {
            addressModeU: fr.addressModeU ?? "repeat",
            addressModeV: fr.addressModeV ?? "repeat",
            minFilter: fr.minFilter ?? "linear",
            magFilter: fr.magFilter ?? "linear",
            mipmapFilter: Nr ? "linear" : "nearest"
          };
        yr.maxAnisotropy = "linear" === yr.minFilter && "linear" === yr.magFilter && "linear" === yr.mipmapFilter ? 4 : 1;
        const Br = fr.invertY ?? !0,
          Tr = async Sr => {
            let Qr;
            Yr.pushErrorScope("validation"), Yr.pushErrorScope("out-of-memory");
            let ar = null;
            try {
              const Qr = zr.texture = Yr.createTexture({
                size: {
                  width: xr,
                  height: mr
                },
                format: nr,
                mipLevelCount: er,
                usage: Wr.k.TEXTURE_BINDING | Wr.k.COPY_DST | Wr.k.RENDER_ATTACHMENT
              });
              Yr.queue.copyExternalImageToTexture({
                source: Sr,
                flipY: Br
              }, {
                texture: Qr,
                premultipliedAlpha: Ur
              }, {
                width: xr,
                height: mr
              }), Kr && Kr(rr, Qr), ar = (0, jr.d)(rr, yr)
            } catch (Nr) {
              Qr = Nr
            }
            const [Ir, fr] = await Promise.all([Yr.popErrorScope(), Yr.popErrorScope()]);
            if (Qr) throw Qr;
            const Er = fr ?? Ir;
            if (Er) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Er.message}`, {
              cause: Er
            });
            const pr = zr.texture;
            return pr && ar || (0, Zr.e)(677), {
              texture: pr,
              view: pr.createView(),
              sampler: ar,
              width: xr,
              height: mr
            }
          }, vr = await (rr._dlr?.x(tr, xr, mr, nr, er, yr, Br, Ur, Tr)) ?? await Tr(tr);
        return (0, ar.e)(vr), vr
      } catch (Yr) {
        throw zr.texture?.destroy(), Yr
      } finally {
        hr?.close()
      }
    }
  },
  54202: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      generateMipmaps: () => Nr,
      recordMipmaps: () => Ur
    });
    var Zr = Qr(54190),
      Wr = Qr(54200),
      ar = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var jr = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Ir = null,
      fr = null,
      Er = null,
      pr = null,
      xr = null;

    function mr(rr) {
      const Sr = rr._device;
      Sr !== xr && (Ir?.clear(), Ir = null, fr = null, Er = null, pr = null, xr = null, xr = Sr), fr ??= Sr.createShaderModule({
        code: jr
      }), Er ??= function(rr) {
        return (0, Wr.d)(rr, ar)
      }(rr), pr ??= Sr.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Zr.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Zr.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Nr(rr, Sr, Qr) {
      const Zr = rr._device,
        Wr = Zr.createCommandEncoder();
      Ur(rr, Sr, Wr, Qr), Zr.queue.submit([Wr.finish()])
    }

    function Ur(rr, Sr, Qr, Zr) {
      if (Sr.mipLevelCount <= 1) return;
      const Wr = rr._device,
        ar = function(rr, Sr) {
          const Qr = rr._device;
          mr(rr), Ir ??= new Map;
          let Zr = Ir.get(Sr);
          return Zr || (Zr = Qr.createRenderPipeline({
            layout: Qr.createPipelineLayout({
              bindGroupLayouts: [pr]
            }),
            vertex: {
              module: fr,
              entryPoint: "vs"
            },
            fragment: {
              module: fr,
              entryPoint: "fs",
              targets: [{
                format: Sr
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Ir.set(Sr, Zr)), Zr
        }(rr, Sr.format),
        jr = null != Zr ? {
          dimension: "2d",
          baseArrayLayer: Zr,
          arrayLayerCount: 1
        } : {};
      for (let Ir = 1; Ir < Sr.mipLevelCount; Ir++) {
        const rr = Sr.createView({
            baseMipLevel: Ir - 1,
            mipLevelCount: 1,
            ...jr
          }),
          Zr = Sr.createView({
            baseMipLevel: Ir,
            mipLevelCount: 1,
            ...jr
          }),
          fr = Wr.createBindGroup({
            layout: pr,
            entries: [{
              binding: 0,
              resource: rr
            }, {
              binding: 1,
              resource: Er
            }]
          }),
          xr = Qr.beginRenderPass({
            colorAttachments: [{
              view: Zr,
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
        xr.setPipeline(ar), xr.setBindGroup(0, fr), xr.draw(3), xr.end()
      }
    }
  },
  54206: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      return Math.floor(Math.log2(Math.max(rr, Sr))) + 1
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  54178: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Er,
      e: () => pr
    });
    var Zr = Qr(54182),
      Wr = Qr(54190),
      ar = Qr(54194),
      jr = Qr(54200),
      Ir = Qr(54202),
      fr = Qr(54206);

    function Er(rr, Sr, Qr, Ir) {
      let Er = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Sr < 1 || Qr < 1 || Ir < 1) && (0, Zr.e)(722, Sr, Qr, Ir);
      const pr = rr._device,
        xr = Er.mipMaps ?? !0,
        mr = Er.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Nr = pr.createTexture({
          size: {
            width: Sr,
            height: Qr,
            depthOrArrayLayers: Ir
          },
          dimension: "2d",
          format: mr,
          mipLevelCount: xr ? (0, fr.b)(Sr, Qr) : 1,
          usage: Wr.k.TEXTURE_BINDING | Wr.k.COPY_DST | Wr.k.RENDER_ATTACHMENT
        }),
        Ur = (0, jr.d)(rr, {
          addressModeU: Er.addressModeU ?? "repeat",
          addressModeV: Er.addressModeV ?? "repeat",
          minFilter: Er.minFilter ?? "linear",
          magFilter: Er.magFilter ?? "linear",
          mipmapFilter: xr ? "linear" : "nearest"
        }),
        tr = {
          texture: Nr,
          view: Nr.createView({
            dimension: "2d-array"
          }),
          sampler: Ur,
          width: Sr,
          height: Qr,
          layers: Ir
        };
      return (0, ar.e)(tr), tr
    }

    function pr(rr, Sr, Qr, Wr) {
      let ar = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Qr < 0 || Qr >= Sr.layers || (0 | Qr) !== Qr) && (0, Zr.e)(723, Sr.layers, Qr);
      const jr = ar.invertY ?? !0,
        fr = ar.premultiplyAlpha ?? !1;
      rr._device.queue.copyExternalImageToTexture({
        source: Wr,
        flipY: jr
      }, {
        texture: Sr.texture,
        origin: [0, 0, Qr],
        premultipliedAlpha: fr
      }, [Sr.width, Sr.height, 1]), Sr.texture.mipLevelCount > 1 && (0, Ir.generateMipmaps)(rr, Sr.texture, Qr)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);