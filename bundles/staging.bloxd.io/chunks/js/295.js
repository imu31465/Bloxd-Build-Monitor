export const id = 295;
export const ids = [295];
export const modules = {
  41105: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Xb,
      i: () => eb,
      j: () => nb,
      m: () => mb,
      n: () => Nb,
      p: () => Cb
    });
    var kb = sb(41061);
    var Wb = "Babylon Lite v1.32.0",
      ab = sb(41114);

    function Tb(bb) {
      return "clientWidth" in bb
    }
    var Ub = 1;

    function Ib(bb, cb, sb) {
      const Ib = cb.getContext("webgpu");
      Ib || (0, kb.d)(54), Tb(cb) && cb.setAttribute("data-engine", Wb);
      const Hb = sb?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        fb = sb?.srgb ? (Mb = Hb).endsWith("-srgb") ? Mb : `${Mb}-srgb` : Hb;
      var Mb;
      const Xb = sb?.alphaMode ?? "opaque";
      Ib.configure({
        device: bb._device,
        format: Hb,
        alphaMode: Xb,
        viewFormats: [fb]
      });
      const nb = 1 === sb?.msaaSamples ? 1 : 4,
        mb = (0, ab.b)({
          lbl: "swapchain",
          format: fb,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return mb._eager = !0, {
        engine: bb,
        canvas: cb,
        format: fb,
        msaaSamples: nb,
        scRT: mb,
        maxDevicePixelRatio: sb?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Ub++,
        _context: Ib,
        _configureFormat: Hb,
        _alphaMode: Xb,
        _renderingContexts: []
      }
    }

    function Hb(bb) {
      const cb = bb._context.getCurrentTexture(),
        sb = bb.scRT;
      sb._colorTexture = cb, sb._colorView = cb.createView({
        format: bb.format
      }), sb._width = cb.width, sb._height = cb.height
    }

    function fb(bb) {
      const cb = bb.canvas;
      if (!Tb(cb)) return;
      const sb = bb._w ?? cb.clientWidth,
        kb = bb._h ?? cb.clientHeight;
      if (!(sb > 0 && kb > 0)) return;
      const Wb = Math.min(globalThis.devicePixelRatio || 1, bb.maxDevicePixelRatio);
      Mb(bb, sb * Wb | 0, kb * Wb | 0)
    }

    function Mb(bb, cb, sb) {
      const kb = bb.canvas,
        Wb = 0 | cb,
        ab = 0 | sb;
      if (Wb > 0 && ab > 0 && (Wb !== kb.width || ab !== kb.height)) {
        kb.width = Wb, kb.height = ab, bb.scRT._width = Wb, bb.scRT._height = ab;
        for (const cb of bb._renderingContexts) cb._resize?.()
      }
    }
    var Xb = 0;

    function nb(bb, cb) {
      return -1 !== bb._renderingContexts.indexOf(cb)
    }

    function mb(bb, cb) {
      return -1 === bb._renderingContexts.indexOf(cb) && (bb._renderingContexts.push(cb), !0)
    }
    var lb = null;
    var Qb = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function eb(bb, cb) {
      const ab = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...lb ? lb() : {}
      });
      ab || (0, kb.d)(47);
      const Tb = lb?.deviceFeatures?.(ab, cb) ?? function(bb) {
          return Qb.filter((cb => bb.features.has(cb)))
        }(ab),
        Ub = await ab.requestDevice({
          requiredFeatures: Tb,
          requiredLimits: cb?.requiredLimits
        });
      console.log(`${Wb} - WebGPU engine`);
      const Mb = !!cb?.useHighPrecisionMatrix,
        Xb = !!cb?.useFloatingOrigin;
      if (Xb && !Mb && (0, kb.d)(48), Mb) {
        const {
          allocateF64Mat4: bb
        } = await sb.e(349).then((() => sb(60657)));
        0
      }
      let nb, mb, eb, Cb;
      if (Xb) {
        const [{
          wrapRenderableForFO: bb,
          lightFoVersion: cb,
          applyLightFoOffset: kb
        }, {
          makePackMeshWorld: Wb
        }] = await Promise.all([sb.e(350).then((() => sb(60661))), sb.e(351).then((() => sb(60669)))]);
        nb = bb, mb = Wb, eb = cb, Cb = kb
      }
      const Nb = {
          _device: Ub
        },
        Vb = [Nb];
      return Object.assign(Nb, {
        engine: Nb,
        surfaces: Vb,
        _surfaces: Vb,
        _device: Ub,
        _options: cb,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Mb,
        useFloatingOrigin: Xb,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: nb,
        _makePackMeshWorld: mb,
        _lightFoVersion: eb,
        _applyLightFoOffset: Cb
      }, Ib(Nb, bb, cb)), fb(Nb), Hb(Nb), Nb
    }

    function Cb(bb, cb, sb) {
      Mb(bb, cb, sb)
    }

    function Nb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.surfaces;
      if (sb !== bb.surfaces)
        for (let Wb = sb.length; Wb--;) sb[Wb].engine !== bb && (0, kb.d)(49);
      Vb(bb, cb, sb)
    }

    function Vb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb._surfaces,
        kb = 0;
      for (let ab = sb.length; ab--;) kb += sb[ab]._renderingContexts.length;
      if (!kb) return bb.drawCallCount = 0, bb._flushGpuRetirements?.(bb);
      const Wb = bb._device.createCommandEncoder({
        label: "frame"
      });
      bb._currentEncoder = Wb, bb._currentDelta = cb;
      try {
        bb._gpuTimerBegin?.(Wb), kb = 0;
        for (let bb = 0; bb < sb.length; bb++) {
          const cb = sb[bb];
          cb._capturePreFrame?.(cb), Hb(cb);
          const Wb = cb._renderingContexts;
          for (let bb = 0; bb < Wb.length; bb++) {
            const cb = Wb[bb];
            cb._update(), kb += cb._drawCallsPre + cb._record()
          }
        }
        const cb = bb._currentEncoder;
        for (let bb = 0; bb < sb.length; bb++) {
          const kb = sb[bb];
          kb._captureService?.(kb, cb)
        }
        bb._gpuTimerEnd?.(cb), bb._cbs[0] = cb.finish(), bb._device.queue.submit(bb._cbs), bb._flushGpuRetirements?.(bb), bb.drawCallCount = kb, bb._gpuTimerResolve?.()
      } finally {
        bb._currentEncoder = void 0
      }
    }
  },
  41069: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb,
      d: () => ab,
      g: () => kb
    });
    var kb = globalThis.GPUTextureUsage,
      Wb = globalThis.GPUBufferUsage,
      ab = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41130: (bb, cb, sb) => {
    function kb(bb) {
      Wb(bb.splice(0))
    }

    function Wb(bb) {
      for (const sb of bb) try {
        sb()
      } catch (cb) {
        console.error("GPU resource retirement failed.", cb)
      }
    }

    function ab(bb, cb) {
      bb._flushGpuRetirements ??= Tb, (bb._retirements ??= []).push(cb)
    }

    function Tb(bb) {
      const cb = bb._retirements;
      if (!cb) return;
      bb._retirements = null;
      const sb = bb._retiring ??= new Set;
      sb.add(cb), queueMicrotask((() => {
        bb._device.queue.onSubmittedWorkDone().then((() => {
          sb.delete(cb), kb(cb)
        })).catch((() => {}))
      }))
    }
    sb.d(cb, {
      b: () => ab
    })
  },
  41114: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab,
      c: () => Tb,
      d: () => Ub
    });
    var kb = sb(41069);

    function Wb(bb) {
      const cb = bb.size;
      return "canvas" in cb ? cb.canvas : cb
    }

    function ab(bb) {
      return {
        _descriptor: bb,
        _resolveSize: Wb,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Tb(bb, cb) {
      if (bb._eager) return void bb._syncEager?.(cb);
      Ub(bb);
      const sb = bb._descriptor,
        {
          width: ab,
          height: Tb
        } = (bb._resolveSize ?? Wb)(sb);
      bb._width = ab, bb._height = Tb;
      const Ib = cb._device;
      sb.format && (bb._colorTexture = Ib.createTexture({
        label: sb.lbl,
        size: {
          width: ab,
          height: Tb
        },
        format: sb.format,
        sampleCount: sb.samples,
        usage: kb.g.RENDER_ATTACHMENT | kb.g.TEXTURE_BINDING | kb.g.COPY_SRC | kb.g.COPY_DST
      }), bb._colorView = bb._colorTexture.createView()), sb.dFormat && (bb._depthTexture = Ib.createTexture({
        label: sb.lbl,
        size: {
          width: ab,
          height: Tb
        },
        format: sb.dFormat,
        sampleCount: sb.samples,
        usage: kb.g.RENDER_ATTACHMENT | kb.g.TEXTURE_BINDING
      }), bb._depthView = bb._depthTexture.createView())
    }

    function Ub(bb) {
      if (!bb || bb._eager && !bb._disposeAttachments) return;
      const cb = bb._colorTexture,
        sb = bb._depthTexture;
      if (bb._colorTexture = bb._depthTexture = null, bb._colorView = bb._depthView = null, bb._width = bb._height = 0, bb._disposeAttachments) bb._disposeAttachments(cb, sb);
      else try {
        cb?.destroy()
      } finally {
        !1 !== bb._ownsDepthTexture && sb?.destroy()
      }
    }
  },
  41128: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      c: () => Wb,
      e: () => ab
    });
    var kb = Float32Array,
      Wb = Float64Array,
      ab = Uint32Array
  },
  41133: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    var kb = 16
  },
  41061: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb
    });
    var kb = null;

    function Wb(bb) {
      for (var cb = arguments.length, sb = new Array(cb > 1 ? cb - 1 : 0), Wb = 1; Wb < cb; Wb++) sb[Wb - 1] = arguments[Wb];
      const ab = new Error(kb?.(bb, sb) ?? `#${bb}`);
      throw ab.lite = sb, ab
    }
  },
  41097: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Wb
    });
    var kb = sb(41086);

    function Wb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const sb = cb.compare,
        Wb = cb.lodMinClamp ?? 0,
        ab = cb.lodMaxClamp ?? 32,
        Tb = void 0 !== sb || 0 !== Wb || 32 !== ab ? `${sb??""}:${Wb}:${ab}` : "";
      return (0, kb.b)(bb, cb, Tb)
    }
  },
  41077: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => ab
    });
    var kb = null;

    function Wb(bb) {
      const cb = kb ??= new WeakMap;
      cb.set(bb, (cb.get(bb) ?? 0) + 1)
    }

    function ab(bb) {
      Wb(bb.texture)
    }
  },
  41086: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub
    });
    var kb = null,
      Wb = "nearest",
      ab = "clamp-to-edge",
      Tb = {
        minFilter: Wb,
        magFilter: Wb,
        mipmapFilter: Wb,
        addressModeU: ab,
        addressModeV: ab,
        addressModeW: ab,
        maxAnisotropy: 1
      };

    function Ub(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Wb = bb._device,
        ab = kb ??= new WeakMap;
      let Ub = ab.get(Wb);
      Ub || ab.set(Wb, Ub = new Map);
      let Ib = sb;
      for (const kb in Tb) {
        const bb = kb;
        Ib += `:${cb[bb]??Tb[bb]}`
      }
      let Hb = Ub.get(Ib);
      return Hb || Ub.set(Ib, Hb = Wb.createSampler(cb)), Hb
    }
  },
  41121: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Kb,
      g: () => qb
    });
    var kb = sb(41114),
      Wb = sb(41105);

    function ab(bb, cb) {
      cb._passes.length = 0, bb._currentProcessedTask = cb;
      try {
        cb.record()
      } finally {
        bb._currentProcessedTask = null
      }
    }
    var Tb = sb(41128);

    function Ub(bb) {
      const cb = bb.worldMatrixVersion;
      if (bb._viewVer === cb) return bb._viewCache;
      const sb = bb._viewCache,
        kb = bb.worldMatrix,
        Wb = bb._useFloatingOrigin,
        ab = Wb ? 0 : kb[12],
        Tb = Wb ? 0 : kb[13],
        Ub = Wb ? 0 : kb[14];
      return sb[0] = kb[0], sb[1] = kb[4], sb[2] = kb[8], sb[3] = 0, sb[4] = kb[1], sb[5] = kb[5], sb[6] = kb[9], sb[7] = 0, sb[8] = kb[2], sb[9] = kb[6], sb[10] = kb[10], sb[11] = 0, sb[12] = -(kb[0] * ab + kb[1] * Tb + kb[2] * Ub), sb[13] = -(kb[4] * ab + kb[5] * Tb + kb[6] * Ub), sb[14] = -(kb[8] * ab + kb[9] * Tb + kb[10] * Ub), sb[15] = 1, bb._viewVer = cb, sb
    }
    var Ib = null;

    function Hb(bb) {
      return bb._projFov === bb.fov && bb._projNear === bb.nearPlane && bb._projFar === bb.farPlane || (bb._projFov = bb.fov, bb._projNear = bb.nearPlane, bb._projFar = bb.farPlane, bb._projRev = (bb._projRev ?? 0) + 1), bb.worldMatrixVersion + (bb._projRev ?? 0)
    }

    function fb(bb, cb) {
      const sb = Hb(bb);
      if (bb._projVer === sb && bb._projAspect === cb) return bb._projCache;
      const kb = bb._projCache;
      return null !== Ib && bb.ortho ? Ib(bb, cb, kb) : function(bb, cb, sb, kb, Wb) {
        const ab = 1 / Math.tan(.5 * cb),
          Tb = Wb - kb;
        bb[0] = ab / sb, bb[5] = ab, bb[10] = -kb / Tb, bb[11] = 1, bb[14] = Wb * kb / Tb
      }(kb, bb.fov, cb, bb.nearPlane, bb.farPlane), bb._projVer = sb, bb._projAspect = cb, kb
    }
    var Mb = sb(41069);

    function Xb(bb, cb, sb) {
      return bb._device.createBuffer({
        label: sb,
        size: (kb = cb, Wb = 16, Math.ceil(kb / Wb) * Wb),
        usage: Mb.b.UNIFORM | Mb.b.COPY_DST
      });
      var kb, Wb
    }
    var nb = sb(41130),
      mb = null;

    function lb(bb) {
      const cb = bb._device,
        sb = mb ??= new WeakMap;
      let kb = sb.get(cb);
      return kb || (kb = cb.createBindGroupLayout({
        label: "aQ",
        entries: [{
          binding: 0,
          visibility: Mb.d.VERTEX | Mb.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Mb.d.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), sb.set(cb, kb)), kb
    }

    function Qb(bb, cb, sb) {
      const kb = bb._device,
        Wb = Xb(bb, cb.byteLength, sb);
      try {
        kb.queue.writeBuffer(Wb, 0, cb.buffer, cb.byteOffset, cb.byteLength)
      } catch (ab) {
        throw Wb.destroy(), ab
      }
      return Wb
    }
    var eb = sb(41133),
      Cb = new Tb.e(1),
      Nb = new Tb.b(Cb.buffer);

    function Vb(bb) {
      let cb = 0;
      for (const sb of bb) cb += sb._lightVersion ?? 0;
      return cb
    }

    function Lb(bb, cb) {
      bb.fill(0);
      let sb = 0;
      for (const kb of cb) {
        if (sb >= eb.c) break;
        kb._writeLightUbo && (kb._writeLightUbo(bb, 4 + 16 * sb), sb++)
      }
      Cb[0] = sb, bb[0] = Nb[0]
    }

    function ub(bb, cb) {
      let sb = cb._lightGpuState;
      const kb = 16 + 16 * eb.c * 4;
      if (sb && sb._byteSize === kb) return sb;
      const Wb = !sb;
      sb?._buffer.destroy();
      const ab = new Tb.b(kb / 4);
      return Lb(ab, cb.lights), bb._applyLightFoOffset?.(ab, cb), sb = {
        _buffer: Qb(bb, ab),
        _scratch: ab,
        nD: Vb(cb.lights) + (bb._lightFoVersion?.(cb) ?? 0),
        _listVersion: cb._lightListVersion ?? 0,
        _lightCount: cb.lights.length,
        _byteSize: kb
      }, cb._lightGpuState = sb, Wb && cb._disposables.push((() => {
        cb._lightGpuState?._buffer.destroy(), cb._lightGpuState = void 0
      })), sb
    }

    function Yb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Wb = cb;
      if (0 === kb && 16 === Wb.length) return void bb.set(Wb, sb);
      const ab = kb,
        Tb = sb;
      bb[Tb + 0] = Wb[ab + 0], bb[Tb + 1] = Wb[ab + 1], bb[Tb + 2] = Wb[ab + 2], bb[Tb + 3] = Wb[ab + 3], bb[Tb + 4] = Wb[ab + 4], bb[Tb + 5] = Wb[ab + 5], bb[Tb + 6] = Wb[ab + 6], bb[Tb + 7] = Wb[ab + 7], bb[Tb + 8] = Wb[ab + 8], bb[Tb + 9] = Wb[ab + 9], bb[Tb + 10] = Wb[ab + 10], bb[Tb + 11] = Wb[ab + 11], bb[Tb + 12] = Wb[ab + 12], bb[Tb + 13] = Wb[ab + 13], bb[Tb + 14] = Wb[ab + 14], bb[Tb + 15] = Wb[ab + 15]
    }

    function hb(bb, cb, sb, kb, Wb) {
      bb.fill(0);
      const ab = function(bb, cb) {
          const sb = Hb(bb);
          if (bb._vpVer === sb && bb._vpAspect === cb) return bb._vpCache;
          const kb = bb._vpCache;
          return function(bb, cb, sb, kb, Wb, ab) {
            const Tb = sb[kb],
              Ub = sb[kb + 1],
              Ib = sb[kb + 2],
              Hb = sb[kb + 3],
              fb = sb[kb + 4],
              Mb = sb[kb + 5],
              Xb = sb[kb + 6],
              nb = sb[kb + 7],
              mb = sb[kb + 8],
              lb = sb[kb + 9],
              Qb = sb[kb + 10],
              eb = sb[kb + 11],
              Cb = sb[kb + 12],
              Nb = sb[kb + 13],
              Vb = sb[kb + 14],
              Lb = sb[kb + 15];
            let ub = Wb[ab],
              Yb = Wb[ab + 1],
              hb = Wb[ab + 2],
              Jb = Wb[ab + 3];
            bb[cb] = Tb * ub + fb * Yb + mb * hb + Cb * Jb, bb[cb + 1] = Ub * ub + Mb * Yb + lb * hb + Nb * Jb, bb[cb + 2] = Ib * ub + Xb * Yb + Qb * hb + Vb * Jb, bb[cb + 3] = Hb * ub + nb * Yb + eb * hb + Lb * Jb, ub = Wb[ab + 4], Yb = Wb[ab + 5], hb = Wb[ab + 6], Jb = Wb[ab + 7], bb[cb + 4] = Tb * ub + fb * Yb + mb * hb + Cb * Jb, bb[cb + 5] = Ub * ub + Mb * Yb + lb * hb + Nb * Jb, bb[cb + 6] = Ib * ub + Xb * Yb + Qb * hb + Vb * Jb, bb[cb + 7] = Hb * ub + nb * Yb + eb * hb + Lb * Jb, ub = Wb[ab + 8], Yb = Wb[ab + 9], hb = Wb[ab + 10], Jb = Wb[ab + 11], bb[cb + 8] = Tb * ub + fb * Yb + mb * hb + Cb * Jb, bb[cb + 9] = Ub * ub + Mb * Yb + lb * hb + Nb * Jb, bb[cb + 10] = Ib * ub + Xb * Yb + Qb * hb + Vb * Jb, bb[cb + 11] = Hb * ub + nb * Yb + eb * hb + Lb * Jb, ub = Wb[ab + 12], Yb = Wb[ab + 13], hb = Wb[ab + 14], Jb = Wb[ab + 15], bb[cb + 12] = Tb * ub + fb * Yb + mb * hb + Cb * Jb, bb[cb + 13] = Ub * ub + Mb * Yb + lb * hb + Nb * Jb, bb[cb + 14] = Ib * ub + Xb * Yb + Qb * hb + Vb * Jb, bb[cb + 15] = Hb * ub + nb * Yb + eb * hb + Lb * Jb
          }(kb, 0, fb(bb, cb), 0, Ub(bb), 0), bb._vpVer = sb, bb._vpAspect = cb, kb
        }(kb, Wb),
        Tb = Ub(kb),
        Ib = kb.worldMatrix;
      Yb(bb, ab, 0), Yb(bb, Tb, 16), cb.useFloatingOrigin ? (bb[32] = 0, bb[33] = 0, bb[34] = 0) : (bb[32] = Ib[12], bb[33] = Ib[13], bb[34] = Ib[14]), bb[87] = cb.canvas.width;
      const Mb = sb.imageProcessing;
      bb[76] = Mb.exposure, bb[77] = Mb.contrast, bb[78] = sb._envTextures?.lodGenerationScale ?? .8, bb[79] = +Mb.toneMappingEnabled, bb[37] = cb.canvas.height
    }

    function Jb(bb, cb) {
      return {
        _renderables: bb,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: cb
      }
    }

    function gb(bb, cb, sb) {
      bb.clr ??= !0;
      const Wb = bb.rt._descriptor,
        ab = bb.depth?._descriptor,
        Ib = {
          _colorFormat: Wb.format,
          _depthStencilFormat: ab?.dFormat ?? Wb.dFormat,
          _depthCompare: Wb.depthCompare ?? ab?.depthCompare,
          _sampleCount: Wb.samples
        },
        fb = {
          loadOp: "clear",
          storeOp: "store"
        },
        Mb = {
          ...Jb([], -1),
          name: bb.name,
          _config: bb,
          _ownsTargets: !bb.sharedRt,
          engine: cb,
          aQ: sb,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [fb]
          },
          _colorAttachment: fb,
          _sceneUBO: Xb(cb, 368),
          _suData: new Tb.b(92),
          _sceneUboCacheKey: [],
          _targetSignature: Ib,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Mb._disposed) throw new Error("RenderTask has been disposed.");
            Mb._recordExplicit ? Mb._recordExplicit(Mb, !0) : yb(Mb, !1 !== bb.autoMirror ? sb._renderables.slice() : Mb._renderables, !0)
          },
          execute: () => function(bb, cb, sb) {
            if (!1 === bb.enabled) return 0;
            const kb = bb.aQ;
            ! function(bb, cb, sb) {
              const kb = bb.aQ;
              !1 !== bb._config.autoMirror && bb._lastVersion !== kb._renderableVersion && yb(bb, kb._renderables.slice());
              Db(bb, cb);
              const Wb = bb._updateContext,
                ab = bb._config.cam ?? kb.camera;
              sb._colorFormat && (bb._config._skipClusteredLights || kb._clusteredLightUpdater?.(ab, Wb.targetWidth, Wb.targetHeight), function(bb, cb) {
                const sb = ub(bb, cb),
                  kb = Vb(cb.lights) + (bb._lightFoVersion?.(cb) ?? 0),
                  Wb = cb._lightListVersion ?? 0;
                kb === sb.nD && Wb === sb._listVersion && cb.lights.length === sb._lightCount || (sb.nD = kb, sb._listVersion = Wb, sb._lightCount = cb.lights.length, Lb(sb._scratch, cb.lights), bb._applyLightFoOffset?.(sb._scratch, cb), bb._device.queue.writeBuffer(sb._buffer, 0, sb._scratch)), sb._buffer
              }(cb, kb));
              (function(bb, cb, sb, kb) {
                if (!kb) return;
                const Wb = kb.viewport,
                  ab = bb._config.rt,
                  Tb = (bb._config.cs ? cb.canvas.width / cb.canvas.height : ab._width / ab._height) * (Wb ? Wb.width / Wb.height : 1),
                  Ub = sb.fog,
                  Ib = sb.imageProcessing,
                  fb = Hb(kb),
                  Mb = sb._envTextures,
                  Xb = bb._sceneUboCacheKey;
                if (Xb[0] === kb && Xb[1] === Ub && Xb[2] === fb && Xb[3] === Tb && Xb[4] === Ib.exposure && Xb[5] === Ib.contrast && Xb[6] === Mb) return;
                Xb[0] = kb, Xb[1] = Ub, Xb[2] = fb, Xb[3] = Tb, Xb[4] = Ib.exposure, Xb[5] = Ib.contrast, Xb[6] = Mb;
                const nb = bb._suData;
                hb(nb, cb, sb, kb, Tb);
                const mb = sb._sceneUboContributors;
                if (mb)
                  for (const Hb of mb) Hb(nb, sb);
                cb._device.queue.writeBuffer(bb._sceneUBO, 0, nb)
              })(bb, cb, kb, ab), Wb.Xw = ab, bb._batchState?._reset(), Eb(bb._opaqueBindings, Wb), Eb(bb._directBindings, Wb), Eb(bb._transparentBindings, Wb), bb._batchState?._flush(cb),
                function(bb, cb) {
                  const sb = bb._transparentBindings;
                  if (sb.length <= 1 || !cb) return;
                  const kb = Ub(cb);
                  for (const Wb of sb) {
                    const bb = Wb.renderable._worldCenter;
                    Wb._sortDistance = bb ? bb[0] * kb[2] + bb[1] * kb[6] + bb[2] * kb[10] + kb[14] : 0
                  }
                  sb.sort(Bb)
                }(bb, ab)
            }(bb, cb, sb);
            const Wb = bb._colorAttachment,
              ab = bb._config;
            ab.rt._colorView && (ab.rt === kb.surface.scRT && (Wb.view = ab.rt._colorView), Wb.resolveTarget = ab.rst?._colorView ?? void 0, Wb.clearValue = ab.clrColor ?? kb.clearColor, Wb.loadOp = ab.clr ? "clear" : "load");
            if (bb._executeWithTransmission) return bb._executeWithTransmission(sb._sampleCount);
            const Tb = cb._currentEncoder.beginRenderPass(bb._renderPassDescriptor),
              Ib = Pb(bb, Tb);
            return Tb.end(), Ib
          }(Mb, cb, Ib),
          dispose() {
            if (Mb._disposed) return;
            Mb._disposed = !0;
            const cb = Mb._pendingMeshes;
            cb && (cb.length = 0);
            for (const bb of Mb._renderables) Mb._retireRenderable?.(Mb.engine, bb);
            Mb._passes.length = Mb._opaqueBindings.length = Mb._directBindings.length = 0, Mb._transparentBindings.length = Mb._renderables.length = Mb._ob.length = 0, Mb._ownsTargets && ((0, kb.d)(bb.rt), (0, kb.d)(bb.rst)), bb.depth?._eager || (0, kb.d)(bb.depth);
            const sb = Mb._sceneUBO;
            (0, nb.b)(Mb.engine, (() => sb.destroy())), Mb._batchState?._release(Mb.engine), Mb._batchState = void 0
          }
        };
      return Mb
    }

    function Bb(bb, cb) {
      return cb._sortDistance - bb._sortDistance || bb.renderable.order - cb.renderable.order
    }

    function tb(bb, cb) {
      return bb.renderable.order - cb.renderable.order
    }

    function yb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb._renderables,
        sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Wb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        ab = arguments.length > 4 ? arguments[4] : void 0;
      const Tb = bb._config,
        Ub = Tb.rt,
        Ib = bb._batchState,
        Hb = Jb(cb, bb.aQ._renderableVersion);
      if (sb) {
        const cb = (cb, sb) => {
          cb && (sb || bb._ownsTargets || cb._eager) && (0, kb.c)(cb, bb.engine)
        };
        cb(Ub), Ub._descriptor.samples > 1 && cb(Tb.rst), cb(Tb.depth, !0)
      }
      const {
        _opaqueBindings: fb,
        _directBindings: Mb,
        _transparentBindings: Xb
      } = Hb;
      try {
        for (const sb of cb) {
          const cb = sb.bind(bb.engine, bb._targetSignature);
          Hb._batchState = bb._targetSignature._collectBatches?.(Hb._batchState, cb), sb.isTransparent || sb._transmissive ? Xb.push(cb) : sb._direct ? Mb.push(cb) : fb.push(cb)
        }
        fb.sort(tb), Mb.sort(tb), sb && Db(bb, bb.engine, !1)
      } catch (nb) {
        throw Hb._batchState?._release(void 0, ab ?? [Ib]), nb
      }
      return sb && (! function(bb, cb) {
        const sb = bb._config,
          kb = bb._colorAttachment;
        kb.view = cb._colorView, bb._renderPassDescriptor.colorAttachments = cb._colorView ? [kb] : [];
        const Wb = sb.depth ?? cb,
          ab = Wb._depthView;
        let Tb;
        if (ab) {
          const bb = Wb._descriptor,
            cb = (sb.depth ? Wb._eager : !1 === sb.depthClear) ? "load" : "clear";
          Tb = {
            view: ab,
            depthClearValue: bb.depthClearValue ?? 0,
            depthLoadOp: cb,
            depthStoreOp: "store"
          }, bb.dFormat?.includes("stencil") && (Tb.stencilClearValue = 0, Tb.stencilLoadOp = cb, Tb.stencilStoreOp = "store")
        }
        bb._renderPassDescriptor.depthStencilAttachment = Tb
      }(bb, Ub), bb._updateContext.targetWidth = Ub._width, bb._updateContext.targetHeight = Ub._height), Wb && (Object.assign(bb, Hb), Ib?._release(bb.engine, [Hb._batchState])), Hb
    }

    function Pb(bb, cb) {
      const sb = bb.engine,
        kb = bb._config,
        ab = kb.rt,
        Tb = bb.aQ,
        Ub = bb._opaqueBindings,
        Ib = bb._ob,
        Hb = bb._sceneBG;
      if (function(bb, cb, sb, kb) {
          const Wb = cb?.viewport;
          if (!Wb) return;
          const ab = Math.floor(Wb.x * sb),
            Tb = Math.floor((1 - Wb.y - Wb.height) * kb),
            Ub = Math.ceil((Wb.x + Wb.width) * sb) - ab,
            Ib = Math.ceil((1 - Wb.y) * kb) - Tb;
          bb.setViewport(ab, Tb, Ub, Ib, 0, 1), bb.setScissorRect(ab, Tb, Ub, Ib)
        }(cb, kb.cam ?? Tb.camera, ab._width, ab._height), cb.setBindGroup(0, Hb), bb._lastVis !== Wb.e || !Ib.length) {
        const cb = ab._descriptor,
          kb = sb._device.createRenderBundleEncoder({
            colorFormats: cb.format ? [cb.format] : [],
            depthStencilFormat: bb._targetSignature._depthStencilFormat,
            sampleCount: cb.samples
          });
        kb.setBindGroup(0, Hb), ib(kb, Ub, sb), Ib[0] = kb.finish(), bb._lastVis = Wb.e
      }
      let fb = Ub.length;
      return cb.executeBundles(Ib), cb.setBindGroup(0, Hb), fb += ib(cb, bb._directBindings, sb), fb += ib(cb, bb._transparentBindings, sb), fb
    }

    function Db(bb, cb) {
      let sb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const kb = ub(cb, bb.aQ)._buffer;
      if (kb === bb._lightsUBO) return;
      const Wb = cb._device.createBindGroup({
        layout: lb(cb),
        entries: [{
          binding: 0,
          resource: {
            buffer: bb._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: kb
          }
        }]
      });
      bb._lightsUBO = kb, bb._sceneBG = Wb, sb && (bb._ob = [])
    }

    function Eb(bb, cb) {
      for (const sb of bb) sb.update?.(cb)
    }

    function ib(bb, cb, sb) {
      let kb = null,
        Wb = 0;
      for (const ab of cb) {
        const cb = ab.renderable.mesh;
        cb && !1 === cb.visible || (ab.pipeline !== kb && (bb.setPipeline(ab.pipeline), kb = ab.pipeline), Wb += ab.draw(bb, sb))
      }
      return Wb
    }

    function Ob(bb) {
      const cb = bb._materialSwapQueue;
      if (!cb[0] || bb._runtimeBuilds?.w) return;
      let kb, Wb, ab;
      const Tb = bb._renderables;
      for (const sb of cb) {
        const cb = sb.material;
        if (!cb) continue;
        const Ub = sb._runtimeThinBuild;
        if (Ub) {
          Wb = Ub(bb, sb, Wb);
          continue
        }
        const Ib = bb._groups.get(cb._buildGroup),
          Hb = Ib?.r;
        if (!Hb) {
          (ab ??= []).push(sb);
          continue
        }
        if (Ib._w?.(sb)) {
          (ab ??= []).push([sb, cb]);
          continue
        }
        const fb = bb._meshDisposables.get(sb);
        fb && (bb._meshDisposables.delete(sb), (0, nb.b)(bb.surface.engine, (() => fb.forEach((bb => bb())))));
        const Mb = Ib.o;
        let Xb;
        for (let bb = Tb.length; bb--;) Tb[bb].mesh === sb && (Xb = Tb.splice(bb, 1)[0]);
        cb._csmGen = -~cb._csmGen;
        const mb = Hb(bb, sb);
        if (Mb) {
          const bb = Mb.indexOf(Xb);
          bb < 0 ? Mb.push(mb) : Mb[bb] = mb
        }
        kb = Tb.push(mb)
      }
      if (kb && (Tb.sort(((bb, cb) => bb.order - cb.order)), bb._renderableVersion++, bb._materialEpoch++), cb.length = 0, !ab) return Wb;
      const Ub = ab;
      return sb.e(355).then((() => sb(60691))).then((cb => {
        let {
          C: sb
        } = cb;
        return sb(bb, Ub, Wb)
      }), (cb => {
        const sb = bb._runtimeBuilds;
        sb ? sb._x(cb) : console.error(cb)
      }))
    }
    var Gb = null;

    function Kb(bb, cb) {
      const sb = bb.engine,
        Wb = {
          _kind: "aQ",
          surface: bb,
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
            sb.useFloatingOrigin && Wb.camera && !Wb.camera._useFloatingOrigin && (Wb.camera._useFloatingOrigin = !0, Wb.camera._viewVer = -1, Wb.camera._vpVer = -1);
            const bb = Wb.fixedDeltaMs > 0 ? Wb.fixedDeltaMs : sb._currentDelta,
              cb = sb._currentEncoder;
            let kb = 0;
            for (const sb of Wb._beforeRender) sb(bb);
            Wb._materialSwapQueue.length && Ob(Wb);
            for (const ab of Wb._prePasses) kb += ab.execute(cb, sb);
            for (const ab of Wb._uniformUpdaters) ab.update(sb);
            Wb._drawCallsPre = kb
          },
          _record: () => Wb._frameGraph.execute(),
          _resize() {
            Wb._frameGraph.build()
          }
        },
        Tb = function() {
          const bb = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let cb = 0; cb < bb._tasks.length; cb++) ab(bb, bb._tasks[cb]);
              for (const cb of bb._tasks)
                for (const bb of cb._passes) bb._initialize()
            },
            execute() {
              let cb = 0;
              for (const sb of bb._tasks)
                if (!1 !== sb.executionEnabled)
                  if (sb.execute) cb += sb.execute();
                  else
                    for (const bb of sb._passes) cb += bb._execute();
              return cb
            },
            dispose() {
              for (const cb of bb._tasks) cb.dispose();
              bb._tasks.length = 0, bb._currentProcessedTask = null
            }
          };
          return bb
        }();
      if (Wb._frameGraph = Tb, !1 !== cb?.defaultRenderTask) {
        const cb = bb.msaaSamples > 1,
          ab = cb ? (0, kb.b)({
            lbl: "scene-color",
            format: bb.format,
            dFormat: "depth24plus-stencil8",
            samples: bb.msaaSamples,
            size: bb
          }) : bb.scRT,
          Ub = cb ? void 0 : (0, kb.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: bb
          });
        ! function(bb, cb) {
          bb._tasks.push(cb)
        }(Tb, gb({
          name: "aQ",
          rt: ab,
          rst: cb ? bb.scRT : void 0,
          depth: Ub
        }, sb, Wb))
      }
      return Wb._disposables.push((() => Tb.dispose())), Wb
    }
    async function Zb(bb) {
      const cb = bb;
      for (cb._built || (cb._materialSwapQueue.length = 0); cb._deferredBuilders.length;) {
        const bb = cb._deferredBuilders.splice(0);
        await Promise.all(bb.map((bb => bb())))
      }
      await Ob(cb), Gb?.get(cb)?.() || (cb._runtimeBuilds?._e(), cb._renderableVersion++, cb._built = !0), await (cb._rebuildHook?.(cb))
    }
    var zb = null;
    async function qb(bb) {
      const cb = bb,
        kb = cb.surface;
      (0, Wb.j)(kb, cb) || (await Zb(bb), cb._renderables.sort(db), await Promise.all(cb._frameGraph._tasks.map((bb => bb._preload?.()))), zb && await zb(cb), cb._frameGraph.build(), kb._renderingContexts[0] && (await sb.e(353).then((() => sb(60680)))).configureSwapchainOverlayScene(kb, cb), Gb?.get(cb)?.() || (0, Wb.m)(kb, cb))
    }
    var db = (bb, cb) => bb.order - cb.order
  },
  41102: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      g: () => fb
    });
    var kb = sb(41061),
      Wb = sb(41069),
      ab = sb(41077),
      Tb = sb(41086),
      Ub = sb(41092),
      Ib = sb(41094);

    function Hb(bb, cb, sb) {
      let Ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (cb < 1 || sb < 1) && (0, kb.d)(676, cb, sb);
      const Hb = bb._device,
        fb = Ub.mipMaps ?? !1,
        Mb = Ub.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Xb = fb ? (0, Ib.d)(cb, sb) : 1,
        nb = Hb.createTexture({
          size: {
            width: cb,
            height: sb
          },
          format: Mb,
          mipLevelCount: Xb,
          usage: Wb.g.TEXTURE_BINDING | Wb.g.COPY_DST | Wb.g.RENDER_ATTACHMENT
        }),
        mb = {
          addressModeU: Ub.addressModeU ?? "clamp-to-edge",
          addressModeV: Ub.addressModeV ?? "clamp-to-edge",
          minFilter: Ub.minFilter ?? "linear",
          magFilter: Ub.magFilter ?? "linear",
          mipmapFilter: fb ? "linear" : "nearest"
        },
        lb = (0, Tb.b)(bb, mb),
        Qb = {
          texture: nb,
          view: nb.createView(),
          sampler: lb,
          width: cb,
          height: sb
        };
      return (0, ab.b)(Qb), bb._dlr && bb._dlr.t(Qb, {
        kind: "dynamic",
        width: cb,
        height: sb,
        format: Mb,
        levels: Xb,
        samplerDesc: mb,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Qb
    }

    function fb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Wb = kb.invertY ?? !0,
        ab = kb.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: sb,
        flipY: Wb
      }, {
        texture: cb.texture,
        premultipliedAlpha: ab
      }, [cb.width, cb.height]);
      const Tb = cb._recoverySource;
      Tb && "dynamic" === Tb.kind && (Tb.source = sb, Tb.flipY = Wb, Tb.premultipliedAlpha = ab), cb.texture.mipLevelCount > 1 && (0, Ub.generateMipmaps)(bb, cb.texture)
    }
  },
  41099: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib
    });
    var kb = sb(41061),
      Wb = sb(41069),
      ab = sb(41077),
      Tb = sb(41086),
      Ub = sb(41094);
    async function Ib(bb, cb) {
      let Ib = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Hb, fb] = function(bb) {
        const cb = bb,
          sb = [
            [cb.displayWidth, cb.displayHeight],
            [cb.videoWidth, cb.videoHeight],
            [cb.naturalWidth, cb.naturalHeight],
            [cb.width, cb.height]
          ];
        for (const [kb, Wb] of sb)
          if (void 0 !== kb && void 0 !== Wb && Number.isInteger(kb) && Number.isInteger(Wb) && kb > 0 && Wb > 0) return [kb, Wb];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(cb), [Mb, Xb] = function(bb, cb, sb) {
        if (void 0 === sb) return [bb, cb];
        if (!Number.isInteger(sb) || sb < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${sb})`);
        if (Math.max(bb, cb) <= sb) return [bb, cb];
        const kb = sb / Math.max(bb, cb);
        return bb >= cb ? [sb, Math.max(1, Math.round(cb * kb))] : [Math.max(1, Math.round(bb * kb)), sb]
      }(Hb, fb, Ib.maxDimension), nb = Ib.mipMaps ?? !0, mb = Ib.premultiplyAlpha ?? !1;
      let lb = cb,
        Qb = null;
      const eb = {
        texture: null
      };
      try {
        Mb === Hb && Xb === fb || (Qb = await createImageBitmap(cb, {
          resizeWidth: Mb,
          resizeHeight: Xb,
          resizeQuality: "high",
          premultiplyAlpha: mb ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), lb = Qb);
        const Cb = bb._device,
          Nb = Ib.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Vb = nb ? (0, Ub.d)(Mb, Xb) : 1,
          Lb = Vb > 1 ? (await Promise.resolve().then((() => sb(41092)))).generateMipmaps : null,
          ub = {
            addressModeU: Ib.addressModeU ?? "repeat",
            addressModeV: Ib.addressModeV ?? "repeat",
            minFilter: Ib.minFilter ?? "linear",
            magFilter: Ib.magFilter ?? "linear",
            mipmapFilter: nb ? "linear" : "nearest"
          };
        ub.maxAnisotropy = "linear" === ub.minFilter && "linear" === ub.magFilter && "linear" === ub.mipmapFilter ? 4 : 1;
        const Yb = Ib.invertY ?? !0,
          hb = async cb => {
            let sb;
            Cb.pushErrorScope("validation"), Cb.pushErrorScope("out-of-memory");
            let ab = null;
            try {
              const sb = eb.texture = Cb.createTexture({
                size: {
                  width: Mb,
                  height: Xb
                },
                format: Nb,
                mipLevelCount: Vb,
                usage: Wb.g.TEXTURE_BINDING | Wb.g.COPY_DST | Wb.g.RENDER_ATTACHMENT
              });
              Cb.queue.copyExternalImageToTexture({
                source: cb,
                flipY: Yb
              }, {
                texture: sb,
                premultipliedAlpha: mb
              }, {
                width: Mb,
                height: Xb
              }), Lb && Lb(bb, sb), ab = (0, Tb.b)(bb, ub)
            } catch (nb) {
              sb = nb
            }
            const [Ub, Ib] = await Promise.all([Cb.popErrorScope(), Cb.popErrorScope()]);
            if (sb) throw sb;
            const Hb = Ib ?? Ub;
            if (Hb) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Hb.message}`, {
              cause: Hb
            });
            const fb = eb.texture;
            return fb && ab || (0, kb.d)(677), {
              texture: fb,
              view: fb.createView(),
              sampler: ab,
              width: Mb,
              height: Xb
            }
          }, Jb = await (bb._dlr?.x(lb, Mb, Xb, Nb, Vb, ub, Yb, mb, hb)) ?? await hb(lb);
        return (0, ab.b)(Jb), Jb
      } catch (Cb) {
        throw eb.texture?.destroy(), Cb
      } finally {
        Qb?.close()
      }
    }
  },
  41092: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      generateMipmaps: () => nb,
      recordMipmaps: () => mb
    });
    var kb = sb(41069),
      Wb = sb(41086),
      ab = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Tb = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Ub = null,
      Ib = null,
      Hb = null,
      fb = null,
      Mb = null;

    function Xb(bb) {
      const cb = bb._device;
      cb !== Mb && (Ub?.clear(), Ub = null, Ib = null, Hb = null, fb = null, Mb = null, Mb = cb), Ib ??= cb.createShaderModule({
        code: Tb
      }), Hb ??= function(bb) {
        return (0, Wb.b)(bb, ab)
      }(bb), fb ??= cb.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: kb.d.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: kb.d.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function nb(bb, cb, sb) {
      const kb = bb._device,
        Wb = kb.createCommandEncoder();
      mb(bb, cb, Wb, sb), kb.queue.submit([Wb.finish()])
    }

    function mb(bb, cb, sb, kb) {
      if (cb.mipLevelCount <= 1) return;
      const Wb = bb._device,
        ab = function(bb, cb) {
          const sb = bb._device;
          Xb(bb), Ub ??= new Map;
          let kb = Ub.get(cb);
          return kb || (kb = sb.createRenderPipeline({
            layout: sb.createPipelineLayout({
              bindGroupLayouts: [fb]
            }),
            vertex: {
              module: Ib,
              entryPoint: "vs"
            },
            fragment: {
              module: Ib,
              entryPoint: "fs",
              targets: [{
                format: cb
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Ub.set(cb, kb)), kb
        }(bb, cb.format),
        Tb = null != kb ? {
          dimension: "2d",
          baseArrayLayer: kb,
          arrayLayerCount: 1
        } : {};
      for (let Ub = 1; Ub < cb.mipLevelCount; Ub++) {
        const bb = cb.createView({
            baseMipLevel: Ub - 1,
            mipLevelCount: 1,
            ...Tb
          }),
          kb = cb.createView({
            baseMipLevel: Ub,
            mipLevelCount: 1,
            ...Tb
          }),
          Ib = Wb.createBindGroup({
            layout: fb,
            entries: [{
              binding: 0,
              resource: bb
            }, {
              binding: 1,
              resource: Hb
            }]
          }),
          Mb = sb.beginRenderPass({
            colorAttachments: [{
              view: kb,
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
        Mb.setPipeline(ab), Mb.setBindGroup(0, Ib), Mb.draw(3), Mb.end()
      }
    }
  },
  41094: (bb, cb, sb) => {
    function kb(bb, cb) {
      return Math.floor(Math.log2(Math.max(bb, cb))) + 1
    }
    sb.d(cb, {
      d: () => kb
    })
  },
  41058: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb,
      e: () => fb
    });
    var kb = sb(41061),
      Wb = sb(41069),
      ab = sb(41077),
      Tb = sb(41086),
      Ub = sb(41092),
      Ib = sb(41094);

    function Hb(bb, cb, sb, Ub) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (cb < 1 || sb < 1 || Ub < 1) && (0, kb.d)(722, cb, sb, Ub);
      const fb = bb._device,
        Mb = Hb.mipMaps ?? !0,
        Xb = Hb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        nb = fb.createTexture({
          size: {
            width: cb,
            height: sb,
            depthOrArrayLayers: Ub
          },
          dimension: "2d",
          format: Xb,
          mipLevelCount: Mb ? (0, Ib.d)(cb, sb) : 1,
          usage: Wb.g.TEXTURE_BINDING | Wb.g.COPY_DST | Wb.g.RENDER_ATTACHMENT
        }),
        mb = (0, Tb.b)(bb, {
          addressModeU: Hb.addressModeU ?? "repeat",
          addressModeV: Hb.addressModeV ?? "repeat",
          minFilter: Hb.minFilter ?? "linear",
          magFilter: Hb.magFilter ?? "linear",
          mipmapFilter: Mb ? "linear" : "nearest"
        }),
        lb = {
          texture: nb,
          view: nb.createView({
            dimension: "2d-array"
          }),
          sampler: mb,
          width: cb,
          height: sb,
          layers: Ub
        };
      return (0, ab.b)(lb), lb
    }

    function fb(bb, cb, sb, Wb) {
      let ab = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (sb < 0 || sb >= cb.layers || (0 | sb) !== sb) && (0, kb.d)(723, cb.layers, sb);
      const Tb = ab.invertY ?? !0,
        Ib = ab.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: Wb,
        flipY: Tb
      }, {
        texture: cb.texture,
        origin: [0, 0, sb],
        premultipliedAlpha: Ib
      }, [cb.width, cb.height, 1]), cb.texture.mipLevelCount > 1 && (0, Ub.generateMipmaps)(bb, cb.texture, sb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);