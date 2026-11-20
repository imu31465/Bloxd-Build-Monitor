export const id = 295;
export const ids = [295];
export const modules = {
  40825: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Pb,
      i: () => yb,
      l: () => Xb,
      o: () => jb,
      p: () => Db,
      r: () => Zb
    });
    var Ab = Ub(40782);
    var Mb = "Babylon Lite v1.32.0",
      Tb = Ub(40830);

    function Eb(bb) {
      return "clientWidth" in bb
    }
    var Yb = 1;

    function Bb(bb, ab, Ub) {
      const Bb = ab.getContext("webgpu");
      Bb || (0, Ab.e)(54), Eb(ab) && ab.setAttribute("data-engine", Mb);
      const eb = Ub?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        vb = Ub?.srgb ? (Lb = eb).endsWith("-srgb") ? Lb : `${Lb}-srgb` : eb;
      var Lb;
      const Pb = Ub?.alphaMode ?? "opaque";
      Bb.configure({
        device: bb._device,
        format: eb,
        alphaMode: Pb,
        viewFormats: [vb]
      });
      const Xb = 1 === Ub?.msaaSamples ? 1 : 4,
        jb = (0, Tb.b)({
          lbl: "swapchain",
          format: vb,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return jb._eager = !0, {
        engine: bb,
        canvas: ab,
        format: vb,
        msaaSamples: Xb,
        scRT: jb,
        maxDevicePixelRatio: Ub?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Yb++,
        _context: Bb,
        _configureFormat: eb,
        _alphaMode: Pb,
        _renderingContexts: []
      }
    }

    function eb(bb) {
      const ab = bb._context.getCurrentTexture(),
        Ub = bb.scRT;
      Ub._colorTexture = ab, Ub._colorView = ab.createView({
        format: bb.format
      }), Ub._width = ab.width, Ub._height = ab.height
    }

    function vb(bb) {
      const ab = bb.canvas;
      if (!Eb(ab)) return;
      const Ub = bb._w ?? ab.clientWidth,
        Ab = bb._h ?? ab.clientHeight;
      if (!(Ub > 0 && Ab > 0)) return;
      const Mb = Math.min(globalThis.devicePixelRatio || 1, bb.maxDevicePixelRatio);
      Lb(bb, Ub * Mb | 0, Ab * Mb | 0)
    }

    function Lb(bb, ab, Ub) {
      const Ab = bb.canvas,
        Mb = 0 | ab,
        Tb = 0 | Ub;
      if (Mb > 0 && Tb > 0 && (Mb !== Ab.width || Tb !== Ab.height)) {
        Ab.width = Mb, Ab.height = Tb, bb.scRT._width = Mb, bb.scRT._height = Tb;
        for (const ab of bb._renderingContexts) ab._resize?.()
      }
    }
    var Pb = 0;

    function Xb(bb, ab) {
      return -1 !== bb._renderingContexts.indexOf(ab)
    }

    function jb(bb, ab) {
      return -1 === bb._renderingContexts.indexOf(ab) && (bb._renderingContexts.push(ab), !0)
    }
    var Rb = null;
    var kb = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function yb(bb, ab) {
      const Tb = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...Rb ? Rb() : {}
      });
      Tb || (0, Ab.e)(47);
      const Eb = Rb?.deviceFeatures?.(Tb, ab) ?? function(bb) {
          return kb.filter((ab => bb.features.has(ab)))
        }(Tb),
        Yb = await Tb.requestDevice({
          requiredFeatures: Eb,
          requiredLimits: ab?.requiredLimits
        });
      console.log(`${Mb} - WebGPU engine`);
      const Lb = !!ab?.useHighPrecisionMatrix,
        Pb = !!ab?.useFloatingOrigin;
      if (Pb && !Lb && (0, Ab.e)(48), Lb) {
        const {
          allocateF64Mat4: bb
        } = await Ub.e(349).then((() => Ub(60329)));
        0
      }
      let Xb, jb, yb, Zb;
      if (Pb) {
        const [{
          wrapRenderableForFO: bb,
          lightFoVersion: ab,
          applyLightFoOffset: Ab
        }, {
          makePackMeshWorld: Mb
        }] = await Promise.all([Ub.e(350).then((() => Ub(60338))), Ub.e(351).then((() => Ub(60340)))]);
        Xb = bb, jb = Mb, yb = ab, Zb = Ab
      }
      const Db = {
          _device: Yb
        },
        zb = [Db];
      return Object.assign(Db, {
        engine: Db,
        surfaces: zb,
        _surfaces: zb,
        _device: Yb,
        _options: ab,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Lb,
        useFloatingOrigin: Pb,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Xb,
        _makePackMeshWorld: jb,
        _lightFoVersion: yb,
        _applyLightFoOffset: Zb
      }, Bb(Db, bb, ab)), vb(Db), eb(Db), Db
    }

    function Zb(bb, ab, Ub) {
      Lb(bb, ab, Ub)
    }

    function Db(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.surfaces;
      if (Ub !== bb.surfaces)
        for (let Mb = Ub.length; Mb--;) Ub[Mb].engine !== bb && (0, Ab.e)(49);
      zb(bb, ab, Ub)
    }

    function zb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb._surfaces,
        Ab = 0;
      for (let Tb = Ub.length; Tb--;) Ab += Ub[Tb]._renderingContexts.length;
      if (!Ab) return bb.drawCallCount = 0, bb._flushGpuRetirements?.(bb);
      const Mb = bb._device.createCommandEncoder({
        label: "frame"
      });
      bb._currentEncoder = Mb, bb._currentDelta = ab;
      try {
        bb._gpuTimerBegin?.(Mb), Ab = 0;
        for (let bb = 0; bb < Ub.length; bb++) {
          const ab = Ub[bb];
          ab._capturePreFrame?.(ab), eb(ab);
          const Mb = ab._renderingContexts;
          for (let bb = 0; bb < Mb.length; bb++) {
            const ab = Mb[bb];
            ab._update(), Ab += ab._drawCallsPre + ab._record()
          }
        }
        const ab = bb._currentEncoder;
        for (let bb = 0; bb < Ub.length; bb++) {
          const Ab = Ub[bb];
          Ab._captureService?.(Ab, ab)
        }
        bb._gpuTimerEnd?.(ab), bb._cbs[0] = ab.finish(), bb._device.queue.submit(bb._cbs), bb._flushGpuRetirements?.(bb), bb.drawCallCount = Ab, bb._gpuTimerResolve?.()
      } finally {
        bb._currentEncoder = void 0
      }
    }
  },
  40784: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb,
      i: () => Tb,
      m: () => Ab
    });
    var Ab = globalThis.GPUTextureUsage,
      Mb = globalThis.GPUBufferUsage,
      Tb = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  40849: (bb, ab, Ub) => {
    function Ab(bb) {
      Mb(bb.splice(0))
    }

    function Mb(bb) {
      for (const Ub of bb) try {
        Ub()
      } catch (ab) {
        console.error("GPU resource retirement failed.", ab)
      }
    }

    function Tb(bb, ab) {
      bb._flushGpuRetirements ??= Eb, (bb._retirements ??= []).push(ab)
    }

    function Eb(bb) {
      const ab = bb._retirements;
      if (!ab) return;
      bb._retirements = null;
      const Ub = bb._retiring ??= new Set;
      Ub.add(ab), queueMicrotask((() => {
        bb._device.queue.onSubmittedWorkDone().then((() => {
          Ub.delete(ab), Ab(ab)
        })).catch((() => {}))
      }))
    }
    Ub.d(ab, {
      b: () => Tb
    })
  },
  40830: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      c: () => Eb,
      g: () => Yb
    });
    var Ab = Ub(40784);

    function Mb(bb) {
      const ab = bb.size;
      return "canvas" in ab ? ab.canvas : ab
    }

    function Tb(bb) {
      return {
        _descriptor: bb,
        _resolveSize: Mb,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Eb(bb, ab) {
      if (bb._eager) return void bb._syncEager?.(ab);
      Yb(bb);
      const Ub = bb._descriptor,
        {
          width: Tb,
          height: Eb
        } = (bb._resolveSize ?? Mb)(Ub);
      bb._width = Tb, bb._height = Eb;
      const Bb = ab._device;
      Ub.format && (bb._colorTexture = Bb.createTexture({
        label: Ub.lbl,
        size: {
          width: Tb,
          height: Eb
        },
        format: Ub.format,
        sampleCount: Ub.samples,
        usage: Ab.m.RENDER_ATTACHMENT | Ab.m.TEXTURE_BINDING | Ab.m.COPY_SRC | Ab.m.COPY_DST
      }), bb._colorView = bb._colorTexture.createView()), Ub.dFormat && (bb._depthTexture = Bb.createTexture({
        label: Ub.lbl,
        size: {
          width: Tb,
          height: Eb
        },
        format: Ub.dFormat,
        sampleCount: Ub.samples,
        usage: Ab.m.RENDER_ATTACHMENT | Ab.m.TEXTURE_BINDING
      }), bb._depthView = bb._depthTexture.createView())
    }

    function Yb(bb) {
      if (!bb || bb._eager && !bb._disposeAttachments) return;
      const ab = bb._colorTexture,
        Ub = bb._depthTexture;
      if (bb._colorTexture = bb._depthTexture = null, bb._colorView = bb._depthView = null, bb._width = bb._height = 0, bb._disposeAttachments) bb._disposeAttachments(ab, Ub);
      else try {
        ab?.destroy()
      } finally {
        !1 !== bb._ownsDepthTexture && Ub?.destroy()
      }
    }
  },
  40840: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab,
      e: () => Mb,
      f: () => Tb
    });
    var Ab = Float32Array,
      Mb = Float64Array,
      Tb = Uint32Array
  },
  40854: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    var Ab = 16
  },
  40782: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Mb
    });
    var Ab = null;

    function Mb(bb) {
      for (var ab = arguments.length, Ub = new Array(ab > 1 ? ab - 1 : 0), Mb = 1; Mb < ab; Mb++) Ub[Mb - 1] = arguments[Mb];
      const Tb = new Error(Ab?.(bb, Ub) ?? `#${bb}`);
      throw Tb.lite = Ub, Tb
    }
  },
  40810: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(40797);

    function Mb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Ub = ab.compare,
        Mb = ab.lodMinClamp ?? 0,
        Tb = ab.lodMaxClamp ?? 32,
        Eb = void 0 !== Ub || 0 !== Mb || 32 !== Tb ? `${Ub??""}:${Mb}:${Tb}` : "";
      return (0, Ab.d)(bb, ab, Eb)
    }
  },
  40790: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Tb
    });
    var Ab = null;

    function Mb(bb) {
      const ab = Ab ??= new WeakMap;
      ab.set(bb, (ab.get(bb) ?? 0) + 1)
    }

    function Tb(bb) {
      Mb(bb.texture)
    }
  },
  40797: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    var Ab = null,
      Mb = "nearest",
      Tb = "clamp-to-edge",
      Eb = {
        minFilter: Mb,
        magFilter: Mb,
        mipmapFilter: Mb,
        addressModeU: Tb,
        addressModeV: Tb,
        addressModeW: Tb,
        maxAnisotropy: 1
      };

    function Yb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Mb = bb._device,
        Tb = Ab ??= new WeakMap;
      let Yb = Tb.get(Mb);
      Yb || Tb.set(Mb, Yb = new Map);
      let Bb = Ub;
      for (const Ab in Eb) {
        const bb = Ab;
        Bb += `:${ab[bb]??Eb[bb]}`
      }
      let eb = Yb.get(Bb);
      return eb || Yb.set(Bb, eb = Mb.createSampler(ab)), eb
    }
  },
  40832: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => ub,
      h: () => ob
    });
    var Ab = Ub(40830),
      Mb = Ub(40825);

    function Tb(bb, ab) {
      ab._passes.length = 0, bb._currentProcessedTask = ab;
      try {
        ab.record()
      } finally {
        bb._currentProcessedTask = null
      }
    }
    var Eb = Ub(40840);

    function Yb(bb) {
      const ab = bb.worldMatrixVersion;
      if (bb._viewVer === ab) return bb._viewCache;
      const Ub = bb._viewCache,
        Ab = bb.worldMatrix,
        Mb = bb._useFloatingOrigin,
        Tb = Mb ? 0 : Ab[12],
        Eb = Mb ? 0 : Ab[13],
        Yb = Mb ? 0 : Ab[14];
      return Ub[0] = Ab[0], Ub[1] = Ab[4], Ub[2] = Ab[8], Ub[3] = 0, Ub[4] = Ab[1], Ub[5] = Ab[5], Ub[6] = Ab[9], Ub[7] = 0, Ub[8] = Ab[2], Ub[9] = Ab[6], Ub[10] = Ab[10], Ub[11] = 0, Ub[12] = -(Ab[0] * Tb + Ab[1] * Eb + Ab[2] * Yb), Ub[13] = -(Ab[4] * Tb + Ab[5] * Eb + Ab[6] * Yb), Ub[14] = -(Ab[8] * Tb + Ab[9] * Eb + Ab[10] * Yb), Ub[15] = 1, bb._viewVer = ab, Ub
    }
    var Bb = null;

    function eb(bb) {
      return bb._projFov === bb.fov && bb._projNear === bb.nearPlane && bb._projFar === bb.farPlane || (bb._projFov = bb.fov, bb._projNear = bb.nearPlane, bb._projFar = bb.farPlane, bb._projRev = (bb._projRev ?? 0) + 1), bb.worldMatrixVersion + (bb._projRev ?? 0)
    }

    function vb(bb, ab) {
      const Ub = eb(bb);
      if (bb._projVer === Ub && bb._projAspect === ab) return bb._projCache;
      const Ab = bb._projCache;
      return null !== Bb && bb.ortho ? Bb(bb, ab, Ab) : function(bb, ab, Ub, Ab, Mb) {
        const Tb = 1 / Math.tan(.5 * ab),
          Eb = Mb - Ab;
        bb[0] = Tb / Ub, bb[5] = Tb, bb[10] = -Ab / Eb, bb[11] = 1, bb[14] = Mb * Ab / Eb
      }(Ab, bb.fov, ab, bb.nearPlane, bb.farPlane), bb._projVer = Ub, bb._projAspect = ab, Ab
    }
    var Lb = Ub(40784);

    function Pb(bb, ab, Ub) {
      return bb._device.createBuffer({
        label: Ub,
        size: (Ab = ab, Mb = 16, Math.ceil(Ab / Mb) * Mb),
        usage: Lb.e.UNIFORM | Lb.e.COPY_DST
      });
      var Ab, Mb
    }
    var Xb = Ub(40849),
      jb = null;

    function Rb(bb) {
      const ab = bb._device,
        Ub = jb ??= new WeakMap;
      let Ab = Ub.get(ab);
      return Ab || (Ab = ab.createBindGroupLayout({
        label: "ZR",
        entries: [{
          binding: 0,
          visibility: Lb.i.VERTEX | Lb.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Lb.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), Ub.set(ab, Ab)), Ab
    }

    function kb(bb, ab, Ub) {
      const Ab = bb._device,
        Mb = Pb(bb, ab.byteLength, Ub);
      try {
        Ab.queue.writeBuffer(Mb, 0, ab.buffer, ab.byteOffset, ab.byteLength)
      } catch (Tb) {
        throw Mb.destroy(), Tb
      }
      return Mb
    }
    var yb = Ub(40854),
      Zb = new Eb.f(1),
      Db = new Eb.d(Zb.buffer);

    function zb(bb) {
      let ab = 0;
      for (const Ub of bb) ab += Ub._lightVersion ?? 0;
      return ab
    }

    function xb(bb, ab) {
      bb.fill(0);
      let Ub = 0;
      for (const Ab of ab) {
        if (Ub >= yb.b) break;
        Ab._writeLightUbo && (Ab._writeLightUbo(bb, 4 + 16 * Ub), Ub++)
      }
      Zb[0] = Ub, bb[0] = Db[0]
    }

    function ib(bb, ab) {
      let Ub = ab._lightGpuState;
      const Ab = 16 + 16 * yb.b * 4;
      if (Ub && Ub._byteSize === Ab) return Ub;
      const Mb = !Ub;
      Ub?._buffer.destroy();
      const Tb = new Eb.d(Ab / 4);
      return xb(Tb, ab.lights), bb._applyLightFoOffset?.(Tb, ab), Ub = {
        _buffer: kb(bb, Tb),
        _scratch: Tb,
        aG: zb(ab.lights) + (bb._lightFoVersion?.(ab) ?? 0),
        _listVersion: ab._lightListVersion ?? 0,
        _lightCount: ab.lights.length,
        _byteSize: Ab
      }, ab._lightGpuState = Ub, Mb && ab._disposables.push((() => {
        ab._lightGpuState?._buffer.destroy(), ab._lightGpuState = void 0
      })), Ub
    }

    function fb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Mb = ab;
      if (0 === Ab && 16 === Mb.length) return void bb.set(Mb, Ub);
      const Tb = Ab,
        Eb = Ub;
      bb[Eb + 0] = Mb[Tb + 0], bb[Eb + 1] = Mb[Tb + 1], bb[Eb + 2] = Mb[Tb + 2], bb[Eb + 3] = Mb[Tb + 3], bb[Eb + 4] = Mb[Tb + 4], bb[Eb + 5] = Mb[Tb + 5], bb[Eb + 6] = Mb[Tb + 6], bb[Eb + 7] = Mb[Tb + 7], bb[Eb + 8] = Mb[Tb + 8], bb[Eb + 9] = Mb[Tb + 9], bb[Eb + 10] = Mb[Tb + 10], bb[Eb + 11] = Mb[Tb + 11], bb[Eb + 12] = Mb[Tb + 12], bb[Eb + 13] = Mb[Tb + 13], bb[Eb + 14] = Mb[Tb + 14], bb[Eb + 15] = Mb[Tb + 15]
    }

    function mb(bb, ab, Ub, Ab, Mb) {
      bb.fill(0);
      const Tb = function(bb, ab) {
          const Ub = eb(bb);
          if (bb._vpVer === Ub && bb._vpAspect === ab) return bb._vpCache;
          const Ab = bb._vpCache;
          return function(bb, ab, Ub, Ab, Mb, Tb) {
            const Eb = Ub[Ab],
              Yb = Ub[Ab + 1],
              Bb = Ub[Ab + 2],
              eb = Ub[Ab + 3],
              vb = Ub[Ab + 4],
              Lb = Ub[Ab + 5],
              Pb = Ub[Ab + 6],
              Xb = Ub[Ab + 7],
              jb = Ub[Ab + 8],
              Rb = Ub[Ab + 9],
              kb = Ub[Ab + 10],
              yb = Ub[Ab + 11],
              Zb = Ub[Ab + 12],
              Db = Ub[Ab + 13],
              zb = Ub[Ab + 14],
              xb = Ub[Ab + 15];
            let ib = Mb[Tb],
              fb = Mb[Tb + 1],
              mb = Mb[Tb + 2],
              pb = Mb[Tb + 3];
            bb[ab] = Eb * ib + vb * fb + jb * mb + Zb * pb, bb[ab + 1] = Yb * ib + Lb * fb + Rb * mb + Db * pb, bb[ab + 2] = Bb * ib + Pb * fb + kb * mb + zb * pb, bb[ab + 3] = eb * ib + Xb * fb + yb * mb + xb * pb, ib = Mb[Tb + 4], fb = Mb[Tb + 5], mb = Mb[Tb + 6], pb = Mb[Tb + 7], bb[ab + 4] = Eb * ib + vb * fb + jb * mb + Zb * pb, bb[ab + 5] = Yb * ib + Lb * fb + Rb * mb + Db * pb, bb[ab + 6] = Bb * ib + Pb * fb + kb * mb + zb * pb, bb[ab + 7] = eb * ib + Xb * fb + yb * mb + xb * pb, ib = Mb[Tb + 8], fb = Mb[Tb + 9], mb = Mb[Tb + 10], pb = Mb[Tb + 11], bb[ab + 8] = Eb * ib + vb * fb + jb * mb + Zb * pb, bb[ab + 9] = Yb * ib + Lb * fb + Rb * mb + Db * pb, bb[ab + 10] = Bb * ib + Pb * fb + kb * mb + zb * pb, bb[ab + 11] = eb * ib + Xb * fb + yb * mb + xb * pb, ib = Mb[Tb + 12], fb = Mb[Tb + 13], mb = Mb[Tb + 14], pb = Mb[Tb + 15], bb[ab + 12] = Eb * ib + vb * fb + jb * mb + Zb * pb, bb[ab + 13] = Yb * ib + Lb * fb + Rb * mb + Db * pb, bb[ab + 14] = Bb * ib + Pb * fb + kb * mb + zb * pb, bb[ab + 15] = eb * ib + Xb * fb + yb * mb + xb * pb
          }(Ab, 0, vb(bb, ab), 0, Yb(bb), 0), bb._vpVer = Ub, bb._vpAspect = ab, Ab
        }(Ab, Mb),
        Eb = Yb(Ab),
        Bb = Ab.worldMatrix;
      fb(bb, Tb, 0), fb(bb, Eb, 16), ab.useFloatingOrigin ? (bb[32] = 0, bb[33] = 0, bb[34] = 0) : (bb[32] = Bb[12], bb[33] = Bb[13], bb[34] = Bb[14]), bb[87] = ab.canvas.width;
      const Lb = Ub.imageProcessing;
      bb[76] = Lb.exposure, bb[77] = Lb.contrast, bb[78] = Ub._envTextures?.lodGenerationScale ?? .8, bb[79] = +Lb.toneMappingEnabled, bb[37] = ab.canvas.height
    }

    function pb(bb, ab) {
      return {
        _renderables: bb,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: ab
      }
    }

    function Nb(bb, ab, Ub) {
      bb.clr ??= !0;
      const Mb = bb.rt._descriptor,
        Tb = bb.depth?._descriptor,
        Bb = {
          _colorFormat: Mb.format,
          _depthStencilFormat: Tb?.dFormat ?? Mb.dFormat,
          _depthCompare: Mb.depthCompare ?? Tb?.depthCompare,
          _sampleCount: Mb.samples
        },
        vb = {
          loadOp: "clear",
          storeOp: "store"
        },
        Lb = {
          ...pb([], -1),
          name: bb.name,
          _config: bb,
          _ownsTargets: !bb.sharedRt,
          engine: ab,
          ZR: Ub,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [vb]
          },
          _colorAttachment: vb,
          _sceneUBO: Pb(ab, 368),
          _suData: new Eb.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: Bb,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Lb._disposed) throw new Error("RenderTask has been disposed.");
            Lb._recordExplicit ? Lb._recordExplicit(Lb, !0) : Ib(Lb, !1 !== bb.autoMirror ? Ub._renderables.slice() : Lb._renderables, !0)
          },
          execute: () => function(bb, ab, Ub) {
            if (!1 === bb.enabled) return 0;
            const Ab = bb.ZR;
            ! function(bb, ab, Ub) {
              const Ab = bb.ZR;
              !1 !== bb._config.autoMirror && bb._lastVersion !== Ab._renderableVersion && Ib(bb, Ab._renderables.slice());
              Fb(bb, ab);
              const Mb = bb._updateContext,
                Tb = bb._config.cam ?? Ab.camera;
              Ub._colorFormat && (bb._config._skipClusteredLights || Ab._clusteredLightUpdater?.(Tb, Mb.targetWidth, Mb.targetHeight), function(bb, ab) {
                const Ub = ib(bb, ab),
                  Ab = zb(ab.lights) + (bb._lightFoVersion?.(ab) ?? 0),
                  Mb = ab._lightListVersion ?? 0;
                Ab === Ub.aG && Mb === Ub._listVersion && ab.lights.length === Ub._lightCount || (Ub.aG = Ab, Ub._listVersion = Mb, Ub._lightCount = ab.lights.length, xb(Ub._scratch, ab.lights), bb._applyLightFoOffset?.(Ub._scratch, ab), bb._device.queue.writeBuffer(Ub._buffer, 0, Ub._scratch)), Ub._buffer
              }(ab, Ab));
              (function(bb, ab, Ub, Ab) {
                if (!Ab) return;
                const Mb = Ab.viewport,
                  Tb = bb._config.rt,
                  Eb = (bb._config.cs ? ab.canvas.width / ab.canvas.height : Tb._width / Tb._height) * (Mb ? Mb.width / Mb.height : 1),
                  Yb = Ub.fog,
                  Bb = Ub.imageProcessing,
                  vb = eb(Ab),
                  Lb = Ub._envTextures,
                  Pb = bb._sceneUboCacheKey;
                if (Pb[0] === Ab && Pb[1] === Yb && Pb[2] === vb && Pb[3] === Eb && Pb[4] === Bb.exposure && Pb[5] === Bb.contrast && Pb[6] === Lb) return;
                Pb[0] = Ab, Pb[1] = Yb, Pb[2] = vb, Pb[3] = Eb, Pb[4] = Bb.exposure, Pb[5] = Bb.contrast, Pb[6] = Lb;
                const Xb = bb._suData;
                mb(Xb, ab, Ub, Ab, Eb);
                const jb = Ub._sceneUboContributors;
                if (jb)
                  for (const eb of jb) eb(Xb, Ub);
                ab._device.queue.writeBuffer(bb._sceneUBO, 0, Xb)
              })(bb, ab, Ab, Tb), Mb.lC = Tb, bb._batchState?._reset(), hb(bb._opaqueBindings, Mb), hb(bb._directBindings, Mb), hb(bb._transparentBindings, Mb), bb._batchState?._flush(ab),
                function(bb, ab) {
                  const Ub = bb._transparentBindings;
                  if (Ub.length <= 1 || !ab) return;
                  const Ab = Yb(ab);
                  for (const Mb of Ub) {
                    const bb = Mb.renderable._worldCenter;
                    Mb._sortDistance = bb ? bb[0] * Ab[2] + bb[1] * Ab[6] + bb[2] * Ab[10] + Ab[14] : 0
                  }
                  Ub.sort(Wb)
                }(bb, Tb)
            }(bb, ab, Ub);
            const Mb = bb._colorAttachment,
              Tb = bb._config;
            Tb.rt._colorView && (Tb.rt === Ab.surface.scRT && (Mb.view = Tb.rt._colorView), Mb.resolveTarget = Tb.rst?._colorView ?? void 0, Mb.clearValue = Tb.clrColor ?? Ab.clearColor, Mb.loadOp = Tb.clr ? "clear" : "load");
            if (bb._executeWithTransmission) return bb._executeWithTransmission(Ub._sampleCount);
            const Eb = ab._currentEncoder.beginRenderPass(bb._renderPassDescriptor),
              Bb = db(bb, Eb);
            return Eb.end(), Bb
          }(Lb, ab, Bb),
          dispose() {
            if (Lb._disposed) return;
            Lb._disposed = !0;
            const ab = Lb._pendingMeshes;
            ab && (ab.length = 0);
            for (const bb of Lb._renderables) Lb._retireRenderable?.(Lb.engine, bb);
            Lb._passes.length = Lb._opaqueBindings.length = Lb._directBindings.length = 0, Lb._transparentBindings.length = Lb._renderables.length = Lb._ob.length = 0, Lb._ownsTargets && ((0, Ab.g)(bb.rt), (0, Ab.g)(bb.rst)), bb.depth?._eager || (0, Ab.g)(bb.depth);
            const Ub = Lb._sceneUBO;
            (0, Xb.b)(Lb.engine, (() => Ub.destroy())), Lb._batchState?._release(Lb.engine), Lb._batchState = void 0
          }
        };
      return Lb
    }

    function Wb(bb, ab) {
      return ab._sortDistance - bb._sortDistance || bb.renderable.order - ab.renderable.order
    }

    function Hb(bb, ab) {
      return bb.renderable.order - ab.renderable.order
    }

    function Ib(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb._renderables,
        Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Mb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Tb = arguments.length > 4 ? arguments[4] : void 0;
      const Eb = bb._config,
        Yb = Eb.rt,
        Bb = bb._batchState,
        eb = pb(ab, bb.ZR._renderableVersion);
      if (Ub) {
        const ab = (ab, Ub) => {
          ab && (Ub || bb._ownsTargets || ab._eager) && (0, Ab.c)(ab, bb.engine)
        };
        ab(Yb), Yb._descriptor.samples > 1 && ab(Eb.rst), ab(Eb.depth, !0)
      }
      const {
        _opaqueBindings: vb,
        _directBindings: Lb,
        _transparentBindings: Pb
      } = eb;
      try {
        for (const Ub of ab) {
          const ab = Ub.bind(bb.engine, bb._targetSignature);
          eb._batchState = bb._targetSignature._collectBatches?.(eb._batchState, ab), Ub.isTransparent || Ub._transmissive ? Pb.push(ab) : Ub._direct ? Lb.push(ab) : vb.push(ab)
        }
        vb.sort(Hb), Lb.sort(Hb), Ub && Fb(bb, bb.engine, !1)
      } catch (Xb) {
        throw eb._batchState?._release(void 0, Tb ?? [Bb]), Xb
      }
      return Ub && (! function(bb, ab) {
        const Ub = bb._config,
          Ab = bb._colorAttachment;
        Ab.view = ab._colorView, bb._renderPassDescriptor.colorAttachments = ab._colorView ? [Ab] : [];
        const Mb = Ub.depth ?? ab,
          Tb = Mb._depthView;
        let Eb;
        if (Tb) {
          const bb = Mb._descriptor,
            ab = (Ub.depth ? Mb._eager : !1 === Ub.depthClear) ? "load" : "clear";
          Eb = {
            view: Tb,
            depthClearValue: bb.depthClearValue ?? 0,
            depthLoadOp: ab,
            depthStoreOp: "store"
          }, bb.dFormat?.includes("stencil") && (Eb.stencilClearValue = 0, Eb.stencilLoadOp = ab, Eb.stencilStoreOp = "store")
        }
        bb._renderPassDescriptor.depthStencilAttachment = Eb
      }(bb, Yb), bb._updateContext.targetWidth = Yb._width, bb._updateContext.targetHeight = Yb._height), Mb && (Object.assign(bb, eb), Bb?._release(bb.engine, [eb._batchState])), eb
    }

    function db(bb, ab) {
      const Ub = bb.engine,
        Ab = bb._config,
        Tb = Ab.rt,
        Eb = bb.ZR,
        Yb = bb._opaqueBindings,
        Bb = bb._ob,
        eb = bb._sceneBG;
      if (function(bb, ab, Ub, Ab) {
          const Mb = ab?.viewport;
          if (!Mb) return;
          const Tb = Math.floor(Mb.x * Ub),
            Eb = Math.floor((1 - Mb.y - Mb.height) * Ab),
            Yb = Math.ceil((Mb.x + Mb.width) * Ub) - Tb,
            Bb = Math.ceil((1 - Mb.y) * Ab) - Eb;
          bb.setViewport(Tb, Eb, Yb, Bb, 0, 1), bb.setScissorRect(Tb, Eb, Yb, Bb)
        }(ab, Ab.cam ?? Eb.camera, Tb._width, Tb._height), ab.setBindGroup(0, eb), bb._lastVis !== Mb.e || !Bb.length) {
        const ab = Tb._descriptor,
          Ab = Ub._device.createRenderBundleEncoder({
            colorFormats: ab.format ? [ab.format] : [],
            depthStencilFormat: bb._targetSignature._depthStencilFormat,
            sampleCount: ab.samples
          });
        Ab.setBindGroup(0, eb), Gb(Ab, Yb, Ub), Bb[0] = Ab.finish(), bb._lastVis = Mb.e
      }
      let vb = Yb.length;
      return ab.executeBundles(Bb), ab.setBindGroup(0, eb), vb += Gb(ab, bb._directBindings, Ub), vb += Gb(ab, bb._transparentBindings, Ub), vb
    }

    function Fb(bb, ab) {
      let Ub = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Ab = ib(ab, bb.ZR)._buffer;
      if (Ab === bb._lightsUBO) return;
      const Mb = ab._device.createBindGroup({
        layout: Rb(ab),
        entries: [{
          binding: 0,
          resource: {
            buffer: bb._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Ab
          }
        }]
      });
      bb._lightsUBO = Ab, bb._sceneBG = Mb, Ub && (bb._ob = [])
    }

    function hb(bb, ab) {
      for (const Ub of bb) Ub.update?.(ab)
    }

    function Gb(bb, ab, Ub) {
      let Ab = null,
        Mb = 0;
      for (const Tb of ab) {
        const ab = Tb.renderable.mesh;
        ab && !1 === ab.visible || (Tb.pipeline !== Ab && (bb.setPipeline(Tb.pipeline), Ab = Tb.pipeline), Mb += Tb.draw(bb, Ub))
      }
      return Mb
    }

    function Qb(bb) {
      const ab = bb._materialSwapQueue;
      if (!ab[0] || bb._runtimeBuilds?.w) return;
      let Ab, Mb, Tb;
      const Eb = bb._renderables;
      for (const Ub of ab) {
        const ab = Ub.material;
        if (!ab) continue;
        const Yb = Ub._runtimeThinBuild;
        if (Yb) {
          Mb = Yb(bb, Ub, Mb);
          continue
        }
        const Bb = bb._groups.get(ab._buildGroup),
          eb = Bb?.r;
        if (!eb) {
          (Tb ??= []).push(Ub);
          continue
        }
        if (Bb._w?.(Ub)) {
          (Tb ??= []).push([Ub, ab]);
          continue
        }
        const vb = bb._meshDisposables.get(Ub);
        vb && (bb._meshDisposables.delete(Ub), (0, Xb.b)(bb.surface.engine, (() => vb.forEach((bb => bb())))));
        const Lb = Bb.o;
        let Pb;
        for (let bb = Eb.length; bb--;) Eb[bb].mesh === Ub && (Pb = Eb.splice(bb, 1)[0]);
        ab._csmGen = -~ab._csmGen;
        const jb = eb(bb, Ub);
        if (Lb) {
          const bb = Lb.indexOf(Pb);
          bb < 0 ? Lb.push(jb) : Lb[bb] = jb
        }
        Ab = Eb.push(jb)
      }
      if (Ab && (Eb.sort(((bb, ab) => bb.order - ab.order)), bb._renderableVersion++, bb._materialEpoch++), ab.length = 0, !Tb) return Mb;
      const Yb = Tb;
      return Ub.e(355).then((() => Ub(60359))).then((ab => {
        let {
          C: Ub
        } = ab;
        return Ub(bb, Yb, Mb)
      }), (ab => {
        const Ub = bb._runtimeBuilds;
        Ub ? Ub._x(ab) : console.error(ab)
      }))
    }
    var qb = null;

    function ub(bb, ab) {
      const Ub = bb.engine,
        Mb = {
          _kind: "ZR",
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
            Ub.useFloatingOrigin && Mb.camera && !Mb.camera._useFloatingOrigin && (Mb.camera._useFloatingOrigin = !0, Mb.camera._viewVer = -1, Mb.camera._vpVer = -1);
            const bb = Mb.fixedDeltaMs > 0 ? Mb.fixedDeltaMs : Ub._currentDelta,
              ab = Ub._currentEncoder;
            let Ab = 0;
            for (const Ub of Mb._beforeRender) Ub(bb);
            Mb._materialSwapQueue.length && Qb(Mb);
            for (const Tb of Mb._prePasses) Ab += Tb.execute(ab, Ub);
            for (const Tb of Mb._uniformUpdaters) Tb.update(Ub);
            Mb._drawCallsPre = Ab
          },
          _record: () => Mb._frameGraph.execute(),
          _resize() {
            Mb._frameGraph.build()
          }
        },
        Eb = function() {
          const bb = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let ab = 0; ab < bb._tasks.length; ab++) Tb(bb, bb._tasks[ab]);
              for (const ab of bb._tasks)
                for (const bb of ab._passes) bb._initialize()
            },
            execute() {
              let ab = 0;
              for (const Ub of bb._tasks)
                if (!1 !== Ub.executionEnabled)
                  if (Ub.execute) ab += Ub.execute();
                  else
                    for (const bb of Ub._passes) ab += bb._execute();
              return ab
            },
            dispose() {
              for (const ab of bb._tasks) ab.dispose();
              bb._tasks.length = 0, bb._currentProcessedTask = null
            }
          };
          return bb
        }();
      if (Mb._frameGraph = Eb, !1 !== ab?.defaultRenderTask) {
        const ab = bb.msaaSamples > 1,
          Tb = ab ? (0, Ab.b)({
            lbl: "scene-color",
            format: bb.format,
            dFormat: "depth24plus-stencil8",
            samples: bb.msaaSamples,
            size: bb
          }) : bb.scRT,
          Yb = ab ? void 0 : (0, Ab.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: bb
          });
        ! function(bb, ab) {
          bb._tasks.push(ab)
        }(Eb, Nb({
          name: "ZR",
          rt: Tb,
          rst: ab ? bb.scRT : void 0,
          depth: Yb
        }, Ub, Mb))
      }
      return Mb._disposables.push((() => Eb.dispose())), Mb
    }
    async function rb(bb) {
      const ab = bb;
      for (ab._built || (ab._materialSwapQueue.length = 0); ab._deferredBuilders.length;) {
        const bb = ab._deferredBuilders.splice(0);
        await Promise.all(bb.map((bb => bb())))
      }
      await Qb(ab), qb?.get(ab)?.() || (ab._runtimeBuilds?._e(), ab._renderableVersion++, ab._built = !0), await (ab._rebuildHook?.(ab))
    }
    var Kb = null;
    async function ob(bb) {
      const ab = bb,
        Ab = ab.surface;
      (0, Mb.l)(Ab, ab) || (await rb(bb), ab._renderables.sort(lb), await Promise.all(ab._frameGraph._tasks.map((bb => bb._preload?.()))), Kb && await Kb(ab), ab._frameGraph.build(), Ab._renderingContexts[0] && (await Ub.e(353).then((() => Ub(60348)))).configureSwapchainOverlayScene(Ab, ab), qb?.get(ab)?.() || (0, Mb.o)(Ab, ab))
    }
    var lb = (bb, ab) => bb.order - ab.order
  },
  40822: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => eb,
      e: () => vb
    });
    var Ab = Ub(40782),
      Mb = Ub(40784),
      Tb = Ub(40790),
      Eb = Ub(40797),
      Yb = Ub(40800),
      Bb = Ub(40807);

    function eb(bb, ab, Ub) {
      let Yb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (ab < 1 || Ub < 1) && (0, Ab.e)(676, ab, Ub);
      const eb = bb._device,
        vb = Yb.mipMaps ?? !1,
        Lb = Yb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Pb = vb ? (0, Bb.c)(ab, Ub) : 1,
        Xb = eb.createTexture({
          size: {
            width: ab,
            height: Ub
          },
          format: Lb,
          mipLevelCount: Pb,
          usage: Mb.m.TEXTURE_BINDING | Mb.m.COPY_DST | Mb.m.RENDER_ATTACHMENT
        }),
        jb = {
          addressModeU: Yb.addressModeU ?? "clamp-to-edge",
          addressModeV: Yb.addressModeV ?? "clamp-to-edge",
          minFilter: Yb.minFilter ?? "linear",
          magFilter: Yb.magFilter ?? "linear",
          mipmapFilter: vb ? "linear" : "nearest"
        },
        Rb = (0, Eb.d)(bb, jb),
        kb = {
          texture: Xb,
          view: Xb.createView(),
          sampler: Rb,
          width: ab,
          height: Ub
        };
      return (0, Tb.c)(kb), bb._dlr && bb._dlr.t(kb, {
        kind: "dynamic",
        width: ab,
        height: Ub,
        format: Lb,
        levels: Pb,
        samplerDesc: jb,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), kb
    }

    function vb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Mb = Ab.invertY ?? !0,
        Tb = Ab.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: Ub,
        flipY: Mb
      }, {
        texture: ab.texture,
        premultipliedAlpha: Tb
      }, [ab.width, ab.height]);
      const Eb = ab._recoverySource;
      Eb && "dynamic" === Eb.kind && (Eb.source = Ub, Eb.flipY = Mb, Eb.premultipliedAlpha = Tb), ab.texture.mipLevelCount > 1 && (0, Yb.generateMipmaps)(bb, ab.texture)
    }
  },
  40816: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Bb
    });
    var Ab = Ub(40782),
      Mb = Ub(40784),
      Tb = Ub(40790),
      Eb = Ub(40797),
      Yb = Ub(40807);
    async function Bb(bb, ab) {
      let Bb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [eb, vb] = function(bb) {
        const ab = bb,
          Ub = [
            [ab.displayWidth, ab.displayHeight],
            [ab.videoWidth, ab.videoHeight],
            [ab.naturalWidth, ab.naturalHeight],
            [ab.width, ab.height]
          ];
        for (const [Ab, Mb] of Ub)
          if (void 0 !== Ab && void 0 !== Mb && Number.isInteger(Ab) && Number.isInteger(Mb) && Ab > 0 && Mb > 0) return [Ab, Mb];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(ab), [Lb, Pb] = function(bb, ab, Ub) {
        if (void 0 === Ub) return [bb, ab];
        if (!Number.isInteger(Ub) || Ub < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${Ub})`);
        if (Math.max(bb, ab) <= Ub) return [bb, ab];
        const Ab = Ub / Math.max(bb, ab);
        return bb >= ab ? [Ub, Math.max(1, Math.round(ab * Ab))] : [Math.max(1, Math.round(bb * Ab)), Ub]
      }(eb, vb, Bb.maxDimension), Xb = Bb.mipMaps ?? !0, jb = Bb.premultiplyAlpha ?? !1;
      let Rb = ab,
        kb = null;
      const yb = {
        texture: null
      };
      try {
        Lb === eb && Pb === vb || (kb = await createImageBitmap(ab, {
          resizeWidth: Lb,
          resizeHeight: Pb,
          resizeQuality: "high",
          premultiplyAlpha: jb ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), Rb = kb);
        const Zb = bb._device,
          Db = Bb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          zb = Xb ? (0, Yb.c)(Lb, Pb) : 1,
          xb = zb > 1 ? (await Promise.resolve().then((() => Ub(40800)))).generateMipmaps : null,
          ib = {
            addressModeU: Bb.addressModeU ?? "repeat",
            addressModeV: Bb.addressModeV ?? "repeat",
            minFilter: Bb.minFilter ?? "linear",
            magFilter: Bb.magFilter ?? "linear",
            mipmapFilter: Xb ? "linear" : "nearest"
          };
        ib.maxAnisotropy = "linear" === ib.minFilter && "linear" === ib.magFilter && "linear" === ib.mipmapFilter ? 4 : 1;
        const fb = Bb.invertY ?? !0,
          mb = async ab => {
            let Ub;
            Zb.pushErrorScope("validation"), Zb.pushErrorScope("out-of-memory");
            let Tb = null;
            try {
              const Ub = yb.texture = Zb.createTexture({
                size: {
                  width: Lb,
                  height: Pb
                },
                format: Db,
                mipLevelCount: zb,
                usage: Mb.m.TEXTURE_BINDING | Mb.m.COPY_DST | Mb.m.RENDER_ATTACHMENT
              });
              Zb.queue.copyExternalImageToTexture({
                source: ab,
                flipY: fb
              }, {
                texture: Ub,
                premultipliedAlpha: jb
              }, {
                width: Lb,
                height: Pb
              }), xb && xb(bb, Ub), Tb = (0, Eb.d)(bb, ib)
            } catch (Xb) {
              Ub = Xb
            }
            const [Yb, Bb] = await Promise.all([Zb.popErrorScope(), Zb.popErrorScope()]);
            if (Ub) throw Ub;
            const eb = Bb ?? Yb;
            if (eb) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${eb.message}`, {
              cause: eb
            });
            const vb = yb.texture;
            return vb && Tb || (0, Ab.e)(677), {
              texture: vb,
              view: vb.createView(),
              sampler: Tb,
              width: Lb,
              height: Pb
            }
          }, pb = await (bb._dlr?.x(Rb, Lb, Pb, Db, zb, ib, fb, jb, mb)) ?? await mb(Rb);
        return (0, Tb.c)(pb), pb
      } catch (Zb) {
        throw yb.texture?.destroy(), Zb
      } finally {
        kb?.close()
      }
    }
  },
  40800: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      generateMipmaps: () => Xb,
      recordMipmaps: () => jb
    });
    var Ab = Ub(40784),
      Mb = Ub(40797),
      Tb = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Eb = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Yb = null,
      Bb = null,
      eb = null,
      vb = null,
      Lb = null;

    function Pb(bb) {
      const ab = bb._device;
      ab !== Lb && (Yb?.clear(), Yb = null, Bb = null, eb = null, vb = null, Lb = null, Lb = ab), Bb ??= ab.createShaderModule({
        code: Eb
      }), eb ??= function(bb) {
        return (0, Mb.d)(bb, Tb)
      }(bb), vb ??= ab.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Ab.i.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Ab.i.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Xb(bb, ab, Ub) {
      const Ab = bb._device,
        Mb = Ab.createCommandEncoder();
      jb(bb, ab, Mb, Ub), Ab.queue.submit([Mb.finish()])
    }

    function jb(bb, ab, Ub, Ab) {
      if (ab.mipLevelCount <= 1) return;
      const Mb = bb._device,
        Tb = function(bb, ab) {
          const Ub = bb._device;
          Pb(bb), Yb ??= new Map;
          let Ab = Yb.get(ab);
          return Ab || (Ab = Ub.createRenderPipeline({
            layout: Ub.createPipelineLayout({
              bindGroupLayouts: [vb]
            }),
            vertex: {
              module: Bb,
              entryPoint: "vs"
            },
            fragment: {
              module: Bb,
              entryPoint: "fs",
              targets: [{
                format: ab
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Yb.set(ab, Ab)), Ab
        }(bb, ab.format),
        Eb = null != Ab ? {
          dimension: "2d",
          baseArrayLayer: Ab,
          arrayLayerCount: 1
        } : {};
      for (let Yb = 1; Yb < ab.mipLevelCount; Yb++) {
        const bb = ab.createView({
            baseMipLevel: Yb - 1,
            mipLevelCount: 1,
            ...Eb
          }),
          Ab = ab.createView({
            baseMipLevel: Yb,
            mipLevelCount: 1,
            ...Eb
          }),
          Bb = Mb.createBindGroup({
            layout: vb,
            entries: [{
              binding: 0,
              resource: bb
            }, {
              binding: 1,
              resource: eb
            }]
          }),
          Lb = Ub.beginRenderPass({
            colorAttachments: [{
              view: Ab,
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
        Lb.setPipeline(Tb), Lb.setBindGroup(0, Bb), Lb.draw(3), Lb.end()
      }
    }
  },
  40807: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      return Math.floor(Math.log2(Math.max(bb, ab))) + 1
    }
    Ub.d(ab, {
      c: () => Ab
    })
  },
  40779: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => eb,
      g: () => vb
    });
    var Ab = Ub(40782),
      Mb = Ub(40784),
      Tb = Ub(40790),
      Eb = Ub(40797),
      Yb = Ub(40800),
      Bb = Ub(40807);

    function eb(bb, ab, Ub, Yb) {
      let eb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ab < 1 || Ub < 1 || Yb < 1) && (0, Ab.e)(722, ab, Ub, Yb);
      const vb = bb._device,
        Lb = eb.mipMaps ?? !0,
        Pb = eb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Xb = vb.createTexture({
          size: {
            width: ab,
            height: Ub,
            depthOrArrayLayers: Yb
          },
          dimension: "2d",
          format: Pb,
          mipLevelCount: Lb ? (0, Bb.c)(ab, Ub) : 1,
          usage: Mb.m.TEXTURE_BINDING | Mb.m.COPY_DST | Mb.m.RENDER_ATTACHMENT
        }),
        jb = (0, Eb.d)(bb, {
          addressModeU: eb.addressModeU ?? "repeat",
          addressModeV: eb.addressModeV ?? "repeat",
          minFilter: eb.minFilter ?? "linear",
          magFilter: eb.magFilter ?? "linear",
          mipmapFilter: Lb ? "linear" : "nearest"
        }),
        Rb = {
          texture: Xb,
          view: Xb.createView({
            dimension: "2d-array"
          }),
          sampler: jb,
          width: ab,
          height: Ub,
          layers: Yb
        };
      return (0, Tb.c)(Rb), Rb
    }

    function vb(bb, ab, Ub, Mb) {
      let Tb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Ub < 0 || Ub >= ab.layers || (0 | Ub) !== Ub) && (0, Ab.e)(723, ab.layers, Ub);
      const Eb = Tb.invertY ?? !0,
        Bb = Tb.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: Mb,
        flipY: Eb
      }, {
        texture: ab.texture,
        origin: [0, 0, Ub],
        premultipliedAlpha: Bb
      }, [ab.width, ab.height, 1]), ab.texture.mipLevelCount > 1 && (0, Yb.generateMipmaps)(bb, ab.texture, Ub)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);