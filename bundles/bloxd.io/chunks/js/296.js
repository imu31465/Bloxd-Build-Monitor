export const id = 296;
export const ids = [296];
export const modules = {
  41164: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => wb,
      e: () => Ab,
      f: () => Zb,
      g: () => Xb,
      h: () => Kb,
      k: () => lb
    });
    var Bb = hb(41121);
    var Ob = "Babylon Lite v1.32.0",
      Gb = hb(41173);

    function Ub(bb) {
      return "clientWidth" in bb
    }
    var Lb = 1;

    function Yb(bb, ub, hb) {
      const Yb = ub.getContext("webgpu");
      Yb || (0, Bb.e)(54), Ub(ub) && ub.setAttribute("data-engine", Ob);
      const Sb = hb?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        ab = hb?.srgb ? (Hb = Sb).endsWith("-srgb") ? Hb : `${Hb}-srgb` : Sb;
      var Hb;
      const wb = hb?.alphaMode ?? "opaque";
      Yb.configure({
        device: bb._device,
        format: Sb,
        alphaMode: wb,
        viewFormats: [ab]
      });
      const Zb = 1 === hb?.msaaSamples ? 1 : 4,
        Xb = (0, Gb.e)({
          lbl: "swapchain",
          format: ab,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Xb._eager = !0, {
        engine: bb,
        canvas: ub,
        format: ab,
        msaaSamples: Zb,
        scRT: Xb,
        maxDevicePixelRatio: hb?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Lb++,
        _context: Yb,
        _configureFormat: Sb,
        _alphaMode: wb,
        _renderingContexts: []
      }
    }

    function Sb(bb) {
      const ub = bb._context.getCurrentTexture(),
        hb = bb.scRT;
      hb._colorTexture = ub, hb._colorView = ub.createView({
        format: bb.format
      }), hb._width = ub.width, hb._height = ub.height
    }

    function ab(bb) {
      const ub = bb.canvas;
      if (!Ub(ub)) return;
      const hb = bb._w ?? ub.clientWidth,
        Bb = bb._h ?? ub.clientHeight;
      if (!(hb > 0 && Bb > 0)) return;
      const Ob = Math.min(globalThis.devicePixelRatio || 1, bb.maxDevicePixelRatio);
      Hb(bb, hb * Ob | 0, Bb * Ob | 0)
    }

    function Hb(bb, ub, hb) {
      const Bb = bb.canvas,
        Ob = 0 | ub,
        Gb = 0 | hb;
      if (Ob > 0 && Gb > 0 && (Ob !== Bb.width || Gb !== Bb.height)) {
        Bb.width = Ob, Bb.height = Gb, bb.scRT._width = Ob, bb.scRT._height = Gb;
        for (const ub of bb._renderingContexts) ub._resize?.()
      }
    }
    var wb = 0;

    function Zb(bb, ub) {
      return -1 !== bb._renderingContexts.indexOf(ub)
    }

    function Xb(bb, ub) {
      return -1 === bb._renderingContexts.indexOf(ub) && (bb._renderingContexts.push(ub), !0)
    }
    var pb = null;
    var ob = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Ab(bb, ub) {
      const Gb = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...pb ? pb() : {}
      });
      Gb || (0, Bb.e)(47);
      const Ub = pb?.deviceFeatures?.(Gb, ub) ?? function(bb) {
          return ob.filter((ub => bb.features.has(ub)))
        }(Gb),
        Lb = await Gb.requestDevice({
          requiredFeatures: Ub,
          requiredLimits: ub?.requiredLimits
        });
      console.log(`${Ob} - WebGPU engine`);
      const Hb = !!ub?.useHighPrecisionMatrix,
        wb = !!ub?.useFloatingOrigin;
      if (wb && !Hb && (0, Bb.e)(48), Hb) {
        const {
          allocateF64Mat4: bb
        } = await hb.e(350).then((() => hb(60665)));
        0
      }
      let Zb, Xb, Ab, lb;
      if (wb) {
        const [{
          wrapRenderableForFO: bb,
          lightFoVersion: ub,
          applyLightFoOffset: Bb
        }, {
          makePackMeshWorld: Ob
        }] = await Promise.all([hb.e(351).then((() => hb(60674))), hb.e(352).then((() => hb(60683)))]);
        Zb = bb, Xb = Ob, Ab = ub, lb = Bb
      }
      const Kb = {
          _device: Lb
        },
        Wb = [Kb];
      return Object.assign(Kb, {
        engine: Kb,
        surfaces: Wb,
        _surfaces: Wb,
        _device: Lb,
        _options: ub,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: Hb,
        useFloatingOrigin: wb,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: Zb,
        _makePackMeshWorld: Xb,
        _lightFoVersion: Ab,
        _applyLightFoOffset: lb
      }, Yb(Kb, bb, ub)), ab(Kb), Sb(Kb), Kb
    }

    function lb(bb, ub, hb) {
      Hb(bb, ub, hb)
    }

    function Kb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb.surfaces;
      if (hb !== bb.surfaces)
        for (let Ob = hb.length; Ob--;) hb[Ob].engine !== bb && (0, Bb.e)(49);
      Wb(bb, ub, hb)
    }

    function Wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : bb._surfaces,
        Bb = 0;
      for (let Gb = hb.length; Gb--;) Bb += hb[Gb]._renderingContexts.length;
      if (!Bb) return bb.drawCallCount = 0, bb._flushGpuRetirements?.(bb);
      const Ob = bb._device.createCommandEncoder({
        label: "frame"
      });
      bb._currentEncoder = Ob, bb._currentDelta = ub;
      try {
        bb._gpuTimerBegin?.(Ob), Bb = 0;
        for (let bb = 0; bb < hb.length; bb++) {
          const ub = hb[bb];
          ub._capturePreFrame?.(ub), Sb(ub);
          const Ob = ub._renderingContexts;
          for (let bb = 0; bb < Ob.length; bb++) {
            const ub = Ob[bb];
            ub._update(), Bb += ub._drawCallsPre + ub._record()
          }
        }
        const ub = bb._currentEncoder;
        for (let bb = 0; bb < hb.length; bb++) {
          const Bb = hb[bb];
          Bb._captureService?.(Bb, ub)
        }
        bb._gpuTimerEnd?.(ub), bb._cbs[0] = ub.finish(), bb._device.queue.submit(bb._cbs), bb._flushGpuRetirements?.(bb), bb.drawCallCount = Bb, bb._gpuTimerResolve?.()
      } finally {
        bb._currentEncoder = void 0
      }
    }
  },
  41128: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      i: () => Gb,
      m: () => Bb
    });
    var Bb = globalThis.GPUTextureUsage,
      Ob = globalThis.GPUBufferUsage,
      Gb = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41188: (bb, ub, hb) => {
    function Bb(bb) {
      Ob(bb.splice(0))
    }

    function Ob(bb) {
      for (const hb of bb) try {
        hb()
      } catch (ub) {
        console.error("GPU resource retirement failed.", ub)
      }
    }

    function Gb(bb, ub) {
      bb._flushGpuRetirements ??= Ub, (bb._retirements ??= []).push(ub)
    }

    function Ub(bb) {
      const ub = bb._retirements;
      if (!ub) return;
      bb._retirements = null;
      const hb = bb._retiring ??= new Set;
      hb.add(ub), queueMicrotask((() => {
        bb._device.queue.onSubmittedWorkDone().then((() => {
          hb.delete(ub), Bb(ub)
        })).catch((() => {}))
      }))
    }
    hb.d(ub, {
      d: () => Gb
    })
  },
  41173: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Gb,
      h: () => Ub,
      l: () => Lb
    });
    var Bb = hb(41128);

    function Ob(bb) {
      const ub = bb.size;
      return "canvas" in ub ? ub.canvas : ub
    }

    function Gb(bb) {
      return {
        _descriptor: bb,
        _resolveSize: Ob,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function Ub(bb, ub) {
      if (bb._eager) return void bb._syncEager?.(ub);
      Lb(bb);
      const hb = bb._descriptor,
        {
          width: Gb,
          height: Ub
        } = (bb._resolveSize ?? Ob)(hb);
      bb._width = Gb, bb._height = Ub;
      const Yb = ub._device;
      hb.format && (bb._colorTexture = Yb.createTexture({
        label: hb.lbl,
        size: {
          width: Gb,
          height: Ub
        },
        format: hb.format,
        sampleCount: hb.samples,
        usage: Bb.m.RENDER_ATTACHMENT | Bb.m.TEXTURE_BINDING | Bb.m.COPY_SRC | Bb.m.COPY_DST
      }), bb._colorView = bb._colorTexture.createView()), hb.dFormat && (bb._depthTexture = Yb.createTexture({
        label: hb.lbl,
        size: {
          width: Gb,
          height: Ub
        },
        format: hb.dFormat,
        sampleCount: hb.samples,
        usage: Bb.m.RENDER_ATTACHMENT | Bb.m.TEXTURE_BINDING
      }), bb._depthView = bb._depthTexture.createView())
    }

    function Lb(bb) {
      if (!bb || bb._eager && !bb._disposeAttachments) return;
      const ub = bb._colorTexture,
        hb = bb._depthTexture;
      if (bb._colorTexture = bb._depthTexture = null, bb._colorView = bb._depthView = null, bb._width = bb._height = 0, bb._disposeAttachments) bb._disposeAttachments(ub, hb);
      else try {
        ub?.destroy()
      } finally {
        !1 !== bb._ownsDepthTexture && hb?.destroy()
      }
    }
  },
  41184: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb,
      f: () => Ob,
      g: () => Gb
    });
    var Bb = Float32Array,
      Ob = Float64Array,
      Gb = Uint32Array
  },
  41194: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    var Bb = 16
  },
  41121: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = null;

    function Ob(bb) {
      for (var ub = arguments.length, hb = new Array(ub > 1 ? ub - 1 : 0), Ob = 1; Ob < ub; Ob++) hb[Ob - 1] = arguments[Ob];
      const Gb = new Error(Bb?.(bb, hb) ?? `#${bb}`);
      throw Gb.lite = hb, Gb
    }
  },
  41148: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob
    });
    var Bb = hb(41132);

    function Ob(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const hb = ub.compare,
        Ob = ub.lodMinClamp ?? 0,
        Gb = ub.lodMaxClamp ?? 32,
        Ub = void 0 !== hb || 0 !== Ob || 32 !== Gb ? `${hb??""}:${Ob}:${Gb}` : "";
      return (0, Bb.c)(bb, ub, Ub)
    }
  },
  41130: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb
    });
    var Bb = null;

    function Ob(bb) {
      const ub = Bb ??= new WeakMap;
      ub.set(bb, (ub.get(bb) ?? 0) + 1)
    }

    function Gb(bb) {
      Ob(bb.texture)
    }
  },
  41132: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Lb
    });
    var Bb = null,
      Ob = "nearest",
      Gb = "clamp-to-edge",
      Ub = {
        minFilter: Ob,
        magFilter: Ob,
        mipmapFilter: Ob,
        addressModeU: Gb,
        addressModeV: Gb,
        addressModeW: Gb,
        maxAnisotropy: 1
      };

    function Lb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Ob = bb._device,
        Gb = Bb ??= new WeakMap;
      let Lb = Gb.get(Ob);
      Lb || Gb.set(Ob, Lb = new Map);
      let Yb = hb;
      for (const Bb in Ub) {
        const bb = Bb;
        Yb += `:${ub[bb]??Ub[bb]}`
      }
      let Sb = Lb.get(Yb);
      return Sb || Lb.set(Yb, Sb = Ob.createSampler(ub)), Sb
    }
  },
  41181: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => sb,
      d: () => Ib
    });
    var Bb = hb(41173),
      Ob = hb(41164);

    function Gb(bb, ub) {
      ub._passes.length = 0, bb._currentProcessedTask = ub;
      try {
        ub.record()
      } finally {
        bb._currentProcessedTask = null
      }
    }
    var Ub = hb(41184);

    function Lb(bb) {
      const ub = bb.worldMatrixVersion;
      if (bb._viewVer === ub) return bb._viewCache;
      const hb = bb._viewCache,
        Bb = bb.worldMatrix,
        Ob = bb._useFloatingOrigin,
        Gb = Ob ? 0 : Bb[12],
        Ub = Ob ? 0 : Bb[13],
        Lb = Ob ? 0 : Bb[14];
      return hb[0] = Bb[0], hb[1] = Bb[4], hb[2] = Bb[8], hb[3] = 0, hb[4] = Bb[1], hb[5] = Bb[5], hb[6] = Bb[9], hb[7] = 0, hb[8] = Bb[2], hb[9] = Bb[6], hb[10] = Bb[10], hb[11] = 0, hb[12] = -(Bb[0] * Gb + Bb[1] * Ub + Bb[2] * Lb), hb[13] = -(Bb[4] * Gb + Bb[5] * Ub + Bb[6] * Lb), hb[14] = -(Bb[8] * Gb + Bb[9] * Ub + Bb[10] * Lb), hb[15] = 1, bb._viewVer = ub, hb
    }
    var Yb = null;

    function Sb(bb) {
      return bb._projFov === bb.fov && bb._projNear === bb.nearPlane && bb._projFar === bb.farPlane || (bb._projFov = bb.fov, bb._projNear = bb.nearPlane, bb._projFar = bb.farPlane, bb._projRev = (bb._projRev ?? 0) + 1), bb.worldMatrixVersion + (bb._projRev ?? 0)
    }

    function ab(bb, ub) {
      const hb = Sb(bb);
      if (bb._projVer === hb && bb._projAspect === ub) return bb._projCache;
      const Bb = bb._projCache;
      return null !== Yb && bb.ortho ? Yb(bb, ub, Bb) : function(bb, ub, hb, Bb, Ob) {
        const Gb = 1 / Math.tan(.5 * ub),
          Ub = Ob - Bb;
        bb[0] = Gb / hb, bb[5] = Gb, bb[10] = -Bb / Ub, bb[11] = 1, bb[14] = Ob * Bb / Ub
      }(Bb, bb.fov, ub, bb.nearPlane, bb.farPlane), bb._projVer = hb, bb._projAspect = ub, Bb
    }
    var Hb = hb(41128);

    function wb(bb, ub, hb) {
      return bb._device.createBuffer({
        label: hb,
        size: (Bb = ub, Ob = 16, Math.ceil(Bb / Ob) * Ob),
        usage: Hb.e.UNIFORM | Hb.e.COPY_DST
      });
      var Bb, Ob
    }
    var Zb = hb(41188),
      Xb = null;

    function pb(bb) {
      const ub = bb._device,
        hb = Xb ??= new WeakMap;
      let Bb = hb.get(ub);
      return Bb || (Bb = ub.createBindGroupLayout({
        label: "Xp",
        entries: [{
          binding: 0,
          visibility: Hb.i.VERTEX | Hb.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: Hb.i.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), hb.set(ub, Bb)), Bb
    }

    function ob(bb, ub, hb) {
      const Bb = bb._device,
        Ob = wb(bb, ub.byteLength, hb);
      try {
        Bb.queue.writeBuffer(Ob, 0, ub.buffer, ub.byteOffset, ub.byteLength)
      } catch (Gb) {
        throw Ob.destroy(), Gb
      }
      return Ob
    }
    var Ab = hb(41194),
      lb = new Ub.g(1),
      Kb = new Ub.c(lb.buffer);

    function Wb(bb) {
      let ub = 0;
      for (const hb of bb) ub += hb._lightVersion ?? 0;
      return ub
    }

    function Cb(bb, ub) {
      bb.fill(0);
      let hb = 0;
      for (const Bb of ub) {
        if (hb >= Ab.e) break;
        Bb._writeLightUbo && (Bb._writeLightUbo(bb, 4 + 16 * hb), hb++)
      }
      lb[0] = hb, bb[0] = Kb[0]
    }

    function db(bb, ub) {
      let hb = ub._lightGpuState;
      const Bb = 16 + 16 * Ab.e * 4;
      if (hb && hb._byteSize === Bb) return hb;
      const Ob = !hb;
      hb?._buffer.destroy();
      const Gb = new Ub.c(Bb / 4);
      return Cb(Gb, ub.lights), bb._applyLightFoOffset?.(Gb, ub), hb = {
        _buffer: ob(bb, Gb),
        _scratch: Gb,
        zq: Wb(ub.lights) + (bb._lightFoVersion?.(ub) ?? 0),
        _listVersion: ub._lightListVersion ?? 0,
        _lightCount: ub.lights.length,
        _byteSize: Bb
      }, ub._lightGpuState = hb, Ob && ub._disposables.push((() => {
        ub._lightGpuState?._buffer.destroy(), ub._lightGpuState = void 0
      })), hb
    }

    function rb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Ob = ub;
      if (0 === Bb && 16 === Ob.length) return void bb.set(Ob, hb);
      const Gb = Bb,
        Ub = hb;
      bb[Ub + 0] = Ob[Gb + 0], bb[Ub + 1] = Ob[Gb + 1], bb[Ub + 2] = Ob[Gb + 2], bb[Ub + 3] = Ob[Gb + 3], bb[Ub + 4] = Ob[Gb + 4], bb[Ub + 5] = Ob[Gb + 5], bb[Ub + 6] = Ob[Gb + 6], bb[Ub + 7] = Ob[Gb + 7], bb[Ub + 8] = Ob[Gb + 8], bb[Ub + 9] = Ob[Gb + 9], bb[Ub + 10] = Ob[Gb + 10], bb[Ub + 11] = Ob[Gb + 11], bb[Ub + 12] = Ob[Gb + 12], bb[Ub + 13] = Ob[Gb + 13], bb[Ub + 14] = Ob[Gb + 14], bb[Ub + 15] = Ob[Gb + 15]
    }

    function jb(bb, ub, hb, Bb, Ob) {
      bb.fill(0);
      const Gb = function(bb, ub) {
          const hb = Sb(bb);
          if (bb._vpVer === hb && bb._vpAspect === ub) return bb._vpCache;
          const Bb = bb._vpCache;
          return function(bb, ub, hb, Bb, Ob, Gb) {
            const Ub = hb[Bb],
              Lb = hb[Bb + 1],
              Yb = hb[Bb + 2],
              Sb = hb[Bb + 3],
              ab = hb[Bb + 4],
              Hb = hb[Bb + 5],
              wb = hb[Bb + 6],
              Zb = hb[Bb + 7],
              Xb = hb[Bb + 8],
              pb = hb[Bb + 9],
              ob = hb[Bb + 10],
              Ab = hb[Bb + 11],
              lb = hb[Bb + 12],
              Kb = hb[Bb + 13],
              Wb = hb[Bb + 14],
              Cb = hb[Bb + 15];
            let db = Ob[Gb],
              rb = Ob[Gb + 1],
              jb = Ob[Gb + 2],
              nb = Ob[Gb + 3];
            bb[ub] = Ub * db + ab * rb + Xb * jb + lb * nb, bb[ub + 1] = Lb * db + Hb * rb + pb * jb + Kb * nb, bb[ub + 2] = Yb * db + wb * rb + ob * jb + Wb * nb, bb[ub + 3] = Sb * db + Zb * rb + Ab * jb + Cb * nb, db = Ob[Gb + 4], rb = Ob[Gb + 5], jb = Ob[Gb + 6], nb = Ob[Gb + 7], bb[ub + 4] = Ub * db + ab * rb + Xb * jb + lb * nb, bb[ub + 5] = Lb * db + Hb * rb + pb * jb + Kb * nb, bb[ub + 6] = Yb * db + wb * rb + ob * jb + Wb * nb, bb[ub + 7] = Sb * db + Zb * rb + Ab * jb + Cb * nb, db = Ob[Gb + 8], rb = Ob[Gb + 9], jb = Ob[Gb + 10], nb = Ob[Gb + 11], bb[ub + 8] = Ub * db + ab * rb + Xb * jb + lb * nb, bb[ub + 9] = Lb * db + Hb * rb + pb * jb + Kb * nb, bb[ub + 10] = Yb * db + wb * rb + ob * jb + Wb * nb, bb[ub + 11] = Sb * db + Zb * rb + Ab * jb + Cb * nb, db = Ob[Gb + 12], rb = Ob[Gb + 13], jb = Ob[Gb + 14], nb = Ob[Gb + 15], bb[ub + 12] = Ub * db + ab * rb + Xb * jb + lb * nb, bb[ub + 13] = Lb * db + Hb * rb + pb * jb + Kb * nb, bb[ub + 14] = Yb * db + wb * rb + ob * jb + Wb * nb, bb[ub + 15] = Sb * db + Zb * rb + Ab * jb + Cb * nb
          }(Bb, 0, ab(bb, ub), 0, Lb(bb), 0), bb._vpVer = hb, bb._vpAspect = ub, Bb
        }(Bb, Ob),
        Ub = Lb(Bb),
        Yb = Bb.worldMatrix;
      rb(bb, Gb, 0), rb(bb, Ub, 16), ub.useFloatingOrigin ? (bb[32] = 0, bb[33] = 0, bb[34] = 0) : (bb[32] = Yb[12], bb[33] = Yb[13], bb[34] = Yb[14]), bb[87] = ub.canvas.width;
      const Hb = hb.imageProcessing;
      bb[76] = Hb.exposure, bb[77] = Hb.contrast, bb[78] = hb._envTextures?.lodGenerationScale ?? .8, bb[79] = +Hb.toneMappingEnabled, bb[37] = ub.canvas.height
    }

    function nb(bb, ub) {
      return {
        _renderables: bb,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: ub
      }
    }

    function Db(bb, ub, hb) {
      bb.clr ??= !0;
      const Ob = bb.rt._descriptor,
        Gb = bb.depth?._descriptor,
        Yb = {
          _colorFormat: Ob.format,
          _depthStencilFormat: Gb?.dFormat ?? Ob.dFormat,
          _depthCompare: Ob.depthCompare ?? Gb?.depthCompare,
          _sampleCount: Ob.samples
        },
        ab = {
          loadOp: "clear",
          storeOp: "store"
        },
        Hb = {
          ...nb([], -1),
          name: bb.name,
          _config: bb,
          _ownsTargets: !bb.sharedRt,
          engine: ub,
          Xp: hb,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [ab]
          },
          _colorAttachment: ab,
          _sceneUBO: wb(ub, 368),
          _suData: new Ub.c(92),
          _sceneUboCacheKey: [],
          _targetSignature: Yb,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (Hb._disposed) throw new Error("RenderTask has been disposed.");
            Hb._recordExplicit ? Hb._recordExplicit(Hb, !0) : gb(Hb, !1 !== bb.autoMirror ? hb._renderables.slice() : Hb._renderables, !0)
          },
          execute: () => function(bb, ub, hb) {
            if (!1 === bb.enabled) return 0;
            const Bb = bb.Xp;
            ! function(bb, ub, hb) {
              const Bb = bb.Xp;
              !1 !== bb._config.autoMirror && bb._lastVersion !== Bb._renderableVersion && gb(bb, Bb._renderables.slice());
              vb(bb, ub);
              const Ob = bb._updateContext,
                Gb = bb._config.cam ?? Bb.camera;
              hb._colorFormat && (bb._config._skipClusteredLights || Bb._clusteredLightUpdater?.(Gb, Ob.targetWidth, Ob.targetHeight), function(bb, ub) {
                const hb = db(bb, ub),
                  Bb = Wb(ub.lights) + (bb._lightFoVersion?.(ub) ?? 0),
                  Ob = ub._lightListVersion ?? 0;
                Bb === hb.zq && Ob === hb._listVersion && ub.lights.length === hb._lightCount || (hb.zq = Bb, hb._listVersion = Ob, hb._lightCount = ub.lights.length, Cb(hb._scratch, ub.lights), bb._applyLightFoOffset?.(hb._scratch, ub), bb._device.queue.writeBuffer(hb._buffer, 0, hb._scratch)), hb._buffer
              }(ub, Bb));
              (function(bb, ub, hb, Bb) {
                if (!Bb) return;
                const Ob = Bb.viewport,
                  Gb = bb._config.rt,
                  Ub = (bb._config.cs ? ub.canvas.width / ub.canvas.height : Gb._width / Gb._height) * (Ob ? Ob.width / Ob.height : 1),
                  Lb = hb.fog,
                  Yb = hb.imageProcessing,
                  ab = Sb(Bb),
                  Hb = hb._envTextures,
                  wb = bb._sceneUboCacheKey;
                if (wb[0] === Bb && wb[1] === Lb && wb[2] === ab && wb[3] === Ub && wb[4] === Yb.exposure && wb[5] === Yb.contrast && wb[6] === Hb) return;
                wb[0] = Bb, wb[1] = Lb, wb[2] = ab, wb[3] = Ub, wb[4] = Yb.exposure, wb[5] = Yb.contrast, wb[6] = Hb;
                const Zb = bb._suData;
                jb(Zb, ub, hb, Bb, Ub);
                const Xb = hb._sceneUboContributors;
                if (Xb)
                  for (const Sb of Xb) Sb(Zb, hb);
                ub._device.queue.writeBuffer(bb._sceneUBO, 0, Zb)
              })(bb, ub, Bb, Gb), Ob.lT = Gb, bb._batchState?._reset(), tb(bb._opaqueBindings, Ob), tb(bb._directBindings, Ob), tb(bb._transparentBindings, Ob), bb._batchState?._flush(ub),
                function(bb, ub) {
                  const hb = bb._transparentBindings;
                  if (hb.length <= 1 || !ub) return;
                  const Bb = Lb(ub);
                  for (const Ob of hb) {
                    const bb = Ob.renderable._worldCenter;
                    Ob._sortDistance = bb ? bb[0] * Bb[2] + bb[1] * Bb[6] + bb[2] * Bb[10] + Bb[14] : 0
                  }
                  hb.sort(xb)
                }(bb, Gb)
            }(bb, ub, hb);
            const Ob = bb._colorAttachment,
              Gb = bb._config;
            Gb.rt._colorView && (Gb.rt === Bb.surface.scRT && (Ob.view = Gb.rt._colorView), Ob.resolveTarget = Gb.rst?._colorView ?? void 0, Ob.clearValue = Gb.clrColor ?? Bb.clearColor, Ob.loadOp = Gb.clr ? "clear" : "load");
            if (bb._executeWithTransmission) return bb._executeWithTransmission(hb._sampleCount);
            const Ub = ub._currentEncoder.beginRenderPass(bb._renderPassDescriptor),
              Yb = ib(bb, Ub);
            return Ub.end(), Yb
          }(Hb, ub, Yb),
          dispose() {
            if (Hb._disposed) return;
            Hb._disposed = !0;
            const ub = Hb._pendingMeshes;
            ub && (ub.length = 0);
            for (const bb of Hb._renderables) Hb._retireRenderable?.(Hb.engine, bb);
            Hb._passes.length = Hb._opaqueBindings.length = Hb._directBindings.length = 0, Hb._transparentBindings.length = Hb._renderables.length = Hb._ob.length = 0, Hb._ownsTargets && ((0, Bb.l)(bb.rt), (0, Bb.l)(bb.rst)), bb.depth?._eager || (0, Bb.l)(bb.depth);
            const hb = Hb._sceneUBO;
            (0, Zb.d)(Hb.engine, (() => hb.destroy())), Hb._batchState?._release(Hb.engine), Hb._batchState = void 0
          }
        };
      return Hb
    }

    function xb(bb, ub) {
      return ub._sortDistance - bb._sortDistance || bb.renderable.order - ub.renderable.order
    }

    function zb(bb, ub) {
      return bb.renderable.order - ub.renderable.order
    }

    function gb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bb._renderables,
        hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ob = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Gb = arguments.length > 4 ? arguments[4] : void 0;
      const Ub = bb._config,
        Lb = Ub.rt,
        Yb = bb._batchState,
        Sb = nb(ub, bb.Xp._renderableVersion);
      if (hb) {
        const ub = (ub, hb) => {
          ub && (hb || bb._ownsTargets || ub._eager) && (0, Bb.h)(ub, bb.engine)
        };
        ub(Lb), Lb._descriptor.samples > 1 && ub(Ub.rst), ub(Ub.depth, !0)
      }
      const {
        _opaqueBindings: ab,
        _directBindings: Hb,
        _transparentBindings: wb
      } = Sb;
      try {
        for (const hb of ub) {
          const ub = hb.bind(bb.engine, bb._targetSignature);
          Sb._batchState = bb._targetSignature._collectBatches?.(Sb._batchState, ub), hb.isTransparent || hb._transmissive ? wb.push(ub) : hb._direct ? Hb.push(ub) : ab.push(ub)
        }
        ab.sort(zb), Hb.sort(zb), hb && vb(bb, bb.engine, !1)
      } catch (Zb) {
        throw Sb._batchState?._release(void 0, Gb ?? [Yb]), Zb
      }
      return hb && (! function(bb, ub) {
        const hb = bb._config,
          Bb = bb._colorAttachment;
        Bb.view = ub._colorView, bb._renderPassDescriptor.colorAttachments = ub._colorView ? [Bb] : [];
        const Ob = hb.depth ?? ub,
          Gb = Ob._depthView;
        let Ub;
        if (Gb) {
          const bb = Ob._descriptor,
            ub = (hb.depth ? Ob._eager : !1 === hb.depthClear) ? "load" : "clear";
          Ub = {
            view: Gb,
            depthClearValue: bb.depthClearValue ?? 0,
            depthLoadOp: ub,
            depthStoreOp: "store"
          }, bb.dFormat?.includes("stencil") && (Ub.stencilClearValue = 0, Ub.stencilLoadOp = ub, Ub.stencilStoreOp = "store")
        }
        bb._renderPassDescriptor.depthStencilAttachment = Ub
      }(bb, Lb), bb._updateContext.targetWidth = Lb._width, bb._updateContext.targetHeight = Lb._height), Ob && (Object.assign(bb, Sb), Yb?._release(bb.engine, [Sb._batchState])), Sb
    }

    function ib(bb, ub) {
      const hb = bb.engine,
        Bb = bb._config,
        Gb = Bb.rt,
        Ub = bb.Xp,
        Lb = bb._opaqueBindings,
        Yb = bb._ob,
        Sb = bb._sceneBG;
      if (function(bb, ub, hb, Bb) {
          const Ob = ub?.viewport;
          if (!Ob) return;
          const Gb = Math.floor(Ob.x * hb),
            Ub = Math.floor((1 - Ob.y - Ob.height) * Bb),
            Lb = Math.ceil((Ob.x + Ob.width) * hb) - Gb,
            Yb = Math.ceil((1 - Ob.y) * Bb) - Ub;
          bb.setViewport(Gb, Ub, Lb, Yb, 0, 1), bb.setScissorRect(Gb, Ub, Lb, Yb)
        }(ub, Bb.cam ?? Ub.camera, Gb._width, Gb._height), ub.setBindGroup(0, Sb), bb._lastVis !== Ob.c || !Yb.length) {
        const ub = Gb._descriptor,
          Bb = hb._device.createRenderBundleEncoder({
            colorFormats: ub.format ? [ub.format] : [],
            depthStencilFormat: bb._targetSignature._depthStencilFormat,
            sampleCount: ub.samples
          });
        Bb.setBindGroup(0, Sb), Jb(Bb, Lb, hb), Yb[0] = Bb.finish(), bb._lastVis = Ob.c
      }
      let ab = Lb.length;
      return ub.executeBundles(Yb), ub.setBindGroup(0, Sb), ab += Jb(ub, bb._directBindings, hb), ab += Jb(ub, bb._transparentBindings, hb), ab
    }

    function vb(bb, ub) {
      let hb = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Bb = db(ub, bb.Xp)._buffer;
      if (Bb === bb._lightsUBO) return;
      const Ob = ub._device.createBindGroup({
        layout: pb(ub),
        entries: [{
          binding: 0,
          resource: {
            buffer: bb._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Bb
          }
        }]
      });
      bb._lightsUBO = Bb, bb._sceneBG = Ob, hb && (bb._ob = [])
    }

    function tb(bb, ub) {
      for (const hb of bb) hb.update?.(ub)
    }

    function Jb(bb, ub, hb) {
      let Bb = null,
        Ob = 0;
      for (const Gb of ub) {
        const ub = Gb.renderable.mesh;
        ub && !1 === ub.visible || (Gb.pipeline !== Bb && (bb.setPipeline(Gb.pipeline), Bb = Gb.pipeline), Ob += Gb.draw(bb, hb))
      }
      return Ob
    }

    function eb(bb) {
      const ub = bb._materialSwapQueue;
      if (!ub[0] || bb._runtimeBuilds?.w) return;
      let Bb, Ob, Gb;
      const Ub = bb._renderables;
      for (const hb of ub) {
        const ub = hb.material;
        if (!ub) continue;
        const Lb = hb._runtimeThinBuild;
        if (Lb) {
          Ob = Lb(bb, hb, Ob);
          continue
        }
        const Yb = bb._groups.get(ub._buildGroup),
          Sb = Yb?.r;
        if (!Sb) {
          (Gb ??= []).push(hb);
          continue
        }
        if (Yb._w?.(hb)) {
          (Gb ??= []).push([hb, ub]);
          continue
        }
        const ab = bb._meshDisposables.get(hb);
        ab && (bb._meshDisposables.delete(hb), (0, Zb.d)(bb.surface.engine, (() => ab.forEach((bb => bb())))));
        const Hb = Yb.o;
        let wb;
        for (let bb = Ub.length; bb--;) Ub[bb].mesh === hb && (wb = Ub.splice(bb, 1)[0]);
        ub._csmGen = -~ub._csmGen;
        const Xb = Sb(bb, hb);
        if (Hb) {
          const bb = Hb.indexOf(wb);
          bb < 0 ? Hb.push(Xb) : Hb[bb] = Xb
        }
        Bb = Ub.push(Xb)
      }
      if (Bb && (Ub.sort(((bb, ub) => bb.order - ub.order)), bb._renderableVersion++, bb._materialEpoch++), ub.length = 0, !Gb) return Ob;
      const Lb = Gb;
      return hb.e(356).then((() => hb(60704))).then((ub => {
        let {
          C: hb
        } = ub;
        return hb(bb, Lb, Ob)
      }), (ub => {
        const hb = bb._runtimeBuilds;
        hb ? hb._x(ub) : console.error(ub)
      }))
    }
    var Nb = null;

    function sb(bb, ub) {
      const hb = bb.engine,
        Ob = {
          _kind: "Xp",
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
            hb.useFloatingOrigin && Ob.camera && !Ob.camera._useFloatingOrigin && (Ob.camera._useFloatingOrigin = !0, Ob.camera._viewVer = -1, Ob.camera._vpVer = -1);
            const bb = Ob.fixedDeltaMs > 0 ? Ob.fixedDeltaMs : hb._currentDelta,
              ub = hb._currentEncoder;
            let Bb = 0;
            for (const hb of Ob._beforeRender) hb(bb);
            Ob._materialSwapQueue.length && eb(Ob);
            for (const Gb of Ob._prePasses) Bb += Gb.execute(ub, hb);
            for (const Gb of Ob._uniformUpdaters) Gb.update(hb);
            Ob._drawCallsPre = Bb
          },
          _record: () => Ob._frameGraph.execute(),
          _resize() {
            Ob._frameGraph.build()
          }
        },
        Ub = function() {
          const bb = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let ub = 0; ub < bb._tasks.length; ub++) Gb(bb, bb._tasks[ub]);
              for (const ub of bb._tasks)
                for (const bb of ub._passes) bb._initialize()
            },
            execute() {
              let ub = 0;
              for (const hb of bb._tasks)
                if (!1 !== hb.executionEnabled)
                  if (hb.execute) ub += hb.execute();
                  else
                    for (const bb of hb._passes) ub += bb._execute();
              return ub
            },
            dispose() {
              for (const ub of bb._tasks) ub.dispose();
              bb._tasks.length = 0, bb._currentProcessedTask = null
            }
          };
          return bb
        }();
      if (Ob._frameGraph = Ub, !1 !== ub?.defaultRenderTask) {
        const ub = bb.msaaSamples > 1,
          Gb = ub ? (0, Bb.e)({
            lbl: "scene-color",
            format: bb.format,
            dFormat: "depth24plus-stencil8",
            samples: bb.msaaSamples,
            size: bb
          }) : bb.scRT,
          Lb = ub ? void 0 : (0, Bb.e)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: bb
          });
        ! function(bb, ub) {
          bb._tasks.push(ub)
        }(Ub, Db({
          name: "Xp",
          rt: Gb,
          rst: ub ? bb.scRT : void 0,
          depth: Lb
        }, hb, Ob))
      }
      return Ob._disposables.push((() => Ub.dispose())), Ob
    }
    async function Mb(bb) {
      const ub = bb;
      for (ub._built || (ub._materialSwapQueue.length = 0); ub._deferredBuilders.length;) {
        const bb = ub._deferredBuilders.splice(0);
        await Promise.all(bb.map((bb => bb())))
      }
      await eb(ub), Nb?.get(ub)?.() || (ub._runtimeBuilds?._e(), ub._renderableVersion++, ub._built = !0), await (ub._rebuildHook?.(ub))
    }
    var mb = null;
    async function Ib(bb) {
      const ub = bb,
        Bb = ub.surface;
      (0, Ob.f)(Bb, ub) || (await Mb(bb), ub._renderables.sort(Pb), await Promise.all(ub._frameGraph._tasks.map((bb => bb._preload?.()))), mb && await mb(ub), ub._frameGraph.build(), Bb._renderingContexts[0] && (await hb.e(354).then((() => hb(60700)))).configureSwapchainOverlayScene(Bb, ub), Nb?.get(ub)?.() || (0, Ob.g)(Bb, ub))
    }
    var Pb = (bb, ub) => bb.order - ub.order
  },
  41161: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Sb,
      e: () => ab
    });
    var Bb = hb(41121),
      Ob = hb(41128),
      Gb = hb(41130),
      Ub = hb(41132),
      Lb = hb(41137),
      Yb = hb(41144);

    function Sb(bb, ub, hb) {
      let Lb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (ub < 1 || hb < 1) && (0, Bb.e)(676, ub, hb);
      const Sb = bb._device,
        ab = Lb.mipMaps ?? !1,
        Hb = Lb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        wb = ab ? (0, Yb.b)(ub, hb) : 1,
        Zb = Sb.createTexture({
          size: {
            width: ub,
            height: hb
          },
          format: Hb,
          mipLevelCount: wb,
          usage: Ob.m.TEXTURE_BINDING | Ob.m.COPY_DST | Ob.m.RENDER_ATTACHMENT
        }),
        Xb = {
          addressModeU: Lb.addressModeU ?? "clamp-to-edge",
          addressModeV: Lb.addressModeV ?? "clamp-to-edge",
          minFilter: Lb.minFilter ?? "linear",
          magFilter: Lb.magFilter ?? "linear",
          mipmapFilter: ab ? "linear" : "nearest"
        },
        pb = (0, Ub.c)(bb, Xb),
        ob = {
          texture: Zb,
          view: Zb.createView(),
          sampler: pb,
          width: ub,
          height: hb
        };
      return (0, Gb.d)(ob), bb._dlr && bb._dlr.t(ob, {
        kind: "dynamic",
        width: ub,
        height: hb,
        format: Hb,
        levels: wb,
        samplerDesc: Xb,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), ob
    }

    function ab(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ob = Bb.invertY ?? !0,
        Gb = Bb.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: hb,
        flipY: Ob
      }, {
        texture: ub.texture,
        premultipliedAlpha: Gb
      }, [ub.width, ub.height]);
      const Ub = ub._recoverySource;
      Ub && "dynamic" === Ub.kind && (Ub.source = hb, Ub.flipY = Ob, Ub.premultipliedAlpha = Gb), ub.texture.mipLevelCount > 1 && (0, Lb.generateMipmaps)(bb, ub.texture)
    }
  },
  41153: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Yb
    });
    var Bb = hb(41121),
      Ob = hb(41128),
      Gb = hb(41130),
      Ub = hb(41132),
      Lb = hb(41144);
    async function Yb(bb, ub) {
      let Yb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Sb, ab] = function(bb) {
        const ub = bb,
          hb = [
            [ub.displayWidth, ub.displayHeight],
            [ub.videoWidth, ub.videoHeight],
            [ub.naturalWidth, ub.naturalHeight],
            [ub.width, ub.height]
          ];
        for (const [Bb, Ob] of hb)
          if (void 0 !== Bb && void 0 !== Ob && Number.isInteger(Bb) && Number.isInteger(Ob) && Bb > 0 && Ob > 0) return [Bb, Ob];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(ub), [Hb, wb] = function(bb, ub, hb) {
        if (void 0 === hb) return [bb, ub];
        if (!Number.isInteger(hb) || hb < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${hb})`);
        if (Math.max(bb, ub) <= hb) return [bb, ub];
        const Bb = hb / Math.max(bb, ub);
        return bb >= ub ? [hb, Math.max(1, Math.round(ub * Bb))] : [Math.max(1, Math.round(bb * Bb)), hb]
      }(Sb, ab, Yb.maxDimension), Zb = Yb.mipMaps ?? !0, Xb = Yb.premultiplyAlpha ?? !1;
      let pb = ub,
        ob = null;
      const Ab = {
        texture: null
      };
      try {
        Hb === Sb && wb === ab || (ob = await createImageBitmap(ub, {
          resizeWidth: Hb,
          resizeHeight: wb,
          resizeQuality: "high",
          premultiplyAlpha: Xb ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), pb = ob);
        const lb = bb._device,
          Kb = Yb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          Wb = Zb ? (0, Lb.b)(Hb, wb) : 1,
          Cb = Wb > 1 ? (await Promise.resolve().then((() => hb(41137)))).generateMipmaps : null,
          db = {
            addressModeU: Yb.addressModeU ?? "repeat",
            addressModeV: Yb.addressModeV ?? "repeat",
            minFilter: Yb.minFilter ?? "linear",
            magFilter: Yb.magFilter ?? "linear",
            mipmapFilter: Zb ? "linear" : "nearest"
          };
        db.maxAnisotropy = "linear" === db.minFilter && "linear" === db.magFilter && "linear" === db.mipmapFilter ? 4 : 1;
        const rb = Yb.invertY ?? !0,
          jb = async ub => {
            let hb;
            lb.pushErrorScope("validation"), lb.pushErrorScope("out-of-memory");
            let Gb = null;
            try {
              const hb = Ab.texture = lb.createTexture({
                size: {
                  width: Hb,
                  height: wb
                },
                format: Kb,
                mipLevelCount: Wb,
                usage: Ob.m.TEXTURE_BINDING | Ob.m.COPY_DST | Ob.m.RENDER_ATTACHMENT
              });
              lb.queue.copyExternalImageToTexture({
                source: ub,
                flipY: rb
              }, {
                texture: hb,
                premultipliedAlpha: Xb
              }, {
                width: Hb,
                height: wb
              }), Cb && Cb(bb, hb), Gb = (0, Ub.c)(bb, db)
            } catch (Zb) {
              hb = Zb
            }
            const [Lb, Yb] = await Promise.all([lb.popErrorScope(), lb.popErrorScope()]);
            if (hb) throw hb;
            const Sb = Yb ?? Lb;
            if (Sb) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Sb.message}`, {
              cause: Sb
            });
            const ab = Ab.texture;
            return ab && Gb || (0, Bb.e)(677), {
              texture: ab,
              view: ab.createView(),
              sampler: Gb,
              width: Hb,
              height: wb
            }
          }, nb = await (bb._dlr?.x(pb, Hb, wb, Kb, Wb, db, rb, Xb, jb)) ?? await jb(pb);
        return (0, Gb.d)(nb), nb
      } catch (lb) {
        throw Ab.texture?.destroy(), lb
      } finally {
        ob?.close()
      }
    }
  },
  41137: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      generateMipmaps: () => Zb,
      recordMipmaps: () => Xb
    });
    var Bb = hb(41128),
      Ob = hb(41132),
      Gb = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var Ub = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Lb = null,
      Yb = null,
      Sb = null,
      ab = null,
      Hb = null;

    function wb(bb) {
      const ub = bb._device;
      ub !== Hb && (Lb?.clear(), Lb = null, Yb = null, Sb = null, ab = null, Hb = null, Hb = ub), Yb ??= ub.createShaderModule({
        code: Ub
      }), Sb ??= function(bb) {
        return (0, Ob.c)(bb, Gb)
      }(bb), ab ??= ub.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Bb.i.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Bb.i.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function Zb(bb, ub, hb) {
      const Bb = bb._device,
        Ob = Bb.createCommandEncoder();
      Xb(bb, ub, Ob, hb), Bb.queue.submit([Ob.finish()])
    }

    function Xb(bb, ub, hb, Bb) {
      if (ub.mipLevelCount <= 1) return;
      const Ob = bb._device,
        Gb = function(bb, ub) {
          const hb = bb._device;
          wb(bb), Lb ??= new Map;
          let Bb = Lb.get(ub);
          return Bb || (Bb = hb.createRenderPipeline({
            layout: hb.createPipelineLayout({
              bindGroupLayouts: [ab]
            }),
            vertex: {
              module: Yb,
              entryPoint: "vs"
            },
            fragment: {
              module: Yb,
              entryPoint: "fs",
              targets: [{
                format: ub
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Lb.set(ub, Bb)), Bb
        }(bb, ub.format),
        Ub = null != Bb ? {
          dimension: "2d",
          baseArrayLayer: Bb,
          arrayLayerCount: 1
        } : {};
      for (let Lb = 1; Lb < ub.mipLevelCount; Lb++) {
        const bb = ub.createView({
            baseMipLevel: Lb - 1,
            mipLevelCount: 1,
            ...Ub
          }),
          Bb = ub.createView({
            baseMipLevel: Lb,
            mipLevelCount: 1,
            ...Ub
          }),
          Yb = Ob.createBindGroup({
            layout: ab,
            entries: [{
              binding: 0,
              resource: bb
            }, {
              binding: 1,
              resource: Sb
            }]
          }),
          Hb = hb.beginRenderPass({
            colorAttachments: [{
              view: Bb,
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
        Hb.setPipeline(Gb), Hb.setBindGroup(0, Yb), Hb.draw(3), Hb.end()
      }
    }
  },
  41144: (bb, ub, hb) => {
    function Bb(bb, ub) {
      return Math.floor(Math.log2(Math.max(bb, ub))) + 1
    }
    hb.d(ub, {
      b: () => Bb
    })
  },
  41113: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb,
      h: () => ab
    });
    var Bb = hb(41121),
      Ob = hb(41128),
      Gb = hb(41130),
      Ub = hb(41132),
      Lb = hb(41137),
      Yb = hb(41144);

    function Sb(bb, ub, hb, Lb) {
      let Sb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (ub < 1 || hb < 1 || Lb < 1) && (0, Bb.e)(722, ub, hb, Lb);
      const ab = bb._device,
        Hb = Sb.mipMaps ?? !0,
        wb = Sb.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Zb = ab.createTexture({
          size: {
            width: ub,
            height: hb,
            depthOrArrayLayers: Lb
          },
          dimension: "2d",
          format: wb,
          mipLevelCount: Hb ? (0, Yb.b)(ub, hb) : 1,
          usage: Ob.m.TEXTURE_BINDING | Ob.m.COPY_DST | Ob.m.RENDER_ATTACHMENT
        }),
        Xb = (0, Ub.c)(bb, {
          addressModeU: Sb.addressModeU ?? "repeat",
          addressModeV: Sb.addressModeV ?? "repeat",
          minFilter: Sb.minFilter ?? "linear",
          magFilter: Sb.magFilter ?? "linear",
          mipmapFilter: Hb ? "linear" : "nearest"
        }),
        pb = {
          texture: Zb,
          view: Zb.createView({
            dimension: "2d-array"
          }),
          sampler: Xb,
          width: ub,
          height: hb,
          layers: Lb
        };
      return (0, Gb.d)(pb), pb
    }

    function ab(bb, ub, hb, Ob) {
      let Gb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (hb < 0 || hb >= ub.layers || (0 | hb) !== hb) && (0, Bb.e)(723, ub.layers, hb);
      const Ub = Gb.invertY ?? !0,
        Yb = Gb.premultiplyAlpha ?? !1;
      bb._device.queue.copyExternalImageToTexture({
        source: Ob,
        flipY: Ub
      }, {
        texture: ub.texture,
        origin: [0, 0, hb],
        premultipliedAlpha: Yb
      }, [ub.width, ub.height, 1]), ub.texture.mipLevelCount > 1 && (0, Lb.generateMipmaps)(bb, ub.texture, hb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);