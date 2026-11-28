export const id = 623;
export const ids = [623];
export const modules = {
  54134: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(54121),
      Fd = md(54139);

    function Rd(dd) {
      (0, Fd.c)(dd), (0, Wd.n)(dd);
      const Od = dd._surfaces;
      for (const md of Od) md._renderingContexts.length = 0, md._ro?.disconnect(), md._context.unconfigure();
      Od.length = 0;
      try {
        dd._disposeManagedResources?.(), dd._disposeStorageBuffers?.()
      } finally {
        dd._device.destroy()
      }
    }
  },
  54121: (dd, Od, md) => {
    md.d(Od, {
      d: () => od,
      e: () => bd,
      f: () => Nd,
      i: () => qd,
      j: () => Yd,
      l: () => Td,
      n: () => pd
    });
    var Wd = md(54065);
    var Fd = "Babylon Lite v1.32.0",
      Rd = md(54125);

    function Xd(dd) {
      return "clientWidth" in dd
    }
    var Kd = 1;

    function hd(dd, Od, md) {
      const hd = Od.getContext("webgpu");
      hd || (0, Wd.d)(54), Xd(Od) && Od.setAttribute("data-engine", Fd);
      const vd = md?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Qd = md?.srgb ? (td = vd).endsWith("-srgb") ? td : `${td}-srgb` : vd;
      var td;
      const od = md?.alphaMode ?? "opaque";
      hd.configure({
        device: dd._device,
        format: vd,
        alphaMode: od,
        viewFormats: [Qd]
      });
      const Nd = 1 === md?.msaaSamples ? 1 : 4,
        qd = (0, Rd.b)({
          lbl: "swapchain",
          format: Qd,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return qd._eager = !0, {
        engine: dd,
        canvas: Od,
        format: Qd,
        msaaSamples: Nd,
        scRT: qd,
        maxDevicePixelRatio: md?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Kd++,
        _context: hd,
        _configureFormat: vd,
        _alphaMode: od,
        _renderingContexts: []
      }
    }

    function vd(dd) {
      const Od = dd._context.getCurrentTexture(),
        md = dd.scRT;
      md._colorTexture = Od, md._colorView = Od.createView({
        format: dd.format
      }), md._width = Od.width, md._height = Od.height
    }

    function Qd(dd) {
      const Od = dd.canvas;
      if (!Xd(Od)) return;
      const md = dd._w ?? Od.clientWidth,
        Wd = dd._h ?? Od.clientHeight;
      if (!(md > 0 && Wd > 0)) return;
      const Fd = Math.min(globalThis.devicePixelRatio || 1, dd.maxDevicePixelRatio);
      td(dd, md * Fd | 0, Wd * Fd | 0)
    }

    function td(dd, Od, md) {
      const Wd = dd.canvas,
        Fd = 0 | Od,
        Rd = 0 | md;
      if (Fd > 0 && Rd > 0 && (Fd !== Wd.width || Rd !== Wd.height)) {
        Wd.width = Fd, Wd.height = Rd, dd.scRT._width = Fd, dd.scRT._height = Rd;
        for (const Od of dd._renderingContexts) Od._resize?.()
      }
    }
    var od = 0;

    function Nd(dd, Od) {
      return -1 !== dd._renderingContexts.indexOf(Od)
    }

    function qd(dd, Od) {
      return -1 === dd._renderingContexts.indexOf(Od) && (dd._renderingContexts.push(Od), !0)
    }
    var Hd = null;
    var yd = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function bd(dd, Od) {
      const Rd = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Hd ? Hd() : {}
      });
      Rd || (0, Wd.d)(47);
      const Xd = Hd?.deviceFeatures?.(Rd, Od) ?? function(dd) {
          return yd.filter((Od => dd.features.has(Od)))
        }(Rd),
        Kd = await Rd.requestDevice({
          requiredFeatures: Xd,
          requiredLimits: Od?.requiredLimits
        });
      console.log(`${Fd} - WebGPU engine`);
      const td = !!Od?.useHighPrecisionMatrix,
        od = !!Od?.useFloatingOrigin;
      if (od && !td && (0, Wd.d)(48), td) {
        const {
          allocateF64Mat4: dd
        } = await md.e(675).then((() => md(64850)));
        0
      }
      let Nd, qd, bd, Td;
      if (od) {
        const [{
          wrapRenderableForFO: dd,
          lightFoVersion: Od,
          applyLightFoOffset: Wd
        }, {
          makePackMeshWorld: Fd
        }] = await Promise.all([md.e(676).then((() => md(64854))), md.e(677).then((() => md(64860)))]);
        Nd = dd, qd = Fd, bd = Od, Td = Wd
      }
      const pd = {
          _device: Kd
        },
        Yd = [pd];
      return Object.assign(pd, {
        engine: pd,
        surfaces: Yd,
        _surfaces: Yd,
        _device: Kd,
        _options: Od,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: td,
        useFloatingOrigin: od,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Nd,
        _makePackMeshWorld: qd,
        _lightFoVersion: bd,
        _applyLightFoOffset: Td
      }, hd(pd, dd, Od)), Qd(pd), vd(pd), pd
    }

    function Td(dd, Od, md) {
      td(dd, Od, md)
    }

    function pd(dd) {
      dd._animFrameId && cancelAnimationFrame(dd._animFrameId), dd._animFrameId = 0, dd._renderFn = null, dd._flushGpuRetirements?.(dd)
    }

    function Yd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd.surfaces;
      if (md !== dd.surfaces)
        for (let Fd = md.length; Fd--;) md[Fd].engine !== dd && (0, Wd.d)(49);
      gd(dd, Od, md)
    }

    function gd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dd._surfaces,
        Wd = 0;
      for (let Rd = md.length; Rd--;) Wd += md[Rd]._renderingContexts.length;
      if (!Wd) return dd.drawCallCount = 0, dd._flushGpuRetirements?.(dd);
      const Fd = dd._device.createCommandEncoder({
        label: "frame"
      });
      dd._currentEncoder = Fd, dd._currentDelta = Od;
      try {
        dd._gpuTimerBegin?.(Fd), Wd = 0;
        for (let dd = 0; dd < md.length; dd++) {
          const Od = md[dd];
          Od._capturePreFrame?.(Od), vd(Od);
          const Fd = Od._renderingContexts;
          for (let dd = 0; dd < Fd.length; dd++) {
            const Od = Fd[dd];
            Od._update(), Wd += Od._drawCallsPre + Od._record()
          }
        }
        const Od = dd._currentEncoder;
        for (let dd = 0; dd < md.length; dd++) {
          const Wd = md[dd];
          Wd._captureService?.(Wd, Od)
        }
        dd._gpuTimerEnd?.(Od), dd._cbs[0] = Od.finish(), dd._device.queue.submit(dd._cbs), dd._flushGpuRetirements?.(dd), dd.drawCallCount = Wd, dd._gpuTimerResolve?.()
      } finally {
        dd._currentEncoder = void 0
      }
    }
  },
  54071: (dd, Od, md) => {
    md.d(Od, {
      b: () => Fd,
      e: () => Rd,
      h: () => Wd
    });
    var Wd = globalThis.GPUTextureUsage,
      Fd = globalThis.GPUBufferUsage,
      Rd = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  54139: (dd, Od, md) => {
    function Wd(dd) {
      Fd(dd.splice(0))
    }

    function Fd(dd) {
      for (const md of dd) try {
        md()
      } catch (Od) {
        console.error("GPU resource retirement failed.", Od)
      }
    }

    function Rd(dd, Od) {
      dd._flushGpuRetirements ??= Xd, (dd._retirements ??= []).push(Od)
    }

    function Xd(dd) {
      const Od = dd._retirements;
      if (!Od) return;
      dd._retirements = null;
      const md = dd._retiring ??= new Set;
      md.add(Od), queueMicrotask((() => {
        dd._device.queue.onSubmittedWorkDone().then((() => {
          md.delete(Od), Wd(Od)
        })).catch((() => {}))
      }))
    }

    function Kd(dd) {
      const Od = dd._retirements,
        md = dd._retiring;
      dd._retirements = null, dd._retiring = null, Od && Wd(Od), md?.forEach(Wd)
    }
    md.d(Od, {
      c: () => Kd,
      d: () => Rd
    })
  },
  54125: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Xd,
      f: () => Kd
    });
    var Wd = md(54071);

    function Fd(dd) {
      const Od = dd.size;
      return "canvas" in Od ? Od.canvas : Od
    }

    function Rd(dd) {
      return {
        _descriptor: dd,
        _resolveSize: Fd,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Xd(dd, Od) {
      if (dd._eager) return void dd._syncEager?.(Od);
      Kd(dd);
      const md = dd._descriptor,
        {
          width: Rd,
          height: Xd
        } = (dd._resolveSize ?? Fd)(md);
      dd._width = Rd, dd._height = Xd;
      const hd = Od._device;
      md.format && (dd._colorTexture = hd.createTexture({
        label: md.lbl,
        size: {
          width: Rd,
          height: Xd
        },
        format: md.format,
        sampleCount: md.samples,
        usage: Wd.h.RENDER_ATTACHMENT | Wd.h.TEXTURE_BINDING | Wd.h.COPY_SRC | Wd.h.COPY_DST
      }), dd._colorView = dd._colorTexture.createView()), md.dFormat && (dd._depthTexture = hd.createTexture({
        label: md.lbl,
        size: {
          width: Rd,
          height: Xd
        },
        format: md.dFormat,
        sampleCount: md.samples,
        usage: Wd.h.RENDER_ATTACHMENT | Wd.h.TEXTURE_BINDING
      }), dd._depthView = dd._depthTexture.createView())
    }

    function Kd(dd) {
      if (!dd || dd._eager && !dd._disposeAttachments) return;
      const Od = dd._colorTexture,
        md = dd._depthTexture;
      if (dd._colorTexture = dd._depthTexture = null, dd._colorView = dd._depthView = null, dd._width = dd._height = 0, dd._disposeAttachments) dd._disposeAttachments(Od, md);
      else try {
        Od?.destroy()
      } finally {
        !1 !== dd._ownsDepthTexture && md?.destroy()
      }
    }
  },
  54149: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd,
      f: () => Fd,
      j: () => Rd
    });
    var Wd = Float32Array,
      Fd = Float64Array,
      Rd = Uint32Array
  },
  54151: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd
    });
    var Wd = 16
  },
  54065: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = null;

    function Fd(dd) {
      for (var Od = arguments.length, md = new Array(Od > 1 ? Od - 1 : 0), Fd = 1; Fd < Od; Fd++) md[Fd - 1] = arguments[Fd];
      const Rd = new Error(Wd?.(dd, md) ?? `#${dd}`);
      throw Rd.lite = md, Rd
    }
  },
  54100: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(54080);

    function Fd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const md = Od.compare,
        Fd = Od.lodMinClamp ?? 0,
        Rd = Od.lodMaxClamp ?? 32,
        Xd = void 0 !== md || 0 !== Fd || 32 !== Rd ? `${md??""}:${Fd}:${Rd}` : "";
      return (0, Wd.d)(dd, Od, Xd)
    }
  },
  54078: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = null;

    function Fd(dd) {
      const Od = Wd ??= new WeakMap;
      Od.set(dd, (Od.get(dd) ?? 0) + 1)
    }

    function Rd(dd) {
      Fd(dd.texture)
    }
  },
  54080: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd
    });
    var Wd = null,
      Fd = "nearest",
      Rd = "clamp-to-edge",
      Xd = {
        minFilter: Fd,
        magFilter: Fd,
        mipmapFilter: Fd,
        addressModeU: Rd,
        addressModeV: Rd,
        addressModeW: Rd,
        maxAnisotropy: 1
      };

    function Kd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Fd = dd._device,
        Rd = Wd ??= new WeakMap;
      let Kd = Rd.get(Fd);
      Kd || Rd.set(Fd, Kd = new Map);
      let hd = md;
      for (const Wd in Xd) {
        const dd = Wd;
        hd += `:${Od[dd]??Xd[dd]}`
      }
      let vd = Kd.get(hd);
      return vd || Kd.set(hd, vd = Fd.createSampler(Od)), vd
    }
  },
  54144: (dd, Od, md) => {
    md.d(Od, {
      d: () => Ld,
      e: () => cd
    });
    var Wd = md(54125),
      Fd = md(54121);

    function Rd(dd, Od) {
      Od._passes.length = 0, dd._currentProcessedTask = Od;
      try {
        Od.record()
      } finally {
        dd._currentProcessedTask = null
      }
    }
    var Xd = md(54149);

    function Kd(dd) {
      const Od = dd.worldMatrixVersion;
      if (dd._viewVer === Od) return dd._viewCache;
      const md = dd._viewCache,
        Wd = dd.worldMatrix,
        Fd = dd._useFloatingOrigin,
        Rd = Fd ? 0 : Wd[12],
        Xd = Fd ? 0 : Wd[13],
        Kd = Fd ? 0 : Wd[14];
      return md[0] = Wd[0], md[1] = Wd[4], md[2] = Wd[8], md[3] = 0, md[4] = Wd[1], md[5] = Wd[5], md[6] = Wd[9], md[7] = 0, md[8] = Wd[2], md[9] = Wd[6], md[10] = Wd[10], md[11] = 0, md[12] = -(Wd[0] * Rd + Wd[1] * Xd + Wd[2] * Kd), md[13] = -(Wd[4] * Rd + Wd[5] * Xd + Wd[6] * Kd), md[14] = -(Wd[8] * Rd + Wd[9] * Xd + Wd[10] * Kd), md[15] = 1, dd._viewVer = Od, md
    }
    var hd = null;

    function vd(dd) {
      return dd._projFov === dd.fov && dd._projNear === dd.nearPlane && dd._projFar === dd.farPlane || (dd._projFov = dd.fov, dd._projNear = dd.nearPlane, dd._projFar = dd.farPlane, dd._projRev = (dd._projRev ?? 0) + 1), dd.worldMatrixVersion + (dd._projRev ?? 0)
    }

    function Qd(dd, Od) {
      const md = vd(dd);
      if (dd._projVer === md && dd._projAspect === Od) return dd._projCache;
      const Wd = dd._projCache;
      return null !== hd && dd.ortho ? hd(dd, Od, Wd) : function(dd, Od, md, Wd, Fd) {
        const Rd = 1 / Math.tan(.5 * Od),
          Xd = Fd - Wd;
        dd[0] = Rd / md, dd[5] = Rd, dd[10] = -Wd / Xd, dd[11] = 1, dd[14] = Fd * Wd / Xd
      }(Wd, dd.fov, Od, dd.nearPlane, dd.farPlane), dd._projVer = md, dd._projAspect = Od, Wd
    }
    var td = md(54071);

    function od(dd, Od, md) {
      return dd._device.createBuffer({
        label: md,
        size: (Wd = Od, Fd = 16, Math.ceil(Wd / Fd) * Fd),
        usage: td.b.UNIFORM | td.b.COPY_DST
      });
      var Wd, Fd
    }
    var Nd = md(54139),
      qd = null;

    function Hd(dd) {
      const Od = dd._device,
        md = qd ??= new WeakMap;
      let Wd = md.get(Od);
      return Wd || (Wd = Od.createBindGroupLayout({
        label: "MH",
        entries: [{
          binding: 0,
          visibility: td.e.VERTEX | td.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: td.e.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), md.set(Od, Wd)), Wd
    }

    function yd(dd, Od, md) {
      const Wd = dd._device,
        Fd = od(dd, Od.byteLength, md);
      try {
        Wd.queue.writeBuffer(Fd, 0, Od.buffer, Od.byteOffset, Od.byteLength)
      } catch (Rd) {
        throw Fd.destroy(), Rd
      }
      return Fd
    }
    var bd = md(54151),
      Td = new Xd.j(1),
      pd = new Xd.c(Td.buffer);

    function Yd(dd) {
      let Od = 0;
      for (const md of dd) Od += md._lightVersion ?? 0;
      return Od
    }

    function gd(dd, Od) {
      dd.fill(0);
      let md = 0;
      for (const Wd of Od) {
        if (md >= bd.d) break;
        Wd._writeLightUbo && (Wd._writeLightUbo(dd, 4 + 16 * md), md++)
      }
      Td[0] = md, dd[0] = pd[0]
    }

    function wd(dd, Od) {
      let md = Od._lightGpuState;
      const Wd = 16 + 16 * bd.d * 4;
      if (md && md._byteSize === Wd) return md;
      const Fd = !md;
      md?._buffer.destroy();
      const Rd = new Xd.c(Wd / 4);
      return gd(Rd, Od.lights), dd._applyLightFoOffset?.(Rd, Od), md = {
        _buffer: yd(dd, Rd),
        _scratch: Rd,
        JI: Yd(Od.lights) + (dd._lightFoVersion?.(Od) ?? 0),
        _listVersion: Od._lightListVersion ?? 0,
        _lightCount: Od.lights.length,
        _byteSize: Wd
      }, Od._lightGpuState = md, Fd && Od._disposables.push((() => {
        Od._lightGpuState?._buffer.destroy(), Od._lightGpuState = void 0
      })), md
    }

    function Ed(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Fd = Od;
      if (0 === Wd && 16 === Fd.length) return void dd.set(Fd, md);
      const Rd = Wd,
        Xd = md;
      dd[Xd + 0] = Fd[Rd + 0], dd[Xd + 1] = Fd[Rd + 1], dd[Xd + 2] = Fd[Rd + 2], dd[Xd + 3] = Fd[Rd + 3], dd[Xd + 4] = Fd[Rd + 4], dd[Xd + 5] = Fd[Rd + 5], dd[Xd + 6] = Fd[Rd + 6], dd[Xd + 7] = Fd[Rd + 7], dd[Xd + 8] = Fd[Rd + 8], dd[Xd + 9] = Fd[Rd + 9], dd[Xd + 10] = Fd[Rd + 10], dd[Xd + 11] = Fd[Rd + 11], dd[Xd + 12] = Fd[Rd + 12], dd[Xd + 13] = Fd[Rd + 13], dd[Xd + 14] = Fd[Rd + 14], dd[Xd + 15] = Fd[Rd + 15]
    }

    function Jd(dd, Od, md, Wd, Fd) {
      dd.fill(0);
      const Rd = function(dd, Od) {
          const md = vd(dd);
          if (dd._vpVer === md && dd._vpAspect === Od) return dd._vpCache;
          const Wd = dd._vpCache;
          return function(dd, Od, md, Wd, Fd, Rd) {
            const Xd = md[Wd],
              Kd = md[Wd + 1],
              hd = md[Wd + 2],
              vd = md[Wd + 3],
              Qd = md[Wd + 4],
              td = md[Wd + 5],
              od = md[Wd + 6],
              Nd = md[Wd + 7],
              qd = md[Wd + 8],
              Hd = md[Wd + 9],
              yd = md[Wd + 10],
              bd = md[Wd + 11],
              Td = md[Wd + 12],
              pd = md[Wd + 13],
              Yd = md[Wd + 14],
              gd = md[Wd + 15];
            let wd = Fd[Rd],
              Ed = Fd[Rd + 1],
              Jd = Fd[Rd + 2],
              Ud = Fd[Rd + 3];
            dd[Od] = Xd * wd + Qd * Ed + qd * Jd + Td * Ud, dd[Od + 1] = Kd * wd + td * Ed + Hd * Jd + pd * Ud, dd[Od + 2] = hd * wd + od * Ed + yd * Jd + Yd * Ud, dd[Od + 3] = vd * wd + Nd * Ed + bd * Jd + gd * Ud, wd = Fd[Rd + 4], Ed = Fd[Rd + 5], Jd = Fd[Rd + 6], Ud = Fd[Rd + 7], dd[Od + 4] = Xd * wd + Qd * Ed + qd * Jd + Td * Ud, dd[Od + 5] = Kd * wd + td * Ed + Hd * Jd + pd * Ud, dd[Od + 6] = hd * wd + od * Ed + yd * Jd + Yd * Ud, dd[Od + 7] = vd * wd + Nd * Ed + bd * Jd + gd * Ud, wd = Fd[Rd + 8], Ed = Fd[Rd + 9], Jd = Fd[Rd + 10], Ud = Fd[Rd + 11], dd[Od + 8] = Xd * wd + Qd * Ed + qd * Jd + Td * Ud, dd[Od + 9] = Kd * wd + td * Ed + Hd * Jd + pd * Ud, dd[Od + 10] = hd * wd + od * Ed + yd * Jd + Yd * Ud, dd[Od + 11] = vd * wd + Nd * Ed + bd * Jd + gd * Ud, wd = Fd[Rd + 12], Ed = Fd[Rd + 13], Jd = Fd[Rd + 14], Ud = Fd[Rd + 15], dd[Od + 12] = Xd * wd + Qd * Ed + qd * Jd + Td * Ud, dd[Od + 13] = Kd * wd + td * Ed + Hd * Jd + pd * Ud, dd[Od + 14] = hd * wd + od * Ed + yd * Jd + Yd * Ud, dd[Od + 15] = vd * wd + Nd * Ed + bd * Jd + gd * Ud
          }(Wd, 0, Qd(dd, Od), 0, Kd(dd), 0), dd._vpVer = md, dd._vpAspect = Od, Wd
        }(Wd, Fd),
        Xd = Kd(Wd),
        hd = Wd.worldMatrix;
      Ed(dd, Rd, 0), Ed(dd, Xd, 16), Od.useFloatingOrigin ? (dd[32] = 0, dd[33] = 0, dd[34] = 0) : (dd[32] = hd[12], dd[33] = hd[13], dd[34] = hd[14]), dd[87] = Od.canvas.width;
      const td = md.imageProcessing;
      dd[76] = td.exposure, dd[77] = td.contrast, dd[78] = md._envTextures?.lodGenerationScale ?? .8, dd[79] = +td.toneMappingEnabled, dd[37] = Od.canvas.height
    }

    function Ud(dd, Od) {
      return {
        _renderables: dd,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Od
      }
    }

    function xd(dd, Od, md) {
      dd.clr ??= !0;
      const Fd = dd.rt._descriptor,
        Rd = dd.depth?._descriptor,
        hd = {
          _colorFormat: Fd.format,
          _depthStencilFormat: Rd?.dFormat ?? Fd.dFormat,
          _depthCompare: Fd.depthCompare ?? Rd?.depthCompare,
          _sampleCount: Fd.samples
        },
        Qd = {
          loadOp: "clear",
          storeOp: "store"
        },
        td = {
          ...Ud([], -1),
          name: dd.name,
          _config: dd,
          _ownsTargets: !dd.sharedRt,
          engine: Od,
          MH: md,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Qd]
          },
          _colorAttachment: Qd,
          _sceneUBO: od(Od, 368),
          _suData: new Xd.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: hd,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (td._disposed) throw new Error("RenderTask has been disposed.");
            td._recordExplicit ? td._recordExplicit(td, !0) : sd(td, !1 !== dd.autoMirror ? md._renderables.slice() : td._renderables, !0)
          },
          execute: () => function(dd, Od, md) {
            if (!1 === dd.enabled) return 0;
            const Wd = dd.MH;
            ! function(dd, Od, md) {
              const Wd = dd.MH;
              !1 !== dd._config.autoMirror && dd._lastVersion !== Wd._renderableVersion && sd(dd, Wd._renderables.slice());
              Vd(dd, Od);
              const Fd = dd._updateContext,
                Rd = dd._config.cam ?? Wd.camera;
              md._colorFormat && (dd._config._skipClusteredLights || Wd._clusteredLightUpdater?.(Rd, Fd.targetWidth, Fd.targetHeight), function(dd, Od) {
                const md = wd(dd, Od),
                  Wd = Yd(Od.lights) + (dd._lightFoVersion?.(Od) ?? 0),
                  Fd = Od._lightListVersion ?? 0;
                Wd === md.JI && Fd === md._listVersion && Od.lights.length === md._lightCount || (md.JI = Wd, md._listVersion = Fd, md._lightCount = Od.lights.length, gd(md._scratch, Od.lights), dd._applyLightFoOffset?.(md._scratch, Od), dd._device.queue.writeBuffer(md._buffer, 0, md._scratch)), md._buffer
              }(Od, Wd));
              (function(dd, Od, md, Wd) {
                if (!Wd) return;
                const Fd = Wd.viewport,
                  Rd = dd._config.rt,
                  Xd = (dd._config.cs ? Od.canvas.width / Od.canvas.height : Rd._width / Rd._height) * (Fd ? Fd.width / Fd.height : 1),
                  Kd = md.fog,
                  hd = md.imageProcessing,
                  Qd = vd(Wd),
                  td = md._envTextures,
                  od = dd._sceneUboCacheKey;
                if (od[0] === Wd && od[1] === Kd && od[2] === Qd && od[3] === Xd && od[4] === hd.exposure && od[5] === hd.contrast && od[6] === td) return;
                od[0] = Wd, od[1] = Kd, od[2] = Qd, od[3] = Xd, od[4] = hd.exposure, od[5] = hd.contrast, od[6] = td;
                const Nd = dd._suData;
                Jd(Nd, Od, md, Wd, Xd);
                const qd = md._sceneUboContributors;
                if (qd)
                  for (const vd of qd) vd(Nd, md);
                Od._device.queue.writeBuffer(dd._sceneUBO, 0, Nd)
              })(dd, Od, Wd, Rd), Fd.f_ = Rd, dd._batchState?._reset(), Ad(dd._opaqueBindings, Fd), Ad(dd._directBindings, Fd), Ad(dd._transparentBindings, Fd), dd._batchState?._flush(Od),
                function(dd, Od) {
                  const md = dd._transparentBindings;
                  if (md.length <= 1 || !Od) return;
                  const Wd = Kd(Od);
                  for (const Fd of md) {
                    const dd = Fd.renderable._worldCenter;
                    Fd._sortDistance = dd ? dd[0] * Wd[2] + dd[1] * Wd[6] + dd[2] * Wd[10] + Wd[14] : 0
                  }
                  md.sort(Bd)
                }(dd, Rd)
            }(dd, Od, md);
            const Fd = dd._colorAttachment,
              Rd = dd._config;
            Rd.rt._colorView && (Rd.rt === Wd.surface.scRT && (Fd.view = Rd.rt._colorView), Fd.resolveTarget = Rd.rst?._colorView ?? void 0, Fd.clearValue = Rd.clrColor ?? Wd.clearColor, Fd.loadOp = Rd.clr ? "clear" : "load");
            if (dd._executeWithTransmission) return dd._executeWithTransmission(md._sampleCount);
            const Xd = Od._currentEncoder.beginRenderPass(dd._renderPassDescriptor),
              hd = ud(dd, Xd);
            return Xd.end(), hd
          }(td, Od, hd),
          dispose() {
            if (td._disposed) return;
            td._disposed = !0;
            const Od = td._pendingMeshes;
            Od && (Od.length = 0);
            for (const dd of td._renderables) td._retireRenderable?.(td.engine, dd);
            td._passes.length = td._opaqueBindings.length = td._directBindings.length = 0, td._transparentBindings.length = td._renderables.length = td._ob.length = 0, td._ownsTargets && ((0, Wd.f)(dd.rt), (0, Wd.f)(dd.rst)), dd.depth?._eager || (0, Wd.f)(dd.depth);
            const md = td._sceneUBO;
            (0, Nd.d)(td.engine, (() => md.destroy())), td._batchState?._release(td.engine), td._batchState = void 0
          }
        };
      return td
    }

    function Bd(dd, Od) {
      return Od._sortDistance - dd._sortDistance || dd.renderable.order - Od.renderable.order
    }

    function Sd(dd, Od) {
      return dd.renderable.order - Od.renderable.order
    }

    function sd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dd._renderables,
        md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Fd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Rd = arguments.length > 4 ? arguments[4] : void 0;
      const Xd = dd._config,
        Kd = Xd.rt,
        hd = dd._batchState,
        vd = Ud(Od, dd.MH._renderableVersion);
      if (md) {
        const Od = (Od, md) => {
          Od && (md || dd._ownsTargets || Od._eager) && (0, Wd.c)(Od, dd.engine)
        };
        Od(Kd), Kd._descriptor.samples > 1 && Od(Xd.rst), Od(Xd.depth, !0)
      }
      const {
        _opaqueBindings: Qd,
        _directBindings: td,
        _transparentBindings: od
      } = vd;
      try {
        for (const md of Od) {
          const Od = md.bind(dd.engine, dd._targetSignature);
          vd._batchState = dd._targetSignature._collectBatches?.(vd._batchState, Od), md.isTransparent || md._transmissive ? od.push(Od) : md._direct ? td.push(Od) : Qd.push(Od)
        }
        Qd.sort(Sd), td.sort(Sd), md && Vd(dd, dd.engine, !1)
      } catch (Nd) {
        throw vd._batchState?._release(void 0, Rd ?? [hd]), Nd
      }
      return md && (! function(dd, Od) {
        const md = dd._config,
          Wd = dd._colorAttachment;
        Wd.view = Od._colorView, dd._renderPassDescriptor.colorAttachments = Od._colorView ? [Wd] : [];
        const Fd = md.depth ?? Od,
          Rd = Fd._depthView;
        let Xd;
        if (Rd) {
          const dd = Fd._descriptor,
            Od = (md.depth ? Fd._eager : !1 === md.depthClear) ? "load" : "clear";
          Xd = {
            view: Rd,
            depthClearValue: dd.depthClearValue ?? 0,
            depthLoadOp: Od,
            depthStoreOp: "store"
          }, dd.dFormat?.includes("stencil") && (Xd.stencilClearValue = 0, Xd.stencilLoadOp = Od, Xd.stencilStoreOp = "store")
        }
        dd._renderPassDescriptor.depthStencilAttachment = Xd
      }(dd, Kd), dd._updateContext.targetWidth = Kd._width, dd._updateContext.targetHeight = Kd._height), Fd && (Object.assign(dd, vd), hd?._release(dd.engine, [vd._batchState])), vd
    }

    function ud(dd, Od) {
      const md = dd.engine,
        Wd = dd._config,
        Rd = Wd.rt,
        Xd = dd.MH,
        Kd = dd._opaqueBindings,
        hd = dd._ob,
        vd = dd._sceneBG;
      if (function(dd, Od, md, Wd) {
          const Fd = Od?.viewport;
          if (!Fd) return;
          const Rd = Math.floor(Fd.x * md),
            Xd = Math.floor((1 - Fd.y - Fd.height) * Wd),
            Kd = Math.ceil((Fd.x + Fd.width) * md) - Rd,
            hd = Math.ceil((1 - Fd.y) * Wd) - Xd;
          dd.setViewport(Rd, Xd, Kd, hd, 0, 1), dd.setScissorRect(Rd, Xd, Kd, hd)
        }(Od, Wd.cam ?? Xd.camera, Rd._width, Rd._height), Od.setBindGroup(0, vd), dd._lastVis !== Fd.d || !hd.length) {
        const Od = Rd._descriptor,
          Wd = md._device.createRenderBundleEncoder({
            colorFormats: Od.format ? [Od.format] : [],
            depthStencilFormat: dd._targetSignature._depthStencilFormat,
            sampleCount: Od.samples
          });
        Wd.setBindGroup(0, vd), rd(Wd, Kd, md), hd[0] = Wd.finish(), dd._lastVis = Fd.d
      }
      let Qd = Kd.length;
      return Od.executeBundles(hd), Od.setBindGroup(0, vd), Qd += rd(Od, dd._directBindings, md), Qd += rd(Od, dd._transparentBindings, md), Qd
    }

    function Vd(dd, Od) {
      let md = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Wd = wd(Od, dd.MH)._buffer;
      if (Wd === dd._lightsUBO) return;
      const Fd = Od._device.createBindGroup({
        layout: Hd(Od),
        entries: [{
          binding: 0,
          resource: {
            buffer: dd._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Wd
          }
        }]
      });
      dd._lightsUBO = Wd, dd._sceneBG = Fd, md && (dd._ob = [])
    }

    function Ad(dd, Od) {
      for (const md of dd) md.update?.(Od)
    }

    function rd(dd, Od, md) {
      let Wd = null,
        Fd = 0;
      for (const Rd of Od) {
        const Od = Rd.renderable.mesh;
        Od && !1 === Od.visible || (Rd.pipeline !== Wd && (dd.setPipeline(Rd.pipeline), Wd = Rd.pipeline), Fd += Rd.draw(dd, md))
      }
      return Fd
    }

    function Gd(dd) {
      const Od = dd._materialSwapQueue;
      if (!Od[0] || dd._runtimeBuilds?.w) return;
      let Wd, Fd, Rd;
      const Xd = dd._renderables;
      for (const md of Od) {
        const Od = md.material;
        if (!Od) continue;
        const Kd = md._runtimeThinBuild;
        if (Kd) {
          Fd = Kd(dd, md, Fd);
          continue
        }
        const hd = dd._groups.get(Od._buildGroup),
          vd = hd?.r;
        if (!vd) {
          (Rd ??= []).push(md);
          continue
        }
        if (hd._w?.(md)) {
          (Rd ??= []).push([md, Od]);
          continue
        }
        const Qd = dd._meshDisposables.get(md);
        Qd && (dd._meshDisposables.delete(md), (0, Nd.d)(dd.surface.engine, (() => Qd.forEach((dd => dd())))));
        const td = hd.o;
        let od;
        for (let dd = Xd.length; dd--;) Xd[dd].mesh === md && (od = Xd.splice(dd, 1)[0]);
        Od._csmGen = -~Od._csmGen;
        const qd = vd(dd, md);
        if (td) {
          const dd = td.indexOf(od);
          dd < 0 ? td.push(qd) : td[dd] = qd
        }
        Wd = Xd.push(qd)
      }
      if (Wd && (Xd.sort(((dd, Od) => dd.order - Od.order)), dd._renderableVersion++, dd._materialEpoch++), Od.length = 0, !Rd) return Fd;
      const Kd = Rd;
      return md.e(681).then((() => md(64881))).then((Od => {
        let {
          C: md
        } = Od;
        return md(dd, Kd, Fd)
      }), (Od => {
        const md = dd._runtimeBuilds;
        md ? md._x(Od) : console.error(Od)
      }))
    }
    var nd = null;

    function Ld(dd, Od) {
      const md = dd.engine,
        Fd = {
          _kind: "MH",
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
            md.useFloatingOrigin && Fd.camera && !Fd.camera._useFloatingOrigin && (Fd.camera._useFloatingOrigin = !0, Fd.camera._viewVer = -1, Fd.camera._vpVer = -1);
            const dd = Fd.fixedDeltaMs > 0 ? Fd.fixedDeltaMs : md._currentDelta,
              Od = md._currentEncoder;
            let Wd = 0;
            for (const md of Fd._beforeRender) md(dd);
            Fd._materialSwapQueue.length && Gd(Fd);
            for (const Rd of Fd._prePasses) Wd += Rd.execute(Od, md);
            for (const Rd of Fd._uniformUpdaters) Rd.update(md);
            Fd._drawCallsPre = Wd
          },
          _record: () => Fd._frameGraph.execute(),
          _resize() {
            Fd._frameGraph.build()
          }
        },
        Xd = function() {
          const dd = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Od = 0; Od < dd._tasks.length; Od++) Rd(dd, dd._tasks[Od]);
              for (const Od of dd._tasks)
                for (const dd of Od._passes) dd._initialize()
            },
            execute() {
              let Od = 0;
              for (const md of dd._tasks)
                if (!1 !== md.executionEnabled)
                  if (md.execute) Od += md.execute();
                  else
                    for (const dd of md._passes) Od += dd._execute();
              return Od
            },
            dispose() {
              for (const Od of dd._tasks) Od.dispose();
              dd._tasks.length = 0, dd._currentProcessedTask = null
            }
          };
          return dd
        }();
      if (Fd._frameGraph = Xd, !1 !== Od?.defaultRenderTask) {
        const Od = dd.msaaSamples > 1,
          Rd = Od ? (0, Wd.b)({
            lbl: "scene-color",
            format: dd.format,
            dFormat: "depth24plus-stencil8",
            samples: dd.msaaSamples,
            size: dd
          }) : dd.scRT,
          Kd = Od ? void 0 : (0, Wd.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: dd
          });
        ! function(dd, Od) {
          dd._tasks.push(Od)
        }(Xd, xd({
          name: "MH",
          rt: Rd,
          rst: Od ? dd.scRT : void 0,
          depth: Kd
        }, md, Fd))
      }
      return Fd._disposables.push((() => Xd.dispose())), Fd
    }
    async function Pd(dd) {
      const Od = dd;
      for (Od._built || (Od._materialSwapQueue.length = 0); Od._deferredBuilders.length;) {
        const dd = Od._deferredBuilders.splice(0);
        await Promise.all(dd.map((dd => dd())))
      }
      await Gd(Od), nd?.get(Od)?.() || (Od._runtimeBuilds?._e(), Od._renderableVersion++, Od._built = !0), await (Od._rebuildHook?.(Od))
    }
    var zd = null;
    async function cd(dd) {
      const Od = dd,
        Wd = Od.surface;
      (0, Fd.f)(Wd, Od) || (await Pd(dd), Od._renderables.sort(jd), await Promise.all(Od._frameGraph._tasks.map((dd => dd._preload?.()))), zd && await zd(Od), Od._frameGraph.build(), Wd._renderingContexts[0] && (await md.e(679).then((() => md(64873)))).configureSwapchainOverlayScene(Wd, Od), nd?.get(Od)?.() || (0, Fd.i)(Wd, Od))
    }
    var jd = (dd, Od) => dd.order - Od.order
  },
  54114: (dd, Od, md) => {
    md.d(Od, {
      b: () => vd,
      e: () => Qd
    });
    var Wd = md(54065),
      Fd = md(54071),
      Rd = md(54078),
      Xd = md(54080),
      Kd = md(54083),
      hd = md(54091);

    function vd(dd, Od, md) {
      let Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Od < 1 || md < 1) && (0, Wd.d)(676, Od, md);
      const vd = dd._device,
        Qd = Kd.mipMaps ?? !1,
        td = Kd.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        od = Qd ? (0, hd.b)(Od, md) : 1,
        Nd = vd.createTexture({
          size: {
            width: Od,
            height: md
          },
          format: td,
          mipLevelCount: od,
          usage: Fd.h.TEXTURE_BINDING | Fd.h.COPY_DST | Fd.h.RENDER_ATTACHMENT
        }),
        qd = {
          addressModeU: Kd.addressModeU ?? "clamp-to-edge",
          addressModeV: Kd.addressModeV ?? "clamp-to-edge",
          minFilter: Kd.minFilter ?? "linear",
          magFilter: Kd.magFilter ?? "linear",
          mipmapFilter: Qd ? "linear" : "nearest"
        },
        Hd = (0, Xd.d)(dd, qd),
        yd = {
          texture: Nd,
          view: Nd.createView(),
          sampler: Hd,
          width: Od,
          height: md
        };
      return (0, Rd.d)(yd), dd._dlr && dd._dlr.t(yd, {
        kind: "dynamic",
        width: Od,
        height: md,
        format: td,
        levels: od,
        samplerDesc: qd,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), yd
    }

    function Qd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Fd = Wd.invertY ?? !0,
        Rd = Wd.premultiplyAlpha ?? !1;
      dd._device.queue.copyExternalImageToTexture({
        source: md,
        flipY: Fd
      }, {
        texture: Od.texture,
        premultipliedAlpha: Rd
      }, [Od.width, Od.height]);
      const Xd = Od._recoverySource;
      Xd && "dynamic" === Xd.kind && (Xd.source = md, Xd.flipY = Fd, Xd.premultipliedAlpha = Rd), Od.texture.mipLevelCount > 1 && (0, Kd.generateMipmaps)(dd, Od.texture)
    }
  },
  54105: (dd, Od, md) => {
    md.d(Od, {
      b: () => hd
    });
    var Wd = md(54065),
      Fd = md(54071),
      Rd = md(54078),
      Xd = md(54080),
      Kd = md(54091);
    async function hd(dd, Od) {
      let hd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [vd, Qd] = function(dd) {
        const Od = dd,
          md = [
            [Od.displayWidth, Od.displayHeight],
            [Od.videoWidth, Od.videoHeight],
            [Od.naturalWidth, Od.naturalHeight],
            [Od.width, Od.height]
          ];
        for (const [Wd, Fd] of md)
          if (void 0 !== Wd && void 0 !== Fd && Number.isInteger(Wd) && Number.isInteger(Fd) && Wd > 0 && Fd > 0) return [Wd, Fd];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Od), [td, od] = function(dd, Od, md) {
        if (void 0 === md) return [dd, Od];
        if (!Number.isInteger(md) || md < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${md})`);
        if (Math.max(dd, Od) <= md) return [dd, Od];
        const Wd = md / Math.max(dd, Od);
        return dd >= Od ? [md, Math.max(1, Math.round(Od * Wd))] : [Math.max(1, Math.round(dd * Wd)), md]
      }(vd, Qd, hd.maxDimension), Nd = hd.mipMaps ?? !0, qd = hd.premultiplyAlpha ?? !1;
      let Hd = Od,
        yd = null;
      const bd = {
        texture: null
      };
      try {
        td === vd && od === Qd || (yd = await createImageBitmap(Od, {
          resizeWidth: td,
          resizeHeight: od,
          resizeQuality: "high",
          premultiplyAlpha: qd ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Hd = yd);
        const Td = dd._device,
          pd = hd.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Yd = Nd ? (0, Kd.b)(td, od) : 1,
          gd = Yd > 1 ? (await Promise.resolve().then((() => md(54083)))).generateMipmaps : null,
          wd = {
            addressModeU: hd.addressModeU ?? "repeat",
            addressModeV: hd.addressModeV ?? "repeat",
            minFilter: hd.minFilter ?? "linear",
            magFilter: hd.magFilter ?? "linear",
            mipmapFilter: Nd ? "linear" : "nearest"
          };
        wd.maxAnisotropy = "linear" === wd.minFilter && "linear" === wd.magFilter && "linear" === wd.mipmapFilter ? 4 : 1;
        const Ed = hd.invertY ?? !0,
          Jd = async Od => {
            let md;
            Td.pushErrorScope("validation"), Td.pushErrorScope("out-of-memory");
            let Rd = null;
            try {
              const md = bd.texture = Td.createTexture({
                size: {
                  width: td,
                  height: od
                },
                format: pd,
                mipLevelCount: Yd,
                usage: Fd.h.TEXTURE_BINDING | Fd.h.COPY_DST | Fd.h.RENDER_ATTACHMENT
              });
              Td.queue.copyExternalImageToTexture({
                source: Od,
                flipY: Ed
              }, {
                texture: md,
                premultipliedAlpha: qd
              }, {
                width: td,
                height: od
              }), gd && gd(dd, md), Rd = (0, Xd.d)(dd, wd)
            } catch (Nd) {
              md = Nd
            }
            const [Kd, hd] = await Promise.all([Td.popErrorScope(), Td.popErrorScope()]);
            if (md) throw md;
            const vd = hd ?? Kd;
            if (vd) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${vd.message}`, {
              cause: vd
            });
            const Qd = bd.texture;
            return Qd && Rd || (0, Wd.d)(677), {
              texture: Qd,
              view: Qd.createView(),
              sampler: Rd,
              width: td,
              height: od
            }
          }, Ud = await (dd._dlr?.x(Hd, td, od, pd, Yd, wd, Ed, qd, Jd)) ?? await Jd(Hd);
        return (0, Rd.d)(Ud), Ud
      } catch (Td) {
        throw bd.texture?.destroy(), Td
      } finally {
        yd?.close()
      }
    }
  },
  54083: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      generateMipmaps: () => Nd,
      recordMipmaps: () => qd
    });
    var Wd = md(54071),
      Fd = md(54080),
      Rd = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Xd = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Kd = null,
      hd = null,
      vd = null,
      Qd = null,
      td = null;

    function od(dd) {
      const Od = dd._device;
      Od !== td && (Kd?.clear(), Kd = null, hd = null, vd = null, Qd = null, td = null, td = Od), hd ??= Od.createShaderModule({
        code: Xd
      }), vd ??= function(dd) {
        return (0, Fd.d)(dd, Rd)
      }(dd), Qd ??= Od.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Wd.e.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Wd.e.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Nd(dd, Od, md) {
      const Wd = dd._device,
        Fd = Wd.createCommandEncoder();
      qd(dd, Od, Fd, md), Wd.queue.submit([Fd.finish()])
    }

    function qd(dd, Od, md, Wd) {
      if (Od.mipLevelCount <= 1) return;
      const Fd = dd._device,
        Rd = function(dd, Od) {
          const md = dd._device;
          od(dd), Kd ??= new Map;
          let Wd = Kd.get(Od);
          return Wd || (Wd = md.createRenderPipeline({
            layout: md.createPipelineLayout({
              bindGroupLayouts: [Qd]
            }),
            vertex: {
              module: hd,
              entryPoint: "vs"
            },
            fragment: {
              module: hd,
              entryPoint: "fs",
              targets: [{
                format: Od
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Kd.set(Od, Wd)), Wd
        }(dd, Od.format),
        Xd = null != Wd ? {
          dimension: "2d",
          baseArrayLayer: Wd,
          arrayLayerCount: 1
        } : {};
      for (let Kd = 1; Kd < Od.mipLevelCount; Kd++) {
        const dd = Od.createView({
            baseMipLevel: Kd - 1,
            mipLevelCount: 1,
            ...Xd
          }),
          Wd = Od.createView({
            baseMipLevel: Kd,
            mipLevelCount: 1,
            ...Xd
          }),
          hd = Fd.createBindGroup({
            layout: Qd,
            entries: [{
              binding: 0,
              resource: dd
            }, {
              binding: 1,
              resource: vd
            }]
          }),
          td = md.beginRenderPass({
            colorAttachments: [{
              view: Wd,
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
        td.setPipeline(Rd), td.setBindGroup(0, hd), td.draw(3), td.end()
      }
    }
  },
  54091: (dd, Od, md) => {
    function Wd(dd, Od) {
      return Math.floor(Math.log2(Math.max(dd, Od))) + 1
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  54063: (dd, Od, md) => {
    md.d(Od, {
      c: () => vd,
      e: () => Qd
    });
    var Wd = md(54065),
      Fd = md(54071),
      Rd = md(54078),
      Xd = md(54080),
      Kd = md(54083),
      hd = md(54091);

    function vd(dd, Od, md, Kd) {
      let vd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Od < 1 || md < 1 || Kd < 1) && (0, Wd.d)(722, Od, md, Kd);
      const Qd = dd._device,
        td = vd.mipMaps ?? !0,
        od = vd.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Nd = Qd.createTexture({
          size: {
            width: Od,
            height: md,
            depthOrArrayLayers: Kd
          },
          dimension: "2d",
          format: od,
          mipLevelCount: td ? (0, hd.b)(Od, md) : 1,
          usage: Fd.h.TEXTURE_BINDING | Fd.h.COPY_DST | Fd.h.RENDER_ATTACHMENT
        }),
        qd = (0, Xd.d)(dd, {
          addressModeU: vd.addressModeU ?? "repeat",
          addressModeV: vd.addressModeV ?? "repeat",
          minFilter: vd.minFilter ?? "linear",
          magFilter: vd.magFilter ?? "linear",
          mipmapFilter: td ? "linear" : "nearest"
        }),
        Hd = {
          texture: Nd,
          view: Nd.createView({
            dimension: "2d-array"
          }),
          sampler: qd,
          width: Od,
          height: md,
          layers: Kd
        };
      return (0, Rd.d)(Hd), Hd
    }

    function Qd(dd, Od, md, Fd) {
      let Rd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (md < 0 || md >= Od.layers || (0 | md) !== md) && (0, Wd.d)(723, Od.layers, md);
      const Xd = Rd.invertY ?? !0,
        hd = Rd.premultiplyAlpha ?? !1;
      dd._device.queue.copyExternalImageToTexture({
        source: Fd,
        flipY: Xd
      }, {
        texture: Od.texture,
        origin: [0, 0, md],
        premultipliedAlpha: hd
      }, [Od.width, Od.height, 1]), Od.texture.mipLevelCount > 1 && (0, Kd.generateMipmaps)(dd, Od.texture, md)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);