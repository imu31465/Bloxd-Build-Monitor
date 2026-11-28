export const id = 623;
export const ids = [623];
export const modules = {
  53933: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(53922),
      Hb = Mb(53939);

    function pb(bb) {
      (0, Hb.e)(bb), (0, eb.r)(bb);
      const wb = bb._surfaces;
      for (const Mb of wb) Mb._renderingContexts.length = 0, Mb._ro?.disconnect(), Mb._context.unconfigure();
      wb.length = 0;
      try {
        bb._disposeManagedResources?.(), bb._disposeStorageBuffers?.()
      } finally {
        bb._device.destroy()
      }
    }
  },
  53922: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ub,
      g: () => Bb,
      h: () => tb,
      l: () => Cb,
      m: () => hb,
      q: () => sb,
      r: () => mb
    });
    var eb = Mb(53874);
    var Hb = "Babylon Lite v1.32.0",
      pb = Mb(53931);

    function Vb(bb) {
      return "clientWidth" in bb
    }
    var gb = 1;

    function lb(bb, wb, Mb) {
      const lb = wb.getContext("webgpu");
      lb || (0, eb.d)(54), Vb(wb) && wb.setAttribute("data-engine", Hb);
      const Lb = Mb?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Ib = Mb?.srgb ? (Ob = Lb).endsWith("-srgb") ? Ob : `${Ob}-srgb` : Lb;
      var Ob;
      const Ub = Mb?.alphaMode ?? "opaque";
      lb.configure({
        device: bb._device,
        format: Lb,
        alphaMode: Ub,
        viewFormats: [Ib]
      });
      const tb = 1 === Mb?.msaaSamples ? 1 : 4,
        Cb = (0, pb.b)({
          lbl: "swapchain",
          format: Ib,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Cb._eager = !0, {
        engine: bb,
        canvas: wb,
        format: Ib,
        msaaSamples: tb,
        scRT: Cb,
        maxDevicePixelRatio: Mb?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: gb++,
        _context: lb,
        _configureFormat: Lb,
        _alphaMode: Ub,
        _renderingContexts: []
      }
    }

    function Lb(bb) {
      const wb = bb._context.getCurrentTexture(),
        Mb = bb.scRT;
      Mb._colorTexture = wb, Mb._colorView = wb.createView({
        format: bb.format
      }), Mb._width = wb.width, Mb._height = wb.height
    }

    function Ib(bb) {
      const wb = bb.canvas;
      if (!Vb(wb)) return;
      const Mb = bb._w ?? wb.clientWidth,
        eb = bb._h ?? wb.clientHeight;
      if (!(Mb > 0 && eb > 0)) return;
      const Hb = Math.min(globalThis.devicePixelRatio || 1, bb.maxDevicePixelRatio);
      Ob(bb, Mb * Hb | 0, eb * Hb | 0)
    }

    function Ob(bb, wb, Mb) {
      const eb = bb.canvas,
        Hb = 0 | wb,
        pb = 0 | Mb;
      if (Hb > 0 && pb > 0 && (Hb !== eb.width || pb !== eb.height)) {
        eb.width = Hb, eb.height = pb, bb.scRT._width = Hb, bb.scRT._height = pb;
        for (const wb of bb._renderingContexts) wb._resize?.()
      }
    }
    var Ub = 0;

    function tb(bb, wb) {
      return -1 !== bb._renderingContexts.indexOf(wb)
    }

    function Cb(bb, wb) {
      return -1 === bb._renderingContexts.indexOf(wb) && (bb._renderingContexts.push(wb), !0)
    }
    var Eb = null;
    var Fb = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Bb(bb, wb) {
      const pb = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Eb ? Eb() : {}
      });
      pb || (0, eb.d)(47);
      const Vb = Eb?.deviceFeatures?.(pb, wb) ?? function(bb) {
          return Fb.filter((wb => bb.features.has(wb)))
        }(pb),
        gb = await pb.requestDevice({
          requiredFeatures: Vb,
          requiredLimits: wb?.requiredLimits
        });
      console.log(`${Hb} - WebGPU engine`);
      const Ob = !!wb?.useHighPrecisionMatrix,
        Ub = !!wb?.useFloatingOrigin;
      if (Ub && !Ob && (0, eb.d)(48), Ob) {
        const {
          allocateF64Mat4: bb
        } = await Mb.e(675).then((() => Mb(64488)));
        0
      }
      let tb, Cb, Bb, sb;
      if (Ub) {
        const [{
          wrapRenderableForFO: bb,
          lightFoVersion: wb,
          applyLightFoOffset: eb
        }, {
          makePackMeshWorld: Hb
        }] = await Promise.all([Mb.e(676).then((() => Mb(64495))), Mb.e(677).then((() => Mb(64499)))]);
        tb = bb, Cb = Hb, Bb = wb, sb = eb
      }
      const mb = {
          _device: gb
        },
        hb = [mb];
      return Object.assign(mb, {
        engine: mb,
        surfaces: hb,
        _surfaces: hb,
        _device: gb,
        _options: wb,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Ob,
        useFloatingOrigin: Ub,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: tb,
        _makePackMeshWorld: Cb,
        _lightFoVersion: Bb,
        _applyLightFoOffset: sb
      }, lb(mb, bb, wb)), Ib(mb), Lb(mb), mb
    }

    function sb(bb, wb, Mb) {
      Ob(bb, wb, Mb)
    }

    function mb(bb) {
      bb._animFrameId && cancelAnimationFrame(bb._animFrameId), bb._animFrameId = 0, bb._renderFn = null, bb._flushGpuRetirements?.(bb)
    }

    function hb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.surfaces;
      if (Mb !== bb.surfaces)
        for (let Hb = Mb.length; Hb--;) Mb[Hb].engine !== bb && (0, eb.d)(49);
      zb(bb, wb, Mb)
    }

    function zb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb._surfaces,
        eb = 0;
      for (let pb = Mb.length; pb--;) eb += Mb[pb]._renderingContexts.length;
      if (!eb) return bb.drawCallCount = 0, bb._flushGpuRetirements?.(bb);
      const Hb = bb._device.createCommandEncoder({
        label: "frame"
      });
      bb._currentEncoder = Hb, bb._currentDelta = wb;
      try {
        bb._gpuTimerBegin?.(Hb), eb = 0;
        for (let bb = 0; bb < Mb.length; bb++) {
          const wb = Mb[bb];
          wb._capturePreFrame?.(wb), Lb(wb);
          const Hb = wb._renderingContexts;
          for (let bb = 0; bb < Hb.length; bb++) {
            const wb = Hb[bb];
            wb._update(), eb += wb._drawCallsPre + wb._record()
          }
        }
        const wb = bb._currentEncoder;
        for (let bb = 0; bb < Mb.length; bb++) {
          const eb = Mb[bb];
          eb._captureService?.(eb, wb)
        }
        bb._gpuTimerEnd?.(wb), bb._cbs[0] = wb.finish(), bb._device.queue.submit(bb._cbs), bb._flushGpuRetirements?.(bb), bb.drawCallCount = eb, bb._gpuTimerResolve?.()
      } finally {
        bb._currentEncoder = void 0
      }
    }
  },
  53880: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb,
      f: () => pb,
      h: () => eb
    });
    var eb = globalThis.GPUTextureUsage,
      Hb = globalThis.GPUBufferUsage,
      pb = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  53939: (bb, wb, Mb) => {
    function eb(bb) {
      Hb(bb.splice(0))
    }

    function Hb(bb) {
      for (const Mb of bb) try {
        Mb()
      } catch (wb) {
        console.error("GPU resource retirement failed.", wb)
      }
    }

    function pb(bb, wb) {
      bb._flushGpuRetirements ??= Vb, (bb._retirements ??= []).push(wb)
    }

    function Vb(bb) {
      const wb = bb._retirements;
      if (!wb) return;
      bb._retirements = null;
      const Mb = bb._retiring ??= new Set;
      Mb.add(wb), queueMicrotask((() => {
        bb._device.queue.onSubmittedWorkDone().then((() => {
          Mb.delete(wb), eb(wb)
        })).catch((() => {}))
      }))
    }

    function gb(bb) {
      const wb = bb._retirements,
        Mb = bb._retiring;
      bb._retirements = null, bb._retiring = null, wb && eb(wb), Mb?.forEach(eb)
    }
    Mb.d(wb, {
      e: () => gb,
      f: () => pb
    })
  },
  53931: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb,
      f: () => Vb,
      h: () => gb
    });
    var eb = Mb(53880);

    function Hb(bb) {
      const wb = bb.size;
      return "canvas" in wb ? wb.canvas : wb
    }

    function pb(bb) {
      return {
        _descriptor: bb,
        _resolveSize: Hb,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Vb(bb, wb) {
      if (bb._eager) return void bb._syncEager?.(wb);
      gb(bb);
      const Mb = bb._descriptor,
        {
          width: pb,
          height: Vb
        } = (bb._resolveSize ?? Hb)(Mb);
      bb._width = pb, bb._height = Vb;
      const lb = wb._device;
      Mb.format && (bb._colorTexture = lb.createTexture({
        label: Mb.lbl,
        size: {
          width: pb,
          height: Vb
        },
        format: Mb.format,
        sampleCount: Mb.samples,
        usage: eb.h.RENDER_ATTACHMENT | eb.h.TEXTURE_BINDING | eb.h.COPY_SRC | eb.h.COPY_DST
      }), bb._colorView = bb._colorTexture.createView()), Mb.dFormat && (bb._depthTexture = lb.createTexture({
        label: Mb.lbl,
        size: {
          width: pb,
          height: Vb
        },
        format: Mb.dFormat,
        sampleCount: Mb.samples,
        usage: eb.h.RENDER_ATTACHMENT | eb.h.TEXTURE_BINDING
      }), bb._depthView = bb._depthTexture.createView())
    }

    function gb(bb) {
      if (!bb || bb._eager && !bb._disposeAttachments) return;
      const wb = bb._colorTexture,
        Mb = bb._depthTexture;
      if (bb._colorTexture = bb._depthTexture = null, bb._colorView = bb._depthView = null, bb._width = bb._height = 0, bb._disposeAttachments) bb._disposeAttachments(wb, Mb);
      else try {
        wb?.destroy()
      } finally {
        !1 !== bb._ownsDepthTexture && Mb?.destroy()
      }
    }
  },
  53947: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb,
      e: () => Hb,
      f: () => pb
    });
    var eb = Float32Array,
      Hb = Float64Array,
      pb = Uint32Array
  },
  53949: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb
    });
    var eb = 16
  },
  53874: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = null;

    function Hb(bb) {
      for (var wb = arguments.length, Mb = new Array(wb > 1 ? wb - 1 : 0), Hb = 1; Hb < wb; Hb++) Mb[Hb - 1] = arguments[Hb];
      const pb = new Error(eb?.(bb, Mb) ?? `#${bb}`);
      throw pb.lite = Mb, pb
    }
  },
  53900: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Hb
    });
    var eb = Mb(53891);

    function Hb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Mb = wb.compare,
        Hb = wb.lodMinClamp ?? 0,
        pb = wb.lodMaxClamp ?? 32,
        Vb = void 0 !== Mb || 0 !== Hb || 32 !== pb ? `${Mb??""}:${Hb}:${pb}` : "";
      return (0, eb.d)(bb, wb, Vb)
    }
  },
  53889: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => pb
    });
    var eb = null;

    function Hb(bb) {
      const wb = eb ??= new WeakMap;
      wb.set(bb, (wb.get(bb) ?? 0) + 1)
    }

    function pb(bb) {
      Hb(bb.texture)
    }
  },
  53891: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => gb
    });
    var eb = null,
      Hb = "nearest",
      pb = "clamp-to-edge",
      Vb = {
        minFilter: Hb,
        magFilter: Hb,
        mipmapFilter: Hb,
        addressModeU: pb,
        addressModeV: pb,
        addressModeW: pb,
        maxAnisotropy: 1
      };

    function gb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Hb = bb._device,
        pb = eb ??= new WeakMap;
      let gb = pb.get(Hb);
      gb || pb.set(Hb, gb = new Map);
      let lb = Mb;
      for (const eb in Vb) {
        const bb = eb;
        lb += `:${wb[bb]??Vb[bb]}`
      }
      let Lb = gb.get(lb);
      return Lb || gb.set(lb, Lb = Hb.createSampler(wb)), Lb
    }
  },
  53941: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Sb,
      f: () => Qb
    });
    var eb = Mb(53931),
      Hb = Mb(53922);

    function pb(bb, wb) {
      wb._passes.length = 0, bb._currentProcessedTask = wb;
      try {
        wb.record()
      } finally {
        bb._currentProcessedTask = null
      }
    }
    var Vb = Mb(53947);

    function gb(bb) {
      const wb = bb.worldMatrixVersion;
      if (bb._viewVer === wb) return bb._viewCache;
      const Mb = bb._viewCache,
        eb = bb.worldMatrix,
        Hb = bb._useFloatingOrigin,
        pb = Hb ? 0 : eb[12],
        Vb = Hb ? 0 : eb[13],
        gb = Hb ? 0 : eb[14];
      return Mb[0] = eb[0], Mb[1] = eb[4], Mb[2] = eb[8], Mb[3] = 0, Mb[4] = eb[1], Mb[5] = eb[5], Mb[6] = eb[9], Mb[7] = 0, Mb[8] = eb[2], Mb[9] = eb[6], Mb[10] = eb[10], Mb[11] = 0, Mb[12] = -(eb[0] * pb + eb[1] * Vb + eb[2] * gb), Mb[13] = -(eb[4] * pb + eb[5] * Vb + eb[6] * gb), Mb[14] = -(eb[8] * pb + eb[9] * Vb + eb[10] * gb), Mb[15] = 1, bb._viewVer = wb, Mb
    }
    var lb = null;

    function Lb(bb) {
      return bb._projFov === bb.fov && bb._projNear === bb.nearPlane && bb._projFar === bb.farPlane || (bb._projFov = bb.fov, bb._projNear = bb.nearPlane, bb._projFar = bb.farPlane, bb._projRev = (bb._projRev ?? 0) + 1), bb.worldMatrixVersion + (bb._projRev ?? 0)
    }

    function Ib(bb, wb) {
      const Mb = Lb(bb);
      if (bb._projVer === Mb && bb._projAspect === wb) return bb._projCache;
      const eb = bb._projCache;
      return null !== lb && bb.ortho ? lb(bb, wb, eb) : function(bb, wb, Mb, eb, Hb) {
        const pb = 1 / Math.tan(.5 * wb),
          Vb = Hb - eb;
        bb[0] = pb / Mb, bb[5] = pb, bb[10] = -eb / Vb, bb[11] = 1, bb[14] = Hb * eb / Vb
      }(eb, bb.fov, wb, bb.nearPlane, bb.farPlane), bb._projVer = Mb, bb._projAspect = wb, eb
    }
    var Ob = Mb(53880);

    function Ub(bb, wb, Mb) {
      return bb._device.createBuffer({
        label: Mb,
        size: (eb = wb, Hb = 16, Math.ceil(eb / Hb) * Hb),
        usage: Ob.d.UNIFORM | Ob.d.COPY_DST
      });
      var eb, Hb
    }
    var tb = Mb(53939),
      Cb = null;

    function Eb(bb) {
      const wb = bb._device,
        Mb = Cb ??= new WeakMap;
      let eb = Mb.get(wb);
      return eb || (eb = wb.createBindGroupLayout({
        label: "JE",
        entries: [{
          binding: 0,
          visibility: Ob.f.VERTEX | Ob.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Ob.f.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Mb.set(wb, eb)), eb
    }

    function Fb(bb, wb, Mb) {
      const eb = bb._device,
        Hb = Ub(bb, wb.byteLength, Mb);
      try {
        eb.queue.writeBuffer(Hb, 0, wb.buffer, wb.byteOffset, wb.byteLength)
      } catch (pb) {
        throw Hb.destroy(), pb
      }
      return Hb
    }
    var Bb = Mb(53949),
      sb = new Vb.f(1),
      mb = new Vb.d(sb.buffer);

    function hb(bb) {
      let wb = 0;
      for (const Mb of bb) wb += Mb._lightVersion ?? 0;
      return wb
    }

    function zb(bb, wb) {
      bb.fill(0);
      let Mb = 0;
      for (const eb of wb) {
        if (Mb >= Bb.e) break;
        eb._writeLightUbo && (eb._writeLightUbo(bb, 4 + 16 * Mb), Mb++)
      }
      sb[0] = Mb, bb[0] = mb[0]
    }

    function Xb(bb, wb) {
      let Mb = wb._lightGpuState;
      const eb = 16 + 16 * Bb.e * 4;
      if (Mb && Mb._byteSize === eb) return Mb;
      const Hb = !Mb;
      Mb?._buffer.destroy();
      const pb = new Vb.d(eb / 4);
      return zb(pb, wb.lights), bb._applyLightFoOffset?.(pb, wb), Mb = {
        _buffer: Fb(bb, pb),
        _scratch: pb,
        hq: hb(wb.lights) + (bb._lightFoVersion?.(wb) ?? 0),
        _listVersion: wb._lightListVersion ?? 0,
        _lightCount: wb.lights.length,
        _byteSize: eb
      }, wb._lightGpuState = Mb, Hb && wb._disposables.push((() => {
        wb._lightGpuState?._buffer.destroy(), wb._lightGpuState = void 0
      })), Mb
    }

    function xb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Hb = wb;
      if (0 === eb && 16 === Hb.length) return void bb.set(Hb, Mb);
      const pb = eb,
        Vb = Mb;
      bb[Vb + 0] = Hb[pb + 0], bb[Vb + 1] = Hb[pb + 1], bb[Vb + 2] = Hb[pb + 2], bb[Vb + 3] = Hb[pb + 3], bb[Vb + 4] = Hb[pb + 4], bb[Vb + 5] = Hb[pb + 5], bb[Vb + 6] = Hb[pb + 6], bb[Vb + 7] = Hb[pb + 7], bb[Vb + 8] = Hb[pb + 8], bb[Vb + 9] = Hb[pb + 9], bb[Vb + 10] = Hb[pb + 10], bb[Vb + 11] = Hb[pb + 11], bb[Vb + 12] = Hb[pb + 12], bb[Vb + 13] = Hb[pb + 13], bb[Vb + 14] = Hb[pb + 14], bb[Vb + 15] = Hb[pb + 15]
    }

    function jb(bb, wb, Mb, eb, Hb) {
      bb.fill(0);
      const pb = function(bb, wb) {
          const Mb = Lb(bb);
          if (bb._vpVer === Mb && bb._vpAspect === wb) return bb._vpCache;
          const eb = bb._vpCache;
          return function(bb, wb, Mb, eb, Hb, pb) {
            const Vb = Mb[eb],
              gb = Mb[eb + 1],
              lb = Mb[eb + 2],
              Lb = Mb[eb + 3],
              Ib = Mb[eb + 4],
              Ob = Mb[eb + 5],
              Ub = Mb[eb + 6],
              tb = Mb[eb + 7],
              Cb = Mb[eb + 8],
              Eb = Mb[eb + 9],
              Fb = Mb[eb + 10],
              Bb = Mb[eb + 11],
              sb = Mb[eb + 12],
              mb = Mb[eb + 13],
              hb = Mb[eb + 14],
              zb = Mb[eb + 15];
            let Xb = Hb[pb],
              xb = Hb[pb + 1],
              jb = Hb[pb + 2],
              Kb = Hb[pb + 3];
            bb[wb] = Vb * Xb + Ib * xb + Cb * jb + sb * Kb, bb[wb + 1] = gb * Xb + Ob * xb + Eb * jb + mb * Kb, bb[wb + 2] = lb * Xb + Ub * xb + Fb * jb + hb * Kb, bb[wb + 3] = Lb * Xb + tb * xb + Bb * jb + zb * Kb, Xb = Hb[pb + 4], xb = Hb[pb + 5], jb = Hb[pb + 6], Kb = Hb[pb + 7], bb[wb + 4] = Vb * Xb + Ib * xb + Cb * jb + sb * Kb, bb[wb + 5] = gb * Xb + Ob * xb + Eb * jb + mb * Kb, bb[wb + 6] = lb * Xb + Ub * xb + Fb * jb + hb * Kb, bb[wb + 7] = Lb * Xb + tb * xb + Bb * jb + zb * Kb, Xb = Hb[pb + 8], xb = Hb[pb + 9], jb = Hb[pb + 10], Kb = Hb[pb + 11], bb[wb + 8] = Vb * Xb + Ib * xb + Cb * jb + sb * Kb, bb[wb + 9] = gb * Xb + Ob * xb + Eb * jb + mb * Kb, bb[wb + 10] = lb * Xb + Ub * xb + Fb * jb + hb * Kb, bb[wb + 11] = Lb * Xb + tb * xb + Bb * jb + zb * Kb, Xb = Hb[pb + 12], xb = Hb[pb + 13], jb = Hb[pb + 14], Kb = Hb[pb + 15], bb[wb + 12] = Vb * Xb + Ib * xb + Cb * jb + sb * Kb, bb[wb + 13] = gb * Xb + Ob * xb + Eb * jb + mb * Kb, bb[wb + 14] = lb * Xb + Ub * xb + Fb * jb + hb * Kb, bb[wb + 15] = Lb * Xb + tb * xb + Bb * jb + zb * Kb
          }(eb, 0, Ib(bb, wb), 0, gb(bb), 0), bb._vpVer = Mb, bb._vpAspect = wb, eb
        }(eb, Hb),
        Vb = gb(eb),
        lb = eb.worldMatrix;
      xb(bb, pb, 0), xb(bb, Vb, 16), wb.useFloatingOrigin ? (bb[32] = 0, bb[33] = 0, bb[34] = 0) : (bb[32] = lb[12], bb[33] = lb[13], bb[34] = lb[14]), bb[87] = wb.canvas.width;
      const Ob = Mb.imageProcessing;
      bb[76] = Ob.exposure, bb[77] = Ob.contrast, bb[78] = Mb._envTextures?.lodGenerationScale ?? .8, bb[79] = +Ob.toneMappingEnabled, bb[37] = wb.canvas.height
    }

    function Kb(bb, wb) {
      return {
        _renderables: bb,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: wb
      }
    }

    function rb(bb, wb, Mb) {
      bb.clr ??= !0;
      const Hb = bb.rt._descriptor,
        pb = bb.depth?._descriptor,
        lb = {
          _colorFormat: Hb.format,
          _depthStencilFormat: pb?.dFormat ?? Hb.dFormat,
          _depthCompare: Hb.depthCompare ?? pb?.depthCompare,
          _sampleCount: Hb.samples
        },
        Ib = {
          loadOp: "clear",
          storeOp: "store"
        },
        Ob = {
          ...Kb([], -1),
          name: bb.name,
          _config: bb,
          _ownsTargets: !bb.sharedRt,
          engine: wb,
          JE: Mb,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Ib]
          },
          _colorAttachment: Ib,
          _sceneUBO: Ub(wb, 368),
          _suData: new Vb.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: lb,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Ob._disposed) throw new Error("RenderTask has been disposed.");
            Ob._recordExplicit ? Ob._recordExplicit(Ob, !0) : cb(Ob, !1 !== bb.autoMirror ? Mb._renderables.slice() : Ob._renderables, !0)
          },
          execute: () => function(bb, wb, Mb) {
            if (!1 === bb.enabled) return 0;
            const eb = bb.JE;
            ! function(bb, wb, Mb) {
              const eb = bb.JE;
              !1 !== bb._config.autoMirror && bb._lastVersion !== eb._renderableVersion && cb(bb, eb._renderables.slice());
              Zb(bb, wb);
              const Hb = bb._updateContext,
                pb = bb._config.cam ?? eb.camera;
              Mb._colorFormat && (bb._config._skipClusteredLights || eb._clusteredLightUpdater?.(pb, Hb.targetWidth, Hb.targetHeight), function(bb, wb) {
                const Mb = Xb(bb, wb),
                  eb = hb(wb.lights) + (bb._lightFoVersion?.(wb) ?? 0),
                  Hb = wb._lightListVersion ?? 0;
                eb === Mb.hq && Hb === Mb._listVersion && wb.lights.length === Mb._lightCount || (Mb.hq = eb, Mb._listVersion = Hb, Mb._lightCount = wb.lights.length, zb(Mb._scratch, wb.lights), bb._applyLightFoOffset?.(Mb._scratch, wb), bb._device.queue.writeBuffer(Mb._buffer, 0, Mb._scratch)), Mb._buffer
              }(wb, eb));
              (function(bb, wb, Mb, eb) {
                if (!eb) return;
                const Hb = eb.viewport,
                  pb = bb._config.rt,
                  Vb = (bb._config.cs ? wb.canvas.width / wb.canvas.height : pb._width / pb._height) * (Hb ? Hb.width / Hb.height : 1),
                  gb = Mb.fog,
                  lb = Mb.imageProcessing,
                  Ib = Lb(eb),
                  Ob = Mb._envTextures,
                  Ub = bb._sceneUboCacheKey;
                if (Ub[0] === eb && Ub[1] === gb && Ub[2] === Ib && Ub[3] === Vb && Ub[4] === lb.exposure && Ub[5] === lb.contrast && Ub[6] === Ob) return;
                Ub[0] = eb, Ub[1] = gb, Ub[2] = Ib, Ub[3] = Vb, Ub[4] = lb.exposure, Ub[5] = lb.contrast, Ub[6] = Ob;
                const tb = bb._suData;
                jb(tb, wb, Mb, eb, Vb);
                const Cb = Mb._sceneUboContributors;
                if (Cb)
                  for (const Lb of Cb) Lb(tb, Mb);
                wb._device.queue.writeBuffer(bb._sceneUBO, 0, tb)
              })(bb, wb, eb, pb), Hb.K8 = pb, bb._batchState?._reset(), fb(bb._opaqueBindings, Hb), fb(bb._directBindings, Hb), fb(bb._transparentBindings, Hb), bb._batchState?._flush(wb),
                function(bb, wb) {
                  const Mb = bb._transparentBindings;
                  if (Mb.length <= 1 || !wb) return;
                  const eb = gb(wb);
                  for (const Hb of Mb) {
                    const bb = Hb.renderable._worldCenter;
                    Hb._sortDistance = bb ? bb[0] * eb[2] + bb[1] * eb[6] + bb[2] * eb[10] + eb[14] : 0
                  }
                  Mb.sort(Rb)
                }(bb, pb)
            }(bb, wb, Mb);
            const Hb = bb._colorAttachment,
              pb = bb._config;
            pb.rt._colorView && (pb.rt === eb.surface.scRT && (Hb.view = pb.rt._colorView), Hb.resolveTarget = pb.rst?._colorView ?? void 0, Hb.clearValue = pb.clrColor ?? eb.clearColor, Hb.loadOp = pb.clr ? "clear" : "load");
            if (bb._executeWithTransmission) return bb._executeWithTransmission(Mb._sampleCount);
            const Vb = wb._currentEncoder.beginRenderPass(bb._renderPassDescriptor),
              lb = Yb(bb, Vb);
            return Vb.end(), lb
          }(Ob, wb, lb),
          dispose() {
            if (Ob._disposed) return;
            Ob._disposed = !0;
            const wb = Ob._pendingMeshes;
            wb && (wb.length = 0);
            for (const bb of Ob._renderables) Ob._retireRenderable?.(Ob.engine, bb);
            Ob._passes.length = Ob._opaqueBindings.length = Ob._directBindings.length = 0, Ob._transparentBindings.length = Ob._renderables.length = Ob._ob.length = 0, Ob._ownsTargets && ((0, eb.h)(bb.rt), (0, eb.h)(bb.rst)), bb.depth?._eager || (0, eb.h)(bb.depth);
            const Mb = Ob._sceneUBO;
            (0, tb.f)(Ob.engine, (() => Mb.destroy())), Ob._batchState?._release(Ob.engine), Ob._batchState = void 0
          }
        };
      return Ob
    }

    function Rb(bb, wb) {
      return wb._sortDistance - bb._sortDistance || bb.renderable.order - wb.renderable.order
    }

    function Db(bb, wb) {
      return bb.renderable.order - wb.renderable.order
    }

    function cb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb._renderables,
        Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Hb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        pb = arguments.length > 4 ? arguments[4] : void 0;
      const Vb = bb._config,
        gb = Vb.rt,
        lb = bb._batchState,
        Lb = Kb(wb, bb.JE._renderableVersion);
      if (Mb) {
        const wb = (wb, Mb) => {
          wb && (Mb || bb._ownsTargets || wb._eager) && (0, eb.f)(wb, bb.engine)
        };
        wb(gb), gb._descriptor.samples > 1 && wb(Vb.rst), wb(Vb.depth, !0)
      }
      const {
        _opaqueBindings: Ib,
        _directBindings: Ob,
        _transparentBindings: Ub
      } = Lb;
      try {
        for (const Mb of wb) {
          const wb = Mb.bind(bb.engine, bb._targetSignature);
          Lb._batchState = bb._targetSignature._collectBatches?.(Lb._batchState, wb), Mb.isTransparent || Mb._transmissive ? Ub.push(wb) : Mb._direct ? Ob.push(wb) : Ib.push(wb)
        }
        Ib.sort(Db), Ob.sort(Db), Mb && Zb(bb, bb.engine, !1)
      } catch (tb) {
        throw Lb._batchState?._release(void 0, pb ?? [lb]), tb
      }
      return Mb && (! function(bb, wb) {
        const Mb = bb._config,
          eb = bb._colorAttachment;
        eb.view = wb._colorView, bb._renderPassDescriptor.colorAttachments = wb._colorView ? [eb] : [];
        const Hb = Mb.depth ?? wb,
          pb = Hb._depthView;
        let Vb;
        if (pb) {
          const bb = Hb._descriptor,
            wb = (Mb.depth ? Hb._eager : !1 === Mb.depthClear) ? "load" : "clear";
          Vb = {
            view: pb,
            depthClearValue: bb.depthClearValue ?? 0,
            depthLoadOp: wb,
            depthStoreOp: "store"
          }, bb.dFormat?.includes("stencil") && (Vb.stencilClearValue = 0, Vb.stencilLoadOp = wb, Vb.stencilStoreOp = "store")
        }
        bb._renderPassDescriptor.depthStencilAttachment = Vb
      }(bb, gb), bb._updateContext.targetWidth = gb._width, bb._updateContext.targetHeight = gb._height), Hb && (Object.assign(bb, Lb), lb?._release(bb.engine, [Lb._batchState])), Lb
    }

    function Yb(bb, wb) {
      const Mb = bb.engine,
        eb = bb._config,
        pb = eb.rt,
        Vb = bb.JE,
        gb = bb._opaqueBindings,
        lb = bb._ob,
        Lb = bb._sceneBG;
      if (function(bb, wb, Mb, eb) {
          const Hb = wb?.viewport;
          if (!Hb) return;
          const pb = Math.floor(Hb.x * Mb),
            Vb = Math.floor((1 - Hb.y - Hb.height) * eb),
            gb = Math.ceil((Hb.x + Hb.width) * Mb) - pb,
            lb = Math.ceil((1 - Hb.y) * eb) - Vb;
          bb.setViewport(pb, Vb, gb, lb, 0, 1), bb.setScissorRect(pb, Vb, gb, lb)
        }(wb, eb.cam ?? Vb.camera, pb._width, pb._height), wb.setBindGroup(0, Lb), bb._lastVis !== Hb.d || !lb.length) {
        const wb = pb._descriptor,
          eb = Mb._device.createRenderBundleEncoder({
            colorFormats: wb.format ? [wb.format] : [],
            depthStencilFormat: bb._targetSignature._depthStencilFormat,
            sampleCount: wb.samples
          });
        eb.setBindGroup(0, Lb), Ab(eb, gb, Mb), lb[0] = eb.finish(), bb._lastVis = Hb.d
      }
      let Ib = gb.length;
      return wb.executeBundles(lb), wb.setBindGroup(0, Lb), Ib += Ab(wb, bb._directBindings, Mb), Ib += Ab(wb, bb._transparentBindings, Mb), Ib
    }

    function Zb(bb, wb) {
      let Mb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const eb = Xb(wb, bb.JE)._buffer;
      if (eb === bb._lightsUBO) return;
      const Hb = wb._device.createBindGroup({
        layout: Eb(wb),
        entries: [{
          binding: 0,
          resource: {
            buffer: bb._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: eb
          }
        }]
      });
      bb._lightsUBO = eb, bb._sceneBG = Hb, Mb && (bb._ob = [])
    }

    function fb(bb, wb) {
      for (const Mb of bb) Mb.update?.(wb)
    }

    function Ab(bb, wb, Mb) {
      let eb = null,
        Hb = 0;
      for (const pb of wb) {
        const wb = pb.renderable.mesh;
        wb && !1 === wb.visible || (pb.pipeline !== eb && (bb.setPipeline(pb.pipeline), eb = pb.pipeline), Hb += pb.draw(bb, Mb))
      }
      return Hb
    }

    function Wb(bb) {
      const wb = bb._materialSwapQueue;
      if (!wb[0] || bb._runtimeBuilds?.w) return;
      let eb, Hb, pb;
      const Vb = bb._renderables;
      for (const Mb of wb) {
        const wb = Mb.material;
        if (!wb) continue;
        const gb = Mb._runtimeThinBuild;
        if (gb) {
          Hb = gb(bb, Mb, Hb);
          continue
        }
        const lb = bb._groups.get(wb._buildGroup),
          Lb = lb?.r;
        if (!Lb) {
          (pb ??= []).push(Mb);
          continue
        }
        if (lb._w?.(Mb)) {
          (pb ??= []).push([Mb, wb]);
          continue
        }
        const Ib = bb._meshDisposables.get(Mb);
        Ib && (bb._meshDisposables.delete(Mb), (0, tb.f)(bb.surface.engine, (() => Ib.forEach((bb => bb())))));
        const Ob = lb.o;
        let Ub;
        for (let bb = Vb.length; bb--;) Vb[bb].mesh === Mb && (Ub = Vb.splice(bb, 1)[0]);
        wb._csmGen = -~wb._csmGen;
        const Cb = Lb(bb, Mb);
        if (Ob) {
          const bb = Ob.indexOf(Ub);
          bb < 0 ? Ob.push(Cb) : Ob[bb] = Cb
        }
        eb = Vb.push(Cb)
      }
      if (eb && (Vb.sort(((bb, wb) => bb.order - wb.order)), bb._renderableVersion++, bb._materialEpoch++), wb.length = 0, !pb) return Hb;
      const gb = pb;
      return Mb.e(681).then((() => Mb(64519))).then((wb => {
        let {
          C: Mb
        } = wb;
        return Mb(bb, gb, Hb)
      }), (wb => {
        const Mb = bb._runtimeBuilds;
        Mb ? Mb._x(wb) : console.error(wb)
      }))
    }
    var Jb = null;

    function Sb(bb, wb) {
      const Mb = bb.engine,
        Hb = {
          _kind: "JE",
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
            Mb.useFloatingOrigin && Hb.camera && !Hb.camera._useFloatingOrigin && (Hb.camera._useFloatingOrigin = !0, Hb.camera._viewVer = -1, Hb.camera._vpVer = -1);
            const bb = Hb.fixedDeltaMs > 0 ? Hb.fixedDeltaMs : Mb._currentDelta,
              wb = Mb._currentEncoder;
            let eb = 0;
            for (const Mb of Hb._beforeRender) Mb(bb);
            Hb._materialSwapQueue.length && Wb(Hb);
            for (const pb of Hb._prePasses) eb += pb.execute(wb, Mb);
            for (const pb of Hb._uniformUpdaters) pb.update(Mb);
            Hb._drawCallsPre = eb
          },
          _record: () => Hb._frameGraph.execute(),
          _resize() {
            Hb._frameGraph.build()
          }
        },
        Vb = function() {
          const bb = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let wb = 0; wb < bb._tasks.length; wb++) pb(bb, bb._tasks[wb]);
              for (const wb of bb._tasks)
                for (const bb of wb._passes) bb._initialize()
            },
            execute() {
              let wb = 0;
              for (const Mb of bb._tasks)
                if (!1 !== Mb.executionEnabled)
                  if (Mb.execute) wb += Mb.execute();
                  else
                    for (const bb of Mb._passes) wb += bb._execute();
              return wb
            },
            dispose() {
              for (const wb of bb._tasks) wb.dispose();
              bb._tasks.length = 0, bb._currentProcessedTask = null
            }
          };
          return bb
        }();
      if (Hb._frameGraph = Vb, !1 !== wb?.defaultRenderTask) {
        const wb = bb.msaaSamples > 1,
          pb = wb ? (0, eb.b)({
            lbl: "scene-color",
            format: bb.format,
            dFormat: "depth24plus-stencil8",
            samples: bb.msaaSamples,
            size: bb
          }) : bb.scRT,
          gb = wb ? void 0 : (0, eb.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: bb
          });
        ! function(bb, wb) {
          bb._tasks.push(wb)
        }(Vb, rb({
          name: "JE",
          rt: pb,
          rst: wb ? bb.scRT : void 0,
          depth: gb
        }, Mb, Hb))
      }
      return Hb._disposables.push((() => Vb.dispose())), Hb
    }
    async function Nb(bb) {
      const wb = bb;
      for (wb._built || (wb._materialSwapQueue.length = 0); wb._deferredBuilders.length;) {
        const bb = wb._deferredBuilders.splice(0);
        await Promise.all(bb.map((bb => bb())))
      }
      await Wb(wb), Jb?.get(wb)?.() || (wb._runtimeBuilds?._e(), wb._renderableVersion++, wb._built = !0), await (wb._rebuildHook?.(wb))
    }
    var vb = null;
    async function Qb(bb) {
      const wb = bb,
        eb = wb.surface;
      (0, Hb.h)(eb, wb) || (await Nb(bb), wb._renderables.sort(Gb), await Promise.all(wb._frameGraph._tasks.map((bb => bb._preload?.()))), vb && await vb(wb), wb._frameGraph.build(), eb._renderingContexts[0] && (await Mb.e(679).then((() => Mb(64512)))).configureSwapchainOverlayScene(eb, wb), Jb?.get(wb)?.() || (0, Hb.l)(eb, wb))
    }
    var Gb = (bb, wb) => bb.order - wb.order
  },
  53913: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb,
      e: () => Ib
    });
    var eb = Mb(53874),
      Hb = Mb(53880),
      pb = Mb(53889),
      Vb = Mb(53891),
      gb = Mb(53893),
      lb = Mb(53895);

    function Lb(bb, wb, Mb) {
      let gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (wb < 1 || Mb < 1) && (0, eb.d)(676, wb, Mb);
      const Lb = bb._device,
        Ib = gb.mipMaps ?? !1,
        Ob = gb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Ub = Ib ? (0, lb.e)(wb, Mb) : 1,
        tb = Lb.createTexture({
          size: {
            width: wb,
            height: Mb
          },
          format: Ob,
          mipLevelCount: Ub,
          usage: Hb.h.TEXTURE_BINDING | Hb.h.COPY_DST | Hb.h.RENDER_ATTACHMENT
        }),
        Cb = {
          addressModeU: gb.addressModeU ?? "clamp-to-edge",
          addressModeV: gb.addressModeV ?? "clamp-to-edge",
          minFilter: gb.minFilter ?? "linear",
          magFilter: gb.magFilter ?? "linear",
          mipmapFilter: Ib ? "linear" : "nearest"
        },
        Eb = (0, Vb.d)(bb, Cb),
        Fb = {
          texture: tb,
          view: tb.createView(),
          sampler: Eb,
          width: wb,
          height: Mb
        };
      return (0, pb.b)(Fb), bb._dlr && bb._dlr.t(Fb, {
        kind: "dynamic",
        width: wb,
        height: Mb,
        format: Ob,
        levels: Ub,
        samplerDesc: Cb,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Fb
    }

    function Ib(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Hb = eb.invertY ?? !0,
        pb = eb.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: Mb,
        flipY: Hb
      }, {
        texture: wb.texture,
        premultipliedAlpha: pb
      }, [wb.width, wb.height]);
      const Vb = wb._recoverySource;
      Vb && "dynamic" === Vb.kind && (Vb.source = Mb, Vb.flipY = Hb, Vb.premultipliedAlpha = pb), wb.texture.mipLevelCount > 1 && (0, gb.generateMipmaps)(bb, wb.texture)
    }
  },
  53909: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => lb
    });
    var eb = Mb(53874),
      Hb = Mb(53880),
      pb = Mb(53889),
      Vb = Mb(53891),
      gb = Mb(53895);
    async function lb(bb, wb) {
      let lb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Lb, Ib] = function(bb) {
        const wb = bb,
          Mb = [
            [wb.displayWidth, wb.displayHeight],
            [wb.videoWidth, wb.videoHeight],
            [wb.naturalWidth, wb.naturalHeight],
            [wb.width, wb.height]
          ];
        for (const [eb, Hb] of Mb)
          if (void 0 !== eb && void 0 !== Hb && Number.isInteger(eb) && Number.isInteger(Hb) && eb > 0 && Hb > 0) return [eb, Hb];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(wb), [Ob, Ub] = function(bb, wb, Mb) {
        if (void 0 === Mb) return [bb, wb];
        if (!Number.isInteger(Mb) || Mb < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Mb})`);
        if (Math.max(bb, wb) <= Mb) return [bb, wb];
        const eb = Mb / Math.max(bb, wb);
        return bb >= wb ? [Mb, Math.max(1, Math.round(wb * eb))] : [Math.max(1, Math.round(bb * eb)), Mb]
      }(Lb, Ib, lb.maxDimension), tb = lb.mipMaps ?? !0, Cb = lb.premultiplyAlpha ?? !1;
      let Eb = wb,
        Fb = null;
      const Bb = {
        texture: null
      };
      try {
        Ob === Lb && Ub === Ib || (Fb = await createImageBitmap(wb, {
          resizeWidth: Ob,
          resizeHeight: Ub,
          resizeQuality: "high",
          premultiplyAlpha: Cb ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Eb = Fb);
        const sb = bb._device,
          mb = lb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          hb = tb ? (0, gb.e)(Ob, Ub) : 1,
          zb = hb > 1 ? (await Promise.resolve().then((() => Mb(53893)))).generateMipmaps : null,
          Xb = {
            addressModeU: lb.addressModeU ?? "repeat",
            addressModeV: lb.addressModeV ?? "repeat",
            minFilter: lb.minFilter ?? "linear",
            magFilter: lb.magFilter ?? "linear",
            mipmapFilter: tb ? "linear" : "nearest"
          };
        Xb.maxAnisotropy = "linear" === Xb.minFilter && "linear" === Xb.magFilter && "linear" === Xb.mipmapFilter ? 4 : 1;
        const xb = lb.invertY ?? !0,
          jb = async wb => {
            let Mb;
            sb.pushErrorScope("validation"), sb.pushErrorScope("out-of-memory");
            let pb = null;
            try {
              const Mb = Bb.texture = sb.createTexture({
                size: {
                  width: Ob,
                  height: Ub
                },
                format: mb,
                mipLevelCount: hb,
                usage: Hb.h.TEXTURE_BINDING | Hb.h.COPY_DST | Hb.h.RENDER_ATTACHMENT
              });
              sb.queue.copyExternalImageToTexture({
                source: wb,
                flipY: xb
              }, {
                texture: Mb,
                premultipliedAlpha: Cb
              }, {
                width: Ob,
                height: Ub
              }), zb && zb(bb, Mb), pb = (0, Vb.d)(bb, Xb)
            } catch (tb) {
              Mb = tb
            }
            const [gb, lb] = await Promise.all([sb.popErrorScope(), sb.popErrorScope()]);
            if (Mb) throw Mb;
            const Lb = lb ?? gb;
            if (Lb) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Lb.message}`, {
              cause: Lb
            });
            const Ib = Bb.texture;
            return Ib && pb || (0, eb.d)(677), {
              texture: Ib,
              view: Ib.createView(),
              sampler: pb,
              width: Ob,
              height: Ub
            }
          }, Kb = await (bb._dlr?.x(Eb, Ob, Ub, mb, hb, Xb, xb, Cb, jb)) ?? await jb(Eb);
        return (0, pb.b)(Kb), Kb
      } catch (sb) {
        throw Bb.texture?.destroy(), sb
      } finally {
        Fb?.close()
      }
    }
  },
  53893: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      generateMipmaps: () => tb,
      recordMipmaps: () => Cb
    });
    var eb = Mb(53880),
      Hb = Mb(53891),
      pb = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Vb = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      gb = null,
      lb = null,
      Lb = null,
      Ib = null,
      Ob = null;

    function Ub(bb) {
      const wb = bb._device;
      wb !== Ob && (gb?.clear(), gb = null, lb = null, Lb = null, Ib = null, Ob = null, Ob = wb), lb ??= wb.createShaderModule({
        code: Vb
      }), Lb ??= function(bb) {
        return (0, Hb.d)(bb, pb)
      }(bb), Ib ??= wb.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: eb.f.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: eb.f.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function tb(bb, wb, Mb) {
      const eb = bb._device,
        Hb = eb.createCommandEncoder();
      Cb(bb, wb, Hb, Mb), eb.queue.submit([Hb.finish()])
    }

    function Cb(bb, wb, Mb, eb) {
      if (wb.mipLevelCount <= 1) return;
      const Hb = bb._device,
        pb = function(bb, wb) {
          const Mb = bb._device;
          Ub(bb), gb ??= new Map;
          let eb = gb.get(wb);
          return eb || (eb = Mb.createRenderPipeline({
            layout: Mb.createPipelineLayout({
              bindGroupLayouts: [Ib]
            }),
            vertex: {
              module: lb,
              entryPoint: "vs"
            },
            fragment: {
              module: lb,
              entryPoint: "fs",
              targets: [{
                format: wb
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), gb.set(wb, eb)), eb
        }(bb, wb.format),
        Vb = null != eb ? {
          dimension: "2d",
          baseArrayLayer: eb,
          arrayLayerCount: 1
        } : {};
      for (let gb = 1; gb < wb.mipLevelCount; gb++) {
        const bb = wb.createView({
            baseMipLevel: gb - 1,
            mipLevelCount: 1,
            ...Vb
          }),
          eb = wb.createView({
            baseMipLevel: gb,
            mipLevelCount: 1,
            ...Vb
          }),
          lb = Hb.createBindGroup({
            layout: Ib,
            entries: [{
              binding: 0,
              resource: bb
            }, {
              binding: 1,
              resource: Lb
            }]
          }),
          Ob = Mb.beginRenderPass({
            colorAttachments: [{
              view: eb,
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
        Ob.setPipeline(pb), Ob.setBindGroup(0, lb), Ob.draw(3), Ob.end()
      }
    }
  },
  53895: (bb, wb, Mb) => {
    function eb(bb, wb) {
      return Math.floor(Math.log2(Math.max(bb, wb))) + 1
    }
    Mb.d(wb, {
      e: () => eb
    })
  },
  53865: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Lb,
      h: () => Ib
    });
    var eb = Mb(53874),
      Hb = Mb(53880),
      pb = Mb(53889),
      Vb = Mb(53891),
      gb = Mb(53893),
      lb = Mb(53895);

    function Lb(bb, wb, Mb, gb) {
      let Lb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (wb < 1 || Mb < 1 || gb < 1) && (0, eb.d)(722, wb, Mb, gb);
      const Ib = bb._device,
        Ob = Lb.mipMaps ?? !0,
        Ub = Lb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        tb = Ib.createTexture({
          size: {
            width: wb,
            height: Mb,
            depthOrArrayLayers: gb
          },
          dimension: "2d",
          format: Ub,
          mipLevelCount: Ob ? (0, lb.e)(wb, Mb) : 1,
          usage: Hb.h.TEXTURE_BINDING | Hb.h.COPY_DST | Hb.h.RENDER_ATTACHMENT
        }),
        Cb = (0, Vb.d)(bb, {
          addressModeU: Lb.addressModeU ?? "repeat",
          addressModeV: Lb.addressModeV ?? "repeat",
          minFilter: Lb.minFilter ?? "linear",
          magFilter: Lb.magFilter ?? "linear",
          mipmapFilter: Ob ? "linear" : "nearest"
        }),
        Eb = {
          texture: tb,
          view: tb.createView({
            dimension: "2d-array"
          }),
          sampler: Cb,
          width: wb,
          height: Mb,
          layers: gb
        };
      return (0, pb.b)(Eb), Eb
    }

    function Ib(bb, wb, Mb, Hb) {
      let pb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Mb < 0 || Mb >= wb.layers || (0 | Mb) !== Mb) && (0, eb.d)(723, wb.layers, Mb);
      const Vb = pb.invertY ?? !0,
        lb = pb.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: Hb,
        flipY: Vb
      }, {
        texture: wb.texture,
        origin: [0, 0, Mb],
        premultipliedAlpha: lb
      }, [wb.width, wb.height, 1]), wb.texture.mipLevelCount > 1 && (0, gb.generateMipmaps)(bb, wb.texture, Mb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);