export const id = 295;
export const ids = [295];
export const modules = {
  41293: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Bu,
      e: () => Wu,
      g: () => xu,
      k: () => Su,
      m: () => Hu,
      o: () => ju
    });
    var Eu = yu(41230);
    var Ku = "Babylon Lite v1.32.0",
      Qu = yu(41298);

    function mu(uu) {
      return "clientWidth" in uu
    }
    var Ju = 1;

    function Nu(uu, Ru, yu) {
      const Nu = Ru.getContext("webgpu");
      Nu || (0, Eu.e)(54), mu(Ru) && Ru.setAttribute("data-engine", Ku);
      const Xu = yu?.format ?? navigator.gpu.getPreferredCanvasFormat(),
        Vu = yu?.srgb ? (ru = Xu).endsWith("-srgb") ? ru : `${ru}-srgb` : Xu;
      var ru;
      const Bu = yu?.alphaMode ?? "opaque";
      Nu.configure({
        device: uu._device,
        format: Xu,
        alphaMode: Bu,
        viewFormats: [Vu]
      });
      const xu = 1 === yu?.msaaSamples ? 1 : 4,
        Su = (0, Qu.b)({
          lbl: "swapchain",
          format: Vu,
          samples: 1,
          size: {
            width: 0,
            height: 0
          }
        });
      return Su._eager = !0, {
        engine: uu,
        canvas: Ru,
        format: Vu,
        msaaSamples: xu,
        scRT: Su,
        maxDevicePixelRatio: yu?.maxDevicePixelRatio ?? 1 / 0,
        _uniqueId: Ju++,
        _context: Nu,
        _configureFormat: Xu,
        _alphaMode: Bu,
        _renderingContexts: []
      }
    }

    function Xu(uu) {
      const Ru = uu._context.getCurrentTexture(),
        yu = uu.scRT;
      yu._colorTexture = Ru, yu._colorView = Ru.createView({
        format: uu.format
      }), yu._width = Ru.width, yu._height = Ru.height
    }

    function Vu(uu) {
      const Ru = uu.canvas;
      if (!mu(Ru)) return;
      const yu = uu._w ?? Ru.clientWidth,
        Eu = uu._h ?? Ru.clientHeight;
      if (!(yu > 0 && Eu > 0)) return;
      const Ku = Math.min(globalThis.devicePixelRatio || 1, uu.maxDevicePixelRatio);
      ru(uu, yu * Ku | 0, Eu * Ku | 0)
    }

    function ru(uu, Ru, yu) {
      const Eu = uu.canvas,
        Ku = 0 | Ru,
        Qu = 0 | yu;
      if (Ku > 0 && Qu > 0 && (Ku !== Eu.width || Qu !== Eu.height)) {
        Eu.width = Ku, Eu.height = Qu, uu.scRT._width = Ku, uu.scRT._height = Qu;
        for (const Ru of uu._renderingContexts) Ru._resize?.()
      }
    }
    var Bu = 0;

    function xu(uu, Ru) {
      return -1 !== uu._renderingContexts.indexOf(Ru)
    }

    function Su(uu, Ru) {
      return -1 === uu._renderingContexts.indexOf(Ru) && (uu._renderingContexts.push(Ru), !0)
    }
    var pu = null;
    var Tu = ["float32-filterable", "texture-compression-astc", "texture-compression-bc", "texture-compression-etc2", "texture-compression-unaligned", "timestamp-query", "primitive-index"];
    async function Wu(uu, Ru) {
      const Qu = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance",
        ...pu ? pu() : {}
      });
      Qu || (0, Eu.e)(47);
      const mu = pu?.deviceFeatures?.(Qu, Ru) ?? function(uu) {
          return Tu.filter((Ru => uu.features.has(Ru)))
        }(Qu),
        Ju = await Qu.requestDevice({
          requiredFeatures: mu,
          requiredLimits: Ru?.requiredLimits
        });
      console.log(`${Ku} - WebGPU engine`);
      const ru = !!Ru?.useHighPrecisionMatrix,
        Bu = !!Ru?.useFloatingOrigin;
      if (Bu && !ru && (0, Eu.e)(48), ru) {
        const {
          allocateF64Mat4: uu
        } = await yu.e(349).then((() => yu(61086)));
        0
      }
      let xu, Su, Wu, ju;
      if (Bu) {
        const [{
          wrapRenderableForFO: uu,
          lightFoVersion: Ru,
          applyLightFoOffset: Eu
        }, {
          makePackMeshWorld: Ku
        }] = await Promise.all([yu.e(350).then((() => yu(61088))), yu.e(351).then((() => yu(61093)))]);
        xu = uu, Su = Ku, Wu = Ru, ju = Eu
      }
      const Hu = {
          _device: Ju
        },
        du = [Hu];
      return Object.assign(Hu, {
        engine: Hu,
        surfaces: du,
        _surfaces: du,
        _device: Ju,
        _options: Ru,
        drawCallCount: 0,
        gpuFrameTimeMs: 0,
        useHighPrecisionMatrix: ru,
        useFloatingOrigin: Bu,
        _animFrameId: 0,
        _renderFn: null,
        _currentEncoder: void 0,
        _currentDelta: 0,
        _cbs: [],
        _wrapRenderableForFO: xu,
        _makePackMeshWorld: Su,
        _lightFoVersion: Wu,
        _applyLightFoOffset: ju
      }, Nu(Hu, uu, Ru)), Vu(Hu), Xu(Hu), Hu
    }

    function ju(uu, Ru, yu) {
      ru(uu, Ru, yu)
    }

    function Hu(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu.surfaces;
      if (yu !== uu.surfaces)
        for (let Ku = yu.length; Ku--;) yu[Ku].engine !== uu && (0, Eu.e)(49);
      du(uu, Ru, yu)
    }

    function du(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uu._surfaces,
        Eu = 0;
      for (let Qu = yu.length; Qu--;) Eu += yu[Qu]._renderingContexts.length;
      if (!Eu) return uu.drawCallCount = 0, uu._flushGpuRetirements?.(uu);
      const Ku = uu._device.createCommandEncoder({
        label: "frame"
      });
      uu._currentEncoder = Ku, uu._currentDelta = Ru;
      try {
        uu._gpuTimerBegin?.(Ku), Eu = 0;
        for (let uu = 0; uu < yu.length; uu++) {
          const Ru = yu[uu];
          Ru._capturePreFrame?.(Ru), Xu(Ru);
          const Ku = Ru._renderingContexts;
          for (let uu = 0; uu < Ku.length; uu++) {
            const Ru = Ku[uu];
            Ru._update(), Eu += Ru._drawCallsPre + Ru._record()
          }
        }
        const Ru = uu._currentEncoder;
        for (let uu = 0; uu < yu.length; uu++) {
          const Eu = yu[uu];
          Eu._captureService?.(Eu, Ru)
        }
        uu._gpuTimerEnd?.(Ru), uu._cbs[0] = Ru.finish(), uu._device.queue.submit(uu._cbs), uu._flushGpuRetirements?.(uu), uu.drawCallCount = Eu, uu._gpuTimerResolve?.()
      } finally {
        uu._currentEncoder = void 0
      }
    }
  },
  41236: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu,
      l: () => Eu
    });
    var Eu = globalThis.GPUTextureUsage,
      Ku = globalThis.GPUBufferUsage,
      Qu = globalThis.GPUShaderStage;
    globalThis.GPUColorWrite
  },
  41315: (uu, Ru, yu) => {
    function Eu(uu) {
      Ku(uu.splice(0))
    }

    function Ku(uu) {
      for (const yu of uu) try {
        yu()
      } catch (Ru) {
        console.error("GPU resource retirement failed.", Ru)
      }
    }

    function Qu(uu, Ru) {
      uu._flushGpuRetirements ??= mu, (uu._retirements ??= []).push(Ru)
    }

    function mu(uu) {
      const Ru = uu._retirements;
      if (!Ru) return;
      uu._retirements = null;
      const yu = uu._retiring ??= new Set;
      yu.add(Ru), queueMicrotask((() => {
        uu._device.queue.onSubmittedWorkDone().then((() => {
          yu.delete(Ru), Eu(Ru)
        })).catch((() => {}))
      }))
    }
    yu.d(Ru, {
      e: () => Qu
    })
  },
  41298: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      e: () => mu,
      h: () => Ju
    });
    var Eu = yu(41236);

    function Ku(uu) {
      const Ru = uu.size;
      return "canvas" in Ru ? Ru.canvas : Ru
    }

    function Qu(uu) {
      return {
        _descriptor: uu,
        _resolveSize: Ku,
        _colorTexture: null,
        _colorView: null,
        _depthTexture: null,
        _depthView: null,
        _width: 0,
        _height: 0
      }
    }

    function mu(uu, Ru) {
      if (uu._eager) return void uu._syncEager?.(Ru);
      Ju(uu);
      const yu = uu._descriptor,
        {
          width: Qu,
          height: mu
        } = (uu._resolveSize ?? Ku)(yu);
      uu._width = Qu, uu._height = mu;
      const Nu = Ru._device;
      yu.format && (uu._colorTexture = Nu.createTexture({
        label: yu.lbl,
        size: {
          width: Qu,
          height: mu
        },
        format: yu.format,
        sampleCount: yu.samples,
        usage: Eu.l.RENDER_ATTACHMENT | Eu.l.TEXTURE_BINDING | Eu.l.COPY_SRC | Eu.l.COPY_DST
      }), uu._colorView = uu._colorTexture.createView()), yu.dFormat && (uu._depthTexture = Nu.createTexture({
        label: yu.lbl,
        size: {
          width: Qu,
          height: mu
        },
        format: yu.dFormat,
        sampleCount: yu.samples,
        usage: Eu.l.RENDER_ATTACHMENT | Eu.l.TEXTURE_BINDING
      }), uu._depthView = uu._depthTexture.createView())
    }

    function Ju(uu) {
      if (!uu || uu._eager && !uu._disposeAttachments) return;
      const Ru = uu._colorTexture,
        yu = uu._depthTexture;
      if (uu._colorTexture = uu._depthTexture = null, uu._colorView = uu._depthView = null, uu._width = uu._height = 0, uu._disposeAttachments) uu._disposeAttachments(Ru, yu);
      else try {
        Ru?.destroy()
      } finally {
        !1 !== uu._ownsDepthTexture && yu?.destroy()
      }
    }
  },
  41307: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Eu,
      f: () => Ku,
      j: () => Qu
    });
    var Eu = Float32Array,
      Ku = Float64Array,
      Qu = Uint32Array
  },
  41317: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    var Eu = 16
  },
  41230: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku
    });
    var Eu = null;

    function Ku(uu) {
      for (var Ru = arguments.length, yu = new Array(Ru > 1 ? Ru - 1 : 0), Ku = 1; Ku < Ru; Ku++) yu[Ku - 1] = arguments[Ku];
      const Qu = new Error(Eu?.(uu, yu) ?? `#${uu}`);
      throw Qu.lite = yu, Qu
    }
  },
  41273: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(41251);

    function Ku(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const yu = Ru.compare,
        Ku = Ru.lodMinClamp ?? 0,
        Qu = Ru.lodMaxClamp ?? 32,
        mu = void 0 !== yu || 0 !== Ku || 32 !== Qu ? `${yu??""}:${Ku}:${Qu}` : "";
      return (0, Eu.c)(uu, Ru, mu)
    }
  },
  41245: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu
    });
    var Eu = null;

    function Ku(uu) {
      const Ru = Eu ??= new WeakMap;
      Ru.set(uu, (Ru.get(uu) ?? 0) + 1)
    }

    function Qu(uu) {
      Ku(uu.texture)
    }
  },
  41251: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Ju
    });
    var Eu = null,
      Ku = "nearest",
      Qu = "clamp-to-edge",
      mu = {
        minFilter: Ku,
        magFilter: Ku,
        mipmapFilter: Ku,
        addressModeU: Qu,
        addressModeV: Qu,
        addressModeW: Qu,
        maxAnisotropy: 1
      };

    function Ju(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      const Ku = uu._device,
        Qu = Eu ??= new WeakMap;
      let Ju = Qu.get(Ku);
      Ju || Qu.set(Ku, Ju = new Map);
      let Nu = yu;
      for (const Eu in mu) {
        const uu = Eu;
        Nu += `:${Ru[uu]??mu[uu]}`
      }
      let Xu = Ju.get(Nu);
      return Xu || Ju.set(Nu, Xu = Ku.createSampler(Ru)), Xu
    }
  },
  41300: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => cu,
      g: () => Fu
    });
    var Eu = yu(41298),
      Ku = yu(41293);

    function Qu(uu, Ru) {
      Ru._passes.length = 0, uu._currentProcessedTask = Ru;
      try {
        Ru.record()
      } finally {
        uu._currentProcessedTask = null
      }
    }
    var mu = yu(41307);

    function Ju(uu) {
      const Ru = uu.worldMatrixVersion;
      if (uu._viewVer === Ru) return uu._viewCache;
      const yu = uu._viewCache,
        Eu = uu.worldMatrix,
        Ku = uu._useFloatingOrigin,
        Qu = Ku ? 0 : Eu[12],
        mu = Ku ? 0 : Eu[13],
        Ju = Ku ? 0 : Eu[14];
      return yu[0] = Eu[0], yu[1] = Eu[4], yu[2] = Eu[8], yu[3] = 0, yu[4] = Eu[1], yu[5] = Eu[5], yu[6] = Eu[9], yu[7] = 0, yu[8] = Eu[2], yu[9] = Eu[6], yu[10] = Eu[10], yu[11] = 0, yu[12] = -(Eu[0] * Qu + Eu[1] * mu + Eu[2] * Ju), yu[13] = -(Eu[4] * Qu + Eu[5] * mu + Eu[6] * Ju), yu[14] = -(Eu[8] * Qu + Eu[9] * mu + Eu[10] * Ju), yu[15] = 1, uu._viewVer = Ru, yu
    }
    var Nu = null;

    function Xu(uu) {
      return uu._projFov === uu.fov && uu._projNear === uu.nearPlane && uu._projFar === uu.farPlane || (uu._projFov = uu.fov, uu._projNear = uu.nearPlane, uu._projFar = uu.farPlane, uu._projRev = (uu._projRev ?? 0) + 1), uu.worldMatrixVersion + (uu._projRev ?? 0)
    }

    function Vu(uu, Ru) {
      const yu = Xu(uu);
      if (uu._projVer === yu && uu._projAspect === Ru) return uu._projCache;
      const Eu = uu._projCache;
      return null !== Nu && uu.ortho ? Nu(uu, Ru, Eu) : function(uu, Ru, yu, Eu, Ku) {
        const Qu = 1 / Math.tan(.5 * Ru),
          mu = Ku - Eu;
        uu[0] = Qu / yu, uu[5] = Qu, uu[10] = -Eu / mu, uu[11] = 1, uu[14] = Ku * Eu / mu
      }(Eu, uu.fov, Ru, uu.nearPlane, uu.farPlane), uu._projVer = yu, uu._projAspect = Ru, Eu
    }
    var ru = yu(41236);

    function Bu(uu, Ru, yu) {
      return uu._device.createBuffer({
        label: yu,
        size: (Eu = Ru, Ku = 16, Math.ceil(Eu / Ku) * Ku),
        usage: ru.e.UNIFORM | ru.e.COPY_DST
      });
      var Eu, Ku
    }
    var xu = yu(41315),
      Su = null;

    function pu(uu) {
      const Ru = uu._device,
        yu = Su ??= new WeakMap;
      let Eu = yu.get(Ru);
      return Eu || (Eu = Ru.createBindGroupLayout({
        label: "cp",
        entries: [{
          binding: 0,
          visibility: ru.h.VERTEX | ru.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }, {
          binding: 1,
          visibility: ru.h.FRAGMENT,
          buffer: {
            type: "uniform"
          }
        }]
      }), yu.set(Ru, Eu)), Eu
    }

    function Tu(uu, Ru, yu) {
      const Eu = uu._device,
        Ku = Bu(uu, Ru.byteLength, yu);
      try {
        Eu.queue.writeBuffer(Ku, 0, Ru.buffer, Ru.byteOffset, Ru.byteLength)
      } catch (Qu) {
        throw Ku.destroy(), Qu
      }
      return Ku
    }
    var Wu = yu(41317),
      ju = new mu.j(1),
      Hu = new mu.d(ju.buffer);

    function du(uu) {
      let Ru = 0;
      for (const yu of uu) Ru += yu._lightVersion ?? 0;
      return Ru
    }

    function bu(uu, Ru) {
      uu.fill(0);
      let yu = 0;
      for (const Eu of Ru) {
        if (yu >= Wu.e) break;
        Eu._writeLightUbo && (Eu._writeLightUbo(uu, 4 + 16 * yu), yu++)
      }
      ju[0] = yu, uu[0] = Hu[0]
    }

    function Cu(uu, Ru) {
      let yu = Ru._lightGpuState;
      const Eu = 16 + 16 * Wu.e * 4;
      if (yu && yu._byteSize === Eu) return yu;
      const Ku = !yu;
      yu?._buffer.destroy();
      const Qu = new mu.d(Eu / 4);
      return bu(Qu, Ru.lights), uu._applyLightFoOffset?.(Qu, Ru), yu = {
        _buffer: Tu(uu, Qu),
        _scratch: Qu,
        Fs: du(Ru.lights) + (uu._lightFoVersion?.(Ru) ?? 0),
        _listVersion: Ru._lightListVersion ?? 0,
        _lightCount: Ru.lights.length,
        _byteSize: Eu
      }, Ru._lightGpuState = yu, Ku && Ru._disposables.push((() => {
        Ru._lightGpuState?._buffer.destroy(), Ru._lightGpuState = void 0
      })), yu
    }

    function ku(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Ku = Ru;
      if (0 === Eu && 16 === Ku.length) return void uu.set(Ku, yu);
      const Qu = Eu,
        mu = yu;
      uu[mu + 0] = Ku[Qu + 0], uu[mu + 1] = Ku[Qu + 1], uu[mu + 2] = Ku[Qu + 2], uu[mu + 3] = Ku[Qu + 3], uu[mu + 4] = Ku[Qu + 4], uu[mu + 5] = Ku[Qu + 5], uu[mu + 6] = Ku[Qu + 6], uu[mu + 7] = Ku[Qu + 7], uu[mu + 8] = Ku[Qu + 8], uu[mu + 9] = Ku[Qu + 9], uu[mu + 10] = Ku[Qu + 10], uu[mu + 11] = Ku[Qu + 11], uu[mu + 12] = Ku[Qu + 12], uu[mu + 13] = Ku[Qu + 13], uu[mu + 14] = Ku[Qu + 14], uu[mu + 15] = Ku[Qu + 15]
    }

    function eu(uu, Ru, yu, Eu, Ku) {
      uu.fill(0);
      const Qu = function(uu, Ru) {
          const yu = Xu(uu);
          if (uu._vpVer === yu && uu._vpAspect === Ru) return uu._vpCache;
          const Eu = uu._vpCache;
          return function(uu, Ru, yu, Eu, Ku, Qu) {
            const mu = yu[Eu],
              Ju = yu[Eu + 1],
              Nu = yu[Eu + 2],
              Xu = yu[Eu + 3],
              Vu = yu[Eu + 4],
              ru = yu[Eu + 5],
              Bu = yu[Eu + 6],
              xu = yu[Eu + 7],
              Su = yu[Eu + 8],
              pu = yu[Eu + 9],
              Tu = yu[Eu + 10],
              Wu = yu[Eu + 11],
              ju = yu[Eu + 12],
              Hu = yu[Eu + 13],
              du = yu[Eu + 14],
              bu = yu[Eu + 15];
            let Cu = Ku[Qu],
              ku = Ku[Qu + 1],
              eu = Ku[Qu + 2],
              Au = Ku[Qu + 3];
            uu[Ru] = mu * Cu + Vu * ku + Su * eu + ju * Au, uu[Ru + 1] = Ju * Cu + ru * ku + pu * eu + Hu * Au, uu[Ru + 2] = Nu * Cu + Bu * ku + Tu * eu + du * Au, uu[Ru + 3] = Xu * Cu + xu * ku + Wu * eu + bu * Au, Cu = Ku[Qu + 4], ku = Ku[Qu + 5], eu = Ku[Qu + 6], Au = Ku[Qu + 7], uu[Ru + 4] = mu * Cu + Vu * ku + Su * eu + ju * Au, uu[Ru + 5] = Ju * Cu + ru * ku + pu * eu + Hu * Au, uu[Ru + 6] = Nu * Cu + Bu * ku + Tu * eu + du * Au, uu[Ru + 7] = Xu * Cu + xu * ku + Wu * eu + bu * Au, Cu = Ku[Qu + 8], ku = Ku[Qu + 9], eu = Ku[Qu + 10], Au = Ku[Qu + 11], uu[Ru + 8] = mu * Cu + Vu * ku + Su * eu + ju * Au, uu[Ru + 9] = Ju * Cu + ru * ku + pu * eu + Hu * Au, uu[Ru + 10] = Nu * Cu + Bu * ku + Tu * eu + du * Au, uu[Ru + 11] = Xu * Cu + xu * ku + Wu * eu + bu * Au, Cu = Ku[Qu + 12], ku = Ku[Qu + 13], eu = Ku[Qu + 14], Au = Ku[Qu + 15], uu[Ru + 12] = mu * Cu + Vu * ku + Su * eu + ju * Au, uu[Ru + 13] = Ju * Cu + ru * ku + pu * eu + Hu * Au, uu[Ru + 14] = Nu * Cu + Bu * ku + Tu * eu + du * Au, uu[Ru + 15] = Xu * Cu + xu * ku + Wu * eu + bu * Au
          }(Eu, 0, Vu(uu, Ru), 0, Ju(uu), 0), uu._vpVer = yu, uu._vpAspect = Ru, Eu
        }(Eu, Ku),
        mu = Ju(Eu),
        Nu = Eu.worldMatrix;
      ku(uu, Qu, 0), ku(uu, mu, 16), Ru.useFloatingOrigin ? (uu[32] = 0, uu[33] = 0, uu[34] = 0) : (uu[32] = Nu[12], uu[33] = Nu[13], uu[34] = Nu[14]), uu[87] = Ru.canvas.width;
      const ru = yu.imageProcessing;
      uu[76] = ru.exposure, uu[77] = ru.contrast, uu[78] = yu._envTextures?.lodGenerationScale ?? .8, uu[79] = +ru.toneMappingEnabled, uu[37] = Ru.canvas.height
    }

    function Au(uu, Ru) {
      return {
        _renderables: uu,
        _opaqueBindings: [],
        _directBindings: [],
        _transparentBindings: [],
        _ob: [],
        _lastVersion: Ru
      }
    }

    function Du(uu, Ru, yu) {
      uu.clr ??= !0;
      const Ku = uu.rt._descriptor,
        Qu = uu.depth?._descriptor,
        Nu = {
          _colorFormat: Ku.format,
          _depthStencilFormat: Qu?.dFormat ?? Ku.dFormat,
          _depthCompare: Ku.depthCompare ?? Qu?.depthCompare,
          _sampleCount: Ku.samples
        },
        Vu = {
          loadOp: "clear",
          storeOp: "store"
        },
        ru = {
          ...Au([], -1),
          name: uu.name,
          _config: uu,
          _ownsTargets: !uu.sharedRt,
          engine: Ru,
          cp: yu,
          _passes: [],
          _renderPassDescriptor: {
            colorAttachments: [Vu]
          },
          _colorAttachment: Vu,
          _sceneUBO: Bu(Ru, 368),
          _suData: new mu.d(92),
          _sceneUboCacheKey: [],
          _targetSignature: Nu,
          _updateContext: {
            targetWidth: 0,
            targetHeight: 0
          },
          record() {
            if (ru._disposed) throw new Error("RenderTask has been disposed.");
            ru._recordExplicit ? ru._recordExplicit(ru, !0) : Gu(ru, !1 !== uu.autoMirror ? yu._renderables.slice() : ru._renderables, !0)
          },
          execute: () => function(uu, Ru, yu) {
            if (!1 === uu.enabled) return 0;
            const Eu = uu.cp;
            ! function(uu, Ru, yu) {
              const Eu = uu.cp;
              !1 !== uu._config.autoMirror && uu._lastVersion !== Eu._renderableVersion && Gu(uu, Eu._renderables.slice());
              nu(uu, Ru);
              const Ku = uu._updateContext,
                Qu = uu._config.cam ?? Eu.camera;
              yu._colorFormat && (uu._config._skipClusteredLights || Eu._clusteredLightUpdater?.(Qu, Ku.targetWidth, Ku.targetHeight), function(uu, Ru) {
                const yu = Cu(uu, Ru),
                  Eu = du(Ru.lights) + (uu._lightFoVersion?.(Ru) ?? 0),
                  Ku = Ru._lightListVersion ?? 0;
                Eu === yu.Fs && Ku === yu._listVersion && Ru.lights.length === yu._lightCount || (yu.Fs = Eu, yu._listVersion = Ku, yu._lightCount = Ru.lights.length, bu(yu._scratch, Ru.lights), uu._applyLightFoOffset?.(yu._scratch, Ru), uu._device.queue.writeBuffer(yu._buffer, 0, yu._scratch)), yu._buffer
              }(Ru, Eu));
              (function(uu, Ru, yu, Eu) {
                if (!Eu) return;
                const Ku = Eu.viewport,
                  Qu = uu._config.rt,
                  mu = (uu._config.cs ? Ru.canvas.width / Ru.canvas.height : Qu._width / Qu._height) * (Ku ? Ku.width / Ku.height : 1),
                  Ju = yu.fog,
                  Nu = yu.imageProcessing,
                  Vu = Xu(Eu),
                  ru = yu._envTextures,
                  Bu = uu._sceneUboCacheKey;
                if (Bu[0] === Eu && Bu[1] === Ju && Bu[2] === Vu && Bu[3] === mu && Bu[4] === Nu.exposure && Bu[5] === Nu.contrast && Bu[6] === ru) return;
                Bu[0] = Eu, Bu[1] = Ju, Bu[2] = Vu, Bu[3] = mu, Bu[4] = Nu.exposure, Bu[5] = Nu.contrast, Bu[6] = ru;
                const xu = uu._suData;
                eu(xu, Ru, yu, Eu, mu);
                const Su = yu._sceneUboContributors;
                if (Su)
                  for (const Xu of Su) Xu(xu, yu);
                Ru._device.queue.writeBuffer(uu._sceneUBO, 0, xu)
              })(uu, Ru, Eu, Qu), Ku.Tv = Qu, uu._batchState?._reset(), su(uu._opaqueBindings, Ku), su(uu._directBindings, Ku), su(uu._transparentBindings, Ku), uu._batchState?._flush(Ru),
                function(uu, Ru) {
                  const yu = uu._transparentBindings;
                  if (yu.length <= 1 || !Ru) return;
                  const Eu = Ju(Ru);
                  for (const Ku of yu) {
                    const uu = Ku.renderable._worldCenter;
                    Ku._sortDistance = uu ? uu[0] * Eu[2] + uu[1] * Eu[6] + uu[2] * Eu[10] + Eu[14] : 0
                  }
                  yu.sort(Mu)
                }(uu, Qu)
            }(uu, Ru, yu);
            const Ku = uu._colorAttachment,
              Qu = uu._config;
            Qu.rt._colorView && (Qu.rt === Eu.surface.scRT && (Ku.view = Qu.rt._colorView), Ku.resolveTarget = Qu.rst?._colorView ?? void 0, Ku.clearValue = Qu.clrColor ?? Eu.clearColor, Ku.loadOp = Qu.clr ? "clear" : "load");
            if (uu._executeWithTransmission) return uu._executeWithTransmission(yu._sampleCount);
            const mu = Ru._currentEncoder.beginRenderPass(uu._renderPassDescriptor),
              Nu = Uu(uu, mu);
            return mu.end(), Nu
          }(ru, Ru, Nu),
          dispose() {
            if (ru._disposed) return;
            ru._disposed = !0;
            const Ru = ru._pendingMeshes;
            Ru && (Ru.length = 0);
            for (const uu of ru._renderables) ru._retireRenderable?.(ru.engine, uu);
            ru._passes.length = ru._opaqueBindings.length = ru._directBindings.length = 0, ru._transparentBindings.length = ru._renderables.length = ru._ob.length = 0, ru._ownsTargets && ((0, Eu.h)(uu.rt), (0, Eu.h)(uu.rst)), uu.depth?._eager || (0, Eu.h)(uu.depth);
            const yu = ru._sceneUBO;
            (0, xu.e)(ru.engine, (() => yu.destroy())), ru._batchState?._release(ru.engine), ru._batchState = void 0
          }
        };
      return ru
    }

    function Mu(uu, Ru) {
      return Ru._sortDistance - uu._sortDistance || uu.renderable.order - Ru.renderable.order
    }

    function Iu(uu, Ru) {
      return uu.renderable.order - Ru.renderable.order
    }

    function Gu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uu._renderables,
        yu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        Ku = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        Qu = arguments.length > 4 ? arguments[4] : void 0;
      const mu = uu._config,
        Ju = mu.rt,
        Nu = uu._batchState,
        Xu = Au(Ru, uu.cp._renderableVersion);
      if (yu) {
        const Ru = (Ru, yu) => {
          Ru && (yu || uu._ownsTargets || Ru._eager) && (0, Eu.e)(Ru, uu.engine)
        };
        Ru(Ju), Ju._descriptor.samples > 1 && Ru(mu.rst), Ru(mu.depth, !0)
      }
      const {
        _opaqueBindings: Vu,
        _directBindings: ru,
        _transparentBindings: Bu
      } = Xu;
      try {
        for (const yu of Ru) {
          const Ru = yu.bind(uu.engine, uu._targetSignature);
          Xu._batchState = uu._targetSignature._collectBatches?.(Xu._batchState, Ru), yu.isTransparent || yu._transmissive ? Bu.push(Ru) : yu._direct ? ru.push(Ru) : Vu.push(Ru)
        }
        Vu.sort(Iu), ru.sort(Iu), yu && nu(uu, uu.engine, !1)
      } catch (xu) {
        throw Xu._batchState?._release(void 0, Qu ?? [Nu]), xu
      }
      return yu && (! function(uu, Ru) {
        const yu = uu._config,
          Eu = uu._colorAttachment;
        Eu.view = Ru._colorView, uu._renderPassDescriptor.colorAttachments = Ru._colorView ? [Eu] : [];
        const Ku = yu.depth ?? Ru,
          Qu = Ku._depthView;
        let mu;
        if (Qu) {
          const uu = Ku._descriptor,
            Ru = (yu.depth ? Ku._eager : !1 === yu.depthClear) ? "load" : "clear";
          mu = {
            view: Qu,
            depthClearValue: uu.depthClearValue ?? 0,
            depthLoadOp: Ru,
            depthStoreOp: "store"
          }, uu.dFormat?.includes("stencil") && (mu.stencilClearValue = 0, mu.stencilLoadOp = Ru, mu.stencilStoreOp = "store")
        }
        uu._renderPassDescriptor.depthStencilAttachment = mu
      }(uu, Ju), uu._updateContext.targetWidth = Ju._width, uu._updateContext.targetHeight = Ju._height), Ku && (Object.assign(uu, Xu), Nu?._release(uu.engine, [Xu._batchState])), Xu
    }

    function Uu(uu, Ru) {
      const yu = uu.engine,
        Eu = uu._config,
        Qu = Eu.rt,
        mu = uu.cp,
        Ju = uu._opaqueBindings,
        Nu = uu._ob,
        Xu = uu._sceneBG;
      if (function(uu, Ru, yu, Eu) {
          const Ku = Ru?.viewport;
          if (!Ku) return;
          const Qu = Math.floor(Ku.x * yu),
            mu = Math.floor((1 - Ku.y - Ku.height) * Eu),
            Ju = Math.ceil((Ku.x + Ku.width) * yu) - Qu,
            Nu = Math.ceil((1 - Ku.y) * Eu) - mu;
          uu.setViewport(Qu, mu, Ju, Nu, 0, 1), uu.setScissorRect(Qu, mu, Ju, Nu)
        }(Ru, Eu.cam ?? mu.camera, Qu._width, Qu._height), Ru.setBindGroup(0, Xu), uu._lastVis !== Ku.c || !Nu.length) {
        const Ru = Qu._descriptor,
          Eu = yu._device.createRenderBundleEncoder({
            colorFormats: Ru.format ? [Ru.format] : [],
            depthStencilFormat: uu._targetSignature._depthStencilFormat,
            sampleCount: Ru.samples
          });
        Eu.setBindGroup(0, Xu), tu(Eu, Ju, yu), Nu[0] = Eu.finish(), uu._lastVis = Ku.c
      }
      let Vu = Ju.length;
      return Ru.executeBundles(Nu), Ru.setBindGroup(0, Xu), Vu += tu(Ru, uu._directBindings, yu), Vu += tu(Ru, uu._transparentBindings, yu), Vu
    }

    function nu(uu, Ru) {
      let yu = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const Eu = Cu(Ru, uu.cp)._buffer;
      if (Eu === uu._lightsUBO) return;
      const Ku = Ru._device.createBindGroup({
        layout: pu(Ru),
        entries: [{
          binding: 0,
          resource: {
            buffer: uu._sceneUBO
          }
        }, {
          binding: 1,
          resource: {
            buffer: Eu
          }
        }]
      });
      uu._lightsUBO = Eu, uu._sceneBG = Ku, yu && (uu._ob = [])
    }

    function su(uu, Ru) {
      for (const yu of uu) yu.update?.(Ru)
    }

    function tu(uu, Ru, yu) {
      let Eu = null,
        Ku = 0;
      for (const Qu of Ru) {
        const Ru = Qu.renderable.mesh;
        Ru && !1 === Ru.visible || (Qu.pipeline !== Eu && (uu.setPipeline(Qu.pipeline), Eu = Qu.pipeline), Ku += Qu.draw(uu, yu))
      }
      return Ku
    }

    function lu(uu) {
      const Ru = uu._materialSwapQueue;
      if (!Ru[0] || uu._runtimeBuilds?.w) return;
      let Eu, Ku, Qu;
      const mu = uu._renderables;
      for (const yu of Ru) {
        const Ru = yu.material;
        if (!Ru) continue;
        const Ju = yu._runtimeThinBuild;
        if (Ju) {
          Ku = Ju(uu, yu, Ku);
          continue
        }
        const Nu = uu._groups.get(Ru._buildGroup),
          Xu = Nu?.r;
        if (!Xu) {
          (Qu ??= []).push(yu);
          continue
        }
        if (Nu._w?.(yu)) {
          (Qu ??= []).push([yu, Ru]);
          continue
        }
        const Vu = uu._meshDisposables.get(yu);
        Vu && (uu._meshDisposables.delete(yu), (0, xu.e)(uu.surface.engine, (() => Vu.forEach((uu => uu())))));
        const ru = Nu.o;
        let Bu;
        for (let uu = mu.length; uu--;) mu[uu].mesh === yu && (Bu = mu.splice(uu, 1)[0]);
        Ru._csmGen = -~Ru._csmGen;
        const Su = Xu(uu, yu);
        if (ru) {
          const uu = ru.indexOf(Bu);
          uu < 0 ? ru.push(Su) : ru[uu] = Su
        }
        Eu = mu.push(Su)
      }
      if (Eu && (mu.sort(((uu, Ru) => uu.order - Ru.order)), uu._renderableVersion++, uu._materialEpoch++), Ru.length = 0, !Qu) return Ku;
      const Ju = Qu;
      return yu.e(355).then((() => yu(61123))).then((Ru => {
        let {
          C: yu
        } = Ru;
        return yu(uu, Ju, Ku)
      }), (Ru => {
        const yu = uu._runtimeBuilds;
        yu ? yu._x(Ru) : console.error(Ru)
      }))
    }
    var gu = null;

    function cu(uu, Ru) {
      const yu = uu.engine,
        Ku = {
          _kind: "cp",
          surface: uu,
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
            yu.useFloatingOrigin && Ku.camera && !Ku.camera._useFloatingOrigin && (Ku.camera._useFloatingOrigin = !0, Ku.camera._viewVer = -1, Ku.camera._vpVer = -1);
            const uu = Ku.fixedDeltaMs > 0 ? Ku.fixedDeltaMs : yu._currentDelta,
              Ru = yu._currentEncoder;
            let Eu = 0;
            for (const yu of Ku._beforeRender) yu(uu);
            Ku._materialSwapQueue.length && lu(Ku);
            for (const Qu of Ku._prePasses) Eu += Qu.execute(Ru, yu);
            for (const Qu of Ku._uniformUpdaters) Qu.update(yu);
            Ku._drawCallsPre = Eu
          },
          _record: () => Ku._frameGraph.execute(),
          _resize() {
            Ku._frameGraph.build()
          }
        },
        mu = function() {
          const uu = {
            _tasks: [],
            _currentProcessedTask: null,
            build() {
              for (let Ru = 0; Ru < uu._tasks.length; Ru++) Qu(uu, uu._tasks[Ru]);
              for (const Ru of uu._tasks)
                for (const uu of Ru._passes) uu._initialize()
            },
            execute() {
              let Ru = 0;
              for (const yu of uu._tasks)
                if (!1 !== yu.executionEnabled)
                  if (yu.execute) Ru += yu.execute();
                  else
                    for (const uu of yu._passes) Ru += uu._execute();
              return Ru
            },
            dispose() {
              for (const Ru of uu._tasks) Ru.dispose();
              uu._tasks.length = 0, uu._currentProcessedTask = null
            }
          };
          return uu
        }();
      if (Ku._frameGraph = mu, !1 !== Ru?.defaultRenderTask) {
        const Ru = uu.msaaSamples > 1,
          Qu = Ru ? (0, Eu.b)({
            lbl: "scene-color",
            format: uu.format,
            dFormat: "depth24plus-stencil8",
            samples: uu.msaaSamples,
            size: uu
          }) : uu.scRT,
          Ju = Ru ? void 0 : (0, Eu.b)({
            lbl: "scene-depth",
            dFormat: "depth24plus-stencil8",
            samples: 1,
            size: uu
          });
        ! function(uu, Ru) {
          uu._tasks.push(Ru)
        }(mu, Du({
          name: "cp",
          rt: Qu,
          rst: Ru ? uu.scRT : void 0,
          depth: Ju
        }, yu, Ku))
      }
      return Ku._disposables.push((() => mu.dispose())), Ku
    }
    async function Lu(uu) {
      const Ru = uu;
      for (Ru._built || (Ru._materialSwapQueue.length = 0); Ru._deferredBuilders.length;) {
        const uu = Ru._deferredBuilders.splice(0);
        await Promise.all(uu.map((uu => uu())))
      }
      await lu(Ru), gu?.get(Ru)?.() || (Ru._runtimeBuilds?._e(), Ru._renderableVersion++, Ru._built = !0), await (Ru._rebuildHook?.(Ru))
    }
    var zu = null;
    async function Fu(uu) {
      const Ru = uu,
        Eu = Ru.surface;
      (0, Ku.g)(Eu, Ru) || (await Lu(uu), Ru._renderables.sort(wu), await Promise.all(Ru._frameGraph._tasks.map((uu => uu._preload?.()))), zu && await zu(Ru), Ru._frameGraph.build(), Eu._renderingContexts[0] && (await yu.e(353).then((() => yu(61109)))).configureSwapchainOverlayScene(Eu, Ru), gu?.get(Ru)?.() || (0, Ku.k)(Eu, Ru))
    }
    var wu = (uu, Ru) => uu.order - Ru.order
  },
  41287: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      f: () => Vu
    });
    var Eu = yu(41230),
      Ku = yu(41236),
      Qu = yu(41245),
      mu = yu(41251),
      Ju = yu(41259),
      Nu = yu(41268);

    function Xu(uu, Ru, yu) {
      let Ju = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      (Ru < 1 || yu < 1) && (0, Eu.e)(676, Ru, yu);
      const Xu = uu._device,
        Vu = Ju.mipMaps ?? !1,
        ru = Ju.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        Bu = Vu ? (0, Nu.e)(Ru, yu) : 1,
        xu = Xu.createTexture({
          size: {
            width: Ru,
            height: yu
          },
          format: ru,
          mipLevelCount: Bu,
          usage: Ku.l.TEXTURE_BINDING | Ku.l.COPY_DST | Ku.l.RENDER_ATTACHMENT
        }),
        Su = {
          addressModeU: Ju.addressModeU ?? "clamp-to-edge",
          addressModeV: Ju.addressModeV ?? "clamp-to-edge",
          minFilter: Ju.minFilter ?? "linear",
          magFilter: Ju.magFilter ?? "linear",
          mipmapFilter: Vu ? "linear" : "nearest"
        },
        pu = (0, mu.c)(uu, Su),
        Tu = {
          texture: xu,
          view: xu.createView(),
          sampler: pu,
          width: Ru,
          height: yu
        };
      return (0, Qu.d)(Tu), uu._dlr && uu._dlr.t(Tu, {
        kind: "dynamic",
        width: Ru,
        height: yu,
        format: ru,
        levels: Bu,
        samplerDesc: Su,
        source: null,
        flipY: !0,
        premultipliedAlpha: !1
      }), Tu
    }

    function Vu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Ku = Eu.invertY ?? !0,
        Qu = Eu.premultiplyAlpha ?? !1;
      uu._device.queue.copyExternalImageToTexture({
        source: yu,
        flipY: Ku
      }, {
        texture: Ru.texture,
        premultipliedAlpha: Qu
      }, [Ru.width, Ru.height]);
      const mu = Ru._recoverySource;
      mu && "dynamic" === mu.kind && (mu.source = yu, mu.flipY = Ku, mu.premultipliedAlpha = Qu), Ru.texture.mipLevelCount > 1 && (0, Ju.generateMipmaps)(uu, Ru.texture)
    }
  },
  41279: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Nu
    });
    var Eu = yu(41230),
      Ku = yu(41236),
      Qu = yu(41245),
      mu = yu(41251),
      Ju = yu(41268);
    async function Nu(uu, Ru) {
      let Nu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const [Xu, Vu] = function(uu) {
        const Ru = uu,
          yu = [
            [Ru.displayWidth, Ru.displayHeight],
            [Ru.videoWidth, Ru.videoHeight],
            [Ru.naturalWidth, Ru.naturalHeight],
            [Ru.width, Ru.height]
          ];
        for (const [Eu, Ku] of yu)
          if (void 0 !== Eu && void 0 !== Ku && Number.isInteger(Eu) && Number.isInteger(Ku) && Eu > 0 && Ku > 0) return [Eu, Ku];
        throw new TypeError("createTexture2DFromExternalImage: source has no supported positive intrinsic dimensions")
      }(Ru), [ru, Bu] = function(uu, Ru, yu) {
        if (void 0 === yu) return [uu, Ru];
        if (!Number.isInteger(yu) || yu < 1) throw new TypeError(`createTexture2DFromExternalImage: maxDimension must be a positive integer (got ${yu})`);
        if (Math.max(uu, Ru) <= yu) return [uu, Ru];
        const Eu = yu / Math.max(uu, Ru);
        return uu >= Ru ? [yu, Math.max(1, Math.round(Ru * Eu))] : [Math.max(1, Math.round(uu * Eu)), yu]
      }(Xu, Vu, Nu.maxDimension), xu = Nu.mipMaps ?? !0, Su = Nu.premultiplyAlpha ?? !1;
      let pu = Ru,
        Tu = null;
      const Wu = {
        texture: null
      };
      try {
        ru === Xu && Bu === Vu || (Tu = await createImageBitmap(Ru, {
          resizeWidth: ru,
          resizeHeight: Bu,
          resizeQuality: "high",
          premultiplyAlpha: Su ? "premultiply" : "none",
          colorSpaceConversion: "none"
        }), pu = Tu);
        const ju = uu._device,
          Hu = Nu.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
          du = xu ? (0, Ju.e)(ru, Bu) : 1,
          bu = du > 1 ? (await Promise.resolve().then((() => yu(41259)))).generateMipmaps : null,
          Cu = {
            addressModeU: Nu.addressModeU ?? "repeat",
            addressModeV: Nu.addressModeV ?? "repeat",
            minFilter: Nu.minFilter ?? "linear",
            magFilter: Nu.magFilter ?? "linear",
            mipmapFilter: xu ? "linear" : "nearest"
          };
        Cu.maxAnisotropy = "linear" === Cu.minFilter && "linear" === Cu.magFilter && "linear" === Cu.mipmapFilter ? 4 : 1;
        const ku = Nu.invertY ?? !0,
          eu = async Ru => {
            let yu;
            ju.pushErrorScope("validation"), ju.pushErrorScope("out-of-memory");
            let Qu = null;
            try {
              const yu = Wu.texture = ju.createTexture({
                size: {
                  width: ru,
                  height: Bu
                },
                format: Hu,
                mipLevelCount: du,
                usage: Ku.l.TEXTURE_BINDING | Ku.l.COPY_DST | Ku.l.RENDER_ATTACHMENT
              });
              ju.queue.copyExternalImageToTexture({
                source: Ru,
                flipY: ku
              }, {
                texture: yu,
                premultipliedAlpha: Su
              }, {
                width: ru,
                height: Bu
              }), bu && bu(uu, yu), Qu = (0, mu.c)(uu, Cu)
            } catch (xu) {
              yu = xu
            }
            const [Ju, Nu] = await Promise.all([ju.popErrorScope(), ju.popErrorScope()]);
            if (yu) throw yu;
            const Xu = Nu ?? Ju;
            if (Xu) throw new Error(`createTexture2DFromExternalImage: GPU upload failed: ${Xu.message}`, {
              cause: Xu
            });
            const Vu = Wu.texture;
            return Vu && Qu || (0, Eu.e)(677), {
              texture: Vu,
              view: Vu.createView(),
              sampler: Qu,
              width: ru,
              height: Bu
            }
          }, Au = await (uu._dlr?.x(pu, ru, Bu, Hu, du, Cu, ku, Su, eu)) ?? await eu(pu);
        return (0, Qu.d)(Au), Au
      } catch (ju) {
        throw Wu.texture?.destroy(), ju
      } finally {
        Tu?.close()
      }
    }
  },
  41259: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      generateMipmaps: () => xu,
      recordMipmaps: () => Su
    });
    var Eu = yu(41236),
      Ku = yu(41251),
      Qu = {
        magFilter: "linear",
        minFilter: "linear"
      };
    var mu = "@group(0)@binding(0)var t:texture_2d<f32>;@group(0)@binding(1)var s:sampler;struct V{@builtin(position)p:vec4f,@location(0)u:vec2f};@vertex fn vs(@builtin(vertex_index)i:u32)->V{let p=array<vec2f,3>(vec2f(-1,-1),vec2f(3,-1),vec2f(-1,3))[i];return V(vec4f(p,0,1),p*vec2f(.5,-.5)+.5);}@fragment fn fs(v:V)->@location(0)vec4f{return textureSample(t,s,v.u);}",
      Ju = null,
      Nu = null,
      Xu = null,
      Vu = null,
      ru = null;

    function Bu(uu) {
      const Ru = uu._device;
      Ru !== ru && (Ju?.clear(), Ju = null, Nu = null, Xu = null, Vu = null, ru = null, ru = Ru), Nu ??= Ru.createShaderModule({
        code: mu
      }), Xu ??= function(uu) {
        return (0, Ku.c)(uu, Qu)
      }(uu), Vu ??= Ru.createBindGroupLayout({
        entries: [{
          binding: 0,
          visibility: Eu.h.FRAGMENT,
          texture: {
            sampleType: "float"
          }
        }, {
          binding: 1,
          visibility: Eu.h.FRAGMENT,
          sampler: {}
        }]
      })
    }

    function xu(uu, Ru, yu) {
      const Eu = uu._device,
        Ku = Eu.createCommandEncoder();
      Su(uu, Ru, Ku, yu), Eu.queue.submit([Ku.finish()])
    }

    function Su(uu, Ru, yu, Eu) {
      if (Ru.mipLevelCount <= 1) return;
      const Ku = uu._device,
        Qu = function(uu, Ru) {
          const yu = uu._device;
          Bu(uu), Ju ??= new Map;
          let Eu = Ju.get(Ru);
          return Eu || (Eu = yu.createRenderPipeline({
            layout: yu.createPipelineLayout({
              bindGroupLayouts: [Vu]
            }),
            vertex: {
              module: Nu,
              entryPoint: "vs"
            },
            fragment: {
              module: Nu,
              entryPoint: "fs",
              targets: [{
                format: Ru
              }]
            },
            primitive: {
              topology: "triangle-list"
            }
          }), Ju.set(Ru, Eu)), Eu
        }(uu, Ru.format),
        mu = null != Eu ? {
          dimension: "2d",
          baseArrayLayer: Eu,
          arrayLayerCount: 1
        } : {};
      for (let Ju = 1; Ju < Ru.mipLevelCount; Ju++) {
        const uu = Ru.createView({
            baseMipLevel: Ju - 1,
            mipLevelCount: 1,
            ...mu
          }),
          Eu = Ru.createView({
            baseMipLevel: Ju,
            mipLevelCount: 1,
            ...mu
          }),
          Nu = Ku.createBindGroup({
            layout: Vu,
            entries: [{
              binding: 0,
              resource: uu
            }, {
              binding: 1,
              resource: Xu
            }]
          }),
          ru = yu.beginRenderPass({
            colorAttachments: [{
              view: Eu,
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
        ru.setPipeline(Qu), ru.setBindGroup(0, Nu), ru.draw(3), ru.end()
      }
    }
  },
  41268: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      return Math.floor(Math.log2(Math.max(uu, Ru))) + 1
    }
    yu.d(Ru, {
      e: () => Eu
    })
  },
  41222: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Xu,
      g: () => Vu
    });
    var Eu = yu(41230),
      Ku = yu(41236),
      Qu = yu(41245),
      mu = yu(41251),
      Ju = yu(41259),
      Nu = yu(41268);

    function Xu(uu, Ru, yu, Ju) {
      let Xu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (Ru < 1 || yu < 1 || Ju < 1) && (0, Eu.e)(722, Ru, yu, Ju);
      const Vu = uu._device,
        ru = Xu.mipMaps ?? !0,
        Bu = Xu.srgb ? "rgba8unorm-srgb" : "rgba8unorm",
        xu = Vu.createTexture({
          size: {
            width: Ru,
            height: yu,
            depthOrArrayLayers: Ju
          },
          dimension: "2d",
          format: Bu,
          mipLevelCount: ru ? (0, Nu.e)(Ru, yu) : 1,
          usage: Ku.l.TEXTURE_BINDING | Ku.l.COPY_DST | Ku.l.RENDER_ATTACHMENT
        }),
        Su = (0, mu.c)(uu, {
          addressModeU: Xu.addressModeU ?? "repeat",
          addressModeV: Xu.addressModeV ?? "repeat",
          minFilter: Xu.minFilter ?? "linear",
          magFilter: Xu.magFilter ?? "linear",
          mipmapFilter: ru ? "linear" : "nearest"
        }),
        pu = {
          texture: xu,
          view: xu.createView({
            dimension: "2d-array"
          }),
          sampler: Su,
          width: Ru,
          height: yu,
          layers: Ju
        };
      return (0, Qu.d)(pu), pu
    }

    function Vu(uu, Ru, yu, Ku) {
      let Qu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
      (yu < 0 || yu >= Ru.layers || (0 | yu) !== yu) && (0, Eu.e)(723, Ru.layers, yu);
      const mu = Qu.invertY ?? !0,
        Nu = Qu.premultiplyAlpha ?? !1;
      uu._device.queue.copyExternalImageToTexture({
        source: Ku,
        flipY: mu
      }, {
        texture: Ru.texture,
        origin: [0, 0, yu],
        premultipliedAlpha: Nu
      }, [Ru.width, Ru.height, 1]), Ru.texture.mipLevelCount > 1 && (0, Ju.generateMipmaps)(uu, Ru.texture, yu)
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);