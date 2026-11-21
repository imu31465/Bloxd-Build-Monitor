export const id = 296;
export const ids = [296];
export const modules = {
  41671: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => ld,
      d: () => Rd,
      e: () => Qd,
      f: () => Ld,
      i: () => Gd,
      j: () => Id
    });
    var pd = kd(41629);
    var Nd = "Babylon Lite v1.32.0",
      Wd = kd(41678);

    function Pd(dd) {
      return "clientWidth" in dd
    }
    var Zd = 1;

    function gd(dd, Jd, kd) {
      const gd = Jd.getContext("webgpu");
      gd || (0, pd.e)(54), Pd(Jd) && Jd.setAttribute("data-engine", Nd);
      const Cd = kd?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Kd = kd?.srgb ? (od = Cd).endsWith("-srgb") ? od : `${od}-srgb` : Cd;
      var od;
      const ld = kd?.alphaMode ?? "opaque";
      gd.configure({
        device: dd._device,
        format: Cd,
        alphaMode: ld,
        viewFormats: [Kd]
      });
      const Qd = 1 === kd?.msaaSamples ? 1 : 4,
        Ld = (0, Wd.c)({
          lbl: "swapchain",
          format: Kd,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Ld._eager = !0, {
        engine: dd,
        canvas: Jd,
        format: Kd,
        msaaSamples: Qd,
        scRT: Ld,
        maxDevicePixelRatio: kd?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Zd++,
        _context: gd,
        _configureFormat: Cd,
        _alphaMode: ld,
        _renderingContexts: []
      }
    }

    function Cd(dd) {
      const Jd = dd._context.getCurrentTexture(),
        kd = dd.scRT;
      kd._colorTexture = Jd, kd._colorView = Jd.createView({
        format: dd.format
      }), kd._width = Jd.width, kd._height = Jd.height
    }

    function Kd(dd) {
      const Jd = dd.canvas;
      if (!Pd(Jd)) return;
      const kd = dd._w ?? Jd.clientWidth,
        pd = dd._h ?? Jd.clientHeight;
      if (!(kd > 0 && pd > 0)) return;
      const Nd = Math.min(globalThis.devicePixelRatio || 1, dd.maxDevicePixelRatio);
      od(dd, kd * Nd | 0, pd * Nd | 0)
    }

    function od(dd, Jd, kd) {
      const pd = dd.canvas,
        Nd = 0 | Jd,
        Wd = 0 | kd;
      if (Nd > 0 && Wd > 0 && (Nd !== pd.width || Wd !== pd.height)) {
        pd.width = Nd, pd.height = Wd, dd.scRT._width = Nd, dd.scRT._height = Wd;
        for (const Jd of dd._renderingContexts) Jd._resize?.()
      }
    }
    var ld = 0;

    function Qd(dd, Jd) {
      return -1 !== dd._renderingContexts.indexOf(Jd)
    }

    function Ld(dd, Jd) {
      return -1 === dd._renderingContexts.indexOf(Jd) && (dd._renderingContexts.push(Jd), !0)
    }
    var Od = null;
    var ed = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Rd(dd, Jd) {
      const Wd = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Od ? Od() : {}
      });
      Wd || (0, pd.e)(47);
      const Pd = Od?.deviceFeatures?.(Wd, Jd) ?? function(dd) {
          return ed.filter((Jd => dd.features.has(Jd)))
        }(Wd),
        Zd = await Wd.requestDevice({
          requiredFeatures: Pd,
          requiredLimits: Jd?.requiredLimits
        });
      console.log(`${Nd} - WebGPU engine`);
      const od = !!Jd?.useHighPrecisionMatrix,
        ld = !!Jd?.useFloatingOrigin;
      if (ld && !od && (0, pd.e)(48), od) {
        const {
          allocateF64Mat4: dd
        } = await kd.e(350).then((() => kd(60954)));
        0
      }
      let Qd, Ld, Rd, Id;
      if (ld) {
        const [{
          wrapRenderableForFO: dd,
          lightFoVersion: Jd,
          applyLightFoOffset: pd
        }, {
          makePackMeshWorld: Nd
        }] = await Promise.all([kd.e(351).then((() => kd(60957))), kd.e(352).then((() => kd(60963)))]);
        Qd = dd, Ld = Nd, Rd = Jd, Id = pd
      }
      const Gd = {
          _device: Zd
        },
        vd = [Gd];
      return Object.assign(Gd, {
        engine: Gd,
        surfaces: vd,
        _surfaces: vd,
        _device: Zd,
        _options: Jd,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: od,
        useFloatingOrigin: ld,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Qd,
        _makePackMeshWorld: Ld,
        _lightFoVersion: Rd,
        _applyLightFoOffset: Id
      }, gd(Gd, dd, Jd)), Kd(Gd), Cd(Gd), Gd
    }

    function Id(dd, Jd, kd) {
      od(dd, Jd, kd)
    }

    function Gd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.surfaces;
      if (kd !== dd.surfaces)
        for (let Nd = kd.length; Nd--;) kd[Nd].engine !== dd && (0, pd.e)(49);
      vd(dd, Jd, kd)
    }

    function vd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd._surfaces,
        pd = 0;
      for (let Wd = kd.length; Wd--;) pd += kd[Wd]._renderingContexts.length;
      if (!pd) return dd.drawCallCount = 0, dd._flushGpuRetirements?.(dd);
      const Nd = dd._device.createCommandEncoder({
        label: "frame"
      });
      dd._currentEncoder = Nd, dd._currentDelta = Jd;
      try {
        dd._gpuTimerBegin?.(Nd), pd = 0;
        for (let dd = 0; dd < kd.length; dd++) {
          const Jd = kd[dd];
          Jd._capturePreFrame?.(Jd), Cd(Jd);
          const Nd = Jd._renderingContexts;
          for (let dd = 0; dd < Nd.length; dd++) {
            const Jd = Nd[dd];
            Jd._update(), pd += Jd._drawCallsPre + Jd._record()
          }
        }
        const Jd = dd._currentEncoder;
        for (let dd = 0; dd < kd.length; dd++) {
          const pd = kd[dd];
          pd._captureService?.(pd, Jd)
        }
        dd._gpuTimerEnd?.(Jd), dd._cbs[0] = Jd.finish(), dd._device.queue.submit(dd._cbs), dd._flushGpuRetirements?.(dd), dd.drawCallCount = pd, dd._gpuTimerResolve?.()
      } finally {
        dd._currentEncoder = void 0
      }
    }
  },
  41632: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd,
      e: () => Wd,
      h: () => pd
    });
    var pd = globalThis.GPUTextureUsage,
      Nd = globalThis.GPUBufferUsage,
      Wd = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41690: (dd, Jd, kd) => {
    function pd(dd) {
      Nd(dd.splice(0))
    }

    function Nd(dd) {
      for (const kd of dd) try {
        kd()
      } catch (Jd) {
        console.error("GPU resource retirement failed.", Jd)
      }
    }

    function Wd(dd, Jd) {
      dd._flushGpuRetirements ??= Pd, (dd._retirements ??= []).push(Jd)
    }

    function Pd(dd) {
      const Jd = dd._retirements;
      if (!Jd) return;
      dd._retirements = null;
      const kd = dd._retiring ??= new Set;
      kd.add(Jd), queueMicrotask((() => {
        dd._device.queue.onSubmittedWorkDone().then((() => {
          kd.delete(Jd), pd(Jd)
        })).catch((() => {}))
      }))
    }
    kd.d(Jd, {
      c: () => Wd
    })
  },
  41678: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd,
      e: () => Pd,
      g: () => Zd
    });
    var pd = kd(41632);

    function Nd(dd) {
      const Jd = dd.size;
      return "canvas" in Jd ? Jd.canvas : Jd
    }

    function Wd(dd) {
      return {
        _descriptor: dd,
        _resolveSize: Nd,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Pd(dd, Jd) {
      if (dd._eager) return void dd._syncEager?.(Jd);
      Zd(dd);
      const kd = dd._descriptor,
        {
          width: Wd,
          height: Pd
        } = (dd._resolveSize ?? Nd)(kd);
      dd._width = Wd, dd._height = Pd;
      const gd = Jd._device;
      kd.format && (dd._colorTexture = gd.createTexture({
        label: kd.lbl,
        size: {
          width: Wd,
          height: Pd
        },
        format: kd.format,
        sampleCount: kd.samples,
        usage: pd.h.RENDER_ATTACHMENT | pd.h.TEXTURE_BINDING | pd.h.COPY_SRC | pd.h.COPY_DST
      }), dd._colorView = dd._colorTexture.createView()), kd.dFormat && (dd._depthTexture = gd.createTexture({
        label: kd.lbl,
        size: {
          width: Wd,
          height: Pd
        },
        format: kd.dFormat,
        sampleCount: kd.samples,
        usage: pd.h.RENDER_ATTACHMENT | pd.h.TEXTURE_BINDING
      }), dd._depthView = dd._depthTexture.createView())
    }

    function Zd(dd) {
      if (!dd || dd._eager && !dd._disposeAttachments) return;
      const Jd = dd._colorTexture,
        kd = dd._depthTexture;
      if (dd._colorTexture = dd._depthTexture = null, dd._colorView = dd._depthView = null, dd._width = dd._height = 0, dd._disposeAttachments) dd._disposeAttachments(Jd, kd);
      else try {
        Jd?.destroy()
      } finally {
        !1 !== dd._ownsDepthTexture && kd?.destroy()
      }
    }
  },
  41685: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd,
      g: () => Nd,
      k: () => Wd
    });
    var pd = Float32Array,
      Nd = Float64Array,
      Wd = Uint32Array
  },
  41692: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd
    });
    var pd = 16
  },
  41629: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    var pd = null;

    function Nd(dd) {
      for (var Jd = arguments.length, kd = new Array(Jd > 1 ? Jd - 1 : 0), Nd = 1; Nd < Jd; Nd++) kd[Nd - 1] = arguments[Nd];
      const Wd = new Error(pd?.(dd, kd) ?? `#${dd}`);
      throw Wd.lite = kd, Wd
    }
  },
  41653: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Nd
    });
    var pd = kd(41642);

    function Nd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const kd = Jd.compare,
        Nd = Jd.lodMinClamp ?? 0,
        Wd = Jd.lodMaxClamp ?? 32,
        Pd = void 0 !== kd || 0 !== Nd || 32 !== Wd ? `${kd??""}:${Nd}:${Wd}` : "";
      return (0, pd.d)(dd, Jd, Pd)
    }
  },
  41638: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = null;

    function Nd(dd) {
      const Jd = pd ??= new WeakMap;
      Jd.set(dd, (Jd.get(dd) ?? 0) + 1)
    }

    function Wd(dd) {
      Nd(dd.texture)
    }
  },
  41642: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Zd
    });
    var pd = null,
      Nd = "nearest",
      Wd = "clamp-to-edge",
      Pd = {
        minFilter: Nd,
        magFilter: Nd,
        mipmapFilter: Nd,
        addressModeU: Wd,
        addressModeV: Wd,
        addressModeW: Wd,
        maxAnisotropy: 1
      };

    function Zd(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Nd = dd._device,
        Wd = pd ??= new WeakMap;
      let Zd = Wd.get(Nd);
      Zd || Wd.set(Nd, Zd = new Map);
      let gd = kd;
      for (const pd in Pd) {
        const dd = pd;
        gd += `:${Jd[dd]??Pd[dd]}`
      }
      let Cd = Zd.get(gd);
      return Cd || Zd.set(gd, Cd = Nd.createSampler(Jd)), Cd
    }
  },
  41683: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Ud,
      h: () => Td
    });
    var pd = kd(41678),
      Nd = kd(41671);

    function Wd(dd, Jd) {
      Jd._passes.length = 0, dd._currentProcessedTask = Jd;
      try {
        Jd.record()
      } finally {
        dd._currentProcessedTask = null
      }
    }
    var Pd = kd(41685);

    function Zd(dd) {
      const Jd = dd.worldMatrixVersion;
      if (dd._viewVer === Jd) return dd._viewCache;
      const kd = dd._viewCache,
        pd = dd.worldMatrix,
        Nd = dd._useFloatingOrigin,
        Wd = Nd ? 0 : pd[12],
        Pd = Nd ? 0 : pd[13],
        Zd = Nd ? 0 : pd[14];
      return kd[0] = pd[0], kd[1] = pd[4], kd[2] = pd[8], kd[3] = 0, kd[4] = pd[1], kd[5] = pd[5], kd[6] = pd[9], kd[7] = 0, kd[8] = pd[2], kd[9] = pd[6], kd[10] = pd[10], kd[11] = 0, kd[12] = -(pd[0] * Wd + pd[1] * Pd + pd[2] * Zd), kd[13] = -(pd[4] * Wd + pd[5] * Pd + pd[6] * Zd), kd[14] = -(pd[8] * Wd + pd[9] * Pd + pd[10] * Zd), kd[15] = 1, dd._viewVer = Jd, kd
    }
    var gd = null;

    function Cd(dd) {
      return dd._projFov === dd.fov && dd._projNear === dd.nearPlane && dd._projFar === dd.farPlane || (dd._projFov = dd.fov, dd._projNear = dd.nearPlane, dd._projFar = dd.farPlane, dd._projRev = (dd._projRev ?? 0) + 1), dd.worldMatrixVersion + (dd._projRev ?? 0)
    }

    function Kd(dd, Jd) {
      const kd = Cd(dd);
      if (dd._projVer === kd && dd._projAspect === Jd) return dd._projCache;
      const pd = dd._projCache;
      return null !== gd && dd.ortho ? gd(dd, Jd, pd) : function(dd, Jd, kd, pd, Nd) {
        const Wd = 1 / Math.tan(.5 * Jd),
          Pd = Nd - pd;
        dd[0] = Wd / kd, dd[5] = Wd, dd[10] = -pd / Pd, dd[11] = 1, dd[14] = Nd * pd / Pd
      }(pd, dd.fov, Jd, dd.nearPlane, dd.farPlane), dd._projVer = kd, dd._projAspect = Jd, pd
    }
    var od = kd(41632);

    function ld(dd, Jd, kd) {
      return dd._device.createBuffer({
        label: kd,
        size: (pd = Jd, Nd = 16, Math.ceil(pd / Nd) * Nd),
        usage: od.b.UNIFORM | od.b.COPY_DST
      });
      var pd, Nd
    }
    var Qd = kd(41690),
      Ld = null;

    function Od(dd) {
      const Jd = dd._device,
        kd = Ld ??= new WeakMap;
      let pd = kd.get(Jd);
      return pd || (pd = Jd.createBindGroupLayout({
        label: "BO",
        entries: [{
          binding: 0,
          visibility: od.e.VERTEX | od.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: od.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), kd.set(Jd, pd)), pd
    }

    function ed(dd, Jd, kd) {
      const pd = dd._device,
        Nd = ld(dd, Jd.byteLength, kd);
      try {
        pd.queue.writeBuffer(Nd, 0, Jd.buffer, Jd.byteOffset, Jd.byteLength)
      } catch (Wd) {
        throw Nd.destroy(), Wd
      }
      return Nd
    }
    var Rd = kd(41692),
      Id = new Pd.k(1),
      Gd = new Pd.d(Id.buffer);

    function vd(dd) {
      let Jd = 0;
      for (const kd of dd) Jd += kd._lightVersion ?? 0;
      return Jd
    }

    function xd(dd, Jd) {
      dd.fill(0);
      let kd = 0;
      for (const pd of Jd) {
        if (kd >= Rd.e) break;
        pd._writeLightUbo && (pd._writeLightUbo(dd, 4 + 16 * kd), kd++)
      }
      Id[0] = kd, dd[0] = Gd[0]
    }

    function qd(dd, Jd) {
      let kd = Jd._lightGpuState;
      const pd = 16 + 16 * Rd.e * 4;
      if (kd && kd._byteSize === pd) return kd;
      const Nd = !kd;
      kd?._buffer.destroy();
      const Wd = new Pd.d(pd / 4);
      return xd(Wd, Jd.lights), dd._applyLightFoOffset?.(Wd, Jd), kd = {
        _buffer: ed(dd, Wd),
        _scratch: Wd,
        rD: vd(Jd.lights) + (dd._lightFoVersion?.(Jd) ?? 0),
        _listVersion: Jd._lightListVersion ?? 0,
        _lightCount: Jd.lights.length,
        _byteSize: pd
      }, Jd._lightGpuState = kd, Nd && Jd._disposables.push((() => {
        Jd._lightGpuState?._buffer.destroy(), Jd._lightGpuState = void 0
      })), kd
    }

    function Bd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Nd = Jd;
      if (0 === pd && 16 === Nd.length) return void dd.set(Nd, kd);
      const Wd = pd,
        Pd = kd;
      dd[Pd + 0] = Nd[Wd + 0], dd[Pd + 1] = Nd[Wd + 1], dd[Pd + 2] = Nd[Wd + 2], dd[Pd + 3] = Nd[Wd + 3], dd[Pd + 4] = Nd[Wd + 4], dd[Pd + 5] = Nd[Wd + 5], dd[Pd + 6] = Nd[Wd + 6], dd[Pd + 7] = Nd[Wd + 7], dd[Pd + 8] = Nd[Wd + 8], dd[Pd + 9] = Nd[Wd + 9], dd[Pd + 10] = Nd[Wd + 10], dd[Pd + 11] = Nd[Wd + 11], dd[Pd + 12] = Nd[Wd + 12], dd[Pd + 13] = Nd[Wd + 13], dd[Pd + 14] = Nd[Wd + 14], dd[Pd + 15] = Nd[Wd + 15]
    }

    function sd(dd, Jd, kd, pd, Nd) {
      dd.fill(0);
      const Wd = function(dd, Jd) {
          const kd = Cd(dd);
          if (dd._vpVer === kd && dd._vpAspect === Jd) return dd._vpCache;
          const pd = dd._vpCache;
          return function(dd, Jd, kd, pd, Nd, Wd) {
            const Pd = kd[pd],
              Zd = kd[pd + 1],
              gd = kd[pd + 2],
              Cd = kd[pd + 3],
              Kd = kd[pd + 4],
              od = kd[pd + 5],
              ld = kd[pd + 6],
              Qd = kd[pd + 7],
              Ld = kd[pd + 8],
              Od = kd[pd + 9],
              ed = kd[pd + 10],
              Rd = kd[pd + 11],
              Id = kd[pd + 12],
              Gd = kd[pd + 13],
              vd = kd[pd + 14],
              xd = kd[pd + 15];
            let qd = Nd[Wd],
              Bd = Nd[Wd + 1],
              sd = Nd[Wd + 2],
              ad = Nd[Wd + 3];
            dd[Jd] = Pd * qd + Kd * Bd + Ld * sd + Id * ad, dd[Jd + 1] = Zd * qd + od * Bd + Od * sd + Gd * ad, dd[Jd + 2] = gd * qd + ld * Bd + ed * sd + vd * ad, dd[Jd + 3] = Cd * qd + Qd * Bd + Rd * sd + xd * ad, qd = Nd[Wd + 4], Bd = Nd[Wd + 5], sd = Nd[Wd + 6], ad = Nd[Wd + 7], dd[Jd + 4] = Pd * qd + Kd * Bd + Ld * sd + Id * ad, dd[Jd + 5] = Zd * qd + od * Bd + Od * sd + Gd * ad, dd[Jd + 6] = gd * qd + ld * Bd + ed * sd + vd * ad, dd[Jd + 7] = Cd * qd + Qd * Bd + Rd * sd + xd * ad, qd = Nd[Wd + 8], Bd = Nd[Wd + 9], sd = Nd[Wd + 10], ad = Nd[Wd + 11], dd[Jd + 8] = Pd * qd + Kd * Bd + Ld * sd + Id * ad, dd[Jd + 9] = Zd * qd + od * Bd + Od * sd + Gd * ad, dd[Jd + 10] = gd * qd + ld * Bd + ed * sd + vd * ad, dd[Jd + 11] = Cd * qd + Qd * Bd + Rd * sd + xd * ad, qd = Nd[Wd + 12], Bd = Nd[Wd + 13], sd = Nd[Wd + 14], ad = Nd[Wd + 15], dd[Jd + 12] = Pd * qd + Kd * Bd + Ld * sd + Id * ad, dd[Jd + 13] = Zd * qd + od * Bd + Od * sd + Gd * ad, dd[Jd + 14] = gd * qd + ld * Bd + ed * sd + vd * ad, dd[Jd + 15] = Cd * qd + Qd * Bd + Rd * sd + xd * ad
          }(pd, 0, Kd(dd, Jd), 0, Zd(dd), 0), dd._vpVer = kd, dd._vpAspect = Jd, pd
        }(pd, Nd),
        Pd = Zd(pd),
        gd = pd.worldMatrix;
      Bd(dd, Wd, 0), Bd(dd, Pd, 16), Jd.useFloatingOrigin ? (dd[32] = 0, dd[33] = 0, dd[34] = 0) : (dd[32] = gd[12], dd[33] = gd[13], dd[34] = gd[14]), dd[87] = Jd.canvas.width;
      const od = kd.imageProcessing;
      dd[76] = od.exposure, dd[77] = od.contrast, dd[78] = kd._envTextures?.lodGenerationScale ?? .8, dd[79] = +od.toneMappingEnabled, dd[37] = Jd.canvas.height
    }

    function ad(dd, Jd) {
      return {
        _renderables: dd,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Jd
      }
    }

    function Md(dd, Jd, kd) {
      dd.clr ??= !0;
      const Nd = dd.rt._descriptor,
        Wd = dd.depth?._descriptor,
        gd = {
          _colorFormat: Nd.format,
          _depthStencilFormat: Wd?.dFormat ?? Nd.dFormat,
          _depthCompare: Nd.depthCompare ?? Wd?.depthCompare,
          _sampleCount: Nd.samples
        },
        Kd = {
          loadOp: "clear",
          storeOp: "store"
        },
        od = {
          ...ad([], -1),
          name: dd.name,
          _config: dd,
          _ownsTargets: !dd.sharedRt,
          engine: Jd,
          BO: kd,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Kd]
          },
          _colorAttachment: Kd,
          _sceneUBO: ld(Jd, 368),
          _suData: new Pd.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: gd,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (od._disposed) throw new Error("RenderTask has been disposed.");
            od._recordExplicit ? od._recordExplicit(od, !0) : md(od, !1 !== dd.autoMirror ? kd._renderables.slice() : od._renderables, !0)
          },
          execute: () => function(dd, Jd, kd) {
            if (!1 === dd.enabled) return 0;
            const pd = dd.BO;
            ! function(dd, Jd, kd) {
              const pd = dd.BO;
              !1 !== dd._config.autoMirror && dd._lastVersion !== pd._renderableVersion && md(dd, pd._renderables.slice());
              Sd(dd, Jd);
              const Nd = dd._updateContext,
                Wd = dd._config.cam ?? pd.camera;
              kd._colorFormat && (dd._config._skipClusteredLights || pd._clusteredLightUpdater?.(Wd, Nd.targetWidth, Nd.targetHeight), function(dd, Jd) {
                const kd = qd(dd, Jd),
                  pd = vd(Jd.lights) + (dd._lightFoVersion?.(Jd) ?? 0),
                  Nd = Jd._lightListVersion ?? 0;
                pd === kd.rD && Nd === kd._listVersion && Jd.lights.length === kd._lightCount || (kd.rD = pd, kd._listVersion = Nd, kd._lightCount = Jd.lights.length, xd(kd._scratch, Jd.lights), dd._applyLightFoOffset?.(kd._scratch, Jd), dd._device.queue.writeBuffer(kd._buffer, 0, kd._scratch)), kd._buffer
              }(Jd, pd));
              (function(dd, Jd, kd, pd) {
                if (!pd) return;
                const Nd = pd.viewport,
                  Wd = dd._config.rt,
                  Pd = (dd._config.cs ? Jd.canvas.width / Jd.canvas.height : Wd._width / Wd._height) * (Nd ? Nd.width / Nd.height : 1),
                  Zd = kd.fog,
                  gd = kd.imageProcessing,
                  Kd = Cd(pd),
                  od = kd._envTextures,
                  ld = dd._sceneUboCacheKey;
                if (ld[0] === pd && ld[1] === Zd && ld[2] === Kd && ld[3] === Pd && ld[4] === gd.exposure && ld[5] === gd.contrast && ld[6] === od) return;
                ld[0] = pd, ld[1] = Zd, ld[2] = Kd, ld[3] = Pd, ld[4] = gd.exposure, ld[5] = gd.contrast, ld[6] = od;
                const Qd = dd._suData;
                sd(Qd, Jd, kd, pd, Pd);
                const Ld = kd._sceneUboContributors;
                if (Ld)
                  for (const Cd of Ld) Cd(Qd, kd);
                Jd._device.queue.writeBuffer(dd._sceneUBO, 0, Qd)
              })(dd, Jd, pd, Wd), Nd.JA = Wd, dd._batchState?._reset(), jd(dd._opaqueBindings, Nd), jd(dd._directBindings, Nd), jd(dd._transparentBindings, Nd), dd._batchState?._flush(Jd),
                function(dd, Jd) {
                  const kd = dd._transparentBindings;
                  if (kd.length <= 1 || !Jd) return;
                  const pd = Zd(Jd);
                  for (const Nd of kd) {
                    const dd = Nd.renderable._worldCenter;
                    Nd._sortDistance = dd ? dd[0] * pd[2] + dd[1] * pd[6] + dd[2] * pd[10] + pd[14] : 0
                  }
                  kd.sort(Fd)
                }(dd, Wd)
            }(dd, Jd, kd);
            const Nd = dd._colorAttachment,
              Wd = dd._config;
            Wd.rt._colorView && (Wd.rt === pd.surface.scRT && (Nd.view = Wd.rt._colorView), Nd.resolveTarget = Wd.rst?._colorView ?? void 0, Nd.clearValue = Wd.clrColor ?? pd.clearColor, Nd.loadOp = Wd.clr ? "clear" : "load");
            if (dd._executeWithTransmission) return dd._executeWithTransmission(kd._sampleCount);
            const Pd = Jd._currentEncoder.beginRenderPass(dd._renderPassDescriptor),
              gd = bd(dd, Pd);
            return Pd.end(), gd
          }(od, Jd, gd),
          dispose() {
            if (od._disposed) return;
            od._disposed = !0;
            const Jd = od._pendingMeshes;
            Jd && (Jd.length = 0);
            for (const dd of od._renderables) od._retireRenderable?.(od.engine, dd);
            od._passes.length = od._opaqueBindings.length = od._directBindings.length = 0, od._transparentBindings.length = od._renderables.length = od._ob.length = 0, od._ownsTargets && ((0, pd.g)(dd.rt), (0, pd.g)(dd.rst)), dd.depth?._eager || (0, pd.g)(dd.depth);
            const kd = od._sceneUBO;
            (0, Qd.c)(od.engine, (() => kd.destroy())), od._batchState?._release(od.engine), od._batchState = void 0
          }
        };
      return od
    }

    function Fd(dd, Jd) {
      return Jd._sortDistance - dd._sortDistance || dd.renderable.order - Jd.renderable.order
    }

    function Yd(dd, Jd) {
      return dd.renderable.order - Jd.renderable.order
    }

    function md(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd._renderables,
        kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Nd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Wd = arguments.length > 4 ? arguments[4] : void 0;
      const Pd = dd._config,
        Zd = Pd.rt,
        gd = dd._batchState,
        Cd = ad(Jd, dd.BO._renderableVersion);
      if (kd) {
        const Jd = (Jd, kd) => {
          Jd && (kd || dd._ownsTargets || Jd._eager) && (0, pd.e)(Jd, dd.engine)
        };
        Jd(Zd), Zd._descriptor.samples > 1 && Jd(Pd.rst), Jd(Pd.depth, !0)
      }
      const {
        _opaqueBindings: Kd,
        _directBindings: od,
        _transparentBindings: ld
      } = Cd;
      try {
        for (const kd of Jd) {
          const Jd = kd.bind(dd.engine, dd._targetSignature);
          Cd._batchState = dd._targetSignature._collectBatches?.(Cd._batchState, Jd), kd.isTransparent || kd._transmissive ? ld.push(Jd) : kd._direct ? od.push(Jd) : Kd.push(Jd)
        }
        Kd.sort(Yd), od.sort(Yd), kd && Sd(dd, dd.engine, !1)
      } catch (Qd) {
        throw Cd._batchState?._release(void 0, Wd ?? [gd]), Qd
      }
      return kd && (! function(dd, Jd) {
        const kd = dd._config,
          pd = dd._colorAttachment;
        pd.view = Jd._colorView, dd._renderPassDescriptor.colorAttachments = Jd._colorView ? [pd] : [];
        const Nd = kd.depth ?? Jd,
          Wd = Nd._depthView;
        let Pd;
        if (Wd) {
          const dd = Nd._descriptor,
            Jd = (kd.depth ? Nd._eager : !1 === kd.depthClear) ? "load" : "clear";
          Pd = {
            view: Wd,
            depthClearValue: dd.depthClearValue ?? 0,
            depthLoadOp: Jd,
            depthStoreOp: "store"
          }, dd.dFormat?.includes("stencil") && (Pd.stencilClearValue = 0, Pd.stencilLoadOp = Jd, Pd.stencilStoreOp = "store")
        }
        dd._renderPassDescriptor.depthStencilAttachment = Pd
      }(dd, Zd), dd._updateContext.targetWidth = Zd._width, dd._updateContext.targetHeight = Zd._height), Nd && (Object.assign(dd, Cd), gd?._release(dd.engine, [Cd._batchState])), Cd
    }

    function bd(dd, Jd) {
      const kd = dd.engine,
        pd = dd._config,
        Wd = pd.rt,
        Pd = dd.BO,
        Zd = dd._opaqueBindings,
        gd = dd._ob,
        Cd = dd._sceneBG;
      if (function(dd, Jd, kd, pd) {
          const Nd = Jd?.viewport;
          if (!Nd) return;
          const Wd = Math.floor(Nd.x * kd),
            Pd = Math.floor((1 - Nd.y - Nd.height) * pd),
            Zd = Math.ceil((Nd.x + Nd.width) * kd) - Wd,
            gd = Math.ceil((1 - Nd.y) * pd) - Pd;
          dd.setViewport(Wd, Pd, Zd, gd, 0, 1), dd.setScissorRect(Wd, Pd, Zd, gd)
        }(Jd, pd.cam ?? Pd.camera, Wd._width, Wd._height), Jd.setBindGroup(0, Cd), dd._lastVis !== Nd.c || !gd.length) {
        const Jd = Wd._descriptor,
          pd = kd._device.createRenderBundleEncoder({
            colorFormats: Jd.format ? [Jd.format] : [],
            depthStencilFormat: dd._targetSignature._depthStencilFormat,
            sampleCount: Jd.samples
          });
        pd.setBindGroup(0, Cd), Xd(pd, Zd, kd), gd[0] = pd.finish(), dd._lastVis = Nd.c
      }
      let Kd = Zd.length;
      return Jd.executeBundles(gd), Jd.setBindGroup(0, Cd), Kd += Xd(Jd, dd._directBindings, kd), Kd += Xd(Jd, dd._transparentBindings, kd), Kd
    }

    function Sd(dd, Jd) {
      let kd = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const pd = qd(Jd, dd.BO)._buffer;
      if (pd === dd._lightsUBO) return;
      const Nd = Jd._device.createBindGroup({
        layout: Od(Jd),
        entries: [{
          binding: 0,
          resource: {
            buffer: dd._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: pd
          }
        }]
      });
      dd._lightsUBO = pd, dd._sceneBG = Nd, kd && (dd._ob = [])
    }

    function jd(dd, Jd) {
      for (const kd of dd) kd.update?.(Jd)
    }

    function Xd(dd, Jd, kd) {
      let pd = null,
        Nd = 0;
      for (const Wd of Jd) {
        const Jd = Wd.renderable.mesh;
        Jd && !1 === Jd.visible || (Wd.pipeline !== pd && (dd.setPipeline(Wd.pipeline), pd = Wd.pipeline), Nd += Wd.draw(dd, kd))
      }
      return Nd
    }

    function fd(dd) {
      const Jd = dd._materialSwapQueue;
      if (!Jd[0] || dd._runtimeBuilds?.w) return;
      let pd, Nd, Wd;
      const Pd = dd._renderables;
      for (const kd of Jd) {
        const Jd = kd.material;
        if (!Jd) continue;
        const Zd = kd._runtimeThinBuild;
        if (Zd) {
          Nd = Zd(dd, kd, Nd);
          continue
        }
        const gd = dd._groups.get(Jd._buildGroup),
          Cd = gd?.r;
        if (!Cd) {
          (Wd ??= []).push(kd);
          continue
        }
        if (gd._w?.(kd)) {
          (Wd ??= []).push([kd, Jd]);
          continue
        }
        const Kd = dd._meshDisposables.get(kd);
        Kd && (dd._meshDisposables.delete(kd), (0, Qd.c)(dd.surface.engine, (() => Kd.forEach((dd => dd())))));
        const od = gd.o;
        let ld;
        for (let dd = Pd.length; dd--;) Pd[dd].mesh === kd && (ld = Pd.splice(dd, 1)[0]);
        Jd._csmGen = -~Jd._csmGen;
        const Ld = Cd(dd, kd);
        if (od) {
          const dd = od.indexOf(ld);
          dd < 0 ? od.push(Ld) : od[dd] = Ld
        }
        pd = Pd.push(Ld)
      }
      if (pd && (Pd.sort(((dd, Jd) => dd.order - Jd.order)), dd._renderableVersion++, dd._materialEpoch++), Jd.length = 0, !Wd) return Nd;
      const Zd = Wd;
      return kd.e(356).then((() => kd(60981))).then((Jd => {
        let {
          C: kd
        } = Jd;
        return kd(dd, Zd, Nd)
      }), (Jd => {
        const kd = dd._runtimeBuilds;
        kd ? kd._x(Jd) : console.error(Jd)
      }))
    }
    var nd = null;

    function Ud(dd, Jd) {
      const kd = dd.engine,
        Nd = {
          _kind: "BO",
          surface: dd,
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
            kd.useFloatingOrigin && Nd.camera && !Nd.camera._useFloatingOrigin && (Nd.camera._useFloatingOrigin = !0, Nd.camera._viewVer = -1, Nd.camera._vpVer = -1);
            const dd = Nd.fixedDeltaMs > 0 ? Nd.fixedDeltaMs : kd._currentDelta,
              Jd = kd._currentEncoder;
            let pd = 0;
            for (const kd of Nd._beforeRender) kd(dd);
            Nd._materialSwapQueue.length && fd(Nd);
            for (const Wd of Nd._prePasses) pd += Wd.execute(Jd, kd);
            for (const Wd of Nd._uniformUpdaters) Wd.update(kd);
            Nd._drawCallsPre = pd
          },
          _record: () => Nd._frameGraph.execute(),
          _resize() {
            Nd._frameGraph.build()
          }
        },
        Pd = function() {
          const dd = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Jd = 0; Jd < dd._tasks.length; Jd++) Wd(dd, dd._tasks[Jd]);
              for (const Jd of dd._tasks)
                for (const dd of Jd._passes) dd._initialize()
            },
            execute() {
              let Jd = 0;
              for (const kd of dd._tasks)
                if (!1 !== kd.executionEnabled)
                  if (kd.execute) Jd += kd.execute();
                  else
                    for (const dd of kd._passes) Jd += dd._execute();
              return Jd
            },
            dispose() {
              for (const Jd of dd._tasks) Jd.dispose();
              dd._tasks.length = 0, dd._currentProcessedTask = null
            }
          };
          return dd
        }();
      if (Nd._frameGraph = Pd, !1 !== Jd?.defaultRenderTask) {
        const Jd = dd.msaaSamples > 1,
          Wd = Jd ? (0, pd.c)({
            lbl: "scene-color",
            format: dd.format,
            dFormat: "depth24plus-stencil8",
            samples: dd.msaaSamples,
            size: dd
          }) : dd.scRT,
          Zd = Jd ? void 0 : (0, pd.c)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: dd
          });
        ! function(dd, Jd) {
          dd._tasks.push(Jd)
        }(Pd, Md({
          name: "BO",
          rt: Wd,
          rst: Jd ? dd.scRT : void 0,
          depth: Zd
        }, kd, Nd))
      }
      return Nd._disposables.push((() => Pd.dispose())), Nd
    }
    async function yd(dd) {
      const Jd = dd;
      for (Jd._built || (Jd._materialSwapQueue.length = 0); Jd._deferredBuilders.length;) {
        const dd = Jd._deferredBuilders.splice(0);
        await Promise.all(dd.map((dd => dd())))
      }
      await fd(Jd), nd?.get(Jd)?.() || (Jd._runtimeBuilds?._e(), Jd._renderableVersion++, Jd._built = !0), await (Jd._rebuildHook?.(Jd))
    }
    var Dd = null;
    async function Td(dd) {
      const Jd = dd,
        pd = Jd.surface;
      (0, Nd.e)(pd, Jd) || (await yd(dd), Jd._renderables.sort(Ed), await Promise.all(Jd._frameGraph._tasks.map((dd => dd._preload?.()))), Dd && await Dd(Jd), Jd._frameGraph.build(), pd._renderingContexts[0] && (await kd.e(354).then((() => kd(60972)))).configureSwapchainOverlayScene(pd, Jd), nd?.get(Jd)?.() || (0, Nd.f)(pd, Jd))
    }
    var Ed = (dd, Jd) => dd.order - Jd.order
  },
  41665: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      f: () => Kd
    });
    var pd = kd(41629),
      Nd = kd(41632),
      Wd = kd(41638),
      Pd = kd(41642),
      Zd = kd(41645),
      gd = kd(41650);

    function Cd(dd, Jd, kd) {
      let Zd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Jd < 1 || kd < 1) && (0, pd.e)(676, Jd, kd);
      const Cd = dd._device,
        Kd = Zd.mipMaps ?? !1,
        od = Zd.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        ld = Kd ? (0, gd.b)(Jd, kd) : 1,
        Qd = Cd.createTexture({
          size: {
            width: Jd,
            height: kd
          },
          format: od,
          mipLevelCount: ld,
          usage: Nd.h.TEXTURE_BINDING | Nd.h.COPY_DST | Nd.h.RENDER_ATTACHMENT
        }),
        Ld = {
          addressModeU: Zd.addressModeU ?? "clamp-to-edge",
          addressModeV: Zd.addressModeV ?? "clamp-to-edge",
          minFilter: Zd.minFilter ?? "linear",
          magFilter: Zd.magFilter ?? "linear",
          mipmapFilter: Kd ? "linear" : "nearest"
        },
        Od = (0, Pd.d)(dd, Ld),
        ed = {
          texture: Qd,
          view: Qd.createView(),
          sampler: Od,
          width: Jd,
          height: kd
        };
      return (0, Wd.c)(ed), dd._dlr && dd._dlr.t(ed, {
        kind: "dynamic",
        width: Jd,
        height: kd,
        format: od,
        levels: ld,
        samplerDesc: Ld,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), ed
    }

    function Kd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Nd = pd.invertY ?? !0,
        Wd = pd.premultiplyAlpha ?? !1;
      dd._device.queue.copyExternalImageToTexture({
        source: kd,
        flipY: Nd
      }, {
        texture: Jd.texture,
        premultipliedAlpha: Wd
      }, [Jd.width, Jd.height]);
      const Pd = Jd._recoverySource;
      Pd && "dynamic" === Pd.kind && (Pd.source = kd, Pd.flipY = Nd, Pd.premultipliedAlpha = Wd), Jd.texture.mipLevelCount > 1 && (0, Zd.generateMipmaps)(dd, Jd.texture)
    }
  },
  41659: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => gd
    });
    var pd = kd(41629),
      Nd = kd(41632),
      Wd = kd(41638),
      Pd = kd(41642),
      Zd = kd(41650);
    async function gd(dd, Jd) {
      let gd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Cd, Kd] = function(dd) {
        const Jd = dd,
          kd = [
            [Jd.displayWidth, Jd.displayHeight],
            [Jd.videoWidth, Jd.videoHeight],
            [Jd.naturalWidth, Jd.naturalHeight],
            [Jd.width, Jd.height]
          ];
        for (const [pd, Nd] of kd)
          if (void 0 !== pd && void 0 !== Nd && Number.isInteger(pd) && Number.isInteger(Nd) && pd > 0 && Nd > 0) return [pd, Nd];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Jd), [od, ld] = function(dd, Jd, kd) {
        if (void 0 === kd) return [dd, Jd];
        if (!Number.isInteger(kd) || kd < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${kd})`);
        if (Math.max(dd, Jd) <= kd) return [dd, Jd];
        const pd = kd / Math.max(dd, Jd);
        return dd >= Jd ? [kd, Math.max(1, Math.round(Jd * pd))] : [Math.max(1, Math.round(dd * pd)), kd]
      }(Cd, Kd, gd.maxDimension), Qd = gd.mipMaps ?? !0, Ld = gd.premultiplyAlpha ?? !1;
      let Od = Jd,
        ed = null;
      const Rd = {
        texture: null
      };
      try {
        od === Cd && ld === Kd || (ed = await createImageBitmap(Jd, {
          resizeWidth: od,
          resizeHeight: ld,
          resizeQuality: "high",
          premultiplyAlpha: Ld ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Od = ed);
        const Id = dd._device,
          Gd = gd.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          vd = Qd ? (0, Zd.b)(od, ld) : 1,
          xd = vd > 1 ? (await Promise.resolve().then((() => kd(41645)))).generateMipmaps : null,
          qd = {
            addressModeU: gd.addressModeU ?? "repeat",
            addressModeV: gd.addressModeV ?? "repeat",
            minFilter: gd.minFilter ?? "linear",
            magFilter: gd.magFilter ?? "linear",
            mipmapFilter: Qd ? "linear" : "nearest"
          };
        qd.maxAnisotropy = "linear" === qd.minFilter && "linear" === qd.magFilter && "linear" === qd.mipmapFilter ? 4 : 1;
        const Bd = gd.invertY ?? !0,
          sd = async Jd => {
            let kd;
            Id.pushErrorScope("validation"), Id.pushErrorScope("out-of-memory");
            let Wd = null;
            try {
              const kd = Rd.texture = Id.createTexture({
                size: {
                  width: od,
                  height: ld
                },
                format: Gd,
                mipLevelCount: vd,
                usage: Nd.h.TEXTURE_BINDING | Nd.h.COPY_DST | Nd.h.RENDER_ATTACHMENT
              });
              Id.queue.copyExternalImageToTexture({
                source: Jd,
                flipY: Bd
              }, {
                texture: kd,
                premultipliedAlpha: Ld
              }, {
                width: od,
                height: ld
              }), xd && xd(dd, kd), Wd = (0, Pd.d)(dd, qd)
            } catch (Qd) {
              kd = Qd
            }
            const [Zd, gd] = await Promise.all([Id.popErrorScope(), Id.popErrorScope()]);
            if (kd) throw kd;
            const Cd = gd ?? Zd;
            if (Cd) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Cd.message}`, {
              cause: Cd
            });
            const Kd = Rd.texture;
            return Kd && Wd || (0, pd.e)(677), {
              texture: Kd,
              view: Kd.createView(),
              sampler: Wd,
              width: od,
              height: ld
            }
          }, ad = await (dd._dlr?.x(Od, od, ld, Gd, vd, qd, Bd, Ld, sd)) ?? await sd(Od);
        return (0, Wd.c)(ad), ad
      } catch (Id) {
        throw Rd.texture?.destroy(), Id
      } finally {
        ed?.close()
      }
    }
  },
  41645: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      generateMipmaps: () => Qd,
      recordMipmaps: () => Ld
    });
    var pd = kd(41632),
      Nd = kd(41642),
      Wd = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Pd = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Zd = null,
      gd = null,
      Cd = null,
      Kd = null,
      od = null;

    function ld(dd) {
      const Jd = dd._device;
      Jd !== od && (Zd?.clear(), Zd = null, gd = null, Cd = null, Kd = null, od = null, od = Jd), gd ??= Jd.createShaderModule({
        code: Pd
      }), Cd ??= function(dd) {
        return (0, Nd.d)(dd, Wd)
      }(dd), Kd ??= Jd.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: pd.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: pd.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Qd(dd, Jd, kd) {
      const pd = dd._device,
        Nd = pd.createCommandEncoder();
      Ld(dd, Jd, Nd, kd), pd.queue.submit([Nd.finish()])
    }

    function Ld(dd, Jd, kd, pd) {
      if (Jd.mipLevelCount <= 1) return;
      const Nd = dd._device,
        Wd = function(dd, Jd) {
          const kd = dd._device;
          ld(dd), Zd ??= new Map;
          let pd = Zd.get(Jd);
          return pd || (pd = kd.createRenderPipeline({
            layout: kd.createPipelineLayout({
              bindGroupLayouts: [Kd]
            }),
            vertex: {
              module: gd,
              entryPoint: "vs"
            },
            fragment: {
              module: gd,
              entryPoint: "fs",
              targets: [{
                format: Jd
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Zd.set(Jd, pd)), pd
        }(dd, Jd.format),
        Pd = null != pd ? {
          dimension: "2d",
          baseArrayLayer: pd,
          arrayLayerCount: 1
        } : {};
      for (let Zd = 1; Zd < Jd.mipLevelCount; Zd++) {
        const dd = Jd.createView({
            baseMipLevel: Zd - 1,
            mipLevelCount: 1,
            ...Pd
          }),
          pd = Jd.createView({
            baseMipLevel: Zd,
            mipLevelCount: 1,
            ...Pd
          }),
          gd = Nd.createBindGroup({
            layout: Kd,
            entries: [{
              binding: 0,
              resource: dd
            }, {
              binding: 1,
              resource: Cd
            }]
          }),
          od = kd.beginRenderPass({
            colorAttachments: [{
              view: pd,
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
        od.setPipeline(Wd), od.setBindGroup(0, gd), od.draw(3), od.end()
      }
    }
  },
  41650: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      return Math.floor(Math.log2(Math.max(dd, Jd))) + 1
    }
    kd.d(Jd, {
      b: () => pd
    })
  },
  41623: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Cd,
      d: () => Kd
    });
    var pd = kd(41629),
      Nd = kd(41632),
      Wd = kd(41638),
      Pd = kd(41642),
      Zd = kd(41645),
      gd = kd(41650);

    function Cd(dd, Jd, kd, Zd) {
      let Cd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Jd < 1 || kd < 1 || Zd < 1) && (0, pd.e)(722, Jd, kd, Zd);
      const Kd = dd._device,
        od = Cd.mipMaps ?? !0,
        ld = Cd.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Qd = Kd.createTexture({
          size: {
            width: Jd,
            height: kd,
            depthOrArrayLayers: Zd
          },
          dimension: "2d",
          format: ld,
          mipLevelCount: od ? (0, gd.b)(Jd, kd) : 1,
          usage: Nd.h.TEXTURE_BINDING | Nd.h.COPY_DST | Nd.h.RENDER_ATTACHMENT
        }),
        Ld = (0, Pd.d)(dd, {
          addressModeU: Cd.addressModeU ?? "repeat",
          addressModeV: Cd.addressModeV ?? "repeat",
          minFilter: Cd.minFilter ?? "linear",
          magFilter: Cd.magFilter ?? "linear",
          mipmapFilter: od ? "linear" : "nearest"
        }),
        Od = {
          texture: Qd,
          view: Qd.createView({
            dimension: "2d-array"
          }),
          sampler: Ld,
          width: Jd,
          height: kd,
          layers: Zd
        };
      return (0, Wd.c)(Od), Od
    }

    function Kd(dd, Jd, kd, Nd) {
      let Wd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (kd < 0 || kd >= Jd.layers || (0 | kd) !== kd) && (0, pd.e)(723, Jd.layers, kd);
      const Pd = Wd.invertY ?? !0,
        gd = Wd.premultiplyAlpha ?? !1;
      dd._device.queue.copyExternalImageToTexture({
        source: Nd,
        flipY: Pd
      }, {
        texture: Jd.texture,
        origin: [0, 0, kd],
        premultipliedAlpha: gd
      }, [Jd.width, Jd.height, 1]), Jd.texture.mipLevelCount > 1 && (0, Zd.generateMipmaps)(dd, Jd.texture, kd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);